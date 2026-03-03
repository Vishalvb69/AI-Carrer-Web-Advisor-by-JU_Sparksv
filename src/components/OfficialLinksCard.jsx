import React from 'react';
import { ExternalLink, Globe, Phone, Mail } from 'lucide-react';

const OfficialLinksCard = ({ data, title = "Official Links & Resources" }) => {
  if (!data) {
    return null;
  }

  const { website, portal, helpline, email, otherLinks } = data;

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-md p-6 mb-6 border-2 border-purple-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>

      <div className="space-y-4">
        {/* Primary Website/Portal */}
        {(website || portal) && (
          <a
            href={`https://${website || portal}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white rounded-lg border-2 border-purple-300 hover:border-purple-500 hover:shadow-lg transition-all duration-200 group"
          >
            <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
              <Globe className="text-purple-600" size={24} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600 font-medium">Official Portal</p>
              <p className="text-purple-700 font-semibold">{website || portal}</p>
            </div>
            <ExternalLink className="text-purple-600 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        )}

        {/* Helpline */}
        {helpline && (
          <div className="flex items-center gap-3 p-4 bg-white rounded-lg border-2 border-green-300">
            <div className="p-2 bg-green-100 rounded-lg">
              <Phone className="text-green-600" size={24} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600 font-medium">Helpline Number</p>
              <p className="text-green-700 font-semibold text-lg">{helpline}</p>
            </div>
          </div>
        )}

        {/* Email */}
        {email && (
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 p-4 bg-white rounded-lg border-2 border-blue-300 hover:border-blue-500 hover:shadow-lg transition-all duration-200 group"
          >
            <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
              <Mail className="text-blue-600" size={24} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600 font-medium">Email Support</p>
              <p className="text-blue-700 font-semibold">{email}</p>
            </div>
            <ExternalLink className="text-blue-600 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        )}

        {/* Other Links */}
        {otherLinks && otherLinks.length > 0 && (
          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-700 mb-3">Additional Resources</p>
            <div className="space-y-2">
              {otherLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-300 hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 group text-sm"
                >
                  <ExternalLink className="text-gray-500 group-hover:text-purple-600" size={16} />
                  <span className="text-gray-700 group-hover:text-purple-700 font-medium">
                    {link.label || link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Warning */}
      <div className="mt-6 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
        <p className="text-sm text-red-900">
          <span className="font-semibold">⚠️ Beware of Frauds:</span> Always verify information from official websites only. Never share OTP, passwords, or make payments to unofficial numbers/websites.
        </p>
      </div>
    </div>
  );
};

export default OfficialLinksCard;
