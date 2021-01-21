import React, { useState, useEffect } from "react";
import axios from 'axios'
import Display from './Display' // import this first in case we add CSS to page
import "./App.css";
import { Button } from "reactstrap";

function App() {
  const [photoToday, setPhotoToday] = useState('');

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=rlM7uIe0lBhyoFBvKPtVW88zyfEpVEEgaScUSgsi')
    .then((res) => {
      setPhotoToday(res.data)
      console.log(res.data);
    })
    .catch((err) => console.log(err))
  }, []) // adding empty dependency array to side effect, because we don't want an infinite loop

  return (
    <div className="App">
      <Display title={photoToday.title} url={photoToday.url} text={photoToday.explanation} author={photoToday.copyright} date={photoToday.date} />
      <Button color="danger">Danger!</Button>
    </div>
  );
}

export default App;