"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", { name, email, message })
    // Reset form fields
    setName("")
    setEmail("")
    setMessage("")
    alert("Thank you for your message. We will get back to you soon!")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">
            We'd love to hear from you. Please fill out the form below or use our contact information to reach out.
          </p>
          <div className="mb-4">
            <h3 className="font-semibold">Address:</h3>
            <p>123 Business Street, London, UK</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Email:</h3>
            <p>info@raeburngroup.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Phone:</h3>
            <p>+44 20 1234 5678</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border rounded"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

