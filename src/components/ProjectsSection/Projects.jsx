import React from "react";
import "./Projects.css";
import proImg1 from "../../assets/images/project-img1.png";
import proImg2 from "../../assets/images/project-img2.png";
import proImg3 from "../../assets/images/project-img3.png";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard/ProjectCard";
import colorSharp2 from "../../assets/images/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";
const Projects = () => {
  const projects = [
    {
      title: "RMIT ClubZone",
      description: "School Project",
      imgUrl: proImg1,
    },
    {
      title: "RMIT ClubZone",
      description: "School Project",
      imgUrl: proImg2,
    },
    {
      title: "RMIT ClubZone",
      description: "School Project",
      imgUrl: proImg3,
    },
  ];
  return (
    <>
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__slideInLeft" : ""
                    }
                  >
                    <h2>Projects</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Error, aspernatur.
                    </p>
                  </div>
                )}
              </TrackVisibility>

              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  defaultActiveKey="/first"
                  className="nav-pills mb-5 justify-content-center align-items -center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">HAAH</Tab.Pane>
                  <Tab.Pane eventKey="third">HAHA</Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img
          src={colorSharp2}
          alt="background"
          className="background-image-right"
        />
      </section>
    </>
  );
};

export default Projects;
