function Header() {
    return (
      <div className="header">
        <img
          alt='wisconsin engraving logo'
          className="weco-logo"
          src="https://anima-uploads.s3.amazonaws.com/projects/608b046520169a1bb3180a69/releases/608b0cdfa6b68b267305c868/img/weco-logo-1@1x.png"
        />
        <nav className="nav">
          <p className="text-xl">Services</p>
          <p className="text-xl">About Us</p>
          <p className="text-xl">Contact</p>
        </nav>
      </div>
    );
  }
  
export default Header;
  