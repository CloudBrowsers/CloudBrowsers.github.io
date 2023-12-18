import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!formData.firstName) {
      errors.firstName = "First Name is required";
      isValid = false;
    }

    if (!formData.lastName) {
      errors.lastName = "Last Name is required";
      isValid = false;
    }

    if (!formData.email) {
      errors.email = "Email is required";
      isValid = false;
    }

    if (!formData.mobileNumber) {
      errors.mobileNumber = "Mobile Number is required";
      isValid = false;
    }

    if (!formData.message) {
      errors.message = "Message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://api.example.com/your-endpoint",
          formData
        );
        console.log("API Response:", response.data);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobileNumber: "",
          message: "",
        });
      } catch (error) {
        console.error("API Error:", error);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobileNumber: "",
          message: "",
        });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: undefined });
  };

  return (
    <>
      <div id="Contact Us" className="common_container_style conatct_us py-16">
        <div className="flex gap-5">
          <div className="contact_us_section flex-1">
            <h1 className="flex font_light text-4xl">
              <div className="top_header_text">
                Schedule a call with us now!
              </div>
            </h1>
            <p className="flex flex-col md:flex-row font_light contact_us_para">
              To receive further information, please fill out the form below,
              and we'll be in touch with you shortly. To receive further
              information, please fill out the form below, and we'll be in touch
              with you shortly. To receive further information, please fill out
              the form below, and we'll be in touch with you shortly. To receive
              further information, please fill out the form below, and we'll be
              in touch with you shortly.
            </p>
            <div className="submit_btn_container">
              <div
                className="common_button bg-secondary-btn-color submit_btn"
                onClick={handleSubmit}
              >
                Submit
              </div>
            </div>
          </div>
          <div className="contact_us_section">
            <input
              className={errors.firstName ? "error_fileds" : "contact_us"}
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <div className="error-message">{errors.firstName}</div>
            )}
            <input
              className={
                errors.firstName ? "error_fileds_data" : "contact_us_data"
              }
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <div className="error-message">{errors.lastName}</div>
            )}
            <input
              className={
                errors.firstName ? "error_fileds_data" : "contact_us_data"
              }
              name="email"
              placeholder="Email Id"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
            <input
              className={
                errors.firstName ? "error_fileds_data" : "contact_us_data"
              }
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            {errors.mobileNumber && (
              <div className="error-message">{errors.mobileNumber}</div>
            )}
            <textarea
              className={
                errors.firstName
                  ? "error_fileds_contact_us"
                  : "contact_us_message_data"
              }
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <div className="error-message">{errors.message}</div>
            )}
          </div>
        </div>
      </div>
      <div className="text-center text-5xl text">
        <div className="font_light text-4xl py-16">
          <div className="automation_text">
            Embark on your journey into automation
          </div>
          <div className="testing_text">TESTING TODAY</div>
        </div>
        <div className="flex text-2xl justify-center items-center gap-20 custom_margin">
          <div className="schedule_your_demo">Schedule your demo</div>
          <div className="try_for_free">Try for Free</div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
