import { ArrowRight, CheckCircle2, Shield, TrendingUp, Users, Zap, Building2, ChevronRight, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-amber-100 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">RX</span>
              </div>
              <div>
                <div className="font-bold text-lg sm:text-xl text-slate-900">RxVIP Network</div>
                <div className="text-xs text-slate-600 -mt-1 hidden sm:block">Powered by SYNTRIXS</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#about" className="text-slate-700 hover:text-amber-600 transition-colors font-medium">
                About
              </Link>
              <Link href="#innovation" className="text-slate-700 hover:text-amber-600 transition-colors font-medium">
                Innovation
              </Link>
              <Link href="#contact" className="text-slate-700 hover:text-amber-600 transition-colors font-medium">
                Contact
              </Link>
              <Link 
                href="https://rxvip.com/webinar"
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                Join Webinar
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <Link 
              href="https://rxvip.com/webinar"
              className="md:hidden bg-amber-600 hover:bg-amber-700 text-white px-3 py-2 rounded-lg font-semibold transition-colors text-sm"
            >
              Join Webinar
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-slate-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_70%)]" />
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold text-sm mb-6">
              <Zap className="w-4 h-4" />
              The Future of Independent Pharmacy is Here
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Turn Declining Margins Into
              <span className="block text-amber-600 mt-2">Competitive Advantage</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-700 mb-10 max-w-3xl mx-auto">
              The exclusive webinar for independent pharmacy owners ready to see what's next.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://rxvip.com/webinar"
                className="inline-flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-700 text-white text-lg font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Attend Dan's Big Reveal
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="#innovation"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-900 text-lg font-bold px-8 py-4 rounded-lg transition-all border-2 border-slate-200"
              >
                Learn More
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600" />
                <span>NCPDP Verified Members Only</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-600" />
                <span>HIPAA Compliant Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-600" />
                <span>Proven ROI in 90 Days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                The Network Transforming Independent Pharmacy
              </h2>
              <p className="text-xl text-slate-700">
                While others see crisis, we see opportunity
              </p>
            </div>
            
            {/* Stats section removed - need actual verified data */}

            <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Created by Dan Benamoz, RPh</h3>
              <p className="text-lg mb-4 text-amber-50">
                After building Pharmacy Development Services and helping thousands of pharmacies thrive, Dan discovered something revolutionary—one of the top two technology innovations of his 45-year career.
              </p>
              <p className="text-lg font-semibold">
                "I guarantee this will be one of the most powerful hours for your business that you could spend."
              </p>
              <Link 
                href="https://rxvip.com/webinar"
                className="inline-flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-lg font-bold mt-6 hover:bg-amber-50 transition-colors"
              >
                Join Dan's Exclusive Webinar
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section id="innovation" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                The Breakthrough Innovation
              </h2>
              <p className="text-xl text-slate-700">
                Transform from commodity dispenser to clinical services powerhouse
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-xl border-l-4 border-l-amber-500">
                <CheckCircle2 className="w-8 h-8 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2 text-slate-900">A Breakthrough Innovation</h3>
                  <p className="text-lg text-slate-700">
                    Dan will reveal one of the top two technology innovations of his 45-year career.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-xl border-l-4 border-l-amber-500">
                <CheckCircle2 className="w-8 h-8 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2 text-slate-900">The Future is NOW</h3>
                  <p className="text-lg text-slate-700">
                    Learn why this is the moment that changes everything for independent pharmacy.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-xl border-l-4 border-l-amber-500">
                <CheckCircle2 className="w-8 h-8 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2 text-slate-900">Live Reveal</h3>
                  <p className="text-lg text-slate-700">
                    60-minute live session with Q&A - no recording of the full strategy.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-slate-700 mb-6">
                <strong>September 16, 2025</strong> • Live Webinar • Limited to 500 Seats
              </p>
              <Link 
                href="https://rxvip.com/webinar"
                className="inline-flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-700 text-white text-lg font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Reserve Your Seat Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Pharmacy?
            </h2>
            <p className="text-xl text-slate-700 mb-8">
              The RxVIP Network platform is launching soon. Join our exclusive webinar to be among the first.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-amber-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h3>
              
              {/* Contact info removed - need actual contact details */}
              
              <p className="text-slate-600 mb-6">
                Independent pharmacy owners only. NCPDP verification required.
              </p>
              
              <Link 
                href="https://rxvip.com/webinar"
                className="inline-flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-700 text-white text-lg font-bold px-8 py-4 rounded-lg transition-all"
              >
                Attend the Big Reveal
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">RX</span>
                </div>
                <div>
                  <div className="font-bold text-xl">RxVIP Network</div>
                  <div className="text-xs text-slate-400">Powered by SYNTRIXS</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start">
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">
                  Terms of Service
                </Link>
                <Link href="/hipaa" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">
                  HIPAA Compliance
                </Link>
              </div>
            </div>
            
            <div className="border-t border-slate-800 pt-8 text-center">
              <p className="text-slate-400">
                © 2025 RxVIP Network. All rights reserved.
              </p>
              {/* Address removed - need actual address */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
