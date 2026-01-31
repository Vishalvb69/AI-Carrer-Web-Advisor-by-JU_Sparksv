import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  TrendingUp, 
  DollarSign, 
  Users, 
  BarChart3, 
  Award,
  BookOpen,
  Briefcase,
  LineChart,
  Laptop,
  Target,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Building,
  Brain,
  TrendingDown,
  Zap,
  Shield
} from 'lucide-react'

const TraderDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/commerce" className="hover:text-blue-600 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Commerce
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Trader (Stock Market, Forex, Crypto)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Financial Markets Professional
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Trader (Stock Market, Forex, Crypto)
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Buy and sell financial instruments—stocks, currencies, cryptocurrencies, derivatives—to profit from price movements. Use technical analysis, charts, patterns, and risk management strategies. A high-risk, high-reward career requiring strong psychology, discipline, and capital. Work from home with laptop and internet.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹0-10 LPA</div>
                  <div className="text-sm text-gray-200">Beginner (Many Lose)</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹10-50L+</div>
                  <div className="text-sm text-gray-200">Successful Trader</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">No Degree</div>
                  <div className="text-sm text-gray-200">Self-Taught Possible</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <LineChart className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Stock Trading</h3>
                <p className="text-sm text-gray-200">Equity Markets</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <TrendingUp className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Forex Trading</h3>
                <p className="text-sm text-gray-200">Currency Pairs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Zap className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Crypto Trading</h3>
                <p className="text-sm text-gray-200">Bitcoin, Altcoins</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <BarChart3 className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">F&O Trading</h3>
                <p className="text-sm text-gray-200">Futures & Options</p>
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
            Reality Check: BRUTAL TRUTHS About Trading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">95% Traders LOSE Money</h3>
              <p className="text-sm text-gray-700">Only 5% consistently profitable. Most blow up accounts within 1 year. Market takes money from impatient to patient. Survivor bias makes it look easy</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">Requires SIGNIFICANT Capital</h3>
              <p className="text-sm text-gray-700">Need minimum ₹1-5L for decent returns. With ₹50K, even 10% monthly = ₹5K. Can't quit job. Most start under-capitalized, take excess risk, lose everything</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">Extreme Psychological Pressure</h3>
              <p className="text-sm text-gray-700">Watch money vanish in seconds. Fear, greed, revenge trading, FOMO. Depression common after big losses. Stress affects health, relationships, sleep</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">Addiction & Gambling Behavior</h3>
              <p className="text-sm text-gray-700">Dopamine rush from wins. Many become addicted, trade compulsively, ignore risk management. Similar to casino gambling. Destroy savings chasing losses</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">NO Guaranteed Income</h3>
              <p className="text-sm text-gray-700">One month +₹2L, next month -₹3L. Income completely unpredictable. Can't plan life, EMIs, expenses. Most successful traders have other income sources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <DollarSign className="h-8 w-8 text-green-600 mr-3" />
            Earnings Reality (HIGHLY Variable)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Beginner (0-2 years)</h3>
              <div className="text-3xl font-bold text-red-600 mb-2">-₹50K to 0</div>
              <p className="text-sm text-gray-600 mb-4">Learning phase - MOST LOSE</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• 90% blow up first account</li>
                <li>• Emotional trading, no strategy</li>
                <li>• Over-leverage, revenge trading</li>
                <li>• Learning costs money (tuition fees)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Developing Trader</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">₹0-5 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Breaking even, small profits</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Finally consistent (small wins)</li>
                <li>• 5-10% monthly (if ₹5L capital)</li>
                <li>• Still occasional drawdowns</li>
                <li>• Not enough to quit job</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Profitable Trader</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">₹10-30 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Consistent, disciplined</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• 10-15% monthly returns</li>
                <li>• Capital: ₹10-20L</li>
                <li>• Strict risk management</li>
                <li>• Can consider full-time</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-xl p-6 shadow-sm border-2 border-green-300">
              <h3 className="text-lg font-semibold mb-2">Elite Trader</h3>
              <div className="text-3xl font-bold text-green-700 mb-2">₹50L-2Cr+</div>
              <p className="text-sm text-gray-600 mb-4">Top 1%, large capital</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Capital: ₹50L-5Cr+</li>
                <li>• Algorithmic trading, teams</li>
                <li>• Hedge fund managers</li>
                <li>• 20+ years experience</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-sm text-gray-800"><strong>Reality:</strong> These numbers assume consistent profitability, which only 5% achieve. Most traders never reach "profitable" stage. Even successful traders have losing months. Never trade with money you can't afford to lose.</p>
          </div>
        </div>
      </section>

      {/* Daily Work & Responsibilities */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            What Traders Actually Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Daily Activities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <BarChart3 className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Market Analysis:</strong> Study charts, patterns, indicators, news, economic data before market opens</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Trade Execution:</strong> Enter/exit positions based on strategy, set stop-loss, target, manage open trades</span>
                </li>
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Risk Management:</strong> Position sizing, portfolio allocation, never risk &gt;2% per trade</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Journal & Review:</strong> Document trades, analyze mistakes, improve strategy, backtest systems</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Time Breakdown</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Pre-Market Analysis (30%)</h4>
                  <p className="text-sm text-gray-700">News, charts, patterns, economic calendar, sector analysis, trade plan</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Active Trading (40%)</h4>
                  <p className="text-sm text-gray-700">Execute trades, monitor positions, adjust stop-loss, manage emotions</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Post-Market Review (20%)</h4>
                  <p className="text-sm text-gray-700">Journal trades, P&L analysis, identify mistakes, improve strategy</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Learning & Research (10%)</h4>
                  <p className="text-sm text-gray-700">Books, courses, backtesting, new strategies, market psychology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Path */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
            How to Learn Trading
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border mb-8">
            <h3 className="text-xl font-semibold mb-6">No Formal Degree Required</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Self-Learning Path (Recommended)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• YouTube: Pranjal Kamra, CA Rachana Ranade, Power of Stocks</li>
                  <li>• Books: Trading in the Zone, Market Wizards, Technical Analysis</li>
                  <li>• Online Courses: Zerodha Varsity (FREE), Udemy, Elearnmarkets</li>
                  <li>• Paper Trading: Practice 6-12 months before real money</li>
                  <li>• Start Small: ₹10-20K initially, increase slowly</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Paid Courses (Be Careful!)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Many scams promise guaranteed profits</li>
                  <li>• If they're so good, why teach instead of trade?</li>
                  <li>• Fees: ₹10K-1L+ (most not worth it)</li>
                  <li>• Better: Learn free, then paid mentorship</li>
                  <li>• NSE/BSE certifications: NCFM, NISM</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-red-50 p-4 rounded-lg">
              <p className="text-sm text-gray-800"><strong>WARNING:</strong> Beware of "trading gurus" selling ₹50K courses with Lamborghini screenshots. If they made millions trading, they wouldn't need your course fees. 99% are scams. Learn from free resources first.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">Learning Roadmap</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Basics (3-6 months)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Stock market fundamentals</li>
                  <li>• How to read charts, candlesticks</li>
                  <li>• Support, resistance, trendlines</li>
                  <li>• Open Demat account (Zerodha, Upstox)</li>
                  <li>• Paper trading practice</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Intermediate (6-12 months)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Technical indicators (RSI, MACD, EMA)</li>
                  <li>• Chart patterns (head & shoulders, flags)</li>
                  <li>• Risk management rules</li>
                  <li>• Develop trading strategy</li>
                  <li>• Start with ₹10-20K real money</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Advanced (1-3 years)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Options & futures trading</li>
                  <li>• Advanced strategies (spreads, hedging)</li>
                  <li>• Algo trading, backtesting</li>
                  <li>• Trading psychology mastery</li>
                  <li>• Consistent profitability (if you reach here!)</li>
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
            Essential Skills for Trading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Technical Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Chart reading & analysis</li>
                <li>• Candlestick patterns</li>
                <li>• Technical indicators (RSI, MACD, Bollinger)</li>
                <li>• Support & resistance levels</li>
                <li>• Volume analysis</li>
                <li>• Backtesting strategies</li>
                <li>• Trading platforms (Zerodha, TradingView)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Risk Management</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Position sizing</strong> - How much to risk</li>
                <li>• <strong>Stop-loss</strong> - Always protect capital</li>
                <li>• <strong>Risk:Reward ratio</strong> - Min 1:2</li>
                  <li>• <strong>Max risk</strong> - Never &gt;2% per trade</li>
                <li>• <strong>Diversification</strong> - Don't put all in one</li>
                <li>• <strong>Capital preservation</strong> - First rule</li>
                <li>• <strong>Trade journaling</strong> - Track mistakes</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Psychology (MOST CRITICAL!)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Emotional control (fear, greed)</li>
                <li>• Patience (wait for setups)</li>
                <li>• Discipline (follow rules strictly)</li>
                <li>• Accept losses (part of game)</li>
                <li>• No revenge trading</li>
                <li>• FOMO management</li>
                <li>• Mental resilience</li>
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
            Trading Career Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border border-blue-200">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Independent Trader</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Solo trading</strong> - Own capital, own boss</li>
                <li><strong>Work from home</strong> - Just laptop needed</li>
                <li><strong>Flexible hours</strong> - Market hours only</li>
                <li><strong>Earnings:</strong> Depends on capital & skill</li>
                <li><strong>Risk:</strong> 100% your money at stake</li>
                <li><strong>Reality:</strong> Most common path, hardest</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border border-green-200">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Proprietary Trader</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Prop trading firms</strong> - Trade firm's money</li>
                <li><strong>Salary + Profit share</strong> - ₹3-15L salary + %</li>
                <li><strong>Lower risk</strong> - Not your capital</li>
                <li><strong>Performance pressure</strong> - Meet targets</li>
                <li><strong>Companies:</strong> Tower Research, Futures First</li>
                <li><strong>Entry:</strong> Tough interviews, math tests</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border border-purple-200">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Other Paths</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Fund Manager</strong> - Mutual funds, PMS (₹10-50L)</li>
                <li><strong>Analyst</strong> - Research, recommendations (₹5-20L)</li>
                <li><strong>Trading Educator</strong> - Teach (if truly skilled)</li>
                <li><strong>Algo Trader</strong> - Automated systems (tech+trading)</li>
                <li><strong>Broker</strong> - Zerodha franchisee, sub-broker</li>
                <li><strong>YouTuber</strong> - Market analysis content</li>
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
            Realistic Trading Journey
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 0-2: Learning & Losing</h3>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Survival Phase</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <TrendingDown className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Most Quit Here:</strong> 90% blow accounts, lose ₹50K-2L, give up. Emotional trading, no strategy, over-leverage</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Learn Basics:</strong> Technical analysis, chart patterns, risk management. Paper trade 6-12 months before real money</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Start Small:</strong> ₹10-20K only. Treat losses as tuition fees. Don't add more money until consistent</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-orange-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 2-5: Developing Consistency</h3>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Growth Phase</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Breaking Even:</strong> Finally stop losing consistently. Small monthly profits. Emotional control improving</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Develop Strategy:</strong> Find what works for YOU. Backtest, journal every trade. Stick to rules religiously</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Scale Capital:</strong> Slowly increase from ₹20K → ₹1-2L as consistency proves. Still keep day job!</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 5-10+: Professional Trader (If You Make It)</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Elite 5%</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Consistent Profits:</strong> 10-15% monthly on ₹10-50L capital. Can consider full-time trading</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Options:</strong> Stay solo, join prop firm, start fund, teach (if genuinely skilled), algo trading</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Reality:</strong> Even after 10 years, bad months happen. Market conditions change. Never stop learning</span>
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
            <TrendingUp className="h-8 w-8 text-red-600 mr-3" />
            Challenges & Difficulty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                EXTREMELY Difficult
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Controlling emotions (greed, fear, FOMO)</li>
                <li>• Consistent profitability (95% fail)</li>
                <li>• Capital requirement (need ₹5-10L+)</li>
                <li>• Dealing with losses & drawdowns</li>
                <li>• Avoiding revenge trading</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                Moderate Challenges
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Technical analysis & chart reading</li>
                <li>• Risk management rules</li>
                <li>• Strategy development & backtesting</li>
                <li>• Market timing & entry/exit</li>
                <li>• Trading platform usage</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Manageable Aspects
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Opening Demat account</li>
                <li>• Basic chart patterns</li>
                <li>• Understanding candlesticks</li>
                <li>• Paper trading practice</li>
                <li>• Learning from free resources</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Laptop className="h-8 w-8 text-purple-600 mr-3" />
            Trading Specialization Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <LineChart className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Equity Trading</h3>
              <p className="text-gray-600 mb-4 text-sm">Buy/sell stocks, intraday or positional. Lower risk than F&O. Good for beginners</p>
              <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹0-30 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <BarChart3 className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">F&O Trading (Futures & Options)</h3>
              <p className="text-gray-600 mb-4 text-sm">Derivatives trading, leverage up to 5-10x. High risk, high reward. For experienced only</p>
              <div className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹0-50L+ LPA</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <TrendingUp className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Forex Trading</h3>
              <p className="text-gray-600 mb-4 text-sm">Currency pairs (USD/INR, EUR/USD). 24-hour market. High leverage, high risk</p>
              <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹0-40L+ LPA</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Zap className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Crypto Trading</h3>
              <p className="text-gray-600 mb-4 text-sm">Bitcoin, Ethereum, altcoins. 24/7 market. Extreme volatility, very high risk</p>
              <div className="bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹0-1Cr+ LPA</div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Laptop className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Algo Trading</h3>
              <p className="text-gray-600 mb-4 text-sm">Automated trading systems, Python coding. Backtest strategies, HFT firms</p>
              <div className="bg-pink-100 text-pink-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹5-30 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Users className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Swing Trading</h3>
              <p className="text-gray-600 mb-4 text-sm">Hold positions 2-15 days. Less screen time, better work-life balance than intraday</p>
              <div className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹0-25 LPA</div>
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
                  <span className="text-gray-700"><strong>Work From Anywhere:</strong> Just laptop + internet. No office, boss, or commute. Ultimate flexibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Unlimited Earning Potential:</strong> No salary cap. With ₹20L capital + skill, can make ₹3-5L/month</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>No Formal Degree Needed:</strong> Self-taught possible. Free resources available. Skill-based only</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Financial Market Knowledge:</strong> Learn investing, economics, psychology. Skills useful for life</span>
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
                  <span className="text-gray-700"><strong>95% Lose Money:</strong> Only 5% consistently profitable. Most blow accounts, quit within 1 year. Brutal reality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Requires Large Capital:</strong> Need ₹5-10L+ for decent income. With ₹50K, can't make living even if skilled</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Extreme Stress & Addiction:</strong> Watch money vanish. Emotional rollercoaster. Gambling-like behavior common</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>No Income Stability:</strong> One month +₹2L, next -₹3L. Impossible to plan life. Most need backup income</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <LineChart className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Should You Become a Trader?</h2>
          <p className="text-xl text-green-100 mb-8">
            Trading is NOT for everyone. It's a high-risk path where 95% fail and lose money. Only pursue if: (1) You have significant capital (₹5-10L+) you can AFFORD TO LOSE, (2) You have extreme discipline and emotional control, (3) You're willing to spend 2-3 years learning before profits, (4) You have backup income. Start with paper trading for 6-12 months. Never trade borrowed money or sell assets. Beware of trading gurus selling courses—learn from free resources first. If you're not 100% sure, DON'T trade. A regular job with stock market SIP investing is safer for 99% of people.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/commerce" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Safer Commerce Careers
            </Link>
            <Link 
              to="/stream-selection" 
              className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors border-2 border-white"
            >
              Compare All Streams
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TraderDetails
