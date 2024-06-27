import React from "react"
import { Link, Outlet, Route, Routes } from "react-router-dom"
import { Contacts } from "../components/Contacts"
import { Team } from "../components/Team"

const AboutPage = () => {
  return (
    <>
      <h1>
        This page is for information about our company and our type of activity.
      </h1>
      <p>This is a demo webside about React-router-dom library.</p>
      <ul className="about-tabs">
        <li>
          <Link to="contacts">
            <p>Our contacts</p>
          </Link>
        </li>
        <li>
          <Link to="team">
            <p>Our team</p>
          </Link>
        </li>
      </ul>
      <div className="about-tab-window">
        <Outlet />
      </div>
      {/* <Routes>
        <Route path="contacts" element={<Contacts />} />
        <Route path="team" element={<Team />} />
      </Routes> */}
    </>
  )
}

export { AboutPage }
