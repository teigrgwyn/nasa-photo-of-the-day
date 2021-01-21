import React from 'react'
import styled from 'styled-components'

const PageTitleWrapper = styled.h1`
  padding: 0.75%;
  color: crimson;
`;

const TitleWrapper = styled.h3`
  margin-bottom: 0px;
  color: crimson;
`;

function Titles(props) {
  const { title } = props;

  return (
    <>
      <PageTitleWrapper>NASA Astronomy Photo of the Day</PageTitleWrapper>
      <TitleWrapper>{title}</TitleWrapper>
    </>
    )
}

export default Titles