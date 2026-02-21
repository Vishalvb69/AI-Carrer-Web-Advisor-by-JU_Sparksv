import React, { useState } from 'react'
import { 
  BookOpen,
  Calculator,
  FileText,
  Download,
  ExternalLink,
  Search,
  Filter,
  Clock,
  Users,
  Award,
  Target,
  CheckCircle,
  MapPin,
  Building2,
  TrendingUp,
  Star
} from 'lucide-react'
import { colleges, collegeCategories, states } from '../data/colleges'

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCollegeCategory, setSelectedCollegeCategory] = useState('all')
  const [selectedState, setSelectedState] = useState('All States')
  const [collegeSearchTerm, setCollegeSearchTerm] = useState('')

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'exams', label: 'Exam Preparation' },
    { id: 'colleges', label: 'College Information' },
    { id: 'careers', label: 'Career Guidance' },
    { id: 'tools', label: 'Interactive Tools' }
  ]

  const resources = [
    {
      id: 1,
      title: 'JEE Main Preparation Guide',
      category: 'exams',
      type: 'PDF',
      description: 'Comprehensive guide covering all subjects, important topics, and preparation strategies',
      downloadSize: '2.5 MB',
      downloads: 15420,
      featured: true
    },
    {
      id: 2,
      title: 'NEET Biology Notes',
      category: 'exams',
      type: 'PDF',
      description: 'Complete biology notes covering NCERT syllabus with diagrams and key points',
      downloadSize: '8.2 MB',
      downloads: 12380
    },
    {
      id: 3,
      title: 'Top Engineering Colleges List',
      category: 'colleges',
      type: 'Excel',
      description: 'Detailed list of top engineering colleges with cutoffs, fees, and placement data',
      downloadSize: '1.1 MB',
      downloads: 9850,
      featured: true
    },
    {
      id: 4,
      title: 'CA Career Roadmap',
      category: 'careers',
      type: 'PDF',
      description: 'Step-by-step guide to becoming a Chartered Accountant including exam pattern',
      downloadSize: '1.8 MB',
      downloads: 7620
    },
    {
      id: 5,
      title: 'Medical Colleges Cutoff Calculator',
      category: 'tools',
      type: 'Interactive Tool',
      description: 'Calculate your expected college based on NEET rank and category',
      downloads: 25600,
      featured: true
    }
  ]

  const tools = [
    {
      title: 'Rank Predictor',
      description: 'Predict your exam rank based on expected marks',
      icon: <Calculator className="h-6 w-6" />,
      status: 'Available',
      link: '#predictor'
    },
    {
      title: 'College Finder',
      description: 'Find colleges based on your rank and preferences',
      icon: <Search className="h-6 w-6" />,
      status: 'Available',
      link: '#finder'
    },
    {
      title: 'Document Checklist',
      description: 'Complete checklist of required documents for admissions',
      icon: <FileText className="h-6 w-6" />,
      status: 'Available',
      link: '#checklist'
    },
    {
      title: 'Career Assessment',
      description: 'Discover suitable careers based on your interests',
      icon: <Target className="h-6 w-6" />,
      status: 'Coming Soon',
      link: '#assessment'
    }
  ]

  const examLinks = [
    {
      exam: 'JEE Main',
      links: [
        { title: 'Official Website', url: 'https://jeemain.nta.nic.in' },
        { title: 'Previous Year Papers', url: '#' },
        { title: 'Syllabus', url: '#' },
        { title: 'Exam Centers', url: '#' }
      ]
    },
    {
      exam: 'NEET UG',
      links: [
        { title: 'Official Website', url: 'https://neet.nta.nic.in' },
        { title: 'Previous Year Papers', url: '#' },
        { title: 'Syllabus', url: '#' },
        { title: 'Result', url: '#' }
      ]
    },
    {
      exam: 'CAT',
      links: [
        { title: 'Official Website', url: 'https://iimcat.ac.in' },
        { title: 'Mock Tests', url: '#' },
        { title: 'Preparation Tips', url: '#' },
        { title: 'Participating Institutes', url: '#' }
      ]
    }
  ]

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Filter colleges based on category, state, and search
  const filteredColleges = colleges.filter(college => {
    const matchesCategory = selectedCollegeCategory === 'all' || 
                           college.category.map(c => c.toLowerCase()).includes(selectedCollegeCategory) ||
                           (selectedCollegeCategory === 'iit' && college.type === 'IIT') ||
                           (selectedCollegeCategory === 'nit' && college.type === 'NIT') ||
                           (selectedCollegeCategory === 'iiit' && college.category.includes('IIIT')) ||
                           (selectedCollegeCategory === 'government' && college.ownership.includes('Government')) ||
                           (selectedCollegeCategory === 'private' && (college.ownership === 'Private' || college.ownership === 'Private (PPP)')) ||
                           (selectedCollegeCategory === 'top10' && college.rank <= 10) ||
                           (selectedCollegeCategory === 'top20' && college.rank <= 20) ||
                           (selectedCollegeCategory === 'top50' && college.rank <= 50)
    
    const matchesState = selectedState === 'All States' || college.state === selectedState
    
    const matchesSearch = college.name.toLowerCase().includes(collegeSearchTerm.toLowerCase()) ||
                         college.shortName.toLowerCase().includes(collegeSearchTerm.toLowerCase()) ||
                         college.city.toLowerCase().includes(collegeSearchTerm.toLowerCase()) ||
                         college.state.toLowerCase().includes(collegeSearchTerm.toLowerCase())
    
    return matchesCategory && matchesState && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 py-16">
        <div className="section-container">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Resources & Tools
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-4xl mx-auto">
              Access comprehensive study materials, interactive tools, and essential resources 
              to excel in your career journey and entrance exam preparation.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Interactive Tools</h2>
            <p className="text-body max-w-3xl mx-auto">
              Use our interactive tools to get personalized guidance and predictions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="card group hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                <div className="text-primary-600 mb-4 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    tool.status === 'Available'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {tool.status}
                  </span>
                  {tool.status === 'Available' && (
                    <a
                      href={tool.link}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      Use Tool →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Study Materials & Guides</h2>
            <p className="text-body max-w-3xl mx-auto">
              Download comprehensive study materials, guides, and important documents
            </p>
          </div>

          <div className="grid gap-6">
            {filteredResources.map(resource => (
              <div key={resource.id} className={`card ${resource.featured ? 'border-2 border-primary-300 bg-primary-50' : ''}`}>
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{resource.title}</h3>
                      {resource.featured && (
                        <span className="bg-primary-600 text-white px-2 py-1 rounded text-xs font-medium">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-3">{resource.description}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <FileText className="h-4 w-4" />
                        <span>{resource.type}</span>
                      </div>
                      {resource.downloadSize && (
                        <div className="flex items-center space-x-1">
                          <Download className="h-4 w-4" />
                          <span>{resource.downloadSize}</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{resource.downloads.toLocaleString()} downloads</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button className="btn-secondary">
                      Preview
                    </button>
                    <button className="btn-primary">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Top Engineering Colleges Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Top Engineering Colleges in India</h2>
            <p className="text-body max-w-3xl mx-auto">
              Explore India's top engineering colleges based on NIRF 2025 rankings with official website links
            </p>
          </div>

          {/* College Filters */}
          <div className="mb-8 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by college name, city, or state..."
                value={collegeSearchTerm}
                onChange={(e) => setCollegeSearchTerm(e.target.value)}
                className="input-field pl-12 text-center"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {collegeCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCollegeCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCollegeCategory === category.id
                      ? 'bg-primary-600 text-white shadow-md scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>

            {/* State Filter */}
            <div className="flex justify-center">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <p className="text-center text-gray-600 text-sm">
              Showing <span className="font-semibold text-primary-600">{filteredColleges.length}</span> colleges
            </p>
          </div>

          {/* Colleges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.slice(0, 30).map(college => (
              <div key={college.id} className="card group hover:border-primary-300 hover:shadow-xl transition-all duration-300">
                {/* Rank Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg font-bold text-white ${
                    college.rank <= 10 ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                    college.rank <= 20 ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
                    college.rank <= 50 ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                    'bg-gradient-to-br from-blue-500 to-primary-600'
                  }`}>
                    <div className="text-center">
                      <div className="text-xs opacity-90">Rank</div>
                      <div className="text-lg leading-none">{college.rank}</div>
                    </div>
                  </div>
                  {college.rank <= 10 && (
                    <Star className="h-6 w-6 text-yellow-500 fill-current" />
                  )}
                </div>

                {/* College Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {college.shortName}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{college.name}</p>

                {/* Location & Type */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{college.city}, {college.state}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Building2 className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{college.ownership}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <TrendingUp className="h-4 w-4 mr-2 text-gray-400" />
                    <span>NIRF Score: {college.score}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    college.type === 'IIT' ? 'bg-blue-100 text-blue-800' :
                    college.type === 'NIT' ? 'bg-green-100 text-green-800' :
                    college.ownership.includes('Government') ? 'bg-purple-100 text-purple-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {college.type}
                  </span>
                  {college.rank <= 10 && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                      Top 10
                    </span>
                  )}
                </div>

                {/* Official Website Link */}
                <a
                  href={college.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors group-hover:shadow-md"
                >
                  <span className="font-medium">Visit Official Website</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredColleges.length === 0 && (
            <div className="text-center py-12">
              <Building2 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No colleges found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Show More Button */}
          {filteredColleges.length > 30 && (
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Showing 30 of {filteredColleges.length} colleges
              </p>
              <button className="btn-secondary">
                Load More Colleges
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Official Exam Links */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Official Exam Websites</h2>
            <p className="text-body max-w-3xl mx-auto">
              Quick access to official exam websites and important resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {examLinks.map((exam, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{exam.exam}</h3>
                <div className="space-y-3">
                  {exam.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      <span className="text-gray-700">{link.title}</span>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-primary-600" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Checklist */}
      <section className="py-16 bg-gray-50" id="checklist">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-header">Admission Document Checklist</h2>
            <p className="text-body max-w-3xl mx-auto">
              Essential documents required for various entrance exams and college admissions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="subsection-header mb-6">For Entrance Exams</h3>
              <div className="space-y-3">
                {[
                  'Class 10th Mark Sheet',
                  'Class 12th Mark Sheet (or passing certificate)',
                  'Aadhar Card',
                  'Passport Size Photographs',
                  'Signature in prescribed format',
                  'Category Certificate (SC/ST/OBC)',
                  'Income Certificate (if applicable)',
                  'PwD Certificate (if applicable)'
                ].map((doc, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="subsection-header mb-6">For College Admission</h3>
              <div className="space-y-3">
                {[
                  'Entrance Exam Scorecard',
                  'Original Certificates (10th & 12th)',
                  'Transfer Certificate',
                  'Migration Certificate',
                  'Conduct Certificate',
                  'Medical Certificate',
                  'Domicile Certificate',
                  'Gap Year Affidavit (if applicable)'
                ].map((doc, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 card border-2 border-yellow-200 bg-yellow-50">
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-yellow-600 mt-1" />
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Important Tips</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Keep both original and photocopies of all documents</li>
                  <li>• Get documents notarized where required</li>
                  <li>• Prepare documents well in advance to avoid last-minute rush</li>
                  <li>• Check specific college requirements as they may vary</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="section-container">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Need More Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Get personalized guidance from our AI counselor
            </p>
            <a
              href="#chat"
              className="inline-flex items-center justify-center bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 focus:ring-4 focus:ring-white/50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Chat with AI Counselor
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources