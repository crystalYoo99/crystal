import React from "react"
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form } from "react-bootstrap";
import { BsFillBookmarkFill, BsFillPersonFill, BsFillCalendarFill, BsFillEnvelopeFill, BsFillGeoAltFill, BsGithub } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";


const SkillsDiv = styled.div`
background-color: green;
width: 100vw;
height: 100vh;
padding: 50px;
padding-right: 200px;
div {
  text-align: center;
}
header {
    margin-bottom: 70px;
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
    width: 25vw;
    height: 50vh;
    color: black;
}
svg {
    height: 900%;
}
`
const Skills = () => {
    return (
        <SkillsDiv>
            <header>
                <sectiontitle><BsFillBookmarkFill></BsFillBookmarkFill> SKILLS</sectiontitle>
            </header>
            <cont>
                <div class="row" data-masonry='{"percentPosition": true }'>

                <div class="col-sm-6 col-lg-4 mb-4">
                    <div class="card">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                        <div class="card-body">
                        <h5 class="card-title">Front End</h5>
                        {/*<p class="card-text">Front-end</p>*/}
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4 mb-4">
                    <div class="card">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                        <div class="card-body">
                        <h5 class="card-title">Back End</h5>
                        {/*<p class="card-text">Front-end</p>*/}
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4 mb-4">
                    <div class="card">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                        <div class="card-body">
                        <h5 class="card-title">ETC</h5>
                        {/*<p class="card-text">Front-end</p>*/}
                        </div>
                    </div>
                </div>
                </div>
            </cont>
        </SkillsDiv>
    );
}

export default Skills;