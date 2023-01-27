import React from 'react';
import NextImage from 'next/image'
import CheckMark from "../../common/CheckMark";

interface ImageProps{
    src: string,
    alt: string,
    selected?: boolean,
    onClick?(): void
}
function Image({src,selected,onClick, alt}:ImageProps) {
 return (
  <div onClick={onClick} className='relative rounded overflow-hidden cursor-pointer'>
      <NextImage src={src} alt={alt} width={200} style={{objectFit:'cover',width:200, height: 200}}
               height={200} className='bg-secondary-light hover:scale-110 transition'/>

      <div className='absolute top-2 left-2'>
          <CheckMark visible={selected || false} />
      </div>
  </div>
 );
};

export default Image;