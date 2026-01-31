import React from 'react';
import { Film, Pencil, Lightbulb, AlertCircle, CheckCircle, Award, Building2, TrendingUp, Users, Star, FileText } from 'lucide-react';

export default function ScriptWriterDetails() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm">
            <a href="/" className="text-blue-600 hover:text-blue-700">Home</a>
            <span className="text-gray-400">/</span>
            <a href="/arts" className="text-blue-600 hover:text-blue-700">Arts</a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Script Writer</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Film className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Script Writer / Screenwriter</h1>
          <p className="text-xl text-red-50 mb-6">Turn your imagination into blockbuster movies, web series, and OTT shows. Write stories that reach millions. Earn ₹50L-5 Cr+ per script.</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
              <p className="text-sm text-red-50">Entry: ₹0-5 LPA</p>
            </div>
            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
              <p className="text-sm text-red-50">Top: ₹50L-5 Cr+ per script</p>
            </div>
            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
              <p className="text-sm text-red-50">Growth: Unpredictable (hits = ₹10x returns)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Reality Check */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-3">Reality Check: The Hard Truth</h2>
              <ul className="space-y-2 text-red-700">
                <li>✗ <strong>90% of scripts are rejected</strong> - For every script made, 100 are pitched</li>
                <li>✗ <strong>Takes 3-5 years to get first break</strong> - You might write 20+ scripts before one gets made</li>
                <li>✗ <strong>Income is HIGHLY IRREGULAR</strong> - Feast or famine. One hit = ₹2 Cr, next year = ₹0</li>
                <li>✗ <strong>No job security</strong> - Freelance work. One flop = next 6 months of no income</li>
                <li>✗ <strong>Extreme competition</strong> - Thousands of writers competing for 50 projects per year</li>
                <li>✓ But one hit script can change your life completely. ₹5 Cr+ lifetime earnings possible</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Income Models */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Income Models & Payment Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-3">One-Time Payment (Most Common)</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-800">First Script (Fresh Writer)</span>
                    <span className="font-bold text-blue-900">₹2-5 LPA</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded h-2"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-800">Established Writer (1-2 hits)</span>
                    <span className="font-bold text-blue-900">₹10-25 LPA</span>
                  </div>
                  <div className="w-full bg-blue-300 rounded h-2"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-800">Successful Writer (3+ hits)</span>
                    <span className="font-bold text-blue-900">₹50L-1.5 Cr</span>
                  </div>
                  <div className="w-full bg-blue-400 rounded h-2"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-800">A-List Writer (Blockbuster hits)</span>
                    <span className="font-bold text-blue-900">₹2-5 Cr+</span>
                  </div>
                  <div className="w-full bg-blue-500 rounded h-2"></div>
                </div>
              </div>
              <p className="text-sm text-blue-700 mt-4">You get paid once. No ongoing royalties. Fast money but one-time income.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-3">Royalty Model (High Risk, High Reward)</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-green-800">Upfront Payment</span>
                    <span className="font-bold text-green-900">₹10-50L</span>
                  </div>
                  <div className="w-full bg-green-200 rounded h-2"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-green-800">Per 100 Cr Box Office</span>
                    <span className="font-bold text-green-900">₹1-5 Cr extra</span>
                  </div>
                  <div className="w-full bg-green-300 rounded h-2"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-green-800">OTT/TV Syndication (5+ years)</span>
                    <span className="font-bold text-green-900">₹10L-2 Cr+</span>
                  </div>
                  <div className="w-full bg-green-400 rounded h-2"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-green-800">Remake Rights (India/International)</span>
                    <span className="font-bold text-green-900">₹5-25L per version</span>
                  </div>
                  <div className="w-full bg-green-500 rounded h-2"></div>
                </div>
              </div>
              <p className="text-sm text-green-700 mt-4">Better if hit. Bad if flop (only get upfront). Creates passive income for years.</p>
            </div>
          </div>
        </div>

        {/* Types of Content */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Different Types of Scripts You Can Write</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <div className="flex items-center gap-2 mb-4">
                <Film className="w-6 h-6 text-purple-700" />
                <h3 className="text-xl font-bold text-purple-900">Movie Scripts (Film Industry)</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Payment:</strong> ₹5-50L (fresh) → ₹1-5 Cr (A-list)</li>
                <li><strong>Work:</strong> 3-6 months to write, 2-3 years to make</li>
                <li><strong>Budget range:</strong> ₹5 Cr to ₹200+ Cr films</li>
                <li><strong>Best production houses:</strong> YRF, Dharma, Balaji, Zee Entertainment, T-Series</li>
                <li><strong>Examples:</strong> 3 Idiots, Dangal, Raees (all written)</li>
              </ul>
            </div>

            <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-6 h-6 text-pink-700" />
                <h3 className="text-xl font-bold text-pink-900">Web Series (OTT Content)</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Payment:</strong> ₹2-15L per episode (8-10 episodes)</li>
                <li><strong>Work:</strong> 2-4 months per season (faster production)</li>
                <li><strong>Episodes:</strong> 8-10 episodes of 45 mins each</li>
                <li><strong>Best platforms:</strong> Netflix, Prime Video, Hotstar, ZEE5, Sony LIV</li>
                <li><strong>Examples:</strong> Mirzapur, Sacred Games, Pataal Lok (paid ₹1-2 Cr per writer)</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-6 h-6 text-blue-700" />
                <h3 className="text-xl font-bold text-blue-900">TV Series (Traditional TV)</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Payment:</strong> ₹1-3L per episode (ongoing)</li>
                <li><strong>Work:</strong> 50-100 episodes per year (continuous writing)</li>
                <li><strong>Format:</strong> 22-45 min episodes, 5-6 days/week</li>
                <li><strong>Best networks:</strong> Sony TV, Star Plus, Zee TV, Colors</li>
                <li><strong>Stability:</strong> Regular income if show runs long</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <div className="flex items-center gap-2 mb-4">
                <Pencil className="w-6 h-6 text-yellow-700" />
                <h3 className="text-xl font-bold text-yellow-900">Short Films & Ad Films</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Payment:</strong> ₹10K-5L per project (quick money)</li>
                <li><strong>Work:</strong> 1-2 weeks to write</li>
                <li><strong>Duration:</strong> 15-30 mins (short format)</li>
                <li><strong>Platforms:</strong> YouTube, Instagram, iQlik, Oho Cine</li>
                <li><strong>Best for:</strong> Building portfolio, getting noticed quickly</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Getting Your First Break */}
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-8 mb-12 border border-indigo-200">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-8 h-8 text-indigo-700" />
            <h3 className="text-2xl font-bold text-gray-800">How to Get Your First Break</h3>
          </div>
          <div className="space-y-4 text-gray-700">
            <div className="bg-white rounded p-4 border border-indigo-200">
              <p className="font-bold text-indigo-800 mb-2">Step 1: Build a Strong Portfolio (6-12 months)</p>
              <p className="text-sm">Write 5-10 complete scripts (films, web series, shorts). Write scripts spec (on your own). Quality > quantity. These show you can execute.</p>
            </div>
            <div className="bg-white rounded p-4 border border-indigo-200">
              <p className="font-bold text-indigo-800 mb-2">Step 2: Get Mentorship from Industry Writers</p>
              <p className="text-sm">Find a senior writer. Assist them on their projects. Learn the nitty-gritty of the industry. This is invaluable (most successful writers got mentored).</p>
            </div>
            <div className="bg-white rounded p-4 border border-indigo-200">
              <p className="font-bold text-indigo-800 mb-2">Step 3: Network at Industry Events</p>
              <p className="text-sm">Attend IIFA, NFDC events, industry workshops. Pitch your ideas to producers/directors. 80% of deals happen through referrals.</p>
            </div>
            <div className="bg-white rounded p-4 border border-indigo-200">
              <p className="font-bold text-indigo-800 mb-2">Step 4: Get a Manager/Agent</p>
              <p className="text-sm">Once you have portfolio, hire a manager. They pitch your scripts to production houses. Takes 20% commission but gets you meetings.</p>
            </div>
            <div className="bg-white rounded p-4 border border-indigo-200">
              <p className="font-bold text-indigo-800 mb-2">Step 5: Start with Small Projects</p>
              <p className="text-sm">First script might be a short film (₹1-5L) or episode of TV series (₹1-3L). Build credits. Then pitch bigger ideas.</p>
            </div>
          </div>
        </div>

        {/* Why Choose */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose This Career?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <Pencil className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Creative Freedom</h3>
                <p className="text-gray-700">Tell YOUR stories. Build worlds. Create characters people love. True artistic expression.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Unlimited Earning Potential</h3>
                <p className="text-gray-700">One hit script = ₹2-5 Cr. No cap on earnings. Web series boom = more opportunities.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Fame & Recognition</h3>
                <p className="text-gray-700">Your name in credits. People recognize you. Interviews, speaking engagements, celebrity networking.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Award className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Flexibility & Independence</h3>
                <p className="text-gray-700">Work from anywhere. Write at your own pace (to some extent). No office politics or boss.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Challenges */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-red-800 mb-8">Challenges & Dark Side</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-800 mb-2">Extreme Uncertainty</h3>
                <p className="text-red-700">You never know if script will get made. Spend 3 months writing, get rejected in 5 minutes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-800 mb-2">No Job Security</h3>
                <p className="text-red-700">Freelance work. One flop = no income for 6 months. Need savings to survive lean periods.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-800 mb-2">Your Script Gets Changed</h3>
                <p className="text-red-700">Directors change your story. Producers cut scenes. Final product ≠ your original vision. Heartbreaking.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-800 mb-2">Takes 3-5 Years to Break Even</h3>
                <p className="text-red-700">Most writers earn ₹0-5L first 3-5 years. Need side income or rich family support.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Required */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Key Skills Required</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Pencil, title: 'Storytelling', desc: 'Compelling narratives, plot structure, character arcs' },
              { icon: FileText, title: 'Dialogue Writing', desc: 'Natural conversations, witty banter, emotional depth' },
              { icon: Lightbulb, title: 'Creativity', desc: 'Original ideas, imagination, thinking outside the box' },
              { icon: Users, title: 'Collaboration', desc: 'Work with directors, producers, rewrite feedback' },
              { icon: Film, title: 'Industry Knowledge', desc: 'Understand different formats, genres, audience taste' },
              { icon: TrendingUp, title: 'Persistence', desc: 'Handle rejections, keep writing, never give up' }
            ].map((skill, idx) => (
              <div key={idx} className="flex gap-4">
                <skill.icon className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800">{skill.title}</h3>
                  <p className="text-gray-600 text-sm">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best Companies */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Best Production Houses & Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Netflix India',
              'Amazon Prime Video',
              'Disney+ Hotstar',
              'ZEE5',
              'Sony LIV',
              'Yash Raj Films (YRF)',
              'Dharma Productions',
              'Balaji Telefilms',
              'T-Series',
              'Red Chillies Entertainment',
              'Excel Entertainment',
              'Karan Johar Productions'
            ].map((company, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <Building2 className="w-5 h-5 text-purple-600" />
                <span className="text-gray-800 font-medium">{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Path */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Career Growth Path</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold">1</div>
              <div>
                <h3 className="font-bold text-gray-800">Aspiring Writer (0-1 year)</h3>
                <p className="text-gray-700">Write spec scripts. Build portfolio. Take writing courses. ₹0 income. Need savings.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold">2</div>
              <div>
                <h3 className="font-bold text-gray-800">Junior Writer (1-3 years)</h3>
                <p className="text-gray-700">First projects: short films, TV episodes. ₹1-5L per project. 2-3 projects/year = ₹3-15L annually</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold">3</div>
              <div>
                <h3 className="font-bold text-gray-800">Established Writer (3-7 years)</h3>
                <p className="text-gray-700">Get 1-2 hits. Move to better projects. ₹20-50L per project. Earning ₹50L-1 Cr/year</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold">4</div>
              <div>
                <h3 className="font-bold text-gray-800">A-List Writer (7+ years)</h3>
                <p className="text-gray-700">Multiple hits. Command ₹1-5 Cr per film. ₹2-5 Cr annually. Can be showrunner on top series</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-12 border border-purple-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Pro Tips from Successful Writers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <p className="mb-3"><strong className="text-purple-700">1. Write DAILY, not weekly:</strong> Discipline matters. Write 2-3 hours every day. Professional writers produce regularly.</p>
              <p className="mb-3"><strong className="text-purple-700">2. Read screenplays obsessively:</strong> Watch 100 movies/series. Understand structure, dialogue patterns, pacing. Copy-adapt not copy-paste.</p>
              <p className="mb-3"><strong className="text-purple-700">3. Network relentlessly:</strong> 80% of deals happen through referrals. Go to film festivals, industry events, Twitter film community.</p>
            </div>
            <div>
              <p className="mb-3"><strong className="text-purple-700">4. Get feedback from other writers:</strong> Join writing groups. Share scripts. Learn from rejection.</p>
              <p className="mb-3"><strong className="text-purple-700">5. Don't wait for permission:</strong> Make a short film yourself. Produce your own idea. Show you can execute.</p>
              <p className="mb-3"><strong className="text-purple-700">6. Have a day job first 3-5 years:</strong> Writing income is unreliable. Need financial stability while building career.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Tell Stories That Move Millions?</h2>
          <p className="text-purple-50 mb-6">Start writing today. Your first script could become the next Mirzapur or Sacred Games. But only if you persist through the rejection.</p>
          <a href="/courses" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-all inline-block">
            Explore Learning Resources
          </a>
        </div>
      </div>
    </div>
  );
}
