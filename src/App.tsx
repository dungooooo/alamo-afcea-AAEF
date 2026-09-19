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
  ChevronDown
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=80")' }}
        ></div>
        <div className="absolute inset-0 z-10 bg-navy/80"></div>
        
        <div className="relative z-20 max-w-[1200px] mx-auto px-6 w-full text-center mt-[-40px]">
          <p className="text-light-blue uppercase tracking-widest font-semibold text-sm mb-4">
            Alamo AFCEA Education Foundation
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
            Equipping San Antonio’s Next Generation of Tech Leaders.
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Creating opportunities for students, educators, and communities through meaningful investment in science, technology, engineering, and mathematics (STEM).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-light-blue hover:bg-light-blue/90 text-white font-medium py-3 px-8 rounded transition-colors w-full sm:w-auto">
              Apply for a Grant
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded transition-colors w-full sm:w-auto">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* 2. Impact Metrics Bar */}
      <section className="max-w-[1200px] mx-auto px-6 relative z-30 -mt-16 mb-20">
        <div className="bg-white rounded-lg shadow-xl py-8 px-6 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200 text-center">
            <div className="flex flex-col items-center pt-4 md:pt-0">
              <GraduationCap className="w-10 h-10 text-light-blue mb-3" />
              <div className="text-3xl font-bold text-navy mb-1">$500K+</div>
              <div className="text-sm text-charcoal/70 uppercase tracking-wide">Awarded in Scholarships & Grants</div>
            </div>
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <School className="w-10 h-10 text-light-blue mb-3" />
              <div className="text-3xl font-bold text-navy mb-1">14+</div>
              <div className="text-sm text-charcoal/70 uppercase tracking-wide">School Districts Supported</div>
            </div>
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <Users className="w-10 h-10 text-light-blue mb-3" />
              <div className="text-3xl font-bold text-navy mb-1">100s</div>
              <div className="text-sm text-charcoal/70 uppercase tracking-wide">Of Students Impacted Annually</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Choose Your Path Section */}
      <section className="bg-slate py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            How Can We Help You Build the Future?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PathCard 
              icon={<Presentation className="w-8 h-8" />}
              title="For Educators"
              body="Need durable STEM tools for your classroom? Apply for our Teaching Tool Grants."
              link="View Educator Grants"
            />
            <PathCard 
              icon={<Laptop className="w-8 h-8" />}
              title="For Students"
              body="Explore our Cyber & STEM academic scholarships with local universities."
              link="View Scholarships"
            />
            <PathCard 
              icon={<Building2 className="w-8 h-8" />}
              title="For Industry"
              body="Bridge the commercial and defense gap by funding the future tech workforce."
              link="Sponsor & Donate"
            />
            <PathCard 
              icon={<Handshake className="w-8 h-8" />}
              title="For Volunteers"
              body="Mentor students or support our local hands-on STEM events."
              link="Get Involved"
            />
          </div>
        </div>
      </section>

      {/* 4. Impact Storytelling */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1571260899304-425dea4cf3ae?auto=format&fit=crop&w=800&q=80" 
                alt="Students building computers" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-light-blue/10 rounded-full z-[-1]"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-navy/5 rounded-full z-[-1]"></div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Moving Beyond the Screen: Real Hands-On Impact.
            </h2>
            <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
              We prioritize funding that creates tangible outcomes, like our recent Computer Build Day at Port San Antonio. Over 100 students from 14 districts not only learned how to build a PC from scratch alongside industry mentors, but they took the computers home to bridge the digital divide.
            </p>
            <button className="bg-navy hover:bg-navy/90 text-white font-medium py-3 px-8 rounded transition-colors inline-flex items-center gap-2">
              See Our Impact Report <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Grant & Scholarship Details (Tabs) */}
      <section className="bg-navy py-20 text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Programs at a Glance
          </h2>
          <ProgramTabs />
        </div>
      </section>

      {/* 6. Transparency & Community */}
      <section className="bg-slate py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-navy mb-4">
            Proudly supporting Title I, Rural, and Underrepresented schools across the region.
          </h2>
          <p className="text-charcoal/70 mb-12 max-w-2xl mx-auto">
            Our funds go directly to the districts, educators, and organizations driving STEM education forward in Bexar County and beyond.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mock Logos / Text for Partners */}
            <div className="bg-white p-4 rounded shadow-sm border border-gray-100 font-bold text-navy flex items-center justify-center h-20">Uvalde CISD</div>
            <div className="bg-white p-4 rounded shadow-sm border border-gray-100 font-bold text-navy flex items-center justify-center h-20">SAMSAT</div>
            <div className="bg-white p-4 rounded shadow-sm border border-gray-100 font-bold text-navy flex items-center justify-center h-20 text-sm text-center">CyberPatriot</div>
            <div className="bg-white p-4 rounded shadow-sm border border-gray-100 font-bold text-navy flex items-center justify-center h-20">UTSA</div>
            <div className="bg-white p-4 rounded shadow-sm border border-gray-100 font-bold text-navy flex items-center justify-center h-20">St. Mary's</div>
            <div className="bg-white p-4 rounded shadow-sm border border-gray-100 font-bold text-navy flex items-center justify-center h-20">OLLU</div>
          </div>
        </div>
      </section>

      {/* 7. Upcoming Events */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">
            Upcoming Foundation Events
          </h2>
          
          <div className="space-y-4">
            <EventStrip 
              month="OCT" 
              day="08" 
              title="Alamo AFCEA Cyber Career-Education Symposium" 
              location="Norris Center" 
            />
            <EventStrip 
              month="NOV" 
              day="15" 
              title="Fall STEM Teacher Grant Awards Luncheon" 
              location="San Antonio Petroleum Club" 
            />
            <EventStrip 
              month="FEB" 
              day="22" 
              title="Annual Scholarship Golf Tournament" 
              location="La Cantera Golf Club" 
            />
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="max-w-[1200px] mx-auto px-6 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Alamo AFCEA Education Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Subcomponents

function PathCard({ icon, title, body, link }: { icon: React.ReactNode, title: string, body: string, link: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-light-blue hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
      <div className="text-navy group-hover:text-light-blue transition-colors mb-6 bg-slate w-16 h-16 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-charcoal/70 mb-6 flex-grow leading-relaxed">{body}</p>
      <a href="#" className="inline-flex items-center text-light-blue font-semibold hover:text-navy transition-colors">
        {link} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}

function ProgramTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "STEM Teaching Tool Grants",
      content: (
        <div>
          <div className="inline-block bg-light-blue/20 text-light-blue px-3 py-1 rounded-full text-sm font-semibold mb-4 border border-light-blue/30">
            Accepting Applications
          </div>
          <p className="text-white/80 mb-6 max-w-2xl text-lg">
            Empowering educators with the resources they need for hands-on learning. We provide tiered funding to match the scale of your classroom needs.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-light-blue"></div>
              <span><strong>Tier 1:</strong> $750 for basic classroom supplies & software</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-light-blue"></div>
              <span><strong>Tier 2:</strong> $1,000 for advanced kits & small hardware</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-light-blue"></div>
              <span><strong>Tier 3:</strong> $1,250 for comprehensive robotics/lab setups</span>
            </li>
          </ul>
          <button className="bg-light-blue hover:bg-light-blue/90 text-white font-medium py-2 px-6 rounded transition-colors">
            Apply Now
          </button>
        </div>
      )
    },
    {
      title: "Ron Moore Educators Award",
      content: (
        <div>
           <div className="inline-block bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm font-semibold mb-4 border border-white/20">
            Nominations Open Soon
          </div>
          <p className="text-white/80 mb-6 max-w-2xl text-lg">
            Recognizing outstanding teachers who go above and beyond in Science, Technology, Engineering, and Math education.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-light-blue"></div>
              <span><strong>Bronze:</strong> $2,000 award</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-light-blue"></div>
              <span><strong>Silver:</strong> $3,000 award</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-light-blue"></div>
              <span><strong>Gold:</strong> $5,000 award</span>
            </li>
          </ul>
          <a href="#" className="text-light-blue hover:text-white underline font-medium">Learn more about the Ron Moore Award</a>
        </div>
      )
    },
    {
      title: "Academic Scholarships",
      content: (
        <div>
          <p className="text-white/80 mb-6 max-w-2xl text-lg">
            Supporting the next generation of Cyber, IT, and Engineering professionals through strong partnerships with local universities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 p-4 rounded border border-white/10">UTSA (University of Texas at San Antonio)</div>
            <div className="bg-white/5 p-4 rounded border border-white/10">St. Mary's University</div>
            <div className="bg-white/5 p-4 rounded border border-white/10">OLLU (Our Lady of the Lake University)</div>
            <div className="bg-white/5 p-4 rounded border border-white/10">Texas A&M San Antonio</div>
          </div>
        </div>
      )
    },
    {
      title: "General Grants",
      content: (
        <div>
          <p className="text-white/80 mb-6 max-w-2xl text-lg">
            Have a unique opportunity that falls outside our normal grant cycles? We review special requests on a rolling basis to ensure critical needs are met.
          </p>
          <p className="text-white/60 mb-8 italic">
            Out-of-cycle requests are subject to board review and available funding.
          </p>
          <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium py-2 px-6 rounded transition-colors">
            Submit an Inquiry
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Tab List */}
      <div className="flex flex-col w-full md:w-1/3 gap-2">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`text-left px-6 py-4 rounded font-semibold transition-all flex justify-between items-center ${
              activeTab === idx 
                ? 'bg-light-blue text-white shadow-lg' 
                : 'bg-white/5 text-white/70 hover:bg-white/10'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="w-full md:w-2/3 bg-navy border border-white/10 p-8 rounded-lg shadow-2xl relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full pointer-events-none blur-3xl"></div>
        
        <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
          {tabs[activeTab].title}
        </h3>
        <div className="animate-in fade-in slide-in-from-right-4 duration-300">
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
}

function EventStrip({ month, day, title, location }: { month: string, day: string, title: string, location: string }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow group">
      {/* Date */}
      <div className="flex flex-col items-center justify-center min-w-[80px]">
        <span className="text-light-blue font-bold text-sm tracking-wider">{month}</span>
        <span className="text-navy font-black text-3xl">{day}</span>
      </div>
      
      {/* Info */}
      <div className="flex-grow text-center sm:text-left">
        <h4 className="text-lg font-bold text-navy mb-1 group-hover:text-light-blue transition-colors">{title}</h4>
        <p className="text-charcoal/60">{location}</p>
      </div>
      
      {/* Action */}
      <div>
        <button className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-medium py-2 px-6 rounded transition-colors whitespace-nowrap">
          Register Now
        </button>
      </div>
    </div>
  );
}
