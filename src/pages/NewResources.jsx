import React from 'react'
import { Link } from 'react-router-dom'
import { 
  BookOpen, 
  Download, 
  ExternalLink, 
  Clock, 
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Calendar,
  Globe
} from 'lucide-react'

const NewResources = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Resources & Study Materials</h1>
            <p className="text-xl text-blue-100">
              Comprehensive, updated study materials and exam strategies for all career paths
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* JEE Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-3 rounded-lg mr-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">All You Need for JEE</h2>
                <p className="text-gray-600">Complete preparation strategy, syllabus, and study materials</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* JEE Main Strategy */}
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">JEE Main Strategy</h3>
                <p className="text-gray-600 mb-4">Complete preparation roadmap and exam strategy</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Updated: January 2026</span>
                </div>
                <Link 
                  to="/resources/jee-main-strategy"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Get Strategy <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>

              {/* JEE Advanced Strategy */}
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <Target className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">JEE Advanced Strategy</h3>
                <p className="text-gray-600 mb-4">Advanced level preparation and problem-solving techniques</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Updated: January 2026</span>
                </div>
                <Link 
                  to="/resources/jee-advanced-strategy"
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center"
                >
                  Get Strategy <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>

              {/* JEE Syllabus */}
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Latest JEE Syllabus</h3>
                <p className="text-gray-600 mb-4">Official syllabus with topic-wise breakdown</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Updated: January 2026</span>
                </div>
                <Link 
                  to="/resources/jee-syllabus"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
                >
                  View Syllabus <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* NEET Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-600 p-3 rounded-lg mr-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">All You Need for NEET</h2>
                <p className="text-gray-600">Complete medical entrance exam preparation</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <Target className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">NEET Strategy</h3>
                <p className="text-gray-600 mb-4">Complete preparation strategy and study plan</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Updated: January 2026</span>
                </div>
                <Link 
                  to="/resources/neet-strategy"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
                >
                  Get Strategy <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">NEET Syllabus</h3>
                <p className="text-gray-600 mb-4">Latest NEET syllabus with weightage</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Updated: January 2026</span>
                </div>
                <Link 
                  to="/resources/neet-syllabus"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  View Syllabus <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <Clock className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Study Schedule</h3>
                <p className="text-gray-600 mb-4">Month-wise preparation timeline</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Updated: January 2026</span>
                </div>
                <Link 
                  to="/resources/neet-schedule"
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center"
                >
                  Get Schedule <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Commerce Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-600 p-3 rounded-lg mr-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">All You Need for Commerce</h2>
                <p className="text-gray-600">CA, CS, MBA preparation resources</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">CA Foundation</h3>
                <p className="text-gray-600 mb-4">Complete strategy and syllabus</p>
                <Link 
                  to="/resources/ca-foundation-strategy"
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center"
                >
                  Get Strategy <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">CAT Preparation</h3>
                <p className="text-gray-600 mb-4">MBA entrance exam strategy</p>
                <Link 
                  to="/resources/cat-strategy"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center"
                >
                  Get Strategy <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">CS Foundation</h3>
                <p className="text-gray-600 mb-4">Company Secretary exam prep</p>
                <Link 
                  to="/resources/cs-foundation-strategy"
                  className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors inline-flex items-center"
                >
                  Get Strategy <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Update Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-center">
            <Globe className="h-6 w-6 text-yellow-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Auto-Updated Content</h3>
              <p className="text-yellow-700">
                All syllabus and exam patterns are automatically updated every 6 months from official sources. 
                Source links are provided on each detailed page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewResources