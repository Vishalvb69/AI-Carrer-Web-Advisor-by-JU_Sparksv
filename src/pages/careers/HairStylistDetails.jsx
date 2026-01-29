import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  Scissors, 
  Sparkles, 
  Users, 
  Home, 
  Award,
  Briefcase,
  Target,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Building,
  Heart,
  TrendingUp,
  Clock,
  DollarSign,
  Palette,
  Star
} from 'lucide-react'

const HairStylistDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/emerging-careers" className="hover:text-blue-600 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Emerging Careers
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Hair Stylist</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Creative Beauty Professional
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Professional Hair Stylist
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Transform hair through cutting, coloring, styling, and chemical treatments. Work in salons, spas, celebrity styling, bridal makeovers, or own salon. Master techniques like layering, balayage, keratin treatments, and trend-setting styles. A creative career requiring technical skills, people management, and staying updated with latest trends. Build clientele through Instagram, word-of-mouth, and exceptional service.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹2-5 LPA</div>
                  <div className="text-sm text-gray-200">Salon Stylist</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹8-20 LPA</div>
                  <div className="text-sm text-gray-200">Celebrity Stylist</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹10-30L+</div>
                  <div className="text-sm text-gray-200">Own Salon</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Scissors className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Hair Cutting</h3>
                <p className="text-sm text-gray-200">Precision Styling</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Palette className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Hair Coloring</h3>
                <p className="text-sm text-gray-200">Creative Colors</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Sparkles className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Bridal Styling</h3>
                <p className="text-sm text-gray-200">Wedding Hair</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Star className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Celebrity Work</h3>
                <p className="text-sm text-gray-200">High-End Clients</p>
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
            Reality Check: The Honest Truth About Hair Styling
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Standing 8-10 Hours Daily</h3>
              <p className="text-sm text-gray-700">Constant standing. Backache, leg pain, varicose veins common after 30s. No sitting during work. Feet hurt by evening. Physical toll underestimated</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Chemical Exposure to Hands & Lungs</h3>
              <p className="text-sm text-gray-700">Hair dyes, bleach, straightening chemicals daily. Skin allergies, respiratory issues. Hands crack, nails damage. Gloves help but not fully protective</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Client Retention Is Everything</h3>
              <p className="text-sm text-gray-700">Clients follow YOU, not salon. If they don't like work, lost forever. Takes 2-3 years to build loyal base. One bad haircut = viral negative review</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Low Starting Salary ₹10-15K/month</h3>
              <p className="text-sm text-gray-700">First 2 years as assistant = ₹10-18K/month. Just washing hair, cleanup, assisting. Junior stylist ₹15-25K. Takes 5 years to reach ₹40K+</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Weekend/Evening Work Mandatory</h3>
              <p className="text-sm text-gray-700">Busiest time = weekends, wedding season Oct-Feb. No Sunday off. 12-14 hour days during bridal season. Social life suffers. Festivals = working</p>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <DollarSign className="h-8 w-8 text-green-600 mr-3" />
            Earnings Reality (Highly Variable)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Assistant (0-2 years)</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">₹10-18K/mo</div>
              <p className="text-sm text-gray-600 mb-4">Learning phase</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Hair washing, shampooing</li>
                <li>• Salon cleanup, maintenance</li>
                <li>• Assisting senior stylists</li>
                <li>• Learning basic cuts</li>
                <li>• No tips initially</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Junior Stylist (2-5 years)</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹18-35K/mo</div>
              <p className="text-sm text-gray-600 mb-4">Independent work starts</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Basic cuts: ₹200-500 per client</li>
                <li>• Simple coloring</li>
                <li>• Salary + commission (10-15%)</li>
                <li>• Building clientele</li>
                <li>• Tips: ₹2-5K/month</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Senior Stylist (5-10 years)</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">₹35-60K/mo</div>
              <p className="text-sm text-gray-600 mb-4">Established professional</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Advanced cuts: ₹800-2K per client</li>
                <li>• Color specialist, balayage</li>
                <li>• Commission: 20-30%</li>
                <li>• Loyal client base 50-100</li>
                <li>• Tips: ₹10-20K/month</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-sm border-2 border-purple-300">
              <h3 className="text-lg font-semibold mb-2">Celebrity/Own Salon</h3>
              <div className="text-3xl font-bold text-purple-700 mb-2">₹8-30L+ PA</div>
              <p className="text-sm text-gray-600 mb-4">Top tier</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Celebrity stylist: ₹8-20L</li>
                <li>• Own salon: ₹10-30L+ (high investment)</li>
                <li>• Bridal specialist: ₹5-15L</li>
                <li>• Training/workshops: ₹2-8L extra</li>
                <li>• Instagram influencer income</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-sm text-gray-800"><strong>Reality:</strong> Starting salary is ₹10-15K/month for first 2 years (assistant phase). Junior stylists earn ₹18-35K. Takes 5-10 years to reach ₹50K+ monthly. Own salon requires ₹15-40L investment with high risk. Celebrity styling is top 1% only. Income seasonal—wedding season (Oct-Feb) earns 60% of annual income.</p>
          </div>
        </div>
      </section>

      {/* Daily Work & Responsibilities */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            What Hair Stylists Actually Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Core Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Scissors className="h-5 w-5 text-pink-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Hair Cutting:</strong> Layering, bob cuts, pixie, fades, razor cuts. Understanding face shape, hair texture, growth patterns</span>
                </li>
                <li className="flex items-start">
                  <Palette className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Hair Coloring:</strong> Highlights, balayage, ombré, global color, root touch-ups. Color theory, bleaching, toning</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Chemical Treatments:</strong> Keratin smoothing, straightening, perming, rebonding. Apply chemicals safely, time correctly</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Styling & Finishing:</strong> Blow-dry, curling, straightening, updos, braiding. Wedding/party hairstyles, texture creation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Time Breakdown</h3>
              <div className="space-y-4">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-900 mb-2">Client Services (60%)</h4>
                  <p className="text-sm text-gray-700">Cutting, coloring, treatments. 6-10 clients daily. Each service 30 min-3 hours depending on complexity</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Consultation & Advice (15%)</h4>
                  <p className="text-sm text-gray-700">Understand client needs, suggest styles, manage expectations. Product recommendations, hair care tips</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Salon Maintenance (15%)</h4>
                  <p className="text-sm text-gray-700">Cleanup, sterilize tools, organize products, inventory management, laundry of towels</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Learning & Practice (10%)</h4>
                  <p className="text-sm text-gray-700">Stay updated with trends, practice new techniques, watch tutorials, attend workshops</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Path */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="h-8 w-8 text-purple-600 mr-3" />
            How to Become a Hair Stylist
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border mb-8">
            <h3 className="text-xl font-semibold mb-6">No Formal Degree Required</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Professional Courses (Recommended)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Lakme Academy:</strong> 6-12 months, ₹50K-2L, most popular, pan-India</li>
                  <li>• <strong>VLCC Institute:</strong> 3-6 months, ₹30K-1.5L, cosmetology + hair</li>
                  <li>• <strong>Jawed Habib Academy:</strong> 6 months-1 year, ₹40K-1L, franchise network</li>
                  <li>• <strong>Orane International:</strong> 6-12 months, ₹50K-1.5L, international certification</li>
                  <li>• Entry: 10th/12th pass, no strict requirement</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Learn On-the-Job (Traditional)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Join salon as assistant (₹8-12K/month)</li>
                  <li>• Learn from senior stylists for 2-3 years</li>
                  <li>• Practice on mannequin heads at home</li>
                  <li>• Watch YouTube tutorials (free)</li>
                  <li>• Cheaper path but slower progression</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-gray-800"><strong>Best Path:</strong> Do 6-month course (₹50K-1L) at Lakme/VLCC + then join salon as junior stylist. Course gives certificate + basic skills + confidence. Salon experience is where you truly learn. Courses alone don't make you expert—need 2-3 years hands-on practice with real clients.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">Learning Roadmap</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-pink-900 mb-3">Basics (0-6 months)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Hair washing & shampooing technique</li>
                  <li>• Basic cutting (scissors, razor)</li>
                  <li>• Blow-dry & straightening</li>
                  <li>• Understanding hair types & textures</li>
                  <li>• Tool handling & sterilization</li>
                  <li>• Customer service basics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-pink-900 mb-3">Intermediate (6-18 months)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Advanced cuts (layers, fades, tapers)</li>
                  <li>• Hair coloring basics (highlights, root touch-up)</li>
                  <li>• Chemical treatments (smoothing, straightening)</li>
                  <li>• Styling techniques (curling, updos)</li>
                  <li>• Bridal hairstyles</li>
                  <li>• Building client relationships</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-pink-900 mb-3">Advanced (18+ months)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Color specialist (balayage, ombré)</li>
                  <li>• Corrective coloring (fixing mistakes)</li>
                  <li>• Texture manipulation (perms, waves)</li>
                  <li>• Celebrity/editorial styling</li>
                  <li>• Teaching/training others</li>
                  <li>• Salon management/own business</li>
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
            <Sparkles className="h-8 w-8 text-yellow-600 mr-3" />
            Essential Skills & Qualities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Technical Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Cutting techniques (scissors, razor, clippers)</li>
                <li>• Color theory & application</li>
                <li>• Chemical treatment knowledge</li>
                <li>• Heat tool expertise (dryers, irons, curlers)</li>
                <li>• Face shape analysis</li>
                <li>• Texture assessment (straight/wavy/curly)</li>
                <li>• Product knowledge (shampoos, conditioners, serums)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Soft Skills (CRITICAL!)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Communication:</strong> Understand what client wants</li>
                <li>• <strong>Patience:</strong> Difficult clients, long services</li>
                <li>• <strong>Creativity:</strong> Suggest styles, customize looks</li>
                <li>• <strong>Physical stamina:</strong> Stand 8-10 hours daily</li>
                <li>• <strong>Attention to detail:</strong> Precision in cuts/color</li>
                <li>• <strong>Time management:</strong> Multiple bookings</li>
                <li>• <strong>Salesmanship:</strong> Upsell products/services</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Business Skills (For Own Salon)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Instagram marketing (before/after photos)</li>
                <li>• Client retention strategies</li>
                <li>• Pricing & packages</li>
                <li>• Staff management (if hiring)</li>
                <li>• Inventory management</li>
                <li>• Appointment scheduling</li>
                <li>• Financial management (profit/loss)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Building className="h-8 w-8 text-blue-600 mr-3" />
            Career Path Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border border-blue-200">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Salon Stylist</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Chain salons:</strong> Lakme, Naturals, Geetanjali ₹18-45K</li>
                <li><strong>Boutique salons:</strong> High-end, ₹30-60K + tips</li>
                <li><strong>Pros:</strong> Steady salary, no investment, learn from seniors</li>
                <li><strong>Cons:</strong> Commission-based, limited control, long hours</li>
                <li><strong>Best for:</strong> Building skills & clientele first 5-7 years</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border border-purple-200">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Freelance/Home Salon</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Home-based:</strong> Low investment ₹50K-2L setup</li>
                <li><strong>Bridal specialist:</strong> ₹5-15K per bride, seasonal</li>
                <li><strong>Mobile stylist:</strong> Visit clients' homes</li>
                <li><strong>Pros:</strong> Flexible hours, keep 100% earnings, own boss</li>
                <li><strong>Cons:</strong> Unstable income, client acquisition hard, no backup</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-6 shadow-sm border border-pink-200">
              <h3 className="font-semibold text-lg mb-4 text-pink-900">Own Salon (High Risk)</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Investment:</strong> ₹15-40L (location, equipment, staff)</li>
                <li><strong>Earnings:</strong> ₹10-30L+ per year (if successful)</li>
                <li><strong>Reality:</strong> 60% salons shut within 3 years</li>
                <li><strong>Challenges:</strong> Staff retention, rent, competition, marketing</li>
                <li><strong>When:</strong> After 10+ years experience + capital + client base</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border border-orange-200">
              <h3 className="font-semibold text-lg mb-4 text-orange-900">Celebrity Stylist</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Film industry:</strong> Bollywood/regional films</li>
                <li><strong>Fashion shows:</strong> Models, runway hair</li>
                <li><strong>Photoshoots:</strong> Editorial, commercial</li>
                <li><strong>Salary:</strong> ₹8-20L per year (top 1%)</li>
                <li><strong>Entry:</strong> Network, assist celebrity stylists, Instagram portfolio</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border border-green-200">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Trainer/Educator</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Academy instructor:</strong> Lakme/VLCC ₹25-50K/month</li>
                <li><strong>Workshops:</strong> Advanced techniques ₹10-30K per workshop</li>
                <li><strong>YouTube/Instagram:</strong> Tutorials, sponsorships</li>
                <li><strong>Online courses:</strong> Sell courses ₹5-25K per student</li>
                <li><strong>When:</strong> After 10+ years + recognized expertise</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm border border-indigo-200">
              <h3 className="font-semibold text-lg mb-4 text-indigo-900">Product Sales Representative</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Hair product brands:</strong> L'Oréal, Wella, Matrix</li>
                <li><strong>Role:</strong> Demo products, train stylists, sales</li>
                <li><strong>Salary:</strong> ₹25-60K + commission</li>
                <li><strong>Pros:</strong> No salon standing, regular hours, travel</li>
                <li><strong>Entry:</strong> 5+ years salon experience + product knowledge</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Target className="h-8 w-8 text-purple-600 mr-3" />
            Career Roadmap for Hair Stylists
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 0-2: Assistant Phase</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Foundation</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Complete Course:</strong> 6-month certification from Lakme/VLCC (₹50K-1L). Learn basics of cutting, coloring, styling</span>
                </li>
                <li className="flex items-start">
                  <Building className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Join Salon as Assistant:</strong> ₹10-18K/month. Hair washing, cleanup, assisting seniors. Stand 8-10 hours. Humble beginning</span>
                </li>
                <li className="flex items-start">
                  <Scissors className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Practice Constantly:</strong> Buy mannequin head (₹500-1K), practice cuts at home. Watch YouTube tutorials daily. Offer free cuts to friends</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 2-7: Junior to Senior Stylist</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Growth Phase</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Independent Clients:</strong> Start handling own clients (₹18-35K/month). Build portfolio with before/after photos. Instagram presence crucial</span>
                </li>
                <li className="flex items-start">
                  <Palette className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Specialize:</strong> Become expert in one area—coloring/bridal/men's grooming. Attend advanced workshops (₹10-30K). Build reputation</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Client Retention:</strong> 50-100 loyal clients who visit every 2-3 months. They follow YOU, not salon. Ask for reviews, referrals</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 7-15+: Senior Expert / Own Business</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Established</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Senior Position:</strong> ₹40-60K/month in top salons OR move to freelance bridal specialist ₹5-15K per bride (seasonal peaks)</span>
                </li>
                <li className="flex items-start">
                  <Home className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Own Salon (High Risk):</strong> If you have ₹15-40L capital + 100+ loyal clients, consider own salon. 60% fail within 3 years. Location is everything</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Alternate Paths:</strong> Celebrity stylist (networking + luck), trainer at academy, product rep, Instagram influencer (sponsored posts ₹5-25K)</span>
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
            <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
            Challenges & Difficulty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Very Difficult
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Standing 8-10 hours daily (physical toll)</li>
                <li>• Building loyal client base (takes 3-5 years)</li>
                <li>• Dealing with difficult/unsatisfied clients</li>
                <li>• Chemical exposure (skin/lung health)</li>
                <li>• Succeeding with own salon (60% fail)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                <Clock className="h-6 w-6 mr-2" />
                Moderate Challenges
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Advanced coloring techniques (balayage, correction)</li>
                <li>• Weekend/evening work (social life impact)</li>
                <li>• Low starting salary (₹10-18K first 2 years)</li>
                <li>• Keeping up with trends (constant learning)</li>
                <li>• Managing multiple bookings & time</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Manageable Aspects
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Basic cutting techniques (learnable in 6 months)</li>
                <li>• No formal degree barrier (anyone can start)</li>
                <li>• Communication with clients (if extroverted)</li>
                <li>• Entry-level jobs abundant (always demand)</li>
                <li>• YouTube/Instagram learning (free resources)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Sparkles className="h-8 w-8 text-purple-600 mr-3" />
            Hair Styling Specializations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Palette className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Color Specialist</h3>
              <p className="text-gray-600 mb-4 text-sm">Expert in highlights, balayage, ombré, corrective color. High demand, premium pricing</p>
              <div className="bg-pink-100 text-pink-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹5-20 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Heart className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Bridal Hair Specialist</h3>
              <p className="text-gray-600 mb-4 text-sm">Wedding hairstyles, updos, traditional styles. Seasonal work, high per-event pay</p>
              <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹5-15 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Users className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Men's Grooming Specialist</h3>
              <p className="text-gray-600 mb-4 text-sm">Fades, tapers, beard styling, traditional barbering. Growing market, quick services</p>
              <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹3-12 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Sparkles className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Chemical Treatment Expert</h3>
              <p className="text-gray-600 mb-4 text-sm">Keratin, smoothing, straightening, perms. High-ticket services, requires precision</p>
              <div className="bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹4-15 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Star className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Celebrity/Editorial Stylist</h3>
              <p className="text-gray-600 mb-4 text-sm">Film, fashion, photoshoots. Requires strong portfolio, networking. Top 1% only</p>
              <div className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹8-25L+ LPA</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <TrendingUp className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Extensions & Wigs Specialist</h3>
              <p className="text-gray-600 mb-4 text-sm">Hair extensions installation, wig styling, hair replacement. Niche high-demand market</p>
              <div className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹4-18 LPA</div>
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
                  <span className="text-gray-700"><strong>No Degree Barrier:</strong> Anyone can start after 12th. 6-month course enough. No entrance exams, no college stress</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Creative & Rewarding Work:</strong> Transform people's looks. Immediate satisfaction. Compliments daily. Make people feel confident</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Own Business Potential:</strong> After 5-7 years, start home salon (₹50K-2L investment) or full salon (₹15-40L). Be your own boss</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Always in Demand:</strong> People always need haircuts. Recession-proof. Wedding industry in India = guaranteed bridal work. Jobs everywhere</span>
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
                  <span className="text-gray-700"><strong>Physical Toll is BRUTAL:</strong> Stand 8-10 hours daily. Backache, leg pain, varicose veins by 30s. Chemical exposure damages hands/lungs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Low Starting Pay:</strong> First 2 years = ₹10-18K/month (assistant). Takes 5-7 years to reach ₹40K+. Slow financial growth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Weekend/Evening Work:</strong> Busiest when others are free. No Sunday off. Wedding season = 12-14 hour days. Social life suffers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Client Retention Struggle:</strong> Takes 3-5 years to build loyal base. One bad cut = lost client + viral negative review. High pressure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scissors className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Should You Become a Hair Stylist?</h2>
          <p className="text-xl text-pink-100 mb-8">
            Hair styling is ideal if you're creative, enjoy working with people, and okay with physical work. It's a solid career with no degree requirement—6-month course (₹50K-1L) is enough to start. Reality check: first 2 years as assistant = ₹10-18K/month (hair washing, cleanup). Expect to stand 8-10 hours daily causing back/leg pain. Chemical exposure damages hands/lungs. Weekend work mandatory, especially wedding season (Oct-Feb). Takes 5-7 years to earn ₹40K+ monthly. Client retention is everything—takes 3-5 years to build loyal base. Own salon requires ₹15-40L investment with 60% failure rate within 3 years. Best path: Learn at top salon → Build 100+ clients → Then consider home salon or stay senior stylist. If passionate about hair and okay with physical demands, it's rewarding. If you want office job comfort, this isn't for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/emerging-careers" 
              className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore More Emerging Careers
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

export default HairStylistDetails
