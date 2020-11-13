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
          <div style={{ height: 'auto' }}>
            <ResponsiveEmbed aspectRatio="16by9">
              <embed type="image/svg+xml" src="https://player.vimeo.com/video/479011694" />
            </ResponsiveEmbed>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.setShowHelp(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Help;
