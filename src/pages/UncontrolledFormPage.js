import React from "react";

export const UncontrolledFormPage = () => {
    const nameInput =  React.createRef();
    const emailInput = React.createRef();
    const favoriteInput = React.createRef();

    return (
        <form>
            <h3>Please enter your info </h3>
            <div>
                <input ref={nameInput} type="text" placeholder="Name" />
            </div>
            <div>
                <input ref={emailInput} type="text" placeholder="Email" />
            </div>
            <div>
                <input ref={favoriteInput} type="text" placeholder="Favorite Color" />
            </div>
            <button onClick={e => {
                alert(`
                Your name is ${nameInput.current.value}, 
                your email is ${emailInput.current.value},
                and your favorite color is ${favoriteInput.current.value}!
                `);
                e.preventDefault();
                }}>Submit</button>
        </form>
    );
}