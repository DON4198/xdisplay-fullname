import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName) return;

    setSubmitted(true);
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

        <button type="submit" disabled={!firstName || !lastName}>
          Submit
        </button>
      </form>

      {submitted && (
        <p>
          Full Name: {firstName} {lastName}
        </p>
      )}
    </div>
  );
}

export default App;
