import { useState, useEffect } from "react";

import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Modal } from "react-bootstrap";

import State from "../State/State";

const States = () => {

    const[states, setStates] = useState(null)
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);


    const getStates = async() => {
        console.log('running');

        try{
            console.log('running');
            const res = await fetch('http://localhost:8000/states')
            console.log(res);
            const data = await res.json()
            console.log(data);
            setStates(data)
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getStates();
    },[])

    console.log(states);

    if (!states) return(
        <h1>loading</h1>
    )

    states.sort(function(a, b){
        const stateA=a.name.toLowerCase(), stateB=b.name.toLowerCase()
        if (stateA < stateB) //sort string ascending
            return -1 
        if (stateA > stateB)
            return 1
        return 0 //default return value (no sorting)
    })

    return (
        <>
        <h1>The states you have been to:</h1>
        <ListGroup>
          
            {states.map((state, i) => {
                return <State getStates={getStates}state={state} i={i} />
            })}
        </ListGroup>
        </>
    );
};

export default States;