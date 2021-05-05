function Header() {
    return (
      <header className="absolute top-0 w-full">
        <div className="grid grid-cols-12 p-2 items-center bg-gray-900 bg-opacity-80">
          <img
            className="h-24 col-start-1 col-span-6"
            alt='wisconsin engraving logo'
            src="https://anima-uploads.s3.amazonaws.com/projects/608b046520169a1bb3180a69/releases/608b0cdfa6b68b267305c868/img/weco-logo-1@1x.png"
          />
          <nav className="col-start-7 col-span-5 relative whitespace-nowrap"> 
            <div className="group inline">
              <a 
                href='#services' 
                className='text-md inline m-2 px-1.5 py-0.5 rounded-lg hover:bg-gray-800 hover:bg-opacity-50 cursor-pointer'
                >
                  Services &darr;
              </a>
              <div id='nav-dropdown' className="absolute hidden top-5 left bg-gray-200 self-center rounded-lg p-1 m-1 group-hover:block">
                <a href='#texturing' 
                  className="block text-sm p-0.5 hover:bg-gray-400 rounded w-auto text-center px-1 m-0.5"
                  >
                    Texturing
                </a>
                <a href='#machining' 
                  className="block text-sm p-0.5 hover:bg-gray-400 rounded w-auto text-center px-1 m-0.5"
                  >
                    Machining
                </a>
                
                <a href='#engraving' 
                  className="block text-sm p-0.5 hover:bg-gray-400 rounded w-auto text-center px-1 m-0.5"
                  >
                    Engraving
                </a>
                <a href='#specialty' 
                  className="block text-sm p-0.5 hover:bg-gray-400 rounded w-auto text-center px-1 m-0.5"
                  >
                    Specialty
                </a>
              </div>
            </div>
            <a href='#about' className="text-md inline m-2 px-1.5 py-0.5 rounded-lg hover:bg-gray-800 hover:bg-opacity-50 cursor-pointer">About</a>
            <a href='#contact' className="text-md inline m-2 px-1.5 py-0.5 rounded-lg hover:bg-gray-800 hover:bg-opacity-50 cursor-pointer">Contact</a>
          </nav>
        </div>
      </header>
    );
  }
  
export default Header;
  