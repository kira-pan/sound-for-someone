import type { Metadata } from "next";
import "./globals.css";
import { ArduinoSerialProvider } from "@/components/ArduinoSerialProvider";

export const metadata: Metadata = {
  title: "Kira Pan",
  description: "Data Analytics • Marketing • UI/UX • Design",
  icons: {
    icon: [
      { url: "/images/favicon-k.png", type: "image/png" },
    ],
    shortcut: "/images/favicon-k.png",
    apple: "/images/favicon-k.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ArduinoSerialProvider>{children}</ArduinoSerialProvider>
      </body>
    </html>
  );
}
