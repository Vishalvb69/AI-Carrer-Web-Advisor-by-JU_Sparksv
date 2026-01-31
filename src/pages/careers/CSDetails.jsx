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
  Scale,
  FileText,
  Building2,
  Shield,
  Target,
  CheckCircle,
  AlertCircle,
  Landmark,
  FileCheck,
  Gavel
} from 'lucide-react'

const CSDetails = () => {
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
            <span className="text-gray-900 font-medium">Company Secretary (CS)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Corporate Governance Expert
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Company Secretary (CS)
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Master of corporate law, compliance, and governance - the trusted advisor to company boards
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">₹6-18 LPA</div>
                  <div className="text-sm text-gray-200">Average Salary</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">8%</div>
                  <div className="text-sm text-gray-200">Growth Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">Strategic</div>
                  <div className="text-sm text-gray-200">Role Type</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-gray-200" />
                  <span>3-4 years to qualify (after 12th)</span>
                </div>
                <div className="flex items-center">
                  <Scale className="h-5 w-5 mr-3 text-gray-200" />
                  <span>Corporate law & compliance focus</span>
                </div>
                <div className="flex items-center">
                  <Building2 className="h-5 w-5 mr-3 text-gray-200" />
                  <span>Mandatory for listed companies</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-3 text-gray-200" />
                  <span>Board-level strategic role</span>
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
              <div className="text-3xl font-bold text-green-600 mb-2">₹5-10 LPA</div>
              <p className="text-gray-600 text-sm">After CS qualification</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Corporate Jobs:</strong> ₹5-9 LPA</div>
                <div className="text-sm"><strong>Law Firms:</strong> ₹6-10 LPA</div>
                <div className="text-sm"><strong>Practice:</strong> ₹4-8 LPA</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Experienced (3-8 years)</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹12-25 LPA</div>
              <p className="text-gray-600 text-sm">Senior positions</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Senior CS:</strong> ₹12-18 LPA</div>
                <div className="text-sm"><strong>Compliance Head:</strong> ₹15-25 LPA</div>
                <div className="text-sm"><strong>Legal Manager:</strong> ₹14-22 LPA</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Senior (8+ years)</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹25-80 LPA</div>
              <p className="text-gray-600 text-sm">Top-level positions</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Chief CS (Listed Co):</strong> ₹30-80 LPA</div>
                <div className="text-sm"><strong>Group CS (MNC):</strong> ₹40-70 LPA</div>
                <div className="text-sm"><strong>Own Practice:</strong> ₹20-60 LPA</div>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
            <h4 className="font-semibold text-emerald-900 mb-3 flex items-center">
              <Landmark className="h-5 w-5 mr-2" />
              High-Demand Sectors
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-emerald-800">
              <div>
                <strong>Listed Companies:</strong> Mandatory CS requirement - stable high-paying jobs
              </div>
              <div>
                <strong>Banks & NBFCs:</strong> Heavy compliance needs - ₹15-40 LPA
              </div>
              <div>
                <strong>Startups (Pre-IPO):</strong> Growing demand for IPO compliance - ₹12-30 LPA
              </div>
              <div>
                <strong>Law/Consulting Firms:</strong> Corporate advisory - ₹10-35 LPA
              </div>
            </div>
          </div>
        </section>

        {/* Job Role & Responsibilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            What Company Secretaries Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Core Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Scale className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Ensure corporate governance and compliance</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Manage board meetings and statutory filings</span>
                </li>
                <li className="flex items-start">
                  <Gavel className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Advise on corporate law and regulations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Handle regulatory approvals and licenses</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Ensure SEBI, RBI, Companies Act compliance</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Liaise with directors, shareholders, regulators</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Impact on the World</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-emerald-600 mb-2">Corporate Integrity</h4>
                  <p className="text-gray-600 text-sm">Ensure companies follow laws, maintain transparency, and protect stakeholder interests.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Investor Protection</h4>
                  <p className="text-gray-600 text-sm">Safeguard shareholder rights, ensure fair practices, and maintain trust in capital markets.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Business Enabler</h4>
                  <p className="text-gray-600 text-sm">Help companies navigate complex regulations while pursuing growth opportunities.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">Strategic Advisor</h4>
                  <p className="text-gray-600 text-sm">Guide boards on governance, risk management, and strategic decision-making.</p>
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
                <h3 className="text-lg font-semibold mb-4 text-red-600">Challenging Aspects</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Vast corporate law syllabus</li>
                  <li>• Frequent law amendments to track</li>
                  <li>• Complex compliance requirements</li>
                  <li>• High liability and responsibility</li>
                  <li>• Tight regulatory deadlines</li>
                  <li>• Balancing multiple stakeholders</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-yellow-600">Moderate Difficulty</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Understanding corporate structures</li>
                  <li>• Board meeting procedures</li>
                  <li>• Statutory filing requirements</li>
                  <li>• Secretarial standards</li>
                  <li>• Corporate communication</li>
                  <li>• Documentation management</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">Advantages</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Easier than CA (relatively)</li>
                  <li>• Strategic board-level role</li>
                  <li>• Regular work hours (mostly)</li>
                  <li>• Growing demand (compliance focus)</li>
                  <li>• Diverse career opportunities</li>
                  <li>• Can combine with CA/LLB</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-semibold text-yellow-900 mb-3 flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                The CS Journey
              </h4>
              <div className="space-y-2 text-sm text-yellow-800">
                <p><strong>CS Foundation:</strong> After 12th - 4 months preparation</p>
                <p><strong>CS Executive:</strong> 8 months preparation + 8 months training</p>
                <p><strong>CS Professional:</strong> 9 months preparation + 15 months training</p>
                <p><strong>Total Duration:</strong> 3-4 years from 12th standard</p>
                <p><strong>Pass Rates:</strong> Foundation ~40%, Executive ~30%, Professional ~30%</p>
                <p><strong>Note:</strong> More achievable than CA, but still requires dedication</p>
              </div>
            </div>
            
            <div className="mt-6 bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Success Requirements</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800">
                <div>
                  <strong>Academic:</strong> Strong grasp of corporate law, attention to detail, good memory, analytical thinking
                </div>
                <div>
                  <strong>Personal:</strong> Integrity, confidentiality, communication skills, ability to handle pressure
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
            Career Paths for CS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Building2 className="h-10 w-10 text-emerald-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Company Secretary (Listed)</h3>
              <p className="text-gray-600 text-sm mb-4">Mandatory role in listed companies</p>
              <div className="text-green-600 font-semibold">₹15-80 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <FileCheck className="h-10 w-10 text-blue-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Compliance Officer</h3>
              <p className="text-gray-600 text-sm mb-4">Regulatory compliance management</p>
              <div className="text-green-600 font-semibold">₹10-30 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Scale className="h-10 w-10 text-purple-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Corporate Legal</h3>
              <p className="text-gray-600 text-sm mb-4">In-house legal counsel role</p>
              <div className="text-green-600 font-semibold">₹12-35 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Gavel className="h-10 w-10 text-orange-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Law Firm Practice</h3>
              <p className="text-gray-600 text-sm mb-4">Corporate law consulting</p>
              <div className="text-green-600 font-semibold">₹8-25 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Target className="h-10 w-10 text-red-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Governance Consultant</h3>
              <p className="text-gray-600 text-sm mb-4">Advisory for corporate governance</p>
              <div className="text-green-600 font-semibold">₹12-40 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Landmark className="h-10 w-10 text-indigo-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Own Practice</h3>
              <p className="text-gray-600 text-sm mb-4">Independent CS practice</p>
              <div className="text-green-600 font-semibold">₹15-50 LPA</div>
            </div>
          </div>
        </section>

        {/* CS vs CA */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">CS vs CA: Quick Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-emerald-900 mb-4">Why Choose CS?</h3>
              <ul className="space-y-2 text-sm text-emerald-800">
                <li>✓ Relatively easier than CA</li>
                <li>✓ Better pass rates (30% vs 8-10%)</li>
                <li>✓ Shorter duration (3-4 years vs 4-5 years)</li>
                <li>✓ More manageable workload</li>
                <li>✓ Board-level strategic role</li>
                <li>✓ Growing demand (compliance boom)</li>
                <li>✓ Can pursue CA+CS dual qualification</li>
                <li>✓ Better work-life balance</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Career Opportunities</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• Every listed company needs a CS (mandatory)</li>
                <li>• Banks, NBFCs, insurance companies</li>
                <li>• Growing startups heading for IPO</li>
                <li>• Law firms and consulting companies</li>
                <li>• Government regulatory bodies</li>
                <li>• Own practice with multiple clients</li>
                <li>• Teaching and training institutes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Become a Company Secretary?</h2>
          <p className="text-gray-100 mb-6">
            CS is an excellent choice for students interested in corporate law and governance. With growing 
            compliance requirements, CS professionals are in high demand. The journey is challenging but more 
            achievable than CA, offering great career prospects and respect.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/resources"
              className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get CS Foundation Guide
            </Link>
            <Link 
              to="/commerce"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-700 transition-colors"
            >
              Explore Commerce Careers
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CSDetails