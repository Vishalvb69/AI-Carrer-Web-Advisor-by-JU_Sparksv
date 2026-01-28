import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, TrendingUp, Target, GraduationCap, Briefcase, Video, Mic, AlertCircle } from 'lucide-react';

const JournalismDetails = () => {
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
            <span className="text-gray-900 font-medium">Journalism & Mass Communication</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Newspaper className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Journalism & Mass Communication</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Tell stories that matter. Report news, create engaging content, and shape public opinion through various media platforms 
              including print, digital, television, and social media.
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
              <h3 className="text-2xl font-bold text-orange-900 mb-2">📰 Industry Reality Check</h3>
              <p className="text-orange-800 text-lg leading-relaxed">
                Traditional journalism is evolving rapidly. Print media is declining, but digital media, content creation, and social media 
                management are booming. Be ready to adapt - today's journalists need video editing, social media, SEO, and data analysis skills 
                along with great writing. <span className="font-bold">Freelancing and content creation often pay better than traditional newsrooms.</span>
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
              <div className="text-3xl font-bold text-yellow-700 mb-2">₹2.5-6 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Starting positions</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Junior Reporter:</span>
                  <span className="font-semibold">₹2.5-4 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Content Writer:</span>
                  <span className="font-semibold">₹3-5 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Social Media Executive:</span>
                  <span className="font-semibold">₹3-6 LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Mid-Level (3-7 years)</h3>
              <div className="text-3xl font-bold text-blue-700 mb-2">₹6-15 LPA</div>
              <p className="text-sm text-gray-600 mb-4">With experience</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Senior Reporter:</span>
                  <span className="font-semibold">₹6-10 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>News Anchor:</span>
                  <span className="font-semibold">₹8-15 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Content Manager:</span>
                  <span className="font-semibold">₹8-12 LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Senior (7+ years)</h3>
              <div className="text-3xl font-bold text-green-700 mb-2">₹15-50+ LPA</div>
              <p className="text-sm text-gray-600 mb-4">Top positions</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Editor/Bureau Chief:</span>
                  <span className="font-semibold">₹15-25 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Celebrity Anchor:</span>
                  <span className="font-semibold">₹25-100 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Successful YouTuber:</span>
                  <span className="font-semibold">₹20-200+ LPA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">💰 Alternative Income Streams</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">Freelancing</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Articles: ₹2,000-10,000 per piece</li>
                  <li>• Video editing: ₹5,000-25,000 per project</li>
                  <li>• Content strategy: ₹30,000-100,000/month retainer</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">Content Creation</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• YouTube: ₹1-10 lakh/month (100k+ subs)</li>
                  <li>• Sponsored content: ₹10k-5 lakh per post</li>
                  <li>• Brand partnerships: ₹50k-10 lakh per campaign</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-300 rounded-xl p-5">
            <p className="text-blue-900 font-medium">
              <strong>💡 Smart Strategy:</strong> Start in a newsroom to learn the craft (2-3 years), then transition to digital content, 
              freelancing, or start your own media channel. Many successful journalists earn more from their personal brands than traditional jobs.
            </p>
          </div>
        </div>

        {/* What Journalists Do */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Career Paths in Journalism</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center">
                  <Newspaper className="w-5 h-5 mr-2" />
                  Print & Digital Journalism
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Investigative reporting and news writing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Feature articles and long-form journalism</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Online news portals and blogs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Fact-checking and data journalism</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-3 flex items-center">
                  <Video className="w-5 h-5 mr-2" />
                  Broadcast Journalism
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>TV news anchoring and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Video production and editing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Documentary filmmaking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Live streaming and YouTube channels</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Digital Media & Content</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Social media management and strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>SEO content writing and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Brand storytelling and marketing content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Podcasting and audio content</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3">PR & Communications</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Corporate communications and PR</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Media relations and press releases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Crisis management and reputation building</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Event management and coverage</span>
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
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">Education Options</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">BA Journalism / Mass Communication (3 years)</div>
                    <div className="text-gray-700 mt-1">Foundation in journalism ethics, writing, reporting, and media law</div>
                    <div className="text-sm text-indigo-700 mt-2">💡 Most popular route, available at 200+ colleges</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">MA Journalism (2 years) - Optional</div>
                    <div className="text-gray-700 mt-1">Specialization in print, broadcast, or digital journalism</div>
                    <div className="text-sm text-indigo-700 mt-2">📚 Helpful for academic or senior editorial roles</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-900 text-lg">PG Diploma (1 year) - Alternative</div>
                    <div className="text-gray-700 mt-1">After any graduation, specialized journalism training</div>
                    <div className="text-sm text-indigo-700 mt-2">⚡ Quick route to switch careers into journalism</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Top Journalism Schools</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>IIMC Delhi</strong> - Top govt institute</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>SIMC Pune</strong> - Industry connections</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>MICA Ahmedabad</strong> - Mass comm focus</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>Jamia Millia</strong> - Strong reputation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>Christ University</strong> - Bangalore</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Essential Skills to Learn</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Writing & Editing</div>
                      <div className="text-sm">Clear, concise, engaging storytelling</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Video Production</div>
                      <div className="text-sm">Premiere Pro, Final Cut, shooting basics</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Social Media & SEO</div>
                      <div className="text-sm">Platform algorithms, audience growth</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Data Analysis</div>
                      <div className="text-sm">Google Analytics, data visualization</div>
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
            <h2 className="text-3xl font-bold text-gray-900">Journalism Specializations</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Political Journalism</h3>
              <p className="text-sm text-gray-700 mb-3">Cover elections, government, policy, and politics</p>
              <div className="text-sm text-blue-700 font-semibold">High prestige, moderate pay</div>
            </div>

            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">Sports Journalism</h3>
              <p className="text-sm text-gray-700 mb-3">Report on sports events, athletes, and analysis</p>
              <div className="text-sm text-green-700 font-semibold">Popular, good opportunities</div>
            </div>

            <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Business/Finance</h3>
              <p className="text-sm text-gray-700 mb-3">Markets, economy, corporate news coverage</p>
              <div className="text-sm text-purple-700 font-semibold">Higher pay, specialized</div>
            </div>

            <div className="bg-red-50 rounded-lg p-5 border border-red-200">
              <h3 className="text-lg font-bold text-red-800 mb-2">Entertainment/Lifestyle</h3>
              <p className="text-sm text-gray-700 mb-3">Movies, TV, celebrities, fashion, culture</p>
              <div className="text-sm text-red-700 font-semibold">Fun, competitive field</div>
            </div>

            <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Investigative Journalism</h3>
              <p className="text-sm text-gray-700 mb-3">Deep dives, exposés, long-form investigations</p>
              <div className="text-sm text-orange-700 font-semibold">Impactful, challenging</div>
            </div>

            <div className="bg-pink-50 rounded-lg p-5 border border-pink-200">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Content Creation</h3>
              <p className="text-sm text-gray-700 mb-3">YouTube, podcasts, social media journalism</p>
              <div className="text-sm text-pink-700 font-semibold">Growing, high potential</div>
            </div>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
              <span className="mr-2">✅</span> Why Choose Journalism
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Social impact</strong> - Hold power accountable, inform society</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Dynamic work</strong> - Every day is different, meet new people</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Creative expression</strong> - Tell stories your way</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Never boring</strong> - Fast-paced, exciting environment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Multiple paths</strong> - Print, TV, digital, freelance options</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Build personal brand</strong> - Recognition and influence</span>
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
                <span><strong>Job insecurity</strong> - Media layoffs, project-based work</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Irregular hours</strong> - Breaking news waits for no one</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Deadline pressure</strong> - Constant time-sensitive work</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Lower starting salaries</strong> - ₹2.5-4 LPA typically</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Online trolling</strong> - Face criticism and harassment</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Industry transition</strong> - Traditional media struggling</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Is Journalism Right for You?</h2>
          <p className="text-blue-100 text-lg mb-6 max-w-3xl mx-auto">
            If you're curious, love writing/storytelling, can handle pressure, and want to make a difference in society, journalism 
            could be your calling. Be ready to adapt - the best journalists today are multi-skilled: writing + video + social media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/arts" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center shadow-lg"
            >
              Explore Other Arts Careers
            </Link>
            <a 
              href="#" 
              className="bg-blue-500/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/40 transition-colors inline-flex items-center border border-white/30"
            >
              Talk to Career Counselor
            </a>
          </div>
          <p className="text-blue-200 mt-4 text-sm">
            💬 Still confused? Chat with our AI counselor for personalized guidance
          </p>
        </div>
      </div>
    </div>
  );
};

export default JournalismDetails;
