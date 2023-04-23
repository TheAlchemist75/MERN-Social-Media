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

                    <div className="club">
                        <div className="club-info">
                            <h2>NSS @ Terna</h2>
                            <p>National Service Scheme is a noble experiment in academic extension. It inculcates the spirit of voluntary work among students and teachers through sustained community interaction.</p>
                            <a href="https://ternaengg.ac.in/activities/nss-terna/" className="btn">Join Now</a>
                        </div>
                        <div className="club-img">
                            <img src="https://res.cloudinary.com/dcprg19es/image/upload/v1682274812/Social%20Media/kqzyjlmcxbqrxnos1rj3.png" alt="Student Club Image" />
                        </div>
                    </div>

                    <div className="club">
                        <div className="club-info">
                            <h2>TECRobo Club</h2>
                            <p>TECRobo Club is an initiative of our college to promote Robotics not just as a hobby but a career option too. </p>
                            <a href="https://ternaengg.ac.in/activities/tecrobo-club/" className="btn">Join Now</a>
                        </div>
                        <div className="club-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQVNRDDAvOEr380WdqeNaW1qNxm66VTdclqA&usqp=CAU" alt="Student Club Image" />
                        </div>
                    </div>


                 </div>

            <RightSide />
        </div>
    </div>
  )
}

export default Student;
