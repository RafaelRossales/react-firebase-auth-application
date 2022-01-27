
import { SignUp } from "./Login/Singup.js";
import { AuthProvider } from "../contexts/AuthContext.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from "./PrivateRoutes/PrivateRoute.js";
import  Dashboard from './Dashboard/Dashboard.js'
import Login from "./Login/Login.js";
import ForgotPassword from "./Login/ForgotPassword.js";
import UpdateProfile from "./Dashboard/UpdateProfile.js";
import MainPage from "./Main/MainPage.js";

function App() {
  return (
    <>
        <Router>
          <AuthProvider>
            {/*Identifica a rota atual */}
              <Routes> 
              <Route exact path='/' element={<PrivateRoute/>}>
                <Route exact path='/' element={<MainPage/>}/>
                <Route path="/update-profile" element={<UpdateProfile/>}></Route>
              </Route>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
              </Routes>
          </AuthProvider>
        </Router>
      </>
  );
}

export default App;
