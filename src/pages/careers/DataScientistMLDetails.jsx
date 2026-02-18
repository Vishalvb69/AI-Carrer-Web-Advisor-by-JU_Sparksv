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
  Zap,
  Brain,
  Database,
  LineChart,
  Target
} from 'lucide-react'

const DataScientistMLDetails = () => {
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
            <span className="text-gray-900 font-medium">Data Scientist / ML Engineer</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                High Demand Career
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Data Scientist / ML Engineer
              </h1>
              <p className="text-xl text-purple-100 mb-6">
                Extract insights from data and build machine learning models to solve complex business problems and drive AI innovation
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">₹12-35 LPA</div>
                  <div className="text-sm text-purple-200">Average Salary</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">31%</div>
                  <div className="text-sm text-purple-200">Growth Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">Excellent</div>
                  <div className="text-sm text-purple-200">Job Outlook</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-purple-200" />
                  <span>4 years B.Tech + Certifications</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-3 text-purple-200" />
                  <span>Extremely high industry demand</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-3 text-purple-200" />
                  <span>Global opportunities</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-5 w-5 mr-3 text-purple-200" />
                  <span>Core of AI revolution</span>
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
              <div className="text-3xl font-bold text-green-600 mb-2">₹8-15 LPA</div>
              <p className="text-gray-600 text-sm">Starting salaries for fresh data scientists</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Service Companies:</strong> ₹6-10 LPA</div>
                <div className="text-sm"><strong>Product Companies:</strong> ₹12-20 LPA</div>
                <div className="text-sm"><strong>Startups:</strong> ₹8-15 LPA + equity</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Experienced (3-8 years)</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹20-40 LPA</div>
              <p className="text-gray-600 text-sm">Mid-level data scientist salaries</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Senior Data Scientist:</strong> ₹20-30 LPA</div>
                <div className="text-sm"><strong>ML Engineer:</strong> ₹25-40 LPA</div>
                <div className="text-sm"><strong>AI Specialist:</strong> ₹30-50 LPA</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Senior (8+ years)</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹40-80+ LPA</div>
              <p className="text-gray-600 text-sm">Senior leadership positions</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Lead Data Scientist:</strong> ₹40-60 LPA</div>
                <div className="text-sm"><strong>Principal ML Engineer:</strong> ₹50-70 LPA</div>
                <div className="text-sm"><strong>Director of AI:</strong> ₹60-100+ LPA</div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Role & Responsibilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-purple-600 mr-3" />
            What Data Scientists / ML Engineers Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Daily Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Database className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Clean, process, and analyze large datasets</span>
                </li>
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Build and train machine learning models</span>
                </li>
                <li className="flex items-start">
                  <LineChart className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Perform statistical analysis and hypothesis testing</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Deploy models to production and monitor performance</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Collaborate with stakeholders to solve business problems</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Impact on the World</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">AI Revolution</h4>
                  <p className="text-gray-600 text-sm">Build intelligent systems that automate tasks and make predictions, transforming every industry.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Data-Driven Decisions</h4>
                  <p className="text-gray-600 text-sm">Help businesses make informed decisions based on data insights rather than gut feeling.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Healthcare Innovation</h4>
                  <p className="text-gray-600 text-sm">Develop models for disease prediction, drug discovery, and personalized medicine.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">Solving Complex Problems</h4>
                  <p className="text-gray-600 text-sm">Address challenges in climate, finance, transportation, and social good through data science.</p>
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
                  <li>• Advanced mathematics (calculus, linear algebra)</li>
                  <li>• Deep learning architectures</li>
                  <li>• Big data processing at scale</li>
                  <li>• Model optimization and tuning</li>
                  <li>• Continuous learning required</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-yellow-600">Moderate Difficulty</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Python/R programming</li>
                  <li>• Statistics and probability</li>
                  <li>• Machine learning algorithms</li>
                  <li>• Data visualization</li>
                  <li>• Feature engineering</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">Manageable Aspects</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Basic data analysis</li>
                  <li>• Using ML libraries (scikit-learn)</li>
                  <li>• SQL for data querying</li>
                  <li>• Data cleaning techniques</li>
                  <li>• Team collaboration</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-purple-50 rounded-lg p-6">
              <h4 className="font-semibold text-purple-900 mb-3">Success Tips</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-purple-800">
                <div>
                  <strong>Technical Skills:</strong> Master Python, statistics, and ML frameworks (TensorFlow/PyTorch). Work on Kaggle competitions.
                </div>
                <div>
                  <strong>Soft Skills:</strong> Develop storytelling with data, business acumen, and ability to explain complex concepts simply.
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
              <h3 className="font-semibold text-lg mb-2">Machine Learning Engineer</h3>
              <p className="text-gray-600 text-sm mb-4">Build and deploy ML models in production</p>
              <div className="text-green-600 font-semibold">₹15-50 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">AI Research Scientist</h3>
              <p className="text-gray-600 text-sm mb-4">Develop cutting-edge AI algorithms and research</p>
              <div className="text-green-600 font-semibold">₹20-60 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Data Analyst</h3>
              <p className="text-gray-600 text-sm mb-4">Analyze data to provide business insights</p>
              <div className="text-green-600 font-semibold">₹5-15 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">MLOps Engineer</h3>
              <p className="text-gray-600 text-sm mb-4">Deploy and manage ML systems at scale</p>
              <div className="text-green-600 font-semibold">₹18-45 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Computer Vision Engineer</h3>
              <p className="text-gray-600 text-sm mb-4">Build image and video processing systems</p>
              <div className="text-green-600 font-semibold">₹15-40 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">NLP Engineer</h3>
              <p className="text-gray-600 text-sm mb-4">Work on language models and text processing</p>
              <div className="text-green-600 font-semibold">₹18-50 LPA</div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-purple-100 mb-6">
            Data Science and ML Engineering offer exceptional career prospects with extremely high demand and top-tier salaries. 
            Start with a strong foundation in CS/Math and build practical skills through projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/resources/data-science-roadmap"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Get Learning Roadmap
            </Link>
            <Link 
              to="/engineering"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore More Engineering
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DataScientistMLDetails
