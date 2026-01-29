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
  Smile,
  Heart,
  Scissors,
  Brain,
  Target,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Shield,
  Building,
  Sparkles,
  Activity
} from 'lucide-react'

const DentistryDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/medical" className="hover:text-blue-600 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Medical
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Dentistry (BDS)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Oral Health Specialist
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Dentistry (BDS)
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Diagnose and treat oral health issues, perform dental procedures, and help patients maintain healthy teeth and gums. Work as a general dentist or specialize in orthodontics, oral surgery, or cosmetic dentistry.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹4-15 LPA</div>
                  <div className="text-sm text-gray-200">Starting Package</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹15-50+ LPA</div>
                  <div className="text-sm text-gray-200">Own Clinic/Senior</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">5 Years</div>
                  <div className="text-sm text-gray-200">BDS + Internship</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Smile className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">General Dentistry</h3>
                <p className="text-sm text-gray-200">Routine Care</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Sparkles className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Orthodontics</h3>
                <p className="text-sm text-gray-200">Braces & Alignment</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Scissors className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Oral Surgery</h3>
                <p className="text-sm text-gray-200">Extractions & Implants</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Heart className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Cosmetic</h3>
                <p className="text-sm text-gray-200">Veneers & Whitening</p>
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
              <h3 className="font-semibold mb-2">Initial Investment is HIGH</h3>
              <p className="text-sm text-gray-700">Setting up clinic costs ₹25-50 lakhs (chair, X-ray, sterilization, tools). ROI takes 3-5 years. Jobs pay only ₹30-50K/month initially</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Not as Prestigious as MBBS</h3>
              <p className="text-sm text-gray-700">Society sees dentists as "lesser doctors". Constant comparison with MBBS graduates. BDS cutoff is lower in NEET</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Physical Strain & Repetitive</h3>
              <p className="text-sm text-gray-700">Back pain, neck issues, eye strain from bending over patients all day. Same procedures daily can feel monotonous</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Competition from Quacks</h3>
              <p className="text-sm text-gray-700">Unqualified "RMP" dentists charge ₹100-200. You need to establish credibility, justify ₹500-1000 fees</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Location Matters A LOT</h3>
              <p className="text-sm text-gray-700">Metro cities = high income potential. Tier 2/3 cities = struggle to get enough patients willing to pay decent fees</p>
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
              <h3 className="text-lg font-semibold mb-2">Fresh BDS (Job)</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹3-8 LPA</div>
              <p className="text-sm text-gray-600 mb-4">0-2 years as employee</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Private clinic job: ₹25-40K/month</li>
                <li>• Corporate dentistry: ₹4-7 LPA</li>
                <li>• Govt job (rare): ₹6-8 LPA</li>
                <li>• Teaching (lecturer): ₹5-8 LPA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Own Clinic (Initial)</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">₹8-20 LPA</div>
              <p className="text-sm text-gray-600 mb-4">2-5 years, building practice</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• 15-20 patients/day × ₹500 avg</li>
                <li>• Tier 2 city: ₹8-12 LPA</li>
                <li>• Metro city: ₹12-20 LPA</li>
                <li>• After loan EMIs &amp; expenses</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Established Practice</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹20-50 LPA</div>
              <p className="text-sm text-gray-600 mb-4">5-10 years, good location</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• 25-35 patients/day</li>
                <li>• Root canals, implants, crowns</li>
                <li>• Prime location clinic</li>
                <li>• Specialist (MDS): Higher fees</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-sm border-2 border-orange-300">
              <h3 className="text-lg font-semibold mb-2">Top Dentists/Chains</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">₹50L-2Cr+</div>
              <p className="text-sm text-gray-600 mb-4">10+ years / Multi-location</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Celebrity dentist: ₹1-2Cr+</li>
                <li>• Multi-clinic chains</li>
                <li>• Cosmetic specialist</li>
                <li>• Implant expert: ₹50L-1Cr</li>
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
            What Dentists Actually Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Daily Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Patient Consultation:</strong> Examine teeth/gums, diagnose cavities/gum disease, explain treatment plans</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Procedures:</strong> Fillings, root canals, extractions, scaling/cleaning, crowns, bridges</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Patient Management:</strong> Handle anxious patients, manage pain, give post-op instructions</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Documentation:</strong> Maintain patient records, X-ray reports, treatment history, prescriptions</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Typical Day Breakdown</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Routine Treatments (60%)</h4>
                  <p className="text-sm text-gray-700">Cleanings, fillings, simple extractions, check-ups, minor procedures</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Advanced Procedures (25%)</h4>
                  <p className="text-sm text-gray-700">Root canals, crowns/bridges, surgical extractions, implant planning</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Administrative (10%)</h4>
                  <p className="text-sm text-gray-700">Billing, inventory, staff management, marketing, patient follow-ups</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Emergencies (5%)</h4>
                  <p className="text-sm text-gray-700">Dental pain relief, trauma cases, infections, urgent extractions</p>
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
            <h3 className="text-xl font-semibold mb-6">Undergraduate (BDS - 5 Years)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Top Government Colleges</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• MAMC Delhi - Maulana Azad Institute</li>
                  <li>• KGM Dental College Lucknow</li>
                  <li>• Govt Dental College Bangalore</li>
                  <li>• Govt Dental College Mumbai</li>
                  <li>• PGIDS Rohtak</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Top Private Colleges</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Manipal College of Dental Sciences</li>
                  <li>• AB Shetty Dental College</li>
                  <li>• Saveetha Dental College Chennai</li>
                  <li>• Bharati Vidyapeeth Pune</li>
                  <li>• SRM Dental College</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-800"><strong>Entry via NEET UG:</strong> Govt college cutoff: 550-650/720. Private: 450-550. Course: 4 years academics + 1 year compulsory internship. Total fees: Govt ₹50K-3L, Private ₹15-50L</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">Postgraduate (MDS - 3 Years Specialization)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Top Specializations</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Orthodontics (braces)</li>
                  <li>• Oral Surgery</li>
                  <li>• Prosthodontics (crowns)</li>
                  <li>• Periodontics (gums)</li>
                  <li>• Endodontics (root canal)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Top Institutes</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MAMC Delhi</li>
                  <li>• PGIDS Rohtak</li>
                  <li>• Manipal</li>
                  <li>• KGM Lucknow</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Entry via NEET MDS</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• NEET MDS exam</li>
                  <li>• 3 years course</li>
                  <li>• Higher earning potential</li>
                  <li>• Fees: ₹10-80L</li>
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
            Essential Skills & Qualities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Clinical Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Manual dexterity (steady hands)</li>
                <li>• Good eyesight &amp; visual acuity</li>
                <li>• Cavity preparation &amp; filling</li>
                <li>• Root canal treatment</li>
                <li>• Extraction techniques</li>
                <li>• Crown &amp; bridge work</li>
                <li>• Local anesthesia administration</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Diagnostic &amp; Tools</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>X-ray interpretation</strong> - OPG/IOPA</li>
                <li>• <strong>Diagnosis</strong> - Cavities, gum disease</li>
                <li>• <strong>Treatment planning</strong> - Cases</li>
                <li>• <strong>Instruments</strong> - Dental tools</li>
                <li>• <strong>Digital dentistry</strong> - CAD/CAM</li>
                <li>• <strong>Infection control</strong> - Sterilization</li>
                <li>• <strong>Dental materials</strong> - Composites</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Soft Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Patient communication (anxiety mgmt)</li>
                <li>• Empathy &amp; compassion</li>
                <li>• Attention to detail (critical)</li>
                <li>• Physical stamina (standing)</li>
                <li>• Business acumen (own practice)</li>
                <li>• Marketing &amp; patient retention</li>
                <li>• Stress management</li>
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
            Career Paths for Dentists
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border border-blue-200">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Corporate Chains</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Clove Dental</strong> - Multi-city chain</li>
                <li><strong>Sabka Dentist</strong> - Affordable care</li>
                <li><strong>FMS Dental</strong> - Premium clinics</li>
                <li><strong>Smile Care</strong> - Corporate brand</li>
                <li><strong>Apollo White</strong> - Hospital network</li>
                <li><strong>Fortis Dental</strong> - Hospital based</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border border-green-200">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Hospitals &amp; Govt</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>AIIMS</strong> - Government hospital</li>
                <li><strong>Safdarjung</strong> - Govt Delhi</li>
                <li><strong>Govt Medical Colleges</strong> - Teaching</li>
                <li><strong>Armed Forces</strong> - Defense dentist</li>
                <li><strong>Railway Hospitals</strong> - PSU</li>
                <li><strong>State Health Dept</strong> - PHCs</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border border-purple-200">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Own Practice (Most Common)</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Solo Clinic</strong> - Independent practice</li>
                <li><strong>Group Practice</strong> - Partner with others</li>
                <li><strong>Polyclinic</strong> - Multi-specialty</li>
                <li><strong>Franchise</strong> - Brand partnership</li>
                <li><strong>Home Visits</strong> - Mobile dentistry</li>
                <li><strong>Teaching</strong> - Dental college faculty</li>
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
            Career Roadmap After BDS
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 0-1: Internship &amp; Initial Experience</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Fresh Graduate</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Complete Internship:</strong> 1 year rotating through different departments, gain hands-on experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Get Registered:</strong> State Dental Council registration, prepare for job hunt or own clinic</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Decision Point:</strong> Job (₹30-50K/month) vs Own clinic (₹25-50L investment) vs MDS prep</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 1-3: Building Foundation</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Early Career</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>If Job:</strong> Work in corporate/private clinic, learn patient management, save ₹10-15L for own clinic</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>If Own Clinic:</strong> Build patient base (15-20/day initially), establish reputation, break-even in 2-3 years</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>If MDS:</strong> Prepare NEET MDS, pursue specialization (Orthodontics/Oral Surgery most lucrative)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 3-10+: Established Practice</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Senior Level</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Scale Up:</strong> 25-35 patients/day, hire associates, offer advanced treatments (implants, cosmetic)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>MDS Specialists:</strong> Higher fees, brand building, speak at conferences, possibly multi-location</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Options:</strong> Expand to 2-3 clinics, focus on cosmetic niche, or switch to teaching/consulting</span>
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
            BDS Course Difficulty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                High Difficulty
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Oral Surgery (complex extractions)</li>
                <li>• Prosthodontics (crown/bridge precision)</li>
                <li>• Orthodontics (biomechanics)</li>
                <li>• Anatomy (head &amp; neck detailed)</li>
                <li>• Manual skills (fine motor control)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                Moderate Difficulty
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Conservative Dentistry (fillings)</li>
                <li>• Periodontics (gum treatments)</li>
                <li>• Endodontics (root canals)</li>
                <li>• Oral Medicine (diagnosis)</li>
                <li>• Radiology (X-ray interpretation)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Manageable Topics
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Dental materials basics</li>
                <li>• Oral hygiene &amp; prevention</li>
                <li>• Patient communication</li>
                <li>• Infection control protocols</li>
                <li>• Community dentistry</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Specializations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Smile className="h-8 w-8 text-purple-600 mr-3" />
            MDS Specializations (After BDS)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Sparkles className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Orthodontics</h3>
              <p className="text-gray-600 mb-4 text-sm">Braces, aligners, teeth alignment, jaw correction - most sought-after specialization</p>
              <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹15-60 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Scissors className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Oral & Maxillofacial Surgery</h3>
              <p className="text-gray-600 mb-4 text-sm">Complex extractions, implants, jaw surgery, trauma - surgical specialist</p>
              <div className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹12-50 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Building className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Prosthodontics</h3>
              <p className="text-gray-600 mb-4 text-sm">Crowns, bridges, dentures, implants - replacement &amp; restoration of teeth</p>
              <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹10-45 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Heart className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Periodontics</h3>
              <p className="text-gray-600 mb-4 text-sm">Gum disease treatment, scaling, flap surgery, implant support, laser therapy</p>
              <div className="bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹8-35 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Activity className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Endodontics</h3>
              <p className="text-gray-600 mb-4 text-sm">Root canal specialist, microsurgery, saving damaged teeth, pain management</p>
              <div className="bg-red-100 text-red-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹8-30 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Shield className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Pediatric Dentistry</h3>
              <p className="text-gray-600 mb-4 text-sm">Children's dental care, behavior management, preventive care, special needs</p>
              <div className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹7-30 LPA</div>
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
                  <span className="text-gray-700"><strong>Own Boss:</strong> 70% dentists run own clinics - independence, flexibility, no corporate politics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Work-Life Balance:</strong> Fixed hours (10am-7pm), Sundays off, no night shifts/emergencies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Respected Profession:</strong> Doctor status, helping people, trusted by patients, social respect</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Growing Market:</strong> Rising awareness, cosmetic dentistry boom, implants demand increasing</span>
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
                  <span className="text-gray-700"><strong>High Setup Cost:</strong> ₹25-50L clinic investment - bank loans needed, 3-5 year payback period</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Lower Than MBBS:</strong> Starting ₹30-50K/month jobs. Less prestige. NEET cutoff is lower</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Physical Strain:</strong> Back/neck/eye problems from bending. Repetitive work. Long standing hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Competition:</strong> Quacks charge ₹100-200. Need to prove value. Location makes or breaks practice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Smile className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Bring Smiles to Faces</h2>
          <p className="text-xl text-blue-100 mb-8">
            Dentistry offers a unique blend of medical science, manual skill, and entrepreneurship. While the initial investment is high, the long-term rewards of running your own practice, work-life balance, and patient satisfaction make it a fulfilling career for those passionate about oral health.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/medical" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore More Medical Careers
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

export default DentistryDetails
