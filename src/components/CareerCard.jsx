import React from 'react'
import { Link } from 'react-router-dom'
import { 
  GraduationCap, 
  TrendingUp, 
  Clock, 
  Users,
  ArrowRight,
  BookOpen,
  Target,
  Award,
  DollarSign
} from 'lucide-react'

const CareerCard = ({ career, streamColor = 'primary' }) => {
  const colorClasses = {
    primary: 'border-primary-200 hover:border-primary-300 hover:shadow-primary-100',
    green: 'border-green-200 hover:border-green-300 hover:shadow-green-100',
    purple: 'border-purple-200 hover:border-purple-300 hover:shadow-purple-100',
    orange: 'border-orange-200 hover:border-orange-300 hover:shadow-orange-100'
  }

  const iconColorClasses = {
    primary: 'text-primary-600 bg-primary-100',
    green: 'text-green-600 bg-green-100',
    purple: 'text-purple-600 bg-purple-100',
    orange: 'text-orange-600 bg-orange-100'
  }

  return (
    <div className={`card border-2 ${colorClasses[streamColor]} transition-all duration-300 group hover:scale-105`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`${iconColorClasses[streamColor]} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
          <GraduationCap className="h-6 w-6" />
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Avg Salary</div>
          <div className="font-semibold text-green-600">{career.averageSalary}</div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{career.title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{career.description}</p>

      {/* Key metrics */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <TrendingUp className="h-5 w-5 text-green-500 mx-auto mb-1" />
          <div className="text-xs text-gray-500">Growth</div>
          <div className="font-semibold text-gray-900">{career.growthRate}</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <Award className="h-5 w-5 text-blue-500 mx-auto mb-1" />
          <div className="text-xs text-gray-500">Outlook</div>
          <div className="font-semibold text-gray-900">{career.futureOutlook}</div>
        </div>
      </div>

      {/* Top skills */}
      <div className="mb-4">
        <div className="text-xs font-semibold text-gray-700 mb-2">Key Skills:</div>
        <div className="flex flex-wrap gap-1">
          {career.skills.slice(0, 3).map((skill, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {skill}
            </span>
          ))}
          {career.skills.length > 3 && (
            <span className="text-xs text-gray-500 px-2 py-1">
              +{career.skills.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Top companies */}
      <div className="mb-6">
        <div className="text-xs font-semibold text-gray-700 mb-2">Top Employers:</div>
        <div className="text-xs text-gray-600">
          {career.companies.slice(0, 3).join(', ')}
          {career.companies.length > 3 && ' & more'}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
          Learn More
        </button>
        <Link 
          to={career.detailsUrl || '#'}
          className={`flex-1 ${streamColor === 'primary' ? 'bg-primary-600 hover:bg-primary-700' : streamColor === 'green' ? 'bg-green-600 hover:bg-green-700' : streamColor === 'purple' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-orange-600 hover:bg-orange-700'} text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center`}
        >
          View Details
        </Link>
      </div>

      {/* AI Impact indicator */}
      {career.aiImpact && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-yellow-800">AI Impact</span>
          </div>
          <p className="text-xs text-yellow-700 mt-1 line-clamp-2">{career.aiImpact}</p>
        </div>
      )}
    </div>
  )
}

export default CareerCard