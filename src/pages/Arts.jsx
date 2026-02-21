import React from 'react'
import { Link } from 'react-router-dom'
import CareerCard from '../components/CareerCard'
import { careersByStream } from '../data/careers'
import { 
  Palette,
  ArrowRight,
  BookOpen,
  Users,
  Lightbulb,
  Building2,
  MapPin,
  ExternalLink,
  AlertCircle,
  Star
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

      {/* Top Arts/Design/Architecture Colleges Section */}
      <section className="py-16 bg-gray-50" id="colleges">
        <div className="section-container">
          <div className="text-center mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Top Arts, Design & Architecture Colleges in India</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore premier design schools, architecture institutes, and mass communication colleges for creative careers
            </p>
          </div>

          {/* Coming Soon Notice */}
          <div className="max-w-3xl mx-auto mb-8 md:mb-12 px-4">
            <div className="p-4 md:p-6 rounded-xl border-2 border-orange-200 bg-orange-50 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-3">
                <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600 flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-orange-900 mb-2">Complete Arts & Design Colleges Database Coming Soon!</h3>
                  <p className="text-sm sm:text-base text-orange-800 mb-3">
                    We're compiling comprehensive data on all NIFT campuses, NID programs, IIT Design, Architecture schools (SPA, IIT), 
                    Mass Communication institutes (IIMC, Jamia), and specialized creative colleges with entrance exam details and placement records.
                  </p>
                  <p className="text-sm text-orange-700">
                    Check out our engineering colleges database on the Resources page in the meantime!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder Cards for Top Design/Arts Schools */}
          <div className="text-center mb-8 px-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Top Design, Architecture & Media Institutes in India</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4">
            {/* NIFT Delhi */}
            <div className="p-4 md:p-6 rounded-xl bg-white border-2 border-gray-100 group hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold text-white bg-gradient-to-br from-yellow-400 to-orange-500">
                  <div className="text-center">
                    <div className="text-[10px] sm:text-xs opacity-90">Top</div>
                    <div className="text-base sm:text-sm leading-none">Design</div>
                  </div>
                </div>
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 fill-current" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-orange-600 transition-colors">
                NIFT Delhi
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">National Institute of Fashion Technology</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">New Delhi, Delhi</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Government (Autonomous)</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Palette className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Fashion & Design</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-0.5 sm:py-1 bg-orange-100 text-orange-800 rounded-full text-[10px] sm:text-xs font-medium">NIFT</span>
                <span className="px-2 py-0.5 sm:py-1 bg-yellow-100 text-yellow-800 rounded-full text-[10px] sm:text-xs font-medium">Top Ranked</span>
              </div>
              <a
                href="https://www.nift.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-xs sm:text-sm"
              >
                <span className="font-medium"><span className="hidden sm:inline">Visit Official Website</span><span className="sm:hidden">Visit Website</span></span>
                <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>

            {/* NID Ahmedabad */}
            <div className="p-4 md:p-6 rounded-xl bg-white border-2 border-gray-100 group hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold text-white bg-gradient-to-br from-gray-400 to-gray-600">
                  <div className="text-center">
                    <div className="text-[10px] sm:text-xs opacity-90">Top</div>
                    <div className="text-base sm:text-sm leading-none">Design</div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-orange-600 transition-colors">
                NID Ahmedabad
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">National Institute of Design</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Ahmedabad, Gujarat</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Government (National Institute)</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Palette className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Industrial & Product Design</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-0.5 sm:py-1 bg-orange-100 text-orange-800 rounded-full text-[10px] sm:text-xs font-medium">NID</span>
              </div>
              <a
                href="https://www.nid.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-xs sm:text-sm"
              >
                <span className="font-medium"><span className="hidden sm:inline">Visit Official Website</span><span className="sm:hidden">Visit Website</span></span>
                <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>

            {/* IIT Kharagpur Architecture */}
            <div className="p-4 md:p-6 rounded-xl bg-white border-2 border-gray-100 group hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold text-white bg-gradient-to-br from-orange-400 to-orange-600">
                  <div className="text-center">
                    <div className="text-[10px] sm:text-xs opacity-90">IIT</div>
                    <div className="text-base sm:text-sm leading-none">Arch</div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-orange-600 transition-colors">
                IIT Kharagpur
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">Architecture & Regional Planning</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Kharagpur, West Bengal</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Government (IIT)</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Palette className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Architecture & Planning</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-0.5 sm:py-1 bg-blue-100 text-blue-800 rounded-full text-[10px] sm:text-xs font-medium">IIT</span>
                <span className="px-2 py-0.5 sm:py-1 bg-purple-100 text-purple-800 rounded-full text-[10px] sm:text-xs font-medium">Architecture</span>
              </div>
              <a
                href="https://www.iitkgp.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-xs sm:text-sm"
              >
                <span className="font-medium"><span className="hidden sm:inline">Visit Official Website</span><span className="sm:hidden">Visit Website</span></span>
                <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>

            {/* SPA Delhi */}
            <div className="p-4 md:p-6 rounded-xl bg-white border-2 border-gray-100 group hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold text-white bg-gradient-to-br from-blue-500 to-blue-600">
                  <div className="text-center">
                    <div className="text-[10px] sm:text-xs opacity-90">Top</div>
                    <div className="text-base sm:text-sm leading-none">Arch</div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-orange-600 transition-colors">
                SPA Delhi
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">School of Planning and Architecture</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">New Delhi, Delhi</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Government (Deemed University)</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Palette className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Architecture & Planning</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-0.5 sm:py-1 bg-purple-100 text-purple-800 rounded-full text-[10px] sm:text-xs font-medium">Architecture</span>
              </div>
              <a
                href="https://www.spa.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-xs sm:text-sm"
              >
                <span className="font-medium"><span className="hidden sm:inline">Visit Official Website</span><span className="sm:hidden">Visit Website</span></span>
                <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>

            {/* IIMC Delhi */}
            <div className="p-4 md:p-6 rounded-xl bg-white border-2 border-gray-100 group hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold text-white bg-gradient-to-br from-blue-500 to-blue-600">
                  <div className="text-center">
                    <div className="text-[10px] sm:text-xs opacity-90">Top</div>
                    <div className="text-base sm:text-sm leading-none">MC</div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-orange-600 transition-colors">
                IIMC Delhi
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">Indian Institute of Mass Communication</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">New Delhi, Delhi</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Government (Autonomous)</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Journalism & Mass Comm</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-0.5 sm:py-1 bg-green-100 text-green-800 rounded-full text-[10px] sm:text-xs font-medium">Media</span>
              </div>
              <a
                href="https://www.iimc.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-xs sm:text-sm"
              >
                <span className="font-medium"><span className="hidden sm:inline">Visit Official Website</span><span className="sm:hidden">Visit Website</span></span>
                <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>

            {/* Jamia Millia Islamia */}
            <div className="p-4 md:p-6 rounded-xl bg-white border-2 border-gray-100 group hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold text-white bg-gradient-to-br from-blue-500 to-blue-600">
                  <div className="text-center">
                    <div className="text-[10px] sm:text-xs opacity-90">Top</div>
                    <div className="text-base sm:text-sm leading-none">MC</div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-orange-600 transition-colors">
                Jamia Millia Islamia
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">Mass Communication Research Centre</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">New Delhi, Delhi</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Government (Central University)</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">Mass Communication</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-0.5 sm:py-1 bg-green-100 text-green-800 rounded-full text-[10px] sm:text-xs font-medium">Media</span>
              </div>
              <a
                href="https://www.jmi.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-xs sm:text-sm"
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
              className="inline-flex items-center justify-center bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <span className="hidden sm:inline">View All Engineering Colleges (Arts/Design Database Coming Soon)</span>
              <span className="sm:hidden">View Colleges (More Coming Soon)</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
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