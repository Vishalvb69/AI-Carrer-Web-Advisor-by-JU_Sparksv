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
  TrendingUp,
  Building2,
  MapPin,
  ExternalLink,
  AlertCircle,
  Star
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

      {/* Top Medical Colleges Section */}
      <section className="py-16 bg-gray-50" id="colleges">
        <div className="section-container">
          <div className="text-center mb-8 md:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Top Medical Colleges in India</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore premier medical colleges including AIIMS, Government Medical Colleges, and top private institutions
            </p>
          </div>

          {/* Coming Soon Notice */}
          <div className="max-w-3xl mx-auto mb-8 md:mb-12 px-4">
            <div className="p-4 md:p-6 rounded-xl border-2 border-green-200 bg-green-50 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-3">
                <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-green-900 mb-2">Medical Colleges Database Coming Soon!</h3>
                  <p className="text-sm sm:text-base text-green-800 mb-3">
                    We're compiling data on all AIIMS institutions, Government Medical Colleges, and top private medical colleges with NEET cutoffs.
                  </p>
                  <p className="text-xs sm:text-sm text-green-700">
                    Meanwhile, check out our engineering colleges database on the Resources page!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder Cards for Popular Medical Colleges */}
          <div className="text-center mb-6 md:mb-8 px-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 md:mb-6">Popular Medical Colleges in India</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4">
            {/* AIIMS Delhi */}
            <div className="p-4 md:p-6 rounded-xl bg-white border-2 border-gray-100 group hover:border-green-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold text-white bg-gradient-to-br from-yellow-400 to-orange-500">
                  <div className="text-center">
                    <div className="text-[10px] sm:text-xs opacity-90">Rank</div>
                    <div className="text-base sm:text-lg leading-none">1</div>
                  </div>
                </div>
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 fill-current" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-green-600 transition-colors">
                AIIMS Delhi
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">All India Institute of Medical Sciences</p>
              <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">New Delhi, Delhi</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Government (Central)</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <span className="px-2 py-0.5 sm:py-1 bg-green-100 text-green-800 rounded-full text-[10px] sm:text-xs font-medium">AIIMS</span>
                <span className="px-2 py-0.5 sm:py-1 bg-yellow-100 text-yellow-800 rounded-full text-[10px] sm:text-xs font-medium">Top Ranked</span>
              </div>
              <a
                href="https://www.aiims.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-green-600 text-white text-xs sm:text-sm rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                <span className="hidden sm:inline">Visit Official Website</span>
                <span className="sm:hidden">Visit Website</span>
                <ExternalLink className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>

            {/* CMC Vellore */}
            <div className="p-4 md:p-6 rounded-xl bg-white border-2 border-gray-100 group hover:border-green-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold text-white bg-gradient-to-br from-gray-400 to-gray-600">
                  <div className="text-center">
                    <div className="text-[10px] sm:text-xs opacity-90">Rank</div>
                    <div className="text-base sm:text-lg leading-none">2</div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-green-600 transition-colors">
                CMC Vellore
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">Christian Medical College</p>
              <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Vellore, Tamil Nadu</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Private (Deemed University)</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <span className="px-2 py-0.5 sm:py-1 bg-purple-100 text-purple-800 rounded-full text-[10px] sm:text-xs font-medium">Deemed University</span>
              </div>
              <a
                href="https://www.cmch-vellore.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-green-600 text-white text-xs sm:text-sm rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                <span className="hidden sm:inline">Visit Official Website</span>
                <span className="sm:hidden">Visit Website</span>
                <ExternalLink className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>

            {/* PGIMER Chandigarh */}
            <div className="p-4 md:p-6 rounded-xl bg-white border-2 border-gray-100 group hover:border-green-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold text-white bg-gradient-to-br from-orange-400 to-orange-600">
                  <div className="text-center">
                    <div className="text-[10px] sm:text-xs opacity-90">Rank</div>
                    <div className="text-base sm:text-lg leading-none">3</div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-green-600 transition-colors">
                PGIMER Chandigarh
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">Postgraduate Institute of Medical Education</p>
              <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Chandigarh, Chandigarh</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Government (Central)</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <span className="px-2 py-0.5 sm:py-1 bg-green-100 text-green-800 rounded-full text-[10px] sm:text-xs font-medium">Government</span>
              </div>
              <a
                href="https://pgimer.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-green-600 text-white text-xs sm:text-sm rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                <span className="hidden sm:inline">Visit Official Website</span>
                <span className="sm:hidden">Visit Website</span>
                <ExternalLink className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>

            {/* JIPMER Puducherry */}
            <div className="p-4 md:p-6 rounded-xl bg-white border-2 border-gray-100 group hover:border-green-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold text-white bg-gradient-to-br from-blue-500 to-blue-600">
                  <div className="text-center">
                    <div className="text-[10px] sm:text-xs opacity-90">Rank</div>
                    <div className="text-base sm:text-lg leading-none">4</div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-green-600 transition-colors">
                JIPMER Puducherry
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">Jawaharlal Institute of Postgraduate Medical Education</p>
              <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Puducherry, Puducherry</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Government (Central)</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <span className="px-2 py-0.5 sm:py-1 bg-green-100 text-green-800 rounded-full text-[10px] sm:text-xs font-medium">Government</span>
              </div>
              <a
                href="https://jipmer.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-green-600 text-white text-xs sm:text-sm rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                <span className="hidden sm:inline">Visit Official Website</span>
                <span className="sm:hidden">Visit Website</span>
                <ExternalLink className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>

            {/* BHU Varanasi */}
            <div className="p-4 md:p-6 rounded-xl bg-white border-2 border-gray-100 group hover:border-green-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold text-white bg-gradient-to-br from-blue-500 to-blue-600">
                  <div className="text-center">
                    <div className="text-[10px] sm:text-xs opacity-90">Rank</div>
                    <div className="text-base sm:text-lg leading-none">5</div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-green-600 transition-colors">
                IMS BHU
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">Institute of Medical Sciences, Banaras Hindu University</p>
              <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Varanasi, Uttar Pradesh</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Government (Central)</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <span className="px-2 py-0.5 sm:py-1 bg-green-100 text-green-800 rounded-full text-[10px] sm:text-xs font-medium">Government</span>
              </div>
              <a
                href="https://www.bhu.ac.in/ims/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-green-600 text-white text-xs sm:text-sm rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                <span className="hidden sm:inline">Visit Official Website</span>
                <span className="sm:hidden">Visit Website</span>
                <ExternalLink className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>

            {/* Manipal */}
            <div className="p-4 md:p-6 rounded-xl bg-white border-2 border-gray-100 group hover:border-green-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold text-white bg-gradient-to-br from-blue-500 to-blue-600">
                  <div className="text-center">
                    <div className="text-[10px] sm:text-xs opacity-90">Rank</div>
                    <div className="text-base sm:text-lg leading-none">6</div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-green-600 transition-colors">
                Manipal MAHE
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">Manipal Academy of Higher Education</p>
              <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Manipal, Karnataka</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Private (Deemed University)</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <span className="px-2 py-0.5 sm:py-1 bg-purple-100 text-purple-800 rounded-full text-[10px] sm:text-xs font-medium">Deemed University</span>
              </div>
              <a
                href="https://manipal.edu/mu.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-green-600 text-white text-xs sm:text-sm rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                <span className="hidden sm:inline">Visit Official Website</span>
                <span className="sm:hidden">Visit Website</span>
                <ExternalLink className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>
          </div>

          {/* More Colleges Link */}
          <div className="text-center mt-8 md:mt-12 px-4">
            <Link
              to="/resources#colleges"
              className="inline-flex items-center justify-center bg-green-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <span className="hidden sm:inline">View All Engineering Colleges (Medical Database Coming Soon)</span>
              <span className="sm:hidden">Engineering Colleges</span>
              <ArrowRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
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