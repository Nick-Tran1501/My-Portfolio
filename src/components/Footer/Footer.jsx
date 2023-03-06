import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MailchimpForm from "../MailchimpForm";
import Logo from "../../assets/images/Logo.png";
import navIcon1 from "../../assets/images/nav-icon1.svg";
import navIcon2 from "../../assets/images/nav-icon2.svg";
import navIcon3 from "../../assets/images/nav-icon3.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <Container>
          <Row className="align-items-center">
            <MailchimpForm />
            <Col sm={6}>
              <img src={Logo} alt="Logo" />
            </Col>
            <Col sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <p>CopyRight 2023. All Right Reserved</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
