import React, { useState, useEffect } from 'react';
import './Projects.css';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const projects = [
  {
    id: 1,
    title: 'SDE-Based Image Denoising',
    tagline: 'Single-step implicit correction for multiplicative noise',
    category: 'ML Research',
    year: '2024',
    description: 'Developed a grid-based image denoising model using Stochastic Differential Equations. Images corrupted with multiplicative noise are restored using a novel single-step implicit SDE correction — replacing the expensive iterative diffusion sampling process.',
    highlights: [
      { label: 'Benchmark', value: ' Outperformed DnCNN & ID-CNN on PSNR/SSIM' },
      { label: 'Innovation', value: ' Single-step correction vs. iterative sampling' },
      { label: 'Noise types', value: ' High-noise and mixed-noise conditions' },
    ],
    tech: ['Python', 'SDE Modeling', 'HuggingFace', 'Scipy', 'Google Colab'],
    paper: `${process.env.PUBLIC_URL}/ID_4_ASCML2026.pdf`,
  },
  {
    id: 2,
    title: 'Fake News Detection via Network Analysis',
    tagline: 'Mapping rumour spread patterns with graph theory',
    category: 'NLP / Graph',
    year: '2024',
    description: 'Built a fake news detection and analysis system on the PHEME dataset to study how rumours propagate on social media. Constructed interaction networks in Gephi and applied centrality metrics and modularity analysis to expose echo chambers and super-spreader nodes.',
    highlights: [
      { label: 'Dataset', value: ' PHEME — real social media rumour threads' },
      { label: 'Methods', value: ' Centrality metrics + modularity analysis' },
      { label: 'Finding', value: ' Structural polarization & weak cross-community links' },
    ],
    tech: ['Python', 'Gephi', 'Network Analysis', 'PHEME Dataset', 'Data Cleaning'],
    paper: `${process.env.PUBLIC_URL}/Project Report.pdf`,
  },
  {
    id: 3,
    title: 'Entity-Accurate Clinical Summarization',
    tagline: 'NER-integrated summarization to minimize hallucinations',
    category: 'Clinical AI',
    year: '2024',
    description: 'Designed a novel pipeline for generating concise, factually reliable summaries of patient notes from the MIMIC-III dataset. Named Entity Recognition is integrated into the summarization loop so that diseases, drugs, procedures, and patient details are always preserved and correctly attributed.',
    highlights: [
      { label: 'Dataset', value: ' MIMIC-III clinical notes' },
      { label: 'Architecture', value: ' BERT (NER) + T5 (summarization)' },
      { label: 'Goal', value: ' Zero hallucination of critical clinical entities' },
    ],
    tech: ['Python', 'PyTorch', 'BERT', 'T5', 'MIMIC-III', 'NER'],
    github: 'https://github.com/rishipabbathi',
  },
  {
    id: 4,
    title: 'Employee Management System',
    tagline: 'Skeleton structure implementing core SE concepts',
    category: 'Software Engineering',
    year: '2025',
    description: 'Built a Maven based Java 8 application to access and manipulate employee data using CRUD operations. This project uses a reusable DAO layer with prepared resource management system supporting the Insert, Update, Delete and Retrieve ops. JDBC API is used to connect the MySql database.',
    highlights: [
      { label: 'Functionality', value: ' Insert, Update, Delete, and Retrieve employee records' },
      { label: 'Architecture', value: ' Reusable DAO layer with clean separation of concerns' },
      { label: 'Database', value: ' MySQL integration using JDBC API' },
    ],
    tech: ['JAVA', 'SpringBoot', 'JDBC', 'Maven', 'MySql'],
    github: 'https://github.com/rishipabbathi',
  },
];

const cats = ['All', 'ML Research', 'NLP / Graph', 'Clinical AI', 'Software Engineering'];

export default function Projects() {
  useReveal();
  const [active, setActive] = useState('All');
  const [openProject, setOpenProject] = useState(null);
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <div className="page projects-page">

      <div className="proj-header reveal">
        <span className="eyebrow">Projects</span>
        <h1 className="proj-title">Research &amp; Engineering</h1>
        <p className="proj-sub">
          Four projects spanning diffusion models, network science, clinical NLP, and software engineering —
          each rigorously built and evaluated.
        </p>
      </div>

      <div className="filter-row reveal reveal-delay-1">
        {cats.map(c => (
          <button key={c} onClick={() => setActive(c)}
            className={`filter-btn ${active === c ? 'filter-btn--active' : ''}`}>
            {c}
          </button>
        ))}
      </div>

      <div className="proj-list">
        {filtered.map((p, i) => (
          <div
            className={`proj-row reveal reveal-delay-${i + 1}`}
            key={p.id}
            onClick={() => setOpenProject(openProject === p.id ? null : p.id)}
          >
            <div className="proj-row-header">
              <div className="proj-row-left">
                <span className="proj-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h2 className="proj-name">{p.title}</h2>
                  <p className="proj-tagline">{p.tagline}</p>
                </div>
              </div>
              <div className="proj-row-right">
                <span className="tag">{p.category}</span>
                <span className="proj-toggle">{openProject === p.id ? '−' : '+'}</span>
              </div>
            </div>

            {openProject === p.id && (
              <div className="proj-body" onClick={e => e.stopPropagation()}>
                <p className="proj-desc">{p.description}</p>
                <div className="proj-highlights">
                  {p.highlights.map(h => (
                    <div className="hl-item" key={h.label}>
                      <span className="hl-label">{h.label}</span>
                      <span className="hl-val">{h.value}</span>
                    </div>
                  ))}
                </div>
                <div className="proj-footer">
                  <div className="proj-tech">
                    {p.tech.map(t => <span className="tag" key={t}>{t}</span>)}
                  </div>
                  <div className="proj-links">
                    {p.paper && (
                      <a href={p.paper} target="_blank" rel="noreferrer" className="proj-link">
                        View Paper ↗
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="proj-link">
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="proj-cta reveal">
        <div className="cta-left">
          <p className="cta-label">GET IN TOUCH</p>
          <a href="mailto:rishivijayviswas@gmail.com" className="cta-email">rishivijayviswas@gmail.com</a>
          <p className="cta-phone">+91 8143184369</p>
        </div>
        <div className="cta-right">
          <p className="cta-label"></p>
          <div className="cta-links">
            <a href="https://github.com/rishipabbathi" target="_blank" rel="noreferrer" className="cta-link"></a>
            <a href="https://linkedin.com/in/rishipabbathi" target="_blank" rel="noreferrer" className="cta-link"></a>
            <a href="mailto:rishivijayviswas@gmail.com" className="cta-link"></a>
          </div>
        </div>
      </div>

    </div>
  );
}