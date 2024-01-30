import React from "react";
import {PeopleList} from '../PeopleList';

const chikis =  [{
    name: 'Ignacio',
    age: 30,
    hairColor: 'dark brown',
  },{
    name: 'Andres',
    age: 31,
    hairColor: 'brown',
  },{
    name: 'Silvia',
    age: 29,
    hairColor: 'dark brown',
  },{
    name: 'Rebeca',
    age: 29,
    hairColor: 'blonde',
  }];

  export const PeopleListPage = () => (
        <>
            <h1>The People List Page</h1>
            <PeopleList chikis={chikis}></PeopleList>
        </>
    );
