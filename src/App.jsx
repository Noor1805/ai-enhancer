import react from "react";
import Home from "./components/Home";
import Imagepreveiw from "./components/Imagepreveiw";
import Imageupload from "./components/Imageupload";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-400 py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold ">AI Image Enhancer</h1>
        <p className="text-lg text-gray-800 mt-4">Upload your image</p>
      </div>
      <Home/>
      <div className="text-sm text-gray-500 mt-4" >
        Upload Your Image And Let AI Enhance To In Seconds!
      </div>
      
    </div>
  );
}

export default App;
