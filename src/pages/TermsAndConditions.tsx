import React from 'react';

function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-white">Terms and Conditions</h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p className="text-gray-300 mb-6">
                Welcome to VoltWorx. By accessing our platform, you agree to these terms and conditions. Please read them carefully.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">2. User Responsibilities</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-200">2.1 Account Creation</h3>
              <p className="text-gray-300 mb-4">
                Users must provide accurate information when creating an account. You are responsible for maintaining the security of your account.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-200">2.2 Content Submission</h3>
              <p className="text-gray-300 mb-4">
                All content submitted must be original and not violate any third-party rights. Users are responsible for the content they post.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-200">2.3 Prohibited Activities</h3>
              <p className="text-gray-300 mb-4">
                Users must not engage in any activities that could harm the platform or other users, including but not limited to spamming, fraud, or harassment.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Project Guidelines</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-200">3.1 Project Creation</h3>
              <p className="text-gray-300 mb-4">
                Startups must provide clear project requirements and realistic deadlines. Projects must comply with all applicable laws and regulations.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-200">3.2 Submission Requirements</h3>
              <p className="text-gray-300 mb-4">
                Students must submit original work that meets the project requirements. Submissions must be made before the deadline.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-200">3.3 Reward Distribution</h3>
              <p className="text-gray-300 mb-4">
                Rewards will be distributed only to selected submissions. The selection process must be fair and transparent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Platform Usage</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-200">4.1 Access and Availability</h3>
              <p className="text-gray-300 mb-4">
                We strive to maintain platform availability but do not guarantee uninterrupted access. We reserve the right to modify or discontinue services.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-200">4.2 Intellectual Property</h3>
              <p className="text-gray-300 mb-4">
                Users retain rights to their content. By submitting work, you grant VoltWorx a license to use and display the content on the platform.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-200">4.3 Termination</h3>
              <p className="text-gray-300 mb-4">
                We reserve the right to terminate accounts that violate these terms. Users may terminate their accounts at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Contact Information</h2>
              <p className="text-gray-300">
                For any questions regarding these terms, please contact us at{' '}
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

export default TermsAndConditions; 