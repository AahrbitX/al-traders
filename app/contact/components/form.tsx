"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";


function ContactForm() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (key === "phone") {
          formData.append(key, `'${value}'`); // Add single quote to phone
        } else {
          formData.append(key, value);
        }
      });

      await fetch(
        "https://script.google.com/macros/s/AKfycbwTqZW2HtFH1S1QyLkIxAKuNelBj0o9uJDdcRXudks6nVLOLtcTjuN3FMsIYC0ZtQMbpg/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors", // no readable response
        }
      );

      setSubmitted(true);
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        location: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(true);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-3 pt-4">
        <div>
          <Label>First Name *</Label>
          <Input
            placeholder="John"
            type="text"
            name="firstname"
            value={form.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>Last Name</Label>
          <Input
            placeholder="Doe"
            type="text"
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <Label>Email Address *</Label>
        <Input
          placeholder="johndoe@gmail.com"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label>Phone *</Label>
        <Input
          placeholder="+91 9876543219"
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label>Location</Label>
        <Input
          placeholder="India"
          name="location"
          value={form.location}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label>Message *</Label>
        <Textarea
          placeholder="Submit your reviews here..."
          name="message"
          value={form.message}
          onChange={handleChange}
          className="bg-white"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-primary w-full px-3 rounded-full py-3 hover:bg-primary/90 shadow-md transition-colors duration-200 cursor-pointer text-black"
      >
        Submit
      </button>
      {submitted && (
        <p className="text-green-600 text-center font-medium pt-2">
          Form submitted successfully!
        </p>
      )}
      {error && (
        <p className="text-red-600 text-center font-medium pt-2">
          Submission failed. Please try again.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
