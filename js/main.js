/* =========================================================
   TOMÁS LAGOMARSINO PORTFOLIO — MAIN JAVASCRIPT
   ========================================================= */

'use strict';

// ─── i18n Translations ───────────────────────────────────────────────────────

const translations = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.ai': 'IA Aplicada',
    'nav.experience': 'Experiencia',
    'nav.education': 'Educación',
    'nav.skills': 'Habilidades',
    'nav.certs': 'Certificados',
    'nav.contact': 'Contacto',
    'nav.download': 'CV PDF',

    'hero.badge': 'Disponible para trabajar',
    'hero.greeting': 'Hola, soy',
    'hero.secondary': 'También abierto a oportunidades como Analista de Sistemas y otros roles IT.',
    'hero.description': 'Ssr. iOS Developer especializado en Swift, SwiftUI y desarrollo mobile, con experiencia en React Native, MVVM y Clean Architecture. Potencio mi productividad y calidad de código utilizando Agentes de IA autónomos como diferencial.',
    'hero.cta.contact': 'Contactarme',
    'hero.cta.download': 'Descargar CV',
    'hero.stat.years': 'Años en Dev Mobile',
    'hero.stat.projects': 'Proyectos & Apps',
    'hero.stat.roles': 'Roles profesionales',
    'hero.stat.certs': 'Certificaciones',

    'about.tag': 'Sobre mí',
    'about.heading': 'Quién soy',
    'about.role': 'Ssr. iOS & React Native Developer',
    'about.personal.heading': 'Información Profesional',
    'about.personal.availability': 'Disponibilidad:',
    'about.personal.fulltime': 'Full-time · Inmediata',
    'about.intro': 'Soy desarrollador mobile especializado en el ecosistema iOS (Swift, SwiftUI) y soluciones multiplataforma con React Native. Apasionado por crear código limpio, mantenible y accesible, incorporando prácticas avanzadas de arquitectura e integración de herramientas agénticas de IA para acelerar entregas.',
    'about.objective.heading': 'Objetivo Laboral',
    'about.objective.text': 'Actualmente busco nuevos desafíos profesionales dentro del área de tecnología. Mi principal orientación es el desarrollo Mobile como Ssr. iOS / React Native Developer, aunque también estoy abierto a oportunidades como Analista de Sistemas y otros roles IT donde pueda aportar mi experiencia técnica.',
    'about.languages.heading': 'Idiomas',
    'about.languages.spanish': 'Español',
    'about.languages.native': 'Nativo',
    'about.languages.english': 'Inglés',
    'about.languages.intermediate': 'Nivel Medio',

    'projects.tag': 'Portfolio & Apps',
    'projects.heading': 'Proyectos Destacados',
    'projects.p1.desc': 'Aplicación mobile para gestión de rutas comerciales, clientes y pedidos, con funcionamiento offline y sincronización en tiempo real.',
    'projects.p2.desc': 'Aplicación mobile orientada a asistencia al viajero y médica, con sistema de suscripciones y diversas integraciones externas.',
    'projects.p3.desc': 'Aplicación mobile multiplataforma desarrollada con React Native para asistencia médica y gestión de viajeros.',

    'ai.tag': 'Diferencial & Eficiencia',
    'ai.heading': 'IA Aplicada al Desarrollo',
    'ai.subtitle': 'Optimizo los tiempos de entrega, refactorización y testing integrando Agentes de IA autónomos (Cursor, Claude Code, Antigravity) directamente en mi flujo de ingeniería mobile.',
    'ai.card1.title': 'Agentes de IA Autónomos',
    'ai.card1.desc': 'Dominio de herramientas agénticas de última generación (Claude Code, Antigravity, Cursor) para automatizar refactorizaciones complejas, depuración profunda y creación de arquitecturas limpias en tiempo récord.',
    'ai.card2.title': 'Prompt Engineering & Contexto',
    'ai.card2.desc': 'Diseño de arquitecturas de contexto (AGENTS.md, SKILL.md), optimización de ventanas de contexto y estructuración de instrucciones precisas para maximizar la calidad y fidelidad del código generado.',
    'ai.card3.title': 'Integración de APIs de LLM',
    'ai.card3.desc': 'Conexión e integración de modelos de lenguaje (OpenAI, Anthropic Claude, Google Gemini) en aplicaciones móviles y web (SwiftUI, React Native) usando Function Calling, Tool Use y streaming.',
    'ai.card4.title': 'Desarrollo Acelerado & Quality',
    'ai.card4.desc': 'Multiplicación de la velocidad de desarrollo manteniendo los más altos estándares de Clean Code, generación de pruebas unitarias automatizadas y documentación viva impulsada por IA.',
    'ai.sim.title': 'Demostración Interactiva: Workflows Agénticos',
    'ai.sim.subtitle': 'Explorá ejemplos reales de código y workflows generados/optimizados mediante Agentes de IA:',
    'ai.sim.btn1': 'SwiftUI ViewModel',
    'ai.sim.btn2': 'Bridge React Native',
    'ai.sim.btn3': 'Agente Tool Calling',

    'exp.tag': 'Trayectoria',
    'exp.heading': 'Experiencia Profesional',
    'exp.remote': 'Remoto',
    'exp.present': 'Actualidad',
    'exp.job1.title': 'iOS / React Native Developer & AI Specialist',
    'exp.job1.task1': 'Desarrollo de aplicaciones nativas con SwiftUI y React Native',
    'exp.job1.task2': 'Implementación de arquitectura MVVM y patrones de diseño modernos',
    'exp.job1.task3': 'Integración con APIs RESTful y herramientas como Firebase, Realm y StoreKit',
    'exp.job1.task4': 'Optimización del flujo de desarrollo móvil utilizando Agentes de IA autónomos (Cursor, Claude Code, Antigravity) para acelerar refactorizaciones y pruebas',
    'exp.job2.title': 'Docente de Sistemas Digitales y Operativos',
    'exp.job2.task1': 'Docente de Sistemas Digitales',
    'exp.job2.task2': 'Docente de Sistemas Operativos',
    'exp.job3.title': 'Profesor de Prácticas Profesionalizantes',
    'exp.job3.task1': 'Profesor de Prácticas Prof. 3',
    'exp.job4.title': 'Técnico en Reparación y Mantenimiento de PC',
    'exp.job4.task1': 'Técnico en reparación y mantenimiento de PC y notebook',
    'exp.job5.title': 'Tallerista / Facilitador — Plan Provincial de Robótica Educativa',
    'exp.job5.company': 'Dirección General de Cultura y Educación',
    'exp.job5.task1': 'Facilitador en Escuelas Primarias del Distrito',

    'edu.tag': 'Formación',
    'edu.heading': 'Educación',
    'edu.degree1': 'Técnico Superior en Análisis de Sistemas',
    'edu.gpa': 'Promedio final:',

    'skills.tag': 'Competencias',
    'skills.heading': 'Habilidades',
    'skills.ai.title': 'IA & Desarrollo Agéntico',
    'skills.ai.agents': 'Agentes de IA (Claude Code, Cursor, Antigravity)',
    'skills.ai.prompt': 'Prompt Engineering & Reglas de Contexto',
    'skills.ai.llm': 'Integración APIs LLM (OpenAI, Claude, Gemini)',
    'skills.ai.testing': 'Code Review & Unit Testing asistido por IA',
    'skills.tech.title': 'Técnicas / Desarrollo Mobile',
    'skills.it.title': 'Informática General',
    'skills.it.pctools': 'Manejo de PC y herramientas informáticas',
    'skills.it.office': 'Paquete Office (nivel intermedio)',
    'skills.it.support': 'Soporte técnico general',
    'skills.soft.title': 'Habilidades Generales',
    'skills.soft.teamwork': 'Trabajo en equipo',
    'skills.soft.responsibility': 'Responsabilidad y compromiso',
    'skills.soft.problem': 'Resolución de problemas',
    'skills.soft.adaptation': 'Adaptación rápida',
    'skills.soft.communication': 'Buena comunicación',
    'skills.soft.organization': 'Organización y cumplimiento de tareas',

    'certs.tag': 'Aprendizaje continuo',
    'certs.heading': 'Certificados y Cursos',
    'certs.platzi.label': 'Perfil en Platzi',
    'certs.ai1': 'Desarrollo de Software Asistido por Agentes de IA',
    'certs.ai2': 'Prompt Engineering & Workflows Autónomos',
    'certs.c1': 'Curso de Programación Avanzado a Swift',
    'certs.c2': 'Curso de Programación con Swift: Funciones',
    'certs.c3': 'Curso de Programación en Swift',
    'certs.c4': 'Curso de Programación Orientada a Objetos en Swift',
    'certs.c5': 'Curso de Programación Orientada a Objetos: POO',
    'certs.c6': 'Curso Profesional de Git y GitHub',

    'contact.tag': 'Hablemos',
    'contact.heading': 'Contacto',
    'contact.subtitle': '¿Tenés una propuesta o querés conocerme mejor? Escribime por mail o por WhatsApp.',
    'contact.email.label': 'Email',
    'contact.whatsapp.label': 'WhatsApp',
    'contact.cv.title': 'Currículum Vitae',
    'contact.cv.sub': 'Descargá mi CV en PDF',
    'contact.cv.download': 'Descargar PDF',
    'contact.form.heading': 'Enviame un mensaje',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.form.note': 'Tu mensaje se enviará directamente a mi correo electrónico sin abrir ninguna aplicación.',
    'contact.form.success': '¡Mensaje enviado con éxito! Me pondré en contacto con vos a la brevedad.',
    'contact.form.error': 'Hubo un error al enviar el mensaje. Por favor intentá nuevamente.',

    'footer.rights': 'Todos los derechos reservados.',
  },

  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.ai': 'Applied AI',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.certs': 'Certificates',
    'nav.contact': 'Contact',
    'nav.download': 'CV PDF',

    'hero.badge': 'Available for work',
    'hero.greeting': "Hi, I'm",
    'hero.secondary': 'Also open to opportunities as a Systems Analyst and other IT roles.',
    'hero.description': 'Ssr. iOS Developer specialized in Swift, SwiftUI, and mobile development, with experience in React Native, MVVM, and Clean Architecture. I boost my productivity and code quality using autonomous AI Agents as a key differentiator.',
    'hero.cta.contact': 'Contact me',
    'hero.cta.download': 'Download CV',
    'hero.stat.years': 'Years in Mobile Dev',
    'hero.stat.projects': 'Projects & Apps',
    'hero.stat.roles': 'Professional roles',
    'hero.stat.certs': 'Certifications',

    'about.tag': 'About me',
    'about.heading': 'Who I am',
    'about.role': 'Ssr. iOS & React Native Developer',
    'about.personal.heading': 'Professional Information',
    'about.personal.availability': 'Availability:',
    'about.personal.fulltime': 'Full-time · Immediate',
    'about.intro': 'I am a mobile developer specialized in the iOS ecosystem (Swift, SwiftUI) and cross-platform solutions with React Native. Passionate about building clean, maintainable, and accessible code, incorporating advanced software architecture practices and AI agentic tools to accelerate deliveries.',
    'about.objective.heading': 'Career Objective',
    'about.objective.text': 'I am currently looking for new professional challenges within the technology field. My main focus is Mobile Development as a Mid-level iOS / React Native Developer, while I am also open to opportunities as a Systems Analyst and other IT roles where I can contribute my technical experience.',
    'about.languages.heading': 'Languages',
    'about.languages.spanish': 'Spanish',
    'about.languages.native': 'Native',
    'about.languages.english': 'English',
    'about.languages.intermediate': 'Intermediate',

    'projects.tag': 'Portfolio & Apps',
    'projects.heading': 'Featured Projects',
    'projects.p1.desc': 'Mobile application for managing commercial routes, clients, and orders, featuring offline operation and real-time synchronization.',
    'projects.p2.desc': 'Mobile application focused on traveler and medical assistance, featuring subscription systems and various external integrations.',
    'projects.p3.desc': 'Cross-platform mobile application built with React Native for medical assistance and traveler management.',

    'ai.tag': 'Differentiator & Efficiency',
    'ai.heading': 'AI Applied to Development',
    'ai.subtitle': 'I optimize delivery times, refactoring, and testing by integrating autonomous AI Agents (Cursor, Claude Code, Antigravity) directly into my mobile engineering workflow.',
    'ai.card1.title': 'Autonomous AI Agents',
    'ai.card1.desc': 'Mastery of cutting-edge agentic tools (Claude Code, Antigravity, Cursor) to automate complex refactoring, deep debugging, and clean architecture design in record time.',
    'ai.card2.title': 'Prompt Engineering & Context',
    'ai.card2.desc': 'Designing context architectures (AGENTS.md, SKILL.md), context window optimization, and structured precise instructions to maximize generated code quality and fidelity.',
    'ai.card3.title': 'LLM API Integration',
    'ai.card3.desc': 'Connecting and integrating Language Models (OpenAI, Anthropic Claude, Google Gemini) into mobile and web applications (SwiftUI, React Native) using Function Calling, Tool Use, and async streaming.',
    'ai.card4.title': 'Accelerated Dev & Quality',
    'ai.card4.desc': 'Multiplying development velocity while maintaining top Clean Code standards, automated unit testing generation, and AI-driven living documentation.',
    'ai.sim.title': 'Interactive Demo: Agentic Workflows',
    'ai.sim.subtitle': 'Explore real code snippets and workflows created/optimized using AI Agents:',
    'ai.sim.btn1': 'SwiftUI ViewModel',
    'ai.sim.btn2': 'React Native Bridge',
    'ai.sim.btn3': 'Agent Tool Calling',

    'exp.tag': 'Career',
    'exp.heading': 'Professional Experience',
    'exp.remote': 'Remote',
    'exp.present': 'Present',
    'exp.job1.title': 'iOS / React Native Developer & AI Specialist',
    'exp.job1.task1': 'Native app development with SwiftUI and React Native',
    'exp.job1.task2': 'Implementation of MVVM architecture and modern design patterns',
    'exp.job1.task3': 'Integration with RESTful APIs and tools like Firebase, Realm, and StoreKit',
    'exp.job1.task4': 'Optimization of mobile development workflow using autonomous AI Agents (Cursor, Claude Code, Antigravity) to accelerate refactoring and testing',
    'exp.job2.title': 'Digital & Operating Systems Teacher',
    'exp.job2.task1': 'Digital Systems Teacher',
    'exp.job2.task2': 'Operating Systems Teacher',
    'exp.job3.title': 'Professional Practices Professor',
    'exp.job3.task1': 'Professional Practices Prof. 3',
    'exp.job4.title': 'PC Repair and Maintenance Technician',
    'exp.job4.task1': 'PC and laptop repair and maintenance technician',
    'exp.job5.title': 'Workshop Facilitator — Provincial Educational Robotics Program',
    'exp.job5.company': 'Directorate General of Culture and Education',
    'exp.job5.task1': 'Facilitator at District Primary Schools',

    'edu.tag': 'Education',
    'edu.heading': 'Education',
    'edu.degree1': 'Higher Technician in Systems Analysis',
    'edu.gpa': 'Final GPA:',

    'skills.tag': 'Competencies',
    'skills.heading': 'Skills',
    'skills.ai.title': 'AI & Agentic Development',
    'skills.ai.agents': 'AI Agents (Claude Code, Cursor, Antigravity)',
    'skills.ai.prompt': 'Prompt Engineering & Context Rules',
    'skills.ai.llm': 'LLM API Integration (OpenAI, Claude, Gemini)',
    'skills.ai.testing': 'AI-assisted Code Review & Unit Testing',
    'skills.tech.title': 'Technical / Mobile Development',
    'skills.it.title': 'General IT',
    'skills.it.pctools': 'PC management and IT tools',
    'skills.it.office': 'Microsoft Office (intermediate level)',
    'skills.it.support': 'General technical support',
    'skills.soft.title': 'General Skills',
    'skills.soft.teamwork': 'Teamwork',
    'skills.soft.responsibility': 'Responsibility and commitment',
    'skills.soft.problem': 'Problem solving',
    'skills.soft.adaptation': 'Fast adaptation',
    'skills.soft.communication': 'Good communication',
    'skills.soft.organization': 'Organization and task management',

    'certs.tag': 'Continuous learning',
    'certs.heading': 'Certificates & Courses',
    'certs.platzi.label': 'Platzi Profile',
    'certs.ai1': 'Software Development Assisted by AI Agents',
    'certs.ai2': 'Prompt Engineering & Autonomous Workflows',
    'certs.c1': 'Advanced Swift Programming Course',
    'certs.c2': 'Swift Programming: Functions Course',
    'certs.c3': 'Swift Programming Course',
    'certs.c4': 'Object-Oriented Programming in Swift',
    'certs.c5': 'Object-Oriented Programming: OOP',
    'certs.c6': 'Professional Git and GitHub Course',

    'contact.tag': "Let's talk",
    'contact.heading': 'Contact',
    'contact.subtitle': 'Have a proposal or want to know me better? Write me by email or WhatsApp.',
    'contact.email.label': 'Email',
    'contact.whatsapp.label': 'WhatsApp',
    'contact.cv.title': 'Curriculum Vitae',
    'contact.cv.sub': 'Download my CV as a PDF',
    'contact.cv.download': 'Download PDF',
    'contact.form.heading': 'Send me a message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.note': 'Your message will be sent directly to my inbox without opening any email client.',
    'contact.form.success': 'Message sent successfully! I will get back to you shortly.',
    'contact.form.error': 'An error occurred while sending the message. Please try again.',

    'footer.rights': 'All rights reserved.',
  },
};

// ─── Typed text phrases ───────────────────────────────────────────────────────
const phrases = {
  es: [
    'Ssr. iOS Developer',
    'React Native Developer',
    'Swift & SwiftUI Specialist',
    'Mobile Software Engineer',
    'IA Aplicada al Desarrollo',
  ],
  en: [
    'Ssr. iOS Developer',
    'React Native Developer',
    'Swift & SwiftUI Specialist',
    'Mobile Software Engineer',
    'AI-Boosted Developer',
  ],
};

// ─── State ────────────────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('portfolio-lang') || 'es';
let typedIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typedTimeout = null;

// ─── DOM helpers ──────────────────────────────────────────────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ─── i18n Apply ──────────────────────────────────────────────────────────────
function applyTranslations(lang) {
  const t = translations[lang];
  $$('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  // Update html lang attribute
  document.documentElement.lang = lang;
  // Update lang toggle button label
  $('#lang-label').textContent = lang === 'es' ? 'EN' : 'ES';
  // Update page title
  document.title = lang === 'es'
    ? 'Tomás Agustín Lagomarsino | Portfolio'
    : 'Tomás Agustín Lagomarsino | Portfolio';
  // Restart typed animation with new phrases
  resetTyped();
}

// ─── Language Toggle ──────────────────────────────────────────────────────────
function initLangToggle() {
  const btn = $('#lang-toggle');
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('portfolio-lang', currentLang);
    applyTranslations(currentLang);
  });
  applyTranslations(currentLang);
}

// ─── Typed animation ──────────────────────────────────────────────────────────
function resetTyped() {
  clearTimeout(typedTimeout);
  typedIndex = 0;
  charIndex = 0;
  isDeleting = false;
  const el = $('#typed-text');
  if (el) el.textContent = '';
  runTyped();
}

function runTyped() {
  const el = $('#typed-text');
  if (!el) return;
  const list = phrases[currentLang];
  const word = list[typedIndex % list.length];
  const speed = isDeleting ? 45 : 85;

  if (!isDeleting) {
    el.textContent = word.slice(0, ++charIndex);
    if (charIndex === word.length) {
      isDeleting = true;
      typedTimeout = setTimeout(runTyped, 1800);
      return;
    }
  } else {
    el.textContent = word.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      typedIndex++;
    }
  }
  typedTimeout = setTimeout(runTyped, speed);
}

// ─── Navbar scroll / active ───────────────────────────────────────────────────
function initNavbar() {
  const nav = $('#navbar');
  const links = $$('.nav-links a');
  const sections = $$('section[id]');

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);

    // Active link detection
    let current = '';
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 140) current = s.id;
    });
    links.forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ─── Hamburger menu ───────────────────────────────────────────────────────────
function initHamburger() {
  const btn = $('#hamburger');
  const menu = $('#nav-links');

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
  });

  // Close on nav link click
  $$('.nav-links a').forEach((a) => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', false);
    });
  });
}

// ─── Scroll reveal (IntersectionObserver) ────────────────────────────────────
function initReveal() {
  const els = $$('.reveal-up, .reveal-left, .reveal-right');

  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach((el) => obs.observe(el));
}

// ─── Skill bar animation ──────────────────────────────────────────────────────
function initSkillBars() {
  const fills = $$('.skill-fill[data-width]');

  if (!('IntersectionObserver' in window)) {
    fills.forEach((el) => { el.style.width = el.dataset.width + '%'; });
    return;
  }

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.width + '%';
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  fills.forEach((el) => obs.observe(el));
}

// ─── Contact form → direct FormSubmit AJAX ─────────────────────────────────────
function initContactForm() {
  const form = $('#contact-form');
  const responseBox = $('#form-response');
  const submitBtn = $('#contact-form-submit');
  const submitText = $('#submit-text');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name    = ($('#contact-name').value || '').trim();
    const email   = ($('#contact-email-input').value || '').trim();
    const message = ($('#contact-message').value || '').trim();

    if (!name || !email || !message) {
      form.querySelectorAll('[required]').forEach((f) => {
        if (!f.value.trim()) f.focus();
      });
      return;
    }

    const t = translations[currentLang];
    submitBtn.disabled = true;
    if (submitText) submitText.textContent = t['contact.form.sending'] || 'Enviando...';

    if (responseBox) {
      responseBox.className = 'form-response';
      responseBox.textContent = '';
    }

    try {
      const res = await fetch('https://formsubmit.co/ajax/tomasagustinlagomarsino@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `Nuevo mensaje desde Portfolio – ${name}`,
          _template: 'table'
        })
      });

      const data = await res.json();

      if (res.ok || data.success === 'true' || data.success === true) {
        form.reset();
        if (responseBox) {
          responseBox.className = 'form-response success';
          responseBox.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <span>${t['contact.form.success']}</span>
          `;
        }
        showToast(t['contact.form.success']);
      } else {
        throw new Error(data.message || 'Server response error');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      if (responseBox) {
        responseBox.className = 'form-response error';
        responseBox.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <span>${t['contact.form.error']}</span>
        `;
      }
    } finally {
      submitBtn.disabled = false;
      if (submitText) submitText.textContent = t['contact.form.submit'];
    }
  });
}

// ─── Scroll Progress Bar ──────────────────────────────────────────────────────
function initScrollProgress() {
  const bar = $('#scroll-progress');
  if (!bar) return;
  const updateProgress = () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    bar.style.width = scrolled + '%';
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

// ─── AI Simulator Widget ──────────────────────────────────────────────────────
const simSnippets = {
  swiftui: {
    filename: 'UserProfileViewModel.swift',
    code: `// Swift 5.9+ @Observable ViewModel — Generado con Agente IA (Claude / Cursor)
import SwiftUI

@Observable
final class UserProfileViewModel {
    private(set) var user: UserProfile?
    private(set) var isLoading = false
    private(set) var errorMessage: String?
    
    private let repository: UserRepositoryProtocol
    
    init(repository: UserRepositoryProtocol = UserRepository()) {
        self.repository = repository
    }
    
    @MainActor
    func fetchUserProfile(userId: String) async {
        isLoading = true
        errorMessage = nil
        do {
            user = try await repository.getUser(id: userId)
        } catch {
            errorMessage = "Error cargando perfil: \\(error.localizedDescription)"
        }
        isLoading = false
    }
}`
  },
  bridge: {
    filename: 'HapticService.ts',
    code: `// React Native Native Module Bridge (TypeScript + Swift)
// Creado con Agente IA para comunicación nativa tipo TurboModule
import { NativeModules, Platform } from 'react-native';

interface HapticFeedbackSpec {
  triggerNotification(type: 'success' | 'warning' | 'error'): void;
  impactAsync(style: 'light' | 'medium' | 'heavy'): Promise<boolean>;
}

const { HapticModule } = NativeModules;

export const HapticService: HapticFeedbackSpec = {
  triggerNotification: (type) => {
    if (Platform.OS === 'ios' && HapticModule) {
      HapticModule.triggerNotification(type);
    }
  },
  impactAsync: async (style) => {
    return Platform.OS === 'ios' && HapticModule
      ? await HapticModule.impact(style)
      : false;
  }
};`
  },
  toolcall: {
    filename: 'AgentToolCalling.js',
    code: `// Agente IA Autónomo con Tool Calling (OpenAI / Claude API)
import { OpenAI } from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const tools = [{
  type: 'function',
  function: {
    name: 'fetch_mobile_app_metrics',
    description: 'Obtiene métricas de crash rate y latencia de la app iOS/React Native',
    parameters: {
      type: 'object',
      properties: {
        platform: { type: 'string', enum: ['ios', 'android'] },
        timeframe: { type: 'string', enum: ['24h', '7d', '30d'] }
      },
      required: ['platform', 'timeframe']
    }
  }
}];

async function runAgentTask(userPrompt) {
  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: userPrompt }],
    tools: tools,
    tool_choice: 'auto'
  });
  return response.choices[0].message;
}`
  }
};

function initAiSimulator() {
  const tabs = $$('.sim-tab');
  const filenameEl = $('#sim-filename');
  const codeEl = $('#sim-code');
  const copyBtn = $('#btn-copy-sim');

  if (!codeEl) return;

  const loadTab = (key) => {
    const data = simSnippets[key] || simSnippets.swiftui;
    if (filenameEl) filenameEl.textContent = data.filename;
    codeEl.textContent = data.code;

    tabs.forEach((tab) => {
      const isCurrent = tab.dataset.sim === key;
      tab.classList.toggle('active', isCurrent);
      tab.setAttribute('aria-selected', isCurrent);
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      loadTab(tab.dataset.sim);
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = codeEl.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(currentLang === 'es' ? '¡Código copiado al portapapeles!' : 'Code copied to clipboard!');
      }).catch(() => {
        showToast('Error al copiar');
      });
    });
  }

  // Load default tab
  loadTab('swiftui');
}

// ─── Toast Notifications ──────────────────────────────────────────────────────
function showToast(message) {
  let toast = $('#global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// ─── Footer year ──────────────────────────────────────────────────────────────
function initFooter() {
  const el = $('#footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

// ─── Smooth scroll for anchor links ──────────────────────────────────────────
function initSmoothScroll() {
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.getElementById(a.getAttribute('href').slice(1));
      if (target) {
        e.preventDefault();
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initNavbar();
  initHamburger();
  initLangToggle();
  runTyped();
  initReveal();
  initAiSimulator();
  initSkillBars();
  initContactForm();
  initFooter();
  initSmoothScroll();
});
