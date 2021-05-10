import Carousel from './Carousel';

function Whatwedo() {
    return (
        <div id="what-we-do" className="bg-black text-gray-100">
            <h3 className="text-2xl text-center p-6">WHAT WE DO</h3>
            <div className="flex flex-col justify-center items-center">
                <Carousel></Carousel>
                <h4 className="text-lg p-3 m-3 max-w-2xl text-justify">
                As an active member of the tooling industry and a partner to some of the largest tooling sources in North
                America, we offer full-service engraving, polishing, and texturing for the most difficult projects in a
                multitude of industries.
                </h4>
            </div>
        </div>
    );
}


export default Whatwedo;
