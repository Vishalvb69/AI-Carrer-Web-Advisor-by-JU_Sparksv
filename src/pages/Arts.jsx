import React from 'react'
import { Link } from 'react-router-dom'
import CareerCard from '../components/CareerCard'
import { careersByStream } from '../data/careers'
import { 
  Palette,
  ArrowRight,
  BookOpen,
  Users,
  Lightbulb
} from 'lucide-react'

const Arts = () => {
  const artsCareers = careersByStream.arts

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 py-16">
        <div className="section-container">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Palette className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium text-white">Arts & Humanities</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Arts & Creative
              <span className="block text-orange-200">Career Paths</span>
            </h1>
            
            <p className="text-xl text-orange-100 mb-8 leading-relaxed max-w-4xl mx-auto">
              Discover diverse opportunities in creative fields, social sciences, and humanities. 
              Express your creativity while building a meaningful and fulfilling career.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="#careers"
                className="inline-flex items-center justify-center bg-white text-orange-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 focus:ring-4 focus:ring-white/50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Careers
                <Lightbulb className="ml-2 h-5 w-5" />
              </Link>
              
              <Link 
                to="#opportunities"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 focus:ring-4 focus:ring-white/50 transition-all duration-200"
              >
                View Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Arts Careers */}
      <section className="py-16" id="careers">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Arts & Humanities Careers</h2>
            <p className="text-body max-w-3xl mx-auto">
              Explore creative and meaningful career paths that allow you to express yourself and impact society
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {artsCareers.map((career, index) => (
              <CareerCard key={career.id} career={career} streamColor="orange" />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Career Areas */}
      <section className="py-16 bg-white" id="opportunities">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Popular Career Areas</h2>
            <p className="text-body max-w-3xl mx-auto">
              Arts students have diverse opportunities across multiple industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-orange-600 mb-3">Creative Arts</h3>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Graphic Design</li>
                <li>• UI/UX Design</li>
                <li>• Photography</li>
                <li>• Film Making</li>
                <li>• Animation</li>
              </ul>
            </div>

            <div className="card border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Media & Communication</h3>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Journalism</li>
                <li>• Content Writing</li>
                <li>• Digital Marketing</li>
                <li>• Public Relations</li>
                <li>• Broadcasting</li>
              </ul>
            </div>

            <div className="card border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-600 mb-3">Social Sciences</h3>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Psychology</li>
                <li>• Social Work</li>
                <li>• Human Resources</li>
                <li>• Research</li>
                <li>• NGO Work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="section-container">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Express Your Creativity?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Start your creative journey with proper guidance and skill development
            </p>
            <Link
              to="/resources"
              className="inline-flex items-center justify-center bg-white text-orange-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 focus:ring-4 focus:ring-white/50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Arts Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Arts