import PaperBoard from "@/components/PaperBoard";
import Link from "next/link";

export default function Publications() {
  const publications = [
    {
      title: "Berkeley's 25-cent disposable cup fee encourages reusables, faces compliance challenges",
      url: "https://www.dailycal.org/news/city/local-businesses/berkeley-s-25-cent-disposable-cup-fee-encourages-reusables-faces-compliance-challenges/article_5913a2f3-dda1-4fa5-a63a-ed10e6e22db6.html"
    },
    {
      title: "'Help deliver dreams': Council member proposes Small Business Support Act",
      url: "https://www.dailycal.org/news/city/city-government/help-deliver-dreams-council-member-proposes-small-business-support-act/article_c12748ea-0484-11f0-90ca-cb7582a56943.html"
    },
    {
      title: "Bay Area students walk out at UC Berkeley, opposing pro-Palestine student activist arrest",
      url: "https://www.dailycal.org/news/campus/bay-area-students-walk-out-at-uc-berkeley-opposing-pro-palestine-student-activist-arrest/article_715126a6-fefd-11ef-84ea-3bdbf2999654.html"
    },
    {
      title: "Bakar Labs set to launch largest climate tech incubator",
      url: "https://www.dailycal.org/news/campus/research-and-ideas/bakar-labs-set-to-launch-largest-climate-tech-incubator/article_9179229c-f40a-11ef-8104-73cc90606097.html"
    },
    {
      title: "Campus researchers replicate disruptive Chinese AI for $30",
      url: "https://www.dailycal.org/news/campus/research-and-ideas/campus-researchers-replicate-disruptive-chinese-ai-for-30/article_a1cc5cd0-dee4-11ef-b8ca-171526dfb895.html"
    },
    {
      title: "Curiosity Shop's sister store ThriftyCat opens on MLK Way",
      url: "https://www.dailycal.org/users/profile/kira%20pan/"
    },
    {
      title: "'Come and eat': Roast & Toast cafe launches on Shattuck",
      url: "https://www.dailycal.org/news/city/local-businesses/come-and-eat-roast-toast-cafe-launches-on-shattuck/article_09a726c4-ce45-11ef-8328-cb9a7f8a8f52.html"
    },
    {
      title: "Campus study finds political scientists have pessimistic outlooks on democracy",
      url: "https://www.dailycal.org/news/campus/research-and-ideas/campus-study-finds-political-scientists-have-pessimistic-outlooks-on-democracy/article_53d2c47e-bdd3-11ef-9e5a-43a578b26f5c.html"
    },
    {
      title: "Campus researchers discover Jupiter's dark ovals explained by 'magnetic tornadoes'",
      url: "https://www.dailycal.org/news/campus/research-and-ideas/campus-researchers-discover-jupiter-s-dark-ovals-explained-by-magnetic-tornadoes/article_9fedf17a-ad5d-11ef-95f8-b76ee28129b7.html"
    },
    {
      title: "Students 'cut the slack' as UC service and patient care workers strike",
      url: "https://www.dailycal.org/news/city/students-cut-the-slack-as-uc-service-and-patient-care-workers-strike/article_554d7c6a-a7ec-11ef-8f76-27cfe0b7ca4e.html"
    },
    {
      title: "UC files unfair practice charge and injunction against AFSCME, strike will continue as planned",
      url: "https://www.dailycal.org/news/uc/uc-files-unfair-practice-charge-and-injunction-against-afscme-strike-will-continue-as-planned/article_eca2590a-a701-11ef-a419-537048e9d140.html"
    },
    {
      title: "Regents discuss diversity and hiring practices at second day of UCSF meetings",
      url: "https://www.dailycal.org/news/campus/administration/regents-discuss-diversity-and-hiring-practices-at-second-day-of-ucsf-meetings/article_b211e236-a276-11ef-9ca2-2fe7f2187bab.html"
    },
    {
      title: "UC Service and Patient Care workers announce strike",
      url: "https://www.dailycal.org/news/uc/uc-service-and-patient-care-workers-announce-strike/article_1c4b5646-a182-11ef-9164-2f74bf25d582.html"
    },
    {
      title: "Campus improves Middle Class Scholarship disbursement",
      url: "https://www.dailycal.org/news/campus/campus-improves-middle-class-scholarship-disbursement/article_26827bf2-9c01-11ef-8ba4-8b528d5413cf.html"
    },
    {
      title: "'A new life': Students adorn apartments with furniture found on the street",
      url: "https://www.dailycal.org/news/city/a-new-life-students-adorn-apartments-with-furniture-found-on-the-street/article_df4b702a-9676-11ef-9f06-af0e7449507a.html"
    },
    {
      title: "Campus researcher uses fungi to enhance food sustainability",
      url: "https://www.dailycal.org/news/campus/research-and-ideas/campus-researcher-uses-fungi-to-enhance-food-sustainability/article_f4947fec-90fb-11ef-b5d9-438e7c5552ec.html"
    },
    {
      title: "Berkeley Population Center holds panel on population issues and 2024 election",
      url: "https://www.dailycal.org/news/city/elections/elections-2024/berkeley-population-center-holds-panel-on-population-issues-and-2024-election/article_8ea34ee8-8c50-11ef-bbdf-ebc18ed9243a.html"
    }
  ];

  return (
    <PaperBoard>
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-block mb-8 bg-white border-2 border-ink rounded-sm px-2 py-1.5 md:px-3 md:py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] hover:shadow-[6px_6px_0px_0px_rgba(21,21,21,0.2)] active:shadow-[2px_2px_0px_0px_rgba(21,21,21,0.15)] transition-all cursor-pointer hover:bg-[#bf6463] group"
        >
          <span className="text-sm md:text-base font-bold text-ink group-hover:text-white transition-colors">← Back</span>
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-bold text-ink mb-8" style={{ transform: 'rotate(-1deg)' }}>
          Publications
        </h1>

        <div className="bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] mb-8">
          <p className="text-xl md:text-2xl text-ink leading-relaxed mb-4 font-handwriting">
            A collection of articles I&apos;ve written for The Daily Californian, UC Berkeley&apos;s official paper of record, covering campus news, local business, research, and community events.
          </p>
          <p className="text-xl md:text-2xl text-ink leading-relaxed font-handwriting">
            At The Daily Californian, I&apos;ve served as a General Assignment News Reporter, Business and Economy Beat Reporter, Deputy News Editor to now being a Data Reporter.
          </p>
        </div>

        <div className="space-y-4">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white border-2 border-ink p-4 md:p-6 shadow-[2px_2px_0px_0px_rgba(21,21,21,0.1)]"
              style={{ transform: index % 2 === 0 ? 'rotate(-0.3deg)' : 'rotate(0.3deg)' }}
            >
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl text-ink hover:text-deep-olive underline"
              >
                {pub.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </PaperBoard>
  );
}
