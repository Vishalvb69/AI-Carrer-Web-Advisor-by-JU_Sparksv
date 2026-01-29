import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  GraduationCap, 
  BookOpen, 
  Users, 
  School, 
  Award,
  Briefcase,
  Target,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Building,
  Brain,
  Heart,
  Laptop,
  Video,
  Clock,
  DollarSign
} from 'lucide-react'

const TeacherDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/arts" className="hover:text-blue-600 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Arts & Humanities
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Teacher/Educator</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Noble Profession - Shape Future Generations
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Teacher/Educator
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Educate and inspire students across schools, colleges, coaching centers, and online platforms. Shape minds, build futures, and contribute to society. Choose from government schools (stability + pension), private schools, college teaching (NET/PhD), coaching centers (high pay potential), or online teaching (flexibility). A respected career requiring passion for teaching, subject knowledge, and patience.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹3-8 LPA</div>
                  <div className="text-sm text-gray-200">School Teacher</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹6-15 LPA</div>
                  <div className="text-sm text-gray-200">College Professor</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹5-20L+</div>
                  <div className="text-sm text-gray-200">Coaching/Online</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <School className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">School Teacher</h3>
                <p className="text-sm text-gray-200">Primary/Secondary Ed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <GraduationCap className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">College Professor</h3>
                <p className="text-sm text-gray-200">Higher Education</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Users className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Coaching Center</h3>
                <p className="text-sm text-gray-200">Competitive Exams</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Video className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Online Teaching</h3>
                <p className="text-sm text-gray-200">EdTech Platforms</p>
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
            Reality Check: The Honest Truth About Teaching
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Government vs Private Salary Gap</h3>
              <p className="text-sm text-gray-700">Government teachers ₹4-10L with pension, job security. Private schools ₹2.5-6L, no pension, can be fired anytime. Huge gap for same work</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Transfers & Postings (Government)</h3>
              <p className="text-sm text-gray-700">Government teachers face mandatory transfers every 3-5 years. Posted to remote villages initially. Family relocation stress. No choice in location</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Dealing with Parents & Management</h3>
              <p className="text-sm text-gray-700">Angry parents blame teachers for child's poor performance. Management pressure to pass all students. No respect for academic rigor. Emotional toll high</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Beyond Teaching - Admin Burden</h3>
              <p className="text-sm text-gray-700">50% time on non-teaching: attendance, exams, marking papers, meetings, events, reports. Evening/weekend work common. Exhausting paperwork</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2">Star Teacher Myth (Coaching)</h3>
              <p className="text-sm text-gray-700">Only 1-2% coaching teachers earn ₹15-20L+. Most earn ₹4-8L. Star status takes 10+ years. Rest handle doubts, marking. Survivorship bias</p>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <DollarSign className="h-8 w-8 text-green-600 mr-3" />
            Earnings Breakdown by Teaching Path
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Private School Teacher</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">₹2.5-6 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Lower pay, no job security</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Primary teacher: ₹2.5-4L</li>
                <li>• Secondary: ₹3-5L</li>
                <li>• Senior: ₹4-6L</li>
                <li>• No pension, can be fired</li>
                <li>• Tier-2 cities even lower</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Government School Teacher</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">₹4-10 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Best stability + pension</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• TGT (Trained Graduate): ₹4-7L</li>
                <li>• PGT (Post Graduate): ₹5-9L</li>
                <li>• Principal: ₹8-12L</li>
                <li>• Pension after retirement</li>
                <li>• But: transfers mandatory</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">College Professor</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹6-15 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Requires NET/PhD</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Assistant Professor: ₹6-9L</li>
                <li>• Associate Professor: ₹10-13L</li>
                <li>• Professor: ₹13-18L</li>
                <li>• IIT/NIT/DU: Higher pay scale</li>
                <li>• Research + teaching</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 shadow-sm border-2 border-purple-300">
              <h3 className="text-lg font-semibold mb-2">Coaching/Online Star</h3>
              <div className="text-3xl font-bold text-purple-700 mb-2">₹8-25L+</div>
              <p className="text-sm text-gray-600 mb-4">Top 1-2% only!</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Star teacher (Unacademy): ₹15-25L+</li>
                <li>• Allen/Aakash seniors: ₹10-18L</li>
                <li>• Most teachers: ₹4-8L</li>
                <li>• YouTube (if viral): ₹10-50L+</li>
                <li>• Takes 10+ years to reach</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-sm text-gray-800"><strong>Reality:</strong> Government teaching is the most stable path with pension benefits. Private schools pay less but hiring is easier. Coaching/online teaching has highest ceiling but most teachers don't reach star status. College teaching requires PhD (5-7 years post-graduation) but offers research opportunities.</p>
          </div>
        </div>
      </section>

      {/* Daily Work & Responsibilities */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            What Teachers Actually Do Daily
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Core Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Classroom Teaching:</strong> Deliver lessons, explain concepts, conduct activities, maintain discipline, engage students</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Student Management:</strong> Handle different learning speeds, address doubts, motivate weak students, counsel issues</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Assessment & Evaluation:</strong> Create question papers, conduct tests, mark answer sheets, maintain grade records</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-pink-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Parent Communication:</strong> PTMs (parent-teacher meetings), progress reports, address complaints, manage expectations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Time Breakdown</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Classroom Teaching (40%)</h4>
                  <p className="text-sm text-gray-700">5-6 periods daily, 40-45 min each. Explaining concepts, solving examples, managing class</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Marking & Evaluation (25%)</h4>
                  <p className="text-sm text-gray-700">Check homework, mark test papers, maintain grade sheets. Takes 2-3 hours daily at home</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Administrative Work (25%)</h4>
                  <p className="text-sm text-gray-700">Attendance, reports, meetings, events, PTMs, documentation. Half your time is non-teaching!</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Lesson Planning (10%)</h4>
                  <p className="text-sm text-gray-700">Prepare lectures, create presentations, research topics, update knowledge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Path */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <GraduationCap className="h-8 w-8 text-purple-600 mr-3" />
            Education Path & Qualifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-6 text-blue-900">School Teacher Path</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Primary Teacher (Class 1-5)</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Qualification:</strong> 12th + 2-year D.El.Ed diploma</li>
                    <li>• <strong>OR:</strong> Graduation + 2-year D.El.Ed</li>
                    <li>• <strong>Entrance:</strong> State TET exams</li>
                    <li>• <strong>Salary:</strong> ₹2.5-6L (govt: ₹4-7L)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">TGT - Trained Graduate Teacher (Class 6-10)</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Qualification:</strong> Graduation + 2-year B.Ed</li>
                    <li>• <strong>Entrance:</strong> CTET (Central) or State TET</li>
                    <li>• <strong>Salary:</strong> ₹3-6L private, ₹5-8L govt</li>
                    <li>• <strong>Total:</strong> 5 years post-12th</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">PGT - Post Graduate Teacher (Class 11-12)</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Qualification:</strong> Post-graduation + B.Ed</li>
                    <li>• <strong>Subject specialization</strong> (Physics, Maths, English, etc.)</li>
                    <li>• <strong>Entrance:</strong> CTET/State TET</li>
                    <li>• <strong>Salary:</strong> ₹4-7L private, ₹6-10L govt</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-6 text-purple-900">College Professor Path</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2">Step 1: Post-Graduation (2 years)</h4>
                  <p className="text-sm text-gray-700">Master's degree (M.A., M.Sc., M.Com, etc.) in your subject. Minimum 55% marks required.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2">Step 2: NET/SET Exam (Mandatory)</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>UGC NET:</strong> National Eligibility Test (twice/year)</li>
                    <li>• <strong>OR State SET:</strong> For state colleges</li>
                    <li>• <strong>Difficulty:</strong> 5-10% pass rate. Very tough</li>
                    <li>• <strong>Syllabus:</strong> Research + subject knowledge</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2">Step 3: Assistant Professor (Entry)</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Start as Assistant Professor ₹6-9L</li>
                    <li>• Teach + research + publish papers</li>
                    <li>• After 4-5 years: Associate Professor ₹10-13L</li>
                    <li>• After 10+ years: Full Professor ₹13-18L</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2">PhD (Optional but Recommended)</h4>
                  <p className="text-sm text-gray-700">3-5 years research. Now mandatory for permanent positions. IITs/NITs prefer PhD holders.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">Key Entrance Exams</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">CTET (Central TET)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• For central govt schools (KVS, NVS)</li>
                  <li>• Paper I: Class 1-5</li>
                  <li>• Paper II: Class 6-8</li>
                  <li>• Twice a year (July, Dec)</li>
                  <li>• Valid for 7 years</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">State TET Exams</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Each state has own TET</li>
                  <li>• UP TET, Raj TET, Maharashtra TET</li>
                  <li>• For state govt schools</li>
                  <li>• Easier than CTET</li>
                  <li>• Lakhs of candidates compete</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">UGC NET</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• For college/university teaching</li>
                  <li>• 81 subjects available</li>
                  <li>• Two papers (online)</li>
                  <li>• 5-10% pass rate (tough!)</li>
                  <li>• Held twice yearly</li>
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
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Subject Knowledge</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Deep understanding of subject matter</li>
                <li>• Ability to explain complex topics simply</li>
                <li>• Stay updated with curriculum changes</li>
                <li>• Research skills (for college profs)</li>
                <li>• Multiple teaching methods</li>
                <li>• Question paper setting ability</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Soft Skills (CRITICAL!)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Patience</strong> - Deal with slow learners</li>
                <li>• <strong>Communication</strong> - Explain clearly</li>
                <li>• <strong>Empathy</strong> - Understand student struggles</li>
                <li>• <strong>Classroom management</strong> - Discipline</li>
                <li>• <strong>Motivation skills</strong> - Inspire students</li>
                <li>• <strong>Emotional intelligence</strong> - Handle stress</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Technical Skills (Modern Era)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• PowerPoint presentations</li>
                <li>• Online teaching platforms (Zoom, Google Meet)</li>
                <li>• Educational apps & tools</li>
                <li>• Video recording & editing (for online)</li>
                <li>• MS Office (Excel for grades, Word for reports)</li>
                <li>• Digital assessment tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Building className="h-8 w-8 text-blue-600 mr-3" />
            Teaching Career Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border border-blue-200">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Government Schools</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>KVS (Kendriya Vidyalaya):</strong> Central govt, ₹5-10L, transfers across India</li>
                <li><strong>NVS (Navodaya):</strong> Residential schools, similar to KVS</li>
                <li><strong>State Govt Schools:</strong> ₹4-8L, state-level transfers</li>
                <li><strong>Pros:</strong> Job security, pension, leaves</li>
                <li><strong>Cons:</strong> Mandatory transfers, remote postings initially</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border border-green-200">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Private Schools</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>CBSE/ICSE:</strong> ₹2.5-6L, metro cities higher</li>
                <li><strong>International Schools:</strong> ₹5-12L, best private pay</li>
                <li><strong>Small Town Schools:</strong> ₹2-4L, lower cost of living</li>
                <li><strong>Pros:</strong> No transfers, easier hiring</li>
                <li><strong>Cons:</strong> Low pay, no job security, can be fired</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border border-purple-200">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Coaching Centers</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Allen/Aakash/Resonance:</strong> JEE/NEET coaching ₹5-15L</li>
                <li><strong>Unacademy/Vedantu:</strong> Online ₹6-25L+ (stars only)</li>
                <li><strong>Local Coaching:</strong> ₹3-7L, board exam focus</li>
                <li><strong>Pros:</strong> High ceiling for stars, no admin work</li>
                <li><strong>Cons:</strong> 1% reach star level, performance pressure</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm border border-indigo-200">
              <h3 className="font-semibold text-lg mb-4 text-indigo-900">College/University</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>IIT/NIT/IIIT:</strong> ₹10-18L, research focus, PhD needed</li>
                <li><strong>Central Universities:</strong> DU/JNU ₹7-15L, good reputation</li>
                <li><strong>State Colleges:</strong> ₹6-12L, teaching-heavy</li>
                <li><strong>Pros:</strong> Intellectual work, research, respect</li>
                <li><strong>Cons:</strong> Requires NET/PhD, takes 7-10 years</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-6 shadow-sm border border-pink-200">
              <h3 className="font-semibold text-lg mb-4 text-pink-900">Online Teaching</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>EdTech Platforms:</strong> Unacademy, Vedantu, BYJU'S ₹5-20L+</li>
                <li><strong>YouTube:</strong> If viral, ₹10-50L+ (ads + courses)</li>
                <li><strong>Freelance:</strong> Chegg, Tutor.com ₹2-6L</li>
                <li><strong>Pros:</strong> Work from home, flexible, high ceiling</li>
                <li><strong>Cons:</strong> Competition intense, need personal brand</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border border-orange-200">
              <h3 className="font-semibold text-lg mb-4 text-orange-900">Specialized Teaching</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Special Education:</strong> Teach disabled kids ₹4-8L</li>
                <li><strong>Corporate Trainer:</strong> Soft skills training ₹6-15L</li>
                <li><strong>Language Teacher:</strong> English/French/German ₹3-8L</li>
                <li><strong>Music/Dance:</strong> Own classes ₹2-10L</li>
                <li><strong>Skill Training:</strong> ITI/polytechnic ₹4-8L</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Target className="h-8 w-8 text-purple-600 mr-3" />
            Teaching Career Roadmap
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 0-2: Education & Certification</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Foundation</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <GraduationCap className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Complete B.Ed (2 years):</strong> After graduation. Learn teaching methods, child psychology, classroom management. Mandatory for school teaching</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Pass TET/CTET:</strong> Qualify state or central TET. Start preparing 6 months before exam. Syllabus: pedagogy + subject + reasoning</span>
                </li>
                <li className="flex items-start">
                  <School className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>First Job:</strong> Start with private school ₹2.5-4L or prepare for govt exams. Teaching internship during B.Ed gives experience</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 2-7: Gaining Experience</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Growth</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Build Teaching Skills:</strong> Develop classroom presence, learn to manage students, improve explanation ability. First 2-3 years are learning curve</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Target Government Job:</strong> Keep attempting KVS/NVS/state govt exams. Once selected, ₹5-8L salary + job security for life</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>OR: Pursue NET:</strong> If interested in college teaching, clear NET exam. Then enroll for PhD (3-5 years) while teaching part-time</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 7-20+: Seniority & Leadership</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Established</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Senior Teacher/HOD:</strong> ₹6-10L after 10+ years. Handle department, mentor junior teachers, syllabus planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Principal/Vice Principal:</strong> ₹8-12L. Manage entire school, deal with parents/board, administrative role more than teaching</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Retirement:</strong> After 60 years (58 in some states). Government teachers get pension ₹30-50K/month for life. Private teachers get nothing</span>
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
            <Brain className="h-8 w-8 text-red-600 mr-3" />
            Challenges & Difficulty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Very Difficult
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Dealing with difficult parents/management</li>
                <li>• Clearing NET (5-10% pass rate)</li>
                <li>• Getting govt job (lakhs compete)</li>
                <li>• Motivating uninterested students</li>
                <li>• Emotional exhaustion from constant interaction</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                <Clock className="h-6 w-6 mr-2" />
                Moderate Challenges
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Classroom management & discipline</li>
                <li>• Keeping up with curriculum changes</li>
                <li>• Work-life balance (marking papers at home)</li>
                <li>• Adapting to online teaching tools</li>
                <li>• Low salary in private schools</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Manageable Aspects
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Subject knowledge (if passionate)</li>
                <li>• Completing B.Ed (straightforward)</li>
                <li>• Finding private school jobs (abundant)</li>
                <li>• Daily teaching routine (becomes natural)</li>
                <li>• School holidays (2-3 months/year)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Laptop className="h-8 w-8 text-purple-600 mr-3" />
            Teaching Specializations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <School className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Primary School Teacher</h3>
              <p className="text-gray-600 mb-4 text-sm">Teach Class 1-5, all subjects. Need D.El.Ed. Great for nurturing young minds</p>
              <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹2.5-7 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <BookOpen className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Subject Teacher (TGT/PGT)</h3>
              <p className="text-gray-600 mb-4 text-sm">Specialize in one subject (Maths, Science, English). Teach Class 6-12</p>
              <div className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹3-10 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <GraduationCap className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">College Professor</h3>
              <p className="text-gray-600 mb-4 text-sm">Teach undergrad/postgrad. Need NET/PhD. Research + teaching combined</p>
              <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹6-18 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Users className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Coaching Center Faculty</h3>
              <p className="text-gray-600 mb-4 text-sm">JEE/NEET/board exam coaching. Performance-based. High pay for stars</p>
              <div className="bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹4-25L+ LPA</div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Video className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Online Educator</h3>
              <p className="text-gray-600 mb-4 text-sm">EdTech platforms or YouTube. Work from home, flexible hours, need branding</p>
              <div className="bg-pink-100 text-pink-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹3-20L+ LPA</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Heart className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Special Education Teacher</h3>
              <p className="text-gray-600 mb-4 text-sm">Teach children with disabilities. Need specialized B.Ed. Very fulfilling work</p>
              <div className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹3-8 LPA</div>
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
                  <span className="text-gray-700"><strong>Job Security (Government):</strong> Once selected, job for life. Pension after retirement. Transfers but guaranteed employment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Respected Profession:</strong> Society respects teachers. Satisfaction of shaping young minds. Impact lasts generations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Great Work-Life Balance:</strong> Fixed school hours (8 AM-3 PM usually). 2-3 months vacation (summer/winter breaks). Weekends off</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Abundant Opportunities:</strong> Private school jobs easy to get. Can work anywhere in India. Multiple paths: school/college/online</span>
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
                  <span className="text-gray-700"><strong>Low Pay (Private):</strong> Private schools pay ₹2.5-5L only. No pension, no job security. Can be fired anytime. Hard to survive in metro</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Mandatory Transfers (Govt):</strong> Posted to remote villages initially. Family separation. Transfer every 3-5 years. No location choice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Emotional Exhaustion:</strong> Deal with difficult parents, uninterested students, management pressure. Marking papers at home. Constant stress</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Limited Growth:</strong> Salary increases slowly. Takes 20+ years to reach ₹10L. Can't become millionaire teaching (unless YouTube star)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Should You Become a Teacher?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Teaching is ideal if you genuinely enjoy explaining concepts and working with students. It's a stable, respected career with great work-life balance (school hours + 2-3 months vacation). Government teaching offers job security and pension, but requires clearing tough TET/NET exams and accepting mandatory transfers. Private schools hire easily but pay poorly (₹2.5-5L) with no job security. College teaching needs NET/PhD (7-10 years total) but offers intellectual satisfaction. If passionate about education and okay with modest salary, teaching is fulfilling. If money is priority, consider engineering or commerce instead.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/arts" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore More Arts Careers
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

export default TeacherDetails
