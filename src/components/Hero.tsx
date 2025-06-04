import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-montserrat text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          АВТОРСКИЕ ПЕСНИ
        </h1>
        <p className="font-open-sans text-xl md:text-2xl text-gray-300 mb-8">
          Мелодии, рождённые в душе • Слова, написанные сердцем
        </p>
        <div className="flex items-center justify-center space-x-2 text-purple-300">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
          <span className="font-open-sans text-sm tracking-wider">
            ОРИГИНАЛЬНАЯ МУЗЫКА
          </span>
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
