import React from 'react';
import Background from "./Components/background/background";
import Text from './Components/text/text';
import Video from './Components/videos/videos';
import PhotoGallery from './Components/photos/photos';
import './App.css';

function App() {
  return (
    <div className="App">
      <Background />
      <Text />
      <PhotoGallery />
      <Video />
    </div>
  );
}

export default App;
