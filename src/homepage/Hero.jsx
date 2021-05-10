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

  return (
    <section id="hero" className="" style={heroImage}>
      <div className="flex flex-col items-center" style={bgGradient}>
        <h1 className="text-xl sm:text-3xl md:text-4xl whitespace-nowrap p-8 pt-36">CRAFTSMEN DEDICATED TO DETAIL</h1>
        <div id='greeting-card' className="p-2 px-3 mx-8 mb-16 bg-gray-300 bg-opacity-30 rounded-lg shadow-md">
          <h2 className="text-md text-justify max-w-lg">
          Since 1922, Wisconsin Engraving Company is
          constantly exploring new techniques and investing in 
          research and development to give our customers the
          competitive edge.
          </h2>      
        </div>
      </div>
    </section>
  );
}

export default Hero;
  