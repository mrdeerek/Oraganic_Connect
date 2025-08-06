# 🌱 Organic Connect

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-yellow.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.11-blue.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

**Organic Connect** is a modern web platform that bridges the gap between verified organic farmers and health-conscious consumers. Our mission is to promote transparency, education, and sustainable agriculture while fostering a community around genuine organic produce.

## 🌿 Features

### For Consumers
- **🛒 Marketplace**: Browse and discover verified organic farmers
- **🔍 Smart Search**: Filter farmers by location, crop type, and certifications
- **⭐ Reviews & Ratings**: Read and write reviews for farmers
- **💚 Wishlist**: Save favorite farmers and products
- **🛒 Shopping Cart**: Add products and manage orders
- **📱 WhatsApp Integration**: Direct communication with farmers
- **📦 Order Tracking**: Track order history and status
- **🏆 Certification Verification**: View organic certifications

### For Farmers
- **📝 Easy Onboarding**: Simple registration process with photo uploads
- **📋 Dashboard**: Manage orders and track business
- **✅ Certification Display**: Showcase organic certifications
- **📊 Analytics**: View customer interactions and reviews
- **✏️ Profile Management**: Edit product listings and information

### For Administrators
- **📊 Admin Dashboard**: Comprehensive platform analytics
- **📦 Order Management**: Oversee all platform orders
- **👥 User Management**: Monitor farmers and consumers
- **⭐ Review Moderation**: Manage platform reviews

### Educational Features
- **📚 Learning Hub**: Multi-language organic farming education
- **🌍 Internationalization**: Support for English, Hindi, Punjabi, and Marathi
- **📖 Best Practices**: Guidelines for organic farming techniques

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ayushpremrocks/Organic-Connect.git
   cd Organic-Connect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
organic-connect/
├── public/
│   └── back.jpg                 # Homepage background image
├── src/
│   ├── Components/
│   │   ├── Footer.jsx           # Site footer
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── OrderForm.jsx        # Order placement form
│   │   ├── ReviewForm.jsx       # Review submission form
│   │   └── ReviewList.jsx       # Review display component
│   ├── Context/
│   │   └── CartContext.jsx      # Shopping cart state management
│   ├── Pages/
│   │   ├── About.jsx            # About page
│   │   ├── AdminDashboard.jsx   # Admin analytics dashboard
│   │   ├── AdminOrders.jsx      # Admin order management
│   │   ├── AllOrders.jsx        # Order listing page
│   │   ├── Cart.jsx             # Shopping cart page
│   │   ├── Contact.jsx          # Contact form
│   │   ├── Dashboard.jsx        # Farmer dashboard
│   │   ├── FarmerOnboarding.jsx # Farmer registration
│   │   ├── Home.jsx             # Homepage
│   │   ├── LearningHub.jsx      # Educational content
│   │   ├── Login.jsx            # User authentication
│   │   ├── Marketplace.jsx      # Main marketplace
│   │   ├── OrderHistory.jsx     # Order history page
│   │   ├── Profile.jsx          # User profile management
│   │   ├── ResetDemo.jsx        # Demo data reset
│   │   ├── Signup.jsx           # User registration
│   │   ├── ThankYou.jsx         # Thank you page
│   │   └── Wishlist.jsx         # User wishlist
│   ├── Routes/
│   │   ├── PrivateRoute.jsx     # Protected route component
│   │   └── Routes.jsx           # Route definitions
│   ├── App.jsx                  # Main application component
│   ├── index.css                # Global styles
│   └── main.jsx                 # Application entry point
├── eslint.config.js             # ESLint configuration
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── vite.config.js               # Vite build configuration
└── README.md                    # Project documentation
```

## 🛠️ Technology Stack

### Frontend
- **React 19.1.0**: Modern UI library with latest features
- **React Router DOM 7.7.0**: Client-side routing
- **TailwindCSS 4.1.11**: Utility-first CSS framework
- **React Icons 5.5.0**: Icon library

### Build Tools
- **Vite 7.0.4**: Fast build tool and development server
- **ESLint 9.30.1**: Code linting and formatting

### Features & Integrations
- **EmailJS 4.4.1**: Contact form email functionality
- **Three.js 0.178.0**: 3D graphics (future enhancements)
- **React Three Fiber**: React renderer for Three.js
- **i18next**: Internationalization support

### Development
- **Hot Module Replacement (HMR)**: Instant updates during development
- **ES Modules**: Modern JavaScript module system
- **TypeScript Support**: Ready for TypeScript migration

## 📚 Usage Guide

### Getting Started as a Consumer

1. **Sign Up**: Create a consumer account
2. **Browse Marketplace**: Explore verified organic farmers
3. **Filter & Search**: Find farmers by location or crop type
4. **Read Reviews**: Check farmer ratings and reviews
5. **Add to Cart**: Select products for purchase
6. **Place Orders**: Complete your purchase
7. **Track Orders**: Monitor order status

### Getting Started as a Farmer

1. **Sign Up**: Create a farmer account
2. **Complete Onboarding**: Fill out your farm details
3. **Upload Certification**: Add organic certification documents
4. **Add Photos**: Showcase your farm and products
5. **Manage Orders**: Track and fulfill customer orders
6. **Build Reputation**: Receive and respond to reviews

### Admin Features

1. **Monitor Platform**: View comprehensive analytics
2. **Manage Users**: Oversee farmer and consumer accounts
3. **Order Oversight**: Monitor all platform transactions
4. **Content Moderation**: Manage reviews and listings

## 🌐 API Integration

### EmailJS Configuration
For contact form functionality, configure EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up email service and template
3. Add credentials to environment variables

## 🔧 Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 🤝 Contributing

We welcome contributions to Organic Connect! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Write descriptive commit messages
- Add comments for complex logic
- Test your changes thoroughly

## 🐛 Known Issues

- Cart persistence across sessions (planned enhancement)
- Real-time order updates (future feature)
- Mobile app version (roadmap item)

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Basic marketplace functionality
- ✅ User authentication
- ✅ Farmer onboarding
- ✅ Order management
- ✅ Review system

### Phase 2 (Upcoming)
- 🔄 Payment gateway integration
- 🔄 Real-time notifications
- 🔄 Mobile application
- 🔄 Advanced analytics

### Phase 3 (Future)
- 📱 IoT integration for farm monitoring
- 🤖 AI-powered crop recommendations
- 🌍 Global marketplace expansion
- 🔗 Blockchain certification tracking

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Kunal Raj** - Lead Developer
- Email: kunalraj845438@gmail.com
- University: Chandigarh University, India

## 🙏 Acknowledgments

- Organic farmers who inspired this platform
- Open source community for amazing tools
- Environmental advocates promoting sustainable agriculture

## 📞 Support

- **Email**: ayushpremrocks@gmail.com
- **Phone**: +91 8421283412
- **Location**: Chandigarh University, India

---

**Built with ❤️ for sustainable agriculture and healthy communities.** 
