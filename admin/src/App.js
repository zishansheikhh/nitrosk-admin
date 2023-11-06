// import logo from './logo.svg';
import {Routes, Route} from "react-router-dom"
import LoginPage from './routes/loginpage';
import Home from './routes/homepage';
import ProjectPage from './routes/project-page'
import Topbar from "./components/topbar/topbar.component";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far, fab);

function App() {
  return (
    <>
    <Topbar />
      <Routes> 
        <Route index element={<Home />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='project-details' element={<ProjectPage />} />
      </Routes>
      </>
  );
}

export default App;
