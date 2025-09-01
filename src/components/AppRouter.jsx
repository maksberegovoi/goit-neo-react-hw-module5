import React, {Suspense} from 'react';
import {publicRoutes} from "../routes/routes.jsx";
import {Route, Routes} from "react-router-dom";
import Loader from "./Loader/Loader.jsx";


const AppRouter = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        {publicRoutes.map(({path, Component, children}) => (
          <Route
            key={path}
            path={path}
            element={<Component/>}
          >
            {children?.map(({path: childPath, Component: ChildComponent}) => (
              <Route
                key={childPath}
                path={childPath}
                element={<ChildComponent/>}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;