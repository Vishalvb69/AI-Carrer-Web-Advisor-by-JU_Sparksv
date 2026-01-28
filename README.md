# AI Career Counselor - India Youth

A comprehensive, responsive career counseling website designed specifically for Indian youth, providing personalized guidance for stream selection, entrance exams, career paths, and college admissions.

## 🌟 Features

- **Mobile-First Design**: Optimized for mobile devices with responsive layout
- **Stream-Based Guidance**: Comprehensive information for Engineering, Medical, Commerce, and Arts streams
- **AI-Powered Chat**: Interactive career counseling with Claude AI assistant
- **Entrance Exam Info**: Detailed information about JEE, NEET, CA Foundation, CAT, and more
- **Career Exploration**: Extensive database of career options with salary ranges and growth prospects
- **AI Impact Analysis**: Future-ready insights on how AI affects different careers
- **Resource Hub**: Study materials, application guides, and useful links

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- Netlify account for deployment
- Anthropic API key for AI chat functionality

### Installation

1. **Clone and Setup**
   ```bash
   git clone <repository-url>
   cd AI-Career-Counselor
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   ```

3. **Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation with mobile menu
│   ├── Footer.jsx          # Footer with links and contact info
│   ├── Hero.jsx           # Landing page hero section
│   ├── CareerCard.jsx     # Reusable career information cards
│   └── ChatInterface.jsx   # AI-powered chat component
├── pages/
│   ├── Home.jsx           # Landing page
│   ├── StreamSelection.jsx # Stream selection guide
│   ├── Engineering.jsx    # Engineering careers and exams
│   ├── Medical.jsx        # Medical field careers and exams
│   ├── Commerce.jsx       # Commerce and business careers
│   ├── Arts.jsx           # Arts and humanities careers
│   ├── ClassTenthBelow.jsx # Guidance for younger students
│   ├── AIImpact.jsx       # AI impact on careers
│   └── Resources.jsx      # Study materials and guides
├── data/
│   ├── careers.js         # Career information database
│   └── exams.js          # Entrance exam details
└── App.jsx               # Main application component

netlify/
└── functions/
    ├── chat.js           # AI chat endpoint
    └── utils/
        └── rateLimit.js  # Rate limiting utilities
```

## 🎨 Design System

### Colors
- **Primary**: Blue shades (#1e40af, #3b82f6)
- **Secondary**: Purple shades (#7c3aed, #a855f7)
- **Accent**: Green (#10b981, #059669)
- **Background**: Light gray (#f9fafb)

### Components
- **Mobile-First**: All components designed for mobile, enhanced for desktop
- **Responsive Grid**: Flexible layouts that adapt to screen size
- **Interactive Elements**: Hover effects and smooth transitions

## 🤖 AI Chat Features

- **Rate Limited**: 10 messages per hour per IP address
- **Context Aware**: Maintains conversation history
- **Career Focused**: Specialized prompts for career counseling
- **Error Handling**: Graceful error messages and retry logic
- **Security**: Input sanitization and CORS protection

## 📱 Mobile App Conversion Ready

The website is built with mobile app conversion in mind:

- **React Native Compatible**: Component structure can be easily adapted
- **API Endpoints**: Backend functions can serve mobile app
- **Responsive Design**: Already optimized for mobile screens
- **State Management**: Simple state structure for easy porting

## 🌐 Deployment

### Netlify Deployment

1. **Connect Repository**
   - Link your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Environment Variables**
   In Netlify dashboard, add:
   ```
   ANTHROPIC_API_KEY = your_anthropic_api_key_here
   ```

3. **Deploy**
   - Netlify will automatically build and deploy
   - Functions will be available at `/.netlify/functions/`

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🔧 Configuration

### Vite Configuration
- Optimized for production builds
- Vendor chunking for better caching
- Environment variable handling

### Tailwind CSS
- Custom color palette
- Mobile-first responsive design
- Utility-first approach

### Netlify Functions
- Serverless backend for AI chat
- Rate limiting with persistent storage
- CORS handling for security

## 📊 Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Responsive images with proper loading
- **Bundle Analysis**: Optimized vendor chunking
- **Caching**: Proper cache headers for static assets

## 🔒 Security Features

- **Input Sanitization**: All user inputs are validated
- **Rate Limiting**: Prevents API abuse
- **CORS Protection**: Proper cross-origin request handling
- **Environment Variables**: Sensitive data kept secure

## 🎯 Target Audience

- **Primary**: Class 10-12 students in India
- **Secondary**: College students and young professionals
- **Use Cases**: Stream selection, career planning, exam preparation

## 🚀 Future Enhancements

- **Mobile App**: React Native conversion
- **User Accounts**: Personal dashboard and progress tracking
- **Advanced AI**: More sophisticated career matching
- **Regional Languages**: Hindi and other Indian languages
- **Offline Support**: PWA capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: support@aicareerguide.com
- WhatsApp: +91-XXXX-XXXX
- Website: [Contact Form](your-website.com/contact)

## 🔗 Useful Links

- [Netlify Documentation](https://docs.netlify.com/)
- [React Documentation](https://reactjs.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Anthropic Claude API](https://docs.anthropic.com/)

---

Built with ❤️ for Indian students by [Your Team Name]