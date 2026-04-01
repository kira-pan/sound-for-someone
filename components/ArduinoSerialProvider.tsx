"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import type { ArduinoCommand } from "@/lib/arduinoCommands";
import { pathnameToCommand } from "@/lib/arduinoCommands";

type ArduinoSerialContextValue = {
  supported: boolean;
  status: string;
  isConnected: boolean;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  sendCommand: (cmd: ArduinoCommand) => Promise<void>;
};

const ArduinoSerialContext = createContext<ArduinoSerialContextValue | null>(
  null
);

export function useArduinoSerial(): ArduinoSerialContextValue {
  const ctx = useContext(ArduinoSerialContext);
  if (!ctx) {
    throw new Error("useArduinoSerial must be used within ArduinoSerialProvider");
  }
  return ctx;
}

const BAUD = 9600;

/** Mirrors `basePath` from next.config (set via BASE_PATH when building for GitHub Pages). */
const SITE_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function ArduinoSerialProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [supported, setSupported] = useState(false);
  const [status, setStatus] = useState("Not connected");
  const [isConnected, setIsConnected] = useState(false);
  const portRef = useRef<SerialPort | null>(null);
  const writerRef = useRef<WritableStreamDefaultWriter<Uint8Array> | null>(
    null
  );

  useEffect(() => {
    setSupported(typeof navigator !== "undefined" && "serial" in navigator);
  }, []);

  const sendCommand = useCallback(async (cmd: ArduinoCommand) => {
    const writer = writerRef.current;
    if (!writer) return;
    try {
      const line = `${cmd}\n`;
      await writer.write(new TextEncoder().encode(line));
      setStatus(`Sent ${cmd}`);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      setStatus(`Send error: ${msg}`);
    }
  }, []);

  useEffect(() => {
    if (!isConnected) return;
    const cmd = pathnameToCommand(pathname, SITE_BASE_PATH);
    if (cmd) void sendCommand(cmd);
  }, [pathname, isConnected, sendCommand]);

  const disconnect = useCallback(async () => {
    try {
      if (writerRef.current) {
        try {
          writerRef.current.releaseLock();
        } catch {
          /* ignore */
        }
        writerRef.current = null;
      }
      if (portRef.current) {
        await portRef.current.close();
        portRef.current = null;
      }
      setIsConnected(false);
      setStatus("Not connected");
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      setStatus(`Disconnect error: ${msg}`);
    }
  }, []);

  const connect = useCallback(async () => {
    if (!navigator.serial) {
      setStatus("Web Serial not supported (use Chrome or Edge)");
      return;
    }
    try {
      const port = await navigator.serial.requestPort();
      await port.open({ baudRate: BAUD });
      const writable = port.writable;
      if (!writable) {
        setStatus("Port has no writable stream");
        return;
      }
      portRef.current = port;
      writerRef.current = writable.getWriter();
      setIsConnected(true);
      setStatus("Connected");
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      if (msg.includes("No port selected") || msg.includes("cancel")) {
        setStatus("Not connected");
        return;
      }
      setStatus(`Error: ${msg}`);
    }
  }, []);

  const value: ArduinoSerialContextValue = {
    supported,
    status,
    isConnected,
    connect,
    disconnect,
    sendCommand,
  };

  return (
    <ArduinoSerialContext.Provider value={value}>
      {children}
      <div
        className="fixed bottom-4 right-4 z-[200] flex max-w-[min(100vw-2rem,20rem)] flex-col gap-2 rounded-sm border-2 border-ink bg-paper p-3 text-xs shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] md:text-sm"
        aria-label="Arduino Web Serial"
      >
        <p className="font-handwriting text-ink leading-snug">{status}</p>
        {!supported ? (
          <p className="text-olive-grey">
            Web Serial needs Chrome or Edge (desktop). Safari/Firefox cannot use
            USB serial from the browser.
          </p>
        ) : (
          <button
            type="button"
            onClick={() => void (isConnected ? disconnect() : connect())}
            className="border-2 border-ink bg-white px-3 py-2 font-bold text-ink shadow-[2px_2px_0px_0px_rgba(21,21,21,0.12)] transition-colors hover:bg-[#bf6463] hover:text-white"
          >
            {isConnected ? "Disconnect" : "Connect Arduino"}
          </button>
        )}
      </div>
    </ArduinoSerialContext.Provider>
  );
}
