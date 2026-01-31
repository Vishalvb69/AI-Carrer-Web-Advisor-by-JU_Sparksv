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
  Plane,
  Rocket,
  Brain,
  Target,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react'

const AerospaceEngineeringDetails = () => {
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
            <span className="text-gray-900 font-medium">Aerospace Engineering</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Sky & Space Engineering
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Aerospace Engineering
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Design, develop, and test aircraft, spacecraft, satellites, and missiles. Work on cutting-edge technology that reaches beyond Earth's atmosphere.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹6-25 LPA</div>
                  <div className="text-sm text-gray-200">Starting Package</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹15-50+ LPA</div>
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
                <Plane className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Aeronautical</h3>
                <p className="text-sm text-gray-200">Aircraft & Aviation</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Rocket className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Astronautical</h3>
                <p className="text-sm text-gray-200">Spacecraft & Satellites</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Target className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Defense Systems</h3>
                <p className="text-sm text-gray-200">Missiles & UAVs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Globe className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Space Tech</h3>
                <p className="text-sm text-gray-200">ISRO & Research</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check Banner */}
      <section className="bg-amber-50 border-t-4 border-amber-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Reality Check</h3>
              <div className="text-amber-800 space-y-2">
                <p className="font-medium">• Limited Companies: Only 50-70 major aerospace employers in India (HAL, ISRO, DRDO, Boeing India, Airbus, SpiceJet, IndiGo MRO)</p>
                <p className="font-medium">• Highly Competitive: Only top 10-15% of graduates get core aerospace roles; others pivot to mechanical/software</p>
                <p className="font-medium">• Defense-Heavy: 60% of opportunities are in defense sector requiring security clearances</p>
                <p className="font-medium">• Location-Specific: Most jobs in Bangalore, Hyderabad, Mumbai, Pune - limited geographical flexibility</p>
                <p className="font-medium">• Advanced Degree Preferred: M.Tech/PhD often required for ISRO, research roles - B.Tech alone may not suffice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            <DollarSign className="inline h-8 w-8 mr-2" />
            Earnings Breakdown
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
              <div className="text-sm text-gray-600 mb-2">Fresh Graduate (0-2 years)</div>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹6-12 LPA</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• PSU: ₹6-9 LPA</li>
                <li>• Private MNC: ₹8-12 LPA</li>
                <li>• Startups: ₹6-10 LPA</li>
                <li>• ISRO/DRDO: ₹6.5-8 LPA</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
              <div className="text-sm text-gray-600 mb-2">Early Career (3-5 years)</div>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹10-18 LPA</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Design Engineer: ₹10-15 LPA</li>
                <li>• Systems Engineer: ₹12-18 LPA</li>
                <li>• Project Lead: ₹14-18 LPA</li>
                <li>• MNC (Boeing/Airbus): ₹15-20 LPA</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500">
              <div className="text-sm text-gray-600 mb-2">Mid-Career (6-10 years)</div>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹15-30 LPA</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Senior Engineer: ₹15-22 LPA</li>
                <li>• Program Manager: ₹20-28 LPA</li>
                <li>• Chief Engineer: ₹22-30 LPA</li>
                <li>• ISRO Scientist 'E': ₹15-20 LPA</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-orange-500">
              <div className="text-sm text-gray-600 mb-2">Senior (10+ years)</div>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹25-50+ LPA</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Director: ₹30-45 LPA</li>
                <li>• Chief Scientist: ₹25-40 LPA</li>
                <li>• VP Engineering: ₹40-60 LPA</li>
                <li>• Research Head: ₹35-50+ LPA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-16 bg-gray-50">
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
                  <span className="text-gray-700"><strong>Cutting-Edge Technology:</strong> Work on advanced aerospace systems, space missions, and defense projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Prestige & Pride:</strong> Contribute to national defense, space programs (ISRO missions), aviation safety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Global Opportunities:</strong> Skills transferable to US, Europe aerospace industries (Boeing, Airbus, NASA, SpaceX)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Job Security:</strong> PSU/Government jobs (ISRO, HAL, DRDO) offer excellent stability and benefits</span>
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
                  <span className="text-gray-700"><strong>Limited Opportunities:</strong> Very few aerospace-specific companies in India compared to software/IT</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>High Competition:</strong> Only 10-15% get core jobs; others shift to mechanical, software, or non-core roles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Lower Initial Pay:</strong> Starting salaries lower than software (₹6-12 LPA vs ₹15-25 LPA in tech)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Limited Colleges:</strong> Only 20-25 colleges in India offer B.Tech Aerospace; requires very high JEE rank</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rocket className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to Reach for the Stars?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Aerospace engineering offers the chance to work on technology that literally touches the sky and beyond. 
            While opportunities are competitive, the impact and satisfaction are unmatched for those passionate about flight and space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/engineering" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore More Engineering Fields
            </Link>
            <Link 
              to="/stream-selection" 
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors border-2 border-white"
            >
              Compare All Streams
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AerospaceEngineeringDetails
