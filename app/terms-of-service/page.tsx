"use client";

import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <>
    <div className="min-h-screen bg-[#ede2db] py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl pt-5 font-['QTGaromand'] text-[#711f50] mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-gray-800">
          <section>
            <h2 className="text-2xl font-['QTGaromand'] text-[#711f50] mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using the Monarch Painters website, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['QTGaromand'] text-[#711f50] mb-4">2. Service Description</h2>
            <p className="mb-4">
              Monarch Painters is a family-run business providing residential, commercial, and industrial painting and 
              decorating services in Staffordshire and surrounding areas. Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Interior Painting & Decorating</li>
              <li>Industrial Painting</li>
              <li>Home Decorating</li>
              <li>Commercial Painting Services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['QTGaromand'] text-[#711f50] mb-4">3. Quotations and Pricing</h2>
            <p className="mb-4">
              All quotations provided through our website or in person are subject to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Site inspection and final assessment</li>
              <li>Material cost fluctuations</li>
              <li>Project scope changes</li>
              <li>Validity period as specified in the quote</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['QTGaromand'] text-[#711f50] mb-4">4. Quality Standards</h2>
            <p className="mb-4">
              We maintain high-quality standards using professional equipment including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mirka 1230M dustless extraction system</li>
              <li>Q-Tech 5 stage HVLP spray system</li>
              <li>TriTech T5 airless spray system</li>
            </ul>
            <p className="mt-4">
              All work is carried out to professional standards and in accordance with industry best practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['QTGaromand'] text-[#711f50] mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              All content on this website, including but not limited to text, graphics, logos, images, and software, 
              is the property of Monarch Painters and is protected by UK copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['QTGaromand'] text-[#711f50] mb-4">6. Liability</h2>
            <p className="mb-4">
              While we strive for accuracy, we cannot guarantee that the website will be error-free or uninterrupted. 
              We shall not be liable for any indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['QTGaromand'] text-[#711f50] mb-4">7. Service Area</h2>
            <p className="mb-4">
              We primarily serve the following areas:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rugeley</li>
              <li>Lichfield</li>
              <li>Tamworth</li>
              <li>Sutton Coldfield</li>
              <li>Birmingham</li>
              <li>Cannock</li>
              <li>Stafford</li>
              <li>Penkridge</li>
              <li>Derby</li>
              <li>Wolverhampton</li>
            </ul>
            <p className="mt-4">
              Service availability in other areas may be subject to additional terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['QTGaromand'] text-[#711f50] mb-4">8. Contact Information</h2>
            <p className="mb-4">
              For any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-white/50 p-6 rounded-xl">
              <p>Monarch Painters</p>
              <p>Staffordshire, United Kingdom</p>
              <p>Email: info@monarchpainters.co.uk</p>
              <p>Phone: 07437531733</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-['QTGaromand'] text-[#711f50] mb-4">9. Modifications</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately 
              upon posting to the website. Your continued use of our services following any changes indicates your 
              acceptance of the modified terms.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
    
    <Footer/>
    </>
  );
}