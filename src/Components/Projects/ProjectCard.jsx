import React, { useState } from 'react';
import './projects.scss';

const ProjectCard = ({ title, description, image, projectLink, languages }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleProjectLinkClick = () => {
    window.open(projectLink, '_blank'); // Open the link in a new tab
  };

  return (
    <div className='project-card'>
      <img src={image} alt='Card' className='project-image' />
      <h2 className='project-title'>{title}</h2>
      <hr />
      <p className='project-description'>
        {showFullDescription
          ? description
          : `${description.substring(0, 100)}...`}
        {!showFullDescription && (
          <button className='read-more-button' onClick={toggleDescription}>
            Read more
          </button>
        )}
      </p>
      {showFullDescription && (
        <button className='read-more-button' onClick={toggleDescription}>
          Show less
        </button>
      )}
      <div className='languages-container'>
        {languages.map((language, index) => (
          <div key={index} className='language-badge'>
            {language}
          </div>
        ))}
      </div>
      <button className='project-link-button' onClick={handleProjectLinkClick}>
        View Project
      </button>
    </div>
  );
};

export default ProjectCard;
