import React from 'react';
import { Link } from 'react-router-dom';
import { Video, TrendingUp, Target, GraduationCap, Briefcase, Youtube, Camera, DollarSign } from 'lucide-react';

const ContentCreatorDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/emerging-careers" className="hover:text-red-600 transition-colors">Emerging Careers</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Content Creator / YouTuber</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Youtube className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Content Creator / YouTuber</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Create videos, build massive audiences, and monetize your creativity through YouTube, Instagram, and other platforms. 
              Turn your passion for storytelling, education, or entertainment into a full-time career.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Facts */}
        <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-700">1-3 years</div>
              <div className="text-red-600 text-sm">To Monetize</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-700">₹0-50+ LPA</div>
              <div className="text-red-600 text-sm">Income Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-700">467M+</div>
              <div className="text-red-600 text-sm">YouTube Users in India</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-700">35%</div>
              <div className="text-red-600 text-sm">Annual Growth</div>
            </div>
          </div>
        </div>

        {/* Reality Check Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-6 mb-8 border-2 border-orange-400">
          <h3 className="text-2xl font-bold mb-3 flex items-center">
            <span className="mr-3">⚠️</span> Reality Check: Success Takes Time
          </h3>
          <p className="text-orange-100 mb-4">
            <strong>Only 1-3% of content creators earn sustainable income.</strong> Most earn ₹0 for the first 6-18 months. 
            You need 1000 subscribers + 4000 watch hours for YouTube monetization. Consistency is EVERYTHING.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-white font-semibold">
              💡 Smart Strategy: Start while studying or working. Create 2-3 videos per week for 12 months minimum. 
              Track analytics, improve quality, engage audience. Treat it as a side hustle until it matches your income.
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
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Starting Phase (0-2 years)</h3>
              <div className="text-3xl font-bold text-gray-700 mb-2">₹0-2 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Building audience</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>YouTube Ad Revenue:</span>
                  <span className="font-semibold">₹5k-20k/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Brand Collaborations:</span>
                  <span className="font-semibold">₹0-10k/video</span>
                </div>
                <div className="flex justify-between">
                  <span>Reality:</span>
                  <span className="font-semibold text-red-600">Most earn ₹0</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Established Creator (2-4 years)</h3>
              <div className="text-3xl font-bold text-blue-700 mb-2">₹5-20 LPA</div>
              <p className="text-sm text-gray-600 mb-4">50k-500k subscribers</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Ad Revenue:</span>
                  <span className="font-semibold">₹30k-1L/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Brand Deals:</span>
                  <span className="font-semibold">₹20k-1L/video</span>
                </div>
                <div className="flex justify-between">
                  <span>Other Income:</span>
                  <span className="font-semibold">₹10k-50k/month</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Top Creator (5+ years)</h3>
              <div className="text-3xl font-bold text-purple-700 mb-2">₹30-80+ LPA</div>
              <p className="text-sm text-gray-600 mb-4">1M+ subscribers</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Ad Revenue:</span>
                  <span className="font-semibold">₹2-5L/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Brand Partnerships:</span>
                  <span className="font-semibold">₹2-10L/video</span>
                </div>
                <div className="flex justify-between">
                  <span>Products/Courses:</span>
                  <span className="font-semibold">₹1-5L/month</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">📊 YouTube Monetization Model</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-green-800 text-lg">₹100-500 per 1000 views</div>
                <div className="text-gray-700 mt-2">Ad revenue (CPM)</div>
                <div className="text-purple-700 font-bold mt-1">Finance/Tech = Higher CPM</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-green-800 text-lg">1M views = ₹1-5 lakh</div>
                <div className="text-gray-700 mt-2">Monthly earnings potential</div>
                <div className="text-purple-700 font-bold mt-1">Entertainment = Lower CPM</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-green-800 text-lg">Brand deals = 2-10x</div>
                <div className="text-gray-700 mt-2">More than ad revenue</div>
                <div className="text-purple-700 font-bold mt-1">Main income source</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
            <p className="text-yellow-900 font-medium">
              💰 <strong>Real Income Sources:</strong> YouTube Ads (30%) + Brand Deals (40%) + Affiliate Marketing (15%) + 
              Own Products/Courses (10%) + Sponsorships (5%). Top Indian creators like CarryMinati, Ashish Chanchlani earn ₹10-20 Cr+ yearly.
            </p>
          </div>
        </div>

        {/* What Content Creators Do */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">What Content Creators Do Daily</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-red-50 rounded-lg p-5 border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-3 flex items-center">
                  <Camera className="w-5 h-5 mr-2" />
                  Content Production
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Research trending topics and audience interests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Script writing and video planning (storyboard)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Filming content (2-5 hours per video)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Video editing, thumbnails, titles, descriptions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Audience Engagement</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Reply to comments and community posts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Social media management (Instagram, Twitter)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Live streams and Q&A sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Build community and handle fan interactions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Business & Monetization
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Negotiate brand deals and sponsorships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Analyze YouTube analytics and optimize content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Create/sell own products, courses, merchandise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Affiliate marketing and revenue diversification</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Growth & Strategy</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Study competitors and trending formats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>SEO optimization (titles, tags, descriptions)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Collaborations with other creators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Experiment with new content formats</span>
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
            <h2 className="text-3xl font-bold text-gray-900">Path to Successful Content Creation</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">Step-by-Step Roadmap</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Choose Your Niche (Week 1)</div>
                    <div className="text-gray-700 mt-1">Pick ONE topic: Tech reviews, comedy, education, finance, cooking, vlogging, gaming commentary, etc.</div>
                    <div className="text-sm text-indigo-700 mt-2">✓ Pick what you can talk about for years without getting bored</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Get Basic Equipment (₹15k-50k)</div>
                    <div className="text-gray-700 mt-1">Smartphone camera (start) → DSLR/Mirrorless (later), mic, lighting, editing software (DaVinci Resolve free).</div>
                    <div className="text-sm text-indigo-700 mt-2">💡 Don't wait for perfect gear—start with phone!</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Upload Consistently (6-12 months)</div>
                    <div className="text-gray-700 mt-1">Post 2-3 videos per week minimum. Quality improves with practice. Focus on watch time and click-through rate.</div>
                    <div className="text-sm text-indigo-700 mt-2">⚠️ First 50 videos will likely be bad—that's normal!</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Hit Monetization Threshold (12-18 months)</div>
                    <div className="text-gray-700 mt-1">Reach 1000 subscribers + 4000 watch hours. Apply for YouTube Partner Program.</div>
                    <div className="text-sm text-indigo-700 mt-2">📊 Study analytics religiously—improve retention rate</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">5</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">Scale & Diversify (2+ years)</div>
                    <div className="text-gray-700 mt-1">Get brand deals, create digital products, build multiple income streams. Hire editors/assistants.</div>
                    <div className="text-sm text-indigo-700 mt-2">💰 Don't rely only on ad revenue—diversify income!</div>
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
                    <span><strong>Video Editing</strong> - Premiere Pro, Final Cut</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Storytelling</strong> - Hook, build-up, payoff</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>On-camera Presence</strong> - Confidence, energy</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>SEO & Analytics</strong> - YouTube algorithm</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Consistency</strong> - Show up every week</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Popular Niches in India</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <div className="font-semibold">Tech & Finance</div>
                      <div className="text-sm">Highest CPM (₹300-500/1000 views)</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <div className="font-semibold">Comedy & Entertainment</div>
                      <div className="text-sm">Highest reach, lower CPM</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <div className="font-semibold">Education & How-To</div>
                      <div className="text-sm">Good CPM, loyal audience</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <div className="font-semibold">Lifestyle Vlogs</div>
                      <div className="text-sm">Brand deals potential</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Content Types */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Content Formats That Work</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Educational Content</h3>
              <p className="text-sm text-gray-700 mb-3">Tutorials, skill courses, exam prep</p>
              <div className="text-sm text-blue-700 font-semibold">Examples: Physics Wallah, Khan Academy</div>
            </div>

            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">Comedy Sketches</h3>
              <p className="text-sm text-gray-700 mb-3">Roasts, observations, parodies</p>
              <div className="text-sm text-green-700 font-semibold">Examples: CarryMinati, Ashish</div>
            </div>

            <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Tech Reviews</h3>
              <p className="text-sm text-gray-700 mb-3">Gadgets, apps, comparisons</p>
              <div className="text-sm text-purple-700 font-semibold">Examples: Technical Guruji, Geeky Ranjit</div>
            </div>

            <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Finance & Business</h3>
              <p className="text-sm text-gray-700 mb-3">Stock market, investment tips</p>
              <div className="text-sm text-orange-700 font-semibold">Examples: Labour Law Advisor, Akshat</div>
            </div>

            <div className="bg-pink-50 rounded-lg p-5 border border-pink-200">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Lifestyle Vlogs</h3>
              <p className="text-sm text-gray-700 mb-3">Daily life, travel, experiences</p>
              <div className="text-sm text-pink-700 font-semibold">Examples: Flying Beast, Gaurav Taneja</div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-200">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Gaming Commentary</h3>
              <p className="text-sm text-gray-700 mb-3">Gameplay with commentary</p>
              <div className="text-sm text-indigo-700 font-semibold">Examples: Techno Gamerz, Total Gaming</div>
            </div>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
              <span className="mr-2">✅</span> Why Choose Content Creation
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Be your own boss</strong> - Complete creative freedom</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Work from anywhere</strong> - Just need camera & laptop</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Multiple income streams</strong> - Ads, brands, products</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>No degree required</strong> - Pure skill and creativity</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Massive reach</strong> - Build audience of millions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Fame & influence</strong> - Impact people's lives</span>
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
                <span><strong>No income initially</strong> - 12-18 months of zero earnings</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Algorithm dependency</strong> - One change can kill channel</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Constant content pressure</strong> - Must post consistently</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Mental health strain</strong> - Burnout, negative comments</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>No job security</strong> - Income fluctuates monthly</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 text-xl">−</span>
                <span><strong>Privacy loss</strong> - Public life, trolling, criticism</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Is Content Creation Right for You?</h2>
          <p className="text-red-100 text-lg mb-6 max-w-3xl mx-auto">
            If you love creating videos, can handle rejection and criticism, have patience for 1-2 years with no income, 
            and are willing to post consistently—start NOW. But keep studying/working until YouTube income matches your salary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/emerging-careers" 
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center shadow-lg"
            >
              Explore Other Emerging Careers
            </Link>
            <a 
              href="#" 
              className="bg-red-500/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-500/40 transition-colors inline-flex items-center border border-white/30"
            >
              Talk to Career Counselor
            </a>
          </div>
          <p className="text-red-200 mt-4 text-sm">
            💬 Should you pursue content creation or traditional career? Get personalized advice from our AI counselor
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentCreatorDetails;
