import bgImage from '../assets/images/home-hero-bg.png';

function Hero() {
  const styles = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <section id="hero" className="" style={styles}>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl whitespace-nowrap p-8 pt-36">CRAFTSMEN DEDICATED TO DETAIL</h1>
        <div id='greeting-card' className="p-2 px-3 mb-8 bg-gray-300 bg-opacity-30 max-w-lg rounded-lg shadow-md">
          <h2 className="text-lg">
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
  