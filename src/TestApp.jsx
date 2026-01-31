import React from 'react'

function TestApp() {
  return (
    <div className="p-8 bg-blue-500 text-white text-2xl font-bold min-h-screen">
      <h1 className="text-4xl mb-4">✅ REACT + TAILWIND WORKING!</h1>
      <p className="mb-2">Career Counselor Test Page</p>
      <p className="text-lg">Current Time: {new Date().toLocaleString()}</p>
      <div className="mt-8 p-4 bg-white text-blue-500 rounded-lg">
        <p>Tailwind CSS is working! 🎨</p>
      </div>
    </div>
  )
}

export default TestApp