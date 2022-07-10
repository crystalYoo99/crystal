import React from "react"
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form } from "react-bootstrap";
import { BsFillBookmarkFill, BsFillPersonFill, BsFillCalendarFill, BsFillEnvelopeFill, BsFillGeoAltFill, BsGithub } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";


const ProjectsDiv = styled.div`
background-color: #FFB344;
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
const Projects = () => {
    return (
        <ProjectsDiv>
            <header>
                <sectiontitle><BsFillBookmarkFill></BsFillBookmarkFill> PROJECTS</sectiontitle>
            </header>
            <cont>
                <div class="row" data-masonry='{"percentPosition": true }'>

                <div class="col-sm-6 col-lg-4 mb-4">
                    <div class="card">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                        <div class="card-body">
                        <h5 class="card-title">#1</h5>
                        {/*<p class="card-text">Front-end</p>*/}
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4 mb-4">
                    <div class="card">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                        <div class="card-body">
                        <h5 class="card-title">#2</h5>
                        {/*<p class="card-text">Front-end</p>*/}
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4 mb-4">
                    <div class="card">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                        <div class="card-body">
                        <h5 class="card-title">#3
                        </h5>
                        {/*<p class="card-text">Front-end</p>*/}
                        </div>
                    </div>
                </div>
                </div>
            </cont>
        </ProjectsDiv>
    );
}

export default Projects;