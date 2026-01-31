import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, TrendingUp, Target, GraduationCap, Briefcase, Trophy, Users, Twitch } from 'lucide-react';

const EsportsDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/stream-selection" className="hover:text-purple-600 transition-colors">Emerging Careers</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Professional Esports Player</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Gamepad2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Professional Esports Player</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Compete in professional gaming tournaments, build massive online communities, and turn your gaming passion 
              into a legitimate high-earning career in India's fastest-growing digital sport.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Facts */}
        <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-700">2-5 years</div>
              <div className="text-purple-600 text-sm">To Go Pro</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700">₹3-50+ LPA</div>
              <div className="text-purple-600 text-sm">Earning Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700">100M+</div>
              <div className="text-purple-600 text-sm">Indian Gaming Market</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700">40%</div>
              <div className="text-purple-600 text-sm">Annual Growth</div>
            </div>
          </div>
        </div>

        {/* Reality Check Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-6 mb-8 border-2 border-orange-400">
          <h3 className="text-2xl font-bold mb-3 flex items-center">
            <span className="mr-3">⚠️</span> Reality Check: Success Rate is LOW
          </h3>
          <p className="text-orange-100 mb-4">
            <strong>Only 0.1-1% of aspiring gamers become professional esports players.</strong> It requires exceptional skill, 
            dedication (8-12 hours daily practice), mental toughness, and luck. Most earn nothing for years before breaking through.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-white font-semibold">
              💡 Smart Strategy: Pursue this ALONGSIDE your education. Complete 12th/graduation while building gaming skills. 
              Have a backup plan. Treat it like an audition for acting—most don't make it, but you can try smartly.
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
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Amateur/Semi-Pro (Year 1-2)</h3>
              <div className="text-3xl font-bold text-gray-700 mb-2">₹0-3 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Building skills, no income</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Tournament Winnings:</span>
                  <span className="font-semibold">₹10k-50k/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Streaming Revenue:</span>
                  <span className="font-semibold">₹5k-30k/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Reality:</span>
                  <span className="font-semibold text-red-600">Most earn ₹0</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Professional Player (3-5 years)</h3>
              <div className="text-3xl font-bold text-blue-700 mb-2">₹5-15 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Signed with teams</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Team Salary:</span>
                  <span className="font-semibold">₹3-8 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Tournament Prizes:</span>
                  <span className="font-semibold">₹1-5 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Sponsorships:</span>
                  <span className="font-semibold">₹1-3 LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Top-Tier Pro (5+ years)</h3>
              <div className="text-3xl font-bold text-purple-700 mb-2">₹20-80+ LPA</div>
              <p className="text-sm text-gray-600 mb-4">Elite players only</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Team Salary:</span>
                  <span className="font-semibold">₹10-25 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>International Tournaments:</span>
                  <span className="font-semibold">₹5-30 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Brand Deals:</span>
                  <span className="font-semibold">₹5-25 LPA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">🎮 Popular Games & Prize Pools</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-green-800 text-lg">BGMI/PUBG Mobile</div>
                <div className="text-gray-700 mt-2">India's biggest esport</div>
                <div className="text-purple-700 font-bold mt-1">₹1-2 Cr tournament prizes</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-green-800 text-lg">Valorant</div>
                <div className="text-gray-700 mt-2">Global FPS champion</div>
                <div className="text-purple-700 font-bold mt-1">₹25-50 lakh tournaments</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-green-800 text-lg">Free Fire</div>
                <div className="text-gray-700 mt-2">Mobile esports leader</div>
                <div className="text-purple-700 font-bold mt-1">₹40 lakh+ prize pools</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
            <p className="text-yellow-900 font-medium">
              💰 <strong>Real Income Sources:</strong> Salary (30%) + Tournaments (25%) + Streaming (20%) + Sponsorships (15%) + 
              Content Creation (10%). Top Indian players like Mortal, Scout, Jonathan earn ₹50-80 LPA+ from combined sources.
            </p>
          </div>
        </div>

        {/* What Pro Players Do */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">What Professional Esports Players Do</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3 flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  Training & Practice
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>8-12 hours daily focused gameplay practice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Strategy sessions and team scrimmages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Analyze opponents' gameplay and tactics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Physical fitness and mental health training</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Competition</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Participate in online and offline tournaments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Represent teams in national/international events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Qualify for major championships and leagues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Handle pressure in high-stakes matches</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center">
                  <Twitch className="w-5 h-5 mr-2" />
                  Content Creation
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Stream daily on YouTube/Facebook Gaming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Create highlight videos and tutorials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Build fan community and engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Monetize through ads, subs, donations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Brand & Business</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Sponsorship deals with gaming brands</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Social media content and collaborations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Merchandise sales and brand partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Personal branding and public appearances</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* How to Become a Pro */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Path to Professional Gaming</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">Step-by-Step Roadmap</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Choose Your Game (Age 14-16)</div>
                    <div className="text-gray-700 mt-1">Pick ONE game and master it completely. BGMI, Valorant, or Free Fire recommended for India.</div>
                    <div className="text-sm text-indigo-700 mt-2">⏱️ Commit to 4-6 hours daily practice minimum</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Reach Top Rank (6-12 months)</div>
                    <div className="text-gray-700 mt-1">Achieve top 1% rank in your game. Study pro gameplay, learn game sense, master mechanics.</div>
                    <div className="text-sm text-indigo-700 mt-2">📊 Track stats: K/D ratio, win rate, accuracy</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Compete in Tournaments (1-2 years)</div>
                    <div className="text-gray-700 mt-1">Join amateur tournaments, scrims, and online qualifiers. Build reputation.</div>
                    <div className="text-sm text-indigo-700 mt-2">🏆 Start with free/small entry fee tournaments</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Build Online Presence (Ongoing)</div>
                    <div className="text-gray-700 mt-1">Stream on YouTube/Facebook, post highlights, grow followers. This is CRUCIAL for income.</div>
                      <div className="text-sm text-indigo-700 mt-2">🎥 Consistency &gt; Quality initially</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">5</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Get Scouted or Create Team (2-3 years)</div>
                    <div className="text-gray-700 mt-1">Join established esports organizations OR form your own competitive team.</div>
                    <div className="text-sm text-indigo-700 mt-2">✓ Network with players, coaches, team managers</div>
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
                    <span><strong>Game Sense</strong> - Prediction, positioning</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Mechanical Skill</strong> - Aim, reflexes</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Communication</strong> - Clear team calls</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Mental Toughness</strong> - Handle losses</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Adaptability</strong> - Meta changes</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Equipment Needed</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <div className="font-semibold">Gaming PC/Phone</div>
                      <div className="text-sm">₹40k-1.5L investment</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <div className="font-semibold">High-refresh Monitor</div>
                      <div className="text-sm">144Hz minimum for PC</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <div className="font-semibold">Gaming Peripherals</div>
                      <div className="text-sm">Mouse, keyboard, headset</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <div className="font-semibold">Stable Internet</div>
                      <div className="text-sm">100+ Mbps with low ping</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Indian Esports Orgs */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Top Indian Esports Organizations</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Team Soul</h3>
              <p className="text-sm text-gray-700 mb-3">Founded by Mortal, BGMI powerhouse</p>
              <div className="text-sm text-blue-700 font-semibold">₹5-15 LPA player salaries</div>
            </div>

            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">Orangutan</h3>
              <p className="text-sm text-gray-700 mb-3">Multi-game org, professional setup</p>
              <div className="text-sm text-green-700 font-semibold">₹6-12 LPA average</div>
            </div>

            <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Revenant Esports</h3>
              <p className="text-sm text-gray-700 mb-3">BGMI, Valorant teams, boot camps</p>
              <div className="text-sm text-purple-700 font-semibold">₹4-10 LPA contracts</div>
            </div>

            <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Velocity Gaming</h3>
              <p className="text-sm text-gray-700 mb-3">Valorant specialists, international play</p>
              <div className="text-sm text-orange-700 font-semibold">₹5-15 LPA top players</div>
            </div>

            <div className="bg-pink-50 rounded-lg p-5 border border-pink-200">
              <h3 className="text-lg font-bold text-pink-800 mb-2">God Like</h3>
              <p className="text-sm text-gray-700 mb-3">Cronos and ClutchGod's org, rising star</p>
              <div className="text-sm text-pink-700 font-semibold">₹6-18 LPA salaries</div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-200">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">8Bit Creatives</h3>
              <p className="text-sm text-gray-700 mb-3">Content + competition, Thug's org</p>
              <div className="text-sm text-indigo-700 font-semibold">₹5-12 LPA range</div>
            </div>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
              <span className="mr-2">✅</span> Why Choose Esports
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Turn passion into career</strong> - Get paid for gaming</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Young industry</strong> - Grow with India's esports boom</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Multiple income streams</strong> - Salary, prizes, streaming, brands</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Global opportunities</strong> - Compete internationally</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Fame & recognition</strong> - Huge fan following possible</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Work from anywhere</strong> - Remote competition and streaming</span>
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
                <span><strong>Extremely competitive</strong> - 0.1% success rate</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>No guaranteed income</strong> - Years of zero earnings possible</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Short career span</strong> - Peak performance ages 18-25</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Health risks</strong> - Eye strain, posture issues, mental burnout</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Family disapproval</strong> - Not seen as "real job" by many</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Game bans</strong> - Government can ban games (PUBG precedent)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Is Professional Esports Right for You?</h2>
          <p className="text-purple-100 text-lg mb-6 max-w-3xl mx-auto">
            If you're already in top 1% rank, have 4+ hours daily for practice, possess mental toughness to handle losses, 
            and are willing to invest 2-3 years with NO GUARANTEE of success—then give it a shot. But ALWAYS have a backup plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/stream-selection" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center shadow-lg"
            >
              Explore Other Careers
            </Link>
            <a 
              href="#" 
              className="bg-purple-500/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-500/40 transition-colors inline-flex items-center border border-white/30"
            >
              Talk to Career Counselor
            </a>
          </div>
          <p className="text-purple-200 mt-4 text-sm">
            💬 Confused about gaming vs traditional career? Our AI counselor can help you decide smartly
          </p>
        </div>
      </div>
    </div>
  );
};

export default EsportsDetails;
