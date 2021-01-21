import React, { useState, useEffect } from "react";
import axios from 'axios'

// import these before any css has a chance to be applied
import Header from './Header';
import Content from './Content';

import "./App.css";
import { Button } from 'reactstrap';
import styled from 'styled-components'

const WrapperDiv = styled.div`
  font-family: 'Yusei Magic', sans-serif;
  margin: 0.5% 3%;
`;

function App() {
  const [photoToday, setPhotoToday] = useState('');
  const [isHigh, setIsHigh] = useState(false);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=rlM7uIe0lBhyoFBvKPtVW88zyfEpVEEgaScUSgsi')
    .then((res) => {
      setPhotoToday(res.data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      <WrapperDiv>
        <Header title={photoToday.title} />
        <Button onClick={() => setIsHigh(!isHigh)}>Swap Image Resolution</Button>
        <p></p>
        <Content url={photoToday.url} hdurl={photoToday.hdurl} text={photoToday.explanation} author={photoToday.copyright} date={photoToday.date} isHigh={isHigh} />
      </WrapperDiv>
    </div>
  );

  // function SwapQuality() {
  //   setPhotoToday(photoToday.map(data => {
  //     return (photoToday.url === photoToday.hdurl ? {...photoToday, url: photoToday.hdurl} : photoToday);
  //   }));
  // }
}

export default App;