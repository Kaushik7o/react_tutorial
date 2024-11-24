import React, { useState, useEffect } from 'react';
import './formmake.css';

export default function Formmake() {
  const data = { name: "", email: "", password: "", confirm: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("Registered");
  }, [flag]);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password || !inputData.confirm) {
      alert("All fields are mandatory");
    } else {
      setFlag(true);
    }
  }

  function setReset() {
    setInputData(data);
    setFlag(false);
  }

  return (
    <>
      <div id="parent">
        <pre>{flag ? <h2 className='i'>Hello {inputData.name}, Registration Successful</h2> : ""}</pre>
        <form id="form" onSubmit={handleSubmit}>
          <div className='d'>
            <label htmlFor='name'>Name:</label>
            <input type="text" name="name" id="name" placeholder='Enter your name' onChange={handleData} value={inputData.name} />
          </div>
          <div className='d'>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder='Enter your email' onChange={handleData} value={inputData.email} />
          </div>
          <div className='d'>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" placeholder='Enter your password' onChange={handleData} value={inputData.password} />
          </div>
          <div className='d'>
            <label htmlFor='confirm'>Confirm Password:</label>
            <input type="password" name="confirm" id="confirm" placeholder='Confirm your password' onChange={handleData} value={inputData.confirm} />
          </div>
          <div id="but" className='d'>
            <input type="submit" id="last" />
            <button type="button" onClick={setReset}>Reset</button>
          </div>
        </form>
      </div>
    </>
  );
}
