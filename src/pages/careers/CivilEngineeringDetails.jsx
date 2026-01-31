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
  Building2,
  HardHat,
  MapPin,
  Ruler,
  Mountain,
  Waves,
  TreePine,
  Landmark
} from 'lucide-react'

const CivilEngineeringDetails = () => {
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
            <span className="text-gray-900 font-medium">Civil Engineering</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Building the Nation
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Civil Engineering
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Design and construct the infrastructure that shapes our cities, roads, and bridges
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">₹4-12 LPA</div>
                  <div className="text-sm text-gray-200">Average Salary</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">8%</div>
                  <div className="text-sm text-gray-200">Growth Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">Excellent</div>
                  <div className="text-sm text-gray-200">India Growth</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-gray-200" />
                  <span>4 years B.Tech/B.E. program</span>
                </div>
                <div className="flex items-center">
                  <Building2 className="h-5 w-5 mr-3 text-gray-200" />
                  <span>Infrastructure development focus</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-3 text-gray-200" />
                  <span>High demand in India</span>
                </div>
                <div className="flex items-center">
                  <HardHat className="h-5 w-5 mr-3 text-gray-200" />
                  <span>Mix of office and field work</span>
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
                <div className="text-sm"><strong>Private Companies:</strong> ₹3-5 LPA</div>
                <div className="text-sm"><strong>Government Jobs:</strong> ₹4-7 LPA</div>
                <div className="text-sm"><strong>Consultancies:</strong> ₹4-6 LPA</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Experienced (3-8 years)</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹7-15 LPA</div>
              <p className="text-gray-600 text-sm">Mid-level professional salaries</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Site Engineer:</strong> ₹6-10 LPA</div>
                <div className="text-sm"><strong>Project Manager:</strong> ₹10-15 LPA</div>
                <div className="text-sm"><strong>Structural Engineer:</strong> ₹8-14 LPA</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Senior (8+ years)</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹15-30 LPA</div>
              <p className="text-gray-600 text-sm">Senior management positions</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Chief Engineer:</strong> ₹15-25 LPA</div>
                <div className="text-sm"><strong>General Manager:</strong> ₹18-30 LPA</div>
                <div className="text-sm"><strong>Independent Consultant:</strong> ₹25-50+ LPA</div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
              <Landmark className="h-5 w-5 mr-2" />
              Government Opportunities (High Job Security)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
              <div>
                <strong>Central PWD Engineer:</strong> ₹6-15 LPA + benefits
              </div>
              <div>
                <strong>State PWD Engineer:</strong> ₹5-12 LPA + benefits
              </div>
              <div>
                <strong>Municipal Engineer:</strong> ₹4-10 LPA + perks
              </div>
              <div>
                <strong>Railways Engineer:</strong> ₹7-18 LPA + benefits
              </div>
            </div>
          </div>
        </section>

        {/* Job Role & Responsibilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            What Civil Engineers Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Daily Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Ruler className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Design structures using AutoCAD and engineering software</span>
                </li>
                <li className="flex items-start">
                  <HardHat className="h-5 w-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Supervise construction activities on-site</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Conduct site surveys and soil testing</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Coordinate with contractors and architects</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Ensure compliance with building codes and safety standards</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Impact on the World</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">Building Infrastructure</h4>
                  <p className="text-gray-600 text-sm">Create roads, bridges, highways, and tunnels that connect cities and enable economic growth.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Urban Development</h4>
                  <p className="text-gray-600 text-sm">Design buildings, housing complexes, and commercial spaces that shape our cities.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Water Management</h4>
                  <p className="text-gray-600 text-sm">Build dams, irrigation systems, and water treatment plants for clean water supply.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Sustainable Solutions</h4>
                  <p className="text-gray-600 text-sm">Develop eco-friendly construction methods and green buildings for environmental conservation.</p>
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
                  <li>• Complex structural analysis</li>
                  <li>• Advanced geotechnical engineering</li>
                  <li>• Earthquake-resistant design</li>
                  <li>• Hydraulic engineering calculations</li>
                  <li>• Large-scale project management</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-yellow-600">Moderate Difficulty</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• AutoCAD and design software</li>
                  <li>• Construction management</li>
                  <li>• Site supervision skills</li>
                  <li>• Material estimation</li>
                  <li>• Building codes and regulations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">Manageable Aspects</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Basic engineering concepts</li>
                  <li>• Site surveying techniques</li>
                  <li>• Quality control procedures</li>
                  <li>• Communication with teams</li>
                  <li>• Documentation and reporting</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Success Tips</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800">
                <div>
                  <strong>Technical Skills:</strong> Master AutoCAD, strong math/physics foundation, practical site experience
                </div>
                <div>
                  <strong>Soft Skills:</strong> Leadership, problem-solving, physical stamina, weather adaptability
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h4 className="font-semibold text-orange-900 mb-2 flex items-center">
                <HardHat className="h-5 w-5 mr-2" />
                Field Work Reality
              </h4>
              <p className="text-sm text-orange-800">
                Civil Engineering involves significant field work - expect to spend time at construction sites, 
                working outdoors in various weather conditions. Physical fitness and ability to work in challenging 
                environments is essential.
              </p>
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
              <Building2 className="h-10 w-10 text-orange-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Structural Engineering</h3>
              <p className="text-gray-600 text-sm mb-4">Design buildings, bridges, and load-bearing structures</p>
              <div className="text-green-600 font-semibold">₹6-25 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <MapPin className="h-10 w-10 text-red-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Transportation Engineering</h3>
              <p className="text-gray-600 text-sm mb-4">Plan and design roads, highways, and traffic systems</p>
              <div className="text-green-600 font-semibold">₹5-20 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <TreePine className="h-10 w-10 text-green-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Environmental Engineering</h3>
              <p className="text-gray-600 text-sm mb-4">Develop sustainable solutions and waste management</p>
              <div className="text-green-600 font-semibold">₹5-18 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Mountain className="h-10 w-10 text-gray-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Geotechnical Engineering</h3>
              <p className="text-gray-600 text-sm mb-4">Study soil mechanics and foundation design</p>
              <div className="text-green-600 font-semibold">₹6-22 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Waves className="h-10 w-10 text-blue-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Water Resources Engineering</h3>
              <p className="text-gray-600 text-sm mb-4">Design dams, irrigation, and water supply systems</p>
              <div className="text-green-600 font-semibold">₹5-20 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <HardHat className="h-10 w-10 text-yellow-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Construction Management</h3>
              <p className="text-gray-600 text-sm mb-4">Oversee projects, budgets, and construction teams</p>
              <div className="text-green-600 font-semibold">₹7-30 LPA</div>
            </div>
          </div>
        </section>

        {/* Why Choose Civil Engineering */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Civil Engineering?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Advantages</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li>✓ Critical to India's infrastructure boom</li>
                <li>✓ Strong government job opportunities</li>
                <li>✓ Visible, tangible impact on society</li>
                <li>✓ Diverse career paths and specializations</li>
                <li>✓ Opportunities for independent consulting</li>
                <li>✓ Job security in public sector</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Challenges</h3>
              <ul className="space-y-2 text-sm text-orange-800">
                <li>• Extensive field work required</li>
                <li>• Weather-dependent work conditions</li>
                <li>• Physical demands of site work</li>
                <li>• Lower starting salaries than IT/software</li>
                <li>• Project delays and budget pressures</li>
                <li>• Need to work in remote locations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Build India's Future?</h2>
          <p className="text-gray-100 mb-6">
            Civil Engineering is crucial for India's growth with massive infrastructure projects underway. 
            Perfect for those who want to see their work make a real, lasting impact on society.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/resources/jee-main-strategy"
              className="bg-white text-orange-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get JEE Strategy
            </Link>
            <Link 
              to="/engineering"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-700 transition-colors"
            >
              Explore More Engineering
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CivilEngineeringDetails