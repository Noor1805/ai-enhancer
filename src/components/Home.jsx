import React, { useState } from "react";
import Imageupload from "../components/Imageupload";
import Imagepreveiw from "../components/Imagepreveiw";
import { enhancedImageAPI } from "./utilis/enhancedimageApi";

const Home = () => {
  const [upload, setupload] = useState("");
  const [enhanced, setenhanced] = useState("");
  const [loading, setloading] = useState(false);

  const handleimage = async (file) => {
    setupload(URL.createObjectURL(file));
    setloading(true);

    try {
      const enhancedURL = await enhancedImageAPI(file);
      setenhanced(enhancedURL);
    } catch (error) {
      console.log(error);
      alert("Please try again later..");
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <Imageupload handleimage={handleimage} />
      <Imagepreveiw loading={loading} uploaded={upload} enhanced={enhanced} />
    </>
  );
};

export default Home;

