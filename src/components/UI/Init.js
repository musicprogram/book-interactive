import React, {useEffect, createRef} from 'react';
import Parallax from 'parallax-js'

import imgFirst from '../../assets/img/Drawing.svg'
import imgSecond from '../../assets/img/Support team.svg'
import imgThird from '../../assets/img/Design.svg'

function Init() {
  const scene = createRef();
  const scenec = createRef();
  const scener = createRef();


  useEffect(()=>{
    setTimeout(()=>{
      if(scene.current && scenec.current && scener.current){
        const parallax = new Parallax(scene.current);
        const parallaxc = new Parallax(scenec.current);
        const parallaxr = new Parallax(scener.current);
        debugger
        //console.log(parallax);
      }
    }, 1000)
    //inputScene.current
    //new Parallax(inputScene)
  },[])


  return (
    <div>
      <div className="container-fluid mt-5 mb-5">
        <h1 className="text-title color-main text-center h-100 font-weight-bold text-shadow">
          Book Interactive
        </h1>
        <div className="row mr-1 ml-1">
          <div className="col-md-4" >
            <div className="mt-2 mb-2 mr-2 ml-2 my-card-l my-card" ref={scene}>
              <img src={imgFirst} alt="" data-depth="0.5"/>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mt-2 mb-2 mr-2 ml-2 my-card-c my-card"  ref={scenec}>
              <img src={imgSecond} alt="" data-depth="0.5"/>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mt-2 mb-2 mr-2 ml-2 my-card-r my-card" ref={scener}>
              <img src={imgThird} alt="" data-depth="0.5"/>
            </div>
          </div>
        </div>
      </div>
      <blockquote className="blockquote text-center">
        <p className="lead mb-0 color-main font-weight-bold text-hand">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
      </blockquote>
    </div>

  );
}

export default Init;
