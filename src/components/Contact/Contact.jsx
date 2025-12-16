import React from 'react'
import "./Contact.css"
import message_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"
const Contact = () => {

     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6a68f069-7a45-4f87-b9aa-59c6cf2fa99e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a Message <img src={message_icon} alt="" /></h3>
            <p>Lorem ipsum,emque laboriosam soluta possimus hic magni? Itaque, doloribus repellat ipsum reiciendis tempore veritatis eveniet voluptatum adipisci. Dolore cumque maxime ex accusamus temporibus assumenda quaerat!</p>
            <ul>
                <li><img src={mail_icon} alt=""/>contact@edusity.com</li>
                <li><img src={phone_icon} alt=""/>+91 1234567890</li>
                <li><img src={location_icon} alt=""/>MNNIT ALLAHBAD</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your Mobile Number' required/>
                <label>Write Your Message</label>
                <textarea name="message" rows='6' placeholder='Enter your Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow} alt=""/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact