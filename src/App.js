import React from "react";
import {HeadingSection} from "./components/jsComponents/heading_section";
import {RandomSection} from './components/jsComponents/random_section';
import {UploadSection} from './components/jsComponents/uploading_section';
import {FavoriteSection} from './components/jsComponents/favorite_section';
import './index.css';

function App() {
  return (
    <>
    <HeadingSection />

    <RandomSection />

    <UploadSection /> 

    <FavoriteSection />
    </>
  );
}

export default App;