import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CareerCard from '../components/CareerCard'
import { careersByStream } from '../data/careers'
import { examsByStream } from '../data/exams'
import { 
  GraduationCap, 
  TrendingUp, 
  Clock, 
  Users,
  ArrowRight,
  BookOpen,
  Target,
  Award,
  Calculator,
  FileCheck,
  AlertCircle,
  CheckCircle,
  Calendar,
  MapPin,
  DollarSign
} from 'lucide-react'

const Engineering = () => {
  const [selectedTab, setSelectedTab] = useState('careers')
  const [selectedCareer, setSelectedCareer] = useState(null)
  
  const engineeringCareers = careersByStream.engineering
  const engineeringExams = examsByStream.engineering

  const tabs = [
    { id: 'careers', label: 'Career Paths', icon: <GraduationCap className="h-4 w-4" /> },
    { id: 'exams', label: 'Entrance Exams', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'counseling', label: 'Counseling Process', icon: <Target className="h-4 w-4" /> },
    { id: 'timeline', label: 'Important Dates', icon: <Calendar className="h-4 w-4" /> }
  ]

  const keyStats = [
    { label: 'Total Engineering Seats', value: '15+ Lakh', icon: <Users className="h-5 w-5" /> },
    { label: 'Average Salary', value: '₹6-20 LPA', icon: <DollarSign className="h-5 w-5" /> },
    { label: 'Top Companies', value: '1000+', icon: <Award className="h-5 w-5" /> },
    { label: 'Growth Rate', value: '12% YoY', icon: <TrendingUp className="h-5 w-5" /> }
  ]

  const counselingSteps = [
    {
      step: 1,
      title: 'JEE Main Qualification',
      description: 'Score required rank in JEE Main based on category',
      requirement: 'Rank 1-250K for good NITs/IIITs',
      timeline: 'April-May'
    },
    {
      step: 2,
      title: 'Choice Filling',
      description: 'Fill preferences for colleges and branches',
      requirement: 'Research colleges and branches thoroughly',
      timeline: 'June'
    },
    {
      step: 3,
      title: 'Seat Allocation',
      description: 'Seat allocation based on rank and choices',
      requirement: 'Wait for allocation rounds (6 rounds)',
      timeline: 'June-July'
    },
    {
      step: 4,
      title: 'Document Verification',
      description: 'Submit required documents for admission',
      requirement: 'Original certificates and fee payment',
      timeline: 'July-August'
    },
    {
      step: 5,
      title: 'Admission Confirmation',
      description: 'Complete admission formalities',
      requirement: 'Report to allotted college',
      timeline: 'August'
    }
  ]

  const importantDates = [
    { month: 'January', events: ['JEE Main Session 1 Registration', 'Previous year results analysis'] },
    { month: 'February', events: ['JEE Main Session 1 Exam', 'BITSAT Registration'] },
    { month: 'March', events: ['JEE Main Results', 'State exam registrations'] },
    { month: 'April', events: ['JEE Main Session 2', 'JEE Advanced Registration'] },
    { month: 'May', events: ['JEE Advanced Exam', 'State engineering exams'] },
    { month: 'June', events: ['JEE Results', 'JoSAA Counseling starts'] },
    { month: 'July', events: ['Seat allocation rounds', 'State counseling'] },
    { month: 'August', events: ['Classes begin', 'Final admissions'] }
  ]

  const documents = [
    'Class 10th Mark Sheet',
    'Class 12th Mark Sheet',
    'JEE Main Scorecard',
    'Category Certificate (if applicable)',
    'Income Certificate (if applicable)',
    'Domicile Certificate',
    'Aadhar Card',
    'Passport Size Photos',
    'Medical Certificate',
    'Character Certificate'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600 py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <GraduationCap className="h-4 w-4 text-yellow-300" />
                <span className="text-sm font-medium text-white">Science PCM Stream</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Engineering Careers
                <span className="block text-blue-200">& Opportunities</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Explore comprehensive information about engineering careers, entrance exams, 
                college admissions, and the complete roadmap to success in engineering fields.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="#exams"
                  onClick={() => setSelectedTab('exams')}
                  className="inline-flex items-center justify-center bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 focus:ring-2 focus:ring-white/50 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  View Entrance Exams
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                
                <Link 
                  to="#careers"
                  onClick={() => setSelectedTab('careers')}
                  className="inline-flex items-center justify-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 focus:ring-2 focus:ring-white/50 transition-all duration-200"
                >
                  Explore Careers
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {keyStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-blue-200 mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="section-container">
          <div className="flex flex-wrap gap-2 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="section-container">
          {/* Careers Tab */}
          {selectedTab === 'careers' && (
            <div id="careers">
              <div className="text-center mb-12">
                <h2 className="section-header">Engineering Career Paths</h2>
                <p className="text-body max-w-3xl mx-auto">
                  Discover various engineering disciplines, their career opportunities, salary prospects, and growth potential
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {engineeringCareers.map((career, index) => (
                  <CareerCard key={career.id} career={career} streamColor="primary" />
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card">
                  <h3 className="subsection-header mb-4">Popular Engineering Branches</h3>
                  <div className="space-y-3">
                    {engineeringCareers.map((career, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium text-gray-900">{career.title}</span>
                        <span className="text-green-600 font-semibold">{career.averageSalary}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card">
                  <h3 className="subsection-header mb-4">Industry Outlook</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="h-5 w-5 text-green-500 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Growing Demand</p>
                        <p className="text-sm text-gray-600">Engineering jobs expected to grow 4-22% by 2030</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-blue-500 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Emerging Technologies</p>
                        <p className="text-sm text-gray-600">AI, IoT, Renewable Energy creating new opportunities</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-purple-500 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Global Opportunities</p>
                        <p className="text-sm text-gray-600">Indian engineers highly valued worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Exams Tab */}
          {selectedTab === 'exams' && (
            <div id="exams">
              <div className="text-center mb-12">
                <h2 className="section-header">Engineering Entrance Exams</h2>
                <p className="text-body max-w-3xl mx-auto">
                  Complete guide to major engineering entrance exams, their patterns, and preparation strategies
                </p>
              </div>

              <div className="space-y-8">
                {engineeringExams.map((exam, index) => (
                  <div key={exam.id} className="card border-l-4 border-blue-500">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Basic Info */}
                      <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold text-blue-600 mb-2">{exam.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{exam.fullName}</p>
                        <p className="text-gray-700 mb-4">{exam.description}</p>
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <BookOpen className="h-4 w-4 text-blue-500" />
                            <span className="text-sm text-gray-600">{exam.conductedBy}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-blue-500" />
                            <span className="text-sm text-gray-600">{exam.frequency}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-blue-500" />
                            <span className="text-sm text-gray-600">{exam.seats}</span>
                          </div>
                        </div>
                      </div>

                      {/* Exam Details */}
                      <div className="lg:col-span-1">
                        <h4 className="font-semibold text-gray-900 mb-3">Exam Pattern</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Duration:</span>
                            <span className="font-medium">{exam.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Questions:</span>
                            <span className="font-medium">{exam.totalQuestions}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Max Marks:</span>
                            <span className="font-medium">{exam.maxMarks}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Mode:</span>
                            <span className="font-medium">{exam.examMode}</span>
                          </div>
                        </div>

                        <h4 className="font-semibold text-gray-900 mt-4 mb-3">Subjects</h4>
                        <div className="flex flex-wrap gap-2">
                          {exam.subjects.map((subject, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Important Info */}
                      <div className="lg:col-span-1">
                        <h4 className="font-semibold text-gray-900 mb-3">Important Details</h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="text-gray-600">Application Fee:</span>
                            <div className="mt-1">
                              <span className="font-medium text-green-600">General: {exam.fees.general}</span>
                              {exam.fees.scSt && (
                                <span className="block font-medium text-green-600">SC/ST: {exam.fees.scSt}</span>
                              )}
                            </div>
                          </div>

                          <div>
                            <span className="text-gray-600">Eligibility:</span>
                            <ul className="mt-1 space-y-1 text-xs text-gray-700">
                              <li>• {exam.eligibility.qualification}</li>
                              <li>• Age: {exam.eligibility.age}</li>
                              <li>• Attempts: {exam.eligibility.attempts}</li>
                            </ul>
                          </div>

                          <div>
                            <span className="text-gray-600">Key Dates:</span>
                            <ul className="mt-1 space-y-1 text-xs text-gray-700">
                              <li>• Application: {exam.importantDates.applicationStart}</li>
                              <li>• Exam: {exam.importantDates.examDates}</li>
                              <li>• Result: {exam.importantDates.resultDeclaration}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Preparation Tips */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-3">Preparation Tips</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {exam.preparationTips.map((tip, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Counseling Tab */}
          {selectedTab === 'counseling' && (
            <div id="counseling">
              <div className="text-center mb-12">
                <h2 className="section-header">Counseling Process</h2>
                <p className="text-body max-w-3xl mx-auto">
                  Step-by-step guide to engineering college admissions and counseling process
                </p>
              </div>

              {/* Counseling Steps */}
              <div className="space-y-8 mb-12">
                {counselingSteps.map((step, index) => (
                  <div key={step.step} className="flex items-start space-x-6">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1 card">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-sm text-gray-500">Requirement:</span>
                          <p className="text-sm font-medium text-gray-700">{step.requirement}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Timeline:</span>
                          <p className="text-sm font-medium text-blue-600">{step.timeline}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Required Documents */}
              <div className="card">
                <h3 className="subsection-header mb-6">Required Documents Checklist</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <FileCheck className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-yellow-800">Important Note:</p>
                      <p className="text-sm text-yellow-700">
                        Keep both original and photocopies of all documents. Some colleges may require notarized copies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Timeline Tab */}
          {selectedTab === 'timeline' && (
            <div id="timeline">
              <div className="text-center mb-12">
                <h2 className="section-header">Important Dates & Timeline</h2>
                <p className="text-body max-w-3xl mx-auto">
                  Year-round timeline of important events, exam dates, and admission deadlines
                </p>
              </div>

              <div className="space-y-6">
                {importantDates.map((monthData, index) => (
                  <div key={index} className="card border-l-4 border-blue-500">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-bold">
                        {monthData.month}
                      </div>
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="grid gap-3">
                      {monthData.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-gray-700">{event}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 card border-2 border-blue-200">
                <h3 className="subsection-header mb-4">Planning Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">For Class 11 Students</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Start JEE preparation early</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Focus on NCERT concepts</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Join coaching or self-study plan</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">For Class 12 Students</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Balance board exams and JEE prep</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Take regular mock tests</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Research colleges and branches</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="section-container">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your Engineering Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get personalized guidance for JEE preparation, college selection, and career planning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/resources"
                className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 focus:ring-4 focus:ring-white/50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Access Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#chat"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 focus:ring-4 focus:ring-white/50 transition-all duration-200"
              >
                Get AI Guidance
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Engineering