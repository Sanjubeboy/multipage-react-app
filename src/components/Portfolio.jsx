import React from 'react'
import { Link } from 'react-router-dom'
// import logo from './';
import './Portfolio.css';

function Portfolio() {
  return (
    <React.Fragment>
        <Link to={'/Cartoon'}>
          <button className="probtn">Get characters</button>
        </Link>
      <Link to={'/calculator'}>
        <button className="Calbtn">Calculator</button>
        </Link>
        <div id="page">
          <div class="photo-and-name">
              <img src="https://as2.ftcdn.net/v2/jpg/00/97/58/97/1000_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"  class="photo" alt="Profile"/>
              <div class="contact-info-box">
                  <h1 class="name">SANJAY KUMAR P</h1>
                  <br/>
                  <h3 class="job-title">SOFTWARE DEVELOPER</h3>
                  <p class="contact-details">Phone: +91 992168592 &nbsp; - &nbsp; Email: sanjubeboy@gmail.com</p>
              </div>
          </div>
          <div id="objective">
              <h3>Objective</h3>
              <p>
                  To take a challenging and managerial role in the field of Computer programming and implement the expertise and experience gained in this field to develop complex project with efficiency and quality. 
              </p>
          </div>
          <div id="education">
              <h3>Education</h3>
              <table>
                  <tr class="school-1">
                      <td>2020 - 2024</td>
                      <td><b>UG</b>: BE Computer Science and Engineering</td>
                  </tr>
                  
                  
                  <tr class="school-1">
                      <td>2018 - 2020</td>
                      <td><b>High School</b>: Immanuel Matric Hr Sec School</td>
                  </tr>
                  
                  
                  <tr>
                      <td class="new">2015 - 2017</td>
                      <td><b>Intermediate</b>: Board of Education Tamil Nadu</td>
                  </tr>
              </table>
          </div>
          <div id="work">
              <h3>Projects</h3>
              <table>
                  <tr class="work-1">
                      <td>2022</td>
                      <td><b>Brain Tumor Classification</b>: A Machine learning based Brain Tumor classification system.</td>
                  </tr>
                  <tr class="work-2">
                      <td>2023</td>
                      <td><b>Artificial Intelligence</b>: Speech recognition</td>
                  </tr>
      
              </table>
          </div>
          <div id="bio-data">
              <h3>Bio-Data</h3>
              <table>
                  <tr>
                      <td>F'Name:</td>
                      <td><b>SANJAY KUMAR P</b></td>
                  </tr>
                  <tr>
                      <td>Date of Birth:</td>
                      <td><b>17<sup>th</sup> January 2003</b></td>
                  </tr>
                  <tr>
                      <td>Age:</td>
                      <td><b>20</b></td>
                  </tr>
                  <tr>
                      <td>Religion:</td>
                      <td><b>Hindu</b></td>
                  </tr>
                  <tr>
                      <td>Nationality:</td>
                      <td><b>Indian</b></td>
                  </tr>
                  <tr>
                      <td>Marital Status:</td>
                      <td><b>Unmarried</b></td>
                  </tr>
              </table>
          </div>
      </div>
    </React.Fragment>
  )
}

export default Portfolio