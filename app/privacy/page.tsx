import { Calculator, Shield, Eye, Lock, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Privacy Policy - Percentage Increase Calculator | Your Data Protection Rights',
  description:
    "Read Percentage Increase Calculator's privacy policy to understand how we protect your data and respect your privacy while using our percentage calculator tools.",
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Your privacy is important to us. This policy explains how we handle
            your information.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: January 2025
          </p>
        </div>

        <div className="space-y-8">
          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-green-600" />
                <span>Privacy Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                At PercentCalc, we are committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard
                your information when you use our percentage calculator and
                related services. We believe in transparency and want you to
                understand exactly how your data is handled.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="h-5 w-5 text-blue-600" />
                <span>Information We Collect</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Calculation Data
                </h3>
                <p className="text-gray-700">
                  We do NOT store, save, or transmit any of the numbers or
                  calculations you enter into our calculator. All calculations
                  are performed locally in your browser and are not sent to our
                  servers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Analytics Data
                </h3>
                <p className="text-gray-700">
                  We use Google Analytics to understand how visitors use our
                  site. This includes:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                  <li>Page views and session duration</li>
                  <li>Browser type and device information</li>
                  <li>Geographic location (country/city level)</li>
                  <li>Referral sources</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Contact Information
                </h3>
                <p className="text-gray-700">
                  When you contact us through our contact form, we collect your
                  name, email address, and message content solely for the
                  purpose of responding to your inquiry.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>To improve our website performance and user experience</li>
                <li>To understand how our tools are being used</li>
                <li>To respond to your questions and support requests</li>
                <li>To detect and prevent technical issues</li>
                <li>To comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-purple-600" />
                <span>Data Protection & Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Security Measures
                </h3>
                <p className="text-gray-700">
                  We implement appropriate technical and organizational security
                  measures to protect your information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Data Retention
                </h3>
                <p className="text-gray-700">
                  Contact form submissions are retained for up to 2 years for
                  support purposes. Analytics data is retained according to
                  Google Analytics default retention settings (26 months).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Third-Party Services
                </h3>
                <p className="text-gray-700">
                  We use the following third-party services that may collect
                  information:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                  <li>Google Analytics for website analytics</li>
                  <li>Netlify for hosting and content delivery</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                You have the following rights regarding your personal
                information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Access:</strong> Request a copy of the personal
                  information we hold about you
                </li>
                <li>
                  <strong>Rectification:</strong> Request correction of
                  inaccurate personal information
                </li>
                <li>
                  <strong>Erasure:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Opt-out:</strong> You can opt-out of analytics
                  tracking using browser settings or extensions
                </li>
                <li>
                  <strong>Data Portability:</strong> Request transfer of your
                  data in a structured format
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise any of these rights, please contact us at
                privacy@percentcalc.com.
              </p>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your
                experience:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Essential Cookies:</strong> Required for basic website
                  functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Used by Google Analytics
                  to understand site usage
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your settings
                  and preferences
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                You can control cookies through your browser settings. Note that
                disabling cookies may affect some website functionality.
              </p>
            </CardContent>
          </Card>

          {/* Updates to Policy */}
          <Card>
            <CardHeader>
              <CardTitle>Updates to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will notify you of any material changes
                by posting the new Privacy Policy on this page and updating the
                Last updated date.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>Email: privacy@percentcalc.com</p>
                <p>
                  General Contact:{' '}
                  <a href="/contact" className="text-blue-600 hover:underline">
                    Contact Form
                  </a>
                </p>
              </div>
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
