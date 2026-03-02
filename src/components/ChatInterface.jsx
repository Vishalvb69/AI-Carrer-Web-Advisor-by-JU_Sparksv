import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Send, 
  Bot, 
  User, 
  Loader, 
  MessageCircle, 
  X, 
  Lightbulb,
  Clock
} from 'lucide-react'

const ChatInterface = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI career counselor. I can help you with stream selection, entrance exams, college admissions, and career guidance. What would you like to know?",
      sender: 'ai',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [rateLimitInfo, setRateLimitInfo] = useState(null)
  const [remainingMessages, setRemainingMessages] = useState(null)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Function to format message text with clickable links
  const formatMessageWithLinks = (text) => {
    // Regex to match paths like /career/mbbs, /resources, etc.
    const pathRegex = /(\/[\w-]+(?:\/[\w-]+)*)/g
    const parts = []
    let lastIndex = 0
    let match

    while ((match = pathRegex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index))
      }
      
      // Add the link
      const path = match[0]
      parts.push(
        <Link 
          key={`link-${match.index}`} 
          to={path} 
          className="text-blue-600 underline hover:text-blue-800 font-medium"
          onClick={() => setIsOpen(false)}
        >
          {path}
        </Link>
      )
      
      lastIndex = match.index + match[0].length
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex))
    }

    return parts.length > 0 ? parts : text
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const suggestedQuestions = [
    "Which stream should I choose after Class 10?",
    "What are the career options in engineering?",
    "How do I prepare for NEET?",
    "Tell me about AI impact on careers",
    "What documents do I need for college admission?"
  ]

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage = {
      id: Date.now(),
      text: inputMessage.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      // Prepare conversation history for context
      const conversationHistory = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }))

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage.trim(),
          conversationHistory
        })
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 429) {
          // Rate limit exceeded - show improved message with links
          setRateLimitInfo({
            resetIn: data.resetIn,
            showUntil: Date.now() + (data.resetIn * 60 * 1000),
            links: data.links || []
          })
          
          // Add rate limit message to chat
          const rateLimitMessage = {
            id: Date.now() + 1,
            text: data.error,
            sender: 'ai',
            timestamp: new Date(),
            isRateLimit: true,
            links: data.links
          }
          setMessages(prev => [...prev, rateLimitMessage])
          setRemainingMessages(0)
          return;
        }
        throw new Error(data.error || 'Failed to get response')
      }
      
      // Update remaining messages count
      if (data.remaining !== undefined) {
        setRemainingMessages(data.remaining)
      }

      const aiMessage = {
        id: Date.now() + 1,
        text: data.response,
        sender: 'ai',
        timestamp: new Date(),
        isSpamResponse: data.isSpamResponse || false
      }

      setMessages(prev => [...prev, aiMessage])

    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage = {
        id: Date.now() + 1,
        text: error.message || "Sorry, I'm having trouble responding right now. Please try again in a moment.",
        sender: 'ai',
        timestamp: new Date(),
        isError: true
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleSuggestedQuestion = (question) => {
    setInputMessage(question)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const clearChat = () => {
    setMessages([{
      id: 1,
      text: "Chat cleared! How can I help you with your career questions?",
      sender: 'ai',
      timestamp: new Date()
    }])
    setRateLimitInfo(null)
    setRemainingMessages(null)
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-primary-600 text-white p-3 sm:p-4 rounded-full shadow-xl hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 transition-all duration-200 z-[9999] group hover:scale-110"
        aria-label="Open chat"
        style={{ touchAction: 'manipulation' }}
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-[10px] sm:text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center animate-pulse font-bold">
          AI
        </div>
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-2xl border border-gray-200 z-[9999] flex flex-col max-h-[85vh] sm:max-h-[32rem]">
      {/* Header */}
      <div className="bg-primary-600 text-white p-3 sm:p-4 rounded-t-xl flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg">
            <Bot className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-semibold">AI Career Counselor</h3>
            <p className="text-[10px] sm:text-xs text-blue-100">Get instant career guidance</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-blue-100 hover:text-white transition-colors p-1"
          aria-label="Close chat"
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>

      {/* Rate limit warning */}
      {rateLimitInfo && Date.now() < rateLimitInfo.showUntil && (
        <div className="bg-yellow-50 border-b border-yellow-200 p-3">
          <div className="flex items-center space-x-2 text-yellow-800 mb-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">
              Rate limit reached. Try again in {Math.ceil((rateLimitInfo.showUntil - Date.now()) / 60000)} minute{Math.ceil((rateLimitInfo.showUntil - Date.now()) / 60000) > 1 ? 's' : ''}.
            </span>
          </div>
          {rateLimitInfo.links && rateLimitInfo.links.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {rateLimitInfo.links.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-xs bg-yellow-600 text-white px-3 py-1.5 rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
      
      {/* Remaining messages warning (show when < 3 left) */}
      {remainingMessages !== null && remainingMessages < 3 && remainingMessages > 0 && (
        <div className="bg-orange-50 border-b border-orange-200 p-3">
          <div className="flex items-center space-x-2 text-orange-800">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">
              ⚠️ Only {remainingMessages} message{remainingMessages > 1 ? 's' : ''} remaining this hour
            </span>
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-0" style={{ maxHeight: '50vh' }}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-3 ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.sender === 'ai' && (
              <div className={`p-2 rounded-lg ${message.isError ? 'bg-red-100' : 'bg-primary-100'}`}>
                <Bot className={`h-4 w-4 ${message.isError ? 'text-red-600' : 'text-primary-600'}`} />
              </div>
            )}
            
            <div
              className={`max-w-[75%] sm:max-w-xs px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm ${
                message.sender === 'user'
                  ? 'bg-primary-600 text-white'
                  : message.isError
                  ? 'bg-red-50 text-red-800 border border-red-200'
                  : message.isRateLimit
                  ? 'bg-yellow-50 text-yellow-900 border border-yellow-300'
                  : message.isSpamResponse
                  ? 'bg-blue-50 text-blue-900 border border-blue-200'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="text-xs sm:text-sm whitespace-pre-wrap break-words">
                {message.sender === 'ai' ? formatMessageWithLinks(message.text) : message.text}
              </p>
              {message.links && message.links.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {message.links.map((link, index) => (
                    <Link 
                      key={index}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="text-xs bg-yellow-600 text-white px-3 py-1.5 rounded-lg hover:bg-yellow-700 transition-colors inline-block"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              )}
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>

            {message.sender === 'user' && (
              <div className="bg-primary-100 p-2 rounded-lg">
                <User className="h-4 w-4 text-primary-600" />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex items-start space-x-3">
            <div className="bg-primary-100 p-2 rounded-lg">
              <Bot className="h-4 w-4 text-primary-600" />
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <Loader className="h-4 w-4 animate-spin text-gray-600" />
                <span className="text-sm text-gray-600">Thinking...</span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested questions (show only if no user messages yet) */}
      {messages.length === 1 && (
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center space-x-2 mb-3">
            <Lightbulb className="h-4 w-4 text-yellow-600" />
            <span className="text-sm font-medium text-gray-700">Try asking:</span>
          </div>
          <div className="space-y-2">
            {suggestedQuestions.slice(0, 3).map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedQuestion(question)}
                className="w-full text-left text-xs text-gray-600 hover:text-primary-600 hover:bg-white p-2 rounded border border-gray-200 hover:border-primary-300 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input area */}
      <div className="p-3 sm:p-4 border-t border-gray-200">
        <div className="flex space-x-1.5 sm:space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about careers, exams, or colleges..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
            disabled={isLoading || (rateLimitInfo && Date.now() < rateLimitInfo.showUntil)}
            maxLength={500}
          />
          <button
            onClick={sendMessage}
            disabled={!inputMessage.trim() || isLoading || (rateLimitInfo && Date.now() < rateLimitInfo.showUntil)}
            className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Send message"
          >
            {isLoading ? <Loader className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </button>
        </div>
        
        {messages.length > 3 && (
          <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
            <span>{messages.length - 1} messages</span>
            <button
              onClick={clearChat}
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              Clear chat
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatInterface