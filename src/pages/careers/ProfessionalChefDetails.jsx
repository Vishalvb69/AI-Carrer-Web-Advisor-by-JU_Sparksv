import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  ChefHat, 
  Flame, 
  Utensils, 
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
  ThermometerSun,
  Star,
  Users
} from 'lucide-react'

const ProfessionalChefDetails = () => {
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
            <span className="text-gray-900 font-medium">Professional Chef</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Culinary Professional
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Professional Chef
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Master the art of cooking in restaurants, hotels, cloud kitchens, or own establishment. Create delicious dishes, design menus, manage kitchen operations, and lead culinary teams. Different from Hotel Management—focuses purely on COOKING, not hotel operations. Requires mastery of cooking techniques, flavor profiles, knife skills, plating, and kitchen management. A demanding career with long hours, high heat, and intense pressure, but creative satisfaction and potential for fame. Build reputation through signature dishes, Michelin stars, or viral food content.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹3-10 LPA</div>
                  <div className="text-sm text-gray-200">Restaurant Chef</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹8-20 LPA</div>
                  <div className="text-sm text-gray-200">Executive Chef</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹10-50L+</div>
                  <div className="text-sm text-gray-200">Own Restaurant</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <ChefHat className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Restaurant Chef</h3>
                <p className="text-sm text-gray-200">Fine Dining/Casual</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Building className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Hotel Chef</h3>
                <p className="text-sm text-gray-200">5-Star Properties</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Flame className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Cloud Kitchen</h3>
                <p className="text-sm text-gray-200">Delivery Only</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Star className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Own Restaurant</h3>
                <p className="text-sm text-gray-200">High Risk/Reward</p>
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
            Reality Check: The Brutal Truth About Professional Cooking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">12-14 Hour Kitchen Shifts</h3>
              <p className="text-sm text-gray-700">Start 10 AM, finish midnight. Peak dinner service 7-11 PM = non-stop chaos. Standing entire time. Weekend/holiday work mandatory. Forget work-life balance</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">High Heat, Burns & Cuts Common</h3>
              <p className="text-sm text-gray-700">Kitchen = 40-50°C. Burns from pans/ovens weekly. Knife cuts frequent. Back pain, leg pain, dehydration. Physical toll underestimated. Health suffers</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">Low Starting Salary ₹12-18K/month</h3>
              <p className="text-sm text-gray-700">Commis chef (entry) = ₹12-20K. Takes 5-7 years to reach ₹40K+. Only executive chefs earn ₹50K+. Slow financial growth despite hard work</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">Own Restaurant = 60% Failure Rate</h3>
              <p className="text-sm text-gray-700">Investment ₹25L-1Cr+. Most shut within 2 years. Rent, staff, food cost, licenses. Location is everything. Competition brutal. Debt common</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">Intense Kitchen Hierarchy & Pressure</h3>
              <p className="text-sm text-gray-700">Head chef shouts, juniors obey. Gordon Ramsay style real. One mistake during service = humiliation. Extremely stressful. Ego clashes common. Quit rate high</p>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <DollarSign className="h-8 w-8 text-green-600 mr-3" />
            Chef Salary Reality (Varies Hugely by Workplace)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Commis Chef (0-2 years)</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">₹12-20K/mo</div>
              <p className="text-sm text-gray-600 mb-4">Entry level</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Prep work: chopping, cleaning</li>
                <li>• Assist senior chefs</li>
                <li>• Learn cooking techniques</li>
                <li>• Follow recipes exactly</li>
                <li>• Long hours, low pay</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Chef de Partie (2-5 years)</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹20-40K/mo</div>
              <p className="text-sm text-gray-600 mb-4">Station chef</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Handle one station (grill/sauce/pasta)</li>
                <li>• Manage small team</li>
                <li>• 5-star hotels: ₹25-40K</li>
                <li>• Restaurants: ₹20-30K</li>
                <li>• Pressure increases significantly</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Sous Chef (5-10 years)</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">₹40-80K/mo</div>
              <p className="text-sm text-gray-600 mb-4">Second-in-command</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Assist head chef</li>
                <li>• Manage all stations</li>
                <li>• Menu planning involvement</li>
                <li>• 5-star: ₹50-80K</li>
                <li>• Restaurants: ₹40-60K</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 shadow-sm border-2 border-orange-300">
              <h3 className="text-lg font-semibold mb-2">Executive Chef</h3>
              <div className="text-3xl font-bold text-red-700 mb-2">₹8-20L PA</div>
              <p className="text-sm text-gray-600 mb-4">Top position</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Full kitchen control</li>
                <li>• Menu design, costing</li>
                <li>• 5-star hotels: ₹10-20L</li>
                <li>• Fine dining: ₹8-15L</li>
                <li>• Celebrity chefs: ₹15-40L+</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-sm text-gray-800"><strong>Reality:</strong> Entry salary = ₹12-20K/month for 12-14 hour days (₹50-70 per hour!). Takes 10+ years to reach executive chef level (₹60K+/month). Own restaurant requires ₹25L-1Cr investment with 60% failing within 2 years. Celebrity chef status (₹15-40L+) is top 0.1%. Most chefs max out at ₹40-60K/month after 15 years.</p>
          </div>
        </div>
      </section>

      {/* Daily Work & Responsibilities */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            A Day in a Chef's Life (Brutal Schedule)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Core Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Flame className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Cooking & Preparation:</strong> Mise en place (prep work), cooking during service, maintain consistency, execute recipes perfectly, handle special requests</span>
                </li>
                <li className="flex items-start">
                  <Utensils className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Menu Planning:</strong> Design seasonal menus, calculate food cost, create new dishes, balance flavors/textures, consider dietary restrictions</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Kitchen Management:</strong> Lead team, train junior chefs, maintain hygiene standards, manage inventory, coordinate with suppliers</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Service Pressure:</strong> Handle 100-300 orders during peak. Every dish must be perfect. Work under extreme time pressure. Multitask 10+ things simultaneously</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Typical Daily Schedule</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">10 AM - 3 PM: Prep & Lunch Service</h4>
                  <p className="text-sm text-gray-700">Arrive, prep ingredients, lunch service 12-3 PM. Chopping vegetables, making stocks, preparing sauces. Lunch rush 1-2:30 PM</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">3 PM - 6 PM: Break & Dinner Prep</h4>
                  <p className="text-sm text-gray-700">2-hour break (only rest). Then dinner prep—marinating meats, baking bread, preparing desserts. Get ready for dinner rush</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">6 PM - 11 PM: Dinner Service (INTENSE)</h4>
                  <p className="text-sm text-gray-700">Peak time. 100-200 orders in 4 hours. Non-stop cooking, plating, shouting. Kitchen = warzone. Heat, stress, chaos. Most exhausting part</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">11 PM - 12 AM: Cleanup & Close</h4>
                  <p className="text-sm text-gray-700">Clean kitchen, store food, prep for tomorrow. Reach home 12:30-1 AM. Sleep 6-7 hours. Repeat. Weekend = busiest</p>
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
            How to Become a Professional Chef
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border mb-8">
            <h3 className="text-xl font-semibold mb-6">Education Options (Formal vs Apprenticeship)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Culinary Institute Diploma (Recommended)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Institute of Hotel Management (IHM):</strong> 1-2 year Diploma/Certificate in Culinary Arts, ₹50K-2L fees, government-affiliated, best reputation</li>
                  <li>• <strong>National Academy of Event Management (NAEMD):</strong> Culinary Arts courses, 6-12 months, ₹1-3L fees</li>
                  <li>• <strong>Academy of Pastry & Culinary Arts (APCA):</strong> Mumbai-based, international curriculum, 1 year, ₹3-5L</li>
                  <li>• <strong>Welcomgroup Graduate School of Hotel Administration (WGSHA):</strong> Manipal, 3-year degree, ₹8-12L total</li>
                  <li>• Entry: 10+2 pass, some require 50% marks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Apprenticeship Route (Traditional)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Join restaurant kitchen as trainee (₹8-12K/month)</li>
                  <li>• Learn directly from head chef for 2-3 years</li>
                  <li>• No formal degree, pure hands-on experience</li>
                  <li>• Slower growth but saves course fees</li>
                  <li>• Many celebrity chefs took this route</li>
                  <li>• Requires patience & willingness to start from bottom</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-gray-800"><strong>Best Path:</strong> 1-year culinary diploma from IHM/NAEMD (₹50K-2L) + then join hotel/restaurant kitchen as commis chef. Diploma gives foundation + basic techniques + industry connections. Real learning happens in professional kitchen over 5-10 years. International culinary schools abroad (Le Cordon Bleu, CIA) cost ₹15-40L—only worth if planning international career.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">Culinary Skills Progression</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-orange-900 mb-3">Basics (0-1 year)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Knife skills (julienne, dice, brunoise)</li>
                  <li>• Cooking methods (sauté, roast, braise, poach)</li>
                  <li>• Mother sauces (French cuisine foundation)</li>
                  <li>• Food safety & hygiene (HACCP standards)</li>
                  <li>• Mise en place (prep & organization)</li>
                  <li>• Basic plating & presentation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-900 mb-3">Intermediate (1-5 years)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Regional cuisines (Italian, French, Asian, Indian)</li>
                  <li>• Advanced cooking techniques (sous vide, molecular)</li>
                  <li>• Butchery & seafood preparation</li>
                  <li>• Pastry & dessert basics</li>
                  <li>• Menu costing & food cost control</li>
                  <li>• Leading a station during service</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-900 mb-3">Advanced (5+ years)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Menu design & innovation</li>
                  <li>• Kitchen management & leadership</li>
                  <li>• Signature dish creation</li>
                  <li>• Trend forecasting & adaptation</li>
                  <li>• Training & mentoring junior chefs</li>
                  <li>• Restaurant operations & P&L</li>
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
            <ChefHat className="h-8 w-8 text-yellow-600 mr-3" />
            Essential Skills for Professional Chefs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Culinary Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Cooking techniques:</strong> Mastery of all methods</li>
                <li>• <strong>Knife skills:</strong> Speed + precision + safety</li>
                <li>• <strong>Flavor profiles:</strong> Balancing taste & seasoning</li>
                <li>• <strong>Plating & presentation:</strong> Visual appeal</li>
                <li>• <strong>Recipe development:</strong> Create new dishes</li>
                <li>• <strong>Food costing:</strong> Calculate profit margins</li>
                <li>• <strong>Multiple cuisines:</strong> Indian, Continental, Asian</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Physical & Mental Stamina (CRITICAL!)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Physical endurance:</strong> Stand 12-14 hours daily</li>
                <li>• <strong>Heat tolerance:</strong> Work in 40-50°C kitchens</li>
                <li>• <strong>Speed & multitasking:</strong> Handle 10 dishes simultaneously</li>
                <li>• <strong>Pressure handling:</strong> Peak service = extreme stress</li>
                <li>• <strong>Consistency:</strong> Every dish identical quality</li>
                <li>• <strong>Attention to detail:</strong> One mistake = dish wasted</li>
                <li>• <strong>Thick skin:</strong> Handle shouting/criticism daily</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Management & Leadership</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Team leadership:</strong> Manage 5-20 kitchen staff</li>
                <li>• <strong>Training:</strong> Teach junior chefs</li>
                <li>• <strong>Inventory management:</strong> Order supplies, reduce waste</li>
                <li>• <strong>Time management:</strong> Coordinate multiple stations</li>
                <li>• <strong>Communication:</strong> Clear instructions during rush</li>
                <li>• <strong>Problem-solving:</strong> Handle equipment failures/shortages</li>
                <li>• <strong>Hygiene enforcement:</strong> Maintain food safety standards</li>
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
            Where Professional Chefs Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border border-blue-200">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Hotels (5-Star)</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Executive Chef:</strong> ₹10-20L per year, full kitchen control</li>
                <li><strong>Sous Chef:</strong> ₹50-80K/month, second-in-command</li>
                <li><strong>Chef de Partie:</strong> ₹25-45K/month, station chef</li>
                <li><strong>Pros:</strong> Structured growth, stable salary, benefits, prestige</li>
                <li><strong>Cons:</strong> Corporate hierarchy, limited creativity, long hours</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border border-orange-200">
              <h3 className="font-semibold text-lg mb-4 text-orange-900">Restaurants</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Fine dining:</strong> ₹30-60K/month, creative freedom</li>
                <li><strong>Casual dining:</strong> ₹20-40K/month, high volume</li>
                <li><strong>Cloud kitchens:</strong> ₹25-50K/month, delivery focus</li>
                <li><strong>Pros:</strong> More creativity, smaller teams, faster growth</li>
                <li><strong>Cons:</strong> Lower pay than hotels, unstable (restaurant closures common)</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-sm border border-red-200">
              <h3 className="font-semibold text-lg mb-4 text-red-900">Own Restaurant (High Risk)</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Investment:</strong> ₹25L-1Cr+ (location, setup, licenses)</li>
                <li><strong>Earnings:</strong> ₹10-50L+ per year (if successful)</li>
                <li><strong>Reality:</strong> 60% shut within 2 years, massive stress</li>
                <li><strong>Challenges:</strong> Rent, staff, food waste, competition, permits</li>
                <li><strong>When:</strong> After 10-15 years experience + capital + loyal following</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border border-purple-200">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Celebrity Chef / Media</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>TV shows:</strong> MasterChef, cooking shows ₹5-20L per season</li>
                <li><strong>YouTube/Instagram:</strong> Recipe content, brand deals ₹3-15L</li>
                <li><strong>Cookbooks:</strong> ₹2-10L per book (if famous)</li>
                <li><strong>Workshops:</strong> ₹20-50K per workshop</li>
                <li><strong>Entry:</strong> Build reputation first 10-15 years, then leverage media</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border border-green-200">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Cruise Ships / International</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Cruise ships:</strong> $1500-3500/month (₹1.2-3L), tax-free</li>
                <li><strong>Middle East:</strong> ₹5-12L per year, hotel chains</li>
                <li><strong>Europe/USA:</strong> ₹15-40L+ per year (requires visa)</li>
                <li><strong>Pros:</strong> High pay, travel, international experience</li>
                <li><strong>Entry:</strong> 3-5 years experience + international culinary degree helps</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm border border-indigo-200">
              <h3 className="font-semibold text-lg mb-4 text-indigo-900">Culinary Trainer / Consultant</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Culinary school instructor:</strong> ₹30-60K/month stable hours</li>
                <li><strong>Restaurant consultant:</strong> ₹50K-3L per project</li>
                <li><strong>Menu development:</strong> ₹30K-1L per menu</li>
                <li><strong>Food styling:</strong> Photoshoots, ads ₹10-50K per day</li>
                <li><strong>When:</strong> After 10+ years + recognized expertise</li>
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
            Career Roadmap for Professional Chefs
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 0-2: Culinary Education & Entry</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Foundation</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Get Diploma:</strong> 1-year culinary arts from IHM/NAEMD (₹50K-2L). Learn knife skills, cooking methods, food safety</span>
                </li>
                <li className="flex items-start">
                  <Building className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Join as Commis Chef:</strong> ₹12-20K/month in hotel/restaurant. Prep work, cleaning, assisting. Humble beginning but essential</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Survive the Hours:</strong> 12-14 hour days, standing entire time. Burns, cuts, exhaustion. 50% quit within 1 year. Toughen up</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 2-7: Chef de Partie (Station Chef)</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Growth Phase</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Handle Your Station:</strong> ₹20-40K/month. Responsible for one section (grill, sauce, pasta). Lead 1-2 junior chefs</span>
                </li>
                <li className="flex items-start">
                  <Flame className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Master Techniques:</strong> Perfect your cooking methods. Develop speed + consistency. Learn to work under extreme pressure during service</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Switch Workplaces:</strong> Move from hotel to fine dining to learn different cuisines. Each move = ₹5-10K salary jump. Build diverse skills</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 7-15+: Sous Chef to Executive Chef</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Senior Level</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Sous Chef:</strong> ₹40-80K/month. Second-in-command. Manage entire kitchen when head chef absent. Menu planning involvement</span>
                </li>
                <li className="flex items-start">
                  <ChefHat className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Executive Chef:</strong> ₹8-20L per year (5-star hotels). Full control—menu design, team hiring, cost management. Peak of employed chef career</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Alternate Paths:</strong> Own restaurant (₹25L-1Cr investment, high risk), Celebrity chef (media appearances ₹5-20L), Consultant (₹50K-3L per project)</span>
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
            Challenges & Difficulty Reality
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Extremely Difficult
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Physical toll (12-14 hours standing in 40-50°C heat)</li>
                <li>• Starting salary ₹12-20K for brutal work (50-70/hour)</li>
                <li>• Succeeding with own restaurant (60% fail, ₹25L-1Cr at risk)</li>
                <li>• Handling peak service pressure (200 orders in 4 hours)</li>
                <li>• Maintaining work-life balance (weekends/holidays mandatory)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                <ThermometerSun className="h-6 w-6 mr-2" />
                Moderate Challenges
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Mastering advanced cooking techniques (sous vide, molecular)</li>
                <li>• Working under head chef shouting/criticism</li>
                <li>• Managing kitchen team & inventory</li>
                <li>• Consistent quality across 100+ dishes daily</li>
                <li>• Career growth (takes 10+ years to reach ₹50K+/month)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Manageable Aspects
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Learning basic cooking (if passionate, 6-12 months)</li>
                <li>• Entry barrier low (1-year diploma enough)</li>
                <li>• Jobs always available (hotels/restaurants everywhere)</li>
                <li>• Following recipes & standard procedures</li>
                <li>• Knife skills & food prep (practice makes perfect)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Utensils className="h-8 w-8 text-purple-600 mr-3" />
            Chef Specializations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Flame className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Indian Cuisine Chef</h3>
              <p className="text-gray-600 mb-4 text-sm">Master regional cuisines (North Indian, South, Bengali, Gujarati). Tandoor, curries, biryanis, dosas</p>
              <div className="bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹3-15 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <ChefHat className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Continental/European Chef</h3>
              <p className="text-gray-600 mb-4 text-sm">Italian, French, Mediterranean. Pasta, steaks, sauces, fine dining focus</p>
              <div className="bg-red-100 text-red-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹5-20 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Star className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Pastry Chef / Pâtissier</h3>
              <p className="text-gray-600 mb-4 text-sm">Desserts, cakes, pastries, bread. Separate specialization requiring different skill set</p>
              <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹4-18 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Building className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Asian Cuisine Chef</h3>
              <p className="text-gray-600 mb-4 text-sm">Chinese, Thai, Japanese, Pan-Asian. Sushi, dim sum, stir-fry, ramen specialization</p>
              <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹4-16 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <TrendingUp className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Sous Chef (Second-in-Command)</h3>
              <p className="text-gray-600 mb-4 text-sm">Manage entire kitchen operations, lead team, menu planning. Critical mid-senior position</p>
              <div className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹5-12 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Heart className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Executive Chef (Top Position)</h3>
              <p className="text-gray-600 mb-4 text-sm">Full kitchen control, menu design, team management, cost control. Peak of chef career</p>
              <div className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹8-25L+ LPA</div>
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
                  <span className="text-gray-700"><strong>Creative & Satisfying Work:</strong> Design dishes, experiment with flavors, see people enjoy your food. Immediate feedback and satisfaction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Low Entry Barrier:</strong> 1-year diploma enough. No expensive degree needed. Can start apprenticeship directly. Skill-based progression</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Jobs Everywhere:</strong> Every hotel, restaurant, resort needs chefs. Can work anywhere—India, cruise ships, international. Always in demand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Fame Potential:</strong> Celebrity chefs (Sanjeev Kapoor, Vikas Khanna) earn ₹15-40L+. YouTube, cookbooks, TV shows. Own restaurant possible</span>
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
                  <span className="text-gray-700"><strong>Brutal Physical Work:</strong> 12-14 hours standing in 40-50°C heat. Burns, cuts, back pain common. Exhaustion severe. 50% quit within 1 year</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Low Starting Pay:</strong> ₹12-20K/month for 12-hour days (₹50-70/hour!). Takes 10+ years to reach ₹50K+. Slow financial growth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Zero Work-Life Balance:</strong> Weekends/holidays = busiest time. Work when everyone else is celebrating. Social life impossible. Family time rare</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>High-Stress Environment:</strong> Head chef shouts, mistakes = humiliation. Peak service = warzone. Extreme pressure. Many develop health issues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ChefHat className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Should You Become a Professional Chef?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Professional cooking is ideal if you're passionate about food, willing to endure physical hardship, and okay with low starting pay for years. It's NOT Hotel Management—you'll be in the kitchen 12-14 hours daily, not managing front desk. Reality check: Entry salary = ₹12-20K/month (₹50-70 per hour!) for standing in 40-50°C heat. Burns from pans/ovens and knife cuts happen weekly. Weekend/holiday work mandatory—when others celebrate, you cook. Takes 10+ years to reach executive chef level (₹60K+/month). Own restaurant requires ₹25L-1Cr investment with 60% failing within 2 years. Celebrity chef status (₹15-40L+) is top 0.1%. Best path: 1-year IHM diploma (₹50K-2L) → Join hotel/restaurant → Survive 5 years → Specialize in cuisine → Then either executive chef position OR own restaurant (high risk). If you want office job comfort and weekends off, this career will destroy you. But if you truly love cooking and have thick skin for criticism/shouting, it's deeply satisfying creative work. Only pursue if cooking is your PASSION, not just interest.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/emerging-careers" 
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore More Emerging Careers
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

export default ProfessionalChefDetails
