
import { SignUp } from "./Login/Singup.js";
import { AuthProvider } from "../contexts/AuthContext.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from "./PrivateRoutes/PrivateRoute.js";
import  Dashboard from './Dashboard/Dashboard.js'
import Login from "./Login/Login.js";

function App() {
  return (
    <>
        <Router>
          <AuthProvider>
            {/*Identifica a rota atual */}
              <Routes> 
              <Route exact path='/' element={<PrivateRoute/>}>
                <Route exact path='/' element={<Dashboard/>}/>
              </Route>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
              </Routes>
          </AuthProvider>
        </Router>
      </>
  );
}

export default App;
