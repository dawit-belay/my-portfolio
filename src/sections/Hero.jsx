const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 z-10 w-full h-full">
        <img src="/images/bg.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-20 md:py-24 pb-0 md:pb-2">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 lg:space-y-10">
          {/* Main Heading */}
          <div className="hero-text w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight sm:leading-tight md:leading-tight">
              Shaping Ideas into
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight sm:leading-tight md:leading-tight mt-2 md:mt-4">
              Real Projects that
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight sm:leading-tight md:leading-tight mt-2 md:mt-4">
              Deliver Results
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-white-50 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl lg:max-w-3xl mt-4 md:mt-6">
            Hi, I'm Dawit, a developer based in Ethiopia with a passion for code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
