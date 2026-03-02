import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import StructuredData from '../components/StructuredData'
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  Award, 
  Clock, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  GraduationCap
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Stream Guidance',
      description: 'Detailed information about Science PCM/PCB, Commerce, and Arts streams with career paths.',
      link: '/stream-selection'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Entrance Exam Prep',
      description: 'Complete guidance for JEE, NEET, CAT, and other major entrance examinations.',
      link: '/resources'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Personalized Counseling',
      description: 'AI-powered chat assistance for personalized career advice and guidance.',
      link: '#chat'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'College Selection',
      description: 'Information about top colleges, admission criteria, and counseling processes.',
      link: '/resources'
    }
  ];

  const streams = [
    {
      name: 'Science PCM',
      subtitle: 'Engineering Path',
      description: 'Physics, Chemistry, Mathematics leading to engineering careers',
      careers: ['Computer Science', 'Mechanical', 'Electrical', 'Civil Engineering'],
      avgSalary: '₹6-20 LPA',
      topExams: ['JEE Main', 'JEE Advanced', 'BITSAT'],
      color: 'bg-blue-500',
      link: '/engineering'
    },
    {
      name: 'Science PCB',
      subtitle: 'Medical Path', 
      description: 'Physics, Chemistry, Biology leading to medical careers',
      careers: ['Doctor (MBBS)', 'Nursing', 'Pharmacy', 'Physiotherapy'],
      avgSalary: '₹5-25 LPA',
      topExams: ['NEET UG', 'AIIMS', 'JIPMER'],
      color: 'bg-green-500',
      link: '/medical'
    },
    {
      name: 'Commerce',
      subtitle: 'Business Path',
      description: 'Business, Economics, Accounts leading to finance careers',
      careers: ['CA', 'CS', 'Investment Banking', 'Marketing'],
      avgSalary: '₹4-30 LPA',
      topExams: ['CAT', 'CA Foundation', 'CS Foundation'],
      color: 'bg-purple-500',
      link: '/commerce'
    },
    {
      name: 'Arts/Humanities',
      subtitle: 'Liberal Arts Path',
      description: 'History, Political Science, Psychology and creative fields',
      careers: ['Psychology', 'Journalism', 'Design', 'Civil Services'],
      avgSalary: '₹3-25 LPA',
      topExams: ['CLAT', 'JNU Entrance', 'UPSC CSE'],
      color: 'bg-orange-500',
      link: '/arts'
    }
  ];

  const testimonials = [
    {
      name: 'Arjun Kumar',
      stream: 'Engineering Student',
      image: '👨‍🎓',
      text: 'The stream guidance helped me choose Computer Science. Now I\'m at IIT Delhi!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      stream: 'Medical Student',
      image: '👩‍⚕️',
      text: 'NEET preparation guidance was excellent. Got admission in AIIMS through their tips.',
      rating: 5
    },
    {
      name: 'Rahul Gupta',
      stream: 'Commerce Graduate',
      image: '👨‍💼',
      text: 'CA preparation roadmap was very helpful. Cleared Foundation in first attempt.',
      rating: 5
    }
  ];

  const stats = [
    { number: '50K+', label: 'Students Guided' },
    { number: '200+', label: 'Career Paths' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'AI Support' }
  ];

  return (
    <div className="min-h-screen">
      {/* Structured Data for SEO - helps Google and AI search understand our content */}
      <StructuredData 
        type="organization" 
        data={{
          name: 'Career Guidance Platform for Indian Students',
          description: 'Comprehensive career counseling platform helping Indian students make informed career decisions with AI-powered guidance, entrance exam prep, and personalized counseling.',
          url: 'https://indiacareerguidance.netlify.app',
          email: 'support@example.com',
          socialMedia: [
            'https://twitter.com/your-handle',
            'https://linkedin.com/company/your-company'
          ]
        }} 
      />
      <StructuredData 
        type="website" 
        data={{
          name: 'Career Guidance for Indian Students',
          url: 'https://indiacareerguidance.netlify.app'
        }} 
      />
      <StructuredData 
        type="faq" 
        data={{
          questions: [
            {
              question: 'What streams can I choose after Class 10 in India?',
              answer: 'After Class 10, Indian students can choose from Science (PCM or PCB), Commerce, or Arts streams. Science with PCM leads to engineering, Science with PCB leads to medical careers, Commerce opens paths to CA, MBA, and business, while Arts offers careers in teaching, psychology, design, journalism, and more.'
            },
            {
              question: 'What are the major entrance exams in India?',
              answer: 'Major entrance exams include JEE (Joint Entrance Examination) for engineering, NEET for medical courses, CAT for MBA programs, CLAT for law, and various state-level exams for different courses.'
            },
            {
              question: 'How can I prepare for JEE or NEET?',
              answer: 'Preparation requires consistent study, solving previous years papers, taking mock tests, understanding concepts thoroughly, and joining coaching if needed. Our platform provides detailed preparation strategies and resources for both exams.'
            },
            {
              question: 'What are emerging careers in India for 2026?',
              answer: 'Emerging careers include Data Science, AI/ML Engineering, Content Creation, E-Sports, Digital Marketing, UX Design, Cyber Security, and other technology-driven fields with high growth potential.'
            }
          ]
        }} 
      />

      {/* Hero Section */}
      <Hero />

      {/* Quick Start Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Start Your Journey</h2>
            <p className="text-body max-w-3xl mx-auto">
              Choose your current education level to get personalized career guidance and roadmaps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link 
              to="/class-10-below" 
              className="card group hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center">
                <div className="bg-primary-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <BookOpen className="h-12 w-12 text-primary-600 mx-auto" />
                </div>
                <h3 className="subsection-header">Class 10 & Below</h3>
                <p className="text-gray-600 mb-4">
                  Explore all streams, understand career options, and prepare for stream selection
                </p>
                <div className="flex items-center justify-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link 
              to="/stream-selection" 
              className="card group hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center">
                <div className="bg-secondary-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-secondary-200 transition-colors">
                  <Target className="h-12 w-12 text-secondary-600 mx-auto" />
                </div>
                <h3 className="subsection-header">Class 11 & 12</h3>
                <p className="text-gray-600 mb-4">
                  Get detailed guidance for your chosen stream and prepare for entrance exams
                </p>
                <div className="flex items-center justify-center text-secondary-600 font-medium group-hover:translate-x-2 transition-transform">
                  Explore Streams <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Why Choose Our Platform?</h2>
            <p className="text-body max-w-3xl mx-auto">
              Comprehensive career guidance platform designed specifically for Indian students
            </p>
          </div>

          <div className="grid-responsive">
            {features.map((feature, index) => (
              <Link 
                key={index} 
                to={feature.link}
                className="card group hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-primary-600 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stream Overview Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Explore Career Streams</h2>
            <p className="text-body max-w-3xl mx-auto">
              Discover detailed information about different educational streams and their career opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {streams.map((stream, index) => (
              <Link 
                key={index} 
                to={stream.link}
                className="card group hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <div className={`${stream.color} text-white p-3 rounded-lg mb-4 inline-block`}>
                  <GraduationCap className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-1">{stream.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{stream.subtitle}</p>
                <p className="text-sm text-gray-600 mb-4">{stream.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-700 mb-1">Top Careers:</p>
                    <div className="flex flex-wrap gap-1">
                      {stream.careers.slice(0, 2).map((career, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs font-semibold text-gray-700">Avg Salary: 
                      <span className="text-green-600 ml-1">{stream.avgSalary}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform">
                  Explore Stream <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header text-white">Our Impact in Numbers</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Helping thousands of students make informed career decisions
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Success Stories</h2>
            <p className="text-body max-w-3xl mx-auto">
              Hear from students who found their career path with our guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.stream}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="section-container">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium text-white">AI-Powered Guidance Available</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your Career Journey?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get personalized career guidance, entrance exam preparation, and college selection help
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/stream-selection"
                className="inline-flex items-center justify-center bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 focus:ring-4 focus:ring-white/50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link 
                to="/ai-impact"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 focus:ring-4 focus:ring-white/50 transition-all duration-200"
              >
                Learn About AI Impact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home