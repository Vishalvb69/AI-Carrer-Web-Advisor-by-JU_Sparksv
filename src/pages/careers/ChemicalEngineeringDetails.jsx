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
  Globe,
  Zap,
  Droplet,
  FlaskConical,
  Brain,
  Target,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Shield,
  Factory,
  Beaker
} from 'lucide-react'

const ChemicalEngineeringDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/engineering" className="hover:text-blue-600 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Engineering
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Chemical Engineering</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Process & Product Engineering
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Chemical Engineering
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Design, optimize, and manage chemical processes that transform raw materials into valuable products. Work across pharmaceuticals, petrochemicals, food processing, energy, and environmental sectors.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹5-20 LPA</div>
                  <div className="text-sm text-gray-200">Starting Package</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹12-40+ LPA</div>
                  <div className="text-sm text-gray-200">Mid-Career</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">4 Years</div>
                  <div className="text-sm text-gray-200">B.Tech Duration</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <FlaskConical className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Pharmaceuticals</h3>
                <p className="text-sm text-gray-200">Drug Manufacturing</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Droplet className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Petrochemicals</h3>
                <p className="text-sm text-gray-200">Oil & Gas Refining</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Factory className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Manufacturing</h3>
                <p className="text-sm text-gray-200">Process Industries</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Shield className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Environment</h3>
                <p className="text-sm text-gray-200">Pollution Control</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check Banner */}
      <section className="bg-amber-50 border-t-4 border-amber-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertTriangle className="h-6 w-6 text-amber-600 mr-2" />
            Reality Check: What They Don't Tell You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Field/Plant Jobs Reality</h3>
              <p className="text-sm text-gray-700">60% jobs in remote refineries/plants - not glamorous office work. 12-hour shifts, hazardous environments, away from cities</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Campus Placement Truth</h3>
              <p className="text-sm text-gray-700">Only top 20-30% get core chemical jobs. Many shift to software, consulting, or MBA. PSU jobs need GATE</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Safety & Responsibility</h3>
              <p className="text-sm text-gray-700">Working with hazardous chemicals requires extreme caution. One mistake can cause explosions, leaks, or environmental disasters</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Salary Starts Low</h3>
              <p className="text-sm text-gray-700">₹5-8 LPA starting is common (except top PSUs). Growth takes 5-8 years. Software pays 2-3x more initially</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Chemistry ≠ Chemical Engg</h3>
              <p className="text-sm text-gray-700">It's 60% engineering (thermodynamics, fluid mechanics, heat transfer) + 40% chemistry. Math-heavy, not lab experiments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <DollarSign className="h-8 w-8 text-green-600 mr-3" />
            Salary Expectations (India)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Fresh Graduate</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹5-12 LPA</div>
              <p className="text-sm text-gray-600 mb-4">0-2 years experience</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Process Engineer: ₹5-8 LPA</li>
                <li>• PSU (via GATE): ₹8-12 LPA</li>
                <li>• Pharma companies: ₹6-10 LPA</li>
                <li>• Consulting firms: ₹8-15 LPA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Mid-Level</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">₹12-25 LPA</div>
              <p className="text-sm text-gray-600 mb-4">3-6 years experience</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Sr. Process Engineer: ₹12-18 LPA</li>
                <li>• Plant Manager: ₹15-22 LPA</li>
                <li>• R&amp;D roles: ₹14-20 LPA</li>
                <li>• Safety Manager: ₹12-18 LPA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Senior Level</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹25-50 LPA</div>
              <p className="text-sm text-gray-600 mb-4">7-12 years experience</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Operations Manager: ₹25-35 LPA</li>
                <li>• Technical Director: ₹30-45 LPA</li>
                <li>• MNC Roles: ₹35-50 LPA</li>
                <li>• Consulting Partner: ₹40-60 LPA</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-sm border-2 border-orange-300">
              <h3 className="text-lg font-semibold mb-2">Expert/Leadership</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">₹50L-1Cr+</div>
              <p className="text-sm text-gray-600 mb-4">12+ years experience</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Plant Head: ₹50-80 LPA</li>
                <li>• VP Engineering: ₹70L-1Cr+</li>
                <li>• Business Head: ₹80L-1.5Cr</li>
                <li>• Entrepreneur: Unlimited</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Work & Responsibilities */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            What Chemical Engineers Actually Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Daily Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Process Design:</strong> Design chemical reactors, distillation columns, heat exchangers using Aspen/HYSYS software</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Plant Operations:</strong> Monitor production processes, troubleshoot issues, optimize efficiency and yields</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Safety Management:</strong> Conduct HAZOP studies, implement safety protocols, manage environmental compliance</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Quality Control:</strong> Analyze product quality, run tests, ensure specifications meet industry standards</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Key Focus Areas</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Process Engineering (35%)</h4>
                  <p className="text-sm text-gray-700">Design reactors, separators, optimize production, scale-up from lab to plant</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Plant Operations (30%)</h4>
                  <p className="text-sm text-gray-700">Monitor equipment, troubleshoot, manage production schedules, coordinate teams</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Safety & Environment (20%)</h4>
                  <p className="text-sm text-gray-700">Risk assessment, pollution control, waste management, regulatory compliance</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">R&amp;D (15%)</h4>
                  <p className="text-sm text-gray-700">New product development, process improvement, catalyst testing, innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Path & Entrance Exams */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
            Education Path & Top Colleges
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border mb-8">
            <h3 className="text-xl font-semibold mb-6">Undergraduate (B.Tech Chemical)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Top IITs (via JEE Advanced)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• IIT Bombay - Top ranked program</li>
                  <li>• IIT Delhi - Strong industry ties</li>
                  <li>• IIT Kanpur - Research focus</li>
                  <li>• IIT Kharagpur - Oldest program</li>
                  <li>• IIT Madras - Excellent placements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">NITs & Other Top Colleges</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• NIT Trichy - Best NIT for Chemical</li>
                  <li>• NIT Warangal - Strong reputation</li>
                  <li>• ICT Mumbai (UDCT) - Specialized</li>
                  <li>• BITS Pilani - Good industry connect</li>
                  <li>• Anna University - South focus</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-800"><strong>Entry Requirements:</strong> JEE Main (for NITs), JEE Advanced (for IITs), BITSAT, State CETs. Required: Physics, Chemistry, Mathematics in 12th with 75%+ marks</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">Postgraduate (M.Tech/MS for Specialization)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Specializations</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Process Engineering</li>
                  <li>• Petrochemical Engineering</li>
                  <li>• Polymer Technology</li>
                  <li>• Environmental Engineering</li>
                  <li>• Pharmaceutical Technology</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Top Institutes</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• IITs (all major ones)</li>
                  <li>• IISc Bangalore</li>
                  <li>• ICT Mumbai</li>
                  <li>• NIT Trichy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Entry via GATE</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• GATE (CH Paper)</li>
                  <li>• 2 years duration</li>
                  <li>• PSU jobs eligibility</li>
                  <li>• Stipend ₹12-15K/month</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Required */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="h-8 w-8 text-yellow-600 mr-3" />
            Essential Skills & Software
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Technical Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Chemical Reaction Engineering</li>
                <li>• Thermodynamics & Kinetics</li>
                <li>• Fluid Mechanics & Heat Transfer</li>
                <li>• Mass Transfer Operations</li>
                <li>• Process Control & Instrumentation</li>
                <li>• Chemical Process Safety</li>
                <li>• Environmental Engineering</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Software Proficiency</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Aspen Plus/HYSYS</strong> - Process simulation</li>
                <li>• <strong>MATLAB</strong> - Mathematical modeling</li>
                <li>• <strong>CHEMCAD</strong> - Process design</li>
                <li>• <strong>AutoCAD/P&amp;ID</strong> - Piping diagrams</li>
                <li>• <strong>COMSOL</strong> - Multiphysics simulation</li>
                <li>• <strong>Python</strong> - Data analysis</li>
                <li>• <strong>SAP/ERP</strong> - Plant management</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Soft Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Safety consciousness (critical)</li>
                <li>• Problem-solving mindset</li>
                <li>• Team leadership in plants</li>
                <li>• Analytical thinking</li>
                <li>• Communication across departments</li>
                <li>• Stress management</li>
                <li>• Adaptability to field conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Top Employers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Globe className="h-8 w-8 text-blue-600 mr-3" />
            Top Chemical Engineering Employers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border border-orange-200">
              <h3 className="font-semibold text-lg mb-4 text-orange-900">PSU/Government</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>ONGC</strong> - Oil & Natural Gas Corporation</li>
                <li><strong>IOCL</strong> - Indian Oil Corporation</li>
                <li><strong>BPCL</strong> - Bharat Petroleum</li>
                <li><strong>HPCL</strong> - Hindustan Petroleum</li>
                <li><strong>GAIL</strong> - Gas Authority of India</li>
                <li><strong>BARC</strong> - Nuclear research</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border border-blue-200">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Private MNCs</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Reliance Industries</strong> - Petrochemicals</li>
                <li><strong>L&amp;T</strong> - EPC contractor</li>
                <li><strong>Shell</strong> - Oil & Gas</li>
                <li><strong>Dow Chemical</strong> - Chemicals</li>
                <li><strong>BASF</strong> - Chemical manufacturing</li>
                <li><strong>UPL</strong> - Agrochemicals</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border border-green-200">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Pharma & FMCG</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Sun Pharma</strong> - Pharmaceuticals</li>
                <li><strong>Dr. Reddy's</strong> - Drug manufacturing</li>
                <li><strong>Cipla</strong> - Pharma production</li>
                <li><strong>HUL</strong> - Consumer goods</li>
                <li><strong>P&amp;G</strong> - FMCG products</li>
                <li><strong>ITC</strong> - Diversified</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Year Roadmap */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Target className="h-8 w-8 text-purple-600 mr-3" />
            5-Year Career Roadmap
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 1-2: Foundation & Plant Training</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Entry Level</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Learn Plant Operations:</strong> Understand equipment (reactors, columns), safety protocols, DCS systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Assistant Engineer Role:</strong> Support senior engineers, monitor parameters, learn troubleshooting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Consider GATE:</strong> Prepare for PSU jobs or M.Tech admission for better career trajectory</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 3-5: Specialization & Ownership</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Mid-Level</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Choose Domain:</strong> Process design, production, R&amp;D, safety, or environmental engineering</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Lead Projects:</strong> Handle process optimization, debottlenecking, new installations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Certifications:</strong> Six Sigma, PMP, Process Safety Management, or pursue M.Tech</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 5+: Management & Leadership</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Senior Level</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Plant/Operations Manager:</strong> Oversee entire production units, manage teams of 50-100 people</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Career Paths:</strong> Technical expert (Chief Engineer) or business leader (Plant Head/GM)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Options:</strong> Move to consulting, entrepreneurship, or pursue MBA for business roles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Difficulty Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <TrendingUp className="h-8 w-8 text-red-600 mr-3" />
            Difficulty Breakdown
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                High Difficulty
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Chemical Reaction Engineering (complex kinetics)</li>
                <li>• Advanced Thermodynamics</li>
                <li>• Transport Phenomena (momentum, heat, mass)</li>
                <li>• Process Design & Optimization</li>
                <li>• Non-ideal systems & phase equilibria</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                Moderate Difficulty
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Fluid Mechanics & unit operations</li>
                <li>• Heat Transfer calculations</li>
                <li>• Mass Transfer (distillation, absorption)</li>
                <li>• Process simulation software</li>
                <li>• Chemical Process Industries knowledge</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Manageable Topics
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Basic chemistry & stoichiometry</li>
                <li>• Material & energy balances</li>
                <li>• Engineering drawing & P&amp;ID</li>
                <li>• Safety procedures & regulations</li>
                <li>• Industrial visit learnings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Specializations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <FlaskConical className="h-8 w-8 text-purple-600 mr-3" />
            Career Specializations & Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Droplet className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Petrochemicals & Refining</h3>
              <p className="text-gray-600 mb-4 text-sm">Oil refineries, gas processing, polymer production, downstream operations</p>
              <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹8-30 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <FlaskConical className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Pharmaceuticals</h3>
              <p className="text-gray-600 mb-4 text-sm">Drug manufacturing, API production, formulation, quality control, regulatory</p>
              <div className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹6-25 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Beaker className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Process Design</h3>
              <p className="text-gray-600 mb-4 text-sm">Design new plants, optimization, simulation, consulting for EPC companies</p>
              <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹7-28 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Shield className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Environmental Engineering</h3>
              <p className="text-gray-600 mb-4 text-sm">Waste treatment, pollution control, sustainability, green technology</p>
              <div className="bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹5-20 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Factory className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Plant Operations</h3>
              <p className="text-gray-600 mb-4 text-sm">Production management, maintenance, troubleshooting in manufacturing plants</p>
              <div className="bg-red-100 text-red-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹6-24 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Zap className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Energy & Fuels</h3>
              <p className="text-gray-600 mb-4 text-sm">Renewable energy, biofuels, battery technology, hydrogen production</p>
              <div className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹7-32 LPA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Weighing Your Options</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Pros</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Diverse Industries:</strong> Work in pharma, oil &amp; gas, FMCG, energy, environment - huge variety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>PSU Opportunities:</strong> Strong chance for stable govt jobs (ONGC, IOCL, BPCL) via GATE</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Global Demand:</strong> Skills applicable worldwide - Gulf, US, Europe have high demand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Impact Work:</strong> Contribute to drug production, clean energy, pollution control, essential products</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <XCircle className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Cons</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Field/Plant Postings:</strong> Many jobs in remote locations (refineries, plants) - away from metro cities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Lower Starting Pay:</strong> ₹5-8 LPA common vs ₹15-25 LPA in software for similar rank colleges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Shift Work:</strong> 12-hour rotating shifts, night duties, weekend work in operations roles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Safety Risks:</strong> Working with hazardous chemicals - accidents can be fatal despite precautions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FlaskConical className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Transform Materials into Value</h2>
          <p className="text-xl text-purple-100 mb-8">
            Chemical engineering offers the unique opportunity to work at the intersection of chemistry, physics, and engineering - creating products that impact millions while solving critical challenges in energy, health, and sustainability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/engineering" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore More Engineering Fields
            </Link>
            <Link 
              to="/stream-selection" 
              className="bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-900 transition-colors border-2 border-white"
            >
              Compare All Streams
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChemicalEngineeringDetails
