import './App.css';
import Login from './login/login';
import { getAuth } from "firebase/auth";
import { app } from './Firebase/Firebase';

function App() {

  // Initialize Firebase Authentication and get a reference to the service
  getAuth(app);

  return (
    <div className="App">
      
      <Login/>
    </div>
  );
}

export default App;
