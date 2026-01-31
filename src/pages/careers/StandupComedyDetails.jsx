import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Briefcase, GraduationCap, Target, CheckCircle, XCircle, AlertTriangle, DollarSign, Users, Mic, Laugh, Video, Trophy } from 'lucide-react';

const StandupComedyDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/emerging-careers" className="inline-flex items-center text-yellow-100 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Emerging Careers
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-5xl font-bold mb-4">Stand-up Comedian 🎤</h1>
              <p className="text-2xl text-yellow-100 mb-6">
                Make people laugh, share stories, and build a comedy brand through live shows & OTT platforms
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="text-yellow-100 text-sm">Average Income (Established)</div>
                  <div className="text-2xl font-bold">₹5-20 LPA</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="text-yellow-100 text-sm">Top Comedians</div>
                  <div className="text-2xl font-bold">₹50 Lakh - ₹5 Cr+ LPA</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="text-yellow-100 text-sm">Industry Growth</div>
                  <div className="text-2xl font-bold">35% annually</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Reality Check - Critical Section */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8 mb-8 border-4 border-red-400 shadow-2xl">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-12 h-12 flex-shrink-0 animate-pulse" />
            <div>
              <h2 className="text-3xl font-bold mb-4">⚠️ BRUTAL REALITY CHECK</h2>
              <div className="space-y-3 text-lg">
                <p className="font-bold text-yellow-100">
                  Only 0.5-1% of people attempting stand-up comedy can make a sustainable living from it.
                </p>
                <p>
                  <strong>In India, fewer than 200-300 comedians earn ₹5+ LPA purely from comedy.</strong> 
                  Most successful comedians took 5-8 years of struggling before their first break. Even "famous" 
                  comedians often supplement income with corporate shows, writing, acting, or YouTube content.
                </p>
                <p>
                  <strong className="text-white">The Truth:</strong> You'll perform at small venues for ₹500-2000 per show 
                  initially (if any payment at all). Most shows in first 2-3 years are "open mics" with zero payment. 
                  Even after 5 years, average monthly income is ₹15,000-40,000 for most working comedians.
                </p>
                <p className="text-yellow-100 font-semibold">
                  Top earners (Zakir Khan, Vir Das, Kapil Sharma, etc.) are 0.01% outliers. Their success came 
                  after years of rejection, financial struggles, and multiple failures.
                </p>
                <div className="bg-red-600 rounded-lg p-4 mt-4">
                  <p className="font-bold text-xl mb-2">🚨 SMART STRATEGY 🚨</p>
                  <p>
                    <strong>DO NOT quit your studies/job for comedy.</strong> Pursue comedy as a side hustle while 
                    completing your education/working. Give yourself 3-5 years to test if you have what it takes. 
                    Have a backup career ready. Most successful comedians started while doing regular jobs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Comedians Actually Earn */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-yellow-200">
            <div className="flex items-center mb-6">
              <DollarSign className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Income Reality by Experience</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-red-400 pl-4">
                <h3 className="font-bold text-lg text-gray-900">Years 0-2 (Open Mic Stage)</h3>
                <p className="text-gray-700">₹0-10,000/month</p>
                <p className="text-sm text-gray-600">Performing at free open mics, building material, maybe occasional paid shows ₹500-1000</p>
              </div>
              <div className="border-l-4 border-orange-400 pl-4">
                <h3 className="font-bold text-lg text-gray-900">Years 3-5 (Working Comedian)</h3>
                <p className="text-gray-700">₹15,000-50,000/month</p>
                <p className="text-sm text-gray-600">Regular shows at comedy clubs, ₹2000-5000 per show, 5-10 shows monthly. Still need side income.</p>
              </div>
              <div className="border-l-4 border-yellow-400 pl-4">
                <h3 className="font-bold text-lg text-gray-900">Years 6-10 (Established)</h3>
                <p className="text-gray-700">₹5-20 LPA (₹40k-1.7L/month)</p>
                <p className="text-sm text-gray-600">Your own shows, corporate events ₹50k-2L, ticketed events, YouTube monetization. Still unstable income.</p>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <h3 className="font-bold text-lg text-gray-900">10+ Years (Top Tier) - VERY FEW</h3>
                <p className="text-gray-700">₹50 Lakh - ₹5 Cr+ LPA</p>
                <p className="text-sm text-gray-600">National tours, OTT specials (₹50L-3Cr), brand deals, acting roles. Only 20-30 comedians in India reach this.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-orange-200">
            <div className="flex items-center mb-6">
              <Briefcase className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Income Sources Mix</h2>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">Live Shows (Club/Private)</span>
                  <span className="font-bold text-orange-600">40%</span>
                </div>
                <div className="bg-orange-200 rounded-full h-3">
                  <div className="bg-orange-600 h-3 rounded-full" style={{ width: '40%' }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">₹2k-5k per club show, ₹50k-3L for private/corporate events (after established)</p>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">YouTube/Content Creation</span>
                  <span className="font-bold text-red-600">25%</span>
                </div>
                <div className="bg-red-200 rounded-full h-3">
                  <div className="bg-red-600 h-3 rounded-full" style={{ width: '25%' }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">Monetization requires 100k+ subscribers, consistency. ₹20k-2L monthly possible.</p>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">OTT Specials/Shows</span>
                  <span className="font-bold text-green-600">20%</span>
                </div>
                <div className="bg-green-200 rounded-full h-3">
                  <div className="bg-green-600 h-3 rounded-full" style={{ width: '20%' }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">Amazon Prime/Netflix specials: ₹50L-3Cr (only for top 30-40 comedians). Very rare.</p>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">Writing/Acting/Brand Deals</span>
                  <span className="font-bold text-purple-600">15%</span>
                </div>
                <div className="bg-purple-200 rounded-full h-3">
                  <div className="bg-purple-600 h-3 rounded-full" style={{ width: '15%' }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">Scriptwriting for shows, acting roles, brand collaborations. Requires networking.</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-300">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> These percentages are for comedians who've already "made it" (5+ years in). 
                First 3-4 years, expect 90% of time investment with only 10% monetary return.
              </p>
            </div>
          </div>
        </div>

        {/* Key Responsibilities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-yellow-200">
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 text-yellow-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">What Stand-up Comedians Actually Do</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mic className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Writing Material Daily</h3>
                  <p className="text-gray-700">Spend 3-5 hours daily writing jokes, observing life, noting funny situations. 100 jokes written → 5 work on stage.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Laugh className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Performing at Open Mics</h3>
                  <p className="text-gray-700">Perform at 5-10 open mics weekly initially. Test new jokes, face silence/rejection, learn timing. No payment.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Video className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Building Online Presence</h3>
                  <p className="text-gray-700">Create YouTube clips, Instagram reels, Twitter jokes. Need 50k+ followers to get noticed by promoters.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Networking with Industry</h3>
                  <p className="text-gray-700">Connect with venue owners, promoters, other comedians. Most paid shows come through referrals, not cold outreach.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Trophy className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Doing Paid Shows</h3>
                  <p className="text-gray-700">After 2-3 years: Comedy club shows (₹2-5k), college fests (₹10-50k), corporate events (₹50k-2L for established).</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Briefcase className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Handling Business Side</h3>
                  <p className="text-gray-700">Book venues, promote shows, handle tickets, manage social media, reply to booking emails. You're your own manager initially.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Constantly Improving Craft</h3>
                  <p className="text-gray-700">Watch other comedians, study comedy specials, analyze what works, rewrite jokes 20-30 times until they land perfectly.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Dealing with Hecklers/Trolls</h3>
                  <p className="text-gray-700">Handle audience disruptions, online hate, cancel culture threats. Thick skin essential. Comedy often controversial.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap to Becoming a Comedian */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-orange-200">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Your Realistic 5-Year Roadmap</h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-yellow-500 pl-6 py-2">
              <div className="flex items-center mb-2">
                <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                <h3 className="text-xl font-bold text-gray-900">Year 0-1: Watch, Write, Open Mic</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>Actions:</strong> Watch 500+ hours of stand-up (Indian + International). Write daily - observations, 
                jokes, funny stories. Attend comedy shows. Find open mics in your city. Prepare 5-minute set.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Reality:</strong> You'll bomb multiple times. Jokes you think are hilarious will get silence. 
                This is normal. Keep going. Don't quit your job/studies.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 py-2">
              <div className="flex items-center mb-2">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                <h3 className="text-xl font-bold text-gray-900">Year 1-3: Perform Weekly, Build 20-Min Set</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>Actions:</strong> Perform at 5-10 open mics monthly. Record every performance. Study what works. 
                Build relationships with comedy community. Develop 20-30 minutes of solid material. Start YouTube channel.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Reality:</strong> Still minimal income (₹5-15k/month from occasional shows). Most shows unpaid. 
                Need day job for survival. Many quit at this stage.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-2">
              <div className="flex items-center mb-2">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                <h3 className="text-xl font-bold text-gray-900">Year 3-5: Get Paid Shows, Build Following</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>Actions:</strong> Perform at comedy clubs regularly (₹2-5k per show). Chase corporate bookings. 
                Grow YouTube to 50k+ subscribers. Perform at colleges (₹10-30k). Network with established comedians.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Reality:</strong> Income ₹20-60k/month if you're doing well. Still unstable - some months great, 
                some months zero. Need to constantly hustle for shows.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 py-2">
              <div className="flex items-center mb-2">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</div>
                <h3 className="text-xl font-bold text-gray-900">Year 5-8: Establish Your Brand</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>Actions:</strong> Have 60-min solo show ready. Tour multiple cities. Pitch to OTT platforms. 
                Build 100k+ social following. Charge ₹30-80k for corporate shows. Collaborate with brands.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Reality:</strong> If you've reached here, you're in top 5% of comedians who started. Income ₹5-15 LPA. 
                Still need to constantly create content and tour.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2">
              <div className="flex items-center mb-2">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">5</div>
                <h3 className="text-xl font-bold text-gray-900">Year 8+: National Recognition (If Lucky)</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>Actions:</strong> Release OTT special (Amazon Prime/Netflix). National tours with 500+ people venues. 
                Corporate shows at ₹1-3L. Brand ambassadorships. Acting opportunities. Book deals.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Reality:</strong> Only 20-30 comedians reach this level in India. Requires talent, timing, luck, 
                and business acumen. Income ₹50L-3Cr+ LPA. But constant pressure to stay relevant.
              </p>
            </div>
          </div>

          <div className="mt-6 p-6 bg-red-50 rounded-lg border-2 border-red-300">
            <p className="text-gray-800 font-semibold mb-2">⚠️ Critical Success Factors:</p>
            <ul className="space-y-1 text-gray-700">
              <li>• <strong>Unique Voice:</strong> Can't copy others. Need YOUR perspective that hasn't been heard.</li>
              <li>• <strong>Thick Skin:</strong> 1000+ hours of rejection, bombing, and criticism before first success.</li>
              <li>• <strong>Financial Backup:</strong> 90% of aspiring comedians quit due to money issues. Have savings/job.</li>
              <li>• <strong>Location:</strong> Mumbai, Delhi, Bangalore have comedy scenes. Small cities extremely hard.</li>
              <li>• <strong>Language:</strong> English comedy has wider reach. Hindi comedy massive but very competitive.</li>
              <li>• <strong>Consistency:</strong> Perform 200+ times before you're "good". Most quit after 20-30 shows.</li>
            </ul>
          </div>
        </div>

        {/* Essential Skills */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-yellow-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Skills for Comedy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Core Comedy Skills</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Writing:</strong> 3-5 hours daily of joke writing and observation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Stage Presence:</strong> Confidence, body language, crowd control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Timing:</strong> Delivery, pauses, punchline setup (takes years to master)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Storytelling:</strong> Building narratives, callbacks, emotional arcs</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Business & Marketing</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Social Media:</strong> Build 50k+ followers for bookings (Instagram/YouTube)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Video Editing:</strong> Create clips, reels for viral potential</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Networking:</strong> Build relationships with promoters, venues</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Self-Promotion:</strong> Hustle for shows, pitch to corporates</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-purple-50 rounded-lg p-6 border border-red-200">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Mental Toughness</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Resilience:</strong> Handle bombing, hecklers, online trolls</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Adaptability:</strong> Different crowds need different material</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Financial Stress:</strong> Manage irregular income, years of struggle</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Controversy Management:</strong> Navigate cancel culture, political sensitivity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Career Paths */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Different Comedy Career Paths</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-yellow-200 rounded-lg p-5 bg-gradient-to-br from-yellow-50 to-white hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl text-gray-900 mb-2">🎤 Live Stand-up Touring Artist</h3>
              <p className="text-gray-700 mb-3">Focus on live performances, tour cities, build loyal audience through in-person shows.</p>
              <p className="text-sm text-gray-600"><strong>Income:</strong> ₹5-50 LPA after established. Requires constant touring.</p>
              <p className="text-sm text-gray-600"><strong>Examples:</strong> Zakir Khan, Abhishek Upmanyu, Anubhav Singh Bassi</p>
            </div>

            <div className="border border-orange-200 rounded-lg p-5 bg-gradient-to-br from-orange-50 to-white hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl text-gray-900 mb-2">📱 Digital Content Creator</h3>
              <p className="text-gray-700 mb-3">Primary focus on YouTube/Instagram. Create sketch comedy, roast videos, comedic commentary.</p>
              <p className="text-sm text-gray-600"><strong>Income:</strong> ₹3-30 LPA. Need 500k+ subscribers for stability.</p>
              <p className="text-sm text-gray-600"><strong>Examples:</strong> Harsh Gujral, Gaurav Kapoor, Vipul Goyal</p>
            </div>

            <div className="border border-red-200 rounded-lg p-5 bg-gradient-to-br from-red-50 to-white hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl text-gray-900 mb-2">📺 TV/OTT Comedian-Actor</h3>
              <p className="text-gray-700 mb-3">Transition to comedy shows, web series, films. Writing and acting opportunities.</p>
              <p className="text-sm text-gray-600"><strong>Income:</strong> ₹10-2Cr+ LPA. Very few reach this level.</p>
              <p className="text-sm text-gray-600"><strong>Examples:</strong> Kapil Sharma, Vir Das, Kanan Gill</p>
            </div>

            <div className="border border-purple-200 rounded-lg p-5 bg-gradient-to-br from-purple-50 to-white hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl text-gray-900 mb-2">✍️ Comedy Writer</h3>
              <p className="text-gray-700 mb-3">Write for TV shows, movies, roasts, other comedians. Behind-the-scenes career.</p>
              <p className="text-sm text-gray-600"><strong>Income:</strong> ₹5-25 LPA. More stable than performing.</p>
              <p className="text-sm text-gray-600"><strong>Examples:</strong> AIB writers, TVF writers, Show scriptwriters</p>
            </div>

            <div className="border border-green-200 rounded-lg p-5 bg-gradient-to-br from-green-50 to-white hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl text-gray-900 mb-2">🏢 Corporate Comedian</h3>
              <p className="text-gray-700 mb-3">Specialize in clean, corporate-friendly comedy for company events and conferences.</p>
              <p className="text-sm text-gray-600"><strong>Income:</strong> ₹7-40 LPA. More predictable income but less creative freedom.</p>
              <p className="text-sm text-gray-600"><strong>Examples:</strong> Papa CJ, Vikramjit Singh</p>
            </div>

            <div className="border border-pink-200 rounded-lg p-5 bg-gradient-to-br from-pink-50 to-white hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl text-gray-900 mb-2">🎭 Improv/Theatre Comedian</h3>
              <p className="text-gray-700 mb-3">Focus on improvisational comedy, theatre shows, sketch performances with groups.</p>
              <p className="text-sm text-gray-600"><strong>Income:</strong> ₹3-15 LPA. Often combined with teaching improv workshops.</p>
              <p className="text-sm text-gray-600"><strong>Examples:</strong> Improv groups like The Improvisers, ComedyFactory</p>
            </div>
          </div>
        </div>

        {/* Major Comedy Hubs in India */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-yellow-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Where to Start Your Comedy Career</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-2 border-yellow-300 rounded-lg p-5 bg-yellow-50">
              <h3 className="font-bold text-xl text-gray-900 mb-3">🏙️ Mumbai</h3>
              <p className="text-gray-700 mb-3">Most active comedy scene. 50+ open mics monthly. Canvas Laugh Club, Comedy Store.</p>
              <p className="text-sm text-gray-600 font-semibold">Best for: Breaking into OTT, acting, getting noticed by producers.</p>
            </div>
            <div className="border-2 border-orange-300 rounded-lg p-5 bg-orange-50">
              <h3 className="font-bold text-xl text-gray-900 mb-3">🏛️ Delhi/NCR</h3>
              <p className="text-gray-700 mb-3">Second-largest scene. The Habitat, Loko Comedy Lounge. Many Hindi comedians base here.</p>
              <p className="text-sm text-gray-600 font-semibold">Best for: Hindi stand-up, north India touring circuit.</p>
            </div>
            <div className="border-2 border-purple-300 rounded-lg p-5 bg-purple-50">
              <h3 className="font-bold text-xl text-gray-900 mb-3">💻 Bangalore</h3>
              <p className="text-gray-700 mb-3">Tech-savvy audience. Many open mics. Good for English comedy and content creation.</p>
              <p className="text-sm text-gray-600 font-semibold">Best for: English comedy, corporate show circuit, YouTube growth.</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-gray-800">
              <strong>⚠️ Small Cities:</strong> Extremely difficult to start comedy career. 0-2 open mics monthly. 
              No comedy clubs. Audience not familiar with stand-up format. Consider moving to metro cities if serious.
            </p>
          </div>
        </div>

        {/* Advantages and Challenges */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-200">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Why Pursue Comedy</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">+</span>
                <span className="text-gray-700"><strong>Creative Freedom:</strong> Express yourself, share your worldview, make social commentary</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">+</span>
                <span className="text-gray-700"><strong>Impact Lives:</strong> Make people laugh, provide stress relief, create memorable experiences</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">+</span>
                <span className="text-gray-700"><strong>No Degree Required:</strong> Pure talent, hard work, and persistence matter—not MBA/engineering</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">+</span>
                <span className="text-gray-700"><strong>Growing Industry:</strong> OTT platforms investing in Indian comedy, live shows selling out</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">+</span>
                <span className="text-gray-700"><strong>Be Your Own Boss:</strong> Control your material, schedule, creative direction after established</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">+</span>
                <span className="text-gray-700"><strong>Celebrity Status:</strong> If successful, recognition, media appearances, influence</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">+</span>
                <span className="text-gray-700"><strong>Multiple Revenue Streams:</strong> Shows, YouTube, corporate, writing, acting, brand deals</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-red-200">
            <div className="flex items-center mb-6">
              <XCircle className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">The Harsh Reality</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">−</span>
                <span className="text-gray-700"><strong>99% Failure Rate:</strong> Only 200-300 in India earn sustainable living from comedy</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">−</span>
                <span className="text-gray-700"><strong>Financial Instability:</strong> First 3-5 years almost zero income, highly irregular even later</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">−</span>
                <span className="text-gray-700"><strong>Constant Rejection:</strong> Bombs on stage, silent audiences, venues rejecting you repeatedly</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">−</span>
                <span className="text-gray-700"><strong>Family/Social Pressure:</strong> "Comedy is not a real job" - intense pressure to quit</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">−</span>
                <span className="text-gray-700"><strong>No Job Security:</strong> One controversy can end career, platforms cancel shows, trends change</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">−</span>
                <span className="text-gray-700"><strong>Mental Health Toll:</strong> Depression, anxiety, self-doubt common. Substance abuse issues prevalent</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">−</span>
                <span className="text-gray-700"><strong>Trolls & Cancel Culture:</strong> Online hate, threats, doxxing. Every joke scrutinized.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">−</span>
                <span className="text-gray-700"><strong>No Backup Plan:</strong> 5-8 years invested, if it doesn't work out, hard to restart different career</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Final Advice */}
        <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">💡 Our Honest Advice</h2>
          <div className="space-y-3 text-lg">
            <p>
              <strong>DO pursue comedy if:</strong> You're genuinely passionate, can handle years of financial struggle, 
              have thick skin for rejection, and are completing your education/have backup income source.
            </p>
            <p>
              <strong>DON'T pursue comedy if:</strong> You want quick money, can't handle criticism, family/financial 
              pressure to earn soon, or you're doing it just because you're funny in your friend group.
            </p>
            <p className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
              <strong className="text-yellow-100">Smart Strategy:</strong> Complete your graduation. Get a job/start freelancing. 
              Do comedy on weekends for 2-3 years. If you're consistently getting paid shows (₹30k+/month from comedy), 
              then consider full-time. Otherwise, keep it as a passionate side hustle.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl p-8 text-center shadow-xl border-2 border-yellow-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make People Laugh?</h2>
          <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
            Comedy is incredibly difficult but can be incredibly rewarding. Make informed decisions with realistic 
            expectations. Talk to our AI counselor for personalized guidance on whether comedy is right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/emerging-careers"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Emerging Careers
            </Link>
            <Link
              to="/stream-selection"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors inline-flex items-center justify-center shadow-lg"
            >
              Explore Traditional Careers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandupComedyDetails;
