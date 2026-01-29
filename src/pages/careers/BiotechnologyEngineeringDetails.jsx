import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Clock, 
  Award,
  BookOpen,
  Briefcase,
  Globe,
  Zap,
  Dna,
  Microscope,
  Brain,
  Target,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Shield,
  Leaf,
  Sprout,
  Activity
} from 'lucide-react'

const BiotechnologyEngineeringDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/engineering" className="hover:text-blue-600 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Engineering
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Biotechnology Engineering</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-teal-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Life Science Engineering
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Biotechnology Engineering
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Apply engineering principles to biological systems. Work on genetic engineering, drug development, biofuels, medical devices, and sustainable solutions at the intersection of biology and technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹4-15 LPA</div>
                  <div className="text-sm text-gray-200">Starting Package</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹10-35+ LPA</div>
                  <div className="text-sm text-gray-200">Mid-Career</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">4 Years</div>
                  <div className="text-sm text-gray-200">B.Tech Duration</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Microscope className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Pharma & Healthcare</h3>
                <p className="text-sm text-gray-200">Drug Development</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Dna className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Genetic Engineering</h3>
                <p className="text-sm text-gray-200">DNA & Gene Editing</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Leaf className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Agriculture</h3>
                <p className="text-sm text-gray-200">GM Crops & Seeds</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Sprout className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Biofuels</h3>
                <p className="text-sm text-gray-200">Renewable Energy</p>
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
              <h3 className="font-semibold mb-2">Lower Salaries Than CS/IT</h3>
              <p className="text-sm text-gray-700">Starting ₹4-8 LPA vs ₹15-25 LPA in software. Takes 5-7 years to reach good pay. Many switch to IT/data science</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Limited Campus Placements</h3>
              <p className="text-sm text-gray-700">Only 40-50% get core biotech jobs. Others move to pharma sales, quality control, or MBA/MSc for better prospects</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Higher Studies Almost Mandatory</h3>
              <p className="text-sm text-gray-700">M.Tech/MS/PhD often needed for good research roles. B.Tech alone limits you to lab technician/quality roles</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Slow Industry Growth in India</h3>
              <p className="text-sm text-gray-700">Biotech sector still developing. Most innovation abroad (US/Europe). Limited startups, heavy regulations</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Not Pure Biology</h3>
              <p className="text-sm text-gray-700">50% is engineering (thermodynamics, fluid mechanics, process control). If you hate math/physics, this isn't for you</p>
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
              <h3 className="text-lg font-semibold mb-2">Fresh Graduate</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹4-10 LPA</div>
              <p className="text-sm text-gray-600 mb-4">0-2 years experience</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Quality Control: ₹4-6 LPA</li>
                <li>• Lab Technician: ₹3.5-5 LPA</li>
                <li>• R&amp;D Associate: ₹5-8 LPA</li>
                <li>• Biotech startups: ₹6-10 LPA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Mid-Level</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">₹10-20 LPA</div>
              <p className="text-sm text-gray-600 mb-4">3-6 years experience</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Senior Scientist: ₹10-15 LPA</li>
                <li>• Process Engineer: ₹12-18 LPA</li>
                <li>• Product Manager: ₹14-22 LPA</li>
                <li>• Regulatory Affairs: ₹10-16 LPA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Senior Level</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹20-40 LPA</div>
              <p className="text-sm text-gray-600 mb-4">7-12 years experience</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• R&amp;D Manager: ₹20-30 LPA</li>
                <li>• Principal Scientist: ₹25-35 LPA</li>
                <li>• Technical Director: ₹28-40 LPA</li>
                <li>• MNC Roles (abroad): $60-100K</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-sm border-2 border-orange-300">
              <h3 className="text-lg font-semibold mb-2">Expert/Leadership</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">₹40L-1Cr+</div>
              <p className="text-sm text-gray-600 mb-4">12+ years / PhD holders</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• VP R&amp;D: ₹50-80 LPA</li>
                <li>• Chief Scientist: ₹60L-1Cr+</li>
                <li>• Biotech Entrepreneur: Variable</li>
                <li>• US/EU positions: $120-200K+</li>
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
            What Biotech Engineers Actually Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Daily Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Lab Research:</strong> Conduct experiments, cell culture, DNA/protein analysis, run PCR/ELISA tests</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Process Development:</strong> Scale up lab processes to production, optimize fermentation, purification methods</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Quality Control:</strong> Test product quality, ensure GMP compliance, validate manufacturing processes</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Data Analysis:</strong> Analyze experimental data, prepare reports, document findings, write research papers</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Key Focus Areas</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">R&amp;D (40%)</h4>
                  <p className="text-sm text-gray-700">New drug discovery, genetic modification, product development, innovation</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Production (25%)</h4>
                  <p className="text-sm text-gray-700">Fermentation, downstream processing, bioreactor operations, scale-up</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Quality/Regulatory (20%)</h4>
                  <p className="text-sm text-gray-700">Testing, validation, FDA/WHO compliance, documentation, audits</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Analysis (15%)</h4>
                  <p className="text-sm text-gray-700">Chromatography, spectroscopy, genomics, proteomics, bioinformatics</p>
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
            Education Path & Top Colleges
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border mb-8">
            <h3 className="text-xl font-semibold mb-6">Undergraduate (B.Tech Biotechnology)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Top IITs &amp; NITs</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• IIT Kharagpur - Oldest biotech program</li>
                  <li>• IIT Roorkee - Strong research</li>
                  <li>• NIT Warangal - Good placements</li>
                  <li>• NIT Rourkela - Emerging program</li>
                  <li>• NIT Durgapur - Decent reputation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Other Top Colleges</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• BITS Pilani - Excellent research</li>
                  <li>• DTU Delhi - Good industry connect</li>
                  <li>• VIT Vellore - Decent placements</li>
                  <li>• SRM University - Growing program</li>
                  <li>• Anna University - South focus</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-800"><strong>Entry Requirements:</strong> JEE Main, JEE Advanced (IITs), BITSAT, State CETs. PCM or PCB with Math in 12th (both biology AND math required in most colleges)</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">Postgraduate (M.Tech/MS/PhD - Highly Recommended)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Specializations</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Genetic Engineering</li>
                  <li>• Industrial Biotechnology</li>
                  <li>• Bioinformatics</li>
                  <li>• Medical Biotechnology</li>
                  <li>• Agricultural Biotech</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Top Institutes</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• IITs (all major ones)</li>
                  <li>• IISc Bangalore</li>
                  <li>• JNU Delhi</li>
                  <li>• AIIMS (research)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Entry via GATE</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• GATE (BT Paper)</li>
                  <li>• 2 years M.Tech</li>
                  <li>• 3-5 years PhD</li>
                  <li>• Stipend ₹12-35K/month</li>
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
            Essential Skills & Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Technical Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Molecular Biology &amp; Genetics</li>
                <li>• Cell Culture &amp; Microbiology</li>
                <li>• Biochemistry &amp; Immunology</li>
                <li>• Bioprocess Engineering</li>
                <li>• Genetic Engineering techniques</li>
                <li>• Protein Purification methods</li>
                <li>• GMP &amp; Quality Systems</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Lab Techniques &amp; Tools</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>PCR/qPCR</strong> - Gene amplification</li>
                <li>• <strong>ELISA/Western Blot</strong> - Protein tests</li>
                <li>• <strong>HPLC/GC</strong> - Chromatography</li>
                <li>• <strong>Spectroscopy</strong> - Analysis</li>
                <li>• <strong>Fermentation</strong> - Bioreactors</li>
                <li>• <strong>Python/R</strong> - Bioinformatics</li>
                <li>• <strong>CRISPR</strong> - Gene editing</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Soft Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Attention to detail (critical)</li>
                <li>• Patience for long experiments</li>
                <li>• Analytical thinking</li>
                <li>• Documentation skills</li>
                <li>• Team collaboration</li>
                <li>• Research mindset</li>
                <li>• Adaptability to failures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Top Employers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Globe className="h-8 w-8 text-blue-600 mr-3" />
            Top Biotechnology Employers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border border-blue-200">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Pharma &amp; Healthcare</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Biocon</strong> - Biopharmaceuticals</li>
                <li><strong>Serum Institute</strong> - Vaccines</li>
                <li><strong>Dr. Reddy's</strong> - Drug manufacturing</li>
                <li><strong>Cipla</strong> - Pharmaceutical R&amp;D</li>
                <li><strong>Novartis</strong> - Global pharma</li>
                <li><strong>Pfizer</strong> - Drug development</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border border-green-200">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Agri &amp; Industrial</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Bayer CropScience</strong> - GM crops</li>
                <li><strong>Monsanto</strong> - Seeds &amp; biotech</li>
                <li><strong>ITC Life Sciences</strong> - Agricultural</li>
                <li><strong>Syngenta</strong> - Crop protection</li>
                <li><strong>Tata Chemicals</strong> - Biochemicals</li>
                <li><strong>IFFCO</strong> - Bio-fertilizers</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border border-purple-200">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Research &amp; Startups</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>CSIR Labs</strong> - Government research</li>
                <li><strong>ICMR</strong> - Medical research</li>
                <li><strong>DBT</strong> - Dept of Biotechnology</li>
                <li><strong>Strand Life Sciences</strong> - Genomics</li>
                <li><strong>Bugworks</strong> - Antibiotics startup</li>
                <li><strong>Immuneel</strong> - Cancer therapy</li>
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
            5-Year Career Roadmap
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 1-2: Lab Skills &amp; Foundation</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Entry Level</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Master Lab Techniques:</strong> Learn PCR, ELISA, cell culture, chromatography, GMP protocols</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Entry Roles:</strong> Lab technician, QC analyst, research assistant - learn industry standards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Plan Ahead:</strong> Prepare for GATE/GRE for M.Tech/MS abroad - essential for growth</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 3-5: Specialization (Usually M.Tech/MS)</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Mid-Level</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Choose Domain:</strong> Industrial biotech, pharma, genomics, agricultural biotech, or bioinformatics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Higher Studies:</strong> M.Tech/MS opens doors to scientist roles, better pay, research opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Alternative:</strong> Move to data science/bioinformatics if core biotech pay is disappointing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 5+: Research/Leadership (Often PhD)</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Senior Level</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Senior Scientist:</strong> Lead R&amp;D projects, publish papers, manage teams, mentor juniors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>PhD Advantage:</strong> Required for principal scientist, director roles in top pharma/research orgs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Options:</strong> Stay in research, move to regulatory affairs, product management, or entrepreneurship</span>
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
            Difficulty Breakdown
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                High Difficulty
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Molecular Biology &amp; Genetics (complex)</li>
                <li>• Biochemistry pathways &amp; metabolism</li>
                <li>• Immunology &amp; cellular mechanisms</li>
                <li>• Bioprocess Engineering calculations</li>
                <li>• Genetic Engineering techniques</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                Moderate Difficulty
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Microbiology &amp; cell culture</li>
                <li>• Protein chemistry &amp; analysis</li>
                <li>• Fermentation technology</li>
                <li>• Downstream processing methods</li>
                <li>• Bioinformatics basics</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Manageable Topics
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Basic chemistry &amp; biology</li>
                <li>• Lab safety protocols</li>
                <li>• Quality control procedures</li>
                <li>• Documentation &amp; GMP</li>
                <li>• Environmental biotechnology basics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Specializations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Dna className="h-8 w-8 text-purple-600 mr-3" />
            Career Specializations & Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Microscope className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Pharmaceutical Biotech</h3>
              <p className="text-gray-600 mb-4 text-sm">Drug discovery, vaccine development, clinical trials, biologics production</p>
              <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹5-25 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Leaf className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Agricultural Biotech</h3>
              <p className="text-gray-600 mb-4 text-sm">GM crops, bio-fertilizers, pest control, seeds improvement, plant tissue culture</p>
              <div className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹4-18 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Dna className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Genetic Engineering</h3>
              <p className="text-gray-600 mb-4 text-sm">Gene editing (CRISPR), genomics, gene therapy, DNA sequencing, personalized medicine</p>
              <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹6-30 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Sprout className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Industrial Biotech</h3>
              <p className="text-gray-600 mb-4 text-sm">Biofuels, enzymes, bio-plastics, fermentation products, green chemistry</p>
              <div className="bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹5-22 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Activity className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Bioinformatics</h3>
              <p className="text-gray-600 mb-4 text-sm">Computational biology, genomics data, drug design, machine learning in biology</p>
              <div className="bg-red-100 text-red-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹7-35 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Shield className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Medical Devices</h3>
              <p className="text-gray-600 mb-4 text-sm">Biosensors, diagnostic kits, tissue engineering, biomaterials, implants</p>
              <div className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹6-28 LPA</div>
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
                  <span className="text-gray-700"><strong>Cutting-Edge Science:</strong> Work on gene editing, personalized medicine, next-gen vaccines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Meaningful Impact:</strong> Contribute to healthcare, food security, environmental solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Research Opportunities:</strong> Strong scope for PhD, publications, international collaborations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Future Growth:</strong> Biotech is booming globally - personalized medicine, CRISPR, AI+bio</span>
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
                  <span className="text-gray-700"><strong>Low Starting Pay:</strong> ₹4-8 LPA common - 50-70% less than software/IT graduates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Limited Jobs in India:</strong> Industry still developing - most innovation happens abroad (US/EU)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Higher Studies Essential:</strong> B.Tech alone limits options - M.Tech/PhD needed for good roles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Slow Career Growth:</strong> Takes 7-10 years to reach ₹20+ LPA (vs 3-4 years in software)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Dna className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Engineer Life Itself</h2>
          <p className="text-xl text-green-100 mb-8">
            Biotechnology offers the unique opportunity to work at the frontier of biology and engineering - solving critical challenges in healthcare, agriculture, and sustainability. Perfect for those passionate about science over high starting salaries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/engineering" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore More Engineering Fields
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

export default BiotechnologyEngineeringDetails
