// Jaki Neering, LCSW-QS — site behavior

// Current year in footer
document.getElementById('yr').textContent = new Date().getFullYear();

// Header shadow on scroll
var header = document.querySelector('header.site');
window.addEventListener('scroll', function () {
  header.classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });

// Mobile menu
var menuBtn = document.getElementById('menuBtn');
var panel = document.getElementById('mobilePanel');
menuBtn.addEventListener('click', function () {
  var open = panel.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
panel.querySelectorAll('a').forEach(function (a) {
  a.addEventListener('click', function () {
    panel.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// Trainings accordion (built from data to keep markup clean)
var trainings = [
  ["Best Practices for a Trans-Affirming Treatment Experience", "Practical, dignity-centered guidance for building intake, language, and care pathways that make trans and nonbinary clients feel genuinely welcome and safe."],
  ["LGBTQ+ Competence in Treatment Settings", "Foundations of affirming care — terminology, common pitfalls, and the cultural humility that turns good intentions into consistently inclusive practice."],
  ["The Trauma of Growing Up LGBTQ+", "How minority stress, rejection, and concealment shape the nervous system over time, and what clinicians can do to support repair and resilience."],
  ["The Medicine of Congruence", "Why living in alignment with one's authentic self is profoundly healing, and how providers can become allies in that process of self-expression."],
  ["Understanding Gender Diversity", "A clear, compassionate primer on gender identity and expression that equips teams to support clients across the full spectrum of experience."],
  ["Trauma-Informed Care in Treatment Settings", "Translating trauma-informed principles — safety, choice, collaboration, trust — into the everyday realities of clinical and program environments."],
  ["Understanding the Impacts of Trauma", "How trauma lives in the body, brain, and relationships, and why recognizing its footprint changes the way we respond to behavior."],
  ["De-escalation Through a Trauma-Informed Lens", "Compassionate, regulation-focused strategies that reduce conflict and reactivity while preserving the dignity of the person in distress."],
  ["Client Empowerment", "Shifting from compliance toward collaboration — practical tools for restoring agency, choice, and self-leadership in the people we serve."],
  ["Understanding Substance Use Through a Trauma-Informed Lens", "Reframing substance use as adaptation and survival, and exploring approaches that meet clients with curiosity rather than judgment."],
  ["Importance of Peer Support in Recovery", "How shared lived experience builds trust, reduces isolation, and strengthens long-term recovery within programs and communities."],
  ["Benefits of Service Work", "Exploring how contribution and connection support meaning, purpose, and sustained healing in the recovery journey."]
];
var acc = document.getElementById('acc');
trainings.forEach(function (t, i) {
  var d = document.createElement('details');
  d.className = 't';
  var n = String(i + 1).padStart(2, '0');
  d.innerHTML =
    '<summary><span class="n">' + n + '</span>' + t[0] +
    '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></summary>' +
    '<div class="body">' + t[1] + '</div>';
  acc.appendChild(d);
});
