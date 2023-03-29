import React, { useState } from 'react';

import Header from "./components/Header/header.js";
import Intro from "./components/Intro/intro.js";
import Footer from "./components/Footer/footer.js";
import trees from "./assets/images/TreesBG.jpg"
import Music from "./pages/Music/music.js";
import Bio from "./pages/Bio/bio.js";
import Social from "./pages/Social/social.js";
import "./App.css"
function App() {
    const [currentCategory, setCurrentCategory] = useState("Intro");
  
  const pageSelect = () =>{
    if(currentCategory === "Intro"){
      return <Intro></Intro>
    }
    if(currentCategory === "About"){
      return <Music></Music>
    }
    if(currentCategory === "Bio"){
      return <Bio></Bio>
    }
    if(currentCategory === "Social"){
      return <Social></Social>
    }
  }
  
  const noDispSwitch = () =>{
    if(currentCategory === "Intro"){
        return "noDisp"
    } else {
        return "_"
    }
  }


  return (
    <div className="chapterSize">
      <div id="heroBack">
        <img className="chapterSize" src={trees}/>
      </div>
      <Header
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
      <main>
        { pageSelect()}
      </main>
      <Footer></Footer>
      <a className={noDispSwitch()} id="returnBut" href="">Home</a>
    </div>
  );
}

export default App;

