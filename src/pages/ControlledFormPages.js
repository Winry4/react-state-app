import React, {useState} from "react";
import { Button } from "../Button";

export const ControlledFormPages = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('');
    return(
        <form>
            <h3>Please enter your info </h3>
            <div>
                <input onChange={e=> setName(e.target.value)} value={name} type="text" placeholder="Name" />
            </div>
            <div>
                <input onChange={e=> setEmail(e.target.value)} value={email} type="text" placeholder="Email" />
            </div>
            <div>
                <input onChange={e=> setFavoriteColor(e.target.value)} value={favoriteColor} type="text" placeholder="Favorite Color" />
            </div>
            <Button onClick={e => {
                alert(`
                Your name is ${name}, 
                your email is ${email},
                and your favorite color is ${favoriteColor}!
                `);
                e.preventDefault();
                }}>Submit</Button>
        </form>
    );
}