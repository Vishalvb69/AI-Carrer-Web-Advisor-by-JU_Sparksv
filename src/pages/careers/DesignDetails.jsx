import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, TrendingUp, Target, GraduationCap, Briefcase, Laptop, Sparkles, Users } from 'lucide-react';

const DesignDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-pink-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/arts" className="hover:text-pink-600 transition-colors">Arts & Humanities</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Design (UI/UX/Graphic)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Palette className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Design (UI/UX/Graphic)</h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
              Create stunning visual experiences, design intuitive user interfaces, and craft compelling graphics that communicate 
              ideas and solve problems through creativity and technology.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Facts */}
        <div className="bg-pink-50 border-2 border-pink-300 rounded-xl p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-pink-700">🔥 High Demand</div>
              <div className="text-pink-600 text-sm">18% Growth Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-700">₹4-15 LPA</div>
              <div className="text-pink-600 text-sm">Average Salary</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-700">Remote</div>
              <div className="text-pink-600 text-sm">Work from Anywhere</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-700">Portfolio</div>
              <div className="text-pink-600 text-sm">Skills > Degrees</div>
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
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Junior (0-2 years)</h3>
              <div className="text-3xl font-bold text-blue-700 mb-2">₹3-7 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Entry level positions</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Graphic Designer:</span>
                  <span className="font-semibold">₹3-5 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>UI Designer:</span>
                  <span className="font-semibold">₹4-7 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Visual Designer:</span>
                  <span className="font-semibold">₹3.5-6 LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Mid-Level (3-6 years)</h3>
              <div className="text-3xl font-bold text-purple-700 mb-2">₹8-18 LPA</div>
              <p className="text-sm text-gray-600 mb-4">With experience</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Senior UI/UX Designer:</span>
                  <span className="font-semibold">₹10-18 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Product Designer:</span>
                  <span className="font-semibold">₹12-20 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Design Lead:</span>
                  <span className="font-semibold">₹15-25 LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Senior (7+ years)</h3>
              <div className="text-3xl font-bold text-green-700 mb-2">₹20-50+ LPA</div>
              <p className="text-sm text-gray-600 mb-4">Leadership roles</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Design Manager:</span>
                  <span className="font-semibold">₹20-35 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Creative Director:</span>
                  <span className="font-semibold">₹30-60 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Head of Design:</span>
                  <span className="font-semibold">₹40-80 LPA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">💼 Tech Companies Pay More</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Google/Meta/Amazon:</span>
                  <span className="font-semibold text-orange-700">₹15-40 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Product Startups:</span>
                  <span className="font-semibold text-orange-700">₹10-25 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Agencies:</span>
                  <span className="font-semibold text-orange-700">₹6-18 LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">💰 Freelance Potential</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Logo Design:</span>
                  <span className="font-semibold text-blue-700">₹5k-50k per project</span>
                </div>
                <div className="flex justify-between">
                  <span>Website Design:</span>
                  <span className="font-semibold text-blue-700">₹20k-2L per project</span>
                </div>
                <div className="flex justify-between">
                  <span>App UI/UX:</span>
                  <span className="font-semibold text-blue-700">₹50k-5L per project</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-300 rounded-xl p-5">
            <p className="text-purple-900 font-medium">
              <strong>💡 Pro Tip:</strong> Design is portfolio-driven. A strong portfolio matters more than your degree. 
              Many successful designers are self-taught or took online courses. Build projects, contribute to open source, and showcase your work!
            </p>
          </div>
        </div>

        {/* What Designers Do */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-pink-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">What Designers Do</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-pink-50 rounded-lg p-5 border border-pink-200">
                <h3 className="text-xl font-semibold text-pink-800 mb-3 flex items-center">
                  <Laptop className="w-5 h-5 mr-2" />
                  UI/UX Design
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>Design user interfaces for websites and apps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>Conduct user research and usability testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>Create wireframes, prototypes, and mockups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>Design systems and component libraries</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Graphic Design</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Create logos, branding, and visual identity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Design marketing materials and advertisements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Social media graphics and content design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Print design (brochures, posters, packaging)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Product Design</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>End-to-end product design (research to delivery)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Collaborate with developers and product managers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Data-driven design decisions and A/B testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Mobile app and responsive web design</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-3 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Motion/Animation Design
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Create animations for apps and websites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Motion graphics for videos and ads</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Interactive prototypes and micro-interactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Video editing and post-production</span>
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
            <h2 className="text-3xl font-bold text-gray-900">How to Become a Designer</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">🎯 Multiple Pathways Available</h3>
              <p className="text-yellow-800">
                Unlike many careers, design is highly <strong>skill-based</strong> rather than degree-based. You can become a designer through 
                formal education, online courses, or self-learning. What matters most is your <strong>portfolio</strong> demonstrating real skills.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                <h3 className="text-xl font-bold text-indigo-800 mb-4">🎓 Formal Education</h3>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-indigo-900">BFA/B.Des (4 years)</div>
                    <div className="text-sm text-gray-700">Comprehensive design education, theory + practice</div>
                    <div className="text-xs text-indigo-700 mt-1">Entrance: NID, NIFT, UCEED, CEED</div>
                  </div>
                  <div>
                    <div className="font-semibold text-indigo-900">Diploma in Design (1-2 years)</div>
                    <div className="text-sm text-gray-700">Specialized training in graphic/UI/UX design</div>
                    <div className="text-xs text-indigo-700 mt-1">Available at design schools nationwide</div>
                  </div>
                  <div>
                    <div className="font-semibold text-indigo-900">Any Graduation + Short Course</div>
                    <div className="text-sm text-gray-700">Switch careers with 3-6 month intensive programs</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4">💻 Self-Learning Route</h3>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-green-900">Online Courses</div>
                    <div className="text-sm text-gray-700">Coursera, Udemy, Interaction Design Foundation</div>
                    <div className="text-xs text-green-700 mt-1">Cost: ₹5k-50k total</div>
                  </div>
                  <div>
                    <div className="font-semibold text-green-900">YouTube + Practice</div>
                    <div className="text-sm text-gray-700">Free tutorials, build projects, get feedback</div>
                    <div className="text-xs text-green-700 mt-1">Time: 6-12 months dedicated learning</div>
                  </div>
                  <div>
                    <div className="font-semibold text-green-900">Bootcamps</div>
                    <div className="text-sm text-gray-700">Intensive 3-6 month programs with mentorship</div>
                    <div className="text-xs text-green-700 mt-1">Cost: ₹50k-2 lakh</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
                <h3 className="text-xl font-bold text-pink-800 mb-4">Top Design Institutes</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <span className="text-pink-600 mr-2">🏆</span>
                    <span><strong>NID Ahmedabad</strong> - Top govt institute</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-pink-600 mr-2">🏆</span>
                    <span><strong>IIT (IDC) Bombay</strong> - Industrial design</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-pink-600 mr-2">🏆</span>
                    <span><strong>NIFT</strong> - Fashion & design</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-pink-600 mr-2">🏆</span>
                    <span><strong>MIT Institute Pune</strong> - Communication design</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-pink-600 mr-2">🏆</span>
                    <span><strong>Pearl Academy</strong> - Fashion & design</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Essential Tools to Master</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Figma / Sketch / Adobe XD</div>
                      <div className="text-sm">UI/UX design and prototyping</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Adobe Photoshop / Illustrator</div>
                      <div className="text-sm">Graphic design and image editing</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">After Effects / Premiere Pro</div>
                      <div className="text-sm">Motion graphics and video editing</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Basic HTML/CSS (bonus)</div>
                      <div className="text-sm">Understand development constraints</div>
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
            <h2 className="text-3xl font-bold text-gray-900">Design Specializations</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-2">UI/UX Designer</h3>
              <p className="text-sm text-gray-700 mb-3">Digital product interfaces and user experiences</p>
              <div className="text-sm text-blue-700 font-semibold">₹6-20 LPA | High demand</div>
            </div>

            <div className="bg-pink-50 rounded-lg p-5 border border-pink-200">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Product Designer</h3>
              <p className="text-sm text-gray-700 mb-3">End-to-end product design (research + UI/UX)</p>
              <div className="text-sm text-pink-700 font-semibold">₹10-30 LPA | Tech companies</div>
            </div>

            <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Graphic Designer</h3>
              <p className="text-sm text-gray-700 mb-3">Logos, branding, print, and digital graphics</p>
              <div className="text-sm text-purple-700 font-semibold">₹4-12 LPA | Versatile</div>
            </div>

            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">Motion Designer</h3>
              <p className="text-sm text-gray-700 mb-3">Animations, motion graphics, video content</p>
              <div className="text-sm text-green-700 font-semibold">₹6-18 LPA | Growing field</div>
            </div>

            <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Brand Designer</h3>
              <p className="text-sm text-gray-700 mb-3">Visual identity, brand guidelines, strategy</p>
              <div className="text-sm text-orange-700 font-semibold">₹7-15 LPA | Creative agencies</div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-200">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Illustration Designer</h3>
              <p className="text-sm text-gray-700 mb-3">Custom illustrations for brands and products</p>
              <div className="text-sm text-indigo-700 font-semibold">₹5-15 LPA | Niche, artistic</div>
            </div>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
              <span className="mr-2">✅</span> Why Choose Design
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>High demand</strong> - Every company needs designers</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Creative work</strong> - Express your artistic vision</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Remote friendly</strong> - Work from anywhere in the world</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Portfolio-based</strong> - Skills matter more than degrees</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Freelance potential</strong> - Build your own client base</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Fast learning</strong> - Can start earning in 6-12 months</span>
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
                <span><strong>Subjective feedback</strong> - Design is often opinion-based</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Client management</strong> - Endless revisions and changes</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Continuous learning</strong> - Tools and trends change rapidly</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Competition</strong> - Many designers, need to stand out</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Deadline pressure</strong> - Fast-paced, tight timelines</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Screen time</strong> - Long hours staring at monitors</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Is Design Right for You?</h2>
          <p className="text-pink-100 text-lg mb-6 max-w-3xl mx-auto">
            If you have an eye for aesthetics, love creating visual content, enjoy problem-solving through design, and want a career 
            with flexibility and creativity, design could be your perfect fit. Start building your portfolio today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/arts" 
              className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors inline-flex items-center shadow-lg"
            >
              Explore Other Arts Careers
            </Link>
            <a 
              href="#" 
              className="bg-pink-500/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-500/40 transition-colors inline-flex items-center border border-white/30"
            >
              Talk to Career Counselor
            </a>
          </div>
          <p className="text-pink-200 mt-4 text-sm">
            💬 Still confused? Chat with our AI counselor for personalized guidance
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignDetails;
