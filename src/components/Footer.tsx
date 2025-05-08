import { Link } from 'react-router-dom';
import {  Github, Twitter, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">VoltWorx</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Connecting talented students with innovative startups for micro-projects that make a difference.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://www.linkedin.com/company/voltworx-in/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">For Students</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Find Projects
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Build Your Portfolio
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Skill Development
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">For Startups</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Post a Project
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Find Talent
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center md:text-left md:flex md:items-center md:justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} VoltWorx. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;