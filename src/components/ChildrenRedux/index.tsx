import React from 'react';
import {useDispatch} from 'react-redux';
import TextActions from '../../redux/actions/textReducer';

const textActions = new TextActions();

const ChildrenReact:React.FC = (props) => {
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(textActions.setText("Gostei"))}>
            Mudar Texto
        </button>
    );
}

export default ChildrenReact;
