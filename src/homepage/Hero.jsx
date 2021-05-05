function Hero() {
    return (
      <section className="hero">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl whitespace-nowrap m-8">CRAFTSMEN DEDICATED TO DETAIL</h1>
          <div id='greeting-card' className="p-2 bg-gray-300 bg-opacity-50 max-w-lg rounded-lg shadow-lg">
            <h2 className="text-1">
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
  