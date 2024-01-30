import React, {useEffect} from "react";

export const CongratulationMessage = ({numberOfClicks, threshold, onHide}) => {
    useEffect( () => {
        return () => console.log('CongratulationMessage hide')
    }, []);
    return numberOfClicks >= threshold
        ? <>
            <h1> Congratulations! You clicked {threshold} times!</h1>
            <button onClick={onHide}>Hide!</button>
        </>
        : null ;
}