export default function Projects() {
  return (
    <div className="max-w-full flex-1 flex flex-col items-center justify-between pb-48 px-4 lg:px-96">
      <section id="projects" className="w-full mb-16 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Projects
        </h2>

        <h3 className="text-md mb-4 text-white">
          Do check out here or Github for updates!
        </h3>

        <div className="flex flex-col lg:flex-row gap-2 pt-3">
          image goes here
          <div className="flex-1 lg:pl-4 lg:px-72">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Telegram Bot: BidetBuddy
            </h2>
            <p className="leading-relaxed text-slate-300 pb-8">
              A Telegram bot that allows users to locate the nearest bidet-equipped toilets in Singapore. Powered by data from <a href="https://linktr.ee/toiletswithbidetsg" target="_blank" className="text-blue-400">toiletswithbidetsg</a> and community contributors. Do check them out!
            </p>
            <p className="pb-8 leading-relaxed text-blue-400"><a href="/">Link to bot</a></p>
            <p className="pb-10 leading-relaxed text-blue-400"><a href="/">Link to github</a></p>
            <div className="flex flex-row gap-3 pt-3">
              <p>Python</p>
              <p>|</p>
              <p>FastAPI</p>
              <p>|</p>
              <p>Telegram API</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
