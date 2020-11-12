import React, {Fragment, useEffect, useState} from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {categoryNavigation, resultTest} from "../../../GlobalState";
import {Modal} from "react-bootstrap";

const menuTestArray = [
  {
    id: 5, title: 'Concéntrese', color: 1
  },
  {
    id: 4, title: 'Selección múltiple', color: 3
  },
  {
    id: 6, title: 'Complete', color: 2
  }
]

function ButtonsModalFinish(props) {
  const category = useRecoilValue(categoryNavigation);
  const [result, setResult] = useRecoilState(resultTest);
  const [finish, setFinish] = useState(false);

  useEffect(()=>{

    let items = [...result];

    let foundIndex = result.findIndex(x => x.category === category);
    let item = {...items[foundIndex]};
    item.solve = true;
    items[foundIndex] = item;

    setResult(items);

    let over = items.filter(x => x.solve === false);
    setFinish(over.length === 0)
    //console.log(over)

  },[])

  return (
    <Fragment>
      <div hidden={finish}>
        <hr/>
        <p className="text-center">
          Continuar con las pruebas
        </p>
      </div>


      <div className="d-flex flex-row bd-highlight mb-3 btn-group btn-group-toggle" data-toggle="buttons">
        {
          result.map((cat)=>{
            return(
              <label
                hidden={category === cat.category || cat.solve }
                onClick={()=> props.handleClick(cat.category)}
                className={`btn btn-light font-weight-bold color-${cat.color}`}>
                <input type="radio" name="options" checked/>
                {cat.title}
              </label>
            )
          })
        }
      </div>

    </Fragment>
  );
}

export default ButtonsModalFinish;
