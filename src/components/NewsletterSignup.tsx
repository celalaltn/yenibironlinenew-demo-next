"use client";
import React, { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Email submitted:", email);
    // Reset form after submission
    setEmail("");
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 800 800">
            <defs>
              <pattern id="pattern-circles" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                <circle id="pattern-circle" cx="100" cy="100" r="80" fill="none" stroke="#FFF" strokeWidth="2"></circle>
              </pattern>
            </defs>
            <rect fill="url(#pattern-circles)" height="100%" width="100%"></rect>
          </svg>
        </div>

        <div className="relative px-6 py-16 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Get Our Award-Winning<br className="hidden sm:inline" /> Inspirations
              </h2>
              
              <p className="mt-4 sm:mt-6 text-lg sm:text-xl opacity-90">
                Brighten your day with our handcrafted inspirational messages for a happy and healthy life. Sign up for free!
              </p>
              
              <div className="mt-8 sm:mt-10">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                  <div className="flex-grow">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex-none px-6 py-3 text-base font-medium text-white bg-indigo-900 rounded-lg hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 transition-colors duration-200"
                  >
                    Subscribe
                  </button>
                </form>
                
                <div className="mt-3 text-sm text-white/80">
                  By subscribing you agree to our <a href="#" className="underline hover:text-white transition-colors duration-200">Terms of Service</a> and <a href="https://www.dailyom.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors duration-200">Privacy Policy</a>.
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-200">
                      Most Recent Inspiration
                    </h3>
                    <p className="mt-2 text-2xl font-bold text-white">
                      Intention and Intuition
                    </p>
                    <p className="mt-3 text-white/80">
                      Discover how aligning your intentions with your intuition can lead to profound personal growth and transformation.
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0 bg-white/20 rounded-full p-2">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-indigo-300">
                      <svg className="h-full w-full text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14.75c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                      </svg>
                    </span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">Sarah Johnson</p>
                    <p className="text-xs text-indigo-200">Mindfulness Coach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
