import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Forum, PeopleAlt, AutoStories, Work, EventNote, Campaign, CalendarMonth} from "@mui/icons-material";

import './TrendCard.css'

// const TrendCard = () => {
//   return (
//    <div className="TrendCard">

//         <div className="sidebarWrapper">

//             <ul className="sidebarList">
//             <li className="sidebarListItem">
//                 <Campaign className="sidebarIcon" />
//                 <Link to={"/announcement"}>
//                     <span style={{color: "black"}} className='sidebarText'>Announcements</span>
//                 </Link>
//             </li>

//             <li className="sidebarListItem">
//                 <CalendarMonth className="sidebarIcon" />
//                 <Link to={"/academiccal"}>
//                     <span style={{color: "black"}} className='sidebarText'>Academic Calendar</span>
//                 </Link>
//             </li>

//             <li className="sidebarListItem">
//                 <Forum className="sidebarIcon" />
//                 <span style={{color: "black"}} className='sidebarText'>Forums</span>
//             </li>

//             <li className="sidebarListItem">
//                 <AutoStories className="sidebarIcon" />
//                 <Link to={"/resources"}>
//                     <span style={{color: "black"}} className='sidebarText'>Resources</span>
//                 </Link>
//             </li> 

//             <li className="sidebarListItem">
//                 <PeopleAlt className="sidebarIcon" />
//                 <Link to={""}>
//                     <span style={{color: "black"}} className='sidebarText'>Student organizations</span>
//                 </Link>
//             </li>

//             <li className="sidebarListItem">
//                 <Work className="sidebarIcon" />
//                 <Link to={"/job"}>
//                     <span style={{color: "black"}} className='sidebarText'>Job and internship</span>
//                 </Link>
//             </li>

//             <li className="sidebarListItem">
//                 <EventNote className="sidebarIcon" />
//                 <Link to={""}>
//                     <span style={{color: "black"}} className='sidebarText'>Campus Events</span>
//                 </Link>
//             </li>

//             {/* <li className="sidebarListItem">
//                 <Newspaper className="sidebarIcon" />
//                 <span className='sidebarText'>Campus News</span>
//             </li> */}
//             </ul>
//         </div>
//    </div>
//   )
// }

const TrendCard = () => {
  const location = useLocation();

  return (
    <div className="TrendCard">
      <div className="sidebarWrapper">
        <ul className="sidebarList">

          <li className={`sidebarListItem ${location.pathname === '/announcement' ? 'active' : ''}`}>
            <Campaign className="sidebarIcon" />
            <Link to={"/announcement"}>
              <span style={{color: "black"}} className='sidebarText'>Announcements</span>
            </Link>
          </li>

          <li className={`sidebarListItem ${location.pathname === '/academiccal' ? 'active' : ''}`}>
            <CalendarMonth className="sidebarIcon" />
            <Link to={"/academiccal"}>
              <span style={{color: "black"}} className='sidebarText'>Academic Calendar</span>
            </Link>
          </li>

          <li className={`sidebarListItem ${location.pathname === '/forums' ? 'active' : ''}`}>
            <Forum className="sidebarIcon" />
            <a href='https://tecsocial-forum.boards.net/' target="_blank">
                <span style={{color: "black"}} className='sidebarText'>Forums</span>
            </a>
          </li>

          <li className={`sidebarListItem ${location.pathname === '/resources' ? 'active' : ''}`}>
            <AutoStories className="sidebarIcon" />
            <Link to={"/resources"}>
              <span style={{color: "black"}} className='sidebarText'>Resources</span>
            </Link>
          </li> 

          <li className={`sidebarListItem ${location.pathname === '/studentorgs' ? 'active' : ''}`}>
            <PeopleAlt className="sidebarIcon" />
            <Link to={""}>
              <span style={{color: "black"}} className='sidebarText'>Student organizations</span>
            </Link>
          </li>

          <li className={`sidebarListItem ${location.pathname === '/job' ? 'active' : ''}`}>
            <Work className="sidebarIcon" />
            <Link to={"/job"}>
              <span style={{color: "black"}} className='sidebarText'>Job and internship</span>
            </Link>
          </li>

          <li className={`sidebarListItem ${location.pathname === '/events' ? 'active' : ''}`}>
            <EventNote className="sidebarIcon" />
            <Link to={"/"}>
              <span style={{color: "black"}} className='sidebarText'>Campus Events</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TrendCard;