import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const skills = [
  { cat: 'Languages', items: ['Python', 'Java', 'MySQL', 'JavaScript', 'HTML', 'LaTeX', 'Git'] },
  { cat: 'Frameworks', items: ['Spring Boot', 'Streamlit', 'JDBC', 'Maven', 'REST APIs'] },
  { cat: 'AI / ML', items: ['PyTorch', 'BERT', 'T5', 'HuggingFace', 'SDE Modeling', 'NLP'] },
  { cat: 'Tools', items: ['GitHub', 'VS Code', 'IntelliJ', 'Jupyter', 'Google Colab', 'Vercel'] },
];

const courses = [
  'Data Structures & Algorithms', 'Deep Neural Networks',
  'Natural Language Processing', 'Computer Vision',
  'Object-Oriented Programming', 'Database Management Systems',
];

const interests = [
  { title: 'Generative Models', desc: 'Diffusion processes, SDEs, image synthesis and restoration' },
  { title: 'Clinical NLP', desc: 'Entity-accurate summarization, hallucination reduction in medical AI' },
  { title: 'Network Science', desc: 'Misinformation detection, graph centrality, community structures' },
  { title: 'Software Engineering', desc: 'Full-stack systems, RESTful APIs, scalable backend architecture' },
];

const experience = [
  {
    role: 'Software Development Intern',
    company: 'Nisum Consulting',
    period: 'Jul – Aug 2025',
    points: [
      'Built a CRUD Employee Management System using Java, Maven, JDBC, and MySQL',
      'Integrated frontend with backend via RESTful APIs',
      'Collaborated with senior developers to debug and improve code quality',
      'Worked with Git, Maven, Spring Boot, and basic frontend development',
    ],
  },
  {
    role: 'Marketing Intern',
    company: 'Café Niloufer',
    period: 'Jun – Jul 2025',
    points: [
      'Got personally mentored by the marketing head of the company',
      'Gained hands-on experience in retail operations including inventory management, financial tracking, and product positioning',
      'Conducted market research and competitive analysis, identifying key sales strategies and areas of improvement',
      'Assisted in refining customer relationship management strategies, resulting in improved customer retention',
    ],
  },
  {
    role: 'Marketing & Management Intern',
    company: 'Insugo Insurance Brokers',
    period: 'Jan – Feb 2025',
    points: [
      'Built a Streamlit web app to extract key fields from insurance policy documents',
      'Shadowed department heads across Sales, HR, Finance, Marketing, and Administration',
      'Participated in client meetings and gained real-world deal negotiation experience',
    ],
  },
];

export default function Home() {
  useReveal();
  const [openExp, setOpenExp] = useState(null);

  return (
    <div className="page home-page">

      {/* HERO */}
      <section className="hero">
        <p className="hero-eyebrow reveal">B.Tech Artificial Intelligence · Mahindra University · Hyderabad</p>
        <h1 className="hero-name reveal reveal-delay-1">
          Rishi Pabbathi
        </h1>
        <p className="hero-bio reveal reveal-delay-2">
          I try to build and research intelligent systems
        </p>
        <div className="hero-actions reveal reveal-delay-3">
          <Link to="/projects" className="btn btn-solid">View Projects</Link>
          <a href="https://github.com/rishipabbathi" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
          <a href="https://linkedin.com/in/rishipabbathi" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
          <a href={`${process.env.PUBLIC_URL}/Rishi_Pabbathi.pdf`} target="_blank" rel="noreferrer" className="btn btn-outline">Resume ↗</a>
        </div>
        <div className="hero-meta reveal reveal-delay-4">
          <span>rishivijayviswas@gmail.com</span>
          <span className="hero-meta-dot">·</span>
          <span>3 Research Projects</span>
          <span className="hero-meta-dot">·</span>
          <span>3 Internships</span>
        </div>
      </section>

      <div className="divider reveal" />

      {/* ABOUT */}
      <section className="section reveal">
        <span className="eyebrow">About</span>
        <div className="about-grid">
          <div className="about-main">
            <h2 className="section-heading">Building AI that works<br />in the real world.</h2>
            <p className="body-text">
              Third-year AI student at Mahindra University. My work spans research-heavy ML projects 
              and practical software engineering. 
            </p>
            <p className="body-text">
              I believe good AI is honest: it gets evaluated honestly, handles edge cases, and minimises 
              harm. I'm currently open to research opportunities and software engineering internships.
            </p>
          </div>
          <div className="about-side">
            <div className="edu-block">
              <p className="edu-label">Education</p>
              <p className="edu-school">Mahindra University</p>
              <p className="edu-deg">B.Tech — Artificial Intelligence</p>
              <p className="edu-period">2023 – Present</p>
            </div>
            <div className="courses-block">
              <p className="edu-label">Relevant coursework</p>
              <div className="courses-tags">
                {courses.map(c => <span className="tag" key={c}>{c}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider reveal" />

      {/* INTERESTS */}
      <section className="section">
        <span className="eyebrow reveal">Research Interests</span>
        <div className="interests-grid">
          {interests.map((item, i) => (
            <div className={`interest-item reveal reveal-delay-${i + 1}`} key={i}>
              <p className="interest-num">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="interest-title">{item.title}</h3>
              <p className="interest-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider reveal" />

      {/* SKILLS */}
      <section className="section">
        <span className="eyebrow reveal">Skills</span>
        <div className="skills-grid">
          {skills.map((g, i) => (
            <div className={`skill-group reveal reveal-delay-${i + 1}`} key={g.cat}>
              <p className="skill-cat">{g.cat}</p>
              <div className="skill-tags">
                {g.items.map(s => <span className="tag" key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider reveal" />

      {/* EXPERIENCE */}
      <section className="section">
        <span className="eyebrow reveal">Experience</span>
        <div className="exp-list">
          {experience.map((e, i) => (
            <div
              className={`exp-row reveal reveal-delay-${i + 1}`}
              key={i}
              onClick={() => setOpenExp(openExp === i ? null : i)}
            >
              <div className="exp-header">
                <div className="exp-left">
                  <h3 className="exp-role">{e.role}</h3>
                  <p className="exp-company">{e.company}</p>
                </div>
                <div className="exp-right">
                  <span className="exp-period">{e.period}</span>
                  <span className="exp-toggle">{openExp === i ? '−' : '+'}</span>
                </div>
              </div>
              {openExp === i && (
                <ul className="exp-points">
                  {e.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
