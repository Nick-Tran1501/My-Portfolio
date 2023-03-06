import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";
import meter1 from "../../assets/images/meter1.svg"
import meter2 from "../../assets/images/meter2.svg";
import meter3 from "../../assets/images/meter3.svg";
import colorSharp from "../../assets/images/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5, 
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>SKills</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quisquam, consectetur.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  {/* Item 1 */}
                  <div className="item">
                    <img src={meter1} alt="skill scale" />
                    <h5>Web Development</h5>
                  </div>
                  {/* Item 2 */}
                  <div className="item">
                    <img src={meter2} alt="skill scale" />
                    <h5>Web Development</h5>
                  </div>
                  {/* Item 3 */}
                  <div className="item">
                    <img src={meter3} alt="skill scale" />
                    <h5>Web Development</h5>
                  </div>
                  {/* Item 4 */}
                  <div className="item">
                    <img src={meter1} alt="skill scale" />
                    <h5>Web Development</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img src={colorSharp} alt="background" className="background-image-left" />
      </section>
    </>
  );
};

export default Skills;
