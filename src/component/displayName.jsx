import React, { useState } from 'react';

function DisplayName() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = ( event ) => {
    event.preventDefault();
      setFullName(`${firstName} ${lastName}`);
      setSubmitted(true);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input 
              type="text" 
              value={firstName} 
              onChange={(event) => setFirstName(event.target.value)} 
            />
          </label>
        </div>
        <div style={{ marginTop: '0px' }}>
          <label>
            Last Name:
            <input 
              type="text" 
              value={lastName} 
              onChange={(event) => setLastName(event.target.value)} 
            />
          </label>
        </div>
        <div style={{ marginTop: '0px' }}>
          <button type="submit">Submit</button>
        </div>
      </form>
      {submitted && (
        <div style={{ marginTop: '10px'}}>
          <h3>Full Name: {fullName}</h3>  
        </div>
      )}
    </div>
  );
}

export default DisplayName;
