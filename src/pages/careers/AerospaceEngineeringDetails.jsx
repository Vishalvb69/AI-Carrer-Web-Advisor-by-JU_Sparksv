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
  Plane,
  Rocket,
  Brain,
  Target,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Shield,
  Cpu
} from 'lucide-react'

const AerospaceEngineeringDetails = () => {
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
            <span className="text-gray-900 font-medium">Aerospace Engineering</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Sky & Space Engineering
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Aerospace Engineering
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Design, develop, and test aircraft, spacecraft, satellites, and missiles. Work on cutting-edge technology that reaches beyond Earth's atmosphere.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹6-25 LPA</div>
                  <div className="text-sm text-gray-200">Starting Package</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹15-50+ LPA</div>
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
                <Plane className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Aeronautical</h3>
                <p className="text-sm text-gray-200">Aircraft & Aviation</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Rocket className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Astronautical</h3>
                <p className="text-sm text-gray-200">Spacecraft & Satellites</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Target className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Defense Systems</h3>
                <p className="text-sm text-gray-200">Missiles & UAVs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Globe className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Space Tech</h3>
                <p className="text-sm text-gray-200">ISRO & Research</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Work & Responsibilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            What Aerospace Engineers Actually Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Daily Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Design & Analysis:</strong> Use CAD software (CATIA, SolidWorks) to design components, run aerodynamic simulations, perform stress analysis</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Testing & Validation:</strong> Conduct wind tunnel tests, flight tests, analyze data to ensure safety and performance standards</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Team Collaboration:</strong> Work with mechanical, electrical, software teams on integrated systems</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Documentation:</strong> Write technical reports, maintain design logs, prepare compliance documentation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Key Focus Areas</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Aerodynamics (30%)</h4>
                  <p className="text-sm text-gray-700">Airflow analysis, drag reduction, lift optimization, CFD simulations</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Structures (25%)</h4>
                  <p className="text-sm text-gray-700">Material selection, stress analysis, weight optimization, structural integrity</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Propulsion (20%)</h4>
                  <p className="text-sm text-gray-700">Engine performance, fuel efficiency, thrust calculations, propulsion systems</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Flight Mechanics (15%)</h4>
                  <p className="text-sm text-gray-700">Stability and control, trajectory planning, flight testing, avionics integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Path & Entrance Exams */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
            Education Path & Top Colleges
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border mb-8">
            <h3 className="text-xl font-semibold mb-6">Undergraduate (B.Tech Aerospace)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Top IITs (via JEE Advanced)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• IIT Bombay - Best aerospace program</li>
                  <li>• IIT Kanpur - Strong research focus</li>
                  <li>• IIT Madras - Excellent placement record</li>
                  <li>• IIT Kharagpur - Defense connections</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Other Top Colleges</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• IIST Trivandrum - Direct ISRO recruitment</li>
                  <li>• MIT Manipal - Good industry exposure</li>
                  <li>• PES University - Aviation focus</li>
                  <li>• Hindustan University - Industry partnerships</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-800"><strong>Entry Requirements:</strong> JEE Main (for NITs), JEE Advanced (for IITs), IIST Entrance Exam, State CETs. Required: Physics, Chemistry, Mathematics in 12th</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">Postgraduate (M.Tech/MS for Specialization)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Specializations</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Aerodynamics</li>
                  <li>• Propulsion Systems</li>
                  <li>• Aerospace Structures</li>
                  <li>• Avionics</li>
                  <li>• Space Technology</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Top Institutes</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• IITs (all major ones)</li>
                  <li>• IISc Bangalore</li>
                  <li>• IIST Trivandrum</li>
                  <li>• NAL Bangalore</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Entry via GATE</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• GATE (AE Paper)</li>
                  <li>• 2 years duration</li>
                  <li>• Required for top research/ISRO roles</li>
                  <li>• Stipend available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Required */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="h-8 w-8 text-yellow-600 mr-3" />
            Essential Skills & Software
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Technical Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Aerodynamics & Fluid Mechanics</li>
                <li>• Aircraft Structures & Materials</li>
                <li>• Propulsion Systems Design</li>
                <li>• Flight Mechanics & Control</li>
                <li>• Avionics & Systems Integration</li>
                <li>• Computational Fluid Dynamics (CFD)</li>
                <li>• Finite Element Analysis (FEA)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Software Proficiency</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>CATIA V5/V6</strong> - Industry standard CAD</li>
                <li>• <strong>ANSYS</strong> - Structural/Fluent/CFX</li>
                <li>• <strong>MATLAB/Simulink</strong> - Analysis</li>
                <li>• <strong>SolidWorks/CREO</strong> - Design</li>
                <li>• <strong>NASTRAN/PATRAN</strong> - FEA</li>
                <li>• <strong>Python</strong> - Automation & data</li>
                <li>• <strong>LabVIEW</strong> - Testing systems</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Soft Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Extreme attention to detail (safety critical)</li>
                <li>• Problem-solving under constraints</li>
                <li>• Team collaboration across disciplines</li>
                <li>• Technical documentation skills</li>
                <li>• Project management abilities</li>
                <li>• Continuous learning mindset</li>
                <li>• Communication with stakeholders</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Top Employers */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Globe className="h-8 w-8 text-blue-600 mr-3" />
            Top Aerospace Employers in India
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border border-orange-200">
              <h3 className="font-semibold text-lg mb-4 text-orange-900">Government/PSU</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>ISRO</strong> - Indian Space Research Organisation</li>
                <li><strong>HAL</strong> - Hindustan Aeronautics Limited</li>
                <li><strong>DRDO</strong> - Defense Research & Development</li>
                <li><strong>NAL</strong> - National Aerospace Laboratories</li>
                <li><strong>BEL</strong> - Bharat Electronics</li>
                <li><strong>ADA</strong> - Aeronautical Development Agency</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border border-blue-200">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Private MNCs</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Boeing India</strong> - Design & manufacturing</li>
                <li><strong>Airbus Group India</strong> - Engineering center</li>
                <li><strong>Rolls-Royce India</strong> - Engine technology</li>
                <li><strong>Honeywell Aerospace</strong> - Avionics</li>
                <li><strong>GE Aviation India</strong> - Propulsion systems</li>
                <li><strong>Safran India</strong> - Aircraft equipment</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border border-green-200">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Airlines & Startups</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Air India Engineering</strong> - MRO</li>
                <li><strong>IndiGo MRO</strong> - Maintenance</li>
                <li><strong>SpiceJet Technic</strong> - Engineering</li>
                <li><strong>Skyroot Aerospace</strong> - Space startup</li>
                <li><strong>Agnikul Cosmos</strong> - Rocket tech</li>
                <li><strong>Bellatrix Aerospace</strong> - Propulsion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Year Roadmap */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Target className="h-8 w-8 text-purple-600 mr-3" />
            5-Year Career Roadmap
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 1-2: Foundation Building</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Entry Level</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Learn Industry Standards:</strong> Master CATIA V5/V6, learn aerospace design guidelines (MIL-STD, AS9100)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Junior Engineer Role:</strong> Work on sub-system design, assist in testing, learn manufacturing processes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Certifications:</strong> Consider GATE for PSU jobs or M.Tech admission, pursue CAD certifications</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 3-4: Specialization & Growth</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Mid-Level</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Choose Specialization:</strong> Aerodynamics, Propulsion, Structures, Avionics, or Space Systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Lead Projects:</strong> Take ownership of component design, mentor juniors, interface with clients</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Advanced Learning:</strong> Pursue M.Tech (IITs/IISc) or online courses in CFD, FEA, or space technology</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 5+: Leadership & Expertise</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Senior Level</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Technical Leadership:</strong> Lead design teams, make critical technical decisions, represent company in forums</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Career Paths:</strong> Choose between technical expert track (Chief Engineer) or management (Program Manager)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Research/Academia:</strong> Option to pursue PhD, join ISRO as scientist, or teach at IITs/NITs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Difficulty Breakdown */}
      <section className="bg-gray-50 py-16">
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
                <li>• Fluid Dynamics & Aerodynamics theory</li>
                <li>• Compressible flow & gas dynamics</li>
                <li>• Flight Mechanics & stability analysis</li>
                <li>• Advanced propulsion systems</li>
                <li>• Aerospace structural analysis</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                Moderate Difficulty
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• CAD software (CATIA, SolidWorks)</li>
                <li>• Material science & manufacturing</li>
                <li>• Control systems & avionics basics</li>
                <li>• CFD & FEA software operations</li>
                <li>• Engineering mathematics</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Manageable Topics
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Engineering drawing & basics</li>
                <li>• Workshop practices</li>
                <li>• Basic mechanics & thermodynamics</li>
                <li>• Safety protocols & regulations</li>
                <li>• Technical documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Specializations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Rocket className="h-8 w-8 text-purple-600 mr-3" />
            Career Specializations & Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Rocket className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Aerodynamics</h3>
              <p className="text-gray-600 mb-4 text-sm">Design efficient aircraft shapes, reduce drag, optimize lift performance using CFD</p>
              <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹6-25 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Zap className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Propulsion Systems</h3>
              <p className="text-gray-600 mb-4 text-sm">Jet engines, rocket motors, turbines, fuel efficiency, thrust optimization</p>
              <div className="bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹8-30 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Shield className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Aircraft Structures</h3>
              <p className="text-gray-600 mb-4 text-sm">Material selection, stress analysis, weight optimization, structural integrity</p>
              <div className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹6-22 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Cpu className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Avionics & Control</h3>
              <p className="text-gray-600 mb-4 text-sm">Flight control systems, navigation, autopilot, electronics integration</p>
              <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹7-28 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Globe className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Space Technology</h3>
              <p className="text-gray-600 mb-4 text-sm">Satellites, launch vehicles, orbital mechanics, space missions (ISRO focus)</p>
              <div className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹8-35 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Target className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">UAV & Drones</h3>
              <p className="text-gray-600 mb-4 text-sm">Unmanned systems, autonomous flight, surveillance, commercial drone tech</p>
              <div className="bg-red-100 text-red-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹5-20 LPA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check Banner */}
      <section className="bg-amber-50 border-t-4 border-amber-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Reality Check</h3>
              <div className="text-amber-800 space-y-2">
                <p className="font-medium">• Limited Companies: Only 50-70 major aerospace employers in India (HAL, ISRO, DRDO, Boeing India, Airbus, SpiceJet, IndiGo MRO)</p>
                <p className="font-medium">• Highly Competitive: Only top 10-15% of graduates get core aerospace roles; others pivot to mechanical/software</p>
                <p className="font-medium">• Defense-Heavy: 60% of opportunities are in defense sector requiring security clearances</p>
                <p className="font-medium">• Location-Specific: Most jobs in Bangalore, Hyderabad, Mumbai, Pune - limited geographical flexibility</p>
                <p className="font-medium">• Advanced Degree Preferred: M.Tech/PhD often required for ISRO, research roles - B.Tech alone may not suffice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            <DollarSign className="inline h-8 w-8 mr-2" />
            Earnings Breakdown
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
              <div className="text-sm text-gray-600 mb-2">Fresh Graduate (0-2 years)</div>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹6-12 LPA</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• PSU: ₹6-9 LPA</li>
                <li>• Private MNC: ₹8-12 LPA</li>
                <li>• Startups: ₹6-10 LPA</li>
                <li>• ISRO/DRDO: ₹6.5-8 LPA</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
              <div className="text-sm text-gray-600 mb-2">Early Career (3-5 years)</div>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹10-18 LPA</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Design Engineer: ₹10-15 LPA</li>
                <li>• Systems Engineer: ₹12-18 LPA</li>
                <li>• Project Lead: ₹14-18 LPA</li>
                <li>• MNC (Boeing/Airbus): ₹15-20 LPA</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500">
              <div className="text-sm text-gray-600 mb-2">Mid-Career (6-10 years)</div>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹15-30 LPA</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Senior Engineer: ₹15-22 LPA</li>
                <li>• Program Manager: ₹20-28 LPA</li>
                <li>• Chief Engineer: ₹22-30 LPA</li>
                <li>• ISRO Scientist 'E': ₹15-20 LPA</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-orange-500">
              <div className="text-sm text-gray-600 mb-2">Senior (10+ years)</div>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹25-50+ LPA</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Director: ₹30-45 LPA</li>
                <li>• Chief Scientist: ₹25-40 LPA</li>
                <li>• VP Engineering: ₹40-60 LPA</li>
                <li>• Research Head: ₹35-50+ LPA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-16 bg-gray-50">
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
                  <span className="text-gray-700"><strong>Cutting-Edge Technology:</strong> Work on advanced aerospace systems, space missions, and defense projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Prestige & Pride:</strong> Contribute to national defense, space programs (ISRO missions), aviation safety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Global Opportunities:</strong> Skills transferable to US, Europe aerospace industries (Boeing, Airbus, NASA, SpaceX)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Job Security:</strong> PSU/Government jobs (ISRO, HAL, DRDO) offer excellent stability and benefits</span>
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
                  <span className="text-gray-700"><strong>Limited Opportunities:</strong> Very few aerospace-specific companies in India compared to software/IT</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>High Competition:</strong> Only 10-15% get core jobs; others shift to mechanical, software, or non-core roles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Lower Initial Pay:</strong> Starting salaries lower than software (₹6-12 LPA vs ₹15-25 LPA in tech)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Limited Colleges:</strong> Only 20-25 colleges in India offer B.Tech Aerospace; requires very high JEE rank</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rocket className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to Reach for the Stars?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Aerospace engineering offers the chance to work on technology that literally touches the sky and beyond. 
            While opportunities are competitive, the impact and satisfaction are unmatched for those passionate about flight and space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/engineering" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore More Engineering Fields
            </Link>
            <Link 
              to="/stream-selection" 
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors border-2 border-white"
            >
              Compare All Streams
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AerospaceEngineeringDetails
