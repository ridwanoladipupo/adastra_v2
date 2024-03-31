import React, { useEffect } from 'react'
import { Route, Routes, Navigate, useLocation } from "react-router-dom";


import Officers from "views/items/Officers";
import OfficerList from "views/items/OfficerList";
import Participants from "views/items/Participants";
import Mentors from "views/items/Mentors";
import Celebrations from "views/items/Celebrations";
import Landing from "views/items/Landing";
import Board from "views/items/Board";

import ReactGA from 'react-ga4';

const App = () => {

    const location = useLocation();

    useEffect(() => {
        // ReactGA.send(location.pathname + location.search);
        ReactGA.send({ hitType: "pageview", page: location.pathname });
    }, [location]);

  return (
    <React.Fragment>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/participants" exact element={<Participants />} />
          <Route path="/mentors" exact element={<Mentors />} />
          <Route path="/events" exact element={<Celebrations />} />
          <Route path="/officers" exact element={<Officers />} />
          <Route path="/board" exact element={<Board />} />
          <Route path="/officers/:id" exact element={<OfficerList />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      
    </React.Fragment>
  )
}

export default App
