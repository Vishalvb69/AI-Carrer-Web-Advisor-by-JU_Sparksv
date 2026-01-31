import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, TrendingUp, Target, GraduationCap, Briefcase, AlertCircle } from 'lucide-react';

const AgricultureDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-green-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/medical" className="hover:text-green-600 transition-colors">Science (PCB)</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Agriculture & Agricultural Sciences</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Sprout className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Agriculture & Agricultural Sciences</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Transform farming through science and technology. Develop sustainable agriculture practices, improve crop yields, 
              and contribute to food security while building a career in innovation and nation-building.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Reality Check */}
        <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-orange-900 mb-2">🌾 Industry Reality Check</h3>
              <p className="text-orange-800 text-lg leading-relaxed">
                Agriculture is undergoing a digital revolution with precision farming, drone technology, AI-based crop monitoring, 
                and climate-smart agriculture. While starting salaries are modest (₹3-5 LPA), the field offers excellent growth potential 
                with government support, startup opportunities, and <span className="font-bold">farmers earning ₹20+ LPA through modern techniques</span>. 
                This is nation-building work with high social impact.
              </p>
            </div>
          </div>
        </div>

        {/* Earnings Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Earnings Potential</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">Entry Level (0-3 years)</h3>
              <div className="text-3xl font-bold text-yellow-700 mb-2">₹3-6 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Starting positions</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Agricultural Officer:</span>
                  <span className="font-semibold">₹5-7 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Research Scientist:</span>
                  <span className="font-semibold">₹4-6 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Extension Officer:</span>
                  <span className="font-semibold">₹3-5 LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Mid-Level (3-7 years)</h3>
              <div className="text-3xl font-bold text-blue-700 mb-2">₹8-15 LPA</div>
              <p className="text-sm text-gray-600 mb-4">With experience</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Senior Scientist:</span>
                  <span className="font-semibold">₹10-15 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Farm Manager:</span>
                  <span className="font-semibold">₹8-12 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Agro Consultant:</span>
                  <span className="font-semibold">₹12-18 LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Senior (7+ years)</h3>
              <div className="text-3xl font-bold text-green-700 mb-2">₹15-25+ LPA</div>
              <p className="text-sm text-gray-600 mb-4">Top positions</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Principal Scientist:</span>
                  <span className="font-semibold">₹18-25 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Agri-Business Owner:</span>
                  <span className="font-semibold">₹20-100+ LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Precision Agri Consultant:</span>
                  <span className="font-semibold">₹15-50 LPA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">💰 Alternative Income Streams</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">Farming & Startups</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Modern farming: ₹10-50 lakh/year returns</li>
                  <li>• Agri-tech startup: ₹50 lakh-crores (scaling)</li>
                  <li>• Organic farming: ₹15-30 lakh/acre/year</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">Consultancy & Training</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Agro-consulting: ₹50k-5 lakh/month retainer</li>
                  <li>• Training programs: ₹20k-2 lakh per program</li>
                  <li>• Contract farming: ₹5-50 lakh per season</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-300 rounded-xl p-5">
            <p className="text-blue-900 font-medium">
              <strong>💡 Smart Strategy:</strong> Start in government/corporate research (3-5 years), build expertise and network, 
              then launch your own agri-startup or adopt precision farming on owned/leased land. Government subsidies and e-commerce 
              platforms are making direct-to-market farming very profitable.
            </p>
          </div>
        </div>

        {/* What Agriculturists Do */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Career Paths in Agriculture</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Research & Development</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Crop improvement and hybrid development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Soil science and fertility management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Plant protection and pest management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Agricultural biotechnology and GMO research</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Government & Extension</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Agricultural extension officer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Soil and water conservation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Crop insurance and farmer welfare programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Agricultural development projects</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Modern Agri-Technology</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Precision agriculture and drone technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>AI-based crop monitoring and yield prediction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Climate-smart and sustainable farming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Agri-fintech and farm management software</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Business & Entrepreneurship</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Farm management and contract farming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Agri-startup and farm-to-table businesses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Agricultural consultancy services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Organic and specialty crop production</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Path */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Educational Pathway</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Education Options</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <div className="flex-1">
                    <div className="font-semibold text-green-900 text-lg">B.Sc Agriculture (4 years)</div>
                    <div className="text-gray-700 mt-1">Foundation in crop science, soil science, plant protection, and agricultural management</div>
                    <div className="text-sm text-green-700 mt-2">💡 PCB stream after 12th - Core agriculture education</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div className="flex-1">
                    <div className="font-semibold text-green-900 text-lg">M.Sc Agriculture (2 years) - Specialization</div>
                    <div className="text-gray-700 mt-1">Advanced studies in specific areas: Horticulture, Entomology, Agricultural Economics, etc.</div>
                    <div className="text-sm text-green-700 mt-2">📚 Recommended for research and senior roles</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div className="flex-1">
                    <div className="font-semibold text-green-900 text-lg">PhD Agriculture (3-5 years) - Research</div>
                    <div className="text-gray-700 mt-1">Doctoral research in specialization, original research contribution</div>
                    <div className="text-sm text-green-700 mt-2">🔬 For ICAR scientist roles and advanced research</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                  <div className="flex-1">
                    <div className="font-semibold text-green-900 text-lg">Civil Service (IAS/PCS Agriculture)</div>
                    <div className="text-gray-700 mt-1">After B.Sc/M.Sc, prepare for UPSC Civil Services exam with agriculture focus</div>
                    <div className="text-sm text-green-700 mt-2">⭐ Government prestige and security</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Top Agricultural Universities</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>PAU Ludhiana</strong> - Leading agricultural university</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>IARI Delhi</strong> - Top research institute</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>ANGRAU Hyderabad</strong> - Strong in horticulture</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>MPUAT Udaipur</strong> - Arid region agriculture</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>GBPUAT Uttarakhand</strong> - Mountain agriculture</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Essential Skills to Learn</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Crop Management</div>
                      <div className="text-sm">Soil prep, planting, irrigation, harvesting</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Technology Skills</div>
                      <div className="text-sm">Drone operation, GIS, IoT sensors, AI tools</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Soil & Plant Science</div>
                      <div className="text-sm">Lab testing, field diagnosis, soil analysis</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Business Acumen</div>
                      <div className="text-sm">Farm economics, marketing, supply chain</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Agricultural Specializations</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">Crop Science</h3>
              <p className="text-sm text-gray-700 mb-3">Cereal, pulses, oilseed production</p>
              <div className="text-sm text-green-700 font-semibold">High demand in agri-companies</div>
            </div>

            <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Horticulture</h3>
              <p className="text-sm text-gray-700 mb-3">Fruits, vegetables, floriculture farming</p>
              <div className="text-sm text-blue-700 font-semibold">High value crops, premium pricing</div>
            </div>

            <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Soil Science</h3>
              <p className="text-sm text-gray-700 mb-3">Soil testing, fertility, conservation</p>
              <div className="text-sm text-purple-700 font-semibold">Critical for sustainable farming</div>
            </div>

            <div className="bg-red-50 rounded-lg p-5 border border-red-200">
              <h3 className="text-lg font-bold text-red-800 mb-2">Plant Protection</h3>
              <p className="text-sm text-gray-700 mb-3">Pest and disease management</p>
              <div className="text-sm text-red-700 font-semibold">Always in demand specialty</div>
            </div>

            <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Agricultural Economics</h3>
              <p className="text-sm text-gray-700 mb-3">Farm business, pricing, policy</p>
              <div className="text-sm text-orange-700 font-semibold">Government and consulting roles</div>
            </div>

            <div className="bg-pink-50 rounded-lg p-5 border border-pink-200">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Precision Agriculture</h3>
              <p className="text-sm text-gray-700 mb-3">Tech-enabled farming, automation</p>
              <div className="text-sm text-pink-700 font-semibold">Future of agriculture, fastest growing</div>
            </div>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
              <span className="mr-2">✅</span> Why Choose Agriculture
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Nation building</strong> - Direct contribution to food security</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Tech transformation</strong> - AI, drones, IoT revolutionizing farming</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Government support</strong> - Subsidies, loans, farmer welfare schemes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Entrepreneurship potential</strong> - Farm startups booming</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Sustainability focus</strong> - Growing demand for organic and eco-friendly</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Diverse careers</strong> - Research, business, government, startups</span>
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
                <span><strong>Lower initial salaries</strong> - ₹3-5 LPA starting, less than IT/medical</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Seasonal work patterns</strong> - Tied to crop cycles and weather</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Physical fieldwork</strong> - Field visits, outdoor exposure, strenuous activity</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Weather dependency</strong> - Crop yields affected by unpredictable climate</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Less glamorous perception</strong> - Career stigma, attracting fewer students</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>High capital needs</strong> - If starting own farm, significant investment required</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Is Agriculture Right for You?</h2>
          <p className="text-green-100 text-lg mb-6 max-w-3xl mx-auto">
            If you care about the environment, want to contribute to food security, are willing to work with technology and nature, 
            and can handle seasonal and physical challenges, agriculture offers meaningful work with growing opportunities in agri-tech 
            and sustainable farming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/medical" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center shadow-lg"
            >
              Explore Other Science Careers
            </Link>
            <a 
              href="#" 
              className="bg-green-500/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-500/40 transition-colors inline-flex items-center border border-white/30"
            >
              Talk to Career Counselor
            </a>
          </div>
          <p className="text-green-200 mt-4 text-sm">
            💬 Still confused? Chat with our AI counselor for personalized guidance
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgricultureDetails;
