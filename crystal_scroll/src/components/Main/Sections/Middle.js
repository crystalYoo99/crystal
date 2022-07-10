import React from "react"
import styled from "styled-components"
import AboutMe from "./AboutMe"
import Skills from "./Skills"
import Projects from "./Projects"
import GuestBook from "./GuestBook"

const MiddleDiv = styled.div`
  width: 100vh;
  background-color: yellow;
  div {
    height: 100vh;
  }

`

const Middle = () => {
  return (
    <MiddleDiv>
      <div id="1">
        <AboutMe></AboutMe>
      </div>
      <div id="2">
        <Skills></Skills>
      </div>
      <div id="3">
        <Projects></Projects>
      </div>
      <div id="4">
        <GuestBook></GuestBook>
      </div>
    </MiddleDiv>
  )
}

export default Middle