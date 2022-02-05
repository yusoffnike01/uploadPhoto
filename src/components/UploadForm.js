import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm=()=>{
  const [upload, setUpload]=useState(null);
  const [error, setError]= useState('');
  const types= ['image/png', 'image/jpeg'];

  const changeHandler=(e)=>{
    const selected= e.target.files[0];
    if(selected&& types.includes(selected.type)){
      setUpload(selected);
      setError('');
    }
    else{
      console.log('here')
      setUpload(null);
      setError('Please select an Image file(png or jpeg)....')
    }
  }
  return(<form>
    <input type='file' onChange={changeHandler}/>
    <div className="output"> {error && <div className="error">{error}</div>}
    {upload && <div>{upload.name}</div>}
    {upload&& <ProgressBar file={upload} setUpload={setUpload}/>}
    </div>
  </form>)

}
export default UploadForm;