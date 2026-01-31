import React from 'react';
import { TrendingUp, BarChart3, Brain, Target, AlertCircle, CheckCircle, Award, Building2, Zap, MapPin, MoreVertical } from 'lucide-react';

export default function StockMarketAnalystDetails() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm">
            <a href="/" className="text-blue-600 hover:text-blue-700">Home</a>
            <span className="text-gray-400">/</span>
            <a href="/commerce" className="text-blue-600 hover:text-blue-700">Commerce</a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Stock Market Analyst</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <TrendingUp className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Stock Market Analyst / Trader</h1>
          <p className="text-xl text-orange-50 mb-6">Analyze markets, predict trends, and execute trades for astronomical returns. The ultimate game of intelligence vs. market psychology.</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
              <p className="text-sm text-orange-50">Entry: ₹8-25 LPA</p>
            </div>
            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
              <p className="text-sm text-orange-50">Top: ₹1 Cr+ LPA</p>
            </div>
            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
              <p className="text-sm text-orange-50">Growth: 22% per year</p>
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
                <li>✗ <strong>90% of retail traders fail</strong> and lose money within 3-5 years</li>
                <li>✗ Most traders lose ₹5-50 lakhs before learning the market</li>
                <li>✗ Psychological pressure is EXTREME - every trade affects your capital</li>
                <li>✗ Markets are dominated by algorithmic trading and institutional money</li>
                <li>✗ One bad decision can wipe out months of profits</li>
                <li>✓ But the 10% who succeed earn ₹1-100+ Cr annually</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Salary Breakdown */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Salary & Income Progression</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Institutional Analyst Path</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-800">Jr. Analyst (0-2 years)</span>
                    <span className="font-bold text-blue-900">₹8-15 LPA</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded h-2"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-800">Sr. Analyst (2-4 years)</span>
                    <span className="font-bold text-blue-900">₹20-35 LPA</span>
                  </div>
                  <div className="w-full bg-blue-300 rounded h-2"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-800">Fund Manager (4-7 years)</span>
                    <span className="font-bold text-blue-900">₹50-1 Cr LPA</span>
                  </div>
                  <div className="w-full bg-blue-400 rounded h-2"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-800">Managing Director (7+ years)</span>
                    <span className="font-bold text-blue-900">₹1-5 Cr+ LPA</span>
                  </div>
                  <div className="w-full bg-blue-500 rounded h-2"></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-lg p-6 border border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Independent Trader Path</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-amber-800">Learning Phase (0-1 year)</span>
                    <span className="font-bold text-amber-900">-₹5-20L Loss</span>
                  </div>
                  <div className="w-full bg-amber-200 rounded h-2"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-amber-800">Breaking Even (1-3 years)</span>
                    <span className="font-bold text-amber-900">₹0 (volatile)</span>
                  </div>
                  <div className="w-full bg-amber-300 rounded h-2"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-amber-800">Profitable Trader (3-5 years)</span>
                    <span className="font-bold text-amber-900">₹25-100L/month</span>
                  </div>
                  <div className="w-full bg-amber-400 rounded h-2"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-amber-800">Established Trader (5+ years)</span>
                    <span className="font-bold text-amber-900">₹1-10 Cr+/year</span>
                  </div>
                  <div className="w-full bg-amber-500 rounded h-2"></div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mt-6 text-sm">Note: Top traders at hedge funds can earn 10-50 Cr+ annually. But bottom 90% fail and never recover losses.</p>
        </div>

        {/* Two Career Paths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Institutional Path</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Jobs:</strong> Research analyst at banks, brokerages, mutual funds, hedge funds</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Stable income:</strong> Salary + performance bonus</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Growth:</strong> Fast track to ₹1+ Cr by age 35</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Risk:</strong> Company makes decisions. You're secure.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Best companies:</strong> Goldman Sachs, JP Morgan, Morgan Stanley, Citi, ICICI Securities, Motilal Oswal</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-amber-600" />
              <h3 className="text-2xl font-bold text-gray-800">Trader Path</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span><strong>Your capital:</strong> You trade your own money</span>
              </li>
              <li className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span><strong>Unlimited ceiling:</strong> ₹100 Cr+ possible. Loss of entire capital also possible.</span>
              </li>
              <li className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span><strong>Psychological warfare:</strong> Every rupee lost is YOUR money</span>
              </li>
              <li className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span><strong>Time to profit:</strong> 3-5 years of losses before consistent profit</span>
              </li>
              <li className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span><strong>Success rate:</strong> Only 10% succeed long-term. 90% quit with losses.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Analysis Types */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Fundamental vs Technical Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4">Fundamental Analysis</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>What:</strong> Analyze company financials, balance sheets, P&L, growth prospects</p>
                <p><strong>Tools:</strong> Financial statements, DCF models, Revenue analysis, Competitive advantage</p>
                <p><strong>Time horizon:</strong> 1-5 years (long-term investing)</p>
                <p><strong>Famous practitioners:</strong> Warren Buffett, Charlie Munger, Vijay Kedia</p>
                <p><strong>Income:</strong> Slower but more stable. ₹50-200L/year for good analysts</p>
                <p className="text-blue-700 font-semibold">✓ Lower stress, more predictable results</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-700 mb-4">Technical Analysis</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>What:</strong> Analyze price charts, patterns, moving averages, support/resistance</p>
                <p><strong>Tools:</strong> Candlestick charts, RSI, MACD, Fibonacci levels, Order flow</p>
                <p><strong>Time horizon:</strong> Minutes to months (short-term trading)</p>
                <p><strong>Famous practitioners:</strong> Mark Douglas, Jesse Livermore, Raghee Horner</p>
                <p><strong>Income:</strong> Can be extreme but volatile. ₹10L-10Cr+/month possible</p>
                <p className="text-orange-700 font-semibold">⚡ High adrenaline, high stress, high potential</p>
              </div>
            </div>
          </div>
        </div>

        {/* Algorithmic Trading */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8 mb-12 border border-purple-200">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-8 h-8 text-purple-700" />
            <h3 className="text-2xl font-bold text-gray-800">Algorithmic Trading (The Future)</h3>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>60%+ of trades in Indian markets are now algorithmic. To compete, modern traders must code.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded p-4 border border-purple-200">
                <p className="font-bold text-purple-800 mb-2">What to learn:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Python for trading (Backtrader, CCXT)</li>
                  <li>• Machine Learning for price prediction</li>
                  <li>• API integration with brokers</li>
                  <li>• Risk management algorithms</li>
                </ul>
              </div>
              <div className="bg-white rounded p-4 border border-purple-200">
                <p className="font-bold text-purple-800 mb-2">Earning potential:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Junior Quant: ₹20-40 LPA</li>
                  <li>• Sr. Quant: ₹60-150 LPA</li>
                  <li>• Quant Manager: ₹1+ Cr LPA</li>
                  <li>• Own algo: ₹50L-50Cr+/year</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose This Career?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Unlimited Income Ceiling</h3>
                <p className="text-gray-700">Only career where you can earn ₹10-100 Cr+ annually if you're brilliant and lucky</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Intellectual Chess Game</h3>
                <p className="text-gray-700">Markets test every aspect of your intelligence - psychology, analytics, risk management</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Award className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Complete Independence</h3>
                <p className="text-gray-700">As a trader, you answer to no one. Complete freedom of decisions and lifestyle</p>
              </div>
            </div>
            <div className="flex gap-4">
              <BarChart3 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Real-Time Results</h3>
                <p className="text-gray-700">Unlike other jobs, you see instant feedback on your decisions - profit/loss every day</p>
              </div>
            </div>
          </div>
        </div>

        {/* Challenges */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-red-800 mb-8">Challenges & Reality</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-800 mb-2">90% Failure Rate</h3>
                <p className="text-red-700">Most traders lose money and quit. Only 10% achieve consistent profitability.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-800 mb-2">Psychological Pressure</h3>
                <p className="text-red-700">Losses hurt personally. Fear, greed, and panic are your biggest enemies.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-800 mb-2">3-5 Years to Profit</h3>
                <p className="text-red-700">Most successful traders spend 3-5 years losing money before learning the market.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-800 mb-2">Algo Trading Dominance</h3>
                <p className="text-red-700">Retail traders compete against algorithms and institutional money. Odds are stacked.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Required */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Key Skills Required</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: 'Financial Analysis', desc: 'Read balance sheets, understand ratios, analyze growth' },
              { icon: BarChart3, title: 'Technical Analysis', desc: 'Chart reading, pattern recognition, moving averages' },
              { icon: Target, title: 'Risk Management', desc: 'Position sizing, stop losses, portfolio management' },
              { icon: Brain, title: 'Psychology', desc: 'Control emotions, overcome greed and fear' },
              { icon: MoreVertical, title: 'Python/Excel', desc: 'Data analysis, backtesting, algo development' },
              { icon: Award, title: 'Market Knowledge', desc: 'Economy, sectors, company news, macro trends' }
            ].map((skill, idx) => (
              <div key={idx} className="flex gap-4">
                <skill.icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800">{skill.title}</h3>
                  <p className="text-gray-600 text-sm">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Important Certifications & Licenses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded p-6 border border-blue-200">
              <h3 className="font-bold text-blue-800 mb-3">For Institutional Jobs</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>CFE:</strong> NSE Certification. Required for technical analysis jobs. ₹5-10K course</li>
                <li><strong>CFA Level 1:</strong> Global investing certification. 400-500 hours study. Opens ₹30-50L jobs</li>
                <li><strong>SEBI Registration:</strong> Required to work as investment advisor. Free exam by SEBI</li>
                <li><strong>RTA Certification:</strong> Stock market fundamentals. 2-3 months course</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded p-6 border border-amber-200">
              <h3 className="font-bold text-amber-800 mb-3">For Independent Traders</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>NSE/BSE Trader License:</strong> Required to trade. ₹5K-10K registration</li>
                <li><strong>Demat Account:</strong> Mandatory. Opens with any broker (Zerodha, Alice Blue, etc.)</li>
                <li><strong>Self-Teaching:</strong> Most successful traders self-taught. No formal certification needed.</li>
                <li><strong>Books/Courses:</strong> Mark Douglas, Technical Analysis, Algo trading on Coursera</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Companies */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Best Companies & Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Goldman Sachs',
              'JP Morgan',
              'Morgan Stanley',
              'Citi Group',
              'ICICI Securities',
              'Motilal Oswal',
              'HDFC Securities',
              'Angel Broking',
              'Zerodha (Startup)',
              'Hedge Funds',
              'Mutual Funds (HDFC, ICICI)',
              'Own Trading Business'
            ].map((company, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <Building2 className="w-5 h-5 text-blue-600" />
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
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">1</div>
              <div>
                <h3 className="font-bold text-gray-800">Start: Junior Analyst or Novice Trader</h3>
                <p className="text-gray-700">Learn fundamentals. If analyst: ₹8-15 LPA. If trader: Expect to lose ₹5-20L</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">2</div>
              <div>
                <h3 className="font-bold text-gray-800">Senior Analyst / Breaking Even (2-4 years)</h3>
                <p className="text-gray-700">Prove track record. Get promoted. For traders: Stop losing, start thinking of profit</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">3</div>
              <div>
                <h3 className="font-bold text-gray-800">Fund Manager / Profitable Trader (4-7 years)</h3>
                <p className="text-gray-700">Manage larger portfolios. Analyst becomes fund manager (₹50L-1Cr LPA). Trader: ₹25-100L/month</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">4</div>
              <div>
                <h3 className="font-bold text-gray-800">Director / Top Trader (7+ years)</h3>
                <p className="text-gray-700">Lead teams, manage ₹1000+ Cr. ₹1-5 Cr+ LPA. Top traders: ₹1-100 Cr+/year</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8 mb-12 border border-blue-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Pro Tips from Successful Traders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <p className="mb-3"><strong className="text-blue-700">1. Start with small money:</strong> Paper trading (fake money) or ₹25K-50K real capital. Don't risk ₹10L on day 1.</p>
              <p className="mb-3"><strong className="text-blue-700">2. Keep a trading journal:</strong> Track every trade, your emotions, why you won/lost. Patterns emerge after 100+ trades.</p>
              <p className="mb-3"><strong className="text-blue-700">3. Backtest your strategy:</strong> Test your trading plan on historical data. 90% of strategies fail backtesting.</p>
            </div>
            <div>
              <p className="mb-3"><strong className="text-blue-700">4. Risk/Reward ratio:</strong> Only take trades with 1:3 risk-reward minimum. If risk ₹1000, target ₹3000+ profit.</p>
              <p className="mb-3"><strong className="text-blue-700">5. Psychology is 80% of trading:</strong> Technical knowledge is 20%. Learn to control fear, greed, and overconfidence.</p>
              <p className="mb-3"><strong className="text-blue-700">6. Algo trading is the future:</strong> Learn Python. Algorithmic traders crush manual traders in 2024.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Master the Markets?</h2>
          <p className="text-blue-50 mb-6">Start your journey from ₹8 LPA to ₹1+ Cr. But remember: Only 10% succeed. Will you be that 10%?</p>
          <a href="/courses" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all inline-block">
            Explore Learning Resources
          </a>
        </div>
      </div>
    </div>
  );
}
