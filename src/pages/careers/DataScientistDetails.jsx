import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, AlertCircle, TrendingUp } from 'lucide-react';

const DataScientistDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600">Home</Link> / <Link to="/engineering" className="hover:text-blue-600">Engineering</Link> / <span className="font-medium">Data Scientist</span>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Brain className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-2">Data Scientist</h1>
          <p className="text-xl text-blue-100">Turn raw data into actionable business insights using machine learning and advanced analytics</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-orange-900 text-xl mb-2">📊 Reality Check</h3>
              <p className="text-orange-800"><span className="font-bold">Data science is explosive: ₹12-20 LPA entry, ₹80+ LPA senior roles</span>. 25% yearly growth. But requires strong math, statistics, and coding skills. Competition from automation - junior analyst roles disappearing. You MUST continuously learn new ML frameworks.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8 text-center">
          <div className="bg-yellow-50 p-6 rounded-xl">
            <div className="text-2xl font-bold text-yellow-700">₹12-20 LPA</div>
            <div className="text-sm text-gray-600">Entry level scientist</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="text-2xl font-bold text-blue-700">₹40-60 LPA</div>
            <div className="text-sm text-gray-600">Senior/Lead scientist</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl">
            <div className="text-2xl font-bold text-purple-700">₹80+ LPA</div>
            <div className="text-sm text-gray-600">Principal/Director level</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border shadow">
            <h3 className="font-bold text-green-600 mb-3">✅ Why Choose Data Science</h3>
            <ul className="text-sm space-y-2">
              <li>✓ Extreme demand across all industries</li>
              <li>✓ Excellent and growing salaries</li>
              <li>✓ Work on cutting-edge problems</li>
              <li>✓ Flexibility (startups to big tech)</li>
              <li>✓ Intellectual satisfaction</li>
              <li>✓ Global opportunities</li>
              <li>✓ Can freelance & consult</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border shadow">
            <h3 className="font-bold text-red-600 mb-3">⚠️ Challenges</h3>
            <ul className="text-sm space-y-2">
              <li>✗ Requires strong math/stats</li>
              <li>✗ Continuous learning (new models daily)</li>
              <li>✗ Junior roles being automated</li>
              <li>✗ Long time to see ML impact</li>
              <li>✗ High competition for roles</li>
              <li>✗ Burnout from complex problems</li>
              <li>✗ Data quality issues frustrating</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">📊 Salary Breakdown</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="border-l-4 border-yellow-500 pl-4">
              <div className="font-bold text-gray-700">Junior Scientist (0-2 yrs)</div>
              <div className="text-xl font-bold text-yellow-600">₹12-18 LPA</div>
              <div className="text-xs text-gray-600 mt-1">Python basics, simple ML models</div>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="font-bold text-gray-700">Scientist (2-5 yrs)</div>
              <div className="text-xl font-bold text-blue-600">₹25-40 LPA</div>
              <div className="text-xs text-gray-600 mt-1">Complex ML, mentoring juniors</div>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="font-bold text-gray-700">Senior Scientist (5-10 yrs)</div>
              <div className="text-xl font-bold text-purple-600">₹50-70 LPA</div>
              <div className="text-xs text-gray-600 mt-1">Lead projects, strategy</div>
            </div>
            <div className="border-l-4 border-pink-500 pl-4">
              <div className="font-bold text-gray-700">Principal/Director (10+ yrs)</div>
              <div className="text-xl font-bold text-pink-600">₹80+ LPA</div>
              <div className="text-xs text-gray-600 mt-1">Organization strategy, AI vision</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">🎯 ML Specializations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3 text-blue-600">NLP (Natural Language Processing)</h3>
              <p className="text-sm text-gray-700 mb-3">Build chatbots, sentiment analysis, language translation models. Companies: Google, OpenAI, Meta</p>
              <div className="text-xs bg-blue-50 p-2 rounded">Salary: ₹15-25 LPA entry, ₹60-80+ LPA senior</div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-blue-600">Computer Vision</h3>
              <p className="text-sm text-gray-700 mb-3">Image recognition, object detection, autonomous vehicles. Companies: Tesla, Google, Amazon</p>
              <div className="text-xs bg-blue-50 p-2 rounded">Salary: ₹15-25 LPA entry, ₹70-90+ LPA senior</div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-blue-600">Recommendation Systems</h3>
              <p className="text-sm text-gray-700 mb-3">Netflix recommendations, Amazon suggestions, YouTube feeds. Companies: Netflix, Amazon, LinkedIn</p>
              <div className="text-xs bg-blue-50 p-2 rounded">Salary: ₹14-22 LPA entry, ₹50-70+ LPA senior</div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-blue-600">Time Series Analysis</h3>
              <p className="text-sm text-gray-700 mb-3">Stock prediction, weather forecasting, demand planning. Companies: JPMorgan, Goldman Sachs</p>
              <div className="text-xs bg-blue-50 p-2 rounded">Salary: ₹15-25 LPA entry, ₹60-80+ LPA senior</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">🛠️ Essential Tools & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3">Languages & Libraries</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-blue-600 mr-2">▸</span><strong>Python</strong> - Primary language (NumPy, Pandas, Scikit-learn)</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">▸</span><strong>SQL</strong> - Data extraction & queries</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">▸</span><strong>R</strong> - Statistical analysis (optional)</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">▸</span><strong>Scala/Java</strong> - Big data processing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">ML Frameworks</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-blue-600 mr-2">▸</span><strong>TensorFlow</strong> - Deep learning (Google)</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">▸</span><strong>PyTorch</strong> - Deep learning (Meta)</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">▸</span><strong>Scikit-learn</strong> - Classical ML</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">▸</span><strong>Keras</strong> - Neural networks API</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">🏆 Certifications & Platforms</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="font-bold text-gray-800">Kaggle Master/Grandmaster</div>
              <div className="text-sm text-gray-600">Compete in data science competitions. Top performers get recruited directly by big tech companies</div>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="font-bold text-gray-800">Andrew Ng's Machine Learning Course (Coursera)</div>
              <div className="text-sm text-gray-600">Cost: Free / ₹40K | Duration: 4-6 weeks | Most taken ML course worldwide</div>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="font-bold text-gray-800">Google Cloud Data Engineer Certification</div>
              <div className="text-sm text-gray-600">Cost: ₹8K exam | Duration: 2-3 months preparation | Highly valued</div>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="font-bold text-gray-800">AWS Machine Learning Specialty</div>
              <div className="text-sm text-gray-600">Cost: ₹8K exam | Duration: 2-3 months preparation | Cloud ML expertise</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
            <h3 className="font-bold text-green-700 text-lg mb-3">✨ Best Companies</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Google AI/Brain</span><span className="text-green-600">₹20-80+ LPA</span></div>
              <div className="flex justify-between"><span>Microsoft Research</span><span className="text-green-600">₹18-70+ LPA</span></div>
              <div className="flex justify-between"><span>Amazon AWS AI</span><span className="text-green-600">₹18-70+ LPA</span></div>
              <div className="flex justify-between"><span>Meta (Facebook) AI</span><span className="text-green-600">₹20-80+ LPA</span></div>
              <div className="flex justify-between"><span>Flipkart Data Science</span><span className="text-green-600">₹15-40 LPA</span></div>
              <div className="flex justify-between"><span>PayPal ML Engineering</span><span className="text-green-600">₹16-50 LPA</span></div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 p-6 rounded-xl">
            <h3 className="font-bold text-blue-700 text-lg mb-3">🎯 Growth Path</h3>
            <ol className="space-y-2 text-sm">
              <li><span className="font-bold">Year 0-1:</span> Learn Python & ML (Free on YouTube)</li>
              <li><span className="font-bold">Year 1-2:</span> Kaggle competitions, entry role</li>
              <li><span className="font-bold">Year 2-4:</span> Specialization (NLP/CV), mid-level</li>
              <li><span className="font-bold">Year 4-8:</span> Lead ML projects, senior role</li>
              <li><span className="font-bold">Year 8+:</span> Research, Principal scientist, startup founder</li>
            </ol>
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-xl p-8 text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Ready to Master Machine Learning?</h2>
          <p className="mb-4 text-blue-100">If you love math, problem-solving, and want to build AI that impacts millions, data science is your calling!</p>
          <Link to="/courses" className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-blue-50 inline-block">View Learning Paths</Link>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <h3 className="font-bold text-blue-900 mb-2">💡 Pro Tips to Get Started</h3>
          <ul className="text-sm text-blue-900 space-y-1">
            <li>1. Start with Python - master Pandas, NumPy, Scikit-learn first</li>
            <li>2. Learn statistics & linear algebra (MIT OpenCourseWare is free)</li>
            <li>3. Build projects on real datasets (Kaggle, UCI Machine Learning Repository)</li>
            <li>4. Compete in Kaggle competitions to build portfolio</li>
            <li>5. Join Andrew Ng's ML course - industry standard</li>
            <li>6. Learn SQL for data extraction</li>
            <li>7. Focus on explaining models to non-technical people (crucial skill)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataScientistDetails;
