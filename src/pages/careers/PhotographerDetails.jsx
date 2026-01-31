import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, TrendingUp, Target, GraduationCap, Briefcase, AlertCircle } from 'lucide-react';

const PhotographerDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-cyan-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/arts" className="hover:text-cyan-600 transition-colors">Arts & Humanities</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Photographer</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Camera className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Photographer / Visual Storyteller</h1>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              Capture moments that matter. Tell stories through images across weddings, events, journalism, fashion, and digital media.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-orange-900 mb-2">📸 Industry Reality Check</h3>
              <p className="text-orange-800 text-lg leading-relaxed">
                Photography is increasingly competitive with smartphone cameras improving constantly. However, demand for professional 
                photographers remains strong in weddings, events, e-commerce, and content creation. <span className="font-bold">Income varies widely: 
                ₹3-10 LPA employed, ₹10-50+ LPA as successful freelancer</span>. Success depends on building a strong portfolio and brand.
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
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">Entry Level (0-2 years)</h3>
              <div className="text-3xl font-bold text-yellow-700 mb-2">₹2-5 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Starting positions</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Photography Studio:</span>
                  <span className="font-semibold">₹2-4 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Wedding Photography:</span>
                  <span className="font-semibold">₹20-50k/event</span>
                </div>
                <div className="flex justify-between">
                  <span>Freelance Start:</span>
                  <span className="font-semibold">₹5k-25k/shoot</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Mid-Level (2-5 years)</h3>
              <div className="text-3xl font-bold text-blue-700 mb-2">₹8-15 LPA</div>
              <p className="text-sm text-gray-600 mb-4">With experience</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Photography Manager:</span>
                  <span className="font-semibold">₹8-12 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>High-end Weddings:</span>
                  <span className="font-semibold">₹1-5 lakh/event</span>
                </div>
                <div className="flex justify-between">
                  <span>Commercial Shoots:</span>
                  <span className="font-semibold">₹30k-2 lakh/shoot</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Senior (5+ years)</h3>
              <div className="text-3xl font-bold text-green-700 mb-2">₹15-30+ LPA</div>
              <p className="text-sm text-gray-600 mb-4">Top positions</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Celebrity Photographer:</span>
                  <span className="font-semibold">₹5-50 lakh/shoot</span>
                </div>
                <div className="flex justify-between">
                  <span>Studio Owner:</span>
                  <span className="font-semibold">₹30-100+ LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Photo Editor/Retoucher:</span>
                  <span className="font-semibold">₹20-50 lakh/year</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-300 rounded-xl p-5">
            <p className="text-blue-900 font-medium">
              <strong>💡 Smart Strategy:</strong> Start in a studio (2-3 years), build a strong portfolio, then transition to 
              high-end wedding/event photography or establish own studio. Content creation and stock photography provide passive income.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-cyan-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Career Paths in Photography</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-cyan-50 rounded-lg p-5 border border-cyan-200">
                <h3 className="text-xl font-semibold text-cyan-800 mb-3">Commercial Photography</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Product and e-commerce photography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Fashion and beauty photography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Corporate and business photography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Advertising and brand campaigns</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Event Photography</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Wedding photography and videography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Event coverage and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Concert and festival photography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Sports and action photography</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Content & Digital Media</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Social media content creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>YouTube and Instagram photography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Stock photography and licensing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Content creator and influencer work</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Journalism & Fine Art</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Photojournalism and news photography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Documentary photography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Fine art and exhibition photography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Travel and landscape photography</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-8 h-8 text-cyan-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Educational Pathway</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
              <h3 className="text-2xl font-bold text-cyan-800 mb-4">Education Options</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <div className="flex-1">
                    <div className="font-semibold text-cyan-900 text-lg">B.F.A/B.A in Photography (4 years)</div>
                    <div className="text-gray-700 mt-1">University-level photography and visual arts education</div>
                    <div className="text-sm text-cyan-700 mt-2">💡 Formal degree, broader arts education</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div className="flex-1">
                    <div className="font-semibold text-cyan-900 text-lg">Diploma in Photography (2 years)</div>
                    <div className="text-gray-700 mt-1">Specialized photography training and practical skills</div>
                    <div className="text-sm text-cyan-700 mt-2">📚 Focused curriculum, industry-oriented</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div className="flex-1">
                    <div className="font-semibold text-cyan-900 text-lg">Professional Certification Courses (6-12 months)</div>
                    <div className="text-gray-700 mt-1">Short-term specialized training in photography</div>
                    <div className="text-sm text-cyan-700 mt-2">⚡ Quick skill development, affordable</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                  <div className="flex-1">
                    <div className="font-semibold text-cyan-900 text-lg">Self-taught Portfolio-based (Practical learning)</div>
                    <div className="text-gray-700 mt-1">Learn through online resources, practice, and mentorship</div>
                    <div className="text-sm text-cyan-700 mt-2">💪 Many successful photographers are self-taught</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Top Photography Institutes</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">📷</span>
                    <span><strong>National Institute of Photography</strong></span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">📷</span>
                    <span><strong>FTII Pune</strong> - Film studies</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">📷</span>
                    <span><strong>MAAC</strong> - Photography programs</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">📷</span>
                    <span><strong>AAFT Noida</strong> - Media photography</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Essential Skills</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Camera & Equipment Mastery</div>
                      <div className="text-sm">DSLR, mirrorless, lighting setup</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Photo Editing</div>
                      <div className="text-sm">Lightroom, Photoshop, Capture One</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Composition & Lighting</div>
                      <div className="text-sm">Visual aesthetics, creative vision</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Client Management & Marketing</div>
                      <div className="text-sm">Portfolio, social media, business skills</div>
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
              <span className="mr-2">✅</span> Why Choose Photography
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Creative expression</strong> - Capture your unique vision and perspective</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Flexible work arrangements</strong> - Freelance, portfolio-based careers</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Passion-driven</strong> - Turn hobby into income</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Low startup cost</strong> - Can start with phone camera</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Diverse opportunities</strong> - Weddings, events, content, commercial</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Passive income potential</strong> - Stock photos, prints, licensing</span>
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
                <span><strong>Income instability</strong> - Freelance work is unpredictable</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Smartphone competition</strong> - Everyone has a camera now</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Equipment investment required</strong> - Quality gear is expensive</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Highly competitive field</strong> - Millions of photographers</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Client management stress</strong> - Difficult client negotiations</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>No job security</strong> - Constantly finding new clients</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Is Photography Right for You?</h2>
          <p className="text-cyan-100 text-lg mb-6 max-w-3xl mx-auto">
            If you're creative, have a good eye for composition, enjoy working with people, and can handle business aspects, 
            photography offers fulfilling work. Success requires building strong portfolio and marketing skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/arts" 
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors inline-flex items-center shadow-lg"
            >
              Explore Other Arts Careers
            </Link>
            <a 
              href="#" 
              className="bg-cyan-500/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/40 transition-colors inline-flex items-center border border-white/30"
            >
              Talk to Career Counselor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographerDetails;
