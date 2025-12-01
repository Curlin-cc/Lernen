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
        correctAnswers: ['10GBase-T, 100Base-TX und 1000Base-T'],
        requiredKeywords: [['10gbase', '100base', '1000base']]
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

// Ralph Fragen (Rechnerarchitektur & Betriebssysteme)
const ralphQuestions = [
    {
        question: 'Was sind die Komponenten der von-Neumann-Architektur?',
        correctAnswers: ['Rechenwerk ALU, Steuerwerk Control Unit, Speicher für Daten und Programme, Ein-/Ausgabewerk. Verbunden durch Bus-System. Rechen- und Steuerwerk bilden die CPU.'],
        requiredKeywords: [['rechenwerk', 'alu'], ['steuerwerk', 'control'], ['speicher'], ['bus', 'ein', 'ausgabe']]
    },
    {
        question: 'Was unterscheidet die von-Neumann-Architektur von der Harvard-Architektur?',
        correctAnswers: ['Von-Neumann nutzt gemeinsamen Speicher und Bus für Befehle und Daten (Flaschenhals). Harvard hat getrennte Speicher und Busse für parallele Zugriffe.'],
        requiredKeywords: [['von-neumann', 'neumann', 'gemeinsam'], ['harvard', 'getrennt', 'parallel']]
    },
    {
        question: 'Wieso ist es gerechtfertigt, komplexe moderne Speicherstrukturen als einen Speicher zu behandeln?',
        correctAnswers: ['Durch Abstraktion. Hardware (MMU) und Betriebssystem verbergen die Hierarchie (Register, Cache, RAM, Festplatte). Der Programmierer sieht nur einen linearen Adressraum (virtueller Speicher).'],
        requiredKeywords: [['abstraktion'], ['mmu', 'betriebssystem', 'hardware'], ['virtuell', 'linear', 'adressraum']]
    },
    {
        question: 'Inwiefern unterscheidet sich unser Rechnermodell von der von-Neumann-Architektur?',
        correctAnswers: ['Das theoretische Modell idealisiert das Zeitverhalten (1 Takt pro Befehl) und ignoriert physikalische Latenzen oder den von-Neumann-Flaschenhals.'],
        requiredKeywords: [['idealis', 'theoret'], ['takt', 'zeit'], ['latenz', 'flaschenhals', 'physikalisch']]
    },
    {
        question: 'Welche Schritte werden durchlaufen, damit ein Java-Programm ausgeführt werden kann?',
        correctAnswers: ['Quellcode (.java) wird vom Compiler (javac) in Bytecode (.class) übersetzt. Die JVM lädt den Bytecode. Die JVM interpretiert oder kompiliert via JIT in Maschinencode.'],
        requiredKeywords: [['compiler', 'javac'], ['bytecode', '.class'], ['jvm'], ['jit', 'interpret', 'maschinencode']]
    },
    {
        question: 'Welche Schritte werden durchlaufen, um einen einzelnen Maschinenbefehl auszuführen?',
        correctAnswers: ['Fetch: Befehl holen. Decode: Befehl interpretieren. Fetch Operands: Daten laden. Execute: Operation ausführen. Write Back: Ergebnis zurückschreiben.'],
        requiredKeywords: [['fetch'], ['decode'], ['execute'], ['write back', 'zurückschreib']]
    },
    {
        question: 'Wie viele Takte dauert die Ausführung eines einzelnen Maschinenbefehls?',
        correctAnswers: ['Architekturabhängig. In idealisierten Modellen oft ein Takt. Real variiert es von weniger als einem Takt (durch Pipelining) bis zu hunderten Takten.'],
        requiredKeywords: [['architektur', 'abhängig', 'variiert'], ['pipeline', 'ideal', 'takt']]
    },
    {
        question: 'Suchen Sie 3 Befehle der x86-Architektur heraus.',
        correctAnswers: ['MOV (Daten kopieren), ADD (Addieren), JMP (Springen zu einer Adresse).'],
        requiredKeywords: [['mov'], ['add'], ['jmp']]
    },
    {
        question: 'Führen Sie folgendes Programm mit dem Adventskalender-Beispiel aus der Vorlesung durch.',
        correctAnswers: ['R1 erhält 17, R2 erhält 13. Addition: 17+13=30 wird ausgegeben. Multiplikation: 17*13=221 wird ausgegeben.'],
        requiredKeywords: [['17'], ['13'], ['30'], ['221']]
    },
    {
        question: 'Welche Probleme kann es geben, wenn auf einem System mehrere Programme gleichzeitig laufen sollen?',
        correctAnswers: ['Race Conditions, gegenseitiges Überschreiben von Speicherbereichen, Deadlocks und Ressourcenkonflikte.'],
        requiredKeywords: [['race condition', 'wettlauf'], ['deadlock', 'verklemmung'], ['speicher', 'ressource', 'überschreib']]
    },
    {
        question: 'Was ist die Aufgabe von Betriebssystemen?',
        correctAnswers: ['Sie verwalten Hardware-Ressourcen (CPU, Speicher, I/O), koordinieren die Programmausführung (Scheduling) und stellen eine abstrakte Schnittstelle (API) bereit.'],
        requiredKeywords: [['hardware', 'ressource', 'verwalt'], ['scheduling', 'koordin'], ['api', 'schnittstelle']]
    },
    {
        question: 'Was besagt das Highlander-Prinzip?',
        correctAnswers: ['Es kann nur einen geben: Zu jedem Zeitpunkt darf nur eine Instanz (das Betriebssystem) die uneingeschränkte Kontrolle über kritische Hardware-Ressourcen haben.'],
        requiredKeywords: [['nur ein', 'eine instanz'], ['kontrolle'], ['hardware', 'ressource', 'betriebssystem']]
    },
    {
        question: 'Warum muss für Betriebssysteme das Highlander-Prinzip gelten?',
        correctAnswers: ['Um Konsistenz und Sicherheit zu gewährleisten. Unkoordinierter Zugriff mehrerer Instanzen würde zu Datenkorruption und Systemabstürzen führen.'],
        requiredKeywords: [['konsistenz', 'sicherheit'], ['korruption', 'absturz', 'unkoordiniert']]
    },
    {
        question: 'Geben Sie drei Beispiele für Software-Betriebsmittel.',
        correctAnswers: ['Dateien (Dateisystem), Sockets (Netzwerkverbindungen), Semaphoren (Synchronisationsobjekte).'],
        requiredKeywords: [['datei'], ['socket', 'netzwerk'], ['semaphor', 'synchron']]
    },
    {
        question: 'Warum ist die CPU ein entziehbares und exklusives Betriebsmittel?',
        correctAnswers: ['Exklusiv: Ein CPU-Kern kann zu einem Zeitpunkt nur einen Befehlsstrom verarbeiten. Entziehbar: Der Zustand kann gespeichert und die CPU einem anderen Prozess zugewiesen werden (Context Switch).'],
        requiredKeywords: [['exklusiv', 'ein', 'zeitpunkt'], ['entziehbar', 'context switch', 'gespeichert']]
    },
    {
        question: 'Warum muss das Betriebssystem vor Anwendungssoftware abgeschottet werden?',
        correctAnswers: ['Zum Schutz der Systemstabilität. Fehlerhafte oder böswillige Anwendungen dürfen keine kritischen Systemstrukturen überschreiben oder die Kontrolle übernehmen.'],
        requiredKeywords: [['schutz', 'stabilität'], ['fehlerhaft', 'böswillig'], ['überschreib', 'kontrolle']]
    },
    {
        question: 'Warum müssen Anwendungen untereinander abgeschottet werden?',
        correctAnswers: ['Zum Datenschutz und zur Fehlerisolation. Ein Absturz oder Fehler in Anwendung A darf Anwendung B nicht beeinflussen oder deren Daten lesen.'],
        requiredKeywords: [['datenschutz', 'isolation'], ['absturz', 'fehler'], ['beeinfluss', 'lesen']]
    },
    {
        question: 'Warum werden die Befehle (MOV, ADD, JMP) im User- bzw. Kernelmodus ausgeführt?',
        correctAnswers: ['Befehle wie ADD oder MOV sind unkritisch und laufen im User-Mode. Nur Befehle die in Hardware eingreifen müssen im privilegierten Kernel-Mode laufen.'],
        requiredKeywords: [['user', 'unkritisch'], ['kernel', 'privileg'], ['hardware', 'eingreif']]
    },
    {
        question: 'Warum ist eine Trennung zwischen User- und Kernelmodus ohne Hilfe der Hardware nicht möglich?',
        correctAnswers: ['Software kann sich nicht selbst kontrollieren. Es braucht hardwareseitige Durchsetzung (Mode-Bit in CPU), das bei unberechtigten Zugriffen eine Exception auslöst.'],
        requiredKeywords: [['hardware', 'durchsetz'], ['mode-bit', 'cpu'], ['exception', 'selbst kontroll']]
    },
    
    // Betriebssystem-Arten und Strukturen
    {
        question: 'Was unterscheidet ein Singletasking- von einem Multitasking-System?',
        correctAnswers: ['Singletasking kann nur einen Prozess gleichzeitig ausführen. Multitasking hält mehrere Prozesse im Speicher und führt diese quasi-parallel oder parallel aus.'],
        requiredKeywords: [['singletasking', 'ein'], ['multitasking', 'mehrere'], ['parallel', 'gleichzeitig']]
    },
    {
        question: 'Ist Multiprocessing mit Einprozessorsystemen möglich?',
        correctAnswers: ['Nein. Multiprocessing erfordert mehrere physische CPUs oder Kerne für echte Parallelität auf Hardwareebene.'],
        requiredKeywords: [['nein'], ['mehrere', 'physisch'], ['cpu', 'kern', 'parallel']]
    },
    {
        question: 'Ist Multitasking mit einem Multiuser-System möglich?',
        correctAnswers: ['Ja, es ist sogar notwendig. Damit mehrere Benutzer gleichzeitig arbeiten können, muss das System deren Programme gleichzeitig verwalten.'],
        requiredKeywords: [['ja'], ['mehrere benutzer', 'multiuser'], ['gleichzeitig', 'verwalten']]
    },
    {
        question: 'Was unterscheidet Singleprocessing von Singletasking?',
        correctAnswers: ['Singleprocessing bezieht sich auf die Hardware (nur eine CPU). Singletasking bezieht sich auf das Betriebssystem (nur ein Programm gleichzeitig).'],
        requiredKeywords: [['singleprocessing', 'hardware', 'cpu'], ['singletasking', 'betriebssystem', 'software', 'programm']]
    },
    {
        question: 'Ist Nebenläufigkeit auf Einprozessorsystemen möglich?',
        correctAnswers: ['Ja, durch Pseudo-Parallelität. Der Prozessor schaltet so schnell zwischen Prozessen hin und her (Scheduling), dass es wie Gleichzeitigkeit wirkt.'],
        requiredKeywords: [['ja'], ['pseudo', 'scheduling', 'wechsel'], ['gleichzeitig', 'parallel']]
    },
    {
        question: 'Welche Betriebsarten sollte ein Betriebssystem für Cloud-Rechner unterstützen?',
        correctAnswers: ['Stapelverarbeitung (Batch), Teilnehmerbetrieb (Time-Sharing), verteiltes Rechnen und Virtualisierung.'],
        requiredKeywords: [['batch', 'stapel'], ['time-sharing', 'teilnehmer'], ['virtualisierung']]
    },
    {
        question: 'Warum kann es kein perfektes Betriebssystem geben?',
        correctAnswers: ['Weil Ziele in Konflikt stehen: Sicherheit vs. Bequemlichkeit, Durchsatz vs. Antwortzeit. Man muss immer Kompromisse (Trade-offs) eingehen.'],
        requiredKeywords: [['konflikt', 'ziele'], ['kompromiss', 'trade-off']]
    },
    {
        question: 'Was bedeutet es für ein Betriebssystem, Echtzeitanforderungen zu genügen?',
        correctAnswers: ['Es muss garantieren, dass kritische Aufgaben innerhalb eines definierten Zeitintervalls abgeschlossen sind (Determinismus).'],
        requiredKeywords: [['garantier', 'zeitintervall'], ['determinismus', 'kritisch']]
    },
    {
        question: 'Was sind Vorteile eines schichtenorientierten Kernels?',
        correctAnswers: ['Modularität, einfachere Wartung und Debugging, definierte Schnittstellen zwischen den Schichten.'],
        requiredKeywords: [['modular'], ['wartung', 'debugging'], ['schnittstelle', 'schicht']]
    },
    {
        question: 'Warum sind viele bekannte Betriebssysteme im Kern monolithisch strukturiert?',
        correctAnswers: ['Wegen der Performance. Weniger Kontextwechsel und direktere Kommunikation sorgen für höhere Geschwindigkeit.'],
        requiredKeywords: [['performance', 'geschwindigkeit'], ['kontextwechsel', 'kommunikation', 'direkt']]
    },
    {
        question: 'Erklären Sie, was einen Mikrokernel auszeichnet.',
        correctAnswers: ['Nur die nötigsten Funktionen (Scheduling, IPC) laufen im Kernel-Modus. Treiber und Dateisysteme laufen im User-Modus. Vorteil: Stabilität. Nachteil: Performance-Overhead.'],
        requiredKeywords: [['scheduling', 'ipc', 'minimal'], ['user-modus', 'treiber'], ['stabilität', 'overhead']]
    },
    {
        question: 'In welchem Kontext könnten Typ-1-Hypervisor sinnvoll sein?',
        correctAnswers: ['In Rechenzentren und Cloud-Umgebungen (AWS, Azure), wo maximale Effizienz und direkte Hardwarekontrolle ohne Host-Betriebssystem benötigt werden.'],
        requiredKeywords: [['rechenzentrum', 'cloud', 'aws', 'azure'], ['direkt', 'hardware'], ['effizienz']]
    },
    {
        question: 'Warum sind kritische Befehle kritisch?',
        correctAnswers: ['Weil sie globale Auswirkungen auf das System haben (Hardwarezugriff, Speicherverwaltung) und bei Missbrauch die Stabilität oder Sicherheit gefährden.'],
        requiredKeywords: [['global', 'auswirkung'], ['hardware', 'speicher'], ['stabilität', 'sicherheit', 'missbrauch']]
    },
    {
        question: 'Begründen Sie, ob der HALT-Befehl ein kritischer Befehl ist.',
        correctAnswers: ['Ja, er ist kritisch. Er stoppt den Prozessor. Ein Nutzerprogramm könnte das gesamte System für alle lahmlegen (Denial of Service).'],
        requiredKeywords: [['ja', 'kritisch'], ['halt', 'stoppt', 'prozessor'], ['denial of service', 'lahmlegen', 'system']]
    },
    {
        question: 'Was spricht für Virtualisierung, was dagegen?',
        correctAnswers: ['Dafür: Konsolidierung, Isolation (Sicherheit), einfache Migration/Snapshots. Dagegen: Performance-Overhead.'],
        requiredKeywords: [['konsolidierung', 'isolation', 'migration', 'snapshot'], ['overhead', 'performance']]
    },
    
    // Polling und Interrupts
    {
        question: 'Was ist Polling?',
        correctAnswers: ['Aktives, zyklisches Abfragen eines Status durch die CPU, um festzustellen, ob Arbeit anliegt.'],
        requiredKeywords: [['aktiv', 'zyklisch', 'abfragen'], ['cpu', 'status']]
    },
    {
        question: 'Nennen Sie Situationen im echten Leben für Polling bzw. Interrupting.',
        correctAnswers: ['Polling: Ständiges Schauen in den Briefkasten. Interrupting: Warten bis das Telefon klingelt.'],
        requiredKeywords: [['polling', 'briefkasten', 'schauen'], ['interrupt', 'telefon', 'klingel']]
    },
    {
        question: 'Warum ist Interrupting auf modernen Mehrzwecksystemen zu bevorzugen?',
        correctAnswers: ['Die CPU wird nicht durch sinnloses Warten (Busy Waiting) blockiert und kann während der Wartezeit nützliche Prozesse ausführen.'],
        requiredKeywords: [['busy waiting', 'warten'], ['cpu', 'prozesse', 'nützlich']]
    },
    {
        question: 'Nennen Sie 2 asynchrone und 2 synchrone Interrupts.',
        correctAnswers: ['Asynchron: Mausklick, Netzwerkpaket. Synchron: Division durch Null, Page Fault.'],
        requiredKeywords: [['asynchron', 'maus', 'netzwerk'], ['synchron', 'division', 'page fault', 'exception']]
    },
    {
        question: 'Warum sind Interrupts teuer?',
        correctAnswers: ['Wegen des Kontextwechsels: Register und Program Counter müssen gesichert, Pipeline geleert, Cache evtl. invalidiert und Handler geladen werden.'],
        requiredKeywords: [['kontextwechsel'], ['register', 'program counter', 'pipeline', 'cache']]
    },
    {
        question: 'Warum dürfen Interrupts nur im Kernel-Modus maskiert werden?',
        correctAnswers: ['Damit Benutzerprogramme nicht wichtige Systemfunktionen blockieren und die CPU monopolisieren können.'],
        requiredKeywords: [['kernel'], ['blockieren', 'monopol'], ['systemfunktion', 'benutzer']]
    },
    {
        question: 'Warum muss die CPU den letzten Maschinenbefehl abarbeiten vor einem Interrupt?',
        correctAnswers: ['Um einen konsistenten Zustand für die spätere Rückkehr zu garantieren.'],
        requiredKeywords: [['konsistent', 'zustand'], ['rückkehr', 'garantier']]
    },
    {
        question: 'Warum profitiert man bei der Interruptbehandlung von Hyperthreading?',
        correctAnswers: ['Während ein Thread durch den Interrupt blockiert ist, kann der andere Hardware-Thread auf demselben Kern weiterrechnen.'],
        requiredKeywords: [['thread'], ['blockiert', 'interrupt'], ['weiterrechnen', 'kern']]
    },
    {
        question: 'Welcher Mechanismus bei Java ähnelt Interrupts?',
        correctAnswers: ['Exceptions (Ausnahmebehandlung mit try-catch).'],
        requiredKeywords: [['exception'], ['try', 'catch']]
    },
    {
        question: 'Welchen Vorteil bieten System Calls?',
        correctAnswers: ['Sie bieten einen kontrollierten Übergang vom User- in den Kernel-Modus, um privilegierte Funktionen sicher auszuführen.'],
        requiredKeywords: [['kontrolliert', 'übergang'], ['user', 'kernel'], ['privileg', 'sicher']]
    },
    
    // Prozesse und Threads
    {
        question: 'Was ist der Unterschied zwischen einem Programm und einem Prozess?',
        correctAnswers: ['Ein Programm ist passiv (Code auf Festplatte). Ein Prozess ist aktiv (Programm in Ausführung im Arbeitsspeicher).'],
        requiredKeywords: [['programm', 'passiv', 'festplatte'], ['prozess', 'aktiv', 'ausführung', 'speicher']]
    },
    {
        question: 'Warum ist die Unterscheidung zwischen Programm und Prozess nützlich?',
        correctAnswers: ['Dasselbe Programm kann mehrfach als unabhängige Prozesse gestartet werden, ohne sich gegenseitig zu stören.'],
        requiredKeywords: [['mehrfach', 'unabhängig'], ['prozesse', 'stören']]
    },
    {
        question: 'Welche Aufgabe erfüllt das Betriebssystem durch getrennte Adressräume?',
        correctAnswers: ['Speicherschutz: Ein Prozess kann nicht in den Speicher eines anderen Prozesses schreiben.'],
        requiredKeywords: [['speicherschutz'], ['prozess', 'schreiben', 'zugriff']]
    },
    {
        question: 'Was ist die Prozesstabelle und was kann darin gespeichert werden?',
        correctAnswers: ['Eine Datenstruktur des Kernels zur Verwaltung aller Prozesse. Inhalt: PCB mit PID, Prozesszustand, Program Counter, Register, Benutzer-ID.'],
        requiredKeywords: [['datenstruktur', 'kernel'], ['pcb', 'pid'], ['zustand', 'register', 'program counter']]
    },
    {
        question: 'Warum sind Prozesse Betriebsmittel?',
        correctAnswers: ['Sie belegen physische Ressourcen wie Hauptspeicher, CPU-Zeit und Slots in der Prozesstabelle.'],
        requiredKeywords: [['ressource', 'belegen'], ['speicher', 'cpu', 'prozesstabelle']]
    },
    {
        question: 'Warum kann es nützlich sein, sich zu merken, ob Prozesse beendet wurden?',
        correctAnswers: ['Damit der Elternprozess den Rückgabewert (Exit-Status) abfragen kann (Vermeidung von Zombies).'],
        requiredKeywords: [['elternprozess', 'rückgabewert', 'exit'], ['zombie']]
    },
    {
        question: 'Welches Problem kann bei nebenläufigen Threads eines Programms auftreten?',
        correctAnswers: ['Race Conditions: Unkoordinierter Zugriff auf gemeinsame Daten führt zu inkonsistenten Ergebnissen.'],
        requiredKeywords: [['race condition'], ['gemeinsam', 'daten'], ['inkonsistent']]
    },
    {
        question: 'Wie kann ein OS ohne Thread-Support Threads ausführen?',
        correctAnswers: ['Durch User-Level-Threads: Eine Bibliothek im User-Space managed das Scheduling. Für den Kernel sieht es aus wie ein einzelner Prozess.'],
        requiredKeywords: [['user-level', 'bibliothek'], ['user-space', 'scheduling'], ['kernel', 'prozess']]
    },
    {
        question: 'Was ist der Unterschied zwischen Prozessen und Threads?',
        correctAnswers: ['Prozesse haben eigene, isolierte Speicherbereiche (schwergewichtig). Threads teilen sich den Speicher innerhalb eines Prozesses (leichtgewichtig).'],
        requiredKeywords: [['prozess', 'isoliert', 'schwer'], ['thread', 'teilen', 'leicht']]
    },
    
    // Scheduling
    {
        question: 'Was bedeutet Scheduling? Geben Sie ein Beispiel.',
        correctAnswers: ['Die Strategie, nach der das Betriebssystem entscheidet, welcher Prozess als nächstes die CPU bekommt. Beispiel: Drucker-Warteschlange.'],
        requiredKeywords: [['strategie', 'entscheid'], ['cpu', 'prozess'], ['beispiel', 'warteschlange', 'drucker']]
    },
    {
        question: 'Nennen Sie drei Scheduling-Kriterien.',
        correctAnswers: ['Fairness (jeder kommt dran), Durchsatz (möglichst viele Jobs), Priorität (wichtige Jobs zuerst).'],
        requiredKeywords: [['fairness'], ['durchsatz'], ['priorität']]
    },
    {
        question: 'Welcher Konflikt kann zwischen Scheduling-Kriterien entstehen?',
        correctAnswers: ['Fairness vs. Priorität: Wenn wichtige Jobs immer vorgezogen werden, verhungern unwichtige Jobs (Starvation).'],
        requiredKeywords: [['fairness', 'priorität'], ['verhungern', 'starvation']]
    },
    {
        question: 'Welches Scheduling-Verfahren eignet sich für rechenlastige Prozesse?',
        correctAnswers: ['FCFS oder SPN mit langen Zeitscheiben, um den Overhead durch Kontextwechsel zu minimieren.'],
        requiredKeywords: [['fcfs', 'spn'], ['zeitscheibe', 'lang'], ['kontextwechsel', 'overhead']]
    },
    {
        question: 'Was ist der Unterschied zwischen verdrängendem und nicht-verdrängendem Scheduling?',
        correctAnswers: ['Nicht-verdrängend: Prozess behält CPU bis er fertig ist. Verdrängend: OS kann Prozess die CPU jederzeit entziehen.'],
        requiredKeywords: [['nicht-verdrängend', 'fertig', 'behält'], ['verdrängend', 'entziehen', 'jederzeit']]
    },
    {
        question: 'Warum ist verdrängendes Scheduling teurer?',
        correctAnswers: ['Wegen des häufigeren Kontextwechsel-Overheads (Register speichern, Cache-Verlust).'],
        requiredKeywords: [['kontextwechsel', 'overhead'], ['register', 'cache']]
    },
    {
        question: 'Welche Betriebsarten werden durch verdrängendes Scheduling möglich?',
        correctAnswers: ['Multitasking (Time-Sharing) und Echtzeitbetrieb.'],
        requiredKeywords: [['multitasking', 'time-sharing'], ['echtzeit']]
    },
    {
        question: 'Vergleichen Sie Round Robin und FCFS.',
        correctAnswers: ['Round Robin: Fair, gute Antwortzeit, aber Overhead bei vielen Prozessen. FCFS: Einfach, wenig Overhead, aber Convoy Effect und schlechte Antwortzeit.'],
        requiredKeywords: [['round robin', 'fair', 'antwortzeit'], ['fcfs', 'einfach', 'convoy']]
    },
    {
        question: 'Nennen Sie Scheduling-Beispiele aus dem Alltag.',
        correctAnswers: ['FCFS: Kasse im Supermarkt. Priorität: Notaufnahme im Krankenhaus. Round Robin: Tapas-Essen.'],
        requiredKeywords: [['fcfs', 'supermarkt', 'kasse'], ['priorität', 'notaufnahme', 'krankenhaus']]
    },
    {
        question: 'Was sind Vor- und Nachteile variabler Quantumslängen bei Round Robin?',
        correctAnswers: ['Vorteil: Dynamische Anpassung für I/O und CPU-Prozesse. Nachteil: Komplexere Berechnung.'],
        requiredKeywords: [['vorteil', 'dynamisch', 'anpassung'], ['nachteil', 'komplex']]
    },
    {
        question: 'Was bedeutet Verhungern (Starvation) beim Scheduling?',
        correctAnswers: ['Ein Prozess mit niedriger Priorität bekommt niemals CPU-Zeit, weil ständig höher priorisierte Prozesse nachkommen.'],
        requiredKeywords: [['niedrig', 'priorität'], ['niemals', 'cpu'], ['höher', 'priorisiert']]
    },
    
    // Speicherverwaltung
    {
        question: 'Erklären Sie Lokalität im echten Leben (räumlich und zeitlich).',
        correctAnswers: ['Räumlich: Wer kocht, hat Salz, Messer und Brett nebeneinander. Zeitlich: Wer heute die Kaffeemaschine benutzt, benutzt sie morgen wieder.'],
        requiredKeywords: [['räumlich', 'nebeneinander', 'koch'], ['zeitlich', 'morgen', 'wieder']]
    },
    {
        question: 'Was ist der Unterschied zwischen logischen und physischen Adressen?',
        correctAnswers: ['Logische Adressen sind abstrakt (starten bei 0). Physische sind die echten RAM-Zellen. Vorteil: Programmierer muss sich nicht um Fragmentierung kümmern.'],
        requiredKeywords: [['logisch', 'abstrakt'], ['physisch', 'ram'], ['fragmentierung', 'vorteil']]
    },
    {
        question: 'Was ist die Hauptaufgabe bei der Speicherverwaltung?',
        correctAnswers: ['Zuweisung von Speicher an Prozesse, Rückforderung, Adressübersetzung und Isolation (Schutz) der Speicherbereiche.'],
        requiredKeywords: [['zuweisung', 'speicher'], ['adressübersetzung'], ['isolation', 'schutz']]
    },
    {
        question: 'Was ist der Unterschied zwischen festen und dynamischen Partitionen?',
        correctAnswers: ['Fest: Statische Blöcke, einfach, aber interne Fragmentierung. Dynamisch: Genau passend, flexibel, aber externe Fragmentierung.'],
        requiredKeywords: [['fest', 'statisch', 'intern'], ['dynamisch', 'flexibel', 'extern']]
    },
    {
        question: 'Welches Problem tritt bei der Speicherverwaltung auf und warum ist es unvermeidbar?',
        correctAnswers: ['Fragmentierung (Zerstückelung des freien Speichers). Unvermeidbar, da Prozesse unterschiedliche Größen und Lebensdauern haben.'],
        requiredKeywords: [['fragmentierung', 'zerstückelung'], ['größe', 'lebensdauer', 'unvermeidbar']]
    },
    {
        question: 'Wie kümmern sich moderne OS um Fragmentierung?',
        correctAnswers: ['Durch Paging (Seitenadressierung). Der Speicher wird in gleich große Kacheln (Frames/Pages) unterteilt.'],
        requiredKeywords: [['paging', 'seite'], ['kachel', 'frame', 'page'], ['gleich groß']]
    },
    {
        question: 'Was sind Vor- und Nachteile von virtuellem Speicher?',
        correctAnswers: ['Vorteil: Speicher kann größer sein als RAM (Swap), Isolation. Nachteil: Overhead durch Adressübersetzung, Thrashing bei zu viel Paging.'],
        requiredKeywords: [['vorteil', 'größer', 'ram', 'swap'], ['nachteil', 'overhead', 'thrashing']]
    },
    {
        question: 'Was passiert wenn die Page-Größe zu klein oder zu groß ist?',
        correctAnswers: ['Zu klein: Seitentabelle wird riesig. Zu groß: Interne Fragmentierung wächst.'],
        requiredKeywords: [['zu klein', 'seitentabelle', 'riesig'], ['zu groß', 'intern', 'fragmentierung']]
    },
    {
        question: 'Wie funktioniert Adressübersetzung mit Seitentabelle und MMU?',
        correctAnswers: ['Logische Adresse wird in Page Number und Offset geteilt. Tabelle liefert Frame Number. MMU nötig, weil Software-Lookup zu langsam wäre.'],
        requiredKeywords: [['page number', 'offset'], ['frame', 'tabelle'], ['mmu', 'langsam']]
    },
    {
        question: 'Was ist ein Page Fault?',
        correctAnswers: ['Ein Interrupt, der auftritt wenn auf eine Seite zugegriffen wird, die nicht im physischen RAM liegt (sondern auf der Festplatte).'],
        requiredKeywords: [['interrupt'], ['seite', 'page'], ['ram', 'festplatte']]
    },
    {
        question: 'Was ist die Laufzeit von Best-Fit und First-Fit?',
        correctAnswers: ['Best-Fit Worst Case: Muss ganze Liste durchsuchen O(N). First-Fit Best Case: Findet sofort den ersten Block O(1).'],
        requiredKeywords: [['best-fit', 'o(n)', 'liste'], ['first-fit', 'o(1)', 'erst']]
    },
    {
        question: 'Warum ist das optimale Seitenersetzungsverfahren optimal?',
        correctAnswers: ['Es ersetzt die Seite, die am längsten in der Zukunft nicht benötigt wird. Das minimiert die Fehlerrate (Belady).'],
        requiredKeywords: [['längsten', 'zukunft'], ['minimiert', 'fehlerrate', 'belady']]
    },
    {
        question: 'Nennen Sie eine weitere Replacement Strategie neben LRU und FIFO.',
        correctAnswers: ['Random (zufällige Seite) oder Clock-Algorithmus (Annäherung an LRU).'],
        requiredKeywords: [['random', 'zufällig'], ['clock', 'lru']]
    },
    {
        question: 'Wo begegnen Ihnen Online-Probleme im Alltag?',
        correctAnswers: ['Börsenhandel, Routing im Verkehr (Stauprognose), Caching im Webbrowser.'],
        requiredKeywords: [['börse', 'aktie'], ['routing', 'verkehr', 'stau'], ['caching', 'browser']]
    },
    
    // Treiber und Dateisysteme
    {
        question: 'Was sind Vor- und Nachteile von Treibern?',
        correctAnswers: ['Vorteil: Abstraktion und einheitliche Schnittstelle. Nachteil: Laufen oft im Kernel-Mode, fehlerhafter Treiber bringt System zum Absturz.'],
        requiredKeywords: [['vorteil', 'abstraktion', 'schnittstelle'], ['nachteil', 'kernel', 'absturz']]
    },
    {
        question: 'Nennen Sie Beispiele für externe Geräte und Treiber.',
        correctAnswers: ['Grafikkarte (Nvidia-Treiber), Drucker (Druckertreiber), Netzwerkkarte (NIC-Treiber).'],
        requiredKeywords: [['grafikkarte', 'nvidia'], ['drucker'], ['netzwerkkarte', 'nic']]
    },
    {
        question: 'Wie funktioniert Memory Mapping?',
        correctAnswers: ['Geräteregister werden in den physischen Adressraum eingeblendet. Die CPU schreibt an eine Speicheradresse und die Hardware interpretiert dies als Befehl.'],
        requiredKeywords: [['geräteregister', 'adressraum'], ['cpu', 'schreibt'], ['hardware', 'befehl']]
    },
    {
        question: 'Sollte ein OS nur ein Dateisystem unterstützen?',
        correctAnswers: ['Nein. FAT32 für Austauschbarkeit (USB-Sticks), NTFS/ext4 für Sicherheit/Journaling, ISO9660 für CDs.'],
        requiredKeywords: [['nein'], ['fat32', 'usb'], ['ntfs', 'ext4', 'journal']]
    },
    {
        question: 'Beschreiben Sie den Zugriff auf eine Datei.',
        correctAnswers: ['Anwendung ruft open() auf, Dateisystem prüft Rechte und sucht Speicherort (Inode/FAT), Treiber steuert Festplatte an, Daten werden in Puffer und dann in Anwendungsspeicher kopiert.'],
        requiredKeywords: [['open', 'anwendung'], ['inode', 'fat', 'dateisystem'], ['treiber', 'festplatte'], ['puffer', 'speicher']]
    }
];

// Game State
let gameMode = null; // 'osi-layer', 'osi-props', 'general', 'ralph', oder 'brain'
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
    ralphModeBtn: null,
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
    elements.ralphModeBtn = document.getElementById('ralphModeBtn');
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
    elements.ralphModeBtn.addEventListener('click', () => startGame('ralph'));
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
    } else if (mode === 'ralph') {
        // Ralph mode - Rechnerarchitektur & Betriebssysteme
        currentQuestions = shuffleArray([...ralphQuestions]);
        elements.storyText.textContent = 'Radmacher Ralph erscheint: "HAHA! Glaubst du, du kennst die von-Neumann-Architektur? Zeig mir was du drauf hast!"';
        elements.bossImage.src = 'images/Ralph.jpg';
        elements.bossName.textContent = 'RADMACHER RALPH - Der Hardware-Dämon';
    } else if (mode === 'brain') {
        // Brain mode - nur schwierige Fragen von ALLEN Bossen
        const allQuestions = [...generalQuestions, ...ralphQuestions];
        brainQuestions = Array.from(wrongQuestions.keys()).map(questionText => {
            return allQuestions.find(q => q.question === questionText);
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
    } else if (gameMode === 'general' || gameMode === 'ralph' || gameMode === 'brain') {
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
    if (gameMode === 'general' || gameMode === 'ralph') {
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
    
    const bossName = gameMode === 'brain' ? 'SMOOTHBRAIN' : (gameMode === 'ralph' ? 'RADMACHER RALPH' : 'JAKUBASCH');
    
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
            <button class="button counter-btn" id="counterBtn">
                🛡️ COUNTER! Das war richtig!
            </button>
            <button class="button retry" id="continueBtn">
                ⚔️ WEITER KÄMPFEN!
            </button>
            <button class="button" id="mainMenuBtn" style="margin-top: 10px; background: linear-gradient(135deg, #555 0%, #333 100%);">
                🏠 Zurück zum Hauptmenü
            </button>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Counter button handler - Antwort war doch richtig!
    document.getElementById('counterBtn').addEventListener('click', () => {
        document.body.removeChild(overlay);
        handleCounter();
    });
    
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

// Handle Counter - Spieler sagt seine Antwort war doch richtig
function handleCounter() {
    // Rückgängig machen der falschen Antwort
    deaths--;
    lives++;
    updateAttemptsDisplay();
    updateHeartsDisplay();
    
    // Falls im general/ralph Modus, wrongQuestions korrigieren
    if (gameMode === 'general' || gameMode === 'ralph') {
        const currentQ = currentQuestions[currentQuestionIndex];
        const wrongCount = wrongQuestions.get(currentQ.question) || 0;
        if (wrongCount > 0) {
            wrongQuestions.set(currentQ.question, wrongCount - 1);
            if (wrongCount - 1 === 0) {
                wrongQuestions.delete(currentQ.question);
            }
            saveWrongQuestions();
            updateBrainButton();
        }
    } else if (gameMode === 'brain') {
        // Im Brain-Modus: Streak wiederherstellen
        const currentQ = currentQuestions[currentQuestionIndex];
        const currentStreak = brainStreaks.get(currentQ.question) || 0;
        brainStreaks.set(currentQ.question, currentStreak + 1);
    }
    
    // Boss-Name für Overlay
    const bossName = gameMode === 'brain' ? 'SMOOTHBRAIN' : (gameMode === 'ralph' ? 'RADMACHER RALPH' : 'JAKUBASCH');
    
    // Counter Overlay anzeigen
    const overlay = document.createElement('div');
    overlay.className = 'game-over-overlay';
    overlay.innerHTML = `
        <div class="game-over-box" style="border-color: #2ed573;">
            <div class="jakubasch-laugh" style="background: rgba(0, 255, 0, 0.2); border-color: #2ed573; color: #2ed573;">
                😤 ${bossName}: "WAS?! Das war richtig?! Ich muss das nachkorrigieren... VERDAMMT!" 😤
            </div>
            <div class="message success" style="margin: 20px 0;">
                🛡️ COUNTER ERFOLGREICH! 🛡️<br>
                Du hast ${bossName} überlistet!
            </div>
            <button class="button retry" id="counterContinueBtn" style="background: linear-gradient(135deg, #2ed573 0%, #00b894 100%);">
                ⚔️ WEITER ZUR NÄCHSTEN FRAGE!
            </button>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    document.getElementById('counterContinueBtn').addEventListener('click', () => {
        document.body.removeChild(overlay);
        // Jetzt als richtige Antwort behandeln
        handleCorrectAnswer();
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
    } else if (gameMode === 'ralph') {
        currentQuestions = shuffleArray([...ralphQuestions]);
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
    } else if (gameMode === 'ralph') {
        currentQuestions = shuffleArray([...ralphQuestions]);
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
    } else if (gameMode === 'ralph') {
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
