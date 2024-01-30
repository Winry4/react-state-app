import React from "react";

export const Greeting = ({name, numberOfMessages}) => {
    //console.log(props);
    if (!name) return null;
    let isMoring= (new Date()).getHours() < 12;
    let greetingHeader = isMoring
    ? <h3>Good Morning {name}!</h3>
    : <h3>Good Evening {name}!</h3>;

    return (
        <>
            {greetingHeader}
            {numberOfMessages ===0
                ? null: <p>You have {numberOfMessages} new messages</p>}
        </>
    )
}
