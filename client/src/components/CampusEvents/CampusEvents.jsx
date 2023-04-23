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

                    <div class="calendar-container">
                        <div class="calendar-header">

                            <div class="calendar-header-left">
                            <h2 class="month-year" style={{padding: "10px"}}>April 2023</h2>
                            </div>

                            <div class="calendar-header-right">
                            <span class="event-indicator"></span>
                            <span class="event-indicator-text" style={{padding: "10px"}}>Event</span>
                            </div>

                        </div>
                        <div class="calendar-days" style={{padding: "10px"}}> 
                            <span class="day">Sun</span>
                            <span class="day">Mon</span>
                            <span class="day">Tue</span>
                            <span class="day">Wed</span>
                            <span class="day">Thu</span>
                            <span class="day">Fri</span>
                            <span class="day">Sat</span>
                        </div>
                        <div class="calendar-grid" style={{gap: "1.5rem"}}>
                            <div class="calendar-day"></div>
                            <div class="calendar-day"></div>
                            <div class="calendar-day"></div>
                            <div class="calendar-day"></div>
                            <div class="calendar-day"></div>
                            <div class="calendar-day"></div>
                            <div class="calendar-day event">
                            <div class="event-details">
                                <h3>Concert</h3>
                                <p>Enchanting and soulful live performance by Gajendra Verma, a must-attend concert</p>
                            </div>
                            1
                            </div>
                            <div class="calendar-day event">
                                <div class="event-details">
                                <h3>EDM Night</h3>
                                <p>Electrifying DJ Rhea brings dynamic beats to an unforgettable EDM night.</p>
                            </div>2</div>
                            <div class="calendar-day">3</div>
                            <div class="calendar-day">4</div>
                            <div class="calendar-day">5</div>
                            <div class="calendar-day">6</div>
                            <div class="calendar-day">7</div>
                            <div class="calendar-day">8</div>
                            <div class="calendar-day">9</div>
                            <div class="calendar-day">10</div>
                            <div class="calendar-day">11</div>
                            <div class="calendar-day">12</div>
                            <div class="calendar-day">13</div>
                            <div class="calendar-day">14</div>
                            <div class="calendar-day">15</div>
                            <div class="calendar-day">16</div>
                            <div class="calendar-day">17</div>
                            <div class="calendar-day event">
                                <div class="event-details">
                                <h3>Scribble Day</h3>
                                <p>A day to celebrate creativity and doodling.</p>
                            </div>18</div>
                            <div class="calendar-day">19</div>
                            <div class="calendar-day">20</div>
                            <div class="calendar-day event">
                                <div class="event-details">
                                <h3>Comps Farewell</h3>
                                <p> Bidding goodbye to undergraduate computer science program.</p>
                            </div>21</div>
                            <div class="calendar-day">22</div>
                            <div class="calendar-day">23</div>
                            <div class="calendar-day">24</div>
                            <div class="calendar-day">25</div>
                            <div class="calendar-day">26</div>
                            <div class="calendar-day">27</div>
                            <div class="calendar-day">28</div>
                            <div class="calendar-day">29</div>
                            <div class="calendar-day">30</div>
                        </div>
                        </div>

                 </div>

            <RightSide />
        </div>
    </div>
  )
}

export default CampusEvents;
