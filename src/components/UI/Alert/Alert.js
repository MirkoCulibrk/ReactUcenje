import React, { useEffect } from 'react';
import './Alert.scss';
const Alert = ({ type, message, showAlert }) => {
    useEffect(() => {
        setTimeout(() => {
            showAlert(false);
        }, 3000);
    }, []);
    return (
        <>
            <div className={`alert ${type}`}>{message}</div>
        </>
    );
};

export default Alert;
