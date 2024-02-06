import React from "react";
import { CounterButtonCB } from "./CounterButtonCB";
import { CongratulationMessageCB } from "./CongratulationMessageCB";
import { DisplayIf } from "../DisplayIf";

export class CounterButtonPageCB extends React.Component{
    state = {
        hideMessage: false,
        numberOfClicks: 0,
    };

    increment = () => {
        this.setState({numberOfClicks: this.state.numberOfClicks + 1});
    }

    render() {
        const {hideMessage, numberOfClicks} = this.state;
        return (
            <>
                <h1>Counter Button Page</h1>
                <DisplayIf condition={!hideMessage && numberOfClicks>=10}>
                    <CongratulationMessageCB 
                        threshold={10} 
                        onHide={() => this.setState({ hideMessage: true})}/>
                </DisplayIf>
                {/* <CounterButtonCB onIncrement={increment} numberOfClicks={numberOfClicks}></CounterButtonCB> */}
            </>
        );
    }
}