import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import Children from '../Children';

export default function Parent() {
    const text = useSelector(state => state.text)
    return (
        
        <>
            <h1>
               {text}
            </h1>
            <Children />
        </>
    );
}