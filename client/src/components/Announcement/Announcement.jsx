import React from 'react'
import ProfileSide from '../profileSide/ProfileSide'
import RightSide from '../RightSide/RightSide'

import './Announcement.css'

function Announcement() {
  return (
    <div className="Announcement">
        <ProfileSide />

				<div className='res'>
					<div className='resHead' style={{marginLeft: '100px'}}>
						Announcements
					</div>

					<div style={{ textAlign: 'center' }}>
						<div className='announcement-container'>
							<div className='announcement-header'>
								<p>Check out the latest Updates and News.</p>
							</div>

							<div className='announcement-pin active'>
								<div className='announcement-title pinned'>
									<span className='pin-icon'>&#x1F4CC;</span>
									<h2 style={{ color: 'black'}}>Festivities Conclude!</h2>
								</div>
								<div className='announcement-date'>April 2, 2023</div>
								<div className='announcement-text'>
									The college fest ended with a huge success as students enjoyed a thrilling concert 
									by Gajendra Verma and an electrifying EDM night featuring DJ Rhea. The event brought 
									students from all over the campus together to dance and cheer, creating a memorable 
									finale to the week-long extravaganza
								</div>
								{/* <a href='#' className='announcement-btn'>
									Learn More
								</a> */}
							</div>

							<div className='announcement'>
								<div className='announcement-title'>
									<h2 style={{ color: 'black'}}>IAT2 exam</h2>
								</div>
								<div className='announcement-date'>April 11, 2023</div>
								<div className='announcement-text'>
									The dates for IAT2 has been announced along with the seating arrangements.
                                    The timetable can be found <a href="https://cdn.discordapp.com/attachments/913766008081244183/1095789717133471764/FH_23_IAT2-Student.docx">here</a>
								</div>
								{/* <a href='#' className='announcement-btn'>
									Learn More
								</a> */}
							</div>

							<div className='announcement'>
								<div className='announcement-title'>
									<h2 style={{ color: 'black'}}>Website redesign</h2>
								</div>
								<div className='announcement-date'>April 9, 2023</div>
								<div className='announcement-text'>
									We have redesigned our website to provide a better user experience. Check it out and
									let us know what you think!
								</div>
								{/* <a href='#' className='announcement-btn'>
									Learn More
								</a> */}
							</div>
						</div>
					</div>
				</div>
        <RightSide />
    </div>
  )
}

export default Announcement
