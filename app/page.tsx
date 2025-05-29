'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardDocumentListIcon, UserGroupIcon, ShareIcon, DocumentTextIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import MobileMockup from './components/MobileMockup';
import ContractorMockup from './components/ContractorMockup';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    setSubmitted(true);
  };

  const homeownerFeatures = [
    {
      title: 'Easy Task Creation',
      description: 'Write a one-line description and attach images to describe your home projects',
      icon: ClipboardDocumentListIcon,
    },
    {
      title: 'Task Management',
      description: 'Add, modify, or delete tasks as your project evolves',
      icon: DocumentTextIcon,
    },
    {
      title: 'Seamless Sharing',
      description: 'Share your projects with handymen with just a few clicks',
      icon: ShareIcon,
    },
  ];

  const contractorFeatures = [
    {
      title: 'Project Dashboard',
      description: 'View and manage all homeowner projects in one place',
      icon: UserGroupIcon,
    },
    {
      title: 'Estimate Management',
      description: 'Provide estimates for individual or multiple tasks within projects',
      icon: CurrencyDollarIcon,
    },
    {
      title: 'Referral Network',
      description: 'Recommend tasks to trusted specialists and build your professional network',
      icon: UserGroupIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl md:text-5xl"
            >
              <span className="block">Homeowners: Tackle multiple projects at once</span>
              <span className="block text-blue-100 mt-4">Contractors: Efficiently Bid on Projects</span>
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Mobile App Preview with Features */}
      <div className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Features Section */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 mb-12">
            {/* Homeowner Features */}
            <div className="lg:col-span-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">For Homeowners</h3>
              <div className="space-y-8">
                {homeownerFeatures.map((feature, index) => (
                  <motion.div 
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="ml-16">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.title}</h3>
                      <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contractor Features */}
            <div className="lg:col-span-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">For Contractors</h3>
              <div className="space-y-8">
                {contractorFeatures.map((feature, index) => (
                  <motion.div 
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="ml-16">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.title}</h3>
                      <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Mockups */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-12 relative sm:mx-auto lg:mt-0 lg:col-span-6"
            >
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 mix-blend-multiply" />
                  <div className="relative h-[600px] bg-gray-50 rounded-lg flex items-center justify-center">
                    <MobileMockup />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-12 relative sm:mx-auto lg:mt-0 lg:col-span-6"
            >
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 mix-blend-multiply" />
                  <div className="relative h-[600px] bg-gray-50 rounded-lg flex items-center justify-center">
                    <ContractorMockup />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Waitlist Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Join the Waitlist
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Be the first to know when we launch and get early access to our platform.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="sm:flex">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-3"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="mt-3 w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Join Waitlist
                </button>
              </form>
            ) : (
              <div className="text-center text-green-600 font-medium">
                Thanks for joining! We'll be in touch soon.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 