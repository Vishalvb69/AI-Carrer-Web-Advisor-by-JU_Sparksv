import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, TrendingUp, Target, GraduationCap, Briefcase, AlertCircle } from 'lucide-react';

const AstronautDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/engineering" className="hover:text-purple-600 transition-colors">Engineering & Technology</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Astronaut</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Astronaut</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Train and work for space agencies to explore space, conduct research in microgravity, and represent your nation in space missions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-orange-900 mb-2">🚀 Industry Reality Check</h3>
              <p className="text-orange-800 text-lg leading-relaxed">
                Becoming an astronaut is one of the most prestigious and competitive careers globally. ISRO has launched the Gaganyaan program 
                with India's first human spaceflight mission, creating unprecedented opportunities for Indian astronauts. However, selections are 
                extremely rare - only a handful of positions open every few years. <span className="font-bold">You need exceptional engineering skills, 
                peak physical fitness, top psychological resilience, and years of rigorous training</span>. This is a lifetime commitment to excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Earnings & Benefits Potential</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">Training Phase (0-3 years)</h3>
              <div className="text-3xl font-bold text-yellow-700 mb-2">₹8-15 LPA</div>
              <p className="text-sm text-gray-600 mb-4">During training program</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>ISRO Astronaut Trainee:</span>
                  <span className="font-semibold">₹8-12 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Intensive Training Allowance:</span>
                  <span className="font-semibold">₹3-5 LPA extra</span>
                </div>
                <div className="flex justify-between">
                  <span>All expenses covered:</span>
                  <span className="font-semibold">Food, housing, gear</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Active Astronaut (3-15 years)</h3>
              <div className="text-3xl font-bold text-blue-700 mb-2">₹20-40 LPA</div>
              <p className="text-sm text-gray-600 mb-4">After certification</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Base astronaut salary:</span>
                  <span className="font-semibold">₹20-30 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Mission flight bonus:</span>
                  <span className="font-semibold">₹10-20 lakh/mission</span>
                </div>
                <div className="flex justify-between">
                  <span>International missions:</span>
                  <span className="font-semibold">Additional benefits</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Senior/Command (15+ years)</h3>
              <div className="text-3xl font-bold text-green-700 mb-2">₹40+ LPA</div>
              <p className="text-sm text-gray-600 mb-4">Established career</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Mission Commander:</span>
                  <span className="font-semibold">₹40-60 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>International roles:</span>
                  <span className="font-semibold">₹50-100+ LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Post-retirement consulting:</span>
                  <span className="font-semibold">₹1+ Cr potential</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-300 rounded-xl p-5">
            <p className="text-blue-900 font-medium">
              <strong>💡 Smart Strategy:</strong> Excel in engineering (aerospace/mechanical preferred), gain pilot training experience, 
              join ISRO/defense forces early, maintain peak physical fitness, develop leadership skills, and be ready when ISRO announces 
              astronaut recruitment. The window is rare - few positions open every 5-10 years.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Career Paths to Astronaut</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">ISRO Astronaut Program</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Selected through ISRO astronaut recruitment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Training at ISRO facilities in India</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Gaganyaan mission participation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>International space station missions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-200">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">Space Agency Routes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>NASA astronaut program (for Indians with US citizenship)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>ESA (European Space Agency) opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>International space collaborations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Private space companies (SpaceX, Blue Origin)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Mission Specializations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Pilot astronaut - Flight control and spacecraft operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Mission specialist - Payload operations and experiments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Flight engineer - Systems management and troubleshooting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Payload specialist - Scientific research in space</span>
                  </li>
                </ul>
              </div>

              <div className="bg-cyan-50 rounded-lg p-5 border border-cyan-200">
                <h3 className="text-xl font-semibold text-cyan-800 mb-3">Training Evolution</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Basic astronaut training - Technical & physical</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Advanced mission training - Specific vehicle systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>ISS training - Space station operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Command/leadership training - For senior missions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Educational & Qualification Pathway</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Basic Requirements</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <div className="flex-1">
                    <div className="font-semibold text-purple-900 text-lg">Engineering Degree (B.Tech/B.E.)</div>
                    <div className="text-gray-700 mt-1">Preferred: Aerospace, Mechanical, Electronics, or Civil Engineering</div>
                    <div className="text-sm text-purple-700 mt-2">📚 Excellent academics (7.0+ GPA typically required)</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div className="flex-1">
                    <div className="font-semibold text-purple-900 text-lg">Test Pilot License / Aviation Experience (Preferred)</div>
                    <div className="text-gray-700 mt-1">Join military as test pilot or undergo pilot training</div>
                    <div className="text-sm text-purple-700 mt-2">✈️ 3-5 years flight experience strengthens candidacy</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div className="flex-1">
                    <div className="font-semibold text-purple-900 text-lg">Military/Defense Service (Strong Advantage)</div>
                    <div className="text-gray-700 mt-1">Join Indian Air Force, Navy, or Army as an officer</div>
                    <div className="text-sm text-purple-700 mt-2">🎖️ Demonstrates discipline, leadership, and physical fitness</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                  <div className="flex-1">
                    <div className="font-semibold text-purple-900 text-lg">ISRO Astronaut Selection</div>
                    <div className="text-gray-700 mt-1">Apply when ISRO announces astronaut recruitment (rare - every 5-10 years)</div>
                    <div className="text-sm text-purple-700 mt-2">🚀 Written exam → Medical tests → Interview → Final selection</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">5</div>
                  <div className="flex-1">
                    <div className="font-semibold text-purple-900 text-lg">ISRO Astronaut Training Program</div>
                    <div className="text-gray-700 mt-1">2-4 years of intensive training at ISRO, NASA, and international facilities</div>
                    <div className="text-sm text-purple-700 mt-2">⭐ Physical, technical, survival, and mission-specific training</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Entrance Exams & Tests</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">📖</span>
                    <span><strong>JEE Main/Advanced</strong> - For engineering admission</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">📖</span>
                    <span><strong>NDA Exam</strong> - For military service path</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">📖</span>
                    <span><strong>AFCAT</strong> - For Air Force pilot selection</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">📖</span>
                    <span><strong>ISRO Astronaut Exam</strong> - Physics, engineering, aptitude</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Critical Skills Development</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Technical Excellence</div>
                      <div className="text-sm">Engineering, spacecraft systems, science</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Physical Fitness Peak</div>
                      <div className="text-sm">Cardio, strength, flexibility, endurance training</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Psychological Resilience</div>
                      <div className="text-sm">Stress management, team coordination, decision-making</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Leadership & Communication</div>
                      <div className="text-sm">Team management, technical briefings, international collaboration</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
              <span className="mr-2">✅</span> Why Choose to Be an Astronaut
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Ultimate prestige</strong> - One of the most respected careers globally</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Exploring space</strong> - Live the human dream of space exploration</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>National hero</strong> - Represent India on global stage</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Scientific contribution</strong> - Conduct research in microgravity</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Inspiring future generations</strong> - Impact youth to pursue STEM</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Lifetime achievement</strong> - Legacy and recognition forever</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
              <span className="mr-2">⚠️</span> Extreme Challenges to Consider
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Extremely competitive</strong> - Only 2-4 positions per decade</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Years of training</strong> - 2-4 years intense training after selection</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Peak physical demands</strong> - Extreme fitness required continuously</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Safety risks</strong> - Space missions carry inherent dangers</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Demanding lifestyle</strong> - Zero margin for error, high pressure</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Waiting period</strong> - May wait years between missions</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Is Becoming an Astronaut Your Dream?</h2>
          <p className="text-purple-100 text-lg mb-6 max-w-3xl mx-auto">
            This path demands exceptional engineering skills, military discipline, peak physical fitness, and unwavering determination. 
            If you're willing to dedicate 10+ years building expertise, can handle extreme pressure, and dream of exploring space representing 
            India, this is humanity's ultimate career challenge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/engineering" 
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center shadow-lg"
            >
              Explore Other Engineering Careers
            </Link>
            <a 
              href="#" 
              className="bg-purple-700/40 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700/60 transition-colors inline-flex items-center border border-white/30"
            >
              Talk to Career Counselor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstronautDetails;
