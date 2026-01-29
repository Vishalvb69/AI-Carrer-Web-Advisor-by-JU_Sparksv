import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Calendar, 
  Award,
  BookOpen,
  Briefcase,
  PartyPopper,
  Music,
  Target,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Building,
  Heart,
  Camera,
  Lightbulb,
  Sparkles
} from 'lucide-react'

const EventManagementDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/commerce" className="hover:text-blue-600 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Commerce
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Event Management</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Creative Event Professional
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Event Management
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Plan and execute weddings, corporate events, conferences, exhibitions, concerts, and parties. A creative, fast-paced career combining organization, coordination, vendor management, and client relations. Perfect for multitaskers who thrive under pressure.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹2-6 LPA</div>
                  <div className="text-sm text-gray-200">Starting Package</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹8-30+ LPA</div>
                  <div className="text-sm text-gray-200">Own Company/Senior</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">1-3 Years</div>
                  <div className="text-sm text-gray-200">Course Duration</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Heart className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Wedding Planning</h3>
                <p className="text-sm text-gray-200">Dream Celebrations</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Building className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Corporate Events</h3>
                <p className="text-sm text-gray-200">Conferences & Meets</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Music className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Concerts & Shows</h3>
                <p className="text-sm text-gray-200">Entertainment</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Camera className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Exhibitions</h3>
                <p className="text-sm text-gray-200">Trade Shows</p>
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
              <h3 className="font-semibold mb-2">Irregular Income (Project-Based)</h3>
              <p className="text-sm text-gray-700">Get paid per event. Wedding season = ₹2-5L/month. Off-season = ₹20-30K. Income unpredictable, cash flow issues common</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">High Stress During Events</h3>
              <p className="text-sm text-gray-700">18-hour days during execution. Last-minute vendor cancellations, client tantrums, technical failures. Heart attack territory</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Seasonal Work</h3>
              <p className="text-sm text-gray-700">Wedding season (Oct-Feb): Busy. Summer (Apr-Jun): Dead. Conference season varies. Earnings concentrated in few months</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Network is EVERYTHING</h3>
              <p className="text-sm text-gray-700">Clients come from referrals. Vendor relationships critical. Without strong network, impossible to get good events/prices</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Unpredictable Client Demands</h3>
              <p className="text-sm text-gray-700">"Change theme 2 days before wedding", "Budget ₹5L but want ₹15L setup". Impossible expectations, scope creep constant</p>
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
              <h3 className="text-lg font-semibold mb-2">Intern/Assistant</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹2-4 LPA</div>
              <p className="text-sm text-gray-600 mb-4">0-2 years, learning phase</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Event company assistant: ₹2-3 LPA</li>
                <li>• Freelance helper: ₹15-25K/event</li>
                <li>• Wedding coordinator: ₹2.5-4 LPA</li>
                <li>• Corporate event support: ₹2-3.5 LPA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Event Coordinator</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">₹4-8 LPA</div>
              <p className="text-sm text-gray-600 mb-4">2-5 years experience</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Event company exec: ₹4-6 LPA</li>
                <li>• Wedding planner: ₹5-8 LPA</li>
                <li>• Corporate events: ₹5-7 LPA</li>
                <li>• Exhibition coordinator: ₹4-6 LPA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Senior Manager/Freelancer</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹8-15 LPA</div>
              <p className="text-sm text-gray-600 mb-4">5-10 years, specialist</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Senior event manager: ₹8-12 LPA</li>
                <li>• Successful freelancer: ₹10-15 LPA</li>
                <li>• Luxury wedding planner: ₹12-18 LPA</li>
                <li>• Corporate event head: ₹8-14 LPA</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-sm border-2 border-orange-300">
              <h3 className="text-lg font-semibold mb-2">Own Company/Celebrity Events</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">₹15-50L+</div>
              <p className="text-sm text-gray-600 mb-4">10+ years, established brand</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Own event company: ₹15-30 LPA</li>
                <li>• Celebrity weddings: ₹20-50 LPA</li>
                <li>• Large exhibitions: ₹18-35 LPA</li>
                <li>• Top-tier planner: ₹25-60 LPA</li>
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
            What Event Managers Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Key Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Calendar className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Event Planning:</strong> Concept development, theme, budget planning, timeline, venue selection</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Vendor Coordination:</strong> Caterers, decorators, photographers, entertainers, logistics management</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Client Management:</strong> Understand requirements, regular updates, approval loops, expectation setting</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>On-Site Execution:</strong> Setup supervision, crisis management, timeline adherence, quality control</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Typical Work Breakdown</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Client & Planning (30%)</h4>
                  <p className="text-sm text-gray-700">Meetings, proposals, theme development, budget discussions, approvals</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Vendor Coordination (35%)</h4>
                  <p className="text-sm text-gray-700">Negotiations, bookings, follow-ups, quality checks, payment management</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Event Execution (25%)</h4>
                  <p className="text-sm text-gray-700">On-ground setup, supervision, problem-solving, quality assurance during event</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Marketing & Admin (10%)</h4>
                  <p className="text-sm text-gray-700">Social media, portfolio building, accounting, legal paperwork</p>
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
            Education Path & Institutes
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border mb-8">
            <h3 className="text-xl font-semibold mb-6">Diploma/Degree Programs (1-3 Years)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Top Institutes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• NAEMD (Delhi) - Event Management</li>
                  <li>• IIMC (Mumbai, Delhi) - Event courses</li>
                  <li>• Pearl Academy - Event Management</li>
                  <li>• Amity School of Event Management</li>
                  <li>• Xavier Institute of Communications</li>
                  <li>• Frankfinn Institute of Event Management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Online/Short Courses</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Udemy/Coursera - Event planning</li>
                  <li>• Wedding planning certification</li>
                  <li>• Corporate event management</li>
                  <li>• Many learn on-the-job</li>
                  <li>• Formal degree not mandatory</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-800"><strong>Entry:</strong> No strict entrance exam. Most programs via direct admission. Eligibility: 10+2 any stream. Duration: Diploma 1 year, Degree 3 years. Fees: ₹50K-3L. Reality: Many successful event managers have no formal degree - practical experience matters more</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">Alternative Learning Paths</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Apprenticeship Route</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Join event company as intern</li>
                  <li>• Learn hands-on for 1-2 years</li>
                  <li>• Build vendor network</li>
                  <li>• Most cost-effective path</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Freelance Start</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Help friends/family events</li>
                  <li>• Build portfolio organically</li>
                  <li>• Social media marketing</li>
                  <li>• Word-of-mouth growth</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Specialization Training</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Wedding planning certificate</li>
                  <li>• Corporate event courses</li>
                  <li>• Project management basics</li>
                  <li>• Design/decoration training</li>
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
            Essential Skills & Qualities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Event Planning Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Project management</li>
                <li>• Budget planning &amp; control</li>
                <li>• Vendor negotiation</li>
                <li>• Timeline &amp; logistics management</li>
                <li>• Theme &amp; concept development</li>
                <li>• Venue selection &amp; setup</li>
                <li>• Crisis management</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Technical Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Excel/Sheets</strong> - Budget tracking</li>
                <li>• <strong>Project tools</strong> - Asana, Trello</li>
                <li>• <strong>Design basics</strong> - Canva, PPT</li>
                <li>• <strong>Social media</strong> - Instagram, FB</li>
                <li>• <strong>Photography</strong> - Portfolio building</li>
                <li>• <strong>Contract drafting</strong> - Legal basics</li>
                <li>• <strong>Vendor software</strong> - Booking tools</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Soft Skills (CRITICAL!)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Multitasking (manage 10 things at once)</li>
                <li>• Communication (clients/vendors)</li>
                <li>• Negotiation (get best deals)</li>
                <li>• Problem-solving (fast decisions)</li>
                <li>• Stress management (high-pressure)</li>
                <li>• Networking (relationship building)</li>
                <li>• Creativity (unique concepts)</li>
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
            Career Paths in Event Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border border-blue-200">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Event Companies</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Wizcraft</strong> - Large-scale events</li>
                <li><strong>Cineyug</strong> - Entertainment events</li>
                <li><strong>70 Events</strong> - Corporate</li>
                <li><strong>E-Factor</strong> - Brand activations</li>
                <li><strong>Percept</strong> - Concerts, sports</li>
                <li><strong>Local event companies</strong> - Various</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border border-green-200">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Specialized Areas</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Wedding Planners</strong> - Matrimonial</li>
                <li><strong>Corporate Events</strong> - Conferences</li>
                <li><strong>Exhibition Companies</strong> - Trade shows</li>
                <li><strong>Concert Organizers</strong> - Music festivals</li>
                <li><strong>Sports Events</strong> - Tournaments</li>
                <li><strong>Luxury Planners</strong> - High-end events</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border border-purple-200">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Freelance & Others</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Independent Planner</strong> - Own clients</li>
                <li><strong>Hotel Event Dept</strong> - In-house events</li>
                <li><strong>Corporate In-house</strong> - HR/Marketing</li>
                <li><strong>NGO Events</strong> - Fundraisers</li>
                <li><strong>Government Events</strong> - Official functions</li>
                <li><strong>Own Event Company</strong> - Entrepreneurship</li>
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
            Career Roadmap in Event Management
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 0-2: Learning & Building Network</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Entry Level</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Join Event Company:</strong> Assistant role (₹2-3 LPA), learn on-ground execution, vendor management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Build Network:</strong> Connect with vendors (caterers, decorators, photographers), get best prices, build trust</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Side Projects:</strong> Help friends/family events free/cheap, build portfolio, get testimonials</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 2-5: Specialization & Independence</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Growth Phase</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Event Coordinator:</strong> (₹4-8 LPA) Handle events independently, client-facing role, end-to-end responsibility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Choose Niche:</strong> Wedding specialist, corporate events, exhibitions. Become expert in one area</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Start Freelancing:</strong> Take side clients, weekend events, build brand on Instagram, test entrepreneurship</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 5-10+: Own Company or Senior Role</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Established</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Senior Manager:</strong> (₹8-15 LPA) Head event operations, team management, strategic planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Own Event Company:</strong> (₹15-50 LPA) Register business, hire team, scale operations, brand building</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Options:</strong> Luxury wedding planner, celebrity events, large exhibitions, international expansion</span>
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
                <li>• Client expectation management</li>
                <li>• Budget vs. quality balance</li>
                <li>• Vendor reliability issues</li>
                <li>• Last-minute crisis handling</li>
                <li>• Multiple simultaneous projects</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                Moderate Challenges
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Theme &amp; design planning</li>
                <li>• Vendor coordination logistics</li>
                <li>• Marketing &amp; client acquisition</li>
                <li>• Financial planning &amp; cash flow</li>
                <li>• Team management</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Manageable Aspects
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Basic event setup knowledge</li>
                <li>• Initial client meetings</li>
                <li>• Social media management</li>
                <li>• Portfolio building</li>
                <li>• Learning on the job</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Specializations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <PartyPopper className="h-8 w-8 text-purple-600 mr-3" />
            Event Specialization Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Heart className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Wedding Planning</h3>
              <p className="text-gray-600 mb-4 text-sm">Matrimonial events, destination weddings, pre-wedding shoots, reception coordination</p>
              <div className="bg-pink-100 text-pink-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹3-30 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Building className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Corporate Events</h3>
              <p className="text-gray-600 mb-4 text-sm">Conferences, seminars, product launches, team building, annual meets, award ceremonies</p>
              <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹4-25 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Camera className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Exhibition & Trade Shows</h3>
              <p className="text-gray-600 mb-4 text-sm">Industry expos, trade fairs, product exhibitions, stall design, logistics</p>
              <div className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹3-20 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Music className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Sports & Entertainment Events</h3>
              <p className="text-gray-600 mb-4 text-sm">Concerts, music festivals, sports tournaments, celebrity events, fan meets</p>
              <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹4-28 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <PartyPopper className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Social Events</h3>
              <p className="text-gray-600 mb-4 text-sm">Birthday parties, anniversaries, baby showers, theme parties, cultural events</p>
              <div className="bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹2-18 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Sparkles className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Luxury & Destination Events</h3>
              <p className="text-gray-600 mb-4 text-sm">High-end weddings, international destinations, celebrity events, exclusive parties</p>
              <div className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹8-50 LPA</div>
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
                  <span className="text-gray-700"><strong>Creative & Dynamic Work:</strong> Every event different, never boring, use creativity, meet diverse people</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Entrepreneurship Friendly:</strong> Easy to start freelance, low initial investment, can grow own company</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>High Earning Potential:</strong> Successful planners earn ₹20-50L+, luxury weddings very profitable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>No Strict Education Barrier:</strong> Practical experience matters more than degree, learn on job</span>
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
                  <span className="text-gray-700"><strong>Irregular Income:</strong> Project-based earnings, wedding season vs off-season gap huge, cash flow issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Extreme Stress:</strong> 18-hour days during events, last-minute crises, unrealistic client demands, health impact</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Network Dependency:</strong> Without vendor connections, impossible to deliver. Referrals critical for clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>No Work-Life Balance:</strong> Weekend/holiday work common. Events when others celebrate. Unpredictable hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PartyPopper className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Build a Career Creating Memorable Events</h2>
          <p className="text-xl text-pink-100 mb-8">
            Event management is perfect for creative, organized individuals who thrive under pressure and love bringing people's dreams to life. While the income is irregular and stress high, the satisfaction of executing successful events and potential for entrepreneurship make it rewarding. Build a strong vendor network, specialize in a niche, and leverage social media for growth. Starting freelance on the side while working full-time is the safest path.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/commerce" 
              className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore More Commerce Careers
            </Link>
            <Link 
              to="/stream-selection" 
              className="bg-pink-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-900 transition-colors border-2 border-white"
            >
              Compare All Streams
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EventManagementDetails
