import React, { useState, useEffect } from "react";
import EmailCard from "./EmailCard";

const CardView = () => {
  const [sentEmails, setSentEmails] = useState([]);
  const [draftEmails, setDraftEmails] = useState([]);
  const [deleteEmailData, setDeleteEmailData] = useState(
    sessionStorage.getItem("sendEmail")
  );
  const [deleteDraftData, setDeleteDraftData] = useState(
    localStorage.getItem("draftEmail")
  );
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

  const deleteButtonClickedHandler = (emailType,emailData) => {
    if (emailType === "Sent") {
     let id= deleteEmailData.this.id;
     if(emailData.id === id){
      sessionStorage.removeItem(deleteEmailData);
      setDeleteEmailData(null);
     }
      alert("data cleaned");
    } else {
      let idd =deleteDraftData.this.id;
      if(emailData === idd){
      localStorage.removeItem(deleteDraftData);
      setDeleteDraftData(null);}
      alert("data cleaed");
    }
  };

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
