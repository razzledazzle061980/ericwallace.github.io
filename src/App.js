import React, {useEffect, useState} from "react";

import GithubProfileCard from "./components/GithubProfileCard";
import Header from "./components/Header";
import Greetings from "./containers/Greetings";
import Skills from "./containers/Skills";
import Proficiency from "./containers/Proficiency";
import Projects from "./containers/Projects";
import Education from "./containers/Education";
import Experience from "./containers/Experience";
import Feedbacks from "./containers/Feedbacks";


const App = () => {
  return (
    <div>
        <Header />
        <Greetings />
        <Skills />
        <Proficiency />
        <Education />
        <Projects />
        <GithubProfileCard/>
    </div>
  );
}


export default App;
