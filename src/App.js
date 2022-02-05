import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const [seletedImg, setSelectedImg]=useState();
  return (
    <div className="App">
     <Title/>
     <UploadForm/>
     <ImageGrid setSelectedImg={setSelectedImg}/>
     {seletedImg&&<Modal seletedImg={seletedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
