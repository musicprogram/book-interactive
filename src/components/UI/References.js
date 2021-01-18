import React, {Fragment, useEffect, useState} from 'react';
import {useRecoilState} from "recoil";
import {references} from "../../GlobalState";

function References() {
  const [referencesList, setReferencesList] = useRecoilState(references)

  return (
    <div className="container">
        <div className="card card-ref mt-2 mb-2 mr-1 ml-1">
          <div className="mt-2 mb-2 mr-1 ml-1">
            {
              referencesList.map((reference)=>{
                return(
                  <div className="mb-2">
                    <h6>
                      {reference.name}
                    </h6>
                    <div className="text-indent">
                      <a href={reference.link}>{reference.link}</a>
                    </div>
                  </div>
                )
              })
            }
          </div>

      </div>

    </div>
  );
}

export default References;
