var TABS = ["accueil", "projets", "preuves", "competences", "veille", "contact"];
var DATA = [
  { ico: "i-shield", title: "Audit de cybersécurité de TechNova", date: "01/10/2026 · TD",
    contexte: "TechNova est une PME fictive de 30 salariés. On devait faire un premier diagnostic de sécurité de son système d'information.",
    fait: "J'ai repéré 8 situations à risque (compte administrateur partagé, mot de passe Wi-Fi jamais changé, ancien salarié avec un compte actif, sauvegarde toujours branchée au serveur...). J'ai classé des éléments en vulnérabilité, menace ou conséquence, puis proposé des mesures. J'ai aussi regardé les risques d'un agent IA qui aurait accès à tout le système.",
    appris: "Une vulnérabilité est une faiblesse, une menace est ce qui peut l'exploiter. Mes 3 priorités pour TechNova : la double authentification, des sauvegardes séparées du réseau et des droits réduits au minimum.",
    preuve: "TD_Bloc3_Audit_Cybersecurite_TechNova_rempli", todo: "Capture du document à ajouter." },
  { ico: "i-lock", title: "Droits d'accès dans l'application ARENA CLUB", date: "02/11/2026 · TP",
    contexte: "ARENA CLUB (club de sport fictif) veut une application avec 4 rôles : administrateur, secrétaire, entraîneur et adhérent.",
    fait: "J'ai rempli le tableau des droits de chaque rôle, puis repéré 3 défauts : un entraîneur qui voit les paiements de tout le monde, un ancien secrétaire qui garde son compte, et un numéro qu'on peut changer dans l'URL pour voir le dossier d'un autre.",
    appris: "Moindre privilège : chaque rôle a seulement les droits dont il a besoin. Cacher un bouton ne suffit pas, c'est le serveur qui doit vérifier le rôle avant de supprimer. Deux mots de passe ne font pas une double authentification.",
    preuve: "BLOC3_TP_Etudiant_Droits_Acces_v2", todo: "Capture du tableau à ajouter." },
  { ico: "i-shield", title: "Compte piraté", date: "28/09/2026 · TP",
    contexte: "Une étudiante clique sur un faux mail Microsoft et donne son mot de passe. Ensuite, ses contacts reçoivent le même mail depuis son compte.",
    fait: "J'ai remis l'attaque dans l'ordre (6 étapes), cherché où on aurait pu l'arrêter, listé les premières actions à faire et écrit le ticket SEC-001.",
    appris: "La première action est de changer le mot de passe depuis un appareil sûr et de fermer les sessions ouvertes. La double authentification aurait bloqué le pirate.",
    preuve: "BTS_SIO_Bloc3_Incident_Cybersecurite_P1", todo: "" },
  { ico: "i-mail", title: "Enquête sur un e-mail suspect", date: "17/09/2026 · TP",
    contexte: "Un faux mail « Support Microsoft 365 ». Le nom de domaine est inventé pour l'exercice et on n'ouvre pas le lien.",
    fait: "J'ai relevé 6 indices (adresse de l'expéditeur, urgence, demande de mot de passe, lien...), analysé deux URL, puis écrit une fiche de 5 réflexes pour des salariés. Mes sources : Cybermalveillance.gouv.fr et la CNIL.",
    appris: "Le vrai nom de domaine est celui juste avant l'extension. Le HTTPS chiffre l'échange mais ne prouve pas que le site est honnête.",
    preuve: "TP_Bloc3_Enquete_Email_Suspect_Etudiant", todo: "" },
  { ico: "i-lock", title: "Mots de passe, hachage et MFA", date: "21/09/2026 · TP court",
    contexte: "TP sur la sécurité d'un compte utilisateur.",
    fait: "J'ai répondu aux questions sur le credential stuffing, le hachage et la MFA. En bonus, j'ai cherché ce que sont bcrypt, Argon2 et le salage.",
    appris: "Un service garde une empreinte du mot de passe, pas le mot de passe lui-même. Le salage évite que deux mots de passe identiques donnent la même empreinte.",
    preuve: "BTS_SIO_Bloc3_Exercice_Mots_de_passe_Hachage_MFA", todo: "L'analyse des 4 comptes (mission 1) n'est pas remplie, je dois la finir." },
  { ico: "i-code", title: "Mon premier algorithme", date: "25 au 28/09/2026 · TP",
    contexte: "Une billetterie d'association : calculer le prix total de plusieurs billets.",
    fait: "J'ai écrit le pseudo-code et testé avec plusieurs valeurs (12 € x 3 billets = 36 €). J'ai ajouté 2 € de frais (ça donne 38 €), corrigé un algorithme où les instructions étaient dans le mauvais ordre, et inventé mon propre problème : l'addition d'un restaurant avec pourboire. En bonus, j'ai traduit la billetterie en PHP.",
    appris: "On pense à la logique avant d'écrire le code. Un calcul juste peut donner un résultat bizarre (un billet à 0 €), donc il faut tester aussi les cas limites.",
    preuve: "TP1_Construire_son_premier_algorithme_complete", todo: "" },
  { ico: "i-table", title: "Charte informatique", date: "07/09/2026 · TP",
    contexte: "La charte informatique de l'établissement et dix situations de salariés.",
    fait: "Pour chaque situation, j'ai dit si le salarié fraude ou non en citant la règle de la charte (mot de passe sur un post-it, logiciel installé sans autorisation, IA générative interdite...).",
    appris: "Je sais retrouver dans un texte la règle qui s'applique et la citer.",
    preuve: "réponse charte informatique", todo: "" },
  { ico: "i-server", title: "Poste de travail : Windows et Ubuntu", date: "15 au 28/09/2026 · TP",
    contexte: "Prendre en main un poste Windows et préparer une machine virtuelle Ubuntu.",
    fait: "J'ai décrit comment créer une partition de données et des comptes administrateur et utilisateur standard, et comment installer des logiciels libres et régler le proxy. J'ai écrit 17 commandes (dir, cd, md, ipconfig, ping...). Pour Ubuntu, j'ai noté les réglages de la machine dans VirtualBox : 4 Go de mémoire, 2 processeurs, un disque de 25 Go.",
    appris: "La différence entre un compte administrateur et un utilisateur standard.",
    preuve: "tp chapitre 2 et ubuntu", todo: "Il manque mes captures d'écran (étapes 6.1 et 6.2)." }
];

var PREUVES = [["Audit de cybersécurité de TechNova", "01/10/2026", "TD_Bloc3_Audit_Cybersecurite_TechNova_rempli", "https://docs.google.com/document/d/1EfduvvL6OxODueImjop6FdrFeHHw1nSlCZRuSayAp5s/edit", "Mon tableau des situations à risque et mes mesures."], ["Droits d'accès ARENA CLUB", "02/11/2026", "BLOC3_TP_Etudiant_Droits_Acces_v2", "https://docs.google.com/document/d/1wtZ7iwTQG2mPivVEkEFP2OowgiN3dq4rw0tK7sMfsO0/edit", "Le tableau des droits par rôle."], ["Compte piraté", "28/09/2026", "BTS_SIO_Bloc3_Incident_Cybersecurite_P1", "https://docs.google.com/document/d/17jIYR3WJYXuBVI9tMU6MqUBNHM6uyKH8UcV8hVH6Mmg/edit", "La chaîne d'attaque et le ticket SEC-001."], ["Enquête sur un e-mail suspect", "17/09/2026", "TP_Bloc3_Enquete_Email_Suspect_Etudiant", "https://docs.google.com/document/d/1oKkLbd1n-THysKBLNx79yPEA3Vc3vxzncM6fuLy5-LU/edit", "Le tableau des indices et la fiche de réflexes."], ["Mots de passe, hachage et MFA", "21/09/2026", "BTS_SIO_Bloc3_Exercice_Mots_de_passe_Hachage_MFA", "https://docs.google.com/document/d/1D_GupNCB3l5GdAmwkPfqj35LB4Xe_qfQv-gRqLV66gE/edit", "Mes réponses (la mission 1 n'est pas finie)."], ["Mon premier algorithme", "25/09/2026", "TP1_Construire_son_premier_algorithme_complete", "https://docs.google.com/document/d/10Jjm24hR7vmSH9LJ6LqmVKSbKb_cVyTBlXZWw_tJKYE/edit", "Les pseudo-codes et les tests."], ["Charte informatique", "07/09/2026", "réponse charte informatique", "https://docs.google.com/document/d/1bJjZMiyF89S2Ez0hGTLJ9RKtPIfvYtVsiC5FdXvrWRw/edit", "Mes réponses aux dix situations."], ["Poste de travail Windows", "15/09/2026", "tp chapitre 2", "https://docs.google.com/document/d/1jAalVec-WbtCW3XZnQdztWh4swU9PD__96WM1mUcUlk/edit", "Mes réponses du TP (captures à ajouter)."], ["Machine virtuelle Ubuntu", "22/09/2026", "ubuntu", "https://docs.google.com/document/d/1ujv8qayDpeodb-s-1J9CfJ1RkNlCg57DcfhnR2JemfU/edit", "Mes notes sur les réglages de la machine."], ["Veille sur le phishing", "19/11/2026", "Veille informatique - Hameçonnage et protection des comptes", "https://docs.google.com/document/d/1HmMddrMmOnY6vFOQ0_c3KDefu-3Ca8R-BZyYzaw_PCw/edit", "Mon document de veille (test à faire)."]];
function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }
function renderList() {
  document.getElementById("list").innerHTML = DATA.map(function (f) {
    var h = "<article class=\"card fiche\"><div class=\"fhead\"><span class=\"plate\"><svg class=\"ic\" width=\"34\" height=\"34\" aria-hidden=\"true\"><use href=\"#" + f.ico + "\"/></svg></span><div><h3>" + esc(f.title) + "</h3><small>" + esc(f.date) + "</small></div></div><dl>";
    h += "<dt>Contexte</dt><dd>" + esc(f.contexte) + "</dd>";
    h += "<dt>Ce que j'ai fait</dt><dd>" + esc(f.fait) + "</dd>";
    h += "<dt>Ce que j'ai appris</dt><dd>" + esc(f.appris) + "</dd>";
    h += "<dt>Preuve</dt><dd>Document : " + esc(f.preuve) + "</dd></dl>";
    if (f.todo) { h += "<div class=\"todo\">" + esc(f.todo) + "</div>"; }
    return h + "</article>";
  }).join("");
}

var tabEls = {}, panelEls = {};
TABS.forEach(function (id) { tabEls[id] = document.getElementById("t-" + id); panelEls[id] = document.getElementById("p-" + id); });
function current() { var h = (location.hash || "").slice(1); return TABS.indexOf(h) > -1 ? h : "accueil"; }
function show(id, scroll) {
  TABS.forEach(function (t) {
    var on = t === id;
    tabEls[t].setAttribute("aria-selected", String(on));
    tabEls[t].tabIndex = on ? 0 : -1;
    panelEls[t].hidden = !on;
  });
  var nav = document.getElementById("tabs"), el = tabEls[id];
  nav.scrollLeft = el.offsetLeft - (nav.clientWidth - el.offsetWidth) / 2;
  if (scroll) { window.scrollTo(0, 0); }
}
function go(id) { if (location.hash === "#" + id) { show(id, true); } else { location.hash = id; } }
window.addEventListener("hashchange", function () { show(current(), true); });
document.getElementById("tabs").addEventListener("click", function (e) {
  var t = e.target.closest(".tab");
  if (t) { go(t.id.slice(2)); }
});
document.getElementById("tabs").addEventListener("keydown", function (e) {
  var i = TABS.indexOf(current()), n = -1;
  if (e.key === "ArrowRight") { n = (i + 1) % TABS.length; }
  else if (e.key === "ArrowLeft") { n = (i + TABS.length - 1) % TABS.length; }
  if (n > -1) { e.preventDefault(); go(TABS[n]); tabEls[TABS[n]].focus(); }
});
document.addEventListener("click", function (e) {
  var g = e.target.closest("[data-go]");
  if (g) { go(g.getAttribute("data-go")); }
});
document.getElementById("preuves").innerHTML = PREUVES.map(function (r) {
  return "<tr><td>" + esc(r[0]) + "</td><td>" + esc(r[1]) + "</td><td><a href=\"" + r[3] + "\" target=\"_blank\" rel=\"noopener\">" + esc(r[2]) + "</a><br><small>" + esc(r[4]) + "</small></td></tr>";
}).join("");
renderList();
show(current(), false);
