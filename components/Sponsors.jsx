import React from "react";

const Sponsors = () => {
  const sponsors = [
    "/images/sponsors/dimple.png",
    "/images/sponsors/echo.png",
    "/images/sponsors/gotket.png",
    "/images/sponsors/mitto.png",
    "/images/sponsors/planet.png",
    "/images/sponsors/ryoe.png",
    "/images/sponsors/unidef.png",
    "/images/sponsors/uplight.png",
  ];
  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-y border-purple-500/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-400 mb-12 text-sm uppercase tracking-wider">
          Trusted by Leading Blockchain Networks
        </p>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll space-x-16 py-2">
            {[...sponsors, ...sponsors].map((logo, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center justify-center p-6 px-10 bg-linear-to-r from-purple-500/5 to-cyan-500/5 border border-purple-500/20 rounded-lg hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={logo}
                  alt={`Sponsor ${i + 1}`}
                  className="h-10 w-auto filter hover:grayscale transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
