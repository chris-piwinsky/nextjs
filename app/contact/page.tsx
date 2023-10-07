// pages/contact.tsx
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Mail, Instagram } from 'react-feather';

const ContactPage: React.FC = () => {
  return (
    <div className="page">
      <Navbar />
      <h1 className="header" text-3xl font-semibold mb-4>
        Contact Us
      </h1>
      <p className="paragraph" text-gray-600>
        We are a passionate team dedicated to serving our customers and
        providing the best products and services. Feel free to reach out to us
        through email or connect with us on Instagram.
      </p>
      <div className="mt-6">
        <Mail size={20} className="mr-2" />
        Email Us
      </div>
      <div className="mt-3">
        <Instagram size={20} className="mr-2" />
        Follow us on Instagram
      </div>
    </div>
  );
};

export default ContactPage;
