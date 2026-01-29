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
  Heart,
  Stethoscope,
  Syringe,
  Activity,
  Target,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Shield,
  Building,
  Bird,
  Dog,
  Fish
} from 'lucide-react'

const VeterinaryDetails = () => {
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
            <span className="text-gray-900 font-medium">Veterinary Science (BVSc)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-teal-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Animal Healthcare Specialist
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Veterinary Science (BVSc)
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Diagnose and treat diseases in animals, perform surgeries, manage livestock health, work in pet clinics, wildlife conservation, pharmaceutical companies, or government veterinary services. A fulfilling career for animal lovers.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹3-10 LPA</div>
                  <div className="text-sm text-gray-200">Starting Package</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹15-50+ LPA</div>
                  <div className="text-sm text-gray-200">Own Clinic/Senior</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">5.5 Years</div>
                  <div className="text-sm text-gray-200">BVSc + Internship</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Dog className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Pet Clinics</h3>
                <p className="text-sm text-gray-200">Dogs, Cats & Exotic</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Activity className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Livestock</h3>
                <p className="text-sm text-gray-200">Cattle, Buffalo, Sheep</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Bird className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Poultry</h3>
                <p className="text-sm text-gray-200">Commercial Farms</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Shield className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Wildlife</h3>
                <p className="text-sm text-gray-200">Conservation & Zoos</p>
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
              <h3 className="font-semibold mb-2">Lower Pay Than Human Medicine</h3>
              <p className="text-sm text-gray-700">Starting ₹25-40K/month. MBBS doctors earn 2-3x more. Government jobs pay better (₹6-10 LPA) but limited seats</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Emotionally Challenging</h3>
              <p className="text-sm text-gray-700">Euthanasia decisions, animal suffering, owner grief, aggressive animals. Not for the faint-hearted</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Field Work in Rural Areas</h3>
              <p className="text-sm text-gray-700">Livestock vets travel to farms, villages. Long hours, physical work, exposure to harsh weather</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Health Risks (Zoonotic Diseases)</h3>
              <p className="text-sm text-gray-700">Risk of rabies, brucellosis, anthrax, bird flu from infected animals. Safety protocols critical</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Limited Pet Culture in India</h3>
              <p className="text-sm text-gray-700">Pet clinics profitable only in metros. Tier 2/3 cities: owners hesitant to pay ₹500-1000 fees</p>
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
              <h3 className="text-lg font-semibold mb-2">Fresh BVSc (Job)</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹3-8 LPA</div>
              <p className="text-sm text-gray-600 mb-4">0-2 years as employee</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Pet clinic job: ₹25-40K/month</li>
                <li>• Govt veterinary officer: ₹6-8 LPA</li>
                <li>• Pharma company: ₹4-7 LPA</li>
                <li>• Livestock farm: ₹3-5 LPA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Mid-Level</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">₹8-18 LPA</div>
              <p className="text-sm text-gray-600 mb-4">3-7 years experience</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Own pet clinic: ₹8-15 LPA</li>
                <li>• Livestock consultant: ₹6-12 LPA</li>
                <li>• Pharma manager: ₹10-15 LPA</li>
                <li>• Senior govt vet: ₹10-14 LPA</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Senior Veterinarian</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹18-35 LPA</div>
              <p className="text-sm text-gray-600 mb-4">8-15 years, specialist</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Multi-location pet clinics</li>
                <li>• Poultry farm consultant</li>
                <li>• MVSc specialist (surgery)</li>
                <li>• Corporate vet services head</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-sm border-2 border-orange-300">
              <h3 className="text-lg font-semibold mb-2">Top Vets/Consultants</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">₹35L-1Cr+</div>
              <p className="text-sm text-gray-600 mb-4">15+ years / Chain owner</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Multi-city clinic chains</li>
                <li>• Celebrity pet specialist</li>
                <li>• Large poultry consultancy</li>
                <li>• Veterinary hospital owner</li>
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
            What Veterinarians Actually Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Daily Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Stethoscope className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Clinical Examination:</strong> Check vitals, diagnose diseases in pets/livestock, interpret symptoms</span>
                </li>
                <li className="flex items-start">
                  <Syringe className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Treatment & Surgery:</strong> Vaccinations, deworming, spaying/neutering, fracture repairs, C-sections</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Owner Counseling:</strong> Explain diagnosis, treatment plans, post-op care, euthanasia discussions</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Record Keeping:</strong> Patient history, vaccination records, prescriptions, surgical notes</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Typical Day Breakdown</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Routine Care (50%)</h4>
                  <p className="text-sm text-gray-700">Vaccinations, deworming, check-ups, minor infections, skin issues, basic consultations</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Surgeries & Procedures (25%)</h4>
                  <p className="text-sm text-gray-700">Spaying/neutering, C-sections, fracture repairs, tumor removals, dental procedures</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Field Work (15%)</h4>
                  <p className="text-sm text-gray-700">Farm visits, livestock health checks, breeding consultations, disease outbreak management</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Emergencies (10%)</h4>
                  <p className="text-sm text-gray-700">Trauma cases, poisoning, difficult labor, snake bites, critical care</p>
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
            <h3 className="text-xl font-semibold mb-6">Undergraduate (BVSc &amp; AH - 5.5 Years)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Top Government Colleges</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Indian Veterinary Research Institute (IVRI) Bareilly</li>
                  <li>• Madras Veterinary College Chennai</li>
                  <li>• Bombay Veterinary College Mumbai</li>
                  <li>• College of Veterinary Science Hyderabad</li>
                  <li>• GB Pant University Pantnagar</li>
                  <li>• Karnataka Veterinary College Bangalore</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Top Private Colleges</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Apollo College Rajasthan</li>
                  <li>• Rajiv Gandhi College Puducherry</li>
                  <li>• Sher-e-Kashmir University Kashmir</li>
                  <li>• College of Veterinary Science Odisha</li>
                  <li>• Maharashtra Animal Sciences University</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-800"><strong>Entry via NEET UG:</strong> Govt college cutoff: 500-600/720. Private: 400-550. Course: 4.5 years academics + 6 months internship + 6 months clinical rotation. Total fees: Govt ₹50K-2L, Private ₹10-40L</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">Postgraduate (MVSc - 2 Years Specialization)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Top Specializations</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Veterinary Surgery</li>
                  <li>• Veterinary Medicine</li>
                  <li>• Animal Reproduction</li>
                  <li>• Veterinary Pathology</li>
                  <li>• Veterinary Microbiology</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Top Institutes</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• IVRI Bareilly</li>
                  <li>• Madras Vet College</li>
                  <li>• TANUVAS Tamil Nadu</li>
                  <li>• GADVASU Punjab</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Entry via Entrance</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• ICAR AIEEA-PG exam</li>
                  <li>• State PG entrance</li>
                  <li>• 2 years course</li>
                  <li>• Fees: ₹2-10L</li>
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
                <li>• Animal handling (safe restraint)</li>
                <li>• Physical examination techniques</li>
                <li>• Surgical skills (spay/neuter/C-section)</li>
                <li>• Injection &amp; IV administration</li>
                <li>• Wound management &amp; suturing</li>
                <li>• Emergency response</li>
                <li>• Obstetrics &amp; reproduction</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Diagnostic &amp; Tools</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>X-ray/Ultrasound</strong> - Imaging</li>
                <li>• <strong>Lab diagnostics</strong> - Blood/urine tests</li>
                <li>• <strong>Disease diagnosis</strong> - Pattern recognition</li>
                <li>• <strong>Pharmacology</strong> - Drug dosages</li>
                <li>• <strong>Anesthesia</strong> - Safe protocols</li>
                <li>• <strong>Necropsy</strong> - Post-mortem exams</li>
                <li>• <strong>Herd health</strong> - Population mgmt</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Soft Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Love for animals (genuine passion)</li>
                <li>• Emotional resilience (euthanasia)</li>
                <li>• Physical stamina (long standing)</li>
                <li>• Communication (owner counseling)</li>
                <li>• Patience (difficult animals)</li>
                <li>• Business acumen (own practice)</li>
                <li>• Stress management (emergencies)</li>
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
            Career Paths for Veterinarians
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border border-blue-200">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Private Practice</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Pet Clinics</strong> - Dogs, cats, birds</li>
                <li><strong>Veterinary Hospitals</strong> - 24/7 care</li>
                <li><strong>Mobile Vet Services</strong> - Home visits</li>
                <li><strong>Group Practice</strong> - Partner clinics</li>
                <li><strong>Specialty Centers</strong> - Orthopedics/oncology</li>
                <li><strong>Pet Grooming + Vet</strong> - Combined</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border border-green-200">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Government &amp; PSU</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>State Animal Husbandry</strong> - Dept</li>
                <li><strong>ICAR Institutes</strong> - Research</li>
                <li><strong>Veterinary Universities</strong> - Teaching</li>
                <li><strong>Military/Police</strong> - Dog squads</li>
                <li><strong>Food Safety</strong> - FSSAI inspector</li>
                <li><strong>Zoos &amp; Wildlife</strong> - Conservation</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border border-purple-200">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Corporate &amp; Industry</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Pharma Companies</strong> - Pfizer, MSD, Zoetis</li>
                <li><strong>Feed Industry</strong> - Cargill, Godrej</li>
                <li><strong>Poultry Farms</strong> - Venky's, Suguna</li>
                <li><strong>Dairy Companies</strong> - Amul, Mother Dairy</li>
                <li><strong>Pet Food</strong> - Pedigree, Royal Canin</li>
                <li><strong>Livestock Consulting</strong> - Farms</li>
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
            Career Roadmap After BVSc
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 0-2: Internship &amp; Initial Experience</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Fresh Graduate</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Complete Internship:</strong> 6 months clinical rotation, gain hands-on experience in surgery/medicine</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Get Registered:</strong> State Veterinary Council registration, prepare for job/govt exams</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Decision Point:</strong> Job in pet clinic (₹25-40K) vs Govt job (₹6-8 LPA) vs MVSc prep</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 2-6: Building Experience</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Early Career</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>If Private:</strong> Work in pet clinic, learn business, save ₹8-15L for own clinic setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>If Government:</strong> Stable job, field postings, livestock health programs, decent pay</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>If MVSc:</strong> Specialize in Surgery/Medicine/Reproduction, better job prospects post-PG</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 6-15+: Established Veterinarian</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Senior Level</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Own Clinic:</strong> Build reputation in locality, 15-25 cases/day, hire assistants</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Corporate Path:</strong> Senior vet in pharma/feed companies, farm consultancy, good pay</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Options:</strong> Expand to multiple clinics, niche specialty (orthopedics), or teaching</span>
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
            BVSc Course Difficulty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                High Difficulty
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Surgery (precision, anesthesia)</li>
                <li>• Anatomy (multiple species)</li>
                <li>• Pathology (disease patterns)</li>
                <li>• Obstetrics (dystocia cases)</li>
                <li>• Large animal handling (risk)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                Moderate Difficulty
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Medicine (diagnosis &amp; treatment)</li>
                <li>• Pharmacology (drug dosages)</li>
                <li>• Microbiology (disease organisms)</li>
                <li>• Parasitology (worms/ticks)</li>
                <li>• Clinical rotations (practical)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Manageable Topics
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Animal nutrition basics</li>
                <li>• Livestock production</li>
                <li>• Extension education</li>
                <li>• Public health veterinary</li>
                <li>• Basics of animal husbandry</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Specializations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Heart className="h-8 w-8 text-purple-600 mr-3" />
            Veterinary Specialization Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Dog className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Small Animal Practice</h3>
              <p className="text-gray-600 mb-4 text-sm">Pet clinics, dogs/cats/birds, urban practice, surgeries, vaccinations</p>
              <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹6-40 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Activity className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Large Animal (Livestock)</h3>
              <p className="text-gray-600 mb-4 text-sm">Cattle, buffalo, sheep, goat - dairy farms, field work, reproduction</p>
              <div className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹4-25 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Bird className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Poultry Veterinarian</h3>
              <p className="text-gray-600 mb-4 text-sm">Commercial poultry farms, disease prevention, biosecurity, herd health</p>
              <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹5-30 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Shield className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Wildlife Veterinarian</h3>
              <p className="text-gray-600 mb-4 text-sm">Zoos, wildlife sanctuaries, conservation projects, field captures</p>
              <div className="bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹4-20 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Fish className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Aquatic Veterinarian</h3>
              <p className="text-gray-600 mb-4 text-sm">Fish farms, aquaculture, disease diagnosis, water quality management</p>
              <div className="bg-red-100 text-red-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹3-18 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Building className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Corporate/Pharma Vet</h3>
              <p className="text-gray-600 mb-4 text-sm">Animal pharma companies, technical roles, sales, R&amp;D support</p>
              <div className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹6-35 LPA</div>
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
                  <span className="text-gray-700"><strong>Work with Animals:</strong> Perfect for animal lovers, bond with pets, fulfilling to save lives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Diverse Career Options:</strong> Pets, livestock, wildlife, pharma, govt, research - many paths</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Growing Pet Market:</strong> India's pet industry growing 15-20% annually, metros booming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Job Security:</strong> Always demand for vets in rural areas, govt jobs stable, own practice</span>
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
                  <span className="text-gray-700"><strong>Lower Pay Than MBBS:</strong> Starting ₹25-40K/month. MBBS doctors earn 2-3x more initially</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Emotionally Draining:</strong> Euthanasia decisions, animal suffering, aggressive pets, owner grief</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Physical Demands:</strong> Long hours, standing, field work in harsh weather, risk of injury</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Limited Pet Culture:</strong> Only metros have good pet market. Tier 2/3 owners hesitant to pay</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Become an Animal Healthcare Hero</h2>
          <p className="text-xl text-green-100 mb-8">
            Veterinary science offers a unique opportunity to work with animals, make a real difference in their lives, and contribute to animal welfare. While the pay is lower than human medicine initially, the emotional rewards and diverse career paths make it a fulfilling choice for passionate animal lovers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/medical" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore More Medical Careers
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

export default VeterinaryDetails
