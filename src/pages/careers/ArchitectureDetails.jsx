import React from 'react';
import { Link } from 'react-router-dom';
import { Building, TrendingUp, Target, GraduationCap, Briefcase, Home, Ruler, Users } from 'lucide-react';

const ArchitectureDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/engineering" className="hover:text-amber-600 transition-colors">Engineering</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Architecture</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Building className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Architecture</h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              Design buildings and spaces that blend aesthetics with functionality. Create sustainable, beautiful structures 
              that shape how people live, work, and interact with their environment.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Facts */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-700">5 years</div>
              <div className="text-amber-600 text-sm">B.Arch Duration</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-700">₹4-15 LPA</div>
              <div className="text-amber-600 text-sm">Average Salary</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-700">7%</div>
              <div className="text-amber-600 text-sm">Growth Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-700">Creative</div>
              <div className="text-amber-600 text-sm">Art + Engineering</div>
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
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Junior Architect (0-3 years)</h3>
              <div className="text-3xl font-bold text-blue-700 mb-2">₹3-6 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Fresh B.Arch graduates</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Small Firms:</span>
                  <span className="font-semibold">₹2.5-4 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Mid-size Firms:</span>
                  <span className="font-semibold">₹4-6 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Large Firms:</span>
                  <span className="font-semibold">₹5-8 LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Senior Architect (5-10 years)</h3>
              <div className="text-3xl font-bold text-green-700 mb-2">₹8-18 LPA</div>
              <p className="text-sm text-gray-600 mb-4">With specialization</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Project Architect:</span>
                  <span className="font-semibold">₹8-12 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Design Lead:</span>
                  <span className="font-semibold">₹10-15 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Specialized Consultant:</span>
                  <span className="font-semibold">₹12-20 LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Principal/Partner (10+ years)</h3>
              <div className="text-3xl font-bold text-purple-700 mb-2">₹20-60+ LPA</div>
              <p className="text-sm text-gray-600 mb-4">Own practice/partnership</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Principal Architect:</span>
                  <span className="font-semibold">₹20-35 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Firm Partner:</span>
                  <span className="font-semibold">₹30-50 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Own Successful Firm:</span>
                  <span className="font-semibold">₹50 LPA - 2 Cr+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">🏠 Private Practice Potential</h3>
            <p className="text-gray-700 mb-3">
              Many architects start their own practice after 5-7 years. Residential projects can earn ₹50k-5 lakh per project, 
              commercial projects ₹2-20 lakh. With 10-15 projects per year, income can reach ₹30-80 LPA.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-3 border border-orange-200">
                <div className="font-semibold text-orange-800">Small Home (1500 sq ft)</div>
                <div className="text-gray-700">₹50k-2 lakh fees</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-orange-200">
                <div className="font-semibold text-orange-800">Large Villa (5000 sq ft)</div>
                <div className="text-gray-700">₹3-8 lakh fees</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-orange-200">
                <div className="font-semibold text-orange-800">Commercial Building</div>
                <div className="text-gray-700">₹5-25 lakh+ fees</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
            <p className="text-yellow-900 font-medium">
              💡 <strong>Pro Tip:</strong> Architects typically charge 7-12% of construction cost as fees. A ₹1 crore building 
              project = ₹7-12 lakh architect fees. Established architects with unique design styles command premium rates.
            </p>
          </div>
        </div>

        {/* What Architects Do */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-amber-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">What Architects Do</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-amber-50 rounded-lg p-5 border border-amber-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-3 flex items-center">
                  <Ruler className="w-5 h-5 mr-2" />
                  Design & Planning
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Create architectural drawings and 3D models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Space planning and layout optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Conceptual design and visualization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Material selection and specifications</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Project Management</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Coordinate with engineers and contractors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Budget estimation and cost control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Site supervision and quality checks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Timeline management and scheduling</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Client Interaction
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Understanding client requirements and vision</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Presenting design concepts and revisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Regular progress updates and meetings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Managing expectations and feedback</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Technical Work</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Building codes and regulations compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Structural feasibility and safety analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Sustainable and green building design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Construction documentation and permits</span>
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
            <h2 className="text-3xl font-bold text-gray-900">How to Become an Architect</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">Educational Pathway</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">B.Arch (5 years)</div>
                    <div className="text-gray-700 mt-1">Professional architecture degree recognized by Council of Architecture (COA)</div>
                    <div className="text-sm text-indigo-700 mt-2">
                      💡 Eligibility: 12th with PCM (50%) + NATA exam (minimum 40 marks out of 200)
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Internship (1 year) - Mandatory</div>
                    <div className="text-gray-700 mt-1">Work under a licensed architect to gain practical experience</div>
                    <div className="text-sm text-indigo-700 mt-2">⚠️ Required for COA registration as an architect</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">COA Registration</div>
                    <div className="text-gray-700 mt-1">Register with Council of Architecture to practice legally</div>
                    <div className="text-sm text-indigo-700 mt-2">✓ Only after this can you call yourself an "Architect"</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">M.Arch (2 years) - Optional</div>
                    <div className="text-gray-700 mt-1">Specialization in landscape, urban planning, conservation, etc.</div>
                    <div className="text-sm text-indigo-700 mt-2">📚 For teaching or advanced research roles</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4">Top Architecture Colleges</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">🏆</span>
                    <span><strong>IIT Kharagpur</strong> - Premier institute</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">🏆</span>
                    <span><strong>SPA Delhi</strong> - School of Planning & Arch</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">🏆</span>
                    <span><strong>CEPT Ahmedabad</strong> - Design focus</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">🏆</span>
                    <span><strong>NIT Trichy</strong> - Technical excellence</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">🏆</span>
                    <span><strong>Manipal Architecture</strong> - Good placement</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Essential Software Skills</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">AutoCAD</div>
                      <div className="text-sm">2D drafting and documentation</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Revit / ArchiCAD</div>
                      <div className="text-sm">BIM (Building Information Modeling)</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">SketchUp / Rhino</div>
                      <div className="text-sm">3D modeling and visualization</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Lumion / V-Ray</div>
                      <div className="text-sm">Rendering and presentation</div>
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
            <Target className="w-8 h-8 text-amber-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Architecture Specializations</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Residential Architecture</h3>
              <p className="text-sm text-gray-700 mb-3">Design homes, villas, apartments for individuals</p>
              <div className="text-sm text-blue-700 font-semibold">High demand, creative freedom</div>
            </div>

            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">Commercial Architecture</h3>
              <p className="text-sm text-gray-700 mb-3">Offices, malls, hotels, restaurants design</p>
              <div className="text-sm text-green-700 font-semibold">High budgets, complex projects</div>
            </div>

            <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Landscape Architecture</h3>
              <p className="text-sm text-gray-700 mb-3">Parks, gardens, outdoor spaces design</p>
              <div className="text-sm text-purple-700 font-semibold">Eco-friendly, growing field</div>
            </div>

            <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Urban Planning</h3>
              <p className="text-sm text-gray-700 mb-3">City planning, infrastructure, master plans</p>
              <div className="text-sm text-orange-700 font-semibold">Government projects, large scale</div>
            </div>

            <div className="bg-pink-50 rounded-lg p-5 border border-pink-200">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Interior Architecture</h3>
              <p className="text-sm text-gray-700 mb-3">Interior spaces, furniture, lighting design</p>
              <div className="text-sm text-pink-700 font-semibold">High demand, good earnings</div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-200">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Sustainable/Green Design</h3>
              <p className="text-sm text-gray-700 mb-3">Eco-friendly, energy-efficient buildings</p>
              <div className="text-sm text-indigo-700 font-semibold">Future-focused, premium fees</div>
            </div>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
              <span className="mr-2">✅</span> Why Choose Architecture
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Creative expression</strong> - Design unique, beautiful structures</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Visible impact</strong> - See your designs come to life</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Own practice</strong> - Be your own boss, set your fees</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Diverse projects</strong> - Homes, offices, landscapes, cities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Blend of art & tech</strong> - Perfect for creative engineers</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Growing market</strong> - Real estate boom, smart cities</span>
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
                <span><strong>Long projects</strong> - Designs can take months to years</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Client dependency</strong> - Revisions, changing requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Lower starting pay</strong> - ₹3-5 LPA initially</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Site visits</strong> - Travel, outdoor work in all weather</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Competitive</strong> - Many architects, need unique style</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Continuous learning</strong> - New materials, trends, software</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Is Architecture Right for You?</h2>
          <p className="text-amber-100 text-lg mb-6 max-w-3xl mx-auto">
            If you love both art and science, enjoy visualizing spaces in 3D, have patience for detailed work, and want to create 
            buildings that last generations, architecture could be your calling. Strong drawing skills and spatial imagination help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/engineering" 
              className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors inline-flex items-center shadow-lg"
            >
              Explore Other Engineering Careers
            </Link>
            <a 
              href="#" 
              className="bg-amber-500/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-500/40 transition-colors inline-flex items-center border border-white/30"
            >
              Talk to Career Counselor
            </a>
          </div>
          <p className="text-amber-200 mt-4 text-sm">
            💬 Still confused? Chat with our AI counselor for personalized guidance
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDetails;
