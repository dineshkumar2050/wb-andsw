import React,{ useEffect, useState } from 'react';
import EventEmitter from '../EventEmitter';
// const emitter = new EventEmitter();

export default function TestB() {
    const [data, setData] = useState('');
    useEffect(() => {
        EventEmitter.subscribe("test", event => {
            if(event) setTimeout(() => setData(event), 1500);
        })
    },[])
    return (
        <div>
            <h3>TestB component renders here</h3>
            <h4>TestB component receives data from TestA component & renders it here</h4>
            <h4>
                TestB component data here: {data}
            </h4>
        </div>
    )
}
