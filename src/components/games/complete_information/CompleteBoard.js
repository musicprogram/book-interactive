import React, { useEffect, useState, useRef} from 'react';
import {completeInformationData, talkAnimation} from '../../../data/CompleteInformationData';
import Helmet from 'react-helmet';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import ModalFinish from "../question/ModalFinish";

import Complete from "./Complete";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {useRecoilValue} from "recoil";
import {linksSvg} from "../../../GlobalState";

function CompleteBoard() {
  const [completeInformations, setCompleteInformations] = useState(completeInformationData);
  const [body, setBody] = useState('');
  const [word, setWord] = useState('');
  const [wordState, setWordState] = useState({
    word: '',
    id: 0
  });
  const links = useRecoilValue(linksSvg);
  const [isOver, setIsOver] = useState(false);

  const { transcript, resetTranscript } = useSpeechRecognition();

  const [show, setShow] = useState(true);
  const [clicks, setClicks] = useState(0);

  useEffect(()=>{
    setBody(completeInformationData[0].imgCss);
  },[])

  useEffect(()=>{

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert('No hay soporte')
    }

  if(transcript){
    //console.log(transcript);
    setWord(transcript);
    compareWord(transcript);
  }

  },[transcript]);

  const compareWord = (word) =>{
    let updateCompleteInformations = [];

      let comp = false;

      comp = (word && wordState.word) && (word === wordState.word);


      if(comp){

        completeInformations.map((info)=>{
          if(wordState.id === info.id){
            info.solve = true;
            info.imgTalk = talkAnimation[0].img1
          }
          updateCompleteInformations.push(info)
        })

        const result = updateCompleteInformations.filter(info => info.solve === true);
        setIsOver(result.length === completeInformations.length);

        setCompleteInformations(updateCompleteInformations);
      }else{
        completeInformations.map((info)=>{
          if(wordState.id === info.id){
            info.solve = false;
            info.imgTalk = talkAnimation[0].img4
          }
          updateCompleteInformations.push(info)
        })

        setCompleteInformations(updateCompleteInformations);
      }

  }

  const speech = ()=>{
    SpeechRecognition.startListening()
  }

  return (
     <div className="background-complete">
       <div className="container ">
         <Helmet>
           {/* Define inline CSS for body tag */}
           <body/>
           {/* Or include in-file CSS */}
           <style>
             {`
                .background-complete {
                    background-color: #780116 !important;
                    background-image : url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),  
                     url("${body}")
                }
             `}
           </style>
         </Helmet>

         <h1 className="text-center text-capitalize mt-2">
          <span className={`font-weight-bold text-title-span-title mr-2 
         color-2
          `}>
            Complete
          </span>
         </h1>


          <div>
            <ResponsiveMasonry
              columnsCountBreakPoints={{350: 1, 600: 2}}
            >
              <Masonry>
                {
                  completeInformations.map((info, i)=>{
                    return(

                        <Complete
                          info={info}
                          key={i}
                          setBody={setBody}
                          setWordState={setWordState}
                          speechRecognition={speech}
                        />
                    )
                  })
                }
              </Masonry>
            </ResponsiveMasonry>

          </div>

       </div>

       {
         isOver && (
           <ModalFinish
             show={show}
             setShow={setShow}
             clicks={clicks}
           />
         )
       }
     </div>
  );
}

export default CompleteBoard;
