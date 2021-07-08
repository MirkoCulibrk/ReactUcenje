/* eslint-disable */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Autocomplete.scss';
const Autocomplete = ({
    userInput,
    setUserInput,
    setFilteredSuggestion,
    filteredSuggestions,
}) => {
    const history = useHistory();
    const [activeSuggestion, setActiveSuggestion] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    console.log(userInput);
    const onChange = (e) => {
        setActiveSuggestion(0);
        setFilteredSuggestion(filteredSuggestions);
        setShowSuggestions(true);
        setUserInput(e.target.value);
    };
    const onClick = () => {
        setActiveSuggestion(0);
        setFilteredSuggestion([]);
        setShowSuggestions(false);
        setUserInput(filteredSuggestions[activeSuggestion]);
        chageRoute();
    };
    const onKeyDown = (e) => {
        const ENTER = 13;
        const UP_ARROW = 38;
        const DOWN_ARROW = 40;
        if (e.keyCode === ENTER) {
            setActiveSuggestion(0);
            setShowSuggestions(false);
            setUserInput(filteredSuggestions[activeSuggestion]);
            chageRoute();
        } else if (e.keyCode === UP_ARROW) {
            if (activeSuggestion === 0) {
                return;
            }
            setActiveSuggestion(activeSuggestion - 1);
        } else if (e.keyCode === DOWN_ARROW) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }
            setActiveSuggestion(activeSuggestion + 1);
        }
    };
    const chageRoute = () => {
        // history.push({
        //     pathname:`/movie/${filteredSuggestions[activeSuggestion]}`
        //     id:
        // });
    };
    let suggestionsListComponent;
    if (showSuggestions && userInput) {
        if (filteredSuggestions.length) {
            suggestionsListComponent = (
                <ul className="suggestions">
                    {filteredSuggestions.map((suggestion, index) => {
                        let className;
                        if (index === activeSuggestion) {
                            className = 'suggestion-active';
                        }
                        return (
                            <li
                                className={className}
                                key={suggestion}
                                onClick={onClick}
                            >
                                {suggestion}
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            suggestionsListComponent = (
                <div className="no-suggestions">
                    <em>No suggestions available.</em>
                </div>
            );
        }
    }
    return (
        <div className="autocomplete">
            <input
                type="text"
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={userInput}
                placeholder="Search movie"
            />
            {suggestionsListComponent}
        </div>
    );
};

export default Autocomplete;
