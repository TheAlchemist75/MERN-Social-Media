import React from 'react'
import ProfileSide from '../profileSide/ProfileSide'
import RightSide from '../RightSide/RightSide'

import './Resources.css'

function Resources() {
  return (
    <div>
        <div className="Resources">
            <ProfileSide />

            <div>
                <div className='res'>
					<div className='resHead' style={{ textAlign: 'center' }}>
						Spread the knowledge
					</div>

					<div style={{ padding: '20px', textAlign: 'center' }}>
						<form action='' method='post' encType='multipart/form-data' className='uploadContainer'>
							<label
								htmlFor='pdf-file'
								style={{ paddingRight: '40px', marginLeft: '30px', color: 'black' }}>
								Select a PDF file:
							</label>
							<input
								style={{ border: '2px solid black', borderRadius: '10px', height: "25px", padding: "5px", width: "280px"}}
								type='file'
								id='pdf-file'
								name='pdf-file'
								accept='.pdf'/>
							<br />
							<label
								style={{ paddingRight: '30px', marginLeft: '40px', color: 'black' }}
								htmlFor='dropdown'
							>
								Select the course:
							</label>
							<select id='dropdown' name='fruit'>
								<option className='opt' value='CS'>
									Computer Engineering
								</option>
								<option className='opt' value='IT'>
									IT Engineering
								</option>
								<option className='opt' value='Electrical'>
									Electrical Engineering
								</option>
								<option className='opt' value='Mechanical'>
									Mechanical Engineering
								</option>
								<option className='opt' value='Civil'>
									CIvil Engineering
								</option>
							</select>
							<input className='uploadButton' type='submit' value='Upload' />
						</form>
					</div>

					<div style={{ padding: '20px', width: "100%"}}>
						<div className='resBox'>
							<div className='resContent'>
								<h2 style={{ color: 'black' }}>Computer Engineering</h2>
							</div>
							<img
								className='resImg'
								src='https://res.cloudinary.com/dcprg19es/image/upload/v1679941252/Social%20Media/cs1_zkpnqk.png'
								alt='CS_Image'
							/>
						</div>
						<br />

						<div className='resBox'>
							<div className='resContent'>
								<h2 style={{ color: 'black' }}>IT Engineering</h2>
							</div>
							<img
								className='resImg'
								src='https://res.cloudinary.com/dcprg19es/image/upload/v1679940949/Social%20Media/it1_nuwvwh.png'
								alt='IT_Image'
							/>
						</div>
						<br />

						<div className='resBox'>
							<div className='resContent'>
								<h2 style={{ color: 'black' }}>Elec. Engineering</h2>
							</div>
							<img
								className='resImg'
								src='https://res.cloudinary.com/dcprg19es/image/upload/v1679940957/Social%20Media/elec_wq012r.jpg'
								alt='ELTX_Image'
							/>
						</div>
						<br />

						<div className='resBox'>
							<div className='resContent'>
								<h2 style={{ color: 'black' }}>Mech. Engineering</h2>
							</div>
							<img
								className='resImg'
								src='https://res.cloudinary.com/dcprg19es/image/upload/v1679940963/Social%20Media/mech_irduom.jpg'
								alt='MECH_Image'
							/>
						</div>
						<br />

						<div className='resBox'>
							<div className='resContent'>
								<h2 style={{ color: 'black' }}>Civil Engineering</h2>
							</div>
							<img
								className='resImg'
								src='https://res.cloudinary.com/dcprg19es/image/upload/v1679940953/Social%20Media/civil_yzohr8.jpg'
								alt='CIVIL_Image'
							/>
						</div>
					</div>
					<br />
				</div>
            </div>

            <RightSide />
        </div>
    </div>
  )
}

export default Resources;
