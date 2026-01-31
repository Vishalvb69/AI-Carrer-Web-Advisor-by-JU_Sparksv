import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Zap,
  TrendingUp,
  AlertTriangle,
  Shield,
  Lightbulb,
  ArrowRight,
  Bot,
  Users,
  Briefcase,
  Target
} from 'lucide-react'

const AIImpact = () => {
  const impactAreas = [
    {
      category: 'High Impact (Major Changes)',
      color: 'border-red-500 bg-red-50',
      iconColor: 'text-red-600',
      careers: [
        {
          name: 'Data Entry Clerk',
          impact: 'High automation risk',
          future: 'Jobs likely to decrease by 80%+'
        },
        {
          name: 'Basic Accounting',
          impact: 'Automated bookkeeping',
          future: 'Need to upskill to advisory roles'
        },
        {
          name: 'Translation Services',
          impact: 'AI translation tools',
          future: 'Specialized human translation still valuable'
        }
      ]
    },
    {
      category: 'Moderate Impact (Transformation)',
      color: 'border-yellow-500 bg-yellow-50',
      iconColor: 'text-yellow-600',
      careers: [
        {
          name: 'Software Developer',
          impact: 'AI coding assistants',
          future: 'More focus on complex problem-solving'
        },
        {
          name: 'Journalist',
          impact: 'Automated content creation',
          future: 'Investigative and creative journalism valued'
        },
        {
          name: 'Financial Analyst',
          impact: 'Automated data analysis',
          future: 'Strategic decision-making becomes key'
        }
      ]
    },
    {
      category: 'Low Impact (Enhancement)',
      color: 'border-green-500 bg-green-50',
      iconColor: 'text-green-600',
      careers: [
        {
          name: 'Doctor',
          impact: 'AI diagnostic assistance',
          future: 'Enhanced decision-making, better patient care'
        },
        {
          name: 'Teacher',
          impact: 'Personalized learning tools',
          future: 'More focus on mentoring and creativity'
        },
        {
          name: 'Psychologist',
          impact: 'AI screening tools',
          future: 'Human empathy remains irreplaceable'
        }
      ]
    }
  ]

  const emergingCareers = [
    {
      title: 'AI/ML Engineer',
      description: 'Design and develop artificial intelligence systems',
      growth: '+35% by 2030',
      skills: ['Python', 'Machine Learning', 'Deep Learning', 'Data Science']
    },
    {
      title: 'AI Ethics Specialist',
      description: 'Ensure responsible AI development and deployment',
      growth: '+50% by 2030',
      skills: ['Ethics', 'Policy', 'AI Technology', 'Communication']
    },
    {
      title: 'Human-AI Interaction Designer',
      description: 'Design interfaces between humans and AI systems',
      growth: '+40% by 2030',
      skills: ['UX Design', 'Psychology', 'AI Understanding', 'Prototyping']
    },
    {
      title: 'AI Trainer/Data Curator',
      description: 'Prepare and manage data for training AI models',
      growth: '+45% by 2030',
      skills: ['Data Science', 'Statistics', 'Domain Expertise', 'Quality Assurance']
    }
  ]

  const adaptationStrategies = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Continuous Learning',
      description: 'Stay updated with latest technologies and skills in your field',
      actions: ['Take online courses', 'Attend workshops', 'Read industry publications']
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Human-Centric Skills',
      description: 'Develop skills that AI cannot easily replicate',
      actions: ['Emotional intelligence', 'Creative thinking', 'Leadership']
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Specialization',
      description: 'Become an expert in niche areas within your field',
      actions: ['Deep expertise', 'Industry knowledge', 'Unique insights']
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: 'AI Collaboration',
      description: 'Learn to work alongside AI tools and systems',
      actions: ['Use AI tools', 'Understand AI capabilities', 'Leverage AI strengths']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-purple-600 to-secondary-600 py-16">
        <div className="section-container">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Bot className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium text-white">Future of Work</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              AI Impact on
              <span className="block text-purple-200">Future Careers</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-4xl mx-auto">
              Artificial Intelligence is reshaping the job market. Understand how AI will impact different careers 
              and learn how to prepare for the future of work in your chosen field.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#impact"
                className="inline-flex items-center justify-center bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 focus:ring-4 focus:ring-white/50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                See Career Impact
                <Zap className="ml-2 h-5 w-5" />
              </a>
              
              <a
                href="#emerging"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 focus:ring-4 focus:ring-white/50 transition-all duration-200"
              >
                New AI Careers
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Key AI Insights</h2>
            <p className="text-body max-w-3xl mx-auto">
              Important facts about AI's impact on the job market and career landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center border-l-4 border-blue-500">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">97 Million</h3>
              <p className="text-gray-600 font-medium mb-2">New Jobs by 2025</p>
              <p className="text-sm text-gray-500">AI will create more jobs than it eliminates</p>
            </div>

            <div className="card text-center border-l-4 border-orange-500">
              <AlertTriangle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">40%</h3>
              <p className="text-gray-600 font-medium mb-2">Jobs Will Transform</p>
              <p className="text-sm text-gray-500">Significant changes in how work is done</p>
            </div>

            <div className="card text-center border-l-4 border-green-500">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">85%</h3>
              <p className="text-gray-600 font-medium mb-2">Human Skills Safe</p>
              <p className="text-sm text-gray-500">Creativity, empathy, complex reasoning remain valuable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Impact Analysis */}
      <section className="py-16 bg-gray-50" id="impact">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">How AI Affects Different Careers</h2>
            <p className="text-body max-w-3xl mx-auto">
              Detailed analysis of AI's impact across various career fields and job roles
            </p>
          </div>

          <div className="space-y-12">
            {impactAreas.map((area, index) => (
              <div key={index}>
                <div className="flex items-center space-x-3 mb-6">
                  <AlertTriangle className={`h-6 w-6 ${area.iconColor}`} />
                  <h3 className="text-2xl font-bold text-gray-900">{area.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {area.careers.map((career, careerIndex) => (
                    <div key={careerIndex} className={`card border-2 ${area.color}`}>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{career.name}</h4>
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm text-gray-600">AI Impact:</span>
                          <p className="text-sm font-medium text-gray-800">{career.impact}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">Future Outlook:</span>
                          <p className="text-sm font-medium text-gray-800">{career.future}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging AI Careers */}
      <section className="py-16 bg-white" id="emerging">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Emerging AI-Related Careers</h2>
            <p className="text-body max-w-3xl mx-auto">
              New career opportunities created by the AI revolution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {emergingCareers.map((career, index) => (
              <div key={index} className="card border-l-4 border-purple-500">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{career.title}</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {career.growth}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{career.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adaptation Strategies */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">How to Prepare for AI-Driven Future</h2>
            <p className="text-body max-w-3xl mx-auto">
              Strategies to future-proof your career in an AI-dominated workplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {adaptationStrategies.map((strategy, index) => (
              <div key={index} className="card">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <div className="text-primary-600">{strategy.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{strategy.title}</h3>
                    <p className="text-gray-600 mb-4">{strategy.description}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Action Steps:</h4>
                  <ul className="space-y-2">
                    {strategy.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stream-Specific AI Impact */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">AI Impact by Educational Stream</h2>
            <p className="text-body max-w-3xl mx-auto">
              How AI specifically affects careers in different educational streams
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card border-l-4 border-blue-500">
              <h3 className="subsection-header text-blue-600 mb-4">Engineering & Technology</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Opportunities:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• AI/ML development roles</li>
                    <li>• Automation engineering</li>
                    <li>• Smart systems design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">Challenges:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Need for AI literacy</li>
                    <li>• Continuous skill updates</li>
                    <li>• Human-AI collaboration</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card border-l-4 border-green-500">
              <h3 className="subsection-header text-green-600 mb-4">Medical & Healthcare</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Opportunities:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• AI-assisted diagnosis</li>
                    <li>• Precision medicine</li>
                    <li>• Telemedicine growth</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Safe Areas:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Patient care & empathy</li>
                    <li>• Complex surgeries</li>
                    <li>• Mental health counseling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-primary-600">
        <div className="section-container">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Future-Proof Your Career
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Start preparing for the AI-driven future today. Choose the right stream and develop future-ready skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/stream-selection"
                className="inline-flex items-center justify-center bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 focus:ring-4 focus:ring-white/50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Choose Your Stream
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

export default AIImpact