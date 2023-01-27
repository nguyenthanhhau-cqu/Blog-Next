import React from 'react';
import {BsCheckLg} from "react-icons/all";
interface CheckMarkProps{
    visible: boolean
}
function CheckMark({visible}: CheckMarkProps) {
    if(!visible) return null
 return (
  <div className='bg-action p-2 text-primary rounded-full backdrop-blur-sm '>
   <BsCheckLg />
  </div>
 );
};

export default CheckMark;