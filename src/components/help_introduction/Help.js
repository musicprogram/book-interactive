import React from 'react';
import {Modal, Button, ResponsiveEmbed} from 'react-bootstrap'

function Help(props) {


  return (
    <>
      <Button variant="primary" onClick={() => props.setShowHelp(true)}>
        Launch demo modal
      </Button>

      <Modal show={props.showHelp} onHide={() => props.setShowHelp(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <h3 className="font-weight-bold text-center color-main">
            Instrucciones
          </h3>
          <p className="text-center font-weight-bold">
            Para el óptimo funcionamiento de esta actividad se sugiere que sea realizada en un computador
          </p>
          <p className="text-center lead">
            Elige entre las opciones que encuentras en la parte superior de esta página,
            ya sea “cambiar para hablar/escribir” o “cambiar lenguaje”. Según tu elección inicial,
            deberás decir o escribir el nombre del defecto que corresponda a la definición dada.

          </p>

          <div style={{ height: 'auto' }}>
            <ResponsiveEmbed aspectRatio="16by9">
              <embed type="image/svg+xml" src="https://player.vimeo.com/video/479011694" />
            </ResponsiveEmbed>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.setShowHelp(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Help;
