import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
function Main() {
  return (
    <motion.section id="main" className="bg-color-main height85 d-flex align-items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Container>
        <Row className="justify-content-center">
          <div className="col-lg-6 text-center">
            <h1 className="fw-light">«Encrypt notes» is a service for encrypting short notes.</h1>
          </div>
        </Row>
        <Row className="justify-content-center py-4">
          <Col className="text-center py-3 py-md-0" md={4}>
            <Button className="fw-light" variant="outline-dark" size="lg">
              <NavLink to="/create">Create encrypted note</NavLink>
            </Button>
          </Col>
          <Col className="text-center" md={4}>
            <Button className="fw-light" variant="outline-light" size="lg">
              <NavLink to="/note">Decode note</NavLink>
            </Button>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
}

export default Main;
