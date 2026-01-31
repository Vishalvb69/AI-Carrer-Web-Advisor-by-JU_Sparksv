import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, DollarSign, Target, TrendingUp, AlertTriangle, Clock, BookOpen, CheckCircle2, XCircle, Users, Star, Zap } from 'lucide-react';

export default function ProfessionalCricketerDetails() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 via-green-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/explore-careers" className="inline-flex items-center text-white/90 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Careers
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <Trophy className="w-12 h-12 mr-4" />
              <h1 className="text-5xl font-bold">Professional Cricketer</h1>
            </div>
            <p className="text-xl text-white/90 mb-8">
              Play cricket professionally—from domestic Ranji Trophy to IPL to Indian national team. Extreme talent required, but IPL has made cricket lucrative for top 1%.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Trophy className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">IPL Contract</div>
                <div className="text-lg font-semibold">₹20L-17Cr per season</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <DollarSign className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">BCCI Contract</div>
                <div className="text-lg font-semibold">₹1-7Cr per year</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">Ranji Players</div>
                <div className="text-lg font-semibold">₹30K-2L per season</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Star className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">Top Players</div>
                <div className="text-lg font-semibold">₹20-100Cr/year total</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reality Check Section */}
      <div className="container mx-auto px-4 -mt-10 relative z-20 mb-16">
        <div className="bg-white rounded-xl shadow-2xl p-8 border-t-4 border-blue-600">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Reality Check: Only 0.01% Make It to Top</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">11 Players in National Team vs 10 Crore Aspiring Cricketers</h3>
              <p className="text-gray-700 text-sm">
                India has ~10 crore kids/teens playing cricket seriously. Only 11 play for India at once (squad ~20-25). Even IPL only has ~200 Indian players across 10 teams. Odds of making Indian team = 0.0001%. Even making Ranji Trophy (state level) = 0.01% (only ~300 players across all states). Most talented players never go beyond club cricket earning ₹5-20K per match occasionally.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Start by Age 8-10 or You're Already Behind</h3>
              <p className="text-gray-700 text-sm">
                All professional cricketers started playing seriously by age 8-12. By 16, if you're not in state U-19 team, chances nearly zero. By 22, if not in Ranji Trophy, career basically over. Peak age 25-35. Retire by 35-40 (unless you're Dhoni/Kohli level). Must train 6-8 hours daily from childhood, miss normal school life, social events. Family must invest ₹2-10L over 10-15 years (coaching, equipment, travel) with zero guarantee of return.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Ranji Trophy Players Struggle—Earn ₹30K-2L Per Season</h3>
              <p className="text-gray-700 text-sm">
                Made Ranji Trophy (state level)? Congrats—you're top 0.01%! But reality: earn ₹30K-2L per season (5-6 months). Off-season = zero income. Total annual ₹50K-3L. Many work jobs (bank, government) cricket quota or coach kids (₹15-40K/month). Only way to escape poverty = get IPL contract (98% Ranji players never do). Dhoni was railway ticket collector before IPL. Most Ranji players retire broke at 35 with no transferable skills.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">IPL Changed Everything—But Only for 200 Players</h3>
              <p className="text-gray-700 text-sm">
                Pre-IPL (before 2008): Even Indian team players earned ₹20-60L/year, struggled financially. Post-IPL: Top players earn ₹10-100Cr/year (Virat, Rohit, Bumrah). IPL contracts ₹20L-17Cr per season. BUT only ~200 Indian players get IPL contracts annually. Uncapped players ₹20-50L, capped ₹1-5Cr, superstars ₹10-17Cr. 99.9% cricketers never touch IPL money, stuck earning ₹30K-2L/year Ranji.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Short Career + Injuries = Early Retirement Common</h3>
              <p className="text-gray-700 text-sm">
                Peak performance: 25-35 years (10 years max). Injuries frequent: shoulder (bowlers), back, knee (fast bowlers retire early—Zaheer Khan, Nehra). One major injury at 28 = career often over. Post-retirement tough: no job skills, body broken. Only top players transition to commentary (₹50L-5Cr/year) or coaching. 90% Ranji retirees work normal jobs ₹30-60K/month. Invested 20 years playing cricket, now back to square one at age 35.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Income Reality Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
            Income Reality: Lottery Economics—Top 1% Rich, 99% Broke
          </h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-yellow-900">Truth:</strong> Cricket has MOST extreme income inequality in Indian sports. Indian team + IPL players earn ₹5-100Cr/year. Ranji Trophy players earn ₹30K-3L/year. Below Ranji (district/club) = ₹0-50K/year. Family spends ₹5-15L over 15 years hoping kid makes it. 99.99% never earn back that investment.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-gray-400 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Youth Cricket (Age 8-18): NEGATIVE ₹50K-5L total investment</h3>
              <p className="text-gray-700 text-sm">Academy fees ₹30K-3L/year, equipment ₹20-80K/year, travel to tournaments ₹50K-2L/year. Family invests, kid earns ₹0. Pure expense for 10-15 years.</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">District/Club Cricket (Age 18-25): ₹0-50K/year</h3>
              <p className="text-gray-700 text-sm">Play district tournaments, club cricket. Match fees ₹2-10K per match, 5-15 matches/year = ₹10K-1.5L gross. Minus travel/equipment = ₹0-50K net. Must work job or study. 95% stop here—never progress to Ranji.</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ranji Trophy (State Level): ₹50K-3L/year</h3>
              <p className="text-gray-700 text-sm">Season payment ₹30K-2L (5-6 months). Off-season zero. Many get government/bank jobs (sports quota) ₹25-50K/month salary. Total ₹3-8L/year. Still financial struggle. Dream = IPL contract (98% never get it).</p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">IPL Player (Uncapped): ₹20L-2Cr/year</h3>
              <p className="text-gray-700 text-sm">First IPL contract usually ₹20-60L per season. If perform well, next auction ₹1-3Cr. Add Ranji ₹50K-2L, match fees, endorsements ₹20L-1Cr = total ₹1-5Cr/year. Life-changing money. But still not guaranteed—can be dropped next season.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Indian Team Player: ₹5-30Cr/year</h3>
              <p className="text-gray-700 text-sm">BCCI central contract ₹1-7Cr/year (Grade A/B/C). IPL ₹3-17Cr. Match fees ₹15L per Test, ₹6L per ODI, ₹3L per T20. Endorsements ₹2-20Cr. Total ₹5-30Cr/year (Virat/Rohit earn ₹50-100Cr with endorsements). But only 20-25 players at this level.</p>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Reality:</strong> Of 10 crore kids playing cricket, maybe 5,000 make Ranji (earn ₹50K-3L/year), 200 make IPL (earn ₹1-10Cr/year), 25 make Indian team (earn ₹5-100Cr/year). Your odds = worse than winning lottery. <strong>Family investing ₹10L hoping you become Virat Kohli = financial suicide. Have backup education ALWAYS.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Daily Life Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Clock className="w-8 h-8 text-blue-600 mr-3" />
            Daily Life: Train Like Professional Athlete from Childhood
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border-l-4 border-blue-600 mb-6">
            <h3 className="font-bold text-gray-900 mb-3">Typical Day (Aspiring Professional - Age 15-25)</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold text-gray-900 mb-2">5:30 AM - Fitness Training</p>
                <p className="text-gray-700 mb-3">Running, gym, agility drills. Build stamina, strength.</p>

                <p className="font-bold text-gray-900 mb-2">8:00 AM - School/College (If Still Studying)</p>
                <p className="text-gray-700 mb-3">Many drop out by 10th/12th to focus cricket full-time (risky).</p>

                <p className="font-bold text-gray-900 mb-2">2:00 PM - Lunch & Rest</p>
                <p className="text-gray-700">Recovery, physio if injured.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">3:30 PM - Net Practice (Main Training)</p>
                <p className="text-gray-700 mb-3">4-5 hours batting/bowling/fielding. Most important session.</p>

                <p className="font-bold text-gray-900 mb-2">8:00 PM - Skills/Video Analysis</p>
                <p className="text-gray-700 mb-3">Work on technique weaknesses, study opponents.</p>

                <p className="font-bold text-gray-900 mb-2">10:00 PM - Sleep (Repeat Daily)</p>
                <p className="text-gray-700">Zero social life. Miss parties, festivals, normal teen experiences.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-5 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong>Lifestyle Reality:</strong> Train 6-8 hours daily, 6 days/week from age 10-35 (25 years straight). Miss normal childhood, school friends, family time. Travel constantly for tournaments (away from home 4-6 months/year). <strong className="text-yellow-900">Injuries, pressure, burnout common. Many quit by 22 after realizing won't make it professionally.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Education & Entry Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
            How to Start: Talent + Right Academy + Timing + Luck
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Step 1: Start Young (Age 8-12 MAX)</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Join cricket academy ₹30K-3L/year (Ramakant Achrekar, Tendulkar's coach; MRF Pace Foundation; National Cricket Academy)</li>
                <li>• Play school/club cricket, build basics</li>
                <li>• <strong>CRITICAL:</strong> If not showing exceptional talent by 14-15 (selected for district U-15/U-17), odds of pro career nearly zero</li>
                <li>• Family must commit to 10-15 year investment ₹5-15L with no guarantee</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Step 2: Climb Selection Ladder (Age 16-22)</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• District U-16 → District U-19 → State U-19 → State U-23</li>
                <li>• Each level = trial, selection politics, need connections often</li>
                <li>• Perform consistently: high scores (batting), wickets (bowling)</li>
                <li>• By 19-20, must be in Ranji Trophy contention or career stalling</li>
                <li>• <strong>Reality:</strong> 90% stuck at district level, never progress</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Step 3: Ranji Trophy (State Level)</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Selected for state Ranji team = you're top 0.01% (only ~300 players India-wide)</li>
                <li>• Perform well: batting average 40+, bowling average under 25</li>
                <li>• Consistent 2-3 seasons = noticed by IPL scouts, Indian team selectors</li>
                <li>• Many get government jobs (sports quota) as backup ₹25-50K/month</li>
                <li>• <strong>Goal:</strong> IPL contract (life-changing money) or India A team selection</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Step 4: IPL → Indian Team (Dream Level)</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>IPL:</strong> Outstanding Ranji performance + IPL trials = contract ₹20L-17Cr</li>
                <li>• <strong>Indian Team:</strong> Consistent IPL + Ranji + India A → national call-up</li>
                <li>• Debut usually age 22-26. Establish by 28. Peak 28-34. Retire 35-40.</li>
                <li>• <strong>Only 20-25 active Indian team players at any time</strong></li>
              </ul>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Smart Path:</strong> (1) Start cricket age 8-12 while studying normally, (2) By age 16, assess talent honestly—in district U-19? Continue. Not selected? Quit and focus on studies, (3) NEVER drop out of school before 12th—need backup, (4) Even if making Ranji, complete graduation (many cricketers have B.Com, jobs via sports quota), (5) If not in IPL by 25-26, have exit plan ready. <strong>DON'T sacrifice education dreaming of IPL crores—99.9% never reach there.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Skills Required Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="w-8 h-8 text-blue-600 mr-3" />
            Skills Required: Natural Talent + Years of Training
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-5 rounded-lg border-t-4 border-blue-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Physical Skills</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Hand-eye coordination (natural talent)</li>
                <li>• Reflexes, reaction time</li>
                <li>• Fitness, stamina (run between wickets, field 50 overs)</li>
                <li>• Strength (bowling 140+ kmph, hitting sixes)</li>
                <li>• <strong>Batting:</strong> technique, shot selection, footwork</li>
                <li>• <strong>Bowling:</strong> pace/spin, accuracy, variations</li>
                <li>• <strong>Fielding:</strong> catching, throwing, agility</li>
              </ul>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-t-4 border-green-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Mental Skills</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Pressure handling (millions watching)</li>
                <li>• Match temperament, focus</li>
                <li>• Strategy, game reading</li>
                <li>• Resilience (handle failures, injuries)</li>
                <li>• Confidence without arrogance</li>
                <li>• Team player mentality</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg border-t-4 border-orange-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Career Skills</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Networking (coaches, selectors)</li>
                <li>• Self-promotion (IPL scouts notice you)</li>
                <li>• Contract negotiation (agents help)</li>
                <li>• Financial management (don't blow money)</li>
                <li>• Media handling (interviews, social media)</li>
                <li>• Brand building (endorsements, post-career)</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong>Reality:</strong> Natural talent = 60%, Training = 30%, Luck/Timing = 10%. Can't become cricketer through hard work alone—need innate ability (hand-eye coordination, reflexes). If not naturally talented, no amount of practice will make you professional. <strong className="text-yellow-900">That's why 99.99% fail despite trying—they simply don't have the talent, no matter how hard they work.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Career Paths Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-8 h-8 text-blue-600 mr-3" />
            Career Paths: Multiple Levels, Massive Income Gap
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Indian National Team Player (Top 25)</h3>
              <p className="text-sm text-gray-700 mb-2">Play for India in Tests, ODIs, T20s. BCCI contract + match fees + IPL + endorsements. Virat/Rohit earn ₹50-100Cr/year. Even bench players earn ₹5-15Cr/year.</p>
              <p className="text-sm text-gray-600"><strong>₹5-100Cr/year</strong> | Celebrity status | 0.0001% make it | Peak 25-35 years</p>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">IPL Player (200 Indians)</h3>
              <p className="text-sm text-gray-700 mb-2">Play 2 months/year, earn ₹20L-17Cr per season. Uncapped ₹20-60L, established ₹1-5Cr, superstars ₹10-17Cr. Life-changing money even for bench players.</p>
              <p className="text-sm text-gray-600"><strong>₹1-20Cr/year</strong> | Short season, high pay | 0.01% reach | Can be dropped any year</p>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ranji Trophy Player (300 total)</h3>
              <p className="text-sm text-gray-700 mb-2">State level cricket. Season payment ₹30K-2L. Most have government/bank jobs (sports quota) ₹25-50K/month. Dream = IPL contract (98% never get it).</p>
              <p className="text-sm text-gray-600"><strong>₹3-8L/year total</strong> | Financial struggle | Top 0.01% | Need job for stability</p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cricket Coach/Commentator (Post-Retirement)</h3>
              <p className="text-sm text-gray-700 mb-2">Academy coach ₹30K-2L/month. National team coach ₹3-8Cr/year (Rahul Dravid). Commentators (ex-Indian players) ₹50L-5Cr/year. Only ex-internationals get top roles.</p>
              <p className="text-sm text-gray-600"><strong>₹30K-8Cr/year</strong> (massive range) | Post-playing career | Need reputation</p>
            </div>

            <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">District/Club Cricket (5,000+ players)</h3>
              <p className="text-sm text-gray-700 mb-2">Local tournaments, weekend matches. ₹2-10K per match, 10-20 matches/year = ₹20K-2L. Must work regular job. Never progress beyond this level. Most eventually quit cricket.</p>
              <p className="text-sm text-gray-600"><strong>₹20K-2L/year</strong> | Part-time | Not sustainable | Need full-time job</p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Government Job (Sports Quota)</h3>
              <p className="text-sm text-gray-700 mb-2">Ranji players eligible for railway, bank, police jobs (sports quota). Salary ₹25-60K/month. Play cricket while working. Most stable option for players who don't make IPL/India.</p>
              <p className="text-sm text-gray-600"><strong>₹3-8L/year</strong> | Stable | Common path | Play cricket part-time</p>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Truth:</strong> Income gap INSANE. Virat Kohli earns ₹100Cr/year. Ranji player earns ₹3L/year. 30,000x difference! Most cricketers end up in government jobs via sports quota (best realistic outcome). Only dream if you're exceptional talent + lucky + right connections. <strong>99% should pursue cricket as hobby while building normal career.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Difficulty Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Difficulty Level: EXTREME - Worst Odds in Any Career</h2>

          <div className="space-y-3">
            <div className="border-l-4 border-red-600 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-1">🔴 Extreme: Competition & Odds</h3>
              <p className="text-gray-700 text-sm">10 crore aspiring cricketers, 25 in Indian team = 0.0001% success rate. Even Ranji Trophy = 0.01%. Worse odds than IIT entrance, civil services, Bollywood. Natural talent required (can't compensate with hard work). Peak window 25-35 (10 years max).</p>
            </div>

            <div className="border-l-4 border-red-600 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-1">🔴 Extreme: Time & Investment</h3>
              <p className="text-gray-700 text-sm">Must start age 8-12. Train 6-8 hours daily 15-20 years. Family invests ₹5-15L over 15 years. Sacrifice normal childhood, education, social life. If don't make it by 25 = 20 years wasted, no transferable skills, education incomplete.</p>
            </div>

            <div className="border-l-4 border-red-600 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-1">🔴 Extreme: Financial Risk</h3>
              <p className="text-gray-700 text-sm">99.9% never earn money from cricket. Even Ranji players struggle (₹3-8L/year). Only IPL/Indian team = good money (0.01% reach). Most end up in normal jobs age 25-30 after sacrificing education. Financial return negative for 99.9%.</p>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-5 mt-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-900">Overall: EXTREME - Highest Difficulty Career on This List.</strong> Odds worse than becoming doctor, engineer, IAS officer combined. Natural talent essential (no amount of hard work can compensate). 20 year commitment starting age 8. Family financial burden ₹5-15L. 99.99% fail. Short career 10-15 years. No transferable skills post-retirement. <strong>ONLY pursue if: (1) Exceptional natural talent (district U-15 by age 15), (2) Family can afford loss of ₹10L investment, (3) Complete education as backup, (4) Willing to accept 99.9% chance of failure.</strong> Otherwise = financial suicide.
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
                    <span className="font-semibold text-gray-900">Top 1% extremely wealthy - </span>
                    <span className="text-gray-700 text-sm">Indian team + IPL players earn ₹5-100Cr/year. Set for life in 10 years.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">National hero status - </span>
                    <span className="text-gray-700 text-sm">Cricketers worshipped in India. Fame, respect, influence massive.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Passion-based career - </span>
                    <span className="text-gray-700 text-sm">If you love cricket, playing professionally = dream life.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Sports quota jobs - </span>
                    <span className="text-gray-700 text-sm">Even Ranji players get government jobs (railway, bank) ₹3-8L/year. Backup option.</span>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Post-career opportunities - </span>
                    <span className="text-gray-700 text-sm">Ex-Indian players → commentary ₹50L-5Cr/year, coaching, politics, business.</span>
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
                    <span className="font-semibold text-gray-900">0.0001% success rate - </span>
                    <span className="text-gray-700 text-sm">Worst odds in any career. 10 crore trying, 25 succeed. Even Ranji = 0.01% (300 players).</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">20 year commitment from childhood - </span>
                    <span className="text-gray-700 text-sm">Must start age 8-12, train 6-8 hours daily. Sacrifice normal childhood, education, social life.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900 mb-2">Family financial burden ₹5-15L - </span>
                    <span className="text-gray-700 text-sm">Coaching, equipment, travel over 15 years. 99.9% never recover investment.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Natural talent required - </span>
                    <span className="text-gray-700 text-sm">Hard work not enough. If not naturally gifted (hand-eye coordination, reflexes), impossible to succeed.</span>
                  </div>
                </li>
                <li className="flex items-start bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Short career + no transferable skills - </span>
                    <span className="text-gray-700 text-sm">Peak 10-15 years, retire by 35-40. If didn't make big money, start over with no job skills at 30-35.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-blue-700 via-green-600 to-orange-600 text-white rounded-xl shadow-2xl p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold text-center mb-6">
              Should You Pursue Cricket Professionally?
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 mb-5">
              <p className="text-lg leading-relaxed mb-3">
                <strong className="text-yellow-300">Harsh Reality:</strong> This is WORST odds career on this entire website. 10 crore kids playing cricket. 25 make Indian team. 200 make IPL. 300 make Ranji (earn ₹3-8L/year = poverty). 99.99% waste 20 years + ₹5-15L family investment, end up in normal jobs at 25-30 with incomplete education.
              </p>
              <p className="text-white/90 mb-3"><strong className="text-yellow-300">ONLY pursue professionally if ALL these are true:</strong></p>
              <ul className="space-y-1 text-white/90 text-sm">
                <li>• Selected for district U-15/U-17 team by age 15-16 (if not, quit immediately)</li>
                <li>• Natural talent exceptional (coaches say you're special, not just "good")</li>
                <li>• Family can afford to lose ₹10L investment (don't take loans!)</li>
                <li>• Completing education alongside cricket (at least 12th, preferably graduation)</li>
                <li>• Willing to accept 99.9% chance you'll never earn living from cricket</li>
                <li>• Have backup career plan ready by age 22-25</li>
              </ul>
            </div>

            <div className="bg-red-900/50 backdrop-blur-sm rounded-lg p-5 mb-5 border-l-4 border-red-400">
              <p className="text-sm text-white/90 mb-2"><strong className="text-red-300">RED FLAGS - Do NOT Pursue If:</strong></p>
              <ul className="space-y-1 text-white/90 text-sm">
                <li>• Not selected for district U-15 by age 16 (you won't make it—99.99% certain)</li>
                <li>• Dropping out of school to "focus on cricket" (financial suicide)</li>
                <li>• Family taking loans for cricket coaching (will destroy family financially)</li>
                <li>• No natural talent, just "I love cricket" (passion ≠ talent)</li>
                <li>• Thinking "I'll work hard and make it" (hard work not enough—need TALENT first)</li>
              </ul>
            </div>

            <div className="bg-green-900/50 backdrop-blur-sm rounded-lg p-5 mb-6 border-l-4 border-green-400">
              <p className="text-sm text-white/90 mb-2"><strong className="text-green-300">Smart Path (Realistic Approach):</strong></p>
              <ol className="space-y-1 text-white/90 text-sm list-decimal list-inside">
                <li>Play cricket as hobby while studying normally (age 8-16)</li>
                <li>By age 16, assess honestly: in district U-16 team? If YES → continue. If NO → quit and focus on education</li>
                <li>If continuing: complete 12th, aim for graduation (even Ranji players have degrees)</li>
                <li>By age 22: in Ranji Trophy or realistic shot? If YES → pursue full-time. If NO → quit cricket, get job</li>
                <li>If make Ranji: get government job sports quota (backup ₹3-8L/year), play cricket part-time</li>
                <li>If get IPL/India team → life set. If not (98% probability) → you have education + job to fall back on</li>
              </ol>
              <p className="text-white/90 mt-3 text-sm">
                <strong className="text-green-300">This way you're not gambling your entire life. Education = safety net when cricket dream ends (which it will for 99.99%).</strong>
              </p>
            </div>

            <div className="text-center">
              <p className="text-lg mb-4 leading-relaxed">
                <strong>Final Word:</strong> Cricket is beautiful sport. Play it, enjoy it, love it. But pursuing it PROFESSIONALLY = lottery ticket with 0.0001% odds while sacrificing education and 20 years of life. <strong className="text-yellow-300">Play cricket recreationally, build normal career, enjoy cricket without destroying your financial future.</strong> Even MS Dhoni had railway job before IPL (smart backup). Learn from that.
              </p>
              <Link
                to="/explore-careers"
                className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
