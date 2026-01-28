import React from 'react';
import { Link } from 'react-router-dom';
import { emergingCareers } from '../data/careers';
import { Sparkles, TrendingUp, Zap, ExternalLink, CheckCircle, AlertTriangle } from 'lucide-react';

const EmergingCareers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Emerging & Underrated Careers</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Non-traditional careers that are becoming mainstream in digital India. These require passion, 
              dedication, and skill—not always formal degrees. High risk, but potentially high reward.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Important Notice */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 mb-12 border-2 border-orange-400">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-3">⚠️ Read This Before Exploring</h2>
              <div className="space-y-2 text-orange-100">
                <p className="text-lg">
                  <strong>These careers have VERY LOW success rates (0.1% to 5%).</strong> Most people who try these paths 
                  don't make it. However, India's digital boom is creating real opportunities for talented, dedicated individuals.
                </p>
                <p className="text-lg">
                  <strong className="text-white">Smart Strategy:</strong> Pursue these ALONGSIDE your education or job. 
                  Complete your 12th/graduation while building skills. Have a backup plan. Give yourself 2-3 years to see results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Characteristics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 border-2 border-purple-200 shadow-lg">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Skill-Based</h3>
            </div>
            <p className="text-gray-700">
              No formal degree required—pure talent, practice, and portfolio matter. Your work speaks for itself.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-pink-200 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-pink-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">High Growth</h3>
            </div>
            <p className="text-gray-700">
              India's digital economy is booming. Content, gaming, and creative industries growing 30-50% annually.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-orange-200 shadow-lg">
            <div className="flex items-center mb-4">
              <Sparkles className="w-8 h-8 text-orange-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Creator Economy</h3>
            </div>
            <p className="text-gray-700">
              Build your own brand, audience, and income streams. Be your own boss with global reach.
            </p>
          </div>
        </div>

        {/* Career Cards */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Explore Emerging Career Paths
          </h2>

          {emergingCareers.map((career) => (
            <div
              key={career.id}
              className="bg-white rounded-2xl p-8 border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {/* Left: Title & Description */}
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{career.title}</h3>
                  <p className="text-gray-700 text-lg mb-4">{career.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-600">Average Salary</div>
                      <div className="text-xl font-bold text-green-700">{career.averageSalary}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Top Earners</div>
                      <div className="text-xl font-bold text-purple-700">{career.topSalary}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Growth Rate</div>
                      <div className="text-xl font-bold text-blue-700">{career.growthRate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Future Outlook</div>
                      <div className="text-xl font-bold text-orange-700">{career.futureOutlook}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Key Skills:</div>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Opportunities:</div>
                    <div className="flex flex-wrap gap-2">
                      {career.jobRoles.map((role, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Pros & Cons */}
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 className="font-bold text-green-800 mb-2 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Advantages
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {career.pros.map((pro, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-600 mr-2">+</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <h4 className="font-bold text-orange-800 mb-2 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Challenges
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {career.cons.map((con, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-600 mr-2">−</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={career.detailsUrl}
                    className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    View Full Details
                    <ExternalLink className="w-4 h-4 inline ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Motivational Section */}
        <div className="mt-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white rounded-2xl p-10 border-4 border-white shadow-2xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-6xl mb-6">✨</div>
            <h2 className="text-4xl font-bold mb-6">Your Path is Uniquely Yours</h2>
            <p className="text-2xl text-purple-100 mb-6 leading-relaxed">
              Don't see your dream career listed? <strong className="text-white">That's okay!</strong>
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 mb-6 border border-white/30">
              <p className="text-xl text-white leading-relaxed mb-4">
                <strong>The world is full of careers we haven't covered yet:</strong> Wildlife Photographer, 
                Food Blogger, Voice Actor, Game Developer, Ethical Hacker, Social Entrepreneur, Travel Vlogger, 
n                Yoga Instructor, Fitness Coach, Chef, Fashion Stylist, Interior Designer, and countless more!
              </p>
              <p className="text-xl text-purple-100 leading-relaxed">
                New careers are being created every year. Someone has to be <em>first</em>. Why not you?
              </p>
            </div>
            <div className="space-y-4 text-lg text-left max-w-3xl mx-auto">
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-2xl">💡</div>
                <p className="text-white">
                  <strong>Remember:</strong> Every successful person was once told their dream was "not a real career." 
                  Don't let others define what's possible for you.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-400 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-2xl">🎯</div>
                <p className="text-white">
                  <strong>Your uniqueness is your advantage.</strong> The careers that excite YOU—even if unconventional—are 
                  where you'll find fulfillment and success.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-pink-400 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-2xl">🚀</div>
                <p className="text-white">
                  <strong>Start exploring:</strong> Research people doing what you love. Message them. Learn their journey. 
                  Take small steps. Build skills. Create a portfolio. The path will reveal itself.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-3xl font-bold text-yellow-200 mb-4">"Be yourself; everyone else is already taken."</p>
              <p className="text-xl text-purple-100 mb-6">Your passion + dedication + patience = Your unique career story</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/stream-selection"
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all shadow-xl hover:shadow-2xl inline-flex items-center justify-center"
                >
                  Explore Traditional Paths
                </Link>
                <a
                  href="#"
                  className="bg-purple-600/40 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-600/60 transition-all border-2 border-white/50 inline-flex items-center justify-center"
                >
                  Talk to AI Counselor
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Have Questions?</h2>
          <p className="text-purple-100 text-lg mb-6 max-w-2xl mx-auto">
            These careers require careful planning and realistic expectations. Talk to our AI counselor 
            to understand if you're suited for these paths and how to pursue them smartly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/stream-selection"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center shadow-lg"
            >
              Explore Traditional Careers
            </Link>
            <a
              href="#"
              className="bg-purple-500/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-500/40 transition-colors inline-flex items-center justify-center border border-white/30"
            >
              Talk to AI Counselor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergingCareers;
