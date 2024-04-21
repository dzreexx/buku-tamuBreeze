import { count } from 'console';
import { title } from 'process';
import React from 'react';
import { useState } from 'react';

function MyButton() {
    const [count, setCount] = useState(0);

    function kurangClick() {
        setCount(count-1);    
    }

    function tambahClick() {
        setCount(count+1);    
    }
    
    function reset() {
        setCount(0);
    }

    return (
        <div>
          <div>
        { count >= 10 ? (
        <>
        <h1>{count >= 10 ? (
          <p>done</p>
        ) : count < 0 ? (
            <p>Gila</p>
        ) : (
          <p>{count}</p>
        )}</h1>
        <button onClick={reset}>Reset</button>
        </>) : count < 0 ? (<><h1>{count >= 10 ? (
            <p>done</p>
          ) : count < 0 ? (
              <p>Gila</p>
          ) : (
            <p>{count}</p>
          )}</h1>
          <button onClick={reset}>Reset</button>
        </>) : (
          <>
          <button onClick={kurangClick}>-</button>
          <h1>{count >= 10 ? (
            <p>done</p>
          ) : count < 0 ? (
              <p>Gila</p>
          ) : (
            <p>{count}</p>
          )}</h1>
          <button onClick={tambahClick}>+</button>
          <button onClick={reset}>Reset</button>
          </>
        )}
          </div>
        </div>
    );

}



export default function index() {
    return (
        <>
        <MyButton></MyButton>
        </>
    );
}