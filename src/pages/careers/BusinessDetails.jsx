import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, TrendingUp, Target, GraduationCap, Rocket, AlertCircle } from 'lucide-react';

const BusinessDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/commerce" className="hover:text-blue-600 transition-colors">Commerce</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Business & Entrepreneurship</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Business & Entrepreneurship</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Build empires from ideas. Start businesses, create jobs, solve problems through entrepreneurship, and achieve unlimited earning potential.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-orange-900 mb-2">💼 Industry Reality Check</h3>
              <p className="text-orange-800 text-lg leading-relaxed">
                Entrepreneurship is booming in India with startup ecosystem in major cities. Government support through MUDRA, GST benefits, 
                and online platforms make starting easier. However, <span className="font-bold">90% businesses fail in 5 years</span>. Success requires 
                planning, capital, perseverance, and risk appetite. Those who succeed earn unlimited income (₹1 crore+ annually).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Earnings Potential</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">Startup Phase (Year 1-2)</h3>
              <div className="text-3xl font-bold text-yellow-700 mb-2">₹0-5 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Uncertain income phase</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Bootstrapped startup:</span>
                  <span className="font-semibold">₹0-2 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Funded startup:</span>
                  <span className="font-semibold">₹5-10 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Break-even timeline:</span>
                  <span className="font-semibold">12-24 months</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Growth Phase (Year 3-5)</h3>
              <div className="text-3xl font-bold text-blue-700 mb-2">₹15-50 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Scaling business</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Successful startup:</span>
                  <span className="font-semibold">₹20-50 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Series A Funded:</span>
                  <span className="font-semibold">₹30-100 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Scaling trajectory:</span>
                  <span className="font-semibold">Equity+Salary</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Mature (5+ years)</h3>
              <div className="text-3xl font-bold text-green-700 mb-2">₹50-500+ CR</div>
              <p className="text-sm text-gray-600 mb-4">Established business</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Successful startup exit:</span>
                  <span className="font-semibold">₹100 CR+</span>
                </div>
                <div className="flex justify-between">
                  <span>Unicorn (₹10,000 Cr):</span>
                  <span className="font-semibold">₹500 CR+</span>
                </div>
                <div className="flex justify-between">
                  <span>Listed company:</span>
                  <span className="font-semibold">Unlimited</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-300 rounded-xl p-5">
            <p className="text-blue-900 font-medium">
              <strong>💡 Smart Strategy:</strong> Get 3-5 years corporate experience first (learn business, build network, save capital), 
              then start your own venture. Have 6-12 months runway savings. Build team, seek mentorship, stay persistent through failures.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Types of Businesses to Start</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Tech Startups</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>SaaS (Software as Service) products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Mobile apps and web platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>AI/ML solutions and data analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Fintech and payment solutions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Service-Based Business</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Consulting and advisory services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Digital marketing and agency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Training and education platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Staffing and HR solutions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3">E-commerce & Retail</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Amazon/Flipkart seller business</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Own e-commerce website (D2C)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Dropshipping and reselling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Physical retail stores</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Other Models</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Food and cloud kitchens</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Franchise operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Real estate and property</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Manufacturing and B2B solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Educational Pathway</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Recommended Path</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <div className="flex-1">
                    <div className="font-semibold text-blue-900 text-lg">B.Com/B.B.A (3-4 years)</div>
                    <div className="text-gray-700 mt-1">Business fundamentals, accounting, management</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div className="flex-1">
                    <div className="font-semibold text-blue-900 text-lg">Work Experience (3-5 years)</div>
                    <div className="text-gray-700 mt-1">Build domain expertise, network, financial runway</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div className="flex-1">
                    <div className="font-semibold text-blue-900 text-lg">MBA (Optional - 2 years)</div>
                    <div className="text-gray-700 mt-1">Strategic thinking, advanced business knowledge</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                  <div className="flex-1">
                    <div className="font-semibold text-blue-900 text-lg">Start Your Business</div>
                    <div className="text-gray-700 mt-1">Launch startup with capital, team, idea, and experience</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Essential Skills to Learn</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Financial Acumen</div>
                      <div className="text-sm">Accounting, financial planning, budgeting</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Sales & Marketing</div>
                      <div className="text-sm">Customer acquisition, brand building</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Leadership</div>
                      <div className="text-sm">Team building, delegation, management</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Problem Solving</div>
                      <div className="text-sm">Strategic thinking, innovation, adaptation</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4">Resources & Support</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">📚</span>
                    <span><strong>NASSCOM</strong> - Tech startup support</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">📚</span>
                    <span><strong>MUDRA Bank</strong> - Government loans</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">📚</span>
                    <span><strong>Y Combinator</strong> - Accelerator programs</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">📚</span>
                    <span><strong>Angel Investors</strong> - Funding networks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
              <span className="mr-2">✅</span> Why Choose Entrepreneurship
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Unlimited earning potential</strong> - ₹1 crore+ annually possible</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Independence</strong> - Be your own boss, make decisions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Nation building</strong> - Create jobs, solve problems</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Passion-driven</strong> - Work on ideas you believe in</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Learning opportunity</strong> - Continuous growth and challenges</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Exit opportunities</strong> - IPO, acquisition, buyout</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
              <span className="mr-2">⚠️</span> Challenges to Consider
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>High failure rate</strong> - 90% businesses fail in 5 years</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>No guaranteed income</strong> - Unpredictable first 1-3 years</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Capital requirement</strong> - Need funding and runway</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Long hours & stress</strong> - Often 12-16 hour days</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Regulatory complexity</strong> - Legal, tax, compliance challenges</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Personal liability risk</strong> - Potential personal loss</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Is Entrepreneurship Right for You?</h2>
          <p className="text-blue-100 text-lg mb-6 max-w-3xl mx-auto">
            If you're willing to take calculated risks, persevere through failures, have business acumen, and dream of building 
            something meaningful, entrepreneurship is for you. Remember: most overnight success takes 10 years!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/commerce" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center shadow-lg"
            >
              Explore Other Commerce Careers
            </Link>
            <a 
              href="#" 
              className="bg-blue-500/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/40 transition-colors inline-flex items-center border border-white/30"
            >
              Talk to Career Counselor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
