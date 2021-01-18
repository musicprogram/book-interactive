
import React, {Fragment, useState} from 'react';
import {Modal, Button} from "react-bootstrap";


function CreditsSection(props) {
  return (
    <Fragment>

      <Modal
        size="lg"
        show={props.lgShow}
        onHide={() => props.setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Créditos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center">
            <b>
              Gloria Isabel Daza Restrepo
            </b>, Asesora Pedagógica del Producto Técnico Pedagógico
          </p>

          <p className="text-center">
            <b>
              Juan Henao Rendón
            </b>, Diseñador y Desarrollador Web
          </p>

          <p className="text-center color-main font-weight-bold">
            <small>
              Interactive Book
            </small>
          </p>
        </Modal.Body>
      </Modal>
    </Fragment>
  )

}

export default CreditsSection;
