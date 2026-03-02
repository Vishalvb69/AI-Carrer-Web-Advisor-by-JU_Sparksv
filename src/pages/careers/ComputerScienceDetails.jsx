import React from 'react'
import { Link } from 'react-router-dom'
import StructuredData from '../../components/StructuredData'
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
  Code,
  Database,
  Brain,
  Target
} from 'lucide-react'

const ComputerScienceDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data for this career page */}
      <StructuredData 
        type="breadcrumb" 
        data={{
          breadcrumbs: [
            { name: 'Home', url: 'https://indiacareerguidance.netlify.app/' },
            { name: 'Engineering', url: 'https://indiacareerguidance.netlify.app/engineering' },
            { name: 'Computer Science Engineering', url: 'https://indiacareerguidance.netlify.app/career/computer-science-engineering' }
          ]
        }} 
      />
      <StructuredData 
        type="career" 
        data={{
          title: 'Computer Science Engineering - Bachelor of Technology',
          description: 'Design and develop software, applications, and computer systems that power our digital world. Learn programming, algorithms, data structures, and modern software development.',
          category: 'Engineering',
          educationLevel: 'Undergraduate',
          duration: 'PT4Y',
          skills: ['Programming', 'Data Structures', 'Algorithms', 'Software Development', 'Database Management', 'Web Development', 'Machine Learning']
        }} 
      />
      <StructuredData 
        type="article" 
        data={{
          title: 'Computer Science Engineering Career Guide',
          description: 'Complete guide to pursuing Computer Science Engineering in India, including entrance exams, top colleges, career prospects, and salary expectations.',
          datePublished: '2026-02-24',
          dateModified: '2026-02-24'
        }} 
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/engineering" className="hover:text-blue-600 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Engineering
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Computer Science Engineering</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                High Demand Career
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Computer Science Engineering
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Design and develop software, applications, and computer systems that power our digital world
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">₹8-25 LPA</div>
                  <div className="text-sm text-blue-200">Average Salary</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">22%</div>
                  <div className="text-sm text-blue-200">Growth Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">Excellent</div>
                  <div className="text-sm text-blue-200">Job Outlook</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-blue-200" />
                  <span>4 years undergraduate program</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-3 text-blue-200" />
                  <span>High industry demand</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-3 text-blue-200" />
                  <span>Global opportunities</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-5 w-5 mr-3 text-blue-200" />
                  <span>Rapidly evolving field</span>
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
              <div className="text-3xl font-bold text-green-600 mb-2">₹4-8 LPA</div>
              <p className="text-gray-600 text-sm">Starting salaries for fresh graduates</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Service Companies:</strong> ₹3-6 LPA</div>
                <div className="text-sm"><strong>Product Companies:</strong> ₹6-12 LPA</div>
                <div className="text-sm"><strong>Startups:</strong> ₹4-8 LPA + equity</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Experienced (3-8 years)</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹12-25 LPA</div>
              <p className="text-gray-600 text-sm">Mid-level professional salaries</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Senior Developer:</strong> ₹12-18 LPA</div>
                <div className="text-sm"><strong>Tech Lead:</strong> ₹18-25 LPA</div>
                <div className="text-sm"><strong>Specialist Roles:</strong> ₹20-35 LPA</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Senior (8+ years)</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹25-80 LPA</div>
              <p className="text-gray-600 text-sm">Senior leadership positions</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Engineering Manager:</strong> ₹25-45 LPA</div>
                <div className="text-sm"><strong>Architect:</strong> ₹30-60 LPA</div>
                <div className="text-sm"><strong>Director/VP:</strong> ₹50-80+ LPA</div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Role & Responsibilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            What Computer Science Engineers Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Daily Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Code className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Write, test, and maintain software code</span>
                </li>
                <li className="flex items-start">
                  <Database className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Design and optimize database systems</span>
                </li>
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Solve complex computational problems</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Collaborate with cross-functional teams</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Analyze user requirements and design solutions</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Impact on the World</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Digital Transformation</h4>
                  <p className="text-gray-600 text-sm">Enable businesses and governments to digitize operations, improving efficiency and accessibility.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Innovation Driver</h4>
                  <p className="text-gray-600 text-sm">Create breakthrough technologies like AI, blockchain, and IoT that reshape industries.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Global Connectivity</h4>
                  <p className="text-gray-600 text-sm">Build platforms and applications that connect billions of people worldwide.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">Problem Solving</h4>
                  <p className="text-gray-600 text-sm">Address critical challenges in healthcare, education, environment, and social issues.</p>
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
                  <li>• Complex algorithm design</li>
                  <li>• System architecture planning</li>
                  <li>• Continuous learning requirement</li>
                  <li>• Problem-solving under pressure</li>
                  <li>• Keeping up with technology changes</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-yellow-600">Moderate Difficulty</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Learning programming languages</li>
                  <li>• Understanding data structures</li>
                  <li>• Database management</li>
                  <li>• Testing and debugging</li>
                  <li>• Project management basics</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">Manageable Aspects</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Basic coding skills</li>
                  <li>• Using development tools</li>
                  <li>• Documentation writing</li>
                  <li>• Following coding standards</li>
                  <li>• Team collaboration</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">Success Tips</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
                <div>
                  <strong>Technical Skills:</strong> Master at least 2-3 programming languages, understand algorithms, practice coding daily
                </div>
                <div>
                  <strong>Soft Skills:</strong> Develop communication skills, learn project management, cultivate problem-solving mindset
                </div>
              </div>
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
              <h3 className="font-semibold text-lg mb-2">Software Development</h3>
              <p className="text-gray-600 text-sm mb-4">Build applications, websites, and software systems</p>
              <div className="text-green-600 font-semibold">₹6-30 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Data Science & AI</h3>
              <p className="text-gray-600 text-sm mb-4">Analyze data and build AI/ML models</p>
              <div className="text-green-600 font-semibold">₹8-50 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Cybersecurity</h3>
              <p className="text-gray-600 text-sm mb-4">Protect systems from digital threats</p>
              <div className="text-green-600 font-semibold">₹10-40 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Cloud Computing</h3>
              <p className="text-gray-600 text-sm mb-4">Design and manage cloud infrastructure</p>
              <div className="text-green-600 font-semibold">₹12-45 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Product Management</h3>
              <p className="text-gray-600 text-sm mb-4">Lead product development and strategy</p>
              <div className="text-green-600 font-semibold">₹15-60 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Entrepreneurship</h3>
              <p className="text-gray-600 text-sm mb-4">Start your own tech company</p>
              <div className="text-green-600 font-semibold">Variable</div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-blue-100 mb-6">
            Computer Science Engineering offers excellent career prospects with high demand and competitive salaries. 
            Start preparing for JEE to get into top engineering colleges.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/resources/jee-main-strategy"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get JEE Strategy
            </Link>
            <Link 
              to="/engineering"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore More Engineering
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ComputerScienceDetails