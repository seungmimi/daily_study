import React from 'react';
import ImageItem from './ImageItem';

function ImageList({imageList}) {
    return (
        <ul>
            {imageList.map((imgData,i) => {
                return(
                    <li key={i}>
                        <ImageItem imgData={imgData} />
                    </li>
                )
            })}
        </ul>

    );
}

export default ImageList;