import './App.css';
// import Login from './login/login';
import { getAuth } from "firebase/auth";
import { app } from './Firebase/Firebase';
import SignUp from './signup/signup';

function App() {

  // Initialize Firebase Authentication and get a reference to the service
  getAuth(app);

  return (
    <div className="App">
      
      <SignUp/>
    </div>
  );
}

export default App;
