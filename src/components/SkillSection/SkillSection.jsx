import React, { useEffect } from 'react';
import Skill from './Skill';
import './SkillSection.css';

const SkillSection = () => {
  const skillList = [ 'html', 'javascript', 'react', 
                      'css', 'ruby', 'git', 'linux', 'saas', 'postgreSQL'];


  return (
    <section className='skills-section' id='skills'>
      <h3>Skills</h3>
      <div className='skills-section-container'>
        <div className='skill-wrapper'>
          {skillList.map((skill, index) => (
            <Skill key={index} skillName={skill} />
          ))}
          {skillList.map((skill, index) => (
            <Skill key={index} skillName={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
