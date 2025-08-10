"use client";

import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-serif text-xl font-semibold text-foreground">
              Sandra Boccia
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "now", label: "Now" },
                { id: "projects", label: "Projects" },
                { id: "speaking", label: "Speaking" },
                { id: "awards", label: "Awards" },
                { id: "contact", label: "Work With Me" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === item.id ? "text-accent" : "text-secondary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Photo */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl">
                  <img
                    src="/images/sandra-profile-photo.jpg"
                    alt="Sandra Boccia - Strategist, speaker, and storyteller"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't exist yet
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = "flex";
                      }
                    }}
                  />
                  <div
                    className="w-full h-full bg-gradient-to-br from-accent/10 to-accent/30 flex items-center justify-center text-accent/60 hidden"
                    style={{ display: "none" }}
                  >
                    <svg
                      className="w-16 h-16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full opacity-60"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent/40 rounded-full"></div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Strategist, speaker, and storyteller linking innovation,
                entrepreneurship, and sustainability.
              </h1>
              <div className="w-24 h-px bg-accent mx-auto lg:mx-0 mb-8"></div>
              <p className="text-lg sm:text-xl text-secondary max-w-2xl mx-auto lg:mx-0 mb-12">
                Based in Cambridge, Massachusetts, I connect people, capital,
                and knowledge to turn ideas into action and scale global impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                >
                  Work With Me
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            About
          </h2>
          <div className="prose prose-lg max-w-none text-secondary">
            <p className="mb-6">
              I&apos;m a strategist, speaker, curator, researcher, and
              storyteller working at the intersection of technology, innovation,
              entrepreneurship, and sustainability. Based in Cambridge,
              Massachusetts, I connect people, capital, and knowledge to turn
              ideas into action and scale global impact.
            </p>
            <p className="mb-6">
              After two decades leading Latin America&apos;s most influential
              business publications within its largest media group, I now draw
              on a global network of CEOs, founders, investors, and
              environmental leaders to bridge worlds and accelerate change.
            </p>
            <p className="mb-6">
              I believe in the power of storytelling, dialogue, and collective
              intelligence to help people and organizations create, lead, and
              collaborate differently. Having visited over 40 countries across
              six continents, I bring a truly international perspective to every
              project, infusing diverse cultural, professional, and human
              experiences into everything I do.
            </p>
          </div>
        </div>
      </section>

      {/* The Central Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
            The Central
          </h2>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            💌 The Central is my side project — a space for reflections and
            essays on innovation, culture, and the shifting landscapes of
            technology and humanity.
          </p>
          <a
            href="https://sandraboccia.substack.com/publish/home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            Read it here
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* What I'm Doing Now Section */}
      <section id="now" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            What I&apos;m Doing Now
          </h2>
          <div className="prose prose-lg max-w-none text-secondary">
            <p className="mb-8">
              Right now, I&apos;m a Fellow at Harvard&apos;s Advanced Leadership
              Initiative, researching how artificial intelligence can be
              designed and used to strengthen — rather than undermine — human
              creativity and social trust.
            </p>
            <p className="mb-6">
              I&apos;m engaged in courses and collaborations across Harvard and
              MIT, including:
            </p>
            <ul className="space-y-2 mb-8">
              <li>
                • Philosophy of Technology: From Marx and Heidegger to AI, with
                Mathias Risse at Harvard Kennedy School
              </li>
              <li>
                • Artificial Intelligence and Art, with Antonio Somaini at
                Harvard
              </li>
              <li>
                • What&apos;s a Better Future?, with Rosalind Picard at MIT
                Media Lab
              </li>
              <li>
                • MIT Venture Studio, exploring venture building and innovation
                ecosystems
              </li>
              <li>• Safeguarding the Future, with Kevin Esvelt at MIT</li>
              <li>
                • Deep dives at Harvard Business School on AI and pressing
                social problems
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Projects & Initiatives
          </h2>

          <div className="mb-12">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
              Current project:
            </h3>
            <div className="bg-muted/50 p-6 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">
                Craft as Code
              </h4>
              <p className="text-secondary">
                An academic and social impact initiative exploring how AI can
                empower creative entrepreneurs to gain economic independence and
                preserve cultural heritage.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
              Selected previous initiatives:
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Um Só Planeta",
                  description:
                    "Brazil's largest editorial movement on climate action, awarded Best Latin American Project by the International News Media Association (INMA) and winner of the Covering Climate Now Journalism Award.",
                },
                {
                  title: "100 Startups to Watch",
                  description:
                    "An annual benchmark connecting Brazil's most promising startups with investors, mentors, and the media.",
                },
                {
                  title: "Mind the Gap Leadership Dinner",
                  description:
                    "An invitation-only event bringing together CEOs, investors, and thought leaders to design actionable strategies for the future of business and society.",
                },
                {
                  title: "Homens da Nossa Época",
                  description:
                    "A podcast series engaging male leaders in conversations about equity, inclusion, and cultural transformation.",
                },
                {
                  title: "FICE",
                  description:
                    "A large-scale event connecting Brazil's innovation and entrepreneurship communities.",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-muted/30 p-6 rounded-lg border border-border"
                >
                  <h4 className="font-semibold text-foreground mb-2">
                    {project.title}
                  </h4>
                  <p className="text-secondary text-sm">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Section */}
      <section id="speaking" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
            Speaking & Moderation
          </h2>
          <p className="text-lg text-secondary text-center mb-12 max-w-2xl mx-auto">
            I create spaces where diverse voices connect, challenge each other,
            and imagine new futures together.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "TEDx São Paulo",
              "Web Summit Rio",
              "Amcham CEO Forum",
              "IBGC",
              "Flip — Festa Literária Internacional de Paraty",
              "Fórum Jurídico de Lisboa",
              "Beyond Macau",
              "Brazil-Japan Young Leaders Forum",
              "Brazil Climate Summit in New York",
            ].map((event, index) => (
              <div
                key={index}
                className="bg-background p-4 rounded-lg border border-border text-center"
              >
                <span className="text-foreground font-medium">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Awards & Recognition
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Women in Tech Global Award — recognized for leadership in technology and innovation",
              "LinkedIn Top Voice — for thought leadership on innovation, leadership, and sustainability",
              "Covering Climate Now Journalism Award — for Um Só Planeta",
              "Best Latin American Project — International News Media Association (INMA) for Um Só Planeta",
              "Brazilian Environmental Leadership Award (BELA) — U.S. Consulate",
              "Career Tribute — World Creativity Festival",
              "European Tourism Commission Awards (twice) — best international business and travel reporting",
            ].map((award, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-secondary">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Personal & Beyond
          </h2>
          <div className="prose prose-lg max-w-none text-secondary text-center">
            <p className="mb-6">
              When I&apos;m not working, studying, or traveling, you&apos;ll
              likely find me in a kayak — exploring the wild beaches of
              northeastern Brazil or gliding along the Charles River in
              Cambridge.
            </p>
            <p className="mb-6">
              Nature keeps me grounded and reminds me to slow down, listen
              deeply, and reconnect with what matters most. I also love cooking
              Italian dishes, watching documentaries, reading biographies,
              visiting art galleries, and writing.
            </p>
            <p className="font-medium text-foreground">
              Curiosity is my lifelong practice — shaping not just my work, but
              my life.
            </p>
          </div>
        </div>
      </section>

      {/* Work With Me Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Work With Me
          </h2>
          <p className="text-lg text-secondary text-center mb-12 max-w-2xl mx-auto">
            I collaborate with companies, universities, governments, and
            cultural organizations to design and lead:
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-12">
            {[
              "Strategic guidance for online and print editorial projects for brands and individuals",
              "Keynote talks and executive briefings",
              "Strategic moderation for forums and leadership retreats",
              "Advisory on innovation, strategic storytelling, and future-ready leadership",
              "Mentorship on corporate life transitions, storytelling, new business creation, and media positioning",
              "Bridges connecting talent from the Harvard-MIT ecosystem with Brazil and beyond",
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-secondary">{service}</p>
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="flex justify-center mb-8">
            <a
              href="mailto:sandra_boccia@harvard.edu"
              className="inline-flex items-center gap-3 bg-accent text-white px-10 py-4 rounded-xl font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              Get in Touch
            </a>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <a
              href="https://www.linkedin.com/in/sandra-boccia-44595876"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:bg-muted/50 transition-all duration-300 hover:border-accent/30 hover:shadow-md"
            >
              <div className="w-10 h-10 bg-[#0077B5] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-medium text-foreground group-hover:text-accent transition-colors">
                  LinkedIn
                </div>
                <div className="text-xs text-secondary">
                  Professional Network
                </div>
              </div>
              <svg
                className="w-4 h-4 text-secondary group-hover:text-accent transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            <a
              href="https://sandraboccia.substack.com/publish/home"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:bg-muted/50 transition-all duration-300 hover:border-accent/30 hover:shadow-md"
            >
              <div className="w-10 h-10 bg-[#FF6719] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-medium text-foreground group-hover:text-accent transition-colors">
                  The Central
                </div>
                <div className="text-xs text-secondary">Newsletter</div>
              </div>
              <svg
                className="w-4 h-4 text-secondary group-hover:text-accent transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/ssandraboccia/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:bg-muted/50 transition-all duration-300 hover:border-accent/30 hover:shadow-md"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-medium text-foreground group-hover:text-accent transition-colors">
                  Instagram
                </div>
                <div className="text-xs text-secondary">Visual Stories</div>
              </div>
              <svg
                className="w-4 h-4 text-secondary group-hover:text-accent transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-secondary text-sm">
            © 2024 Sandra Boccia. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
