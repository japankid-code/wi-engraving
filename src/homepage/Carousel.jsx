import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';
import { mdiChevronLeft } from '@mdi/js';

const imgUrls = [
    'https://anima-uploads.s3.amazonaws.com/projects/608b046520169a1bb3180a69/releases/608b0cdfa6b68b267305c868/img/acid-wash-2@1x.png',
    'https://anima-uploads.s3.amazonaws.com/projects/608b046520169a1bb3180a69/releases/608b0cdfa6b68b267305c868/img/dsc-0843@1x.png',
    'https://anima-uploads.s3.amazonaws.com/projects/608b046520169a1bb3180a69/releases/608b0cdfa6b68b267305c868/img/dwyane-2@1x.png',
    'https://anima-uploads.s3.amazonaws.com/projects/608b046520169a1bb3180a69/releases/608b0cdfa6b68b267305c868/img/cadillac-2@1x.png',
    'https://anima-uploads.s3.amazonaws.com/projects/608b046520169a1bb3180a69/releases/608b0cdfa6b68b267305c868/img/18964-timelapse-moment@1x.png',
    'https://anima-uploads.s3.amazonaws.com/projects/608b046520169a1bb3180a69/releases/608b0cdfa6b68b267305c868/img/motts@1x.png',
    'https://anima-uploads.s3.amazonaws.com/projects/608b046520169a1bb3180a69/releases/608b0cdfa6b68b267305c868/img/cnc-coolant@1x.png',
    'https://anima-uploads.s3.amazonaws.com/projects/608b046520169a1bb3180a69/releases/608b0cdfa6b68b267305c868/img/electrode-1@1x.png',
    'https://anima-uploads.s3.amazonaws.com/projects/608b046520169a1bb3180a69/releases/608b0cdfa6b68b267305c868/img/mold-mask-3@1x.png'
]

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 4,
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render () {
    return (
      <div 
        id='carousel' 
        className="relative h-96 max-w-2xl flex space-between 
                   items-center min-w-min overflow-hidden"
        >
          <ArrowLeft
            direction="left"
            clickFunction={ this.previousSlide }
            glyph="&#9664;" />
          <div class='absolute bg-gray-200 w-96 h-96 right-0 z-0' style={ bgGradientLeft }></div>
          <ImageSlide url={ imgUrls[this.state.currentImageIndex - 1] } />
          <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
          <ImageSlide url={ imgUrls[this.state.currentImageIndex + 1] } />
          <div class='absolute bg-gray-200 w-96 h-96 left-0 z-0' style={ bgGradientRight }></div>
          <ArrowRight
            className="mdi-chevron-left"
            direction="right"
            clickFunction={ this.nextSlide }
            glyph="&#9654;" />
      </div>
    );
  }
}

const bgGradientRight = {
  background: 'linear-gradient(to left, #ffffff00 10%, #000000 30%)',
  zIndex: 100
}

const bgGradientLeft = {
  background: 'linear-gradient(to right, #ffffff00 10%, #000000 30%)',
  zIndex: 100
}

const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className="image-slide h-96 w-96  max-w-sm m-4" style={styles}></div>
    );
}

class ChevronRight extends Component {
  render() {
    return (
      <Icon path={ mdiChevronRight }
        className="z-50 bg-blue-600 rounded-full bg-opacity-90 mr-4 border-2 border-gray-800"
        size={2}
        color="red" />
    )
  }
}

class ChevronLeft extends Component {
  render() {
    return (
      <Icon path={ mdiChevronLeft }
        className="z-50 bg-blue-600 rounded-full bg-opacity-90 ml-4 border-2 border-gray-800"
        size={2}
        color="red" />
    )
  }
}

const ArrowRight = ({ direction, clickFunction, glyph}) => {
    return (
    <div
      className="slide-arrow cursor-pointer absolute right-96 z-40"
      onClick={ clickFunction }
      >
        <ChevronRight />
    </div>
    )
}

const ArrowLeft = ({ direction, clickFunction, glyph}) => {
  return (
  <div
    className="slide-arrow cursor-pointer absolute left-96 z-40"
    onClick={ clickFunction }
    >
      <ChevronLeft />
  </div>
  )
}

export default Carousel;
