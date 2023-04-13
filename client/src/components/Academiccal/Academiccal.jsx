import React from 'react'
import ProfileSide from '../profileSide/ProfileSide'
import RightSide from '../RightSide/RightSide'

import './Academiccal.css'

function Academiccal() {
  return (
    <div>
      <div className="Announcement">
        <ProfileSide />

        <div>
            <div className='res'>
				<div className='resHead' style={{marginLeft: '100px'}}>
					Academic Calendar
				</div>
            </div><br/>

            <div class="calendar">
                <table>
                <thead>
                    <tr>
                    <th>Month</th>
                    <th>Event</th>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td rowspan="3">August</td>
                    <td>Registration</td>
                    <td>August 10-12</td>
                    </tr>
                    <tr>
                    <td>Classes Begin</td>
                    <td>August 16</td>
                    </tr>
                    <tr>
                    <td>Last day to add/drop</td>
                    <td>August 23</td>
                    </tr>
                    <tr>
                    <td rowspan="3">September</td>
                    <td>Labor Day (No classes)</td>
                    <td>September 6</td>
                    </tr>
                    <tr>
                    <td>Midterm Exams</td>
                    <td>September 20-24</td>
                    </tr>
                    <tr>
                    <td>Last day to withdraw</td>
                    <td>September 30</td>
                    </tr>
                    <tr>
                    <td rowspan="3">October</td>
                    <td>Homecoming Week</td>
                    <td>October 11-15</td>
                    </tr>
                    <tr>
                    <td>Fall Break (No classes)</td>
                    <td>October 18-19</td>
                    </tr>
                    <tr>
                    <td>Advising for Spring</td>
                    <td>October 25-29</td>
                    </tr>
                    <tr>
                    <td rowspan="3">November</td>
                    <td>Priority Registration for Spring</td>
                    <td>November 1-5</td>
                    </tr>
                    <tr>
                    <td>Thanksgiving Break (No classes)</td>
                    <td>November 24-26</td>
                    </tr>
                    <tr>
                    <td>Last day of classes</td>
                    <td>November 30</td>
                    </tr>
                    <tr>
                    <td rowspan="3">December</td>
                    <td>Final Exams</td>
                    <td>December 6-10</td>
                    </tr>
                    <tr>
                    <td>Commencement</td>
                    <td>December 18</td>
                    </tr>
                    <tr>
                    <td>Winter Break Begins</td>
                    <td>December 20</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>

        <RightSide />
      </div>
    </div>
  )
}

export default Academiccal
