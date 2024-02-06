import React from "react";

export class CongratulationMessageCB extends React.Component {
    render() {
        const {threshold, onHide} = this.props;
        return (
            <>
                <h1> Congratulations! You clicked {threshold} times!</h1>
                <button onClick={onHide}>Hide!</button>
            </>
        );
    }
}