import React from 'react';
import { Link } from 'react-router-dom';

import './Landing.css'

export default function Landing() {
	const left = document.querySelector('#left-side');
	const handleMove = (e) => {
		left.style.width = `${(e.clientX / window.innerWidth) * 100}%`;
	};
	document.onmousemove = (e) => handleMove(e);
	document.ontouchmove = (e) => handleMove(e.touches[0]);	

	return (
		<div>
			<div className='Topbar'>
				<a href='#' className='brand-logo' style={{padding: "30px"}}>
			        TECSocial.
				</a>
                <Link to='/auth' className='b1'>
				<button type='button' className="btn"> Get started! </button>
			</Link>			
			</div>

			<div className='side' id='left-side'>
				<h2 className='title'>
					A social media application
					<br />
					<span className='fancy'>For the students.</span>
				</h2>
			</div>
			<div className='side' id='right-side'>
				<h2 className='title'>
					A social media application
					<br />
					<span className='fancy'>By the students.</span>
				</h2>
			</div>
            
		</div> 
	);
}
