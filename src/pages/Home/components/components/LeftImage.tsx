// import React from 'react';
import { LeftImage as L_Image } from '../../../../assets/images';

export default function LeftImage() {
  return (
    <div className='leftImage'>
        <img className='w-[700px] aspect-square' src={L_Image} alt="" />
    </div>
  )
}