export default function Contact() {
  return (
    <div className="mx-auto flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12 xl:px-24 pb-24 sm:pb-32 lg:pb-40">
      <section id="contact" className="w-full max-w-2xl flex flex-col items-center mb-16 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-4 text-white">Contact</h2>
        <h3 className="text-lg mb-4 pb-4 text-white ">
          I am always looking forward to connecting with like-minded inviduals.
          If you feel I would be a great addition to your team, or if you just
          want to say hi, please feel free to drop me an email!
        </h3>
        <a
          href="mailto:amiir9955@gmail.com" target="_blank"
          className="px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition duration-300 font-semibold justify-center"
        >
          Email
        </a>
      </section>
    </div>
  );
}
