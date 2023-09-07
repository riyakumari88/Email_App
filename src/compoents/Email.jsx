import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

//Handler name should be of following points:
//1. Tag/Name of the Button - ex. Delete - delete.
//2. Html Element - ex. Button - deleteButton.
//3. Event on that Element - ex. onClick - deleteButtonClicked
//4. Suffix would be - deleteButtonClickedHandler (In-case of Input Handler will become Listner)

function Email() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleIData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // generating an id
  const generateIdClickedHandler = () => {
    const id = uuidv4();
    setFormData((prev) => ({ ...prev, id }));
  };

  const sendButtonClickedHandler = () => {
    if (
      formData.name !== "" &&
      formData.email !== "" &&
      formData.subject !== "" &&
      formData.description !== ""
    ) {
      const storeSendEmail = sessionStorage.getItem("sendEmail");
      let sendEmails = [];
      if (!storeSendEmail) {
        sendEmails = [];
      } else {
        sendEmails = JSON.parse(storeSendEmail);
      }
      sendEmails.push({ ...formData });
      sessionStorage.setItem("sendEmail", JSON.stringify(sendEmails));
    }
    // alert("stored over the session ")
  };

  const draftButtonClickedHandler = () => {
    const storeDraftEmail = localStorage.getItem("draftEmail");
    let draftEmails = [];
    if (!storeDraftEmail) {
      draftEmails = [];
    } else {
      draftEmails = JSON.parse(storeDraftEmail);
    }
    draftEmails.push({ ...formData });
    localStorage.setItem("draftEmail", JSON.stringify(draftEmails));
  };

  return (
    <section className="section_">
      <div className="form">
       

        <form className="form_">
          ID
          <input
            readOnly
            className="inputId"
            name="id"
            placeholder="Generate ID"
            value={formData.id}
            type="text"
          ></input>
          <button
            type="button"
            className="generateIdButton"
            onClick={generateIdClickedHandler}
          >
            Generate ID
          </button>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="name"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleIData}
            type="text"
          ></input>
           <label htmlFor="subject">Subject </label>
          <input
            id="subject"
            className="subject"
            placeholder="Enter Subject"
            name="subject"
            value={formData.subject}
            onChange={handleIData}
            type="text"
          ></input>

          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="emailnew"
            placeholder="Enter mail"
            name="email"
            value={formData.email}
            onChange={handleIData}
            type="email"
          ></input>
         
          Description
          <textarea
            className="description"
            name="description"
            placeholder="Enter Description"
            value={formData.description}
            onChange={handleIData}
          ></textarea>
        </form>
        <button
          className="draft_button"
          onClick={draftButtonClickedHandler}
          disabled={formData.id === ""}
        >
          Save as draft
        </button>
        <button
          className="button"
          onClick={sendButtonClickedHandler}
          disabled={
            formData.id === "" ||
            formData.name === "" ||
            formData.email === "" ||
            formData.subject === "" ||
            formData.description === ""
          }
        >
          Send Mail
        </button>
      </div>
    </section>
  );
}
export default Email;
