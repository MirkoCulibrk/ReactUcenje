import React from 'react';
import './ActorCard.scss';
const ActorCard = ({ actor }) => {
    return (
        <figure>
            <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.character}
            />
            <figcaption>
                <h2>{actor.character}</h2>
            </figcaption>
        </figure>
    );
};

export default ActorCard;
