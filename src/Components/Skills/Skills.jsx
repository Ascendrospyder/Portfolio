import React from 'react';
import SkillCard from './SkillCard';
import CLogo from '../Skills/images/c-logo.jpg';
import JavaLogo from '../Skills/images/java-logo.jpg';
import JavascriptLogo from '../Skills/images/JS-logo.png';
import TypescriptLogo from '../Skills/images/TS-logo.png';
import PythonLogo from '../Skills/images/py-logo.png';
import PostgresLogo from '../Skills/images/postgres-logo.png';
import ReactLogo from '../Skills/images/react-logo.png';
import ReactNativeLogo from '../Skills/images/react-native-logo.png';
import GitLogo from '../Skills/images/git-logo.png';
import UIUXLogo from '../Skills/images/ui-ux-logo.jpg';

const Skills = () => {
  return (
    <div
      className='skills-container'
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        maxHeight: 'calc(100vh - 100px)',
        overflow: 'auto',
        padding: '20px',
      }}
    >
      <SkillCard image={CLogo} title='C' />
      <SkillCard image={JavaLogo} title='Java' />
      <SkillCard image={JavascriptLogo} title='JavaScript' />
      <SkillCard image={TypescriptLogo} title='TypeScript' />
      <SkillCard image={PythonLogo} title='Python' />
      <SkillCard image={PostgresLogo} title='PostgreSQl' />
      <SkillCard image={ReactLogo} title='ReactJS' />
      <SkillCard image={ReactNativeLogo} title='React Native' />
      <SkillCard image={GitLogo} title='Git' />
      <SkillCard image={UIUXLogo} title='UI/UX Design' />
    </div>
  );
};

export default Skills;
