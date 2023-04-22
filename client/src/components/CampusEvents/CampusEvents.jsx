import React from 'react'

import ProfileSide from '../profileSide/ProfileSide'
import RightSide from '../RightSide/RightSide'

import './CampusEvents.css'

function CampusEvents() {
  return (
    <div>
        <div className="CampusEvents">
            <ProfileSide />

                <div>
                    <div className='res'>
                        <div className='resHead' style={{ textAlign: 'center' }}>
                            Campus Events
                        </div>
                        <div className='announcement-header'>
                            <p>Check out the upcoming events.</p>
                         </div>
                    </div>
                 </div>

            <RightSide />
        </div>
    </div>
  )
}

export default CampusEvents;
