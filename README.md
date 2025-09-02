# Global carnival Jeddah - City Destination Website

A modern, responsive city-destination website built with Next.js 14, featuring internationalization, beautiful animations, and a comprehensive visitor experience.

## 🌟 Features

- **Modern Design**: Beautiful, responsive UI with smooth animations
- **Internationalization**: Full English (LTR) and Arabic (RTL) support
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Components**: Carousels, lightboxes, filters, and more
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Internationalization**: next-intl
- **Images**: Next.js Image optimization
- **Forms**: React Hook Form with validation

## 📁 Project Structure

```
cityscape-oasis/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Internationalized routes
│   │   │   ├── about/         # About page
│   │   │   ├── attractions/   # Attractions page
│   │   │   ├── events/        # Events page
│   │   │   ├── directory/     # Business directory
│   │   │   ├── dining/        # Dining options
│   │   │   ├── gallery/       # Photo gallery
│   │   │   ├── contact/       # Contact page
│   │   │   ├── privacy/       # Privacy policy
│   │   │   ├── terms/         # Terms & conditions
│   │   │   ├── layout.js      # Locale-specific layout
│   │   │   └── page.js        # Home page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.js          # Root layout
│   │   └── page.js            # Root redirect
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   ├── layout/            # Layout components
│   │   └── sections/          # Page sections
│   ├── lib/                   # Utilities and helpers
│   ├── messages/              # Internationalization files
│   └── content/               # Content data
├── public/                    # Static assets
├── middleware.js              # Locale routing
├── next.config.js             # Next.js configuration
└── package.json               # Dependencies
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cityscape-oasis
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🌍 Internationalization

The website supports English and Arabic languages with full RTL support.

### Adding New Languages

1. Create a new locale file in `src/messages/` (e.g., `fr.json`)
2. Add the locale to the `locales` array in `src/i18n.js`
3. Update the middleware configuration

### Language Files Structure

```json
{
  "navigation": {
    "home": "Home",
    "about": "About"
  },
  "hero": {
    "title": "Main Title",
    "description": "Description text"
  }
}
```

## 🎨 Customization

### Branding

1. **Logo**: Replace the logo in the Header component
2. **Colors**: Update the color scheme in `src/app/globals.css`
3. **Typography**: Modify font families and sizes in the CSS variables

### Content

1. **Attractions**: Update `src/content/attractions.json`
2. **Events**: Modify `src/content/events.json`
3. **Images**: Replace placeholder images in the `public/` directory

### Styling

The project uses Tailwind CSS with custom CSS variables for consistent theming:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  --accent: 210 40% 96%;
}
```

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:

- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible Grids**: CSS Grid and Flexbox for responsive layouts
- **Touch-Friendly**: Optimized for mobile interactions
- **Performance**: Optimized images and lazy loading

## ♿ Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Color Contrast**: WCAG AA compliant color combinations
- **Focus Management**: Visible focus indicators
- **Alt Text**: Descriptive alt text for all images

## 🧪 Testing

### Run Tests

```bash
# Unit tests
npm test

# E2E tests (Playwright)
npm run test:e2e

# Linting
npm run lint
```

### Test Coverage

- **Unit Tests**: Jest + React Testing Library
- **E2E Tests**: Playwright for critical user flows
- **Linting**: ESLint for code quality
- **Type Checking**: Built-in Next.js type checking

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify**: Use `npm run build` and `npm start`
- **AWS**: Deploy using AWS Amplify or Elastic Beanstalk
- **Docker**: Build and run in containers

## 📊 Performance

### Lighthouse Scores

Target scores for production:
- **Performance**: ≥ 95
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 95
- **SEO**: ≥ 95

### Optimization Features

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Images and components
- **Bundle Analysis**: Built-in bundle analyzer

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Contact Form (Email)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password

# WhatsApp Integration
WHATSAPP_NUMBER=971503545972
```

### Next.js Configuration

The project includes optimized Next.js configuration:

- **Turbo**: Enabled for faster builds
- **Image Optimization**: Configured domains
- **Internationalization**: next-intl integration

## 📝 Content Management

### Adding New Content

1. **Attractions**: Add entries to `src/content/attractions.json`
2. **Events**: Update `src/content/events.json`
3. **Businesses**: Modify directory data in respective components
4. **Images**: Add new images to `public/` directory

### Content Structure

```json
{
  "id": 1,
  "name": "Attraction Name",
  "category": "category",
  "description": "Description text",
  "image": "image-url",
  "rating": 4.8
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:

- **Email**: support@cityscape-oasis.com
- **Documentation**: Check the inline code comments
- **Issues**: Create an issue on GitHub

## 🗺️ Roadmap

- [ ] Advanced search functionality
- [ ] User authentication and profiles
- [ ] Booking system integration
- [ ] Real-time event updates
- [ ] Mobile app companion
- [ ] Analytics dashboard
- [ ] Multi-language expansion
- [ ] Advanced filtering options

---

**Built with ❤️ using Next.js 14 and modern web technologies**
