import React from "react";
import SkillCard from './SkillCard';
import CLogo from '../Skills/images/c-logo.jpg';
import JavaLogo from '../Skills/images/java-logo.jpg'
import JavascriptLogo from '../Skills/images/JS-logo.png'
import TypescriptLogo from '../Skills/images/TS-logo.png'
import PythonLogo from '../Skills/images/py-logo.png'
import PostgresLogo from '../Skills/images/postgres-logo.png'
import ReactLogo from '../Skills/images/react-logo.png'
import ReactNativeLogo from '../Skills/images/react-native-logo.png'

const Skills = () => {
 return (
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
    <SkillCard image={CLogo} title="C" />
    <SkillCard image={JavaLogo} title="Java" />
    <SkillCard image={JavascriptLogo} title="JavaScript" />
    <SkillCard image={TypescriptLogo} title="TypeScript" />
    <SkillCard image={PythonLogo} title="Python" />
    <SkillCard image={PostgresLogo} title="PostgreSQl" />
    <SkillCard image={ReactLogo} title="ReactJS" />
    <SkillCard image={ReactNativeLogo} title="React Native" />
  </div>
 )
}

export default Skills;
