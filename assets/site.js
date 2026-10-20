window.BME_MPA=true;window.BME_ROUTES={"home":"/","courses-overview":"/courses/","course-1101":"/courses/bme-1101/","course-1103":"/courses/bme-1103/","course-1105":"/courses/bme-1105/","course-1107":"/courses/bme-1107/","course-1109":"/courses/bme-1109/","course-1201":"/courses/bme-1201/","course-1203":"/courses/bme-1203/","course-1205":"/courses/bme-1205/","course-1207":"/courses/bme-1207/","course-1209":"/courses/bme-1209/","course-2101":"/courses/bme-2101/","course-2103":"/courses/bme-2103/","course-2105":"/courses/bme-2105/","course-2107":"/courses/bme-2107/","course-2109":"/courses/bme-2109/","course-2201":"/courses/bme-2201/","course-2203":"/courses/bme-2203/","course-2205":"/courses/bme-2205/","course-2207":"/courses/bme-2207/","course-2209":"/courses/bme-2209/","course-3101":"/courses/bme-3101/","course-3103":"/courses/bme-3103/","course-3105":"/courses/bme-3105/","course-3107":"/courses/bme-3107/","course-3109":"/courses/bme-3109/","questions-overview":"/questions/","q-bme11":"/questions/bme11/","q-bme12":"/questions/bme12/","q-bme21":"/questions/bme21/","q-bme22":"/questions/bme22/","q-bme31":"/questions/bme31/","q-bme32":"/questions/bme32/","q-retake":"/retake/","teachers":"/teachers/","gallery":"/gallery/","syllabus":"/syllabus/","important-files":"/files/","course-3201":"/courses/bme-3201/","course-3203":"/courses/bme-3203/","course-3205":"/courses/bme-3205/","course-3207":"/courses/bme-3207/","course-3209":"/courses/bme-3209/"};
(function(){var h=location.hash.slice(1);if(h&&BME_ROUTES[h])location.replace(BME_ROUTES[h])})();
var ANNOUNCEMENT = ``;

// ══════════════════════════════════════════════
// COURSE DATA
// ══════════════════════════════════════════════
const COURSES = {
  '1103': { code:'BME-1103', sem:'1st Year, 1st Semester', title:'Electrical Fundamentals for Biomedical Engineering', teacher:'', chapters:[] },
  '1105': { code:'BME-1105', sem:'1st Year, 1st Semester', title:'Physical and Inorganic Chemistry', teacher:'', chapters:[] },
  '1107': { code:'BME-1107', sem:'1st Year, 1st Semester', title:'Applied Mathematics', teacher:'', chapters:[] },
  '1109': { code:'HUM-1109', sem:'1st Year, 1st Semester', title:'Communicative Skills', teacher:'', chapters:[] },
  '1201': { code:'BME-1201', sem:'1st Year, 2nd Semester', title:'Electronics', teacher:'', chapters:[] },
  '1203': { code:'BME-1203', sem:'1st Year, 2nd Semester', title:'Biochemistry', teacher:'', chapters:[] },
  '1205': { code:'BME-1205', sem:'1st Year, 2nd Semester', title:'Basic Computer and Information Technology', teacher:'', chapters:[] },
  '1207': { code:'BME-1207', sem:'1st Year, 2nd Semester', title:'Mathematics for Engineering', teacher:'', chapters:[] },
  '1209': { code:'BME-1209', sem:'1st Year, 2nd Semester', title:'Sociology and Economics', teacher:'', chapters:[] },
  '2101': { code:'BME-2101', sem:'2nd Year, 1st Semester', title:'Human Anatomy and Physiology', teacher:'', chapters:[] },
  '2103': { code:'BME-2103', sem:'2nd Year, 1st Semester', title:'Digital Electronics', teacher:'', chapters:[] },
  '2105': { code:'BME-2105', sem:'2nd Year, 1st Semester', title:'Programming Concepts and Python', teacher:'', chapters:[] },
  '2107': { code:'BME-2107', sem:'2nd Year, 1st Semester', title:'Waves and Oscillations, Optics and Thermal Physics', teacher:'', chapters:[] },
  '2109': { code:'BME-2109', sem:'2nd Year, 1st Semester', title:'Managerial and Financial Accounting', teacher:'', chapters:[] },
  '2201': { code:'BME-2201', sem:'2nd Year, 2nd Semester', title:'Structure and Properties of Biomaterials', teacher:'', chapters:[] },
  '2203': { code:'BME-2203', sem:'2nd Year, 2nd Semester', title:'Signal and Systems', teacher:'', chapters:[] },
  '2205': { code:'BME-2205', sem:'2nd Year, 2nd Semester', title:'Cell and Tissue Engineering', teacher:'', chapters:[] },
  '2207': { code:'BME-2207', sem:'2nd Year, 2nd Semester', title:'Biostatistics', teacher:'', chapters:[] },
  '2209': { code:'BME-2209', sem:'2nd Year, 2nd Semester', title:'Communication Engineering', teacher:'', chapters:[] },
  '3101': { code:'BME-3101', sem:'3rd Year, 1st Semester (Running)', title:'Biomedical Instrumentation and Diagnostics', teacher:'', chapters:[] },
  '3103': { code:'BME-3103', sem:'3rd Year, 1st Semester (Running)', title:'Bio-Signal Processing', teacher:'', chapters:[] },
  '3105': { code:'BME-3105', sem:'3rd Year, 1st Semester (Running)', title:'Networking and Information System in Medicine', teacher:'', chapters:[] },
  '3107': { code:'BME-3107', sem:'3rd Year, 1st Semester (Running)', title:'Transducer and Sensors for Medical Applications', teacher:'', chapters:[] },
  '3109': { code:'BME-3109', sem:'3rd Year, 1st Semester (Running)', title:'Physiological Control Systems', teacher:'', chapters:[] },
};

// ══════════════════════════════════════════════
// ROUTING
// ══════════════════════════════════════════════
function navigate(page) {
  if (window.BME_MPA && BME_ROUTES[page]) { location.href = BME_ROUTES[page]; return; }
  document.querySelectorAll('.nav-dropdown-menu').forEach(function(m){ m.classList.remove('open'); });
  window.location.hash = page;
}

function handleRoute() {
  if (window.BME_MPA) return;
  const hash = window.location.hash.slice(1) || 'home';

  // STEP 1: Hide all pages first
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn[data-page]').forEach(b => b.classList.remove('active'));

  // STEP 2: Show target page
  const target = document.getElementById('page-' + hash) || document.getElementById('page-home');
  if (target) target.classList.add('active');

  // STEP 3: Force scroll to top — multiple methods for cross-browser
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

  // STEP 4: Repeat after browser paint (mobile Safari needs this)
  requestAnimationFrame(function() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  });

  updateMeta(hash);
  if (typeof fixNavHeight === 'function') fixNavHeight();
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);

// ══════════════════════════════════════════════
// DOCUMENT VIEWER
// ══════════════════════════════════════════════
function openDoc(url, title) {
  document.getElementById('modalTitle').textContent = title || 'Document';
  document.getElementById('modalIframe').src = '';
  document.getElementById('modalLoading').style.display = 'flex';
  document.getElementById('modalIframe').style.display = 'none';
  
  // Convert drive link to preview
  let previewUrl = url;
  if (url.includes('drive.google.com/file/d/') && !url.includes('/preview')) {
    const fileId = url.match(/\/d\/([^/]+)/)?.[1];
    if (fileId) previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  }
  // For already preview links, use as-is
  
  document.getElementById('modalOpenLink').href = url.replace('/preview','').replace('/view','') + '/view?usp=drive_link';
  document.getElementById('modalIframe').src = previewUrl;
  document.getElementById('docModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function hideModalLoading() {
  document.getElementById('modalLoading').style.display = 'none';
  document.getElementById('modalIframe').style.display = 'block';
}

function closeModal() {
  document.getElementById('docModal').classList.remove('open');
  document.getElementById('modalIframe').src = '';
  document.body.style.overflow = '';
}

document.getElementById('docModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// ══════════════════════════════════════════════
// CHAPTER ACCORDION
// ══════════════════════════════════════════════
function toggleChapter(header) {
  const block = header.parentElement;
  block.classList.toggle('open');
}

// ══════════════════════════════════════════════
// MOBILE MENU
// ══════════════════════════════════════════════
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// ══════════════════════════════════════════════
// PARTICLES
// ══════════════════════════════════════════════
(function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      animation-duration: ${8 + Math.random() * 12}s;
      animation-delay: ${Math.random() * 10}s;
      width: ${1 + Math.random() * 3}px;
      height: ${1 + Math.random() * 3}px;
      background: ${Math.random() > 0.5 ? 'var(--accent)' : 'var(--accent2)'};
    `;
    container.appendChild(p);
  }
})();



// ── PER-PAGE META / LINK PREVIEW ──
const PAGE_META = {
  "home": {
    "title": "Home | BME 6th Batch, IU",
    "desc": "Official academic portal of the 6th Batch (2022-23), Dept. of Biomedical Engineering, Islamic University, Kushtia."
  },
  "courses-overview": {
    "title": "Courses | BME 6th Batch, IU",
    "desc": "Chapter-wise lecture materials for all 25 courses across 5 semesters of BME, Islamic University."
  },
  "course-1101": {
    "title": "Introduction to Biomedical Engineering | BME-1101",
    "desc": "Lecture materials for Introduction to Biomedical Engineering (BME-1101), 1st Year 1st Semester."
  },
  "course-1103": {
    "title": "Electrical Fundamentals for Biomedical Engineering | EEE-1103",
    "desc": "Lecture materials for Electrical Fundamentals for Biomedical Engineering (EEE-1103)."
  },
  "course-1105": {
    "title": "Physical and Inorganic Chemistry | CHE-1105",
    "desc": "Lecture materials for Physical and Inorganic Chemistry (CHE-1105), 1st Year 1st Semester."
  },
  "course-1107": {
    "title": "Applied Mathematics | MATH-1107",
    "desc": "Lecture materials for Applied Mathematics (MATH-1107), 1st Year 1st Semester."
  },
  "course-1109": {
    "title": "Communicative Skills | HUM-1109",
    "desc": "Lecture materials for Communicative Skills (HUM-1109), 1st Year 1st Semester."
  },
  "course-1201": {
    "title": "Electronics | EEE-1201",
    "desc": "7-chapter lecture materials for Electronics (EEE-1201), 1st Year 2nd Semester."
  },
  "course-1203": {
    "title": "Biochemistry | CHE-1203",
    "desc": "5-chapter lecture materials for Biochemistry (CHE-1203), 1st Year 2nd Semester."
  },
  "course-1205": {
    "title": "Basic Computer and Information Technology | ICT-1205",
    "desc": "Lecture materials for Basic Computer and IT (ICT-1205), 1st Year 2nd Semester."
  },
  "course-1207": {
    "title": "Mathematics for Engineering | MATH-1207",
    "desc": "Lecture materials for Mathematics for Engineering (MATH-1207), 1st Year 2nd Semester."
  },
  "course-1209": {
    "title": "Sociology and Economics | HUM-1209",
    "desc": "Lecture materials for Sociology and Economics (HUM-1209), 1st Year 2nd Semester."
  },
  "course-2101": {
    "title": "Human Anatomy and Physiology | BIO-2101",
    "desc": "7-chapter lecture materials for Human Anatomy and Physiology (BIO-2101), 2nd Year 1st Semester."
  },
  "course-2103": {
    "title": "Digital Electronics | CSE-2103",
    "desc": "Lecture materials for Digital Electronics (CSE-2103), 2nd Year 1st Semester."
  },
  "course-2105": {
    "title": "Programming Concepts and Python | CSE-2105",
    "desc": "Lecture materials for Programming Concepts and Python (CSE-2105), 2nd Year 1st Semester."
  },
  "course-2107": {
    "title": "Waves and Oscillations, Optics and Thermal Physics | PHY-2107",
    "desc": "Lecture materials for Waves, Optics and Thermal Physics (PHY-2107), 2nd Year 1st Semester."
  },
  "course-2109": {
    "title": "Managerial and Financial Accounting | HUM-2109",
    "desc": "Lecture materials for Managerial and Financial Accounting (HUM-2109), 2nd Year 1st Semester."
  },
  "course-2201": {
    "title": "Structure and Properties of Biomaterials | BME-2201",
    "desc": "9-chapter lecture materials for Structure and Properties of Biomaterials (BME-2201), 2nd Year 2nd Semester."
  },
  "course-2203": {
    "title": "Signal and Systems | CSE-2203",
    "desc": "5-chapter lecture materials for Signal and Systems (CSE-2203), 2nd Year 2nd Semester."
  },
  "course-2205": {
    "title": "Cell and Tissue Engineering | BIO-2205",
    "desc": "7-chapter lecture materials for Cell and Tissue Engineering (BIO-2205), 2nd Year 2nd Semester."
  },
  "course-2207": {
    "title": "Biostatistics | STAT-2207",
    "desc": "9-chapter lecture materials for Biostatistics (STAT-2207), 2nd Year 2nd Semester."
  },
  "course-2209": {
    "title": "Communication Engineering | ICT-2209",
    "desc": "6-chapter lecture materials for Communication Engineering (ICT-2209), 2nd Year 2nd Semester."
  },
  "course-3101": {
    "title": "Biomedical Instrumentation and Diagnostics | BME-3101",
    "desc": "Lecture materials for Biomedical Instrumentation and Diagnostics (BME-3101), 3rd Year 1st Semester."
  },
  "course-3103": {
    "title": "Bio-Signal Processing | BME-3103",
    "desc": "Lecture materials for Bio-Signal Processing (BME-3103), 3rd Year 1st Semester."
  },
  "course-3105": {
    "title": "Networking and Information System in Medicine | ICT-3105",
    "desc": "Lecture materials for Networking and Information System in Medicine (ICT-3105), 3rd Year 1st Semester."
  },
  "course-3107": {
    "title": "Transducer and Sensors for Medical Applications | BME-3107",
    "desc": "Lecture materials for Transducer and Sensors for Medical Applications (BME-3107), 3rd Year 1st Semester."
  },
  "course-3109": {
    "title": "Physiological Control Systems | BME-3109",
    "desc": "Lecture materials for Physiological Control Systems (BME-3109), 3rd Year 1st Semester."
  },
  "q-bme11": {
    "title": "BME 1.1 Questions | BME 6th Batch, IU",
    "desc": "Tutorial and semester final exam questions for 1st Year 1st Semester, BME, Islamic University."
  },
  "q-bme12": {
    "title": "BME 1.2 Questions | BME 6th Batch, IU",
    "desc": "Tutorial and semester final exam questions for 1st Year 2nd Semester, BME, Islamic University."
  },
  "q-bme21": {
    "title": "BME 2.1 Questions | BME 6th Batch, IU",
    "desc": "Tutorial and semester final exam questions for 2nd Year 1st Semester, BME, Islamic University."
  },
  "q-bme22": {
    "title": "BME 2.2 Questions | BME 6th Batch, IU",
    "desc": "Tutorial and semester final exam questions for 2nd Year 2nd Semester, BME, Islamic University."
  },
  "q-bme31": {
    "title": "BME 3.1 Questions | BME 6th Batch, IU",
    "desc": "Tutorial and semester final exam questions for 3rd Year 1st Semester (Running), BME, Islamic University."
  },
  "q-retake": {
    "title": "Retake Exams Questions | BME 6th Batch, IU",
    "desc": "Retake and improvement examination question papers, BME, Islamic University."
  },
  "teachers": {
    "title": "Teacher's Index | BME 6th Batch, IU",
    "desc": "Faculty profiles of the Department of Biomedical Engineering, Islamic University, Kushtia."
  },
  "syllabus": {
    "title": "Course Syllabus | BME 6th Batch, IU",
    "desc": "Semester-wise course syllabus for all 8 semesters of BME, Islamic University."
  },
  "gallery": {
    "title": "Photo Gallery | BME 6th Batch, IU",
    "desc": "Photos and memories of the 6th Batch, Department of Biomedical Engineering, Islamic University."
  },
  "important-files": {
    "title": "Important Files | BME 6th Batch, IU",
    "desc": "Books, materials, questions and syllabus Drive folders for BME 6th Batch, Islamic University."
  },
  "course-3201": {
    "title": "Medical Imaging | BME 6th Batch, IU",
    "desc": "Lecture materials for Medical Imaging (BME-3201), 3rd Year — 2nd Semester, BME, Islamic University."
  },
  "course-3203": {
    "title": "Embedded System | BME 6th Batch, IU",
    "desc": "Lecture materials for Embedded System (BME-3203), 3rd Year — 2nd Semester, BME, Islamic University."
  },
  "course-3205": {
    "title": "Rehabilitation Engineering | BME 6th Batch, IU",
    "desc": "Lecture materials for Rehabilitation Engineering (BME-3205), 3rd Year — 2nd Semester, BME, Islamic University."
  },
  "course-3207": {
    "title": "Brain and Cognitive Systems | BME 6th Batch, IU",
    "desc": "Lecture materials for Brain and Cognitive Systems (BIO-3207), 3rd Year — 2nd Semester, BME, Islamic University."
  },
  "course-3209": {
    "title": "Telemedicine Systems | BME 6th Batch, IU",
    "desc": "Lecture materials for Telemedicine Systems (BME-3209), 3rd Year — 2nd Semester, BME, Islamic University."
  },
  "q-bme32": {
    "title": "BME 3.2 Questions | BME 6th Batch, IU",
    "desc": "Tutorial and semester final exam questions for 3rd Year , 2nd Semester, BME, Islamic University."
  }
};
function updateMeta(page) {
  const m = PAGE_META[page] || PAGE_META['home'];
  const baseUrl = window.location.origin + window.location.pathname;
  const url = baseUrl + '#' + page;
  document.title = m.title;
  const setMeta = (id, val) => { const el = document.getElementById(id); if(el) el.setAttribute('content', val); };
  setMeta('og-title', m.title);
  setMeta('og-desc', m.desc);
  setMeta('og-url', url);
  setMeta('tw-title', m.title);
  setMeta('tw-desc', m.desc);
  // Update canonical URL for better sharing
  let canon = document.getElementById('canonical-link');
  if(!canon){ canon = document.createElement('link'); canon.rel='canonical'; canon.id='canonical-link'; document.head.appendChild(canon); }
  canon.href = url;
}


// ── NAV SEMESTER ACCORDION (desktop) ──
function toggleNavSem(btn) {
  const group = btn.parentElement;
  group.classList.toggle('open');
}

// ── NAV DROPDOWN TOGGLE (click-based) ──
function toggleNavDrop(btn) {
  var menu = btn.nextElementSibling;
  var isOpen = menu.classList.contains('open');
  document.querySelectorAll('.nav-dropdown-menu').forEach(function(m){ m.classList.remove('open'); });
  if (!isOpen) menu.classList.add('open');
}
document.addEventListener('click', function(e) {
  if (!e.target.closest('.nav-dropdown')) {
    document.querySelectorAll('.nav-dropdown-menu').forEach(function(m){ m.classList.remove('open'); });
  }
});

// ── MOBILE SEMESTER ACCORDION ──
function toggleMobSem(btn) {
  const group = btn.parentElement;
  group.classList.toggle('open');
}

// ── MOBILE QUESTIONS ACCORDION ──
function toggleMobQ(btn) {
  const group = btn.parentElement;
  group.classList.toggle('open');
}

// ── SEMESTER ACCORDION ──
function toggleSem(header) {
  const block = header.parentElement;
  block.classList.toggle('open');
}


// ── GALLERY ──
function openGallery(src, cap) {
  document.getElementById('galleryLightboxImg').src = src;
  document.getElementById('galleryLightboxCap').textContent = cap || '';
  document.getElementById('galleryLightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function toggleGalleryGrid(btn){
  var grid=document.querySelector('.gallery-grid-inner');
  if(!grid)return;
  var open=grid.style.display!=='none';
  grid.style.display=open?'none':'grid';
  var count=document.querySelectorAll('.gallery-grid-inner .gallery-item').length;
  btn.textContent=open?'📷 Show All Photos ('+count+')':'🔼 Hide Photos';
}
function closeGallery() {
  document.getElementById('galleryLightbox').classList.remove('open');
  document.getElementById('galleryLightboxImg').src = '';
  document.body.style.overflow = '';
}

// ── THEME SWITCHER ──
function toggleTheme() {
  const root = document.documentElement;
  const isLight = root.getAttribute('data-theme') === 'light';
  root.setAttribute('data-theme', isLight ? 'dark' : 'light');
  document.getElementById('themeSwitchBtn').textContent = isLight ? '🌙' : '☀️';
  try { localStorage.setItem('bme6_theme', isLight ? 'dark' : 'light'); } catch(e){}
}
// Load saved theme (light is the default)
(function(){
  try {
    const saved = localStorage.getItem('bme6_theme');
    const btn = document.getElementById('themeSwitchBtn');
    if(saved === 'dark'){
      document.documentElement.setAttribute('data-theme','dark');
      if(btn) btn.textContent = '🌙';
    } else {
      document.documentElement.setAttribute('data-theme','light');
      if(btn) btn.textContent = '☀️';
    }
  } catch(e){}
})();


// ╔══════════════════════════════════════════════════════════════════╗
// ║           ★  MASTER DATA — EDIT HERE ONLY  ★                   ║
// ║  Add semester → SEMESTERS array                                  ║
// ║  Add course   → courses[] of that semester                       ║
// ║  Change current semester → CURRENT_SEM_ID                       ║
// ╚══════════════════════════════════════════════════════════════════╝

const CURRENT_SEM_ID = 'bme32'; // ← change this only

const SEMESTERS = [
  {
    "id": "bme11",
    "short": "BME 1.1",
    "icon": "📚",
    "label": "BME 1st Year — 1st Semester",
    "qId": "q-bme11",
    "courses": [
      {
        "num": "1101",
        "prefix": "BME",
        "title": "Introduction to Biomedical Engineering",
        "teacher": "Ariful Islam",
        "chapters": 6,
        "desc": "This is the first course of the First Year, First Semester of BME-6, IU.",
        "teacherPhoto": "images/ariful-islam.jpg",
        "teacherRole": "Assistant Professor, Dept. of Biomedical Engineering, Islamic University, Kushtia",
        "teacherAbout": "https://drive.google.com/file/d/1pj7f_svJOujbx8u4kLKw3EGP_59bo1IU/view?usp=drive_link",
        "teacherType": "dept",
        "chapterData": [
          {
            "name": "Introduction",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Introduction Basics",
                "url": "https://drive.google.com/file/d/11D7D3M2H6uf_WqQg23SewI3dkgemz6Gz/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Introduction (continued)",
                "url": "https://drive.google.com/file/d/1Sgne4CgdoEkY3mmxQHpmSsygcz6tJlrD/preview"
              }
            ]
          },
          {
            "name": "Human Biology",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Human Biology Basics",
                "url": "https://drive.google.com/file/d/1iBeKXuxtIvks_edK9ObN-TAS4mgUsWiG/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Human Biology II",
                "url": "https://drive.google.com/file/d/11NWimPKzl8kJtQ6o0xlZUD1xB6Ruumm4/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Human Biology III",
                "url": "https://drive.google.com/file/d/1sbn1tF3QDLiyxpY8NyX5MehWOHlnF7Cv/preview"
              }
            ]
          },
          {
            "name": "Electrophysiology",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Electrophysiology I",
                "url": "https://drive.google.com/file/d/1WtxPZzF3AZDWgS7CGmypuKploEG9gr29/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Electrophysiology II",
                "url": "https://drive.google.com/file/d/14vNiAKsEADegsiuOZGGk97BGOEPuGFGZ/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Electrophysiology III",
                "url": "https://drive.google.com/file/d/1GxnUNaP4l7dqqVSJ-8jGDU8-zZbTh3SJ/preview"
              }
            ]
          },
          {
            "name": "Biomaterials",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Biomaterials I",
                "url": "https://drive.google.com/file/d/16dYiNKrOMs06HZKKUM1XCv7XTvBZ_f78/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Biomaterials II",
                "url": "https://drive.google.com/file/d/1BCvZ-xrNFQ5MnwEW8rZz4yX69nU1ETmQ/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Biomaterials III",
                "url": "https://drive.google.com/file/d/1pQ-k4XMmcehx3m0FGqDvnI1EwyHo3Vnt/preview"
              }
            ]
          },
          {
            "name": "Biomechanics",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Biomechanics I",
                "url": "https://drive.google.com/file/d/1tH7-WfkJFUgTRsxW40g30Uu6CIYNBauw/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Biomechanics II",
                "url": "https://drive.google.com/file/d/1nK3JwvgEV84Gc-sBpOCZbrvkw7Ko65-_/preview"
              }
            ]
          },
          {
            "name": "Biosignal Processing",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Biosignal Processing I",
                "url": "https://drive.google.com/file/d/1B2LLzQe-pXUNwH0yqJtxlfk07dKElD77/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Biosignal Processing II",
                "url": "https://drive.google.com/file/d/1CnfwKZc8Nqs9GbSoQbcoGA-po4hidKnm/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Biosignal Processing III",
                "url": "https://drive.google.com/file/d/1OnERCVyeItaWH8I0ksvIjFPQz7Lh87xn/preview"
              },
              {
                "num": "Lecture 4",
                "label": "Biosignal Processing IV",
                "url": "https://drive.google.com/file/d/1jWW7A_depStPk_9HjYHchXWCxwg8K2e3/preview"
              },
              {
                "num": "Lecture 5",
                "label": "Biosignal Processing V",
                "url": "https://drive.google.com/file/d/1nkFXOHuc043oxyMm-i2B6Jx0Rn6e7TGq/preview"
              },
              {
                "num": "Lecture 6",
                "label": "Biosignal Processing VI",
                "url": "https://drive.google.com/file/d/1RkaYE48Mvl93-nzbpplr79sm33aJRFr6/preview"
              }
            ]
          }
        ],
        "books": [
          {
            "url": "https://drive.google.com/file/d/19vfuS34VU1vwBgaBT7NHE6gqmY41yqdB/preview",
            "title": "Introduction to BME",
            "label": "📘 Course Book – Introduction to BME"
          }
        ],
        "guestRole": "",
        "guestDept": ""
      },
      {
        "num": "1103",
        "prefix": "EEE",
        "title": "Electrical Fundamentals for Biomedical Engineering",
        "teacher": "Dr. Md. Khairul Islam",
        "chapters": 0,
        "desc": "This is the third course of the First Year, First Semester of BME-6, IU",
        "teacherAbout": "https://drive.google.com/file/d/1s38CFoY_GtBaIwHmxHxAIS5YqhQujxXD/view?usp=drive_link",
        "teacherType": "dept",
        "chapterData": [
          {
            "name": "Electrical Fundamentals for Biomedical Engineering",
            "lectures": [
              {
                "num": "📘",
                "label": "Read from the provided course book",
                "url": "https://drive.google.com/file/d/1YHlxvUNOxjm5LdEtdSQx2Mr8OEX1ibXD/preview"
              }
            ]
          }
        ],
        "teacherPhoto": "images/dr-khairul-islam.jpg",
        "teacherRole": "Chairman, Associate Professor, Dept. of Biomedical Engineering, Islamic University, Kushtia",
        "books": [
          {
            "url": "https://drive.google.com/file/d/1YHlxvUNOxjm5LdEtdSQx2Mr8OEX1ibXD/preview",
            "title": "A Textbook of Electrical Technology in SI Units. Volume I",
            "label": "📘 Course Book – A Textbook of Electrical Technology in SI Units. Volume I"
          }
        ],
        "guestRole": "",
        "guestDept": ""
      },
      {
        "num": "1105",
        "prefix": "CHE",
        "title": "Physical and Inorganic Chemistry",
        "teacher": "Dr. Md. Azizul Islam",
        "chapters": 0,
        "desc": "This is the fifth course of the First Year, First Semester of BME-6, IU",
        "teacherPhoto": "",
        "teacherAbout": "https://drive.google.com/file/d/1pmqlbpbLScT06I_lsjC2lOYsIQV1gt9c/view?usp=drive_link",
        "teacherType": "guest",
        "chapterData": [
          {
            "name": "Physical and Inorganic Chemistry",
            "lectures": [
              {
                "num": "📘",
                "label": "Read from the provided course book",
                "url": "https://drive.google.com/file/d/13QuaLKBbrt9wS9MaH9PYyJ4KjNfHvDOK/preview"
              }
            ]
          }
        ],
        "books": [
          {
            "url": "https://drive.google.com/file/d/13QuaLKBbrt9wS9MaH9PYyJ4KjNfHvDOK/preview",
            "title": "Essentials of Physical Chemistry-Arun Bahl, B.S. Bahl, G.D. Tuli-S. Chand",
            "label": "📘 Course Book – Essentials of Physical Chemistry"
          }
        ],
        "guestRole": "Professor",
        "guestDept": "Dept. of Biotechnology and Genetic Engineering, Islamic University, Kushtia",
        "teacherRole": "Professor, Dept. of Biotechnology and Genetic Engineering, Islamic University, Kushtia"
      },
      {
        "num": "1107",
        "prefix": "MATH",
        "title": "Applied Mathematics",
        "teacher": "Ariful Islam",
        "chapters": 0,
        "desc": "This is the fourth course of the First Year, First Semester of BME-6, IU",
        "teacherPhoto": "images/ariful-islam.jpg",
        "teacherAbout": "https://drive.google.com/file/d/1pj7f_svJOujbx8u4kLKw3EGP_59bo1IU/view?usp=drive_link",
        "teacherType": "dept",
        "chapterData": [
          {
            "name": "Applied Mathematics",
            "lectures": [
              {
                "num": "📘",
                "label": "Read from the provided books",
                "url": "https://drive.google.com/file/d/11Aad5uNIm3U4JSlgCCx7hs-1MzyBTk1l/preview"
              },
              {
                "num": "📘",
                "label": "Numerical Analysis",
                "url": "https://drive.google.com/file/d/1CiQJsR5RafArvQQrV6aTy5n6ySF7sCLl/preview"
              },
              {
                "num": "📘",
                "label": "Differential Calculus",
                "url": "https://drive.google.com/file/d/1km3H1jbOevfaB-84CIKuLlBrX76KJjCB/preview"
              }
            ]
          }
        ],
        "teacherRole": "Assistant Professor, Dept. of Biomedical Engineering, Islamic University, Kushtia",
        "books": [
          {
            "url": "https://drive.google.com/file/d/11Aad5uNIm3U4JSlgCCx7hs-1MzyBTk1l/preview",
            "title": "Advanced Engineering Mathematics",
            "label": "📘 Course Book – Advanced Engineering Mathematics"
          },
          {
            "url": "https://drive.google.com/file/d/1CiQJsR5RafArvQQrV6aTy5n6ySF7sCLl/preview",
            "title": "Numerical Analysis",
            "label": "📘 Course Book – Numerical Analysis"
          },
          {
            "url": "https://drive.google.com/file/d/1km3H1jbOevfaB-84CIKuLlBrX76KJjCB/preview",
            "title": "Differential Calculus",
            "label": "📘 Course Book – Differential Calculus"
          }
        ],
        "guestRole": "",
        "guestDept": ""
      },
      {
        "num": "1109",
        "prefix": "HUM",
        "title": "Communicative Skills",
        "teacher": "Md Rabiul Islam",
        "chapters": 0,
        "desc": "This is the second course of the First Year, First Semester of BME-6, IU",
        "teacherPhoto": "images/md-rabiul-islam.jpg",
        "teacherAbout": "https://drive.google.com/file/d/1pj7f_svJOujbx8u4kLKw3EGP_59bo1IU/view?usp=drive_link",
        "teacherType": "dept",
        "chapterData": [
          {
            "name": "Class Lectures",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Listening 1",
                "url": "https://drive.google.com/file/d/15XCxMxtSLLLvDeY1v3FviJGd-h2sWZvw/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Listening 2",
                "url": "https://drive.google.com/file/d/1ItSWbFfdyhcxc7Qiytcw-litDD76uv8S/preview"
              }
            ]
          }
        ],
        "teacherRole": "Assistant Professor, Dept. of Biomedical Engineering, Islamic University, Kushtia",
        "books": [],
        "guestRole": "",
        "guestDept": ""
      }
    ]
  },
  {
    "id": "bme12",
    "short": "BME 1.2",
    "icon": "📚",
    "label": "BME 1st Year — 2nd Semester",
    "qId": "q-bme12",
    "courses": [
      {
        "num": "1201",
        "prefix": "EEE",
        "title": "Electronics",
        "teacher": "Ariful Islam",
        "chapters": 7,
        "desc": "This is the first course of the First Year, Second Semester of BME-6, IU",
        "teacherPhoto": "images/ariful-islam.jpg",
        "teacherAbout": "https://drive.google.com/file/d/1pj7f_svJOujbx8u4kLKw3EGP_59bo1IU/view?usp=drive_link",
        "driveFolder": "https://drive.google.com/drive/folders/1iDRd9InVHtIZ_TD0htET87xABXmpnLfH?usp=drive_link",
        "teacherType": "dept",
        "chapterData": [
          {
            "name": "Semiconductor Diodes",
            "lectures": [
              {
                "num": "Lecture 1 (Part 1)",
                "label": "Semiconductor Diodes (Part 1)",
                "url": "https://drive.google.com/file/d/15bZJTH8Xl25n6-0MeTvQs75V-hy10u7e/preview"
              },
              {
                "num": "Lecture 1 (Part 2)",
                "label": "Semiconductor Highlighted",
                "url": "https://drive.google.com/file/d/1vTNueOT6YVXIt404JgWNkonuttHS7rj5/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Semiconductor Diodes",
                "url": "https://drive.google.com/file/d/1eHERdktKFHF6rupo52NpxZh33kSaDDLx/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Semiconductor Diodes",
                "url": "https://drive.google.com/file/d/1m-PiV0o1XXUzC8iDRS7CZTVklvZJR2-4/preview"
              },
              {
                "num": "Lecture 4",
                "label": "Semiconductor Diodes",
                "url": "https://drive.google.com/file/d/1kgXIkR8aTbLyKYPKylYDnQN3sSSzTTa3/preview"
              },
              {
                "num": "Lecture 5",
                "label": "Semiconductor Diodes",
                "url": "https://drive.google.com/file/d/1rnixkJiedvSg6G9CJNlmaTkdT6qM-oKx/preview"
              }
            ]
          },
          {
            "name": "Special Diodes and Optoelectronic Devices",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Special Diodes and Optoelectronic Devices",
                "url": "https://drive.google.com/file/d/1IFM6mYTN5YaZGNFB5dbTCf7Fx6JUxxOm/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Special Diodes",
                "url": "https://drive.google.com/file/d/1Zr9G_QPVQb8ztzAxR0cIEjTH8zKe4aQP/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Special Diodes",
                "url": "https://drive.google.com/file/d/16uzgjhKT1tq2v5FcfqahwgjrPexq2X06/preview"
              }
            ]
          },
          {
            "name": "DC Power Supply",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "DC Power Supply",
                "url": "https://drive.google.com/file/d/1DHAD7sDia2VGkUBLbPUphjpKX7vb6_w6/preview"
              },
              {
                "num": "Lecture 2",
                "label": "DC Power Supply",
                "url": "https://drive.google.com/file/d/17P3S5x69b4CFqOE70isKXJBum21NgjM5/preview"
              }
            ]
          },
          {
            "name": "Bipolar Junction Transistor",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Bipolar Junction Transistor",
                "url": "https://drive.google.com/file/d/15i29FrSLEeYW-JqZN3KmiwoZkMA6A-2O/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Bipolar Junction Transistor",
                "url": "https://drive.google.com/file/d/1LLbtqfgxpZ9T2FlgON9croNF26Rq7WhV/preview"
              }
            ]
          },
          {
            "name": "Transistor Amplifiers",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Transistor Amplifiers",
                "url": "https://drive.google.com/file/d/1QxsdLh7rF7EgncKNjvmLxLQzdniO6s50/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Transistor Amplifiers",
                "url": "https://drive.google.com/file/d/1Hzhm9VvQTJ33wayl8Tb-WJSEkwATZ4OE/preview"
              }
            ]
          },
          {
            "name": "Oscillators",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Oscillators",
                "url": "https://drive.google.com/file/d/1eVvLIbzftrkoYIzTYRN3p7AvqjNNfqd4/preview"
              }
            ]
          },
          {
            "name": "Operational Amplifiers",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Operational Amplifiers",
                "url": "https://drive.google.com/file/d/1dg_hIyzvXSHBY2pDNe2GR9EUEsEKh0JW/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Operational Amplifiers",
                "url": "https://drive.google.com/file/d/1XyFia7prR0iI0fEjZU2_oyLS2cjdwQJM/preview"
              },
              {
                "num": "Extra PDF 1",
                "label": "Extra Reference",
                "url": "https://drive.google.com/file/d/1GvEcJw515pLRm0ekl-yiIxp6ww_SKyuI/preview"
              },
              {
                "num": "Extra PDF 2",
                "label": "Extra Reference",
                "url": "https://drive.google.com/file/d/1e6aqorbl526EfypXr08Ergm2Rcd9qeFs/preview"
              }
            ]
          }
        ],
        "teacherRole": "Assistant Professor, Dept. of Biomedical Engineering, Islamic University, Kushtia",
        "books": [
          {
            "url": "https://drive.google.com/file/d/1FrrGm5Vck6tt5W6Z7cAKahLJZ_QJzMvN/preview",
            "title": "Principles of Electronics",
            "label": "📘 Course Book – Principles of Electronics"
          },
          {
            "url": "https://drive.google.com/file/d/1tq5r0Bxndhs4GiM0NMIZ9aQLeTu3Nh61/preview",
            "title": "A Textbook of Electrical Technology Vol IV",
            "label": "📘 Course Book – A Textbook of Electrical Technology Vol IV"
          },
          {
            "url": "https://drive.google.com/file/d/16CHypeW8E5KcOIMy2kLTQEU4w-6vqTVo/preview",
            "title": "Fundamentals of Electric Circuits",
            "label": "📘 Course Book – Fundamentals of Electric Circuits"
          }
        ],
        "guestRole": "",
        "guestDept": ""
      },
      {
        "num": "1203",
        "prefix": "CHE",
        "title": "Biochemistry",
        "teacher": "S M Jahurul Haque",
        "chapters": 5,
        "desc": "This is the second course of the First Year, Second Semester of BME-6, IU",
        "teacherPhoto": "images/sm-jahurul-haque.png",
        "teacherAbout": "https://drive.google.com/file/d/1aews5vvVDX0FzFREK7g7czjJo-S7LZzk/view?usp=drive_link",
        "driveFolder": "https://drive.google.com/drive/folders/1nyCW4Qtu10tqTdZVp315qBpbE76IVzwQ?usp=drive_link",
        "teacherType": "dept",
        "chapterData": [
          {
            "name": "Introduction",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Introduction",
                "url": "https://drive.google.com/file/d/1nN9cJEk32OKmSUQuCNVUmaYXP0k5YYeo/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Introduction",
                "url": "https://drive.google.com/file/d/1P7-dsAq04rCE1-zRfpAWQjxN0nAih8bp/preview"
              }
            ]
          },
          {
            "name": "Carbohydrate",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Carbohydrate",
                "url": "https://drive.google.com/file/d/1JXVzWc-hpEiATa_qamjj9Ww11d3IR-Lu/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Carbohydrate",
                "url": "https://drive.google.com/file/d/1P7j_1npxHpMjwxCSMnRZxtdG9LpEhQs2/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Carbohydrate",
                "url": "https://drive.google.com/file/d/1cw50sbQK2u2wFSGyVoEhrsOj0zWXLN5f/preview"
              }
            ]
          },
          {
            "name": "Protein",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Protein",
                "url": "https://drive.google.com/file/d/1JVFKlY_b6dK9to0JhTk02SZe0Sl5eanP/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Protein",
                "url": "https://drive.google.com/file/d/1cSB9tSdh6HP7UvPtkAGOi1v13fApYT_e/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Protein",
                "url": "https://drive.google.com/file/d/1ZdIXnrZ5vfFyyoOqEtSE3SRssHSFBRK4/preview"
              }
            ]
          },
          {
            "name": "Lipid",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Lipid",
                "url": "https://drive.google.com/file/d/1lwYC57unGzA8_8djIKHpUuy6lrWxIOf0/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Lipid",
                "url": "https://drive.google.com/file/d/1Gt9H-qpQg8raCZcJriLpTBkBqvx_00Vw/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Lipid",
                "url": "https://drive.google.com/file/d/1aaVJk_VDk5FuXf5g54uW5iAhgNr1tmYC/preview"
              },
              {
                "num": "Lecture 4",
                "label": "Lipid",
                "url": "https://drive.google.com/file/d/1xjSd_lXJhJ-2eMOG3BPPa_iQqUHGNJyY/preview"
              }
            ]
          },
          {
            "name": "Nucleic Acid",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Nucleic Acid",
                "url": "https://drive.google.com/file/d/1-MA4JEG-SHB5OOVZW8VHmhV1E9KAx4J3/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Nucleic Acid",
                "url": "https://drive.google.com/file/d/1x6iSKTOAOKpZkISJQAj33Ny_xJ5zJugX/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Nucleic Acid",
                "url": "https://drive.google.com/file/d/1-W3ufgo4kWrLn3AqkkKxO40TvdcMltHL/preview"
              },
              {
                "num": "Lecture 4",
                "label": "Nucleic Acid",
                "url": "https://drive.google.com/file/d/1SeW26aTFVDdVEQg2V_6BWm-Jygc0n2YD/preview"
              }
            ]
          }
        ],
        "teacherRole": "Assistant Professor, Dept. of Biomedical Engineering, Islamic University, Kushtia",
        "books": [
          {
            "url": "https://drive.google.com/file/d/1LkgG1DOCw3ubTZ3_6rGmYz-IK-IDw69J/preview",
            "title": "Principles of Biochemistry",
            "label": "📘 Course Book – Principles of Biochemistry"
          }
        ],
        "guestRole": "",
        "guestDept": ""
      },
      {
        "num": "1205",
        "prefix": "ICT",
        "title": "Basic Computer and Information Technology",
        "teacher": "Md Rabiul Islam",
        "chapters": 7,
        "desc": "This is the third course of the First Year, Second Semester of BME-6, IU",
        "teacherPhoto": "images/md-rabiul-islam.jpg",
        "driveFolder": "https://drive.google.com/drive/folders/1SjQVpxmBrMPPrDlo_egFCSzp_F7cKXei?usp=drive_link",
        "teacherType": "dept",
        "chapterData": [
          {
            "name": "Introduction",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Introduction",
                "url": "https://drive.google.com/file/d/1qnw3fmuoiWm8Nk3nTmn6wEhQttUF2zWn/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Introduction",
                "url": "https://drive.google.com/file/d/1OAwzQuNgosm_1a1y0fLIZDDLdgC489B1/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Introduction",
                "url": "https://drive.google.com/file/d/1-himfC15o_bc-kfDej2MXr3hE5RvoZLY/preview"
              },
              {
                "num": "Lecture 4",
                "label": "Introduction",
                "url": "https://drive.google.com/file/d/1uns-z6GOanA_nvYY9zOkqA9MQHcvKjeQ/preview"
              },
              {
                "num": "Lecture 5",
                "label": "Introduction",
                "url": "https://drive.google.com/file/d/1T8opjycRKWZU9zF5KDJhBjcojW-hyrsM/preview"
              }
            ]
          },
          {
            "name": "Computer Systems",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Computer Systems",
                "url": "https://drive.google.com/file/d/1AyAE5yFQ4xB9M4N2RKYgfoN1jnDpvTNV/preview"
              }
            ]
          },
          {
            "name": "Computer Hardware",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Computer Hardware",
                "url": "https://drive.google.com/file/d/1u-KWVzaHhQETf3ySp9-L3wbzkAX7cdFt/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Computer Hardware",
                "url": "https://drive.google.com/file/d/1c3W4P_gWjtkJrWdxtGgiBDP_8S05rqYK/preview"
              }
            ]
          },
          {
            "name": "Computer Software",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Computer Software",
                "url": "https://drive.google.com/file/d/1U1RVWRrXj7zZ4XsgnYv4snMft8eY5m8c/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Computer Software",
                "url": "https://drive.google.com/file/d/12R0HEc72lGA03NlA_P1E6NvmOfVIFzIq/preview"
              }
            ]
          },
          {
            "name": "Basic Communication Systems",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Basic Communication Systems",
                "url": "https://drive.google.com/file/d/1IWjYjYRPxB523RbbAjZ13VFD7y3EWd3A/preview"
              }
            ]
          },
          {
            "name": "IoT",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "IoT",
                "url": "https://drive.google.com/file/d/1KneBKEn-34BeNOAgFVFI2EEtr1uuJx__/preview"
              }
            ]
          },
          {
            "name": "Real-Life IT Applications",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Real-Life IT Applications",
                "url": "https://drive.google.com/file/d/1yopz8qPONu6yMx3NL2MRXr8xV3DE8571/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Real-Life IT Applications",
                "url": "https://drive.google.com/file/d/1mNRBXS18xiCFPthYf5mMOJaCoFR5eJ4Q/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Real-Life IT Applications",
                "url": "https://drive.google.com/file/d/1Xrk7ryzupu4jscmWAqqA8adBMLCZbAy2/preview"
              }
            ]
          }
        ],
        "teacherRole": "Assistant Professor, Dept. of Biomedical Engineering, Islamic University, Kushtia",
        "books": [
          {
            "url": "https://drive.google.com/file/d/1KaGY2nsL4KA86FTch5EAeZfFiq2FYeBC/preview",
            "title": "Using Information Technology 9th Edition",
            "label": "📘 Course Book – Using Information Technology 9th Edition"
          }
        ],
        "guestRole": "",
        "guestDept": ""
      },
      {
        "num": "1207",
        "prefix": "MATH",
        "title": "Mathematics for Engineering",
        "teacher": "Dr. Atish Kumar Joardar",
        "chapters": 0,
        "desc": "This is the fourth course of the First Year, Second Semester of BME-6, IU",
        "driveFolder": "https://drive.google.com/drive/folders/1KG0MJUeeI14ZfgQgqvd0rZN60DccykOQ?usp=drive_link",
        "teacherType": "guest",
        "chapterData": [
          {
            "name": "Beta and Gamma functions and Differential Calculus",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Beta and Gamma functions and Differential Calculus",
                "url": "https://drive.google.com/file/d/1LIpIVjWgYPkuRvVrBqJMvXzexkCk5Guu/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Differential Calculus",
                "url": "https://drive.google.com/file/d/1ZpUZCA-h3S2WYZWAjHiFYVy6KcVOcWis/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Differential Calculus",
                "url": "https://drive.google.com/file/d/18R5MqWriprGuR_ii-1MATieIOM1IEhGP/preview"
              }
            ]
          },
          {
            "name": "Numerical solution of ordinary differential equations",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Numerical solution of ordinary differential equations",
                "url": "https://drive.google.com/file/d/1gQzE_l2C9vwc3MMgXdlVuurN5Y9lJS_V/preview"
              }
            ]
          }
        ],
        "books": [],
        "guestRole": "Professor",
        "guestDept": "Dept. of Mathematics, Islamic University, Kushtia",
        "teacherPhoto": "",
        "teacherRole": "Professor, Dept. of Mathematics, Islamic University, Kushtia"
      },
      {
        "num": "1209",
        "prefix": "HUM",
        "title": "Sociology and Economics",
        "teacher": "Md. Humaun Kabir",
        "chapters": 7,
        "desc": "This is the fifth course of the First Year, Second Semester of BME-6, IU",
        "driveFolder": "https://drive.google.com/drive/folders/1-gQMXc8tFDH_bsKZIV8pdcwrvo72eomk?usp=drive_link",
        "teacherType": "guest",
        "chapterData": [
          {
            "name": "Economics – Chapter 1",
            "lectures": [
              {
                "num": "Full Chapter",
                "label": "Economics Ch.1",
                "url": "https://drive.google.com/file/d/1sgU7eIM6Zc5DRvoBtG_-pTEnqTexp3XL/preview"
              }
            ]
          },
          {
            "name": "Economics – Chapter 2",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Economics Ch.2",
                "url": "https://drive.google.com/file/d/1xNjcG75J6VXPyrWZSloIKnx40WUu76NC/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Economics Ch.2",
                "url": "https://drive.google.com/file/d/1la-MLA3FjOSTThuAbpwDyhClxDze05op/preview"
              }
            ]
          },
          {
            "name": "Economics – Chapter 3",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Economics Ch.3",
                "url": "https://drive.google.com/file/d/1fpYzKyxosxnBsUC6YO2WUf5xEtkvLeOU/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Economics Ch.3",
                "url": "https://drive.google.com/file/d/1gLEYGKaJcRotOsUg8Vk8Thrt7CZFqRyC/preview"
              }
            ]
          },
          {
            "name": "Economics – Chapter 4",
            "lectures": [
              {
                "num": "Lecture 1 & 2",
                "label": "Economics Ch.4",
                "url": "https://drive.google.com/file/d/1W3os8KtSpp0vDWHBZ9uMm8TVQkJEH6I1/preview"
              }
            ]
          },
          {
            "name": "Economics – Chapter 5",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Economics Ch.5",
                "url": "https://drive.google.com/file/d/1sfUASnsF86z8mE4qaC5gf_DjBMBWpZSJ/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Economics Ch.5",
                "url": "https://drive.google.com/file/d/1sVnIGr0JFr2o3c6JMp_olUTmtyvERkv7/preview"
              }
            ]
          },
          {
            "name": "Sociology – Chapter 6",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Sociology Ch.6",
                "url": "https://drive.google.com/file/d/1JxkB7Jcf8fgG88HlbTzeyZ3OW6wRMssB/preview"
              }
            ]
          },
          {
            "name": "Sociology – Chapter 7",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Sociology Ch.7",
                "url": "https://drive.google.com/file/d/1vkDjHlnX3oh4xSNp5IWI5tc9uywFLCwZ/preview"
              }
            ]
          }
        ],
        "books": [
          {
            "url": "https://drive.google.com/file/d/1JhZLboAcDhhYIVFkh3y405gLEsrgh1bI/preview",
            "title": "Modern Economic Theory",
            "label": "📘 Course Book – Modern Economic Theory"
          },
          {
            "url": "https://drive.google.com/file/d/1a7zsFtYFxf2L1qpHWkUWMGB2tV8J_Eu1/preview",
            "title": "Sociology",
            "label": "📘 Course Book – Sociology"
          }
        ],
        "guestRole": "Assistant Professor",
        "guestDept": "Dept. of Economics, Islamic University, Kushtia",
        "teacherPhoto": "",
        "teacherRole": "Assistant Professor, Dept. of Economics, Islamic University, Kushtia"
      }
    ]
  },
  {
    "id": "bme21",
    "short": "BME 2.1",
    "icon": "🔬",
    "label": "BME 2nd Year — 1st Semester",
    "qId": "q-bme21",
    "courses": [
      {
        "num": "2101",
        "prefix": "BIO",
        "title": "Human Anatomy and Physiology",
        "teacher": "S M Jahurul Haque",
        "chapters": 7,
        "desc": "This is the first course of the Second Year, First Semester of BME-6, IU",
        "teacherPhoto": "images/sm-jahurul-haque.png",
        "driveFolder": "https://drive.google.com/drive/folders/1JY1RmT6kllHP9f_rHylHU4IDZXnOHQ6E?usp=drive_link",
        "teacherType": "dept",
        "chapterData": [
          {
            "name": "Organization of Human Body",
            "lectures": [
              {
                "num": "Full Lecture",
                "label": "Organization of Human Body",
                "url": "https://drive.google.com/file/d/1FOdU2Fwo_zXgogWgYpOaSmOy48yH_nsz/preview"
              }
            ]
          },
          {
            "name": "Cardiovascular System",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Cardiovascular System",
                "url": "https://drive.google.com/file/d/1FW366cUSTnkfsKcT-YgbXSyp6NoIPDm2/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Cardiovascular System",
                "url": "https://drive.google.com/file/d/1PfDXTfPSrmbgk2zrCjZDYr6dw8_kTcuj/preview"
              }
            ]
          },
          {
            "name": "Respiratory System",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Respiratory System",
                "url": "https://drive.google.com/file/d/1W--LJ8BBio2hfxDdh0PKziQQ_dVsvk9Z/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Respiratory System",
                "url": "https://drive.google.com/file/d/1SA3A1p_ahQDwa664Hkk7Oeiwn5iWR39T/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Respiratory System",
                "url": "https://drive.google.com/file/d/156Td_DYbbwRAhD8wKRhctOChHYrF8qSD/preview"
              }
            ]
          },
          {
            "name": "Blood",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Blood",
                "url": "https://drive.google.com/file/d/1ZIUSt-hmeJoWcYq1norFaloJOXepFd5U/preview"
              }
            ]
          },
          {
            "name": "Muscle Physiology",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Muscle Physiology",
                "url": "https://drive.google.com/file/d/1W872rfTwku-nj2E1Yp2RXuFGg-MyWzNK/preview"
              }
            ]
          },
          {
            "name": "Excretory System",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Excretory System",
                "url": "https://drive.google.com/file/d/1NTXKOKhdK9WGfHvUQi04wwulEtj6ETpl/preview"
              }
            ]
          },
          {
            "name": "Nervous System",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Nervous System",
                "url": "https://drive.google.com/file/d/1ICanvshjey21EK0-DdSOrrUPKokX4ULY/preview"
              }
            ]
          }
        ],
        "teacherRole": "Assistant Professor, Dept. of Biomedical Engineering, Islamic University, Kushtia",
        "books": [
          {
            "url": "https://drive.google.com/file/d/1YOXMAvAtieH7fqd2--W1dAoqH2a1G5fQ/preview",
            "title": "Lauralee Sherwood – Human Physiology",
            "label": "📘 Course Book – Lauralee Sherwood – Human Physiology"
          }
        ],
        "guestRole": "",
        "guestDept": ""
      },
      {
        "num": "2103",
        "prefix": "CSE",
        "title": "Digital Electronics",
        "teacher": "Kazi Mowdud Ahmed",
        "chapters": 7,
        "desc": "This is the second course of the Second Year, First Semester of BME-6, IU",
        "driveFolder": "https://drive.google.com/drive/folders/1Qlg69MO9hVq2YKdvo6mpK5WC9AfFgIne?usp=drive_link",
        "teacherType": "guest",
        "chapterData": [
          {
            "name": "Introduction",
            "lectures": [
              {
                "num": "📘",
                "label": "Read from the book Digital Systems",
                "url": "https://drive.google.com/file/d/1zAky1rhp4vsnnqKb9H5ykKHdyUAhSHbm/preview"
              }
            ]
          },
          {
            "name": "Binary Codes",
            "lectures": [
              {
                "num": "Lecture 1 & 2",
                "label": "Binary Codes",
                "url": "https://drive.google.com/file/d/1tk1v8PFjsPYrfPq9YtPDMgq3CMlpawRq/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Binary Codes",
                "url": "https://drive.google.com/file/d/165gs0yVx_7ApDGaRB8eEY1_P5YesYyvD/preview"
              }
            ]
          },
          {
            "name": "Boolean Algebra Logic Gates",
            "lectures": [
              {
                "num": "📘",
                "label": "Read from the book Digital Systems",
                "url": "https://drive.google.com/file/d/1zAky1rhp4vsnnqKb9H5ykKHdyUAhSHbm/preview"
              }
            ]
          },
          {
            "name": "Combinational Logic Circuit & Design",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Combinational Logic Circuit & Design",
                "url": "https://drive.google.com/file/d/1WryZTi-G8p7_XczhpMOKATLB2fL778Vh/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Combinational Logic Circuit & Design",
                "url": "https://drive.google.com/file/d/1P-q4xRm7PxwDEEySJeuoCZ80_3qbijg9/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Combinational Logic Circuit & Design",
                "url": "https://drive.google.com/file/d/1BdojYcKdVdCgxMC-_VJBGKnhVOeeLrqF/preview"
              }
            ]
          },
          {
            "name": "Sequential Logic Circuits",
            "lectures": [
              {
                "num": "📘",
                "label": "Read from the book Digital Systems",
                "url": "https://drive.google.com/file/d/1zAky1rhp4vsnnqKb9H5ykKHdyUAhSHbm/preview"
              }
            ]
          },
          {
            "name": "Registers and Memories",
            "lectures": [
              {
                "num": "📌",
                "label": "Suggestion provided in class",
                "url": ""
              }
            ]
          },
          {
            "name": "Logic Families",
            "lectures": [
              {
                "num": "📌",
                "label": "Suggestion provided in class",
                "url": ""
              }
            ]
          }
        ],
        "books": [
          {
            "url": "https://drive.google.com/file/d/1zAky1rhp4vsnnqKb9H5ykKHdyUAhSHbm/preview",
            "title": "Digital Systems",
            "label": "📘 Course Book – Digital Systems"
          }
        ],
        "guestRole": "Lecturer",
        "guestDept": "Dept. of Information and Communication Technology, Islamic University, Kushtia",
        "teacherPhoto": "",
        "teacherRole": "Lecturer, Dept. of Information and Communication Technology, Islamic University, Kushtia"
      },
      {
        "num": "2105",
        "prefix": "CSE",
        "title": "Programming Concepts and Python",
        "teacher": "Md Rabiul Islam",
        "chapters": 3,
        "desc": "This is the third course of the Second Year, First Semester of BME-6, IU",
        "teacherPhoto": "images/md-rabiul-islam.jpg",
        "driveFolder": "https://drive.google.com/drive/folders/1VdGr_hGjZd1rwtHXZEAKCrlCroTUgJ7I?usp=drive_link",
        "teacherType": "dept",
        "chapterData": [
          {
            "name": "Introduction to Computer Programming and Data Structure",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Introduction to Computer Programming and Data Structure",
                "url": "https://drive.google.com/file/d/1FXx70bfYfAl6N7Xt26bOewNzsrhwJEzi/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Data Structure",
                "url": "https://drive.google.com/file/d/1f2gZV3oabkDfcaI3xSEjoxqVYwyn-0h-/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Data Structure",
                "url": "https://drive.google.com/file/d/1MmLsFXltc0uh_AgwL5brepou9T3h3F4W/preview"
              },
              {
                "num": "Lecture 4",
                "label": "Data Structure",
                "url": "https://drive.google.com/file/d/128tXOJ1IaLxTfPE59TSB_8rZ3vEV4KNr/preview"
              },
              {
                "num": "Lecture 5",
                "label": "Data Structure",
                "url": "https://drive.google.com/file/d/1vLT3x83_0APh_gSJKOCaz-ayhiETOCS_/preview"
              }
            ]
          },
          {
            "name": "Data Types, Variables, Operators, Loops, Lists, Tuples, Dictionaries",
            "lectures": [
              {
                "num": "Full Lecture",
                "label": "Data Types, Variables, Basic I/O, Operators, Boolean, Loops, Lists, etc.",
                "url": "https://drive.google.com/file/d/1XM3cNsty_-zPVf9b51v41Q1hLBMl_U0L/preview"
              },
              {
                "num": "Ch.4 Part",
                "label": "4th Chapter Additional Lecture",
                "url": "https://drive.google.com/file/d/1uvkWBSqi6Obw95-vfAlRgvrrqwi9Flzb/preview"
              }
            ]
          },
          {
            "name": "OOP, Exception Handling, and Working with Files",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "OOP, Exception Handling, Working with Files",
                "url": "https://drive.google.com/file/d/1pIIAgK1gRAZNjgvAei3EVmCSIIngsKWb/preview"
              },
              {
                "num": "Lecture 2",
                "label": "OOP",
                "url": "https://drive.google.com/file/d/1HE2H_Wm8-_2VbItZdRBM4HF8gP_eMZM1/preview"
              },
              {
                "num": "Lecture 3",
                "label": "OOP",
                "url": "https://drive.google.com/file/d/1JDwr8oIqED9OYYHV7B2HKL_w9NR0pX1c/preview"
              }
            ]
          }
        ],
        "teacherRole": "Assistant Professor, Dept. of Biomedical Engineering, Islamic University, Kushtia",
        "books": [],
        "guestRole": "",
        "guestDept": ""
      },
      {
        "num": "2107",
        "prefix": "PHY",
        "title": "Waves and Oscillations, Optics and Thermal Physics",
        "teacher": "Dr. Md. Khalilur Rahman",
        "chapters": 3,
        "desc": "This is the fourth course of the Second Year, First Semester of BME-6, IU",
        "driveFolder": "https://drive.google.com/drive/folders/1CnK7LFkaKC0m6_9m8Eewb6WIwiKeL9Ol?usp=drive_link",
        "teacherType": "guest",
        "chapterData": [
          {
            "name": "Waves and Oscillations",
            "lectures": [
              {
                "num": "Full Lecture",
                "label": "Waves and Oscillations",
                "url": "https://drive.google.com/file/d/1gzLjmSozS65vHP580KQP6819l3JpusFx/preview"
              }
            ]
          },
          {
            "name": "Optics",
            "lectures": [
              {
                "num": "Full Lecture",
                "label": "Optics",
                "url": "https://drive.google.com/file/d/1KSDIk__BsK_fEeSUHVh2vKj9sv5t9Vq7/preview"
              }
            ]
          },
          {
            "name": "Thermal Physics",
            "lectures": [
              {
                "num": "Full Lecture",
                "label": "Thermal Physics",
                "url": "https://drive.google.com/file/d/1hBY3bko82fKYuDrkjzlKL5qTdCb0je7r/preview"
              }
            ]
          }
        ],
        "books": [
          {
            "url": "https://drive.google.com/file/d/1WVeHt2PS96SnjHSVeVGQxGFc4GLm_YCB/preview",
            "title": "A textbook of Sound",
            "label": "📘 Course Book – A textbook of Sound"
          },
          {
            "url": "https://drive.google.com/file/d/1fpEFZQxvkUP-7BGLChtytmEgHh4WE7hu/preview",
            "title": "A textbook of Optics",
            "label": "📘 Course Book – A textbook of Optics"
          },
          {
            "url": "https://drive.google.com/file/d/15KR7Akup5_R97EI9IWoD0kGbPjzvCKGd/preview",
            "title": "Heat Thermodynamics and Statistical Physics",
            "label": "📘 Course Book – Heat Thermodynamics and Statistical Physics"
          }
        ],
        "guestRole": "Professor",
        "guestDept": "Dept. of Electrical and Electronic Engineering, Islamic University, Kushtia",
        "teacherPhoto": "",
        "teacherRole": "Professor, Dept. of Electrical and Electronic Engineering, Islamic University, Kushtia"
      },
      {
        "num": "2109",
        "prefix": "HUM",
        "title": "Managerial and Financial Accounting",
        "teacher": "Mithun Bairagi",
        "chapters": 4,
        "desc": "This is the fifth course of the Second Year, First Semester of BME-6, IU",
        "driveFolder": "https://drive.google.com/drive/folders/1aIzFSP05F0tY-9SkVzgthNFkAEUOsfid?usp=drive_link",
        "teacherType": "guest",
        "chapterData": [
          {
            "name": "Financial Accounting",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Financial Accounting",
                "url": "https://drive.google.com/file/d/1Vi1tsAHDYFUHZL-Zjo6WQPAo2MxOq5Cs/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Financial Accounting",
                "url": "https://drive.google.com/file/d/1M5Qs5-XfXgnCQHg7sF4SgXuxjW_SoZMS/preview"
              }
            ]
          },
          {
            "name": "Recording System",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Recording System",
                "url": "https://drive.google.com/file/d/1XHVRr-UjrW0sBbFLOcugiBUGygjCilcs/preview"
              }
            ]
          },
          {
            "name": "Financial Statements Analysis and Interpretation",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Financial Statements Analysis and Interpretation",
                "url": "https://drive.google.com/file/d/1jo2-KRPjAlF7yzpB4YeG1f2Dh4IwIFsH/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Financial Statements Analysis",
                "url": "https://drive.google.com/file/d/1Cspcr4Yj3XlVZ85GLz-CFPHhSfCM8Bva/preview"
              }
            ]
          },
          {
            "name": "Costs and Management Accounting",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Costs and Management Accounting",
                "url": "https://drive.google.com/file/d/1BcAaFQkQRGkx5c_kkxf-zdgePCtaNNYf/preview"
              }
            ]
          }
        ],
        "books": [],
        "guestRole": "Lecturer",
        "guestDept": "Dept. of Finance and Banking, Islamic University, Kushtia",
        "teacherPhoto": "",
        "teacherRole": "Lecturer, Dept. of Finance and Banking, Islamic University, Kushtia"
      }
    ]
  },
  {
    "id": "bme22",
    "short": "BME 2.2",
    "icon": "⚡",
    "label": "BME 2nd Year — 2nd Semester",
    "qId": "q-bme22",
    "courses": [
      {
        "num": "2201",
        "prefix": "BME",
        "title": "Structure and Properties of Biomaterials",
        "teacher": "Ariful Islam",
        "chapters": 9,
        "desc": "This is the first course of the Second Year, Second Semester of BME-6, IU",
        "teacherPhoto": "images/ariful-islam.jpg",
        "teacherAbout": "https://drive.google.com/file/d/1pj7f_svJOujbx8u4kLKw3EGP_59bo1IU/view?usp=drive_link",
        "driveFolder": "https://drive.google.com/drive/folders/1ItCfTCiz9-f9_eVVF9ue2agCRaa3OIhb?usp=drive_link",
        "teacherType": "dept",
        "chapterData": [
          {
            "name": "Introduction",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Introduction",
                "url": "https://drive.google.com/file/d/1pcrr2Fxq5Os4F8lptw0Pmczz1DDRyq_9/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Introduction",
                "url": "https://drive.google.com/file/d/1vJ1Z64CMc6QGC76dvpt-GmIoWoCPlJQ_/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Introduction",
                "url": "https://drive.google.com/file/d/1N5Hz1Wc3BQ8UULOsFUNIDxbljRrVmJGs/preview"
              },
              {
                "num": "Lecture 4",
                "label": "Introduction",
                "url": "https://drive.google.com/file/d/1Qw3VBIM2EawUtS45kwa5Ctdi65pWaOH6/preview"
              },
              {
                "num": "Lecture 5",
                "label": "Introduction",
                "url": "https://drive.google.com/file/d/1gtQbJ_HwfCH84pfuYQI36GXZ-evcGE3d/preview"
              },
              {
                "num": "Lecture 6",
                "label": "Introduction",
                "url": "https://drive.google.com/file/d/1SGONvtl_LOHxlHhCOqF64ki_pxiSHUxk/preview"
              }
            ]
          },
          {
            "name": "Properties and Applications of Metallic Biomaterials and its Biocompatibility",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Metallic Biomaterials",
                "url": "https://drive.google.com/file/d/1GflHpXtPzFa8pib2Y-a04Kq2L1UQqOen/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Metallic Biomaterials",
                "url": "https://drive.google.com/file/d/1anE_vzdsjPyk_OXHv7oziiDwOQKFXTsR/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Metallic Biomaterials",
                "url": "https://drive.google.com/file/d/16DMCHzuiVwZd4itS6UxtYh4EGWgYZ20X/preview"
              },
              {
                "num": "Lecture 4",
                "label": "Metallic Biomaterials",
                "url": "https://drive.google.com/file/d/1i5y75RHqWH6dBHYzxjorJVjSPHQ1wYxH/preview"
              },
              {
                "num": "Lecture 5",
                "label": "Metallic Biomaterials",
                "url": "https://drive.google.com/file/d/1XU3uzQivNbi4oCTw4wS1xeGdfVMI_DPN/preview"
              },
              {
                "num": "Lecture 6",
                "label": "Metallic Biomaterials",
                "url": "https://drive.google.com/file/d/1Es3aq3h7XASwwXP9ROcbdtF6iPnm1KhM/preview"
              },
              {
                "num": "Lecture 7",
                "label": "Metallic Biomaterials",
                "url": "https://drive.google.com/file/d/1ICQCxPJ2fhe_HKHTvBggQVVaQVN-jKX4/preview"
              },
              {
                "num": "Lecture 8",
                "label": "Metallic Biomaterials",
                "url": "https://drive.google.com/file/d/1AdiMAn1PzaPG8GLUx1nUiQxCgRp4yddZ/preview"
              },
              {
                "num": "Lecture 9",
                "label": "Metallic Biomaterials",
                "url": "https://drive.google.com/file/d/1Q6BbXOhMZC4Yffn-A4PhIxwbCme50gPR/preview"
              },
              {
                "num": "Lecture 10",
                "label": "Metallic Biomaterials",
                "url": "https://drive.google.com/file/d/1Ur664G6NCzCHe8POnYk-RLj0kdbVX5f8/preview"
              }
            ]
          },
          {
            "name": "Properties and Applications of Polymeric Biomaterials",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Polymeric Biomaterials",
                "url": "https://drive.google.com/file/d/1NvO_k9PipiWO01UQGhGmMx3jaA-ZZNyy/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Polymeric Biomaterials",
                "url": "https://drive.google.com/file/d/17CO9xyzHOtV7k8FzXhUuCqIXwcjfUytO/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Polymeric Biomaterials",
                "url": "https://drive.google.com/file/d/1_Wd2bh6tDqz7GoM8EE2rsC6_CHdsrVLW/preview"
              }
            ]
          },
          {
            "name": "Composite Biomaterials",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Composite Biomaterials",
                "url": "https://drive.google.com/file/d/1gYailUQeneiglHSRegrVkCvaunl3jsvi/preview"
              }
            ]
          },
          {
            "name": "Properties and Applications of Ceramic Biomaterials",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Ceramic Biomaterials",
                "url": "https://drive.google.com/file/d/1zz37aV-ixPil-BrP9ngZQsy5mTIdGxXj/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Ceramic Biomaterials",
                "url": "https://drive.google.com/file/d/1ZX9ibQ2ijZ_tCq7KvG2NbN4sU1Q85JAo/preview"
              }
            ]
          },
          {
            "name": "Properties and Applications of Degradable Biomaterials",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Degradable Biomaterials",
                "url": "https://drive.google.com/file/d/1Xt-lPVjstdVd8uza0ZsgxTf723aFTxIN/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Degradable Biomaterials",
                "url": "https://drive.google.com/file/d/11ERt_EFmWZKbjTKE3FwlrXZ9xY49iufU/preview"
              }
            ]
          },
          {
            "name": "Biomaterials for Soft Tissue Replacements",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Soft Tissue Replacements",
                "url": "https://drive.google.com/file/d/1W8Y4L_xJkJtkRr1OWFROo0cI3WO5r3lm/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Soft Tissue Replacements",
                "url": "https://drive.google.com/file/d/1D5nPr42tPBy6BsXc_1tVD9a1bHFyS82W/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Soft Tissue Replacements",
                "url": "https://drive.google.com/file/d/1q2H4PJqV64c0VTlklB1IGSeWYbtu3cE4/preview"
              }
            ]
          },
          {
            "name": "Techniques for characterization of Surface properties of Biomaterials",
            "lectures": [
              {
                "num": "Lecture 1 (Part 1)",
                "label": "Surface Properties Characterization",
                "url": "https://drive.google.com/file/d/1dFu7LPjsoeE4RAxXwRqORPwHyDhKN2vF/preview"
              },
              {
                "num": "Lecture 1 (Part 2)",
                "label": "Surface Properties Characterization",
                "url": "https://drive.google.com/file/d/1qshkUyQUNXKjGQWS01m_2M1lrWyV-eDP/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Surface Properties Characterization",
                "url": "https://drive.google.com/file/d/1uOSPjpJQvAXf8XDYUw44AxhVl9ejZq-3/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Surface Properties Characterization",
                "url": "https://drive.google.com/file/d/1sjW10NvVLOFmS1RCsP4s9mCo7u9GRUVa/preview"
              },
              {
                "num": "Lecture 4",
                "label": "Surface Properties Characterization",
                "url": "https://drive.google.com/file/d/1I5dFLJMe0D25u-MMoO35h_zjrY4IMqdH/preview"
              },
              {
                "num": "Lecture 5",
                "label": "Surface Properties Characterization",
                "url": "https://drive.google.com/file/d/1FggDsGu9zCImpdU54-I-PndEpLKydafx/preview"
              },
              {
                "num": "Lecture 6",
                "label": "Surface Properties Characterization",
                "url": "https://drive.google.com/file/d/1SlG7VmpkYi_q6OmfSoW5LmXAzgjZE4fh/preview"
              },
              {
                "num": "Lecture 7",
                "label": "Surface Properties Characterization",
                "url": "https://drive.google.com/file/d/1TmvVem5Uo4Ou7a4OVCL095VB6_v0e-wW/preview"
              },
              {
                "num": "Lecture 8",
                "label": "Surface Properties Characterization",
                "url": "https://drive.google.com/file/d/1ZNUIdM_Boxzh2n1SVyOoQBSGbzxlboVF/preview"
              }
            ]
          },
          {
            "name": "Biological Testing of Biomaterials",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Biological Testing of Biomaterials",
                "url": "https://drive.google.com/file/d/1eCkiFPd7-EyCXxdENOox_G2Wx-zza4HA/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Biological Testing",
                "url": "https://drive.google.com/file/d/1jUbo_DAj3weAu04SjzthHk5fRNBvzQ6t/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Biological Testing",
                "url": "https://drive.google.com/file/d/1aGRdxN_pOxilkJJuSzOz8hf4ru_Nz-zp/preview"
              },
              {
                "num": "Lecture 4",
                "label": "Biological Testing",
                "url": "https://drive.google.com/file/d/1Qazx0Icl2gUDQVptJa7wn7-uz0F8TTNW/preview"
              }
            ]
          }
        ],
        "teacherRole": "Assistant Professor, Dept. of Biomedical Engineering, Islamic University, Kushtia",
        "books": [],
        "guestRole": "",
        "guestDept": ""
      },
      {
        "num": "2203",
        "prefix": "CSE",
        "title": "Signal and Systems",
        "teacher": "Dr. Md. Khairul Islam",
        "chapters": 5,
        "desc": "This is the second course of the Second Year, Second Semester of BME-6, IU",
        "teacherPhoto": "images/dr-khairul-islam.jpg",
        "driveFolder": "https://drive.google.com/drive/folders/18exsiaFDmu85a4SCYk9-VEbMssPnTF8V?usp=drive_link",
        "teacherType": "dept",
        "chapterData": [
          {
            "name": "Introduction to Signals and Systems",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Introduction to Signals and Systems",
                "url": "https://drive.google.com/file/d/1UpEv4Lvxlcdrfa_u7bVQT-y2G8QR9vvq/preview"
              },
              {
                "num": "Full Chapter with Math",
                "label": "Introduction to Signals and Systems",
                "url": "https://drive.google.com/file/d/1fbZFeMjDJgu1EPyhPYmOyDwTpmZPLiEO/preview"
              }
            ]
          },
          {
            "name": "System Analysis",
            "lectures": [
              {
                "num": "Full Chapter with Math",
                "label": "System Analysis",
                "url": "https://drive.google.com/file/d/1AODguE0xh3XqGhrf9l2nnf4rfq-uqIW3/preview"
              }
            ]
          },
          {
            "name": "Fourier Analysis of Continuous Time Signals",
            "lectures": [
              {
                "num": "Full Chapter (Part 1)",
                "label": "Fourier Analysis of Continuous Time Signals",
                "url": "https://drive.google.com/file/d/1eho6aRTosdB8UAPhJgDFegzrUSXqCBdW/preview"
              },
              {
                "num": "Full Chapter (Part 2)",
                "label": "Fourier Analysis of Continuous Time Signals",
                "url": "https://drive.google.com/file/d/1-DUpj255F-bl5jTMRoEOYLSbD8hg6R8B/preview"
              }
            ]
          },
          {
            "name": "Laplace Transform",
            "lectures": [
              {
                "num": "Full Chapter (Highlighted)",
                "label": "Laplace Transform",
                "url": "https://drive.google.com/file/d/1D0_Wakv5LtDwmTkjMeNmRP5TcyKBE3Xu/preview"
              }
            ]
          },
          {
            "name": "Z-Transformation",
            "lectures": [
              {
                "num": "Full Chapter (Highlighted)",
                "label": "Z-Transformation",
                "url": "https://drive.google.com/file/d/1VYo9fnWEIB6u7Nhhksd7jKkgmx7uqfIb/preview"
              }
            ]
          }
        ],
        "teacherRole": "Chairman, Associate Professor, Dept. of Biomedical Engineering, Islamic University, Kushtia",
        "books": [
          {
            "url": "https://drive.google.com/file/d/1cA5FQtBJPjseuALrR4nDAR5eyG_UQb5n/preview",
            "title": "Signal and Systems – Simon Haykin",
            "label": "📘 Course Book – Signal and Systems – Simon Haykin"
          },
          {
            "url": "https://drive.google.com/file/d/18hwEvtL_YaS0t6MfF_2FGqgPkvREnwwE/preview",
            "title": "Signal and System – Tarun Kumar Rawat",
            "label": "📘 Course Book – Signal and System – Tarun Kumar Rawat"
          }
        ],
        "guestRole": "",
        "guestDept": ""
      },
      {
        "num": "2205",
        "prefix": "BIO",
        "title": "Cell and Tissue Engineering",
        "teacher": "Dr. Rakibul Islam",
        "chapters": 7,
        "desc": "This is the third course of the Second Year, Second Semester of BME-6, IU",
        "driveFolder": "https://drive.google.com/drive/folders/1MQ3-dYNx4IOUTytO4u-kA_aUc-joM5n7?usp=drive_link",
        "teacherType": "guest",
        "chapterData": [
          {
            "name": "Introduction",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Introduction",
                "url": "https://drive.google.com/file/d/17lunezsQ87KqRynv3up1rgJ-Og8m05xp/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Introduction",
                "url": "https://drive.google.com/file/d/1BWdYFNjvWUzZHrNViWa7W3gA88ErqDQS/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Introduction",
                "url": "https://drive.google.com/file/d/1xp-x1G8AMy1-3bP_lgNOKBlphZYvb3-e/preview"
              },
              {
                "num": "Lecture 4",
                "label": "Introduction",
                "url": "https://drive.google.com/file/d/1uCEBy-ERM-GYBe2hfpz55udVD4rJFcPW/preview"
              },
              {
                "num": "Lecture 5",
                "label": "Introduction",
                "url": "https://drive.google.com/file/d/19x1D951wHCqlykbLp2Iq70u-JZVDYgkm/preview"
              }
            ]
          },
          {
            "name": "Tissue Culture",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Tissue Culture",
                "url": "https://drive.google.com/file/d/1quMtd-6aUAHibmEcrq5Ou_bsPrM_iSUG/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Tissue Culture",
                "url": "https://drive.google.com/file/d/1mHflVdcw4tSYBunlVwbYKBRR8fwNoKza/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Tissue Culture",
                "url": "https://drive.google.com/file/d/1t5Zfu-aRL7Wi5qpe228L-9EgEqp4r8LQ/preview"
              }
            ]
          },
          {
            "name": "Tissue Regeneration",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Tissue Regeneration",
                "url": "https://drive.google.com/file/d/1dcLlpRPF3oR1IOsv2xZ6i_JgUnI4pw4M/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Tissue Regeneration",
                "url": "https://drive.google.com/file/d/1EHa4jrZd2MuaZcvwVPhDqYqRnEmOhgds/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Tissue Regeneration",
                "url": "https://drive.google.com/file/d/13NBxsBJPtrn_izAfFefLKcMdXqntLolg/preview"
              },
              {
                "num": "Lecture 4",
                "label": "Tissue Regeneration",
                "url": "https://drive.google.com/file/d/1Jv-6jOkzDFpJdAg-6SJBXGX7V0sbdyP6/preview"
              },
              {
                "num": "Lecture 5",
                "label": "Tissue Regeneration",
                "url": "https://drive.google.com/file/d/19y9GiWGCQYk9JUwVs4ha7SoMjnIG7yra/preview"
              },
              {
                "num": "Lecture 6",
                "label": "Tissue Regeneration",
                "url": "https://drive.google.com/file/d/108EIIYOlFT7n6bZw8g_Xf5TFVsMSmIwt/preview"
              },
              {
                "num": "Lecture 7",
                "label": "Tissue Regeneration",
                "url": "https://drive.google.com/file/d/1cS5E3T-AMzGru_ZcV5_1KYyBZQ03bEgK/preview"
              }
            ]
          },
          {
            "name": "Tissue Engineering",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Tissue Engineering",
                "url": "https://drive.google.com/file/d/1lIFoFfO_JU_gmQH7WC4i5uXdqU2mDgk7/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Tissue Engineering",
                "url": "https://drive.google.com/file/d/13UTWgulPXC00nEMrZ5JWwcWPrn1ZDPja/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Tissue Engineering",
                "url": "https://drive.google.com/file/d/1rZVNQkK5cjavKCJoWdbK9Fgc7TnJmKDE/preview"
              },
              {
                "num": "Lecture 4",
                "label": "Tissue Engineering",
                "url": "https://drive.google.com/file/d/11RlOw2rHMO867ZNJr6xZTVJRI5pu7m4s/preview"
              }
            ]
          },
          {
            "name": "Cardiovascular Tissue Engineering",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Cardiovascular Tissue Engineering",
                "url": "https://drive.google.com/file/d/1SqNUpFn3YT8yvTDXaSrxifEu0wBrYDdy/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Cardiovascular Tissue Engineering",
                "url": "https://drive.google.com/file/d/1eTABT86-MSIq_7LGY4ls9tRm3xMXxp-a/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Cardiovascular Tissue Engineering",
                "url": "https://drive.google.com/file/d/1VQW-w4rW1cnf9d2HfSxCn8795uwL15U0/preview"
              },
              {
                "num": "Lecture 4",
                "label": "Cardiovascular Tissue Engineering",
                "url": "https://drive.google.com/file/d/1M22PdZPLPTSmZvnajl1UetSzVzUHr-Fa/preview"
              }
            ]
          },
          {
            "name": "Liver Tissue Engineering",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Liver Tissue Engineering",
                "url": "https://drive.google.com/file/d/1uddbLApA26mkXrsVbjcabf727VkDzyCr/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Liver Tissue Engineering",
                "url": "https://drive.google.com/file/d/1x5eKcPWkcE_3PDwLbfd5x2TQ52gSaKhj/preview"
              }
            ]
          },
          {
            "name": "Stem Cell",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Stem Cell",
                "url": "https://drive.google.com/file/d/1ZuqlFmyR0J7maufvIzhr-Z-R8Ia7vkU_/preview"
              }
            ]
          }
        ],
        "books": [],
        "guestRole": "Professor",
        "guestDept": "Dept. of Biotechnology and Genetic Engineering, Islamic University, Kushtia",
        "teacherPhoto": "",
        "teacherRole": "Professor, Dept. of Biotechnology and Genetic Engineering, Islamic University, Kushtia"
      },
      {
        "num": "2207",
        "prefix": "STAT",
        "title": "Biostatistics",
        "teacher": "Md Rabiul Islam",
        "chapters": 9,
        "desc": "This is the fourth course of the Second Year, Second Semester of BME-6, IU",
        "teacherPhoto": "images/md-rabiul-islam.jpg",
        "driveFolder": "https://drive.google.com/drive/folders/1F1hkbZVEHHQiZt5L3M9fpOv7Z4Fg_hNB?usp=drive_link",
        "teacherType": "dept",
        "chapterData": [
          {
            "name": "Statistics",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Statistics",
                "url": "https://drive.google.com/file/d/1sHR0DRE0ggDYZ1zSf4uUm71FdOv8fqRh/preview"
              }
            ]
          },
          {
            "name": "Processing of Data",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Processing of Data",
                "url": "https://drive.google.com/file/d/1iuNFLMKHdrdxHHu_L36k3fOI4zOuV4Z1/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Processing of Data",
                "url": "https://drive.google.com/file/d/1uE2U0y9FRObz4mkQzi26Xn4CwSO0LiOi/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Processing of Data",
                "url": "https://drive.google.com/file/d/1wfxD_ZqtCBlf9RbCPhacPoLIOlEb84gq/preview"
              }
            ]
          },
          {
            "name": "Measures of Central Tendency",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Measures of Central Tendency",
                "url": "https://drive.google.com/file/d/18oEIvme2ML8O8QmBBIaTO4YN7IOINBAx/preview"
              }
            ]
          },
          {
            "name": "Measures of Dispersion",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Measures of Dispersion",
                "url": "https://drive.google.com/file/d/1twNpdsORs0tyysNirPawE5oEHhBo8zPD/preview"
              }
            ]
          },
          {
            "name": "Simple Correlation and Regression",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Simple Correlation and Regression",
                "url": "https://drive.google.com/file/d/1sg3Z5ePS95kMOzcQBNCFkfMyGsfL3Li3/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Simple Correlation and Regression",
                "url": "https://drive.google.com/file/d/1n3O8PTxiBe2L1myw7DDfdZ9P_TYt7ZZ9/preview"
              }
            ]
          },
          {
            "name": "Basic Concept of Probability",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Basic Concept of Probability",
                "url": "https://drive.google.com/file/d/1au_iiWztQP7oswjD5UKZxOsfSQuyqfvn/preview"
              }
            ]
          },
          {
            "name": "Probability Distribution",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Probability Distribution",
                "url": "https://drive.google.com/file/d/1i8cP889DSsPjO-9DiqixB0JSOMgkPB-R/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Probability Distribution",
                "url": "https://drive.google.com/file/d/1yObqdZHUJ8vD5XWEAo16MCK6MvPIqffG/preview"
              }
            ]
          },
          {
            "name": "Hypothesis Testing",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Hypothesis Testing",
                "url": "https://drive.google.com/file/d/1C8hyZQDDWMoOEXkQAv4Mz_pI3mbwNFBg/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Hypothesis Testing",
                "url": "https://drive.google.com/file/d/1CamyPU6-2aPTJ_zJaBLbZQ2vTcjaea_p/preview"
              }
            ]
          },
          {
            "name": "Chi square Distribution and Analysis of frequency",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Chi square Distribution and Analysis of frequency",
                "url": "https://drive.google.com/file/d/1_oUYiDcYf5_xxtqUtNlUzO5v0Yx4Y_FQ/preview"
              }
            ]
          }
        ],
        "books": [],
        "guestRole": "",
        "guestDept": "",
        "teacherRole": "Assistant Professor, Dept. of Biomedical Engineering, Islamic University, Kushtia"
      },
      {
        "num": "2209",
        "prefix": "ICT",
        "title": "Communication Engineering",
        "teacher": "Dr. Tapan Kumar Jodder",
        "chapters": 6,
        "desc": "This is the fifth course of the Second Year, Second Semester of BME-6, IU",
        "driveFolder": "https://drive.google.com/drive/folders/1Gw5NqRtWcUnxtZ2RYco5QjnfA_9cPCWc?usp=drive_link",
        "teacherType": "guest",
        "chapterData": [
          {
            "name": "Introduction to Communication System",
            "lectures": [
              {
                "num": "Full Lecture",
                "label": "Introduction to Communication System",
                "url": "https://drive.google.com/file/d/1EXsxGsCrFzuU8v0OeAbZJ1j7S5envDpN/preview"
              }
            ]
          },
          {
            "name": "Amplitude Modulation",
            "lectures": [
              {
                "num": "Full Lecture",
                "label": "Amplitude Modulation",
                "url": "https://drive.google.com/file/d/1rcuF8ddW89VU0pQaOExSaJAfa9yCMH4P/preview"
              }
            ]
          },
          {
            "name": "AM Receiver",
            "lectures": [
              {
                "num": "Full Lecture",
                "label": "AM Receiver",
                "url": "https://drive.google.com/file/d/1RgzO2-PA8jxv7yyriIOE3Ritlhe7XRDJ/preview"
              }
            ]
          },
          {
            "name": "FM Modulation",
            "lectures": [
              {
                "num": "Full Lecture",
                "label": "FM Modulation",
                "url": "https://drive.google.com/file/d/10JkDRlogsQsj4IPu3YtfFz8ft9jp_h98/preview"
              }
            ]
          },
          {
            "name": "Analog Pulse Modulation Techniques",
            "lectures": [
              {
                "num": "Full Lecture",
                "label": "Analog Pulse Modulation Techniques",
                "url": "https://drive.google.com/file/d/1DQNnlhyBi_RQTEc1eAaD1MQf2QG8THnb/preview"
              }
            ]
          },
          {
            "name": "Digital Pulse Modulation and Transmission Techniques",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Digital Pulse Modulation and Transmission Techniques",
                "url": "https://drive.google.com/file/d/1AxKO3tIazaFN-wokDD_VTbd9EDNwUh14/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Digital Pulse Modulation",
                "url": "https://drive.google.com/file/d/1x_y7z97kzUfoh87KDrSl5XQ5dn-I-7AJ/preview"
              }
            ]
          }
        ],
        "books": [
          {
            "url": "https://drive.google.com/file/d/1d7C1imsw-d_JCf3GNGU4ys9cpQSt6WCf/preview",
            "title": "Digital Communication Systems",
            "label": "📘 Course Book – Digital Communication Systems"
          }
        ],
        "guestRole": "Professor",
        "guestDept": "Dept. of Information and Communication Technology, Islamic University, Kushtia",
        "teacherPhoto": "",
        "teacherRole": "Professor, Dept. of Information and Communication Technology, Islamic University, Kushtia"
      }
    ]
  },
  {
    "id": "bme31",
    "short": "BME 3.1",
    "icon": "🖥️",
    "label": "BME 3rd Year — 1st Semester",
    "qId": "q-bme31",
    "courses": [
      {
        "num": "3101",
        "prefix": "BME",
        "title": "Biomedical Instrumentation and Diagnostics",
        "teacher": "Afiya Mubasharah",
        "chapters": 8,
        "desc": "This is the first course of the Third Year, First Semester of BME-6, IU",
        "teacherPhoto": "images/afiya-mubasharah.jpg",
        "driveFolder": "https://drive.google.com/drive/folders/1V72SHVpC_CGy7JS_AHFHCRBcenKpPubC?usp=drive_link",
        "teacherType": "dept",
        "chapterData": [
          {
            "name": "Basic Principle, Technical Specification, Working, and Applications of Laboratory Instruments",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Basic Principle, Technical Specification, Working, and Applications of Laboratory Instruments",
                "url": "https://drive.google.com/file/d/1rsc2ghMRqxgvWd6uD2X1hKlND5xqtkKd/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Colorimeter, Electrolyte Analyzer",
                "url": "https://drive.google.com/file/d/1I249BBsDKkiZV4MIV7-KqcwOBLrxQpcY/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Blood Cell Counter, Auto-analyzer, Blood Gas Analyzer, Electrophoresis",
                "url": "https://drive.google.com/file/d/17eN7x3noOPR__zQDz5dlUzS-Ke6sl_zD/preview"
              }
            ]
          },
          {
            "name": "Basic Principle, Technical Specification, Working, and Applications of Laboratory Instruments (Second)",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Chromatography",
                "url": "https://drive.google.com/file/d/1i1YTG-1pd0XBzjJtqoB_CSH89giOUcDW/preview"
              },
              {
                "num": "Lecture 2",
                "label": "ELISA Concepts (Direct and Indirect), Reader & Washer",
                "url": "https://drive.google.com/file/d/1biZgOvXA0TZpV8RcBrZYk5dT5h5R-QIQ/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Microscopes and its types",
                "url": "https://drive.google.com/file/d/1CdsxRNT9aUVkO9nAZI9Ni-c5VQOMszWw/preview"
              }
            ]
          },
          {
            "name": "Blood Flow Measurement",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Blood Flow Measurement",
                "url": "https://drive.google.com/file/d/1hxexNAhEKLnRD4V37XPd6AkEy1FWDKIN/preview"
              }
            ],
            "notes": [],
            "resources": []
          },
          {
            "name": "Pulmonary Function Analyser and Ventilator",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Respiration Measurement Technique: Lung Volume and Capacities and Spirometry",
                "url": "https://drive.google.com/file/d/1yMwMrryRaqM80qSzU5RCcsUQ_CLyOnHI/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Ventilators",
                "url": "https://drive.google.com/file/d/1FtIMrTohn9OdulBkEKcdpFjsfPvz3LrZ/preview"
              }
            ],
            "notes": [],
            "resources": []
          },
          {
            "name": "Heart Lung machine and types of artificial oxygenator Audiometers",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Heart Lung machine and types of artificial oxygenator Audiometers",
                "url": "https://drive.google.com/file/d/1h_-ANAV-JfI8tezHTG9nwzzxTFg-xMP0/preview"
              }
            ],
            "notes": [],
            "resources": [],
            "chNum": "Chapter 5"
          },
          {
            "name": "'Medical diagnostics', and 'Pneumonia pathology and diagnostics'",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Medical diagnostics, and Pneumonia pathology and diagnostics",
                "url": "https://drive.google.com/file/d/14_Om4JmCt-EFz6kO-YxzWqwC0dAa6Fg3/preview"
              }
            ],
            "notes": [],
            "resources": [],
            "chNum": "Chapter 6 and 7"
          },
          {
            "name": "'Malaria Pathology and Diagnostics', 'Tuberculosis Pathology and Diagnostics', and 'HIV/AIDS Pathology, Diagnostics, and Disease Monitoring'",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Malaria Pathology and Diagnostics, Tuberculosis Pathology and Diagnostics, and HIV/AIDS Pathology, Diagnostics, and Disease Monitoring",
                "url": "https://drive.google.com/file/d/1YtFdh-zf0YeWDa1g83qTGrr7DIbMbVrt/preview"
              }
            ],
            "notes": [],
            "resources": [],
            "chNum": "Chapter 8, 9 and 10"
          },
          {
            "name": "from Previous Year",
            "lectures": [],
            "notes": [
              {
                "label": "For External",
                "url": "https://drive.google.com/file/d/1C5BijJlftKTm1YWKhEyjkkTfeEN9pDvl/preview"
              }
            ],
            "resources": [],
            "chNum": "Out of Syllabus"
          }
        ],
        "teacherRole": "Lecturer, Dept. of Biomedical Engineering, Islamic University, Kushtia",
        "books": [
          {
            "url": "https://drive.google.com/file/d/1k5YH2Qynd7q-TozI2VdGq7YpQB8xHsbR/preview",
            "title": "Introduction to Biomedical Engineering",
            "label": "📘 Course Book – Introduction to Biomedical Engineering"
          },
          {
            "url": "https://drive.google.com/file/d/1JjZHSOIOTzACSTTh1xVT9ABx_hGDi6Tv/preview",
            "title": "Medical Instrumentation Application and Design",
            "label": "📘 Course Book – Medical Instrumentation Application and Design"
          },
          {
            "url": "https://drive.google.com/file/d/1Js_FoTRyjemqowZhj0DPbcdrRyA3btI9/preview",
            "title": "Biomedical Instrumentation Technology",
            "label": "📘 Course Book – Biomedical Instrumentation Technology"
          }
        ],
        "guestRole": "",
        "guestDept": ""
      },
      {
        "num": "3103",
        "prefix": "BME",
        "title": "Bio-Signal Processing",
        "teacher": "Md. Abu Sayed",
        "chapters": 5,
        "desc": "This is the second course of the Third Year, First Semester of BME-6, IU",
        "teacherPhoto": "images/md-abu-sayed.jpg",
        "driveFolder": "https://drive.google.com/drive/folders/1c6pxN-NOeVzMrb8ds-2lgwiyru2R6207?usp=drive_link",
        "teacherType": "dept",
        "chapterData": [
          {
            "name": "Bio signals acquisitions and General properties",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Origin and Dynamics of Bio-signals",
                "url": "https://drive.google.com/file/d/1z14wpcZm3GbPgPc0lEKqfeYNXasvrDLR/preview"
              }
            ]
          },
          {
            "name": "Filtering for Removal of artifacts",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Filtering for Removal of Artifacts",
                "url": "https://drive.google.com/file/d/1NTwEnEbgyXqhGX3s274dVCnJgJ1CtXNv/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Filtering for Removal of Artifacts",
                "url": "https://drive.google.com/file/d/1B7nzfvzwmZ2I3AKVFkCzZJhH46EFQ5K6/preview"
              },
              {
                "num": "Lecture 3",
                "label": "Filtering for Removal of Artifacts",
                "url": "https://drive.google.com/file/d/1OxgJ-GPJZ-9Kag_b1wVwYnv86XcZ6Cbd/preview"
              }
            ]
          },
          {
            "name": "Cardiological Signal Processing",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Event Detection, Waveform Analysis, Frequency-domain Analysis and Adaptive Noise Cancelling of ECG",
                "url": "https://drive.google.com/file/d/1cArihtsGju6FjmYE5TKTc_RXg5IZSeGX/preview"
              }
            ]
          },
          {
            "name": "Neurological Signal Processing",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Neurological Signal Processing",
                "url": "https://drive.google.com/file/d/1fr6wBOVBQ2FoRRl_3PPDXCxflaQwJvp0/preview"
              }
            ],
            "notes": [],
            "resources": []
          },
          {
            "name": "Detection of Evoked Potentials",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Detection of Evoked Potentials",
                "url": "https://drive.google.com/file/d/1P2ODe147KrRJy4AKLOvMK0E23zeOAboV/preview"
              }
            ],
            "notes": [],
            "resources": []
          }
        ],
        "teacherRole": "Lecturer, Dept. of Biomedical Engineering, Islamic University, Kushtia",
        "books": [
          {
            "url": "https://drive.google.com/file/d/1kEcWj4WpkaTYmpgEgOFHYe0q3dwRnZqE/preview",
            "title": "Biomedical Signal Analysis",
            "label": "📘 Course Book – Biomedical Signal Analysis"
          }
        ],
        "guestRole": "",
        "guestDept": ""
      },
      {
        "num": "3105",
        "prefix": "ICT",
        "title": "Networking and Information System in Medicine",
        "teacher": "Dr. Md. Khairul Islam",
        "chapters": 5,
        "desc": "This is the third course of the Third Year, First Semester of BME-6, IU",
        "teacherPhoto": "images/dr-khairul-islam.jpg",
        "driveFolder": "https://drive.google.com/drive/folders/1sifbDENW9HmTyFUqpvLjCRNVK5lKxayH?usp=drive_link",
        "teacherType": "dept",
        "chapterData": [
          {
            "name": "Introduction",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Standards Protocols and OSI Model",
                "url": "https://drive.google.com/file/d/16LyP_K_GFkAGj6JNemMxw72iSgyxFnWB/preview"
              }
            ]
          },
          {
            "name": "Network Model",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "OSI vs TCP/IP",
                "url": "https://drive.google.com/file/d/15-JwKJjF1E1WubM5trU0VJQVS5F-LdfH/preview"
              },
              {
                "num": "Lecture 2",
                "label": "7 layes of OSI model",
                "url": "https://drive.google.com/file/d/1tS7CWXR63OMmrMOOr2u6yvALu3uu0sLw/preview"
              }
            ]
          },
          {
            "name": "Networking Technology",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Introduction to SONET and SDH",
                "url": "https://drive.google.com/file/d/14NdqE7Dfp-DvqH0H2Xo9XogizLhHsFis/preview"
              },
              {
                "num": "Lecture 2",
                "label": "ATM Asynchronous Transfer Mode",
                "url": "https://drive.google.com/file/d/1oD5owf99MymEvmbR1W-wCPHC_ZRL9eFT/preview"
              }
            ],
            "notes": [],
            "resources": []
          },
          {
            "name": "Network Security",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Security Services and Mechanisms",
                "url": "https://drive.google.com/file/d/1tCx459hSi3PAf1ouf3_rnudQTNlaaPfE/preview"
              }
            ],
            "notes": [],
            "resources": []
          },
          {
            "name": "Information Systems in Medicine",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Network and Healthcare Data Security",
                "url": "https://drive.google.com/file/d/1mwwEoyLlxm1H0e91OuDvyxkj8fwEo0u9/preview"
              }
            ],
            "notes": [],
            "resources": [],
            "chNum": "Chapter 6"
          }
        ],
        "teacherRole": "Chairman, Associate Professor, Dept. of Biomedical Engineering, Islamic University, Kushtia",
        "books": [
          {
            "url": "https://drive.google.com/file/d/1FoVxhEDdO8Sysws6fAeVMZXTorpFmdxl/preview",
            "title": "Data Communications and Networking 5E – Forouzan",
            "label": "📘 Course Book – Data Communications and Networking 5E – Forouzan"
          }
        ],
        "guestRole": "",
        "guestDept": ""
      },
      {
        "num": "3107",
        "prefix": "BME",
        "title": "Transducer and Sensors for Medical Applications",
        "teacher": "Md. Abu Sayed",
        "chapters": 6,
        "desc": "This is the fourth course of the Third Year, First Semester of BME-6, IU",
        "teacherPhoto": "images/md-abu-sayed.jpg",
        "driveFolder": "https://drive.google.com/drive/folders/1xh41BM2I-u8tIpx3bxyyTP8Pm34Da_7V?usp=drive_link",
        "teacherType": "dept",
        "chapterData": [
          {
            "name": "Introduction",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Introduction",
                "url": "https://drive.google.com/file/d/1ZIMlE79ZjRx_qI_4E8CAWN-SycIi1gux/preview"
              }
            ]
          },
          {
            "name": "Displacement, Motion, and Pressure Measurement",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Displacement, Motion, and Pressure Measurement",
                "url": "https://drive.google.com/file/d/1Disepif1jpqZJgT4wgKKCqI1_KQa2_81/preview"
              }
            ]
          },
          {
            "name": "Temperature Measurement",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Temperature Measurement",
                "url": "https://drive.google.com/file/d/1uRbMpz6G7lkZPwWer1YhZMnUnamBF4ma/preview"
              }
            ]
          },
          {
            "name": "Chemical Sensors",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Chemical Sensors",
                "url": "https://drive.google.com/file/d/1L6gXur0EKc5Kg4XS7dn8Ew-s8z0Jq-NQ/preview"
              }
            ]
          },
          {
            "name": "Fiber Optic Sensors",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Fiber Optic Sensors",
                "url": "https://drive.google.com/file/d/16YYmdEZUofQUNtXmwkHz5vP4H20I1h-j/preview"
              }
            ]
          },
          {
            "name": "Biosensor",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Biosensor",
                "url": "https://drive.google.com/file/d/14iKa1G3uQL6rafTJ1SGrOYB9TEvRKxW9/preview"
              }
            ],
            "notes": [],
            "resources": []
          }
        ],
        "teacherRole": "Lecturer, Dept. of Biomedical Engineering, Islamic University, Kushtia",
        "books": [],
        "guestRole": "",
        "guestDept": ""
      },
      {
        "num": "3109",
        "prefix": "BME",
        "title": "Physiological Control Systems",
        "teacher": "Sathi Rahman",
        "chapters": 7,
        "desc": "This is the fifth course of the Third Year, First Semester of BME-6, IU",
        "teacherPhoto": "images/sathi-rahman.jpeg",
        "driveFolder": "https://drive.google.com/drive/folders/1oO5exilSVw2e3Mh6OlydeNmMKCJJAGwK?usp=drive_link",
        "teacherType": "dept",
        "chapterData": [
          {
            "name": "Introduction to physiological modelling",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Introduction to physiological modelling",
                "url": "https://drive.google.com/file/d/1F6E-lZb_ey4TKP1IobPqRnR306v__BUm/preview"
              },
              {
                "num": "Lecture 2",
                "label": "Fundamentals of Physiological Systems & Bio-modelling",
                "url": "https://drive.google.com/file/d/1KNVXKmlTmRUdkS0t_phc1Bs-Xtgief3Y/preview"
              }
            ]
          },
          {
            "name": "Tools for Modeling Physical Systems",
            "lectures": [],
            "notes": [],
            "resources": [
              {
                "label": "📘 Course Book – Physiological Control Systems",
                "url": "https://drive.google.com/file/d/1vL_sWgjMSczxLsl_DcFCtflHTiWzdY0a/preview"
              }
            ]
          },
          {
            "name": "Physiology of Cardiovascular Systems",
            "lectures": [],
            "notes": [],
            "resources": [
              {
                "label": "📘 Course Book – TEXTBOOK OF MEDICAL PHYSIOLOGY",
                "url": "https://drive.google.com/file/d/1u974oEEPcw_-tW-nGwyV2keLV38Ds9v1/preview"
              },
              {
                "label": "📘 Course Book – Physiological Control Systems (FOR HEART MODEL PART)",
                "url": "https://drive.google.com/file/d/1vL_sWgjMSczxLsl_DcFCtflHTiWzdY0a/preview"
              }
            ]
          },
          {
            "name": "Physiology of Endocrine System",
            "lectures": [],
            "notes": [],
            "resources": [
              {
                "label": "📘 Course Book – TEXTBOOK OF MEDICAL PHYSIOLOGY (FOR HORMONE PART)",
                "url": "https://drive.google.com/file/d/1u974oEEPcw_-tW-nGwyV2keLV38Ds9v1/preview"
              },
              {
                "label": "📘 Course Book – Lehninger Principles of Biochemistry (FOR ENZYME PART)",
                "url": "https://drive.google.com/file/d/1oGN9uPjmgJG_AB970PypLVJxaAKBirFm/preview"
              }
            ]
          },
          {
            "name": "Physiology of Nervous System",
            "lectures": [
              {
                "num": "Lecture 1",
                "label": "Nervous System & Electrophysiology (Action Potential)",
                "url": "https://drive.google.com/file/d/1tw9PBmdATYtnpCY0_KG67yVhAPIdV0Iz/preview"
              }
            ],
            "chNum": "Chapter 5",
            "resources": [
              {
                "label": "📘 Course Book – Medical Biophysics with Practical Course",
                "url": "https://drive.google.com/file/d/1RvSqlybmR0sLldCVYFNU9UHzL-PqbVZY/preview"
              }
            ]
          },
          {
            "name": "Physiology of Respiratory System",
            "lectures": [],
            "notes": [],
            "resources": [
              {
                "label": "📘 Course Book – Medical Biophysics with Practical Course",
                "url": "https://drive.google.com/file/d/1RvSqlybmR0sLldCVYFNU9UHzL-PqbVZY/preview"
              }
            ]
          },
          {
            "name": "Physiology of Musculoskeletal System",
            "lectures": [],
            "notes": [],
            "resources": [
              {
                "label": "📘 Course Book – Biomechanics of Skeletal Muscles",
                "url": "https://drive.google.com/file/d/1iASyo6lM0pMiktWG-bnRNOffxgZyvsCB/preview"
              }
            ]
          }
        ],
        "teacherRole": "Lecturer, Dept. of Biomedical Engineering, Islamic University, Kushtia",
        "books": [
          {
            "title": "Physiological Control Systems",
            "label": "📘 Course Book – Physiological Control Systems",
            "url": "https://drive.google.com/file/d/1vL_sWgjMSczxLsl_DcFCtflHTiWzdY0a/preview"
          },
          {
            "title": "Lehninger Principles of Biochemistry",
            "label": "📘 Course Book – Lehninger Principles of Biochemistry",
            "url": "https://drive.google.com/file/d/1oGN9uPjmgJG_AB970PypLVJxaAKBirFm/preview"
          },
          {
            "title": "TEXTBOOK OF MEDICAL PHYSIOLOGY",
            "label": "📘 Course Book – TEXTBOOK OF MEDICAL PHYSIOLOGY",
            "url": "https://drive.google.com/file/d/1u974oEEPcw_-tW-nGwyV2keLV38Ds9v1/preview"
          },
          {
            "title": "Biomechanics of Skeletal Muscles",
            "label": "📘 Course Book – Biomechanics of Skeletal Muscles",
            "url": "https://drive.google.com/file/d/1iASyo6lM0pMiktWG-bnRNOffxgZyvsCB/preview"
          },
          {
            "title": "Medical Biophysics with Practical Course",
            "label": "📘 Course Book – Medical Biophysics with Practical Course",
            "url": "https://drive.google.com/file/d/1RvSqlybmR0sLldCVYFNU9UHzL-PqbVZY/preview"
          }
        ],
        "guestRole": "",
        "guestDept": ""
      }
    ]
  },
  {
    "id": "bme32",
    "short": "BME 3.2",
    "icon": "🔬",
    "label": "BME 3rd Year — 2nd Semester",
    "qId": "q-bme32",
    "courses": [
      {
        "num": "3201",
        "prefix": "BME",
        "title": "Medical Imaging",
        "teacher": "",
        "teacherType": "dept",
        "chapters": 0,
        "desc": "This is the first course of the Third Year, Second Semester of BME-6, IU",
        "driveFolder": "",
        "teacherAbout": "",
        "icon": "📖",
        "books": [],
        "chapterData": [],
        "guestRole": "",
        "guestDept": ""
      },
      {
        "num": "3203",
        "prefix": "BME",
        "title": "Embedded System",
        "teacher": "",
        "teacherType": "dept",
        "chapters": 0,
        "desc": "This is the second course of the Third Year, Second Semester of BME-6, IU",
        "driveFolder": "",
        "teacherAbout": "",
        "icon": "📖",
        "books": [],
        "chapterData": [],
        "guestRole": "",
        "guestDept": ""
      },
      {
        "num": "3205",
        "prefix": "BME",
        "title": "Rehabilitation Engineering",
        "teacher": "",
        "teacherType": "dept",
        "chapters": 0,
        "desc": "This is the third course of the Third Year, Second Semester of BME-6, IU",
        "driveFolder": "",
        "teacherAbout": "",
        "icon": "📖",
        "books": [],
        "chapterData": [],
        "guestRole": "",
        "guestDept": ""
      },
      {
        "num": "3207",
        "prefix": "BIO",
        "title": "Brain and Cognitive Systems",
        "teacher": "",
        "teacherType": "dept",
        "chapters": 0,
        "desc": "This is the fourth course of the Third Year, Second Semester of BME-6, IU",
        "driveFolder": "",
        "teacherAbout": "",
        "icon": "📖",
        "books": [],
        "chapterData": [],
        "guestRole": "",
        "guestDept": ""
      },
      {
        "num": "3209",
        "prefix": "BME",
        "title": "Telemedicine Systems",
        "teacher": "",
        "teacherType": "dept",
        "chapters": 0,
        "desc": "This is the fifth course of the Third Year, Second Semester of BME-6, IU",
        "driveFolder": "",
        "teacherAbout": "",
        "icon": "📖",
        "books": [],
        "chapterData": [],
        "guestRole": "",
        "guestDept": ""
      }
    ]
  }
];

const QUESTIONS_DATA = [
  {
    "semId": "q-bme11",
    "semLabel": "BME 1.1",
    "yearLabel": "1st Year, 1st Semester",
    "tutorial": [
      {
        "title": "Tutorial Questions 2022-23",
        "sub": "1st Year, 1st Semester · 6th Batch",
        "url": "https://drive.google.com/file/d/1ESQl8R7zy2POuthP8oBbF0-ah2fQ8162/preview"
      }
    ],
    "final": [
      {
        "title": "Previous Years Questions (Before 2022-23)",
        "sub": "1st Year, 1st Semester — all previous batches",
        "url": "https://drive.google.com/file/d/1cW_oi-8dnaaNqaW0HfGBz5HtVnjUfZVB/preview"
      },
      {
        "title": "2022-23 Semester Final Questions",
        "sub": "1st Year, 1st Semester — 6th Batch",
        "url": "https://drive.google.com/file/d/1rnzqhC-k8xRk6FMEJUeC5W_VDhV9qZwg/preview"
      }
    ]
  },
  {
    "semId": "q-bme12",
    "semLabel": "BME 1.2",
    "yearLabel": "1st Year, 2nd Semester",
    "tutorial": [
      {
        "title": "Tutorial Questions 2022-23",
        "sub": "1st Year, 2nd Semester · 6th Batch",
        "url": "https://drive.google.com/file/d/1VWud1CvM7QavMRJ0SFmaUWxvc9pRi5ya/preview"
      },
      {
        "title": "Tutorial Questions 2021-22",
        "sub": "1st Year, 2nd Semester · 5th Batch",
        "url": "https://drive.google.com/file/d/1nTIL4GF7hVabs7Of0N_MJlp-pylO8QVR/preview"
      }
    ],
    "final": [
      {
        "title": "Previous Years Questions (Before 2022-23)",
        "sub": "1st Year, 2nd Semester",
        "url": "https://drive.google.com/file/d/1javZ2IiMVvE4CrXocnJ_uOTb-DHPd-19/preview"
      },
      {
        "title": "2022-23 Semester Final Questions",
        "sub": "1st Year, 2nd Semester — 6th Batch",
        "url": "https://drive.google.com/file/d/1vojQT98wJHmbtljGuebiD_2UnoO2VkiJ/preview"
      }
    ]
  },
  {
    "semId": "q-bme21",
    "semLabel": "BME 2.1",
    "yearLabel": "2nd Year, 1st Semester",
    "tutorial": [
      {
        "title": "Tutorial Questions 2022-23",
        "sub": "2nd Year, 1st Semester · 6th Batch",
        "url": "https://drive.google.com/file/d/15zWhVvV7WOJWPWY3vQuHmmxz8mdJEUim/preview"
      },
      {
        "title": "Tutorial Questions 2021-22",
        "sub": "2nd Year, 1st Semester · 5th Batch",
        "url": "https://drive.google.com/file/d/12t54t1U_cxCs18yPgXw1yb9dqIWJhCkv/preview"
      }
    ],
    "final": [
      {
        "title": "Previous Years Questions (Before 2022-23)",
        "sub": "2nd Year, 1st Semester",
        "url": "https://drive.google.com/file/d/14j5U8ppEYhxkLvve9jD8EuBV3_VtnLL3/preview"
      },
      {
        "title": "2022-23 Semester Final Questions",
        "sub": "2nd Year, 1st Semester — 6th Batch",
        "url": "https://drive.google.com/file/d/1NqMNqHLtYUkmIcjhG3NHulgxnSWyQSzG/preview"
      }
    ]
  },
  {
    "semId": "q-bme22",
    "semLabel": "BME 2.2",
    "yearLabel": "2nd Year, 2nd Semester",
    "tutorial": [
      {
        "title": "Tutorial Questions 2022-23",
        "sub": "2nd Year, 2nd Semester · 6th Batch",
        "url": "https://drive.google.com/file/d/12LV92l3_fXhFFwXWyonDYrY1FJthST0k/preview"
      },
      {
        "title": "Tutorial Questions 2021-22",
        "sub": "2nd Year, 2nd Semester · 5th Batch",
        "url": "https://drive.google.com/file/d/1MXFYmLo-V09PNpxh5_iRAogsn-yOTfin/preview"
      }
    ],
    "final": [
      {
        "title": "Previous Years Questions (Before 2022-23)",
        "sub": "2nd Year, 2nd Semester",
        "url": "https://drive.google.com/file/d/1DWSKgA5IXWc4K8_-vKQRjmRmRKBK1nK-/preview"
      },
      {
        "title": "2022-23 Semester Final Questions",
        "sub": "2nd Year, 2nd Semester — 6th Batch",
        "url": "https://drive.google.com/file/d/1eAjsd2uIGcflQzaZJCvAAajj3oTC2NEd/preview"
      }
    ]
  },
  {
    "semId": "q-bme31",
    "semLabel": "BME 3.1",
    "yearLabel": "3rd Year, 1st Semester",
    "tutorial": [
      {
        "title": "Tutorial Questions 2022-23",
        "sub": "3rd Year, 1st Semester · 6th Batch",
        "url": "https://drive.google.com/file/d/1ioM4GHtY4Ce9OaewdBSkOigENpv0Nk9e/preview"
      },
      {
        "title": "Tutorial Questions 2021-22",
        "sub": "3rd Year, 1st Semester · 5th Batch",
        "url": "https://drive.google.com/file/d/1HaF781_sxsChdWR2wjtNNaVMThODDqbT/preview"
      }
    ],
    "final": [
      {
        "title": "Previous Years Questions (Before 2022-23)",
        "sub": "3rd Year, 1st Semester",
        "url": "https://drive.google.com/file/d/1mLXxHvMAbnugQPM1pMwH5W-Yn6WgnRdF/preview"
      }
    ]
  },
  {
    "semId": "q-bme32",
    "semLabel": "BME 3.2",
    "yearLabel": "3rd Year, 2nd Semester",
    "tutorial": [],
    "final": []
  }
];

const RETAKE_QUESTIONS = [{"title":"First Year (1st Semester & 2nd Semester)","sub":"Retake Examination Questions","url":"https://drive.google.com/file/d/1hQxbnnRP-1inDlDIACcdCv8b4v1QUSF2/preview"},{"title":"Second Year (1st Semester & 2nd Semester)","sub":"Retake Examination Questions","url":"https://drive.google.com/file/d/1qAdV_5Bg4B6IYSJlmviUdn4QWAeB4gY9/preview"}];

const GALLERY_DATA = [{"src":"images/gallery/gp1.jpg","caption":"First Group Photo 2023"},{"src":"images/gallery/gp2.jpg","caption":"At Kushtia 2023"},{"src":"images/gallery/gp3.jpg","caption":"Shadhin's Birthday 2023"},{"src":"images/gallery/gp4.jpg","caption":"Rabindra Kuthibari 2023"},{"src":"images/gallery/gp5.jpg","caption":"Uzzal Mess 2023"},{"src":"images/gallery/gp6.jpg","caption":"First Jersey 2023"},{"src":"images/gallery/gp7.jpg","caption":"Cha Adda 2023"},{"src":"images/gallery/gp8.jpg","caption":"After 1st Semester 2024"},{"src":"images/gallery/gp9.jpg","caption":"After 1st Semester 2024"},{"src":"images/gallery/gp10.jpg","caption":"After 1st Semester 2024"},{"src":"images/gallery/gp11.jpg","caption":"Pharma Garden IU 2024"},{"src":"images/gallery/gp12.jpg","caption":"Arif Sir's Last Class 2024"},{"src":"images/gallery/gp13.jpg","caption":"Humayun Sir's Last Class 2024"},{"src":"images/gallery/gp14.jpg","caption":"Batch Picnic 2024"},{"src":"images/gallery/gp15.jpg","caption":"Batch Picnic 2024"},{"src":"images/gallery/gp16.jpg","caption":"Batch Picnic 2024"},{"src":"images/gallery/gp17.jpg","caption":"Arif Sir's Last Class 2024"},{"src":"images/gallery/gp18.jpg","caption":"After 1st Year 2025"},{"src":"images/gallery/gp19.jpg","caption":"After 1st Year 2025"},{"src":"images/gallery/gp20.jpg","caption":"After 1st Year 2025"},{"src":"images/gallery/gp21.jpg","caption":"Moudud Sir's Last Class 2025"},{"src":"images/gallery/gp22.jpg","caption":"Arif Sir's Last Class 2025"},{"src":"images/gallery/gp23.jpg","caption":"Sayed Sir's Last Class 2026"},{"src":"images/gallery/gp24.jpeg","caption":"Sathi Mam's Presentation 2026"},{"src":"images/gallery/gp25.jpeg","caption":"Afiya Ma'am's Last Class 2026"}];

// ── SLIDESHOW ENGINE ──────────────────────────
var _slideIdx = 0, _slidePaused = false, _slideTimer = null;
var SLIDE_INTERVAL = 1500;

var _ANIMS = ['fade','slide-left','slide-right','zoom-in','zoom-out','flip-x'];
var _animIdx = 0;

function getSlides(){ return document.querySelectorAll('.slideshow-slide'); }

function goToSlide(n){
  var s = getSlides();
  if (!s.length) return;
  var prev = _slideIdx;
  _slideIdx = ((n % s.length) + s.length) % s.length;
  if (prev === _slideIdx) return;

  var anim = _ANIMS[_animIdx % _ANIMS.length];
  _animIdx++;

  // remove active from all
  s.forEach(function(sl){ sl.classList.remove('active','ss-exit'); sl.removeAttribute('data-anim'); });

  var leaving = s[prev];
  var entering = s[_slideIdx];

  leaving.setAttribute('data-anim', anim);
  leaving.classList.add('ss-exit');
  entering.setAttribute('data-anim', anim);
  entering.classList.add('active');

  setTimeout(function(){ leaving.classList.remove('ss-exit'); leaving.removeAttribute('data-anim'); }, 650);

  document.querySelectorAll('.slideshow-dot').forEach(function(d,i){ d.classList.toggle('active', i===_slideIdx); });
  updateSlideCounter();
}

function slideshowNext(){ goToSlide(_slideIdx+1); }
function slideshowPrev(){ goToSlide(_slideIdx-1); }
function updateSlideCounter(){ var el=document.getElementById('slideCounter'); var s=getSlides(); if(el&&s.length) el.textContent=(_slideIdx+1)+' / '+s.length; }
function startAutoplay(){ clearInterval(_slideTimer); if(!_slidePaused) _slideTimer=setInterval(slideshowNext,SLIDE_INTERVAL); }
function togglePause(){
  _slidePaused=!_slidePaused;
  var btn=document.getElementById('pauseBtn');
  if(_slidePaused){ clearInterval(_slideTimer); if(btn)btn.innerHTML='&#9654; Play'; }
  else { startAutoplay(); if(btn)btn.innerHTML='&#9208; Pause'; }
}
(function(){
  var sw=document.getElementById('gallerySlideshow');
  if(sw){
    sw.addEventListener('click',function(e){ if(!e.target.closest('button')) togglePause(); });
  }
})();
function openGallery(src,cap){ document.getElementById('galleryLightboxImg').src=src; document.getElementById('galleryLightboxCap').textContent=cap||''; document.getElementById('galleryLightbox').classList.add('open'); document.body.style.overflow='hidden'; }

// ══ AUTO-RENDER ═══════════════════════════════════════════════════
(function () {if(window.BME_MPA){try{updateSlideCounter();startAutoplay();}catch(e){}return;}
  var cur = CURRENT_SEM_ID;
  if (!SEMESTERS.some(function(s){ return s.id === cur; })) console.warn('[AUTO-RENDER] CURRENT_SEM_ID "' + cur + '" matches no semester id in SEMESTERS');

  // nav() helper: returns onclick attribute string safely
  function nav(page) { return "navigate('" + page + "')"; }
  function navClose(page) { return "navigate('" + page + "');closeMobileMenu()"; }

  // qcard helper
  function qcard(icon, title, sub, url) {
    return '<div class="qcard"><div class="qcard-icon">' + icon + '</div>' +
      '<div class="qcard-info"><div class="qcard-title">' + title + '</div><div class="qcard-sub">' + sub + '</div></div>' +
      '<button class="view-btn" onclick="openDoc(\'' + url + '\',\'' + title.replace(/'/g,'&#39;') + '\')">📄 View</button></div>';
  }

  var totalCourses = 0;
  SEMESTERS.forEach(function(s){ totalCourses += s.courses.length; });

  try {
  // 1. Homepage stats
  var sc = document.getElementById('statCourses');
  var ss = document.getElementById('statSemesters');
  if (sc) sc.textContent = totalCourses;
  if (ss) ss.textContent = SEMESTERS.length;
  } catch (err) { console.error('[AUTO-RENDER] step 1 stats failed:', err); }

  try {
  // 2. Nav courses dropdown
  var navDrop = document.querySelector('.nav-dropdown-menu[data-nav="courses"]');
  if (navDrop) {
    var nd = '';
    SEMESTERS.forEach(function(sem) {
      var isCur = sem.id === cur;
      var bs = isCur ? ' style="background:rgba(0,255,157,0.08);color:var(--accent2);"' : '';
      var as = isCur ? ' style="color:var(--accent2);"' : '';
      var lbl = sem.label + (isCur ? ' (Running)' : '');
      nd += '<div class="nav-sem-group"><button class="nav-sem-btn" onclick="toggleNavSem(this)"' + bs + '>';
      nd += sem.icon + ' ' + lbl + ' <span class="nsb-arrow"' + as + '>&#9660;</span></button>';
      nd += '<div class="nav-sem-courses">';
      sem.courses.forEach(function(c){ nd += '<button class="dropdown-item" onclick="' + nav('course-'+c.num) + '">' + c.num + ' - ' + c.title + '</button>'; });
      nd += '</div></div>';
    });
    navDrop.innerHTML = nd;
  }
  } catch (err) { console.error('[AUTO-RENDER] step 2 nav courses failed:', err); }

  try {
  // 3. Nav questions dropdown
  var navQDrop = document.querySelector('.nav-dropdown-menu[data-nav="questions"]');
  if (navQDrop) {
    var nq = '';
    SEMESTERS.forEach(function(sem){ nq += '<button class="dropdown-item" onclick="' + nav(sem.qId) + '">' + sem.short + ' Questions</button>'; });
    nq += '<button class="dropdown-item" onclick="' + nav('q-retake') + '">Retake Exams Questions</button>';
    navQDrop.innerHTML = nq;
  }
  } catch (err) { console.error('[AUTO-RENDER] step 3 nav questions failed:', err); }

  try {
  // 4. Mobile courses menu
  var mobLabel = document.querySelector('#mobileMenu .mob-courses-label');
  if (mobLabel) {
    var wrap = mobLabel.parentElement;
    wrap.querySelectorAll('.mob-sem-group').forEach(function(g){ g.remove(); });
    SEMESTERS.forEach(function(sem) {
      var isCur = sem.id === cur;
      var div = document.createElement('div');
      div.className = 'mob-sem-group';
      var bs = isCur ? ' style="background:rgba(0,255,157,0.08);color:var(--accent2);"' : '';
      var items = '';
      sem.courses.forEach(function(c){ items += '<div class="mobile-link" onclick="' + navClose('course-'+c.num) + '">' + c.num + ' - ' + c.title + '</div>'; });
      div.innerHTML = '<button class="mob-sem-btn" onclick="toggleMobSem(this)"' + bs + '>' +
        sem.icon + ' ' + sem.short + ' \u2014 ' + sem.label.replace('BME ','') + (isCur?' (Running)':'') + ' <span class="msb-arrow">&#9660;</span></button>' +
        '<div class="mob-sem-courses">' + items + '</div>';
      wrap.appendChild(div);
    });
  }
  } catch (err) { console.error('[AUTO-RENDER] step 4 mobile courses failed:', err); }

  try {
  // 5. Mobile questions menu
  var mobQC = document.querySelector('#mobileMenu .mob-q-courses');
  if (mobQC) {
    var mq = '';
    SEMESTERS.forEach(function(sem){ mq += '<div class="mobile-link" onclick="' + navClose(sem.qId) + '">' + sem.short + ' Questions</div>'; });
    mq += '<div class="mobile-link" onclick="' + navClose('q-retake') + '">Retake Exams Questions</div>';
    mobQC.innerHTML = mq;
  }
  } catch (err) { console.error('[AUTO-RENDER] step 5 mobile questions failed:', err); }

  try {
  // 6. Courses overview
  var ovSec = document.querySelector('#page-courses-overview .section');
  if (ovSec) {
    var ov = '';
    SEMESTERS.forEach(function(sem) {
      var isCur = sem.id === cur;
      var hc = isCur ? ' running' : '';
      var lbl = sem.label + (isCur ? ' (Running)' : '');
      ov += '<div class="sem-acc-block' + (isCur ? ' open' : '') + '">';
      ov += '<div class="sem-acc-header' + hc + '" onclick="toggleSem(this)"><span>' + sem.icon + '</span><span class="sem-acc-title">' + lbl + '</span><span class="sem-acc-chevron">&#9660;</span></div>';
      ov += '<div class="sem-acc-body"><div class="card-grid">';
      sem.courses.forEach(function(c){
        var meta = [c.teacher, c.chapters ? c.chapters + (c.chapters !== 1 ? ' Chapters' : ' Chapter') : ''].filter(Boolean).join(' \u00b7 ');
        ov += '<div class="card" onclick="' + nav('course-'+c.num) + '"><div class="card-code">' + c.prefix + '-' + c.num + '</div><div class="card-title">' + c.title + '</div><div class="card-meta">' + meta + '</div><div class="card-arrow">\u2192</div></div>';
      });
      ov += '</div></div></div>';
    });
    ovSec.innerHTML = ov;
  }
  } catch (err) { console.error('[AUTO-RENDER] step 6 courses overview failed:', err); }

  // Helper: rebuild .course-teacher-info inside a course page from latest course data
  // Works for both pre-existing static pages and dynamically created ones.
  // Helper: rebuild book buttons from SEMESTERS data
  function updateCourseBooks(page, c) {
    if(!page) return;
    var hero=page.querySelector('.course-hero-inner');
    if(!hero)return;
    // Always remove ALL existing book containers to prevent duplication
    hero.querySelectorAll('.course-books-container').forEach(function(el){el.remove();});
    // Also remove any legacy book anchors/buttons left in static HTML
    hero.querySelectorAll('a[href*="drive.google.com/file"]').forEach(function(a){
      if(a.textContent.indexOf('About')===-1){
        var wrap=a.parentElement;
        if(wrap&&wrap!==hero)wrap.remove(); else a.remove();
      }
    });
    if(!c.books||!c.books.length) return;
    // Build fresh book buttons
    var div=document.createElement('div');
    div.className='course-books-container';
    div.style.marginTop='16px';
    c.books.forEach(function(b){
      if(!b.url||!b.title)return;
      var btn=document.createElement('button');
      btn.className='btn btn-ghost';
      btn.style.marginRight='8px';
      btn.style.marginBottom='6px';
      btn.textContent=(b.label||('📘 '+b.title));
      btn.setAttribute('onclick','openDoc('+JSON.stringify(b.url)+','+JSON.stringify(b.title)+')');
      div.appendChild(btn);
    });
    if(div.children.length>0){
      var insertAfter=hero.querySelector('.course-teacher-info')||hero.querySelector('h2.course-title');
      if(insertAfter&&insertAfter.nextSibling){hero.insertBefore(div,insertAfter.nextSibling);}
      else{hero.appendChild(div);}
    }
  }

  function updateCourseTeacherInfo(page, c) {
    if (!page || !c.teacher) return;
    var hero = page.querySelector('.course-hero-inner');
    if (!hero) return;
    var ph = c.teacherPhoto || '';
    var rl = c.teacherRole || (c.guestRole ? c.guestRole + (c.guestDept ? ', ' + c.guestDept : '') : '');
    var ab = c.teacherAbout || '';
    var imgTag = ph ? '<img src="' + ph + '" style="width:44px;height:44px;border-radius:50%;object-fit:cover;border:2px solid var(--border);flex-shrink:0;" onerror="this.style.display=\'none\'" alt="' + c.teacher + '">' : '<div class="teacher-avatar">👨\u200d🏫</div>';
    var roleLine = rl ? '<div style="font-size:0.78rem;color:var(--text-muted);">' + rl + (ab ? ' · <a href="' + ab + '" target="_blank" style="color:var(--accent);">About ↗</a>' : '') + '</div>' : (ab ? '<div style="font-size:0.78rem;"><a href="' + ab + '" target="_blank" style="color:var(--accent);">About ↗</a></div>' : '');
    var newHtml = imgTag + '<div><div style="font-weight:600;color:var(--text)">' + c.teacher + '</div>' + roleLine + '</div>';
    var existing = hero.querySelector('.course-teacher-info');
    if (existing) {
      existing.innerHTML = newHtml;
    } else {
      var div = document.createElement('div');
      div.className = 'course-teacher-info';
      div.innerHTML = newHtml;
      // Insert after the description <p> if present, else after the <h2> title
      var descEl = hero.querySelector('h2.course-title');
      if (descEl && descEl.nextElementSibling && descEl.nextElementSibling.tagName === 'P') {
        descEl.nextElementSibling.insertAdjacentElement('afterend', div);
      } else if (descEl) {
        descEl.insertAdjacentElement('afterend', div);
      } else {
        hero.appendChild(div);
      }
    }
  }

  try {
  // 6b. Auto-inject chapters & lectures from SEMESTERS chapterData
  // If a course has chapterData array, inject them into the existing course page.
  // If the page doesn't exist at all, create it dynamically.
  SEMESTERS.forEach(function(sem) {
    var isCur = sem.id === cur;
    sem.courses.forEach(function(c) { try {
      var pageId = 'page-course-' + c.num;
      var page = document.getElementById(pageId);

      // If page doesn't exist, create it
      if (!page) {
        page = document.createElement('div');
        page.className = 'page';
        page.id = pageId;
        page.innerHTML =
          '<div class="course-hero"><div class="course-hero-inner">' +
          '<div class="course-crumb"><button onclick="' + nav('courses-overview') + '">Courses</button> / ' + sem.short + ' / <span style="color:var(--text-muted)">' + c.prefix + '-' + c.num + '</span></div>' +
          '<div class="course-badge">' + c.prefix + '-' + c.num + ' · ' + sem.label.replace('BME ','') + '</div>' +
          '<h2 class="course-title">' + c.title + '</h2>' +
          (c.desc ? '<p style="color:var(--text-muted);font-size:0.88rem;margin:8px 0 4px;">' + c.desc + '</p>' : '') +
          (c.teacher ? (function() {
            var ph = c.teacherPhoto || '';
            var rl = c.teacherRole || (c.guestRole ? c.guestRole + (c.guestDept ? ', ' + c.guestDept : '') : '');
            var ab = c.teacherAbout || '';
            var imgTag = ph ? '<img src="' + ph + '" style="width:44px;height:44px;border-radius:50%;object-fit:cover;border:2px solid var(--border);flex-shrink:0;" onerror="this.style.display=\'none\'" alt="' + c.teacher + '">' : '<div class="teacher-avatar">👨‍🏫</div>';
            var roleLine = rl ? '<div style="font-size:0.78rem;color:var(--text-muted);">' + rl + (ab ? ' · <a href="' + ab + '" target="_blank" style="color:var(--accent);">About ↗</a>' : '') + '</div>' : (ab ? '<div style="font-size:0.78rem;"><a href="' + ab + '" target="_blank" style="color:var(--accent);">About ↗</a></div>' : '');
            return '<div class="course-teacher-info">' + imgTag + '<div><div style="font-weight:600;color:var(--text)">' + c.teacher + '</div>' + roleLine + '</div></div>';
          })() : '') +
          (c.driveFolder ? '<div style="margin-top:12px;"><a href="' + c.driveFolder + '" target="_blank" class="btn btn-ghost" style="font-size:0.78rem;padding:6px 12px;display:inline-flex;">📁 Download Full Folder</a></div>' : '') +
          '</div></div>' +
          '<div class="section"><div class="section-title" style="margin-bottom:24px;">Chapter-wise <span>Lectures</span></div><div class="chapters-container"></div></div>';
        var app = document.getElementById('app');
        if (app) app.appendChild(page);
      }

      // FIX: Update running badge on ALL pages (static + dynamic)
      if (page) {
        var oldBadge = page.querySelector('[data-run-badge]');
        if (oldBadge) oldBadge.remove();
        if (isCur) {
          var hero = page.querySelector('.course-hero-inner');
          if (hero) {
            var nb = document.createElement('div');
            nb.setAttribute('data-run-badge','1');
            nb.style.cssText = 'display:inline-flex;align-items:center;gap:6px;margin-top:12px;font-size:0.82rem;color:var(--accent2);';
            nb.innerHTML = '<span>🟢</span> Currently Running Semester';
            hero.appendChild(nb);
          }
        }
      }

      if (!c.chapterData || !c.chapterData.length) {
        // No chapters yet: keep page valid and show a placeholder (only if the page has no static chapters)
        if (page && !page.querySelector('.chapter-block')) {
          var _cc = page.querySelector('.chapters-container');
          if (!_cc) {
            var _sec = page.querySelector('.section');
            if (_sec) { _cc = document.createElement('div'); _cc.className = 'chapters-container'; _sec.appendChild(_cc); }
          }
          if (_cc && !_cc.children.length) {
            _cc.innerHTML = '<div style="padding:22px;border:1px dashed var(--border);border-radius:12px;color:var(--text-muted);font-size:0.88rem;text-align:center;">📚 Lectures will be added soon.</div>';
          }
        }
        updateCourseTeacherInfo(page, c);
        updateCourseBooks(page, c);
        return;
      }


      // Inject chapters into the page (replace existing if already injected)
      var container = page.querySelector('.chapters-container');
      if (!container) {
        // fallback: find .section and add container
        var sec = page.querySelector('.section');
        if (!sec) return;
        container = document.createElement('div');
        container.className = 'chapters-container';
        sec.appendChild(container);
      }
      var ch = '';
      c.chapterData.forEach(function(chap, ci) {
        var isFirst = ci === 0;
        var chapNum = chap.chNum || ('Chapter ' + (ci + 1));
        ch += '<div class="chapter-block' + (isFirst ? ' open' : '') + '">';
        ch += '<div class="chapter-header" onclick="toggleChapter(this)">';
        ch += '<span class="chapter-num">' + chapNum + '</span>';
        ch += '<span class="chapter-name">' + chap.name + '</span>';
        ch += '<span class="chapter-toggle">▼</span>';
        ch += '</div><div class="chapter-lectures">';
        // Lectures
        (chap.lectures || []).forEach(function(lec, li) {
          var lecNum = lec.num || ('Lecture ' + (li + 1));
          var lecLabel = lec.label || chap.name;
          var lecUrl = lec.url || '';
          var title = (c.prefix + '-' + c.num) + ' – ' + lecLabel;
          ch += '<div class="lecture-row">';
          ch += '<span class="lec-num">' + lecNum + '</span>';
          ch += '<span class="lec-label">' + lecLabel + '</span>';
          if (lecUrl) {
            ch += '<button class="view-btn" onclick="openDoc(\'' + lecUrl + '\',\'' + title.replace(/'/g, '&#39;') + '\')">📄 View</button>';
          } else {
            ch += '<span style="font-size:0.75rem;color:var(--text-dim);padding:6px 10px;">Coming soon</span>';
          }
          ch += '</div>';
        });
        // Notes
        if (chap.notes && chap.notes.length) {
          ch += '<div style="margin-top:8px;padding-top:8px;border-top:1px solid var(--border)">';
          ch += '<div style="font-size:0.72rem;font-weight:600;color:var(--accent2);margin-bottom:6px">📝 Notes</div>';
          chap.notes.forEach(function(n) {
            ch += '<div class="lecture-row">';
            ch += '<span class="lec-num" style="color:var(--accent2)">Note</span>';
            ch += '<span class="lec-label">' + (n.label||'Note') + '</span>';
            if (n.url) {
              var ntitle = (c.prefix+'-'+c.num)+' – '+(n.label||'Note');
              ch += '<button class="view-btn" style="background:rgba(0,255,157,0.12);color:var(--accent2)" onclick="openDoc(\'' + n.url + '\',\'' + ntitle.replace(/'/g,'&#39;') + '\')">📝 View</button>';
            }
            ch += '</div>';
          });
          ch += '</div>';
        }
        // Reference Books / Resources
        if (chap.resources && chap.resources.length) {
          ch += '<div style="margin-top:8px;padding-top:8px;border-top:1px solid var(--border)">';
          ch += '<div style="font-size:0.72rem;font-weight:600;color:var(--accent3,#ffd166);margin-bottom:6px">📖 Reference</div>';
          chap.resources.forEach(function(r) {
            ch += '<div class="lecture-row">';
            ch += '<span class="lec-num" style="color:var(--accent3,#ffd166)">Book</span>';
            ch += '<span class="lec-label">' + (r.label||'Resource') + '</span>';
            if (r.url) {
              var rtitle = (c.prefix+'-'+c.num)+' – '+(r.label||'Resource');
              ch += '<button class="view-btn" style="background:rgba(255,209,102,0.12);color:#ffd166" onclick="openDoc(\'' + r.url + '\',\'' + rtitle.replace(/'/g,'&#39;') + '\')">📖 View</button>';
            }
            ch += '</div>';
          });
          ch += '</div>';
        }
        ch += '</div></div>';
      });
      container.innerHTML = ch;
      updateCourseTeacherInfo(page, c);
      updateCourseBooks(page, c);
    } catch (err) { console.error('[AUTO-RENDER] course ' + c.num + ' failed:', err); }
    });
  });
  } catch (err) { console.error('[AUTO-RENDER] step 6b course pages failed:', err); }

  try {
  // 7. Questions overview page (create if missing)
  var qOvPage = document.getElementById('page-questions-overview');
  if (!qOvPage) {
    qOvPage = document.createElement('div');
    qOvPage.className = 'page';
    qOvPage.id = 'page-questions-overview';
    qOvPage.innerHTML = '<div class="page-top-banner"><div class="page-top-banner-inner"><h1>Exam <span>Questions</span></h1><p>Tutorial &amp; Semester Final Questions \u2014 All Semesters</p></div></div><div class="section" style="padding-top:36px;"></div>';
    var firstQ = document.getElementById('page-q-bme11');
    if (firstQ) firstQ.parentNode.insertBefore(qOvPage, firstQ);
  }
  var qOvSec = qOvPage.querySelector('.section');
  if (qOvSec) {
    var qov = '<div class="card-grid">';
    SEMESTERS.forEach(function(sem) {
      var isCur = sem.id === cur;
      var bs = isCur ? ' style="border-color:rgba(0,255,157,0.3);"' : '';
      var cs = isCur ? ' style="color:var(--accent2);"' : '';
      var meta = isCur ? '<div class="card-meta" style="color:var(--accent2);">Running Semester</div>' : '<div class="card-meta">Tutorial &amp; Semester Final Questions</div>';
      qov += '<div class="card" onclick="' + nav(sem.qId) + '"' + bs + '><div class="card-code"' + cs + '>' + sem.short + (isCur ? ' \ud83d\udfe2' : '') + '</div><div class="card-title">' + sem.label.replace('BME ','') + '</div>' + meta + '<div class="card-arrow">\u2192</div></div>';
    });
    qov += '<div class="card" onclick="' + nav('q-retake') + '"><div class="card-code">Retake</div><div class="card-title">Retake Exams</div><div class="card-meta">Previous Retake &amp; Improvement Papers</div><div class="card-arrow">\u2192</div></div>';
    qov += '</div>';
    qOvSec.innerHTML = qov;
  }
  } catch (err) { console.error('[AUTO-RENDER] step 7 questions overview failed:', err); }

  try {
  // 8. Question pages (fill content + back button)
  // FIX: map qId -> semester for running banner check
  var semQIdMap = {};
  SEMESTERS.forEach(function(sem) { semQIdMap[sem.qId || ('q-' + sem.id)] = sem; });

  // Every semester must have a questions page, even if QUESTIONS_DATA has no entry for it yet
  var _qList = QUESTIONS_DATA.slice();
  SEMESTERS.forEach(function(sem) {
    var qid = sem.qId || ('q-' + sem.id);
    if (!_qList.some(function(q){ return q.semId === qid; })) {
      var yr = sem.label ? sem.label.replace('BME ', '').replace(/\u2014/, ',') : '';
      _qList.push({ semId: qid, semLabel: sem.short, yearLabel: yr, tutorial: [], final: [] });
    }
  });

  _qList.forEach(function(q) {
    var page = document.getElementById('page-' + q.semId);
    if (!page) {
      page = document.createElement('div');
      page.className = 'page';
      page.id = 'page-' + q.semId;
      page.innerHTML = '<div class="page-top-banner"><div class="page-top-banner-inner"></div></div><div class="section" style="padding-top:36px;"></div>';
      var rp = document.getElementById('page-q-retake');
      if (rp) rp.parentNode.insertBefore(page, rp);
    }
    var bi = page.querySelector('.page-top-banner-inner');
    if (bi && !bi.querySelector('.course-crumb')) {
      bi.innerHTML = '<div class="course-crumb" style="margin-bottom:10px;"><button onclick="' + nav('questions-overview') + '">\u2190 All Questions</button></div>' +
        '<h1>Questions \u2014 <span>' + q.semLabel + '</span></h1><p>' + q.yearLabel + ' \u2014 Tutorial &amp; Semester Final Questions</p>';
    }
    var sec = page.querySelector('.section');
    if (!sec) return;
    var h = '';
    // FIX: show running banner only for the CURRENT running semester
    var matchedSem = semQIdMap[q.semId];
    if (matchedSem && matchedSem.id === cur) {
      var bannerText = (q.infoBanner && q.infoBanner.trim()) ? q.infoBanner : 'Currently running semester.';
      h += '<div class="info-banner"><span class="info-banner-icon">\ud83d\udfe2</span><span>' + bannerText + '</span></div>';
    }
    if (q.tutorial && q.tutorial.length) {
      h += '<div class="q-section-title">\ud83d\udcdd Tutorial Questions</div>';
      q.tutorial.forEach(function(p){ h += qcard('\ud83d\udcc4', p.title, p.sub, p.url); });
    }
    if (q.final && q.final.length) {
      h += '<div class="q-section-title">\ud83c\udf93 Semester Final Questions</div>';
      q.final.forEach(function(p){ h += qcard('\ud83d\udcda', p.title, p.sub, p.url); });
    }
    if ((!q.tutorial || !q.tutorial.length) && (!q.final || !q.final.length)) {
      h += '<div style="padding:22px;border:1px dashed var(--border);border-radius:12px;color:var(--text-muted);font-size:0.88rem;text-align:center;">\ud83d\udcda Questions will be added soon.</div>';
    }
    sec.innerHTML = h;
  });
  } catch (err) { console.error('[AUTO-RENDER] step 8 question pages failed:', err); }

  try {
  // Retake back button
  var rp2 = document.getElementById('page-q-retake');
  if (rp2) {
    var bi2 = rp2.querySelector('.page-top-banner-inner');
    if (bi2 && !bi2.querySelector('.course-crumb')) {
      bi2.insertAdjacentHTML('afterbegin', '<div class="course-crumb" style="margin-bottom:10px;"><button onclick="' + nav('questions-overview') + '">\u2190 All Questions</button></div>');
    }
    var rs = rp2.querySelector('.section');
    if (rs) {
      var rh = '<div class="q-section-title">\ud83d\udd04 Retake Questions</div>';
      RETAKE_QUESTIONS.forEach(function(p){ rh += qcard('\ud83d\udcc4', p.title, p.sub, p.url); });
      rs.innerHTML = rh;
    }
  }
  } catch (err) { console.error('[AUTO-RENDER] step retake failed:', err); }

  try {
  // 9. Gallery
  var gg = document.getElementById('galleryGrid');
  var gs = document.getElementById('gallerySlideshow');
  var gc = document.getElementById('slideshowControls');
  var gd = document.getElementById('slideshowDots');
  if (gg) {
    if (!GALLERY_DATA.length) {
      gg.innerHTML = '<div class="gallery-item" style="background:var(--surface2);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;color:var(--text-muted);"><div style="font-size:2rem">\ud83d\uddbc\ufe0f</div><div style="font-size:0.8rem;text-align:center;">Upload photos to<br><code style="font-family:\'JetBrains Mono\',monospace;color:var(--accent)">images/gallery/</code></div></div>';
      if (gs) gs.style.display = 'none';
    } else {
      if (gs) {
        gs.innerHTML = GALLERY_DATA.map(function(item,i){ return '<div class="slideshow-slide'+(i?'':' active')+'" data-index="'+i+'"><img src="'+item.src+'" alt="'+(item.caption||'')+'" loading="lazy">'+(item.caption?'<div class="slideshow-caption">'+item.caption+'</div>':'')+'</div>'; }).join('');
        if (gc) gc.style.display = 'flex';
        if (gd) gd.innerHTML = GALLERY_DATA.map(function(_,i){ return '<button class="slideshow-dot'+(i?'':' active')+'" onclick="goToSlide('+i+')"></button>'; }).join('');
        updateSlideCounter();
        startAutoplay();
      }
      var showBtn='<div style="text-align:center;margin:18px 0 8px"><button class="gallery-toggle-btn" onclick="toggleGalleryGrid(this)">📷 Show All Photos ('+GALLERY_DATA.length+')</button></div>';
      var gridHTML=GALLERY_DATA.map(function(item){ return '<div class="gallery-item" onclick="openGallery(\''+item.src+'\',\''+((item.caption||'').replace(/'/g,'&#39;'))+'\')"><img src="'+item.src+'" alt="'+(item.caption||'')+'" loading="lazy">'+(item.caption?'<div class="gallery-caption">'+item.caption+'</div>':'')+'</div>'; }).join('');
      gg.innerHTML=showBtn+'<div class="gallery-grid-inner" style="display:none">'+gridHTML+'</div>';
    }
  }
  } catch (err) { console.error('[AUTO-RENDER] step 9 gallery failed:', err); }

  try {
  // 9b. Syllabus page — update running badge based on CURRENT_SEM_ID
  document.querySelectorAll('.syl-card').forEach(function(card) {
    var sid = card.getAttribute('data-semid');
    card.classList.remove('running');
    var badge = card.querySelector('.syl-running-badge');
    if (badge) badge.remove();
    if (sid && sid === cur) {
      card.classList.add('running');
      var b = document.createElement('div');
      b.className = 'syl-running-badge';
      b.textContent = '🟢 Running';
      card.appendChild(b);
    }
  });
  } catch (err) { console.error('[AUTO-RENDER] step 9b syllabus failed:', err); }

  try {
  // 10. PAGE_META for new semesters
  if (typeof PAGE_META !== 'undefined') {
    PAGE_META['questions-overview'] = {title:'Exam Questions | BME 6th Batch, IU', desc:'All semester questions.'};
    SEMESTERS.forEach(function(sem) {
      if (!PAGE_META[sem.qId]) PAGE_META[sem.qId] = {title:sem.short+' Questions | BME 6th Batch, IU', desc:sem.label+' questions.'};
      sem.courses.forEach(function(c) {
        var k = 'course-'+c.num;
        if (!PAGE_META[k]) PAGE_META[k] = {title:c.title+' | '+c.prefix+'-'+c.num, desc:c.title+', '+sem.label+'.'};
      });
    });
  }
  } catch (err) { console.error('[AUTO-RENDER] step 10 PAGE_META failed:', err); }

})();


function toggleGalleryGrid(btn){
  var grid=document.querySelector('.gallery-grid-inner');
  if(!grid)return;
  var open=grid.style.display!=='none';
  grid.style.display=open?'none':'grid';
  var count=document.querySelectorAll('.gallery-grid-inner .gallery-item').length;
  btn.textContent=open?'📷 Show All Photos ('+count+')':'🔼 Hide Photos';
}
function closeGallery(){ document.getElementById('galleryLightbox').classList.remove('open'); document.getElementById('galleryLightboxImg').src=''; document.body.style.overflow=''; }



var PAGE_NOTES = {};

(function(){if(window._bmeRt)return;window._bmeRt=true;if(typeof ANNOUNCEMENT!=="undefined"&&ANNOUNCEMENT&&ANNOUNCEMENT.trim()){var bar=document.createElement("div");bar.id="ann-banner";bar.style.cssText="position:fixed;top:var(--nav-h,64px);left:0;right:0;background:linear-gradient(90deg,rgba(0,200,255,.18),rgba(0,255,157,.12));border-bottom:1px solid rgba(0,200,255,.25);padding:7px 16px;font-size:.78rem;color:#00c8ff;z-index:998;overflow:hidden;";var inner=document.createElement("div");inner.style.cssText="display:inline-block;white-space:nowrap;animation:annScroll 25s linear infinite;padding-left:100%;";inner.textContent="📢  "+ANNOUNCEMENT+"   ";if(!document.getElementById("ann-style")){var st=document.createElement("style");st.id="ann-style";st.textContent="@keyframes annScroll{0%{transform:translateX(0)}100%{transform:translateX(-200%)}}";document.head.appendChild(st);}bar.appendChild(inner);document.body.appendChild(bar);var app=document.getElementById("app");if(app)app.style.paddingTop=(parseInt(getComputedStyle(app).paddingTop)||64)+34+"px";}if(typeof PAGE_NOTES==="object"&&PAGE_NOTES){function _sn(){if(window.BME_MPA)return;var old=document.getElementById("_pnote");if(old)old.remove();var hash=(window.location.hash||"#home").slice(1)||"home";var note=PAGE_NOTES[hash];if(!note||!note.trim())return;var div=document.createElement("div");div.id="_pnote";div.style.cssText="margin:12px auto;max-width:1100px;padding:10px 16px;background:rgba(255,209,102,.09);border:1px solid rgba(255,209,102,.25);border-radius:8px;font-size:.8rem;color:#ffd166;line-height:1.6;";div.innerHTML="📝 <strong>Note:</strong> "+note.replace(/\n/g,"<br>");var tgt=document.getElementById("page-"+hash);if(tgt)tgt.insertAdjacentElement("afterbegin",div);}window.addEventListener("hashchange",_sn);window.addEventListener("load",_sn);_sn();}})();


/* BME6 visual effects — runtime only, injects no saved markup */
(function(){
 var RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
 var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
 /* 1. hero canvas: ECG trace, DNA helix, drifting cells */
 var hero=$('.hero');
 if(hero&&!RM){
  var cv=document.createElement('canvas');cv.className='fx-canvas';hero.insertBefore(cv,hero.firstChild);
  var cx=cv.getContext('2d'),W=0,H=0,D=Math.min(devicePixelRatio||1,2),t0=performance.now(),vis=true,cells=[],trace=[];
  function size(){W=hero.clientWidth;H=hero.clientHeight;cv.width=W*D;cv.height=H*D;cx.setTransform(D,0,0,D,0,0);
   cells=[];for(var i=0;i<Math.round(W/60);i++)cells.push({x:Math.random()*W,y:Math.random()*H,r:6+Math.random()*16,s:.1+Math.random()*.3,p:Math.random()*6})}
  function beat(x){var m=x%260;if(m<30)return 0;if(m<50)return Math.sin((m-30)/20*Math.PI)*-6;if(m<80)return 0;if(m<90)return (m-80)*1.2;if(m<100)return -(100-m)*0+(-(m-90)*9+12);if(m<112)return (m-100)*7.5-78;if(m<130)return (130-m)*.3;if(m<170)return Math.sin((m-130)/40*Math.PI)*-14;return 0}
  function draw(now){
   if(!vis){requestAnimationFrame(draw);return}
   var t=(now-t0)/1000;cx.clearRect(0,0,W,H);var L=document.documentElement.getAttribute('data-theme')==='light',P=L?{cs:'rgba(14,124,134,.26)',cf:'rgba(179,32,47,.14)',s0:'rgba(14,124,134,.8)',s1:'rgba(179,32,47,.7)',r:'rgba(10,31,60,',d0:'rgba(14,124,134,.95)',d1:'rgba(179,32,47,.9)',t:'14,124,134',c:'179,32,47',sh:'rgba(14,124,134,.25)'}:{cs:'rgba(143,227,218,.16)',cf:'rgba(229,72,77,.14)',s0:'rgba(143,227,218,.55)',s1:'rgba(229,72,77,.5)',r:'rgba(255,255,255,',d0:'rgba(143,227,218,.9)',d1:'rgba(229,72,77,.85)',t:'43,179,166',c:'229,72,77',sh:'rgba(43,179,166,.6)'};
   cells.forEach(function(c){var y=(c.y-t*c.s*40+H*2)%(H+40)-20,x=c.x+Math.sin(t*c.s+c.p)*14;
    cx.beginPath();cx.arc(x,y,c.r,0,6.283);cx.strokeStyle=P.cs;cx.lineWidth=1.2;cx.stroke();
    cx.beginPath();cx.arc(x+c.r*.25,y-c.r*.15,c.r*.34,0,6.283);cx.fillStyle=P.cf;cx.fill()});
   cx.globalAlpha=W>820?1:.28;var hx=W>820?W*.8:W*.86,hh=Math.min(H*.78,520),top=(H-hh)/2,n=34;
   for(var s=0;s<2;s++){cx.beginPath();for(var i=0;i<=n;i++){var u=i/n,y=top+u*hh,ph=u*9+t*1.1+s*Math.PI,x=hx+Math.sin(ph)*58;
     i?cx.lineTo(x,y):cx.moveTo(x,y)}cx.strokeStyle=s?P.s1:P.s0;cx.lineWidth=2;cx.stroke()}
   for(var i=0;i<=n;i+=1){var u=i/n,y=top+u*hh,ph=u*9+t*1.1,a=Math.sin(ph)*58,b=Math.sin(ph+Math.PI)*58,dp=Math.cos(ph);
    cx.strokeStyle=P.r+(.08+Math.abs(dp)*.12+(L?.08:0))+')';cx.lineWidth=1;cx.beginPath();cx.moveTo(hx+a,y);cx.lineTo(hx+b,y);cx.stroke();
    cx.fillStyle=dp>0?P.d0:P.d1;cx.beginPath();cx.arc(hx+a,y,2.6+dp*1.2,0,6.283);cx.fill()}
   cx.globalAlpha=1;var by=H-62,off=t*120,g=cx.createLinearGradient(0,0,W,0);g.addColorStop(0,'rgba('+P.t+',0)');g.addColorStop(.35,'rgba('+P.t+',.9)');g.addColorStop(.85,'rgba('+P.c+',1)');g.addColorStop(1,'rgba('+P.c+',0)');
   cx.beginPath();for(var x=0;x<=W;x+=3){var yy=by+beat(x+off);x?cx.lineTo(x,yy):cx.moveTo(x,yy)}
   cx.strokeStyle=g;cx.lineWidth=2;cx.shadowColor=P.sh;cx.shadowBlur=8;cx.stroke();cx.shadowBlur=0;
   requestAnimationFrame(draw)}
  size();addEventListener('resize',size);requestAnimationFrame(draw);
  if('IntersectionObserver' in window)new IntersectionObserver(function(e){vis=e[0].isIntersecting&&!document.hidden}).observe(hero);
  document.addEventListener('visibilitychange',function(){vis=!document.hidden});
 }
 /* 2. click bursts: biomedical glyphs */
 var G=['<path d="M12 21s-7.5-4.6-9.5-9.2C1.2 8.6 3 5.5 6.2 5.5c2 0 3.3 1.1 3.8 2 .5-.9 1.8-2 3.8-2 3.2 0 5 3.1 3.7 6.3C19.5 16.4 12 21 12 21z" fill="#E5484D"/>',
  '<path d="M6 3c0 6 12 6 12 12M18 3c0 6-12 6-12 12M7 6h10M7 12h10M7 18h10" stroke="#2BB3A6" stroke-width="1.8" fill="none" stroke-linecap="round"/>',
  '<circle cx="12" cy="12" r="9" fill="none" stroke="#2BB3A6" stroke-width="1.8"/><circle cx="14" cy="10" r="3.4" fill="#E5484D"/>',
  '<path d="M2 12h5l2-6 3 12 2-8 2 2h6" stroke="#E5484D" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  '<circle cx="12" cy="12" r="3" fill="#2BB3A6"/><path d="M12 9V3M14.6 13.5l5 3M9.4 13.5l-5 3" stroke="#2BB3A6" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="3" r="2" fill="#E5484D"/><circle cx="19.6" cy="16.5" r="2" fill="#E5484D"/><circle cx="4.4" cy="16.5" r="2" fill="#E5484D"/>'];
 if(!RM&&document.body.animate)document.addEventListener('click',function(e){
  var b=document.createElement('div');b.className='fx-burst';b.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)';
  var r=document.createElement('div');r.className='fx-ring';b.appendChild(r);
  r.animate([{transform:'scale(1)',opacity:.9},{transform:'scale(7)',opacity:0}],{duration:650,easing:'ease-out'});
  for(var i=0;i<6;i++){var s=document.createElementNS('http://www.w3.org/2000/svg','svg');s.setAttribute('viewBox','0 0 24 24');s.innerHTML=G[Math.floor(Math.random()*G.length)];
   var a=Math.random()*6.283,d=34+Math.random()*44;b.appendChild(s);
   s.animate([{transform:'translate(0,0) scale(.3) rotate(0)',opacity:1},{transform:'translate('+Math.cos(a)*d+'px,'+(Math.sin(a)*d-20)+'px) scale(1.05) rotate('+(Math.random()*160-80)+'deg)',opacity:1,offset:.6},{transform:'translate('+Math.cos(a)*d*1.2+'px,'+(Math.sin(a)*d*1.2+16)+'px) scale(.6)',opacity:0}],{duration:820+Math.random()*260,easing:'cubic-bezier(.2,.7,.2,1)'})}
  document.body.appendChild(b);setTimeout(function(){b.remove()},1200)},true);
 /* 3. scroll reveal + count-up */
 var SEL='.card,.teacher-card,.file-card,.syl-card,.qcard,.section-title,.section-subtitle,.stat-card,.sem-acc-block,.gallery-slideshow-wrap,.q-section-title,.chapter-block,.info-banner';
 var io='IntersectionObserver' in window&&!RM?new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);count(x.target)}})},{threshold:.08,rootMargin:'0px 0px -4% 0px'}):null;
 function count(el){var n=$('.stat-num',el);if(!n||n.dataset.fx||RM)return;var v=n.textContent.trim();if(!/^\d+$/.test(v))return;n.dataset.fx=1;var end=+v,s=performance.now();
  (function f(now){var p=Math.min((now-s)/1100,1);n.textContent=Math.round(end*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f);else n.textContent=end})(s)}
 function scan(){if(!io)return;$$(SEL).forEach(function(el,i){if(el.dataset.fxr)return;el.dataset.fxr=1;el.classList.add('fx-reveal');el.style.setProperty('--d',((i%6)*70)+'ms');io.observe(el)})}
 scan();var _n=window.navigate;if(typeof _n==='function')window.navigate=function(){var r=_n.apply(this,arguments);setTimeout(scan,60);return r};
 addEventListener('hashchange',function(){setTimeout(scan,80)});
 document.addEventListener('click',function(){setTimeout(scan,120)});
 /* 4. scroll progress + nav shadow */
 var pr=document.createElement('div');pr.id='fxProg';document.body.appendChild(pr);var nv=$('nav');
 addEventListener('scroll',function(){var h=document.documentElement,m=h.scrollHeight-h.clientHeight;pr.style.width=(m>0?h.scrollTop/m*100:0)+'%';if(nv)nv.classList.toggle('fx-scrolled',h.scrollTop>8)},{passive:true});
})();
