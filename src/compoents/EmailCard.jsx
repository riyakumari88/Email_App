import React from "react";

const EmailCard = ({ emailData, onDelete,emailType}) => {
  return (
    <>
      <div className="set_email_container">
        <p className="para">ID:{emailData.id}</p>
        <p className="para">EMAIL: {emailData.email}</p>
        <p className="para">NAME:{emailData.name}</p>
        <p className="para"> SUBJECT:{emailData.subject}</p>
        <p className="para"> DISCRIPTION:{emailData.description}</p>
      </div>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};

export default EmailCard;
