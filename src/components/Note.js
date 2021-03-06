import { useState } from "react";
import { Container, Row, Form, Button, Spinner } from "react-bootstrap";
// import { useParams } from "react-rout   er-dom";
import { motion } from "framer-motion";
import env from "../env.json";

function Note() {
  // let {noteUrl} = useParams();
  const [noteText, setNoteText] = useState("");
  const [noteClass, setNoteClass] = useState("hide");
  const [loadClass, setLoadClass] = useState("hide");
  const [formClass, setFormClass] = useState("");
  const [errorClass, setErrorClass] = useState("hide");
  const [noHashClass, setNoHashClass] = useState("hide");

  // useEffect(()=>{
  let sendData = (obj) => {
    setFormClass("hide");
    setLoadClass("");

    // if (noteUrl !== undefined) {
    fetch(env.urlBackend, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.text);
        if (response.result) {
          setNoteText(response.note);
          setLoadClass("hide");
          setNoteClass("");
        } else if (response.text == "note not found") {
          setLoadClass("hide");
          setNoHashClass("");
        } else {
          setLoadClass("hide");
          setErrorClass("");
        }
      });

    // }
  };
  // else {
  //   setLineClass('hide');
  //   setFormClass('');
  //   setErrorClass('hide');
  // }
  // }, []);

  let getNote = (event) => {
    event.preventDefault();
    let url = event.target.elements.url.value;
    // if (url === '') {
    //   alert('Заполните поле');
    //   return false;
    // }
    sendData({ url: url });
    // noteUrl = url;
    // window.location.href = env.url + '/' + url;
  };

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
          <div className={formClass + " text-center"}>
            <h2 className="fw-light">Введите ключ дешифровки:</h2>
          </div>

          <div className={formClass + " col-md-6 text-center"}>
            <Form onSubmit={getNote}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="input" name="url" required />
              </Form.Group>
              <Button
                type="submit"
                className="fw-light"
                variant="outline-dark"
                size="lg"
              >
                Расшифровать заметку
              </Button>
            </Form>
          </div>
          <Spinner className={loadClass} animation="grow" variant="light" />
          <div className={noteClass + " text-center"}>
            <h2 className="fw-light">Расшифровано. Ваша заметка:</h2>
            <div className="mb-4 col-md-6 alert alert-info mx-auto">
              <strong>"{noteText}"</strong>
            </div>
            <Button
              className="fw-light"
              variant="outline-dark"
              onClick={() => {
                window.location.href = env.url;
              }}
            >
              Расшифровать еще одну заметку
            </Button>
          </div>
          <div className={errorClass + " col-md-8 text-center"}>
            <h2 className="fw-light">Ошибка :(</h2>
            <h2 className="fw-light">Попробуйте снова позже</h2>
            <Button
              className="fw-light"
              variant="outline-dark"
              onClick={() => {
                window.location.href = env.url;
              }}
            >
              Попробовать снова
            </Button>
          </div>
          <div className={noHashClass + " col-md-8 text-center"}>
            <h2 className="fw-light">Такой ключ не найден :(</h2>
            <h2 className="fw-light">Проверьте правильность ключа</h2>
            <Button
              className="fw-light"
              variant="outline-dark"
              onClick={() => {
                window.location.href = env.url;
              }}
            >
              Попробовать снова
            </Button>
          </div>
        </Row>
      </Container>
    </motion.section>
  );
}

export default Note;
