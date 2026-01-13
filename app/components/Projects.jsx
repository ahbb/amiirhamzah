import { siGithub } from "simple-icons";
import Image from "next/image";
import { FaYoutube, FaTelegramPlane } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="mx-auto flex-1 flex flex-col items-center justify-between px-4 sm:px-6 lg:px-12 xl:px-24 pb-24 sm:pb-32 lg:pb-40">
      <section
        id="projects"
        className="w-full max-w-7xl flex flex-col mb-16 scroll-mt-20"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">Projects</h2>

        {/* <h3 className="text-md mb-4 text-white">
          Do check out here or Github for updates about my ongoing projects!
        </h3> */}

        {/* BidetBuddyBot */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 w-full lg:flex-1">
          <div className="w-full lg:flex-1">
            <Image
              src="/bidetbuddy.png"
              alt="BidetBuddy Telegram Bot Preview"
              width={800}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Project info */}
          <div className="flex-1 lg:pl-8 xl:pl-12">
            <h2 className="text-3xl font-bold mb-4 text-violet-400">
              Telegram Bot: BidetBuddy
            </h2>
            <p className=" text-slate-300 pb-4">
              A Telegram bot that allows users to locate the nearest
              bidet-equipped toilets in Singapore. Powered by data from{" "}
              <a
                href="https://linktr.ee/toiletswithbidetsg"
                target="_blank"
                className="text-blue-400"
              >
                toiletswithbidetsg
              </a>{" "}
              and community contributors.
            </p>

            <p className="text-blue-400 pb-1 font-bold">Try it out!</p>
            <a href="https://t.me/BidetBuddyBot" target="_blank">
              <FaTelegramPlane className="w-6 h-6" />
            </a>

            <p className="text-slate-300 pb-4">
              or search it up on Telegram @BidetBuddyBot
            </p>

            <div className="flex flex-row gap-4">
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

              <a
                href="https://www.youtube.com/shorts/YmVhxuHcuZc"
                target="_blank"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>

            <div className="flex flex-row gap-3 pt-6 font-mono">
              <p>Python</p>
              <p>|</p>
              <p>FastAPI</p>
              <p>|</p>
              <p>Telegram Bot API</p>
              <p>|</p>
              <p>Render</p>
            </div>
          </div>
        </div>



        {/* Bus Planner */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 w-full lg:flex-1 pt-40">

          {/* Project info */}
          <div className="w-full lg:flex-1">
            <h2 className="text-3xl font-bold mb-4 text-violet-400">
              Bus Planner
            </h2>
            <p className=" text-slate-300 pb-4">
              An app that allows users to select several bus services from different bus stops and view their estimated arrival timings in sequence. I&apos;m initially building this for personal use and may add features over time. Bus arrival timings are are retrieved via <a href="https://datamall.lta.gov.sg/content/datamall/en/dynamic-data.html" target="_blank" className="text-blue-400">LTA APIs.</a>
            </p>

            {/* Links to github and youtube */}
            <div className="flex flex-row gap-4">
              <a href="https://github.com/ahbb/sg-bus-planner" target="_blank">
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

              {/* TODO: Youtube link here */}

            </div>

            <div className="flex flex-row gap-3 pt-6 font-mono">
              <p>React Native</p>
              <p>|</p>
              <p>FastAPI</p>
              <p>|</p>
              <p>LTA API</p>
              <p>|</p>
              <p>Render</p>
              <p>|</p>
              <p>Expo</p>
            </div>

          </div>
          
          <div className="flex-1 lg:pl-8 xl:pl-12">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 w-full lg:flex-1">
              {/* App image */}
              <Image
                src="/bus-planner1.jpg"
                alt="Bus Planner 1"
                width={250}
                height={250}
                className="rounded-lg"
              />
              <Image
                src="/bus-planner2.jpg"
                alt="Bus Planner 1"
                width={250}
                height={250}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
