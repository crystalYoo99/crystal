import React from "react"
import styled from "styled-components"
import Middle from "./Sections/Middle"
import Side from "./Sections/Side"

const MainDiv = styled.div`
  
`

const ContentDiv = styled.div`
  width: 100vw;
  display: flex;
`

const Main = () => {
  return (
    <MainDiv>
      <ContentDiv>  
        <Side />
        <Middle />
      </ContentDiv>
    </MainDiv>
  )
}

export default Main;