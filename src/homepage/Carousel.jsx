import React from 'react';

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

class Carousel extends React.Component {
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
        <div id='carousel' className="bg-black h-96 w-96 flex space-between justify-center items-center">
            <Arrow
                direction="left"
                clickFunction={ this.previousSlide }
                glyph="&#9664;" />
            <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
            <Arrow
                direction="right"
                clickFunction={ this.nextSlide }
                glyph="&#9654;" />
            
        </div>
      );
    }
  }

const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className="image-slide h-96 w-96" style={styles}></div>
    );
}

const Arrow = ({ direction, clickFunction, glyph}) => {
    return (
    <div
        className="slide-arrow cursor-pointer"
        onClick={ clickFunction }
        >
            { glyph }
    </div>
    )
}

export default Carousel;
