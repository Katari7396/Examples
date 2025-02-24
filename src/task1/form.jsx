import { useState, useEffect } from "react";
import './form.css'

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
 
  const [storedData, setStoredData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(true);
  const [error, setError] = useState("");
 
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
 
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
 
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
 
 
  const handleSubmit = (event) => {
    event.preventDefault();
 
    if (isSignupMode) {
   
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
 
      setStoredData({ username, email, password });
 
      setUsername("");
      setEmail("");
      setPassword("");
     
      setIsSignupMode(false);
      setError("");
    } else {
     
      const savedUsername = localStorage.getItem("username");
      const savedEmail = localStorage.getItem("email");
      const savedPassword = localStorage.getItem("password");
 
      if (
        username === savedUsername &&
        email === savedEmail &&
        password === savedPassword
      ) {
        setIsLoggedIn(true);
        setError("");
      } else {
        setIsLoggedIn(false);
        setError("Invalid username, email, or password");
      }
    }
  };
 
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
 
    if (savedUsername && savedEmail && savedPassword) {
      setStoredData({ username: savedUsername, email: savedEmail, password: savedPassword });
    }
  }, []);
 
  return (
    <div>
      <h2>{isLoggedIn ? "Welcome Back" : isSignupMode ? "Sign Up" : "Login"}</h2>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <div className="input">
            <input type="username" placeholder= 'USERNAME'value={username} onChange={handleUsernameChange}/>
          </div>
          <div>
            <input type="email" placeholder= 'EMAIL'value={email} onChange={handleEmailChange}/>
          </div>
          <div>
              <input type="password" placeholder= 'PASSWORD'value={password} onChange={handlePasswordChange}/>
          </div>
          <button type="submit">{isSignupMode ? "Sign Up" : "Login"}</button>
          {error && <p>{error}</p>}
          <p>
            {isSignupMode ? (
              <>
                Already have an account?{" "}
                <button type="button" onClick={() => setIsSignupMode(false)} >Login</button>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <button type="button" onClick={() => setIsSignupMode(true)}>Sign Up</button>
              </>
            )}
          </p>
        </form>
      ) : (
        <div>
          <h3>Stored User Data:</h3>
          <p>Username: {storedData.username}</p>
          <p>Email: {storedData.email}</p>
          <p>Password: {storedData.password}</p>
          <button
            onClick={() => setIsLoggedIn(false)} >Logout</button>
        </div>
      )}
    </div>
  );
};
 
export default Form;