import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Gallery } from './components/Gallery';
import { Tweets } from './components/Tweets';
import SimpleReactLightbox from "simple-react-lightbox";

const options = {
  overlayColor: "rgb(25, 136, 124)",
  captionStyle: {
    captionColor: "#a6cfa5",
    captionFontFamily: "Raleway, sans-serif",
    captionFontSize: "22px",
    captionFontWeight: "300",
    captionFontStyle: "capitalize"
  },
  buttonsStyle: {
    buttonsBackgroundColor: "#1b5245",
    buttonsIconColor: "rgba(126, 172, 139, 0.8)"
  },
  autoplaySpeed: 1500,
  transitionSpeed: 900,
  showCaption: true,
  showThumbnails: true
};

function App() {
  return (
    <Router>
      <div>
        <SimpleReactLightbox {...options}>
          <Route path='/' component={Header} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/tweets' component={Tweets} />
        </SimpleReactLightbox>
      </div>
    </Router>
  )
}

export default App;
