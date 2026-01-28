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
  Pill,
  FlaskConical,
  Microscope,
  Building2,
  ShoppingBag,
  FileCheck,
  Sparkles,
  GraduationCap,
  Factory
} from 'lucide-react'

const PharmacyDetails = () => {
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
            <span className="text-gray-900 font-medium">Pharmacy</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Medicine Experts
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Pharmacy Professional
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Expert in medications, drug safety, and pharmaceutical care - bridging healthcare and patients
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">₹4-10 LPA</div>
                  <div className="text-sm text-gray-200">Average Salary</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">10%</div>
                  <div className="text-sm text-gray-200">Growth Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold">Diverse</div>
                  <div className="text-sm text-gray-200">Career Paths</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-gray-200" />
                  <span>2-4 years D.Pharm/B.Pharm</span>
                </div>
                <div className="flex items-center">
                  <Pill className="h-5 w-5 mr-3 text-gray-200" />
                  <span>Work with medications daily</span>
                </div>
                <div className="flex items-center">
                  <Building2 className="h-5 w-5 mr-3 text-gray-200" />
                  <span>Multiple industry options</span>
                </div>
                <div className="flex items-center">
                  <Sparkles className="h-5 w-5 mr-3 text-gray-200" />
                  <span>Own pharmacy opportunity</span>
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
              <p className="text-gray-600 text-sm">Starting salaries after graduation</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Community Pharmacist:</strong> ₹2.5-4 LPA</div>
                <div className="text-sm"><strong>Hospital Pharmacist:</strong> ₹3-5 LPA</div>
                <div className="text-sm"><strong>Medical Rep:</strong> ₹3-6 LPA</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Experienced (3-8 years)</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹6-15 LPA</div>
              <p className="text-gray-600 text-sm">Mid-level positions</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Senior Pharmacist:</strong> ₹6-10 LPA</div>
                <div className="text-sm"><strong>Quality Assurance:</strong> ₹7-12 LPA</div>
                <div className="text-sm"><strong>Drug Inspector:</strong> ₹8-15 LPA</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Senior (8+ years)</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹15-35 LPA</div>
              <p className="text-gray-600 text-sm">Leadership & business roles</p>
              <div className="mt-4 space-y-2">
                <div className="text-sm"><strong>Pharmacy Manager:</strong> ₹12-20 LPA</div>
                <div className="text-sm"><strong>R&D Scientist:</strong> ₹15-30 LPA</div>
                <div className="text-sm"><strong>Own Pharmacy Chain:</strong> ₹20-50+ LPA</div>
              </div>
            </div>
          </div>
          
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
            <h4 className="font-semibold text-teal-900 mb-3 flex items-center">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Business Opportunity (Own Pharmacy)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-teal-800">
              <div>
                <strong>Small Pharmacy:</strong> Net profit ₹30,000-80,000/month (₹3.6-9.6 LPA)
              </div>
              <div>
                <strong>Medium Store:</strong> Net profit ₹1-3 lakh/month (₹12-36 LPA)
              </div>
              <div>
                <strong>Franchise (Apollo/Medplus):</strong> Potential ₹5-15 LPA
              </div>
              <div>
                <strong>Multiple Outlets:</strong> Income scales with expansion
              </div>
            </div>
          </div>
        </section>

        {/* Job Role & Responsibilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            What Pharmacists Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Daily Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Pill className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Dispense prescribed medications accurately</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Counsel patients on medication usage</span>
                </li>
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Check for drug interactions and allergies</span>
                </li>
                <li className="flex items-start">
                  <ShoppingBag className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Manage pharmacy inventory and stock</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Stay updated on new medications</span>
                </li>
                <li className="flex items-start">
                  <FlaskConical className="h-5 w-5 text-pink-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Compound specialized medications</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Impact on the World</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-600 mb-2">Medication Safety</h4>
                  <p className="text-gray-600 text-sm">Prevent medication errors, drug interactions, and ensure patients receive correct treatments.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Healthcare Access</h4>
                  <p className="text-gray-600 text-sm">Often the most accessible healthcare professional - provide immediate advice and over-the-counter care.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Drug Development</h4>
                  <p className="text-gray-600 text-sm">Research and develop new medicines that cure diseases and improve quality of life.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Public Health</h4>
                  <p className="text-gray-600 text-sm">Participate in vaccination programs, health awareness campaigns, and chronic disease management.</p>
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
                  <li>• Memorizing thousands of drug names</li>
                  <li>• Understanding complex pharmacology</li>
                  <li>• Long standing hours in retail</li>
                  <li>• Dealing with regulatory compliance</li>
                  <li>• Managing difficult customers</li>
                  <li>• Keeping up with new medications</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-yellow-600">Moderate Difficulty</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Drug chemistry and formulation</li>
                  <li>• Dosage calculations</li>
                  <li>• Quality control procedures</li>
                  <li>• Patient counseling skills</li>
                  <li>• Inventory management</li>
                  <li>• Healthcare regulations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">Advantages</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Shorter study duration than MBBS</li>
                  <li>• Multiple career pathways</li>
                  <li>• Business ownership opportunity</li>
                  <li>• Regular working hours (most roles)</li>
                  <li>• Less physically demanding</li>
                  <li>• Good work-life balance</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Success Requirements</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800">
                <div>
                  <strong>Technical Skills:</strong> Strong chemistry background, attention to detail, analytical thinking, computer literacy
                </div>
                <div>
                  <strong>Soft Skills:</strong> Communication, customer service, ethical responsibility, business acumen (for own pharmacy)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
            Career Specializations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <ShoppingBag className="h-10 w-10 text-teal-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Community/Retail Pharmacy</h3>
              <p className="text-gray-600 text-sm mb-4">Work in pharmacies, dispense medicines</p>
              <div className="text-green-600 font-semibold">₹2.5-8 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Building2 className="h-10 w-10 text-blue-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Hospital Pharmacy</h3>
              <p className="text-gray-600 text-sm mb-4">Clinical pharmacy in hospital settings</p>
              <div className="text-green-600 font-semibold">₹3-10 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Factory className="h-10 w-10 text-purple-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Pharmaceutical Industry</h3>
              <p className="text-gray-600 text-sm mb-4">Manufacturing, QA/QC, production</p>
              <div className="text-green-600 font-semibold">₹4-15 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Microscope className="h-10 w-10 text-green-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Research & Development</h3>
              <p className="text-gray-600 text-sm mb-4">Drug discovery and formulation research</p>
              <div className="text-green-600 font-semibold">₹6-25 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <FileCheck className="h-10 w-10 text-orange-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Drug Regulatory Affairs</h3>
              <p className="text-gray-600 text-sm mb-4">Drug approval, compliance, licensing</p>
              <div className="text-green-600 font-semibold">₹5-18 LPA</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Users className="h-10 w-10 text-red-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Medical Representative</h3>
              <p className="text-gray-600 text-sm mb-4">Promote pharma products to doctors</p>
              <div className="text-green-600 font-semibold">₹3-12 LPA</div>
            </div>
          </div>
        </section>

        {/* Education Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Education Pathways</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-3">D.Pharm (Diploma in Pharmacy)</h3>
              <p className="text-sm text-gray-600 mb-3">2 years diploma</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ After 10+2 with PCM/PCB</li>
                <li>✓ Quick entry into pharmacy field</li>
                <li>✓ Can open own pharmacy with license</li>
                <li>✓ Lower education cost</li>
                <li>✓ Good for retail pharmacy career</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-teal-300 bg-teal-50">
              <h3 className="font-semibold text-lg mb-3">B.Pharm (Bachelor of Pharmacy) ⭐</h3>
              <p className="text-sm text-gray-600 mb-3">4 years degree (Recommended)</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ After 10+2 with PCM/PCB</li>
                <li>✓ Better career opportunities</li>
                <li>✓ Higher salary potential</li>
                <li>✓ Can pursue M.Pharm/PhD</li>
                <li>✓ Eligible for govt jobs (Drug Inspector)</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 mb-3">Further Education</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
              <div>
                <strong>M.Pharm (2 years):</strong> Specialization in Pharmaceutics, Pharmacology, etc. - Opens research & teaching roles
              </div>
              <div>
                <strong>Pharm.D (6 years):</strong> Doctor of Pharmacy - Clinical pharmacy focus, similar to US model
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Join Pharmaceutical Field?</h2>
          <p className="text-gray-100 mb-6">
            Pharmacy offers diverse career options - from running your own store to researching life-saving drugs. 
            It's a stable field with good work-life balance and entrepreneurship opportunities.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/resources"
              className="bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Find Pharmacy Colleges
            </Link>
            <Link 
              to="/medical"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-700 transition-colors"
            >
              Explore Medical Careers
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PharmacyDetails