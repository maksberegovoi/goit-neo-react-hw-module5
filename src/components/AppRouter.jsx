import React from 'react';
import {publicRoutes} from "../routes/routes.jsx";
import {Route, Routes} from "react-router-dom";


const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({path, Component}) => {
        return (
          <Route
            key={path}
            element={Component}
            path={path}
          />
        )
      })
      }
    </Routes>
  );
};

export default AppRouter;