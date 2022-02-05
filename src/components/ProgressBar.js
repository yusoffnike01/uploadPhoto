import { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import {motion} from 'framer-motion';

const ProgressBar=({file, setUpload})=>{
  const {url, progress}= useStorage(file);

  useEffect(()=>{
    if(url){
      setUpload(null);
    }
  },[url,setUpload])

return(

<motion.div className="progress-bar" initial={{width: 0}} animate={{width: progress+'%'}}></motion.div>)
}

export default ProgressBar;