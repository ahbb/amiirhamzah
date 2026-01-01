import { siGithub } from 'simple-icons';
import Image from "next/image";

export default function Projects() {
  return (
    <div className="max-w-full flex-1 flex flex-col items-center justify-between pb-48 px-4 lg:px-96">
      <section id="projects" className="w-full mb-16 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Projects
        </h2>

        <h3 className="text-md mb-4 text-white">
          Do check out here or Github for updates about my ongoing projects!
        </h3>

        <div className="flex flex-col lg:flex-row gap-2 pt-3">
          <Image
            src="/bidetbuddy.png"
            alt="BidetBuddy Telegram Bot Preview"
            width={800}
            height={800}
            className="rounded-lg"
          />

          <div className="flex-1 lg:pl-4 lg:px-72">
            <h2 className="text-3xl font-bold mb-4 text-violet-400">
              Telegram Bot: BidetBuddy
            </h2>
            <p className="leading-relaxed text-slate-300 pb-8">
              A Telegram bot that allows users to locate the nearest bidet-equipped toilets in Singapore. Powered by data from <a href="https://linktr.ee/toiletswithbidetsg" target="_blank" className="text-blue-400">toiletswithbidetsg</a> and community contributors.
            </p>
            <p className="text-xl text-blue-400 font-bold pb-8"><a href="https://t.me/BidetBuddyBot" target="_blank">Try it out here</a> <span className="text-slate-300"> or search it up on Telegram @BidetBuddyBot.</span></p>
            
            <a href="https://github.com/ahbb/ToBi" target="_blank">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d={siGithub.path} />
              </svg>
            </a>

            <div className="flex flex-row gap-3 pt-10 font-mono">
              <p>Python</p>
              <p>|</p>
              <p>FastAPI</p>
              <p>|</p>
              <p>Telegram Bot API</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
