import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, TrendingUp, Target, GraduationCap, Briefcase, AlertCircle } from 'lucide-react';

const ChefDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/arts" className="hover:text-orange-600 transition-colors">Arts & Humanities</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Chef / Culinary Professional</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <UtensilsCrossed className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Chef / Culinary Professional</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Master the art and science of cooking. Create exquisite dishes, manage kitchens, and deliver unforgettable 
              dining experiences that delight customers across restaurants, hotels, and catering businesses.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Reality Check */}
        <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-orange-900 mb-2">👨‍🍳 Industry Reality Check</h3>
              <p className="text-orange-800 text-lg leading-relaxed">
                The culinary industry is growing with India's booming hospitality and food tech sectors. Tourism, food delivery, 
                and restaurant chains create abundant opportunities. <span className="font-bold">Starting salaries are modest (₹4-6 LPA), 
                but experienced chefs earn ₹50+ LPA</span>. However, expect long irregular hours, high stress, and demanding physical work. 
                Own restaurant ventures require significant capital.
              </p>
            </div>
          </div>
        </div>

        {/* Earnings Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Earnings Potential</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">Entry Level (0-3 years)</h3>
              <div className="text-3xl font-bold text-yellow-700 mb-2">₹4-8 LPA</div>
              <p className="text-sm text-gray-600 mb-4">Starting positions</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Commis Chef:</span>
                  <span className="font-semibold">₹3-5 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Station Chef:</span>
                  <span className="font-semibold">₹5-8 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Pastry Chef (Junior):</span>
                  <span className="font-semibold">₹5-7 LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Mid-Level (3-7 years)</h3>
              <div className="text-3xl font-bold text-blue-700 mb-2">₹12-25 LPA</div>
              <p className="text-sm text-gray-600 mb-4">With experience</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Sous Chef:</span>
                  <span className="font-semibold">₹12-18 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Kitchen Manager:</span>
                  <span className="font-semibold">₹15-25 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Executive Chef:</span>
                  <span className="font-semibold">₹20-30 LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Senior (7+ years)</h3>
              <div className="text-3xl font-bold text-green-700 mb-2">₹25-50+ LPA</div>
              <p className="text-sm text-gray-600 mb-4">Top positions</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Head Chef:</span>
                  <span className="font-semibold">₹30-50 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Celebrity Chef:</span>
                  <span className="font-semibold">₹50-100 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Restaurant Owner:</span>
                  <span className="font-semibold">₹20-200+ LPA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">💰 Alternative Income Streams</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">Own Business</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Restaurant: ₹20-200+ lakh annual profit</li>
                  <li>• Food delivery brand: ₹10-50 lakh/month</li>
                  <li>• Catering: ₹5-20 lakh per large event</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">Additional Revenue</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Cooking classes: ₹30k-2 lakh/month</li>
                  <li>• YouTube/Content: ₹1-10 lakh/month (with scale)</li>
                  <li>• Cookbooks & recipes: ₹5-50 lakh royalties</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-300 rounded-xl p-5">
            <p className="text-blue-900 font-medium">
              <strong>💡 Smart Strategy:</strong> Start at a 5-star hotel or Michelin-star restaurant (3-5 years) to learn 
              international techniques, build reputation, then open your own restaurant or establish yourself as a celebrity chef. 
              Food delivery and online classes provide additional income.
            </p>
          </div>
        </div>

        {/* What Chefs Do */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Career Paths in Culinary Arts</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Fine Dining Restaurants</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Michelin-star and luxury restaurants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Contemporary and fusion cuisine</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Tasting menus and special dining experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Culinary innovation and molecular gastronomy</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Hotels & Hospitality</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Hotel restaurant management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Banquet and event catering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Room service and in-room dining</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Hotel restaurant ownership opportunities</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Specialty Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Pastry and bakery specialization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Dietary (vegan, gluten-free, keto) specialists</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Regional and international cuisines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Nutritionist and food science chefs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Entrepreneurship & Media</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Own restaurant or cloud kitchen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Celebrity chef and brand endorsements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>YouTube cooking channel and content creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Cooking classes and culinary training</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Path */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Educational Pathway</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">Education Options</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <div className="flex-1">
                    <div className="font-semibold text-orange-900 text-lg">Diploma in Hotel Management (2 years)</div>
                    <div className="text-gray-700 mt-1">Culinary fundamentals, kitchen management, hospitality skills</div>
                    <div className="text-sm text-orange-700 mt-2">💡 Most common entry point for professional chefs</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div className="flex-1">
                    <div className="font-semibold text-orange-900 text-lg">B.Sc Food Science & Culinary Arts (4 years)</div>
                    <div className="text-gray-700 mt-1">Comprehensive culinary arts with food science foundation</div>
                    <div className="text-sm text-orange-700 mt-2">📚 University degree, better for corporate roles</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div className="flex-1">
                    <div className="font-semibold text-orange-900 text-lg">Professional Culinary Institutes (6-12 months)</div>
                    <div className="text-gray-700 mt-1">Specialized training in specific cuisines or specializations</div>
                    <div className="text-sm text-orange-700 mt-2">⚡ Quick skill-based training for career switchers</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                  <div className="flex-1">
                    <div className="font-semibold text-orange-900 text-lg">Apprenticeship (On-the-job training)</div>
                    <div className="text-gray-700 mt-1">Learn by working in restaurants, under experienced chefs</div>
                    <div className="text-sm text-orange-700 mt-2">👨‍🔧 Traditional route, most practical learning</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Top Culinary Schools (India)</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>Institute of Hotel Management (IHM)</strong> - Government institutes</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>ISHA International</strong> - Culinary focus</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>Welcomgroup Graduate School</strong> - Hyderabad</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏆</span>
                    <span><strong>KIIT School of Hotel Management</strong> - Odisha</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Essential Skills to Learn</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Core Culinary Skills</div>
                      <div className="text-sm">Knife skills, cooking techniques, food preparation</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Kitchen Management</div>
                      <div className="text-sm">Food costing, inventory, staff supervision</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Food Safety & Hygiene</div>
                      <div className="text-sm">FSSAI compliance, sanitation standards</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <div>
                      <div className="font-semibold">Leadership & Creativity</div>
                      <div className="text-sm">Menu design, innovation, team management</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Culinary Specializations</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
              <h3 className="text-lg font-bold text-orange-800 mb-2">French Cuisine</h3>
              <p className="text-sm text-gray-700 mb-3">Classical and contemporary French cooking</p>
              <div className="text-sm text-orange-700 font-semibold">Most prestigious culinary tradition</div>
            </div>

            <div className="bg-red-50 rounded-lg p-5 border border-red-200">
              <h3 className="text-lg font-bold text-red-800 mb-2">Indian Cuisines</h3>
              <p className="text-sm text-gray-700 mb-3">Regional Indian and fusion cooking</p>
              <div className="text-sm text-red-700 font-semibold">Growing global demand</div>
            </div>

            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">Asian Cuisines</h3>
              <p className="text-sm text-gray-700 mb-3">Chinese, Japanese, Thai, Asian fusion</p>
              <div className="text-sm text-green-700 font-semibold">Very popular in India</div>
            </div>

            <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Pastry & Baking</h3>
              <p className="text-sm text-gray-700 mb-3">Desserts, pastries, baked goods</p>
              <div className="text-sm text-purple-700 font-semibold">High demand specialty</div>
            </div>

            <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Dietary Specialization</h3>
              <p className="text-sm text-gray-700 mb-3">Vegan, gluten-free, keto, healthy</p>
              <div className="text-sm text-blue-700 font-semibold">Growing niche markets</div>
            </div>

            <div className="bg-pink-50 rounded-lg p-5 border border-pink-200">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Celebrity & Content</h3>
              <p className="text-sm text-gray-700 mb-3">TV shows, YouTube, food media</p>
              <div className="text-sm text-pink-700 font-semibold">High visibility, brand opportunity</div>
            </div>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
              <span className="mr-2">✅</span> Why Choose Culinary Arts
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Creative expression</strong> - Cooking is an art form with limitless possibilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Direct customer satisfaction</strong> - See immediate reactions to your work</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Entrepreneurship potential</strong> - Own restaurant or cloud kitchen</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Growing industry</strong> - Food delivery, restaurants, hotels booming</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Celebrity potential</strong> - YouTube, TV shows, brand endorsements</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">+</span>
                <span><strong>Passion-based career</strong> - Work with what you love daily</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
              <span className="mr-2">⚠️</span> Challenges to Consider
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Long irregular hours</strong> - Evenings, weekends, holidays (prime service times)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>High-stress environment</strong> - Kitchen heat, time pressure, perfectionism</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Physical demands</strong> - Standing 10+ hours, burns, knife injuries</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Lower starting pay</strong> - Only ₹4-6 LPA initially</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Restaurant failure risk</strong> - 60% restaurants fail within 5 years</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">−</span>
                <span><strong>Work-life balance</strong> - Difficult to maintain personal relationships</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Is Culinary Arts Right for You?</h2>
          <p className="text-orange-100 text-lg mb-6 max-w-3xl mx-auto">
            If you're passionate about food, creative, can handle pressure, love making people happy through cuisine, 
            and are willing to work long hours, culinary arts offers a fulfilling career. With tourism and food business booming, 
            opportunities are abundant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/arts" 
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center shadow-lg"
            >
              Explore Other Arts Careers
            </Link>
            <a 
              href="#" 
              className="bg-orange-500/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-500/40 transition-colors inline-flex items-center border border-white/30"
            >
              Talk to Career Counselor
            </a>
          </div>
          <p className="text-orange-200 mt-4 text-sm">
            💬 Still confused? Chat with our AI counselor for personalized guidance
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
