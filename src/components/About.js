import { Container, Row } from "react-bootstrap";

import { motion } from "framer-motion";

function About() {
  return (
    <motion.section id="create" className="bg-color-main height85 d-flex align-items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Container>
        <Row className="justify-content-center">
          <div className="text-center">
            <h2 className="fw-light">"Encrypt notes" is a pet project.</h2>
            <p>The service is hosted on a free server, which does not always work quickly.</p>
            <p>Backend source code:</p>
            <div className="mb-4 col-md-6 alert alert-info mx-auto">
              <strong>
                <a href="https://github.com/mikhailyatsenko/encryptnotes_backend" target="_blank" rel="noopener noreferrer">
                  github.com/mikhailyatsenko/encryptnotes_backend
                </a>
              </strong>
            </div>
            <p>Frontend source code:</p>
            <div className="mb-4 col-md-6 alert alert-info mx-auto">
              <strong>
                <a href="https://github.com/mikhailyatsenko/encryptnotes" target="_blank" rel="noopener noreferrer">
                  github.com/mikhailyatsenko/encryptnotes
                </a>
              </strong>
            </div>
          </div>
        </Row>
      </Container>
    </motion.section>
  );
}

export default About;
