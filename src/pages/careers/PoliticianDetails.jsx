import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  Users, 
  Flag, 
  Megaphone, 
  Vote, 
  Award,
  Briefcase,
  Target,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Building,
  Brain,
  Heart,
  TrendingUp,
  Globe,
  Shield,
  DollarSign,
  UserPlus
} from 'lucide-react'

const PoliticianDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/arts" className="hover:text-blue-600 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Arts & Humanities
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Politician / Electoral Politics</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Public Service & Electoral Politics
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Politician / Electoral Politics
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Contest elections to become MLA (state), MP (national), or work in political party organizations. Serve the public, shape policy, and lead constituencies. A career requiring massive networking, public speaking, fundraising, and grassroots organizing. Elections cost ₹2-50 Cr, and 95% candidates lose their first election. Family political background gives enormous advantage. No guaranteed income—salary only if you win.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹1-2L/mo</div>
                  <div className="text-sm text-gray-200">MLA/MP Salary</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹2-50 Cr</div>
                  <div className="text-sm text-gray-200">Election Cost</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">5% Win Rate</div>
                  <div className="text-sm text-gray-200">First-Timers</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Vote className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Electoral Politics</h3>
                <p className="text-sm text-gray-200">MLA/MP/Corporator</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Users className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Party Organization</h3>
                <p className="text-sm text-gray-200">Behind-the-Scenes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Megaphone className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Grassroots Work</h3>
                <p className="text-sm text-gray-200">Community Building</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Flag className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Public Service</h3>
                <p className="text-sm text-gray-200">Constituency Work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check Banner */}
      <section className="bg-red-50 border-t-4 border-red-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
            Reality Check: BRUTAL TRUTHS About Politics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">Elections Are EXTREMELY Expensive</h3>
              <p className="text-sm text-gray-700">Lok Sabha seat costs ₹10-50 Cr (metro). Assembly seat ₹2-15 Cr. Money for rallies, posters, workers, gifts. Most candidates never recover investment. Bankruptcy common</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">Family Background = Huge Advantage</h3>
              <p className="text-sm text-gray-700">70% MPs from political families. Name recognition critical. Dynasty politics dominates. First-generation politicians face 10x harder struggle. Networking takes decades to build</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">95% Lose Their First Election</h3>
              <p className="text-sm text-gray-700">Winning takes 2-3 attempts minimum. Each attempt = ₹5-10 Cr loss. Most never win. Emotional + financial devastation. Only 543 Lok Sabha seats for 130 Cr people</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">Intense Public Scrutiny 24/7</h3>
              <p className="text-sm text-gray-700">No privacy. Every mistake viral. Social media attacks, fake news, character assassination. Family targeted. Death threats common. Mental health toll brutal</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">Corruption & Criminalization Reality</h3>
              <p className="text-sm text-gray-700">43% sitting MPs have criminal cases. Money required to win = often illegal sources. Honest politicians struggle to compete. System forces compromise on ethics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <DollarSign className="h-8 w-8 text-green-600 mr-3" />
            Income Reality (Official vs Unofficial)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Party Worker (Entry)</h3>
              <div className="text-3xl font-bold text-gray-600 mb-2">₹0-3 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Volunteer/low-level work</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Youth wing worker: ₹0 (volunteer)</li>
                <li>• Paid organizer: ₹1.5-3L</li>
                <li>• Social media manager: ₹2-4L</li>
                <li>• Mostly unpaid work initially</li>
                <li>• Build network for 5-10 years</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Municipal Corporator</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">₹30K-1L/mo</div>
              <p className="text-sm text-gray-600 mb-4">Local governance</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Official salary: ₹30-50K/month</li>
                <li>• Allowances: ₹20-50K</li>
                <li>• Reality: Spend more than earn</li>
                <li>• Constituency demands constant</li>
                <li>• Stepping stone to MLA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">MLA (State Legislator)</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">₹1-2L/mo</div>
              <p className="text-sm text-gray-600 mb-4">State assembly member</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Basic salary: ₹1-1.5L/month (varies by state)</li>
                <li>• DA + allowances: ₹50K-1L</li>
                <li>• Constituency fund: ₹2 Cr/year</li>
                <li>• Free electricity, water, security</li>
                <li>• But: Spend 10x on public demands</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-sm border-2 border-blue-300">
              <h3 className="text-lg font-semibold mb-2">MP (Member of Parliament)</h3>
              <div className="text-3xl font-bold text-blue-700 mb-2">₹1L + ₹2L</div>
              <p className="text-sm text-gray-600 mb-4">Lok Sabha/Rajya Sabha</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Salary: ₹1L/month</li>
                <li>• Constituency allowance: ₹2L/mo</li>
                <li>• MPLADS fund: ₹5 Cr/year</li>
                <li>• Free housing, travel, staff</li>
                <li>• Minister salary: ₹1.6L/month</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-sm text-gray-800"><strong>Reality:</strong> Official salaries are modest (₹1-2L/month). But elections cost ₹5-50 Cr. Most politicians have alternate income sources (business, real estate, party funds). Constituency demands are endless—weddings, funerals, medical bills. You spend 10x what you earn officially. Politics is NOT a salaried profession—it's public service funded by personal wealth.</p>
          </div>
        </div>
      </section>

      {/* Daily Work & Responsibilities */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            What Politicians Actually Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Core Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Constituency Service:</strong> Meet constituents daily, solve problems (ration card, hospital admission, job requests), attend weddings/funerals</span>
                </li>
                <li className="flex items-start">
                  <Vote className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Legislative Work:</strong> Attend assembly/parliament sessions, debate bills, vote on laws, raise constituency issues, question government</span>
                </li>
                <li className="flex items-start">
                  <Megaphone className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Party Activities:</strong> Rallies, meetings, campaigns, fundraising, managing local party unit, coordinating with central leadership</span>
                </li>
                <li className="flex items-start">
                  <Building className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Development Work:</strong> Allocate MPLADS/local funds for roads, schools, hospitals. Monitor implementation. Inaugurate projects</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Time Breakdown</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Public Meetings (40%)</h4>
                  <p className="text-sm text-gray-700">Meeting 100-200 people daily with requests. 80% can't be fulfilled. Manage expectations, provide emotional support</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Rallies & Campaigning (25%)</h4>
                  <p className="text-sm text-gray-700">Permanent campaign mode. Attend village functions, religious events, social gatherings. Visibility critical</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Legislative/Official Work (20%)</h4>
                  <p className="text-sm text-gray-700">Actual assembly/parliament sessions, committee meetings, policy work. Only when session is on (3-4 months/year)</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Party Politics (15%)</h4>
                  <p className="text-sm text-gray-700">Managing factional politics, placating rivals, negotiating ticket allocations, fundraising for party</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Path to Politics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Target className="h-8 w-8 text-purple-600 mr-3" />
            How to Enter Politics (Multiple Paths)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-6 text-blue-900">Traditional Path</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Step 1: Student Politics (Age 18-25)</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Join college student wing (NSUI/ABVP/SFI)</li>
                    <li>• Contest student union elections</li>
                    <li>• Build network with party seniors</li>
                    <li>• Learn grassroots organizing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Step 2: Party Worker (Age 25-35)</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Work in youth/women's wing</li>
                    <li>• Organize rallies, door-to-door campaigns</li>
                    <li>• Rise through party hierarchy</li>
                    <li>• Prove loyalty and electoral value</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Step 3: Local Elections (Age 30-40)</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Contest municipal/panchayat elections</li>
                    <li>• Prove you can win votes</li>
                    <li>• Build financial network</li>
                    <li>• Wait for party ticket for bigger seat</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-6 text-purple-900">Alternate Paths</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2">Celebrity/Business Route</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Film Stars:</strong> Name recognition = instant votes. Many actors become MPs/MLAs</li>
                    <li>• <strong>Business Tycoons:</strong> Money + connections. Can fund own campaign ₹50 Cr+</li>
                    <li>• <strong>Athletes:</strong> Olympic medalists often get party tickets (Rajya Sabha)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2">Social Movement Route</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Activist Background:</strong> Anna Hazare movement led to AAP party formation</li>
                    <li>• <strong>NGO Leaders:</strong> Grassroots credibility converts to votes</li>
                    <li>• <strong>Caste/Community Leaders:</strong> Represent specific groups</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2">Family Dynasty Route (Easiest)</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Inherited Constituency:</strong> Father/mother is MLA/MP, you contest "safe" seat</li>
                    <li>• <strong>Name Recognition:</strong> Voters know your surname, trust automatically</li>
                    <li>• <strong>Network Inherited:</strong> Don't need to build from scratch</li>
                    <li>• <strong>Reality:</strong> 70% of MPs from political families</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">No Formal Education Required (But Helps)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Legal Minimum</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Minimum age: 25 (MLA/MP Lok Sabha)</li>
                  <li>• Age 30 for Rajya Sabha</li>
                  <li>• Indian citizen</li>
                  <li>• No criminal convictions (but cases okay!)</li>
                  <li>• No education requirement officially</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Helpful Degrees</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Law degree (understand legislation)</li>
                  <li>• Political Science/Sociology</li>
                  <li>• Public Policy/Public Administration</li>
                  <li>• MBA (for organizational skills)</li>
                  <li>• Reality: Degree matters less than caste/money/network</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Real Requirements</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Money:</strong> ₹5-50 Cr for serious attempt</li>
                  <li>• <strong>Network:</strong> 10,000+ loyal workers</li>
                  <li>• <strong>Caste/Community base:</strong> Vote bank</li>
                  <li>• <strong>Oratory skills:</strong> Public speaking</li>
                  <li>• <strong>Thick skin:</strong> Handle abuse 24/7</li>
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
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Political Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Networking:</strong> Build 10,000+ connections</li>
                <li>• <strong>Public speaking:</strong> Address crowds of thousands</li>
                <li>• <strong>Negotiation:</strong> Manage factions, coalitions</li>
                <li>• <strong>Fundraising:</strong> Collect ₹10-50 Cr</li>
                <li>• <strong>Ground organization:</strong> Booth management</li>
                <li>• <strong>Social media:</strong> Twitter/FB/Insta presence</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Personal Qualities (CRITICAL!)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Extreme patience:</strong> Listen to 200 people daily</li>
                <li>• <strong>Empathy:</strong> Connect with people's struggles</li>
                <li>• <strong>Resilience:</strong> Lose elections, bounce back</li>
                <li>• <strong>Thick skin:</strong> Handle 24/7 criticism, abuse</li>
                <li>• <strong>Work ethic:</strong> 16-hour days, no weekends</li>
                <li>• <strong>Family support:</strong> Family must tolerate sacrifice</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Strategic Understanding</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Caste/community arithmetic (vote banks)</li>
                <li>• Local issues & development needs</li>
                <li>• Party ideology & national politics</li>
                <li>• Media management & PR</li>
                <li>• Legal knowledge (constant court cases)</li>
                <li>• Crisis management (scandals, allegations)</li>
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
            Political Career Progression
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border border-blue-200">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Local Level</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Gram Panchayat:</strong> Village council, ₹5-10K/mo</li>
                <li><strong>Municipal Corporator:</strong> City council, ₹30-50K/mo</li>
                <li><strong>Block Pramukh:</strong> Block level, ₹40-60K/mo</li>
                <li><strong>Zila Parishad:</strong> District council, ₹50-80K/mo</li>
                <li><strong>Mayor:</strong> City head, ₹80K-1.5L/mo</li>
                <li><strong>Reality:</strong> Spend more than you earn</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border border-green-200">
              <h3 className="font-semibold text-lg mb-4 text-green-900">State Level</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>MLA:</strong> State assembly, ₹1-2L/mo + perks</li>
                <li><strong>Minister (State):</strong> Cabinet post, ₹2-3L/mo</li>
                <li><strong>Leader of Opposition:</strong> ₹1.6L/mo</li>
                <li><strong>Chief Minister:</strong> ₹2-4L/mo (varies by state)</li>
                <li><strong>Reality:</strong> Real power comes at this level</li>
                <li><strong>Term:</strong> 5 years, must win re-election</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border border-purple-200">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">National Level</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>MP (Lok Sabha):</strong> ₹1L salary + ₹2L allowance</li>
                <li><strong>Rajya Sabha MP:</strong> Same pay, 6-year term</li>
                <li><strong>Union Minister:</strong> ₹1.6L/mo + housing/car</li>
                <li><strong>Cabinet Minister:</strong> Top ministries (Finance, Home)</li>
                <li><strong>Prime Minister:</strong> ₹1.6L/mo (nominal)</li>
                <li><strong>Reality:</strong> Only 543 Lok Sabha seats for all of India</li>
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
            Realistic Political Career Journey
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 0-10: Groundwork & Network Building</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Foundation</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <UserPlus className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Join Party Youth Wing:</strong> NSUI/ABVP/youth Congress. Volunteer for campaigns. Attend every rally. Make yourself indispensable</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Build Network:</strong> Meet 10-20 people daily. Attend every wedding/funeral in constituency. Help people with govt work. Build loyalty bank</span>
                </li>
                <li className="flex items-start">
                  <DollarSign className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Arrange Funding:</strong> Need ₹5-10 Cr for first serious election. Start business/real estate. Cultivate donor relationships. Party won't fund first-timers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-orange-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 10-20: First Elections & Losses</h3>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Struggle Phase</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Vote className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>First Election (Usually Lose):</strong> Contest municipal/assembly seat. Spend ₹5-10 Cr. Likely lose by 10-20K votes. Emotionally devastating but learn ground reality</span>
                </li>
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Analyze & Rebuild:</strong> Understand why you lost (caste arithmetic, money, anti-incumbency). Rebuild network. Stay visible in constituency for 5 years</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Second/Third Attempt:</strong> Most politicians win on 2nd or 3rd attempt. Each costs ₹5-10 Cr. If you win, debt is ₹15-30 Cr already</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 20-40+: Established Politician (If You Survive)</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Success (1%)</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Win MLA/MP Seat:</strong> ₹1-2L/month official salary. Real power comes from controlling development funds (₹2-5 Cr/year). Can help people genuinely</span>
                </li>
                <li className="flex items-start">
                  <Flag className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Ministerial Posts:</strong> After 2-3 terms, may get minister position. Control department budget. Huge responsibility + influence. But also more scrutiny</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Reality:</strong> Must win EVERY 5 years. One loss = out of power. Anti-incumbency strong. Rivals within party plotting. 24/7 pressure never ends</span>
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
            <Brain className="h-8 w-8 text-red-600 mr-3" />
            Challenges & Difficulty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                EXTREMELY Difficult
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Raising ₹5-50 Cr for elections</li>
                <li>• Winning first election (95% lose)</li>
                <li>• Managing 24/7 public expectations</li>
                <li>• Handling constant character assassination</li>
                <li>• Building network without family background</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                Moderate Challenges
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Public speaking & oratory skills</li>
                <li>• Party politics & factional management</li>
                <li>• Work-life balance (none!)</li>
                <li>• Legal issues & court cases</li>
                <li>• Media management & social media</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Manageable Aspects
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• No formal education barrier (anyone can enter)</li>
                <li>• Meeting people (if extroverted)</li>
                <li>• Understanding local issues</li>
                <li>• Social media presence</li>
                <li>• Party volunteer work (entry level)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Globe className="h-8 w-8 text-purple-600 mr-3" />
            Political Career Specializations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Vote className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Electoral Politics</h3>
              <p className="text-gray-600 mb-4 text-sm">Contest elections for MLA/MP seats. Face public directly. High risk, high reward</p>
              <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹1-2L/mo (if win)</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Users className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Party Organization</h3>
              <p className="text-gray-600 mb-4 text-sm">Behind-the-scenes work. Strategy, coordination, candidate selection. Lower risk</p>
              <div className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹2-10 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Megaphone className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Political Consultant</h3>
              <p className="text-gray-600 mb-4 text-sm">Advise politicians on strategy, campaigns, surveys, messaging. Prashant Kishor model</p>
              <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹10-50L+ per campaign</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Building className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Bureaucrat → Politician</h3>
              <p className="text-gray-600 mb-4 text-sm">IAS officers retire, join politics. Network + admin experience = advantage</p>
              <div className="bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-sm font-medium inline-block">Variable</div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Heart className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Social Activism → Politics</h3>
              <p className="text-gray-600 mb-4 text-sm">Build reputation through NGO/activism, then contest. Kejriwal, Medha Patkar path</p>
              <div className="bg-pink-100 text-pink-900 px-3 py-1 rounded-full text-sm font-medium inline-block">Variable</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Shield className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Policy Think Tanks</h3>
              <p className="text-gray-600 mb-4 text-sm">Research, policy papers, advise govt. Academic approach to politics</p>
              <div className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹6-20 LPA</div>
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
                  <span className="text-gray-700"><strong>Serve Society & Make Impact:</strong> Genuinely help thousands of people. Build roads, schools, hospitals. Policy decisions affect millions. Meaningful work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Respect & Influence:</strong> People respect elected representatives. Access to bureaucrats, business leaders. Can solve problems with one phone call</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>No Formal Barrier:</strong> Anyone can enter politics. No degree required. Merit = ability to connect with people + organize + win votes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Post-Retirement Benefits:</strong> Ex-MPs/MLAs get lifelong perks. Free travel, security, medical. Pension of ₹20-40K/month after 5 years</span>
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
                  <span className="text-gray-700"><strong>Extremely Expensive Entry:</strong> Need ₹5-50 Cr to contest seriously. 95% lose first election = total loss. Bankruptcy common. Only rich/corrupt can afford</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Zero Privacy & 24/7 Scrutiny:</strong> Every mistake viral on social media. Character assassination daily. Family threatened. Mental health toll brutal. No personal life</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Dynasty Politics Dominance:</strong> 70% MPs from political families. First-generation politicians face 10x harder struggle. Network takes 20 years to build from scratch</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Corruption Pressure:</strong> Election costs ₹10-50 Cr. Where does money come from? System forces ethical compromises. 43% sitting MPs have criminal cases</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Flag className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Should You Enter Politics?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Politics is NOT a career for everyone. It's public service requiring enormous personal sacrifice. Only enter if: (1) You have access to ₹10-50 Cr funding (family wealth/business), (2) You have genuine desire to serve people (not just power), (3) You can handle 24/7 public scrutiny and zero privacy, (4) Your family supports this difficult path, (5) You're willing to lose 2-3 elections before winning (10-15 year journey). If you're from a political family, path is 10x easier (dynasty advantage is real). For ordinary citizens, consider: social activism, policy think tanks, party organization work, or supporting good candidates rather than contesting yourself. Remember: only 543 Lok Sabha seats exist for 130 crore Indians. Politics rewards networking, money, and patience—not just idealism.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/arts" 
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore More Arts Careers
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

export default PoliticianDetails
