import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import CloudBased from "./components/CloudBased";
import OurRoadmap from "./components/OurRoadmap";
import VideoMessage from "./components/VideoMessage";
import Footer from "./components/Footer";
import MobileNavbar from "./components/MobileNavbar";
import { useEffect, useState } from "react";


function App() {
  const [lineHeightCloud, setLineHeightCloud] = useState(20);
  const [lineHeighRoadmap, setLineHeightRoadmap] = useState(20);

  useEffect(() => {
 
    function handleScroll() {
      const scrollPosition = window.scrollY;
      // console.log('scroll position', scrollPosition);
     if(scrollPosition/100 > 5){
      const newline = 20 + scrollPosition/30
      setLineHeightRoadmap(newline)
     }
      const newLineHeight = 20 + scrollPosition/2 ; 
      setLineHeightCloud(newLineHeight);
      
     
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(lineHeighRoadmap)
  return (
    <BrowserRouter>
     <Navbar/>
     <MobileNavbar/>
     <CloudBased lineHeight={lineHeightCloud}/>
     <OurRoadmap lineHeight={lineHeighRoadmap}/>
     <VideoMessage/>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
