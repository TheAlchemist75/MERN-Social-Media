import React from 'react'

import ProfileSide from '../profileSide/ProfileSide'
import RightSide from '../RightSide/RightSide'

import './Student.css'

function Student() {
  return (
    <div>
        <div className="Student">
            <ProfileSide />

                <div>
                    <div className='res'>
                        <div className='resHead' style={{ textAlign: 'center' }}>
                            Student Organizations
                        </div>
                        <div className='announcement-header'>
                            <p>Join clubs for new experiences.</p>
                         </div>
                    </div>
                 </div>

            <RightSide />
        </div>
    </div>
  )
}

export default Student;
