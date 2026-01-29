import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  Mic, 
  Film, 
  Headphones, 
  Globe, 
  Award,
  Briefcase,
  Target,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Building,
  Heart,
  TrendingUp,
  Clock,
  DollarSign,
  Radio,
  Star,
  Users,
  Zap
} from 'lucide-react'

const DubbingArtistDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/emerging-careers" className="hover:text-blue-600 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Emerging Careers
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Dubbing Artist / Voice Actor</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Voice Professional
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Dubbing Artist / Voice Actor
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Provide voice for films, animation, ads, audiobooks, video games, and documentaries. Dub Hollywood movies into Hindi/regional languages, voice animated characters, narrate audiobooks, record commercials, and bring scripts to life with your voice. A creative freelance career requiring voice modulation, acting ability, multiple language fluency, and home recording studio. Work is project-based—some months earn ₹50K+, other months ₹5K. Build portfolio through auditions, networking in Mumbai/Chennai dubbing studios, and online platforms like Fiverr/Voice123. Top voice actors earn ₹2-10L per film, but most struggle with irregular income.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹5-20K</div>
                  <div className="text-sm text-gray-200">Per Project</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹2-10L</div>
                  <div className="text-sm text-gray-200">Celebrity Voice</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">₹3-15L PA</div>
                  <div className="text-sm text-gray-200">Established</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Film className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Film Dubbing</h3>
                <p className="text-sm text-gray-200">Hollywood Hindi/Regional</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Star className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Animation</h3>
                <p className="text-sm text-gray-200">Disney/Pixar/Cartoon</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Radio className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Ads & Commercials</h3>
                <p className="text-sm text-gray-200">TV/Radio/YouTube</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Headphones className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Audiobooks</h3>
                <p className="text-sm text-gray-200">Narration Work</p>
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
            Reality Check: The Honest Truth About Voice Acting
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">Highly Irregular Income</h3>
              <p className="text-sm text-gray-700">Project-based work. Some months ₹50K+, other months ₹5K or ZERO. No salary. Always hustling for next project. 80% artists struggle to make ₹20K/month consistently</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">Competition from Celebrities</h3>
              <p className="text-sm text-gray-700">Bollywood actors doing own dubbing now. Shah Rukh Khan, Aamir Khan dub themselves. Foreign films hiring stars for Hindi (Ranveer for Deadpool). Regular voice artists losing premium work</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">Requires Multiple Languages</h3>
              <p className="text-sm text-gray-700">Hindi + English mandatory. Tamil/Telugu/Bengali = more work. Need perfect pronunciation, accents, dialects. Single language = limited opportunities. Regional dubbing pays better but needs fluency</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">Voice Strain & Damage Risk</h3>
              <p className="text-sm text-gray-700">8-10 hour recording sessions. Shouting, screaming, character voices strain vocal cords. Throat infections common. Voice damage can END career. Proper technique critical or permanent harm</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">Must Invest in Home Studio</h3>
              <p className="text-sm text-gray-700">Need recording setup (₹50K-2L) for auditions/freelance work. Mic, soundproofing, software. Studios don't provide for auditions. Without home setup, can't compete for online projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <DollarSign className="h-8 w-8 text-green-600 mr-3" />
            Income Reality (Extremely Variable & Project-Based)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Beginner (0-2 years)</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">₹2-10K/mo</div>
              <p className="text-sm text-gray-600 mb-4">Struggling phase</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Small ads: ₹1-5K per project</li>
                <li>• Background voices: ₹500-2K</li>
                <li>• Freelance gigs: ₹20-50/minute</li>
                <li>• Mostly unpaid auditions</li>
                <li>• Building portfolio & reel</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Developing (2-5 years)</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹15-40K/mo</div>
              <p className="text-sm text-gray-600 mb-4">Regular work starts</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• TV ads: ₹5-20K per commercial</li>
                <li>• Animation episodes: ₹8-15K</li>
                <li>• Regional dubbing: ₹10-30K per film</li>
                <li>• Audiobook chapters: ₹2-8K per chapter</li>
                <li>• Still very unstable income</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Established (5-10 years)</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">₹40K-1L/mo</div>
              <p className="text-sm text-gray-600 mb-4">Consistent projects</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Hollywood Hindi dub: ₹30-80K per film</li>
                <li>• Lead animation voice: ₹50K-1.5L per series</li>
                <li>• Premium ads: ₹25-50K each</li>
                <li>• Audiobook narrator: ₹50K-2L per book</li>
                <li>• Known name in industry</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 shadow-sm border-2 border-purple-300">
              <h3 className="text-lg font-semibold mb-2">Celebrity Voice Actor</h3>
              <div className="text-3xl font-bold text-purple-700 mb-2">₹2-10L/film</div>
              <p className="text-sm text-gray-600 mb-4">Top 1% only</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Hollywood blockbuster Hindi: ₹2-5L</li>
                <li>• Iconic character voices: ₹3-10L</li>
                <li>• Brand voice ambassador: ₹5-20L/year</li>
                <li>• Training/workshops: ₹20-50K per session</li>
                <li>• 20+ years experience typically</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-sm text-gray-800"><strong>Reality:</strong> Income is HIGHLY VARIABLE. One month might earn ₹60K (landed 3 good projects), next month ₹3K (no work). 80% voice artists struggle to make ₹20K/month consistently. Celebrity voices (₹2-10L per film) are top 1% after 20+ years. Average established artist earns ₹3-8L per year. Need other income sources initially (teaching voice, freelance platforms). Project gaps of 2-3 months common. NO job security whatsoever.</p>
          </div>
        </div>
      </section>

      {/* Daily Work & Project Types */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            Types of Voice Work (Wide Variety)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Major Project Categories</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Film className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Film Dubbing:</strong> Hollywood movies to Hindi/Tamil/Telugu. Lip-sync critical. ₹30-80K per film (regular), ₹2-5L (celebrity). Studios: Mumbai (Andheri), Chennai</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Animation/Cartoons:</strong> Disney/Pixar/Nickelodeon Hindi/regional. Character voices. ₹8-15K per episode, ₹50K-1.5L per series. Fun but requires versatility</span>
                </li>
                <li className="flex items-start">
                  <Radio className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Ads & Commercials:</strong> TV/radio/YouTube ads. Quick jobs. ₹5-20K per ad (small brands), ₹25-80K (major brands). High competition</span>
                </li>
                <li className="flex items-start">
                  <Headphones className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Audiobooks:</strong> Narrating books for Audible, Storytel. ₹50K-2L per book (10-15 hours recording). Growing market. Requires consistent voice quality</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Video Games:</strong> Character voices, narration. ₹10-50K per game. Emerging in India. Requires dramatic range—battle cries, emotions</span>
                </li>
                <li className="flex items-start">
                  <Globe className="h-5 w-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Documentaries/E-Learning:</strong> Narration for docs, corporate videos, online courses. ₹5-30K per project. Stable but lower pay</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Typical Recording Day</h3>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Morning: Auditions & Home Recording</h4>
                  <p className="text-sm text-gray-700">Check emails for casting calls. Record audition samples at home studio (2-3 hours). Send voice reels. Most auditions = rejection. 1 in 20 converts</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Afternoon: Studio Session (If Booked)</h4>
                  <p className="text-sm text-gray-700">3-5 hour recording session. Dub film scenes with video playback. Match lip movements (lip-sync). Director gives feedback, retake 5-10 times per line. Intense concentration</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Evening: Freelance Projects</h4>
                  <p className="text-sm text-gray-700">Record for Fiverr/Voice123 clients. ₹500-5K gigs. Commercials, explainer videos, IVR recordings. Edit audio, deliver files. Hustle for income between major projects</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Reality: 60% Time = No Work</h4>
                  <p className="text-sm text-gray-700">Only 2-3 days/week have actual paid work. Rest = auditions, networking, practice, marketing yourself. Feast or famine cycle. Need savings for dry months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Entry Path */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="h-8 w-8 text-purple-600 mr-3" />
            How to Become a Dubbing Artist / Voice Actor
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border mb-8">
            <h3 className="text-xl font-semibold mb-6">No Formal Degree Required (Skill & Voice Quality Matter)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Voice Acting Courses (Optional but Helpful)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Barry John Acting Studio:</strong> Mumbai/Delhi, voice workshops ₹15-30K, 2-3 months</li>
                  <li>• <strong>Rahul Sharma Voice Acting Academy:</strong> Online, ₹10-25K, dubbing techniques</li>
                  <li>• <strong>FTII Pune:</strong> Acting diploma includes voice training, ₹2-5L, 1-2 years</li>
                  <li>• <strong>Online Platforms:</strong> Udemy/Coursera voice acting courses ₹1-5K</li>
                  <li>• Reality: Courses help but VOICE QUALITY > certificates</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Self-Learning Path (Most Common)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Practice voice modulation daily (character voices, accents)</li>
                  <li>• Watch films with subtitles, dub along at home</li>
                  <li>• Record yourself, analyze voice quality</li>
                  <li>• Learn multiple languages (Hindi + regional essential)</li>
                  <li>• Theater background helps (acting ability critical)</li>
                  <li>• YouTube tutorials for technique (free)</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-gray-800"><strong>Entry Reality:</strong> No degree needed but voice quality, acting ability, and language fluency are EVERYTHING. 90% learn by doing. Join theater groups for acting experience (free). Build home studio (₹50K-2L). Create voice reel showcasing range (characters, accents, emotions). Visit Mumbai dubbing studios (Andheri area) for auditions. Network with casting directors. Most break in through connections, not courses.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">Essential Requirements & Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-purple-900 mb-3">Core Requirements</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Voice quality:</strong> Clear, pleasant, versatile tone</li>
                  <li>• <strong>Multiple languages:</strong> Hindi + English + Tamil/Telugu/Bengali</li>
                  <li>• <strong>Perfect pronunciation:</strong> No accent issues in target language</li>
                  <li>• <strong>Home recording studio:</strong> ₹50K-2L investment mandatory</li>
                  <li>• <strong>Location:</strong> Mumbai/Chennai (where dubbing studios are)</li>
                  <li>• <strong>Age 18-45:</strong> Voice changes with age, peak 25-40</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-900 mb-3">Technical Skills</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Voice modulation (pitch, tone, emotion)</li>
                  <li>• Lip-sync accuracy (match mouth movements)</li>
                  <li>• Accent work (American, British, regional Indian)</li>
                  <li>• Character voice creation (villains, kids, elderly)</li>
                  <li>• Audio editing (Audacity, Adobe Audition basics)</li>
                  <li>• Microphone technique (distance, breathing)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-900 mb-3">Soft Skills (Critical)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Acting ability:</strong> Convey emotions through voice alone</li>
                  <li>• <strong>Quick learning:</strong> Adapt to director's vision instantly</li>
                  <li>• <strong>Patience:</strong> 10-15 retakes normal</li>
                  <li>• <strong>Networking:</strong> Build relationships with studios/directors</li>
                  <li>• <strong>Rejection handling:</strong> 95% auditions = no callback</li>
                  <li>• <strong>Hustle:</strong> Always marketing yourself for next project</li>
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
            <Mic className="h-8 w-8 text-yellow-600 mr-3" />
            Critical Skills for Voice Artists
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Voice & Language Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Voice modulation:</strong> Change pitch/tone/speed</li>
                <li>• <strong>Accent mastery:</strong> American, British, regional Indian dialects</li>
                <li>• <strong>Multiple languages:</strong> Hindi + English mandatory, regional bonus</li>
                <li>• <strong>Pronunciation:</strong> Flawless in all languages you work in</li>
                <li>• <strong>Vocal range:</strong> High to low pitch characters</li>
                <li>• <strong>Breath control:</strong> Long dialogues without gasping</li>
                <li>• <strong>Voice care:</strong> Warm-ups, hydration, avoid strain</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Acting & Performance (MOST CRITICAL!)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Emotional range:</strong> Happy/sad/angry/scared through voice</li>
                <li>• <strong>Character understanding:</strong> Become the character mentally</li>
                <li>• <strong>Improvisation:</strong> Natural delivery, not robotic</li>
                <li>• <strong>Lip-sync timing:</strong> Match mouth movements perfectly</li>
                <li>• <strong>Script reading:</strong> Cold reads with correct emotion</li>
                <li>• <strong>Direction following:</strong> Adapt to director's vision instantly</li>
                <li>• <strong>Stamina:</strong> Maintain quality for 8-hour sessions</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Technical & Business</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Home studio setup:</strong> Recording, editing, soundproofing</li>
                <li>• <strong>Audio software:</strong> Audacity, Adobe Audition basics</li>
                <li>• <strong>Demo reel creation:</strong> Showcase your range professionally</li>
                <li>• <strong>Marketing:</strong> Social media, networking, portfolio building</li>
                <li>• <strong>Freelance platforms:</strong> Fiverr, Voice123, Upwork profiles</li>
                <li>• <strong>Negotiation:</strong> Pricing your work correctly</li>
                <li>• <strong>Self-discipline:</strong> Manage irregular freelance schedule</li>
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
            Where Voice Artists Work (Mostly Freelance)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border border-blue-200">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Dubbing Studios</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Mumbai (Andheri):</strong> Hollywood Hindi dubbing hub, ₹30-80K per film</li>
                <li><strong>Chennai:</strong> Tamil/Telugu regional dubbing, ₹20-60K</li>
                <li><strong>Kolkata:</strong> Bengali films, ₹15-40K per project</li>
                <li><strong>Pros:</strong> Regular work if established, professional environment</li>
                <li><strong>Cons:</strong> Mumbai/Chennai relocation mandatory, high competition</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border border-purple-200">
              <h3 className="font-semibold text-lg mb-4 text-purple-900">Freelance (Home Studio)</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Fiverr/Voice123/Upwork:</strong> ₹500-5K per gig, global clients</li>
                <li><strong>Direct clients:</strong> YouTubers, businesses, indie games</li>
                <li><strong>Audiobook platforms:</strong> ACX, Storytel ₹50K-2L per book</li>
                <li><strong>Pros:</strong> Work from anywhere, flexible hours, set own rates</li>
                <li><strong>Cons:</strong> Unstable income, constant hustling, payment delays</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border border-green-200">
              <h3 className="font-semibold text-lg mb-4 text-green-900">Teaching & Training</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Voice acting workshops:</strong> ₹20-50K per workshop (weekend)</li>
                <li><strong>Online courses:</strong> Udemy/own platform ₹5-20K per student</li>
                <li><strong>Private coaching:</strong> ₹1-3K per hour, 1-on-1 sessions</li>
                <li><strong>When:</strong> After 5-10 years experience, stable income source</li>
                <li><strong>Reality:</strong> Many voice artists teach to supplement irregular project income</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border border-orange-200">
              <h3 className="font-semibold text-lg mb-4 text-orange-900">Animation Studios</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Disney India:</strong> Hindi versions ₹50K-1.5L per series</li>
                <li><strong>Nickelodeon/Cartoon Network:</strong> Character voices ₹8-15K per episode</li>
                <li><strong>Indian animation:</strong> Chhota Bheem, Motu Patlu ₹5-12K per episode</li>
                <li><strong>Pros:</strong> Fun work, long-term series contracts</li>
                <li><strong>Entry:</strong> Versatile character voices essential, audition heavily</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-sm border border-red-200">
              <h3 className="font-semibold text-lg mb-4 text-red-900">Ad Agencies & Brands</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>TV commercials:</strong> ₹10-50K per ad (30-60 seconds)</li>
                <li><strong>Radio jingles:</strong> ₹5-20K per recording</li>
                <li><strong>YouTube ads:</strong> ₹3-15K, growing market</li>
                <li><strong>Brand voice:</strong> ₹5-20L/year exclusivity (rare)</li>
                <li><strong>Reality:</strong> High competition, celebrities often preferred for major brands</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm border border-indigo-200">
              <h3 className="font-semibold text-lg mb-4 text-indigo-900">Video Game & Tech</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Video game characters:</strong> ₹10-50K per game (emerging in India)</li>
                <li><strong>IVR recordings:</strong> Customer service voices ₹2-10K</li>
                <li><strong>App voiceovers:</strong> GPS, AI assistants ₹5-30K</li>
                <li><strong>E-learning:</strong> Online course narration ₹10-50K</li>
                <li><strong>Future:</strong> Growing market with gaming boom in India</li>
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
            Career Roadmap for Voice Artists
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 0-3: Building Foundation & Portfolio</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Struggling</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Mic className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Develop Voice:</strong> Join theater groups (acting practice). Learn multiple languages/accents. Practice voice modulation daily (characters, emotions)</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Build Home Studio:</strong> Invest ₹50K-2L (mic, soundproofing, software). Record demo reel showcasing range. Create profiles on Fiverr/Voice123</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Network & Audition:</strong> Visit Mumbai/Chennai dubbing studios. Audition constantly (95% rejection). Take ANY paid work to build portfolio. Earn ₹2-10K/month</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 3-7: Regular Work & Specialization</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Developing</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Consistent Projects:</strong> TV ads, animation episodes, regional dubbing. Earn ₹15-40K/month. Still very variable but better than starting</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Find Niche:</strong> Specialize in animation, audiobooks, or regional dubbing. Build reputation in one area. Repeat clients start coming</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Expand Income:</strong> Freelance online (Fiverr ₹500-5K gigs), start teaching voice (₹1-3K per hour), audiobook narration (₹50K-2L per book)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Year 7-15+: Established Voice Actor</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Established</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Film className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Hollywood Dubbing:</strong> Hindi dubs of major films ₹30-80K per film. Known name in dubbing circles. Directors call YOU for projects</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Signature Characters:</strong> If lucky, voice iconic characters (Iron Man Hindi, Disney princesses). ₹50K-1.5L per series. Fans recognize your voice</span>
                </li>
                <li className="flex items-start">
                  <Building className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Multiple Revenue Streams:</strong> Projects (₹40K-1L/month) + teaching (₹20-50K/workshop) + brand work (₹5-20L/year rare). Earn ₹5-15L per year total</span>
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
            <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
            Challenges & Difficulty Reality
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Extremely Difficult
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Irregular income (₹50K one month, ₹3K next, no stability)</li>
                <li>• Competition from celebrities (Bollywood stars dubbing themselves)</li>
                <li>• Breaking into industry (95% auditions = rejection, connections critical)</li>
                <li>• Surviving first 3 years (₹2-10K/month, need other income)</li>
                <li>• Voice damage risk (career-ending if vocal cords injured)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                <Clock className="h-6 w-6 mr-2" />
                Moderate Challenges
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Learning multiple languages fluently (Hindi + regional essential)</li>
                <li>• Mastering lip-sync technique (match mouth movements perfectly)</li>
                <li>• Building home studio (₹50K-2L investment mandatory)</li>
                <li>• Relocating to Mumbai/Chennai (where dubbing work is)</li>
                <li>• Maintaining voice health (proper technique, rest, hydration)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Manageable Aspects
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• No formal degree needed (voice quality + acting ability enough)</li>
                <li>• Learning voice modulation (practice makes perfect)</li>
                <li>• Recording at home (flexible schedule once established)</li>
                <li>• Freelance platforms (Fiverr work accessible to anyone)</li>
                <li>• Basic audio editing (Audacity free, YouTube tutorials)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Globe className="h-8 w-8 text-purple-600 mr-3" />
            Voice Acting Specializations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Film className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Film Dubbing Artist</h3>
              <p className="text-gray-600 mb-4 text-sm">Hindi/regional dubs of Hollywood films. Lip-sync mastery. Based in Mumbai/Chennai studios</p>
              <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹3-10 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Star className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Animation Voice Actor</h3>
              <p className="text-gray-600 mb-4 text-sm">Disney/Pixar/cartoon character voices. Requires versatility, range. Series contracts ₹50K-1.5L</p>
              <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹4-15 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Headphones className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Audiobook Narrator</h3>
              <p className="text-gray-600 mb-4 text-sm">Narrate books for Audible, Storytel. Consistent voice quality critical. ₹50K-2L per book</p>
              <div className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹3-12 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Radio className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Commercial Voice Artist</h3>
              <p className="text-gray-600 mb-4 text-sm">TV/radio ads, corporate videos. Quick turnaround. ₹5-50K per ad depending on brand</p>
              <div className="bg-red-100 text-red-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹2-8 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Zap className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Video Game Voice Actor</h3>
              <p className="text-gray-600 mb-4 text-sm">Character voices, narration. Emerging in India. Requires dramatic range, battle cries</p>
              <div className="bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹2-10 LPA</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <TrendingUp className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Voice Acting Coach</h3>
              <p className="text-gray-600 mb-4 text-sm">Teach workshops, online courses, private coaching. After 5-10 years experience. Stable income</p>
              <div className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-sm font-medium inline-block">₹3-15 LPA</div>
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
                  <span className="text-gray-700"><strong>No Formal Degree Needed:</strong> Voice quality, acting ability, language fluency matter. No expensive education required. Theater background helps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Creative & Satisfying Work:</strong> Bring characters to life, storytelling through voice. Fans appreciate your work. See your name in film credits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Work From Home Possible:</strong> Once established, record at home studio. Flexible schedule. No commute. Global clients via Fiverr/Voice123</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Fame Potential (Rare):</strong> Celebrity voice actors known industry-wide. Iron Man Hindi voice, Disney characters. Top 1% earn ₹10-25L+ annually</span>
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
                  <span className="text-gray-700"><strong>HIGHLY Irregular Income:</strong> Project-based, no salary. ₹50K one month, ₹3K next. 80% struggle to make ₹20K/month consistently. No stability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Competition from Celebrities:</strong> Bollywood stars dubbing themselves (Shah Rukh, Ranveer). Regular voice artists losing premium Hollywood work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Requires Multiple Languages:</strong> Hindi + English + Tamil/Telugu = more work. Single language = limited opportunities. Fluency takes years</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700"><strong>Voice Damage Can End Career:</strong> Vocal cord strain from shouting/long sessions. Throat infections. Permanent damage = career over. No insurance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mic className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Should You Become a Dubbing Artist / Voice Actor?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Voice acting is ideal if you have exceptional voice quality, acting ability, and fluency in multiple languages. It's NOT a stable salaried job—income is HIGHLY irregular and project-based. Reality check: First 3 years = ₹2-10K/month struggling phase with 95% audition rejections. You'll need home recording studio (₹50K-2L investment) and must relocate to Mumbai/Chennai where dubbing work is. 80% of voice artists struggle to make ₹20K/month consistently even after 5 years. One month earns ₹50K (3 good projects), next month ₹3K (no work). Competition brutal—Bollywood celebrities now dubbing themselves, taking premium Hollywood work. Voice damage from strain can END your career permanently (vocal cord injuries). Celebrity voice actors earning ₹2-10L per film are top 1% after 20+ years. Average established artist earns ₹3-8L per year total (projects + freelance + teaching). Best path: Build home studio → Create demo reel → Network in Mumbai/Chennai studios → Audition constantly → Take ANY paid work first 3 years → Specialize in one area (animation/audiobooks/regional) → Supplement with teaching voice. If you want stable salary and job security, this career will frustrate you. But if you have exceptional voice, love acting, know multiple languages, and can handle irregular income for years, it's creatively satisfying work. Only pursue if voice acting is your PASSION and you have financial backup for first 3-5 years.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/emerging-careers" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore More Emerging Careers
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

export default DubbingArtistDetails
