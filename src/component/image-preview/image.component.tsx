import React from "react";

import './image.style.scss';

interface IImage {
    src: string,
    alt: string
}

const Image = ({src, alt} : IImage)=> {
    return(
        <img src={src} alt={alt }/>
    )
}

export default Image;