import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, DollarSign, Users, Star, Zap, BookOpen, CheckCircle2, XCircle, Globe, Smile } from 'lucide-react';

export default function ProfessionalModelDetails() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-700 via-pink-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/emerging-careers" className="inline-flex items-center text-white/90 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Careers
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-2">Professional Model (Fashion / Commercial / Runway)</h1>
            <p className="text-lg text-white/90">Appear in ads, runways, catalogues, or build an influencer brand. Extremely visual career—looks matter more than degrees.</p>

            <div className="grid md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 p-4 rounded-lg">
                <Camera className="w-6 h-6 mb-2" />
                <div className="text-sm text-white/80">Types</div>
                <div className="font-semibold">Runway • Commercial • Fitness</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <DollarSign className="w-6 h-6 mb-2" />
                <div className="text-sm text-white/80">Pay Range</div>
                <div className="font-semibold">₹2K–₹5L+ per job</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <Users className="w-6 h-6 mb-2" />
                <div className="text-sm text-white/80">Age Window</div>
                <div className="font-semibold">16–30 (varies by niche)</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <Star className="w-6 h-6 mb-2" />
                <div className="text-sm text-white/80">Top Earners</div>
                <div className="font-semibold">₹50L–5Cr/year (very rare)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reality Check */}
      <div className="container mx-auto px-4 -mt-10 relative z-20 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-indigo-600">
          <h2 className="text-2xl font-bold mb-4">Reality Check — Short & Honest</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-bold">Looks First</h3>
              <p className="text-sm text-gray-700">Face/height/body type decide opportunities. Agencies cast quickly and discard quickly.</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-bold">Age & Niche</h3>
              <p className="text-sm text-gray-700">Runway favors very specific heights/ages; commercial and catalogue work more flexible.</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-bold">Income Skewed</h3>
              <p className="text-sm text-gray-700">Top models earn a lot; most models earn small gigs and patch income with part-time work.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Income Reality */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-3">Income Reality</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border-l-4 border-gray-300">
              <h4 className="font-semibold">Beginner</h4>
              <p className="text-sm text-gray-700">Portfolio building: ₹0–₹10K/month. Small gigs ₹2K–10K each.</p>
            </div>
            <div className="p-4 border-l-4 border-green-400">
              <h4 className="font-semibold">Working Model</h4>
              <p className="text-sm text-gray-700">Regular commercial work: ₹20K–1L/month depending on bookings.</p>
            </div>
            <div className="p-4 border-l-4 border-yellow-400">
              <h4 className="font-semibold">Top Niche</h4>
              <p className="text-sm text-gray-700">Brand campaigns, Bollywood, international: ₹5L–5Cr/year (rare).</p>
            </div>
            <div className="p-4 border-l-4 border-red-400">
              <h4 className="font-semibold">Reality</h4>
              <p className="text-sm text-gray-700">Most models supplement income with part-time work; consistency is the challenge.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Life */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-3">Daily Life & Routine</h2>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• Castings & auditions multiple times/week; travel to shoots.</li>
            <li>• Portfolio shoots, test shoots, go-sees, fittings, grooming.</li>
            <li>• Maintain diet, skin, hair, fitness—looks are your asset.</li>
            <li>• Unpredictable schedule; bookings can vanish overnight.</li>
          </ul>
        </div>
      </div>

      {/* How to Start */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-3">How to Start — Short Path</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <h4 className="font-semibold">Portfolio</h4>
              <p>Build a clean portfolio with 6–12 professional images. Keep looks natural.</p>
            </div>
            <div>
              <h4 className="font-semibold">Agency</h4>
              <p>Submit to agencies (IMG, Elite, local); beware scams—never pay large upfront fees.</p>
            </div>
            <div>
              <h4 className="font-semibold">Niche</h4>
              <p>Choose: runway, beauty, commercial, fitness, kids. Pick what fits your look.</p>
            </div>
            <div>
              <h4 className="font-semibold">Safety</h4>
              <p>Read contracts, insist on receipts, avoid exploitative offers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-3">Skills Needed</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div>
              <h4 className="font-semibold">On-Camera</h4>
              <ul className="space-y-1">
                <li>• Photogenic, expression control</li>
                <li>• Posing, angles</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Runway / Movement</h4>
              <ul className="space-y-1">
                <li>• Confident walk, posture</li>
                <li>• Quick changes, stamina</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Business</h4>
              <ul className="space-y-1">
                <li>• Networking, negotiation</li>
                <li>• Social media branding</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Career Paths */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-3">Career Paths</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <h4 className="font-semibold">Fashion / Runway</h4>
              <p>High prestige, strict physical requirements, variable pay.</p>
            </div>
            <div>
              <h4 className="font-semibold">Commercial / Catalogue</h4>
              <p>More steady work, flexible looks, brand campaigns pay well.</p>
            </div>
            <div>
              <h4 className="font-semibold">Fitness / Lifestyle</h4>
              <p>Fitness models work with supplement brands, photoshoots, and social media.</p>
            </div>
            <div>
              <h4 className="font-semibold">Influencer / Actor</h4>
              <p>Use modeling as launchpad to acting or influencer careers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Difficulty, Pros/Cons, CTA */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-3">Bottom Line</h2>
          <p className="text-sm text-gray-700 mb-4">Very competitive, looks-driven, income unstable but scalable if you build brand and move into higher-paying niches.</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold">Pros</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• High upside for a few</li>
                <li>• No degree required</li>
                <li>• Path to acting/influencing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Cons</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Age/looks limit you</li>
                <li>• Many scams/low-pay jobs</li>
                <li>• Unpredictable income</li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-700">Smart path: Build portfolio while studying, sign with reputable agency, keep backup skills, grow social media to control your brand.</p>
          </div>

          <div className="text-center">
            <Link to="/emerging-careers" className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg">Explore Other Careers</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
