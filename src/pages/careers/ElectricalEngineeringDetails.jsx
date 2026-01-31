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
  Settings,
  Cpu,
  Brain,
  Target,
  Power
} from 'lucide-react'

const ElectricalEngineeringDetails = () => {
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
            <span className="text-gray-900 font-medium">Electrical Engineering</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Core Engineering Field
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Electrical Engineering
              </h1>
              <p className="text-xl text-yellow-100 mb-6">
                Design and maintain electrical systems and equipment that power our modern world
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">₹6-18 LPA</div>
                  <div className="text-sm text-yellow-200">Average Salary</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">7%</div>
                  <div className="text-sm text-yellow-200">Growth Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">Good</div>
                  <div className="text-sm text-yellow-200">Job Outlook</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-yellow-200" />
                  <span>4 years undergraduate program</span>
                </div>
                <div className="flex items-center">
                  <Power className="h-5 w-5 mr-3 text-yellow-200" />
                  <span>Essential infrastructure field</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-3 text-yellow-200" />
                  <span>Government & private opportunities</span>
                </div>
                <div className="flex items-center">
                  <Settings className="h-5 w-5 mr-3 text-yellow-200" />
                  <span>Hands-on technical work</span>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Fresher (0-2 years)</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">₹3-7 LPA</div>
              <p className="text-gray-600 text-sm">Starting salaries for fresh graduates</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>PSU Companies:</strong> ₹6-9 LPA</div>
                <div className="text-sm"><strong>Private Companies:</strong> ₹4-7 LPA</div>
                <div className="text-sm"><strong>Core Industries:</strong> ₹3-6 LPA</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Experienced (3-8 years)</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹8-18 LPA</div>
              <p className="text-gray-600 text-sm">Mid-level professional salaries</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Senior Engineer:</strong> ₹8-12 LPA</div>
                <div className="text-sm"><strong>Project Manager:</strong> ₹12-18 LPA</div>
                <div className="text-sm"><strong>Specialist Roles:</strong> ₹15-22 LPA</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Senior (8+ years)</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹18-40 LPA</div>
              <p className="text-gray-600 text-sm">Senior management positions</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>General Manager:</strong> ₹18-30 LPA</div>
                <div className="text-sm"><strong>Chief Engineer:</strong> ₹25-40 LPA</div>
                <div className="text-sm"><strong>Consultant:</strong> ₹30-50+ LPA</div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Role & Responsibilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            What Electrical Engineers Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Daily Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Cpu className="h-5 w-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Design electrical circuits and power systems</span>
                </li>
                <li className="flex items-start">
                  <Settings className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Install and maintain electrical equipment</span>
                </li>
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Troubleshoot electrical problems and failures</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Collaborate with multidisciplinary teams</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Ensure safety standards and regulations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Impact on the World</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-yellow-600 mb-2">Power Generation</h4>
                  <p className="text-gray-600 text-sm">Design and maintain power plants that provide electricity to millions of people.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Smart Grids</h4>
                  <p className="text-gray-600 text-sm">Develop intelligent electrical grids for efficient energy distribution and sustainability.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Renewable Energy</h4>
                  <p className="text-gray-600 text-sm">Engineer solar, wind, and other renewable energy systems for a sustainable future.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">Infrastructure</h4>
                  <p className="text-gray-600 text-sm">Build electrical infrastructure for cities, transportation, and industrial development.</p>
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
                <h3 className="text-lg font-semibold mb-4 text-red-600">High Difficulty Areas</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Complex power system analysis</li>
                  <li>• High-voltage safety protocols</li>
                  <li>• Advanced control systems</li>
                  <li>• Electromagnetic field theory</li>
                  <li>• Power electronics design</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-yellow-600">Moderate Difficulty</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Circuit analysis and design</li>
                  <li>• Motor control systems</li>
                  <li>• Electrical measurements</li>
                  <li>• Power distribution systems</li>
                  <li>• Equipment maintenance</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">Manageable Aspects</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Basic electrical principles</li>
                  <li>• Wiring and installation</li>
                  <li>• Equipment operation</li>
                  <li>• Safety procedures</li>
                  <li>• Documentation and reports</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-yellow-50 rounded-lg p-6">
              <h4 className="font-semibold text-yellow-900 mb-3">Success Tips</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-800">
                <div>
                  <strong>Technical Skills:</strong> Strong math and physics foundation, hands-on experience with electrical equipment
                </div>
                <div>
                  <strong>Soft Skills:</strong> Problem-solving abilities, attention to detail, teamwork and communication skills
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
            Career Specializations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Power Systems</h3>
              <p className="text-gray-600 text-sm mb-4">Design and manage electrical power generation and distribution</p>
              <div className="text-green-600 font-semibold">₹6-25 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Control Systems</h3>
              <p className="text-gray-600 text-sm mb-4">Develop automation and control systems for industries</p>
              <div className="text-green-600 font-semibold">₹7-30 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Electronics & VLSI</h3>
              <p className="text-gray-600 text-sm mb-4">Design integrated circuits and electronic systems</p>
              <div className="text-green-600 font-semibold">₹8-35 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Renewable Energy</h3>
              <p className="text-gray-600 text-sm mb-4">Work on solar, wind, and sustainable energy systems</p>
              <div className="text-green-600 font-semibold">₹6-28 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Telecommunications</h3>
              <p className="text-gray-600 text-sm mb-4">Design communication systems and networks</p>
              <div className="text-green-600 font-semibold">₹5-22 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Government Services</h3>
              <p className="text-gray-600 text-sm mb-4">Join PSUs, Railways, or government departments</p>
              <div className="text-green-600 font-semibold">₹8-20 LPA</div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Power the Future?</h2>
          <p className="text-yellow-100 mb-6">
            Electrical Engineering is fundamental to modern civilization, offering stable careers with opportunities 
            in both government and private sectors. Start preparing for JEE to get into top engineering colleges.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/resources/jee-main-strategy"
              className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
            >
              Get JEE Strategy
            </Link>
            <Link 
              to="/engineering"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors"
            >
              Explore More Engineering
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ElectricalEngineeringDetails