window.bmeSetFrame=function(u){var f=document.getElementById('modalIframe');try{f.contentWindow.location.replace(u?new URL(u,document.baseURI).href:'about:blank')}catch(e){f.src=u||''}};window.addEventListener('popstate',function(){var m=document.getElementById('docModal');if(m&&m.classList.contains('open')&&typeof closeModalNow==='function')closeModalNow()});window.bmeReaderUrl=function(u,t,prev){u=String(u||'');var drive=/drive\.google\.com\/file\/d\//.test(u),pdf=/^(?!https?:|\/\/)[^?#]*\.pdf(?:[?#].*)?$/i.test(u);if(!drive&&!pdf)return prev;return 'read/?u='+encodeURIComponent(pdf?new URL(u,document.baseURI).href:u)+'&t='+encodeURIComponent(t||'')};
window.BME_V="c9e65634";window.BME_MPA=true;window.BME_ROUTES={"home":"/","courses-overview":"/courses/","course-1101":"/courses/bme-1101/","course-1103":"/courses/bme-1103/","course-1105":"/courses/bme-1105/","course-1107":"/courses/bme-1107/","course-1109":"/courses/bme-1109/","course-1201":"/courses/bme-1201/","course-1203":"/courses/bme-1203/","course-1205":"/courses/bme-1205/","course-1207":"/courses/bme-1207/","course-1209":"/courses/bme-1209/","course-2101":"/courses/bme-2101/","course-2103":"/courses/bme-2103/","course-2105":"/courses/bme-2105/","course-2107":"/courses/bme-2107/","course-2109":"/courses/bme-2109/","course-2201":"/courses/bme-2201/","course-2203":"/courses/bme-2203/","course-2205":"/courses/bme-2205/","course-2207":"/courses/bme-2207/","course-2209":"/courses/bme-2209/","course-3101":"/courses/bme-3101/","course-3103":"/courses/bme-3103/","course-3105":"/courses/bme-3105/","course-3107":"/courses/bme-3107/","course-3109":"/courses/bme-3109/","questions-overview":"/questions/","q-bme11":"/questions/bme11/","q-bme12":"/questions/bme12/","q-bme21":"/questions/bme21/","q-bme22":"/questions/bme22/","q-bme31":"/questions/bme31/","q-bme32":"/questions/bme32/","q-retake":"/retake/","teachers":"/teachers/","gallery":"/gallery/","syllabus":"/syllabus/","important-files":"/files/","course-3201":"/courses/bme-3201/","course-3203":"/courses/bme-3203/","course-3205":"/courses/bme-3205/","course-3207":"/courses/bme-3207/","course-3209":"/courses/bme-3209/"};
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
  bmeSetFrame('');
  document.getElementById('modalLoading').style.display = 'flex';
  document.getElementById('modalIframe').style.display = 'none';
  
  // Convert drive link to preview
  let previewUrl = url;
  if (url.includes('drive.google.com/file/d/') && !url.includes('/preview')) {
    const fileId = url.match(/\/d\/([^/]+)/)?.[1];
    if (fileId) previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  }
  // For already preview links, use as-is
  
  document.getElementById('modalOpenLink').href = url.indexOf('drive.google.com') > -1 ? url.replace('/preview','').replace('/view','') + '/view?usp=drive_link' : url; document.getElementById('modalOpenLink').textContent = url.indexOf('drive.google.com') > -1 ? '↗ Open in Drive' : '↗ Open PDF';
  bmeSetFrame(window.bmeReaderUrl ? bmeReaderUrl(url, title, previewUrl) : previewUrl);
  document.getElementById('docModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  if (window.BME_MPA && !(history.state && history.state.bmeDoc)) { try { history.pushState({bmeDoc:1}, ''); } catch(e) {} }
}

function hideModalLoading() {
  document.getElementById('modalLoading').style.display = 'none';
  document.getElementById('modalIframe').style.display = 'block';
}

function closeModal() {
  if (window.BME_MPA && history.state && history.state.bmeDoc) { history.back(); return; }
  closeModalNow();
}
function closeModalNow() {
  document.getElementById('docModal').classList.remove('open');
  bmeSetFrame('');
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
const PAGE_META = {};
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

const SEMESTERS = [];

const QUESTIONS_DATA = [];

const RETAKE_QUESTIONS = [];

const GALLERY_DATA = [];

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

(function(){if(!window.BME_MPA)return;var data=null,ov,inp,lst,sel=0,res=[];
function load(){if(data)return Promise.resolve();return fetch('assets/search.json?v='+(window.BME_V||'')).then(function(r){return r.json()}).then(function(j){data=j}).catch(function(){data=[]})}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function run(){var q=inp.value.trim().toLowerCase();if(!q){lst.innerHTML='<div class="fxs-empty">Type a course, lecture, teacher or question…</div>';res=[];return}
 var tk=q.split(/\s+/);res=data.filter(function(it){return tk.every(function(t){return it.s.indexOf(t)>-1})}).map(function(it){var tl=it.t.toLowerCase(),sc=0;if(tl.indexOf(q)>-1)sc+=10;tk.forEach(function(t){if(tl.indexOf(t)>-1)sc+=3});if(/^Course/.test(it.k))sc+=1;return{it:it,sc:sc}}).sort(function(a,b){return b.sc-a.sc}).slice(0,12).map(function(r){return r.it});sel=0;draw()}
function draw(){if(!res.length&&inp.value.trim()){lst.innerHTML='<div class="fxs-empty">No results found</div>';return}lst.innerHTML=res.map(function(r,i){return'<a href="'+esc(r.u)+'" class="'+(i===sel?'on':'')+'"><b>'+esc(r.t)+'</b><small>'+esc(r.k)+'</small></a>'}).join('')}
function open(){if(!ov)build();ov.classList.add('open');load().then(function(){run()});setTimeout(function(){inp.focus()},30)}
function close(){if(ov)ov.classList.remove('open')}
function build(){ov=document.createElement('div');ov.id='fxSearch';ov.innerHTML='<div class="fxs-box" role="dialog" aria-label="Search"><div class="fxs-top"><span>🔍</span><input type="search" placeholder="Search courses, lectures, teachers, questions…" autocomplete="off"><button type="button" aria-label="Close">✕</button></div><div class="fxs-list"></div><div class="fxs-hint">↑↓ to move · Enter to open · Esc to close</div></div>';document.body.appendChild(ov);
 inp=ov.querySelector('input');lst=ov.querySelector('.fxs-list');ov.addEventListener('click',function(e){if(e.target===ov||e.target.tagName==='BUTTON')close()});inp.addEventListener('input',run);
 inp.addEventListener('keydown',function(e){if(e.key==='ArrowDown'){sel=Math.min(sel+1,res.length-1);draw();e.preventDefault()}else if(e.key==='ArrowUp'){sel=Math.max(sel-1,0);draw();e.preventDefault()}else if(e.key==='Enter'&&res[sel]){location.href=res[sel].u}})}
var tb=document.getElementById('themeSwitchBtn');if(tb){var b=document.createElement('button');b.id='fxSearchBtn';b.type='button';b.title='Search (/)';b.setAttribute('aria-label','Search');b.textContent='🔍';b.addEventListener('click',open);tb.parentNode.insertBefore(b,tb)}
document.addEventListener('keydown',function(e){var t=(e.target.tagName||'');if(e.key==='Escape')close();else if((e.key==='/'&&!/INPUT|TEXTAREA/.test(t))||((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k')){e.preventDefault();open()}});
})();