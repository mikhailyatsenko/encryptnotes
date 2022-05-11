import { Container, Row } from "react-bootstrap";

import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="create"
      className="bg-color-main height85 d-flex align-items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Row className="justify-content-center">
          <div className="text-center">
            <h2 className="fw-light">"Encrypt notes" — это pet-проект.</h2>
            <p>
              Сервис размещен на бесплатном сервере, который не всегда
              отрабатывает быстро. Возможны перебои в работе.
            </p>
          </div>
        </Row>
      </Container>
    </motion.section>
  );
}

export default About;
