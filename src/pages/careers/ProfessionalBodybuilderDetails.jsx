import { Link } from 'react-router-dom';
import { ArrowLeft, Dumbbell, Trophy, Heart, Users, TrendingUp, Zap, AlertTriangle, Pill, Brain, Skull, DollarSign, Clock, BookOpen, CheckCircle2, XCircle, Flame, Award, Camera } from 'lucide-react';

export default function ProfessionalBodybuilderDetails() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-700 text-white py-20 relative overflow-hidden">
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
              <Dumbbell className="w-12 h-12 mr-4" />
              <h1 className="text-5xl font-bold">Professional Bodybuilder</h1>
            </div>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Sculpt extreme muscle mass, compete on stage, build brand through fitness. Train intensely, follow strict diet, showcase physique in competitions. Build career through contests, sponsorships, coaching, and social media.
            </p>
            
            <div className="grid md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Trophy className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">Competitions</div>
                <div className="text-lg font-semibold">State to National Level</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Users className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">Personal Training</div>
                <div className="text-lg font-semibold">₹30-80K/month</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Camera className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">Fitness Modeling</div>
                <div className="text-lg font-semibold">Brand Collaborations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Dumbbell className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">Gym Ownership</div>
                <div className="text-lg font-semibold">Long-term Business</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reality Check Section */}
      <div className="container mx-auto px-4 -mt-10 relative z-20 mb-16">
        <div className="bg-white rounded-xl shadow-2xl p-8 border-t-4 border-orange-600">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Reality Check: The Dark Truth</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-lg">
              <div className="flex items-start">
                <Pill className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">80-90% Use Steroids at Pro Level</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Natural = limited size. Compete professionally = steroids almost mandatory. Side effects: heart disease, liver damage, hormonal destruction. Many die in 40s-50s. India: ₹5-20K/month illegal PEDs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-lg">
              <div className="flex items-start">
                <DollarSign className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">₹30-80K Monthly Expenses</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Supplements ₹10-20K, food ₹10-15K, gym ₹3-10K, coach ₹5-20K. Competition prep adds ₹30-80K. Earn ₹0 from contests. Massive negative cash flow first 3-5 years.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-lg">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Zero Social Life - 12-14 Hours Daily</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Gym 4-6 hours + meal prep 2 hours + eating 6 meals + sleep 8 hours = life consumed. No parties, no eating out, no spontaneity. Relationships suffer badly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-lg">
              <div className="flex items-start">
                <Brain className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Body Dysmorphia Extremely Common</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Never feel big enough. Eating disorders, steroid mood swings, depression, identity crisis. Many struggle mentally despite perfect physique.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-lg">
              <div className="flex items-start">
                <Skull className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Severe Health Damage Long-Term</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Joint damage guaranteed. Steroids → heart/liver/kidney failure, lifelong TRT. Heavy weights + extreme dieting = chronic pain by 40. Higher mortality rates.
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
            <TrendingUp className="w-8 h-8 text-orange-600 mr-3" />
            Income Reality: Competitions Pay Nothing - Build Fitness Business
          </h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-yellow-900">Truth:</strong> Win state championship = ₹10-50K prize. National = ₹50K-2L. But spend ₹30-80K/month × 12 months = ₹3.6-9.6L expenses for one ₹50K prize = MASSIVE LOSS. <strong>Competitions don't pay - they're marketing for your fitness business.</strong> Real income: Personal training (₹30-80K/month), online coaching (₹20-60K/month), gym ownership (₹50K-3L/month), sponsorships (₹50K-10L/year), social media (₹20K-2L/month if famous).
            </p>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-gray-400 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Year 0-3: NEGATIVE ₹20-50K/month</h3>
              <p className="text-gray-700 text-sm">Expenses ₹25-60K (gym, food, supplements, coach). Income: ₹0. Need full-time job. Local contests = ₹5-10K prizes (barely covers entry).</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Year 3-6: ₹10-40K/month NET</h3>
              <p className="text-gray-700 text-sm">Train 5-10 clients = ₹25-1L gross. Expenses ₹30-60K. Net: barely break even. State prizes ₹10-50K/year unreliable.</p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Year 6-10: ₹60K-2L/month</h3>
              <p className="text-gray-700 text-sm">Online coaching ₹40K-2.5L + Personal training ₹40-150K + Sponsorships ₹50K-5L/year + Social media brand deals. 50K-500K followers. First real profit.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Year 10-20: ₹1.5-10L/month</h3>
              <p className="text-gray-700 text-sm">Own gym (₹50K-3L profit after ₹20-60L investment) + Online coaching empire + Major sponsorships ₹5-20L/year + Social media 500K+ followers. Top 1-2%.</p>
            </div>

            <div className="border-l-4 border-purple-600 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Celebrity (Top 0.1%): ₹20L-1Cr/year</h3>
              <p className="text-gray-700 text-sm">Multiple gyms + Brand ambassador ₹20L-1Cr/year + 1M+ followers + TV shows. Only 10-20 in India. 20+ years required.</p>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-6 mt-8 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Financial Reality:</strong> Bodybuilding competitions themselves pay ALMOST NOTHING. Win national championship → ₹50K-2L prize (one-time) after spending ₹3-10L annually on preparation. Real income comes from BUSINESSES you build using your physique as marketing: personal training (₹30-80K/month), online coaching (₹20K-2L/month depending on followers), gym ownership (₹50K-3L/month profit after ₹20-60L investment + 3-5 years break-even), sponsorships (₹50K-20L/year), social media (₹20K-10L/month if you build massive following). <strong>You don't get paid to bodybuild - you use bodybuilding to build FITNESS BUSINESS.</strong> First 3-5 years = NEGATIVE cash flow (spending ₹30-60K/month, earning ₹0). Only after 5-10 years of consistency + building clientele + social media presence do you become profitable. Most bodybuilders (90%) never make money from it - they work full-time jobs and bodybuild as expensive hobby. Only top 5-10% successfully convert physique into sustainable business earning ₹5-50L per year.
            </p>
          </div>
        </div>
      </div>

      {/* Daily Life Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Flame className="w-8 h-8 text-orange-600 mr-3" />
            Daily Schedule: The All-Consuming Lifestyle
          </h2>
          
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-600 mb-6">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold text-gray-900 mb-2">6:00 AM - Morning Cardio + Meal 1</p>
                <p className="text-gray-700 mb-3">45min cardio, 8-10 egg whites, oats, supplements</p>
                
                <p className="font-bold text-gray-900 mb-2">12:00 PM - Meal 3 + Gym Session 1</p>
                <p className="text-gray-700 mb-3">Pre-workout meal, 2-3 hours intense weight training</p>
                
                <p className="font-bold text-gray-900 mb-2">6:00 PM - Meal 5 + Evening Work</p>
                <p className="text-gray-700">Train clients OR second gym session</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">9:00 AM - Meal 2 + Work</p>
                <p className="text-gray-700 mb-3">Chicken/rice, precise macros. Work between meals.</p>
                
                <p className="font-bold text-gray-900 mb-2">3:00 PM - Post-Workout Meal 4</p>
                <p className="text-gray-700 mb-3">Protein shake + large meal, nap 1-2 hours</p>
                
                <p className="font-bold text-gray-900 mb-2">9:00 PM - Meal 6 + Prep + Sleep</p>
                <p className="text-gray-700">Meal prep 1-2 hours. Sleep by 10 PM.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-5 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong>Time Investment:</strong> Gym 4-6 hours + Meal prep 2 hours + Eating 6 meals 1 hour + Sleep 8 hours = 15-17 hours daily. <strong className="text-yellow-900">Social life? ZERO. Vacations? Bring protein powder. Spontaneity? Impossible. Every hour planned around meals and training.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Education & Entry Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <BookOpen className="w-8 h-8 text-orange-600 mr-3" />
            How to Start: No Degree Required
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Getting Started (No Exam)</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Join gym with free weights ₹1-5K/month</li>
                <li>• Learn basics: YouTube (AthleanX, Jeff Nippard) or hire coach ₹5-15K/month</li>
                <li>• Train 6 days/week, 1-2 hours, progressive overload</li>
                <li>• Fix diet: 1.5-2g protein per kg bodyweight, 6 meals daily</li>
                <li>• Supplements: Whey protein ₹3-5K/kg, creatine ₹1-2K/month</li>
                <li>• Consistency: 1-2 years = noticeable, 3-5 years = impressive</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optional: PT Certification for Income</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>ACE/NASM:</strong> ₹30-80K, 3-6 months, international</li>
                <li>• <strong>ISSA:</strong> ₹25-40K online course</li>
                <li>• <strong>K11 Academy:</strong> ₹30-60K, India-based, placements</li>
                <li>• <strong>Reality:</strong> Certificate = business credential. Clients hire you for YOUR physique, not paper</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competition Path (Optional)</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Local: ₹1-3K entry, ₹5-15K prize</li>
                <li>• State: ₹2-5K entry, ₹10-50K prize</li>
                <li>• National: Mr. India, ₹50K-2L prizes (top 3)</li>
                <li>• Prep cost: ₹30-80K (diet, tan, posing suit, travel)</li>
                <li>• <strong>Purpose:</strong> Marketing & credibility, NOT income</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Requirements</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Age: Start 16-18+, peak 25-40 years</li>
                <li>• Financial: ₹30-60K/month expenses minimum</li>
                <li>• Time: 4-6 hours daily for gym + meal prep</li>
                <li>• Mental: Obsessive personality helps (tracking, discipline)</li>
                <li>• Support: Family understands lifestyle, partner accepts isolation</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Smart Path:</strong> (1) Build career earning ₹30-60K/month, (2) Bodybuild as hobby 3-5 years, (3) Get PT cert ₹30-60K, (4) Train 5-10 clients part-time, (5) Build Instagram 50K+ followers, (6) When training income matches job income, go full-time. DON'T quit job immediately - 95% go broke trying.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Required Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="w-8 h-8 text-orange-600 mr-3" />
            Key Skills: Training, Nutrition, Discipline
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-orange-50 p-5 rounded-lg border-t-4 border-orange-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Training Knowledge</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Proper form (squats, deadlifts, bench)</li>
                <li>• Progressive overload</li>
                <li>• Training splits (push/pull/legs)</li>
                <li>• Periodization & recovery</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-t-4 border-blue-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Nutrition Mastery (80%!)</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Macro calculation (2g protein/kg)</li>
                <li>• Calorie tracking (MyFitnessPal)</li>
                <li>• Meal timing & prep skills</li>
                <li>• Supplement knowledge</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-t-4 border-purple-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Mental Discipline</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Extreme consistency (years)</li>
                <li>• Delayed gratification</li>
                <li>• Pain tolerance</li>
                <li>• Social sacrifice acceptance</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong>Reality:</strong> 80% nutrition, 15% training, 5% genetics. Perfect training + bad diet = zero results. Track macros religiously, meal prep every Sunday, weigh food on scale. If you can't do obsessive dietary discipline, you won't build championship physique.
            </p>
          </div>
        </div>
      </div>

      {/* Career Paths Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Trophy className="w-8 h-8 text-orange-600 mr-3" />
            How Bodybuilders Make Money (NOT Competitions!)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Personal Training (Most Common)</h3>
              <p className="text-sm text-gray-700 mb-2">Train 5-20 clients 1-on-1 at gym or online. Create plans, teach form, motivate clients.</p>
              <p className="text-sm text-gray-600"><strong>₹30K-1.5L/month</strong> | Flexible hours, decent income | Income tied to your hours</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Online Coaching / Social Media</h3>
              <p className="text-sm text-gray-700 mb-2">Build Instagram/YouTube 50K-1M+, sell programs, diet plans, brand collaborations.</p>
              <p className="text-sm text-gray-600"><strong>₹20K-10L/month</strong> | Scalable, passive income | Takes 2-3 years build following</p>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Gym Ownership (Biggest Long-term)</h3>
              <p className="text-sm text-gray-700 mb-2">Open gym after 5-10 years + ₹20-60L capital. 200-500 members × ₹1.5-3K fees.</p>
              <p className="text-sm text-gray-600"><strong>₹50K-5L/month</strong> profit | Build asset | ₹20-60L investment, 3-5 years break-even</p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sponsorships & Brand Ambassador</h3>
              <p className="text-sm text-gray-700 mb-2">Win competitions + build following → supplement companies sponsor you.</p>
              <p className="text-sm text-gray-600"><strong>₹50K-20L/year</strong> | Free products + cash | Need competition wins + social media</p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fitness Modeling</h3>
              <p className="text-sm text-gray-700 mb-2">Model for magazines, supplement brands, sportswear. ₹10-80K per shoot.</p>
              <p className="text-sm text-gray-600"><strong>₹2-10L/year</strong> | Fun work, builds portfolio | Inconsistent, peak physique required</p>
            </div>

            <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Competitions (WORST Income!)</h3>
              <p className="text-sm text-gray-700 mb-2">State ₹10-50K, national ₹50K-2L prizes. But spend ₹50K-3L prep.</p>
              <p className="text-sm text-gray-600"><strong>NEGATIVE ₹20K-2L/year</strong> | Credibility only | Competitions = expense not income</p>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Truth:</strong> Combine streams: Training (₹30-80K) + Online coaching (₹20-60K) + Social media (₹10-1L) + Sponsorships (₹50K-5L/year) + Gym ownership (₹50K-3L) = ₹10-50L/year top 5%. Takes 8-12 years. First 5 years barely break even. <strong>You're fitness entrepreneur, not professional bodybuilder earning from prizes.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="w-8 h-8 text-orange-600 mr-3" />
            Roadmap: Beginner to Pro (10-15 Years)
          </h2>
          
          <div className="space-y-4">
            <div className="relative pl-6 pb-4 border-l-2 border-orange-300">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-orange-600"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Year 0-2: Foundation</h3>
              <p className="text-gray-700 text-sm mb-1">Join gym, learn form, build 8-15 kg muscle. Expenses ₹15-30K/month, income ₹0. <strong>Work full-time job to fund.</strong></p>
            </div>

            <div className="relative pl-6 pb-4 border-l-2 border-yellow-300">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-yellow-600"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Year 2-5: Get Certified</h3>
              <p className="text-gray-700 text-sm mb-1">PT cert, train 2-5 clients part-time (₹10-40K). Compete locally. Start Instagram. Still need day job. <strong>Break even.</strong></p>
            </div>

            <div className="relative pl-6 pb-4 border-l-2 border-green-300">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-green-600"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Year 5-10: Build Brand</h3>
              <p className="text-gray-700 text-sm mb-1">Training (₹40-1L) + online coaching (₹20-80K) + sponsorships. 50K-300K followers. <strong>First real profit ₹60K-2L/month.</strong></p>
            </div>

            <div className="relative pl-6">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-purple-600"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Year 10-20: Gym Owner</h3>
              <p className="text-gray-700 text-sm mb-1">Open gym (₹20-60L investment), profit ₹50K-3L. Multiple income streams. <strong>Top 1%: ₹3-20L/month.</strong></p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong>Timeline:</strong> 10-15 years from "start gym" to "₹10-50L/year." First 5 years = negative/break even. Years 5-10 = starting profit. Years 10-20 = established business. <strong className="text-yellow-900">95% quit within 2 years. Only obsessed, patient people succeed.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Difficulty Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Difficulty Level: Extremely Hard</h2>
          
          <div className="space-y-3">
            <div className="border-l-4 border-red-600 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-1">🔴 Extreme: Health & Money</h3>
              <p className="text-gray-700 text-sm">Steroid pressure 80-90%, ₹30-80K/month expenses for 3-5 years earning ₹0, social isolation, body dysmorphia, zero income security</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-1">🟠 Moderate: Training & Business</h3>
              <p className="text-gray-700 text-sm">4-6 hours daily gym + meal prep, nutrition complexity, injury management, competition prep brutal, need business skills not just muscles</p>
            </div>

            <div className="border-l-4 border-green-600 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-1">🟢 Manageable: Entry</h3>
              <p className="text-gray-700 text-sm">No formal education, free info (YouTube), meritocratic (better physique = more clients), multiple income paths, long career possible</p>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Overall: EXTREME.</strong> Easy to start (join gym today), nearly impossible to succeed financially (95% don't profit after 5 years). Hardest parts: psychotic discipline 10+ years, spending ₹30-60K/month when earning ₹0 for 3-5 years, destroying social life, health risks (steroids), building business skills. Only pursue if OBSESSED + financially stable to burn ₹3-10L before profiting.
            </p>
          </div>
        </div>
      </div>

      {/* Pros and Cons Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pros and Cons of Bodybuilding Career</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                <CheckCircle2 className="w-6 h-6 mr-2" />
                Pros - Why People Choose Bodybuilding
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">No formal education required - </span>
                    <span className="text-gray-700">Just join gym and start. No entrance exams, no expensive degrees, no student loans. Open to anyone.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Passion-based lifestyle - </span>
                    <span className="text-gray-700">If you love training, you're in gym 4-6 hours daily anyway. Turn hobby into career. Every day is exciting.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Multiple income streams possible - </span>
                    <span className="text-gray-700">Personal training, online coaching, gym ownership, sponsorships, social media, modeling - not dependent on single source.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Stay fit for life - </span>
                    <span className="text-gray-700">Career REQUIRES being in peak physical shape. Never sedentary office job health problems. Age gracefully.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Respect & admiration - </span>
                    <span className="text-gray-700">Impressive physique commands respect. People ask advice, look up to you, social validation high.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                <XCircle className="w-6 h-6 mr-2" />
                Cons - Harsh Realities of Bodybuilding
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Steroid use extremely common - </span>
                    <span className="text-gray-700">80-90% professional bodybuilders use PEDs. Severe health consequences: heart disease, liver damage, hormonal destruction. Many die young.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Extremely expensive lifestyle - </span>
                    <span className="text-gray-700">₹30-80K/month on food, supplements, gym, coach. First 3-5 years earn nothing. Massive negative cash flow.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Zero social life - </span>
                    <span className="text-gray-700">Can't eat out (macros), no alcohol, miss events (training schedule), skip family functions. Isolation guaranteed.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Body dysmorphia & mental health - </span>
                    <span className="text-gray-700">Never feel big enough, eating disorders common, steroid mood swings, depression, identity crisis when career ends.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Competitions pay almost nothing - </span>
                    <span className="text-gray-700">Win state championship → ₹50K prize after spending ₹3L+ on prep. Competitions are NET LOSS financially.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-700 text-white rounded-xl shadow-2xl p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Dumbbell className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold text-center mb-6">
              Is Professional Bodybuilding Right For You?
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 mb-5">
              <p className="text-lg leading-relaxed mb-3">
                <strong className="text-yellow-300">Bodybuilding is NOT a career - it's an EXPENSIVE LIFESTYLE you monetize into business.</strong> Competitions pay almost nothing. Real income: personal training, online coaching, gym ownership, social media, sponsorships. Think of bodybuilding like MBA from your own body - it's credential opening doors to fitness industry.
              </p>
              <p className="text-white/90 mb-3"><strong className="text-yellow-300">ONLY pursue if:</strong></p>
              <ul className="space-y-1 text-white/90 text-sm">
                <li>• OBSESSED with training & nutrition (not casual interest)</li>
                <li>• Have ₹5-10L savings OR stable income to fund ₹30-60K/month for 3-5 years</li>
                <li>• Accept social isolation (no parties, eating out, spontaneity)</li>
                <li>• Have BUSINESS mindset (marketing, social media, client management)</li>
                <li>• Willing to dedicate 10-15 years before ₹5-20L/year income</li>
                <li>• Accept health risks (joint damage guaranteed, steroid temptation real)</li>
              </ul>
            </div>

            <div className="bg-red-900/50 backdrop-blur-sm rounded-lg p-5 mb-5 border-l-4 border-yellow-400">
              <p className="text-sm text-white/90 mb-2"><strong className="text-yellow-300">Financial Reality:</strong></p>
              <ul className="space-y-1 text-white/90 text-sm">
                <li>• Year 0-3: LOSS ₹7-14L (need job or savings)</li>
                <li>• Year 3-5: Barely break even</li>
                <li>• Year 5-10: First real profit ₹60K-2L/month</li>
                <li>• Year 10-20: ₹1.5-10L/month (top 5%, need ₹20-60L gym investment)</li>
              </ul>
              <p className="text-white/90 mt-3 text-sm">
                <strong className="text-red-300">You'll spend ₹10-30L over 5-10 years before breaking even. 90% never profit. Do it for passion, NOT money.</strong>
              </p>
            </div>

            <div className="bg-yellow-900/50 backdrop-blur-sm rounded-lg p-5 mb-5 border-l-4 border-red-400">
              <p className="text-sm text-white/90 mb-2"><strong className="text-red-300">Health Reality:</strong></p>
              <p className="text-white/90 text-sm">
                80-90% pros use steroids → heart disease, liver damage, hormonal destruction, many die in 40s-50s. Even without steroids: joint damage, chronic pain. <strong className="text-red-300">Trading longevity for aesthetics.</strong>
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 mb-6">
              <p className="text-sm text-white/90 mb-2"><strong className="text-green-300">Smart Path:</strong></p>
              <ol className="space-y-1 text-white/90 text-sm list-decimal list-inside">
                <li>Build career earning ₹30-60K/month</li>
                <li>Bodybuild as hobby 3-5 years, build physique + Instagram</li>
                <li>Get PT cert (₹30-60K), train 3-5 clients part-time</li>
                <li>Grow Instagram to 50K+ followers (3-5 years)</li>
                <li>Scale to ₹40-1L/month training + online coaching</li>
                <li>When fitness income matches job for 6+ months, go full-time</li>
                <li>After 8-12 years + savings, open gym</li>
              </ol>
              <p className="text-white/90 mt-3 text-sm">
                <strong className="text-green-300">This works. Takes 10-15 years but builds real business.</strong>
              </p>
            </div>

            <div className="text-center">
              <p className="text-lg mb-4 leading-relaxed">
                <strong>Final Word:</strong> Transforms body & discipline but destroys social life, costs ₹10-30L over 10 years, damages health. <strong className="text-yellow-300">Only pursue if 100% obsessed AND financially stable.</strong> If thinking "maybe I'll try" → DON'T. Only people who CAN'T imagine life without bodybuilding should attempt this.
              </p>
              <Link
                to="/explore-careers"
                className="inline-block bg-white text-orange-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
