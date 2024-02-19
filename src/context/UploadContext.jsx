import { useState } from 'react';
import Context from './Context'
import PropTypes from 'prop-types';

const UploadContext = (props) => {
    const [username, setUsername] = useState('Sanjay');
    return (
        <Context.Provider value={{username,setUsername}}>
            {props.children}
        </Context.Provider>
    )
}

UploadContext.propTypes = {
    children: PropTypes.node.isRequired
};

export default UploadContext
