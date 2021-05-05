import Carousel from './Carousel';

function Whatwedo() {
    return (
        <div id="what-we-do" className="bg-red-600">
            <div className="overlap-group">
                <h3 className="text-2xl text-center m-2">WHAT WE DO</h3>
            </div>
            <div className="overlap-group1">
                <div className="flex justify-center">
                    <Carousel></Carousel>
                </div>
                <div className="text-lg m-2">
                As an active member of the tooling industry and a partner to some of the largest tooling sources in North
                America, we offer full-service engraving, polishing, and texturing for the most difficult projects in a
                multitude of industries.
                </div>
            </div>
        </div>
    );
}


export default Whatwedo;
