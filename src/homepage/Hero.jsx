import bgImage from '../assets/images/home-hero-bg.png';

function Hero() {
  const heroImage = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const bgGradient = {
    background: 'linear-gradient(to bottom, #ffffff00 85%, #000000)'
  }

  const textShadow = {
    textShadow: '5px 5px 3px #0000003a'
  }

  return (
    <section id="hero" className="" style={heroImage}>
      <div className="flex flex-col items-center" style={bgGradient}>
        <div className="h-48"></div>
        <h1 className="text-xl sm:text-2xl md:text-6xl whitespace-nowrap p-8" style={textShadow}>CRAFTSMEN DEDICATED TO DETAIL</h1>
        <div id='greeting-card' className="p-2 px-3 m-8 mb-16 bg-gray-300 bg-opacity-30 rounded-lg shadow-md">
          <h2 className="text-md text-justify max-w-lg">
          Since 1922, Wisconsin Engraving Company is
          constantly exploring new techniques and investing in 
          research and development to give our customers the
          competitive edge.
          </h2>      
        </div>
        <div className="h-48"></div>
      </div>
    </section>
  );
}

export default Hero;
  