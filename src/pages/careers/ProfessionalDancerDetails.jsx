import React from 'react';
import { Link } from 'react-router-dom';
import { Music, TrendingUp, Target, GraduationCap, Briefcase, Star, Users, Award } from 'lucide-react';

const ProfessionalDancerDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-pink-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/emerging-careers" className="hover:text-pink-600 transition-colors">Emerging Careers</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Professional Dancer</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Music className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Professional Dancer</h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
              Transform your passion for dance into a career through reality shows, choreography, Bollywood, stage performances, 
              teaching, and social media. Express yourself through movement and inspire millions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Facts */}
        <div className="bg-pink-50 border-2 border-pink-300 rounded-xl p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-pink-700">5-10 years</div>
              <div className="text-pink-600 text-sm">To Establish</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-700">₹2-30+ LPA</div>
              <div className="text-pink-600 text-sm">Income Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-700">15%</div>
              <div className="text-pink-600 text-sm">Growth Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-700">Multiple</div>
              <div className="text-pink-600 text-sm">Income Sources</div>
            </div>
          </div>
        </div>

        {/* Reality Check Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-6 mb-8 border-2 border-orange-400">
          <h3 className="text-2xl font-bold mb-3 flex items-center">
            <span className="mr-3">⚠️</span> Reality Check: Tough Industry
          </h3>
          <p className="text-orange-100 mb-4">
            <strong>Only 2-5% of dancers make sustainable income from performance alone.</strong> Most supplement with teaching, 
            choreography, or corporate events. Physical fitness demands are extreme. Career peak is typically 20-35 years.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-white font-semibold">
              💡 Smart Strategy: Train rigorously (4-6 hours daily), build social media presence, learn multiple dance styles, 
              and create backup income through teaching. Start early (age 10-15) for classical; contemporary can start at any age.
            </p>
          </div>
        </div>

        {/* Earnings Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Earnings Breakdown</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Beginner Dancer (0-3 years)</h3>
              <div className="text-3xl font-bold text-gray-700 mb-2">₹50k-3 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Training, small gigs</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Stage Shows:</span>
                  <span className="font-semibold">₹2k-10k/show</span>
                </div>
                <div className="flex justify-between">
                  <span>Teaching (Part-time):</span>
                  <span className="font-semibold">₹500-1k/hr</span>
                </div>
                <div className="flex justify-between">
                  <span>Reality:</span>
                  <span className="font-semibold text-red-600">Mostly teaching income</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Established Dancer (5-10 years)</h3>
              <div className="text-3xl font-bold text-blue-700 mb-2">₹5-15 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Choreographer, shows</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Choreography:</span>
                  <span className="font-semibold">₹20k-1L/project</span>
                </div>
                <div className="flex justify-between">
                  <span>Corporate Events:</span>
                  <span className="font-semibold">₹15k-50k/show</span>
                </div>
                <div className="flex justify-between">
                  <span>Teaching (Studio):</span>
                  <span className="font-semibold">₹30k-1L/month</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Top Dancer (10+ years)</h3>
              <div className="text-3xl font-bold text-purple-700 mb-2">₹20-80+ LPA</div>
              <p className="text-sm text-gray-600 mb-4">Bollywood, reality TV</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Bollywood Projects:</span>
                  <span className="font-semibold">₹5-20L/song</span>
                </div>
                <div className="flex justify-between">
                  <span>Reality Show Judge:</span>
                  <span className="font-semibold">₹3-15L/episode</span>
                </div>
                <div className="flex justify-between">
                  <span>Own Dance Academy:</span>
                  <span className="font-semibold">₹5-30L/year</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">💰 Income Sources for Dancers</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-green-800 text-lg">Wedding Performances</div>
                <div className="text-gray-700 mt-2">₹10k-2 lakh per event</div>
                <div className="text-purple-700 font-bold mt-1">High demand in India</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-green-800 text-lg">Corporate Shows</div>
                <div className="text-gray-700 mt-2">₹15k-1 lakh per show</div>
                <div className="text-purple-700 font-bold mt-1">Regular bookings</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-green-800 text-lg">Music Video Background</div>
                <div className="text-gray-700 mt-2">₹5k-50k per day</div>
                <div className="text-purple-700 font-bold mt-1">Bollywood/regional</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
            <p className="text-yellow-900 font-medium">
              💡 <strong>Reality:</strong> Teaching (40%) + Choreography (25%) + Stage Shows (20%) + Brand Collaborations (10%) + 
              Social Media (5%). Successful dancers like Raghav Juyal, Dharmesh earn ₹30-50 LPA+ from multiple sources.
            </p>
          </div>
        </div>

        {/* What Professional Dancers Do */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-pink-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">What Professional Dancers Do</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-pink-50 rounded-lg p-5 border border-pink-200">
                <h3 className="text-xl font-semibold text-pink-800 mb-3 flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Performance & Practice
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>Daily practice (4-6 hours) to maintain form</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>Stage shows, concerts, and live performances</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>Participate in competitions and reality shows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>Physical fitness and injury prevention training</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Choreography</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Create dance routines for films, music videos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Choreograph for weddings and corporate events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Direct group performances and dance crews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Collaborate with music directors and filmmakers</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Teaching & Workshops
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Teach at dance academies and studios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Conduct workshops and masterclasses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Online dance tutorials and courses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Train students for competitions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Content & Brand Work</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Create dance content for Instagram/YouTube</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Brand endorsements and collaborations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Dance challenges and trending videos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Appear in TV shows and reality programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* How to Become */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Path to Professional Dancing</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">Step-by-Step Roadmap</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Start Training Early (Age 8-15 ideal)</div>
                    <div className="text-gray-700 mt-1">Join dance academy. Classical (Bharatanatyam, Kathak) needs early start. Contemporary/Hip-hop flexible.</div>
                    <div className="text-sm text-indigo-700 mt-2">⏱️ Practice 2-3 hours daily minimum</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Master Multiple Styles (3-5 years)</div>
                    <div className="text-gray-700 mt-1">Learn Classical + Contemporary/Hip-hop/Bollywood. Versatility = more opportunities.</div>
                    <div className="text-sm text-indigo-700 mt-2">✓ Complete at least one formal certification</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Compete & Perform (Ongoing)</div>
                    <div className="text-gray-700 mt-1">Enter competitions, reality shows (Dance India Dance, Nach Baliye). Build stage confidence.</div>
                    <div className="text-sm text-indigo-700 mt-2">🏆 Awards & recognition open doors</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Build Online Presence (2-3 years)</div>
                    <div className="text-gray-700 mt-1">Post dance videos on Instagram/YouTube. Trending reels attract brands and opportunities.</div>
                    <div className="text-sm text-indigo-700 mt-2">📱 10k+ followers helps with bookings</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">5</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Network & Diversify Income (5+ years)</div>
                    <div className="text-gray-700 mt-1">Teach, choreograph, perform. Connect with event managers, filmmakers, brands.</div>
                    <div className="text-sm text-indigo-700 mt-2">💰 Never rely on performance alone—teach too!</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4">Essential Skills</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Physical Fitness</strong> - Strength, flexibility</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Rhythm & Timing</strong> - Music sense</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Performance Skills</strong> - Stage presence</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Choreography</strong> - Create routines</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Discipline</strong> - Daily practice consistency</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Popular Dance Styles</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <div className="font-semibold">Bollywood/Commercial</div>
                      <div className="text-sm">Highest demand in India</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <div className="font-semibold">Hip-hop/B-boying</div>
                      <div className="text-sm">Youth appeal, competitions</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <div className="font-semibold">Classical (Bharatanatyam, Kathak)</div>
                      <div className="text-sm">Prestige, cultural value</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <div className="font-semibold">Contemporary/Modern</div>
                      <div className="text-sm">Artistic, international scope</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 text-pink-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Career Paths for Dancers</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Bollywood Dancer</h3>
              <p className="text-sm text-gray-700 mb-3">Background dancer in films, music videos</p>
              <div className="text-sm text-blue-700 font-semibold">₹5k-20L per song</div>
            </div>

            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">Choreographer</h3>
              <p className="text-sm text-gray-700 mb-3">Create routines for shows, films, events</p>
              <div className="text-sm text-green-700 font-semibold">₹20k-10L per project</div>
            </div>

            <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Dance Teacher</h3>
              <p className="text-sm text-gray-700 mb-3">Teach at academies or run own studio</p>
              <div className="text-sm text-purple-700 font-semibold">₹500-2k per hour</div>
            </div>

            <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Reality Show Performer</h3>
              <p className="text-sm text-gray-700 mb-3">Compete in Dance India Dance, etc.</p>
              <div className="text-sm text-orange-700 font-semibold">Fame + ₹10-50L prizes</div>
            </div>

            <div className="bg-pink-50 rounded-lg p-5 border border-pink-200">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Event Performer</h3>
              <p className="text-sm text-gray-700 mb-3">Weddings, corporate shows, concerts</p>
              <div className="text-sm text-pink-700 font-semibold">₹10k-2L per event</div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-200">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Social Media Influencer</h3>
              <p className="text-sm text-gray-700 mb-3">Dance content creator, brand deals</p>
              <div className="text-sm text-indigo-700 font-semibold">₹5k-5L per post</div>
            </div>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
              <span className="mr-2">✅</span> Why Choose Dance Career
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Passion meets profession</strong> - Do what you love</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Creative expression</strong> - Express through movement</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Multiple income streams</strong> - Perform, teach, choreograph</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Fame potential</strong> - Reality shows, social media</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Physical fitness</strong> - Stay healthy while working</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Cultural preservation</strong> - Keep art forms alive</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-orange-600 mb-6 flex items-center">
              <span className="mr-2">⚠️</span> Serious Challenges
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Income instability</strong> - Unpredictable bookings</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Physical demands</strong> - Injuries, constant fitness needed</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Short peak period</strong> - Career best 20-35 years</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>High competition</strong> - Thousands competing for same roles</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Family resistance</strong> - Not seen as "stable career"</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Must teach to survive</strong> - Performance alone rarely enough</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Is Professional Dance Right for You?</h2>
          <p className="text-pink-100 text-lg mb-6 max-w-3xl mx-auto">
            If you're passionate about dance, willing to practice 4-6 hours daily, can handle irregular income, and are ready 
            to supplement with teaching—pursue it! Start early, build multiple income streams, and stay dedicated.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/emerging-careers" 
              className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors inline-flex items-center shadow-lg"
            >
              Explore Other Emerging Careers
            </Link>
            <a 
              href="#" 
              className="bg-pink-500/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-500/40 transition-colors inline-flex items-center border border-white/30"
            >
              Talk to Career Counselor
            </a>
          </div>
          <p className="text-pink-200 mt-4 text-sm">
            💬 Confused about dance vs traditional career? Get personalized guidance from our AI counselor
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDancerDetails;
