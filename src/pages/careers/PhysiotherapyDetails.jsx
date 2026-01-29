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
  Activity,
  Zap,
  HeartPulse,
  Dumbbell,
  Target,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Shield,
  Building,
  Baby,
  Trophy,
  Brain
} from 'lucide-react'

const PhysiotherapyDetails = () => {
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
            <span className="text-gray-900 font-medium">Physiotherapy (BPT)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Movement & Rehabilitation Specialist
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Physiotherapy (BPT)
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Help patients recover from injuries, manage pain, restore movement, and improve quality of life through physical therapy, exercises, and rehabilitation techniques. Work in hospitals, sports clinics, or own practice.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹3-8 LPA</div>
                  <div className="text-sm text-gray-200">Starting Package</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹12-30+ LPA</div>
                  <div className="text-sm text-gray-200">Own Clinic/Senior</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">4.5 Years</div>
                  <div className="text-sm text-gray-200">BPT + Internship</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Trophy className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Sports Physio</h3>
                <p className="text-sm text-gray-200">Athletes & Teams</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Activity className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Orthopedic</h3>
                <p className="text-sm text-gray-200">Bones & Joints</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Brain className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Neurological</h3>
                <p className="text-sm text-gray-200">Stroke & Paralysis</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <HeartPulse className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Cardio-Pulmonary</h3>
                <p className="text-sm text-gray-200">Heart & Lungs</p>
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
              <h3 className="font-semibold mb-2">Lower Prestige Than Doctors</h3>
              <p className="text-sm text-gray-700">Often seen as "therapists" not doctors. Patients/hospitals may not give equal respect. BPT vs MBBS comparison hurts</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Physically Demanding Work</h3>
              <p className="text-sm text-gray-700">Standing 6-8 hours, manually stretching patients, lifting, bending. Back pain, knee issues common after 5-10 years</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Starting Salary is Low</h3>
              <p className="text-sm text-gray-700">₹15-30K/month in hospitals. Takes 3-5 years to build own practice. Growth slower than MBBS/BDS</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Insurance Coverage Limited</h3>
              <p className="text-sm text-gray-700">Health insurance rarely covers physiotherapy sessions. Out-of-pocket payments, limits patient willingness to pay</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Patient Compliance Issues</h3>
              <p className="text-sm text-gray-700">Patients skip sessions, don't do home exercises, blame therapist for slow progress. Frustrating outcomes</p>
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
              <h3 className="text-lg font-semibold mb-2">Fresh BPT (Job)</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹2.5-7 LPA</div>
              <p className="text-sm text-gray-600 mb-4">0-2 years as employee</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Hospital job: ₹20-35K/month</li>
                <li>• Private clinic: ₹15-30K/month</li>
                <li>• Home visit service: ₹3-5 LPA</li>
                <li>• Sports academy: ₹4-7 LPA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Mid-Level</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">₹6-15 LPA</div>
              <p className="text-sm text-gray-600 mb-4">3-7 years experience</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Own clinic: ₹6-12 LPA</li>
                <li>• Senior physiotherapist: ₹5-10 LPA</li>
                <li>• Sports team physio: ₹8-15 LPA</li>
                <li>• Hospital dept head: ₹7-12 LPA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Senior/Specialist</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹12-25 LPA</div>
              <p className="text-sm text-gray-600 mb-4">8-15 years, MPT specialist</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Multi-location clinics</li>
                <li>• Sports consultant (IPL/ISL)</li>
                <li>• Rehabilitation center owner</li>
                <li>• Corporate wellness head</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-sm border-2 border-orange-300">
              <h3 className="text-lg font-semibold mb-2">Top Physios/Chains</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">₹25-60L+</div>
              <p className="text-sm text-gray-600 mb-4">15+ years / Chain owner</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Celebrity sports physiotherapist</li>
                <li>• Multi-city chain owner</li>
                <li>• National team physiotherapist</li>
                <li>• Premium wellness centers</li>
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
            What Physiotherapists Actually Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Daily Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Patient Assessment:</strong> Evaluate mobility, pain levels, range of motion, muscle strength, functional limitations</span>
                </li>
                <li className="flex items-start">
                  <Dumbbell className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Treatment Sessions:</strong> Manual therapy, exercises, stretching, electrotherapy (TENS/IFT/Ultrasound), taping</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Patient Education:</strong> Teach home exercises, posture correction, ergonomics, pain management techniques</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Documentation:</strong> Progress notes, treatment plans, insurance forms, session records, outcome measures</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Typical Day Breakdown</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Manual Therapy (40%)</h4>
                  <p className="text-sm text-gray-700">Hands-on techniques, joint mobilization, soft tissue massage, stretching, manipulation</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Exercise Prescription (30%)</h4>
                  <p className="text-sm text-gray-700">Strength training, flexibility, balance, functional exercises, gait training</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Modalities/Equipment (20%)</h4>
                  <p className="text-sm text-gray-700">TENS, IFT, ultrasound, heat/ice therapy, traction, laser therapy</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Patient Counseling (10%)</h4>
                  <p className="text-sm text-gray-700">Home exercise programs, lifestyle modifications, injury prevention advice</p>
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
            <h3 className="text-xl font-semibold mb-6">Undergraduate (BPT - 4.5 Years)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Top Government Colleges</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• AIIMS Delhi, Rishikesh, Bhopal - BPT programs</li>
                  <li>• PGIMER Chandigarh</li>
                  <li>• KEM Hospital Mumbai</li>
                  <li>• CMC Vellore</li>
                  <li>• JIPMER Puducherry</li>
                  <li>• Seth GS Medical College Mumbai</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Top Private Colleges</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Manipal College of Physiotherapy</li>
                  <li>• JSS College Mysore</li>
                  <li>• SRM Institute Chennai</li>
                  <li>• DY Patil Pune</li>
                  <li>• Amity University Noida</li>
                  <li>• MGM Institute Mumbai</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-800"><strong>Entry:</strong> Some states via NEET (AIIMS/JIPMER), most via state entrance exams (CET). Course: 4 years academics + 6 months internship. Total fees: Govt ₹50K-3L, Private ₹5-25L. Eligibility: 10+2 with Physics/Chemistry/Biology, 50% marks</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">Postgraduate (MPT - 2 Years Specialization)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Top Specializations</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Sports Physiotherapy</li>
                  <li>• Orthopedic Physiotherapy</li>
                  <li>• Neurological Physiotherapy</li>
                  <li>• Cardio-Pulmonary Physio</li>
                  <li>• Pediatric Physiotherapy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Top Institutes</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Manipal Academy</li>
                  <li>• CMC Vellore</li>
                  <li>• AIIMS Delhi</li>
                  <li>• PGIMER Chandigarh</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Entry &amp; Details</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• State/University entrance</li>
                  <li>• 2 years course</li>
                  <li>• Better job prospects</li>
                  <li>• Fees: ₹2-12L</li>
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
                <li>• Manual therapy techniques</li>
                <li>• Joint mobilization skills</li>
                <li>• Soft tissue massage</li>
                <li>• Therapeutic exercises design</li>
                <li>• Gait analysis &amp; correction</li>
                <li>• Postural assessment</li>
                <li>• Functional movement screening</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Equipment &amp; Modalities</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>TENS</strong> - Pain relief</li>
                <li>• <strong>IFT/SWD</strong> - Deep heat</li>
                <li>• <strong>Ultrasound</strong> - Tissue healing</li>
                <li>• <strong>Traction</strong> - Spinal decompression</li>
                <li>• <strong>Laser therapy</strong> - Wound healing</li>
                <li>• <strong>Kinesiology taping</strong> - Support</li>
                <li>• <strong>Gym equipment</strong> - Strength training</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Soft Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Empathy &amp; patience (critical)</li>
                <li>• Communication (explain exercises)</li>
                <li>• Physical stamina (8 hours standing)</li>
                <li>• Motivation skills (encourage patients)</li>
                <li>• Observation (body mechanics)</li>
                <li>• Problem-solving (adapt treatments)</li>
                <li>• Business skills (own practice)</li>
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
            Career Paths for Physiotherapists
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border border-blue-200">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Hospitals &amp; Clinics</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Apollo Hospitals</strong> - Multi-city</li>
                <li><strong>Fortis Healthcare</strong> - Rehab centers</li>
                <li><strong>Max Healthcare</strong> - Delhi NCR</li>
                <li><strong>Manipal Hospitals</strong> - South India</li>
                <li><strong>AIIMS/PGIMER</strong> - Government</li>
                <li><strong>Own Clinic</strong> - Independent practice</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border border-green-200">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Sports &amp; Fitness</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>IPL Teams</strong> - Cricket physio</li>
                <li><strong>ISL Clubs</strong> - Football teams</li>
                <li><strong>State Sports Authority</strong> - Athletes</li>
                <li><strong>Fitness Centers</strong> - Gold's Gym, Cult</li>
                <li><strong>Sports Academies</strong> - Training</li>
                <li><strong>Olympic/National Teams</strong> - Elite</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border border-purple-200">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Specialized Centers</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Neuro Rehab Centers</strong> - Stroke/SCI</li>
                <li><strong>Orthopedic Clinics</strong> - Joint/spine</li>
                <li><strong>Cardiac Rehab</strong> - Heart patients</li>
                <li><strong>Pediatric Centers</strong> - Cerebral palsy</li>
                <li><strong>Geriatric Care</strong> - Elderly</li>
                <li><strong>Corporate Wellness</strong> - Companies</li>
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
            Career Roadmap After BPT
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 0-2: Internship &amp; Entry Jobs</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Fresh Graduate</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Complete Internship:</strong> 6 months clinical rotation, gain experience in all specialties</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Get Registered:</strong> State Physiotherapy Council registration, apply for hospital jobs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>First Job:</strong> Hospital/clinic (₹20-35K/month), learn clinical workflow, build patient handling skills</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 2-5: Specialization &amp; Growth</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Early Career</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Pursue MPT:</strong> Specialize in Sports/Orthopedic/Neuro - better opportunities &amp; pay</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Certifications:</strong> Manual therapy, Mulligan, Maitland, sports taping, dry needling courses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Build Network:</strong> Connect with doctors, gyms, sports coaches for referrals, save for own clinic</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 5-10+: Established Practice</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Senior Level</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Own Clinic:</strong> Setup costs ₹5-15L, build patient base, 15-20 patients/day, hire assistants</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Sports Team:</strong> Work with IPL/ISL teams, academies, high-profile athletes - prestige &amp; pay</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Options:</strong> Multi-location clinics, specialize in niche (spinal/sports), or move to teaching</span>
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
            BPT Course Difficulty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                High Difficulty
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Anatomy (detailed musculoskeletal)</li>
                <li>• Biomechanics (complex physics)</li>
                <li>• Neurological physiotherapy</li>
                <li>• Manual therapy (skill development)</li>
                <li>• Clinical reasoning (diagnosis)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                Moderate Difficulty
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Exercise therapy (prescription)</li>
                <li>• Orthopedic physiotherapy</li>
                <li>• Electrotherapy modalities</li>
                <li>• Sports injuries management</li>
                <li>• Cardio-pulmonary rehabilitation</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Manageable Topics
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Basics of physiology</li>
                <li>• Health &amp; wellness concepts</li>
                <li>• Patient communication</li>
                <li>• Basic exercise principles</li>
                <li>• Community physiotherapy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Specializations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Activity className="h-8 w-8 text-purple-600 mr-3" />
            Physiotherapy Specialization Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Trophy className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Sports Physiotherapy</h3>
              <p className="text-gray-600 mb-4 text-sm">Athletes, sports teams, injury prevention, performance optimization, taping</p>
              <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹8-35 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Activity className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Orthopedic Physiotherapy</h3>
              <p className="text-gray-600 mb-4 text-sm">Joint/bone injuries, post-surgery rehab, back/neck pain, arthritis management</p>
              <div className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹6-28 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Brain className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Neurological Physiotherapy</h3>
              <p className="text-gray-600 mb-4 text-sm">Stroke, spinal cord injury, Parkinson's, cerebral palsy, balance disorders</p>
              <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹6-25 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <HeartPulse className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cardio-Pulmonary Physiotherapy</h3>
              <p className="text-gray-600 mb-4 text-sm">Heart disease rehab, lung conditions, post-cardiac surgery, ICU patients</p>
              <div className="bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹5-22 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Baby className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Pediatric Physiotherapy</h3>
              <p className="text-gray-600 mb-4 text-sm">Children with developmental delays, cerebral palsy, genetic disorders</p>
              <div className="bg-red-100 text-red-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹5-20 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Shield className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Geriatric Physiotherapy</h3>
              <p className="text-gray-600 mb-4 text-sm">Elderly care, fall prevention, osteoporosis, age-related mobility issues</p>
              <div className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹4-18 LPA</div>
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
                  <span className="text-gray-700"><strong>Helping People Recover:</strong> Rewarding to restore mobility, reduce pain, improve quality of life</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Growing Demand:</strong> Aging population, sports injuries, lifestyle diseases increasing need for physio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Work-Life Balance:</strong> Fixed hours (usually 9am-6pm), no emergency calls, manageable workload</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Diverse Settings:</strong> Hospitals, clinics, sports teams, home visits, corporate wellness, teaching</span>
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
                  <span className="text-gray-700"><strong>Low Starting Salary:</strong> ₹20-35K/month initially. Takes 3-5 years to build own practice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Physically Demanding:</strong> Standing 6-8 hours, manual therapy causes back/knee pain over time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Lower Prestige:</strong> Not seen as "doctors" by many. Compared unfavorably to MBBS/BDS</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Patient Compliance:</strong> Frustrating when patients skip sessions, don't do home exercises</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Activity className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Restore Movement, Transform Lives</h2>
          <p className="text-xl text-purple-100 mb-8">
            Physiotherapy offers a hands-on healthcare career where you directly impact patient recovery and quality of life. While the starting pay is modest and the work is physically demanding, the satisfaction of helping people regain mobility and the growing demand for rehabilitation services make it a meaningful career choice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/medical" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore More Medical Careers
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

export default PhysiotherapyDetails
