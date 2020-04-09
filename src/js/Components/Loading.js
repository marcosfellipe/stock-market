import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Loading(props) {
    return (
        <FontAwesomeIcon icon={faSpinner} pulse color="#006900" />
    );
}

export default Loading;