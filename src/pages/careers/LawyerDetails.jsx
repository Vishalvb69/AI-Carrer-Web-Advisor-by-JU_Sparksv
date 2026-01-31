import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, TrendingUp, Target, GraduationCap, Briefcase, AlertCircle } from 'lucide-react';

const LawyerDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/arts" className="hover:text-blue-600 transition-colors">Arts & Humanities</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Lawyer / Legal Professional</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Scale className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Lawyer / Legal Professional</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Practice law with integrity. Advocate for clients, provide legal counsel, and shape justice through courts, corporations, 
              and public service with expertise in various legal domains.
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
              <h3 className="text-2xl font-bold text-orange-900 mb-2">⚖️ Industry Reality Check</h3>
              <p className="text-orange-800 text-lg leading-relaxed">
                The legal profession is highly competitive with significant barriers to entry - 5 years of education plus bar exams required. 
                However, it offers excellent earning potential, job security, and prestige. <span className="font-bold">Starting salaries are modest (₹5-8 LPA), 
                but experienced lawyers earn ₹80+ LPA</span>. The field is evolving with legal tech, AI-powered research, and alternative dispute resolution.
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
              <div className="text-3xl font-bold text-yellow-700 mb-2">₹5-8 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Starting positions</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Junior Lawyer (Private):</span>
                  <span className="font-semibold">₹5-8 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Government Counsel:</span>
                  <span className="font-semibold">₹6-9 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Legal Intern (After Bar):</span>
                  <span className="font-semibold">₹3-5 LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Mid-Level (3-7 years)</h3>
              <div className="text-3xl font-bold text-blue-700 mb-2">₹15-35 LPA</div>
              <p className="text-sm text-gray-600 mb-4">With experience</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Senior Lawyer:</span>
                  <span className="font-semibold">₹15-25 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Corporate Counsel:</span>
                  <span className="font-semibold">₹20-35 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Government Officer:</span>
                  <span className="font-semibold">₹12-18 LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Senior (7+ years)</h3>
              <div className="text-3xl font-bold text-green-700 mb-2">₹35-80+ LPA</div>
              <p className="text-sm text-gray-600 mb-4">Top positions</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Partner/Principal:</span>
                  <span className="font-semibold">₹50-100+ LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Senior Partner:</span>
                  <span className="font-semibold">₹100-300+ LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Judge (Judicial):</span>
                  <span className="font-semibold">₹30-50 LPA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">💰 Alternative Income Streams</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">Own Practice</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Civil cases: ₹5,000-50,000+ per case</li>
                  <li>• Corporate retainer: ₹50k-5 lakh/month</li>
                  <li>• Arbitration cases: ₹1-10 lakh+ per case</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">Specializations</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Corporate law: ₹50-200+ lakh/case</li>
                  <li>• Patent/IP: ₹20-100+ lakh/case</li>
                  <li>• International law: ₹50k-5 crore/matter</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-300 rounded-xl p-5">
            <p className="text-blue-900 font-medium">
              <strong>💡 Smart Strategy:</strong> Work with established law firms for 3-5 years to build expertise and client base, 
              then either make partner or start your own practice. Corporate law and specialized areas (IP, patent, international) offer highest earnings.
            </p>
          </div>
        </div>

        {/* What Lawyers Do */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Career Paths in Law</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Courtroom Practice</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Criminal law and prosecution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Civil litigation and disputes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Family law (divorce, custody, inheritance)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Constitutional law and PILs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Corporate Law</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Mergers & acquisitions (M&A)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Contract drafting and negotiation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Compliance and regulatory affairs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Corporate governance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Specialized Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Intellectual Property (IP, patents, trademarks)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>International/Trade law</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Environmental and energy law</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Labor and employment law</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Other Opportunities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Government counsel and judiciary</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>NGOs and social justice work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Legal education and academia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Arbitration and dispute resolution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Path */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Educational Pathway</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">Required Education & Exams</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">12th Pass (Any Stream)</div>
                    <div className="text-gray-700 mt-1">Science, Commerce, or Arts stream acceptable</div>
                    <div className="text-sm text-indigo-700 mt-2">💡 No minimum percentage requirement, focus on entrance exams</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">BA/B.Sc LLB (5 years)</div>
                    <div className="text-gray-700 mt-1">After 12th: Integrated law degree combining bachelor's + law</div>
                    <div className="text-sm text-indigo-700 mt-2">📚 Entrance exams: CLAT, AILET, LSAT, state bar exams</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">All India Bar Examination (AIBE)</div>
                    <div className="text-gray-700 mt-1">After law graduation, mandatory exam before practicing law</div>
                    <div className="text-sm text-indigo-700 mt-2">⚡ Conducted by Bar Council of India (BCI) multiple times yearly</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">LLM (Optional - 1-2 years)</div>
                    <div className="text-gray-700 mt-1">Specialization in specific areas (Corporate, IP, Criminal, etc.)</div>
                    <div className="text-sm text-indigo-700 mt-2">📖 Helpful for academic roles or senior practice positions</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Top Law Schools</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>NLSIU Bangalore</strong> - Top national law school</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>Delhi University Law</strong> - High prestige</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>Gujarat National Law</strong> - Competitive exams</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>Tamil Nadu Dr. Ambedkar</strong> - Research focused</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>Jamia Millia Law</strong> - Strong network</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Essential Skills to Learn</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Legal Research</div>
                      <div className="text-sm">Case law analysis, statute interpretation</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Written & Oral Advocacy</div>
                      <div className="text-sm">Arguments, pleadings, court appearance</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Negotiation & Drafting</div>
                      <div className="text-sm">Contracts, agreements, settlements</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Client Management</div>
                      <div className="text-sm">Communication, relationship building, ethics</div>
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
            <Target className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Law Specializations</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Corporate Law</h3>
              <p className="text-sm text-gray-700 mb-3">M&A, contracts, corporate governance</p>
              <div className="text-sm text-blue-700 font-semibold">Highest paying (₹50L+)</div>
            </div>

            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">IP & Patent Law</h3>
              <p className="text-sm text-gray-700 mb-3">Intellectual property protection</p>
              <div className="text-sm text-green-700 font-semibold">Specialized, lucrative</div>
            </div>

            <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Criminal Law</h3>
              <p className="text-sm text-gray-700 mb-3">Defense, prosecution, criminal justice</p>
              <div className="text-sm text-purple-700 font-semibold">Impactful, moderate pay</div>
            </div>

            <div className="bg-red-50 rounded-lg p-5 border border-red-200">
              <h3 className="text-lg font-bold text-red-800 mb-2">Family Law</h3>
              <p className="text-sm text-gray-700 mb-3">Divorce, custody, inheritance disputes</p>
              <div className="text-sm text-red-700 font-semibold">Growing practice area</div>
            </div>

            <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Tax & Finance Law</h3>
              <p className="text-sm text-gray-700 mb-3">Tax planning, financial regulations</p>
              <div className="text-sm text-orange-700 font-semibold">Niche, very lucrative</div>
            </div>

            <div className="bg-pink-50 rounded-lg p-5 border border-pink-200">
              <h3 className="text-lg font-bold text-pink-800 mb-2">International Law</h3>
              <p className="text-sm text-gray-700 mb-3">Cross-border transactions, treaties</p>
              <div className="text-sm text-pink-700 font-semibold">Global opportunities</div>
            </div>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
              <span className="mr-2">✅</span> Why Choose Law
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Excellent earning potential</strong> - ₹80+ LPA for experienced lawyers</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Job security</strong> - Always need lawyers, recession resistant</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>High prestige</strong> - Respected profession, influential positions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Social impact</strong> - Deliver justice, protect rights</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Own practice potential</strong> - Build your law firm</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Diverse specializations</strong> - Many fields to choose from</span>
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
                <span><strong>Long education required</strong> - 5 years minimum + bar exam</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Low starting salaries</strong> - Only ₹5-8 LPA initially</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>High competition</strong> - Limited top law school seats</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Continuous learning</strong> - Laws constantly change</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Emotional & ethical challenges</strong> - Difficult cases, moral dilemmas</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Work pressure</strong> - Long hours, tight deadlines</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Is Law the Right Career for You?</h2>
          <p className="text-indigo-100 text-lg mb-6 max-w-3xl mx-auto">
            If you're interested in justice, have strong analytical skills, patience for detailed work, and can handle ethical 
            responsibility, law could be your path. Remember: start with the right law school (via CLAT/AILET) and specialize 
            in high-demand areas to maximize earnings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/arts" 
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center shadow-lg"
            >
              Explore Other Arts Careers
            </Link>
            <a 
              href="#" 
              className="bg-indigo-500/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-500/40 transition-colors inline-flex items-center border border-white/30"
            >
              Talk to Career Counselor
            </a>
          </div>
          <p className="text-indigo-200 mt-4 text-sm">
            💬 Still confused? Chat with our AI counselor for personalized guidance
          </p>
        </div>
      </div>
    </div>
  );
};

export default LawyerDetails;
