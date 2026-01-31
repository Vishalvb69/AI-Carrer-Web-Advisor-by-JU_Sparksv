import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, AlertCircle, TrendingUp } from 'lucide-react';

const UIUXDesignerDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-600">
          <Link to="/" className="hover:text-purple-600">Home</Link> / <Link to="/engineering" className="hover:text-purple-600">Engineering</Link> / <span className="font-medium">UI/UX Designer</span>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Palette className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-2">UI/UX Designer</h1>
          <p className="text-xl text-purple-100">Create beautiful, intuitive interfaces that delight users and solve real problems</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-orange-900 text-xl mb-2">🎨 Reality Check</h3>
              <p className="text-orange-800"><span className="font-bold">Design is in demand: ₹6-12 LPA entry, ₹50+ LPA senior roles</span>. 18% yearly growth. But career is portfolio-driven (no guaranteed salary), design feedback can be harsh, and you compete with AI design tools. Need strong visual skills and empathy.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8 text-center">
          <div className="bg-yellow-50 p-6 rounded-xl">
            <div className="text-2xl font-bold text-yellow-700">₹6-12 LPA</div>
            <div className="text-sm text-gray-600">Entry level designer</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl">
            <div className="text-2xl font-bold text-purple-700">₹20-35 LPA</div>
            <div className="text-sm text-gray-600">Senior/Lead designer</div>
          </div>
          <div className="bg-pink-50 p-6 rounded-xl">
            <div className="text-2xl font-bold text-pink-700">₹50+ LPA</div>
            <div className="text-sm text-gray-600">Design director/VP</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border shadow">
            <h3 className="font-bold text-green-600 mb-3">✅ Why UI/UX Design</h3>
            <ul className="text-sm space-y-2">
              <li>✓ Creative expression & artistic fulfillment</li>
              <li>✓ High demand (every app needs design)</li>
              <li>✓ Portfolio-driven (build what you want)</li>
              <li>✓ Freelance/agency income streams</li>
              <li>✓ Remote work friendly</li>
              <li>✓ Work with cutting-edge products</li>
              <li>✓ Global job opportunities</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border shadow">
            <h3 className="font-bold text-red-600 mb-3">⚠️ Challenges</h3>
            <ul className="text-sm space-y-2">
              <li>✗ Design feedback can be harsh/subjective</li>
              <li>✗ Career heavily portfolio-dependent</li>
              <li>✗ AI design tools competition emerging</li>
              <li>✗ Tool learning curve (Figma, Adobe)</li>
              <li>✗ Client/stakeholder management stress</li>
              <li>✗ Design trends change constantly</li>
              <li>✗ Lower entry salary than engineering</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">💰 Salary Breakdown</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="border-l-4 border-yellow-500 pl-4">
              <div className="font-bold text-gray-700">Junior Designer (0-2 yrs)</div>
              <div className="text-xl font-bold text-yellow-600">₹6-10 LPA</div>
              <div className="text-xs text-gray-600 mt-1">UI basics, simple designs</div>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="font-bold text-gray-700">Designer (2-5 yrs)</div>
              <div className="text-xl font-bold text-purple-600">₹14-22 LPA</div>
              <div className="text-xs text-gray-600 mt-1">Complex flows, UX research</div>
            </div>
            <div className="border-l-4 border-pink-500 pl-4">
              <div className="font-bold text-gray-700">Senior Designer (5-10 yrs)</div>
              <div className="text-xl font-bold text-pink-600">₹25-40 LPA</div>
              <div className="text-xs text-gray-600 mt-1">Lead design, strategy, mentoring</div>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <div className="font-bold text-gray-700">Design Director (10+ yrs)</div>
              <div className="text-xl font-bold text-red-600">₹50+ LPA</div>
              <div className="text-xs text-gray-600 mt-1">Design vision, leadership</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">🎯 Design Specializations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3 text-purple-600">UI Design (User Interface)</h3>
              <p className="text-sm text-gray-700 mb-3">Visual design of buttons, icons, typography, colors, layouts. Focus: How does it look? Professional appearance, brand consistency, accessibility.</p>
              <div className="text-xs bg-purple-50 p-2 rounded">Salary: ₹8-15 LPA entry, ₹25-40 LPA senior</div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-purple-600">UX Design (User Experience)</h3>
              <p className="text-sm text-gray-700 mb-3">User research, wireframing, prototyping, user testing. Focus: How does it work? Solving user problems, intuitive flows, behavior understanding.</p>
              <div className="text-xs bg-purple-50 p-2 rounded">Salary: ₹8-15 LPA entry, ₹30-45 LPA senior</div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-purple-600">Product Design</h3>
              <p className="text-sm text-gray-700 mb-3">Combines UI + UX + business strategy. Full product vision from user needs to business goals. Most comprehensive and highest-paying.</p>
              <div className="text-xs bg-purple-50 p-2 rounded">Salary: ₹10-18 LPA entry, ₹40-60 LPA senior</div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-purple-600">Interaction Design</h3>
              <p className="text-sm text-gray-700 mb-3">Microinteractions, animations, transitions, user feedback. Focus: How does it feel? Delighting users with smooth, responsive interfaces.</p>
              <div className="text-xs bg-purple-50 p-2 rounded">Salary: ₹8-14 LPA entry, ₹25-35 LPA senior</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">🛠️ Essential Tools & Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3">Design Tools</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-purple-600 mr-2">▸</span><strong>Figma</strong> - Industry standard (web-based, collaboration)</li>
                <li className="flex items-center"><span className="text-purple-600 mr-2">▸</span><strong>Adobe XD</strong> - Vector design & prototyping</li>
                <li className="flex items-center"><span className="text-purple-600 mr-2">▸</span><strong>Adobe Creative Suite</strong> - Photoshop, Illustrator, InDesign</li>
                <li className="flex items-center"><span className="text-purple-600 mr-2">▸</span><strong>Sketch</strong> - macOS design tool (alternatives: Affinity Designer)</li>
                <li className="flex items-center"><span className="text-purple-600 mr-2">▸</span><strong>Prototyping</strong> - Figma, Framer, InVision</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Core Skills Required</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-purple-600 mr-2">▸</span><strong>Visual Design</strong> - Color theory, typography, layout</li>
                <li className="flex items-center"><span className="text-purple-600 mr-2">▸</span><strong>User Research</strong> - Interviews, surveys, personas</li>
                <li className="flex items-center"><span className="text-purple-600 mr-2">▸</span><strong>Wireframing</strong> - Low-fidelity to high-fidelity</li>
                <li className="flex items-center"><span className="text-purple-600 mr-2">▸</span><strong>Prototyping</strong> - Interactive mockups & testing</li>
                <li className="flex items-center"><span className="text-purple-600 mr-2">▸</span><strong>HTML/CSS Basics</strong> - Understand developer constraints</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">📚 Learning Path & Certifications</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <div className="font-bold text-gray-800">Google UX Design Professional Certificate</div>
              <div className="text-sm text-gray-600">Platform: Coursera | Duration: 6-8 months | Cost: ₹40K-60K | Industry-recognized</div>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <div className="font-bold text-gray-800">Figma Masterclass / Advanced Courses</div>
              <div className="text-sm text-gray-600">Platform: Udemy, Skillshare | Duration: 10-20 hours | Cost: ₹500-3,000 | Essential tool training</div>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <div className="font-bold text-gray-800">Interaction Design Foundation Courses</div>
              <div className="text-sm text-gray-600">Platform: IDF | Duration: 4-6 weeks | Cost: Free/₹20K (certificate) | UX fundamentals</div>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <div className="font-bold text-gray-800">UI/UX Bootcamp</div>
              <div className="text-sm text-gray-600">Platform: CareerFoundry, General Assembly | Duration: 8-12 weeks | Cost: ₹1,50K-3,00K | Comprehensive</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
            <h3 className="font-bold text-green-700 text-lg mb-3">✨ Best Companies</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Google Design</span><span className="text-green-600">₹12-50+ LPA</span></div>
              <div className="flex justify-between"><span>Meta Design</span><span className="text-green-600">₹14-50+ LPA</span></div>
              <div className="flex justify-between"><span>Apple Design</span><span className="text-green-600">₹16-60+ LPA</span></div>
              <div className="flex justify-between"><span>Figma Design</span><span className="text-green-600">₹15-55+ LPA</span></div>
              <div className="flex justify-between"><span>Design Agencies</span><span className="text-green-600">₹8-35 LPA</span></div>
              <div className="flex justify-between"><span>Freelance</span><span className="text-green-600">₹10-50+ LPA</span></div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 p-6 rounded-xl">
            <h3 className="font-bold text-blue-700 text-lg mb-3">📈 Growth Path</h3>
            <ol className="space-y-2 text-sm">
              <li><span className="font-bold">Year 0-1:</span> Learn Figma, design basics (Free resources)</li>
              <li><span className="font-bold">Year 1-2:</span> Build portfolio, internships (₹6-10 LPA)</li>
              <li><span className="font-bold">Year 2-5:</span> Specialist role, UX research (₹14-22 LPA)</li>
              <li><span className="font-bold">Year 5-10:</span> Senior/lead designer (₹25-40 LPA)</li>
              <li><span className="font-bold">Year 10+:</span> Design director, founder (₹50+ LPA)</li>
            </ol>
          </div>
        </div>

        <div className="bg-purple-600 text-white rounded-xl p-8 text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Ready to Design Products That Matter?</h2>
          <p className="mb-4 text-purple-100">If you love beautiful design, care about user experience, and want to solve problems creatively, UI/UX design is your path!</p>
          <Link to="/courses" className="bg-white text-purple-600 px-6 py-2 rounded font-semibold hover:bg-purple-50 inline-block">View Learning Paths</Link>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
          <h3 className="font-bold text-purple-900 mb-2">💡 Pro Tips to Get Started</h3>
          <ul className="text-sm text-purple-900 space-y-1">
            <li>1. Start with Figma (free tier) - learn by creating mockups daily</li>
            <li>2. Study great product designs - Instagram, Figma, Notion, Discord</li>
            <li>3. Take online courses (Google UX Design is comprehensive)</li>
            <li>4. Build a strong portfolio (3-5 best projects are better than 20)</li>
            <li>5. Understand your users - talk to them, observe their behavior</li>
            <li>6. Learn basic HTML/CSS to understand developer constraints</li>
            <li>7. Get feedback from other designers regularly</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UIUXDesignerDetails;
