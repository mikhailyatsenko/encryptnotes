import { useState } from "react";
import { Container, Row, Form, Button, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import env from "../env.json";

function Note() {
  const [noteText, setNoteText] = useState("");
  const [noteClass, setNoteClass] = useState("hide");
  const [loadClass, setLoadClass] = useState("hide");
  const [formClass, setFormClass] = useState("");
  const [errorClass, setErrorClass] = useState("hide");
  const [noHashClass, setNoHashClass] = useState("hide");

  let sendData = (obj) => {
    setFormClass("hide");
    setLoadClass("");

    fetch(env.urlBackend + "/getnote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.result) {
          setNoteText(response.note);
          setLoadClass("hide");
          setNoteClass("");
        } else {
          if (response.note === "note not found") {
            setLoadClass("hide");
            setNoHashClass("");
          } else {
            setLoadClass("hide");
            setErrorClass("");
          }
        }
      });
  };

  let getNote = (event) => {
    event.preventDefault();
    let cipher = event.target.elements.cipher.value;

    sendData({ cipher: cipher });
  };

  return (
    <motion.section id="create" className="bg-color-main height85 d-flex align-items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Container>
        <Row className="justify-content-center">
          <div className={formClass + " text-center"}>
            <h2 className="fw-light">Enter the decryption key:</h2>
          </div>

          <div className={formClass + " col-md-6 text-center"}>
            <Form onSubmit={getNote}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="input" name="cipher" required />
              </Form.Group>
              <Button type="submit" className="fw-light" variant="outline-dark" size="lg">
                Decode note
              </Button>
            </Form>
          </div>
          <Spinner className={loadClass} animation="grow" variant="light" />
          <div className={noteClass + " text-center"}>
            <h2 className="fw-light">Deciphered. Your note:</h2>
            <div className="mb-4 col-md-6 alert alert-info mx-auto">
              <strong>"{noteText}"</strong>
            </div>
            <Button
              className="fw-light"
              variant="outline-dark"
              onClick={() => {
                window.location.href = env.url + "/note";
              }}
            >
              Decode another note
            </Button>
          </div>
          <div className={errorClass + " col-md-8 text-center"}>
            <h2 className="fw-light">Error :(</h2>
            <h2 className="fw-light">Try again later</h2>
            <Button
              className="fw-light"
              variant="outline-dark"
              onClick={() => {
                window.location.href = env.url + "/note";
              }}
            >
              Try again
            </Button>
          </div>
          <div className={noHashClass + " col-md-8 text-center"}>
            <h2 className="fw-light">No such key found :( </h2>
            <h2 className="fw-light">Check if the key is correct </h2>
            <Button
              className="fw-light"
              variant="outline-dark"
              onClick={() => {
                window.location.href = env.url + "/note";
              }}
            >
              Try again
            </Button>
          </div>
        </Row>
      </Container>
    </motion.section>
  );
}

export default Note;
