import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, AlertCircle, TrendingUp } from 'lucide-react';

const CloudEngineerDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-600">
          <Link to="/" className="hover:text-cyan-600">Home</Link> / <Link to="/engineering" className="hover:text-cyan-600">Engineering</Link> / <span className="font-medium">Cloud Engineer</span>
        </div>
      </div>

      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Cloud className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-2">Cloud Engineer</h1>
          <p className="text-xl text-cyan-100">Design, deploy, and manage scalable cloud infrastructure on AWS, Azure, and GCP</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-orange-900 text-xl mb-2">☁️ Reality Check</h3>
              <p className="text-orange-800"><span className="font-bold">Cloud is the future: ₹10-18 LPA entry, ₹70+ LPA senior roles</span>. 20% yearly growth. But requires 24/7 on-call support, certifications cost ₹6-15K each, and platforms update constantly. One misconfiguration = company loss of millions!</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8 text-center">
          <div className="bg-yellow-50 p-6 rounded-xl">
            <div className="text-2xl font-bold text-yellow-700">₹10-18 LPA</div>
            <div className="text-sm text-gray-600">Entry level engineer</div>
          </div>
          <div className="bg-cyan-50 p-6 rounded-xl">
            <div className="text-2xl font-bold text-cyan-700">₹35-50 LPA</div>
            <div className="text-sm text-gray-600">Senior/Lead engineer</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="text-2xl font-bold text-blue-700">₹70+ LPA</div>
            <div className="text-sm text-gray-600">Principal architect</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border shadow">
            <h3 className="font-bold text-green-600 mb-3">✅ Why Cloud Engineering</h3>
            <ul className="text-sm space-y-2">
              <li>✓ Extreme demand (companies migrating to cloud)</li>
              <li>✓ High salaries & rapid growth</li>
              <li>✓ Remote work friendly</li>
              <li>✓ Global job opportunities</li>
              <li>✓ Certifications are prestigious</li>
              <li>✓ Freelance/consulting potential</li>
              <li>✓ Work-life balance (in good companies)</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border shadow">
            <h3 className="font-bold text-red-600 mb-3">⚠️ Challenges</h3>
            <ul className="text-sm space-y-2">
              <li>✗ 24/7 on-call support required</li>
              <li>✗ Platforms update constantly</li>
              <li>✗ Expensive certifications (₹6-15K each)</li>
              <li>✗ High responsibility (critical infrastructure)</li>
              <li>✗ Security concerns increasing</li>
              <li>✗ Steep learning curve initially</li>
              <li>✗ Production incident stress</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">💰 Salary Breakdown</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="border-l-4 border-yellow-500 pl-4">
              <div className="font-bold text-gray-700">Junior Engineer (0-2 yrs)</div>
              <div className="text-xl font-bold text-yellow-600">₹10-15 LPA</div>
              <div className="text-xs text-gray-600 mt-1">Cloud basics, single platform</div>
            </div>
            <div className="border-l-4 border-cyan-500 pl-4">
              <div className="font-bold text-gray-700">Engineer (2-5 yrs)</div>
              <div className="text-xl font-bold text-cyan-600">₹20-35 LPA</div>
              <div className="text-xs text-gray-600 mt-1">Multi-cloud, DevOps, lead projects</div>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="font-bold text-gray-700">Senior Engineer (5-10 yrs)</div>
              <div className="text-xl font-bold text-blue-600">₹40-60 LPA</div>
              <div className="text-xs text-gray-600 mt-1">Architecture, mentoring, strategy</div>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="font-bold text-gray-700">Principal Architect (10+ yrs)</div>
              <div className="text-xl font-bold text-purple-600">₹70+ LPA</div>
              <div className="text-xs text-gray-600 mt-1">Company cloud strategy, innovation</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">🎯 Cloud Platforms Comparison</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border-2 border-orange-300 p-4 rounded-lg">
              <h3 className="font-bold text-orange-700 mb-2">AWS (Market Leader)</h3>
              <p className="text-sm text-gray-700 mb-3">Market share: 33%, Most popular globally. Services: EC2, S3, Lambda, RDS, CloudWatch</p>
              <div className="text-xs bg-orange-50 p-2 rounded">Certifications: AWS Solutions Architect, Developer, SysOps Admin</div>
            </div>
            <div className="border-2 border-blue-300 p-4 rounded-lg">
              <h3 className="font-bold text-blue-700 mb-2">Microsoft Azure</h3>
              <p className="text-sm text-gray-700 mb-3">Market share: 23%, Enterprise focus. Services: Virtual Machines, App Service, Functions, Cosmos DB</p>
              <div className="text-xs bg-blue-50 p-2 rounded">Certifications: Azure Fundamentals, Associate, Expert levels</div>
            </div>
            <div className="border-2 border-red-300 p-4 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">Google Cloud (GCP)</h3>
              <p className="text-sm text-gray-700 mb-3">Market share: 11%, AI/ML strong. Services: Compute Engine, App Engine, BigQuery, Cloud Run</p>
              <div className="text-xs bg-red-50 p-2 rounded">Certifications: Associate Cloud Engineer, Professional Cloud Architect</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">🛠️ Essential Skills & Tools</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3">Core Technical Skills</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-cyan-600 mr-2">▸</span><strong>Linux Administration</strong> - Core requirement</li>
                <li className="flex items-center"><span className="text-cyan-600 mr-2">▸</span><strong>Docker & Containerization</strong> - Container basics</li>
                <li className="flex items-center"><span className="text-cyan-600 mr-2">▸</span><strong>Kubernetes</strong> - Container orchestration</li>
                <li className="flex items-center"><span className="text-cyan-600 mr-2">▸</span><strong>Infrastructure as Code (IaC)</strong> - Terraform, CloudFormation</li>
                <li className="flex items-center"><span className="text-cyan-600 mr-2">▸</span><strong>CI/CD Pipelines</strong> - Jenkins, GitLab CI, GitHub Actions</li>
                <li className="flex items-center"><span className="text-cyan-600 mr-2">▸</span><strong>Networking</strong> - VPCs, Load Balancers, DNS</li>
                <li className="flex items-center"><span className="text-cyan-600 mr-2">▸</span><strong>Security & Compliance</strong> - IAM, Encryption, HIPAA, GDPR</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Tools & Technologies</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-cyan-600 mr-2">▸</span><strong>Terraform</strong> - Infrastructure provisioning</li>
                <li className="flex items-center"><span className="text-cyan-600 mr-2">▸</span><strong>Ansible</strong> - Configuration management</li>
                <li className="flex items-center"><span className="text-cyan-600 mr-2">▸</span><strong>Jenkins/GitLab CI</strong> - CI/CD automation</li>
                <li className="flex items-center"><span className="text-cyan-600 mr-2">▸</span><strong>Prometheus/Grafana</strong> - Monitoring</li>
                <li className="flex items-center"><span className="text-cyan-600 mr-2">▸</span><strong>ELK Stack</strong> - Logging & analysis</li>
                <li className="flex items-center"><span className="text-cyan-600 mr-2">▸</span><strong>Git</strong> - Version control</li>
                <li className="flex items-center"><span className="text-cyan-600 mr-2">▸</span><strong>Bash/Python scripting</strong> - Automation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">🎓 Certifications (Critical for Career Growth)</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <div className="font-bold text-gray-800">AWS Solutions Architect Associate</div>
              <div className="text-sm text-gray-600">Cost: ₹6,000 exam | Preparation: 1-2 months | Most popular certification | Validity: 3 years</div>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="font-bold text-gray-800">Microsoft Azure Fundamentals (AZ-900)</div>
              <div className="text-sm text-gray-600">Cost: ₹6,000 exam | Preparation: 2-3 weeks | Entry-level | Validity: 1 year</div>
            </div>
            <div className="border-l-4 border-red-500 pl-4 py-2">
              <div className="font-bold text-gray-800">Google Associate Cloud Engineer</div>
              <div className="text-sm text-gray-600">Cost: ₹6,000 exam | Preparation: 1-2 months | Growing popularity | Validity: 2 years</div>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <div className="font-bold text-gray-800">Kubernetes Application Developer (CKAD)</div>
              <div className="text-sm text-gray-600">Cost: ₹1,95,000 | Preparation: 2-3 months | Hands-on exam | Validity: 3 years</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
            <h3 className="font-bold text-green-700 text-lg mb-3">✨ Best Companies</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Google Cloud</span><span className="text-green-600">₹16-70+ LPA</span></div>
              <div className="flex justify-between"><span>Microsoft Azure</span><span className="text-green-600">₹15-60+ LPA</span></div>
              <div className="flex justify-between"><span>Amazon AWS</span><span className="text-green-600">₹15-70+ LPA</span></div>
              <div className="flex justify-between"><span>Accenture Cloud</span><span className="text-green-600">₹12-40 LPA</span></div>
              <div className="flex justify-between"><span>TCS Cloud Services</span><span className="text-green-600">₹10-35 LPA</span></div>
              <div className="flex justify-between"><span>HashiCorp (Terraform)</span><span className="text-green-600">₹18-60+ LPA</span></div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 p-6 rounded-xl">
            <h3 className="font-bold text-blue-700 text-lg mb-3">📈 Growth Path</h3>
            <ol className="space-y-2 text-sm">
              <li><span className="font-bold">Year 0-1:</span> Learn Linux & cloud basics (Free resources)</li>
              <li><span className="font-bold">Year 1-2:</span> Get AWS/Azure cert, entry role (₹10-15 LPA)</li>
              <li><span className="font-bold">Year 2-4:</span> DevOps expertise, mid-level (₹20-35 LPA)</li>
              <li><span className="font-bold">Year 4-8:</span> Architecture knowledge, senior (₹40-60 LPA)</li>
              <li><span className="font-bold">Year 8+:</span> Principal architect, thought leader (₹70+ LPA)</li>
            </ol>
          </div>
        </div>

        <div className="bg-cyan-600 text-white rounded-xl p-8 text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Ready to Build the Cloud Infrastructure?</h2>
          <p className="mb-4 text-cyan-100">If you love automation, infrastructure scaling, and want to work on systems that serve millions of users, cloud engineering is perfect for you!</p>
          <Link to="/courses" className="bg-white text-cyan-600 px-6 py-2 rounded font-semibold hover:bg-cyan-50 inline-block">View Learning Paths</Link>
        </div>

        <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded">
          <h3 className="font-bold text-cyan-900 mb-2">💡 Pro Tips to Get Started</h3>
          <ul className="text-sm text-cyan-900 space-y-1">
            <li>1. Start with Linux - master command line, networking, permissions</li>
            <li>2. Pick one cloud platform (recommend AWS for job market)</li>
            <li>3. Build projects on free tier - AWS/Azure/GCP offer 12 months free</li>
            <li>4. Learn Docker before Kubernetes</li>
            <li>5. Understand Infrastructure as Code (Terraform is popular)</li>
            <li>6. Get AWS Solutions Architect Associate certification</li>
            <li>7. Practice on real production scenarios (CI/CD pipelines, scaling)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CloudEngineerDetails;
