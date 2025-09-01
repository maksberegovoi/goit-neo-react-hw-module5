import React, { Suspense } from 'react';
import { publicRoutes } from "../routes/routes.jsx";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} element={<Component />} path={path} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;