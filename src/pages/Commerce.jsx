import React from 'react'
import { Link } from 'react-router-dom'
import CareerCard from '../components/CareerCard'
import { careersByStream } from '../data/careers'
import { 
  GraduationCap, 
  DollarSign,
  ArrowRight,
  TrendingUp,
  Users
} from 'lucide-react'

const Commerce = () => {
  const commerceCareers = careersByStream.commerce

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 py-16">
        <div className="section-container">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <DollarSign className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium text-white">Commerce Stream</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Commerce & Business
              <span className="block text-purple-200">Career Paths</span>
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed max-w-4xl mx-auto">
              Explore lucrative careers in finance, accounting, business management, and entrepreneurship. 
              Build a successful career in the world of business and commerce.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="#careers"
                className="inline-flex items-center justify-center bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 focus:ring-4 focus:ring-white/50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Careers
                <TrendingUp className="ml-2 h-5 w-5" />
              </Link>
              
              <Link 
                to="#exams"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 focus:ring-4 focus:ring-white/50 transition-all duration-200"
              >
                View Exams
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commerce Careers */}
      <section className="py-16" id="careers">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Commerce Career Opportunities</h2>
            <p className="text-body max-w-3xl mx-auto">
              Discover high-paying careers in finance, accounting, and business management
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {commerceCareers.map((career, index) => (
              <CareerCard key={career.id} career={career} streamColor="purple" />
            ))}
          </div>
        </div>
      </section>

      {/* Top Commerce Exams */}
      <section className="py-16 bg-white" id="exams">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Popular Commerce Exams</h2>
            <p className="text-body max-w-3xl mx-auto">
              Key entrance exams and professional courses for commerce students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-purple-600 mb-3">CA (Chartered Accountant)</h3>
              <p className="text-gray-600 text-sm mb-4">Premier accounting and finance qualification in India</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">4-5 years</span>
                </div>
                <div className="flex justify-between">
                  <span>Difficulty:</span>
                  <span className="font-medium text-red-500">Very High</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Salary:</span>
                  <span className="font-medium text-green-600">₹8-25 LPA</span>
                </div>
              </div>
            </div>

            <div className="card border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-600 mb-3">MBA</h3>
              <p className="text-gray-600 text-sm mb-4">Master of Business Administration for management careers</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">2 years</span>
                </div>
                <div className="flex justify-between">
                  <span>Entry Exam:</span>
                  <span className="font-medium">CAT, XAT, GMAT</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Salary:</span>
                  <span className="font-medium text-green-600">₹15-40 LPA</span>
                </div>
              </div>
            </div>

            <div className="card border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-600 mb-3">CS (Company Secretary)</h3>
              <p className="text-gray-600 text-sm mb-4">Corporate governance and compliance expertise</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">3-4 years</span>
                </div>
                <div className="flex justify-between">
                  <span>Difficulty:</span>
                  <span className="font-medium text-yellow-500">Medium</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Salary:</span>
                  <span className="font-medium text-green-600">₹6-18 LPA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="section-container">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Build Your Business Career?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Start your journey in commerce with the right preparation and guidance
            </p>
            <Link
              to="/resources"
              className="inline-flex items-center justify-center bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 focus:ring-4 focus:ring-white/50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Commerce Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Commerce