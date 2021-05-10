function Dropdown() {
  return (
    <div id='nav-dropdown' className="absolute hidden text-gray-300 top-5 left bg-gray-900 bg-opacity-95 self-center rounded-lg p-1 m-1 group-hover:block">
      <a href='#texturing' 
        className="block text-sm p-0.5 hover:bg-gray-700 rounded w-auto text-center px-1 m-0.5"
        >
          Texturing
      </a>
      <a href='#machining' 
        className="block text-sm p-0.5 hover:bg-gray-700 rounded w-auto text-center px-1 m-0.5"
        >
          Machining
      </a>
      
      <a href='#engraving' 
        className="block text-sm p-0.5 hover:bg-gray-700 rounded w-auto text-center px-1 m-0.5"
        >
          Engraving
      </a>
      <a href='#specialty' 
        className="block text-sm p-0.5 hover:bg-gray-700 rounded w-auto text-center px-1 m-0.5"
        >
          Specialty
      </a>
    </div>
  )
}

function Header() {
  return (
    <header className="absolute flex justify-center bg-gray-800 bg-opacity-80 w-full min-w-full">
      <div className="grid grid-cols-2 p-2 items-center flex-grow max-w-7xl">
        <img
          className="h-16 sm:h-24 place-self-center"
          alt='wisconsin engraving logo'
          src="https://anima-uploads.s3.amazonaws.com/projects/608b046520169a1bb3180a69/releases/608b0cdfa6b68b267305c868/img/weco-logo-1@1x.png"
        />
        <nav className="relative place-self-center grid grid-cols-3 text-center items-center"> 
          <div id='hover-dropdown' className="group whitespace-nowrap">
            <a href='#services' className='text-sm sm:text-md lg:text-xl text-gray-300 inline sm:m-1 px-1.5 rounded-lg hover:bg-gray-800 hover:bg-opacity-50 cursor-pointer'>
                Services &darr;
            </a>
            <Dropdown></Dropdown>
          </div>
          <a href='#about' className="text-sm md:text-md lg:text-xl text-gray-300 inline sm:m-1 px-1.5 rounded-lg hover:bg-gray-800 hover:bg-opacity-50 cursor-pointer">
            About
          </a>
          <a href='#contact' className="text-sm md:text-md lg:text-xl text-gray-300 inline sm:m-1 px-1.5 rounded-lg hover:bg-gray-800 hover:bg-opacity-50 cursor-pointer">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
  }
  
export default Header;
