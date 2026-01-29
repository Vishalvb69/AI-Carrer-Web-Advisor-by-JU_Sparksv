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
  BarChart,
  Target,
  Brain,
  AlertCircle,
  Building,
  Lightbulb,
  TrendingDown
} from 'lucide-react'

const BBADetails = () => {
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
            <span className="text-gray-900 font-medium">BBA (Business Administration)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Business Management Degree
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                BBA (Business Administration)
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Learn business fundamentals, management, marketing, and finance - your gateway to corporate careers and MBA programs
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">₹3-8 LPA</div>
                  <div className="text-sm text-gray-200">Starting Salary</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">8%</div>
                  <div className="text-sm text-gray-200">Growth Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">3 Years</div>
                  <div className="text-sm text-gray-200">Duration</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-gray-200" />
                  <span>3-year undergraduate degree</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-3 text-gray-200" />
                  <span>MBA pathway - highly recommended</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-3 text-gray-200" />
                  <span>Versatile career options</span>
                </div>
                <div className="flex items-center">
                  <BarChart className="h-5 w-5 mr-3 text-gray-200" />
                  <span>Marketing, Finance, HR, Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Reality Check */}
        <section className="mb-16 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertCircle className="h-6 w-6 text-amber-600 mr-3" />
            Reality Check: What You Should Know
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">⚠️ Oversaturated Market</h3>
              <p className="text-sm">Thousands of BBA graduates every year. Competition is intense for good positions. College brand matters enormously.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">⚠️ MBA Almost Mandatory</h3>
              <p className="text-sm">BBA alone limits career growth. Most successful professionals pursue MBA after 2-3 years of work experience for better roles.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">⚠️ Starting Salaries Are Low</h3>
              <p className="text-sm">Fresh BBA: ₹2.5-5 LPA typical. Sales-heavy roles dominate. Takes 5-7 years to reach good packages without MBA.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">⚠️ Internships Critical</h3>
              <p className="text-sm">Real skills learned through internships, not classroom. Without 2-3 good internships, placements will be weak.</p>
            </div>
          </div>
        </section>

        {/* Earnings Breakdown */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <DollarSign className="h-8 w-8 text-green-600 mr-3" />
            Salary Expectations (India)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Fresh Graduate</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹3-8 LPA</div>
              <p className="text-sm text-gray-600 mb-4">0-2 years experience</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Top colleges: ₹6-12 LPA</li>
                <li>• Good colleges: ₹4-7 LPA</li>
                <li>• Average colleges: ₹2.5-4 LPA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">With MBA</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">₹12-30 LPA</div>
              <p className="text-sm text-gray-600 mb-4">After top B-school MBA</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• IIM MBA: ₹20-35 LPA</li>
                <li>• Top 20 MBA: ₹15-25 LPA</li>
                <li>• Tier 2 MBA: ₹10-18 LPA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Mid-Career</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹15-40 LPA</div>
              <p className="text-sm text-gray-600 mb-4">5-10 years, manager roles</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Assistant Manager: ₹8-15 LPA</li>
                <li>• Manager: ₹12-25 LPA</li>
                <li>• Senior Manager: ₹18-35 LPA</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-sm border-2 border-orange-300">
              <h3 className="text-lg font-semibold mb-2">Senior Level</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">₹40L-1Cr+</div>
              <p className="text-sm text-gray-600 mb-4">10-20+ years, leadership</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Director: ₹35-60 LPA</li>
                <li>• VP/AVP: ₹50-80 LPA</li>
                <li>• CXO: ₹80L-2Cr+</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Target className="h-8 w-8 text-blue-600 mr-3" />
            Specialization Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border">
              <BarChart className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Marketing & Sales</h3>
              <p className="text-gray-600 mb-4 text-sm">Brand management, digital marketing, market research, sales strategy, product launches</p>
              <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹4-40 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border">
              <DollarSign className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Finance & Banking</h3>
              <p className="text-gray-600 mb-4 text-sm">Financial analysis, investment banking, corporate finance, portfolio management, audit</p>
              <div className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹5-50 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border">
              <Users className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Human Resources</h3>
              <p className="text-gray-600 mb-4 text-sm">Talent acquisition, employee relations, training & development, payroll, organizational development</p>
              <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹4-35 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border">
              <Building className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Operations & Supply Chain</h3>
              <p className="text-gray-600 mb-4 text-sm">Process optimization, logistics, inventory management, quality control, project management</p>
              <div className="bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹4-38 LPA</div>
            </div>
          </div>
        </section>

        {/* Education Path */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
            Education & Top Colleges
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Top BBA Colleges</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• IIM Rohtak - Integrated Program (IPM)</li>
                  <li>• IIM Indore - IPM (5-year BBA+MBA)</li>
                  <li>• Christ University, Bangalore</li>
                  <li>• NMIMS Mumbai</li>
                  <li>• Symbiosis Centre, Pune</li>
                  <li>• Shaheed Sukhdev College (DU)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Entrance Exams</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• IPMAT - For IIM IPM programs</li>
                  <li>• DU JAT - Delhi University</li>
                  <li>• NPAT - NMIMS entrance</li>
                  <li>• SET - Symbiosis</li>
                  <li>• Most colleges: Direct admission</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">MBA After BBA (Highly Recommended)</h4>
              <p className="text-sm text-gray-700">Work for 2-3 years after BBA, then pursue MBA from top colleges (IIM/Top 20 B-schools). This dramatically improves career trajectory with 3-5x salary jump and much better roles. CAT/XAT/GMAT preparation required.</p>
            </div>
          </div>
        </section>

        {/* Skills Required */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Brain className="h-8 w-8 text-indigo-600 mr-3" />
            Essential Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-4">Business Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Marketing fundamentals</li>
                <li>• Finance & accounting basics</li>
                <li>• Business strategy & planning</li>
                <li>• Operations management</li>
                <li>• Entrepreneurship mindset</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Excel (Pivot, VLOOKUP)</li>
                <li>• PowerPoint presentations</li>
                <li>• Data analysis basics</li>
                <li>• Digital marketing (SEO/SEM)</li>
                <li>• CRM tools (Salesforce)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-4">Soft Skills (Critical!)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Communication (fluent English)</li>
                <li>• Leadership & teamwork</li>
                <li>• Negotiation skills</li>
                <li>• Problem-solving ability</li>
                <li>• Networking & relationships</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Top Employers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-green-600 mr-3" />
            Career Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-3">Corporate (FMCG/Tech)</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• HUL, P&G, ITC, Nestle</li>
                <li>• Amazon, Flipkart, Swiggy</li>
                <li>• Google, Microsoft, Meta</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-3">Banking & Finance</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• HDFC, ICICI, Axis Banks</li>
                <li>• Paytm, PhonePe, Razorpay</li>
                <li>• Big 4, Consulting firms</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-3">Startups & Others</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Meesho, Nykaa, Myntra</li>
                <li>• Byju's, Unacademy, upGrad</li>
                <li>• Own business/startup</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pros & Cons</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                Advantages
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Versatile degree</strong> - Opens marketing, sales, HR, finance, operations paths</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>MBA pathway</strong> - Direct route to top business schools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Entrepreneurship base</strong> - Learn business fundamentals for startups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Soft skills focus</strong> - Critical communication and leadership development</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <TrendingDown className="h-6 w-6 mr-2" />
                Challenges
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span><strong>Oversaturated market</strong> - Thousands compete for limited good positions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span><strong>College brand critical</strong> - IIM ₹20L vs unknown college ₹3L huge gap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span><strong>Low starting salaries</strong> - Most fresh jobs ₹2.5-5 LPA, sales-heavy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span><strong>MBA almost mandatory</strong> - Limited growth ceiling without further education</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI Impact */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 border-2 border-purple-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Lightbulb className="h-7 w-7 text-purple-600 mr-3" />
              AI & Future Outlook
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>AI Impact:</strong> Automation affecting operational and analytical roles (data entry, basic reporting). However, strategic thinking, relationship management, and leadership roles remain human-centric. BBA professionals must focus on creativity, emotional intelligence, and complex problem-solving.
            </p>
            <p className="text-gray-700">
              <strong>Future Outlook:</strong> Good for those from top colleges and with strong soft skills. Digital marketing, data analytics, and strategic consulting roles growing. Traditional sales roles declining. MBA increasingly important for competitive edge.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore BBA?</h2>
            <p className="text-xl mb-8 text-gray-100">
              BBA is versatile but success depends on college brand, internships, and MBA pathway
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/commerce" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Explore More Commerce Careers
              </Link>
              <Link to="/stream-selection" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Compare All Streams
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BBADetails
