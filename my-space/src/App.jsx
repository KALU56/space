import React from "react";
import { ComplexNavbar } from "./components/ComplexNavbar";
import { GalleryWithTab } from './components/GalleryWithTab'; 

function App() {
  return (
    <div>
      <ComplexNavbar />
      <div className="text-center">
        <h1>Home Page</h1>
        <p>This is just a test to see if content renders correctly.</p>
      </div>
      <GalleryWithTab />
    </div>
  );
}

export default App;
