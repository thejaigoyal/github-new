
import React from 'react'
import "./home.css";
import Header from '../header/Header';
 import Skills from '../skills/skills';
// const Home = () => {
const Home = (props) => {
  return (
    <>
<div>
<Header />
<div className='skills'>
<div className='heading'>
<div className='textheading'>  
<h2>Objective</h2>
</div>
</div>
<p className='obj'>To gain a core position in a dynamic organization where my skills could be an asset to achieve organization’s objectives in an efficient and
self-motivated manner. To continuously enhance my skills and knowledge through dedication, honesty and hard work and use them for
organizational growth.</p>
</div>


<div className="skills">
<div className='heading'>
<div className='textheading'>  
<h2>Education:-</h2>
</div>
</div>

<div>

<div className='school'>
<div className='schooldetails'>
<h4 className='skills-price'>Master of Computer Applications (Pursuing)</h4> 
<h4 className='skills-price'>Thapar Institution of Engineering and Technology, Patiala, India</h4>
<p>August 2021-Present</p>
<p>CGPA: 8.24/10</p>
</div>
<div className='schoolimg'>
<a href='https://www.thapar.edu/'><img src="./pics/tiet.jpg" height='120px' width='120px' alt='Thapar Institution of Engineering and Technology, Patiala, India' /></a>
</div>
</div>

<div className='school'>
<div className='schooldetails'>
<h4 className='skills-price'>Bachelor of Computer Applications</h4> 
<h4 className='skills-price'>Apeejay College of Fine Arts, Jalandhar, India</h4>
<p>July 2018 - July 2021</p>
<p>Percentage:70.00</p>
</div>
<div className='schoolimg'>
<a href='https://acfa.apeejay.edu/'> <img src="./pics/acfa.jpg" height='120px' width='120px' alt='Bachelor of Computer Applications' /></a>
</div>
</div>

<div className='school'>
<div className='schooldetails'>
<h4 className='skills-price'>HSC (12th)</h4> 
<h4 className='skills-price'>Swami Sant Dass Public School, Jalandhar, India</h4>
<p>May 2017 - June 2018</p>
<p>Percentage:64.4</p>
</div>
<div className='schoolimg'>
<a href='https://www.swamisantdass.com/'><img src="./pics/ssdps.jpg" height='120px' width='120px' alt='Thapar Institution of Engineering and Technology, Patiala, India' /></a>
</div>
</div>

<div className='school'>
<div className='schooldetails'>
<h4 className='skills-price'>SSC (10th)</h4> 
<h4 className='skills-price'>Swami Sant Dass Public School, Jalandhar, India</h4>
<p>May 2017 - June 2018</p>
<p>Percentage:66.5</p>
</div>
<div className='schoolimg'>
<a href='https://www.swamisantdass.com/'><img src="./pics/ssdps.jpg" height='120px' width='120px' alt='Thapar Institution of Engineering and Technology, Patiala, India' /></a>
</div>
</div>
</div>
</div>

{/* Projects here */}


<div className="skills">
<div className='heading'>
<div className='textheading'>  
<h2>Projects:-</h2>
</div>
</div>

<div>


<div className='project'>
<h4 className='skills-price'><a href='https://github.com/SakshamJindal3/Face-Mask-Detection'>Face Mask Detection</a></h4> 
<p>Created project to detect face mask using OpenCV, Tensorflow, pygame and many more libraries. This system can therefore be used in real-
time applications which require face-mask detection for safety purposes due to the outbreak of Covid-19. This project can be integrated with
embedded systems for application in airports, railway stations, offices, schools, and public places to ensure that public safety guidelines are
followed.</p>
</div>


<div className='project'>
<h4 className='skills-price'><a href='https://github.com/SakshamJindal3/DrowsenessDetction'>Drowsiness Detection</a></h4> 
<p>Created project to detect whether the driver is alert or sleepy using OpenCV, Tensorflow, numpy and many more libraries. Project is used to
determine how long a given person’s eyes have been closed for. If there eyes have been closed for a certain amount of time, we’ll assume that
they are starting to doze off and play an alarm to wake them up and grab their attention.</p>
</div>




<div className='project'>
<h4 className='skills-price'><a href='https://github.com/SakshamJindal3/Corona-Portal.git'>Corona Portal</a></h4> 
<p>Created project using frontend tools HTML & CSS and backend tool PHP. This website has 4 main pages first one is register in which any
User who so ever wants to take a dose of vaccine can register itself. Second page is login page in which user can login and check dose
availability, Book a slot, Download vaccination certification etc. Third Page is about Vaccination Center Registration where centers can
register itself that is further check and accepted by super admin. Last page is Super admin which is used to verify the corona centers.</p>

</div>




<div className='project'>
<h4 className='skills-price'><a href='https://github.com/SakshamJindal3/Corona-Portal.git'>Parking Management System</a></h4> 
<p>Created project to detect whether a parking slot is empty or not and also this project will detect car’s number from number plate and calculate
parking fare by departure time minus arrival time. This project uses object detection and python3.liberaries included are OpenCV, cvzone,
imutils, easyocr, pandas etc.</p>
</div>


</div>
</div>
{/* cources  */}


<div className="skills">
<div className='heading'>
<div className='textheading'>  
<h2>COURSES:-</h2>
</div>
</div>

<div>


<div className='courses'>
<h4 className='skills-price'>Complete Python Bootcamp from zero to hero (Udemy)</h4> 

</div>


<div className='courses'>
<h4 className='skills-price'>Simplified Approach to DBMS(Udemy)</h4> 

</div>

<div className='courses'>
<h4 className='skills-price'>Data Structures & Algorithms Essentials using C++ (Udemy)</h4> 

</div>


<div className='courses'>
<h4 className='skills-price'>Introduction to C</h4> 

</div>




<div className='courses'>
<h4 className='skills-price'>Web Development Technology</h4> 
</div>


</div>
</div>


{/* technical skills  */}

<Skills skillSet={props.skillSet} />
{/* softskills  */}

<div className="skills">
<div className='heading'>
<div className='textheading'>  
<h2>Soft Skills:-</h2>
</div>
</div>
<div className="soft">
<ul>
<li>Analytical Skills</li>
<li>Time Management</li>
<li>Pragmatic Approach</li>
<li>Punctual and Sincere</li>
<li>Optimistic and Cheerful</li>
<li>GoodCommunication Skills</li>
<li>Quick Learner</li>
<li>Quick Decision Making abilities</li>
</ul>
</div>
</div>
{/* Hobbies  */}

<div className="skills">
<div className='heading'>
<div className='textheading'>  
<h2>Hobbies:-</h2>
</div>
</div>
<div className="soft">
<ul>
<li>Internet Surfing</li>
<li>Traveling</li>
<li>Listening Music</li>
</ul>
</div>
</div>








</div>

    </>
  );
};



export default  Home;