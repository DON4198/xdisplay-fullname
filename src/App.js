import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
    
  const handleSubmit = (e) => { 
    e.preventDefault();

    if (!firstName || !lastName) {
      setFullName("");
      return;
    } 

    setFullName(`${firstName} ${lastName}`);


  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <h2>Full Name Display</h2>
        First Name: 
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br></br>

        Last Name:
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <br></br>

        <button type="submit">
          Submit
        </button>
      </form>

      {fullName && (
        <p>
          Full Name: {firstName} {lastName}
        </p>
      )}
    </div>
  );
}

export default App;
