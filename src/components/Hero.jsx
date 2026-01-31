import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, GraduationCap, TrendingUp, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative section-container py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium text-white">AI-Powered Career Guidance</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Career 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Journey Starts Here
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
              Comprehensive career guidance for Indian students. From stream selection to entrance exams, 
              we help you navigate your educational journey with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
              <Link 
                to="/stream-selection"
                className="inline-flex items-center justify-center bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 focus:ring-4 focus:ring-white/50 transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Explore Streams
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/class-10-below"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 focus:ring-4 focus:ring-white/50 transition-all duration-200"
              >
                Class 10 & Below
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-yellow-300" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-white">50K+</p>
                <p className="text-sm text-blue-200">Students Guided</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <GraduationCap className="h-6 w-6 text-yellow-300" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-white">200+</p>
                <p className="text-sm text-blue-200">Career Paths</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-yellow-300" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-white">95%</p>
                <p className="text-sm text-blue-200">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right content - Hero illustration */}
          <div className="relative lg:block">
            <div className="relative">
              {/* Main illustration placeholder */}
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  {/* Student avatars */}
                  <div className="flex justify-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      A
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      R
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      S
                    </div>
                  </div>

                  {/* Career paths visualization */}
                  <div className="space-y-3">
                    <div className="bg-white/30 rounded-lg p-3 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">Engineering</span>
                        <div className="flex space-x-1">
                          {[1,2,3,4,5].map(i => (
                            <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/30 rounded-lg p-3 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">Medical</span>
                        <div className="flex space-x-1">
                          {[1,2,3,4].map(i => (
                            <div key={i} className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          ))}
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/30 rounded-lg p-3 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">Commerce</span>
                        <div className="flex space-x-1">
                          {[1,2,3,4,5].map(i => (
                            <div key={i} className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Success indicator */}
                  <div className="text-center">
                    <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-green-400/30">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-100 font-medium">Career Match Found!</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg animate-bounce">
                <GraduationCap className="h-6 w-6 text-yellow-900" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-400 rounded-full p-3 shadow-lg animate-pulse">
                <TrendingUp className="h-6 w-6 text-green-900" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero