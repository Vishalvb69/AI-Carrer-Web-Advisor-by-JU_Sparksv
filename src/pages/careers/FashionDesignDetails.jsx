import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Palette, 
  Award,
  BookOpen,
  Briefcase,
  Sparkles,
  Scissors,
  Target,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Building,
  Shirt,
  Eye,
  Layers,
  Compass
} from 'lucide-react'

const FashionDesignDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/arts" className="hover:text-blue-600 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Arts
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Fashion Design</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Creative Fashion Professional
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Fashion Design
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Create clothing, accessories, and textile designs for apparel brands, fashion houses, and boutiques. Combine creativity with technical skills in pattern-making, draping, and garment construction. A glamorous yet demanding career requiring strong portfolio and industry connections.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹2.5-6 LPA</div>
                  <div className="text-sm text-gray-200">Starting Package</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹10-40+ LPA</div>
                  <div className="text-sm text-gray-200">Established/Own Brand</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">3-4 Years</div>
                  <div className="text-sm text-gray-200">Degree Duration</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Shirt className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Apparel Design</h3>
                <p className="text-sm text-gray-200">Clothing Collections</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Layers className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Textile Design</h3>
                <p className="text-sm text-gray-200">Fabric & Patterns</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Eye className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Fashion Styling</h3>
                <p className="text-sm text-gray-200">Editorial & Celebrity</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Sparkles className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Accessories</h3>
                <p className="text-sm text-gray-200">Bags, Shoes, Jewelry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check Banner */}
      <section className="bg-amber-50 border-t-4 border-amber-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertTriangle className="h-6 w-6 text-amber-600 mr-2" />
            Reality Check: What They Don't Tell You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Highly Competitive - Thousands Graduate</h3>
              <p className="text-sm text-gray-700">50,000+ fashion design grads yearly. Portfolio quality matters more than degree. Only top 5% get design jobs, rest work in production/retail</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Portfolio is EVERYTHING</h3>
              <p className="text-sm text-gray-700">Your sketches, collections, photo shoots matter more than marks. Without strong portfolio, degree worthless. Must constantly create</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Freelance Income Unstable</h3>
              <p className="text-sm text-gray-700">Project-based work. ₹50K one month, ₹10K next. Wedding season busy, rest slow. Takes 5-7 years to stabilize income</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Glamour vs Reality Gap</h3>
              <p className="text-sm text-gray-700">Fashion weeks glamorous. But 90% work = production coordination, fabric sourcing, factory visits, quality checks. Not runway life</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Retail/Factory Hours NOT Glamorous</h3>
              <p className="text-sm text-gray-700">12-14 hour days during fashion weeks. Weekend work common. Standing in showrooms. Factory visits hot/noisy. Physical demands high</p>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <DollarSign className="h-8 w-8 text-green-600 mr-3" />
            Salary Expectations (India)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Fresh Graduate/Intern</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹2.5-4 LPA</div>
              <p className="text-sm text-gray-600 mb-4">0-2 years, learning</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Fashion house intern: ₹2.5-3.5 LPA</li>
                <li>• Design assistant: ₹3-4 LPA</li>
                <li>• Retail designer: ₹2.5-3.5 LPA</li>
                <li>• Freelance (starting): ₹15-30K/month</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Designer/Stylist</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">₹4-10 LPA</div>
              <p className="text-sm text-gray-600 mb-4">2-5 years experience</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Fashion designer: ₹4-8 LPA</li>
                <li>• Textile designer: ₹4-7 LPA</li>
                <li>• Fashion stylist: ₹5-10 LPA</li>
                <li>• Merchandiser: ₹5-9 LPA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Senior Designer/Manager</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹10-20 LPA</div>
              <p className="text-sm text-gray-600 mb-4">5-10 years, specialist</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Senior designer: ₹10-15 LPA</li>
                <li>• Design head: ₹12-18 LPA</li>
                <li>• Celebrity stylist: ₹10-20 LPA</li>
                <li>• Merchandising manager: ₹10-16 LPA</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-sm border-2 border-orange-300">
              <h3 className="text-lg font-semibold mb-2">Own Brand/Creative Director</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">₹15-60L+</div>
              <p className="text-sm text-gray-600 mb-4">10+ years, established</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Own fashion label: ₹15-40 LPA</li>
                <li>• Celebrity designer: ₹25-60 LPA</li>
                <li>• Creative director: ₹20-45 LPA</li>
                <li>• International brands: $50-100K</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Work & Responsibilities */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            What Fashion Designers Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Key Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Palette className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Design Development:</strong> Sketch designs, create mood boards, select fabrics, develop color palettes</span>
                </li>
                <li className="flex items-start">
                  <Scissors className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Pattern Making &amp; Draping:</strong> Create patterns, drape on mannequins, fit adjustments, sample creation</span>
                </li>
                <li className="flex items-start">
                  <Building className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Production Coordination:</strong> Factory liaison, quality control, costing, sourcing materials</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Client/Marketing:</strong> Client meetings, fashion shows, portfolio shoots, social media branding</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Typical Work Breakdown</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Design &amp; Sketching (30%)</h4>
                  <p className="text-sm text-gray-700">Conceptualize collections, create sketches, mood boards, trend research</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Production Work (40%)</h4>
                  <p className="text-sm text-gray-700">Factory visits, fabric sourcing, quality checks, pattern corrections, samples</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Client/Marketing (20%)</h4>
                  <p className="text-sm text-gray-700">Client fittings, photoshoots, social media, fashion shows, networking</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Admin &amp; Business (10%)</h4>
                  <p className="text-sm text-gray-700">Costing, pricing, invoicing, vendor payments, accounting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Path & Entrance Exams */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
            Education Path &amp; Top Institutes
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border mb-8">
            <h3 className="text-xl font-semibold mb-6">Undergraduate Programs (3-4 Years)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Top Government Institutes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>NIFT</strong> - 16 campuses (Delhi, Mumbai, Bangalore, etc.)</li>
                  <li>• <strong>NID Ahmedabad</strong> - Textile &amp; Apparel Design</li>
                  <li>• <strong>Govt Colleges</strong> - State fashion institutes</li>
                  <li><strong>Entrance:</strong> NIFT Entrance Exam, NID DAT</li>
                  <li><strong>Fees:</strong> ₹1.5-4L total (subsidized)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Top Private Institutes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pearl Academy - Delhi, Mumbai, Jaipur</li>
                  <li>• JD Institute of Fashion Technology</li>
                  <li>• IIFT Chandigarh - Fashion design</li>
                  <li>• Apeejay Institute - Fashion design</li>
                  <li><strong>Fees:</strong> ₹4-15L total</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-800"><strong>Entry:</strong> NIFT Entrance Exam (CAT + GAT), NID DAT for top colleges. Eligibility: 10+2 any stream. Duration: 4 years B.Des Fashion Design. Courses: Sketching, Pattern Making, Draping, Textiles, Fashion History, CAD, Portfolio Development. <strong>Reality:</strong> NIFT brand opens doors, but portfolio matters more than college name after 2-3 years</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">Postgraduate &amp; Specialization</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Masters Programs</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• M.Des Fashion Design (2 years)</li>
                  <li>• Textile specialization</li>
                  <li>• Fashion management MBA</li>
                  <li>• NIFT/NID master's programs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">International Exposure</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Parsons School of Design (NYC)</li>
                  <li>• Central Saint Martins (London)</li>
                  <li>• Polimoda (Italy)</li>
                  <li>• Very expensive but prestigious</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Short Courses</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Pattern making workshops</li>
                  <li>• Fashion illustration</li>
                  <li>• Adobe Illustrator/Photoshop</li>
                  <li>• Business of fashion</li>
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
            Essential Skills &amp; Qualities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Design Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Fashion sketching &amp; illustration</li>
                <li>• Pattern making &amp; draping</li>
                <li>• Color theory &amp; trends</li>
                <li>• Fabric knowledge (textiles)</li>
                <li>• Garment construction</li>
                <li>• Portfolio development</li>
                <li>• Fashion history &amp; trends</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Technical Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Adobe Suite</strong> - Illustrator, Photoshop</li>
                <li>• <strong>CAD Software</strong> - Pattern making tools</li>
                <li>• <strong>Sewing</strong> - Machine &amp; hand stitching</li>
                <li>• <strong>Photography</strong> - Portfolio shoots</li>
                <li>• <strong>Social media</strong> - Instagram, Pinterest</li>
                <li>• <strong>Costing</strong> - Material &amp; production</li>
                <li>• <strong>Quality control</strong> - Factory checks</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Soft Skills (CRITICAL!)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Creativity (constantly innovate)</li>
                <li>• Attention to detail (perfect fit)</li>
                <li>• Communication (client/vendors)</li>
                <li>• Networking (industry connections)</li>
                <li>• Business sense (costing/pricing)</li>
                <li>• Patience (multiple revisions)</li>
                <li>• Resilience (handle rejection)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Top Employers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Building className="h-8 w-8 text-blue-600 mr-3" />
            Career Paths in Fashion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border border-blue-200">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Fashion Houses &amp; Brands</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Luxury Brands</strong> - Sabyasachi, Manish Malhotra, Anita Dongre</li>
                <li><strong>High Street</strong> - Zara, H&amp;M, Mango design teams</li>
                <li><strong>Indian Brands</strong> - FabIndia, Biba, W, Westside</li>
                <li><strong>Export Houses</strong> - Orient Craft, Pearl Global</li>
                <li><strong>Fast Fashion</strong> - Myntra, Ajio in-house</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border border-green-200">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Specialized Roles</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Fashion Stylist</strong> - Celebrities, editorial shoots</li>
                <li><strong>Textile Designer</strong> - Fabric houses, print studios</li>
                <li><strong>Costume Designer</strong> - Films, TV, theater</li>
                <li><strong>Visual Merchandiser</strong> - Retail displays</li>
                <li><strong>Fashion Buyer</strong> - Retail chains</li>
                <li><strong>Trend Forecaster</strong> - Agencies</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border border-purple-200">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Freelance &amp; Entrepreneurship</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Own Label</strong> - Start fashion brand (most common)</li>
                <li><strong>Boutique</strong> - Custom design studio</li>
                <li><strong>Online Store</strong> - Instagram/website sales</li>
                <li><strong>Fashion Blogger</strong> - Content creation</li>
                <li><strong>Consultant</strong> - For brands/startups</li>
                <li><strong>Teaching</strong> - Fashion institutes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Year Roadmap */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Target className="h-8 w-8 text-purple-600 mr-3" />
            Career Roadmap in Fashion Design
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 0-2: Build Portfolio &amp; Learn Production</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Entry Level</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Internships:</strong> Work with designers (₹10-20K/month), learn production, factory visits, assist in collections</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Portfolio Building:</strong> Create 2-3 collections, do photoshoots, document work, build Instagram presence</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>First Job:</strong> Design assistant (₹2.5-4 LPA) or start freelance with family/friends as clients</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 2-5: Specialize &amp; Build Network</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Growth Phase</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Designer Role:</strong> (₹4-8 LPA) Work on collections independently, manage production, client interactions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Choose Specialization:</strong> Bridal, contemporary, sustainable, accessories. Become known for one thing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Start Own Brand:</strong> Many start small label on side, sell on Instagram, test market before full-time leap</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 5-10+: Establish Brand or Senior Role</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Established</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Senior Designer:</strong> (₹10-20 LPA) Design head at brand, creative direction, team management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Own Fashion Label:</strong> (₹15-40 LPA) Established brand, regular clientele, fashion week participation, boutique/online</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Options:</strong> Celebrity stylist, costume designer, international brands, teaching, consulting</span>
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
            Challenges &amp; Difficulty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                High Difficulty
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Building strong portfolio (takes years)</li>
                <li>• Standing out (50K+ designers)</li>
                <li>• Stabilizing freelance income</li>
                <li>• Factory/production coordination</li>
                <li>• Funding own label (₹10-25L needed)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                Moderate Challenges
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pattern making &amp; draping</li>
                <li>• Adobe Illustrator/Photoshop</li>
                <li>• Fabric knowledge (textiles)</li>
                <li>• Costing &amp; pricing</li>
                <li>• Client management</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Manageable Aspects
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Fashion sketching basics</li>
                <li>• Trend research</li>
                <li>• Social media marketing</li>
                <li>• Basic sewing skills</li>
                <li>• Networking at events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Specializations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Compass className="h-8 w-8 text-purple-600 mr-3" />
            Fashion Specialization Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Shirt className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Apparel Design</h3>
              <p className="text-gray-600 mb-4 text-sm">Design clothing collections, ethnic wear, western wear, bridal, contemporary fashion</p>
              <div className="bg-pink-100 text-pink-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹3-35 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Layers className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Textile Design</h3>
              <p className="text-gray-600 mb-4 text-sm">Fabric design, print design, weaving, embroidery, dyeing techniques, surface ornamentation</p>
              <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹2.5-25 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Eye className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fashion Styling</h3>
              <p className="text-gray-600 mb-4 text-sm">Celebrity styling, editorial shoots, personal shopping, wardrobe consulting, red carpet</p>
              <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹3-30 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Sparkles className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Accessory Design</h3>
              <p className="text-gray-600 mb-4 text-sm">Bags, footwear, jewelry, belts, scarves design. High margins, lower production complexity</p>
              <div className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹2.5-22 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Building className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fashion Merchandising</h3>
              <p className="text-gray-600 mb-4 text-sm">Retail buying, visual merchandising, trend forecasting, inventory planning, brand management</p>
              <div className="bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹3-28 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Palette className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Costume Design</h3>
              <p className="text-gray-600 mb-4 text-sm">Film, TV, theater costumes. High-profile work with celebrities, creative freedom, good pay</p>
              <div className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹4-40 LPA</div>
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
                  <span className="text-gray-700"><strong>Creative Expression:</strong> Design what you imagine, artistic freedom, see your ideas come to life</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Entrepreneurship Friendly:</strong> Easy to start own label, many designers self-employed, Instagram marketing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Diverse Career Paths:</strong> Apparel, styling, textiles, costume, merchandising, teaching - many options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Glamorous Industry:</strong> Fashion weeks, photoshoots, celebrity interactions, travel, social events</span>
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
                  <span className="text-gray-700"><strong>Highly Competitive:</strong> 50,000+ graduates yearly, only 5% get design jobs, rest in production/retail/teaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Unstable Income:</strong> Freelance earnings fluctuate wildly, takes 5-7 years to stabilize, seasonal business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Reality vs Glamour:</strong> 90% work = production coordination, factory visits, not fashion weeks. Physically demanding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>High Initial Investment:</strong> Starting own label needs ₹10-25L. Portfolio building expensive (photoshoots, materials)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Build a Career in Fashion Design</h2>
          <p className="text-xl text-purple-100 mb-8">
            Fashion design is perfect for creative individuals passionate about clothing, trends, and aesthetics. While competition is fierce and income unstable initially, the satisfaction of seeing your designs worn and potential for entrepreneurship make it rewarding. Focus on building a strong portfolio, choose NIFT/NID if possible, and start freelancing on the side to test the market. Most successful designers eventually launch their own labels. Be prepared for production reality beyond glamorous fashion weeks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/arts" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore More Arts Careers
            </Link>
            <Link 
              to="/stream-selection" 
              className="bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-900 transition-colors border-2 border-white"
            >
              Compare All Streams
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FashionDesignDetails
