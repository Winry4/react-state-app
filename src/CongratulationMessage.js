import React, {useEffect} from "react";

export const CongratulationMessage = ({threshold, onHide}) => {
    return (
        <>
            <h1> Congratulations! You clicked {threshold} times!</h1>
            <button onClick={onHide}>Hide!</button>
        </>
    );
        
}