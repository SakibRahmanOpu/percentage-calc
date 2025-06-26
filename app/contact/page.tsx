import { Calculator, Mail } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Percentage Increase Calculator | Free Online Tools',
  description:
    'Get in touch with Percentage Increase Calculator for any inquiries or support requests.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section: Contains site branding and primary navigation. */}
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

      {/* Main Content Area: Holds the hero section, contact information, and FAQs. */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section: Large title and introductory paragraph. */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re here to help! If you have any questions, feedback, or
            need assistance, please don&apos;t hesitate to reach out to us via
            email. We aim to respond to all inquiries as quickly as possible.
          </p>
        </div>

        {/* Content Grid: Arranges contact information and FAQs side-by-side on larger screens. */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information Card: Displays various email contact points. */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>Contact Us by Email</span>
              </CardTitle>
              <CardDescription>
                We&apos;re always ready to assist you. Please choose the
                relevant email address below based on your inquiry.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* General Inquiries Email */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  General Inquiries & Support
                </h3>
                <p className="text-gray-600 mb-1">
                  For any general questions, support requests, or partnership
                  opportunities.
                </p>
                <a
                  href="mailto:support@percentageincreasecalculator.org"
                  className="text-blue-600 hover:underline"
                >
                  support@percentageincreasecalculator.org
                </a>
              </div>

              {/* Technical Issues / Bug Reports Email */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Technical Issues & Bug Reports
                </h3>
                <p className="text-gray-600 mb-1">
                  If you encounter any technical problems or find a bug in our
                  calculators.
                </p>
                <a
                  href="mailto:bugs@percentageincreasecalculator.org"
                  className="text-blue-600 hover:underline"
                >
                  bugs@percentageincreasecalculator.org
                </a>
              </div>

              {/* Feature Requests & Suggestions Email */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Feature Requests & Suggestions
                </h3>
                <p className="text-gray-600 mb-1">
                  Have an idea for a new calculator or an improvement to an
                  existing feature?
                </p>
                <a
                  href="mailto:features@percentageincreasecalculator.org"
                  className="text-blue-600 hover:underline"
                >
                  features@percentageincreasecalculator.org
                </a>
              </div>

              {/* Additional Text Paragraph */}
              <div>
                <p className="text-gray-600 mt-4">
                  We value your input and aim to provide the best possible user
                  experience. Your messages help us improve our service. Please
                  be as detailed as possible in your email so we can assist you
                  efficiently.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section Card */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* FAQ Item 1 */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Is Percentage Increase Calculator really free?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Yes! All our calculators are completely free to use with
                      no hidden fees or registration required.
                    </p>
                  </div>

                  {/* FAQ Item 2 */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Do you store my calculations?
                    </h4>
                    <p className="text-sm text-gray-600">
                      No, we don&apos;t store any of your calculation data.
                      Everything is processed locally in your browser.
                    </p>
                  </div>

                  {/* FAQ Item 3 */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Can I use this for commercial purposes?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Absolutely! Our calculators are free for personal,
                      educational, and commercial use.
                    </p>
                  </div>

                  {/* FAQ Item 4 */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      How accurate are the calculations?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Our calculators use standard mathematical formulas and
                      provide results with high precision.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer Section: Contains quick links, legal info, resources, and copyright. */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="h-6 w-6" />
                <span className="text-xl font-bold">PercentCalc</span>
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
