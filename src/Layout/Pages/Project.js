import './Info.css';
import React from 'react';
import har from '../assets/harambe.png';
import rea from '../assets/reactProject.png';
import soft from '../assets/SoftEng.png';

const data = require('./Projects.json');

const Projects = () =>{
    const name1 = data.Project.Project1.Name;
    const name2 = data.Project.Project2.Name;
    const name3 = data.Project.Project3.Name;
    const description1 = data.Project.Project1.Description;
    const description2 = data.Project.Project2.Description;
    const description3 = data.Project.Project3.Description;
   
    return (
<div className = "InfoPage">
	<div className = "ProjectPage">
		<div className = "projs">
			<div className = "leftP">
				<div className = "image">
					<img src={har} alt="Harambe"/>
					<div className = "image-overlay">
						<div className="image-link">
							<a href="https://github.com/LucasClaude/HarambeGame" rel="noopener noreferrer" target="_blank" className="btn">Open</a>
						</div>
					</div>
				</div>
				<h1 >{name1}  </h1>
				<p> {description1}</p>
			</div>
			<div className = "middleP">
				<div className = "image">
					<img src={soft} alt="Harambe"/>
					<div className = "image-overlay">
						<div className="image-link">
							<a href="https://github.com/LucasClaude/Software-Engineering" rel="noopener noreferrer" target="_blank" className="btn">Open</a>
						</div>
					</div>
				</div>
				<h1>{name2}  </h1>
				<p> {description2}</p>
				<div className = "image"></div>
			</div>
			<div className = "rightP">
				<div className = "image">
					<img src={rea} alt="Harambe"/>
					<div className = "image-overlay">
						<div className="image-link">
							<a href="https://github.com/LucasClaude/HarambeGame" rel="noopener noreferrer" target="_blank" className="btn">Open</a>
						</div>
					</div>
				</div>
				<h1>{name3}</h1>
				<p> {description3}</p>
				<div className = "image"></div>
			</div>
		</div>
	</div>
</div>
        
    )
}












export default Projects;