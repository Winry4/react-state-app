import React, {useEffect} from "react";
import { SucessButton } from "./Button";

export const CongratulationMessage = ({threshold, onHide}) => {
    return (
        <>
            <h1> Congratulations! You clicked {threshold} times!</h1>
            <SucessButton onClick={onHide}>Hide!</SucessButton>
        </>
    );
        
}