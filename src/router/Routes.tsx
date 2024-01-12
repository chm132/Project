import { Route, Routes as ReactRouters } from "react-router-dom";

import HomePage from '../pages/Homepage/page';
import Navbar from '../Components/Navbar';

const Routes = () => {
  return (
    <ReactRouters>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
      </Route>
    </ReactRouters>
  );
};

export default Routes;