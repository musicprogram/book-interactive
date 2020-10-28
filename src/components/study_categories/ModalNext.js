import React, {useEffect} from 'react';
import {Modal} from "react-bootstrap";
import {useRecoilState, useRecoilValue} from "recoil";
import {categoryNavigation, linksSvg} from "../../GlobalState";


function ModalNext(props) {
  const [firsCategoriesData, setFirsCategoriesData] = useRecoilState(categoryNavigation);
  useEffect(()=>{

  },[]);

  const handleTest = ()=>{
    let cat;
    if(firsCategoriesData === 1){
      cat = 5;
    }else if(firsCategoriesData === 2){
      cat = 6;
    }else if(firsCategoriesData === 3){
      cat = 4;
    }
    setFirsCategoriesData(cat);
  }

  return (
    <Modal
      show={props.show}
      onHide={() => props.setShow(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>

      </Modal.Header>
      <Modal.Body>
        <h2 className={`color-${firsCategoriesData} text-center text-lubster`}>
          ¿Ya terminaste, <br/>
          <span className="font-weight-bold">
            Quieres presentar la prueba?
          </span>

        </h2>
        <div className="row mt-4">
          <div className="col-6">
            <h1
              onClick={handleTest}
              className={`color-${firsCategoriesData} text-center font-weight-bold pointer h1`}>
              Sí
            </h1>
          </div>
          <div className="col-6">
            <h1 onClick={() => props.setShow(false)} className={`color-${firsCategoriesData} text-center font-weight-bold pointer h1`}>
              No
            </h1>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalNext;





