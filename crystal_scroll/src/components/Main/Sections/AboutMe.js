import React from "react"
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form } from "react-bootstrap";
import { BsFillBookmarkFill, BsFillPersonFill, BsFillCalendarFill, BsFillEnvelopeFill, BsFillGeoAltFill, BsGithub } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";

const AboutMeDiv = styled.div`
  color: black;
  background-color: #00A19D;
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
const AboutMe = () => {
    return (
        <AboutMeDiv>
            <header>
                <sectiontitle><BsFillBookmarkFill></BsFillBookmarkFill> ABOUT ME</sectiontitle>
            </header>
            <cont>
            
                <div class="card p-3">
                <div class = "col card-col">
                    <div class="row row-cols-2 each-row">
                        <div class="col each-row">
                            <div class = "row ">
                                <div class="col-sm-4"><h1><BsFillPersonFill></BsFillPersonFill></h1></div>
                                <div class="col-sm-8 content">
                                    <h3 class="fw-bold">이름</h3>
                                    <p class="lead mb-4">유수정</p>
                                </div>
                            </div>
                        </div>

                        <div class="col  each-row">
                            <div class = "row">
                                <div class="col-sm-4"><h1><BsFillCalendarFill></BsFillCalendarFill></h1></div>
                                <div class="col-sm-8 content">
                                    <h3 class="fw-bold">생년월일</h3>
                                    <p class="lead mb-4">1999.04.11</p>
                                </div>
                            </div>
                        </div>
                        <div class="col each-row">
                            <div class = "row">
                                <div class="col-sm-4"><h1><BsFillGeoAltFill></BsFillGeoAltFill></h1></div>
                                <div class="col-sm-8 content">
                                    <h3 class="fw-bold">주소지</h3>
                                    <p class="lead mb-4">부산광역시 북구</p>
                                </div>
                            </div>
                        </div>
                        <div class="col each-row">
                            <div class = "row">
                                <div class="col-sm-4"><h1><BsFillEnvelopeFill></BsFillEnvelopeFill></h1></div>
                                <div class="col-sm-8 content">
                                    <h3 class="fw-bold">이메일</h3>
                                    <p class="lead mb-4">yoosujeong99@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="col each-row">
                            <div class = "row">
                                <div class="col-sm-4"><h1><BsGithub></BsGithub></h1></div>
                                <div class="col-sm-8 content">
                                    <h3 class="fw-bold">GitHub</h3>
                                    <p class="lead mb-4">https://github.com/crystalYoo99</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col each-row">
                            <div class = "row">
                                <div class="col-sm-4"><h1><FaBloggerB></FaBloggerB></h1></div>
                                <div class="col-sm-8 content">
                                    <h3 class="fw-bold">Tistory</h3>
                                    <p class="lead mb-4">https://taltal.tistory.com/</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            </div>
     
            </cont>
        </AboutMeDiv>
    );
}

export default AboutMe;