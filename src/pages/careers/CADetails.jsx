import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Clock, 
  Award,
  BookOpen,
  Briefcase,
  Calculator,
  FileText,
  TrendingDown,
  Scale,
  Building2,
  Globe,
  Landmark,
  Target,
  Brain,
  AlertCircle
} from 'lucide-react'

const CADetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/commerce" className="hover:text-blue-600 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Commerce
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Chartered Accountant (CA)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Most Prestigious Commerce Career
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Chartered Accountant (CA)
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Master of finance, taxation, and auditing - one of the most respected and highest-paid commerce professions
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">₹7-20 LPA</div>
                  <div className="text-sm text-gray-200">Average Salary</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">18%</div>
                  <div className="text-sm text-gray-200">Growth Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">Elite</div>
                  <div className="text-sm text-gray-200">Professional Status</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-gray-200" />
                  <span>4-5 years to qualify (after 12th)</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-3 text-gray-200" />
                  <span>Highly prestigious designation</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-3 text-gray-200" />
                  <span>Global recognition (MRA countries)</span>
                </div>
                <div className="flex items-center">
                  <Calculator className="h-5 w-5 mr-3 text-gray-200" />
                  <span>Master of finance & taxation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Earnings Breakdown */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <DollarSign className="h-8 w-8 text-green-600 mr-3" />
            Earnings & Career Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Newly Qualified (0-3 years)</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">₹6-12 LPA</div>
              <p className="text-gray-600 text-sm">After CA qualification</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Big 4 (Entry):</strong> ₹7-12 LPA</div>
                <div className="text-sm"><strong>Mid-size Firms:</strong> ₹6-10 LPA</div>
                <div className="text-sm"><strong>Industry Jobs:</strong> ₹8-15 LPA</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Experienced (3-8 years)</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹15-35 LPA</div>
              <p className="text-gray-600 text-sm">Senior positions</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Senior Manager:</strong> ₹15-25 LPA</div>
                <div className="text-sm"><strong>Finance Controller:</strong> ₹20-35 LPA</div>
                <div className="text-sm"><strong>Big 4 Manager:</strong> ₹18-30 LPA</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Senior/Partner (8+ years)</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹40L-2 Cr+</div>
              <p className="text-gray-600 text-sm">Leadership & partnership</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>CFO (Large Corp):</strong> ₹40L-1.5 Cr</div>
                <div className="text-sm"><strong>Big 4 Partner:</strong> ₹60L-3 Cr+</div>
                <div className="text-sm"><strong>Own Practice:</strong> ₹30L-5 Cr+</div>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
            <h4 className="font-semibold text-indigo-900 mb-3 flex items-center">
              <Building2 className="h-5 w-5 mr-2" />
              Big 4 Firms (Premium Salaries & Experience)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-indigo-800">
              <div>
                <strong>Deloitte:</strong> ₹7-12 LPA (Fresher) → ₹60L-2 Cr+ (Partner)
              </div>
              <div>
                <strong>EY (Ernst & Young):</strong> ₹7-11 LPA → ₹50L-2 Cr+
              </div>
              <div>
                <strong>PwC:</strong> ₹7-12 LPA → ₹55L-2.5 Cr+
              </div>
              <div>
                <strong>KPMG:</strong> ₹7-11 LPA → ₹50L-2 Cr+
              </div>
            </div>
          </div>
        </section>

        {/* Job Role & Responsibilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            What CAs Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Core Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Audit financial statements and ensure compliance</span>
                </li>
                <li className="flex items-start">
                  <Calculator className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Tax planning, filing, and advisory</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Financial planning and analysis</span>
                </li>
                <li className="flex items-start">
                  <Scale className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Corporate governance and compliance</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Business advisory and consulting</span>
                </li>
                <li className="flex items-start">
                  <TrendingDown className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Risk management and internal controls</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Impact on the World</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-indigo-600 mb-2">Financial Integrity</h4>
                  <p className="text-gray-600 text-sm">Ensure transparency and accuracy in financial reporting, building trust in markets.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Business Growth</h4>
                  <p className="text-gray-600 text-sm">Help businesses make informed decisions, optimize finances, and achieve sustainable growth.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Economic Stability</h4>
                  <p className="text-gray-600 text-sm">Contribute to national economy through tax compliance, fraud prevention, and financial governance.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Entrepreneurship Support</h4>
                  <p className="text-gray-600 text-sm">Guide startups and businesses in financial planning, funding, and regulatory compliance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Difficulty Level */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="h-8 w-8 text-yellow-600 mr-3" />
            Difficulty & Requirements
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">Extremely Difficult</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Notoriously tough exams (3-4% pass rate)</li>
                  <li>• Vast syllabus across 3 levels</li>
                  <li>• 3-3.5 years articleship (internship)</li>
                  <li>• Multiple attempts often needed</li>
                  <li>• High failure rate causes stress</li>
                  <li>• Complex taxation & accounting standards</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-yellow-600">Challenging Aspects</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Balancing studies with articleship</li>
                  <li>• Financial constraints (low stipend)</li>
                  <li>• Long working hours in audit season</li>
                  <li>• Continuous learning requirement</li>
                  <li>• High client expectations</li>
                  <li>• Keeping up with law changes</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">Massive Rewards</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Extremely high earning potential</li>
                  <li>• Tremendous respect & recognition</li>
                  <li>• Job security and demand</li>
                  <li>• Entrepreneurship opportunity</li>
                  <li>• Global career prospects</li>
                  <li>• Diverse career options</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Reality Check: The CA Journey
              </h4>
              <div className="space-y-2 text-sm text-red-800">
                <p><strong>CA Foundation:</strong> After 12th (4-6 months preparation)</p>
                <p><strong>CA Intermediate:</strong> 8-10 months preparation + 9 months articleship</p>
                <p><strong>CA Final:</strong> 12-18 months preparation + 2-2.5 years articleship</p>
                <p><strong>Total Duration:</strong> 4-5 years minimum from 12th standard</p>
                <p><strong>Pass Rates:</strong> Foundation ~40%, Intermediate ~15%, Final ~8-10%</p>
                <p><strong>Success Rate:</strong> Only 3-5% of students who start CA complete it</p>
              </div>
            </div>
            
            <div className="mt-6 bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Success Requirements</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800">
                <div>
                  <strong>Academic:</strong> Strong accounting & math skills, analytical thinking, attention to detail, memory retention
                </div>
                <div>
                  <strong>Personal:</strong> Extreme dedication, perseverance, stress management, patience for long journey
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
            Career Paths for CAs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Building2 className="h-10 w-10 text-indigo-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Practice (Own/Firm)</h3>
              <p className="text-gray-600 text-sm mb-4">Audit, taxation, consulting services</p>
              <div className="text-green-600 font-semibold">₹10-50 LPA+</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Landmark className="h-10 w-10 text-blue-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Big 4 Firms</h3>
              <p className="text-gray-600 text-sm mb-4">Deloitte, EY, PwC, KPMG</p>
              <div className="text-green-600 font-semibold">₹7-30 LPA (freshers-managers)</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Calculator className="h-10 w-10 text-green-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Corporate Finance</h3>
              <p className="text-gray-600 text-sm mb-4">CFO, Finance Manager, Financial Controller</p>
              <div className="text-green-600 font-semibold">₹10-60 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Scale className="h-10 w-10 text-purple-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Taxation</h3>
              <p className="text-gray-600 text-sm mb-4">Tax consultant, advisory, planning</p>
              <div className="text-green-600 font-semibold">₹8-40 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Target className="h-10 w-10 text-orange-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Investment Banking</h3>
              <p className="text-gray-600 text-sm mb-4">M&A, valuations, due diligence</p>
              <div className="text-green-600 font-semibold">₹12-80 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Brain className="h-10 w-10 text-pink-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Consulting</h3>
              <p className="text-gray-600 text-sm mb-4">Management, strategy, financial consulting</p>
              <div className="text-green-600 font-semibold">₹10-50 LPA</div>
            </div>
          </div>
        </section>

        {/* CA vs Other Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose CA?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Advantages</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li>✓ One of highest-paid commerce careers</li>
                <li>✓ Elite professional status & respect</li>
                <li>✓ Lower education cost than MBA</li>
                <li>✓ Can start after 12th (no degree needed)</li>
                <li>✓ Own practice opportunity</li>
                <li>✓ Global recognition (MRA with 10+ countries)</li>
                <li>✓ Diverse career paths available</li>
                <li>✓ Excellent job security</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Challenges</h3>
              <ul className="space-y-2 text-sm text-orange-800">
                <li>• Extremely difficult exams (low pass rates)</li>
                <li>• 4-5 years minimum commitment</li>
                <li>• Low articleship stipend initially</li>
                <li>• High stress during exam preparation</li>
                <li>• Multiple attempts may be needed</li>
                <li>• Long working hours in busy season</li>
                <li>• Requires exceptional dedication</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Become a CA?</h2>
          <p className="text-gray-100 mb-6">
            CA is one of the toughest but most rewarding professional courses in India. If you have dedication, 
            perseverance, and passion for finance, the CA designation opens doors to elite career opportunities 
            and financial success.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/resources"
              className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get CA Foundation Strategy
            </Link>
            <Link 
              to="/commerce"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-colors"
            >
              Explore Commerce Careers
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CADetails