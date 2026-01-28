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
  Heart,
  Stethoscope,
  Activity,
  AlertCircle,
  Brain,
  Shield,
  Sparkles,
  GraduationCap,
  Building
} from 'lucide-react'

const MBBSDetails = () => {
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
            <span className="text-gray-900 font-medium">Doctor (MBBS)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Most Respected Profession
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Doctor (MBBS)
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Save lives, heal patients, and make a profound difference in people's health and well-being
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">₹8-20 LPA</div>
                  <div className="text-sm text-gray-200">Average Salary</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">15%</div>
                  <div className="text-sm text-gray-200">Growth Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">Excellent</div>
                  <div className="text-sm text-gray-200">Job Security</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-gray-200" />
                  <span>5.5 years MBBS + 1 year internship</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 mr-3 text-gray-200" />
                  <span>3+ years for MD/MS specialization</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 mr-3 text-gray-200" />
                  <span>Highest societal respect</span>
                </div>
                <div className="flex items-center">
                  <Stethoscope className="h-5 w-5 mr-3 text-gray-200" />
                  <span>Direct impact on saving lives</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Earnings Breakdown */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <DollarSign className="h-8 w-8 text-green-600 mr-3" />
            Earnings & Career Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Junior Doctor (0-3 years)</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">₹6-12 LPA</div>
              <p className="text-gray-600 text-sm">Starting salaries after MBBS</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Government Hospital:</strong> ₹6-10 LPA</div>
                <div className="text-sm"><strong>Private Hospital:</strong> ₹8-15 LPA</div>
                <div className="text-sm"><strong>Medical Officer:</strong> ₹7-12 LPA</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Specialist (3-10 years)</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹15-40 LPA</div>
              <p className="text-gray-600 text-sm">After MD/MS specialization</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Government Specialist:</strong> ₹12-25 LPA</div>
                <div className="text-sm"><strong>Private Consultant:</strong> ₹20-50 LPA</div>
                <div className="text-sm"><strong>Super Specialist:</strong> ₹30-80 LPA</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Senior Consultant (10+ years)</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹50L-2 Cr+</div>
              <p className="text-gray-600 text-sm">Established practice & reputation</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Private Practice:</strong> ₹40L-2 Cr+</div>
                <div className="text-sm"><strong>Hospital Chief:</strong> ₹60L-1 Cr</div>
                <div className="text-sm"><strong>Surgeons (top):</strong> ₹1-5 Cr+</div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h4 className="font-semibold text-green-900 mb-3 flex items-center">
              <Sparkles className="h-5 w-5 mr-2" />
              High-Earning Specializations
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-green-800">
              <div>
                <strong>Cardiology:</strong> ₹30L-2 Cr+ per year
              </div>
              <div>
                <strong>Neurosurgery:</strong> ₹40L-3 Cr+ per year
              </div>
              <div>
                <strong>Orthopedic Surgery:</strong> ₹25L-1.5 Cr+
              </div>
              <div>
                <strong>Plastic Surgery:</strong> ₹30L-2 Cr+
              </div>
              <div>
                <strong>Cardiothoracic Surgery:</strong> ₹40L-3 Cr+
              </div>
              <div>
                <strong>Gastroenterology:</strong> ₹25L-1 Cr+
              </div>
            </div>
          </div>
        </section>

        {/* Job Role & Responsibilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            What Doctors Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Daily Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Stethoscope className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Diagnose illnesses through examination and tests</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Prescribe medications and treatment plans</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Handle medical emergencies and critical cases</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Counsel patients and families on health</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Stay updated with latest medical research</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Perform surgeries and medical procedures</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Impact on the World</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Saving Lives</h4>
                  <p className="text-gray-600 text-sm">Directly save lives in emergencies, perform life-saving surgeries, and treat critical illnesses.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Disease Prevention</h4>
                  <p className="text-gray-600 text-sm">Educate communities on preventive healthcare, vaccination programs, and healthy lifestyle choices.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Public Health</h4>
                  <p className="text-gray-600 text-sm">Combat epidemics, improve healthcare access, and contribute to national health programs.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Medical Research</h4>
                  <p className="text-gray-600 text-sm">Advance medical science through research, clinical trials, and development of new treatments.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Difficulty Level */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="h-8 w-8 text-yellow-600 mr-3" />
            Difficulty & Requirements
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">Extremely Difficult</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• NEET exam (ultra-competitive)</li>
                  <li>• Mastering complex anatomy & physiology</li>
                  <li>• Handling life-or-death situations</li>
                  <li>• Long duty hours and sleep deprivation</li>
                  <li>• Emotional toll of patient suffering</li>
                  <li>• Continuous medical education</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-yellow-600">Challenging Aspects</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Vast syllabus to memorize</li>
                  <li>• Clinical diagnosis skills</li>
                  <li>• Patient communication</li>
                  <li>• Medical ethics and legal issues</li>
                  <li>• Work-life balance struggles</li>
                  <li>• Financial investment in education</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">Rewarding Aspects</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Highest societal respect</li>
                  <li>• Immense job satisfaction</li>
                  <li>• Strong career security</li>
                  <li>• Excellent earning potential</li>
                  <li>• Diverse specialization options</li>
                  <li>• Global opportunities</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Reality Check: The Journey
              </h4>
              <div className="space-y-2 text-sm text-red-800">
                <p><strong>MBBS Duration:</strong> 5.5 years + 1 year internship = 6.5 years</p>
                <p><strong>Specialization (MD/MS):</strong> Additional 3 years</p>
                <p><strong>Super-specialization (DM/MCh):</strong> Additional 3 years after MD/MS</p>
                <p><strong>Total Time to Specialist:</strong> 9.5-12.5 years of intense study</p>
                <p><strong>NEET Competition:</strong> 20+ lakh students compete for ~90,000 seats annually</p>
              </div>
            </div>
            
            <div className="mt-6 bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Success Requirements</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800">
                <div>
                  <strong>Academic:</strong> Strong Biology, Chemistry, Physics foundation. Excellent memory and analytical skills.
                </div>
                <div>
                  <strong>Personal:</strong> Compassion, emotional resilience, physical stamina, dedication to lifelong learning.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
            Medical Specializations (After MBBS)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Heart className="h-10 w-10 text-red-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Cardiology (MD/DM)</h3>
              <p className="text-gray-600 text-sm mb-4">Heart diseases, interventional procedures</p>
              <div className="text-green-600 font-semibold">₹30L-2 Cr+</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Brain className="h-10 w-10 text-purple-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Neurosurgery (MCh)</h3>
              <p className="text-gray-600 text-sm mb-4">Brain and nervous system surgeries</p>
              <div className="text-green-600 font-semibold">₹40L-3 Cr+</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Activity className="h-10 w-10 text-orange-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Orthopedics (MS)</h3>
              <p className="text-gray-600 text-sm mb-4">Bones, joints, and musculoskeletal system</p>
              <div className="text-green-600 font-semibold">₹25L-1.5 Cr+</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Users className="h-10 w-10 text-blue-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Pediatrics (MD)</h3>
              <p className="text-gray-600 text-sm mb-4">Child healthcare and diseases</p>
              <div className="text-green-600 font-semibold">₹15-60 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Building className="h-10 w-10 text-green-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">General Surgery (MS)</h3>
              <p className="text-gray-600 text-sm mb-4">Surgical procedures across specialties</p>
              <div className="text-green-600 font-semibold">₹20-80 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Stethoscope className="h-10 w-10 text-indigo-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">General Medicine (MD)</h3>
              <p className="text-gray-600 text-sm mb-4">Internal medicine and general practice</p>
              <div className="text-green-600 font-semibold">₹12-40 LPA</div>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="font-semibold text-blue-900 mb-3">Popular Specializations in India</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
              <div>• Dermatology • Radiology • Ophthalmology • ENT</div>
              <div>• Obstetrics & Gynecology • Psychiatry • Anesthesiology • Pathology</div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Career Options After MBBS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-3">Clinical Practice</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Government Hospital Doctor</li>
                <li>✓ Private Hospital Consultant</li>
                <li>✓ Own Private Clinic/Nursing Home</li>
                <li>✓ Super-specialty Hospitals</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-3">Alternative Paths</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Medical Research & Academia</li>
                <li>✓ Pharmaceutical Company (Medical Advisor)</li>
                <li>✓ Public Health & NGO Work</li>
                <li>✓ Medical Writing & Journalism</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Become a Doctor?</h2>
          <p className="text-gray-100 mb-6">
            Medicine is one of the noblest professions with the power to save lives. It requires dedication, 
            compassion, and years of rigorous study, but offers unmatched respect and fulfillment.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/resources"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get NEET Strategy
            </Link>
            <Link 
              to="/medical"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
            >
              Explore Medical Careers
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MBBSDetails