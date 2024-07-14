"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Contact.css";

// Define validation schema
const ContactSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setLoading(true);
      setError("");
      setSuccessMessage("");
      try {
        const response = await fetch("https://kenth.onrender.com/emails", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const result = await response.json();

        if (response.ok) {
          setSuccessMessage(result.message);
        } else {
          setError(result.message);
        }
      } catch (error) {
        setError("Internal Server Error: " + error.message);
      } finally {
        setSubmitting(false);
        resetForm();
        setLoading(false);
      }
    },
  });

  return (
    <div className="Contact">
      <div className="Contact-background">
        <div>
          <h3>Contact</h3>
          <p>Home {">"} Contact</p>
        </div>
      </div>

      <div className="address-listing">
        <div className="address-listingwrapper">
          <span>
            <h1>Address:</h1>
            <p>103 Saint John St. Allentown, PA 18103</p>
          </span>
          <span>
            <h1>Phone:</h1>
            <p>+1 570-397-7224</p>
          </span>
          <span>
            <h1>Email:</h1>
            <p>royskenth3@gmail.com</p>
          </span>
        </div>
      </div>
      
      <div className="fromlocation">
        <div className="fromlocation-wrapper">
          <div className="from mb-28">
            <div className="from-title">
              <h1>Contact Form</h1>
              <hr className="from-line" />
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col w-full gap-4"
            >
              <div className="flex flex-col w-full">
                <label htmlFor="fullName">Full Name</label>
                <input
                  className="h-14 border-2 px-4"
                  type="text"
                  name="fullName"
                  value={formik.values.fullName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <p className={formik.errors.fullName ? "text-red-400 text-xs pb-4" : "pb-4"}>
                  {formik.touched.fullName && formik.errors.fullName ? formik.errors.fullName : ""}
                </p>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="email">Email</label>
                <input
                  className="w-full h-14 border-2 px-4"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <p className={formik.errors.email ? "text-red-400 text-xs pb-4" : "pb-4"}>
                  {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                </p>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="message">Message</label>
                <span className="border-2 border-gray-200">
                  <textarea
                    className="w-full h-24 px-4"
                    name="message"
                    value={formik.values.message}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </span>
                <p className={formik.errors.message ? "text-red-400 text-xs pb-4" : "pb-4"}>
                  {formik.touched.message && formik.errors.message ? formik.errors.message : ""}
                </p>
              </div>
              <button
                className="bg-green-500 w-28 h-10 text-white lg:mt-5 submit-button"
                type="submit"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
              {error && <p className="text-red-500">{error}</p>}
              {successMessage && <p className="text-green-500">{successMessage}</p>}
            </form>
          </div>
          <div className="location" id="map">
            <iframe
              style={{ height: "100%", width: "100%" }}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=103%20Saint%20John%20St.%20Allentown,%20PA%2018103&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
