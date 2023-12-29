import React from 'react';
import './projects.scss';
import ProjectCard from './ProjectCard';
import StudySphereHeader from './images/study-sphere.png';
import FileOrganiserHeader from './images/file-organiser.png';
import TeamsCloneHeader from './images/teams-clone.png';
import BlackoutHeader from './images/blackout.png';

const Projects = () => {
  return (
    <div className='project-container'>
      <div className='scrollable-wrapper'>
        <div className='card-wrapper'>
          <ProjectCard
            image={StudySphereHeader}
            title='Study Sphere'
            description='Study Sphere is a mobile application designed to facilitate collaborative studying among peers. Built using React Native and Expo, it offers a platform for students to connect, organise study groups, and utilise various tools for efficient learning. This project had a strong focus on UI/UX design in order to meet the users usability goals to the best of my ability.'
            projectLink='https://github.com/Ascendrospyder/Study-Sphere'
            languages={['React Native', 'Expo']}
          />
          <ProjectCard
            image={FileOrganiserHeader}
            title='File Organiser'
            description='The File Organiser is a utility designed in python to help you organise your files based on their file extensions. It categorises files into various predefined categories for better file management. We do this by searching for the folder of interest we want to categorise. The script will then intelligently go over all the folders, subfolders and files in the cwd and organise them into folders based on the file extension type.'
            projectLink='https://github.com/Ascendrospyder/FileOrganiser'
            languages={['Python']}
          />
          <ProjectCard
            image={TeamsCloneHeader}
            title='Treats Backend Major Project'
            description='The following project involved 4 people to build the backend of a ”Microsoft Teams” clone using software engineering principles, implementing version control software and effective team work using TypeScript and NodeJS. The following project allowed me to strengthen skills of developing software with a contract, effectively communicate with a group of people I never met before and gave me exposure to TypeScript and NodeJS which is used in the industry.'
            projectLink='https://github.com/Ascendrospyder/Teams-Clone-Backend'
            languages={['TypeScript', 'Node.JS']}
          />
          <ProjectCard
            image={BlackoutHeader}
            title='Back in Blackout'
            description='The following project was to use various OOP principles to develop the backend of a satellite simulation application from scratch given a contract in Java'
            projectLink='https://github.com/Ascendrospyder/Back-In-Blackout'
            languages={['Java', 'OOP']}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
