import React from 'react';
import { Link } from 'react-router-dom';
import { Star, TrendingUp, Target, GraduationCap, Briefcase, AlertCircle } from 'lucide-react';

const AstrologyDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/arts" className="hover:text-purple-600 transition-colors">Arts & Humanities</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Astrology</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Astrology / Astrologer</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Study celestial bodies and their influence on human lives. Provide guidance, spiritual insights, and consultations through Vedic wisdom and modern practice.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-orange-900 mb-2">✨ Industry Reality Check</h3>
              <p className="text-orange-800 text-lg leading-relaxed">
                Astrology has gained mainstream acceptance with growing wellness industry. Many Indians traditionally consult astrologers 
                for important decisions. However, credibility challenges exist, income is highly variable, and success depends heavily on 
                reputation and client base. <span className="font-bold">Earnings range from ₹3-8 LPA employed to ₹30+ LPA for established practitioners</span>. 
                This requires continuous learning and strong ethical practice.
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
              <div className="text-3xl font-bold text-yellow-700 mb-2">₹2-6 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Starting positions</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Astrology Institute:</span>
                  <span className="font-semibold">₹2-4 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Wellness Center:</span>
                  <span className="font-semibold">₹3-5 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Private Consultation:</span>
                  <span className="font-semibold">₹500-2k/session</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Mid-Level (3-7 years)</h3>
              <div className="text-3xl font-bold text-blue-700 mb-2">₹10-20 LPA</div>
              <p className="text-sm text-gray-600 mb-4">With reputation</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Established Astrologer:</span>
                  <span className="font-semibold">₹10-15 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Online Consulting:</span>
                  <span className="font-semibold">₹2-5k/session</span>
                </div>
                <div className="flex justify-between">
                  <span>Media Appearances:</span>
                  <span className="font-semibold">₹50k-5 lakh/appearance</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Senior (7+ years)</h3>
              <div className="text-3xl font-bold text-green-700 mb-2">₹20-30+ LPA</div>
              <p className="text-sm text-gray-600 mb-4">Top practitioners</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Celebrity Astrologer:</span>
                  <span className="font-semibold">₹10-50 lakh/consultation</span>
                </div>
                <div className="flex justify-between">
                  <span>YouTube Channel:</span>
                  <span className="font-semibold">₹5-50 lakh/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Own Practice/Academy:</span>
                  <span className="font-semibold">₹30-100+ LPA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-300 rounded-xl p-5">
            <p className="text-blue-900 font-medium">
              <strong>💡 Smart Strategy:</strong> Study Vedic astrology thoroughly, get certification, build expertise in specific areas 
              (horoscope reading, numerology, Vastu), establish reputation through ethical practice, then build personal brand through 
              YouTube, podcasts, or celebrity clientele.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Career Paths in Astrology</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Vedic Astrology</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Birth chart analysis and predictions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Horoscope reading and life guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Nadi astrology and palmistry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Remedies and gemstone recommendations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-200">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">Specialized Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Numerology and destiny numbers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Vastu shastra and property consulting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Career and business astrology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Relationship and marriage matching</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Media & Content</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>TV astrology shows and appearances</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>YouTube channel and online courses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Podcast and audio consultations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Astrology app development</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Business & Teaching</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Own astrology practice and consultancy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Astrology institute and academy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Online course creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Wellness center partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Educational Pathway</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Education Options</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <div className="flex-1">
                    <div className="font-semibold text-purple-900 text-lg">B.A Astrology (3 years)</div>
                    <div className="text-gray-700 mt-1">University degree in astrology and Vedic sciences</div>
                    <div className="text-sm text-purple-700 mt-2">💡 Available at few universities like BHU, DU, Varanasi</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div className="flex-1">
                    <div className="font-semibold text-purple-900 text-lg">Diploma Programs (1-2 years)</div>
                    <div className="text-gray-700 mt-1">Professional certification from astrology institutes</div>
                    <div className="text-sm text-purple-700 mt-2">📚 Practical focus, industry recognized</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div className="flex-1">
                    <div className="font-semibold text-purple-900 text-lg">Vedic Astrology Certification (6-12 months)</div>
                    <div className="text-gray-700 mt-1">Specialized training in Vedic texts and computation</div>
                    <div className="text-sm text-purple-700 mt-2">⚡ Intensive, traditional knowledge-based</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                  <div className="flex-1">
                    <div className="font-semibold text-purple-900 text-lg">Self-study with Mentorship</div>
                    <div className="text-gray-700 mt-1">Learn from experienced practitioners and texts</div>
                    <div className="text-sm text-purple-700 mt-2">👨‍🏫 Traditional apprenticeship approach</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Learning Resources</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">📖</span>
                    <span><strong>Vedic Texts</strong> - Parasharah, Jaimini, Bhrigu</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">📖</span>
                    <span><strong>Modern Masters</strong> - B.V. Raman, K.N. Rao</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">📖</span>
                    <span><strong>BHU, DU Courses</strong> - University education</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">📖</span>
                    <span><strong>Online Platforms</strong> - Udemy, YouTube learning</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Essential Skills</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Vedic Knowledge</div>
                      <div className="text-sm">Sanskrit, texts, calculations</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Mathematics</div>
                      <div className="text-sm">Birth chart calculations, timing</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Psychology & Counseling</div>
                      <div className="text-sm">Understanding clients, guidance</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Ethics & Integrity</div>
                      <div className="text-sm">Professional conduct, responsibility</div>
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
              <span className="mr-2">✅</span> Why Choose Astrology
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Spiritual fulfillment</strong> - Help people through guidance</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Growing acceptance</strong> - Mainstream wellness industry</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Flexible career</strong> - Own practice, online consulting</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Cultural pride</strong> - Ancient Vedic knowledge</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Celebrity potential</strong> - Media exposure possible</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Multiple income streams</strong> - Consulting, teaching, content</span>
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
                <span><strong>Credibility challenges</strong> - Scientific skepticism, fraud perception</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Income inconsistency</strong> - Highly dependent on reputation</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Belief-dependent career</strong> - Client faith is crucial</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Ethical responsibility</strong> - People make life decisions based on guidance</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Complex knowledge</strong> - Steep learning curve, lifelong study needed</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Social stigma</strong> - Still viewed skeptically by some</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Is Astrology Right for You?</h2>
          <p className="text-purple-100 text-lg mb-6 max-w-3xl mx-auto">
            If you believe in Vedic wisdom, want to help people navigate life challenges, can maintain ethical standards, 
            and are willing to study extensively, astrology offers meaningful work. Building reputation is key to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/arts" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center shadow-lg"
            >
              Explore Other Arts Careers
            </Link>
            <a 
              href="#" 
              className="bg-purple-500/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-500/40 transition-colors inline-flex items-center border border-white/30"
            >
              Talk to Career Counselor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologyDetails;
