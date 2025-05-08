import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-white">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p className="text-gray-300 mb-6">
                At VoltWorx, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Information Collection</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-200">2.1 Personal Information</h3>
              <p className="text-gray-300 mb-4">
                We collect information you provide when creating an account, including name, email, and profile details.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-200">2.2 Usage Data</h3>
              <p className="text-gray-300 mb-4">
                We collect information about how you use our platform, including project submissions and interactions.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-200">2.3 Technical Information</h3>
              <p className="text-gray-300 mb-4">
                We collect technical information such as IP address, browser type, and device information for security and analytics.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Information Usage</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-200">3.1 Platform Operation</h3>
              <p className="text-gray-300 mb-4">
                We use your information to operate and improve our platform, including matching students with projects.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-200">3.2 Communication</h3>
              <p className="text-gray-300 mb-4">
                We use your contact information to send important updates and notifications about your account and projects.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-200">3.3 Analytics</h3>
              <p className="text-gray-300 mb-4">
                We analyze usage patterns to improve our services and user experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Information Sharing</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-200">4.1 With Other Users</h3>
              <p className="text-gray-300 mb-4">
                Your profile information and project submissions are visible to other users as part of the platform's functionality.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-200">4.2 Service Providers</h3>
              <p className="text-gray-300 mb-4">
                We share information with trusted service providers who help us operate our platform.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-200">4.3 Legal Requirements</h3>
              <p className="text-gray-300 mb-4">
                We may share information when required by law or to protect our rights and safety.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Security</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-200">5.1 Data Protection</h3>
              <p className="text-gray-300 mb-4">
                We implement security measures to protect your personal information from unauthorized access.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-200">5.2 Account Security</h3>
              <p className="text-gray-300 mb-4">
                We encourage users to use strong passwords and enable two-factor authentication when available.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Your Rights</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-200">6.1 Access and Control</h3>
              <p className="text-gray-300 mb-4">
                You can access, update, or delete your personal information through your account settings.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-200">6.2 Data Portability</h3>
              <p className="text-gray-300 mb-4">
                You can request a copy of your personal data in a structured, commonly used format.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-200">6.3 Opt-Out</h3>
              <p className="text-gray-300 mb-4">
                You can opt out of non-essential communications and data collection.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Contact Information</h2>
              <p className="text-gray-300">
                For privacy-related questions or concerns, please contact us at{' '}
                <a href="mailto:team.voltworx@gmail.com" className="text-blue-400 hover:text-blue-300">
                  team.voltworx@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy; 