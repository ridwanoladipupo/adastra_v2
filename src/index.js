/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Officers from "views/items/Officers";
import OfficerList from "views/items/OfficerList";
import Participants from "views/items/Participants";
import Mentors from "views/items/Mentors";
import Celebrations from "views/items/Celebrations";
import Landing from "views/items/Landing";

import { AnimatePresence } from "framer-motion";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AnimatePresence mode="wait">
    <BrowserRouter>
        <Routes>
            {/* <Route path="/" exact element={<Index />} /> */}
            <Route path="/" exact element={<Landing />} />
            <Route path="/participants" exact element={<Participants />} />
            <Route path="/mentors" exact element={<Mentors />} />
            <Route path="/celebrations" exact element={<Celebrations />} />
            <Route path="/officers" exact element={<Officers />} />
            <Route path="/officers/:id" exact element={<OfficerList />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      
    </BrowserRouter>
  </AnimatePresence>

);
