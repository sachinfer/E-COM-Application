import './App.css';
import Login from './login/login';
import { getAuth } from "firebase/auth";
import { app } from './Firebase/Firebase';
//import NavigationBar from './navigation/navbar';
import SignUp from './signup/signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import NavigationBar from './navigation/navbar';
import AdminPage from './pages/Admin';

function App() {

  // Initialize Firebase Authentication and get a reference to the service
  getAuth(app);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
          <Route path="admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
