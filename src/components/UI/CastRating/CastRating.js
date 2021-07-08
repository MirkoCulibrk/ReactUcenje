/*eslint-disable */
import React, { useState } from 'react';
import Alert from '../Alert/Alert';
import axios from 'axios';
import './CastRating.scss';
const CastRating = ({ id }) => {
    const [inputRating, setInputRating] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const changeRating = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${process.env.REACT_APP_API_KEY}`
            );
            const sessionId = data.guest_session_id;
            const response = await axios.post(
                `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${process.env.REACT_APP_API_KEY}&guest_session_id=${sessionId}`,
                {
                    value: inputRating,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (response.status === 201) {
                setShowAlert(true);
                setAlertType('success');
                setAlertMessage('Your vote is sent');
                setInputRating('');
            }
        } catch (error) {
            console.log(error);
            setShowAlert(true);
            setAlertType('error');
            setAlertMessage('Something went wrong');
        }
    };
    return (
        <div className="details-rating">
            <form onSubmit={changeRating}>
                <input
                    type="text"
                    name="rating"
                    placeholder="change rating"
                    value={inputRating}
                    onChange={(e) => setInputRating(e.target.value)}
                />
                <button type="submit">Change rating</button>
            </form>
            {showAlert && (
                <Alert
                    showAlert={setShowAlert}
                    type={alertType}
                    message={alertMessage}
                ></Alert>
            )}
        </div>
    );
};

export default CastRating;
