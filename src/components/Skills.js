import React from 'react'
import skill from './icons/skill.png'
import './styles/Skills.scss'
import resume from './icons/SahilGarg_CV.pdf';

function Skills() {
  return (<>
    <h1 className="skill-header">Skills</h1>
    <div className="skills-app" id="skills">
        
        <div className="resume-button">
          <a href={resume} download>  <button><span>Resume</span></button></a>
        </div>
        <div className="skill-image">
            <img src={skill} alt="skills"/>
        </div>
      
    </div>
 </> )
}

export default Skills
