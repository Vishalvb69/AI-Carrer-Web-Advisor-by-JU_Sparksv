import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Mail, Phone, MapPin, Instagram, Youtube, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Career Guide</h3>
                <p className="text-sm text-gray-400">For Indian Students</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering Indian youth with comprehensive career guidance, entrance exam preparation, 
              and personalized counseling to help them make informed educational and career decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                Home
              </Link>
              <Link to="/class-10-below" className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                Class 10 & Below
              </Link>
              <Link to="/stream-selection" className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                Stream Selection
              </Link>
              <Link to="/ai-impact" className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                AI Impact on Careers
              </Link>
              <Link to="/resources" className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                Resources
              </Link>
            </nav>
          </div>

          {/* Streams */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Career Streams</h4>
            <nav className="space-y-2">
              <Link to="/engineering" className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                Science PCM (Engineering)
              </Link>
              <Link to="/medical" className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                Science PCB (Medical)
              </Link>
              <Link to="/commerce" className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                Commerce
              </Link>
              <Link to="/arts" className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                Arts/Humanities
              </Link>
            </nav>
          </div>

          {/* Contact & Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Email Support</p>
                  <a 
                    href="mailto:support@careerguide.com" 
                    className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    support@careerguide.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Helpline</p>
                  <a 
                    href="tel:+919876543210" 
                    className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Serving across India</p>
                  <p className="text-xs text-gray-400">All states & territories</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h5 className="text-sm font-semibold text-gray-300 mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <Youtube className="h-4 w-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-400 text-center sm:text-left">
              © 2026 Career Guide. All rights reserved. Made with ❤️ for Indian students.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer