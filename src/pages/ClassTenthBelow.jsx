import React from 'react'
import { Link } from 'react-router-dom'
import { 
  BookOpen,
  Users,
  TrendingUp,
  Target,
  ArrowRight,
  GraduationCap,
  Heart,
  Sparkles
} from 'lucide-react'

const ClassTenthBelow = () => {
  const streams = [
    {
      title: 'Science (PCM)',
      subtitle: 'Physics, Chemistry, Mathematics',
      description: 'Ideal for students interested in engineering, technology, and mathematical problem-solving',
      icon: '⚙️',
      color: 'bg-blue-500',
      careers: ['Engineering', 'Technology', 'Research', 'IT'],
      link: '/engineering'
    },
    {
      title: 'Science (PCB)',
      subtitle: 'Physics, Chemistry, Biology',
      description: 'Perfect for future doctors, healthcare professionals, and life sciences enthusiasts',
      icon: '🏥',
      color: 'bg-green-500',
      careers: ['Medicine', 'Nursing', 'Pharmacy', 'Research'],
      link: '/medical'
    },
    {
      title: 'Commerce',
      subtitle: 'Business, Economics, Accounts',
      description: 'Great for business-minded students interested in finance, accounting, and entrepreneurship',
      icon: '💼',
      color: 'bg-purple-500',
      careers: ['CA', 'Banking', 'Business', 'Finance'],
      link: '/commerce'
    },
    {
      title: 'Arts/Humanities',
      subtitle: 'Literature, History, Psychology',
      description: 'Excellent for creative minds interested in social sciences, arts, and human behavior',
      icon: '🎨',
      color: 'bg-orange-500',
      careers: ['Psychology', 'Design', 'Media', 'Civil Services'],
      link: '/arts'
    }
  ]

  const tips = [
    {
      title: 'Explore Your Interests',
      description: 'Take time to understand what subjects and activities you enjoy most',
      icon: <Heart className="h-6 w-6 text-red-500" />
    },
    {
      title: 'Talk to Professionals',
      description: 'Connect with people working in fields that interest you',
      icon: <Users className="h-6 w-6 text-blue-500" />
    },
    {
      title: 'Research Career Options',
      description: 'Learn about different careers, their requirements, and growth prospects',
      icon: <BookOpen className="h-6 w-6 text-green-500" />
    },
    {
      title: 'Consider Your Strengths',
      description: 'Identify your natural abilities and how they align with different fields',
      icon: <Target className="h-6 w-6 text-purple-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 py-16">
        <div className="section-container">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium text-white">For Students Class 10 & Below</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Discover Your
              <span className="block text-blue-200">Perfect Stream</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-4xl mx-auto">
              You're at an exciting crossroads! Class 11 stream selection will shape your career path. 
              Explore all options, understand what each stream offers, and make an informed decision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/stream-selection"
                className="inline-flex items-center justify-center bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 focus:ring-4 focus:ring-white/50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore All Streams
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <a
                href="#tips"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 focus:ring-4 focus:ring-white/50 transition-all duration-200"
              >
                Get Selection Tips
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Why Stream Selection Matters</h2>
            <p className="text-body max-w-3xl mx-auto">
              Your stream choice in Class 11 determines your career options and opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Defines Career Path</h3>
              <p className="text-gray-600">
                Your stream directly impacts what careers you can pursue and which colleges you can apply to
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Shapes Learning</h3>
              <p className="text-gray-600">
                Different streams develop different skills and knowledge that will benefit you for life
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Future Opportunities</h3>
              <p className="text-gray-600">
                The right stream can open doors to better colleges, jobs, and earning potential
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stream Overview */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">All Stream Options</h2>
            <p className="text-body max-w-3xl mx-auto">
              Get a complete overview of all educational streams available after Class 10
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {streams.map((stream, index) => (
              <Link 
                key={index}
                to={stream.link}
                className="card group hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`${stream.color} text-white p-4 rounded-xl text-2xl group-hover:scale-110 transition-transform`}>
                    {stream.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{stream.title}</h3>
                    <p className="text-gray-600 font-medium">{stream.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{stream.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Popular Careers:</h4>
                  <div className="flex flex-wrap gap-2">
                    {stream.careers.map((career, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {career}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform">
                  Learn More About {stream.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Tips */}
      <section className="py-16 bg-white" id="tips">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Stream Selection Tips</h2>
            <p className="text-body max-w-3xl mx-auto">
              Follow these guidelines to make the best decision for your future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tips.map((tip, index) => (
              <div key={index} className="card">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {tip.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 card border-2 border-primary-200">
            <h3 className="subsection-header mb-4">Important Reminders</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Don't rush:</strong> Take time to explore and understand each stream thoroughly
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Ignore peer pressure:</strong> Choose based on your interests, not what friends are doing
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Consider all factors:</strong> Interest, aptitude, career prospects, and family situation
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Stay flexible:</strong> Remember that career paths can evolve and change over time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="section-container">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Explore Your Options?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Start exploring different streams and discover which one aligns with your interests and goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/stream-selection"
                className="inline-flex items-center justify-center bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 focus:ring-4 focus:ring-white/50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Compare All Streams
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#chat"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 focus:ring-4 focus:ring-white/50 transition-all duration-200"
              >
                Get AI Guidance
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ClassTenthBelow