import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { streamInfo } from '../data/careers'
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  Award,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Calculator,
  FileText,
  Lightbulb
} from 'lucide-react'

const StreamSelection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [showQuiz, setShowQuiz] = useState(false)

  const streams = [
    {
      key: 'engineering',
      ...streamInfo.engineering,
      color: 'bg-blue-500',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      icon: '⚙️',
      path: '/engineering'
    },
    {
      key: 'medical',
      ...streamInfo.medical,
      color: 'bg-green-500',
      borderColor: 'border-green-200',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: '🏥',
      path: '/medical'
    },
    {
      key: 'commerce',
      ...streamInfo.commerce,
      color: 'bg-purple-500',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: '💼',
      path: '/commerce'
    },
    {
      key: 'arts',
      ...streamInfo.arts,
      color: 'bg-orange-500',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
      icon: '🎨',
      path: '/arts'
    },
    {
      key: 'emerging',
      ...streamInfo.emerging,
      color: 'bg-pink-500',
      borderColor: 'border-pink-200',
      textColor: 'text-pink-600',
      bgColor: 'bg-pink-50',
      icon: '✨',
      path: '/emerging-careers'
    }
  ]

  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Career Matching Quiz',
      description: 'Take our 10-minute quiz to find the best stream based on your interests and aptitude',
      action: 'Take Quiz',
      onClick: () => setShowQuiz(true)
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: 'Cutoff Calculator',
      description: 'Calculate your expected rank and predict college admissions',
      action: 'Calculate',
      link: '/resources#calculator'
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Document Checklist',
      description: 'Complete list of documents required for admissions and counseling',
      action: 'View List',
      link: '/resources#documents'
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'AI Career Advisor',
      description: 'Get personalized advice from our AI-powered career counselor',
      action: 'Chat Now',
      link: '#chat'
    }
  ]

  const comparisonFactors = [
    'Difficulty Level',
    'Career Opportunities', 
    'Salary Potential',
    'Job Security',
    'Growth Prospects',
    'Work-Life Balance'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 py-16">
        <div className="section-container">
          <div className="text-center">
            <h1 className="page-header text-white mb-6">
              Choose Your Career Stream
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
              Explore different educational streams, understand career opportunities, and make an informed decision 
              about your future. Each stream offers unique advantages and career paths.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowQuiz(true)}
                className="inline-flex items-center justify-center bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 focus:ring-4 focus:ring-white/50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Take Career Quiz
                <Target className="ml-2 h-5 w-5" />
              </button>
              <Link
                to="/ai-impact"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 focus:ring-4 focus:ring-white/50 transition-all duration-200"
              >
                AI Impact Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tools */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Career Guidance Tools</h2>
            <p className="text-body max-w-3xl mx-auto">
              Use our interactive tools to get personalized guidance and make informed decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card group hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                <div className="text-primary-600 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                {feature.link ? (
                  <Link
                    to={feature.link}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    {feature.action}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                ) : (
                  <button
                    onClick={feature.onClick}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    {feature.action}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stream Overview */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Educational Streams Overview</h2>
            <p className="text-body max-w-3xl mx-auto">
              Compare different streams based on subjects, career opportunities, and market demand
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {streams.map((stream, index) => (
              <div key={stream.key} className={`card border-2 ${stream.borderColor} hover:border-primary-300 hover:shadow-lg transition-all duration-300 group`}>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`${stream.color} text-white p-4 rounded-xl text-2xl group-hover:scale-110 transition-transform`}>
                      {stream.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{stream.title}</h3>
                      <p className="text-gray-600">{stream.subjects.join(', ')}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Avg Salary</div>
                    <div className="font-bold text-green-600">{stream.avgSalary}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{stream.description}</p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className={`${stream.bgColor} p-4 rounded-lg text-center`}>
                    <div className={`text-2xl font-bold ${stream.textColor}`}>{stream.totalCareers}+</div>
                    <div className="text-sm text-gray-600">Career Options</div>
                  </div>
                  <div className={`${stream.bgColor} p-4 rounded-lg text-center`}>
                    <div className={`text-2xl font-bold ${stream.textColor}`}>{stream.mainExams.length}</div>
                    <div className="text-sm text-gray-600">Major Exams</div>
                  </div>
                </div>

                {/* Top Colleges */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Top Colleges:</h4>
                  <div className="flex flex-wrap gap-2">
                    {stream.topColleges.slice(0, 3).map((college, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {college}
                      </span>
                    ))}
                    <span className="text-gray-500 px-3 py-1 text-sm">+more</span>
                  </div>
                </div>

                {/* Main Exams */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Main Entrance Exams:</h4>
                  <div className="flex flex-wrap gap-2">
                    {stream.mainExams.map((exam, idx) => (
                      <span key={idx} className={`${stream.bgColor} ${stream.textColor} px-3 py-1 rounded-full text-sm font-medium`}>
                        {exam}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={stream.path}
                  className={`w-full inline-flex items-center justify-center ${stream.color.replace('bg-', 'bg-')} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 focus:ring-4 focus:ring-opacity-50 transition-all duration-200 group-hover:shadow-lg`}
                  style={{ backgroundColor: stream.color.includes('blue') ? '#3b82f6' : stream.color.includes('green') ? '#22c55e' : stream.color.includes('purple') ? '#8b5cf6' : '#f97316' }}
                >
                  Explore {stream.title}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stream Comparison Table */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Quick Comparison</h2>
            <p className="text-body max-w-3xl mx-auto">
              Compare streams across key factors to make an informed decision
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Factor</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-blue-600">Engineering</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-green-600">Medical</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-purple-600">Commerce</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-orange-600">Arts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Difficulty Level</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">High</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Very High</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Medium</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Low-Medium</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Career Variety</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">High</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Medium</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">High</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Very High</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Starting Salary</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">₹6-20L</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">₹5-25L</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">₹4-30L</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">₹3-25L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Job Security</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">High</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Very High</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">High</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Medium</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Global Opportunities</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Very High</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">High</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">High</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="section-container">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Still Confused About Stream Selection?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get personalized guidance from our AI career counselor or take our detailed career assessment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowQuiz(true)}
                className="inline-flex items-center justify-center bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 focus:ring-4 focus:ring-white/50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Take Career Assessment
                <Target className="ml-2 h-5 w-5" />
              </button>
              <a
                href="#chat"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 focus:ring-4 focus:ring-white/50 transition-all duration-200"
              >
                Chat with AI Counselor
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Career Quiz Modal - Simplified for now */}
      {showQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Career Assessment Quiz</h3>
                <button
                  onClick={() => setShowQuiz(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                >
                  ×
                </button>
              </div>
              <div className="text-center py-8">
                <Target className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-4">Coming Soon!</h4>
                <p className="text-gray-600 mb-6">
                  Our comprehensive career assessment quiz is under development. 
                  It will help you discover the perfect stream based on your interests, aptitude, and career goals.
                </p>
                <div className="space-y-2 text-left max-w-md mx-auto">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Interest-based questions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Aptitude assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Personality analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Personalized recommendations</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowQuiz(false)}
                  className="btn-primary mt-6"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StreamSelection