import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CardStyle.css';

const Card = ({ title, description, videoUrl }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);

  const handleVideoClick = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  const handleExpandClick = () => {
    setIsVideoExpanded(!isVideoExpanded);
  };

  return (
    <div className={`card ${isVideoExpanded ? 'expanded' : ''}`}>
      <div className="card-content">
        <div id="myVideo" className={`video-container ${isVideoPlaying ? 'playing' : ''}`}>
          <video
            src={videoUrl}
            onClick={handleVideoClick}
            className={`video ${isVideoExpanded ? 'expanded' : ''}`}
            controls
          />
          <div className="expand-button" onClick={handleExpandClick}>
            {isVideoExpanded ? '-' : '+'}
          </div>
        </div>
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
};

export default Card;
