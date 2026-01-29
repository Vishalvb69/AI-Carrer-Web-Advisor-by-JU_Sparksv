import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Clock, 
  Award,
  BookOpen,
  Briefcase,
  Globe,
  UtensilsCrossed,
  Home,
  Target,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Building,
  Coffee,
  Plane,
  Ship,
  Wine,
  ChefHat
} from 'lucide-react'

const HotelManagementDetails = () => {
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
            <span className="text-gray-900 font-medium">Hotel Management</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-700 to-red-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Hospitality & Service Professional
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Hotel Management
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Manage hotels, resorts, restaurants, cruise ships, and hospitality services. Learn operations, customer service, food & beverage management, housekeeping, and event planning. A dynamic career for people-oriented individuals who love travel and service.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹2.5-8 LPA</div>
                  <div className="text-sm text-gray-200">Starting Package</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹10-40+ LPA</div>
                  <div className="text-sm text-gray-200">GM/Director Level</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">3-4 Years</div>
                  <div className="text-sm text-gray-200">Degree Duration</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Home className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Hotels & Resorts</h3>
                <p className="text-sm text-gray-200">Front Office & Ops</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <UtensilsCrossed className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">F&B Service</h3>
                <p className="text-sm text-gray-200">Restaurants & Bars</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Ship className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Cruise Ships</h3>
                <p className="text-sm text-gray-200">Floating Hotels</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Plane className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Aviation</h3>
                <p className="text-sm text-gray-200">Airlines & Airports</p>
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
              <h3 className="font-semibold mb-2">Irregular Hours & No Weekends</h3>
              <p className="text-sm text-gray-700">Hotels run 24/7. Night shifts, early mornings, working on Diwali/Christmas. When others party, you work. Work-life balance poor</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Start From Bottom (Trainee)</h3>
              <p className="text-sm text-gray-700">Fresh grads do 6-12 months "on-the-job training" at ₹10-15K/month. Serve guests, clean, basic tasks. Ego-crushing for many</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Customer-Facing Stress</h3>
              <p className="text-sm text-gray-700">Deal with rude guests, complaints, last-minute demands. "Customer is king" culture. Must smile through verbal abuse</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Slow Career Growth</h3>
              <p className="text-sm text-gray-700">Takes 8-12 years to reach GM level. Stuck as supervisor/manager for years. Need to switch hotels for promotions</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">High Turnover Industry</h3>
              <p className="text-sm text-gray-700">Many leave within 2-3 years due to hours/pay. Glamour fades fast. Better opportunities in corporate/tech lure people away</p>
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
              <h3 className="text-lg font-semibold mb-2">Trainee/Fresh</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹2-6 LPA</div>
              <p className="text-sm text-gray-600 mb-4">0-2 years, entry level</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Training period: ₹10-20K/month</li>
                <li>• Front office exec: ₹2.5-4 LPA</li>
                <li>• F&amp;B service: ₹2-3.5 LPA</li>
                <li>• Housekeeping: ₹2-3 LPA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Supervisor/Junior Manager</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">₹4-10 LPA</div>
              <p className="text-sm text-gray-600 mb-4">3-6 years experience</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Shift supervisor: ₹4-6 LPA</li>
                <li>• Asst. Manager: ₹5-8 LPA</li>
                <li>• Restaurant Manager: ₹6-10 LPA</li>
                <li>• Front Office Manager: ₹5-9 LPA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Manager/Senior</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹8-20 LPA</div>
              <p className="text-sm text-gray-600 mb-4">7-12 years, department head</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Dept Manager: ₹8-12 LPA</li>
                <li>• Executive Chef: ₹10-18 LPA</li>
                <li>• Sales Manager: ₹8-15 LPA</li>
                <li>• Operations Manager: ₹10-16 LPA</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-sm border-2 border-orange-300">
              <h3 className="text-lg font-semibold mb-2">GM/Director/Owner</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">₹15-60L+</div>
              <p className="text-sm text-gray-600 mb-4">12-20+ years, leadership</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• General Manager: ₹15-35 LPA</li>
                <li>• Regional Director: ₹30-50 LPA</li>
                <li>• Own restaurant/hotel: Variable</li>
                <li>• Corporate VP: ₹40-60 LPA</li>
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
            What Hotel Management Professionals Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Key Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Home className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Front Office Operations:</strong> Check-in/out, reservations, guest relations, billing, room allocation</span>
                </li>
                <li className="flex items-start">
                  <UtensilsCrossed className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>F&B Management:</strong> Restaurant service, menu planning, kitchen coordination, bar operations</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Guest Experience:</strong> Handle complaints, ensure satisfaction, coordinate special requests, VIP services</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Operations Oversight:</strong> Housekeeping standards, maintenance, staff scheduling, inventory management</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Typical Day Breakdown</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Guest Interaction (40%)</h4>
                  <p className="text-sm text-gray-700">Welcoming guests, handling queries, resolving issues, ensuring smooth experience</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Operational Tasks (30%)</h4>
                  <p className="text-sm text-gray-700">Room assignments, billing, inventory checks, quality control, staff coordination</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Problem Solving (20%)</h4>
                  <p className="text-sm text-gray-700">Complaints, emergencies, last-minute requests, overbooking situations</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Admin & Reports (10%)</h4>
                  <p className="text-sm text-gray-700">Daily reports, revenue tracking, staff meetings, planning</p>
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
            <h3 className="text-xl font-semibold mb-6">Bachelor's (BHM/BHMCT - 3-4 Years)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Top Government Institutes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• IHM Mumbai (Institute of Hotel Management)</li>
                  <li>• IHM Delhi (Pusa)</li>
                  <li>• IHM Bangalore</li>
                  <li>• IHM Kolkata</li>
                  <li>• IHM Goa</li>
                  <li>• IHM Hyderabad</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Top Private Institutes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Welcomgroup Graduate School (ITC)</li>
                  <li>• Christ University Bangalore</li>
                  <li>• IIAS (Indian Institute of Advanced Studies)</li>
                  <li>• Oberoi Centre of Learning &amp; Development</li>
                  <li>• Amity School of Hospitality</li>
                  <li>• Symbiosis School of Culinary Arts</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-800"><strong>Entry:</strong> IHMs via NCHMCT JEE exam. Private via direct admission/university entrance. Eligibility: 10+2 any stream, 50%+ marks. Course: 3-4 years + 6-month industrial training. Fees: IHM ₹2-5L total, Private ₹3-15L</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">Postgraduate &amp; Specialization</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Masters (Optional)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MBA in Hospitality (2 years)</li>
                  <li>• M.Sc. in Hotel Management</li>
                  <li>• Better for leadership roles</li>
                  <li>• International programs (Cornell)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Certifications</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Sommelier certification (wine)</li>
                  <li>• Food safety &amp; hygiene</li>
                  <li>• Revenue management</li>
                  <li>• Culinary specializations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">International Exposure</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Swiss Hotel Schools (expensive)</li>
                  <li>• Cruise ship contracts</li>
                  <li>• Dubai/Singapore hotels</li>
                  <li>• Higher pay abroad</li>
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
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Hospitality Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Front office operations</li>
                <li>• Food &amp; beverage service</li>
                <li>• Housekeeping management</li>
                <li>• Event planning &amp; coordination</li>
                <li>• Revenue management</li>
                <li>• Guest relations &amp; concierge</li>
                <li>• Kitchen operations basics</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Technical Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>PMS software</strong> - Opera, Fidelio</li>
                <li>• <strong>POS systems</strong> - Restaurant billing</li>
                <li>• <strong>Excel</strong> - Reports, forecasting</li>
                <li>• <strong>Reservation systems</strong> - OTA mgmt</li>
                <li>• <strong>Languages</strong> - English + 1 foreign</li>
                <li>• <strong>Safety &amp; hygiene</strong> - HACCP, FSSAI</li>
                <li>• <strong>Digital marketing</strong> - Hotel promotion</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Soft Skills (Critical!)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Customer service mindset (must!)</li>
                <li>• Communication (fluent English)</li>
                <li>• Patience under pressure</li>
                <li>• Team coordination &amp; leadership</li>
                <li>• Problem-solving (quick thinking)</li>
                <li>• Grooming &amp; professional appearance</li>
                <li>• Cultural sensitivity (global guests)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Top Employers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Globe className="h-8 w-8 text-blue-600 mr-3" />
            Career Paths in Hospitality
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border border-blue-200">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Hotel Chains (India)</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>ITC Hotels</strong> - Luxury segment</li>
                <li><strong>Taj Group (IHCL)</strong> - Premium</li>
                <li><strong>Oberoi Hotels</strong> - Luxury hospitality</li>
                <li><strong>Lemon Tree</strong> - Mid-segment</li>
                <li><strong>OYO</strong> - Budget hotels</li>
                <li><strong>Hyatt</strong> - International chain</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border border-green-200">
              <h3 className="font-semibold text-lg mb-4 text-green-900">International &amp; Cruise</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Marriott</strong> - Global brand</li>
                <li><strong>Hilton</strong> - Worldwide</li>
                <li><strong>Radisson</strong> - Hotels &amp; resorts</li>
                <li><strong>Cruise Ships</strong> - Royal Caribbean</li>
                <li><strong>Emirates/Qatar</strong> - Aviation</li>
                <li><strong>Dubai Hotels</strong> - High-paying</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border border-purple-200">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">F&B &amp; Others</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Restaurants</strong> - Fine dining, QSR</li>
                <li><strong>Cafe Coffee Day/Starbucks</strong> - Cafes</li>
                <li><strong>Event Management</strong> - Weddings</li>
                <li><strong>Catering Services</strong> - Large events</li>
                <li><strong>Resorts</strong> - Tourism destinations</li>
                <li><strong>Own Restaurant/Hotel</strong> - Entrepreneurship</li>
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
            Career Roadmap After Hotel Management
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 0-2: Trainee to Executive</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Entry Level</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Industrial Training:</strong> 6 months on-the-job training at hotel (₹10-15K stipend), learn all departments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>First Job:</strong> Front office/F&B executive (₹2.5-4 LPA), work shifts, handle guests, build basics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Reality Check:</strong> Long hours, weekend work, customer complaints. Many quit in first 2 years</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 2-7: Supervisor to Manager</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Mid Level</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Supervisor Role:</strong> Shift supervisor (₹4-6 LPA), manage team of 5-10, coordinate operations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Assistant Manager:</strong> (₹5-8 LPA) Dept responsibility, reporting, budgets, guest relations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Growth Tip:</strong> Switch hotels for faster promotions. Loyalty doesn't pay. Brand-hop for salary jumps</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 7-15+: Manager to GM</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Senior Level</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Department Manager:</strong> F&B Manager/Front Office Manager (₹8-12 LPA), full dept control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>General Manager:</strong> (₹15-35 LPA) Entire hotel operations, P&L, 10-15 years to reach here</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Options:</strong> Regional Director, own restaurant/hotel, consulting, or move abroad for 2-3x pay</span>
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
            Course Difficulty & Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Challenging Aspects
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Food production (cooking practicals)</li>
                <li>• Accounting &amp; finance management</li>
                <li>• Revenue management systems</li>
                <li>• Front office computer systems</li>
                <li>• Legal aspects of hospitality</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                Moderate Difficulty
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• F&B service operations</li>
                <li>• Housekeeping management</li>
                <li>• Marketing &amp; sales</li>
                <li>• Event management</li>
                <li>• Tourism &amp; travel basics</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Manageable Topics
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Hospitality basics &amp; etiquette</li>
                <li>• Communication skills</li>
                <li>• Customer service principles</li>
                <li>• Basic food hygiene</li>
                <li>• Hotel organization structure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Specializations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Home className="h-8 w-8 text-purple-600 mr-3" />
            Hospitality Career Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Home className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Front Office Operations</h3>
              <p className="text-gray-600 mb-4 text-sm">Reservations, check-in/out, guest relations, concierge, revenue management</p>
              <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹3-30 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <UtensilsCrossed className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Food & Beverage</h3>
              <p className="text-gray-600 mb-4 text-sm">Restaurant management, bar operations, banquets, room service, catering</p>
              <div className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹3-25 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <ChefHat className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Culinary/Kitchen</h3>
              <p className="text-gray-600 mb-4 text-sm">Executive Chef, sous chef, kitchen operations, menu planning, food costing</p>
              <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹4-35 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Ship className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cruise Ships</h3>
              <p className="text-gray-600 mb-4 text-sm">Onboard hotel management, F&B, guest services, entertainment coordination</p>
              <div className="bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-sm font-medium inline-block">$2K-5K/month</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Plane className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Aviation & Travel</h3>
              <p className="text-gray-600 mb-4 text-sm">Airline hospitality, airport lounge management, travel agencies, tourism</p>
              <div className="bg-red-100 text-red-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹3-20 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Coffee className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Own Venture</h3>
              <p className="text-gray-600 mb-4 text-sm">Start restaurant, cafe, boutique hotel, event company, catering business</p>
              <div className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-sm font-medium inline-block">Variable</div>
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
                  <span className="text-gray-700"><strong>Dynamic Environment:</strong> Never boring, meet diverse people, different challenges daily</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Global Opportunities:</strong> Work in Dubai, Singapore, cruise ships, resorts worldwide - travel while working</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>People Skills Development:</strong> Learn customer service, communication, leadership - transferable skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Entrepreneurship Ready:</strong> Learn operations end-to-end, perfect for starting own restaurant/hotel</span>
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
                  <span className="text-gray-700"><strong>Poor Work-Life Balance:</strong> Night shifts, weekends, festivals. When others party, you work. Social life suffers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Low Starting Pay:</strong> Training ₹10-15K, first job ₹20-30K/month. Growth slow, takes 10+ years to GM</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Customer Service Stress:</strong> Deal with rude guests, complaints, unrealistic demands. Must smile through abuse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>High Turnover:</strong> Many leave for corporate jobs. Glamour fades. Better pay in tech/sales lures people away</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Home className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Build a Career in Hospitality</h2>
          <p className="text-xl text-orange-100 mb-8">
            Hotel management offers a dynamic, people-oriented career with global opportunities. While the hours are demanding and starting pay modest, the experience of creating memorable guest experiences and the potential to work worldwide make it rewarding for those passionate about service and hospitality. Consider international exposure or entrepreneurship for better growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/commerce" 
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore More Commerce Careers
            </Link>
            <Link 
              to="/stream-selection" 
              className="bg-orange-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-900 transition-colors border-2 border-white"
            >
              Compare All Streams
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HotelManagementDetails
