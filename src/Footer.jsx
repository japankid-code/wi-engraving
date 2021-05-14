import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="min-w-full h-36 bg-red-900 flex items-center justify-center">
        <div className="grid grid-cols-3">
          <a className='m-2' href="#contact">contact</a>
          <a className='m-2' href="#services">services</a>
          <a className='m-2' href="#about">about</a>
        </div>
      </footer>
    )
  }
}

export default Footer;
