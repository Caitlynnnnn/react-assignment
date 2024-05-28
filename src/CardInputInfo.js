import React, { useState } from 'react';

function CardInputInfo() {
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [showFormattedNumber, setShowFormattedNumber] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowFormattedNumber(true); // Show formatted number after submit
  };

  const handleContactButtonClick = () => {
    // Open a new tab/window with the formatted contact information
    const formattedPhoneNumber = formatPhoneNumber(phone);
    const contactInfo = `Name: ${name}\nJob Title: ${jobTitle}\nPhone: ${formattedPhoneNumber}`;
    const newTab = window.open('', '_blank');
    newTab.document.write(`<pre>${contactInfo}</pre>`);
    newTab.document.close();
  };

  const formatPhoneNumber = (phoneNumber) => {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
  };

  return (
    <div className="page">
      <div className="card">
        <h3>Type in your information below to generate a personal information card.</h3>
        <form onSubmit={handleSubmit}>
          <div className="YourName">
            <p>Name: </p>
            <input type="text" value={name} onChange={handleNameChange} placeholder="Your Name here" />
          </div>
          <div className="YourJobTittle">
            <p>Occupation: </p>
            <input type="text" value={jobTitle} onChange={handleJobTitleChange} placeholder="Your Job Title here" />
          </div>
          <div className="Phone">
            <p>Phone: </p>
            <input type="text" value={phone} onChange={handlePhoneChange} placeholder="Your Phone No. here" />
          </div>
          <button type="button" onClick={handleContactButtonClick}>Contact</button> {/* Button to show formatted phone number */}
        </form>
        {showFormattedNumber && <CardOutput name={name} jobTitle={jobTitle} phone={phone} />} {/* Pass input values as props */}
      </div>
    </div>
  );
}

function CardOutput({ name, jobTitle, phone }) {
  const formatPhoneNumber = (phoneNumber) => {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
  };

  const formattedPhone = formatPhoneNumber(phone);

  return (
    <div className="card">
      <h3>Your Personal Information</h3>
      <p>Name: {name}</p>
      <p>Occupation: {jobTitle}</p>
      <p>Phone: {formattedPhone}</p>
    </div>
  );
}

export default CardInputInfo;
