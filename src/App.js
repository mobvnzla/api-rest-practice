import React, { useCallback, useEffect } from 'react';
import { HeadingSection } from './components/jsComponents/heading_section';
import { RandomSection } from './components/jsComponents/random_section';
import { UploadSection } from './components/jsComponents/uploading_section';
import { FavoriteSection } from './components/jsComponents/favorite_section';
import './index.css';

function App() {
  const urlApi = 'https://api.thecatapi.com/v1/images/search';
  const [randomImgUrl, setRandomImgUrl] = React.useState('');

  /* async function loadRandomcat() {
    const respuestaDeLaApi = await fetch(urlApi);
    const jsonDeLaRespuesta = await respuestaDeLaApi.json();
    const urlDeLaImagen = jsonDeLaRespuesta[0].url;
    
    console.log(urlDeLaImagen)
    
    setRandomImgUrl(urlDeLaImagen)
  } */

  async function comoQuiera() {
    const respuestaDeLaApi = await fetch(urlApi);
    const jsonDeLaRespuesta = await respuestaDeLaApi.json();
    const urlDeLaImagen = jsonDeLaRespuesta[0].url;

    console.log(urlDeLaImagen);

    setRandomImgUrl(urlDeLaImagen);
  }

  useEffect(() => {
    (() => {
      comoQuiera();
    })();

    return () => {};
  }, []);

  const loadRandomcat = useCallback(() => {
    comoQuiera();
  }, []);

  return (
    <>
      <HeadingSection />

      <RandomSection url={randomImgUrl} loadRandomcat={loadRandomcat} />

      <UploadSection />

      <FavoriteSection />
    </>
  );
}

export default App;
