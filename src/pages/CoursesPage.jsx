import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { careerCourses } from '../data/courses';

const CoursesPage = () => {
  const [selectedCareer, setSelectedCareer] = useState(null);
  
  const careerList = [
    { id: 'ethical-hacker', name: 'Ethical Hacker / Penetration Tester', category: 'Engineering' },
    { id: 'data-scientist', name: 'Data Scientist', category: 'Engineering' },
    { id: 'cloud-engineer', name: 'Cloud Engineer', category: 'Engineering' },
    { id: 'ui-ux-designer', name: 'UI/UX Designer', category: 'Engineering' },
    { id: 'chartered-accountant', name: 'Chartered Accountant (CA)', category: 'Commerce' },
    { id: 'stock-market-analyst', name: 'Stock Market Analyst / Trader', category: 'Commerce' },
    { id: 'company-secretary', name: 'Company Secretary (CS)', category: 'Commerce' },
    { id: 'investment-banker', name: 'Investment Banker', category: 'Commerce' },
    { id: 'script-writer', name: 'Script Writer', category: 'Arts' },
    { id: 'graphic-designer', name: 'Graphic Designer', category: 'Arts' },
    { id: 'psychologist', name: 'Psychologist', category: 'Arts' },
    { id: 'professor-lecturer', name: 'Professor / Lecturer', category: 'Arts' }
  ];

  const selectedCourseData = selectedCareer ? careerCourses[selectedCareer] : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600">Home</Link> / <span className="font-medium">Career Courses</span>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-2">Career Learning Paths</h1>
          <p className="text-xl text-blue-100">Explore courses, certifications, and skills needed for your dream career</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Career Selection Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow p-6 sticky top-4">
              <h3 className="font-bold text-lg mb-4">Select a Career</h3>
              <div className="space-y-2">
                {careerList.map(career => (
                  <button
                    key={career.id}
                    onClick={() => setSelectedCareer(career.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${
                      selectedCareer === career.id
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    <div className="text-sm">{career.name}</div>
                    <div className={`text-xs mt-1 ${selectedCareer === career.id ? 'text-blue-100' : 'text-gray-600'}`}>
                      {career.category}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className="md:col-span-2">
            {selectedCourseData ? (
              <div className="rounded-xl shadow overflow-hidden">
                {/* Gradient Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-8">
                  <h2 className="text-4xl font-bold mb-3">{selectedCourseData.title}</h2>
                  <p className="text-blue-100 text-lg">Master this career path with comprehensive courses and certifications</p>
                </div>

                {/* White Content Section */}
                <div className="bg-white p-8">
                {/* Summary Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8 bg-blue-50 p-6 rounded-lg">
                  <div>
                    <div className="flex items-center text-blue-600 mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-semibold text-sm">Duration</span>
                    </div>
                    <div className="text-lg font-bold text-gray-800">{selectedCourseData.totalDuration}</div>
                  </div>
                  <div>
                    <div className="flex items-center text-green-600 mb-2">
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span className="font-semibold text-sm">Total Cost</span>
                    </div>
                    <div className="text-lg font-bold text-gray-800">{selectedCourseData.totalCost}</div>
                  </div>
                  <div>
                    <div className="flex items-center text-purple-600 mb-2">
                      <BookOpen className="w-4 h-4 mr-2" />
                      <span className="font-semibold text-sm">Courses</span>
                    </div>
                    <div className="text-lg font-bold text-gray-800">{selectedCourseData.courses.length}</div>
                  </div>
                </div>

                {/* Skills Required */}
                <div className="mb-8">
                  <h3 className="font-bold text-xl mb-4 text-gray-800">Key Skills to Learn</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCourseData.skills.map((skill, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Course List */}
                <div>
                  <h3 className="font-bold text-xl mb-4 text-gray-800">Recommended Courses</h3>
                  <div className="space-y-4">
                    {selectedCourseData.courses.map((course, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 transition">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-800">{course.name}</h4>
                            <p className="text-sm text-gray-600">{course.provider}</p>
                          </div>
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">
                            {course.level}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mt-3 pt-3 border-t border-gray-200">
                          <div>
                            <div className="text-xs text-gray-600 mb-1">Duration</div>
                            <div className="text-sm font-semibold text-gray-800">{course.duration}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-600 mb-1">Cost</div>
                            <div className="text-sm font-semibold text-green-600">{course.cost}</div>
                          </div>
                          <div className="flex justify-end">
                            <a
                              href={course.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center"
                            >
                              Explore <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                  <p className="text-gray-700 mb-4">
                    💡 <span className="font-semibold">Tip:</span> Start with foundational courses, build projects, and gradually move to advanced certifications. Mix paid and free courses to balance cost and quality.
                  </p>
                </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow p-12 text-center">
                <BookOpen className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 text-lg">Select a career from the left to view learning paths and courses</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
