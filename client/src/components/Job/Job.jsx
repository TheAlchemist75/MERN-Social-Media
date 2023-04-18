import React from 'react'
import ProfileSide from '../profileSide/ProfileSide'
import RightSide from '../RightSide/RightSide'

import './Job.css'

function Job() {
  return (
    <div>
        <div>
            <div className="Job">
                <ProfileSide />

                <div>
                    <div div className='res'>
                        <div className='resHead' style={{ textAlign: 'center' }}>
                            Job & Internships
                        </div>
                        <div className='announcement-header'>
								<p>Check out the latest Job opportunities</p>
							</div>

                        <div style={{padding: "10px"}}>
                        <div className="job" >
                            <img src="https://via.placeholder.com/350x150" alt="Job Logo"/>
                            <h2>Web Developer</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lorem ac sodales viverra, mi lorem dignissim purus, non ullamcorper nibh velit id mauris.</p>
                            <ul>
                                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1l-8 8h5v14h6v-14h5z"/></svg> Full-time</li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22l8-8h-5v-9h-6v9h-5z"/></svg> London, UK</li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 11h2v2h-2v-2zm-8 0h2v2H8v-2zm3.56 8.69c-1.75 0-3.29-.83-4.26-2.11l1.5-1.5c.72.72 1.68 1.17 2.76 1.17.35 0 .68-.04 1-.1v-2.04c-.29.06-.59.1-.91.1-.9 0-1.74-.35-2.37-.98l1.5-1.5c.74.75 1.74 1.23 2.87 1.23 2.21 0 4-1.79 4-4s-1.79-4-4-4c-1.13 0-2.13.48-2.87 1.23l-1.5-1.5c.63-.63 1.47-.98 2.37-.98.32 0 .62.04.91.1v-2.04c-.32-.06-.65-.1-1-.1-1.08 0-2.04.45-2.76 1.17l-1.5-1.5C7.27 5.83 8.81 5 10.56 5c2.21 0 4 1.79 4 4s-1.79 4-4 4z"/></svg> $60,000 - $80,000</li>
                            </ul>
                            <button className="apply">Apply Now</button>
                        </div>

                        <div className="job">
                            <img src="https://via.placeholder.com/350x150" alt="Job Logo"/>
                            <h2>Web Developer</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lorem ac sodales viverra, mi lorem dignissim purus, non ullamcorper nibh velit id mauris.</p>
                            <ul>
                                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1l-8 8h5v14h6v-14h5z"/></svg> Full-time</li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22l8-8h-5v-9h-6v9h-5z"/></svg> London, UK</li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 11h2v2h-2v-2zm-8 0h2v2H8v-2zm3.56 8.69c-1.75 0-3.29-.83-4.26-2.11l1.5-1.5c.72.72 1.68 1.17 2.76 1.17.35 0 .68-.04 1-.1v-2.04c-.29.06-.59.1-.91.1-.9 0-1.74-.35-2.37-.98l1.5-1.5c.74.75 1.74 1.23 2.87 1.23 2.21 0 4-1.79 4-4s-1.79-4-4-4c-1.13 0-2.13.48-2.87 1.23l-1.5-1.5c.63-.63 1.47-.98 2.37-.98.32 0 .62.04.91.1v-2.04c-.32-.06-.65-.1-1-.1-1.08 0-2.04.45-2.76 1.17l-1.5-1.5C7.27 5.83 8.81 5 10.56 5c2.21 0 4 1.79 4 4s-1.79 4-4 4z"/></svg> $60,000 - $80,000</li>
                            </ul>
                            <button className="apply">Apply Now</button>
                        </div>

                        <div className="job">
                            <img src="https://via.placeholder.com/350x150" alt="Job Logo"/>
                            <h2>Web Developer</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lorem ac sodales viverra, mi lorem dignissim purus, non ullamcorper nibh velit id mauris.</p>
                            <ul>
                                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1l-8 8h5v14h6v-14h5z"/></svg> Full-time</li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22l8-8h-5v-9h-6v9h-5z"/></svg> London, UK</li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 11h2v2h-2v-2zm-8 0h2v2H8v-2zm3.56 8.69c-1.75 0-3.29-.83-4.26-2.11l1.5-1.5c.72.72 1.68 1.17 2.76 1.17.35 0 .68-.04 1-.1v-2.04c-.29.06-.59.1-.91.1-.9 0-1.74-.35-2.37-.98l1.5-1.5c.74.75 1.74 1.23 2.87 1.23 2.21 0 4-1.79 4-4s-1.79-4-4-4c-1.13 0-2.13.48-2.87 1.23l-1.5-1.5c.63-.63 1.47-.98 2.37-.98.32 0 .62.04.91.1v-2.04c-.32-.06-.65-.1-1-.1-1.08 0-2.04.45-2.76 1.17l-1.5-1.5C7.27 5.83 8.81 5 10.56 5c2.21 0 4 1.79 4 4s-1.79 4-4 4z"/></svg> $60,000 - $80,000</li>
                            </ul>
                            <button className="apply">Apply Now</button>
                        </div>
                        </div>
                    </div>
                </div>
                <RightSide />
            </div>

            
        </div>
    </div>
  )
}

export default Job
