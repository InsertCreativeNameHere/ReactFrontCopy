import Landingpage from "./pages/landingPage";
import SignUp from "./pages/signUp";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { UserProvider } from "./util/UserContext";
import LogIn from "./pages/login";

function App() {
  return (

    <UserProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landingpage />}/>
          <Route exact path="/registro" element={<SignUp />}/>
          <Route exact path="/login" element={<LogIn />}/>
        </Routes>
      </Router>
    </UserProvider>
    
  );
}

export default App;
