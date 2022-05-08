import React from 'react';
import { useState } from 'react';
import env from '../env.json';
import { motion } from "framer-motion";
import { Container, Row, Col, Button, Form, Spinner, Tooltip, OverlayTrigger } from 'react-bootstrap';


function Create() {

    const [url, setUrl] = useState('');
    const [successClass, setSuccessClass] = useState('hide');
    const [loadClass, setLoadClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');
    const [formClass, setFormClass] = useState('');
    const [clipboard, setClipboard] = useState('content_copy');
    const [clipboardText, setClipboardText] = useState('Скопировать ключ');


    let sendData = (obj) => {

      setFormClass('hide');
      setLoadClass('');
        fetch(env.urlBackend, {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded',
          }, 
          body: JSON.stringify(obj)
        })
          .then(response => response.json())
          .then(response => {
            console.log(response);
          if (response.result) {
              setLoadClass('hide');
              setSuccessClass('');
              setUrl(response.url);
          } else {
            setLoadClass('hide');
            setErrorClass('');
            }
          })
          .catch(
            function() {
              setLoadClass('hide');
              setErrorClass('');
             
            }
          );
    }

    const loadDataForm = (event) => {
      event.preventDefault();
      let note = event.target.elements.note.value;
      note = note.trim();
      if (note === '') {
        alert('Заполните поле');
        return false;
      }
      sendData({"note" : note});
      // console.log(note);
    }

    const copyToClipboard = () => {
      navigator.clipboard.writeText(url)
            .then(() => {
                setClipboard('done_all');
                setClipboardText('Скопировано!');
            })
            .catch(err => {
                console.log(err);
            });
    }
    

    return (
      <motion.section 
      id="create" 
      className="bg-color-main height85 d-flex align-items-center"
      
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5}}
      >
        <Container>
          
          <Row className="justify-content-center">
              <div className={formClass + " text-center"}>
                <h2 className="fw-light">Напишите заметку, которую хотите зашифровать:</h2>
              </div>
              
              <div className={formClass + " col-md-6 text-center"}>
                <Form onSubmit={loadDataForm}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" name="note" rows={3} required />
                  </Form.Group>
                  <Button type="submit" className="fw-light" variant="outline-dark" size="lg">Зашифровать</Button>
                </Form>
              </div>
            <Spinner className={loadClass} animation="grow" variant="light" />
            
              <div className={successClass + " col-md-8 text-center"}>
                <h2 className="fw-light">Сообщение зашифровано.</h2>
                <h2 className="fw-light mb-3">Сохраните Ваш ключ дешифровки:</h2>
                <div className="mb-4 col-md-6 alert alert-info mx-auto"><strong>{url}</strong> <OverlayTrigger overlay={<Tooltip>{clipboardText}</Tooltip>} placement="right"><span onClick={copyToClipboard} className="material-icons clipboard">{clipboard}</span></OverlayTrigger></div>
                <Button className="fw-light" variant="outline-dark" onClick={() => {window.location.reload()}}>Зашифровать еще одну заметку</Button>
              </div>

            <div className={errorClass + " col-md-8 text-center"}>
                <h2 className="fw-light">Ошибка :(</h2>
                <h2 className="fw-light">Попробуйте снова позже</h2>
            </div>

          </Row>
          



        </Container>
      </motion.section>


    );
  }
  
  export default Create;
  