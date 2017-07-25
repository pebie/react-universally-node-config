import 'normalize.css/normalize.css';

import React, { Component } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import './assets/base_scss/__base.scss';
import MosaicContainer from './components/Mosaic/MosaicContainer';
import ContentGridContainer from './components/ContentGrid/ContentGridContainer';
import ContentRowContainer from './components/ContentRow/ContentRowContainer';

class RenderingEngine extends Component {
  componentDidMount() {
    // FontFaceObserver
    // Loading web font asynchronously
    // --------------------------------------------------
    const observer = new FontFaceObserver('Open Sans');

    // Cache Web fonts, this way our vis­i­tors will
    // ex­pe­ri­ence 'FOUT' only the first time they visit the site
    // If fontsLoaded is present in localStorage
    // Add 'font-loaded' class on the body otherwise load fonts asynchronously
    if (window.localStorage.fontsLoaded) {
      document.body.classList.add('fonts-loaded');
    } else {
      const body = document.body;
      observer
        .load()
        .then(() => {
          window.localStorage.fontsLoaded = true;
          body.classList.add('fonts-loaded');
        })
        .catch((err) => {
          window.localStorage.fontsLoaded = false;
          body.classList.remove('fonts-loaded');
          // eslint-disable-next-line no-console
          console.error(err);
        });
    }
  }
  render() {
    return (
      <span>
        <h1 style={{ textAlign: 'center' }}>TMS RenderingEngine</h1>
        <ul>
          <li key={3}>
            <h2 style={{ paddingLeft: '30px' }}>ContentRow</h2>
            <ContentRowContainer />
          </li>
          <li key={1}>
            <h2 style={{ paddingLeft: '30px' }}>Mosaic</h2>
            <MosaicContainer />
          </li>
          <li key={2}>
            <h2 style={{ paddingLeft: '30px' }}>ContentGrid</h2>
            <ContentGridContainer />
          </li>
        </ul>
      </span>
    );
  }
}

export default RenderingEngine;
