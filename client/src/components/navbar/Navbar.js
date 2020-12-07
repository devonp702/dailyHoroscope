import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";
import LoginButton from "../LoginButton";

function Navigation() {
  return (
    <Container fluid="true">
      <Navbar className="navbar">
        <Col className="links">
          <div className="col-2" />
          <a className="homepage" href="/">
            CELESTIAL NAVIGATOR
          </a>
          <a className="profile" href="/profile">
            Profile
          </a>
          <a className="journal" href="/journal">
            Journal
          </a>
        </Col>
        <Col>
          <LoginButton className="floatRight" />
          <Button className="floatRight">SIGN OUT</Button>
        </Col>
      </Navbar>
    </Container>
  );
}
export default Navigation;
