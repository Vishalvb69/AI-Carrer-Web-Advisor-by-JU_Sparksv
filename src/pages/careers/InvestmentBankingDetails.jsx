import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, TrendingUp, Clock, Users, GraduationCap, AlertCircle, Target, Building2, DollarSign } from 'lucide-react';

const InvestmentBankingDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/commerce" className="hover:text-blue-600 transition-colors">Commerce</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Investment Banking</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Investment Banking</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              High-stakes financial advisory, mergers & acquisitions, and capital raising for corporations and governments. 
              Extremely lucrative but demanding career path.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Reality Check Alert */}
        <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-red-900 mb-2">⚠️ Reality Check</h3>
              <p className="text-red-800 text-lg leading-relaxed">
                Investment banking is NOT for everyone. Expect 80-100 hour work weeks, regular all-nighters (2-3x per month), 
                weekend work, extreme pressure, and brutal competition. Work-life balance is virtually non-existent. 
                <span className="font-bold"> ~50% attrition in first 2 years.</span> The high pay comes at a steep personal cost.
              </p>
            </div>
          </div>
        </div>

        {/* Earnings Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Earnings Potential</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">India Market</h3>
              <div className="space-y-3 text-gray-800">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="font-medium">Analyst (0-3 years):</span>
                  <span className="text-green-700 font-bold">₹12-25 LPA</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="font-medium">Associate (3-6 years):</span>
                  <span className="text-green-700 font-bold">₹25-45 LPA</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="font-medium">Vice President (6-10 years):</span>
                  <span className="text-green-700 font-bold">₹50-80 LPA</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="font-medium">Director (10-15 years):</span>
                  <span className="text-green-700 font-bold">₹80 LPA - 1.5 Cr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Managing Director (15+ years):</span>
                  <span className="text-green-700 font-bold">₹2-5 Cr+</span>
                </div>
              </div>
              <p className="text-green-700 text-sm mt-4 italic">
                💰 Bonuses typically 100-300% of base salary depending on performance and deal flow
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Big Banks in India</h3>
              <div className="space-y-3 text-gray-800">
                <div className="pb-2 border-b border-gray-200">
                  <div className="font-semibold text-blue-800">Goldman Sachs</div>
                  <div className="text-sm">Analyst: ₹20-28 LPA (base + bonus)</div>
                </div>
                <div className="pb-2 border-b border-gray-200">
                  <div className="font-semibold text-blue-800">Morgan Stanley</div>
                  <div className="text-sm">Analyst: ₹18-25 LPA (base + bonus)</div>
                </div>
                <div className="pb-2 border-b border-gray-200">
                  <div className="font-semibold text-blue-800">JP Morgan</div>
                  <div className="text-sm">Analyst: ₹18-24 LPA (base + bonus)</div>
                </div>
                <div className="pb-2 border-b border-gray-200">
                  <div className="font-semibold text-blue-800">Citi</div>
                  <div className="text-sm">Analyst: ₹16-22 LPA (base + bonus)</div>
                </div>
                <div>
                  <div className="font-semibold text-blue-800">Indian: Kotak, ICICI Securities</div>
                  <div className="text-sm">Analyst: ₹12-18 LPA (base + bonus)</div>
                </div>
              </div>
              <p className="text-blue-700 text-sm mt-4 italic">
                🏦 Bulge bracket banks (Goldman, Morgan Stanley) pay 30-50% more than boutique firms
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
            <p className="text-yellow-900 font-medium">
              💡 <strong>Pro Tip:</strong> Total compensation = Base Salary + Annual Bonus (often 2-3x base) + Sign-on Bonus (₹5-15 lakh for top MBAs)
            </p>
          </div>
        </div>

        {/* Job Responsibilities */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">What Investment Bankers Actually Do</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Mergers & Acquisitions (M&A)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Advise companies on buying/selling businesses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Valuation analysis and deal structuring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Negotiate terms and close transactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Due diligence and financial modeling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Capital Raising</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Help companies raise funds through IPOs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Issue bonds and debt instruments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Structure equity and debt deals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Roadshows and investor presentations</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Financial Advisory</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Strategic advice to C-suite executives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Restructuring troubled companies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Market research and competitor analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Risk assessment and mitigation strategies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Daily Grind (Reality)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Building PowerPoint pitch books (100+ slides)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Excel financial modeling until 2-3 AM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Endless revisions from senior bankers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Client calls at odd hours (time zones)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Difficulty Analysis */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Difficulty Level: EXTREME 🔥</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-red-50 rounded-xl p-6 border border-red-300 text-center">
              <Clock className="w-12 h-12 text-red-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-red-700 mb-2">Work Hours</h3>
              <p className="text-4xl font-bold text-gray-900 mb-2">80-100</p>
              <p className="text-red-700">hours per week</p>
              <p className="text-sm text-red-600 mt-3">Weekends? What weekends?</p>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border border-orange-300 text-center">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-orange-700 mb-2">Competition</h3>
              <p className="text-4xl font-bold text-gray-900 mb-2">2-3%</p>
              <p className="text-orange-700">acceptance rate</p>
              <p className="text-sm text-orange-600 mt-3">Harder than IIT admissions</p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-300 text-center">
              <AlertCircle className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-yellow-700 mb-2">Stress Level</h3>
              <p className="text-4xl font-bold text-gray-900 mb-2">10/10</p>
              <p className="text-yellow-700">mental pressure</p>
              <p className="text-sm text-yellow-600 mt-3">Burnout is common</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Why It's So Hard:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">×</span>
                  <span>Need top MBA (IIM A/B/C, ISB, or Ivy League)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">×</span>
                  <span>Perfect grades + finance knowledge mandatory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">×</span>
                  <span>Excel/PowerPoint mastery (not exaggerating)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">×</span>
                  <span>Networking is 50% of getting in</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2 font-bold">×</span>
                  <span>Brutal interview process (6-10 rounds)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2 font-bold">×</span>
                  <span>Need thick skin for constant criticism</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2 font-bold">×</span>
                  <span>Sacrifice personal life completely</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2 font-bold">×</span>
                  <span>High attrition: 50% quit in 2 years</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Break In */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">How to Break Into Investment Banking</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">🎯 Traditional Path (Most Common)</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <div>
                    <div className="font-semibold text-purple-800">Top Undergrad Degree</div>
                    <div className="text-sm">Commerce/Economics from SRCC, LSR, St. Xavier's, or Engineering from IIT</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div>
                    <div className="font-semibold text-purple-800">Finance Internships</div>
                    <div className="text-sm">Work at boutique firms, PE shops, or corporate finance during college</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div>
                    <div className="font-semibold text-purple-800">Top MBA</div>
                    <div className="text-sm">IIM A/B/C, ISB Hyderabad, or international MBA (Harvard, Wharton, LBS)</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                  <div>
                    <div className="font-semibold text-purple-800">Summer Analyst Program</div>
                    <div className="text-sm">Get IB internship during MBA → Convert to full-time offer</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">📚 Skills You MUST Have</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span><strong>Excel:</strong> VLOOKUPs, pivot tables, complex models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span><strong>PowerPoint:</strong> Professional slide design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span><strong>Accounting:</strong> Financial statements analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span><strong>Valuation:</strong> DCF, Comps, Precedent deals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span><strong>Communication:</strong> Articulate under pressure</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4">🤝 Networking is EVERYTHING</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">★</span>
                    <span>Coffee chats with bankers (at least 20+)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">★</span>
                    <span>Leverage alumni network aggressively</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">★</span>
                    <span>Attend finance club events and conferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">★</span>
                    <span>LinkedIn outreach (personalized messages)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">★</span>
                    <span>Get referrals from inside the bank</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
              <p className="text-yellow-900">
                <strong>Reality:</strong> Networking and referrals get you 70% of the way. Without connections, 
                even perfect grades won't guarantee an interview. Start networking in first year of college!
              </p>
            </div>
          </div>
        </div>

        {/* Exit Opportunities */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <DollarSign className="w-8 h-8 text-yellow-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Exit Opportunities (Why People Do IB)</h2>
          </div>

          <p className="text-gray-700 mb-6 text-lg">
            Most bankers exit after 2-4 years for better work-life balance with higher pay. IB is seen as a "golden ticket" 
            that opens doors to elite finance roles:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-300">
              <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                Private Equity (PE)
              </h3>
              <div className="space-y-2 text-gray-700 mb-4">
                <p><strong>Role:</strong> Buy and improve companies, then sell for profit</p>
                <p><strong>Pay:</strong> ₹25-60 LPA (Analyst) → ₹1-3 Cr+ (Partner with carry)</p>
                <p><strong>Hours:</strong> 60-70/week (much better than IB!)</p>
              </div>
              <div className="bg-yellow-100 rounded-lg p-3 text-sm text-yellow-900">
                Top firms: KKR, Blackstone, TPG, Bain Capital, Everstone (India)
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-300">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Hedge Funds</h3>
              <div className="space-y-2 text-gray-700 mb-4">
                <p><strong>Role:</strong> Invest in public markets (stocks, bonds, derivatives)</p>
                <p><strong>Pay:</strong> ₹30-80 LPA (Analyst) → ₹2-10 Cr+ (PM with bonus)</p>
                <p><strong>Hours:</strong> 50-70/week (depends on fund type)</p>
              </div>
              <div className="bg-blue-100 rounded-lg p-3 text-sm text-blue-900">
                Examples: Citadel, Millennium, Two Sigma, DE Shaw, Bridgewater
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-300">
              <h3 className="text-xl font-bold text-green-800 mb-4">Venture Capital (VC)</h3>
              <div className="space-y-2 text-gray-700 mb-4">
                <p><strong>Role:</strong> Invest in startups, help them grow</p>
                <p><strong>Pay:</strong> ₹20-45 LPA (Associate) → ₹60 LPA-2 Cr+ (Partner)</p>
                <p><strong>Hours:</strong> 50-60/week (startup ecosystem vibe)</p>
              </div>
              <div className="bg-green-100 rounded-lg p-3 text-sm text-green-900">
                Top VCs: Sequoia, Accel, Matrix Partners, Lightspeed, Nexus VP
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-300">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Corporate Finance/Strategy</h3>
              <div className="space-y-2 text-gray-700 mb-4">
                <p><strong>Role:</strong> In-house finance at big corporations</p>
                <p><strong>Pay:</strong> ₹20-40 LPA (Manager) → ₹80 LPA-1.5 Cr (CFO)</p>
                <p><strong>Hours:</strong> 45-55/week (best work-life balance!)</p>
              </div>
              <div className="bg-purple-100 rounded-lg p-3 text-sm text-purple-900">
                Companies: Google, Amazon, Reliance, Tata, Unilever, Meta
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-300 mt-6">
            <p className="text-gray-800 text-lg">
              <strong>💡 Pro Insight:</strong> IB is a 2-4 year "bootcamp" that gives you elite finance training, 
              credibility, and network. Most bankers plan their exit from day one. The real money and lifestyle 
              balance come AFTER exiting to PE/VC/Corporate roles.
            </p>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
              <span className="mr-2">✅</span> Why Choose Investment Banking
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Highest pay</strong> in finance straight out of MBA</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Exit opportunities</strong> to PE, VC, hedge funds</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 text-xl">+</span>
                <span><strong>Learn deal-making</strong> from billion-dollar transactions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 text-xl">+</span>
                <span><strong>Prestige and brand name</strong> (Goldman, Morgan Stanley)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 text-xl">+</span>
                <span><strong>Network with C-suite</strong> executives and billionaires</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 text-xl">+</span>
                <span><strong>Fast learning curve</strong> - 2 years = 5 years elsewhere</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 text-xl">+</span>
                <span><strong>Global opportunities</strong> - transfers to NY, London, HK</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
              <span className="mr-2">⚠️</span> Challenges & Reality
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>80-100 hour weeks</strong> - no personal life for years</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Mental health issues</strong> - depression and burnout common</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 text-xl">−</span>
                <span><strong>Weekend work</strong> is standard, not exceptional</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 text-xl">−</span>
                <span><strong>Constant stress</strong> from demanding clients and seniors</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 text-xl">−</span>
                <span><strong>Extreme competition</strong> - 2-3% acceptance rate</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 text-xl">−</span>
                <span><strong>Grunt work for years</strong> - formatting slides until 3 AM</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 text-xl">−</span>
                <span><strong>Need top MBA</strong> - IIM ABC/ISB minimum, else very hard</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Is Investment Banking Right for You?</h2>
          <p className="text-blue-100 text-lg mb-6 max-w-3xl mx-auto">
            Ask yourself: Are you willing to sacrifice your 20s for money and prestige? Can you handle extreme pressure, 
            brutal hours, and constant criticism? If yes, and you're okay with 2-4 years of hell for elite exits, IB might be for you.
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
          <p className="text-blue-200 mt-4 text-sm">
            💬 Still confused? Chat with our AI counselor for personalized guidance
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentBankingDetails;
