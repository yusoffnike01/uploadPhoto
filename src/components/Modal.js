import React from 'react';
import {motion} from 'framer-motion';

const Modal=({seletedImg, setSelectedImg})=>{
  const handlerClick=(e)=>{
    if(e.target.classList.contains('backdrop'))
    {
      setSelectedImg(null);
    }
    
  }
  return (<motion.div className="backdrop" initial={{opacity: 0}} animate={{opacity:1}} onClick={handlerClick}> <motion.img src={seletedImg} initial={{y: '-100vh'}} animate={{y: 0}} alt= "enlarged pic"/></motion.div>)
}
export default Modal;