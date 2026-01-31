import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Target, Users, TrendingUp, AlertTriangle, Clock, BookOpen, CheckCircle2, XCircle, Zap, Award } from 'lucide-react';

export default function ProfessionalAthleteDetails() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 via-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/emerging-careers" className="inline-flex items-center text-white/90 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Careers
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <Trophy className="w-12 h-12 mr-4" />
              <h1 className="text-5xl font-bold">Professional Athlete (Non-Cricket)</h1>
            </div>
            <p className="text-xl text-white/90 mb-8">
              Compete in Football, Badminton, Tennis, Hockey, Athletics, etc. Similar extreme odds as cricket but LESS money even at top level in India.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Trophy className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">Olympic Medalists</div>
                <div className="text-lg font-semibold">₹3-8Cr rewards</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Target className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">National Players</div>
                <div className="text-lg font-semibold">₹1-15L per month</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">ISL Football</div>
                <div className="text-lg font-semibold">₹10L-3Cr per season</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Award className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">Most Sports</div>
                <div className="text-lg font-semibold">₹20K-5L per year</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reality Check Section */}
      <div className="container mx-auto px-4 -mt-10 relative z-20 mb-16">
        <div className="bg-white rounded-xl shadow-2xl p-8 border-t-4 border-green-600">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Reality Check: Even Worse Than Cricket for Money</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Same Lottery Odds as Cricket—WORSE Payoff</h3>
              <p className="text-gray-700 text-sm">
                Football, hockey, badminton, tennis = same 0.0001% odds of making Indian team. But UNLIKE cricket (IPL ₹20L-17Cr), these sports pay MUCH LESS even at top. Indian football team players earn ₹5-30L/year. Hockey players ₹8-25L/year. Badminton/Tennis top 10 earn ₹50L-5Cr (Sindhu, Saina level), rest struggle at ₹2-10L/year. ISL football created leagues (₹10L-3Cr contracts) but only 20-30 Indian stars. 99.99% athletes earn ₹0-5L/year entire career.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Government Sponsorship Critical—Still Barely Survival</h3>
              <p className="text-gray-700 text-sm">
                Unlike cricket (BCCI rich), most sports depend on Sports Authority of India (SAI) stipends: National campers ₹50K/month, Olympians ₹1L/month. Prize money: Olympics medal ₹3-8Cr (one-time), Asian Games ₹50L-2Cr, National ₹50K-5L. But competitions rare—1-2 per year. Result: Even national athletes work jobs (railway, police via sports quota ₹25-50K/month). Without government job = financial disaster.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Family Investment ₹10-30L Over 15 Years—Almost Never Profitable</h3>
              <p className="text-gray-700 text-sm">
                Tennis rackets, coaching, tournaments abroad = ₹5-15L/year for 10-15 years. Football academies ₹50K-3L/year. Badminton training ₹1-5L/year plus equipment, physio, travel. Total family investment ₹10-30L by age 25. Return? 99.9% earn ₹0-3L/year lifetime. Even national players barely break even. Only top 10-20 in each sport (Sindhu, Chhetri, Sreejesh) earn enough to justify investment—0.001% of those who try.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">No Professional Leagues = Zero Income Between Competitions</h3>
              <p className="text-gray-700 text-sm">
                Cricket has IPL (2 months, ₹20L-17Cr). Football has ISL (4 months, ₹10L-3Cr for stars). Hockey, badminton, tennis, athletics = NO professional leagues with guaranteed salaries. Athletes compete 5-10 times/year, earn ₹10K-5L per event prize money. Rest of year = ₹0 income unless government stipend (₹50K-1L/month for top 100 athletes only). 99% must work jobs to survive while training.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Peak Career 8-12 Years—Then Nothing</h3>
              <p className="text-gray-700 text-sm">
                Peak age 20-32 (10-12 years). Forced retirement 32-35 due to age, injuries. Post-career: coaching pays ₹30K-1L/month (not enough after earning ₹0-5L/year as athlete). Only Olympic medalists get cushy government jobs (OGQ, SAI) ₹1-3L/month. Rest work normal jobs ₹30-60K/month. Basically, sacrifice 20 years (age 10-30) training, earn nothing, retire broke at 32 with no skills.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sport-by-Sport Breakdown */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-8 h-8 text-green-600 mr-3" />
            Sport-by-Sport Reality Check
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4 py-3 bg-blue-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">⚽ Football</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Best Option in India After Cricket:</strong> ISL created professional league (₹10L-3Cr per season for top 30 Indian players). National team ₹5-30L/year. I-League ₹3-15L/year. But 99% players earn ₹2-8L/year in lower divisions or state teams.</p>
              <p className="text-sm text-gray-700"><strong>Reality:</strong> Sunil Chhetri earns ₹1.5-2Cr/year (best Indian player). Only 200-300 Indians earn living from football. Europe dream = 0.0001% Indians make it (visa issues, competition). Sports quota railway/police jobs ₹3-8L/year = best realistic outcome.</p>
            </div>

            <div className="border-l-4 border-green-600 pl-4 py-3 bg-green-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🏑 Hockey</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>National Sport But Poor Pay:</strong> National team players ₹8-25L/year (contracts + match fees). Hockey India League discontinued (was ₹10L-1Cr). Now only international tournaments 5-10/year earning ₹50K-3L prize money.</p>
              <p className="text-sm text-gray-700"><strong>Reality:</strong> Most players have government jobs (sports quota) ₹25-50K/month = main income. Playing hockey = side activity, not career. Olympics medal = ₹3-8Cr reward (one-time windfall). Otherwise financial struggle entire career.</p>
            </div>

            <div className="border-l-4 border-purple-600 pl-4 py-3 bg-purple-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🏸 Badminton</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Top 10 Earn Well, Rest Struggle:</strong> Sindhu, Saina, Srikanth earn ₹5-15Cr/year (endorsements, tournaments, government contracts). Ranked 10-50 earn ₹20L-2Cr/year. Ranked 50-200 earn ₹5-30L/year. Below 200 = ₹0-5L/year.</p>
              <p className="text-sm text-gray-700"><strong>Reality:</strong> International circuit expensive (travel, coaching ₹10-25L/year). Family invests ₹15-30L over 15 years. Only top 10-20 profitable. BWF tournaments 15-20/year, prize ₹2L-40L for winners. Most players negative income after expenses.</p>
            </div>

            <div className="border-l-4 border-orange-600 pl-4 py-3 bg-orange-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🎾 Tennis</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Most Expensive, Worst ROI:</strong> Coaching, tournaments abroad, equipment = ₹20-50L/year for 10-15 years. Total family investment ₹3-7Cr. ATP/WTA ranking top 100 earn ₹50L-10Cr/year. Ranked 100-500 = NEGATIVE (spend more than earn). Below 500 = total loss.</p>
              <p className="text-sm text-gray-700"><strong>Reality:</strong> No Indians in top 100 currently. Junior players rank 200-500, earn ₹5-30L/year, spend ₹15-40L/year = net loss. Only Davis Cup players (top 5 Indians) earn ₹15-50L/year. 99.99% tennis players lose money entire career. Richest-family sport.</p>
            </div>

            <div className="border-l-4 border-yellow-600 pl-4 py-3 bg-yellow-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🏃 Athletics (Track & Field)</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Minimal Money Unless Olympic Medal:</strong> National athletics meet prize ₹50K-2L. Asian Games ₹50L-2Cr (medals). Olympics ₹3-8Cr (medals). But competitions 3-5/year only. SAI stipend ₹50K-1L/month for top 50 athletes.</p>
              <p className="text-sm text-gray-700"><strong>Reality:</strong> Neeraj Chopra (Olympic gold) earns ₹15-30Cr/year (endorsements + prize). Other athletes earn ₹3-15L/year (government stipend + small prizes). Need government job ₹30-60K/month to survive. Career = financial struggle unless you win Olympics (0.00001% chance).</p>
            </div>

            <div className="border-l-4 border-red-600 pl-4 py-3 bg-red-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🏀 Basketball / 🏐 Volleyball / Other Sports</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Almost Zero Professional Opportunity India:</strong> No professional leagues, minimal sponsorship, tiny prize money (₹10K-1L national championships). SAI support for top 10-20 athletes only (₹50K-1L/month).</p>
              <p className="text-sm text-gray-700"><strong>Reality:</strong> Cannot earn living from these sports in India. Pursue ONLY as hobby while working normal job OR aim for government sports quota job (₹25-50K/month). USA college scholarship possible for top 0.01% (full ride $30-60K/year) but requires exceptional talent + expensive recruitment process ₹5-15L.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Income Reality Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
            Income Reality: Poverty Line Unless Top 10 in Country
          </h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-yellow-900">Truth:</strong> Average professional athlete (national level, not international) in India earns ₹2-10L/year. Government stipend ₹50K-1.2L/month IF in top 50 of sport. Sports quota job ₹25-50K/month = main income for 90% athletes. Only top 10 per sport earn ₹50L+/year. Olympics/Asian Games medals = one-time windfall ₹50L-8Cr but career earnings still ₹3-15L/year average.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Youth Training (Age 8-22): NEGATIVE ₹10-30L total</h3>
              <p className="text-gray-700 text-sm">Family pays coaching ₹1-5L/year, equipment ₹50K-3L/year, tournament travel ₹1-5L/year, physio/nutrition ₹50K-2L/year. Zero income 15 years. Pure expense.</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">State Level Athlete: ₹0-3L/year</h3>
              <p className="text-gray-700 text-sm">State championships prize ₹10K-1L. Compete 5-10 times/year = ₹50K-10L gross. Minus expenses = ₹0-3L net. Need job to survive. 90% stuck here, never progress.</p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">National Level Athlete: ₹3-15L/year</h3>
              <p className="text-gray-700 text-sm">National team + SAI stipend ₹6-12L + competitions ₹2-5L + sports quota job ₹3-8L = total ₹11-25L gross, ₹3-15L net after training expenses. Still financial struggle.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">International Star (Top 10): ₹50L-15Cr/year</h3>
              <p className="text-gray-700 text-sm">Endorsements ₹30L-10Cr + competitions ₹10L-3Cr + government contracts ₹10L-2Cr. Sindhu, Neeraj Chopra, Chhetri level. But only 10-20 athletes total across ALL sports at this level in India.</p>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Reality:</strong> 99.9% athletes earn ₹0-10L/year entire career. Even national players need government jobs to survive. Top 0.1% earn ₹50L+/year. Family invests ₹10-30L, athlete earns ₹5L-20L lifetime (net loss ₹5-25L). <strong>This is NOT a financially viable career for 99.99% who attempt it.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Entry Path Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <BookOpen className="w-8 h-8 text-green-600 mr-3" />
            Entry Path: Same as Cricket (Start Age 8-12, Sacrifice Everything)
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Start Young & Assess Talent</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Join sport-specific academy age 8-12 (football: Tata Football Academy, FC Goa; badminton: Gopichand, Prakash Padukone; tennis: Mahesh Bhupathi Academy)</li>
                <li>• By age 15-16: If NOT selected for state U-17 team = quit immediately (won't make it professionally)</li>
                <li>• By age 19-20: Must be in senior state team OR realistic shot at national team</li>
                <li>• By age 22-25: If not selected for Indian team or realistic contender, exit sports, get job</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Climb Selection Ladder</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• District U-15 → State U-17 → State U-19 → State Senior → National Camp → Indian Team</li>
                <li>• Each level = trials, selections, politics, need connections often</li>
                <li>• Train 6-8 hours daily, compete 10-20 times/year</li>
                <li>• 95% stuck at state level, never make national team</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Sports Quota Government Job (CRITICAL)</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• State/national level athletes eligible for sports quota jobs (railway, police, banks, PSUs)</li>
                <li>• Salary ₹25-60K/month + continue playing sports</li>
                <li>• <strong>THIS IS THE REAL GOAL</strong>—guaranteed income while competing</li>
                <li>• Without this job = financial disaster (99% athletes need it)</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Post-Career Transition</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Coaching: ₹30K-1L/month (state academies, private coaching)</li>
                <li>• Government sports administration (SAI, federations): ₹60K-2L/month</li>
                <li>• Only Olympic medalists get cushy roles ₹1-3L/month</li>
                <li>• Most continue government job they got via sports quota</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Smart Path:</strong> (1) Complete education alongside sports (minimum 12th, preferably graduation), (2) Get sports quota job by age 20-22 (state level enough), (3) Continue playing while working job, (4) If make Indian team = bonus, if not = you have stable job ₹3-8L/year, (5) Retire from sports age 32-35, continue job till 60. <strong>DO NOT sacrifice education betting on 0.0001% chance of becoming Sindhu/Neeraj. Sports quota job = realistic win outcome.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Difficulty Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Difficulty Level: EXTREME (Same as Cricket)</h2>

          <div className="space-y-3">
            <div className="border-l-4 border-red-600 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-1">🔴 Extreme: Success Odds</h3>
              <p className="text-gray-700 text-sm">0.0001% make Indian team. 0.01% make state team. Even state level = financial struggle ₹2-8L/year. Natural talent required (can't compensate with hard work). Must start age 8-12, 20 year commitment.</p>
            </div>

            <div className="border-l-4 border-red-600 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-1">🔴 Extreme: Financial Return</h3>
              <p className="text-gray-700 text-sm">Family invests ₹10-30L over 15 years. 99.9% athletes earn ₹0-10L/year (net lifetime loss ₹5-25L). Even national athletes earn ₹5-20L/year = barely break even. Only top 10 per sport profitable.</p>
            </div>

            <div className="border-l-4 border-red-600 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-1">🔴 Extreme: Career Stability</h3>
              <p className="text-gray-700 text-sm">Peak 10-12 years (age 20-32). Forced retirement by injuries/age by 32-35. No professional leagues (except football/badminton leagues with 100-200 positions). Sports quota job = ONLY realistic stable outcome.</p>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Overall: EXTREME.</strong> Same lottery odds as cricket but WORSE payoff (no IPL money). 99.99% fail financially. Smart goal = sports quota government job ₹3-8L/year by age 22 (state level enough), not Indian team/Olympics. If thinking "I'll become next Sindhu" = 0.0001% odds while sacrificing education + ₹15L family money. <strong>Pursue ONLY if: (1) Selected for state U-17 by age 16, (2) Completing education alongside, (3) Family can afford ₹15L loss, (4) Accept sports quota job (₹3-8L/year) = success, not Olympic gold.</strong>
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
                    <span className="font-semibold text-gray-900">Sports quota government jobs - </span>
                    <span className="text-gray-700 text-sm">State/national athletes get railway/police/bank jobs ₹3-8L/year. Most realistic positive outcome.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Peak fitness & discipline - </span>
                    <span className="text-gray-700 text-sm">Athletic lifestyle builds character, health, work ethic.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Top 10 earn very well - </span>
                    <span className="text-gray-700 text-sm">Sindhu, Neeraj, Chhetri earn ₹5-30Cr/year. Set for life if you reach top.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Passion-based work - </span>
                    <span className="text-gray-700 text-sm">If you love the sport, playing at high level = fulfilling.</span>
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
                    <span className="font-semibold text-gray-900">0.0001% success rate Indian team - </span>
                    <span className="text-gray-700 text-sm">Lottery odds. Even state level = 0.01%. 99.99% fail to earn living from sport.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Family financial burden ₹10-30L - </span>
                    <span className="text-gray-700 text-sm">Coaching, equipment, travel over 15 years. 99.9% never recover investment.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Worse money than cricket - </span>
                    <span className="text-gray-700 text-sm">No IPL equivalent. Even national players earn ₹5-25L/year (cricket Ranji = ₹30K-2L but IPL = ₹20L-17Cr).</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Short career 10-12 years - </span>
                    <span className="text-gray-700 text-sm">Peak 20-32, forced retirement by 35. No transferable skills. Start over at 32.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Natural talent required - </span>
                    <span className="text-gray-700 text-sm">Hard work not enough. If not naturally gifted + selected for state U-17 by 16 = won't make it.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-green-700 via-blue-600 to-purple-600 text-white rounded-xl shadow-2xl p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold text-center mb-6">
              Should You Pursue Professional Sports?
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 mb-5">
              <p className="text-lg leading-relaxed mb-3">
                <strong className="text-yellow-300">Brutal Honesty:</strong> Same lottery odds as cricket (0.0001%) but WORSE payoff. Cricket has IPL (₹20L-17Cr). Other sports have nothing comparable. Even national football/hockey/badminton players earn ₹5-25L/year. Family invests ₹10-30L, athlete earns ₹5-20L lifetime = net loss ₹5-25L.
              </p>
              <p className="text-white/90 mb-3"><strong className="text-yellow-300">ONLY pursue if ALL these true:</strong></p>
              <ul className="space-y-1 text-white/90 text-sm">
                <li>• Selected for state U-17 team by age 16 (if not, quit immediately—won't make it)</li>
                <li>• Natural talent exceptional (coaches say "special," not just "good")</li>
                <li>• Family can afford to lose ₹15L investment (don't take loans)</li>
                <li>• Completing education alongside sports (minimum 12th, preferably graduation)</li>
                <li>• Goal = sports quota government job ₹3-8L/year (NOT Indian team/Olympics)</li>
                <li>• Accept 99.9% chance you'll never earn living solely from sport</li>
              </ul>
            </div>

            <div className="bg-green-900/50 backdrop-blur-sm rounded-lg p-5 mb-5 border-l-4 border-green-400">
              <p className="text-sm text-white/90 mb-2"><strong className="text-green-300">Smart Realistic Path:</strong></p>
              <ol className="space-y-1 text-white/90 text-sm list-decimal list-inside">
                <li>Play sport age 8-16 while studying normally</li>
                <li>By age 16: In state U-17 team? Continue. Not selected? Quit sports, focus education</li>
                <li>By age 20-22: Get sports quota government job (state level enough) ₹25-50K/month</li>
                <li>Continue playing + working job till age 32-35</li>
                <li>If make Indian team = bonus windfall. If not = you have stable job ₹3-8L/year</li>
                <li>Retire from sport age 32-35, continue government job till 60 (pension, security)</li>
              </ol>
              <p className="text-white/90 mt-3 text-sm">
                <strong className="text-green-300">This way you're not gambling everything. Sports quota job ₹3-8L/year = REALISTIC success. Indian team/Olympics = bonus if lucky.</strong>
              </p>
            </div>

            <div className="bg-red-900/50 backdrop-blur-sm rounded-lg p-5 mb-6 border-l-4 border-red-400">
              <p className="text-sm text-white/90 mb-2"><strong className="text-red-300">DO NOT Pursue If:</strong></p>
              <ul className="space-y-1 text-white/90 text-sm">
                <li>• Not in state U-17 by age 16 (you won't make it professionally)</li>
                <li>• Dropping out of school to "focus on sport" (financial suicide)</li>
                <li>• Family taking loans for training (will destroy family financially)</li>
                <li>• Thinking "hard work enough" (need natural talent FIRST, then hard work)</li>
                <li>• Goal = Olympics gold/Indian team (0.0001% odds, not realistic goal)</li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-lg mb-4 leading-relaxed">
                <strong>Final Word:</strong> Love sports? Play recreationally while building normal career. Want professional sports? Pursue sports quota government job ₹3-8L/year (achievable for state-level athletes), NOT Indian team glory (0.0001% odds). <strong className="text-yellow-300">Sindhu/Neeraj/Chhetri are 0.0001% outliers—build career assuming you're not them.</strong> Smart athletes complete education + get sports quota job = security for life.
              </p>
              <Link
                to="/emerging-careers"
                className="inline-block bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Realistic Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
