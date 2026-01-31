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
  Activity,
  AlertCircle,
  Shield,
  Globe,
  Building2,
  Syringe,
  ClipboardList,
  Stethoscope
} from 'lucide-react'

const NursingDetails = () => {
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
            <span className="text-gray-900 font-medium">Nursing</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-rose-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Backbone of Healthcare
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Nursing Professional
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Provide compassionate patient care, support medical treatments, and be the heart of healthcare
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">₹3-8 LPA</div>
                  <div className="text-sm text-gray-200">Average Salary</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">12%</div>
                  <div className="text-sm text-gray-200">Growth Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">Excellent</div>
                  <div className="text-sm text-gray-200">Job Demand</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-gray-200" />
                  <span>3-4 years B.Sc Nursing / GNM</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-3 text-gray-200" />
                  <span>High demand globally</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 mr-3 text-gray-200" />
                  <span>Direct patient care impact</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-3 text-gray-200" />
                  <span>Excellent job security</span>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Fresher (0-3 years)</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">₹2.5-5 LPA</div>
              <p className="text-gray-600 text-sm">Starting salaries for nurses</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Government Hospital:</strong> ₹3-5 LPA</div>
                <div className="text-sm"><strong>Private Hospital:</strong> ₹2.5-4.5 LPA</div>
                <div className="text-sm"><strong>Clinic/Nursing Home:</strong> ₹2-4 LPA</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Experienced (3-8 years)</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹5-10 LPA</div>
              <p className="text-gray-600 text-sm">Mid-level nursing positions</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Senior Staff Nurse:</strong> ₹5-8 LPA</div>
                <div className="text-sm"><strong>ICU/CCU Nurse:</strong> ₹6-10 LPA</div>
                <div className="text-sm"><strong>OT Nurse:</strong> ₹5-9 LPA</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Senior (8+ years)</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹10-20 LPA</div>
              <p className="text-gray-600 text-sm">Leadership & specialized roles</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Nursing Superintendent:</strong> ₹10-18 LPA</div>
                <div className="text-sm"><strong>Matron:</strong> ₹12-20 LPA</div>
                <div className="text-sm"><strong>Nurse Educator:</strong> ₹8-15 LPA</div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              International Opportunities (Higher Pay)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
              <div>
                <strong>USA/Canada:</strong> $50,000-90,000 (₹40-75 LPA)
              </div>
              <div>
                <strong>UK/Ireland:</strong> £25,000-45,000 (₹25-45 LPA)
              </div>
              <div>
                <strong>Middle East (UAE/Saudi):</strong> $30,000-60,000 (₹25-50 LPA) tax-free
              </div>
              <div>
                <strong>Australia/New Zealand:</strong> AUD 60,000-90,000 (₹35-55 LPA)
              </div>
            </div>
          </div>
        </section>

        {/* Job Role & Responsibilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            What Nurses Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Daily Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Monitor patient vital signs and health status</span>
                </li>
                <li className="flex items-start">
                  <Syringe className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Administer medications and injections</span>
                </li>
                <li className="flex items-start">
                  <ClipboardList className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Maintain patient records and documentation</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-pink-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Provide emotional support to patients and families</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Assist in emergency situations</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Coordinate with doctors and medical team</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Impact on the World</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-pink-600 mb-2">Patient Care Champion</h4>
                  <p className="text-gray-600 text-sm">Provide 24/7 bedside care, ensuring patient comfort, safety, and recovery.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Healthcare Bridge</h4>
                  <p className="text-gray-600 text-sm">Connect patients with doctors, translate medical information, and advocate for patient needs.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Community Health</h4>
                  <p className="text-gray-600 text-sm">Work in rural areas, vaccination drives, and maternal/child health programs.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Critical Care</h4>
                  <p className="text-gray-600 text-sm">Save lives in ICU, emergency rooms, and operation theaters during critical moments.</p>
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
                <h3 className="text-lg font-semibold mb-4 text-red-600">Challenging Aspects</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Long shifts (12+ hours common)</li>
                  <li>• Night duties and irregular schedule</li>
                  <li>• Physical demands (standing, lifting)</li>
                  <li>• Emotional stress from patient suffering</li>
                  <li>• Exposure to infections and diseases</li>
                  <li>• Dealing with difficult patients/families</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-yellow-600">Moderate Difficulty</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Learning medical procedures</li>
                  <li>• Medication administration protocols</li>
                  <li>• Emergency response skills</li>
                  <li>• Patient assessment techniques</li>
                  <li>• Medical documentation</li>
                  <li>• Maintaining hygiene standards</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">Rewarding Aspects</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Direct impact on patient recovery</li>
                  <li>• High job satisfaction</li>
                  <li>• Excellent job security</li>
                  <li>• Global career opportunities</li>
                  <li>• Respected profession</li>
                  <li>• Diverse specialization options</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Success Requirements</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800">
                <div>
                  <strong>Technical Skills:</strong> Medical knowledge, patient care procedures, emergency response, medication management
                </div>
                <div>
                  <strong>Personal Qualities:</strong> Compassion, patience, physical stamina, emotional resilience, teamwork
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-pink-50 border border-pink-200 rounded-lg p-6">
              <h4 className="font-semibold text-pink-900 mb-2 flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                Reality Check
              </h4>
              <p className="text-sm text-pink-800">
                Nursing is emotionally and physically demanding. You'll witness suffering, work irregular hours, 
                and be on your feet for long periods. However, it's also one of the most fulfilling careers where 
                you directly impact lives every single day.
              </p>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
            Nursing Specializations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Activity className="h-10 w-10 text-red-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Critical Care Nursing</h3>
              <p className="text-gray-600 text-sm mb-4">ICU/CCU nursing for critically ill patients</p>
              <div className="text-green-600 font-semibold">₹6-12 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Stethoscope className="h-10 w-10 text-blue-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Operation Theatre Nursing</h3>
              <p className="text-gray-600 text-sm mb-4">Assist in surgeries and surgical procedures</p>
              <div className="text-green-600 font-semibold">₹5-10 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Heart className="h-10 w-10 text-pink-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Cardiac Nursing</h3>
              <p className="text-gray-600 text-sm mb-4">Specialize in heart disease patient care</p>
              <div className="text-green-600 font-semibold">₹6-11 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Users className="h-10 w-10 text-purple-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Pediatric Nursing</h3>
              <p className="text-gray-600 text-sm mb-4">Care for infants, children, and adolescents</p>
              <div className="text-green-600 font-semibold">₹4-9 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Building2 className="h-10 w-10 text-orange-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Community Health Nursing</h3>
              <p className="text-gray-600 text-sm mb-4">Public health and preventive care</p>
              <div className="text-green-600 font-semibold">₹3-7 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <BookOpen className="h-10 w-10 text-green-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Nurse Educator</h3>
              <p className="text-gray-600 text-sm mb-4">Teach nursing students in colleges</p>
              <div className="text-green-600 font-semibold">₹5-12 LPA</div>
            </div>
          </div>
        </section>

        {/* Education Paths */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Education Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-3">ANM (Auxiliary Nurse Midwife)</h3>
              <p className="text-sm text-gray-600 mb-3">2 years diploma program</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• After 10th standard</li>
                <li>• Basic nursing skills</li>
                <li>• Community health focus</li>
                <li>• Salary: ₹2-4 LPA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-3">GNM (General Nursing & Midwifery)</h3>
              <p className="text-sm text-gray-600 mb-3">3 years diploma program</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• After 10+2 (Science)</li>
                <li>• Comprehensive nursing training</li>
                <li>• Hospital & clinical focus</li>
                <li>• Salary: ₹2.5-5 LPA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-300 bg-blue-50">
              <h3 className="font-semibold text-lg mb-3">B.Sc Nursing (Recommended)</h3>
              <p className="text-sm text-gray-600 mb-3">4 years degree program</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• After 10+2 (PCB)</li>
                <li>• Advanced nursing degree</li>
                <li>• Better career prospects</li>
                <li>• Salary: ₹3-8 LPA (higher abroad)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-r from-pink-600 to-rose-700 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-gray-100 mb-6">
            Nursing offers excellent job security, global opportunities, and the satisfaction of helping people 
            every day. With India's growing healthcare sector and international demand, it's a stable and rewarding career.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/resources"
              className="bg-white text-pink-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Explore Nursing Colleges
            </Link>
            <Link 
              to="/medical"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-700 transition-colors"
            >
              Other Medical Careers
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default NursingDetails