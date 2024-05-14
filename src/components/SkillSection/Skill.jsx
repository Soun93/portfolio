import './Skill.css';

export const Skill = ({ skillName }) => {
  return (
    <div className='skill-container'>
      <svg  role='img'>
        <use xlinkHref={`/images/svg-elements.svg#${skillName}`}></use>
      </svg>
      <span>{skillName}</span>
    </div>
  );
}

export default Skill;