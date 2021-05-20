const ImageSide = (imageList) => {

    const arrImageTag = []
    const arrSlideImage = []
    var i
    for (i = 0; i <= imageList.length; i++) {
        const imageID = "slide_" + i
        arrImageTag.push(<img
            className="w-full h-1/2 object-cover bg-gray-300"
            src={imageList[i]}
            id={imageID} />)

        arrSlideImage.push(<a href={"#" + imageID} className="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>)
    }



    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <div className="swiper flex overflow-x-scroll w-1/2">
                    {arrImageTag}
                </div>
            </div>
            <div className="flex mt-4">
                {arrSlideImage}
                {/* <a href="#slide1" className="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>
                <a href="#slide2" className="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>
                <a href="#slide3" className="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a> */}
            </div>
        </div>
    )
}

export { ImageSide }