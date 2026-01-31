import { Link } from 'react-router-dom';
import { ArrowLeft, Skull, Trophy, Heart, Users, TrendingUp, Zap, AlertTriangle, Shield, Brain, Activity, DollarSign, Clock, BookOpen, CheckCircle2, XCircle, Flame, Award, Target } from 'lucide-react';

export default function ProfessionalWrestlerDetails() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 via-orange-600 to-yellow-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            to="/explore-careers" 
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Careers
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <Shield className="w-12 h-12 mr-4" />
              <h1 className="text-5xl font-bold">Professional Wrestler / MMA Fighter</h1>
            </div>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Fight in WWE entertainment wrestling OR compete in MMA (UFC/ONE Championship). Build career through training, matches, entertainment skills, and fierce competition. WWE = scripted storylines but real athleticism. MMA = actual fighting with knockouts and submissions.
            </p>
            
            <div className="grid md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Trophy className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">WWE India</div>
                <div className="text-lg font-semibold">Entertainment + Athletics</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Target className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">MMA/UFC</div>
                <div className="text-lg font-semibold">Real Combat Sports</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Activity className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">Training</div>
                <div className="text-lg font-semibold">6-8 Hours Daily</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <DollarSign className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">Top Fighters</div>
                <div className="text-lg font-semibold">₹50L-10Cr/year</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reality Check Section */}
      <div className="container mx-auto px-4 -mt-10 relative z-20 mb-16">
        <div className="bg-white rounded-xl shadow-2xl p-8 border-t-4 border-red-600">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Reality Check: The Brutal Truth</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-lg">
              <div className="flex items-start">
                <Skull className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Severe Injuries Extremely Common - Career-Ending Risk</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    WWE: Torn ACLs, broken necks, concussions (Edge, Daniel Bryan retired early). MMA: Broken bones, torn ligaments, knockouts (brain damage like boxing). Average 2-3 major injuries per career. Many wrestlers can't walk properly by 40. Chronic pain lifelong. Indian wrestlers: limited medical support, pay for own surgeries ₹2-10L. Insurance rare. One bad fall = paralysis risk.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-lg">
              <div className="flex items-start">
                <DollarSign className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Top 1% Earn Crores, 90% Earn Poverty Wages</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    WWE India contracts: ₹3-15L/year (developmental). Main roster WWE: ₹50L-5Cr/year. But only 10-15 Indians ever in WWE. MMA India: Local fights ₹5-50K per fight (minus training/medical). International UFC: ₹10-80L per fight (top Indians). Reality: 90% wrestlers train 6-8 hours daily, earn ₹10-30K/month teaching wrestling or working side jobs. No guaranteed income, pay-per-performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-lg">
              <div className="flex items-start">
                <Brain className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Brain Damage & CTE Risk (Especially MMA)</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    MMA fighters take repeated head strikes = CTE (chronic traumatic encephalopathy), memory loss, depression, aggression. Many UFC fighters slur speech by 35. WWE: chairshots, table bumps cause concussions despite being "fake." Multiple concussions = permanent brain damage. No cure. Retirement often forced by neurological issues not age. Mental health problems, substance abuse common among retired wrestlers/fighters.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-lg">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Short Career 25-35 Years - Forced Retirement by Injuries</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Peak performance window: 25-35 years (10 years max). Body breaks down fast from brutal training + matches. Most retire by 35-38 due to injuries, not choice. Post-career transition difficult: no transferable skills, body destroyed, chronic pain. Many become coaches earning ₹20-60K/month (big pay cut). Must plan second career early. Fame fades quickly after retirement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-lg">
              <div className="flex items-start">
                <Activity className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Steroids Common in WWE - Health Consequences Severe</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    WWE physiques (250+ lbs shredded) impossible naturally. Steroids, HGH widely used. Side effects: heart disease (many wrestlers die in 40s-50s), liver damage, hormonal problems. MMA has drug testing (USADA) but fighters still cheat. Build career knowing health will be sacrificed. List of deceased WWE wrestlers before 50 is shockingly long.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Income Reality Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="w-8 h-8 text-red-600 mr-3" />
            Income Reality: Extreme Inequality - Top 1% vs Everyone Else
          </h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-yellow-900">Truth:</strong> Wrestling/MMA has EXTREME income inequality. Top 1% (WWE main roster, UFC champions) earn ₹50L-10Cr/year. Everyone else (99%) earns ₹10K-50K/month teaching wrestling, working side jobs, fighting on small shows for ₹5-30K per match. <strong>No guaranteed salary - you're paid per appearance/fight.</strong> Training costs ₹5-15K/month. Medical bills ₹50K-5L per major injury. First 5-10 years = negative income for most.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-gray-400 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Beginner (0-3 years): NEGATIVE ₹10-30K/month</h3>
              <p className="text-gray-700 text-sm">Train at wrestling school ₹5-15K/month. Zero income. Work job to fund training. Maybe small local shows ₹2-10K per match (once every 2-3 months). Pure expense phase.</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Amateur Wrestler (3-7 years): ₹10-40K/month</h3>
              <p className="text-gray-700 text-sm">Regional circuit India ₹5-30K per match, 2-5 matches/month = ₹10-1.5L gross. Minus training/travel/medical = ₹10-40K net. Teach wrestling kids ₹15-40K/month. Still need side job.</p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Professional (7-12 years): ₹60K-5L/month</h3>
              <p className="text-gray-700 text-sm">WWE developmental ₹25-1.25L/month contract + bonuses. MMA national level ₹50K-3L per fight (3-6 fights/year). Wrestling academy owner ₹40K-2L/month. Top Indians like Great Khali in prime earned ₹2-8Cr/year.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Elite (WWE/UFC): ₹50L-10Cr/year</h3>
              <p className="text-gray-700 text-sm">WWE main roster: ₹50L-5Cr/year salary + merch + appearances. UFC top fighters: ₹1-10Cr per fight + PPV share + sponsors. But only 10-15 Indians ever reached this level. 0.1% of all wrestlers.</p>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Reality:</strong> 90% of wrestlers never earn living from wrestling alone. They teach wrestling (₹20-60K/month), work security/gym jobs, do stunt work. Only 1% make it to WWE/UFC where real money is. Odds worse than becoming Bollywood actor. <strong>Don't pursue for money - pursue because you can't imagine doing anything else.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Daily Life Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Flame className="w-8 h-8 text-red-600 mr-3" />
            Daily Schedule: Brutal Training Regimen
          </h2>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-600 mb-6">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold text-gray-900 mb-2">6:00 AM - Morning Cardio & Conditioning</p>
                <p className="text-gray-700 mb-3">5km run + rope skipping + burpees. Build stamina.</p>
                
                <p className="font-bold text-gray-900 mb-2">10:00 AM - Wrestling/MMA Technique Training</p>
                <p className="text-gray-700 mb-3">3 hours grappling, striking, submissions, bumps. Most important session.</p>
                
                <p className="font-bold text-gray-900 mb-2">5:00 PM - Sparring & Live Rolling</p>
                <p className="text-gray-700">Full contact practice. Take hits, get hurt daily.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">8:00 AM - Strength Training</p>
                <p className="text-gray-700 mb-3">Heavy weights 2 hours. Need power for slams/throws.</p>
                
                <p className="font-bold text-gray-900 mb-2">2:00 PM - Lunch + Recovery</p>
                <p className="text-gray-700 mb-3">High protein diet. Ice baths. Physio for injuries.</p>
                
                <p className="font-bold text-gray-900 mb-2">8:00 PM - Promo Practice (WWE) / Film Study</p>
                <p className="text-gray-700">WWE = mic skills. MMA = opponent analysis.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-5 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong>Time Investment:</strong> Training 6-8 hours + meal prep + recovery + travel to shows = 10-12 hours daily. Plus matches on weekends (risk serious injury each time). <strong className="text-yellow-900">Body constantly hurting. Ice baths nightly. Painkillers common. This lifestyle destroys your body by 35-40.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Education & Entry Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <BookOpen className="w-8 h-8 text-red-600 mr-3" />
            How to Start: No Degree, Just Toughness
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">WWE Path (Entertainment Wrestling)</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Join wrestling school (Continental/Squared Circle India) ₹5-15K/month</li>
                <li>• Train 2-3 years learning bumps, moves, storytelling</li>
                <li>• Work indie circuit India (₹5-30K per show)</li>
                <li>• Build physique (gym + steroids reality)</li>
                <li>• Create character/persona, cut promos (mic skills)</li>
                <li>• Get noticed by WWE scouts (tryouts in India rare)</li>
                <li>• WWE Performance Center (if selected) = developmental contract</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">MMA Path (Real Fighting)</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Learn base discipline: Boxing/Muay Thai/BJJ/Wrestling</li>
                <li>• Train at MMA gym ₹3-10K/month (Evolve MMA, KO MMA India)</li>
                <li>• Amateur fights 5-10 bouts (build record)</li>
                <li>• Turn professional, join promotion (Super Fight League India)</li>
                <li>• Fight frequently, win consistently (3-4 fights/year)</li>
                <li>• Get scouted by ONE Championship/UFC</li>
                <li>• International level = \u20b910L-1Cr per fight (if you reach)</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Physical Requirements</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Age: Start 16-22 (peak 25-35, retire 35-40)</li>
                <li>• Athletic background helps (kushti, judo, boxing)</li>
                <li>• Pain tolerance EXTREME (daily bumps/hits)</li>
                <li>• No major injuries yet (career will give you plenty)</li>
                <li>• WWE: Height 5'10"+, weight 90kg+ preferred (Vince McMahon loves big guys)</li>
                <li>• MMA: Any size (weight classes), cardio most important</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Indian Wrestling Scene</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Schools:</strong> Continental Wrestling Entertainment (Mumbai), Squared Circle (Multiple cities)</li>
                <li>• <strong>Promotions:</strong> PWE, IWE (small shows ₹5-30K per appearance)</li>
                <li>• <strong>Success Stories:</strong> Great Khali, Jinder Mahal, Kavita Devi (very rare)</li>
                <li>• <strong>Reality:</strong> Indian wrestling scene tiny, very limited opportunities, most wrestlers struggle financially</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Smart Path:</strong> (1) Finish education first - have backup career, (2) Train wrestling part-time while working job, (3) Fight on weekends 2-3 years, (4) If winning consistently + getting opportunities, go full-time, (5) Save aggressively (career short, injuries expensive), (6) Plan second career by 30 (coaching, security, stunt work). <strong>DON'T drop out of school at 18 to become wrestler - 95% fail and have nothing to fall back on.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Skills Required Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="w-8 h-8 text-red-600 mr-3" />
            Skills Required: Toughness, Technique, Entertainment
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 p-5 rounded-lg border-t-4 border-red-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Physical Skills</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Strength (lift/slam opponents 100kg+)</li>
                <li>• Cardio (fight 15-25 minutes without gassing)</li>
                <li>• Flexibility (avoid injuries, execute moves)</li>
                <li>• Pain tolerance (take bumps daily)</li>
                <li>• Recovery ability (body breaks down fast)</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg border-t-4 border-orange-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Combat Technique</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• <strong>WWE:</strong> Bumps, suplexes, storytelling, selling</li>
                <li>• <strong>MMA:</strong> Striking, grappling, submissions, ground game</li>
                <li>• Ring psychology (engage audience)</li>
                <li>• Timing (work with opponent safely)</li>
                <li>• Protect yourself and partner (injuries common even when "fake")</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-t-4 border-blue-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Entertainment (WWE)</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Mic skills (promos, trash talk)</li>
                <li>• Character work (create persona)</li>
                <li>• Charisma (connect with crowd)</li>
                <li>• Acting ability (sell storylines)</li>
                <li>• Social media (build fanbase)</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong>Reality:</strong> WWE = 50% athletics, 50% entertainment. Need both. MMA = 95% fighting skill, 5% personality (helps get fights but skill matters most). Both require INSANE toughness mentally and physically. Most people quit within 6 months when they realize how brutal training is.
            </p>
          </div>
        </div>
      </div>

      {/* Career Paths Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Trophy className="w-8 h-8 text-red-600 mr-3" />
            Career Paths: Limited Options in India
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">WWE Professional Wrestler</h3>
              <p className="text-sm text-gray-700 mb-2">Extremely rare for Indians. Maybe 10-15 total ever signed. Developmental ₹25-1.25L/month, main roster ₹50L-5Cr/year. Need exceptional look + skills + luck.</p>
              <p className="text-sm text-gray-600"><strong>Odds:</strong> 0.01% of Indian wrestlers | <strong>Peak:</strong> 28-35 years</p>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">MMA Fighter (ONE/UFC)</h3>
              <p className="text-sm text-gray-700 mb-2">International level MMA. Only handful of Indians in ONE/UFC. Fight purses ₹10L-5Cr per fight + win bonuses + sponsors. Must dominate Indian circuit first.</p>
              <p className="text-sm text-gray-600"><strong>Earnings:</strong> ₹20L-10Cr/year (if you make it) | <strong>Reality:</strong> 99% don't reach international level</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Wrestling Coach/Trainer</h3>
              <p className="text-sm text-gray-700 mb-2">Most common path for retired wrestlers. Teach kids/beginners at wrestling school or gym. Stable but modest income. Less travel, body recovers.</p>
              <p className="text-sm text-gray-600"><strong>₹20-60K/month</strong> | Sustainable long-term | Need certification + reputation</p>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Indie Circuit Wrestler (India)</h3>
              <p className="text-sm text-gray-700 mb-2">Perform on small Indian wrestling shows. PWE, IWE, regional promotions. ₹5-30K per show, 4-10 shows per month. Train others as side income.</p>
              <p className="text-sm text-gray-600"><strong>₹30K-1.5L/month</strong> | Inconsistent | Most need second job | Body still takes damage</p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Stunt Work / Security</h3>
              <p className="text-sm text-gray-700 mb-2">Use wrestling background for Bollywood stunts or private security. ₹20-80K/month depending on demand. Less injury risk than active wrestling.</p>
              <p className="text-sm text-gray-600"><strong>₹25-80K/month</strong> | Career transition path | Use combat skills without competition pressure</p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sports Authority Jobs (India)</h3>
              <p className="text-sm text-gray-700 mb-2">If you win national wrestling championships, eligible for sports quota government jobs (Railways, Police, Army). Stable salary ₹30-60K/month + pension.</p>
              <p className="text-sm text-gray-600"><strong>₹30-60K/month</strong> + job security | Need national medals | Best backup plan</p>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Truth:</strong> Only 1% reach WWE/international MMA where real money is. 90% work indie circuit struggling (₹10-50K/month), teach wrestling, or quit within 5 years due to injuries/poverty. <strong>This is NOT a career with clear path - it's gambling your health hoping for big break that probably won't come.</strong> Have backup plan ALWAYS.
            </p>
          </div>
        </div>
      </div>

      {/* Difficulty Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Difficulty Level: Among Hardest Careers</h2>
          
          <div className="space-y-3">
            <div className="border-l-4 border-red-600 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-1">🔴 Extreme: Physical Destruction</h3>
              <p className="text-gray-700 text-sm">Injuries guaranteed (concussions, broken bones, torn ligaments), brain damage risk (MMA/WWE), short career 10-15 years, chronic pain lifelong, forced retirement by 35-40, body destroyed permanently</p>
            </div>

            <div className="border-l-4 border-red-600 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-1">🔴 Extreme: Income Instability</h3>
              <p className="text-gray-700 text-sm">Top 1% earn crores, 99% earn poverty wages (₹10-50K/month), no guaranteed salary, pay-per-performance, expensive training/medical costs, first 5-10 years negative income, odds of "making it" microscopic</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-1">🟠 Moderate: Skill Development</h3>
              <p className="text-gray-700 text-sm">Takes 3-5 years learn wrestling/MMA basics, 10+ years master craft, continuous training 6-8 hours daily, extremely competitive (thousands trying, 10-15 succeed), need exceptional talent + luck</p>
            </div>

            <div className="border-l-4 border-green-600 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-1">🟢 Manageable: Entry</h3>
              <p className="text-gray-700 text-sm">No formal degree needed, wrestling schools available (₹5-15K/month), meritocratic (win fights = get opportunities), can start training part-time while working job</p>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Overall: EXTREME.</strong> Among most physically demanding careers possible. Your body WILL be destroyed. Income odds terrible (lottery-level). Brain damage real risk. Short career, no transferable skills. Only pursue if: (1) OBSESSED with wrestling/fighting, (2) Willing to sacrifice health permanently, (3) Accept 95% chance you'll never earn living from it, (4) Have backup career plan. If you value stability, health, money → AVOID.
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
                    <span className="font-semibold text-gray-900">No formal education required - </span>
                    <span className="text-gray-700 text-sm">Just toughness and training. Open to anyone willing to fight.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Glory and fame potential - </span>
                    <span className="text-gray-700 text-sm">Top wrestlers/fighters become household names. Crowd adoration, respect, celebrity status.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Passion-based work - </span>
                    <span className="text-gray-700 text-sm">If you love fighting/wrestling, you're doing what you love daily. Exciting lifestyle.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Peak physical fitness - </span>
                    <span className="text-gray-700 text-sm">Job requires being in incredible shape. Never sedentary.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Top 1% extremely wealthy - </span>
                    <span className="text-gray-700 text-sm">WWE/UFC champions earn ₹2-10Cr/year. Life-changing money IF you reach top.</span>
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
                    <span className="font-semibold text-gray-900">Severe injuries guaranteed - </span>
                    <span className="text-gray-700 text-sm">Concussions, broken bones, torn ligaments. Average 2-3 major injuries per career. Body destroyed by 40.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">99% earn poverty wages - </span>
                    <span className="text-gray-700 text-sm">Only top 1% earn good money. Everyone else struggles at ₹10-50K/month teaching wrestling.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Brain damage risk - </span>
                    <span className="text-gray-700 text-sm">MMA especially: CTE, memory loss, depression. Many fighters slur speech by 35. Permanent damage.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Short career 10-15 years - </span>
                    <span className="text-gray-700 text-sm">Forced retirement by injuries by 35-40. No transferable skills. Difficult post-career transition.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Steroid pressure (WWE) - </span>
                    <span className="text-gray-700 text-sm">WWE physiques impossible naturally. Steroids common = heart disease, liver damage. Many die in 40s-50s.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-red-700 via-orange-600 to-yellow-600 text-white rounded-xl shadow-2xl p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold text-center mb-6">
              Is Professional Wrestling/MMA Right For You?
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 mb-5">
              <p className="text-lg leading-relaxed mb-3">
                <strong className="text-yellow-300">This is NOT a career - it's sacrificing your body and health gambling on microscopic odds of fame.</strong> 99% of wrestlers never earn living from it. Your body WILL be destroyed. Brain damage real risk. Career over by 35-40. Post-retirement struggles common.
              </p>
              <p className="text-white/90 mb-3"><strong className="text-yellow-300">ONLY pursue if:</strong></p>
              <ul className="space-y-1 text-white/90 text-sm">
                <li>• OBSESSED with wrestling/fighting (can't imagine doing anything else)</li>
                <li>• Willing to sacrifice physical health permanently for passion</li>
                <li>• Accept 99% chance you'll never earn good money from it</li>
                <li>• Have backup career plan (finish education first, train part-time)</li>
                <li>• Extreme pain tolerance (you'll hurt EVERY SINGLE DAY)</li>
                <li>• Family/financial support to train while earning ₹0 for 3-5 years</li>
              </ul>
            </div>

            <div className="bg-red-900/50 backdrop-blur-sm rounded-lg p-5 mb-5 border-l-4 border-yellow-400">
              <p className="text-sm text-white/90 mb-2"><strong className="text-yellow-300">Financial Reality:</strong></p>
              <ul className="space-y-1 text-white/90 text-sm">
                <li>• Year 0-5: LOSS ₹5-15L (training costs, zero income)</li>
                <li>• Year 5-10: ₹10-50K/month (indie circuit, teaching)</li>
                <li>• Top 1% (WWE/UFC): ₹50L-10Cr/year</li>
                <li>• 99% never escape poverty wages</li>
              </ul>
              <p className="text-white/90 mt-3 text-sm">
                <strong className="text-red-300">Odds of reaching WWE/UFC from India: 0.01%. Odds worse than becoming Bollywood superstar. Don't bet your life on it.</strong>
              </p>
            </div>

            <div className="bg-yellow-900/50 backdrop-blur-sm rounded-lg p-5 mb-5 border-l-4 border-red-400">
              <p className="text-sm text-white/90 mb-2"><strong className="text-red-300">Health Reality:</strong></p>
              <p className="text-white/90 text-sm">
                Injuries guaranteed. Concussions, broken bones, torn ACLs. Brain damage (MMA). Chronic pain lifelong. Body destroyed by 40. Many wrestlers walk with cane by 50. <strong className="text-red-300">You're trading 40+ years of healthy life for 10-15 years of fighting. Worth it?</strong>
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 mb-6">
              <p className="text-sm text-white/90 mb-2"><strong className="text-green-300">Smart Path (If Still Want This):</strong></p>
              <ol className="space-y-1 text-white/90 text-sm list-decimal list-inside">
                <li>Finish education (degree/diploma as backup)</li>
                <li>Get job earning ₹20-40K/month for financial stability</li>
                <li>Train wrestling/MMA part-time evenings/weekends</li>
                <li>Fight on weekends 3-5 years (test if you have talent)</li>
                <li>If winning consistently + opportunities coming, go full-time</li>
                <li>Save aggressively during peak years (career short)</li>
                <li>Plan second career by 30 (coaching, security, business)</li>
              </ol>
              <p className="text-white/90 mt-3 text-sm">
                <strong className="text-green-300">This minimizes risk. You'll know within 3-5 years if you have shot at big leagues. If not, you have education + job to fall back on.</strong>
              </p>
            </div>

            <div className="text-center">
              <p className="text-lg mb-4 leading-relaxed">
                <strong>Final Word:</strong> Wrestling/MMA will give you glory, excitement, peak fitness. It will also destroy your body, give you brain damage, leave you broke (99% probability), force retirement by 35-40. <strong className="text-yellow-300">Only pursue if you're 100% obsessed AND have backup plan.</strong> If thinking "maybe I'll try" → DON'T. Only people who'd rather die than not fight should attempt this.
              </p>
              <Link
                to="/explore-careers"
                className="inline-block bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
