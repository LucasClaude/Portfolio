import React from 'react';
import './Info.css';
import res from '../assets/Resume.pdf';

const Resume = (props) => {

    return (
         
<div className = "InfoPage">
	<div className = "Resume">
		<a className = "dlbtn" href={res} download>
			<h2 className = "dl">Download Resume</h2>
		</a>
		<div className = "rLeft">
			<ul>
				<li>
					<h1>Experience</h1>
					<ul>
						<li>
							<h2>Software Engineering Project</h2>
							<p> Developed a well-designed IOS application using Swift and Xcode. 
                            The project is being used for several research project by the client. 
                            This project uses the accelerometer in iOS devices for injury and balance 
                            research and injury rehabilitation.</p>
						</li>
						<li>
							<h2>Unity Game Project </h2>
							<p> Have completed a fully working well-designed game in Unity. Includes: 
                            C#, Photoshop all original content. My professor (head of CS department) uses 
                            this project as an example for prospective students touring the school.</p>
						</li>
						<li>
							<h2>Senior Seminar Project</h2>
							<p>CSS, html, JavaScript Web Application Project developed for my Senior Seminar Class.
                            Available on my portfolio website.</p>
						</li>
					</ul>
				</li>
				<li>
					<h1>Education</h1>
					<ul>
						<li>
							<h2>Florida Southern College (2014 - May 2018)</h2>
							<p>I graduated from Florida Southern College with a Bachelor of Science degree in Computer Science.
                               While I maintained a high GPA (3.65), I was also a member of the Men's Lacrosse team at Florida Southen.
                               I learnt a lot at Florida Southern, both in an academic and a team setting. I am currently seeking a development
                               position in Central Florida. 
                           </p>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div className = 'rRight'>
			<ul className = "lang">
				<h2>Languages</h2>
				<li><p>HTML/CSS</p></li>
				<li><p>React/Redux</p></li>
				<li><p>JavaScript</p></li>
				<li><p>jQuery</p></li>
				<li><p>C++</p></li>
				<li><p>C#</p></li>
				<li><p>Java</p></li>
				<li><p>Swift</p></li>
			</ul>
			<ul className = "soft">
				<h2>Software</h2>
                <li><p>Photoshop</p></li>
                    <li><p>Unity</p></li>
                    <li><p>Xcode</p></li>
                    <li><p>VS Code</p></li>
                    <li><p>Final Cut Pro</p></li>
                    <li><p>MacOS</p></li>
                    <li><p>WindowsOS</p></li>
                    <li><p>LinuxOS</p></li>
			</ul>
		</div>
	</div>
</div>
    )
}

export default Resume;