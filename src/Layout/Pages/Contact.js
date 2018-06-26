import './Info.css';
import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';

const Contact = () =>{

return (
<div className = "InfoPage">
	<div className = "ContactPage">
		<div className = "contact">
			<div className = "lContact">
				<i>
					<FontAwesome.FaUser 
                    size = {60}
                    />
				</i>
				<h2>E-mail</h2>
				<a href="mailto:lucasclaude17@gmail.com">lucasclaude17@gmail.com</a>
			</div>
			<div className = "mContact">
				<i>
					<FontAwesome.FaPhone 
                    size = {60}
                    />
				</i>
				<h2>Mobile</h2>
				<a>863-397-4850</a>
			</div>
			<div className = "rContact">
				<i>
					<FontAwesome.FaLinkedin 
                    size = {60}
                    />
				</i>
				<h2>LinkedIn</h2>
				<a href="https://linkedin.com/in/lucasclaude" target = "_blank" rel="noopener noreferrer">LinkedIn</a>
			</div>
		</div>
	</div>
</div>
    )
}



export default Contact;