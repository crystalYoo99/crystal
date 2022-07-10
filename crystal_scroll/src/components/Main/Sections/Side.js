import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from '../../../images/profile.png';




const SideDiv = styled.div`
  width: 130px;
  height: 100vh;
  position: fixed;
  right: 1rem;
  background-color: white;
  color: black;
  
  header {
    margin: 2em 0; 
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
  }
  
  li {
    margin-bottom: 10px;
  }

  img {
    margin-bottom: 20px;
  }

  
`

const Side = () => {
  return (
    <SideDiv>
      
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <header>
              <img src={profile} class="rounded mx-auto d-block" width="70px" height="75px" alt="..."></img>
              <h4 class="display-7 fw-bold">CRYSTAL</h4>
            </header>

            {/*<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
  </button>*/}
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav flex-column">
                <li class="nav-item">
                  <Link to="1" spy={true} smooth={true}>
                    <h5 class="fw-bold">About Me</h5>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="2" spy={true} smooth={true}>
                  <h5 class="fw-bold">Skills</h5>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="3" spy={true} smooth={true}>
                  <h5 class="fw-bold">Projects</h5>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="4" spy={true} smooth={true}>
                  <h5 class="fw-bold">GuestBook</h5>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Button color="danger" href="#">To Top</Button>
    </SideDiv>
  )
}

export default Side