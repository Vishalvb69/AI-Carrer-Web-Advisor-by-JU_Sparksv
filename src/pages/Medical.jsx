import React from 'react'
import { Link } from 'react-router-dom'
import CareerCard from '../components/CareerCard'
import { careersByStream } from '../data/careers'
import { 
  GraduationCap, 
  Heart,
  ArrowRight,
  Stethoscope,
  BookOpen,
  Users,
  TrendingUp
} from 'lucide-react'

const Medical = () => {
  const medicalCareers = careersByStream.medical

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-blue-600 py-16">
        <div className="section-container">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-red-300" />
              <span className="text-sm font-medium text-white">Science PCB Stream</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Medical & Healthcare
              <span className="block text-green-200">Career Paths</span>
            </h1>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-4xl mx-auto">
              Explore rewarding careers in healthcare, from becoming a doctor to specialized roles in 
              nursing, pharmacy, and allied health sciences. Make a difference in people's lives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="#careers"
                className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 focus:ring-4 focus:ring-white/50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Careers
                <Stethoscope className="ml-2 h-5 w-5" />
              </Link>
              
              <Link 
                to="#neet"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 focus:ring-4 focus:ring-white/50 transition-all duration-200"
              >
                NEET Preparation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-8 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">90K+</div>
              <div className="text-sm text-gray-600">MBBS Seats</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">20L+</div>
              <div className="text-sm text-gray-600">NEET Applicants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">₹25L</div>
              <div className="text-sm text-gray-600">Top Salaries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">15%</div>
              <div className="text-sm text-gray-600">Growth Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Careers */}
      <section className="py-16" id="careers">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Medical Career Opportunities</h2>
            <p className="text-body max-w-3xl mx-auto">
              Discover diverse healthcare careers that make a real difference in people's lives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {medicalCareers.map((career, index) => (
              <CareerCard key={career.id} career={career} streamColor="green" />
            ))}
          </div>
        </div>
      </section>

      {/* NEET Information */}
      <section className="py-16 bg-white" id="neet">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">NEET Preparation Guide</h2>
            <p className="text-body max-w-3xl mx-auto">
              Everything you need to know about NEET - India's premier medical entrance exam
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="subsection-header mb-4">NEET Overview</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Full Name:</span>
                  <span className="font-medium">National Eligibility cum Entrance Test</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frequency:</span>
                  <span className="font-medium">Once a year (May)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">3 hours 20 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Questions:</span>
                  <span className="font-medium">200 MCQs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Marks:</span>
                  <span className="font-medium">720</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="subsection-header mb-4">Subject Weightage</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Biology (Botany + Zoology)</span>
                  <span className="text-green-600 font-bold">50%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">Chemistry</span>
                  <span className="text-blue-600 font-bold">25%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium">Physics</span>
                  <span className="text-purple-600 font-bold">25%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="section-container">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Save Lives?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Start your journey in healthcare with proper guidance and preparation
            </p>
            <Link
              to="/resources"
              className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 focus:ring-4 focus:ring-white/50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get NEET Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Medical