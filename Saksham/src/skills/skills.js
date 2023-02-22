
import React from 'react'
import "./skills.css";
import Header from '../header/Header';
// import Skills from '../skills/skills';
// const Home = () => {
const skills = ({skillSet , handleAddItems}) => {
  return (
    <>

<Header />

<div>
<div className='skills'>
<div className='heading'>
<div className='textheading'>  
<h2>Technical Skills:-</h2>
</div>
</div>
<div className='skills'>
         {skillSet.map((skillSet)=>(
             <div className='card'> 
            
             <div>
                 <img className='skills-image' src={skillSet.image} alt={skillSet.name} />
             </div>
             <div>
             <h3 className='skills-name'>{skillSet.name}</h3>
             </div>
             <div className='skills-price'>{skillSet.description}
             </div>
             <div><button className='skills-button' ></button>
             </div>
             </div>
         ))
         }
     
</div>
</div>

</div>
</>
  )}
export default  skills;




