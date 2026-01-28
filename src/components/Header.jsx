import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isStreamsOpen, setIsStreamsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Class 10 & Below', href: '/class-10-below' },
    {
      name: 'Streams',
      href: '/stream-selection',
      submenu: [
        { name: 'Science PCM (Engineering)', href: '/engineering' },
        { name: 'Science PCB (Medical)', href: '/medical' },
        { name: 'Commerce', href: '/commerce' },
        { name: 'Arts/Humanities', href: '/arts' },
        { name: 'Emerging Careers ✨', href: '/emerging-careers' },
      ],
    },
    { name: 'AI Impact', href: '/ai-impact' },
    { name: 'Resources', href: '/resources' },
  ]

  const isActive = (href) => location.pathname === href

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="section-container">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 min-w-max">
            <div className="bg-primary-600 p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900">Career Guide</span>
              <p className="text-xs text-gray-600">For Indian Students</p>
            </div>
            <span className="sm:hidden text-lg font-bold text-gray-900">CareerGuide</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        item.submenu.some(sub => isActive(sub.href)) || isActive(item.href)
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2">
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                        >
                          All Streams Overview
                        </Link>
                        <hr className="my-2 border-gray-100" />
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              isActive(subitem.href)
                                ? 'text-primary-600 bg-primary-50 font-medium'
                                : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                            }`}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setIsStreamsOpen(!isStreamsOpen)}
                        className={`flex items-center justify-between w-full px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                          item.submenu.some(sub => isActive(sub.href)) || isActive(item.href)
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          className={`h-5 w-5 transform transition-transform ${
                            isStreamsOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {isStreamsOpen && (
                        <div className="mt-2 pl-4 space-y-1">
                          <Link
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50"
                          >
                            All Streams Overview
                          </Link>
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              to={subitem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                                isActive(subitem.href)
                                  ? 'text-primary-600 bg-primary-50 font-medium'
                                  : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                              }`}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header