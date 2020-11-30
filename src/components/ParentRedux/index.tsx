import React from 'react';
import { connect } from 'react-redux';
import ChildrenConnected from '../ChildrenRedux';

const ParentRedux:React.FC = (props) => {
    return (
        <>
        <h1>{props.text}</h1>
        <ChildrenConnected />
        </>
    );
}

const connection = connect(store => ({text: store.text}));
const ParentConnected = connection(ParentRedux);

export default ParentConnected;