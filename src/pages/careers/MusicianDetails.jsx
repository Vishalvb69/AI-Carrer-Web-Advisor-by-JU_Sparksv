import React from 'react';
import { Link } from 'react-router-dom';
import { Music2, TrendingUp, Target, GraduationCap, Briefcase, Mic, Radio, Award } from 'lucide-react';

const MusicianDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/emerging-careers" className="hover:text-purple-600 transition-colors">Emerging Careers</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Musician / Singer</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Music2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Musician / Singer</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Create music, perform live, and build a career through concerts, playback singing, streaming platforms, 
              teaching, and music production. Express yourself through sound and touch millions of hearts.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Facts */}
        <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-700">5-10 years</div>
              <div className="text-purple-600 text-sm">To Establish</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700">₹3-40+ LPA</div>
              <div className="text-purple-600 text-sm">Income Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700">20%</div>
              <div className="text-purple-600 text-sm">Growth Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700">Diverse</div>
              <div className="text-purple-600 text-sm">Income Sources</div>
            </div>
          </div>
        </div>

        {/* Reality Check Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-6 mb-8 border-2 border-orange-400">
          <h3 className="text-2xl font-bold mb-3 flex items-center">
            <span className="mr-3">⚠️</span> Reality Check: Extremely Competitive
          </h3>
          <p className="text-orange-100 mb-4">
            <strong>Less than 1% of musicians earn sustainable income from performance alone.</strong> Bollywood has only 
            15-20 top playback singers. Most supplement with teaching, YouTube, live events, or background singing.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-white font-semibold">
              💡 Smart Strategy: Learn music production, build YouTube/Spotify presence, teach students, and perform at 
              weddings/corporate events. Classical music (Hindustani/Carnatic) needs 10-15 years of rigorous training.
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
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Aspiring Musician (0-3 years)</h3>
              <div className="text-3xl font-bold text-gray-700 mb-2">₹0-3 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Training, small gigs</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Small Events:</span>
                  <span className="font-semibold">₹3k-15k/show</span>
                </div>
                <div className="flex justify-between">
                  <span>Teaching:</span>
                  <span className="font-semibold">₹500-1.5k/hr</span>
                </div>
                <div className="flex justify-between">
                  <span>Reality:</span>
                  <span className="font-semibold text-red-600">Mostly teaching income</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Established Musician (5-10 years)</h3>
              <div className="text-3xl font-bold text-blue-700 mb-2">₹8-25 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Regular performances</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Concerts/Weddings:</span>
                  <span className="font-semibold">₹50k-3L/show</span>
                </div>
                <div className="flex justify-between">
                  <span>Studio Recording:</span>
                  <span className="font-semibold">₹20k-1L/song</span>
                </div>
                <div className="flex justify-between">
                  <span>Teaching/YouTube:</span>
                  <span className="font-semibold">₹30k-1L/month</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Top Musician (10+ years)</h3>
              <div className="text-3xl font-bold text-purple-700 mb-2">₹40-2 Cr+ LPA</div>
              <p className="text-sm text-gray-600 mb-4">Bollywood/top artist</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Playback Singing:</span>
                  <span className="font-semibold">₹5-20L/song</span>
                </div>
                <div className="flex justify-between">
                  <span>Live Concerts:</span>
                  <span className="font-semibold">₹10-50L/show</span>
                </div>
                <div className="flex justify-between">
                  <span>Brand Endorsements:</span>
                  <span className="font-semibold">₹50L-5 Cr/year</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">💰 Music Income Streams</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-green-800 text-lg">Spotify/YouTube Streams</div>
                <div className="text-gray-700 mt-2">₹0.3-0.5 per stream</div>
                <div className="text-purple-700 font-bold mt-1">1M streams = ₹3-5 lakh</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-green-800 text-lg">Wedding Performances</div>
                <div className="text-gray-700 mt-2">₹30k-5 lakh per event</div>
                <div className="text-purple-700 font-bold mt-1">Top income source</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-green-800 text-lg">Music Production</div>
                <div className="text-gray-700 mt-2">Compose for others</div>
                <div className="text-purple-700 font-bold mt-1">₹50k-10L per project</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
            <p className="text-yellow-900 font-medium">
              💡 <strong>Income Mix:</strong> Live Shows (35%) + Teaching (25%) + Studio Work (20%) + Streaming (10%) + 
              Music Production (10%). Top singers like Arijit Singh, Shreya Ghoshal earn ₹1-3 Cr+ from concerts alone.
            </p>
          </div>
        </div>

        {/* What Musicians Do */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">What Professional Musicians Do</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3 flex items-center">
                  <Mic className="w-5 h-5 mr-2" />
                  Performance & Practice
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Daily riyaz/practice (2-4 hours minimum)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Live concerts, stage shows, and festivals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Wedding and corporate event performances</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Voice care and vocal health maintenance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Studio Work</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Playback singing for films (Bollywood/regional)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Record original songs for albums/singles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Background vocals and jingles for ads</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Collaborate with music directors and producers</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center">
                  <Radio className="w-5 h-5 mr-2" />
                  Content & Teaching
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>YouTube covers, originals, and tutorials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Teach music at academies or privately</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Online courses and masterclasses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Social media content and reels</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Music Production</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Compose and produce music for others</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Arrange and orchestrate songs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Music direction for films/web series</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Release on Spotify, Apple Music, Gaana</span>
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
            <h2 className="text-3xl font-bold text-gray-900">Path to Professional Music Career</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">Step-by-Step Roadmap</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Start Training Early (Age 7-12 ideal for classical)</div>
                    <div className="text-gray-700 mt-1">Learn Hindustani/Carnatic classical (10+ years training) OR contemporary/Bollywood (3-5 years).</div>
                    <div className="text-sm text-indigo-700 mt-2">⏱️ Daily riyaz 2-4 hours non-negotiable</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Get Formal Training (5-10 years)</div>
                    <div className="text-gray-700 mt-1">Gurukul system for classical OR music degree (B.Mus, M.Mus) OR online courses + practice.</div>
                    <div className="text-sm text-indigo-700 mt-2">✓ Complete at least one music certification</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Participate in Competitions (3-5 years)</div>
                    <div className="text-gray-700 mt-1">Reality shows (Indian Idol, Sa Re Ga Ma), college fests, local competitions. Build confidence.</div>
                    <div className="text-sm text-indigo-700 mt-2">🏆 Even participation gives exposure</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Build Digital Presence (2-4 years)</div>
                    <div className="text-gray-700 mt-1">YouTube covers, Spotify originals, Instagram reels. Upload 2-3 videos per month consistently.</div>
                    <div className="text-sm text-indigo-700 mt-2">📱 10k+ subs helps with bookings</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">5</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Diversify Income (5+ years)</div>
                    <div className="text-gray-700 mt-1">Perform at weddings, teach students, do studio work, produce music. Network with music directors.</div>
                    <div className="text-sm text-indigo-700 mt-2">💰 Never rely on performance alone!</div>
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
                    <span><strong>Vocal Control</strong> - Sur, taal, pitch</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Music Theory</strong> - Ragas, scales, notes</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Stage Presence</strong> - Performance skills</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Music Production</strong> - DAW software</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Discipline</strong> - Daily riyaz consistency</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Music Genres in India</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <div className="font-semibold">Bollywood/Film Music</div>
                      <div className="text-sm">Highest demand & earnings</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <div className="font-semibold">Classical (Hindustani/Carnatic)</div>
                      <div className="text-sm">Prestige, cultural value</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <div className="font-semibold">Independent/Pop Music</div>
                      <div className="text-sm">Growing, streaming revenue</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <div className="font-semibold">Devotional/Ghazals</div>
                      <div className="text-sm">Niche, loyal audience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Paths */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Music Career Paths</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Playback Singer</h3>
              <p className="text-sm text-gray-700 mb-3">Sing for Bollywood/regional films</p>
              <div className="text-sm text-blue-700 font-semibold">₹5k-20L per song</div>
            </div>

            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">Live Performer</h3>
              <p className="text-sm text-gray-700 mb-3">Concerts, weddings, corporate events</p>
              <div className="text-sm text-green-700 font-semibold">₹30k-50L per show</div>
            </div>

            <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Music Teacher</h3>
              <p className="text-sm text-gray-700 mb-3">Teach at academies or privately</p>
              <div className="text-sm text-purple-700 font-semibold">₹500-2k per hour</div>
            </div>

            <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Music Producer</h3>
              <p className="text-sm text-gray-700 mb-3">Compose, arrange, produce for others</p>
              <div className="text-sm text-orange-700 font-semibold">₹50k-10L per project</div>
            </div>

            <div className="bg-pink-50 rounded-lg p-5 border border-pink-200">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Independent Artist</h3>
              <p className="text-sm text-gray-700 mb-3">Release own music on streaming platforms</p>
              <div className="text-sm text-pink-700 font-semibold">Streaming + concerts</div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-200">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Music Director</h3>
              <p className="text-sm text-gray-700 mb-3">Compose for films, web series, ads</p>
              <div className="text-sm text-indigo-700 font-semibold">₹2-50L per project</div>
            </div>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
              <span className="mr-2">✅</span> Why Choose Music Career
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Passion meets profession</strong> - Express through music</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Multiple income streams</strong> - Perform, teach, produce</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Fame potential</strong> - Recognition, awards, fan following</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Cultural preservation</strong> - Keep traditions alive</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Lifelong career</strong> - Can perform till old age</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Global opportunities</strong> - International concerts</span>
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
                <span><strong>Extreme competition</strong> - 1% make it to top</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Income instability</strong> - Irregular bookings</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Long training period</strong> - 10+ years for classical</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Nepotism barrier</strong> - Film industry hard to break into</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Must teach to survive</strong> - Performance rarely enough</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Family resistance</strong> - "Not a stable career"</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Is Music Career Right for You?</h2>
          <p className="text-purple-100 text-lg mb-6 max-w-3xl mx-auto">
            If you have natural talent, are willing to practice 2-4 hours daily for years, can handle rejection and 
            irregular income, and are ready to supplement with teaching—pursue music! Start early, diversify income, stay dedicated.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/emerging-careers" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center shadow-lg"
            >
              Explore All Emerging Careers
            </Link>
            <a 
              href="#" 
              className="bg-purple-500/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-500/40 transition-colors inline-flex items-center border border-white/30"
            >
              Talk to Career Counselor
            </a>
          </div>
          <p className="text-purple-200 mt-4 text-sm">
            💬 Unsure about music vs traditional career? Our AI counselor provides personalized guidance
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicianDetails;
