import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from '../pages';

export const ProtectedPage = () => {
    const isAuthed = false;
    return isAuthed
    ?(
        <h1>Only authed users should be able to see this</h1>
    ) : (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/protected" element={<Navigate replace to="/" />} />
        </Routes>
    )
    ;
}