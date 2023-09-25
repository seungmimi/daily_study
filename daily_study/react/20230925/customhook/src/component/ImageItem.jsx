import React from 'react';

function ImageItem({imgData}) {
    return (
        <img src={imgData.download_url} alt='' style={{width: 400}}/>
    );
}

export default ImageItem;