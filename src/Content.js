import React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.img`
  max-width: 100%;
  border: 2px solid crimson;
  border-radius: 1%;
  margin-bottom: 0px;
`;

const CopyrightWrapper = styled.p`
  color: crimson;
`;

const TextWrapper = styled.p`
  color: whitesmoke;
`;

function Content(props) {
  const { url, text, author, date} = props;

  return (
    <>
      <ImageWrapper src={url} alt='' ></ImageWrapper>
      <CopyrightWrapper>Copyright | {author} | {date}</CopyrightWrapper>
      <TextWrapper>{text}</TextWrapper>
    </>
  )
}

export default Content