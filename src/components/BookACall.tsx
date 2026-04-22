const BookaCall = () => {
  return (
    <section
      id="bookacall"
      className="relative py-32 px-6 z-10 w-full max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="container">
        <div className="">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Book a Free Strategy Call
          </h2>
        </div>
        <div className="my-8">
          <div className="flex justify-center">
            <iframe
              src="https://calendly.com/rkthetechist/30min"
              width="100%"
              height="800"
              style={{ overflow: "hidden" }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookaCall;
