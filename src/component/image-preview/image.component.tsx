import React from "react";

import { ImageContainer } from './image.style';

interface IImage {
    src: string,
    alt: string
}

const Image = ({src, alt} : IImage)=> {
    return(
        <ImageContainer src={src} alt={alt }/>
    )
}

export default Image;