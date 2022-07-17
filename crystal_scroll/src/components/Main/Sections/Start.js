import React from "react"
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form } from "react-bootstrap";
import { BsFillBookmarkFill, BsFillPersonFill, BsFillCalendarFill, BsFillEnvelopeFill, BsFillGeoAltFill, BsGithub } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";

const StartDiv = styled.div`
  color: black;
  background-color: #E05D5D;
  width: 100vw;
  height: 100vh;
  padding: 50px;
  padding-right: 200px;
  div {
    text-align: center;
  }
  header {
      margin-bottom: 40px;
  }
  sectiontitle {
      font-size: 5rem;
  }
  cont {
      text-align: left;
      height: 200px;
      background-color: yellow;
  }
  .content {
      text-align: left;
      height: 100px;
  }
  .each-row {
      height: 150px;
  }
  .card {
      height: 65vh;
  }
  .card-col {
      padding-top: 30px;
  }
`
const Start = () => {
    return (
        <StartDiv>
            <header>
                <sectiontitle><BsFillBookmarkFill></BsFillBookmarkFill> GUEST BOOK</sectiontitle>
            </header>
            <cont>
            
                <div class="card p-3">
                <div class = "col card-col">
                    <div class="row row-cols-2 each-row">
                        
                        
                        
                </div>
            </div>
            </div>
     
            </cont>
        </StartDiv>
    );
}

export default GuestBook;