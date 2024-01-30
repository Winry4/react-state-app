import React from "react";
import { PeopleListItem } from "./PeopleListItem";
import styled from 'styled-components';

const Wrapper = styled.div `
    border: 2px solid white;
    padding: 32px;
`;

export const PeopleList = ({chikis}) => {
    return (
        <Wrapper>
        {chikis.map(chikis => <PeopleListItem chikis={chikis} key={chikis.name} />)}
        </Wrapper>
    );
}