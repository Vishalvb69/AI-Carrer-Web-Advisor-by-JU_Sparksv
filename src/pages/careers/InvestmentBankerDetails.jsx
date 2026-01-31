import React from 'react';
import { TrendingUp, Briefcase, Clock, DollarSign, AlertCircle, CheckCircle, Award, Building2, Zap, BarChart3, FileText } from 'lucide-react';

export default function InvestmentBankerDetails() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm">
            <a href="/" className="text-blue-600 hover:text-blue-700">Home</a>
            <span className="text-gray-400">/</span>
            <a href="/commerce" className="text-blue-600 hover:text-blue-700">Commerce</a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Investment Banker</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Briefcase className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Investment Banker / M&A Advisor</h1>
          <p className="text-xl text-blue-50 mb-6">Structure mega deals, advise Fortune 500 companies, and make billions move. Power suits, spreadsheets, and ₹100+ hour work weeks.</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
              <p className="text-sm text-blue-50">Entry: ₹15-40 LPA</p>
            </div>
            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
              <p className="text-sm text-blue-50">Top: ₹2 Cr+ LPA</p>
            </div>
            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
              <p className="text-sm text-blue-50">Growth: 18% per year</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Reality Check */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-3">Reality Check: The Hard Truth</h2>
              <ul className="space-y-2 text-red-700">
                <li>✗ <strong>100+ hour work weeks are NORMAL</strong> - You'll work until 2-3 AM on deals</li>
                <li>✗ <strong>Burnout rate is EXTREMELY HIGH</strong> - 40% of analysts quit within 2 years</li>
                <li>✗ <strong>No work-life balance</strong> - Weekends and holidays are work time during deal closures</li>
                <li>✗ <strong>Pressure is INSANE</strong> - One decimal point error = ₹10 Cr loss</li>
                <li>✗ <strong>Only 10% make MD level (₹2+ Cr)</strong> - Most wash out at VP level</li>
                <li>✓ But the ones who survive earn ₹2 Cr+ annually and become powerful dealmakers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Salary Breakdown */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Salary & Income Progression</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Standard Career Path</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-800">Analyst (0-3 years)</span>
                    <span className="font-bold text-blue-900">₹15-25 LPA</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded h-2"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-800">Associate (3-5 years)</span>
                    <span className="font-bold text-blue-900">₹30-50 LPA</span>
                  </div>
                  <div className="w-full bg-blue-300 rounded h-2"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-800">Vice President (5-8 years)</span>
                    <span className="font-bold text-blue-900">₹80-150 LPA</span>
                  </div>
                  <div className="w-full bg-blue-400 rounded h-2"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-800">Managing Director (8+ years)</span>
                    <span className="font-bold text-blue-900">₹2-10 Cr+ LPA</span>
                  </div>
                  <div className="w-full bg-blue-500 rounded h-2"></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
              <h3 className="text-xl font-bold text-purple-900 mb-3">With Bonus & Incentives</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-purple-800">Analyst (0-3 years)</span>
                    <span className="font-bold text-purple-900">₹25-40 LPA</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded h-2"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-purple-800">Associate (3-5 years)</span>
                    <span className="font-bold text-purple-900">₹60-100 LPA</span>
                  </div>
                  <div className="w-full bg-purple-300 rounded h-2"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-purple-800">Vice President (5-8 years)</span>
                    <span className="font-bold text-purple-900">₹1.5-3 Cr LPA</span>
                  </div>
                  <div className="w-full bg-purple-400 rounded h-2"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-purple-800">Managing Director (8+ years)</span>
                    <span className="font-bold text-purple-900">₹5-20 Cr+ LPA</span>
                  </div>
                  <div className="w-full bg-purple-500 rounded h-2"></div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mt-6 text-sm">Note: Bonuses in IB are 50-200% of base salary. In boom years, analysts earn ₹2-5x their base. In down years, bonuses can be zero.</p>
        </div>

        {/* Deal Types */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Types of Deals You'll Work On</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">M&A (Mergers & Acquisitions)</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>What:</strong> Help companies buy/sell other companies. Example: Reliance acquiring Jio, Amazon buying Whole Foods</p>
                <p><strong>Deal size:</strong> ₹500 Cr to ₹50,000+ Cr</p>
                <p><strong>Your role:</strong> Financial modeling, due diligence, valuation, negotiation support</p>
                <p><strong>Timeline:</strong> 6-18 months per deal</p>
                <p><strong>Hours:</strong> 80-120 hours/week during active phase</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-4">IPO (Initial Public Offering)</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>What:</strong> Help companies go public. Example: Paytm, Nykaa, Zomato IPO</p>
                <p><strong>Deal size:</strong> ₹1000 Cr to ₹10,000+ Cr</p>
                <p><strong>Your role:</strong> Valuation, regulatory compliance, investor presentations, roadshow</p>
                <p><strong>Timeline:</strong> 6-12 months from start to market listing</p>
                <p><strong>Hours:</strong> 100+ hours/week for 3-4 months during roadshow</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 border border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Debt Financing</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>What:</strong> Help companies raise debt (bonds, term loans). Raise ₹5000 Cr bonds for Jio</p>
                <p><strong>Deal size:</strong> ₹500 Cr to ₹10,000+ Cr</p>
                <p><strong>Your role:</strong> Structure deals, credit analysis, investor relations, pricing</p>
                <p><strong>Timeline:</strong> 3-8 months per transaction</p>
                <p><strong>Hours:</strong> 70-100 hours/week during documentation</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6 border border-pink-200">
              <h3 className="text-xl font-bold text-pink-900 mb-4">Equity Financing</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>What:</strong> Help companies raise equity (sell shares). PE/VC fundraising rounds</p>
                <p><strong>Deal size:</strong> ₹100 Cr to ₹5000+ Cr</p>
                <p><strong>Your role:</strong> Pitch deck creation, investor targeting, due diligence, term sheet negotiation</p>
                <p><strong>Timeline:</strong> 3-6 months per round</p>
                <p><strong>Hours:</strong> 80-120 hours/week during investor meetings</p>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Modeling */}
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-8 mb-12 border border-indigo-200">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-8 h-8 text-indigo-700" />
            <h3 className="text-2xl font-bold text-gray-800">Core Skill: Financial Modeling</h3>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>Investment bankers spend 60% of their time building financial models. Your Excel skills MUST be elite.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded p-4 border border-indigo-200">
                <p className="font-bold text-indigo-800 mb-2">DCF Analysis</p>
                <ul className="space-y-1 text-sm">
                  <li>• Discounted Cash Flow valuation</li>
                  <li>• 5-10 year projections</li>
                  <li>• WACC calculations</li>
                  <li>• Terminal value</li>
                </ul>
              </div>
              <div className="bg-white rounded p-4 border border-indigo-200">
                <p className="font-bold text-indigo-800 mb-2">Comparables Analysis</p>
                <ul className="space-y-1 text-sm">
                  <li>• P/E, EV/EBITDA ratios</li>
                  <li>• Peer company analysis</li>
                  <li>• Trading multiples</li>
                  <li>• Precedent transactions</li>
                </ul>
              </div>
              <div className="bg-white rounded p-4 border border-indigo-200">
                <p className="font-bold text-indigo-800 mb-2">LBO Model</p>
                <ul className="space-y-1 text-sm">
                  <li>• Leveraged buyout analysis</li>
                  <li>• Debt schedules</li>
                  <li>• Returns to equity</li>
                  <li>• IRR calculations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Exit Opportunities */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Exit Opportunities (What Next?)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="font-bold text-blue-800 mb-3">Corporate Finance (Best Exit)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Join Tata, Reliance, Infosys as CFO/Financial planning</li>
                <li>✓ Salary: ₹50-200 LPA (better work-life balance)</li>
                <li>✓ Use IB skills in corporate M&A strategy</li>
                <li>✓ 70% of IB analysts exit to this in 5-7 years</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="font-bold text-green-800 mb-3">Private Equity (Most Lucrative)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Join Blackstone, KKR, Apollo as Associate</li>
                <li>✓ Salary: ₹50-150 LPA + higher bonuses</li>
                <li>✓ Buy/manage companies for 5-7 years, exit for profit</li>
                <li>✓ Top PE partners earn ₹10+ Cr annually</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h3 className="font-bold text-purple-800 mb-3">Hedge Funds / Asset Management</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Join Motilal Oswal, ICICI Securities as analyst</li>
                <li>✓ Salary: ₹30-100 LPA + performance bonus (up to ₹10 Cr)</li>
                <li>✓ Manage client portfolios, research, trading strategies</li>
                <li>✓ Some analysts become traders earning ₹1+ Cr annually</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <h3 className="font-bold text-yellow-800 mb-3">Startup / Venture Capital</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Join Accel, Sequoia as analyst/associate</li>
                <li>✓ Salary: ₹30-80 LPA + equity upside (10-100x returns possible)</li>
                <li>✓ Help startups raise funding, scale business</li>
                <li>✓ Better lifestyle than banking, high learning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose This Career?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Extreme Earning Potential</h3>
                <p className="text-gray-700">₹2+ Cr at MD level. Only 2-3 careers offer this in India. You can earn ₹100s of Crores in PE.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Briefcase className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Work on Huge Deals</h3>
                <p className="text-gray-700">Structure ₹1000+ Cr transactions. Direct impact on national economy and companies you know.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Award className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Prestige & Network</h3>
                <p className="text-gray-700">Work with CEOs, ministers, top entrepreneurs. Build network worth ₹1000+ Cr in lifetime deals.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Excellent Exit Opportunities</h3>
                <p className="text-gray-700">IB experience opens doors to PE, VC, Corporate Finance with 3-4x higher salaries.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Challenges */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-red-800 mb-8">Challenges & Dark Side</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-800 mb-2">Insane Work Hours</h3>
                <p className="text-red-700">100+ hours/week is normal. Sleep 4 hours, work 18 hours. Weekends? Dream on.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-800 mb-2">Burnout Rate = 40%</h3>
                <p className="text-red-700">Most analysts quit within 2 years due to stress, exhaustion, and no personal life.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-800 mb-2">High Pressure & Perfectionism</h3>
                <p className="text-red-700">One decimal error = ₹10 Cr lost. Clients expect perfection. MD yells at mistakes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-800 mb-2">Only 10% Reach MD Level</h3>
                <p className="text-red-700">Most wash out at Associate/VP level (₹50-150 LPA). Only elite reach ₹2+ Cr.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Required */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Key Skills Required</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: 'Excel Mastery', desc: 'Expert level - 80+ hour/week on models' },
              { icon: FileText, title: 'Financial Modeling', desc: 'DCF, comparable analysis, LBO models' },
              { icon: Briefcase, title: 'Deal Analysis', desc: 'Understand M&A, IPO, financing mechanics' },
              { icon: Clock, title: 'Work Stamina', desc: '100+ hour weeks without complaining' },
              { icon: Award, title: 'Attention to Detail', desc: 'Decimal points = ₹10 Cr differences' },
              { icon: TrendingUp, title: 'Market Knowledge', desc: 'Industry trends, economic cycles, sectors' }
            ].map((skill, idx) => (
              <div key={idx} className="flex gap-4">
                <skill.icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800">{skill.title}</h3>
                  <p className="text-gray-600 text-sm">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Important Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded p-6 border border-blue-200">
              <h3 className="font-bold text-blue-800 mb-3">Highly Valuable</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>CFA Level 1:</strong> Global credibility. Covers financial modeling, valuation.</li>
                <li><strong>FMVA (Financial Modeling & Valuation Analyst):</strong> Specialized in IB modeling. Top IB firms want it.</li>
                <li><strong>FRM (Financial Risk Manager):</strong> Advanced risk analysis skills.</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded p-6 border border-amber-200">
              <h3 className="font-bold text-amber-800 mb-3">Nice to Have</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>MBA Finance:</strong> ISB/IIM MBA boosts career. But work experience needed first.</li>
                <li><strong>Self-Teaching:</strong> 80% of IB knowledge comes from doing, not certifications.</li>
                <li><strong>Online Courses:</strong> Wall Street Prep, Breaking into Wall Street (YouTube).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Companies */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Best Companies in India & Global</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Goldman Sachs',
              'JP Morgan',
              'Morgan Stanley',
              'Bank of America',
              'Citi Group',
              'ICICI Securities',
              'Motilal Oswal',
              'HDFC Bank',
              'Axis Bank',
              'CARE Ratings',
              'SBI Capital',
              'BOI Capital'
            ].map((company, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <Building2 className="w-5 h-5 text-blue-600" />
                <span className="text-gray-800 font-medium">{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Path */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Career Growth Path</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">1</div>
              <div>
                <h3 className="font-bold text-gray-800">Analyst (0-3 years)</h3>
                <p className="text-gray-700">Build financial models. 100+ hours/week. Learn everything about deals. ₹15-40 LPA</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">2</div>
              <div>
                <h3 className="font-bold text-gray-800">Associate (3-5 years)</h3>
                <p className="text-gray-700">Client meetings. Project management. Build pitch books. ₹30-100 LPA. 90 hours/week</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">3</div>
              <div>
                <h3 className="font-bold text-gray-800">Vice President (5-8 years)</h3>
                <p className="text-gray-700">Lead teams. Close deals. Strategic advice to clients. ₹1.5-3 Cr LPA. Still 80 hours/week</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">4</div>
              <div>
                <h3 className="font-bold text-gray-800">Managing Director (8+ years)</h3>
                <p className="text-gray-700">Bring in deals. Build client relationships. Lead practice area. ₹5-20 Cr+ LPA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12 border border-blue-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Pro Tips to Succeed in IB</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <p className="mb-3"><strong className="text-blue-700">1. Master Excel BEFORE joining:</strong> Learn VBA, pivot tables, advanced formulas. Weak Excel = fired analysts.</p>
              <p className="mb-3"><strong className="text-blue-700">2. Build a deal model:</strong> Create 3-4 full financial models before interview. Know your DCF inside-out.</p>
              <p className="mb-3"><strong className="text-blue-700">3. Stay 2-3 years minimum:</strong> Exit too early = wasted effort. You need 2-3 years to be valuable.</p>
            </div>
            <div>
              <p className="mb-3"><strong className="text-blue-700">4. Network relentlessly:</strong> Make friends with 20+ deal partners. Your exit depends on it.</p>
              <p className="mb-3"><strong className="text-blue-700">5. Survive the first 1-2 years:</strong> Most burnout happens early. Push through, then lifestyle improves at VP.</p>
              <p className="mb-3"><strong className="text-blue-700">6. Plan your exit early:</strong> Know if you want PE, VC, or Corporate. Choose your team accordingly.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Structure ₹1000+ Cr Deals?</h2>
          <p className="text-blue-50 mb-6">Join the elite: ₹15 LPA Analyst to ₹2+ Cr Managing Director. But only if you can handle 100-hour weeks and extreme pressure.</p>
          <a href="/courses" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all inline-block">
            Explore Learning Resources
          </a>
        </div>
      </div>
    </div>
  );
}
