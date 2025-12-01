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
            'Zusammenwachsen verschiedener Medien',
            'Verschmelzung von Medien',
            'Integration verschiedener Medienformen'
        ],
        alternatives: [
            'konvergenz',
            'zusammenwachsen',
            'verschmelzung',
            'smartphone',
            'tablet',
            'smart tv',
            'streaming',
            'internet tv',
            'iptv',
            'triple play'
        ]
    },
    {
        question: 'Worin unterscheiden sich in der Nachrichtentechnik Information und Nachricht?',
        correctAnswers: [
            'Information ist der Inhalt, Nachricht ist die Darstellung',
            'Nachricht ist die codierte Form der Information'
        ],
        alternatives: [
            'information',
            'nachricht',
            'inhalt',
            'darstellung',
            'codierung',
            'übertragung',
            'signal',
            'bedeutung',
            'träger'
        ]
    },
    {
        question: 'Erläutern Sie die Funktion einer Schicht im OSI-Referenzmodell. Mit welchen anderen Schichten wird kommuniziert?',
        correctAnswers: [
            'Schicht kommuniziert mit darüber und darunter liegender Schicht',
            'Kommunikation mit benachbarten Schichten'
        ],
        alternatives: [
            'schicht',
            'layer',
            'benachbart',
            'darüber',
            'darunter',
            'vertikal',
            'dienst',
            'schnittstelle',
            'protokoll',
            'kapselung',
            'modular'
        ]
    },
    {
        question: 'Erläutern Sie kurz die drei Begriffe Schrittgeschwindigkeit, Übertragungskapazität und Bandbreite und geben Sie jeweils die Maßeinheit an.',
        correctAnswers: [
            'Schrittgeschwindigkeit in Baud, Übertragungskapazität in Bit/s, Bandbreite in Hz'
        ],
        alternatives: [
            'schrittgeschwindigkeit',
            'baud',
            'übertragungskapazität',
            'bit/s',
            'bps',
            'bandbreite',
            'hertz',
            'hz',
            'frequenz',
            'datenrate'
        ]
    },
    {
        question: 'Definieren Sie kurz die Begriffe Basisband, Schmalband und Breitband.',
        correctAnswers: [
            'Basisband: ein Signal, Schmalband: wenige Kanäle, Breitband: viele Kanäle'
        ],
        alternatives: [
            'basisband',
            'schmalband',
            'breitband',
            'signal',
            'kanal',
            'frequenz',
            'modulation',
            'träger'
        ]
    },
    {
        question: 'Welche grundlegenden Medienzugriffsverfahren gibt es? Nennen Sie jeweils ein Beispiel.',
        correctAnswers: [
            'CSMA/CD (Ethernet), Token Ring, TDMA, FDMA'
        ],
        alternatives: [
            'csma',
            'csma/cd',
            'token',
            'tdma',
            'fdma',
            'cdma',
            'deterministisch',
            'stochastisch',
            'ethernet',
            'kollision'
        ]
    },
    {
        question: 'Wie heißt das Verkabelungskonzept bei der Kommunikationsinfrastruktur in Bürogebäuden? Welche Topologie entsteht?',
        correctAnswers: [
            'Strukturierte Verkabelung, Stern-Topologie'
        ],
        alternatives: [
            'strukturierte verkabelung',
            'structured cabling',
            'stern',
            'star',
            'topologie',
            'verteiler',
            'etagenverteiler',
            'gebäudeverteiler',
            'primär',
            'sekundär',
            'tertiär'
        ]
    },
    {
        question: 'Wie viele Wanddosen sehen Sie in einem Büroraum mit drei Arbeitsplätzen vor? Warum?',
        correctAnswers: [
            'Mindestens 6 Dosen, zwei pro Arbeitsplatz für Redundanz'
        ],
        alternatives: [
            '6',
            'sechs',
            'zwei pro arbeitsplatz',
            'redundanz',
            'ausfallsicherheit',
            'doppelt',
            'reserve'
        ]
    },
    {
        question: 'Nennen Sie für UTP, FTP, S/FTP und Glasfasern jeweils geeignete Anwendungsbereiche.',
        correctAnswers: [
            'UTP: Büro, FTP: gestörte Umgebung, S/FTP: hohe EMV, Glasfaser: lange Distanzen'
        ],
        alternatives: [
            'utp',
            'ftp',
            's/ftp',
            'sftp',
            'glasfaser',
            'büro',
            'störung',
            'emv',
            'distanz',
            'entfernung',
            'schirmung',
            'shielded'
        ]
    },
    {
        question: 'Welche physikalische Eigenschaft geben die Kategorien von Twisted-Pair-Kabeln (Cat.5, Cat.6) an?',
        correctAnswers: [
            'Übertragungsfrequenz bzw. Bandbreite'
        ],
        alternatives: [
            'frequenz',
            'bandbreite',
            'übertragungsrate',
            'mhz',
            'cat',
            'kategorie',
            'leistung'
        ]
    },
    {
        question: 'Was bedeutet Cat.7? Worin unterscheidet es sich von Cat.5?',
        correctAnswers: [
            'Cat.7 hat höhere Bandbreite (600 MHz vs 100 MHz) und bessere Schirmung'
        ],
        alternatives: [
            'cat.7',
            'cat7',
            'cat.5',
            'cat5',
            '600',
            '100',
            'mhz',
            'bandbreite',
            'schirmung',
            'höher',
            'besser'
        ]
    },
    {
        question: 'Welche Ethernet-Varianten sind in Primär-, Sekundär- und Tertiärbereich gebräuchlich?',
        correctAnswers: [
            'Primär: 10GBase-SR/LR, Sekundär: 1000Base-T/SX, Tertiär: 100Base-TX/1000Base-T'
        ],
        alternatives: [
            'primär',
            'sekundär',
            'tertiär',
            '10gbase',
            '1000base',
            'gigabit',
            '100base',
            'fast ethernet',
            'glasfaser',
            'kupfer'
        ]
    },
    {
        question: 'Welche Ethernet-Varianten sind im WAN gebräuchlich?',
        correctAnswers: [
            '10GBase-LR, 10GBase-ER, 100GBase für Weitverkehrsnetze'
        ],
        alternatives: [
            'wan',
            '10gbase-lr',
            '10gbase-er',
            '100gbase',
            'long range',
            'extended range',
            'glasfaser',
            'weitverkehr'
        ]
    },
    {
        question: 'In welchen Bereichen sind Glasfasern und in welchen sind Kupferkabel vorzuziehen?',
        correctAnswers: [
            'Glasfaser: lange Distanzen, hohe Bandbreite; Kupfer: kurze Distanzen, PoE'
        ],
        alternatives: [
            'glasfaser',
            'kupfer',
            'distanz',
            'entfernung',
            'bandbreite',
            'poe',
            'power',
            'kosten',
            'störung',
            'emv'
        ]
    },
    {
        question: 'Was ist PoE? Nennen Sie zwei Anwendungsgebiete dafür.',
        correctAnswers: [
            'Power over Ethernet - Stromversorgung über Netzwerkkabel. IP-Telefone, WLAN-APs'
        ],
        alternatives: [
            'poe',
            'power over ethernet',
            'strom',
            'stromversorgung',
            'ip-telefon',
            'voip',
            'wlan',
            'access point',
            'kamera',
            'ieee 802.3af'
        ]
    },
    {
        question: 'Wie ist eine Ethernet-Adresse (MAC-Adresse) aufgebaut? Wie wird Eindeutigkeit gewährleistet?',
        correctAnswers: [
            '48 Bit, 6 Byte, erste 3 Byte Herstellerkennung (OUI), letzte 3 Byte Seriennummer'
        ],
        alternatives: [
            'mac',
            'mac-adresse',
            '48 bit',
            '6 byte',
            'oui',
            'herstellerkennung',
            'ieee',
            'eindeutig',
            'hexadezimal',
            'seriennummer'
        ]
    },
    {
        question: 'Beschreiben Sie den Aufbau und die Funktionsweise eines Ethernet-Switch.',
        correctAnswers: [
            'Switch lernt MAC-Adressen, erstellt Switching-Tabelle, leitet Frames gezielt weiter'
        ],
        alternatives: [
            'switch',
            'mac-tabelle',
            'switching-tabelle',
            'lernen',
            'weiterleiten',
            'forwarding',
            'frame',
            'port',
            'collision domain',
            'layer 2'
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
            'Glasfaser bis zum Kabelverzweiger verlegen (FTTC), Outdoor-DSLAM installieren'
        ],
        alternatives: [
            'vdsl',
            'glasfaser',
            'fttc',
            'fiber to the curb',
            'kabelverzweiger',
            'kvz',
            'outdoor-dslam',
            'dslam',
            'vectoring',
            'kupfer verkürzen'
        ]
    },
    {
        question: 'Nennen Sie vier Funktionen eines DSL/Kabel-Routers, die man auch als separate Geräte kaufen könnte.',
        correctAnswers: [
            'Modem, Router, Switch, WLAN-Access-Point, Firewall, DHCP-Server'
        ],
        alternatives: [
            'modem',
            'router',
            'switch',
            'wlan',
            'access point',
            'firewall',
            'dhcp',
            'nat',
            'telefonanlage',
            'voip'
        ]
    },
    {
        question: 'Welche Funkfrequenzen nutzen die aktuellen WLAN-Standards (IEEE 802.11n und IEEE 802.11ac)?',
        correctAnswers: [
            '2,4 GHz und 5 GHz'
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
            'a und b sind richtig - Wände dämpfen und reflektieren'
        ],
        alternatives: [
            'dämpfen',
            'dämpfung',
            'reflektieren',
            'reflexion',
            'wand',
            'wände',
            'a',
            'b',
            'multipath'
        ]
    },
    {
        question: 'Wie nennt man die Antennen, die typischerweise für WLAN verwendet werden?',
        correctAnswers: [
            'Rundstrahlantennen oder Omnidirektionale Antennen'
        ],
        alternatives: [
            'rundstrahlantenne',
            'rundstrahler',
            'omnidirektional',
            'omni',
            'dipol',
            'stabantenne'
        ]
    },
    {
        question: 'Nennen Sie zwei Merkmale, durch die WLANs nach IEEE 802.11n schneller sind als ältere Standards.',
        correctAnswers: [
            'MIMO (Multiple Antennen), größere Kanalbreite (40 MHz), bessere Modulation'
        ],
        alternatives: [
            'mimo',
            'multiple',
            'antennen',
            'kanalbreite',
            '40 mhz',
            'modulation',
            'frame aggregation',
            'spatial streams'
        ]
    },
    {
        question: 'Nennen Sie zwei weit verbreitete WLAN-Standards. Welche Übertragungskapazitäten sind damit jeweils möglich?',
        correctAnswers: [
            '802.11n: bis 600 Mbit/s, 802.11ac: bis 6,9 Gbit/s, 802.11ax: bis 9,6 Gbit/s'
        ],
        alternatives: [
            '802.11n',
            '802.11ac',
            '802.11ax',
            'wifi 4',
            'wifi 5',
            'wifi 6',
            '600',
            'mbit',
            'gbit'
        ]
    },
    {
        question: 'Die Übertragungskapazitäten von WLAN und Ethernet sind nicht direkt vergleichbar. Nennen Sie drei Gründe.',
        correctAnswers: [
            'Shared Medium, Overhead, Interferenzen, Entfernung, Hindernisse'
        ],
        alternatives: [
            'shared medium',
            'geteilt',
            'overhead',
            'interferenz',
            'störung',
            'entfernung',
            'hindernis',
            'kollision',
            'halbduplex',
            'protokoll-overhead'
        ]
    },
    {
        question: 'Was ist ein ISM-Band und was bedeutet es für WLAN?',
        correctAnswers: [
            'Industrial Scientific Medical - lizenzfrei nutzbar, aber andere Geräte können stören'
        ],
        alternatives: [
            'ism',
            'industrial',
            'scientific',
            'medical',
            'lizenzfrei',
            'unlizenziert',
            'störung',
            'bluetooth',
            'mikrowelle',
            'interference'
        ]
    },
    {
        question: 'Welche Aussagen sind richtig? a) AP immer nötig b) MIMO braucht mehrere Antennen c) MIMO vergrößert Reichweite d) PoW versorgt Geräte e) WLAN immer verschlüsselt',
        correctAnswers: [
            'b und c sind richtig - MIMO braucht mehrere Antennen und kann Reichweite vergrößern'
        ],
        alternatives: [
            'b',
            'c',
            'mimo',
            'antennen',
            'reichweite',
            'mehrere antennen',
            'spatial diversity',
            'beamforming'
        ]
    },
    {
        question: 'Wie ist ein IP-Netzwerk aufgebaut?',
        correctAnswers: [
            'Hierarchisch aus Subnetzen, verbunden durch Router'
        ],
        alternatives: [
            'hierarchisch',
            'subnetz',
            'subnetze',
            'router',
            'netzwerk',
            'segment',
            'vermittlung',
            'autonomes system'
        ]
    },
    {
        question: 'Was versteht man unter Routing und wie funktioniert es?',
        correctAnswers: [
            'Weiterleitung von Paketen zwischen Netzen anhand von Routing-Tabellen'
        ],
        alternatives: [
            'routing',
            'weiterleitung',
            'routing-tabelle',
            'routingtabelle',
            'next hop',
            'pfad',
            'vermittlung',
            'router',
            'forwarding'
        ]
    },
    {
        question: 'Welche Informationen sind in einem IP-Header enthalten (vier genügen)?',
        correctAnswers: [
            'Quell-IP, Ziel-IP, TTL, Protokoll, Header-Prüfsumme, Fragmentierung'
        ],
        alternatives: [
            'quell-ip',
            'ziel-ip',
            'source',
            'destination',
            'ttl',
            'time to live',
            'protokoll',
            'prüfsumme',
            'checksum',
            'fragmentierung',
            'version',
            'länge'
        ]
    },
    {
        question: 'Welche Komponenten können zur Kopplung von Subnetzen verwendet werden - Switches, Router, Patchkabel, Firewalls?',
        correctAnswers: [
            'Router und Firewalls können Subnetze koppeln'
        ],
        alternatives: [
            'router',
            'firewall',
            'layer 3',
            'routing',
            'nicht switch',
            'nicht patchkabel'
        ]
    },
    {
        question: 'Welche Informationen nutzt ein Router für die Entscheidung, wohin er ein Datenpaket weiterleitet?',
        correctAnswers: [
            'Ziel-IP-Adresse und Routing-Tabelle'
        ],
        alternatives: [
            'ziel-ip',
            'zieladresse',
            'destination',
            'routing-tabelle',
            'routingtabelle',
            'next hop',
            'gateway',
            'netzmaske'
        ]
    },
    {
        question: 'Wozu dienen die Netz- und die Broadcastadresse in einem Subnetz?',
        correctAnswers: [
            'Netzadresse identifiziert das Netz, Broadcastadresse für Nachrichten an alle Hosts'
        ],
        alternatives: [
            'netzadresse',
            'netz',
            'broadcast',
            'identifikation',
            'alle hosts',
            'alle geräte',
            'subnetz',
            'netzwerk-id'
        ]
    },
    {
        question: 'Wie bekommt ein Host heraus, welche MAC-Adresse zu einer IP-Adresse gehört? Wie heißt das Protokoll? Beschreiben Sie den Ablauf.',
        correctAnswers: [
            'ARP (Address Resolution Protocol) - Broadcast-Anfrage, Zielhost antwortet mit MAC'
        ],
        alternatives: [
            'arp',
            'address resolution protocol',
            'broadcast',
            'anfrage',
            'request',
            'reply',
            'antwort',
            'mac-adresse',
            'auflösung'
        ]
    },
    {
        question: 'Wie ist eine E-Mail-Adresse aufgebaut? Welcher Teil der Adresse hat welche Aufgabe?',
        correctAnswers: [
            'benutzer@domain - Benutzername identifiziert Postfach, Domain identifiziert Mailserver'
        ],
        alternatives: [
            'benutzer',
            'benutzername',
            'user',
            '@',
            'at',
            'domain',
            'postfach',
            'mailserver',
            'lokal',
            'local part'
        ]
    },
    {
        question: 'Wie wird ermittelt, welcher Mailserver für eine bestimmte Mailadresse zuständig ist?',
        correctAnswers: [
            'DNS-Abfrage nach MX-Record (Mail Exchange Record)'
        ],
        alternatives: [
            'dns',
            'mx',
            'mx-record',
            'mail exchange',
            'dns-abfrage',
            'lookup',
            'nameserver'
        ]
    },
    {
        question: 'Welche beiden Protokolle sind für die Abholung von E-Mails gebräuchlich? Worin unterscheiden sie sich?',
        correctAnswers: [
            'POP3 lädt Mails herunter und löscht sie, IMAP synchronisiert und lässt Mails auf Server'
        ],
        alternatives: [
            'pop3',
            'pop',
            'imap',
            'download',
            'löschen',
            'synchronisieren',
            'server',
            'lokal',
            'ordner',
            'ablage'
        ]
    },
    {
        question: 'Erklären Sie kurz, was eine monolithische Firewall ist und was man unter einer Zone versteht.',
        correctAnswers: [
            'Monolithisch: Ein Gerät mit allen Funktionen. Zone: Abgegrenzter Netzwerkbereich mit gemeinsamer Sicherheitspolitik'
        ],
        alternatives: [
            'monolithisch',
            'ein gerät',
            'zone',
            'netzwerkbereich',
            'sicherheitspolitik',
            'security policy',
            'dmz',
            'segmentierung',
            'trennung'
        ]
    },
    {
        question: 'Beschreiben Sie anhand eines Beispiels, wie Paketfilterregeln funktionieren.',
        correctAnswers: [
            'Regeln prüfen Quell-IP, Ziel-IP, Port, Protokoll - Erlauben oder Blockieren'
        ],
        alternatives: [
            'quell-ip',
            'ziel-ip',
            'port',
            'protokoll',
            'erlauben',
            'blockieren',
            'allow',
            'deny',
            'regel',
            'acl',
            'filter'
        ]
    },
    {
        question: 'Beschreiben Sie die Funktionsweise einer NAT-Firewall.',
        correctAnswers: [
            'Übersetzt private in öffentliche IP-Adressen, verbirgt interne Struktur'
        ],
        alternatives: [
            'nat',
            'network address translation',
            'privat',
            'öffentlich',
            'übersetzen',
            'übersetzung',
            'verbergen',
            'masquerading',
            'port forwarding'
        ]
    },
    {
        question: 'Ordnen Sie zu TCP/IP-Schichten zu: Ethernet-Switch, TCP, ARP, UTP-Kabel, DNS, http, RJ-45, POP3, UDP',
        correctAnswers: [
            'Netzzugang: Switch, ARP, UTP, RJ-45; Internet: IP; Transport: TCP, UDP; Anwendung: DNS, http, POP3'
        ],
        alternatives: [
            'netzzugang',
            'internet',
            'transport',
            'anwendung',
            'layer',
            'schicht',
            'tcp',
            'udp',
            'http',
            'dns',
            'switch',
            'arp'
        ]
    },
    {
        question: 'Erklären Sie: Basisband',
        correctAnswers: [
            'Übertragung eines einzelnen Signals ohne Modulation auf Trägerfrequenz'
        ],
        alternatives: [
            'basisband',
            'ein signal',
            'ohne modulation',
            'keine modulation',
            'direkt',
            'baseband',
            'digital'
        ]
    },
    {
        question: 'Erklären Sie: WAN',
        correctAnswers: [
            'Wide Area Network - Weitverkehrsnetz über große geografische Entfernungen'
        ],
        alternatives: [
            'wan',
            'wide area network',
            'weitverkehr',
            'große entfernung',
            'geografisch',
            'internet',
            'fernverbindung'
        ]
    },
    {
        question: 'Erklären Sie: IEEE 802.11n',
        correctAnswers: [
            'WLAN-Standard mit bis zu 600 Mbit/s, nutzt MIMO und 2,4/5 GHz'
        ],
        alternatives: [
            '802.11n',
            'wlan',
            'wifi 4',
            '600',
            'mbit',
            'mimo',
            '2,4 ghz',
            '5 ghz',
            'standard'
        ]
    },
    {
        question: 'Erklären Sie: Funktionsverbund',
        correctAnswers: [
            'Zusammenarbeit verschiedener Geräte/Dienste zur Erfüllung einer Aufgabe'
        ],
        alternatives: [
            'funktionsverbund',
            'zusammenarbeit',
            'geräte',
            'dienste',
            'aufgabe',
            'kooperation',
            'integration',
            'verbund'
        ]
    },
    {
        question: 'Erklären Sie: OSI-Referenzmodell',
        correctAnswers: [
            '7-Schichten-Modell zur Standardisierung von Netzwerkprotokollen'
        ],
        alternatives: [
            'osi',
            '7 schichten',
            'sieben schichten',
            'referenzmodell',
            'schichtenmodell',
            'standard',
            'iso',
            'protokoll'
        ]
    },
    {
        question: 'Erklären Sie: Firewall',
        correctAnswers: [
            'Sicherheitssystem zur Kontrolle und Filterung des Netzwerkverkehrs'
        ],
        alternatives: [
            'firewall',
            'sicherheit',
            'kontrolle',
            'filterung',
            'verkehr',
            'schutz',
            'paketfilter',
            'regelwerk'
        ]
    },
    {
        question: 'Erklären Sie: LTE',
        correctAnswers: [
            'Long Term Evolution - 4G Mobilfunkstandard mit hohen Datenraten'
        ],
        alternatives: [
            'lte',
            'long term evolution',
            '4g',
            'mobilfunk',
            'datenrate',
            'mobil',
            'cellular'
        ]
    },
    {
        question: 'Erklären Sie: DSL-Splitter',
        correctAnswers: [
            'Gerät zur Frequenztrennung von Telefon und DSL-Signal auf einer Leitung'
        ],
        alternatives: [
            'splitter',
            'frequenztrennung',
            'telefon',
            'dsl',
            'leitung',
            'filter',
            'trennung',
            'frequenz'
        ]
    },
    {
        question: 'Erklären Sie: Digitale Dividende',
        correctAnswers: [
            'Freigewordene Funkfrequenzen durch Umstellung von analogem auf digitales Fernsehen'
        ],
        alternatives: [
            'digitale dividende',
            'frequenzen',
            'analog',
            'digital',
            'fernsehen',
            'umstellung',
            'dvb-t',
            '700 mhz',
            'mobilfunk'
        ]
    },
    {
        question: 'Erklären Sie: ARP',
        correctAnswers: [
            'Address Resolution Protocol - Ermittelt MAC-Adresse zu einer IP-Adresse'
        ],
        alternatives: [
            'arp',
            'address resolution protocol',
            'mac-adresse',
            'ip-adresse',
            'ermitteln',
            'auflösung',
            'broadcast'
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
