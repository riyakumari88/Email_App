import React, { useState, useEffect } from "react";
import EmailCard from "./EmailCard";

const CardView = () => {
  const [sentEmails, setSentEmails] = useState([]);
  const [draftEmails, setDraftEmails] = useState([]);


  useEffect(() => {
    try {
      const storedData = JSON.parse(sessionStorage.getItem("sendEmail"));
      if (Array.isArray(storedData)) {
        setSentEmails(storedData);
      }
    } catch (e) {
      setSentEmails([]);
    }
  }, []);

  useEffect(() => {
    try {
      const storedLocalData = JSON.parse(localStorage.getItem("draftEmail"));
      if (Array.isArray(storedLocalData)) {
        setDraftEmails(storedLocalData);
      }
    } catch (e) {
      setDraftEmails([]);
    }
  }, []);

 function  deleteButtonClickedHandler(id,emailType){
//  console.log(id)
//  console.log(emailType)
if(emailType === "Sent" ){
  const newarray =sentEmails.filter( (mail)=>!mail);
setSentEmails(newarray);
sessionStorage.removeItem("sendEmail")
}
if(emailType === "Draft"){
  const newarray = draftEmails.filter( (mails)=>!mails.id);
  setDraftEmails(newarray);
  localStorage.removeItem("draftEmail")
}
}
  return (
    <section className="cardView">
      <div className="cardView_child1">
        <h1> SENT EMAIL</h1>
        {sentEmails.map((emailData) => (
          <div key={emailData.id}>
            <EmailCard
              emailData={{...emailData}}
              emailType="Sent"
              onDelete={deleteButtonClickedHandler}
            />
          </div>
        ))}
      </div>

      <div className="cardView_child2">
        <h1> DRAFT EMAIL</h1>
        {draftEmails.map((emailData) => (
          <div key={emailData.id}>
            <EmailCard
              emailData={{ ...emailData }}
              emailType="Draft"
              onDelete={deleteButtonClickedHandler}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardView;
