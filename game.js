// OSI-Quest Game Logic

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

// Allgemeine Fragen
const generalQuestions = [
    {
        question: 'Was versteht man unter der zunehmenden Konvergenz der Medien? Nennen Sie zwei Beispiele.',
        correctAnswers: [
            'Zusammenwachsen verschiedener Medientypen zu gemeinsamen Plattformen',
            'Fernsehen über Internet, Smartphones vereinen Kamera Rechner Unterhaltung'
        ],
        alternatives: [
            'konvergenz',
            'zusammenwachsen',
            'medientypen',
            'plattformen',
            'smartphone',
            'fernsehen',
            'internet',
            'iptv',
            'streaming',
            'kamera',
            'rechner',
            'unterhaltung',
            'vereinen'
        ]
    },
    {
        question: 'Worin unterscheiden sich in der Nachrichtentechnik Information und Nachricht?',
        correctAnswers: [
            'Information ist der abstrakte Bedeutungsgehalt, Nachricht ist das technisch übertragene Signal'
        ],
        alternatives: [
            'information',
            'nachricht',
            'abstrakt',
            'bedeutungsgehalt',
            'bedeutung',
            'signal',
            'technisch',
            'übertragen',
            'transportiert',
            'inhalt',
            'träger'
        ]
    },
    {
        question: 'Erläutern Sie die Funktion einer Schicht im OSI-Referenzmodell. Mit welchen anderen Schichten wird kommuniziert?',
        correctAnswers: [
            'Schicht übernimmt klar abgegrenzte Aufgaben, bietet Dienste für darüber liegende Schicht',
            'Kommuniziert nur mit nächsthöherer und nächstniedrigerer Schicht'
        ],
        alternatives: [
            'schicht',
            'layer',
            'aufgaben',
            'abgegrenzt',
            'dienste',
            'darüber',
            'darunter',
            'nächsthöher',
            'nächstniedriger',
            'kommuniziert',
            'struktur',
            'austauschbar',
            'fehlersuche',
            'vorteil'
        ]
    },
    {
        question: 'Erläutern Sie kurz die drei Begriffe Schrittgeschwindigkeit, Übertragungskapazität und Bandbreite und geben Sie jeweils die Maßeinheit an.',
        correctAnswers: [
            'Schrittgeschwindigkeit: Signalzustandswechsel pro Sekunde in Baud',
            'Übertragungskapazität: maximale Datenrate in bit/s',
            'Bandbreite: nutzbarer Frequenzbereich in Hertz'
        ],
        alternatives: [
            'schrittgeschwindigkeit',
            'signalzustandswechsel',
            'baud',
            'übertragungskapazität',
            'datenrate',
            'bit/s',
            'bps',
            'bandbreite',
            'frequenzbereich',
            'hertz',
            'hz'
        ]
    },
    {
        question: 'Definieren Sie kurz die Begriffe Basisband, Schmalband und Breitband.',
        correctAnswers: [
            'Basisband nutzt gesamtes Medium ohne Frequenzmultiplex',
            'Schmalband nutzt kleinen begrenzten Frequenzbereich',
            'Breitband nutzt großen Frequenzbereich für hohe Datenraten'
        ],
        alternatives: [
            'basisband',
            'gesamtes medium',
            'frequenzmultiplex',
            'schmalband',
            'begrenzt',
            'breitband',
            'großer frequenzbereich',
            'hohe datenraten',
            'frequenzbereich'
        ]
    },
    {
        question: 'Welche grundlegenden Medienzugriffsverfahren gibt es? Nennen Sie jeweils ein Beispiel.',
        correctAnswers: [
            'Deterministisch (Token Ring), Wettbewerbsbasiert (CSMA/CD), Reservierungsbasiert (Polling)'
        ],
        alternatives: [
            'deterministisch',
            'token ring',
            'token',
            'wettbewerb',
            'csma',
            'csma/cd',
            'reservierung',
            'polling',
            'kollision'
        ]
    },
    {
        question: 'Wie heißt das Verkabelungskonzept bei der Kommunikationsinfrastruktur in Bürogebäuden? Welche Topologie entsteht?',
        correctAnswers: [
            'Strukturierte Verkabelung mit Primär-, Sekundär- und Tertiärverkabelung',
            'Zentrale Verteilerpunkte, Stern-Topologie'
        ],
        alternatives: [
            'strukturierte verkabelung',
            'structured cabling',
            'primär',
            'sekundär',
            'tertiär',
            'verteiler',
            'stern',
            'star',
            'topologie'
        ]
    },
    {
        question: 'Wie viele Wanddosen sehen Sie in einem Büroraum mit drei Arbeitsplätzen vor? Warum?',
        correctAnswers: [
            'Zwei Dosen pro Arbeitsplatz, also sechs insgesamt',
            'Grund: Redundanz und gleichzeitige Nutzung unterschiedlicher Dienste'
        ],
        alternatives: [
            '6',
            'sechs',
            'zwei pro arbeitsplatz',
            '2 pro',
            'redundanz',
            'dienste',
            'gleichzeitig',
            'reserve'
        ]
    },
    {
        question: 'Nennen Sie für UTP, FTP, S/FTP und Glasfasern jeweils geeignete Anwendungsbereiche.',
        correctAnswers: [
            'UTP: einfache Büroverkabelung',
            'FTP: stärkere Störeinstrahlung',
            'S/FTP: hohe Störsicherheit in Technikräumen',
            'Glasfaser: große Entfernungen und hohe Datenraten'
        ],
        alternatives: [
            'utp',
            'büro',
            'einfach',
            'ftp',
            'störung',
            'störeinstrahlung',
            's/ftp',
            'sftp',
            'störsicherheit',
            'technikraum',
            'glasfaser',
            'entfernung',
            'datenrate'
        ]
    },
    {
        question: 'Welche physikalische Eigenschaft geben die Kategorien von Twisted-Pair-Kabeln (Cat.5, Cat.6) an?',
        correctAnswers: [
            'Maximal unterstützte Frequenz und damit erreichbare Datenrate'
        ],
        alternatives: [
            'frequenz',
            'datenrate',
            'bandbreite',
            'übertragungsrate',
            'mhz',
            'kategorie',
            'cat'
        ]
    },
    {
        question: 'Was bedeutet Cat.7? Worin unterscheidet es sich von Cat.5?',
        correctAnswers: [
            'Cat.7 unterstützt höhere Frequenzen und bessere Schirmung als Cat.5',
            'Ermöglicht deutlich höhere Datenraten'
        ],
        alternatives: [
            'cat.7',
            'cat7',
            'cat.5',
            'cat5',
            'höhere frequenz',
            'bessere schirmung',
            'höhere datenrate',
            'mhz',
            'bandbreite'
        ]
    },
    {
        question: 'Welche Ethernet-Varianten sind in Primär-, Sekundär- und Tertiärbereich gebräuchlich?',
        correctAnswers: [
            'Primärbereich: Glasfaser-Ethernet',
            'Sekundärbereich: Glasfaser oder Kupfer Gigabit-Ethernet',
            'Tertiärbereich: Kupfer Gigabit oder Fast-Ethernet'
        ],
        alternatives: [
            'primär',
            'sekundär',
            'tertiär',
            'glasfaser',
            'kupfer',
            'gigabit',
            'fast ethernet',
            '10gbase',
            '1000base',
            '100base'
        ]
    },
    {
        question: 'Welche Ethernet-Varianten sind im WAN gebräuchlich?',
        correctAnswers: [
            'Metro Ethernet und Carrier Ethernet'
        ],
        alternatives: [
            'wan',
            'metro ethernet',
            'carrier ethernet',
            '10gbase',
            '100gbase',
            'glasfaser',
            'weitverkehr'
        ]
    },
    {
        question: 'In welchen Bereichen sind Glasfasern und in welchen sind Kupferkabel vorzuziehen?',
        correctAnswers: [
            'Glasfaser: große Entfernungen, hohe Datenraten, elektromagnetische Unempfindlichkeit',
            'Kupfer: kurze Strecken, niedrige Kosten, PoE-Versorgung'
        ],
        alternatives: [
            'glasfaser',
            'große entfernung',
            'hohe datenrate',
            'elektromagnetisch',
            'unempfindlich',
            'kupfer',
            'kurze strecke',
            'kosten',
            'poe',
            'günstig'
        ]
    },
    {
        question: 'Was ist PoE? Nennen Sie zwei Anwendungsgebiete dafür.',
        correctAnswers: [
            'Power over Ethernet überträgt Strom über Netzwerkkabel',
            'Beispiele: IP-Kameras und Access Points'
        ],
        alternatives: [
            'poe',
            'power over ethernet',
            'strom',
            'netzwerkkabel',
            'ip-kamera',
            'kamera',
            'access point',
            'wlan',
            'ap',
            'voip'
        ]
    },
    {
        question: 'Wie ist eine Ethernet-Adresse (MAC-Adresse) aufgebaut? Wie wird Eindeutigkeit gewährleistet?',
        correctAnswers: [
            'MAC-Adressen bestehen aus 6×2 hexadezimalen Oktetten',
            'Erste drei Oktette vom Hersteller sichern globale Eindeutigkeit',
            'Kommunikation im lokalen Netzwerk'
        ],
        alternatives: [
            'mac',
            'mac-adresse',
            '6',
            'sechs',
            'oktett',
            'hexadezimal',
            'hersteller',
            'eindeutigkeit',
            'lokal',
            'netzwerk'
        ]
    },
    {
        question: 'Beschreiben Sie den Aufbau und die Funktionsweise eines Ethernet-Switch.',
        correctAnswers: [
            'Switch besteht aus mehreren Ports und interner Weiterleitungstabelle',
            'Lernt MAC-Adressen pro Port und leitet Frames gezielt zum Zielport',
            'Verhindert Kollisionen und segmentiert Verkehr'
        ],
        alternatives: [
            'switch',
            'port',
            'ports',
            'weiterleitungstabelle',
            'mac-adresse',
            'lernt',
            'frame',
            'zielport',
            'kollision',
            'segmentiert',
            'verkehr'
        ]
    },
    {
        question: 'Welche Aufgaben haben bei DSL die Komponenten DSL-Modem, Splitter und DSLAM? Welche Komponente kann bei VoIP entfallen?',
        correctAnswers: [
            'DSL-Modem: Modulation, Splitter: Frequenztrennung, DSLAM: Bündelung. Splitter entfällt bei VoIP'
        ],
        alternatives: [
            'dsl-modem',
            'modem',
            'splitter',
            'dslam',
            'modulation',
            'frequenztrennung',
            'bündelung',
            'voip',
            'entfällt',
            'telefon',
            'vermittlungsstelle'
        ]
    },
    {
        question: 'Was muss ein Netzbetreiber tun, um seinen Standard-DSL-Kunden VDSL anbieten zu können?',
        correctAnswers: [
            'Kupferleitungen durch Glasfaser bis zu Straßenverteilern verlängern',
            'Neue Outdoor-DSLAMs installieren'
        ],
        alternatives: [
            'vdsl',
            'glasfaser',
            'kupferleitung',
            'straßenverteiler',
            'verteiler',
            'outdoor',
            'dslam',
            'installieren',
            'fttc'
        ]
    },
    {
        question: 'Nennen Sie vier Funktionen eines DSL/Kabel-Routers, die man auch als separate Geräte kaufen könnte.',
        correctAnswers: [
            'Modem, Firewall, Switch, WLAN Access Point'
        ],
        alternatives: [
            'modem',
            'firewall',
            'switch',
            'wlan',
            'access point',
            'router',
            'dhcp',
            'nat'
        ]
    },
    {
        question: 'Welche Funkfrequenzen nutzen die aktuellen WLAN-Standards (IEEE 802.11n und IEEE 802.11ac)?',
        correctAnswers: [
            '2,4 Gigahertz und 5 Gigahertz'
        ],
        alternatives: [
            '2,4 ghz',
            '2.4 ghz',
            '5 ghz',
            'gigahertz',
            '802.11n',
            '802.11ac',
            'dual band'
        ]
    },
    {
        question: 'Welche Eigenschaften treffen auf WLAN-Funkwellen zu? a) Wände dämpfen stark b) Wände reflektieren c) Atmosphärenreflexion d) Sichtverbindung nötig',
        correctAnswers: [
            'Richtig sind a und b'
        ],
        alternatives: [
            'a',
            'b',
            'dämpfen',
            'dämpfung',
            'reflektieren',
            'reflexion',
            'wand',
            'wände'
        ]
    },
    {
        question: 'Wie nennt man die Antennen, die typischerweise für WLAN verwendet werden?',
        correctAnswers: [
            'Rundstrahlantennen'
        ],
        alternatives: [
            'rundstrahlantenne',
            'rundstrahlantennen',
            'rundstrahler',
            'omnidirektional',
            'omni'
        ]
    },
    {
        question: 'Nennen Sie zwei Merkmale, durch die WLANs nach IEEE 802.11n schneller sind als ältere Standards.',
        correctAnswers: [
            'MIMO und Kanalbündelung'
        ],
        alternatives: [
            'mimo',
            'kanalbündelung',
            'kanal',
            'bündelung',
            'multiple',
            'antennen'
        ]
    },
    {
        question: 'Nennen Sie zwei weit verbreitete WLAN-Standards. Welche Übertragungskapazitäten sind damit jeweils möglich?',
        correctAnswers: [
            'IEEE 802.11n mit bis zu etwa 300 Megabit pro Sekunde',
            'IEEE 802.11ac mit bis zu etwa 1 Gigabit pro Sekunde'
        ],
        alternatives: [
            '802.11n',
            '802.11ac',
            '300',
            'megabit',
            'mbit',
            '1 gigabit',
            'gbit',
            'wifi 4',
            'wifi 5'
        ]
    },
    {
        question: 'Die Übertragungskapazitäten von WLAN und Ethernet sind nicht direkt vergleichbar. Nennen Sie drei Gründe.',
        correctAnswers: [
            'Gemeinsames Medium mit Kollisionen',
            'Hoher Protokoll- und Steuerungsaufwand',
            'Stärkere Schwankungen durch Störungen und Dämpfung'
        ],
        alternatives: [
            'gemeinsam',
            'medium',
            'kollision',
            'protokoll',
            'steuerung',
            'aufwand',
            'schwankung',
            'störung',
            'dämpfung',
            'overhead'
        ]
    },
    {
        question: 'Was ist ein ISM-Band und was bedeutet es für WLAN?',
        correctAnswers: [
            'Ein lizenzfreier Frequenzbereich für verschiedene Funkanwendungen',
            'Für WLAN bedeutet freie Nutzung bei möglicher Störung durch andere Geräte'
        ],
        alternatives: [
            'ism',
            'lizenzfrei',
            'frequenzbereich',
            'funkanwendung',
            'freie nutzung',
            'störung',
            'geräte',
            'industrial',
            'scientific',
            'medical'
        ]
    },
    {
        question: 'Welche Aussagen sind richtig? a) AP immer nötig b) MIMO braucht mehrere Antennen c) MIMO vergrößert Reichweite d) PoW versorgt Geräte e) WLAN immer verschlüsselt',
        correctAnswers: [
            'Richtig sind b und c'
        ],
        alternatives: [
            'b',
            'c',
            'mimo',
            'antennen',
            'reichweite',
            'mehrere'
        ]
    },
    {
        question: 'Wie ist ein IP-Netzwerk aufgebaut?',
        correctAnswers: [
            'IP-Netzwerk besteht aus Hosts, Routern und Subnetzen',
            'Logisch gegliedert über Adressen und Masken'
        ],
        alternatives: [
            'hosts',
            'router',
            'subnetz',
            'subnetze',
            'adressen',
            'masken',
            'logisch',
            'gegliedert'
        ]
    },
    {
        question: 'Was versteht man unter Routing und wie funktioniert es?',
        correctAnswers: [
            'Routing ist das Weiterleiten von Paketen zwischen Subnetzen',
            'Router prüft Zieladresse und wählt anhand Tabelle den nächsten Weg'
        ],
        alternatives: [
            'routing',
            'weiterleiten',
            'pakete',
            'subnetze',
            'router',
            'zieladresse',
            'prüft',
            'tabelle',
            'weg',
            'next hop'
        ]
    },
    {
        question: 'Welche Informationen sind in einem IP-Header enthalten (vier genügen)?',
        correctAnswers: [
            'Beispiele sind Quelladresse, Zieladresse, TTL, Protokoll und Prüfsumme'
        ],
        alternatives: [
            'quelladresse',
            'quell-ip',
            'source',
            'zieladresse',
            'ziel-ip',
            'destination',
            'ttl',
            'time to live',
            'protokoll',
            'prüfsumme',
            'checksum'
        ]
    },
    {
        question: 'Welche Komponenten können zur Kopplung von Subnetzen verwendet werden - Switches, Router, Patchkabel, Firewalls?',
        correctAnswers: [
            'Zur Kopplung von Subnetzen werden Router oder Firewalls genutzt'
        ],
        alternatives: [
            'router',
            'firewall',
            'firewalls',
            'layer 3',
            'nicht switch',
            'nicht patchkabel'
        ]
    },
    {
        question: 'Welche Informationen nutzt ein Router für die Entscheidung, wohin er ein Datenpaket weiterleitet?',
        correctAnswers: [
            'Er nutzt die Zieladresse und seine Routingtabelle'
        ],
        alternatives: [
            'zieladresse',
            'ziel-ip',
            'destination',
            'routingtabelle',
            'routing-tabelle',
            'tabelle',
            'next hop'
        ]
    },
    {
        question: 'Wozu dienen die Netz- und die Broadcastadresse in einem Subnetz?',
        correctAnswers: [
            'Netzadresse kennzeichnet das Subnetz',
            'Broadcastadresse erreicht alle Geräte im Subnetz gleichzeitig'
        ],
        alternatives: [
            'netzadresse',
            'kennzeichnet',
            'subnetz',
            'broadcast',
            'broadcastadresse',
            'alle geräte',
            'gleichzeitig',
            'erreicht'
        ]
    },
    {
        question: 'Wie bekommt ein Host heraus, welche MAC-Adresse zu einer IP-Adresse gehört? Wie heißt das Protokoll? Beschreiben Sie den Ablauf.',
        correctAnswers: [
            'Über ARP',
            'Host sendet Anfrage an alle im Subnetz',
            'Besitzer der gesuchten Adresse antwortet mit seiner MAC-Adresse'
        ],
        alternatives: [
            'arp',
            'address resolution protocol',
            'anfrage',
            'alle',
            'subnetz',
            'besitzer',
            'antwortet',
            'mac-adresse',
            'broadcast'
        ]
    },
    {
        question: 'Wie ist eine E-Mail-Adresse aufgebaut? Welcher Teil der Adresse hat welche Aufgabe?',
        correctAnswers: [
            'Benutzername gefolgt von At-Zeichen und Domain',
            'Benutzername identifiziert Postfach, Domainname führt zum Mailserver des Anbieters'
        ],
        alternatives: [
            'benutzername',
            'at-zeichen',
            '@',
            'domain',
            'postfach',
            'mailserver',
            'anbieter',
            'identifiziert'
        ]
    },
    {
        question: 'Wie wird ermittelt, welcher Mailserver für eine bestimmte Mailadresse zuständig ist?',
        correctAnswers: [
            'Über einen MX-Eintrag im DNS'
        ],
        alternatives: [
            'mx',
            'mx-eintrag',
            'mx-record',
            'dns',
            'mail exchange',
            'eintrag'
        ]
    },
    {
        question: 'Welche beiden Protokolle sind für die Abholung von E-Mails gebräuchlich? Worin unterscheiden sie sich?',
        correctAnswers: [
            'POP3 und IMAP',
            'POP3 holt Mails meist lokal ab und löscht sie oft am Server',
            'IMAP lässt Mails auf Server und synchronisiert mehrere Geräte'
        ],
        alternatives: [
            'pop3',
            'imap',
            'lokal',
            'löscht',
            'server',
            'synchronisiert',
            'geräte',
            'mehrere'
        ]
    },
    {
        question: 'Erklären Sie kurz, was eine monolithische Firewall ist und was man unter einer Zone versteht.',
        correctAnswers: [
            'Monolithische Firewall ist zentrales Gerät das gesamten Datenverkehr zwischen Netzbereichen kontrolliert',
            'Zone ist logisch abgegrenzter Sicherheitsbereich wie internes Netz oder Internet'
        ],
        alternatives: [
            'monolithisch',
            'zentral',
            'gerät',
            'datenverkehr',
            'netzbereiche',
            'kontrolliert',
            'zone',
            'logisch',
            'sicherheitsbereich',
            'intern',
            'internet'
        ]
    },
    {
        question: 'Beschreiben Sie anhand eines Beispiels, wie Paketfilterregeln funktionieren.',
        correctAnswers: [
            'Paketfilter prüft Felder wie Quelladresse, Zieladresse, Port und Richtung',
            'Beispiel: Regel erlaubt aus internem Netz Port 80 nach außen und blockiert eingehende Verbindungen'
        ],
        alternatives: [
            'paketfilter',
            'prüft',
            'quelladresse',
            'zieladresse',
            'port',
            'richtung',
            'erlaubt',
            'blockiert',
            'intern',
            'außen',
            'eingehend'
        ]
    },
    {
        question: 'Beschreiben Sie die Funktionsweise einer NAT-Firewall.',
        correctAnswers: [
            'NAT-Firewall ersetzt interne private Adressen durch öffentliche Adresse',
            'Führt Zuordnungstabelle',
            'Antworten werden anhand Tabelle an richtigen internen Host zurückgegeben'
        ],
        alternatives: [
            'nat',
            'nat-firewall',
            'ersetzt',
            'private adresse',
            'öffentliche adresse',
            'zuordnung',
            'tabelle',
            'antwort',
            'intern',
            'host'
        ]
    },
    {
        question: 'Ordnen Sie zu TCP/IP-Schichten zu: Ethernet-Switch, TCP, ARP, UTP-Kabel, DNS, http, RJ-45, POP3, UDP',
        correctAnswers: [
            'Physikalisch: UTP-Kabel, RJ-45',
            'Netzzugang: Ethernet-Switch, ARP',
            'Vermittlung: Virtuelle Verbindung, UDP',
            'Anwendung: DNS, http, POP3, TCP'
        ],
        alternatives: [
            'physikalisch',
            'utp',
            'rj-45',
            'rj45',
            'netzzugang',
            'ethernet',
            'switch',
            'arp',
            'vermittlung',
            'udp',
            'anwendung',
            'dns',
            'http',
            'pop3',
            'tcp'
        ]
    },
    {
        question: 'Erklären Sie: Basisband',
        correctAnswers: [
            'Übertragung ohne Frequenzmultiplex'
        ],
        alternatives: [
            'basisband',
            'übertragung',
            'ohne frequenzmultiplex',
            'keine modulation',
            'direkt'
        ]
    },
    {
        question: 'Erklären Sie: WAN',
        correctAnswers: [
            'Weitverkehrsnetz'
        ],
        alternatives: [
            'wan',
            'wide area network',
            'weitverkehr',
            'weitverkehrsnetz'
        ]
    },
    {
        question: 'Erklären Sie: IEEE 802.11n',
        correctAnswers: [
            'WLAN-Standard mit höherer Datenrate durch MIMO'
        ],
        alternatives: [
            '802.11n',
            'wlan',
            'standard',
            'höhere datenrate',
            'mimo'
        ]
    },
    {
        question: 'Erklären Sie: Funktionsverbund',
        correctAnswers: [
            'Zusammenspiel mehrerer Systeme zu einem Dienst'
        ],
        alternatives: [
            'funktionsverbund',
            'zusammenspiel',
            'systeme',
            'dienst',
            'mehrere'
        ]
    },
    {
        question: 'Erklären Sie: OSI-Referenzmodell',
        correctAnswers: [
            'Sieben Schichten zur Strukturierung der Kommunikation'
        ],
        alternatives: [
            'osi',
            'sieben schichten',
            '7 schichten',
            'strukturierung',
            'kommunikation',
            'referenzmodell'
        ]
    },
    {
        question: 'Erklären Sie: Firewall',
        correctAnswers: [
            'Gerät zur Filterung und Kontrolle von Datenverkehr'
        ],
        alternatives: [
            'firewall',
            'gerät',
            'filterung',
            'kontrolle',
            'datenverkehr'
        ]
    },
    {
        question: 'Erklären Sie: LTE',
        correctAnswers: [
            'Mobilfunkstandard der vierten Generation'
        ],
        alternatives: [
            'lte',
            'mobilfunk',
            'mobilfunkstandard',
            'vierte generation',
            '4g'
        ]
    },
    {
        question: 'Erklären Sie: DSL-Splitter',
        correctAnswers: [
            'Trennt Telefon und DSL-Signal'
        ],
        alternatives: [
            'splitter',
            'dsl-splitter',
            'trennt',
            'telefon',
            'dsl',
            'signal'
        ]
    },
    {
        question: 'Erklären Sie: Digitale Dividende',
        correctAnswers: [
            'Freigewordene Funkfrequenzen nach Abschaltung alter Rundfunktechnik'
        ],
        alternatives: [
            'digitale dividende',
            'freigewordene frequenzen',
            'funkfrequenzen',
            'abschaltung',
            'rundfunktechnik',
            'alt'
        ]
    },
    {
        question: 'Erklären Sie: ARP',
        correctAnswers: [
            'Protokoll zum Ermitteln der MAC-Adresse zu einer IP-Adresse'
        ],
        alternatives: [
            'arp',
            'protokoll',
            'ermitteln',
            'mac-adresse',
            'ip-adresse'
        ]
    }
];

// Game State
let gameMode = null; // 'osi', 'general', oder 'brain'
let currentLayer = 0;
let attempts = 0;
let deaths = 0;
let currentQuestions = []; // Für randomisierte Fragen
let currentQuestionIndex = 0;

// Brain Miniboss State
let wrongQuestions = new Map(); // Speichert falsche Fragen und wie oft sie falsch waren
let brainQuestions = []; // Die aktuellen Brain-Challenge Fragen
let brainStreaks = new Map(); // Zählt korrekte Antworten in Folge (muss 3 sein)
let brainBossHealth = 0;

// DOM Elements
const elements = {
    startScreen: null,
    gameScreen: null,
    osiModeBtn: null,
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
    gameArea: null
};

// Initialize game
function initGame() {
    // Cache DOM elements
    elements.startScreen = document.getElementById('startScreen');
    elements.gameScreen = document.getElementById('gameScreen');
    elements.osiModeBtn = document.getElementById('osiModeBtn');
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

    // Event listeners for mode selection
    elements.osiModeBtn.addEventListener('click', () => startGame('osi'));
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
    
    // Hide start screen, show game screen
    elements.startScreen.classList.add('hidden');
    elements.gameScreen.classList.remove('hidden');
    
    // Prepare questions based on mode
    if (mode === 'osi') {
        // Randomize OSI layers
        currentQuestions = shuffleArray([...osiLayers]);
        elements.storyText.textContent = 'Du betrittst den düsteren Prüfungssaal. Jakubasch brüllt: "Nenne mir alle 7 OSI-Schichten! Aber ich werde sie in zufälliger Reihenfolge abfragen!"';
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
    if (gameMode === 'osi') {
        const correctAnswers = [
            currentQuestions[currentQuestionIndex].name.toLowerCase(),
            ...currentQuestions[currentQuestionIndex].alternatives.map(a => a.toLowerCase())
        ];
        return correctAnswers.some(correct => answer.includes(correct.split(' ')[0]));
    } else if (gameMode === 'general' || gameMode === 'brain') {
        const currentQ = currentQuestions[currentQuestionIndex];
        const correctAnswers = [
            ...currentQ.correctAnswers.map(a => a.toLowerCase()),
            ...currentQ.alternatives.map(a => a.toLowerCase())
        ];
        
        // Wenn die Frage eine bestimmte Anzahl erfordert (z.B. "zwei", "drei", "vier")
        const requiredCount = getRequiredAnswerCount(currentQ.question);
        
        if (requiredCount > 0) {
            // Zähle wie viele verschiedene Schlüsselwörter der Nutzer genannt hat
            const foundKeywords = new Set();
            correctAnswers.forEach(keyword => {
                if (answer.includes(keyword.toLowerCase())) {
                    foundKeywords.add(keyword);
                }
            });
            
            // Mindestens die geforderte Anzahl muss vorhanden sein
            return foundKeywords.size >= requiredCount;
        }
        
        // Normale Prüfung - mindestens ein Schlüsselwort muss vorkommen
        return correctAnswers.some(correct => answer.includes(correct.toLowerCase()));
    }
    return false;
}

// Ermittelt wie viele Antworten in der Frage gefordert werden
function getRequiredAnswerCount(question) {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('vier')) return 4;
    if (lowerQuestion.includes('drei')) return 3;
    if (lowerQuestion.includes('zwei')) return 2;
    if (lowerQuestion.includes('2 ')) return 2;
    if (lowerQuestion.includes('3 ')) return 3;
    if (lowerQuestion.includes('4 ')) return 4;
    
    return 0; // Keine spezifische Anzahl gefordert
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
        
        if (gameMode === 'osi') {
            // Mark layer as correct
            document.getElementById(`layer${currentQuestionIndex}`).classList.add('correct');
            showMessage(`✅ Richtig! Frage ${currentQuestionIndex} gemeistert!`, 'success');
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
    updateAttemptsDisplay();
    
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
    const correctAnswer = gameMode === 'osi' 
        ? currentQuestions[currentQuestionIndex].name
        : currentQuestions[currentQuestionIndex].correctAnswers[0];
    
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
    
    // Reset all layers (for OSI mode)
    if (gameMode === 'osi') {
        for (let i = 1; i <= 7; i++) {
            document.getElementById(`layer${i}`).classList.remove('correct');
        }
    }
    
    updateQuestion();
    elements.answerInput.focus();
}

// Update question text
function updateQuestion() {
    if (gameMode === 'osi') {
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
