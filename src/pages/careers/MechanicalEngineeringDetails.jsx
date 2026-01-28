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
  Cog,
  Brain,
  Target,
  Wrench,
  Factory
} from 'lucide-react'

const MechanicalEngineeringDetails = () => {
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
            <span className="text-gray-900 font-medium">Mechanical Engineering</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Mother of All Engineering
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Mechanical Engineering
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Design, build, and maintain mechanical systems and machines that move the world
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">₹5-15 LPA</div>
                  <div className="text-sm text-gray-200">Average Salary</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">4%</div>
                  <div className="text-sm text-gray-200">Growth Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">Stable</div>
                  <div className="text-sm text-gray-200">Job Outlook</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-gray-200" />
                  <span>4 years undergraduate program</span>
                </div>
                <div className="flex items-center">
                  <Factory className="h-5 w-5 mr-3 text-gray-200" />
                  <span>Core manufacturing industry</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-3 text-gray-200" />
                  <span>Versatile career options</span>
                </div>
                <div className="flex items-center">
                  <Wrench className="h-5 w-5 mr-3 text-gray-200" />
                  <span>Hands-on problem solving</span>
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
              <div className="text-3xl font-bold text-green-600 mb-2">₹3-6 LPA</div>
              <p className="text-gray-600 text-sm">Starting salaries for fresh graduates</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Core Companies:</strong> ₹3-5 LPA</div>
                <div className="text-sm"><strong>PSU Companies:</strong> ₹5-8 LPA</div>
                <div className="text-sm"><strong>Automotive:</strong> ₹4-7 LPA</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Experienced (3-8 years)</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹7-15 LPA</div>
              <p className="text-gray-600 text-sm">Mid-level professional salaries</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Senior Engineer:</strong> ₹7-12 LPA</div>
                <div className="text-sm"><strong>Project Manager:</strong> ₹10-15 LPA</div>
                <div className="text-sm"><strong>Design Engineer:</strong> ₹8-14 LPA</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Senior (8+ years)</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹15-35 LPA</div>
              <p className="text-gray-600 text-sm">Senior management positions</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>General Manager:</strong> ₹15-25 LPA</div>
                <div className="text-sm"><strong>Plant Head:</strong> ₹20-35 LPA</div>
                <div className="text-sm"><strong>Consultant:</strong> ₹25-50+ LPA</div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Role & Responsibilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            What Mechanical Engineers Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Daily Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Cog className="h-5 w-5 text-gray-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Design mechanical components and systems</span>
                </li>
                <li className="flex items-start">
                  <Settings className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Test and analyze machine performance</span>
                </li>
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Solve complex engineering problems</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Collaborate with manufacturing teams</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Ensure quality and safety standards</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Impact on the World</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-600 mb-2">Manufacturing Innovation</h4>
                  <p className="text-gray-600 text-sm">Develop efficient manufacturing processes that produce everyday products and industrial equipment.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Automotive Evolution</h4>
                  <p className="text-gray-600 text-sm">Design vehicles, engines, and transportation systems that move people and goods safely.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Aerospace & Defense</h4>
                  <p className="text-gray-600 text-sm">Create aircraft, spacecraft, and defense systems for exploration and national security.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">Energy Solutions</h4>
                  <p className="text-gray-600 text-sm">Build turbines, engines, and machinery for energy generation and conservation.</p>
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
                  <li>• Complex thermodynamics calculations</li>
                  <li>• Advanced material science</li>
                  <li>• Fluid mechanics analysis</li>
                  <li>• Heat transfer optimization</li>
                  <li>• Machine dynamics modeling</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-yellow-600">Moderate Difficulty</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Engineering drawing and CAD</li>
                  <li>• Manufacturing processes</li>
                  <li>• Quality control methods</li>
                  <li>• Project management</li>
                  <li>• Cost analysis and optimization</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">Manageable Aspects</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Basic mechanical principles</li>
                  <li>• Workshop practices</li>
                  <li>• Equipment operation</li>
                  <li>• Safety protocols</li>
                  <li>• Documentation and reporting</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Success Tips</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800">
                <div>
                  <strong>Technical Skills:</strong> Strong math and physics foundation, CAD proficiency, hands-on workshop experience
                </div>
                <div>
                  <strong>Soft Skills:</strong> Analytical thinking, creativity in design, teamwork and leadership abilities
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
              <h3 className="font-semibold text-lg mb-2">Automotive Engineering</h3>
              <p className="text-gray-600 text-sm mb-4">Design and develop vehicles and automotive systems</p>
              <div className="text-green-600 font-semibold">₹5-20 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Manufacturing Engineering</h3>
              <p className="text-gray-600 text-sm mb-4">Optimize production processes and systems</p>
              <div className="text-green-600 font-semibold">₹4-18 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Aerospace Engineering</h3>
              <p className="text-gray-600 text-sm mb-4">Work on aircraft, spacecraft, and defense systems</p>
              <div className="text-green-600 font-semibold">₹6-25 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Robotics Engineering</h3>
              <p className="text-gray-600 text-sm mb-4">Design and build robotic systems and automation</p>
              <div className="text-green-600 font-semibold">₹7-30 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">HVAC Engineering</h3>
              <p className="text-gray-600 text-sm mb-4">Design heating, ventilation, and air conditioning systems</p>
              <div className="text-green-600 font-semibold">₹4-15 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Government Services</h3>
              <p className="text-gray-600 text-sm mb-4">Join Railways, DRDO, ISRO, or PSU companies</p>
              <div className="text-green-600 font-semibold">₹6-18 LPA</div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Build the Future?</h2>
          <p className="text-gray-100 mb-6">
            Mechanical Engineering is the backbone of industry, offering diverse career paths from automotive to aerospace. 
            It's perfect for those who love solving physical problems and building things that work.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/resources/jee-main-strategy"
              className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get JEE Strategy
            </Link>
            <Link 
              to="/engineering"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-700 transition-colors"
            >
              Explore More Engineering
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MechanicalEngineeringDetails