import React from 'react'
import { Link } from 'react-router-dom';
import { Forum, PeopleAlt, AutoStories, Work, EventNote, Campaign, CalendarMonth} from "@mui/icons-material";

import './TrendCard.css'

const TrendCard = () => {
  return (
   <div className="TrendCard">

        <div className="sidebarWrapper">

            <ul className="sidebarList">
            <li className="sidebarListItem">
                <Campaign className="sidebarIcon" />
                <Link to={"/announcement"}>
                    <span className='sidebarText'>Announcements</span>
                </Link>
            </li>

            <li className="sidebarListItem">
                <CalendarMonth className="sidebarIcon" />
                <Link to={""}>
                    <span className='sidebarText'>Academic Calendar</span>
                </Link>
            </li>

            <li className="sidebarListItem">
                <Forum className="sidebarIcon" />
                <span className='sidebarText'>Forums</span>
            </li>

            <li className="sidebarListItem">
                <AutoStories className="sidebarIcon" />
                <Link to={""}>
                    <span className='sidebarText'>Resources</span>
                </Link>
            </li> 

            <li className="sidebarListItem">
                <PeopleAlt className="sidebarIcon" />
                <Link to={""}>
                    <span className='sidebarText'>Student organizations</span>
                </Link>
            </li>

            <li className="sidebarListItem">
                <Work className="sidebarIcon" />
                <span className='sidebarText'>Job and internship</span>
            </li>

            <li className="sidebarListItem">
                <EventNote className="sidebarIcon" />
                <Link to={""}>
                    <span className='sidebarText'>Campus Events</span>
                </Link>
            </li>

            {/* <li className="sidebarListItem">
                <Newspaper className="sidebarIcon" />
                <span className='sidebarText'>Campus News</span>
            </li> */}
            </ul>
        </div>
   </div>
  )
}

export default TrendCard;