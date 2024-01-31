import React, {useState} from "react";
//import {useParams} from 'react-router-dom';
import {CounterButton} from '../CounterButton';
import {CongratulationMessage} from '../CongratulationMessage';

export const CounterButtonPage = () => {
    //const {name} = useParams();
    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const [hideMessage, setHideMessage] = useState(false);
    const increment = () => setNumberOfClicks(numberOfClicks + 1);
  
    return (
        <>
            <h1>Counter Button Page</h1>
            {hideMessage
            ? null
            : <CongratulationMessage 
                numberOfClicks={numberOfClicks} 
                threshold={10} 
                onHide={() => setHideMessage(true)}/>}
            <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}></CounterButton>
        </>
    );

}