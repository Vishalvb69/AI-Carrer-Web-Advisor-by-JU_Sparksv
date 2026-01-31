import { Link } from 'react-router-dom';
import { ArrowLeft, Palette, DollarSign, Briefcase, TrendingUp, AlertTriangle, Clock, BookOpen, CheckCircle2, XCircle, Users, Star, Sparkles } from 'lucide-react';

export default function MakeupArtistDetails() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/explore-careers" className="inline-flex items-center text-white/90 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Careers
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <Palette className="w-12 h-12 mr-4" />
              <h1 className="text-5xl font-bold">Professional Makeup Artist</h1>
            </div>
            <p className="text-xl text-white/90 mb-8">
              Apply makeup for weddings, films, fashion shoots, or personal clients. Build skills through training, practice, and portfolio—no degree required.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Sparkles className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">Top Niche</div>
                <div className="text-lg font-semibold">Bridal Makeup</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <DollarSign className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">Bridal Rate</div>
                <div className="text-lg font-semibold">₹8K-80K per bride</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">Film/TV</div>
                <div className="text-lg font-semibold">₹5K-50K per day</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Star className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">Celebrity MUA</div>
                <div className="text-lg font-semibold">₹50K-5L per event</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reality Check Section */}
      <div className="container mx-auto px-4 -mt-10 relative z-20 mb-16">
        <div className="bg-white rounded-xl shadow-2xl p-8 border-t-4 border-pink-600">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-8 h-8 text-pink-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Reality Check: The Honest Truth</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-50 border-l-4 border-pink-600 p-5 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Portfolio & Reputation = Everything</h3>
              <p className="text-gray-700 text-sm">
                Clients book based on Instagram portfolio and word-of-mouth. First 1-2 years: free/low-paid work building portfolio. No followers = no bookings. Must constantly post work, engage audience, stay trendy. One bad review can destroy reputation. Celebrity MUAs have 50K+ followers—takes years to build.
              </p>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-600 p-5 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Income Extremely Variable - Seasonal + Freelance</h3>
              <p className="text-gray-700 text-sm">
                Wedding season (Oct-Mar) = booked solid, earn ₹80K-3L/month. Off-season (Apr-Sep) = almost zero bookings, earn ₹10-40K/month. No fixed salary—100% freelance. Bad month = ₹5K income. Must save aggressively during peak season to survive off-season. Many quit within 2 years due to inconsistency.
              </p>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-600 p-5 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Physically Demanding - 12-16 Hour Wedding Days</h3>
              <p className="text-gray-700 text-sm">
                Bridal makeup starts 4-6 AM, finish midnight+ (retouch throughout wedding). Stand entire day. Back pain, neck pain common. Wedding season = 20-25 weddings/month (work 7 days/week). Exhaustion, burnout frequent. Miss family events, festivals, weekends. Body takes toll after 5-10 years (many reduce workload or quit).
              </p>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-600 p-5 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">High Product Investment - ₹50K-2L Startup Cost</h3>
              <p className="text-gray-700 text-sm">
                Professional makeup kit: ₹50K-2L (MAC, Huda Beauty, Dior foundations ₹3-5K each). Need 30+ shades foundation, 50+ lipsticks, brushes ₹15-30K, lighting ₹20K. Replace products every 6-12 months (₹20-50K annually). Cheap products = bad results = no clients. Plus transportation, assistant costs. Many beginners underestimate investment.
              </p>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-600 p-5 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Film/TV Glamorous But Pays Peanuts Initially</h3>
              <p className="text-gray-700 text-sm">
                Film junior MUA: ₹500-2K per day (12-16 hour shoots). Senior MUA: ₹5-15K per day. Celebrity MUA: ₹50K-5L per event (but only 10-20 in India at that level). Film work irregular—1 project ends, 2-3 months unemployment. Union politics, nepotism heavy. Bridal makeup more stable income than film for 90% MUAs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Income Reality Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="w-8 h-8 text-pink-600 mr-3" />
            Income Reality: From Free Work to ₹10L+/Month (If You Make It)
          </h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-yellow-900">Truth:</strong> Income HIGHLY variable. Wedding season = ₹1-3L/month possible. Off-season = ₹10-40K/month. First 1-2 years mostly free/cheap work (₹1-5K per bride) building portfolio. Only top 5% earn ₹5L+/month consistently. Most earn ₹30K-1L/month average across year (after expenses).
            </p>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-gray-400 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Beginner (0-2 years): ₹0-30K/month</h3>
              <p className="text-gray-700 text-sm">Do free makeup for friends, models (portfolio building). Charge ₹1-5K per bride. Maybe 5-10 clients/month = ₹5-50K gross. Minus products ₹10-20K = ₹0-30K net. Many lose money initially.</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Working MUA (2-5 years): ₹40K-1.5L/month average</h3>
              <p className="text-gray-700 text-sm">Charge ₹8-20K per bride. Wedding season 15-25 brides/month = ₹1.2-5L gross. Off-season 3-8 brides = ₹25K-1.6L. Average ₹60K-2L/month gross, ₹40K-1.5L net after expenses.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Established MUA (5-10 years): ₹1-3L/month average</h3>
              <p className="text-gray-700 text-sm">Charge ₹20-50K per bride. Wedding season 20-30 brides = ₹4-15L gross/month. Off-season 5-10 brides = ₹1-5L. Plus courses/workshops ₹50K-2L/month. Average ₹1.5-4L/month gross, ₹1-3L net.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Celebrity MUA / Brand Owner: ₹5-20L+/month</h3>
              <p className="text-gray-700 text-sm">Charge ₹50K-2L per bride/event. Film shoots ₹25-80K/day. Own academy ₹5-15L/month. Product line ₹10-50L/month. But only 20-30 MUAs in India at this level (0.1%). Need 10+ years building brand.</p>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Reality:</strong> 70% of makeup artists earn ₹20K-80K/month average. Income wildly inconsistent month-to-month. Must work 7 days/week wedding season (no social life). If not getting bookings after 2 years, reassess. <strong>Don't quit stable job until earning ₹60K+/month consistently for 6+ months.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Daily Life Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Clock className="w-8 h-8 text-pink-600 mr-3" />
            Daily Life: Irregular Schedule + Intense Peak Season
          </h2>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg border-l-4 border-pink-600 mb-6">
            <h3 className="font-bold text-gray-900 mb-3">Typical Wedding Day (Peak Season)</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold text-gray-900 mb-2">3:30 AM - Wake Up, Travel</p>
                <p className="text-gray-700 mb-3">Pack kit (10-15kg), drive to bride's place (1-2 hours).</p>

                <p className="font-bold text-gray-900 mb-2">5:30 AM - Start Bridal Makeup</p>
                <p className="text-gray-700 mb-3">2-3 hours on bride. High pressure—must be perfect.</p>

                <p className="font-bold text-gray-900 mb-2">8:30 AM - Family Makeup</p>
                <p className="text-gray-700">Mother, sisters (4-6 people), 30-45 min each.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">12:00 PM - Travel to Venue</p>
                <p className="text-gray-700 mb-3">Follow bride, set up touch-up station.</p>

                <p className="font-bold text-gray-900 mb-2">1:00 PM - 10:00 PM - Touch-Ups</p>
                <p className="text-gray-700 mb-3">Retouch bride 5-8 times (every photo session, ceremony).</p>

                <p className="font-bold text-gray-900 mb-2">11:00 PM - Pack & Travel Home</p>
                <p className="text-gray-700">Exhausted. Sleep 2-3 AM. Repeat next day.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-5 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong>Peak Season Reality:</strong> Oct-Mar = 20-25 weddings/month (work EVERY DAY including festivals). April-Sep = 3-10 weddings/month (lots of free time but less income). <strong className="text-yellow-900">Physically brutal: back pain, neck pain, varicose veins from standing 12-16 hours. Many MUAs can't sustain after 5-10 years.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Education & Entry Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <BookOpen className="w-8 h-8 text-pink-600 mr-3" />
            How to Start: Course → Practice → Portfolio → Bookings
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Step 1: Learn Basics (3-6 months)</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Option A:</strong> Makeup academy course ₹50K-3L (Meribindiya, Zorains, VLCC, local studios)</li>
                <li>• <strong>Option B:</strong> Assist established MUA ₹5-10K/month salary (hands-on learning)</li>
                <li>• Learn: skin prep, foundation matching, contouring, eye makeup, bridal looks, airbrush</li>
                <li>• <strong>Warning:</strong> Many academies overcharge, teach outdated techniques. Research reviews carefully.</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Step 2: Build Portfolio (6-12 months)</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Do FREE makeup for friends, models, photoshoots (get professional photos)</li>
                <li>• Shoot 20-30 diverse looks (bridal, party, editorial, natural)</li>
                <li>• Create Instagram (MANDATORY—90% bookings come from Insta)</li>
                <li>• Post consistently (3-5 times/week), use trending reels, hashtags</li>
                <li>• Charge ₹1-5K first 10-20 clients (below market to get bookings)</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Step 3: Invest in Kit (₹50K-2L)</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Foundations:</strong> MAC, Estee Lauder, Huda (30+ shades) = ₹60K-1.5L</li>
                <li>• <strong>Lipsticks:</strong> 50+ shades (MAC, Dior, Charlotte Tilbury) = ₹25K-80K</li>
                <li>• <strong>Brushes:</strong> Sigma, MAC, Morphe (25+ brushes) = ₹15-30K</li>
                <li>• <strong>Others:</strong> Palettes, setting sprays, eyelashes, tools = ₹20-40K</li>
                <li>• <strong>Lighting:</strong> Ring light (essential for evening makeup) = ₹8-20K</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Step 4: Get Bookings & Scale</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Start ₹5-10K per bride, increase ₹2-3K every 6 months as portfolio grows</li>
                <li>• Encourage clients to post reviews, tag you (word-of-mouth critical)</li>
                <li>• Respond to DMs within 1 hour (brides book FAST—snooze = lose client)</li>
                <li>• After 2-3 years, hire assistant (₹8-15K/month), book 2-3 brides/day</li>
                <li>• Diversify: teach workshops ₹5-15K/student, YouTube tutorials, product collaborations</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Smart Path:</strong> (1) Learn makeup while working job/studying (evenings/weekends), (2) Spend 1 year building portfolio part-time (free/cheap work), (3) If getting 10+ bookings/month at ₹8K+, quit job and go full-time, (4) If NOT getting bookings after 1 year serious effort, maybe not viable—have backup. <strong>DON'T take ₹2L loan for makeup course then realize you hate it or can't get clients.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Skills Required Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Sparkles className="w-8 h-8 text-pink-600 mr-3" />
            Skills Required: Technical + People Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-pink-50 p-5 rounded-lg border-t-4 border-pink-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Technical Skills</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Foundation matching (all skin tones)</li>
                <li>• Contouring, highlighting, blending</li>
                <li>• Eye makeup (cut crease, smokey)</li>
                <li>• Bridal looks (traditional + modern)</li>
                <li>• Airbrush technique</li>
                <li>• Product knowledge (what works)</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-t-4 border-purple-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">People Skills</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Handle nervous/difficult brides</li>
                <li>• Work under pressure (time-bound)</li>
                <li>• Family politics at weddings</li>
                <li>• Professional communication</li>
                <li>• Upsell services (family makeup)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-t-4 border-blue-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Business Skills</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Instagram marketing (CRITICAL)</li>
                <li>• Photography basics (lighting/angles)</li>
                <li>• Pricing strategy</li>
                <li>• Client management, contracts</li>
                <li>• Booking calendar management</li>
                <li>• Networking with photographers, planners</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong>Reality:</strong> Technical skills = 40%, People skills = 30%, Marketing = 30%. You can be BEST makeup artist but without Instagram game + people skills = no bookings. Conversely, average skills + great marketing = fully booked. <strong className="text-yellow-900">Instagram is 80% of getting clients—if you hate social media, this career will struggle.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Career Paths Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Briefcase className="w-8 h-8 text-pink-600 mr-3" />
            Career Paths: Multiple Income Streams Smart
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-50 p-5 rounded-lg border-l-4 border-pink-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bridal Makeup Artist (Most Common)</h3>
              <p className="text-sm text-gray-700 mb-2">Wedding makeup in homes/salons. Charge ₹8-80K per bride. Peak season fully booked. Most stable path for 80% MUAs.</p>
              <p className="text-sm text-gray-600"><strong>₹40K-2L/month average</strong> | Physically demanding | Need Instagram presence</p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Film/TV Makeup Artist</h3>
              <p className="text-sm text-gray-700 mb-2">Work on shoots, ads, web series, films. Junior ₹500-2K/day, Senior ₹5-50K/day. Irregular work but glamorous.</p>
              <p className="text-sm text-gray-600"><strong>₹30K-1.5L/month</strong> | Inconsistent bookings | Network-heavy | Union politics</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Salon Makeup Artist (Stable)</h3>
              <p className="text-sm text-gray-700 mb-2">Work at MAC, Sephora, luxury salons. Salary ₹15-40K/month + commissions. Fixed hours but lower income ceiling.</p>
              <p className="text-sm text-gray-600"><strong>₹18-50K/month</strong> | Stable salary | No freelance stress | Limited growth</p>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Makeup Academy Owner</h3>
              <p className="text-sm text-gray-700 mb-2">Teach courses after 5-10 years experience. Charge ₹30K-2L per student. Run batches of 10-20 students monthly.</p>
              <p className="text-sm text-gray-600"><strong>₹2-10L/month potential</strong> | Need reputation | High startup cost ₹10-30L</p>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Beauty Influencer / YouTuber</h3>
              <p className="text-sm text-gray-700 mb-2">YouTube tutorials, Instagram reels, brand sponsorships. Top influencers earn ₹50K-10L+ per sponsored post.</p>
              <p className="text-sm text-gray-600"><strong>₹20K-20L+/month</strong> (massive range) | Content creation skills | Saturated market</p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Product Line Owner (Advanced)</h3>
              <p className="text-sm text-gray-700 mb-2">Launch makeup brand after building audience. Investment ₹20L-1Cr. Only feasible for celebrity MUAs with 100K+ followers.</p>
              <p className="text-sm text-gray-600"><strong>₹5-50L/month</strong> (if successful) | High risk | Need large audience first</p>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Smart Strategy:</strong> Start with bridal makeup (most bookings). After 3-5 years, diversify: teach workshops, YouTube tutorials, product collaborations. DON'T rely only on bridal—income too seasonal. Multiple streams = stability. Most successful MUAs earn 60% bridal, 20% teaching, 20% brand collabs/social media.
            </p>
          </div>
        </div>
      </div>

      {/* Difficulty Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Difficulty Level: Moderate Entry, Hard to Scale</h2>

          <div className="space-y-3">
            <div className="border-l-4 border-green-600 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-1">🟢 Manageable: Entry & Learning</h3>
              <p className="text-gray-700 text-sm">No degree required, 3-6 month courses available ₹50K-3L (or assist for free), can start with basic kit ₹30-50K, scalable investment (buy products gradually), work from home initially</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-1">🟠 Moderate: Building Clientele</h3>
              <p className="text-gray-700 text-sm">Takes 1-2 years build portfolio + Instagram presence, highly competitive (thousands of MUAs in every city), first year = mostly free/cheap work, need networking + marketing skills, client retention challenging</p>
            </div>

            <div className="border-l-4 border-red-600 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-1">🔴 Extreme: Income Stability & Scaling</h3>
              <p className="text-gray-700 text-sm">Income wildly inconsistent (peak season vs off-season), physically brutal hours (12-16 hour days), work every weekend + holidays when others party, body deteriorates after 5-10 years, reaching ₹5L+/month = 5% achieve it, need constant social media presence (exhausting)</p>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Overall: MODERATE-HARD.</strong> Easy to START, hard to sustain long-term. Physical toll + income inconsistency makes many quit within 5 years. Only 10-20% MUAs last 10+ years full-time. Smart approach: Keep it part-time/side hustle until earning ₹60K+/month consistently, OR diversify into teaching/products to reduce physical workload. <strong>Don't quit stable job dreaming of celebrity MUA life—odds are 0.1%.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Pros and Cons Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pros and Cons</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                <CheckCircle2 className="w-6 h-6 mr-2" />
                Pros
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">No formal degree required - </span>
                    <span className="text-gray-700 text-sm">Just skills, portfolio, and Instagram presence.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">High earning potential top tier - </span>
                    <span className="text-gray-700 text-sm">Celebrity MUAs earn ₹5-20L+/month. Bridal peak season ₹2-4L/month possible.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Creative satisfaction - </span>
                    <span className="text-gray-700 text-sm">Artistic work, see immediate results, make people happy on special days.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Flexible schedule off-season - </span>
                    <span className="text-gray-700 text-sm">April-Sep relatively free (if willing to accept lower income).</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Multiple income streams - </span>
                    <span className="text-gray-700 text-sm">Bridal, teaching, YouTube, product collabs—diversify reduces risk.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                <XCircle className="w-6 h-6 mr-2" />
                Cons
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Income extremely inconsistent - </span>
                    <span className="text-gray-700 text-sm">Wedding season ₹1-3L/month, off-season ₹10-40K. Must save aggressively to survive.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Physically brutal - </span>
                    <span className="text-gray-700 text-sm">12-16 hour wedding days standing. Back/neck pain. Work 7 days/week peak season.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">High startup investment - </span>
                    <span className="text-gray-700 text-sm">₹50K-2L for professional kit + ₹20-50K annual product replacement.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Instagram dependency - </span>
                    <span className="text-gray-700 text-sm">90% bookings from social media. If you hate posting content, career struggles.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Zero social life peak season - </span>
                    <span className="text-gray-700 text-sm">Work every weekend, festival, holiday (when weddings happen). Miss family events.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white rounded-xl shadow-2xl p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Palette className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold text-center mb-6">
              Is Makeup Artistry Right For You?
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 mb-5">
              <p className="text-lg leading-relaxed mb-3">
                <strong className="text-yellow-300">Good career if:</strong> Love makeup, enjoy making people happy, can handle inconsistent income, comfortable with social media, willing to work brutal hours peak season, don't mind physical toll.
              </p>
              <p className="text-white/90 mb-3"><strong className="text-yellow-300">ONLY pursue full-time if:</strong></p>
              <ul className="space-y-1 text-white/90 text-sm">
                <li>• PASSIONATE about makeup (not just "seems fun")</li>
                <li>• Can invest ₹50K-2L in kit without loan</li>
                <li>• Willing to work for free 6-12 months building portfolio</li>
                <li>• Comfortable posting on Instagram daily (80% of bookings)</li>
                <li>• Have financial cushion to survive off-season ₹10-40K months</li>
                <li>• Can handle standing 12-16 hours (physically demanding)</li>
              </ul>
            </div>

            <div className="bg-green-900/50 backdrop-blur-sm rounded-lg p-5 mb-5 border-l-4 border-green-400">
              <p className="text-sm text-white/90 mb-2"><strong className="text-green-300">Smart Path (Recommended):</strong></p>
              <ol className="space-y-1 text-white/90 text-sm list-decimal list-inside">
                <li>Learn makeup part-time while working job (weekends, evenings)</li>
                <li>Build portfolio 1 year doing free/cheap work (₹1-5K per bride)</li>
                <li>Invest in kit gradually (start ₹30-50K, upgrade over time)</li>
                <li>Grow Instagram to 2K+ followers (post 3-5 times/week consistently)</li>
                <li>If getting 10+ bookings/month at ₹8K+ = consider full-time</li>
                <li>If NOT getting bookings after 1 year serious effort = keep as side hustle</li>
                <li>After 3-5 years, diversify into teaching/YouTube to reduce physical workload</li>
              </ol>
            </div>

            <div className="bg-red-900/50 backdrop-blur-sm rounded-lg p-5 mb-6 border-l-4 border-red-400">
              <p className="text-sm text-white/90 mb-2"><strong className="text-red-300">Red Flags (Don't Pursue If):</strong></p>
              <ul className="space-y-1 text-white/90 text-sm">
                <li>• Hate social media / posting content (career will fail without Instagram)</li>
                <li>• Need stable monthly income (this is NOT stable—wild fluctuations)</li>
                <li>• Can't stand 12+ hours on feet (weddings are physically brutal)</li>
                <li>• Taking ₹1L+ loan for course (too risky if career doesn't work out)</li>
                <li>• Want work-life balance (peak season = zero social life 6 months)</li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-lg mb-4 leading-relaxed">
                <strong>Final Word:</strong> Makeup artistry CAN be great career—creative, flexible, high earning potential. But income inconsistent, physically demanding, requires constant marketing. <strong className="text-yellow-300">Keep as side hustle initially, go full-time ONLY if getting regular bookings + can handle brutal wedding season.</strong> Most successful MUAs diversify income (bridal + teaching + social media) to reduce seasonality risk.
              </p>
              <Link
                to="/explore-careers"
                className="inline-block bg-white text-pink-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Other Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
