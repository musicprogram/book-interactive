import {randomImg} from "../../GlobalState";

export const changeBackground = (num, setImgBackground) =>{
    const number = (num > 0) && (num % 2 === 0); // multiplos de 2
    let imgRa;
    if(number){
        imgRa = randomImg();
        setImgBackground(imgRa);
    }
}