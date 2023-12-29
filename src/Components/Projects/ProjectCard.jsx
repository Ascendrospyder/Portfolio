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
    <div
      style={{
        width: '300px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
      }}
    >
      <img
        src={image}
        alt='Card'
        style={{
          maxWidth: '500px',
          maxHeight: '100px',
          width: '100%',
          height: 'auto',
        }}
      />
      <h2 style={{ marginTop: '8px' }}>{title}</h2>
      <hr style={{ margin: '8px 0' }} />
      <p style={{ fontSize: '1rem', whiteSpace: 'pre-wrap' }}>
        {showFullDescription ? description : `${description.substring(0, 100)}...`}
        {!showFullDescription && (
          <button
            onClick={toggleDescription}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              color: '#007bff',
              cursor: 'pointer',
            }}
          >
            Read more
          </button>
        )}
      </p>
      {showFullDescription && (
        <button
          onClick={toggleDescription}
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            color: '#007bff',
            cursor: 'pointer',
          }}
        >
          Show less
        </button>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '8px',
        }}
      >
        {languages.map((language, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #007bff',
              color: 'lightblue',
              borderRadius: '4px',
              padding: '4px 8px',
              marginRight: '4px',
              display: 'inline-block',
              fontSize: '0.8rem',
            }}
          >
            {language}
          </div>
        ))}
      </div>
      <button
        onClick={handleProjectLinkClick}
        style={{
          marginTop: '20px',
          padding: '8px 16px',
          borderRadius: '4px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease-in-out',
        }}
      >
        View Project
      </button>
    </div>
  );
};

export default ProjectCard;
