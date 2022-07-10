import React,{ useEffect } from 'react';
import EventEmitter from '../EventEmitter';
// const emitter = new EventEmitter();

export default function TestA() {
    useEffect(() => {
        console.log('--EventEmitter-- -> ', EventEmitter);
        EventEmitter.dispatch("test", 'Data passed from TestA component rendering in TestB Component')
    },[])
    return (
        <div>
            <h3>TestA component renders here</h3>
            <h4>
                TestA component emits an event and sends data to TestB component which is a sibling element to TestA
            </h4>
        </div>
    )
}
