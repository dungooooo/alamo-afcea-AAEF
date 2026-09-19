import React, { useState } from 'react';
import { 
  GraduationCap, 
  School, 
  Users, 
  Presentation, 
  Laptop, 
  Building2, 
  Handshake, 
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  HeartHandshake,
  ShieldCheck,
  Mail,
  Sparkles
} from 'lucide-react';

interface ModalContent {
  title: string;
  category: string;
  description: string;
  details?: string[];
  actionLabel?: string;
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalContent | null>(null);

  const openModal = (modal: ModalContent) => {
    setActiveModal(modal);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal flex flex-col selection:bg-light-blue selection:text-white">
      {/* Top Header / Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
        <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg bg-navy flex items-center justify-center text-white shadow-md group-hover:bg-light-blue transition-colors">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="block font-bold text-lg md:text-xl text-navy tracking-tight leading-none">
                Alamo AFCEA
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-light-blue">
                Education Foundation
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-charcoal">
            <a href="#pathways" className="hover:text-light-blue transition-colors">Pathways</a>
            <a href="#impact" className="hover:text-light-blue transition-colors">Our Impact</a>
            <a href="#programs" className="hover:text-light-blue transition-colors">Programs & Grants</a>
            <a href="#community" className="hover:text-light-blue transition-colors">Partners</a>
            <a href="#events" className="hover:text-light-blue transition-colors">Events</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => openModal({
                title: "Partner & Support STEM in San Antonio",
                category: "Industry & Community Partnerships",
                description: "Collaborate with Alamo AFCEA Education Foundation to sponsor grants, provide mentors, or support classroom technology across Bexar County and South Texas.",
                details: [
                  "Tax-deductible 501(c)(3) sponsorship tiers",
                  "Direct equipment donation programs (PC builds, robotics)",
                  "Mentorship opportunities for industry cyber & IT professionals"
                ],
                actionLabel: "Contact Sponsorship Team"
              })}
              className="text-navy hover:text-light-blue font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
            >
              Partner With Us
            </button>
            <a
              href="#programs"
              className="bg-navy hover:bg-navy-light text-white font-medium text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all"
            >
              Apply for Grants
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-charcoal hover:text-navy rounded-md focus:outline-none focus:ring-2 focus:ring-light-blue"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-5 shadow-lg space-y-4 animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-3 text-base font-medium text-charcoal">
              <a 
                href="#pathways" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-light-blue transition-colors"
              >
                Pathways
              </a>
              <a 
                href="#impact" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-light-blue transition-colors"
              >
                Our Impact
              </a>
              <a 
                href="#programs" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-light-blue transition-colors"
              >
                Programs & Grants
              </a>
              <a 
                href="#community" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-light-blue transition-colors"
              >
                Partners & Schools
              </a>
              <a 
                href="#events" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-light-blue transition-colors"
              >
                Events
              </a>
            </nav>
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal({
                    title: "Partner With Alamo AFCEA",
                    category: "Partnership & Sponsorship",
                    description: "Connect with our foundation committee to support scholarships, teacher grants, and regional STEM events.",
                    details: [
                      "Direct classroom impact across 14+ school districts",
                      "Cyber, engineering, and workforce pipeline development"
                    ],
                    actionLabel: "Get In Touch"
                  });
                }}
                className="w-full text-center border border-navy text-navy font-semibold py-2.5 rounded-lg"
              >
                Partner With Us
              </button>
              <a
                href="#programs"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-navy text-white font-semibold py-2.5 rounded-lg shadow-sm"
              >
                Explore Grants
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[620px] flex items-center justify-center bg-navy text-white overflow-hidden py-20 lg:py-28">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transform"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=80")' }}
        ></div>
        {/* Radial overlay gradient for optimal contrast */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy/95 via-navy/85 to-navy"></div>
        
        <div className="relative z-20 max-w-[1200px] mx-auto px-6 w-full text-center">
          <div className="inline-flex items-center gap-2 bg-light-blue/15 text-light-blue border border-light-blue/30 px-4 py-1.5 rounded-full text-xs md:text-sm uppercase tracking-widest font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Alamo AFCEA Education Foundation
          </div>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-6 max-w-4xl mx-auto tracking-tight">
            Equipping San Antonio’s Next Generation of Tech Leaders.
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Creating opportunities for students, educators, and communities across Bexar County and South Texas through meaningful investment in science, technology, engineering, and mathematics (STEM).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            <a
              href="#programs"
              className="bg-light-blue hover:bg-light-blue-dark text-white font-semibold py-3.5 px-8 rounded-lg transition-all shadow-lg hover:shadow-light-blue/20 w-full sm:w-auto text-center"
            >
              Apply for a Grant
            </a>
            <button
              onClick={() => openModal({
                title: "Partner With Alamo AFCEA Foundation",
                category: "Sponsorship & Community",
                description: "Join defense, commercial, and academic partners in San Antonio to power scholarships and hands-on STEM equipment grants.",
                details: [
                  "Fund Title I classroom tools & robotics kits",
                  "Provide scholarships for local university STEM scholars",
                  "Mentor middle and high school students at computer build days"
                ],
                actionLabel: "Submit Partnership Inquiry"
              })}
              className="bg-white/10 hover:bg-white/20 border-2 border-white/60 hover:border-white text-white font-semibold py-3.5 px-8 rounded-lg transition-all w-full sm:w-auto text-center"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* 2. Impact Metrics Bar */}
      <section className="max-w-[1200px] mx-auto px-6 relative z-30 -mt-14 mb-20 w-full">
        <div className="bg-white rounded-xl shadow-xl py-8 px-6 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200 text-center">
            <div className="flex flex-col items-center pt-2 md:pt-0">
              <div className="w-12 h-12 rounded-full bg-light-blue/10 flex items-center justify-center text-light-blue mb-3">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-navy mb-1 tracking-tight">$500K+</div>
              <div className="text-xs font-semibold text-charcoal/75 uppercase tracking-wider">Awarded in Scholarships & Grants</div>
            </div>
            <div className="flex flex-col items-center pt-6 md:pt-0">
              <div className="w-12 h-12 rounded-full bg-light-blue/10 flex items-center justify-center text-light-blue mb-3">
                <School className="w-6 h-6" />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-navy mb-1 tracking-tight">14+</div>
              <div className="text-xs font-semibold text-charcoal/75 uppercase tracking-wider">School Districts Supported</div>
            </div>
            <div className="flex flex-col items-center pt-6 md:pt-0">
              <div className="w-12 h-12 rounded-full bg-light-blue/10 flex items-center justify-center text-light-blue mb-3">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-navy mb-1 tracking-tight">1,000s</div>
              <div className="text-xs font-semibold text-charcoal/75 uppercase tracking-wider">Of Students Impacted Annually</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Choose Your Path Section */}
      <section id="pathways" className="bg-slate py-20 border-y border-gray-200/60 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-light-blue uppercase mb-2 block">
              Audience Pathways
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
              How Can We Help You Build the Future?
            </h2>
            <p className="text-charcoal/70 mt-3 text-base">
              Find the right grants, scholarships, or sponsorship initiatives tailored to your role in San Antonio's STEM ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PathCard 
              icon={<Presentation className="w-7 h-7" />}
              title="For Educators"
              body="Need durable STEM tools for your classroom? Apply for our tiered Teaching Tool Grants up to $1,250."
              link="View Educator Grants"
              onClick={() => {
                const el = document.getElementById('programs');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            <PathCard 
              icon={<Laptop className="w-7 h-7" />}
              title="For Students"
              body="Explore our Cyber, IT & STEM academic scholarships with UTSA, St. Mary's, OLLU, and Texas A&M-SA."
              link="View Scholarships"
              onClick={() => {
                const el = document.getElementById('programs');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            <PathCard 
              icon={<Building2 className="w-7 h-7" />}
              title="For Industry"
              body="Bridge the commercial and defense gap by funding the future tech and cybersecurity workforce."
              link="Sponsor & Donate"
              onClick={() => openModal({
                title: "Industry Sponsorship & Workforce Partnership",
                category: "Industry Engagement",
                description: "Help expand tech literacy and defend our nation's cyber infrastructure by supporting San Antonio students.",
                details: [
                  "Directly sponsor school robotics teams and hardware kits",
                  "Connect your organization with emerging student talent",
                  "Receive recognition at our annual symposium and luncheons"
                ],
                actionLabel: "Contact Partnership Committee"
              })}
            />
            <PathCard 
              icon={<Handshake className="w-7 h-7" />}
              title="For Volunteers"
              body="Mentor students, judge competitions, or support our local hands-on STEM computer build days."
              link="Get Involved"
              onClick={() => openModal({
                title: "Volunteer With Alamo AFCEA Foundation",
                category: "Volunteer & Mentorship",
                description: "Make an immediate impact by mentoring students or assisting at regional STEM challenges and computer build days.",
                details: [
                  "Computer Build Day mentor & coach",
                  "CyberPatriot competition support",
                  "Foundation committee volunteer positions"
                ],
                actionLabel: "Join Volunteer Roster"
              })}
            />
          </div>
        </div>
      </section>

      {/* 4. Impact Storytelling */}
      <section id="impact" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 relative group">
              <img 
                src="https://images.unsplash.com/photo-1571260899304-425dea4cf3ae?auto=format&fit=crop&w=1200&q=80" 
                alt="Students collaborating on hardware build" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-light-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                  Case Study: Port San Antonio
                </span>
                <p className="text-sm font-medium text-white/90">
                  Students build computers alongside defense and commercial IT mentors.
                </p>
              </div>
            </div>
            {/* Decorative accents */}
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-light-blue/10 rounded-full -z-10 blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-36 h-36 bg-navy/10 rounded-full -z-10 blur-xl"></div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-light-blue uppercase mb-3">
              <CheckCircle2 className="w-4 h-4 text-light-blue" />
              Tangible Classroom Outcomes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 tracking-tight leading-snug">
              Moving Beyond the Screen: Real Hands-On Impact.
            </h2>
            <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
              We prioritize funding that creates tangible outcomes, like our recent <strong>Computer Build Day at Port San Antonio</strong>. Over 100 students from 14 regional school districts not only learned how to assemble a PC from component parts alongside industry mentors—they took their completed computers home to permanently bridge the digital divide.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-light-blue/10 flex items-center justify-center text-light-blue shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-charcoal/80">
                  <strong>100% of awarded funds</strong> directed to regional educators, students, and active STEM labs.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-light-blue/10 flex items-center justify-center text-light-blue shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-charcoal/80">
                  Special focus on Title I, rural, and economically disadvantaged schools.
                </span>
              </div>
            </div>
            <button 
              onClick={() => openModal({
                title: "AAEF Impact & Outcomes Report",
                category: "Annual Performance Summary",
                description: "The Alamo AFCEA Education Foundation provides full financial transparency and detailed impact documentation for donors and committee members.",
                details: [
                  "Over $500,000 disbursed across Bexar and surrounding counties",
                  "98% of grant recipients report increased student engagement in STEM",
                  "Direct pipeline to collegiate Cyber and Engineering programs"
                ],
                actionLabel: "Request Complete Report (PDF)"
              })}
              className="bg-navy hover:bg-navy-light text-white font-semibold py-3 px-7 rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              See Our Impact Report <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Grant & Scholarship Details (Tabs) */}
      <section id="programs" className="bg-navy py-20 lg:py-24 text-white scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-light-blue uppercase mb-2 block">
              Foundation Initiatives
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Our Programs at a Glance
            </h2>
            <p className="text-white/70 mt-3 text-base">
              Explore grant cycles, educator recognition, and collegiate scholarships designed to foster San Antonio STEM excellence.
            </p>
          </div>
          <ProgramTabs onOpenModal={openModal} />
        </div>
      </section>

      {/* 6. Transparency & Community Partners */}
      <section id="community" className="bg-slate py-20 border-b border-gray-200/60 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-light-blue uppercase mb-2 block">
              Community Outreach & Equity
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 tracking-tight">
              Proudly supporting Title I, Rural, and Underrepresented schools across South Texas.
            </h2>
            <p className="text-charcoal/75 text-base leading-relaxed">
              Our funds go directly to the districts, educators, and organizations driving STEM education forward in Bexar County and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-center">
            <PartnerBadge name="Bexar County ISDs" sub="14+ Districts" />
            <PartnerBadge name="Uvalde CISD" sub="Rural Outreach" />
            <PartnerBadge name="SAMSAT" sub="Science & Tech Museum" />
            <PartnerBadge name="CyberPatriot" sub="Youth Cyber Defense" />
            <PartnerBadge name="Port San Antonio" sub="Innovation Campus" />
            <PartnerBadge name="Alamo Chapter" sub="AFCEA Parent Org" />
          </div>
        </div>
      </section>

      {/* 7. Upcoming Events */}
      <section id="events" className="bg-white py-20 scroll-mt-20">
        <div className="max-w-[840px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-light-blue uppercase mb-2 block">
              Calendar & Gatherings
            </span>
            <h2 className="text-3xl font-bold text-navy tracking-tight">
              Upcoming Foundation Events
            </h2>
            <p className="text-charcoal/70 mt-2 text-base">
              Join us at our symposiums, awards luncheons, and annual scholarship fundraisers.
            </p>
          </div>
          
          <div className="space-y-4">
            <EventStrip 
              month="OCT" 
              day="08" 
              title="Alamo AFCEA Cyber Career-Education Symposium" 
              location="Norris Conference Center, San Antonio"
              description="Connecting high school & college STEM students directly with military and defense contractors."
              onRegister={() => openModal({
                title: "Cyber Career-Education Symposium Registration",
                category: "October 08 • Norris Center",
                description: "Student admission is free. Industry sponsor tables and educator passes available.",
                details: [
                  "Keynotes from military cyber leaders",
                  "Live resume review & student demo stations",
                  "Teacher grant award presentations"
                ],
                actionLabel: "Reserve Free Ticket"
              })}
            />
            <EventStrip 
              month="NOV" 
              day="15" 
              title="Fall STEM Teacher Grant Awards Luncheon" 
              location="San Antonio Petroleum Club"
              description="Honoring our Fall grant recipients and the Ron Moore Outstanding STEM Educators."
              onRegister={() => openModal({
                title: "STEM Teacher Grant Luncheon Registration",
                category: "November 15 • Petroleum Club",
                description: "Join us in celebrating outstanding San Antonio educators receiving classroom grants.",
                details: [
                  "Keynote address by local education leadership",
                  "Presentation of Bronze, Silver, and Gold Ron Moore Awards",
                  "Networking with foundation trustees"
                ],
                actionLabel: "RSVP for Luncheon"
              })}
            />
            <EventStrip 
              month="FEB" 
              day="22" 
              title="Annual Scholarship Golf Tournament" 
              location="La Cantera Golf Club"
              description="Our primary annual fundraiser funding collegiate STEM scholarships across San Antonio."
              onRegister={() => openModal({
                title: "Annual Scholarship Golf Tournament",
                category: "February 22 • La Cantera",
                description: "Sponsor a hole or register a 4-person team. All proceeds directly fund student scholarships.",
                details: [
                  "18-hole championship scramble format",
                  "Corporate sponsor packages available",
                  "100% tax-deductible charitable contribution"
                ],
                actionLabel: "Register Team / Sponsor"
              })}
            />
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-navy-dark text-white py-16 border-t border-white/10">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
            Ready to Empower San Antonio's Next STEM Cohort?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-base">
            Whether you are a teacher looking for robotics kits, a student pursuing a cybersecurity degree, or an enterprise seeking to build the local talent pipeline.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#programs"
              className="bg-light-blue hover:bg-light-blue-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Browse Grants & Awards
            </a>
            <button
              onClick={() => openModal({
                title: "General Foundation Inquiry",
                category: "Alamo AFCEA Education Foundation",
                description: "Have questions about our grant cycles, scholarship partnerships, or donation options?",
                details: [
                  "Email: education@alamoafcea.org",
                  "Mailing Address: San Antonio, TX",
                  "Tax ID: 501(c)(3) Non-Profit Charitable Organization"
                ],
                actionLabel: "Send Message"
              })}
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Committee
            </button>
          </div>
        </div>
      </section>

      {/* Clean Footer */}
      <footer className="bg-charcoal text-white pt-14 pb-10 border-t border-gray-700">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-md bg-light-blue flex items-center justify-center text-white">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg text-white">Alamo AFCEA Education Foundation</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed max-w-md">
                A 501(c)(3) non-profit organization dedicated to advancing STEM education, workforce readiness, and technological literacy in the greater San Antonio military and civilian community.
              </p>
              <div className="text-xs text-white/50">
                Affiliated with the Alamo Chapter of AFCEA International.
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm text-white/70">
                <li><a href="#programs" className="hover:text-light-blue transition-colors">Teaching Tool Grants</a></li>
                <li><a href="#programs" className="hover:text-light-blue transition-colors">Ron Moore Educator Award</a></li>
                <li><a href="#programs" className="hover:text-light-blue transition-colors">Academic Scholarships</a></li>
                <li><a href="#events" className="hover:text-light-blue transition-colors">Symposium & Events</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Contact & Community</h4>
              <ul className="space-y-2.5 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-light-blue shrink-0" />
                  <span>San Antonio, TX</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-light-blue shrink-0" />
                  <a href="mailto:education@alamoafcea.org" className="hover:text-light-blue transition-colors">
                    education@alamoafcea.org
                  </a>
                </li>
                <li>
                  <a 
                    href="https://alamo.afceachapters.org" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-light-blue hover:underline text-xs mt-2"
                  >
                    Alamo Chapter Website <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <p>&copy; {new Date().getFullYear()} Alamo AFCEA Education Foundation. All rights reserved.</p>
            <p>501(c)(3) Non-Profit Charitable Organization • San Antonio, Texas</p>
          </div>
        </div>
      </footer>

      {/* Interactive Modal for Committee Demo */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative border border-gray-100 animate-in zoom-in-95 duration-200">
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-gray-400 hover:text-charcoal p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-light-blue uppercase tracking-wider">
              {activeModal.category}
            </span>
            <h3 className="text-2xl font-bold text-navy mt-1 mb-3">
              {activeModal.title}
            </h3>
            <p className="text-charcoal/80 text-sm leading-relaxed mb-5">
              {activeModal.description}
            </p>

            {activeModal.details && (
              <div className="bg-slate p-4 rounded-lg mb-6 space-y-2 border border-gray-200/50">
                <span className="text-xs font-bold text-navy uppercase tracking-wider block mb-1">
                  Key Highlights
                </span>
                {activeModal.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-charcoal/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-light-blue shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-sm font-medium text-charcoal/70 hover:text-charcoal rounded-lg transition-colors"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  alert("Thank you! In the production release, this connects directly to the AAEF submission portal.");
                  closeModal();
                }}
                className="px-5 py-2 text-sm font-semibold text-white bg-navy hover:bg-navy-light rounded-lg shadow-sm transition-colors"
              >
                {activeModal.actionLabel || "Continue"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Subcomponents

function PathCard({ 
  icon, 
  title, 
  body, 
  link, 
  onClick 
}: { 
  icon: React.ReactNode; 
  title: string; 
  body: string; 
  link: string; 
  onClick?: () => void;
}) {
  return (
    <div className="bg-white p-7 rounded-xl shadow-xs border border-gray-200/80 hover:border-light-blue hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
      <div className="text-navy group-hover:text-light-blue group-hover:scale-110 transition-all duration-300 mb-5 bg-slate w-14 h-14 rounded-xl flex items-center justify-center border border-gray-100">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-navy mb-2.5">{title}</h3>
      <p className="text-charcoal/70 text-sm mb-6 flex-grow leading-relaxed">{body}</p>
      <button 
        onClick={onClick}
        className="inline-flex items-center text-sm text-light-blue font-semibold hover:text-navy transition-colors text-left"
      >
        {link} <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}

function ProgramTabs({ onOpenModal }: { onOpenModal: (modal: ModalContent) => void }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "STEM Teaching Tool Grants",
      badge: "Accepting Fall & Spring Cycles",
      content: (
        <div>
          <div className="inline-block bg-light-blue/20 text-light-blue px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-light-blue/30">
            Grants Open to Regional K-12 Educators
          </div>
          <p className="text-white/90 mb-6 max-w-2xl text-base md:text-lg leading-relaxed">
            Empowering San Antonio classroom educators with resources for hands-on, experiential STEM instruction. We offer tiered funding to match the scale of your classroom lab:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-light-blue mt-1.5 shrink-0"></div>
              <span className="text-sm md:text-base"><strong>Tier 1 ($750):</strong> Hands-on classroom STEM supplies, sensors, software licenses, & lab consumables.</span>
            </li>
            <li className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-light-blue mt-1.5 shrink-0"></div>
              <span className="text-sm md:text-base"><strong>Tier 2 ($1,000):</strong> Intermediate electronics kits, 3D printing filaments, and small robotics gear.</span>
            </li>
            <li className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-light-blue mt-1.5 shrink-0"></div>
              <span className="text-sm md:text-base"><strong>Tier 3 ($1,250):</strong> Comprehensive makerspace setups, competition robotics packages, and server/networking kits.</span>
            </li>
          </ul>
          <button 
            onClick={() => onOpenModal({
              title: "STEM Teaching Tool Grant Application",
              category: "Educator Grants ($750 - $1,250)",
              description: "Open to full-time K-12 STEM educators in Bexar County and surrounding South Texas districts.",
              details: [
                "Simple online proposal and budget template",
                "Fast committee evaluation cycle (30 days)",
                "Disbursements made directly to school or district"
              ],
              actionLabel: "Start Grant Application"
            })}
            className="bg-light-blue hover:bg-light-blue-dark text-white font-semibold py-2.5 px-6 rounded-lg transition-colors shadow-md text-sm"
          >
            Apply for Teaching Grant
          </button>
        </div>
      )
    },
    {
      title: "Ron Moore Educators Award",
      badge: "Annual Recognition",
      content: (
        <div>
          <div className="inline-block bg-white/10 text-white/90 px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-white/20">
            Annual STEM Teaching Excellence Recognition
          </div>
          <p className="text-white/90 mb-6 max-w-2xl text-base md:text-lg leading-relaxed">
            Named in honor of Ron Moore, recognizing visionary educators who go above and beyond to inspire students in Science, Technology, Engineering, and Math.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-center">
              <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">Bronze Award</div>
              <div className="text-light-blue font-semibold text-lg">$2,000</div>
              <div className="text-xs text-white/60 mt-1">Classroom STEM stipend</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-center">
              <Award className="w-8 h-8 text-gray-300 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">Silver Award</div>
              <div className="text-light-blue font-semibold text-lg">$3,000</div>
              <div className="text-xs text-white/60 mt-1">Classroom STEM stipend</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-center">
              <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">Gold Award</div>
              <div className="text-light-blue font-semibold text-lg">$5,000</div>
              <div className="text-xs text-white/60 mt-1">Grand recognition stipend</div>
            </div>
          </div>
          <button 
            onClick={() => onOpenModal({
              title: "Ron Moore Outstanding STEM Educator Award",
              category: "Educator Recognition",
              description: "Nominate an exemplary teacher or submit your classroom portfolio for evaluation by the Alamo AFCEA awards board.",
              details: [
                "Peer, principal, or self-nomination accepted",
                "Awarded annually at the Fall STEM Luncheon",
                "Totaling $10,000 in annual teacher stipends"
              ],
              actionLabel: "Submit Educator Nomination"
            })}
            className="bg-light-blue hover:bg-light-blue-dark text-white font-semibold py-2.5 px-6 rounded-lg transition-colors shadow-md text-sm"
          >
            Nominate an Educator
          </button>
        </div>
      )
    },
    {
      title: "Academic Scholarships",
      badge: "University Partnerships",
      content: (
        <div>
          <div className="inline-block bg-light-blue/20 text-light-blue px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-light-blue/30">
            Undergraduate & Graduate Cyber / STEM Awards
          </div>
          <p className="text-white/90 mb-6 max-w-2xl text-base md:text-lg leading-relaxed">
            Supporting the next generation of Cyber, IT, and Engineering professionals through strong, endowed partnerships with local universities in San Antonio:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-light-blue shrink-0"></div>
              <div>
                <span className="font-bold text-white block">UTSA</span>
                <span className="text-xs text-white/60">University of Texas at San Antonio</span>
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-light-blue shrink-0"></div>
              <div>
                <span className="font-bold text-white block">St. Mary's University</span>
                <span className="text-xs text-white/60">School of Science, Engineering & Tech</span>
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-light-blue shrink-0"></div>
              <div>
                <span className="font-bold text-white block">OLLU</span>
                <span className="text-xs text-white/60">Our Lady of the Lake University</span>
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-light-blue shrink-0"></div>
              <div>
                <span className="font-bold text-white block">Texas A&M San Antonio</span>
                <span className="text-xs text-white/60">Cybersecurity & Computing Programs</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => onOpenModal({
              title: "Alamo AFCEA Collegiate Scholarships",
              category: "University STEM Scholarships",
              description: "Scholarships are coordinated in conjunction with financial aid and cyber departments at partner institutions.",
              details: [
                "Merit & need-based scholarship allocations",
                "Priority for Cyber Security, Computer Science, and Engineering",
                "Includes AFCEA student membership & symposium admission"
              ],
              actionLabel: "View Scholarship Criteria"
            })}
            className="bg-light-blue hover:bg-light-blue-dark text-white font-semibold py-2.5 px-6 rounded-lg transition-colors shadow-md text-sm"
          >
            Learn About Scholarships
          </button>
        </div>
      )
    },
    {
      title: "General & Out-of-Cycle Grants",
      badge: "Rolling Inquiries",
      content: (
        <div>
          <div className="inline-block bg-white/10 text-white/90 px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-white/20">
            Special STEM Initiatives
          </div>
          <p className="text-white/90 mb-6 max-w-2xl text-base md:text-lg leading-relaxed">
            Have a unique opportunity that falls outside our normal grant cycles? We review special requests on a rolling basis to ensure critical community needs and unexpected competitions are met.
          </p>
          <div className="bg-white/5 border border-white/10 p-5 rounded-lg mb-8">
            <p className="text-white/80 text-sm leading-relaxed mb-2">
              Examples of general grant awards include emergency competition travel stipends for regional robotics finalists, community maker lab hardware, and specialized equipment for underserved student clubs.
            </p>
            <p className="text-white/60 text-xs italic">
              *Out-of-cycle requests are subject to board review and available foundation funding.
            </p>
          </div>
          <button 
            onClick={() => onOpenModal({
              title: "Submit General Grant Inquiry",
              category: "Out-of-Cycle Request",
              description: "Tell the committee about your organization's unique STEM need or competition requirement.",
              details: [
                "Describe project objectives, timeline, and requested amount",
                "Board reviews submissions at monthly executive meetings"
              ],
              actionLabel: "Submit Inquiry Form"
            })}
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors text-sm"
          >
            Submit an Inquiry
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Tab Selector List */}
      <div className="flex flex-col w-full lg:w-5/12 gap-3">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`text-left p-5 rounded-xl font-semibold transition-all flex flex-col justify-between border ${
              activeTab === idx 
                ? 'bg-light-blue text-white shadow-xl border-light-blue scale-[1.02]' 
                : 'bg-white/5 text-white/80 hover:bg-white/10 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between w-full mb-1">
              <span className="text-base md:text-lg font-bold">{tab.title}</span>
              <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                activeTab === idx ? 'bg-white/20 text-white' : 'bg-white/10 text-white/60'
              }`}>
                {tab.badge}
              </span>
            </div>
            <span className={`text-xs ${activeTab === idx ? 'text-white/90' : 'text-white/50'}`}>
              Click to view program details and funding tiers
            </span>
          </button>
        ))}
      </div>
      
      {/* Active Tab Content Card */}
      <div className="w-full lg:w-7/12 bg-navy-dark border border-white/15 p-7 md:p-9 rounded-2xl shadow-2xl relative overflow-hidden min-h-[420px]">
        {/* Decorative blur backdrop */}
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-light-blue/10 rounded-full pointer-events-none blur-3xl"></div>
        
        <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center justify-between">
          <span>{tabs[activeTab].title}</span>
        </h3>
        <div className="animate-in fade-in slide-in-from-right-3 duration-300">
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
}

function PartnerBadge({ name, sub }: { name: string; sub: string }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-xs border border-gray-200/80 hover:border-light-blue hover:shadow-md transition-all flex flex-col items-center justify-center h-24">
      <div className="font-bold text-navy text-sm sm:text-base leading-tight text-center">{name}</div>
      <div className="text-[11px] font-semibold text-charcoal/50 mt-1 uppercase tracking-wider">{sub}</div>
    </div>
  );
}

function EventStrip({ 
  month, 
  day, 
  title, 
  location, 
  description, 
  onRegister 
}: { 
  month: string; 
  day: string; 
  title: string; 
  location: string; 
  description: string; 
  onRegister: () => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-light-blue/60 transition-all group">
      {/* Date Block */}
      <div className="flex sm:flex-col items-center justify-center min-w-[80px] bg-slate group-hover:bg-light-blue/10 rounded-xl p-3 border border-gray-100 transition-colors">
        <span className="text-light-blue font-bold text-xs tracking-widest mr-2 sm:mr-0">{month}</span>
        <span className="text-navy font-extrabold text-2xl md:text-3xl tracking-tight leading-none">{day}</span>
      </div>
      
      {/* Info Block */}
      <div className="flex-grow text-center sm:text-left space-y-1">
        <h4 className="text-lg font-bold text-navy group-hover:text-light-blue transition-colors leading-snug">
          {title}
        </h4>
        <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-semibold text-charcoal/70">
          <MapPin className="w-3.5 h-3.5 text-light-blue shrink-0" />
          <span>{location}</span>
        </div>
        <p className="text-xs text-charcoal/60 leading-relaxed pt-1">
          {description}
        </p>
      </div>
      
      {/* Action Button */}
      <div className="shrink-0 w-full sm:w-auto">
        <button 
          onClick={onRegister}
          className="w-full sm:w-auto border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold text-sm py-2 px-5 rounded-lg transition-all whitespace-nowrap shadow-xs"
        >
          Register Now
        </button>
      </div>
    </div>
  );
}

