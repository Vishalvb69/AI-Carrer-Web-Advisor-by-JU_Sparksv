import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertCircle, TrendingUp } from 'lucide-react';

const EthicalHackerDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-600">
          <Link to="/" className="hover:text-red-600">Home</Link> / <Link to="/engineering" className="hover:text-red-600">Engineering</Link> / <span className="font-medium">Ethical Hacker</span>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-600 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-2">Ethical Hacker / Penetration Tester</h1>
          <p className="text-xl text-red-100">Find and fix security vulnerabilities before criminals do. Save companies from cyber attacks.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-orange-900 text-xl mb-2">🔐 Reality Check</h3>
              <p className="text-orange-800"><span className="font-bold">Cybersecurity is booming: ₹8-15 LPA entry, ₹50-60+ LPA senior roles</span>. 28% yearly growth. But requires continuous learning, certifications (CEH, OSCP cost ₹1-2 lakhs each), and serious dedication. Legal responsibility is high - one mistake and you're in jail!</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8 text-center">
          <div className="bg-yellow-50 p-6 rounded-xl">
            <div className="text-2xl font-bold text-yellow-700">₹8-15 LPA</div>
            <div className="text-sm text-gray-600">Entry level analyst</div>
          </div>
          <div className="bg-red-50 p-6 rounded-xl">
            <div className="text-2xl font-bold text-red-700">₹25-40 LPA</div>
            <div className="text-sm text-gray-600">Senior penetration tester</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl">
            <div className="text-2xl font-bold text-purple-700">₹50-60+ LPA</div>
            <div className="text-sm text-gray-600">Security consultant/CISO</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border shadow">
            <h3 className="font-bold text-green-600 mb-3">✅ Why This Career</h3>
            <ul className="text-sm space-y-2">
              <li>✓ Extreme demand (shortage of professionals)</li>
              <li>✓ Highest growth rate in tech (28% yearly)</li>
              <li>✓ Bug bounties: ₹1-50 lakhs per vulnerability</li>
              <li>✓ Work from anywhere (remote)</li>
              <li>✓ Intellectual challenge & prestige</li>
              <li>✓ Multiple income streams (consulting, freelance)</li>
              <li>✓ Global opportunities</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border shadow">
            <h3 className="font-bold text-red-600 mb-3">⚠️ Challenges</h3>
            <ul className="text-sm space-y-2">
              <li>✗ Expensive certifications (₹1-2 lakhs each)</li>
              <li>✗ Continuous learning required (new threats daily)</li>
              <li>✗ Legal responsibility (must have written permission)</li>
              <li>✗ High stress during cyber incidents</li>
              <li>✗ On-call support during attacks</li>
              <li>✗ Highly competitive job market</li>
              <li>✗ Burnout from constant vigilance</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">📊 Salary Breakdown</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="border-l-4 border-yellow-500 pl-4">
              <div className="font-bold text-gray-700">Junior Analyst (0-2 yrs)</div>
              <div className="text-xl font-bold text-yellow-600">₹8-12 LPA</div>
              <div className="text-xs text-gray-600 mt-1">CEH certified, entry roles</div>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <div className="font-bold text-gray-700">Analyst (2-5 yrs)</div>
              <div className="text-xl font-bold text-orange-600">₹15-25 LPA</div>
              <div className="text-xs text-gray-600 mt-1">OSCP, independent projects</div>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <div className="font-bold text-gray-700">Senior Tester (5-10 yrs)</div>
              <div className="text-xl font-bold text-red-600">₹40-50 LPA</div>
              <div className="text-xs text-gray-600 mt-1">Lead consultations, team lead</div>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="font-bold text-gray-700">Consultant/CISO (10+ yrs)</div>
              <div className="text-xl font-bold text-purple-600">₹50-60+ LPA</div>
              <div className="text-xs text-gray-600 mt-1">Strategy, advisory, C-level</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">🎯 Job Roles & Specializations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3 text-red-600">Core Roles</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-red-600 mr-2">▸</span>Penetration Tester (Web, Mobile, Network)</li>
                <li className="flex items-center"><span className="text-red-600 mr-2">▸</span>Security Analyst</li>
                <li className="flex items-center"><span className="text-red-600 mr-2">▸</span>Vulnerability Researcher</li>
                <li className="flex items-center"><span className="text-red-600 mr-2">▸</span>Red Team Operator</li>
                <li className="flex items-center"><span className="text-red-600 mr-2">▸</span>Incident Response Specialist</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-red-600">Specializations</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-red-600 mr-2">▸</span>Web Application Security</li>
                <li className="flex items-center"><span className="text-red-600 mr-2">▸</span>Network Security</li>
                <li className="flex items-center"><span className="text-red-600 mr-2">▸</span>Cloud Security (AWS/Azure)</li>
                <li className="flex items-center"><span className="text-red-600 mr-2">▸</span>IoT & Embedded Security</li>
                <li className="flex items-center"><span className="text-red-600 mr-2">▸</span>Bug Bounty Hunting</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">🛠️ Essential Skills & Tools</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3">Technical Skills</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Linux Administration</span>
                  <div className="w-32 bg-gray-200 rounded h-2"><div className="bg-red-600 h-2 rounded w-5/6"></div></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Python/Bash Scripting</span>
                  <div className="w-32 bg-gray-200 rounded h-2"><div className="bg-red-600 h-2 rounded w-5/6"></div></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Network Security (TCP/IP)</span>
                  <div className="w-32 bg-gray-200 rounded h-2"><div className="bg-red-600 h-2 rounded w-5/6"></div></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Web Security (SQL, XSS, CSRF)</span>
                  <div className="w-32 bg-gray-200 rounded h-2"><div className="bg-red-600 h-2 rounded w-4/6"></div></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Cryptography Basics</span>
                  <div className="w-32 bg-gray-200 rounded h-2"><div className="bg-red-600 h-2 rounded w-3/6"></div></div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Tools & Platforms</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-red-600 mr-2">▸</span><strong>Metasploit</strong> - Penetration framework</li>
                <li className="flex items-center"><span className="text-red-600 mr-2">▸</span><strong>Burp Suite</strong> - Web app testing</li>
                <li className="flex items-center"><span className="text-red-600 mr-2">▸</span><strong>Wireshark</strong> - Network analysis</li>
                <li className="flex items-center"><span className="text-red-600 mr-2">▸</span><strong>Nmap</strong> - Network scanning</li>
                <li className="flex items-center"><span className="text-red-600 mr-2">▸</span><strong>Hashcat</strong> - Password cracking</li>
                <li className="flex items-center"><span className="text-red-600 mr-2">▸</span><strong>Kali Linux</strong> - Hacking OS</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">🎓 Certifications (Critical for Growth)</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <div className="font-bold text-gray-800">Certified Ethical Hacker (CEH) - EC-Council</div>
              <div className="text-sm text-gray-600">Cost: ₹50,000-1,50,000 | Duration: 40-100 hours | Difficulty: Beginner-Intermediate</div>
            </div>
            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <div className="font-bold text-gray-800">Offensive Security Certified Professional (OSCP) - Offensive Security</div>
              <div className="text-sm text-gray-600">Cost: ₹1,50,000 | Duration: 100+ hours (very challenging) | Difficulty: Advanced | Most respected certification</div>
            </div>
            <div className="border-l-4 border-red-500 pl-4 py-2">
              <div className="font-bold text-gray-800">CompTIA Security+ - CompTIA</div>
              <div className="text-sm text-gray-600">Cost: ₹30,000-80,000 | Duration: 50-100 hours | Difficulty: Intermediate | Industry standard</div>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <div className="font-bold text-gray-800">SANS Certifications - SANS Institute</div>
              <div className="text-sm text-gray-600">Cost: ₹2,00,000+ | Duration: Variable | Difficulty: Advanced+ | Most expensive, highly respected</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">💰 Additional Income Streams</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
              <div className="font-bold text-green-700 mb-2">🐛 Bug Bounty Hunting</div>
              <div className="text-sm text-gray-700">HackerOne, Bugcrowd, Intigriti platforms. ₹1,000 to ₹50,00,000 per bug found!</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
              <div className="font-bold text-blue-700 mb-2">📚 Freelance Consulting</div>
              <div className="text-sm text-gray-700">Security audits, pentesting for SMBs. ₹50,000-5,00,000 per project</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
              <div className="font-bold text-purple-700 mb-2">🎓 Teaching & Courses</div>
              <div className="text-sm text-gray-700">Create courses on Udemy, teach workshops. ₹1-5 lakhs monthly potential</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
            <h3 className="font-bold text-green-700 text-lg mb-3">✨ Best Companies</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Deloitte Security</span><span className="text-green-600">₹15-45 LPA</span></div>
              <div className="flex justify-between"><span>EY Cybersecurity</span><span className="text-green-600">₹14-40 LPA</span></div>
              <div className="flex justify-between"><span>IBM Security India</span><span className="text-green-600">₹16-50 LPA</span></div>
              <div className="flex justify-between"><span>Microsoft Security</span><span className="text-green-600">₹20-60 LPA</span></div>
              <div className="flex justify-between"><span>Google Project Zero</span><span className="text-green-600">₹25-80+ LPA</span></div>
              <div className="flex justify-between"><span>HackerOne (Bug Bounties)</span><span className="text-green-600">₹1-50 Cr+ (per find)</span></div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 p-6 rounded-xl">
            <h3 className="font-bold text-blue-700 text-lg mb-3">🎯 Growth Path</h3>
            <ol className="space-y-2 text-sm">
              <li><span className="font-bold">Year 0-1:</span> Learn basics (₹0-50K costs)</li>
              <li><span className="font-bold">Year 1-2:</span> Get CEH, entry role (₹8-12 LPA)</li>
              <li><span className="font-bold">Year 2-5:</span> Gain OSCP, mid-level (₹15-25 LPA)</li>
              <li><span className="font-bold">Year 5-10:</span> Senior consultant (₹40-50 LPA)</li>
              <li><span className="font-bold">Year 10+:</span> CISO/Consultant (₹50-60+ LPA)</li>
            </ol>
          </div>
        </div>

        <div className="bg-red-600 text-white rounded-xl p-8 text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Ready to Secure the Digital World?</h2>
          <p className="mb-4 text-red-100">If you love solving puzzles, finding loopholes, and protecting people from cyber threats, this is your path. Start learning Linux and Python today!</p>
          <Link to="/courses" className="bg-white text-red-600 px-6 py-2 rounded font-semibold hover:bg-red-50 inline-block">View Learning Paths</Link>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <h3 className="font-bold text-blue-900 mb-2">💡 Pro Tips to Get Started</h3>
          <ul className="text-sm text-blue-900 space-y-1">
            <li>1. Learn Linux first (free on VirtualBox) - it's 80% of ethical hacking</li>
            <li>2. Get comfortable with Python scripting before buying expensive courses</li>
            <li>3. Practice on HackTheBox and TryHackMe (free platforms) for 6 months before CEH</li>
            <li>4. Join bug bounty platforms early to build portfolio and earn money</li>
            <li>5. Read actual CVE reports to understand real vulnerabilities</li>
            <li>6. Network with security professionals on Twitter/LinkedIn/Discord communities</li>
            <li>7. OSCP is the gold standard - invest in it after 2-3 years of experience</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EthicalHackerDetails;
