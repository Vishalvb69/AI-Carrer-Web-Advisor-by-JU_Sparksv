import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Heart, Target, Users, Shield, Dumbbell, Brain, Skull, AlertTriangle, Zap, Award, TrendingUp, Clock, BookOpen, CheckCircle2, XCircle, Flame } from 'lucide-react';

export default function ProfessionalBoxerDetails() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-orange-600 to-red-700 text-white py-20 relative overflow-hidden">
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
              <h1 className="text-5xl font-bold">Professional Boxer</h1>
            </div>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Step into the ring and compete in one of the world's most demanding combat sports. From amateur tournaments to professional championships, build a career through discipline, power, and heart. Train daily, fight strategically, and chase glory.
            </p>
            
            <div className="grid md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Trophy className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">Amateur Level</div>
                <div className="text-lg font-semibold">Tournaments & Training</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Target className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">Professional Fights</div>
                <div className="text-lg font-semibold">Win Purse Money</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Award className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">Championship Bouts</div>
                <div className="text-lg font-semibold">National/International</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Users className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">Coaching/Training</div>
                <div className="text-lg font-semibold">After Fighting Career</div>
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
            <h2 className="text-3xl font-bold text-gray-900">Reality Check: The Brutal Truth About Boxing</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-l-4 border-red-600 p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Skull className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Brain Damage Risk - CTE & Punch-Drunk Syndrome</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every punch to head = brain trauma. Repeated concussions → CTE (Chronic Traumatic Encephalopathy) → memory loss, depression, dementia. Muhammad Ali, Mike Tyson show symptoms. "Punch-drunk" boxers slur words, forget names by 40s. Brain damage is PERMANENT. No cure. Medical scans show boxers' brains look 20 years older. Risk increases with every fight. Some boxers commit suicide due to CTE depression.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-red-600 p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Brain className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Serious Injuries Extremely Common - Broken Bones, Cuts, Knockouts</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Broken nose/jaw/ribs = routine. Deep cuts need stitches after fights. Knockouts = concussions = brain shaking inside skull. Retinal detachment → blindness risk. Shoulder dislocations, hand fractures common. Internal bleeding, liver/spleen damage from body shots. Ear damage → permanent hearing loss. Dental injuries → teeth knocked out. Medical bills ₹50K-5L per serious injury. Career can end with ONE bad injury.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-red-600 p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Target className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">90% Boxers Earn Almost Nothing - Only Champions Make Money</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Amateur boxers earn ZERO (Olympics/Nationals = medals only). Entry-level professional fights = ₹10-50K per fight (minus gym cut 30% = ₹7-35K). Most boxers fight 2-4 times/year = ₹20K-1.5L annual income. Need another job to survive. Only state/national champions earn ₹5-15L. International champions (World title) earn ₹1-10Cr. But that's top 0.1% after 15-20 years. Average boxer struggles financially entire career.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-red-600 p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Extremely Short Career Span - Peak 25-35 Years, Then Over</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Boxing is YOUNG man's game. Start training 12-18 years. Peak performance 25-35 years. After 35, reflexes slow, recovery takes longer, younger boxers dominate. Most retire by 38-40. That's only 10-15 years of professional career. Body breaks down → forced retirement. Then what? No pension, no job skills, medical issues remain. Many ex-boxers end up broke, brain-damaged, no backup career. Planning for life AFTER boxing critical but most ignore it.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-red-600 p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Dumbbell className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Brutal Training Regime - 6-8 Hours Daily, Extreme Weight Cuts, Pain</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Train 6-8 hours EVERY day including Sundays. Morning run 5-10 km + gym 3-4 hours + sparring 2-3 hours + technique work. Weight cutting for fights = starving yourself, dehydrating to make weight class. Lose 5-10 kg in 1 week before fight = extreme fatigue, irritability, health risk. Constant pain → sore muscles, bruised ribs, swollen face. No social life, no parties, strict diet, early sleep. Miss family events, festivals. Boxing consumes EVERYTHING.
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
            Income Reality: Most Boxers Are Broke, Only Champions Earn Well
          </h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-yellow-900">Reality:</strong> Boxing has EXTREME income inequality. 90% of professional boxers earn ₹20K-2L per YEAR (that's ₹2-15K per month) while fighting & training full-time. They need second jobs (security guard, gym trainer, construction) to survive. Only top 1% (national/international champions) earn ₹10L-10Cr annually. Amateur boxers earn NOTHING - pure passion/medals. Government jobs (Railways/Police ₹30-50K/month) are considered "success" for boxers because fight earnings so unstable. Celebrity boxers (Vijender Singh ₹5-10Cr, Mary Kom ₹3-8Cr, Neeraj Goyat ₹2-5Cr) are exceptions after 20+ years. Average professional boxer earns LESS than minimum wage while destroying their body & brain.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-gray-400 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Amateur Boxer (0-5 years) - ₹0 per month</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <p className="text-gray-700 font-semibold mb-2">Zero Income - Pure Passion & Training Phase:</p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• <strong>No earnings:</strong> Amateur boxing = medals only, no prize money</li>
                  <li>• <strong>State/National tournaments:</strong> Win medals, build record, get noticed</li>
                  <li>• <strong>Olympic dreams:</strong> Represent India (government support ₹50K-2L/month for top athletes)</li>
                  <li>• <strong>Living costs:</strong> Parents pay, or join boxing academy with hostel (₹5-15K/month)</li>
                  <li>• <strong>Equipment costs:</strong> Gloves ₹2-5K, shoes ₹3-8K, headgear ₹2-4K, mouthguard ₹500-2K</li>
                  <li>• <strong>Reality:</strong> Most boxers stuck here for 5-10 years, majority never turn professional</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Entry-Level Professional (2-5 years) - ₹2-15K per month</h3>
              <div className="bg-orange-50 p-4 rounded-lg mb-3">
                <p className="text-gray-700 font-semibold mb-2">Struggling Phase - Need Second Job to Survive:</p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• <strong>Small local fights:</strong> ₹10-30K per fight (gym takes 30-40% cut = ₹6-18K net)</li>
                  <li>• <strong>Fight frequency:</strong> 2-4 fights per year maximum = ₹20K-75K annual</li>
                  <li>• <strong>Second job mandatory:</strong> Security guard ₹15K, gym trainer ₹10-20K, construction ₹12-18K</li>
                  <li>• <strong>State-level fights:</strong> ₹30-80K per fight if you win consistently</li>
                  <li>• <strong>Expenses high:</strong> Gym fees ₹2-5K/month, diet ₹5-10K/month, medical ₹2-5K/month</li>
                  <li>• <strong>Losing fighters:</strong> Earn even less, ₹5-15K per fight, many quit after 2-3 losses</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">State/National Level (5-10 years) - ₹20-60K per month</h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-3">
                <p className="text-gray-700 font-semibold mb-2">Consistent Fighter - Still Not Stable Income:</p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• <strong>National-level fights:</strong> ₹80K-3L per fight (4-6 fights/year = ₹3-15L annual)</li>
                  <li>• <strong>Government job quota:</strong> Railways/Police/Army sports quota ₹30-50K/month stable</li>
                  <li>• <strong>Sponsorships emerging:</strong> Local businesses ₹50K-3L/year if state champion</li>
                  <li>• <strong>Teaching at gyms:</strong> Side income ₹10-30K/month training younger boxers</li>
                  <li>• <strong>Tournament prizes:</strong> National championships ₹1-5L prize money</li>
                  <li>• <strong>Reality:</strong> This is considered "successful" for 95% of boxers, stable but not rich</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">International/Champion Level (10-15+ years) - ₹5-20L per year</h3>
              <div className="bg-green-50 p-4 rounded-lg mb-3">
                <p className="text-gray-700 font-semibold mb-2">Elite Fighter - Top 1% of Boxers:</p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• <strong>International fights:</strong> ₹5-20L per fight (Asia/Commonwealth level, 3-5 fights/year)</li>
                  <li>• <strong>World championship bouts:</strong> ₹20L-2Cr per title fight (WBC/WBO/IBF/WBA)</li>
                  <li>• <strong>Sponsorships major:</strong> Sports brands (Adidas/Nike) ₹10-50L/year, supplements ₹5-20L</li>
                  <li>• <strong>Government rewards:</strong> Olympic medal = ₹50L-3Cr cash prize + lifetime pension ₹20-50K/month</li>
                  <li>• <strong>Media appearances:</strong> TV shows, events ₹2-10L per appearance</li>
                  <li>• <strong>Reality:</strong> Only 50-100 Indian boxers at this level, took 15-20 years of sacrifice</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Celebrity Boxer / World Champion - ₹2-10Cr per year</h3>
              <div className="bg-red-50 p-4 rounded-lg mb-3">
                <p className="text-gray-700 font-semibold mb-2">Top 0.1% - After 20+ Years of Boxing:</p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• <strong>World title fights:</strong> ₹2-10Cr per championship bout (Floyd Mayweather $100M fights)</li>
                  <li>• <strong>Pay-per-view earnings:</strong> Share of broadcast revenue (international only, rare in India)</li>
                  <li>• <strong>Major sponsorships:</strong> ₹1-5Cr/year deals with global brands</li>
                  <li>• <strong>Boxing promotions:</strong> Own promotion company, train other boxers ₹50L-2Cr</li>
                  <li>• <strong>Celebrity status:</strong> Movies, brand ambassadorships, reality shows ₹50L-3Cr</li>
                  <li>• <strong>Examples:</strong> Vijender Singh ₹5-10Cr, Mary Kom ₹3-8Cr, Neeraj Goyat ₹2-5Cr (India's richest boxers)</li>
                  <li>• <strong>Reality:</strong> Maybe 5-10 Indian boxers EVER reached this level, extreme rarity</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-6 mt-8 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Financial Reality:</strong> Boxing is NOT a money-making career for 90% of people who attempt it. Amateur phase earns ZERO for 5-10 years. Entry-level pros earn ₹20K-1.5L per YEAR (₹2-12K/month) - below minimum wage. They work second jobs (security, gym training, construction) to survive while training & fighting. Only top 1% (national/international champions) earn ₹5-20L annually after 10-15 years. Celebrity boxers (₹2-10Cr) are 0.1% - only 5-10 people in India's history. Most boxers retire broke, brain-damaged, with no backup career. Government sports jobs (₹30-50K/month Railways/Police/Army) are considered "success" because fight earnings so unstable. If you pursue boxing, have realistic expectations: you're likely earning ₹10-30K/month for life while destroying your body. Do it for PASSION, not money.
            </p>
          </div>
        </div>
      </div>

      {/* Training Day Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Flame className="w-8 h-8 text-red-600 mr-3" />
            A Day in the Life: Brutal Training Schedule of a Professional Boxer
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-center mb-3">
                <Clock className="w-6 h-6 text-orange-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">5:30 AM - Morning Run & Cardio</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                Wake up before sunrise. 5-10 km run for stamina (boxers need cardio to last 12 rounds). Road work in cold air. Sprints, hill runs, interval training. Shadow boxing while running. Push-ups, burpees, jumping jacks at intervals. Return home exhausted at 7 AM. This is EVERY single day including weekends. No excuses. Cardio is foundation of boxing - without stamina, you can't fight past 3 rounds.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-3">
                <Dumbbell className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">8:00 AM - Breakfast & Rest (If Time)</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                High-protein breakfast: 6-8 eggs, oats, bananas, milk, protein shake. Boxers need 150-200g protein daily. Strict diet - no junk food, no sweets, no alcohol. Most boxers have second job, so rush to work by 9 AM (security guard, gym trainer, construction). Those with government sports jobs (Railways/Police) have better schedule. Elite boxers rest 1-2 hours before afternoon training. But majority work 9-5 job, squeeze training around it.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-3">
                <Target className="w-6 h-6 text-purple-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">4:00 PM - Gym Training (3-4 Hours)</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                Main training session at boxing gym. Warm-up: Jump rope 15-20 minutes (footwork, coordination). Shadow boxing 3 rounds (practice combinations, movement). Heavy bag work 5-6 rounds (power punches, full force). Speed bag 3-4 rounds (hand-eye coordination, rhythm). Double-end bag 3 rounds (accuracy, reflexes). Pad work with coach 4-5 rounds (technique, combos, strategy). Strength training: Core exercises, medicine ball, resistance bands. This is INTENSE - sweat pouring, muscles burning, lungs screaming.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
              <div className="flex items-center mb-3">
                <Shield className="w-6 h-6 text-red-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">7:00 PM - Sparring Sessions (The Real Fight)</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                This is where you get HIT. Real boxing with partner, headgear + gloves but still HURTS. 4-6 rounds sparring (3 minutes each round = simulates real fight). Practice offense & defense, test combos, build timing. Get punched in face/body repeatedly - learn to take hits. Black eyes, bloody noses, bruised ribs = normal. This is most dangerous part of training - concussions happen here. Some gyms spar 3-4 times per week, others daily. You NEED sparring to prepare for actual fights, but it's brutal on brain & body.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong>9:00 PM - Cool Down, Dinner, Ice Baths & Sleep:</strong> Stretch for 30 minutes (prevent injuries, maintain flexibility). Light dinner: Chicken/fish, vegetables, brown rice. Ice baths for swollen hands, bruised areas (reduces inflammation). Apply pain relief gel to sore muscles. Sleep by 10 PM to recover. Body needs 8-9 hours to repair muscle damage. Repeat this schedule 6 DAYS per week. Sunday = light active recovery (jogging, stretching, technique work). <strong className="text-yellow-900">Before fights (3-4 weeks), training intensifies even more + extreme weight cutting = starving yourself & dehydrating to make weight class. Lose 5-10 kg in 1 week = dangerous but mandatory for weight categories. This lifestyle is BRUTAL, sacrifices everything - social life, family time, normal fun. Boxing consumes your entire existence.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Education & Entry Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <BookOpen className="w-8 h-8 text-red-600 mr-3" />
            Education & Entry: How to Become a Professional Boxer
          </h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Formal Degree Required - Join a Boxing Gym</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Boxing doesn't need college education. You need PHYSICAL ABILITY, mental toughness, and willingness to get punched repeatedly. Most boxers start age 10-18 (earlier = better for building technique). Join a local boxing gym, train under experienced coach. That's it. No entrance exams, no certificates - just show up, work hard, prove yourself in ring.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-700 font-semibold mb-2">How to Start:</p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• <strong>Find a boxing gym:</strong> Every city has 5-10 boxing gyms. Ask locally, search online, visit sports complexes</li>
                  <li>• <strong>Start training:</strong> Gym fees ₹1-3K/month for basic training. Coach fees ₹2-5K/month for personal attention</li>
                  <li>• <strong>Buy equipment:</strong> Boxing gloves ₹2-5K, hand wraps ₹200-500, mouthguard ₹500-2K, shoes ₹3-8K</li>
                  <li>• <strong>Train daily:</strong> 3-6 months basic training → learn stance, jab, cross, hook, uppercut, footwork, defense</li>
                  <li>• <strong>Amateur fights:</strong> After 6-12 months, coach enters you in local amateur tournaments</li>
                  <li>• <strong>Build record:</strong> Win amateur fights → state championships → national tournaments → turn professional</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Amateur Boxing Path - Olympics & National Championships</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most boxers start as amateurs (no prize money, medals only). Compete in state/national/international tournaments. Build reputation, get noticed by professional promoters. Olympic boxers (Mary Kom, Vijender Singh) get government support ₹50K-2L/month + free training/equipment. This is the "clean" path - structured, safer (headgear mandatory), respected.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-700 font-semibold mb-2">Amateur Boxing Pathway:</p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• <strong>District/State level:</strong> Win local tournaments → get selected for state team</li>
                  <li>• <strong>National championships:</strong> Represent state → win nationals → national team selection</li>
                  <li>• <strong>Government support:</strong> National team boxers get SAI/Khelo India support (₹25K-1L/month stipend)</li>
                  <li>• <strong>International tournaments:</strong> Commonwealth Games, Asian Games, World Championships, Olympics</li>
                  <li>• <strong>Olympic medals:</strong> Bronze = ₹50L-1Cr prize, Silver = ₹1.5-2Cr, Gold = ₹2-3Cr + lifetime pension</li>
                  <li>• <strong>Turn professional:</strong> After Olympics/major medals, sign with promoters → professional boxing career</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Boxing Path - Fighting for Money</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Skip amateur route, go straight to professional fights (riskier, no headgear, harder punches). Sign with boxing promoter/manager who arranges fights. Earn "purse money" (₹10K-10Cr depending on level). More dangerous, more money, faster career progression. Most Indian boxers turn pro after amateur success, but some start professional directly if they have strong gym reputation.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-700 font-semibold mb-2">Professional Boxing Pathway:</p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• <strong>Sign with promoter:</strong> Professional boxing promoters arrange fights, take 30-50% of earnings</li>
                  <li>• <strong>Entry-level fights:</strong> Small local shows ₹10-30K per fight (2-4 fights/year = ₹20K-1.2L annual)</li>
                  <li>• <strong>Build win record:</strong> 10-15 wins → regional championships → national-level fights ₹50K-3L per fight</li>
                  <li>• <strong>Title fights:</strong> Indian title ₹3-10L, Asian title ₹10-50L, World title ₹20L-2Cr+</li>
                  <li>• <strong>Weight classes:</strong> Compete in specific weight category (Flyweight/Bantamweight/.../Heavyweight)</li>
                  <li>• <strong>Risk higher:</strong> No headgear, professional punches MUCH harder, serious injuries common</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Physical Requirements - Most Critical Factor</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Boxing is 80% physical genetics, 20% skill. You need natural athleticism, explosive power, fast reflexes, strong chin (ability to take punches without getting knocked out). If you're naturally slow, weak punches, or get dazed easily from head hits, boxing will be EXTREMELY difficult regardless of training. Harsh reality: some people's bodies/brains just aren't built for getting punched repeatedly.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-700 font-semibold mb-2">Physical Requirements:</p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• <strong>Age:</strong> Start young (10-18 best). Peak performance 25-35. Too old after 40 for competitive boxing</li>
                  <li>• <strong>Fitness level:</strong> Already athletic, good cardio, strong core, explosive movements (sprinters/martial artists adapt well)</li>
                  <li>• <strong>Pain tolerance:</strong> Must handle getting punched in face/body without panicking. Some people freeze when hit</li>
                  <li>• <strong>Chin strength:</strong> Genetic - some boxers get knocked out easily (glass chin), others take hits well (iron chin)</li>
                  <li>• <strong>Hand structure:</strong> Big knuckles, strong wrists = better punchers. Small/fragile hands = injuries common</li>
                  <li>• <strong>No major injuries:</strong> Previous neck/spine/brain injuries = disqualified. Vision problems, heart issues = dangerous</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-6 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Reality Check:</strong> Boxing is one of the few careers where formal education HELPS YOU AFTER boxing ends. Most boxers have only 10th-12th pass education because they started training full-time young. After retirement (age 35-40), they have no job skills, no degree, brain damage, chronic injuries. Smart boxers complete graduation (B.A./B.Com) WHILE boxing (distance learning), so they can become coaches, sports administrators, teachers after fighting career ends. Otherwise, many ex-boxers end up as security guards, daily wage workers, struggling financially despite years of sacrifice. <strong>Get SOME education alongside boxing - it's your backup plan when body fails.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Skills Required Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="w-8 h-8 text-red-600 mr-3" />
            Skills Required: What Makes a Successful Boxer
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg border-t-4 border-red-600">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Physical Skills</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Punching power:</strong> Generate force from legs → hips → shoulders → fist (not just arm strength)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Hand speed:</strong> Throw combinations fast (jab-cross-hook in 2 seconds) before opponent reacts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Footwork & movement:</strong> Control distance, angles, circle opponent, cut off ring, pivot</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Cardiovascular endurance:</strong> Fight 10-12 rounds (3 min each) without gassing out - need marathon runner stamina</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Reflexes & timing:</strong> See punch coming, slip/duck/block in 0.3 seconds, counter immediately</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Core strength:</strong> Absorb body shots, maintain balance, generate torque for power punches</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Chin durability:</strong> Genetic - take head punches without getting knocked out (can't really train this)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-t-4 border-blue-600">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Technical Skills</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Punching technique:</strong> Jab, cross, hook, uppercut with correct form (maximize power, minimize injury risk)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Defensive skills:</strong> Slip (move head side to side), duck, roll, block, parry, clinch when hurt</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Combinations:</strong> Chain punches together (1-2, 1-2-3, body-head combos) to break defense</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Ring generalship:</strong> Control center of ring, use ropes strategically, corner opponent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Counter-punching:</strong> Bait opponent to throw, slip, immediately counter (high IQ boxing)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Body attack:</strong> Target liver, solar plexus, ribs to slow opponent down, set up head shots</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Clinching & inside fighting:</strong> Neutralize taller opponents, rest while holding, dirty boxing tricks</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-t-4 border-purple-600">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Mental Skills - MOST CRITICAL!</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Mental toughness:</strong> Fight through pain, exhaustion, fear. Keep punching when every muscle screams STOP</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Fear management:</strong> Everyone fears getting hurt - courage is fighting despite fear, not absence of fear</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Fight IQ:</strong> Read opponent's patterns, adjust strategy mid-fight, exploit weaknesses (chess match while getting punched)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Discipline:</strong> Train when you don't want to, stick to diet, early sleep, no parties - boxing is sacrifice</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Recovery from knockdowns:</strong> Get dropped, shake it off, continue fighting - mental resilience critical</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Hunger & motivation:</strong> Train 6-8 hours daily for YEARS earning almost nothing - need burning desire to succeed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Calm under pressure:</strong> Thousands watching, opponent trying to knock you out - stay focused, execute gameplan</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong>Reality:</strong> Physical skills can be trained. Technical skills can be learned. But MENTAL TOUGHNESS is innate - either you have it or you don't. Most people quit boxing within 6 months because they can't handle: getting punched in face repeatedly, brutal training pain, social sacrifice, financial struggle, constant fear of injury. Champions aren't born with better jabs - they're born with UNBREAKABLE WILL. Mike Tyson: "Everyone has a plan until they get punched in the mouth." Your mental strength determines if you continue fighting or quit. That's the difference between champions and everyone else.
            </p>
          </div>
        </div>
      </div>

      {/* Career Paths Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-8 h-8 text-red-600 mr-3" />
            Career Paths After/During Boxing Career
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <Trophy className="w-6 h-6 text-red-600 mr-2" />
                Professional Competitive Boxing
              </h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Full-time professional boxer competing in national/international fights. Earn from fight purses, sponsorships, prize money. This is the main goal but only 1% make good money from it.
              </p>
              <div className="bg-white p-4 rounded-lg mb-2">
                <p className="text-sm text-gray-600 mb-2"><strong>Earnings:</strong> ₹10K-10Cr per fight depending on level (entry ₹10-30K, national ₹50K-3L, world ₹20L-2Cr+)</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Pros:</strong> Potential for high earnings if you become champion, fame & recognition, pursue your passion full-time</p>
                <p className="text-sm text-gray-600"><strong>Cons:</strong> 90% earn below ₹2L/year, extreme injury/brain damage risk, short career 10-15 years, no job security</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <Shield className="w-6 h-6 text-blue-600 mr-2" />
                Government Sports Quota Jobs
              </h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Railways, Police, Army, PSUs hire boxers through sports quota. Train/compete while working. This is considered "success" for 95% of Indian boxers because stable salary + continue boxing.
              </p>
              <div className="bg-white p-4 rounded-lg mb-2">
                <p className="text-sm text-gray-600 mb-2"><strong>Earnings:</strong> ₹30-70K/month salary + boxing competition prizes + allowances (total ₹5-10L/year)</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Pros:</strong> Stable monthly income, job security, pension after retirement, free training facilities, continue boxing career</p>
                <p className="text-sm text-gray-600"><strong>Cons:</strong> Job duties + training = exhausting, limited time for boxing, transfers to different cities, bureaucratic system</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <Users className="w-6 h-6 text-green-600 mr-2" />
                Boxing Coach / Trainer
              </h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                After fighting career ends (age 35-40), become boxing coach. Train younger boxers, pass on knowledge. Most stable post-boxing career path. Can work into 60s-70s.
              </p>
              <div className="bg-white p-4 rounded-lg mb-2">
                <p className="text-sm text-gray-600 mb-2"><strong>Earnings:</strong> ₹15-60K/month (gym trainer ₹15-30K, private coach ₹30-60K, celebrity trainer ₹50K-2L)</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Pros:</strong> Stay in boxing world, stable income, less physical damage, respect from students, work till old age</p>
                <p className="text-sm text-gray-600"><strong>Cons:</strong> Lower earnings than competitive boxing, need coaching certifications, patience required, physically demanding</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <Award className="w-6 h-6 text-purple-600 mr-2" />
                Sports Administrator / Official
              </h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Work for Boxing Federation of India, SAI, state sports authorities, organize tournaments, referee/judge fights. Needs education (graduation minimum) + boxing background.
              </p>
              <div className="bg-white p-4 rounded-lg mb-2">
                <p className="text-sm text-gray-600 mb-2"><strong>Earnings:</strong> ₹30-80K/month (officials ₹30-50K, federation positions ₹50-80K, senior roles ₹1L+)</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Pros:</strong> Government/stable jobs, no physical risk, travel for tournaments, influence on sport development, respect</p>
                <p className="text-sm text-gray-600"><strong>Cons:</strong> Need formal education + connections, office politics, less excitement than fighting, slower career growth</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <Dumbbell className="w-6 h-6 text-yellow-600 mr-2" />
                Fitness Trainer / Gym Owner
              </h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Use boxing fitness knowledge to become general fitness trainer or open gym. Boxing fitness classes popular now (cardio boxing, punch bag workouts for weight loss).
              </p>
              <div className="bg-white p-4 rounded-lg mb-2">
                <p className="text-sm text-gray-600 mb-2"><strong>Earnings:</strong> ₹20-50K/month as trainer, ₹50K-3L/month own gym (after ₹10-40L investment, high risk)</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Pros:</strong> Broader market than boxing, fitness industry growing, flexible hours, entrepreneurship opportunity</p>
                <p className="text-sm text-gray-600"><strong>Cons:</strong> High competition, need certifications (ACE/NASM ₹30-80K), own gym = huge financial risk, client retention hard</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <Heart className="w-6 h-6 text-red-600 mr-2" />
                Security / Bodyguard Work
              </h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Reality: Many ex-boxers end up here. Physical strength + intimidating presence = hired for security jobs, bouncers, bodyguards. Not glamorous but pays bills after boxing career ends.
              </p>
              <div className="bg-white p-4 rounded-lg mb-2">
                <p className="text-sm text-gray-600 mb-2"><strong>Earnings:</strong> ₹15-40K/month (mall security ₹15-22K, corporate ₹20-35K, VIP bodyguard ₹40K-1L)</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Pros:</strong> Easy to get hired (physical fitness + boxing background), steady income, night shifts possible</p>
                <p className="text-sm text-gray-600"><strong>Cons:</strong> Low social status, long hours standing, boring work, limited growth, body still at risk</p>
              </div>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-6 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Career Reality:</strong> Only 5% of professional boxers make enough money from fighting alone to live comfortably. The rest need: government sports quota jobs (Railways/Police ₹30-50K/month), coaching work (₹15-40K/month), fitness training, or security jobs. After boxing career ends (age 35-40), you have 20-30 years of working life left with chronic injuries, possible brain damage, and limited job skills. <strong>PLAN YOUR POST-BOXING CAREER FROM DAY ONE.</strong> Get a graduation degree (B.A./B.Com distance learning while boxing), get coaching certifications, save money during peak earning years, build connections in sports administration. Don't be the ex-boxer working as security guard at age 45 with brain damage and broken body, earning ₹18K/month, regretting not planning ahead. Champions think about life AFTER boxing before their first professional fight.
            </p>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="w-8 h-8 text-red-600 mr-3" />
            Career Roadmap: From Beginner to Professional Boxer
          </h2>
          
          <div className="space-y-6">
            <div className="relative pl-8 pb-8 border-l-2 border-red-300">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-red-600"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Year 0-3: Foundation & Amateur Training</h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                <strong>Join boxing gym (age 10-18 ideal).</strong> Train 4-6 hours daily → learn basic punches (jab, cross, hook, uppercut), footwork, defense, conditioning. Build cardio (run 5-10km daily), strength training, sparring with gym mates. Compete in district/state amateur tournaments → win medals, build fight record. Absolutely ZERO earnings during this phase → parents pay, or hostel-based boxing academies (₹5-15K/month fees). Focus entirely on technique development, building physical foundation, understanding what real fighting feels like. Most boxers quit within first year because training too brutal or can't handle getting punched. Those who survive → move to next level.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm text-gray-600">
                <strong>Typical earnings:</strong> ₹0 per month | <strong>Status:</strong> Amateur trainee, no income, pure investment phase
              </div>
            </div>

            <div className="relative pl-8 pb-8 border-l-2 border-orange-300">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-orange-600"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Year 3-7: Amateur Competition & Professional Debut</h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                <strong>Compete in state/national championships.</strong> Win consistently → get selected for national boxing team → government support begins (SAI/Khelo India stipend ₹25K-1L/month for top athletes). Train at national camps (Patiala, Bangalore) with best coaches, equipment, diet support. Compete in international tournaments (Commonwealth, Asian Games, Olympics if you're top 5 in India). After 20-30 amateur fights & strong record → decision time: continue amateur for Olympics OR turn professional for money. Most Indian boxers turn pro after amateur success. Sign with professional promoter → first pro fight (₹10-30K purse). Reality: Still earning very little, need second job or family support.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm text-gray-600">
                <strong>Typical earnings:</strong> ₹0-50K/month (national team stipend IF selected, otherwise zero) | <strong>Status:</strong> Amateur competitor, starting pro career
              </div>
            </div>

            <div className="relative pl-8 pb-8 border-l-2 border-yellow-300">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-yellow-600"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Year 7-12: Building Professional Record & Recognition</h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                <strong>Fight 3-6 professional fights per year.</strong> Win consistently → build 15-25 fight record with majority wins → promoters offer bigger fights. Move from ₹10-30K local fights → ₹50K-2L regional/national fights. Get ranked in Indian boxing → compete for Indian title (₹3-10L purse). Apply for government sports quota jobs (Railways/Police/Army) → MOST boxers aim for this because stable ₹30-50K/month salary + can continue boxing + pension security. This is considered "successful boxing career" for 95% of Indian boxers. Simultaneously: build social media presence, get small sponsorships (local businesses ₹50K-2L/year), save money aggressively. Reality: Even at this level, total income is ₹3-8L per year → modest middle-class lifestyle.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm text-gray-600">
                <strong>Typical earnings:</strong> ₹25-60K/month (fight purses + govt job + sponsorships) | <strong>Status:</strong> Established regional/national level boxer
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-green-600"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Year 12-20+: Elite Level / Championship Fights / Retirement Planning</h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                <strong>Top 1% reach this level.</strong> Win Indian championship → compete for Asian titles (₹10-50L purse) → aim for world championship (₹20L-2Cr purse). Sign with international promoters, fight abroad (Middle East, UK, USA). Major sponsorships (Nike/Adidas ₹10-50L/year), brand endorsements, media appearances. But SIMULTANEOUSLY plan retirement: get coaching certifications, complete graduation degree (distance learning), invest fight earnings wisely, build gym/academy. Peak performance 25-35 years → after 35, decline begins → retire by 38-40. Transition to coaching (₹30-80K/month), sports administration, commentary, or run own boxing gym (₹50K-3L/month if successful). Reality: Even champions retire with health issues → chronic pain, possible CTE symptoms, old injuries. Life AFTER boxing matters more than life DURING boxing because you have 30+ years left.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm text-gray-600">
                <strong>Typical earnings:</strong> ₹5-20L per year (elite level), potentially ₹1-10Cr for world champions | <strong>Status:</strong> Elite boxer → Retired boxer → Coach/Administrator
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mt-8 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong>Realistic Timeline:</strong> 15-20 years from first gym day to peak professional career. Start age 10-15 → amateur phase till 18-22 → professional career 22-38 → retirement. That's 12-16 years of professional fighting, earning good money only for last 5-10 years IF you reach elite level. After 38-40, boxing career over, you're 40 years old with chronic injuries, possible brain damage, and need new career for next 20-30 years. <strong className="text-yellow-900">Smart boxers think about "Year 20+" from Year 1. They get education, coaching certifications, invest earnings, build backup career while still fighting. Don't be the 45-year-old ex-boxer working security for ₹18K/month, slurring words from brain damage, with no other options. Plan ahead.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Difficulty Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Difficulty Level: Breaking Into Boxing</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-red-600 pl-6 py-3">
              <h3 className="font-bold text-lg text-gray-900 mb-2">🔴 Extremely Difficult - Physical & Mental Barriers</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <strong>Brain damage risk:</strong> Every punch to head = brain trauma, CTE develops over time, PERMANENT consequences</li>
                <li>• <strong>Serious injury common:</strong> Broken bones, knockouts, cuts requiring stitches = routine, career-ending injuries possible</li>
                <li>• <strong>Financial struggle:</strong> 90% boxers earn ₹20K-2L per YEAR, need second jobs to survive, poverty while training full-time</li>
                <li>• <strong>Pain tolerance needed:</strong> Get punched in face/body repeatedly, train through injuries, extremely brutal physically</li>
                <li>• <strong>Mental toughness rare:</strong> Most quit within months because can't handle violence + pain + financial stress combined</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 py-3">
              <h3 className="font-bold text-lg text-gray-900 mb-2">🟠 Moderate Difficulty - Training & Competition</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <strong>Brutal training regime:</strong> 6-8 hours daily training, early morning runs, weight cutting for fights = extremely demanding</li>
                <li>• <strong>Short career span:</strong> Peak 25-35 years, forced retirement by 38-40, only 10-15 years professional career</li>
                <li>• <strong>Social sacrifice:</strong> No parties, strict diet, early sleep, miss family events, relationships suffer</li>
                <li>• <strong>High competition:</strong> Thousands trying, only top 100-200 boxers in India earn decent income, extreme pyramid</li>
                <li>• <strong>Weight cutting:</strong> Starve + dehydrate to make weight class before fights, health risk, miserable process</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-600 pl-6 py-3">
              <h3 className="font-bold text-lg text-gray-900 mb-2">🟢 Manageable Aspects - Entry & Learning</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <strong>No formal education needed:</strong> Just join gym and start training, no entrance exams, no degrees required</li>
                <li>• <strong>Low entry cost:</strong> Gym fees ₹1-3K/month, equipment ₹5-15K total, affordable to start (unlike many sports)</li>
                <li>• <strong>Structured amateur path:</strong> District → state → national → international competitions, clear progression system</li>
                <li>• <strong>Government support available:</strong> National team boxers get SAI support, sports quota jobs in Railways/Police/Army</li>
                <li>• <strong>Meritocratic:</strong> Win fights = advance, no family connections needed, pure performance-based</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-6 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Overall Difficulty: EXTREME</strong> - Boxing is one of the hardest careers in India, period. Easy to START (just join gym), but 95% quit within 1-2 years because: too brutal physically (getting punched hurts), financially impossible (earning ₹10-20K/month while training 8 hours daily), brain damage fears, injury risk, social sacrifice. Only people with EXTRAORDINARY mental toughness + financial backing/family support + natural physical talent + burning passion survive long enough to become professional. And even then, 90% of professionals earn below poverty line. If you pursue boxing, do it because you CAN'T imagine life without it, NOT because you think you'll become rich. Love the sport first, money is bonus that 99% never see.
            </p>
          </div>
        </div>
      </div>

      {/* Weight Classes Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Award className="w-8 h-8 text-red-600 mr-3" />
            Weight Classes & Specializations in Boxing
          </h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Boxers compete within specific weight classes to ensure fair fights. You fight against opponents similar body size. Lighter classes = speed & technique. Heavier classes = power & strength. Most boxers start in natural weight class, some cut weight to compete lower for advantage. Prize money HIGHER in popular weight classes (Lightweight to Heavyweight).
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Light Flyweight / Flyweight (46-52 kg)</h3>
              <p className="text-gray-700 text-sm mb-3">
                Smallest weight class. Extremely fast, high punch volume, technical boxing. Indian boxers competitive here (Mary Kom, Amit Panghal). Lower prize money than heavier classes.
              </p>
              <div className="bg-white p-3 rounded text-xs">
                <p className="text-gray-600"><strong>Salary Range:</strong> ₹2-8L per year (national level) | ₹10L-1Cr (Olympic/World level)</p>
                <p className="text-gray-600 mt-1"><strong>Characteristics:</strong> Speed, stamina, precision, technical skill &gt; power</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Bantamweight / Featherweight (52-57 kg)</h3>
              <p className="text-gray-700 text-sm mb-3">
                Balanced weight class. Good speed + decent power. Technical boxing with knockout potential. Popular in India. Good competition depth internationally.
              </p>
              <div className="bg-white p-3 rounded text-xs">
                <p className="text-gray-600"><strong>Salary Range:</strong> ₹3-12L per year (national level) | ₹15L-2Cr (World championship)</p>
                <p className="text-gray-600 mt-1"><strong>Characteristics:</strong> Speed + power balance, versatile fighting styles</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Lightweight / Welterweight (57-69 kg)</h3>
              <p className="text-gray-700 text-sm mb-3">
                Most popular weight classes globally. Perfect balance speed, power, technique. Highest prize money per fight. Vijender Singh competed here. Most competitive division.
              </p>
              <div className="bg-white p-3 rounded text-xs">
                <p className="text-gray-600"><strong>Salary Range:</strong> ₹5-20L per year (national) | ₹20L-5Cr (World title fights)</p>
                <p className="text-gray-600 mt-1"><strong>Characteristics:</strong> Complete fighters, highest pay, most competition</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Middleweight / Light Heavyweight (69-81 kg)</h3>
              <p className="text-gray-700 text-sm mb-3">
                Heavier fighters with serious knockout power. Speed decreases, power increases. Indian boxers less competitive internationally at these weights due to body structure genetics.
              </p>
              <div className="bg-white p-3 rounded text-xs">
                <p className="text-gray-600"><strong>Salary Range:</strong> ₹4-18L per year (national) | ₹25L-3Cr (International championship)</p>
                <p className="text-gray-600 mt-1"><strong>Characteristics:</strong> Power + durability, knockouts more common</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Heavyweight (81+ kg / 91+ kg divisions)</h3>
              <p className="text-gray-700 text-sm mb-3">
                Big men, massive knockout power, slower pace. HIGHEST prize money in boxing globally (Tyson Fury, Anthony Joshua earn $50-100M). Very few Indian heavyweights competitive internationally.
              </p>
              <div className="bg-white p-3 rounded text-xs">
                <p className="text-gray-600"><strong>Salary Range:</strong> ₹3-15L per year India (limited opportunities) | ₹50L-10Cr+ World championship</p>
                <p className="text-gray-600 mt-1"><strong>Characteristics:</strong> Maximum power, highest global prize money, Indian weakness</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Women's Boxing (All Weight Classes)</h3>
              <p className="text-gray-700 text-sm mb-3">
                Growing rapidly in India. Mary Kom, Lovlina Borgohain, Nikhat Zareen leading. Olympic sport since 2012. Similar weight classes as men. Lower prize money currently but improving fast.
              </p>
              <div className="bg-white p-3 rounded text-xs">
                <p className="text-gray-600"><strong>Salary Range:</strong> ₹2-10L per year (national) | ₹15L-2Cr (Olympic/World champions)</p>
                <p className="text-gray-600 mt-1"><strong>Characteristics:</strong> Fast-growing, government support increasing, less competition than men</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong>Choosing Your Weight Class:</strong> Fight at your natural weight first. If naturally 55 kg, compete in Featherweight (54-57 kg). Don't try extreme weight cutting early → damages body, stunts growth if young. As you gain experience, SOME boxers cut 3-5 kg before fights to compete in lower weight class (size advantage). But extreme cutting (8-10 kg) dangerous → dehydration, organ damage, weakens body. Women have fewer weight classes than men but growing. Lighter classes (Flyweight to Lightweight) = Indian boxers most competitive internationally due to body structure. Heavier classes dominated by Europeans/Americans/Africans genetically. Focus on weight class where you naturally fit + where Indian boxing has proven success.
            </p>
          </div>
        </div>
      </div>

      {/* Pros and Cons Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pros and Cons of a Boxing Career</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                <CheckCircle2 className="w-6 h-6 mr-2" />
                Pros - Why People Choose Boxing
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">No formal education required - </span>
                    <span className="text-gray-700">Just join gym and train. No entrance exams, no expensive degrees. Open to everyone regardless of background.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Meritocratic & fair - </span>
                    <span className="text-gray-700">Win fights = advance. No family connections needed, no favoritism. Pure performance-based career progression.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Potential for glory & fame - </span>
                    <span className="text-gray-700">Olympic medals = national heroes. World champions = celebrity status. Legacy that lasts beyond career (Muhammad Ali, Mary Kom).</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Builds extreme discipline & character - </span>
                    <span className="text-gray-700">Training teaches mental toughness, overcoming fear, handling adversity. Life skills beyond boxing.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Government support available - </span>
                    <span className="text-gray-700">National team → SAI support, stipends, free training. Sports quota jobs (Railways/Police/Army) for security.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                <XCircle className="w-6 h-6 mr-2" />
                Cons - Harsh Realities of Boxing
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">EXTREME brain damage risk - </span>
                    <span className="text-gray-700">CTE, dementia, memory loss, depression from repeated head trauma. PERMANENT. Many boxers regret career by 50s.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">90% earn poverty-level income - </span>
                    <span className="text-gray-700">₹20K-2L per YEAR while training full-time. Need second jobs to survive. Financial struggle constant reality.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Serious injuries extremely common - </span>
                    <span className="text-gray-700">Broken bones, knockouts, cuts, organ damage routine. One bad injury can end career permanently.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Very short career span - </span>
                    <span className="text-gray-700">Peak 25-35, forced retirement 38-40. Only 10-15 years professional career. Need second career after boxing.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Brutal lifestyle sacrifice - </span>
                    <span className="text-gray-700">6-8 hours daily training, strict diet, no social life, constant pain, weight cutting torture. Boxing consumes everything.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-red-600 via-orange-600 to-red-700 text-white rounded-xl shadow-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-16 h-16" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Is Professional Boxing Right For You?
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <p className="text-lg leading-relaxed mb-4">
                <strong className="text-yellow-300">Boxing is NOT a career - it's a CALLING.</strong> If you're researching this for stable income, job security, comfortable life → STOP. Choose something else. 90% of boxers earn below ₹2L per year (₹15K/month) while training 8 hours daily, getting punched in face, and destroying their body/brain. This is REALITY, not discouragement.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong className="text-yellow-300">You should ONLY pursue boxing if:</strong>
              </p>
              <ul className="space-y-2 text-white/90">
                <li>• You absolutely LOVE fighting - not just working out, but actual combat, getting hit, hitting back</li>
                <li>• You have extraordinary mental toughness - can train through pain, handle financial struggle, accept fear</li>
                <li>• You're naturally athletic with good reflexes, power, stamina (genetics matter MUCH more than effort in boxing)</li>
                <li>• You're starting young (10-18 ideal) - very hard to start boxing after 25 and reach elite level</li>
                <li>• You have family support/financial backup for first 5-10 years while earning almost nothing</li>
                <li>• You understand brain damage is LIKELY if you fight long enough, and accept that risk consciously</li>
              </ul>
            </div>

            <div className="bg-red-900/50 backdrop-blur-sm rounded-lg p-6 mb-6 border-l-4 border-yellow-400">
              <p className="text-lg leading-relaxed mb-4">
                <strong className="text-yellow-300">Financial Reality Check:</strong>
              </p>
              <ul className="space-y-2 text-white/90 text-sm">
                <li>• <strong>Amateur phase (0-5 years):</strong> ZERO earnings. Parents pay or boxing hostel ₹5-15K/month.</li>
                <li>• <strong>Entry pro (5-10 years):</strong> ₹10-50K per fight, 2-4 fights/year = ₹20K-2L annual. Need second job (security ₹15K, gym trainer ₹12K, construction ₹18K/month).</li>
                <li>• <strong>National level (10-15 years):</strong> Government sports job ₹30-50K/month + fight purses ₹50K-3L per fight = ₹5-10L per year. This is "success" for 95% of Indian boxers.</li>
                <li>• <strong>Elite (15-20 years):</strong> International fights ₹5-20L per fight, major sponsorships = ₹10-50L per year. Only top 50-100 boxers in India.</li>
                <li>• <strong>World champions:</strong> ₹2-10Cr per year. Only 5-10 Indian boxers EVER reached this. Vijender Singh, Mary Kom, Neeraj Goyat level.</li>
              </ul>
              <p className="text-white/90 mt-4 leading-relaxed">
                <strong className="text-yellow-300">You will likely earn LESS as a professional boxer than as a security guard, while getting brain-damaged and risking death in the ring.</strong> If money matters to you, boxing is WORST career choice in India. Do it for passion, glory, proving something to yourself - NOT money.
              </p>
            </div>

            <div className="bg-yellow-900/50 backdrop-blur-sm rounded-lg p-6 mb-6 border-l-4 border-red-400">
              <p className="text-lg leading-relaxed mb-4">
                <strong className="text-red-300">Health Reality Check:</strong>
              </p>
              <ul className="space-y-2 text-white/90 text-sm">
                <li>• <strong>Brain damage LIKELY:</strong> Repeated concussions → CTE → memory loss, depression, dementia starting in 40s-50s. Muhammad Ali, hundreds of professional boxers show symptoms. This is NOT "if" - it's "when" and "how severe."</li>
                <li>• <strong>Chronic injuries guaranteed:</strong> Shoulder damage, hand fractures, facial scars, broken nose (90% of professional boxers), ear cauliflower, dental damage, vision problems. Your body WILL be permanently damaged.</li>
                <li>• <strong>Short life expectancy:</strong> Studies show professional boxers live 10-15 years LESS than average due to brain trauma, organ damage, stress on body. You're literally trading years of life for boxing career.</li>
                <li>• <strong>Post-career suffering:</strong> Chronic pain from old injuries, brain fog, depression, difficulty finding work, financial struggles. Many ex-boxers deeply regret career by age 50.</li>
              </ul>
              <p className="text-white/90 mt-4 leading-relaxed">
                <strong className="text-red-300">Your family will watch you deteriorate.</strong> Slurred speech, forgotten memories, mood swings, physical disabilities. Mike Tyson, Floyd Mayweather, countless lesser-known boxers all show effects. Some develop Parkinson's (Muhammad Ali), some commit suicide from CTE depression. <strong>This is the COST of boxing glory.</strong>
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <p className="text-lg leading-relaxed mb-4">
                <strong className="text-green-300">Smart Path If You Still Want Boxing:</strong>
              </p>
              <ol className="space-y-2 text-white/90 list-decimal list-inside">
                <li>Join boxing gym at age 12-15. Train 2-3 years, see if you truly love it & have talent.</li>
                <li>Compete amateur tournaments. If consistently winning state/national level → consider going serious.</li>
                <li>Complete graduation (B.A./B.Com) via distance learning WHILE boxing. Takes 3-4 years, backup career.</li>
                <li>Aim for government sports quota job (Railways/Police/Army) → stable ₹30-50K/month + continue boxing.</li>
                <li>Get coaching certifications (₹30-80K) by age 25-28, plan post-boxing career BEFORE you stop fighting.</li>
                <li>Compete professionally but SAVE aggressively. Don't spend fight money on cars/lifestyle. Invest for retirement.</li>
                <li>Retire by 35-38 MAXIMUM. Don't fight into 40s → brain damage exponentially worse after 35.</li>
                <li>Transition to coaching (₹30-80K/month), sports administration, or open gym (₹50K-3L/month if successful).</li>
              </ol>
              <p className="text-white/90 mt-4 leading-relaxed">
                <strong className="text-green-300">This path gives you boxing career + financial security + post-career options.</strong> Most boxers skip education/planning → end up broke at 40 with brain damage, working security for ₹18K/month. Don't be them.
              </p>
            </div>

            <div className="text-center">
              <p className="text-xl mb-6 leading-relaxed">
                <strong>Final Word:</strong> Boxing will test EVERYTHING you are. Your courage, discipline, pain tolerance, mental strength. It will give you glory, respect, self-knowledge. It will also give you brain damage, chronic pain, financial struggle, and regret. <strong className="text-yellow-300">Go in with open eyes.</strong> If you still choose boxing after understanding all this → you're exactly the type of person who SHOULD box. Welcome to the fight.
              </p>
              <Link
                to="/explore-careers"
                className="inline-block bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
