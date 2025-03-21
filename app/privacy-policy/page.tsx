"use client";

import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <>
    <div className="min-h-screen bg-[#ede2db] py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl  pt-5 font-['QTGaromand'] text-[#711f50] mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-800">
          <section>
            <h2 className="text-2xl font-['QTGaromand'] text-[#711f50] mb-4">Introduction</h2>
            <p className="mb-4">
              At Monarch Painters, we take your privacy seriously. This privacy policy explains how we collect,
              use, and protect your personal information when you use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['QTGaromand'] text-[#711f50] mb-4">Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information</li>
              <li>Property details for quotation purposes</li>
              <li>Communication preferences</li>
              <li>Website usage data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['QTGaromand'] text-[#711f50] mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide our painting and decorating services</li>
              <li>Communicate with you about your project</li>
              <li>Send you relevant updates and promotional materials</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['QTGaromand'] text-[#711f50] mb-4">Data Protection</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal data
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['QTGaromand'] text-[#711f50] mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['QTGaromand'] text-[#711f50] mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our privacy policy or how we handle your data, please contact us:
            </p>
            <div className="bg-white/50 p-6 rounded-xl">
              <p>Monarch Painters</p>
              <p>Staffordshire, United Kingdom</p>
              <p>Email: info@monarchpainters.co.uk</p>
              <p>Phone: 07437531733</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-['QTGaromand'] text-[#711f50] mb-4">Updates to This Policy</h2>
            <p className="mb-4">
              We may update this privacy policy from time to time. Any changes will be posted on this page
              with an updated revision date.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
    
    <Footer/>
    </>
  );
}