/* =========================================================
   TOMÁS LAGOMARSINO PORTFOLIO — MAIN JAVASCRIPT
   ========================================================= */

'use strict';

// ─── i18n Translations ───────────────────────────────────────────────────────

const translations = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.education': 'Educación',
    'nav.skills': 'Habilidades',
    'nav.certs': 'Certificados',
    'nav.contact': 'Contacto',
    'nav.download': 'CV PDF',

    'hero.badge': 'Disponible para trabajar',
    'hero.greeting': 'Hola, soy',
    'hero.description': 'Desarrollador apasionado por la tecnología móvil con experiencia en iOS, React Native y educación tecnológica. Me adapto rápidamente a nuevos entornos y trabajo con compromiso, responsabilidad y buena comunicación.',
    'hero.cta.contact': 'Contactarme',
    'hero.cta.download': 'Descargar CV',
    'hero.stat.years': 'Años de experiencia',
    'hero.stat.roles': 'Roles profesionales',
    'hero.stat.certs': 'Certificaciones',

    'about.tag': 'Sobre mí',
    'about.heading': 'Quién soy',
    'about.role': 'iOS / React Native Developer',
    'about.personal.heading': 'Información Personal',
    'about.personal.dob': 'Nacimiento:',
    'about.personal.nationality': 'Nacionalidad:',
    'about.personal.civil': 'Estado Civil:',
    'about.personal.married': 'Casado',
    'about.personal.availability': 'Disponibilidad:',
    'about.personal.fulltime': 'Full-time · Inmediata',
    'about.intro': 'Soy una persona proactiva, responsable y resolutiva. Me adapto rápidamente a nuevos entornos de trabajo y me destaco por el compromiso, el trabajo en equipo y la buena comunicación. Tengo experiencia tanto en tareas técnicas como en atención y coordinación de personas.',
    'about.objective.heading': 'Objetivo Laboral',
    'about.objective.text': 'Insertarme laboralmente en el corto plazo, aportando compromiso, responsabilidad y capacidad de aprendizaje. Cuento con experiencia en tecnología, educación y soporte técnico, y me encuentro disponible para desempeñarme en distintos roles, con buena predisposición para aprender nuevas tareas.',
    'about.languages.heading': 'Idiomas',
    'about.languages.spanish': 'Español',
    'about.languages.native': 'Nativo',
    'about.languages.english': 'Inglés',
    'about.languages.intermediate': 'Nivel Medio',

    'exp.tag': 'Trayectoria',
    'exp.heading': 'Experiencia Profesional',
    'exp.remote': 'Remoto',
    'exp.present': 'Actualidad',
    'exp.job1.title': 'iOS / React Native Developer',
    'exp.job1.task1': 'Desarrollo de aplicaciones nativas con SwiftUI y React Native',
    'exp.job1.task2': 'Implementación de arquitectura MVVM y patrones de diseño modernos',
    'exp.job1.task3': 'Integración con APIs RESTful y herramientas como Firebase, Realm y StoreKit',
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
    'skills.tech.title': 'Técnicas / Desarrollo',
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
    'contact.form.submit': 'Enviar por Email',
    'contact.form.note': 'Al enviar, se abrirá tu cliente de correo predeterminado.',

    'footer.rights': 'Todos los derechos reservados.',
  },

  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.certs': 'Certificates',
    'nav.contact': 'Contact',
    'nav.download': 'CV PDF',

    'hero.badge': 'Available for work',
    'hero.greeting': "Hi, I'm",
    'hero.description': 'Developer passionate about mobile technology with experience in iOS, React Native, and tech education. I adapt quickly to new environments and work with commitment, responsibility, and good communication.',
    'hero.cta.contact': 'Contact me',
    'hero.cta.download': 'Download CV',
    'hero.stat.years': 'Years of experience',
    'hero.stat.roles': 'Professional roles',
    'hero.stat.certs': 'Certifications',

    'about.tag': 'About me',
    'about.heading': 'Who I am',
    'about.role': 'iOS / React Native Developer',
    'about.personal.heading': 'Personal Information',
    'about.personal.dob': 'Born:',
    'about.personal.nationality': 'Nationality:',
    'about.personal.civil': 'Civil Status:',
    'about.personal.married': 'Married',
    'about.personal.availability': 'Availability:',
    'about.personal.fulltime': 'Full-time · Immediate',
    'about.intro': 'I am a proactive, responsible, and resourceful person. I adapt quickly to new work environments and stand out for my commitment, teamwork, and communication skills. I have experience in both technical tasks and people coordination.',
    'about.objective.heading': 'Career Objective',
    'about.objective.text': 'I am looking to join a team in the short term, bringing commitment, responsibility, and a learning mindset. I have experience in technology, education, and technical support, and I am available to take on different roles with great willingness to learn new tasks.',
    'about.languages.heading': 'Languages',
    'about.languages.spanish': 'Spanish',
    'about.languages.native': 'Native',
    'about.languages.english': 'English',
    'about.languages.intermediate': 'Intermediate',

    'exp.tag': 'Career',
    'exp.heading': 'Professional Experience',
    'exp.remote': 'Remote',
    'exp.present': 'Present',
    'exp.job1.title': 'iOS / React Native Developer',
    'exp.job1.task1': 'Native app development with SwiftUI and React Native',
    'exp.job1.task2': 'Implementation of MVVM architecture and modern design patterns',
    'exp.job1.task3': 'Integration with RESTful APIs and tools like Firebase, Realm, and StoreKit',
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
    'skills.tech.title': 'Technical / Development',
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
    'contact.form.submit': 'Send via Email',
    'contact.form.note': 'Clicking send will open your default email client.',

    'footer.rights': 'All rights reserved.',
  },
};

// ─── Typed text phrases ───────────────────────────────────────────────────────
const phrases = {
  es: [
    'iOS Developer',
    'React Native Developer',
    'Docente de Sistemas',
    'Entusiasta de la Tecnología',
    'Técnico en Sistemas',
  ],
  en: [
    'iOS Developer',
    'React Native Developer',
    'Systems Teacher',
    'Tech Enthusiast',
    'Systems Technician',
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

// ─── Contact form → mailto ────────────────────────────────────────────────────
function initContactForm() {
  const form = $('#contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = ($('#contact-name').value || '').trim();
    const email   = ($('#contact-email-input').value || '').trim();
    const message = ($('#contact-message').value || '').trim();

    if (!name || !email || !message) {
      // Basic validation feedback
      form.querySelectorAll('[required]').forEach((f) => {
        if (!f.value.trim()) f.focus();
      });
      return;
    }

    const t = translations[currentLang];
    const subject = encodeURIComponent(
      currentLang === 'es'
        ? `Contacto desde Portfolio – ${name}`
        : `Portfolio Contact – ${name}`
    );
    const body = encodeURIComponent(
      currentLang === 'es'
        ? `Hola Tomás,\n\nMi nombre es ${name} (${email}).\n\n${message}\n\n--\nEnviado desde tu portfolio web.`
        : `Hi Tomás,\n\nMy name is ${name} (${email}).\n\n${message}\n\n--\nSent from your portfolio website.`
    );
    window.location.href = `mailto:tomasagustinlagomarsino@gmail.com?subject=${subject}&body=${body}`;
  });
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
  initNavbar();
  initHamburger();
  initLangToggle();
  runTyped();
  initReveal();
  initSkillBars();
  initContactForm();
  initFooter();
  initSmoothScroll();
});
