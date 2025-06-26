import { Calculator, FileText, Scale, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Terms of Service - Percentage Increase Calculator | Usage Terms & Conditions',
  description:
    "Read Percentage Increase Calculator's terms of service to understand the terms and conditions for using our percentage calculator tools and services.",
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
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
            <FileText className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: January 2025
          </p>
        </div>

        <div className="space-y-8">
          {/* Acceptance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scale className="h-5 w-5 text-green-600" />
                <span>Acceptance of Terms</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using PercentCalc (&quot;the Service&quot;),
                you accept and agree to be bound by the terms and provision of
                this agreement. If you do not agree to abide by the above,
                please do not use this service.
              </p>
            </CardContent>
          </Card>

          {/* Use License */}
          <Card>
            <CardHeader>
              <CardTitle>Use License</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Permission is granted to temporarily use PercentCalc for
                personal, educational, and commercial purposes. This is the
                grant of a license, not a transfer of title, and under this
                license you may:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Use our calculators for any lawful purpose</li>
                <li>Share results and links to our calculators</li>
                <li>Access our educational content and resources</li>
              </ul>
              <p className="text-gray-700 mt-4">
                This license shall automatically terminate if you violate any of
                these restrictions and may be terminated by PercentCalc at any
                time.
              </p>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <span>Disclaimer</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                The information on this website is provided on an &quot;as
                is&quot; basis. To the fullest extent permitted by law,
                PercentCalc:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Excludes all representations and warranties relating to this
                  website and its contents
                </li>
                <li>
                  Does not guarantee the accuracy of calculations for all use
                  cases
                </li>
                <li>
                  Recommends verifying important calculations independently
                </li>
                <li>
                  Is not liable for any decisions made based on our calculations
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Acceptable Use */}
          <Card>
            <CardHeader>
              <CardTitle>Acceptable Use Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Violate any applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Use automated systems to access the Service excessively</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Use the Service for any harmful or malicious purposes</li>
              </ul>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Other than the content you own, under these Terms, PercentCalc
                and/or its licensors own all the intellectual property rights
                and materials contained in this Website.
              </p>
              <p className="text-gray-700">
                You are granted limited license only for purposes of viewing the
                material contained on this Website. The mathematical formulas
                and educational content are provided for informational purposes
                and are based on standard mathematical principles.
              </p>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Your privacy is important to us. Our Privacy Policy explains how
                we collect, use, and protect your information when you use our
                Service. By using our Service, you agree to the collection and
                use of information in accordance with our Privacy Policy.
              </p>
              <p className="text-gray-700 mt-4">
                <a href="/privacy" className="text-blue-600 hover:underline">
                  Read our full Privacy Policy
                </a>
              </p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                In no event shall PercentCalc, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from your
                use of the Service.
              </p>
              <p className="text-gray-700">
                Some jurisdictions do not allow the exclusion of certain
                warranties or the exclusion or limitation of liability for
                consequential or incidental damages, so the limitations above
                may not apply to you.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We may terminate or suspend your access immediately, without
                prior notice or liability, for any reason whatsoever, including
                without limitation if you breach the Terms. Upon termination,
                your right to use the Service will cease immediately.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will try to provide at least 30 days notice prior to any new
                terms taking effect. What constitutes a material change will be
                determined at our sole discretion.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>Email: legal@percentcalc.com</p>
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
