import React, { useEffect } from "react";
import {useNavigate } from "react-router-dom";

export const ProtectedPage = () => {
    const isAuthed = true;
    const navigate = useNavigate();
    useEffect(() => {
        if(!isAuthed) {
            navigate('/');
        }
    });
    return (
        <h1>Only authed users should be able to see this</h1>
    );
}