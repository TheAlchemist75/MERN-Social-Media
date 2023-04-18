import React from 'react'
import { LocationOn, Work, MonetizationOn} from "@mui/icons-material";

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
                                <li><Work /> Full-time</li>
                                <li><LocationOn/>London, UK</li>
                                <li><MonetizationOn /> $60,000 - $80,000</li>
                            </ul>
                            <button className="apply">Apply Now</button>
                        </div>

                        <div className="job" >
                            <img src="https://via.placeholder.com/350x150" alt="Job Logo"/>
                            <h2>Web Developer</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lorem ac sodales viverra, mi lorem dignissim purus, non ullamcorper nibh velit id mauris.</p>
                            <ul>
                                <li><Work /> Full-time</li>
                                <li><LocationOn/>London, UK</li>
                                <li><MonetizationOn /> $60,000 - $80,000</li>
                            </ul>
                            <button className="apply">Apply Now</button>
                        </div>

                        <div className="job" >
                            <img src="https://via.placeholder.com/350x150" alt="Job Logo"/>
                            <h2>Web Developer</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lorem ac sodales viverra, mi lorem dignissim purus, non ullamcorper nibh velit id mauris.</p>
                            <ul>
                                <li><Work /> Full-time</li>
                                <li><LocationOn/>London, UK</li>
                                <li><MonetizationOn /> $60,000 - $80,000</li>
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
