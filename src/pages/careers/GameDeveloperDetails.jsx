import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, TrendingUp, Target, GraduationCap, Briefcase, AlertCircle } from 'lucide-react';

const GameDeveloperDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/engineering" className="hover:text-purple-600 transition-colors">Science (PCM)</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Game Developer</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Gamepad2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Game Developer / Game Designer</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Create immersive interactive experiences. Design game mechanics, code engines, build worlds, 
              and entertain millions of players across PC, consoles, and mobile platforms.
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
              <h3 className="text-2xl font-bold text-orange-900 mb-2">🎮 Industry Reality Check</h3>
              <p className="text-orange-800 text-lg leading-relaxed">
                Game development is one of the fastest-growing industries globally, with India emerging as a major hub. 
                The industry is booming with <span className="font-bold">₹25% annual growth, ₹50+ LPA salaries for experienced developers</span>, 
                and massive opportunities in mobile gaming, VR/AR, and indie game development. However, competition is fierce, 
                crunch periods are intense, and game success is unpredictable.
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
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">Entry Level (0-2 years)</h3>
              <div className="text-3xl font-bold text-yellow-700 mb-2">₹6-12 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Starting positions</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Junior Game Dev:</span>
                  <span className="font-semibold">₹6-10 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Gameplay Programmer:</span>
                  <span className="font-semibold">₹8-12 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Graphics Programmer:</span>
                  <span className="font-semibold">₹10-14 LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Mid-Level (2-5 years)</h3>
              <div className="text-3xl font-bold text-blue-700 mb-2">₹15-30 LPA</div>
              <p className="text-sm text-gray-600 mb-4">With experience</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Senior Developer:</span>
                  <span className="font-semibold">₹18-28 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Game Designer:</span>
                  <span className="font-semibold">₹15-25 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Tech Lead:</span>
                  <span className="font-semibold">₹25-35 LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Senior (5+ years)</h3>
              <div className="text-3xl font-bold text-green-700 mb-2">₹30-50+ LPA</div>
              <p className="text-sm text-gray-600 mb-4">Top positions</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Game Director:</span>
                  <span className="font-semibold">₹40-60 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Studio Lead:</span>
                  <span className="font-semibold">₹50-80 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Indie Success:</span>
                  <span className="font-semibold">₹1-100 crore+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">💰 Alternative Income Streams</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">Indie Game Development</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Successful indie game: ₹1-50 crore+ lifetime revenue</li>
                  <li>• Mobile games: ₹10-100 lakh/month (with ads/IAP)</li>
                  <li>• App store revenue: ₹5-50 lakh per successful game</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">Freelancing & Consulting</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Game dev consulting: ₹2-10 lakh/month</li>
                  <li>• Custom game development: ₹20-100 lakh per project</li>
                  <li>• Game asset creation: ₹10k-1 lakh per asset</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-300 rounded-xl p-5">
            <p className="text-blue-900 font-medium">
              <strong>💡 Smart Strategy:</strong> Start at a game studio (2-3 years), learn the process and build a portfolio, 
              then transition to indie game development or join a promising startup. Many successful indie developers earn more than studio employees.
            </p>
          </div>
        </div>

        {/* What Game Developers Do */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Career Paths in Game Development</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Programming Roles</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Gameplay programmer - Game mechanics and logic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Graphics programmer - Engine and visual rendering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Tools programmer - Development tools and pipeline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>AI programmer - NPC behavior and algorithms</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Design Roles</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Game designer - Game mechanics and level design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Level designer - Create engaging game worlds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>UX designer - User interface and experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Narrative designer - Story and dialogue</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Art & Audio</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>3D artist - Character and environment modeling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Visual effects artist - Particles and animations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Audio designer - Sound effects and music</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Animator - Character and object animations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Management & Production</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Producer - Project management and coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Quality assurance - Testing and bug finding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Game director - Vision and creative leadership</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Studio lead - Team and business management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Path */}
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
                    <div className="font-semibold text-purple-900 text-lg">B.Tech Computer Science (4 years)</div>
                    <div className="text-gray-700 mt-1">Strong foundation in programming, algorithms, graphics, and software architecture</div>
                    <div className="text-sm text-purple-700 mt-2">💡 Traditional route, most respected by studios</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div className="flex-1">
                    <div className="font-semibold text-purple-900 text-lg">Game Design Degree (3-4 years)</div>
                    <div className="text-gray-700 mt-1">Specialized in game development, design fundamentals, and industry tools</div>
                    <div className="text-sm text-purple-700 mt-2">🎮 Focused curriculum, hands-on game projects</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div className="flex-1">
                    <div className="font-semibold text-purple-900 text-lg">Game Dev Bootcamp (3-6 months)</div>
                    <div className="text-gray-700 mt-1">Intensive, practical training in game engines and development</div>
                    <div className="text-sm text-purple-700 mt-2">⚡ Quick entry for career switchers, industry experience required</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                  <div className="flex-1">
                    <div className="font-semibold text-purple-900 text-lg">Self-taught (Portfolio-based)</div>
                    <div className="text-gray-700 mt-1">Learn through online resources, create games, build portfolio</div>
                    <div className="text-sm text-purple-700 mt-2">💪 Many successful developers self-taught, requires discipline</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Top Game Dev Schools (India)</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>MAAC</strong> - Multiple centers, industry partnerships</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>IIT Bombay Game Dev Club</strong> - Incubation support</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>DSEU IT</strong> - Delhi game development</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>Arena Multimedia</strong> - Game design programs</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Essential Skills to Learn</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Game Engines</div>
                      <div className="text-sm">Unity, Unreal Engine, Godot mastery</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Programming Languages</div>
                      <div className="text-sm">C++, C#, Python, scripting languages</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">3D Graphics & Math</div>
                      <div className="text-sm">OpenGL, DirectX, vectors, matrices</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Game Design Theory</div>
                      <div className="text-sm">Mechanics, level design, user experience</div>
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
            <h2 className="text-3xl font-bold text-gray-900">Game Development Specializations</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Mobile Gaming</h3>
              <p className="text-sm text-gray-700 mb-3">iOS, Android game development</p>
              <div className="text-sm text-purple-700 font-semibold">Fastest growing segment</div>
            </div>

            <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Console Gaming</h3>
              <p className="text-sm text-gray-700 mb-3">PS5, Xbox, Nintendo games</p>
              <div className="text-sm text-blue-700 font-semibold">Highest budgets & prestige</div>
            </div>

            <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
              <h3 className="text-lg font-bold text-orange-800 mb-2">PC Gaming</h3>
              <p className="text-sm text-gray-700 mb-3">Steam, Epic Games platforms</p>
              <div className="text-sm text-orange-700 font-semibold">Indie game hub</div>
            </div>

            <div className="bg-red-50 rounded-lg p-5 border border-red-200">
              <h3 className="text-lg font-bold text-red-800 mb-2">VR/AR Games</h3>
              <p className="text-sm text-gray-700 mb-3">Virtual and augmented reality</p>
              <div className="text-sm text-red-700 font-semibold">Emerging, high potential</div>
            </div>

            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">Esports Games</h3>
              <p className="text-sm text-gray-700 mb-3">Competitive multiplayer games</p>
              <div className="text-sm text-green-700 font-semibold">Booming industry</div>
            </div>

            <div className="bg-pink-50 rounded-lg p-5 border border-pink-200">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Indie Games</h3>
              <p className="text-sm text-gray-700 mb-3">Independent game creation</p>
              <div className="text-sm text-pink-700 font-semibold">Creative freedom, risky</div>
            </div>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
              <span className="mr-2">✅</span> Why Choose Game Development
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Booming industry</strong> - 25% annual growth, 1 million+ jobs globally</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>High salaries</strong> - ₹50+ LPA for experienced developers</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Creative passion</strong> - Build interactive experiences, entertain millions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Indie success potential</strong> - Create billion-rupee games independently</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Global opportunities</strong> - Work with studios worldwide</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Continuous innovation</strong> - AI, VR, AR transforming the field</span>
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
                <span><strong>Crunch periods</strong> - 80-100 hour weeks before game launch</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Game cancellation risk</strong> - Projects can be cancelled anytime</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Success unpredictable</strong> - Even good games may fail commercially</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Fierce competition</strong> - Millions of developers worldwide</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Continuous skill updates</strong> - Technology evolves rapidly</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Indie risk</strong> - High startup costs and failure rate for indie games</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Is Game Development Right for You?</h2>
          <p className="text-purple-100 text-lg mb-6 max-w-3xl mx-auto">
            If you're passionate about gaming, strong in programming/design, can handle deadlines and competition, 
            and dream of creating experiences that millions play, game development is your calling. This is the future of entertainment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/engineering" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center shadow-lg"
            >
              Explore Other Tech Careers
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

export default GameDeveloperDetails;
