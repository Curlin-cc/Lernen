// OSI-Quest Game Logic

// Alle Fragen mit exakten Musterlösungen und Pflicht-Keywords
const generalQuestions = [
    // WLAN Fragen (1-8)
    {
        question: 'Welche Funkfrequenzen nutzen die aktuellen WLAN-Standards (IEEE 802.11n und IEEE 802.11ac)?',
        correctAnswers: ['2 Komma 4 Gigahertz und 5 Gigahertz'],
        requiredKeywords: [['2,4', '2.4', '2 komma 4'], ['5'], ['ghz', 'gigahertz']]
    },
    {
        question: 'Welche Eigenschaften treffen auf WLAN-Funkwellen zu? a) Wände dämpfen stark b) Wände reflektieren c) Atmosphärenreflexion d) Sichtverbindung nötig',
        correctAnswers: ['Richtig sind a und b'],
        requiredKeywords: [['a'], ['b']]
    },
    {
        question: 'Wie nennt man die Antennen, die typischerweise für WLAN verwendet werden?',
        correctAnswers: ['Rundstrahlantennen'],
        requiredKeywords: [['rundstrahl', 'omnidirektional']]
    },
    {
        question: 'Nennen Sie zwei Merkmale, durch die WLANs nach IEEE 802.11n schneller sind als ältere Standards.',
        correctAnswers: ['MIMO und Kanalbündelung'],
        requiredKeywords: [['mimo'], ['kanalbündelung', 'channel bonding', 'bündelung']]
    },
    {
        question: 'Nennen Sie zwei weit verbreitete WLAN-Standards. Welche Übertragungskapazitäten sind damit jeweils möglich?',
        correctAnswers: ['IEEE 802 Punkt 11n mit bis zu etwa 300 Megabit pro Sekunde. IEEE 802 Punkt 11ac mit bis zu etwa 1 Gigabit pro Sekunde'],
        requiredKeywords: [['802.11n', '11n'], ['300'], ['802.11ac', '11ac'], ['1 gbit', '1 gigabit', '1000']]
    },
    {
        question: 'Die Übertragungskapazitäten von WLAN und Ethernet sind nicht direkt vergleichbar. Nennen Sie drei Gründe.',
        correctAnswers: ['Gemeinsames Medium mit Kollisionen. Hoher Protokoll und Steuerungsaufwand. Stärkere Schwankungen durch Störungen und Dämpfung'],
        requiredKeywords: [['kollision', 'gemeinsam'], ['protokoll', 'overhead', 'aufwand'], ['störung', 'schwankung', 'dämpfung']]
    },
    {
        question: 'Was ist ein ISM-Band und was bedeutet es für WLAN?',
        correctAnswers: ['Ein lizenzfreier Frequenzbereich für verschiedene Funkanwendungen. Für WLAN bedeutet das freie Nutzung bei möglicher Störung durch andere Geräte'],
        requiredKeywords: [['lizenzfrei', 'frei'], ['störung', 'andere geräte']]
    },
    {
        question: 'Welche Aussagen sind richtig? a) AP immer nötig b) MIMO braucht mehrere Antennen c) MIMO vergrößert Reichweite d) PoW versorgt Geräte e) WLAN immer verschlüsselt',
        correctAnswers: ['Richtig sind b und c'],
        requiredKeywords: [['b'], ['c']]
    },
    
    // Übertragungstechnik Fragen
    {
        question: 'Erläutern Sie kurz die drei Begriffe Schrittgeschwindigkeit, Übertragungskapazität und Bandbreite und geben Sie jeweils die Maßeinheit an.',
        correctAnswers: ['Schrittgeschwindigkeit ist die Anzahl der Signalzustandswechsel pro Sekunde mit Einheit Baud. Übertragungskapazität ist die maximale Datenrate mit Einheit bit pro Sekunde. Bandbreite ist der nutzbare Frequenzbereich mit Einheit Hertz'],
        requiredKeywords: [['schrittgeschwindigkeit', 'signalzustand'], ['baud'], ['übertragungskapazität', 'datenrate'], ['bit'], ['bandbreite', 'frequenz'], ['hertz', 'hz']]
    },
    {
        question: 'Definieren Sie kurz die Begriffe Basisband, Schmalband und Breitband.',
        correctAnswers: ['Basisband nutzt das gesamte Medium ohne Frequenzmultiplex. Schmalband nutzt einen kleinen begrenzten Frequenzbereich. Breitband nutzt einen großen Frequenzbereich für hohe Datenraten'],
        requiredKeywords: [['basisband', 'gesamt'], ['schmalband', 'klein', 'begrenzt'], ['breitband', 'groß', 'hoch']]
    },
    {
        question: 'Welche grundlegenden Medienzugriffsverfahren gibt es? Nennen Sie jeweils ein Beispiel.',
        correctAnswers: ['Deterministisch zum Beispiel Token Ring. Wettbewerbsbasiert zum Beispiel CSMA CD. Reservierungsbasiert zum Beispiel Polling'],
        requiredKeywords: [['deterministisch', 'token'], ['wettbewerb', 'csma'], ['reservierung', 'polling']]
    },
    {
        question: 'Wie heißt das Verkabelungskonzept bei der Kommunikationsinfrastruktur in Bürogebäuden? Welche Topologie entsteht?',
        correctAnswers: ['Strukturierte Verkabelung mit Primär Sekundär und Tertiärverkabelung und zentralen Verteilerpunkten. Daraus entsteht eine Stern Topologie'],
        requiredKeywords: [['strukturiert'], ['primär', 'sekundär', 'tertiär'], ['stern']]
    },
    {
        question: 'Wie viele Wanddosen sehen Sie in einem Büroraum mit drei Arbeitsplätzen vor? Warum?',
        correctAnswers: ['Zwei Dosen pro Arbeitsplatz also sechs insgesamt. Grund ist Redundanz und gleichzeitige Nutzung unterschiedlicher Dienste'],
        requiredKeywords: [['sechs', '6', 'zwei pro'], ['redundanz', 'dienste', 'gleichzeitig']]
    },
    {
        question: 'Nennen Sie für UTP, FTP, S/FTP und Glasfasern jeweils geeignete Anwendungsbereiche.',
        correctAnswers: ['UTP für einfache Büroverkabelung. FTP bei stärkerer Störeinstrahlung. S FTP für hohe Störsicherheit in Technikräumen. Glasfaser für große Entfernungen und hohe Datenraten'],
        requiredKeywords: [['utp', 'büro'], ['ftp', 'störung'], ['glasfaser', 'entfernung', 'datenrate']]
    },
    {
        question: 'Welche physikalische Eigenschaft geben die Kategorien von Twisted-Pair-Kabeln (Cat.5, Cat.6) an?',
        correctAnswers: ['Sie geben die maximal unterstützte Frequenz und damit die erreichbare Datenrate an'],
        requiredKeywords: [['frequenz'], ['datenrate', 'übertragung']]
    },
    {
        question: 'Was bedeutet Cat.7? Worin unterscheidet es sich von Cat.5?',
        correctAnswers: ['Cat sieben unterstützt höhere Frequenzen und bessere Schirmung als Cat fünf und ermöglicht deutlich höhere Datenraten'],
        requiredKeywords: [['cat 7', 'cat7', 'cat.7', 'sieben'], ['höher', 'besser'], ['cat 5', 'cat5', 'cat.5', 'fünf']]
    },
    {
        question: 'Welche Ethernet-Varianten sind in Primär-, Sekundär- und Tertiärbereich gebräuchlich?',
        correctAnswers: ['Primärbereich Glasfaser Ethernet. Sekundärbereich meist Glasfaser oder Kupfer Gigabit Ethernet. Tertiärbereich Kupfer Gigabit oder Fast Ethernet'],
        requiredKeywords: [['primär', 'glasfaser'], ['sekundär'], ['tertiär', 'kupfer']]
    },
    {
        question: 'Welche Ethernet-Varianten sind im WAN gebräuchlich?',
        correctAnswers: ['Typisch Metro Ethernet und Carrier Ethernet'],
        requiredKeywords: [['metro', 'carrier']]
    },
    {
        question: 'In welchen Bereichen sind Glasfasern und in welchen sind Kupferkabel vorzuziehen?',
        correctAnswers: ['Glasfaser für große Entfernungen hohe Datenraten und elektromagnetische Unempfindlichkeit. Kupfer für kurze Strecken niedrige Kosten und PoE Versorgung'],
        requiredKeywords: [['glasfaser', 'entfernung', 'datenrate'], ['kupfer', 'kosten', 'poe', 'kurz']]
    },
    {
        question: 'Was ist PoE? Nennen Sie zwei Anwendungsgebiete dafür.',
        correctAnswers: ['Power over Ethernet überträgt Strom über das Netzwerkkabel. Beispiele IP Kameras und Access Points'],
        requiredKeywords: [['power over ethernet', 'poe', 'strom'], ['kamera', 'access point', 'ap', 'telefon']]
    },
    {
        question: 'Wie ist eine Ethernet-Adresse (MAC-Adresse) aufgebaut? Wie wird Eindeutigkeit gewährleistet?',
        correctAnswers: ['MAC Adressen bestehen aus sechsmal zwei hexadezimalen Oktetten. Die ersten drei Oktette stammen vom Hersteller und sichern die globale Eindeutigkeit. Kommunikation erfolgt im lokalen Netzwerk'],
        requiredKeywords: [['6', 'sechs', 'oktett'], ['hersteller'], ['eindeutig', 'lokal']]
    },
    {
        question: 'Beschreiben Sie den Aufbau und die Funktionsweise eines Ethernet-Switch.',
        correctAnswers: ['Ein Switch besteht aus mehreren Ports und einer internen Weiterleitungstabelle. Er lernt MAC Adressen pro Port und leitet Frames gezielt zum Zielport weiter was Kollisionen verhindert und den Verkehr segmentiert'],
        requiredKeywords: [['port'], ['weiterleitungstabelle', 'mac', 'lernt'], ['kollision', 'segmentier']]
    },
    
    // Allgemeine Fragen
    {
        question: 'Was versteht man unter der zunehmenden Konvergenz der Medien? Nennen Sie zwei Beispiele.',
        correctAnswers: ['Medienkonvergenz bedeutet das Zusammenwachsen verschiedener Medientypen zu gemeinsamen Plattformen und Geräten. Beispiele: Fernsehen über das Internet sowie Smartphones die Kamera Rechner und Unterhaltung vereinen'],
        requiredKeywords: [['zusammenwachsen', 'konvergenz', 'vereinen'], ['smartphone', 'fernsehen', 'internet', 'iptv']]
    },
    {
        question: 'Worin unterscheiden sich in der Nachrichtentechnik Information und Nachricht?',
        correctAnswers: ['Information ist der abstrakte Bedeutungsgehalt. Nachricht ist das technisch übertragene Signal das diese Bedeutung transportiert'],
        requiredKeywords: [['information', 'bedeutung'], ['nachricht', 'signal', 'technisch']]
    },
    {
        question: 'Erläutern Sie die Funktion einer Schicht im OSI-Referenzmodell. Mit welchen anderen Schichten wird kommuniziert?',
        correctAnswers: ['Eine Schicht im OSI Referenzmodell übernimmt klar abgegrenzte Aufgaben und bietet Dienste für die Schicht darüber an. Sie kommuniziert direkt nur mit der nächsthöheren und der nächstniedrigeren Schicht. Der Vorteil besteht in klarer Struktur besserer Austauschbarkeit einzelner Schichten und vereinfachter Fehlersuche'],
        requiredKeywords: [['schicht', 'layer'], ['aufgabe', 'dienst'], ['nächst', 'darüber', 'darunter', 'ober', 'unter']]
    },
    
    // DSL Fragen
    {
        question: 'Welche Aufgaben haben bei DSL die Komponenten DSL-Modem, Splitter und DSLAM? Welche Komponente kann bei VoIP entfallen?',
        correctAnswers: ['Das DSL Modem wandelt die Signale und steht beim Kunden. Der Splitter trennt Telefon und Datensignal und steht ebenfalls beim Kunden. Der DSLAM bündelt alle Kundenanschlüsse im Netz des Providers und steht in der Vermittlungsstelle. Bei VoIP kann der Splitter entfallen'],
        requiredKeywords: [['modem', 'signal', 'wandel'], ['splitter', 'trenn', 'telefon'], ['dslam', 'bündel', 'vermittlung'], ['voip', 'splitter', 'entfall']]
    },
    {
        question: 'Was muss ein Netzbetreiber tun, um seinen Standard-DSL-Kunden VDSL anbieten zu können?',
        correctAnswers: ['Er muss die Kupferleitungen durch Glasfaser bis zu Straßenverteilern verlängern und dort neue Outdoor DSLAMs installieren'],
        requiredKeywords: [['glasfaser'], ['outdoor', 'straßenverteiler', 'verteiler'], ['dslam']]
    },
    {
        question: 'Nennen Sie vier Funktionen eines DSL/Kabel-Routers, die man auch als separate Geräte kaufen könnte.',
        correctAnswers: ['Router Funktionen sind zum Beispiel Modem Firewall Switch WLAN Access Point'],
        requiredKeywords: [['modem'], ['firewall'], ['switch'], ['wlan', 'access point']]
    },
    
    // IP-Netzwerk Fragen
    {
        question: 'Wie ist ein IP-Netzwerk aufgebaut?',
        correctAnswers: ['Ein IP Netzwerk besteht aus Hosts Routern und Subnetzen die über Adressen und Masken logisch gegliedert sind'],
        requiredKeywords: [['host'], ['router'], ['subnetz'], ['adresse', 'maske']]
    },
    {
        question: 'Was versteht man unter Routing und wie funktioniert es?',
        correctAnswers: ['Routing ist das Weiterleiten von Paketen zwischen Subnetzen. Ein Router prüft die Zieladresse und wählt anhand seiner Tabelle den nächsten Weg'],
        requiredKeywords: [['weiterleiten', 'routing'], ['zieladresse', 'ziel'], ['tabelle', 'routingtabelle']]
    },
    {
        question: 'Welche Informationen sind in einem IP-Header enthalten (vier genügen)?',
        correctAnswers: ['Beispiele sind Quelladresse Zieladresse TTL Protokoll und Prüfsumme'],
        requiredKeywords: [['quelladresse', 'source'], ['zieladresse', 'destination'], ['ttl', 'protokoll', 'prüfsumme', 'checksum']]
    },
    {
        question: 'Welche Komponenten können zur Kopplung von Subnetzen verwendet werden - Switches, Router, Patchkabel, Firewalls?',
        correctAnswers: ['Zur Kopplung von Subnetzen werden Router oder Firewalls genutzt'],
        requiredKeywords: [['router'], ['firewall']]
    },
    {
        question: 'Welche Informationen nutzt ein Router für die Entscheidung, wohin er ein Datenpaket weiterleitet?',
        correctAnswers: ['Er nutzt die Zieladresse und seine Routingtabelle'],
        requiredKeywords: [['zieladresse', 'ziel-ip', 'destination'], ['routingtabelle', 'tabelle']]
    },
    {
        question: 'Wozu dienen die Netz- und die Broadcastadresse in einem Subnetz?',
        correctAnswers: ['Die Netzadresse kennzeichnet das Subnetz. Die Broadcastadresse erreicht alle Geräte im Subnetz gleichzeitig'],
        requiredKeywords: [['netzadresse', 'subnetz', 'kennzeichn'], ['broadcast', 'alle geräte', 'gleichzeitig']]
    },
    {
        question: 'Wie bekommt ein Host heraus, welche MAC-Adresse zu einer IP-Adresse gehört? Wie heißt das Protokoll? Beschreiben Sie den Ablauf.',
        correctAnswers: ['Über ARP. Der Host sendet eine Anfrage an alle im Subnetz. Der Besitzer der gesuchten Adresse antwortet mit seiner MAC Adresse'],
        requiredKeywords: [['arp'], ['anfrage', 'broadcast', 'alle'], ['mac', 'antwortet']]
    },
    
    // E-Mail Fragen
    {
        question: 'Wie ist eine E-Mail-Adresse aufgebaut? Welcher Teil der Adresse hat welche Aufgabe?',
        correctAnswers: ['Sie besteht aus Benutzername gefolgt von einem At Zeichen und der Domain. Der Benutzername identifiziert das Postfach der Domainname führt zum Mailserver des Anbieters'],
        requiredKeywords: [['benutzername', 'user'], ['@', 'at'], ['domain'], ['postfach', 'mailserver']]
    },
    {
        question: 'Wie wird ermittelt, welcher Mailserver für eine bestimmte Mailadresse zuständig ist?',
        correctAnswers: ['Über einen MX Eintrag im DNS'],
        requiredKeywords: [['mx'], ['dns']]
    },
    {
        question: 'Welche beiden Protokolle sind für die Abholung von E-Mails gebräuchlich? Worin unterscheiden sie sich?',
        correctAnswers: ['POP3 und IMAP. POP3 holt Mails meist lokal ab und löscht sie oft am Server. IMAP lässt die Mails auf dem Server und synchronisiert mehrere Geräte'],
        requiredKeywords: [['pop3'], ['imap'], ['lokal', 'löscht', 'server', 'synchron']]
    },
    
    // Firewall Fragen
    {
        question: 'Erklären Sie kurz, was eine monolithische Firewall ist und was man unter einer Zone versteht.',
        correctAnswers: ['Eine monolithische Firewall ist ein zentrales Gerät das den gesamten Datenverkehr zwischen mehreren Netzbereichen kontrolliert. Eine Zone ist ein logisch abgegrenzter Sicherheitsbereich wie internes Netz oder Internet'],
        requiredKeywords: [['monolithisch', 'zentral'], ['datenverkehr', 'kontroll'], ['zone', 'sicherheitsbereich', 'abgegrenzt']]
    },
    {
        question: 'Beschreiben Sie anhand eines Beispiels, wie Paketfilterregeln funktionieren.',
        correctAnswers: ['Ein Paketfilter prüft Felder wie Quelladresse Zieladresse Port und Richtung. Beispiel Regel erlaubt aus dem internen Netz Port 80 nach außen und blockiert eingehende Verbindungen von außen'],
        requiredKeywords: [['paketfilter', 'prüft'], ['quelladresse', 'zieladresse', 'port'], ['erlaubt', 'blockiert', 'regel']]
    },
    {
        question: 'Beschreiben Sie die Funktionsweise einer NAT-Firewall.',
        correctAnswers: ['Eine NAT Firewall ersetzt interne private Adressen durch eine öffentliche Adresse und führt eine Zuordnungstabelle. Antworten werden anhand dieser Tabelle an den richtigen internen Host zurückgegeben'],
        requiredKeywords: [['nat'], ['privat', 'intern'], ['öffentlich'], ['tabelle', 'zuordnung']]
    },
    
    // Übergreifende Fragen
    {
        question: 'Ordnen Sie zu TCP/IP-Schichten zu: Ethernet-Switch, TCP, ARP, UTP-Kabel, DNS, http, RJ-45, POP3, UDP',
        correctAnswers: ['Physikalisch UTP Kabel RJ 45. Netzzugang Ethernet Switch ARP. Vermittlung Virtuelle Verbindung UDP. Anwendung DNS http POP3 TCP'],
        requiredKeywords: [['physikalisch', 'utp', 'rj'], ['netzzugang', 'ethernet', 'arp'], ['vermittlung', 'udp'], ['anwendung', 'dns', 'http', 'tcp']]
    },
    {
        question: 'Erklären Sie den Begriff Basisband.',
        correctAnswers: ['Übertragung ohne Frequenzmultiplex'],
        requiredKeywords: [['ohne'], ['frequenzmultiplex', 'multiplex', 'modulation']]
    },
    {
        question: 'Was bedeutet WAN?',
        correctAnswers: ['Weitverkehrsnetz'],
        requiredKeywords: [['weitverkehr', 'wide area', 'wan']]
    },
    {
        question: 'Was ist IEEE 802.11n/ac?',
        correctAnswers: ['WLAN Standard mit höherer Datenrate durch MIMO'],
        requiredKeywords: [['wlan'], ['mimo', 'datenrate', 'schnell']]
    },
    {
        question: 'Was ist ein Funktionsverbund/Dienst?',
        correctAnswers: ['Zusammenspiel mehrerer Systeme zu einem Dienst'],
        requiredKeywords: [['zusammenspiel', 'mehrere'], ['system', 'dienst']]
    },
    {
        question: 'Was ist das OSI-Referenzmodell?',
        correctAnswers: ['Sieben Schichten zur Strukturierung der Kommunikation'],
        requiredKeywords: [['sieben', '7'], ['schicht'], ['kommunikation', 'struktur']]
    },
    {
        question: 'Was ist eine Firewall?',
        correctAnswers: ['Gerät zur Filterung und Kontrolle von Datenverkehr'],
        requiredKeywords: [['filter', 'kontroll'], ['datenverkehr', 'traffic', 'verkehr']]
    },
    {
        question: 'Was ist LTE?',
        correctAnswers: ['Mobilfunkstandard der vierten Generation'],
        requiredKeywords: [['mobilfunk', '4g', 'viert']]
    },
    {
        question: 'Was ist ein Splitter?',
        correctAnswers: ['Trennt Telefon und DSL Signal'],
        requiredKeywords: [['trenn'], ['telefon', 'dsl', 'signal']]
    },
    {
        question: 'Was ist die Digitale Dividende?',
        correctAnswers: ['Freigewordene Funkfrequenzen nach Abschaltung alter Rundfunktechnik'],
        requiredKeywords: [['frequenz', 'funk'], ['abschalt', 'rundfunk', 'frei']]
    },
    {
        question: 'Was ist ARP?',
        correctAnswers: ['Protokoll zum Ermitteln der MAC Adresse zu einer IP Adresse'],
        requiredKeywords: [['mac'], ['ip'], ['ermitteln', 'auflösen', 'protokoll']]
    }
];

// Das OSI-Modell von unten nach oben
const osiLayers = [
    { 
        name: 'Physical', 
        alternatives: ['Bitübertragungsschicht', 'Physikalische Schicht', 'Layer 1'],
        description: 'Übertragung von Bits über physikalische Medien (Kabel, Funk). Elektr. Signale, Stecker, Spannung.'
    },
    { 
        name: 'Data Link', 
        alternatives: ['Sicherungsschicht', 'Verbindungsschicht', 'Layer 2'],
        description: 'Fehlerfreie Übertragung von Rahmen (Frames). MAC-Adressen, Switches, Ethernet.'
    },
    { 
        name: 'Network', 
        alternatives: ['Vermittlungsschicht', 'Netzwerkschicht', 'Layer 3'],
        description: 'Routing und Adressierung. IP-Adressen, Router, Paketvermittlung.'
    },
    { 
        name: 'Transport', 
        alternatives: ['Transportschicht', 'Layer 4'],
        description: 'Ende-zu-Ende Verbindung. TCP, UDP, Ports, Segmentierung.'
    },
    { 
        name: 'Session', 
        alternatives: ['Sitzungsschicht', 'Layer 5'],
        description: 'Steuerung von Sitzungen und Dialogen. Verbindungsaufbau und -abbau.'
    },
    { 
        name: 'Presentation', 
        alternatives: ['Darstellungsschicht', 'Präsentationsschicht', 'Layer 6'],
        description: 'Datenformatierung, Verschlüsselung, Kompression. Umwandlung von Daten.'
    },
    { 
        name: 'Application', 
        alternatives: ['Anwendungsschicht', 'Layer 7'],
        description: 'Anwendungsprotokolle. HTTP, FTP, SMTP, DNS. Schnittstelle zum Benutzer.'
    }
];

// Game State
let gameMode = null; // 'osi-layer', 'osi-props', 'general', oder 'brain'
let currentLayer = 0;
let attempts = 0;
let deaths = 0;
let currentQuestions = []; // Für randomisierte Fragen
let currentQuestionIndex = 0;
let lives = 5; // Herzen-System
const MAX_LIVES = 5;

// Brain Miniboss State
let wrongQuestions = new Map(); // Speichert falsche Fragen und wie oft sie falsch waren
let brainQuestions = []; // Die aktuellen Brain-Challenge Fragen
let brainStreaks = new Map(); // Zählt korrekte Antworten in Folge (muss 3 sein)
let brainBossHealth = 0;

// DOM Elements
const elements = {
    startScreen: null,
    gameScreen: null,
    osiLayerBtn: null,
    osiPropsBtn: null,
    generalModeBtn: null,
    brainModeBtn: null,
    brainDescription: null,
    answerInput: null,
    submitBtn: null,
    question: null,
    messageArea: null,
    storyText: null,
    bossHealth: null,
    healthText: null,
    attemptsDisplay: null,
    bossImage: null,
    bossName: null,
    gameArea: null,
    heartsContainer: null
};

// Initialize game
function initGame() {
    // Cache DOM elements
    elements.startScreen = document.getElementById('startScreen');
    elements.gameScreen = document.getElementById('gameScreen');
    elements.osiLayerBtn = document.getElementById('osiLayerBtn');
    elements.osiPropsBtn = document.getElementById('osiPropsBtn');
    elements.generalModeBtn = document.getElementById('generalModeBtn');
    elements.brainModeBtn = document.getElementById('brainModeBtn');
    elements.brainDescription = document.getElementById('brainDescription');
    elements.answerInput = document.getElementById('answerInput');
    elements.submitBtn = document.getElementById('submitBtn');
    elements.question = document.getElementById('question');
    elements.messageArea = document.getElementById('messageArea');
    elements.storyText = document.getElementById('storyText');
    elements.bossHealth = document.getElementById('bossHealth');
    elements.healthText = document.getElementById('healthText');
    elements.attemptsDisplay = document.getElementById('attempts');
    elements.bossImage = document.getElementById('bossImage');
    elements.bossName = document.getElementById('bossName');
    elements.gameArea = document.getElementById('gameArea');
    elements.heartsContainer = document.getElementById('heartsContainer');

    // Event listeners for mode selection
    elements.osiLayerBtn.addEventListener('click', () => startGame('osi-layer'));
    elements.osiPropsBtn.addEventListener('click', () => startGame('osi-props'));
    elements.generalModeBtn.addEventListener('click', () => startGame('general'));
    elements.brainModeBtn.addEventListener('click', () => startGame('brain'));
    
    // Event listeners for game
    elements.answerInput.addEventListener('keypress', handleKeyPress);
    elements.submitBtn.addEventListener('click', handleSubmit);
    
    // Initialize brain button state
    updateBrainButton();
    
    // Load saved wrong questions from localStorage
    loadWrongQuestions();
}

// Start game with selected mode
function startGame(mode) {
    gameMode = mode;
    currentLayer = 0;
    currentQuestionIndex = 0;
    attempts = 0;
    deaths = 0;
    lives = MAX_LIVES; // Reset Herzen
    
    // Hide start screen, show game screen
    elements.startScreen.classList.add('hidden');
    elements.gameScreen.classList.remove('hidden');
    
    // Update hearts display
    updateHeartsDisplay();
    
    // Prepare questions based on mode
    if (mode === 'osi-layer') {
        // OSI Layer-Nummern: Von 1-7 in richtiger Reihenfolge aufzählen
        currentQuestions = [...osiLayers]; // KEINE Randomisierung - feste Reihenfolge 1-7
        elements.storyText.textContent = 'Jakubasch brüllt: "Nenne mir die OSI-Schichten der Reihe nach! Von Layer 1 bis Layer 7!"';
        elements.bossImage.src = 'images/Jaku.jpg';
        elements.bossName.textContent = 'JAKUBASCH - Der Prüfungsdämon';
    } else if (mode === 'osi-props') {
        // OSI Layer-Eigenschaften: "Welche Schicht macht X?"
        currentQuestions = shuffleArray([...osiLayers]);
        elements.storyText.textContent = 'Jakubasch grinst: "Ich beschreibe dir die Funktion - du nennst mir die Schicht!"';
        elements.bossImage.src = 'images/Jaku.jpg';
        elements.bossName.textContent = 'JAKUBASCH - Der Prüfungsdämon';
    } else if (mode === 'general') {
        // Randomize general questions
        currentQuestions = shuffleArray([...generalQuestions]);
        elements.storyText.textContent = 'Jakubasch grinst hämisch: "Zeit für einen echten Test! Beantworte meine Fragen, wenn du kannst!"';
        elements.bossImage.src = 'images/Jaku.jpg';
        elements.bossName.textContent = 'JAKUBASCH - Der Prüfungsdämon';
    } else if (mode === 'brain') {
        // Brain mode - nur schwierige Fragen
        brainQuestions = Array.from(wrongQuestions.keys()).map(questionText => {
            return generalQuestions.find(q => q.question === questionText);
        }).filter(q => q !== undefined);
        currentQuestions = [...brainQuestions];
        brainStreaks.clear();
        brainQuestions.forEach(q => brainStreaks.set(q.question, 0));
        brainBossHealth = brainQuestions.length;
        elements.storyText.innerHTML = 'Ein neuer Gegner erscheint: <strong>SMOOTHBRAIN</strong> - So sieht dein Hirn aus HAHA!<br>"Ich bin aus deinen Fehlern geboren! Du musst jede Frage 3 MAL HINTEREINANDER richtig beantworten, um mich zu besiegen!"';
        elements.bossImage.src = 'images/Brain.jpg';
        elements.bossName.textContent = 'SMOOTHBRAIN - Dein Hirn';
    }
    
    updateBossHealth();
    updateAttemptsDisplay();
    updateQuestion();
    elements.answerInput.focus();
}

// Update hearts display
function updateHeartsDisplay() {
    const hearts = elements.heartsContainer.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        if (index < lives) {
            heart.classList.remove('lost');
            heart.textContent = '❤️';
        } else {
            heart.classList.add('lost');
            heart.textContent = '🖤';
        }
    });
}

// Lose a heart with animation
function loseHeart() {
    if (lives > 0) {
        lives--;
        const hearts = elements.heartsContainer.querySelectorAll('.heart');
        const heartToLose = hearts[lives];
        heartToLose.classList.add('losing');
        
        setTimeout(() => {
            heartToLose.classList.remove('losing');
            updateHeartsDisplay();
        }, 500);
    }
}

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Handle Enter key press
function handleKeyPress(e) {
    if (e.key === 'Enter') {
        elements.submitBtn.click();
    }
}

// Handle answer submission
function handleSubmit() {
    const answer = elements.answerInput.value.trim().toLowerCase();
    
    if (!answer) {
        showMessage('Du musst eine Antwort eingeben!', 'error');
        return;
    }

    attempts++;
    updateAttemptsDisplay();

    if (isAnswerCorrect(answer)) {
        handleCorrectAnswer();
    } else {
        handleWrongAnswer();
    }

    elements.answerInput.value = '';
}

// Check if answer is correct
function isAnswerCorrect(answer) {
    if (gameMode === 'osi-layer' || gameMode === 'osi-props') {
        const currentOsi = currentQuestions[currentQuestionIndex];
        const correctAnswers = [
            currentOsi.name.toLowerCase(),
            ...currentOsi.alternatives.map(a => a.toLowerCase())
        ];
        // Auch Layer-Nummer akzeptieren
        const layerNumber = osiLayers.indexOf(osiLayers.find(l => l.name === currentOsi.name)) + 1;
        correctAnswers.push(layerNumber.toString());
        correctAnswers.push('layer ' + layerNumber);
        correctAnswers.push('schicht ' + layerNumber);
        
        return correctAnswers.some(correct => answer.includes(correct.toLowerCase()));
    } else if (gameMode === 'general' || gameMode === 'brain') {
        const currentQ = currentQuestions[currentQuestionIndex];
        
        // Prüfe ob requiredKeywords definiert sind
        if (currentQ.requiredKeywords && currentQ.requiredKeywords.length > 0) {
            // Jede Keyword-Gruppe muss mindestens ein Match haben
            return currentQ.requiredKeywords.every(keywordGroup => {
                return keywordGroup.some(keyword => answer.includes(keyword.toLowerCase()));
            });
        }
        
        // Fallback: Exakte Übereinstimmung mit correctAnswers
        const correctAnswers = currentQ.correctAnswers.map(a => a.toLowerCase());
        return correctAnswers.some(correct => answer === correct);
    }
    return false;
}

// Handle correct answer
function handleCorrectAnswer() {
    if (gameMode === 'brain') {
        // Brain mode: Erhöhe Streak
        const currentQ = currentQuestions[currentQuestionIndex];
        const currentStreak = brainStreaks.get(currentQ.question) || 0;
        brainStreaks.set(currentQ.question, currentStreak + 1);
        
        if (currentStreak + 1 >= 3) {
            // Frage gemeistert!
            showMessage(`✅ Richtig! Diese Frage ${currentStreak + 1}x in Folge richtig! 🔥`, 'success');
            wrongQuestions.delete(currentQ.question);
            saveWrongQuestions();
            brainBossHealth--;
            updateBossHealth();
            animateBossHit();
            
            // Entferne die gemeisterte Frage
            currentQuestions.splice(currentQuestionIndex, 1);
            brainQuestions = [...currentQuestions];
            
            if (currentQuestions.length === 0) {
                victory();
                return;
            }
            
            // Gehe zur nächsten Frage (oder wrap around)
            if (currentQuestionIndex >= currentQuestions.length) {
                currentQuestionIndex = 0;
            }
        } else {
            showMessage(`✅ Richtig! Noch ${3 - (currentStreak + 1)}x hintereinander für diese Frage! 💪`, 'success');
            // Gehe zur nächsten Frage
            currentQuestionIndex = (currentQuestionIndex + 1) % currentQuestions.length;
        }
        updateQuestion();
    } else {
        currentQuestionIndex++;
        
        if (gameMode === 'osi-layer' || gameMode === 'osi-props') {
            showMessage(`✅ Richtig! Frage ${currentQuestionIndex} von 7 gemeistert!`, 'success');
        } else {
            showMessage(`✅ Richtig! Weiter so!`, 'success');
        }
        
        // Update boss health
        updateBossHealth();
        
        // Animate boss hit
        animateBossHit();

        if (currentQuestionIndex >= currentQuestions.length) {
            victory();
        } else {
            updateQuestion();
        }
    }
}

// Handle wrong answer
function handleWrongAnswer() {
    deaths++;
    lives--;
    updateAttemptsDisplay();
    updateHeartsDisplay();
    
    // Track wrong question (außer im OSI-Modus)
    if (gameMode === 'general') {
        const currentQ = currentQuestions[currentQuestionIndex];
        const wrongCount = wrongQuestions.get(currentQ.question) || 0;
        wrongQuestions.set(currentQ.question, wrongCount + 1);
        saveWrongQuestions();
        updateBrainButton();
    } else if (gameMode === 'brain') {
        // Im Brain-Modus: Reset streak
        const currentQ = currentQuestions[currentQuestionIndex];
        brainStreaks.set(currentQ.question, 0);
    }
    
    // Wenn alle Leben verloren, Fragen resetten
    if (lives === 0) {
        showResetOverlay();
        return;
    }

    const laughs = gameMode === 'brain' 
        ? [
            "HAHAHA! RESET! Deine Serie ist unterbrochen!",
            "SMOOTHBRAIN lacht: Du wirst diese Frage NIE lernen!",
            "Wieder bei NULL! Dein Gehirn ist SMOOTH wie Butter!",
            "FALSCH! So sieht dein Hirn aus - GLATT und LEER!"
        ]
        : [
            "HAHAHAHA! FALSCH! Deine Zukunft ist RUINIERT! Du wirst in der Prüfung VERSAGEN!",
            "MWAHAHAHA! Pathétisch! Du kennst nicht mal die Grundlagen! GESCHEITERT!",
            "HOHOHO! Wie armsélig! Du hast deine Karriere gerade ZERSTÖRT!",
            "KEHEHE! Ein weiteres Opfer! Deine Zukunft gehört MIR!",
            "HIHIHI! So wird das NICHTS mit dem Abschluss! VERSAGER!"
        ];

    const randomLaugh = laughs[Math.floor(Math.random() * laughs.length)];
    
    showGameOverOverlay(randomLaugh);
}

// Show game over overlay
function showGameOverOverlay(laughText) {
    const currentQ = currentQuestions[currentQuestionIndex];
    
    // Korrekte Antwort anzeigen
    let correctAnswer;
    if (gameMode === 'osi-layer' || gameMode === 'osi-props') {
        correctAnswer = currentQ.name;
    } else {
        correctAnswer = currentQ.correctAnswers[0];
    }
    
    const bossName = gameMode === 'brain' ? 'SMOOTHBRAIN' : 'JAKUBASCH';
    
    const overlay = document.createElement('div');
    overlay.className = 'game-over-overlay';
    overlay.innerHTML = `
        <div class="game-over-box">
            <div class="jakubasch-laugh">
                💀 ${bossName}: "${laughText}" 💀
            </div>
            <div class="correct-answer">
                📚 Die richtige Antwort wäre gewesen:<br>
                <strong style="font-size: 1.3em; color: #2ed573;">${correctAnswer}</strong>
            </div>
            <div class="message error" style="margin: 20px 0;">
                ❌ FALSCH! ❌<br>
                Versuch es nochmal!
            </div>
            <button class="button retry" id="continueBtn">
                ⚔️ WEITER KÄMPFEN!
            </button>
            <button class="button" id="mainMenuBtn" style="margin-top: 10px; background: linear-gradient(135deg, #555 0%, #333 100%);">
                🏠 Zurück zum Hauptmenü
            </button>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Continue button handler - bleibt im aktuellen Modus
    document.getElementById('continueBtn').addEventListener('click', () => {
        document.body.removeChild(overlay);
        elements.answerInput.focus();
    });
    
    // Main menu button handler
    document.getElementById('mainMenuBtn').addEventListener('click', () => {
        document.body.removeChild(overlay);
        backToStart();
    });
}

// Show reset overlay when all lives are lost
function showResetOverlay() {
    const bossName = gameMode === 'brain' ? 'SMOOTHBRAIN' : 'JAKUBASCH';
    
    const messages = [
        "MWAHAHAHA! Alle Leben verloren! Zurück auf Anfang mit dir!",
        "HAHAHAHA! Du hast 5 mal versagt! Jetzt geht alles von vorne los!",
        "HOHOHO! Pathétisch! Deine Chancen sind AUFGEBRAUCHT!",
        "KEHEHE! 5 Fehler! Dein Wissen ist so LÖCHRIG wie ein Schweizer Käse!"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    const overlay = document.createElement('div');
    overlay.className = 'game-over-overlay';
    overlay.innerHTML = `
        <div class="game-over-box">
            <div class="jakubasch-laugh">
                💀 ${bossName}: "${randomMessage}" 💀
            </div>
            <div class="hearts-lost-display" style="font-size: 3em; margin: 20px 0;">
                💔💔💔💔💔
            </div>
            <div class="message error" style="margin: 20px 0;">
                ❌ ALLE LEBEN VERLOREN! ❌<br>
                Die Fragen werden zurückgesetzt!
            </div>
            <button class="button retry" id="restartBtn">
                🔄 VON VORNE STARTEN!
            </button>
            <button class="button" id="mainMenuBtn2" style="margin-top: 10px; background: linear-gradient(135deg, #555 0%, #333 100%);">
                🏠 Zurück zum Hauptmenü
            </button>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Restart button handler - Reset und neu starten
    document.getElementById('restartBtn').addEventListener('click', () => {
        document.body.removeChild(overlay);
        resetQuestionsAndLives();
    });
    
    // Main menu button handler
    document.getElementById('mainMenuBtn2').addEventListener('click', () => {
        document.body.removeChild(overlay);
        backToStart();
    });
}

// Reset questions and lives
function resetQuestionsAndLives() {
    lives = 5;
    currentQuestionIndex = 0;
    
    // Re-shuffle questions based on mode
    if (gameMode === 'osi-layer') {
        // OSI Layer-Nummern: feste Reihenfolge 1-7
        currentQuestions = [...osiLayers];
    } else if (gameMode === 'osi-props') {
        // OSI Eigenschaften: zufällige Reihenfolge
        currentQuestions = shuffleArray([...osiLayers]);
    } else if (gameMode === 'general') {
        currentQuestions = shuffleArray([...generalQuestions]);
    } else if (gameMode === 'brain') {
        currentQuestions = shuffleArray([...currentQuestions.map(q => ({...q}))]);
    }
    
    updateHeartsDisplay();
    updateBossHealth();
    updateQuestion();
    elements.answerInput.focus();
}

// Back to start screen
function backToStart() {
    elements.gameScreen.classList.add('hidden');
    elements.startScreen.classList.remove('hidden');
    gameMode = null;
    currentQuestionIndex = 0;
    attempts = 0;
    deaths = 0;
}

// Reset game state
function resetGame() {
    currentQuestionIndex = 0;
    
    // Re-shuffle questions
    if (gameMode === 'osi') {
        currentQuestions = shuffleArray([...osiLayers]);
    } else if (gameMode === 'general') {
        currentQuestions = shuffleArray([...generalQuestions]);
    }
    
    updateBossHealth();
    updateQuestion();
    elements.answerInput.focus();
}

// Update question text
function updateQuestion() {
    if (gameMode === 'osi-layer') {
        // OSI Layer-Nummern Modus: Frage nach dem Namen des Layers
        const currentOsiLayer = currentQuestions[currentQuestionIndex];
        elements.question.innerHTML = `
            <strong>Frage ${currentQuestionIndex + 1}/${currentQuestions.length}:</strong><br>
            Welche OSI-Schicht ist Layer ${currentOsiLayer.layer}?<br>
            <span style="font-size: 0.9em; color: #4ecdc4; margin-top: 10px; display: block;">
                💡 Gib den Namen der Schicht ein
            </span>
        `;
    } else if (gameMode === 'osi-props') {
        // OSI Eigenschaften Modus: Frage basierend auf Beschreibung
        const currentOsiLayer = currentQuestions[currentQuestionIndex];
        elements.question.innerHTML = `
            <strong>Frage ${currentQuestionIndex + 1}/${currentQuestions.length}:</strong><br>
            Welche OSI-Schicht ist gemeint?<br>
            <span style="font-size: 0.9em; color: #4ecdc4; margin-top: 10px; display: block;">
                💡 ${currentOsiLayer.description}
            </span>
        `;
    } else if (gameMode === 'general') {
        elements.question.textContent = `Frage ${currentQuestionIndex + 1}/${currentQuestions.length}: ${currentQuestions[currentQuestionIndex].question}`;
    } else if (gameMode === 'brain') {
        const currentQ = currentQuestions[currentQuestionIndex];
        const streak = brainStreaks.get(currentQ.question) || 0;
        const streakDisplay = Array(3).fill(0).map((_, i) => 
            `<span class="streak-indicator ${i < streak ? 'completed' : 'pending'}">${i < streak ? '✓' : '○'}</span>`
        ).join('');
        
        elements.question.innerHTML = `
            <div class="question-progress">Verbleibende Fragen: ${currentQuestions.length} | Fortschritt dieser Frage: ${streakDisplay}</div>
            <strong>Frage:</strong> ${currentQ.question}
        `;
    }
}

// Update boss health display
function updateBossHealth() {
    if (gameMode === 'brain') {
        const totalHealth = brainBossHealth + currentQuestions.length;
        const currentHealth = currentQuestions.length;
        const healthPercent = (currentHealth / totalHealth) * 100;
        elements.bossHealth.style.width = healthPercent + '%';
        elements.healthText.textContent = `HP: ${currentHealth}/${totalHealth}`;
    } else {
        const totalQuestions = currentQuestions.length || 7;
        const remainingQuestions = totalQuestions - currentQuestionIndex;
        const healthPercent = (remainingQuestions / totalQuestions) * 100;
        elements.bossHealth.style.width = healthPercent + '%';
        elements.healthText.textContent = `HP: ${remainingQuestions}/${totalQuestions}`;
    }
}

// Animate boss when hit
function animateBossHit() {
    elements.bossImage.style.animation = 'shake 0.5s';
    setTimeout(() => {
        elements.bossImage.style.animation = 'bossFloat 3s ease-in-out infinite';
    }, 500);
}

// Update attempts display
function updateAttemptsDisplay() {
    elements.attemptsDisplay.textContent = `Versuche: ${attempts} | Tode: ${deaths}`;
}

// Handle victory
function victory() {
    const victoryText = gameMode === 'osi'
        ? 'Alle 7 OSI-Schichten gemeistert!'
        : `Alle ${currentQuestions.length} Fragen richtig beantwortet!`;
    
    elements.messageArea.innerHTML = `
        <div class="message victory">
            🎉 SIEG! 🎉<br>
            Du hast Jakubasch besiegt!<br>
            ${victoryText}<br>
            Deine Zukunft ist gerettet! ✨
        </div>
    `;

    elements.storyText.innerHTML = `
        Jakubasch fällt auf die Knie: "NEIN! Das ist unmöglich! Du... du kennst sie ALLE!"<br><br>
        Er löst sich in Rauch auf. Du hast es geschafft!<br><br>
        <strong>Statistik:</strong><br>
        Versuche: ${attempts} | Tode: ${deaths}<br><br>
        🏆 Du hast das OSI-Modell gemeistert! 🏆
    `;

    // Boss image fade out
    elements.bossImage.style.opacity = '0.3';
    elements.bossImage.style.filter = 'grayscale(100%)';

    elements.gameArea.classList.add('hidden');
    elements.submitBtn.textContent = '🔄 NOCHMAL SPIELEN';
    elements.submitBtn.classList.remove('hidden');
    elements.submitBtn.onclick = () => location.reload();
}

// Show message
function showMessage(text, type) {
    const msg = document.createElement('div');
    msg.className = `message ${type}`;
    msg.textContent = text;
    elements.messageArea.innerHTML = '';
    elements.messageArea.appendChild(msg);
    
    setTimeout(() => {
        if (elements.messageArea.contains(msg)) {
            elements.messageArea.removeChild(msg);
        }
    }, 3000);
}

// Update Brain button state
function updateBrainButton() {
    const brainCount = wrongQuestions.size;
    if (brainCount === 0) {
        elements.brainModeBtn.disabled = true;
        elements.brainDescription.textContent = 'Keine schwierigen Fragen vorhanden';
    } else {
        elements.brainModeBtn.disabled = false;
        elements.brainDescription.textContent = `${brainCount} schwierige Frage${brainCount > 1 ? 'n' : ''} warten auf dich!`;
    }
}

// Save wrong questions to localStorage
function saveWrongQuestions() {
    const data = Array.from(wrongQuestions.entries());
    localStorage.setItem('wrongQuestions', JSON.stringify(data));
}

// Load wrong questions from localStorage
function loadWrongQuestions() {
    const saved = localStorage.getItem('wrongQuestions');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            wrongQuestions = new Map(data);
            updateBrainButton();
        } catch (e) {
            console.error('Fehler beim Laden der falschen Fragen:', e);
        }
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', initGame);
