import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Bot,
  User,
  Loader,
  MessageCircle,
  X,
  Lightbulb,
  Clock,
  BookOpen,
  Sparkles,
} from "lucide-react";

const ChatInterface = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI career counselor powered by advanced RAG (Retrieval Augmented Generation) technology. I can help you with stream selection, entrance exams, college admissions, and career guidance using real career data. What would you like to know?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rateLimitInfo, setRateLimitInfo] = useState(null);
  const [ragSources, setRagSources] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, ragSources]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const suggestedQuestions = [
    "Which stream should I choose after Class 10?",
    "What are the career options in engineering?",
    "How do I prepare for NEET?",
    "Tell me about AI impact on careers",
    "What documents do I need for college admission?",
  ];

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    setRagSources(null);

    try {
      // Prepare conversation history for context
      const conversationHistory = messages.map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      }));

      // Use RAG chat endpoint
      const response = await fetch("/api/rag-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputMessage.trim(),
          conversationHistory,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          // Rate limit exceeded
          setRateLimitInfo({
            resetIn: data.resetIn,
            showUntil: Date.now() + data.resetIn * 60 * 1000,
          });
          throw new Error(
            `Rate limit exceeded. Please try again in ${data.resetIn} minutes.`,
          );
        }
        throw new Error(data.error || "Failed to get response");
      }

      // Store RAG metadata
      if (data.rag && data.rag.sources) {
        setRagSources(data.rag.sources);
      }

      const aiMessage = {
        id: Date.now() + 1,
        text: data.response,
        sender: "ai",
        timestamp: new Date(),
        ragSources: data.rag?.sources,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorText = error.message || 
        "Sorry, I'm having trouble responding right now. Please try again in a moment.";

      const errorMessage = {
        id: Date.now() + 1,
        text: errorText,
        sender: "ai",
        timestamp: new Date(),
        isError: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleSuggestedQuestion = (question) => {
    setInputMessage(question);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        text: "Chat cleared! How can I help you with your career questions?",
        sender: "ai",
        timestamp: new Date(),
      },
    ]);
    setRateLimitInfo(null);
    setRagSources(null);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 transition-all duration-200 z-50 group"
        aria-label="Open chat">
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
          <Sparkles className="h-3 w-3" />
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-2xl border border-gray-200 z-50 flex flex-col max-h-[32rem]">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 rounded-t-xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold flex items-center space-x-2">
              <span>AI Career Counselor</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded">RAG</span>
            </h3>
            <p className="text-xs text-blue-100">Powered by Vector Search</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-blue-100 hover:text-white transition-colors"
          aria-label="Close chat">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Rate limit warning */}
      {rateLimitInfo && Date.now() < rateLimitInfo.showUntil && (
        <div className="bg-yellow-50 border-b border-yellow-200 p-3">
          <div className="flex items-center space-x-2 text-yellow-800">
            <Clock className="h-4 w-4" />
            <span className="text-sm">
              Rate limit reached. Try again in{" "}
              {Math.ceil((rateLimitInfo.showUntil - Date.now()) / 60000)}{" "}
              minutes.
            </span>
          </div>
        </div>
      )}

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0"
        style={{ maxHeight: "20rem" }}>
        {messages.map((message) => (
          <div key={message.id}>
            <div
              className={`flex items-start space-x-3 ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}>
              {message.sender === "ai" && (
                <div
                  className={`p-2 rounded-lg ${message.isError ? "bg-red-100" : "bg-gradient-to-br from-primary-100 to-primary-50"}`}>
                  <Bot
                    className={`h-4 w-4 ${message.isError ? "text-red-600" : "text-primary-600"}`}
                  />
                </div>
              )}

              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.sender === "user"
                    ? "bg-primary-600 text-white"
                    : message.isError
                      ? "bg-red-50 text-red-800 border border-red-200"
                      : "bg-gray-100 text-gray-800"
                }`}>
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              {message.sender === "user" && (
                <div className="bg-primary-100 p-2 rounded-lg">
                  <User className="h-4 w-4 text-primary-600" />
                </div>
              )}
            </div>

            {/* RAG Sources */}
            {message.sender === "ai" &&
              message.ragSources &&
              message.ragSources.length > 0 && (
                <div className="mt-2 ml-11 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <BookOpen className="h-3 w-3 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-900">
                      Sources
                    </span>
                  </div>
                  <div className="space-y-1">
                    {message.ragSources.map((source, idx) => (
                      <div key={idx} className="text-xs text-blue-800">
                        <span className="font-medium">{source.title}</span>
                        <span className="text-blue-600 ml-1">
                          ({source.type}) - {source.relevance}% match
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
        ))}

        {isLoading && (
          <div className="flex items-start space-x-3">
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 p-2 rounded-lg">
              <Bot className="h-4 w-4 text-primary-600" />
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <Loader className="h-4 w-4 animate-spin text-gray-600" />
                <span className="text-sm text-gray-600">
                  Searching knowledge base...
                </span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested questions (show only if no user messages yet) */}
      {messages.length === 1 && (
        <div className="p-4 border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white">
          <div className="flex items-center space-x-2 mb-3">
            <Lightbulb className="h-4 w-4 text-yellow-600" />
            <span className="text-sm font-medium text-gray-700">
              Try asking:
            </span>
          </div>
          <div className="space-y-2">
            {suggestedQuestions.slice(0, 3).map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedQuestion(question)}
                className="w-full text-left text-xs text-gray-600 hover:text-primary-600 hover:bg-white p-2 rounded border border-gray-200 hover:border-primary-300 transition-colors">
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input area */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about careers, exams, or colleges..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
            disabled={
              isLoading ||
              (rateLimitInfo && Date.now() < rateLimitInfo.showUntil)
            }
            maxLength={500}
          />
          <button
            onClick={sendMessage}
            disabled={
              !inputMessage.trim() ||
              isLoading ||
              (rateLimitInfo && Date.now() < rateLimitInfo.showUntil)
            }
            className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Send message">
            {isLoading ? (
              <Loader className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </button>
        </div>

        {messages.length > 3 && (
          <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
            <span>{messages.length - 1} messages</span>
            <button
              onClick={clearChat}
              className="text-primary-600 hover:text-primary-700 transition-colors">
              Clear chat
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;
