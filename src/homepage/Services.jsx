function Services() {
  return (
    <section className="min-w-full place-self-center flex flex-col items-center bg-black p-6">
      <h4 className='text-6xl text-gray-100'>SERVICES</h4>
      <nav 
        id='service-cards' 
        className="p-4 flex flex-row flex-wrap space-between justify-center lg:max-w-3xl 2xl:max-w-full"
      >
        <article className="p-4 m-4 flex items-center border-8 rounded-sm border-red-800">
          <a className="m-2 flex-grow flex flex-col items-center" href="#texturing">
            <img src="google.com" alt="" width="250px" height="230px"/>
            <h5 className="text-red-800 text-3xl flex-end">TEXTURING</h5>
          </a>
        </article>
        <article className="p-4 m-4 flex items-center border-8 rounded-sm border-red-800">
          <a className="m-2 flex-grow flex flex-col items-center" href="#engraving">
            <img src="google.com" alt="" width="250px" height="230px"/>
            <h5 className="text-red-800 text-3xl flex-end">ENGRAVING</h5>
          </a>
        </article>
        <article className="p-4 m-4 flex items-center border-8 rounded-sm border-red-800">
          <a className="m-2 flex-grow flex flex-col items-center" href="#machining">
            <img src="google.com" alt="" width="250px" height="230px"/>
            <h5 className="text-red-800 text-3xl flex-end">MACHINING</h5>
          </a>
        </article>
        <article className="p-4 m-4 flex items-center border-8 rounded-sm border-red-800">
          <a className="m-2 flex-grow flex flex-col items-center" href="#specialty">
            <img src="google.com" alt="" width="250px" height="230px"/>
            <h5 className="text-red-800 text-3xl flex-end">SPECIALTY</h5>
          </a>
        </article>
      </nav>
      
    </section>
  );
}

export default Services;
