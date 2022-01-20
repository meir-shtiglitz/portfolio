import { useState } from "react";
import { SendMail } from "../controlers+/sendMails";
import Social from "./social";
import "../css/contact.css";

const Contact = () => {
    const [fields, setFields] = useState({from: '', msg: ''})

    const inputer = (e) => {
        setFields({...fields, [e.target.name]: e.target.value})
    }

    const sendContact = (e) => {
        e.preventDefault();
        console.log(fields);
        setFields({from: '', msg: ''})
        SendMail(fields);
    }

    return (
        <div id="contact">
            <div className="container text-center">
                <h1 className="section-title">Contact Me</h1>
                <div className="row col-md-6 m-auto">
                    <form className="contact-form text-start">
                        <div className="form-group mb-3">
                            <label htmlFor="from">Email:</label>
                            <input onInput={inputer} value={fields.from} name="from" id="from" type="email" className="form-control" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="msg">Meassage:</label>
                            <textarea onInput={inputer} value={fields.msg} name="msg" id="msg" rows="5" className="form-control"></textarea>
                        </div>
                        <button onClick={sendContact} className="btn btn-dark m-auto d-block w-100" type="button">Send  <i className="fa fa-paper-plane"></i></button>
                    </form>
                    <Social />
                </div>
            </div>
        </div>
    )
}
export default Contact;