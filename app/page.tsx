'use client';

import { useState, useEffect } from 'react';
import { Calculator, TrendingUp, BookOpen, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function PercentageCalculator() {
  const [startingValue, setStartingValue] = useState<string>('');
  const [finalValue, setFinalValue] = useState<string>('');
  const [result, setResult] = useState<{
    percentage: number;
    isIncrease: boolean;
    difference: number;
  } | null>(null);

  const calculatePercentage = () => {
    const start = parseFloat(startingValue);
    const final = parseFloat(finalValue);

    if (isNaN(start) || isNaN(final) || start === 0) {
      setResult(null);
      return;
    }

    const difference = final - start;
    const percentage = (difference / Math.abs(start)) * 100;
    const isIncrease = difference >= 0;

    setResult({
      percentage: Math.abs(percentage),
      isIncrease,
      difference: Math.abs(difference),
    });
  };

  const clearCalculator = () => {
    setStartingValue('');
    setFinalValue('');
    setResult(null);
  };

  useEffect(() => {
    if (startingValue && finalValue) {
      calculatePercentage();
    }
  }, [startingValue, finalValue]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                Percentage Increase Calculator
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Percentage Increase Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the percentage increase or decrease between two values
            instantly. Perfect for analyzing growth rates, price changes, and
            statistical comparisons.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  <span>Percentage Calculator</span>
                </CardTitle>
                <CardDescription>
                  Enter the starting value and final value to calculate the
                  percentage change
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="starting-value">Starting Value</Label>
                    <Input
                      id="starting-value"
                      type="number"
                      placeholder="Enter starting value"
                      value={startingValue}
                      onChange={e => setStartingValue(e.target.value)}
                      className="text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="final-value">Final Value</Label>
                    <Input
                      id="final-value"
                      type="number"
                      placeholder="Enter final value"
                      value={finalValue}
                      onChange={e => setFinalValue(e.target.value)}
                      className="text-lg"
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button onClick={calculatePercentage} className="flex-1">
                    Calculate
                  </Button>
                  <Button onClick={clearCalculator} variant="outline">
                    Clear
                  </Button>
                </div>

                {result && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      Result:
                    </h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">
                      {result.percentage.toFixed(2)}%{' '}
                      {result.isIncrease ? 'increase' : 'decrease'}
                    </p>

                    <div className="mt-4 p-4 bg-white rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Solution:
                      </h4>
                      <p className="text-gray-700 mb-2">
                        Calculate percentage change from Starting Value ={' '}
                        {startingValue} to Final Value = {finalValue}
                      </p>

                      <div className="text-center my-4">
                        <div className="inline-block p-4 bg-gray-50 rounded">
                          <p className="font-mono text-lg">
                            ({finalValue} - {startingValue}) / |{startingValue}|
                            × 100
                          </p>
                          <p className="font-mono text-lg mt-2">
                            = {result.difference} /{' '}
                            {Math.abs(parseFloat(startingValue))} × 100
                          </p>
                          <p className="font-mono text-lg mt-2">
                            ={' '}
                            {(
                              result.difference /
                              Math.abs(parseFloat(startingValue))
                            ).toFixed(6)}{' '}
                            × 100
                          </p>
                          <p className="font-mono text-lg mt-2 font-bold text-blue-600">
                            = {result.percentage.toFixed(4)}%{' '}
                            {result.isIncrease ? 'increase' : 'decrease'}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mt-4">
                        {result.isIncrease
                          ? 'A positive change is an increase.'
                          : 'A negative change is a decrease.'}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Educational Content */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  <span>How to Calculate Percentage Increase</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Steps to Calculate:
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Subtract final value minus starting value</li>
                    <li>
                      Divide that amount by the absolute value of the starting
                      value
                    </li>
                    <li>Multiply by 100 to get percent increase</li>
                    <li>
                      If the percentage is negative, it means there was a
                      decrease and not an increase
                    </li>
                  </ol>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Percentage Increase Formula
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-lg font-mono">
                      Percentage Increase = (Final Value - Starting Value) /
                      |Starting Value| × 100
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Example Problem
                  </h3>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-gray-700 mb-2">
                      Last year your favorite jeans cost $36 per pair. This year
                      they cost $45 per pair. What is the percentage increase in
                      the price of these jeans from last year to this year?
                    </p>

                    <div className="mt-3 space-y-1 font-mono text-sm">
                      <p>
                        Percentage Increase = (Final Value - Starting Value) /
                        |Starting Value| × 100
                      </p>
                      <p>45 - 36 = 9</p>
                      <p>9 / 36 = 0.25</p>
                      <p>0.25 × 100 = 25%</p>
                    </div>

                    <p className="mt-3 font-semibold text-green-700">
                      So the price of your favorite jeans increased by 25% from
                      last year to this year.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-purple-600" />
                  <span>Related Calculators</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-medium text-blue-600">
                      Math Calculators
                    </h4>
                    <p className="text-sm text-gray-600">
                      Basic arithmetic operations
                    </p>
                  </a>
                  <a
                    href="#"
                    className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-medium text-blue-600">
                      Algebra Calculators
                    </h4>
                    <p className="text-sm text-gray-600">
                      Solve algebraic equations
                    </p>
                  </a>
                  <a
                    href="#"
                    className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-medium text-blue-600">
                      Geometry Calculators
                    </h4>
                    <p className="text-sm text-gray-600">
                      Area, volume, and more
                    </p>
                  </a>
                </div>
              </CardContent>
            </Card> */}

            <Card>
              <CardHeader>
                <CardTitle>Quick Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-blue-50 rounded">
                    <p className="font-medium text-blue-900">Tip 1:</p>
                    <p className="text-blue-700">
                      Use decimal values for more precise calculations
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded">
                    <p className="font-medium text-green-900">Tip 2:</p>
                    <p className="text-green-700">
                      Negative results indicate a decrease
                    </p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded">
                    <p className="font-medium text-purple-900">Tip 3:</p>
                    <p className="text-purple-700">
                      Check your inputs for accuracy
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
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
              &copy; 2025 PercentCalc. All rights reserved. Percentage Increase
              Calculator.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
