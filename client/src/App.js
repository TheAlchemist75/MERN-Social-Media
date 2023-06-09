import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import { useSelector } from "react-redux";
import Chat from "./pages/Chat/Chat";
import Landing from "./Landing/Landing";
import Announcement from "./components/Announcement/Announcement";
import Academiccal from "./components/Academiccal/Academiccal";
import Resources from "./components/Resources/Resources";
import Job from "./components/Job/Job";
import CampusEvents from "./components/CampusEvents/CampusEvents";
import Student from "./components/Student/Student";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div
      className="App"
      style={{
        height:
          window.location.href === "http://localhost:3000/chat"
            ? "calc(100vh - 2rem)"
            : "auto",
      }}
    >
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        {/* <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        /> */}
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />

        <Route
          path="/chat"
          element={user ? <Chat /> : <Navigate to="../auth" />}
        />
        <Route exact path='/announcement' element={<Announcement />} />
        <Route exact path='/academiccal' element={<Academiccal />} />
        <Route exact path='/resources' element={<Resources />} />
        <Route exact path='/job' element={<Job />} />
        <Route exact path='/campus' element={<CampusEvents />} />
        <Route exact path='/student' element={<Student />} />
      </Routes>
    </div>
  );
}

export default App;
