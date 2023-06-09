import React from "react";
import ReactDOM from "react-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import env from "../env.json";
import { motion } from "framer-motion";
import { Container, Row, Button, Form, Spinner, Tooltip, OverlayTrigger } from "react-bootstrap";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneAllIcon from "@mui/icons-material/DoneAll";

function Create() {
  const [cipher, setCipher] = useState("");
  const [successClass, setSuccessClass] = useState("hide");
  const [loadClass, setLoadClass] = useState("hide");
  const [errorClass, setErrorClass] = useState("hide");
  const [formClass, setFormClass] = useState("");
  const [clipboard, setClipboard] = useState(<ContentCopyIcon fontSize="small" />);
  const [clipboardText, setClipboardText] = useState("Copy key");

  let sendData = (obj) => {
    setFormClass("hide");
    setLoadClass("");
    fetch(env.urlBackend + "/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.result) {
          setLoadClass("hide");
          setSuccessClass("");
          setCipher(response.cipher);
        } else {
          setLoadClass("hide");
          setErrorClass("");
        }
      })
      .catch(function () {
        setLoadClass("hide");
        setErrorClass("");
      });
  };

  const loadDataForm = (event) => {
    event.preventDefault();
    let noteForEncrypt = event.target.elements.note.value;
    noteForEncrypt = noteForEncrypt.trim();
    if (noteForEncrypt === "") {
      alert("Заполните поле");
      return false;
    }
    sendData({ note: noteForEncrypt });
  };

  // const copyToClipboard = () => {
  //   navigator.clipboard
  //     .writeText(cipher)
  //     .then(() => {
  //       setClipboard(<DoneAllIcon fontSize="small" />);
  //       setClipboardText("Copied!");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };   //old function to copy to clipboard. does not working on http protocol (not secure).

  return (
    <motion.section id="create" className="bg-color-main height85 d-flex align-items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Container>
        <Row className="justify-content-center">
          <div className={formClass + " text-center"}>
            <h2 className="fw-light">Write the note you want to encrypt:</h2>
          </div>

          <div className={formClass + " col-md-6 text-center"}>
            <Form onSubmit={loadDataForm}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" name="note" rows={3} required />
              </Form.Group>
              <Button type="submit" className="fw-light" variant="outline-dark" size="lg">
                Encrypt
              </Button>
            </Form>
          </div>
          <Spinner className={loadClass} animation="grow" variant="light" />

          <div className={successClass + " col-md-8 text-center"}>
            <h2 className="fw-light">The note is encrypted. </h2>
            <h2 className="fw-light mb-3">Save your decryption key:</h2>
            <div className="mb-4 col-md-6 alert alert-info mx-auto d-flex justify-content-center">
              <div className="me-3">
                <strong>{cipher} </strong>
              </div>

              <CopyToClipboard
                text={cipher}
                onCopy={() => {
                  setClipboardText("Copied!");
                  setClipboard(<DoneAllIcon fontSize="small" />);
                }}
              >
                <div className="clipboard">
                  <OverlayTrigger overlay={<Tooltip>{clipboardText}</Tooltip>} placement="top">
                    {clipboard}
                  </OverlayTrigger>
                </div>
              </CopyToClipboard>
            </div>
            <Button
              className="fw-light"
              variant="outline-dark"
              onClick={() => {
                window.location.reload();
              }}
            >
              Encrypt another note
            </Button>
          </div>

          <div className={errorClass + " col-md-8 text-center"}>
            <h2 className="fw-light">Error :(</h2>
            <h2 className="fw-light">Try again later</h2>
          </div>
        </Row>
      </Container>
    </motion.section>
  );
}

export default Create;
