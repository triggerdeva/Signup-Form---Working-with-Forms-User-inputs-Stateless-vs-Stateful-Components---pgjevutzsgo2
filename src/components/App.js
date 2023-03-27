import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleGenderChange(event) {
    setGender(event.target.value);
  }

  function handlePhoneNumberChange(event) {
    setPhoneNumber(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Validation
    if (!name || !email || !gender || !phoneNumber || !password) {
      setErrorMessage('All fields are mandatory');
      return;
    }

    if (!name.match(/^[a-zA-Z0-9 ]*$/)) {
      setErrorMessage('Name is not alphanumeric');
      return;
    }

    if (!email.includes('@')) {
      setErrorMessage('Email must contain @');
      return;
    }

    if (gender !== 'male' && gender !== 'female' && gender !== 'other') {
      setErrorMessage('Please identify as male, female or other');
      return;
    }

    if (!phoneNumber.match(/^\d+$/)) {
      setErrorMessage('Phone Number must contain only numbers');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must contain at least 6 letters');
      return;
    }

    // Success
    const username = email.split('@')[0];
    setErrorMessage('');
    alert(`Hello ${username}`);
  }
  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={handleNameChange} data-testid="name" />
      <label htmlFor="email">Email address:</label>
      <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} data-testid="email" />
      <label htmlFor="gender">Gender:</label>
      <select id="gender" name="gender" value={gender} onChange={handleGenderChange} data-testid="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input type="tel" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} data-testid="phoneNumber" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} data-testid="password" />
      <button type="submit" data-testid="submit">Submit</button>
    </form>
    </div>
  )
}


export default App;
