import React from 'react';
import { Link } from 'react-router-dom';
import { Microscope, TrendingUp, Target, GraduationCap, Briefcase, AlertCircle } from 'lucide-react';

const ScientistDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/engineering" className="hover:text-blue-600 transition-colors">Engineering & Technology</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Scientist (R&D)</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Microscope className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Scientist (Research & Development)</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Conduct groundbreaking research, perform experiments, and develop innovative solutions that advance science and technology.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-orange-900 mb-2">🔬 Industry Reality Check</h3>
              <p className="text-orange-800 text-lg leading-relaxed">
                Research careers are intellectually rewarding but require dedication and advanced degrees. India's R&D sector is growing with 
                increased government funding in ISRO, CSIR, and DRDO. Career progression depends on publications, research output, and networking. 
                <span className="font-bold">Early career earnings are moderate, but top scientists earn ₹40-60+ LPA with recognition</span>. 
                Success requires continuous learning and passion for discovery.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Earnings Potential</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">Entry Level (0-3 years)</h3>
              <div className="text-3xl font-bold text-yellow-700 mb-2">₹4-10 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Starting positions</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Research Assistant:</span>
                  <span className="font-semibold">₹3-5 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Junior Scientist (CSIR):</span>
                  <span className="font-semibold">₹4-7 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Lab Scientist:</span>
                  <span className="font-semibold">₹5-10 LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Mid-Level (3-7 years)</h3>
              <div className="text-3xl font-bold text-blue-700 mb-2">₹15-30 LPA</div>
              <p className="text-sm text-gray-600 mb-4">With publications</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Senior Scientist:</span>
                  <span className="font-semibold">₹15-25 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Lead Researcher:</span>
                  <span className="font-semibold">₹20-30 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Pharma Scientist:</span>
                  <span className="font-semibold">₹12-20 LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Senior (7+ years)</h3>
              <div className="text-3xl font-bold text-green-700 mb-2">₹30-60+ LPA</div>
              <p className="text-sm text-gray-600 mb-4">Top researchers</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Principal Scientist:</span>
                  <span className="font-semibold">₹30-50 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Chief Scientist:</span>
                  <span className="font-semibold">₹40-70 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>ISRO/DRDO Scientist:</span>
                  <span className="font-semibold">₹50-100+ LPA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-300 rounded-xl p-5">
            <p className="text-blue-900 font-medium">
              <strong>💡 Smart Strategy:</strong> Pursue higher degrees (M.Sc/PhD) in specialized fields, publish research papers, 
              build networks with established researchers, consider postdoctoral fellowships, and leverage government research funding 
              opportunities through CSIR, ISRO, and DRDO.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Career Paths in Science</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Government Research</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>ISRO scientist - Space research and satellite technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>CSIR scientist - Physics, chemistry, industrial research</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>DRDO scientist - Defense and security research</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>University researcher - Academic research and teaching</span>
                  </li>
                </ul>
              </div>

              <div className="bg-cyan-50 rounded-lg p-5 border border-cyan-200">
                <h3 className="text-xl font-semibold text-cyan-800 mb-3">Field Specializations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Physics - Materials, quantum, astrophysics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Chemistry - Organic, inorganic, analytical chemistry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Biology - Molecular, microbiology, genetics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Nanotechnology - Nanoparticles, materials engineering</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Industry Research</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Pharmaceutical R&D - Drug discovery and development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Tech R&D - AI, robotics, quantum computing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Chemical industry - Process optimization, manufacturing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Environmental science - Climate, sustainability, pollution</span>
                  </li>
                </ul>
              </div>

              <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-200">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">Emerging Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>AI & ML in scientific research - Data analysis, automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Renewable energy - Solar, wind, battery technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Biotech - Gene therapy, synthetic biology, stem cells</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Space exploration - Moon, Mars, deep space missions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Educational Pathway</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Education Options</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <div className="flex-1">
                    <div className="font-semibold text-blue-900 text-lg">B.Sc (3 years)</div>
                    <div className="text-gray-700 mt-1">Bachelor in Physics, Chemistry, Biology, or related sciences</div>
                    <div className="text-sm text-blue-700 mt-2">📚 Foundation for research career</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div className="flex-1">
                    <div className="font-semibold text-blue-900 text-lg">M.Sc (2 years)</div>
                    <div className="text-gray-700 mt-1">Master's degree with specialization, thesis-based or coursework</div>
                    <div className="text-sm text-blue-700 mt-2">🎓 Essential for research positions</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div className="flex-1">
                    <div className="font-semibold text-blue-900 text-lg">PhD (3-5 years)</div>
                    <div className="text-gray-700 mt-1">Doctoral degree with original research contribution and publication</div>
                    <div className="text-sm text-blue-700 mt-2">⭐ Required for top positions and ISRO/DRDO</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                  <div className="flex-1">
                    <div className="font-semibold text-blue-900 text-lg">Postdoctoral Fellowship</div>
                    <div className="text-gray-700 mt-1">Optional advanced research position at universities or institutes</div>
                    <div className="text-sm text-blue-700 mt-2">📖 Builds expertise and international experience</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
                <h3 className="text-xl font-bold text-cyan-800 mb-4">Learning Resources</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <span className="text-cyan-600 mr-2">📖</span>
                    <span><strong>Top Universities</strong> - IISc, IIT, Delhi University, IITs</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyan-600 mr-2">📖</span>
                    <span><strong>Government Institutes</strong> - NIT, CSIR labs, research centers</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyan-600 mr-2">📖</span>
                    <span><strong>Lab Experience</strong> - Internships, research projects</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyan-600 mr-2">📖</span>
                    <span><strong>Online Learning</strong> - Coursera, edX, specialized platforms</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Essential Skills</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Scientific Knowledge</div>
                      <div className="text-sm">Strong foundation in field specialization</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Lab & Data Analysis</div>
                      <div className="text-sm">Experimental techniques, statistics, programming</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Research & Documentation</div>
                      <div className="text-sm">Literature review, writing papers, presentations</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Problem Solving & Curiosity</div>
                      <div className="text-sm">Creativity, perseverance, continuous learning mindset</div>
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
              <span className="mr-2">✅</span> Why Choose Scientific Research
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Intellectual challenge</strong> - Solve complex scientific problems</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Contributing to humanity</strong> - Impact through innovation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Job security</strong> - Government and industry positions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Global recognition</strong> - Publications and patents</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>International opportunities</strong> - Collaborations and fellowships</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Continuous learning</strong> - Stay at forefront of knowledge</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
              <span className="mr-2">⚠️</span> Challenges to Consider
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Long education path</strong> - 10+ years for top positions (B.Sc + M.Sc + PhD)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Moderate starting salary</strong> - Lower than tech/engineering initially</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Funding dependency</strong> - Research grants may be limited</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Publication pressure</strong> - Career depends on research output</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Lab work demands</strong> - Long hours, physical demands, hazards</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Limited positions</strong> - Fewer spots than other engineering branches</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Is Scientific Research Your Calling?</h2>
          <p className="text-blue-100 text-lg mb-6 max-w-3xl mx-auto">
            If you are curious about how things work, enjoy experiments and discovery, willing to invest in advanced education, 
            and passionate about contributing to scientific progress, a research career offers deep satisfaction and global impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/engineering" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center shadow-lg"
            >
              Explore Other Engineering Careers
            </Link>
            <a 
              href="#" 
              className="bg-blue-500/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/40 transition-colors inline-flex items-center border border-white/30"
            >
              Talk to Career Counselor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScientistDetails;
