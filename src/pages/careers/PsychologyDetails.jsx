import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, TrendingUp, Target, GraduationCap, Briefcase, Heart, Users, AlertCircle } from 'lucide-react';

const PsychologyDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/arts" className="hover:text-purple-600 transition-colors">Arts & Humanities</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Psychology</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Psychology</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Study human behavior, emotions, and mental processes. Help people overcome challenges and improve their mental well-being 
              through counseling, therapy, and psychological interventions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Facts */}
        <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-700">5-6 years</div>
              <div className="text-purple-600 text-sm">Study Duration (BA + MA)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700">₹4-12 LPA</div>
              <div className="text-purple-600 text-sm">Average Salary</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700">13%</div>
              <div className="text-purple-600 text-sm">Growth Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700">Excellent</div>
              <div className="text-purple-600 text-sm">Future Outlook</div>
            </div>
          </div>
        </div>

        {/* Earnings Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Earnings & Career Growth</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Newly Qualified (0-3 years)</h3>
              <div className="text-3xl font-bold text-green-700 mb-2">₹3-6 LPA</div>
              <p className="text-sm text-gray-600 mb-4">After MA qualification</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Junior Counselor:</span>
                  <span className="font-semibold">₹3-5 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Clinical Trainee:</span>
                  <span className="font-semibold">₹4-6 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>School Counselor:</span>
                  <span className="font-semibold">₹3.5-5 LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Experienced (5-10 years)</h3>
              <div className="text-3xl font-bold text-blue-700 mb-2">₹8-15 LPA</div>
              <p className="text-sm text-gray-600 mb-4">With specialization</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Clinical Psychologist:</span>
                  <span className="font-semibold">₹8-12 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Corporate Counselor:</span>
                  <span className="font-semibold">₹10-15 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Organizational Psychologist:</span>
                  <span className="font-semibold">₹12-18 LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Senior (10+ years)</h3>
              <div className="text-3xl font-bold text-purple-700 mb-2">₹15-30+ LPA</div>
              <p className="text-sm text-gray-600 mb-4">With private practice</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Private Practice:</span>
                  <span className="font-semibold">₹20-50 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Consultant/Expert:</span>
                  <span className="font-semibold">₹15-25 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Psychology Professor:</span>
                  <span className="font-semibold">₹12-20 LPA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Private Practice Income Potential</h3>
            <p className="text-gray-700 mb-3">
              Many psychologists build successful private practices charging ₹1,500-5,000 per session. With 15-20 clients per week, 
              you can earn ₹25-50 LPA while maintaining work-life balance.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-3 border border-purple-200">
                <div className="font-semibold text-purple-800">Metro Cities</div>
                <div className="text-gray-700">₹2,000-5,000/session</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-purple-200">
                <div className="font-semibold text-purple-800">Tier 2 Cities</div>
                <div className="text-gray-700">₹1,000-2,500/session</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-purple-200">
                <div className="font-semibold text-purple-800">Online Therapy</div>
                <div className="text-gray-700">₹1,500-3,000/session</div>
              </div>
            </div>
          </div>
        </div>

        {/* What Psychologists Do */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">What Psychologists Do</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3 flex items-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Clinical Psychology
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Diagnose and treat mental health disorders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>One-on-one therapy sessions (CBT, DBT, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Psychological assessments and testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Crisis intervention and emergency support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Counseling Psychology</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Career counseling for students and professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Relationship and marriage counseling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Stress management and wellness programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Group therapy and support groups</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Organizational Psychology</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Employee wellness programs (EAP)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Talent assessment and recruitment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Leadership development and training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Workplace conflict resolution</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Research & Academia</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Conduct psychological research studies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Publish papers in academic journals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Teach psychology at universities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Develop new therapeutic techniques</span>
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
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">Step-by-Step Journey</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">BA Psychology (3 years)</div>
                    <div className="text-gray-700 mt-1">Foundation in psychological theories, research methods, and core concepts</div>
                    <div className="text-sm text-indigo-700 mt-2">💡 Eligibility: 12th pass (any stream, but Science/Arts preferred)</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">MA Psychology (2 years)</div>
                    <div className="text-gray-700 mt-1">Specialization in Clinical, Counseling, Organizational, or other areas</div>
                    <div className="text-sm text-indigo-700 mt-2">🎯 Required for professional practice in India (RCI registration)</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">M.Phil Clinical Psychology (2 years) - Optional</div>
                    <div className="text-gray-700 mt-1">Advanced clinical training with supervised practice in hospitals</div>
                    <div className="text-sm text-indigo-700 mt-2">⭐ Gold standard for clinical practice, required for RCI license as Clinical Psychologist</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">PhD Psychology - Optional</div>
                    <div className="text-gray-700 mt-1">For research and academic careers, not required for clinical practice</div>
                    <div className="text-sm text-indigo-700 mt-2">📚 Best for those interested in teaching at university level</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4">Top Colleges in India</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">🏆</span>
                    <span><strong>NIMHANS Bangalore</strong> - Top for Clinical</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">🏆</span>
                    <span><strong>Tata Institute</strong> - Research Excellence</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">🏆</span>
                    <span><strong>Christ University</strong> - BA + MA Programs</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">🏆</span>
                    <span><strong>Amity University</strong> - Counseling Programs</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">🏆</span>
                    <span><strong>DU Colleges</strong> - Psychology Honors</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Certifications & Licenses</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">RCI Registration</div>
                      <div className="text-sm">Rehabilitation Council of India - Required for practice</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Therapy Certifications</div>
                      <div className="text-sm">CBT, DBT, REBT specialized training</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Counseling Diplomas</div>
                      <div className="text-sm">Short-term courses for skill enhancement</div>
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
            <Target className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Psychology Specializations</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Clinical Psychology</h3>
              <p className="text-sm text-gray-700 mb-3">Diagnosis and treatment of mental health disorders</p>
              <div className="text-sm text-purple-700 font-semibold">Avg: ₹8-15 LPA</div>
            </div>

            <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Counseling Psychology</h3>
              <p className="text-sm text-gray-700 mb-3">Helping people with life challenges and decisions</p>
              <div className="text-sm text-blue-700 font-semibold">Avg: ₹6-12 LPA</div>
            </div>

            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">Organizational/Industrial</h3>
              <p className="text-sm text-gray-700 mb-3">Workplace psychology, HR, employee wellness</p>
              <div className="text-sm text-green-700 font-semibold">Avg: ₹10-18 LPA</div>
            </div>

            <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Child Psychology</h3>
              <p className="text-sm text-gray-700 mb-3">Working with children's developmental issues</p>
              <div className="text-sm text-orange-700 font-semibold">Avg: ₹6-10 LPA</div>
            </div>

            <div className="bg-pink-50 rounded-lg p-5 border border-pink-200">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Forensic Psychology</h3>
              <p className="text-sm text-gray-700 mb-3">Psychology in legal settings, criminal behavior</p>
              <div className="text-sm text-pink-700 font-semibold">Avg: ₹8-14 LPA</div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-200">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Sports Psychology</h3>
              <p className="text-sm text-gray-700 mb-3">Mental training for athletes and teams</p>
              <div className="text-sm text-indigo-700 font-semibold">Avg: ₹7-15 LPA</div>
            </div>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
              <span className="mr-2">✅</span> Why Choose Psychology
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Meaningful work</strong> - Help people improve their lives</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Growing awareness</strong> - Mental health stigma reducing</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Flexible practice</strong> - Hospital, corporate, or private</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Work-life balance</strong> - Set your own schedule</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Diverse opportunities</strong> - Multiple specialization paths</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Online therapy</strong> - Can work from anywhere</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-orange-600 mb-6 flex items-center">
              <span className="mr-2">⚠️</span> Challenges to Consider
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Emotional demands</strong> - Hearing difficult stories daily</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Long education</strong> - 5-7 years minimum qualification</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Moderate starting pay</strong> - ₹3-6 LPA initially</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Building clientele</strong> - Takes time in private practice</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Vicarious trauma</strong> - Risk of burnout and compassion fatigue</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Continuous learning</strong> - New research and methods to stay updated</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Is Psychology Right for You?</h2>
          <p className="text-purple-100 text-lg mb-6 max-w-3xl mx-auto">
            If you're empathetic, patient, a good listener, and genuinely interested in understanding human behavior and helping people, 
            psychology could be your calling. The field is growing rapidly in India with increasing mental health awareness.
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
          <p className="text-purple-200 mt-4 text-sm">
            💬 Still confused? Chat with our AI counselor for personalized guidance
          </p>
        </div>
      </div>
    </div>
  );
};

export default PsychologyDetails;
