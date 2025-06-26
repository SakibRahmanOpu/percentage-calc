import { Calculator, Users, Target, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - PercentCalc | Leading Online Calculator Platform',
  description:
    'Learn about PercentCalc, your trusted online percentage calculator platform. Discover our mission to make mathematical calculations simple and accessible.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const features = [
    {
      icon: Calculator,
      title: 'Easy to Use',
      description:
        'Simple, intuitive interface that makes complex calculations effortless',
    },
    {
      icon: Target,
      title: 'Accurate Results',
      description: 'Precise calculations with detailed step-by-step solutions',
    },
    {
      icon: Users,
      title: 'Free for Everyone',
      description:
        'No registration required, completely free to use for all users',
    },
    {
      icon: Award,
      title: 'Educational',
      description:
        'Learn while you calculate with our comprehensive explanations',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-blue-600" />
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Percentage Increase Calculator
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Calculator
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link href="/contact" className="text-blue-600 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About PercentCalc
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re dedicated to making mathematical calculations simple,
            accessible, and educational for everyone. Our tools help students,
            professionals, and curious minds solve percentage problems with
            confidence.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
                At PercentCalc, we believe that mathematics should be
                approachable and understandable for everyone. Our mission is to
                provide free, accurate, and educational calculation tools that
                not only give you the right answer but also help you understand
                how to get there. We&apos;re committed to creating a platform
                that serves students, educators, professionals, and anyone who
                needs reliable mathematical tools.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose PercentCalc?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Our Commitment
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Privacy First
                  </h3>
                  <p className="text-gray-600">
                    We don&apos;t store your calculations or personal data. Your
                    privacy is our priority.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Always Free
                  </h3>
                  <p className="text-gray-600">
                    Our tools will always be free to use, with no hidden fees or
                    premium restrictions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Continuous Improvement
                  </h3>
                  <p className="text-gray-600">
                    We regularly update our tools based on user feedback and
                    mathematical best practices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Have Questions or Suggestions?
              </h2>
              <p className="text-gray-600 mb-6">
                We&apos;d love to hear from you! Whether you have feedback, need
                help, or want to suggest new features.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="h-6 w-6" />
                <span className="text-xl font-bold">
                  Percentage Increase Calculator
                </span>
              </div>
              <p className="text-gray-400">
                Your go-to calculator for percentage calculations and
                mathematical operations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Math Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Formula Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Examples
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Percentage Increase Calculator.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
