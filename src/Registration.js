import React, { useState } from 'react';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[showpassword,setshowpassword]=useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
  
    e.preventDefault();
   
    if(username===''){
      setError("user must enter the username ");
      return;
    }
    if(username.length <= 5){
      setError("username should be greater then 5 digits ");
      return;
    }
    if(!/^[A/Z]/.test(username)){
      setError("the username must start with capital letter");
      return;
    }

    if (password.length < 7) {
      setError('Password must be at least 7 characters long.');
      return;
    }
    setSuccess(true);
    setError('');
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type={showpassword? "text":"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div >
            <input
            type='checkbox'
            value={showpassword}
            onChange={()=>setshowpassword(!showpassword)}/>
            <label>showpassword</label>
           
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p>Registration successful!</p>}
    </div>
  );
};

export default Registration;
