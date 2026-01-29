import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Film, 
  Award,
  BookOpen,
  Briefcase,
  Gamepad2,
  Monitor,
  Target,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Building,
  Zap,
  Clapperboard,
  Video,
  Layers
} from 'lucide-react'

const AnimationVFXDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/arts" className="hover:text-blue-600 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Arts
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Animation & VFX</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Digital Creative Professional
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Animation & VFX
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Create stunning visual effects for films, animated movies, TV shows, web series, games, and advertising. Use cutting-edge software like Maya, Blender, After Effects, and Unreal Engine to bring imagination to life. A technical yet creative career with growing demand in India's booming OTT and gaming industry.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹3-8 LPA</div>
                  <div className="text-sm text-gray-200">Starting Package</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹12-35+ LPA</div>
                  <div className="text-sm text-gray-200">Senior/Supervisor</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">3-4 Years</div>
                  <div className="text-sm text-gray-200">Degree Duration</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Film className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">3D Animation</h3>
                <p className="text-sm text-gray-200">Characters & Modeling</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Zap className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">VFX</h3>
                <p className="text-sm text-gray-200">Visual Effects</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Gamepad2 className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Game Design</h3>
                <p className="text-sm text-gray-200">Gaming Graphics</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Video className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Motion Graphics</h3>
                <p className="text-sm text-gray-200">Ads & UI Animation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check Banner */}
      <section className="bg-amber-50 border-t-4 border-amber-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertTriangle className="h-6 w-6 text-amber-600 mr-2" />
            Reality Check: What They Don't Tell You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Deadline Pressure INTENSE</h3>
              <p className="text-sm text-gray-700">Film release dates fixed. "Crunch time" = 12-16 hour days for weeks. Work weekends before launches. High stress, tight deadlines, no extensions</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Long Render Times = Waiting</h3>
              <p className="text-sm text-gray-700">Complex scenes take hours/days to render. Submit work, wait 8 hours to see result. Technical glitches frustrating. Need patience</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Client Revisions Endless</h3>
              <p className="text-sm text-gray-700">"Make it pop", "can you change everything?", 50 revisions normal. Directors/clients keep changing mind. Redo work constantly</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Project-Based Employment</h3>
              <p className="text-sm text-gray-700">Hired for movie/series, laid off after completion. Job hopping common. 3-6 month contracts. Income gaps between projects</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Health Issues from Screen Time</h3>
              <p className="text-sm text-gray-700">10-12 hours daily staring at screens. Eye strain, back pain, carpal tunnel common. Poor posture, sedentary lifestyle impacts health</p>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <DollarSign className="h-8 w-8 text-green-600 mr-3" />
            Salary Expectations (India)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Junior Animator/Artist</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹3-6 LPA</div>
              <p className="text-sm text-gray-600 mb-4">0-2 years, learning</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• 3D modeler: ₹3-5 LPA</li>
                <li>• Animator (junior): ₹3.5-6 LPA</li>
                <li>• Motion graphics: ₹3-5.5 LPA</li>
                <li>• Roto/prep artist: ₹3-4.5 LPA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Mid-Level Artist</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">₹6-12 LPA</div>
              <p className="text-sm text-gray-600 mb-4">2-5 years experience</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• VFX artist: ₹6-10 LPA</li>
                <li>• Character animator: ₹6-11 LPA</li>
                <li>• Lighting artist: ₹5-9 LPA</li>
                <li>• Compositor: ₹6-10 LPA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Senior Artist/Lead</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹12-20 LPA</div>
              <p className="text-sm text-gray-600 mb-4">5-10 years, specialist</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Senior animator: ₹12-18 LPA</li>
                <li>• VFX supervisor: ₹14-20 LPA</li>
                <li>• Lead compositor: ₹12-17 LPA</li>
                <li>• Technical director: ₹13-19 LPA</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-sm border-2 border-orange-300">
              <h3 className="text-lg font-semibold mb-2">Supervisor/CG Head</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">₹20-40L+</div>
              <p className="text-sm text-gray-600 mb-4">10+ years, leadership</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• VFX supervisor: ₹20-35 LPA</li>
                <li>• Animation director: ₹22-38 LPA</li>
                <li>• CG head: ₹25-40 LPA</li>
                <li>• Hollywood studios: $60-120K</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Work & Responsibilities */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            What Animation & VFX Artists Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Key Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Film className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>3D Modeling & Animation:</strong> Create characters, environments, props. Animate movements, expressions, lip-sync</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>VFX & Compositing:</strong> Integrate CGI with live footage, explosions, magical effects, environment enhancements</span>
                </li>
                <li className="flex items-start">
                  <Monitor className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Lighting & Rendering:</strong> Set up realistic lighting, materials, textures. Render final frames, optimize render times</span>
                </li>
                <li className="flex items-start">
                  <Gamepad2 className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Game Assets:</strong> Create game characters, environments, UI elements, optimize for real-time rendering</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Typical Work Breakdown</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Production Work (60%)</h4>
                  <p className="text-sm text-gray-700">Modeling, animating, compositing, rendering. Actual creative execution work</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Revisions & Feedback (25%)</h4>
                  <p className="text-sm text-gray-700">Client/director notes, rework shots, multiple versions, approvals</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Meetings & Coordination (10%)</h4>
                  <p className="text-sm text-gray-700">Daily standups, reviews, team coordination, pipeline discussions</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Learning & R&D (5%)</h4>
                  <p className="text-sm text-gray-700">New tools, techniques, plugins, tutorials, skill upgrades</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Path & Entrance Exams */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
            Education Path & Top Institutes
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border mb-8">
            <h3 className="text-xl font-semibold mb-6">Degree/Diploma Programs (3-4 Years)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Top Animation Institutes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>NID Ahmedabad</strong> - Animation Film Design</li>
                  <li>• <strong>Satyajit Ray Film Institute</strong> - Kolkata</li>
                  <li>• <strong>MAAC</strong> - Multiple centers (most popular)</li>
                  <li>• <strong>Arena Animation</strong> - Pan India</li>
                  <li>• <strong>Frameboxx</strong> - Animation & VFX</li>
                  <li>• <strong>Toonz Academy</strong> - Kerala</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">University Programs</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Lovely Professional University (LPU)</li>
                  <li>• Amity University - Animation</li>
                  <li>• MIT Institute of Design - Pune</li>
                  <li>• Manipal University - Digital Media</li>
                  <li><strong>Fees:</strong> ₹3-10L total</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-800"><strong>Entry:</strong> No strict entrance exam for most institutes. Portfolio review for premium colleges like NID. Eligibility: 10+2 any stream. Duration: 3-4 years degree or 1-2 year diploma. Courses: Maya, 3ds Max, Blender, After Effects, Nuke, ZBrush, Unreal Engine. <strong>Reality:</strong> Your demo reel (portfolio) matters more than degree. Many self-taught via YouTube/online courses get jobs</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">Online Learning & Self-Study</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Online Platforms</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Udemy - Maya, Blender courses</li>
                  <li>• Coursera - VFX specializations</li>
                  <li>• Pluralsight - Industry tools</li>
                  <li>• YouTube - Free tutorials</li>
                  <li>• CG Cookie - Blender mastery</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Software Training</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Maya/3ds Max</strong> - 3D modeling</li>
                  <li>• <strong>Blender</strong> - Free, powerful</li>
                  <li>• <strong>After Effects</strong> - Motion graphics</li>
                  <li>• <strong>Nuke</strong> - Compositing</li>
                  <li>• <strong>Unreal Engine</strong> - Game dev</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Portfolio Building</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Create demo reel (1-2 min)</li>
                  <li>• Show best work only</li>
                  <li>• Personal projects crucial</li>
                  <li>• ArtStation/Behance portfolio</li>
                  <li>• Breakdown videos (process)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Required */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="h-8 w-8 text-yellow-600 mr-3" />
            Essential Skills & Software
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">3D & Animation Software</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Maya/3ds Max</strong> - Industry standard 3D</li>
                <li>• <strong>Blender</strong> - Free, open-source</li>
                <li>• <strong>Cinema 4D</strong> - Motion graphics</li>
                <li>• <strong>ZBrush</strong> - Digital sculpting</li>
                <li>• <strong>Substance Painter</strong> - Texturing</li>
                <li>• Modeling, rigging, animation</li>
                <li>• Character design, environments</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-green-900">VFX & Compositing</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>After Effects</strong> - Motion graphics, VFX</li>
                <li>• <strong>Nuke</strong> - Professional compositing</li>
                <li>• <strong>Fusion</strong> - Node-based compositing</li>
                <li>• <strong>Houdini</strong> - Procedural VFX</li>
                <li>• <strong>Premiere/DaVinci</strong> - Video editing</li>
                <li>• Green screen, rotoscoping</li>
                <li>• Tracking, match-moving</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Soft Skills (CRITICAL!)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Attention to detail (pixel-perfect)</li>
                <li>• Patience (long render times)</li>
                <li>• Time management (deadlines)</li>
                <li>• Communication (feedback loops)</li>
                <li>• Problem-solving (technical issues)</li>
                <li>• Continuous learning (new tools)</li>
                <li>• Teamwork (pipeline coordination)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Top Employers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Building className="h-8 w-8 text-blue-600 mr-3" />
            Career Paths in Animation & VFX
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border border-blue-200">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Film & VFX Studios</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Red Chillies VFX</strong> - Bollywood VFX</li>
                <li><strong>Prana Studios</strong> - Hollywood projects</li>
                <li><strong>Tau Films</strong> - VFX & animation</li>
                <li><strong>Prime Focus</strong> - Post-production</li>
                <li><strong>NY VFXWAALA</strong> - Regional films</li>
                <li><strong>DQ Entertainment</strong> - Animation</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border border-green-200">
              <h3 className="font-semibold text-lg mb-4 text-green-900">OTT & Digital Content</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Netflix India</strong> - Original content</li>
                <li><strong>Amazon Prime</strong> - Web series</li>
                <li><strong>Disney+ Hotstar</strong> - Shows</li>
                <li><strong>Digital agencies</strong> - Ads, promos</li>
                <li><strong>YouTube studios</strong> - Content creation</li>
                <li><strong>Production houses</strong> - TV serials</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border border-purple-200">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Gaming & Tech</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Game studios</strong> - Zynga, Nazara, Moonfrog</li>
                <li><strong>Mobile game dev</strong> - Dream11, MPL</li>
                <li><strong>Ubisoft India</strong> - AAA games</li>
                <li><strong>Architectural viz</strong> - Real estate renders</li>
                <li><strong>Freelance</strong> - Upwork, Fiverr</li>
                <li><strong>Own studio</strong> - Freelance clients</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Year Roadmap */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Target className="h-8 w-8 text-purple-600 mr-3" />
            Career Roadmap in Animation & VFX
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 0-2: Build Skills & Demo Reel</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Entry Level</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Learn Software:</strong> Master Maya/Blender + After Effects. 6-12 months intensive practice, tutorials, personal projects</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Build Demo Reel:</strong> Create 1-2 min portfolio showcasing best work. Quality over quantity. Upload to ArtStation/Behance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>First Job:</strong> Junior animator/modeler (₹3-6 LPA). Studios hire freshers. Internships common at ₹10-20K/month</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 2-5: Specialize & Mid-Level</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Growth Phase</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Mid-Level Artist:</strong> (₹6-12 LPA) Specialize in character animation, VFX, lighting, or compositing. Handle complex shots</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Choose Path:</strong> Film VFX vs Gaming vs Advertising. Each has different workflows, tools, culture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Freelance Side:</strong> Take freelance projects on Upwork/Fiverr. Build client base. Test entrepreneurship waters</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 5-10+: Senior/Supervisor Role</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Established</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Senior Artist/Lead:</strong> (₹12-20 LPA) Lead teams, quality control, shot approvals, mentor juniors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>VFX Supervisor:</strong> (₹20-35 LPA) Overall VFX head, client meetings, creative decisions, pipeline management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Options:</strong> Move to Hollywood studios (2-3x pay), start own VFX boutique, become technical director, teach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Difficulty Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <TrendingUp className="h-8 w-8 text-red-600 mr-3" />
            Challenges & Difficulty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                High Difficulty
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Advanced lighting & shading</li>
                <li>• Realistic character animation</li>
                <li>• Complex compositing (Nuke)</li>
                <li>• Procedural effects (Houdini)</li>
                <li>• Technical problem-solving</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                Moderate Challenges
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 3D modeling & texturing</li>
                <li>• Rigging basics</li>
                <li>• Motion graphics (After Effects)</li>
                <li>• Rendering optimization</li>
                <li>• Pipeline coordination</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Manageable Aspects
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Basic 3D modeling</li>
                <li>• Simple animation principles</li>
                <li>• Rotoscoping & cleanup</li>
                <li>• Video editing</li>
                <li>• Portfolio building</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Specializations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Layers className="h-8 w-8 text-purple-600 mr-3" />
            Animation & VFX Specialization Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Film className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">3D Animation</h3>
              <p className="text-gray-600 mb-4 text-sm">Character animation, creature FX, crowd simulation, facial animation, motion capture cleanup</p>
              <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹4-30 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Zap className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">VFX (Visual Effects)</h3>
              <p className="text-gray-600 mb-4 text-sm">Compositing, rotoscoping, matte painting, environment creation, explosions, particle effects</p>
              <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹5-35 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Gamepad2 className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Game Design & Dev</h3>
              <p className="text-gray-600 mb-4 text-sm">3D game assets, character modeling, environment art, UI/UX, real-time rendering, Unreal/Unity</p>
              <div className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹4-32 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Video className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Motion Graphics</h3>
              <p className="text-gray-600 mb-4 text-sm">After Effects animation, title sequences, UI animation, explainer videos, broadcast design</p>
              <div className="bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹3-25 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Clapperboard className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Character Animation</h3>
              <p className="text-gray-600 mb-4 text-sm">Specialize in bringing characters to life, facial expressions, body mechanics, acting performance</p>
              <div className="bg-pink-100 text-pink-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹4-28 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Monitor className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Compositing</h3>
              <p className="text-gray-600 mb-4 text-sm">Nuke compositor, integrate CGI with live plates, color grading, keying, tracking, final output</p>
              <div className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹3-22 LPA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Weighing Your Options</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Pros</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Creative & Technical Blend:</strong> Artistic expression meets technology, see your imagination on screen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Growing Indian Industry:</strong> OTT boom, gaming growth, more films using VFX. Demand increasing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Portfolio-Based Career:</strong> Degree less important than demo reel. Self-taught people get jobs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Global Opportunities:</strong> Work on Hollywood films, international studios hire remotely, freelance worldwide</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <XCircle className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Cons</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Extreme Deadline Pressure:</strong> Crunch time = 12-16 hour days for weeks. Film deadlines fixed, weekend work common</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Project-Based Employment:</strong> Hired for film/series, laid off after. 3-6 month contracts, income gaps between projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Health Issues:</strong> 10-12 hours screen time daily. Eye strain, back pain, carpal tunnel. Sedentary lifestyle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Constant Revisions:</strong> Clients/directors keep changing requirements. "Make it pop" = redo everything 50 times</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Film className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Build a Career in Animation & VFX</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Animation and VFX is perfect for technically creative individuals who love bringing imagination to life on screen. While deadline pressure is intense and job security project-based, the satisfaction of seeing your work in films/games and growing Indian OTT/gaming industry make it promising. Focus on building a strong demo reel, master industry-standard software like Maya/Blender, and create personal projects. Portfolio matters more than degree—many successful artists are self-taught via YouTube and online courses.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/arts" 
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore More Arts Careers
            </Link>
            <Link 
              to="/stream-selection" 
              className="bg-indigo-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition-colors border-2 border-white"
            >
              Compare All Streams
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AnimationVFXDetails
