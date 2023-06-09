import { Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

function Error() {
  return (
    <motion.section id="create" className="bg-color-main height85 d-flex align-items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Container>
        <Row className="justify-content-center">
          <div className="text-center">
            <h2 className="fw-light">|Error 404</h2>
            <h2 className="fw-light">Page not found</h2>
          </div>
        </Row>
      </Container>
    </motion.section>
  );
}

export default Error;
