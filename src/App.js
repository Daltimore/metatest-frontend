import React, { Suspense } from "react"
import { BrowserRouter as Router, useRoutes } from "react-router-dom"
import { Loader } from "./components/Loader/Loader"

const DashboardPage = React.lazy(() => import("./views/index"))

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <DashboardPage /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <Suspense fallback={<Loader fullscreen />}>
        <App />
      </Suspense>
    </Router>
  );
};


export default AppWrapper;
