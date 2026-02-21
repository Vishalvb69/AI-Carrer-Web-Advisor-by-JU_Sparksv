import React from 'react'
import { Link } from 'react-router-dom'
import CareerCard from '../components/CareerCard'
import { careersByStream } from '../data/careers'
import { 
  GraduationCap, 
  DollarSign,
  ArrowRight,
  TrendingUp,
  Users,
  Building2,
  MapPin,
  ExternalLink,
  AlertCircle,
  Star
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

      {/* Top Commerce/Business Colleges Section */}
      <section className="py-16 bg-gray-50" id="colleges">
        <div className="section-container">
          <div className="text-center mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Top Business & Commerce Colleges in India</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore premier IIMs, B-schools, and commerce colleges for MBA, BBA, and specialized business programs
            </p>
          </div>

          {/* Coming Soon Notice */}
          <div className="max-w-3xl mx-auto mb-8 md:mb-12 px-4">
            <div className="p-4 md:p-6 rounded-xl border-2 border-purple-200 bg-purple-50 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-3">
                <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-purple-900 mb-2">Complete Business Colleges Database Coming Soon!</h3>
                  <p className="text-sm sm:text-base text-purple-800 mb-3">
                    We're compiling comprehensive data on all IIMs, top B-schools, commerce colleges (SRCC, St. Xavier's), 
                    and specialized business institutions with CAT/XAT cutoffs and placement records.
                  </p>
                  <p className="text-sm text-purple-700">
                    Check out our engineering colleges database on the Resources page in the meantime!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder Cards for Top Business Schools */}
          <div className="text-center mb-8 px-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Top Business Schools in India</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4">
            {/* IIM Ahmedabad */}
            <div className="p-4 md:p-6 rounded-xl bg-white border-2 border-gray-100 group hover:border-purple-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold text-white bg-gradient-to-br from-yellow-400 to-orange-500">
                  <div className="text-center">
                    <div className="text-[10px] sm:text-xs opacity-90">Rank</div>
                    <div className="text-base sm:text-lg leading-none">1</div>
                  </div>
                </div>
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 fill-current" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-purple-600 transition-colors">
                IIM Ahmedabad
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">Indian Institute of Management Ahmedabad</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Ahmedabad, Gujarat</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Government (Autonomous)</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Avg Package: ₹33+ LPA</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-0.5 sm:py-1 bg-purple-100 text-purple-800 rounded-full text-[10px] sm:text-xs font-medium">IIM</span>
                <span className="px-2 py-0.5 sm:py-1 bg-yellow-100 text-yellow-800 rounded-full text-[10px] sm:text-xs font-medium">Top Ranked</span>
              </div>
              <a
                href="https://www.iima.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-xs sm:text-sm"
              >
                <span className="font-medium"><span className="hidden sm:inline">Visit Official Website</span><span className="sm:hidden">Visit Website</span></span>
                <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>

            {/* IIM Bangalore */}
            <div className="p-4 md:p-6 rounded-xl bg-white border-2 border-gray-100 group hover:border-purple-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold text-white bg-gradient-to-br from-gray-400 to-gray-600">
                  <div className="text-center">
                    <div className="text-[10px] sm:text-xs opacity-90">Rank</div>
                    <div className="text-base sm:text-lg leading-none">2</div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-purple-600 transition-colors">
                IIM Bangalore
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">Indian Institute of Management Bangalore</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Bangalore, Karnataka</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Government (Autonomous)</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Avg Package: ₹31+ LPA</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-0.5 sm:py-1 bg-purple-100 text-purple-800 rounded-full text-[10px] sm:text-xs font-medium">IIM</span>
              </div>
              <a
                href="https://www.iimb.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-xs sm:text-sm"
              >
                <span className="font-medium"><span className="hidden sm:inline">Visit Official Website</span><span className="sm:hidden">Visit Website</span></span>
                <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>

            {/* IIM Calcutta */}
            <div className="p-4 md:p-6 rounded-xl bg-white border-2 border-gray-100 group hover:border-purple-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold text-white bg-gradient-to-br from-orange-400 to-orange-600">
                  <div className="text-center">
                    <div className="text-[10px] sm:text-xs opacity-90">Rank</div>
                    <div className="text-base sm:text-lg leading-none">3</div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-purple-600 transition-colors">
                IIM Calcutta
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">Indian Institute of Management Calcutta</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Kolkata, West Bengal</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Government (Autonomous)</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Avg Package: ₹30+ LPA</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-0.5 sm:py-1 bg-purple-100 text-purple-800 rounded-full text-[10px] sm:text-xs font-medium">IIM</span>
              </div>
              <a
                href="https://www.iimcal.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-xs sm:text-sm"
              >
                <span className="font-medium"><span className="hidden sm:inline">Visit Official Website</span><span className="sm:hidden">Visit Website</span></span>
                <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>

            {/* XLRI Jamshedpur */}
            <div className="p-4 md:p-6 rounded-xl bg-white border-2 border-gray-100 group hover:border-purple-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold text-white bg-gradient-to-br from-blue-500 to-blue-600">
                  <div className="text-center">
                    <div className="text-[10px] sm:text-xs opacity-90">Rank</div>
                    <div className="text-base sm:text-lg leading-none">4</div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-purple-600 transition-colors">
                XLRI Jamshedpur
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">Xavier School of Management</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Jamshedpur, Jharkhand</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Private (Deemed University)</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Avg Package: ₹28+ LPA</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-0.5 sm:py-1 bg-blue-100 text-blue-800 rounded-full text-[10px] sm:text-xs font-medium">B-School</span>
              </div>
              <a
                href="https://www.xlri.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-xs sm:text-sm"
              >
                <span className="font-medium"><span className="hidden sm:inline">Visit Official Website</span><span className="sm:hidden">Visit Website</span></span>
                <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>

            {/* FMS Delhi */}
            <div className="p-4 md:p-6 rounded-xl bg-white border-2 border-gray-100 group hover:border-purple-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold text-white bg-gradient-to-br from-blue-500 to-blue-600">
                  <div className="text-center">
                    <div className="text-[10px] sm:text-xs opacity-90">Rank</div>
                    <div className="text-base sm:text-lg leading-none">5</div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-purple-600 transition-colors">
                FMS Delhi
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">Faculty of Management Studies, University of Delhi</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">New Delhi, Delhi</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Government (University)</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Avg Package: ₹27+ LPA</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-0.5 sm:py-1 bg-green-100 text-green-800 rounded-full text-[10px] sm:text-xs font-medium">Government</span>
              </div>
              <a
                href="https://fms.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-xs sm:text-sm"
              >
                <span className="font-medium"><span className="hidden sm:inline">Visit Official Website</span><span className="sm:hidden">Visit Website</span></span>
                <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>

            {/* SRCC Delhi */}
            <div className="p-4 md:p-6 rounded-xl bg-white border-2 border-gray-100 group hover:border-purple-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold text-white bg-gradient-to-br from-blue-500 to-blue-600">
                  <div className="text-center">
                    <div className="text-[10px] sm:text-xs opacity-90">Top</div>
                    <div className="text-base sm:text-sm leading-none">UG</div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-purple-600 transition-colors">
                SRCC Delhi
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">Shri Ram College of Commerce</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">New Delhi, Delhi</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Government (DU College)</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Top Commerce College</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-0.5 sm:py-1 bg-orange-100 text-orange-800 rounded-full text-[10px] sm:text-xs font-medium">Commerce</span>
                <span className="px-2 py-0.5 sm:py-1 bg-yellow-100 text-yellow-800 rounded-full text-[10px] sm:text-xs font-medium">BCom</span>
              </div>
              <a
                href="https://www.srcc.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-xs sm:text-sm"
              >
                <span className="font-medium"><span className="hidden sm:inline">Visit Official Website</span><span className="sm:hidden">Visit Website</span></span>
                <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>
          </div>

          {/* More Colleges Link */}
          <div className="text-center mt-8 md:mt-12 px-4">
            <Link
              to="/resources#colleges"
              className="inline-flex items-center justify-center bg-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <span className="hidden sm:inline">View All Engineering Colleges (Commerce Database Coming Soon)</span>
              <span className="sm:hidden">View Colleges (More Coming Soon)</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
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