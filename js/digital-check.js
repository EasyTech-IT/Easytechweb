(() => {
  const services = [
    {
      id: "it-support",
      icon: "🛠️",
      title: "IT-Betreuung & IT-Support",
      description: "Support, Wartung, Updates, Arbeitsplätze und Ausfallsicherheit.",
      questions: [
        ["problems", "Wie häufig treten IT-Probleme auf, die den Arbeitsalltag unterbrechen?", ["Selten; wir arbeiten überwiegend störungsfrei.", "Gelegentlich, einzelne Personen sind betroffen.", "Regelmäßig oder mehrere Arbeitsplätze gleichzeitig.", "Kann ich nicht einschätzen."]],
        ["support", "Wie ist geregelt, wer bei einer Störung unterstützt?", ["Feste Ansprechperson und klarer Meldeweg.", "Es gibt eine Ansprechperson, aber keinen festen Ablauf.", "Zuständigkeiten sind unklar oder Hilfe kommt erst bei größeren Problemen.", "Kann ich nicht einschätzen."]],
        ["maintenance", "Wie werden Geräte und Systeme regelmäßig gewartet?", ["Wartung und Zustand werden planmäßig überprüft.", "Ein Teil wird regelmäßig geprüft.", "Wartung erfolgt meist erst, wenn etwas nicht mehr funktioniert.", "Kann ich nicht einschätzen."]],
        ["updates", "Wie werden Sicherheits- und Softwareupdates eingespielt?", ["Automatisiert oder nach einem dokumentierten Ablauf.", "Überwiegend regelmäßig, aber nicht zentral kontrolliert.", "Unregelmäßig oder erst bei sichtbaren Problemen.", "Kann ich nicht einschätzen."]],
        ["backup", "Wie gut sind wichtige Daten und Arbeitsplätze gegen Ausfälle abgesichert?", ["Backups sind geplant und Wiederherstellungen werden getestet.", "Backups gibt es, Wiederherstellungen prüfen wir selten.", "Backup-Stand oder Wiederherstellbarkeit ist unklar.", "Kann ich nicht einschätzen."]],
        ["workplace", "Wie einheitlich und nachvollziehbar sind die Arbeitsplätze eingerichtet?", ["Einrichtung, Zugänge und Software sind dokumentiert.", "Die meisten Geräte sind ähnlich eingerichtet.", "Geräte unterscheiden sich stark oder Wissen steckt bei Einzelnen.", "Kann ich nicht einschätzen."]],
      ],
      followup: { after: "support", prompt: "Wie werden wiederkehrende Supportfälle heute bearbeitet?", options: ["Ursachen und Lösungen werden festgehalten.", "Einzelne Fälle werden gelöst, aber kaum dokumentiert.", "Es gibt keinen gemeinsamen Ablauf.", "Kann ich nicht einschätzen."], weakness: "Wiederkehrende Fehler ohne dokumentierte Lösung können unnötige Ausfallzeit verursachen.", action: "Häufige Supportfälle und ihre Lösungen an einem zentralen Ort dokumentieren." },
      weaknesses: ["Häufige Unterbrechungen kosten Arbeitszeit und sollten nach Ursache und Häufigkeit erfasst werden.", "Unklare Zuständigkeiten können die Behebung von Störungen verzögern.", "Reaktive Wartung erhöht das Risiko ungeplanter Ausfälle.", "Nicht kontrollierte Updates lassen Sicherheitslücken möglicherweise länger offen.", "Ungetestete oder unklare Backups können eine Wiederherstellung erschweren.", "Uneinheitliche Geräte erschweren Support, Wartung und sichere Übergaben."],
      actions: ["Störungen kurz mit Zeitpunkt, betroffenen Geräten und Auswirkung protokollieren.", "Einen zentralen Meldeweg und klare Prioritäten für Störungen festlegen.", "Einen regelmäßigen Wartungsplan für Geräte und zentrale Systeme vereinbaren.", "Update-Status zentral erfassen und einen festen Prüfprozess definieren.", "Wichtige Daten priorisieren und regelmäßig eine Wiederherstellung testen.", "Geräte, Software und Zugänge inventarisieren und ein Standardprofil festlegen."],
    },
    {
      id: "netzwerk",
      icon: "📶",
      title: "Netzwerk & WLAN",
      description: "Abdeckung, Ausfälle, Geräte, Gäste-WLAN und Netzwerksicherheit.",
      questions: [
        ["coverage", "Wie zuverlässig ist die WLAN-Abdeckung an den benötigten Arbeitsplätzen?", ["In allen Arbeitsbereichen stabil.", "An einzelnen Stellen schwächer.", "Regelmäßige Funklöcher oder Abbrüche.", "Kann ich nicht einschätzen."]],
        ["outages", "Wie häufig kommt es zu langsamen Verbindungen oder Ausfällen?", ["Selten und ohne merkliche Arbeitsunterbrechung.", "Gelegentlich, meist nur einzelne Geräte.", "Regelmäßig oder für mehrere Personen.", "Kann ich nicht einschätzen."]],
        ["structure", "Ist bekannt, wie Router, Switches und WLAN-Zugangspunkte verbunden sind?", ["Ja, die Struktur ist dokumentiert.", "Teilweise; nicht alle Geräte oder Verbindungen sind erfasst.", "Nein, die Struktur ist weitgehend unbekannt.", "Kann ich nicht einschätzen."]],
        ["guest", "Ist das WLAN für Gäste vom internen Firmennetz getrennt?", ["Ja, mit eigenem Gästezugang.", "Ein Gastzugang besteht, die Trennung ist aber unklar.", "Nein oder es gibt keine getrennte Zugangsmöglichkeit.", "Kann ich nicht einschätzen."]],
        ["access", "Wie werden WLAN-Zugangsdaten und Zugriffsrechte verwaltet?", ["Sicher, mit begrenztem Zugriff und regelmäßiger Überprüfung.", "Zugangsdaten sind geteilt, werden aber gelegentlich geändert.", "Viele kennen dasselbe Passwort oder Zugänge sind unbekannt.", "Kann ich nicht einschätzen."]],
        ["maintenance", "Werden Netzwerkgeräte und ihre Softwarestände regelmäßig überprüft?", ["Ja, Geräte und Updates werden nachvollziehbar geprüft.", "Teilweise, aber ohne festen Rhythmus.", "Nur wenn eine Störung auftritt.", "Kann ich nicht einschätzen."]],
      ],
      followup: { after: "outages", prompt: "Wie grenzt du eine wiederkehrende Netzwerkstörung ein?", options: ["Ort, Zeit und betroffene Geräte werden verglichen.", "Wir prüfen einzelne Geräte, aber nicht systematisch.", "Die Ursache bleibt meist unklar.", "Kann ich nicht einschätzen."], weakness: "Ohne systematische Eingrenzung ist schwer zu unterscheiden, ob WLAN, Netzwerk oder Internetanschluss betroffen ist.", action: "Störungen nach Ort, Uhrzeit, Geräten und einer möglichen Kabelverbindung vergleichen." },
      weaknesses: ["Schwache WLAN-Bereiche können auf ungünstige Platzierung, bauliche Hindernisse oder Kapazitätsprobleme hindeuten.", "Wiederkehrende Ausfälle sollten nach Ort, Zeit und betroffenen Geräten eingegrenzt werden.", "Ohne Netzplan sind Fehlersuche und Änderungen unnötig aufwendig.", "Ein nicht getrenntes Gäste-WLAN kann interne Geräte unnötig erreichbar machen.", "Geteilte oder veraltete Zugangsdaten erschweren eine kontrollierte Zugriffsbeschränkung.", "Ungeprüfte Geräte und Updates können die Stabilität und Sicherheit beeinträchtigen."],
      actions: ["Empfang an Arbeitsplätzen vergleichen und Messpunkte auf einem Grundriss festhalten.", "Ausfälle mit Uhrzeit, Ort, Gerät und Vergleich einer Kabelverbindung dokumentieren.", "Router, Switches und Zugangspunkte erfassen und ihre Verbindungen skizzieren.", "Ein separates Gäste-WLAN einrichten und die Trennung zum Firmennetz prüfen.", "Zugangsdaten erneuern, Zugriff begrenzen und gemeinsam genutzte Passwörter vermeiden.", "Gerätebestand und Firmwarestände erfassen und regelmäßige Prüfintervalle festlegen."],
    },
    {
      id: "website",
      icon: "🌐",
      title: "Webdesign & Website",
      description: "Nutzerführung, Mobilansicht, Ladezeit, Vertrauen und Kontaktwege.",
      questions: [
        ["first-impression", "Wird innerhalb weniger Sekunden klar, was dein Unternehmen anbietet?", ["Ja, Angebot und Zielgruppe sind sofort verständlich.", "Im Großen und Ganzen, einzelne Inhalte sind unklar.", "Nein, Leistungen oder Nutzen sind schwer zu erkennen.", "Kann ich nicht einschätzen."]],
        ["mobile", "Lässt sich die Website auf Smartphones komfortabel bedienen?", ["Ja, Inhalte und Bedienelemente passen sich gut an.", "Überwiegend, manche Bereiche sind umständlich.", "Nein oder wichtige Inhalte sind mobil schwer nutzbar.", "Kann ich nicht einschätzen."]],
        ["speed", "Wie wirkt die Ladezeit auf typischen Mobilgeräten?", ["Seiten und wichtige Inhalte erscheinen zügig.", "Einzelne Seiten oder Medien wirken langsam.", "Die Website fühlt sich häufig träge an.", "Kann ich nicht einschätzen."]],
        ["contact", "Finden Interessierte schnell heraus, wie sie dich erreichen können?", ["Kontaktmöglichkeiten und nächster Schritt sind deutlich sichtbar.", "Kontakt ist vorhanden, aber nicht überall leicht zu finden.", "Kontaktweg oder klare Handlungsaufforderung fehlt.", "Kann ich nicht einschätzen."]],
        ["trust", "Sind Referenzen, echte Einblicke oder andere Vertrauenssignale vorhanden?", ["Passende Referenzen und aktuelle Unternehmensinformationen.", "Einige Informationen sind vorhanden, könnten aktueller sein.", "Wenig Einblick oder nachvollziehbare Vertrauenssignale.", "Kann ich nicht einschätzen."]],
        ["content", "Sind Leistungen und Inhalte aktuell und verständlich beschrieben?", ["Ja, Inhalte sind aktuell, konkret und gut strukturiert.", "Zum Teil, einige Seiten sind lückenhaft oder veraltet.", "Nein, wichtige Inhalte fehlen oder sind nicht mehr aktuell.", "Kann ich nicht einschätzen."]],
      ],
      followup: { after: "mobile", prompt: "Wird die mobile Ansicht vor oder nach Änderungen gezielt geprüft?", options: ["Ja, auf mehreren Bildschirmgrößen und Geräten.", "Gelegentlich auf einem Smartphone.", "Nein, eine regelmäßige Prüfung findet nicht statt.", "Kann ich nicht einschätzen."], weakness: "Ohne gezielte Prüfung können Darstellungs- und Bedienprobleme auf mobilen Geräten unbemerkt bleiben.", action: "Die wichtigsten Seiten auf mehreren Smartphone-Größen und nach größeren Änderungen testen." },
      weaknesses: ["Ein unklarer Einstieg erschwert es Besuchern, Relevanz und Angebot schnell einzuordnen.", "Schwächen in der mobilen Bedienung können Anfragen auf Smartphones verhindern.", "Langsame Seiten können die Nutzung erschweren; die tatsächliche Ursache erfordert eine technische Messung.", "Ein schwer auffindbarer Kontaktweg macht den nächsten Schritt unnötig kompliziert.", "Fehlende oder veraltete Vertrauenssignale lassen Interessierte wichtige Informationen vermissen.", "Veraltete oder lückenhafte Inhalte können Fragen offenlassen."],
      actions: ["Die Startseite mit einem klaren Nutzenversprechen und einer eindeutigen Zielgruppe beginnen.", "Die wichtigsten Seiten auf mehreren Smartphone-Größen prüfen und Bedienelemente vereinfachen.", "Ladezeiten mit einem geeigneten Messwerkzeug prüfen und große Bilder priorisiert optimieren.", "Eine klare Kontaktmöglichkeit und einen passenden nächsten Schritt gut sichtbar platzieren.", "Aktuelle Referenzen, Team- oder Unternehmensinformationen ergänzen, sofern verfügbar.", "Angebot, Preise und Kontaktinformationen prüfen und die wichtigsten Fragen beantworten."],
    },
    {
      id: "seo",
      icon: "🔎",
      title: "SEO & lokale Sichtbarkeit",
      description: "Google-Auffindbarkeit, lokale Inhalte, Unternehmensprofil und Technik.",
      questions: [
        ["keywords", "Sind die Suchbegriffe bekannt, mit denen passende Kunden dich finden sollen?", ["Ja, Zielgruppen und Suchintention sind klar definiert.", "Einige Begriffe sind bekannt, aber nicht priorisiert.", "Nein, es gibt keine klare Suchbegriffsplanung.", "Kann ich nicht einschätzen."]],
        ["titles", "Hat jede wichtige Seite einen eigenen, aussagekräftigen Seitentitel?", ["Ja, Titel passen jeweils zu Inhalt und Suchintention.", "Teilweise; manche Titel sind ähnlich oder wenig präzise.", "Nein oder Seitentitel sind nicht bekannt.", "Kann ich nicht einschätzen."]],
        ["local-content", "Beschreiben die Seiten konkret, welche Leistungen du für wen anbietest?", ["Ja, Leistungen und Zielgruppen sind klar und individuell beschrieben.", "Teilweise; einzelne Leistungsseiten sind knapp.", "Nein, Inhalte sind allgemein oder wichtige Leistungen fehlen.", "Kann ich nicht einschätzen."]],
        ["profile", "Ist dein Google-Unternehmensprofil vollständig und aktuell?", ["Ja, Angaben und Bilder werden aktuell gehalten.", "Teilweise ausgefüllt oder länger nicht überprüft.", "Nein oder kein Profil vorhanden.", "Kann ich nicht einschätzen."]],
        ["technical", "Werden Indexierbarkeit, Mobilansicht und technische SEO-Grundlagen geprüft?", ["Ja, technische Punkte werden regelmäßig kontrolliert.", "Einige Grundlagen sind geprüft, aber nicht regelmäßig.", "Nein oder der technische Zustand ist unbekannt.", "Kann ich nicht einschätzen."]],
        ["reviews", "Gibt es einen verlässlichen Prozess, um Kundenbewertungen und Rückmeldungen zu pflegen?", ["Ja, Rückmeldungen werden regelmäßig beobachtet und beantwortet.", "Bewertungen werden gelegentlich geprüft.", "Nein oder Zuständigkeiten sind unklar.", "Kann ich nicht einschätzen."]],
      ],
      followup: { after: "titles", prompt: "Wie prüfst du, ob die wichtigsten Seiten bei passenden Suchanfragen sichtbar sind?", options: ["Mit Search Console oder einem vergleichbaren Messverfahren.", "Gelegentlich über manuelle Suchen.", "Die Sichtbarkeit wird nicht gezielt geprüft.", "Kann ich nicht einschätzen."], weakness: "Ohne Daten zur Sichtbarkeit bleiben Veränderungen bei Impressionen und Suchanfragen schwer nachvollziehbar.", action: "Eine geeignete Messgrundlage einrichten und relevante Suchanfragen regelmäßig auswerten." },
      weaknesses: ["Ohne klare Suchintention ist schwer zu entscheiden, welche Seiten und Inhalte Priorität haben.", "Unklare oder gleiche Seitentitel können die Einordnung wichtiger Seiten erschweren.", "Allgemeine Inhalte beantworten konkrete Fragen potenzieller Kunden möglicherweise nicht.", "Ein lückenhaftes Unternehmensprofil kann lokale Interessierte mit offenen Fragen zurücklassen.", "Ohne technische Prüfung bleiben Indexierungs- oder Darstellungsprobleme möglicherweise unentdeckt.", "Unbeantwortete Rückmeldungen lassen Chancen zur Information und Vertrauensbildung ungenutzt."],
      actions: ["Suchanfragen von Kunden sammeln und passende Begriffe nach Relevanz gruppieren.", "Für jede wichtige Seite einen individuellen Titel und eine präzise Beschreibung formulieren.", "Leistungsseiten mit Zielgruppe, konkretem Nutzen, Ablauf und häufigen Fragen ausarbeiten.", "Profilangaben, Kategorien, Öffnungszeiten, Leistungen und aktuelle Bilder vervollständigen.", "Indexierung und Mobilansicht mit geeigneten Werkzeugen kontrollieren; Search-Console-Daten nur mit Zugriff einbeziehen.", "Bewertungen regelmäßig prüfen und sachlich sowie zeitnah beantworten."],
    },
    {
      id: "automation",
      icon: "✨",
      title: "KI & Automatisierung",
      description: "Wiederkehrende Aufgaben, manuelle Abläufe, Daten und KI-Potenziale.",
      questions: [
        ["repetition", "Wie viel Zeit beanspruchen wiederkehrende manuelle Aufgaben?", ["Wenig; wiederkehrende Schritte sind bereits vereinfacht.", "Einige Aufgaben kosten regelmäßig Zeit.", "Viele manuelle Abläufe wiederholen sich täglich oder wöchentlich.", "Kann ich nicht einschätzen."]],
        ["process", "Sind die Abläufe, die du verbessern möchtest, klar dokumentiert?", ["Ja, Verantwortliche und Schritte sind nachvollziehbar.", "Teilweise; wichtige Schritte hängen von einzelnen Personen ab.", "Nein, der Ablauf ist uneinheitlich oder nicht dokumentiert.", "Kann ich nicht einschätzen."]],
        ["data", "Liegen die dafür benötigten Informationen strukturiert und zuverlässig vor?", ["Ja, Daten sind zentral und gut nutzbar.", "Teilweise; es gibt mehrere Quellen oder manuelle Übertragungen.", "Nein, Daten sind verteilt, uneinheitlich oder schwer auffindbar.", "Kann ich nicht einschätzen."]],
        ["volume", "Wie oft wird der betreffende Ablauf ausgeführt?", ["Selten oder in jedem Fall unterschiedlich.", "Regelmäßig, aber mit vielen Ausnahmen.", "Häufig und mit wiederkehrenden, ähnlichen Schritten.", "Kann ich nicht einschätzen."]],
        ["privacy", "Ist geklärt, welche Daten in KI- oder Automatisierungswerkzeuge eingegeben werden dürfen?", ["Ja, Regeln und Freigaben sind festgelegt.", "Teilweise; es gibt noch offene Fragen zu Werkzeugen und Daten.", "Nein oder sensible Daten könnten ungeprüft eingegeben werden.", "Kann ich nicht einschätzen."]],
        ["review", "Gibt es eine Möglichkeit, Ergebnisse automatisierter Schritte zu kontrollieren?", ["Ja, Ergebnisse werden nachvollziehbar geprüft und können korrigiert werden.", "Teilweise, die Kontrolle ist noch nicht durchgängig.", "Nein, Fehler würden wahrscheinlich unbemerkt bleiben.", "Kann ich nicht einschätzen."]],
      ],
      followup: { after: "process", prompt: "Ist für den Ablauf festgelegt, wer das Ergebnis kontrolliert und freigibt?", options: ["Ja, Verantwortlichkeit und Freigabe sind klar.", "Teilweise; die Zuständigkeit wechselt.", "Nein, eine feste Kontrolle fehlt.", "Kann ich nicht einschätzen."], weakness: "Ohne klaren Prüf- und Freigabeschritt können Fehler oder unerwünschte Ergebnisse weiterverarbeitet werden.", action: "Eine verantwortliche Person und einen klaren Freigabeschritt für den Ablauf festlegen." },
      weaknesses: ["Häufige manuelle Wiederholungen können sich als Ansatzpunkt für Vereinfachungen eignen.", "Nicht dokumentierte Abläufe sind schwer zuverlässig zu automatisieren.", "Verteilte oder uneinheitliche Daten erschweren stabile Schnittstellen und Automatisierungen.", "Ein häufiger, gleichförmiger Ablauf ist eher prüfenswert als ein seltener Sonderfall.", "Unklare Regeln können zu unangemessener Verarbeitung vertraulicher oder personenbezogener Daten führen.", "Ohne Kontrolle können fehlerhafte automatisierte Ergebnisse unbemerkt weiterverwendet werden."],
      actions: ["Aufwand und Häufigkeit eines konkreten Ablaufs eine Woche lang erfassen.", "Den Ablauf mit Ausnahmen, Verantwortlichkeiten und gewünschtem Ergebnis dokumentieren.", "Datenquellen, Zuständigkeiten und manuelle Übertragungen für den Prozess aufnehmen.", "Mit einem häufigen, klar begrenzten Prozess starten und Zeitersparnis realistisch vergleichen.", "Vor einem Test Datenklassen, Zugriffsrechte und zulässige Werkzeuge verbindlich festlegen.", "Einen menschlichen Freigabeschritt und nachvollziehbare Fehlerbehandlung vorsehen."],
    },
    {
      id: "social",
      icon: "🎬",
      title: "Social Media & Videografie",
      description: "Content-Planung, Markenauftritt, Zielgruppe und Handlungsimpulse.",
      questions: [
        ["goal", "Gibt es ein konkretes Ziel für deine Social-Media-Inhalte?", ["Ja, Ziele und gewünschte Reaktionen sind definiert.", "Ein grobes Ziel besteht, ist aber nicht messbar festgehalten.", "Nein, es wird ohne klares Ziel veröffentlicht.", "Kann ich nicht einschätzen."]],
        ["audience", "Ist klar, welche Zielgruppe du mit deinen Inhalten erreichen möchtest?", ["Ja, Zielgruppe und ihre Fragen sind gut bekannt.", "Teilweise; Zielgruppe ist noch recht breit.", "Nein, Zielgruppe und Themen sind unklar.", "Kann ich nicht einschätzen."]],
        ["consistency", "Wie regelmäßig veröffentlichst du passende Inhalte?", ["Mit einem realistischen, verlässlichen Rhythmus.", "Unregelmäßig, abhängig von verfügbarer Zeit.", "Selten oder ohne Planung.", "Kann ich nicht einschätzen."]],
        ["brand", "Erkennen Interessierte deine Marke über verschiedene Beiträge hinweg wieder?", ["Ja, Bildsprache und Botschaft sind konsistent.", "Teilweise; einzelne Inhalte weichen deutlich ab.", "Nein, ein erkennbarer Auftritt fehlt.", "Kann ich nicht einschätzen."]],
        ["video", "Wirken Videos und Beiträge passend produziert und gut verständlich?", ["Ja, Qualität und Format passen zur Plattform.", "Überwiegend, Ton oder Bild könnten verbessert werden.", "Inhalte sind schwer verständlich oder uneinheitlich.", "Kann ich nicht einschätzen."]],
        ["cta", "Wissen Betrachter, was sie nach einem Beitrag tun können?", ["Ja, passende Handlungsaufforderungen sind vorhanden.", "Manchmal; nicht bei allen passenden Beiträgen.", "Nein, der nächste Schritt ist meist unklar.", "Kann ich nicht einschätzen."]],
      ],
      followup: { after: "audience", prompt: "Wie gewinnst du Themen und Formulierungen, die für deine Zielgruppe relevant sind?", options: ["Aus echten Kundenfragen und Rückmeldungen.", "Aus eigener Einschätzung und gelegentlichem Feedback.", "Ohne systematische Orientierung an Kundenfragen.", "Kann ich nicht einschätzen."], weakness: "Ohne Bezug zu echten Kundenfragen kann Content an den Interessen der Zielgruppe vorbeigehen.", action: "Häufige Fragen aus Kundengesprächen sammeln und als konkrete Content-Themen planen." },
      weaknesses: ["Ohne klares Ziel ist schwer zu erkennen, welche Inhalte Wirkung zeigen.", "Eine zu breite Zielgruppe erschwert passende Themen und Ansprache.", "Ein unrealistischer oder unregelmäßiger Rhythmus erschwert verlässliche Content-Arbeit.", "Ein uneinheitlicher Auftritt kann die Wiedererkennbarkeit mindern.", "Schwächen bei Ton, Bild oder Verständlichkeit lenken vom Inhalt ab.", "Ohne nächsten Schritt bleibt unklar, wie Interessierte weiter mit dir in Kontakt treten können."],
      actions: ["Ein konkretes Ziel pro Kanal festlegen und eine passende Kennzahl auswählen.", "Häufige Fragen der Wunschkunden sammeln und daraus Themen ableiten.", "Einen realistischen Redaktionsrhythmus mit wiederverwendbaren Formaten planen.", "Wiederkehrende Farben, Schriften und Bildsprache in einer kompakten Vorlage festhalten.", "Vor der Veröffentlichung Ton, Bildausschnitt, Untertitel und mobile Lesbarkeit prüfen.", "Beiträge mit einer passenden, eindeutigen Handlungsaufforderung abschließen."],
    },
    {
      id: "digitalization",
      icon: "💻",
      title: "Geräte-Setup & Digitalisierung",
      description: "Neue Geräte, Datenübernahme, Einrichtung und digitale Arbeitsabläufe.",
      questions: [
        ["needs", "Sind Anforderungen und benötigte Software vor der Geräteauswahl geklärt?", ["Ja, Anforderungen sind dokumentiert und abgestimmt.", "Teilweise; wichtige Details werden noch geklärt.", "Nein, Geräte werden ohne klares Anforderungsprofil gewählt.", "Kann ich nicht einschätzen."]],
        ["setup", "Werden Geräte nach einem einheitlichen Einrichtungsstandard vorbereitet?", ["Ja, Einrichtung und Grundeinstellungen sind standardisiert.", "Teilweise; einige Einstellungen werden manuell ergänzt.", "Nein, jedes Gerät wird anders oder spontan eingerichtet.", "Kann ich nicht einschätzen."]],
        ["transfer", "Wie werden Daten und Einstellungen auf neue Geräte übertragen?", ["Mit geprüftem Ablauf und kontrollierter Datenvollständigkeit.", "Meist manuell, mit gelegentlicher Nachkontrolle.", "Ohne festen Ablauf oder mit unklarer Datensicherung.", "Kann ich nicht einschätzen."]],
        ["access", "Sind benötigte Benutzerkonten und Berechtigungen nachvollziehbar geregelt?", ["Ja, Zugriffe sind rollenbezogen und dokumentiert.", "Teilweise, einzelne Konten oder Rechte sind unklar.", "Nein, Zugänge sind geteilt oder nicht vollständig erfasst.", "Kann ich nicht einschätzen."]],
        ["workflow", "Sind digitale Abläufe im Team bekannt und werden sie einheitlich genutzt?", ["Ja, Abläufe sind verständlich dokumentiert.", "Teilweise; es gibt verschiedene Vorgehensweisen.", "Nein, viele Schritte sind manuell oder nur einzelnen bekannt.", "Kann ich nicht einschätzen."]],
        ["recovery", "Kann ein Gerät bei Verlust oder Defekt sicher ersetzt und wiederhergestellt werden?", ["Ja, wichtige Daten und Einrichtung sind wiederherstellbar.", "Teilweise; der Ablauf wurde nicht vollständig getestet.", "Nein oder Wiederherstellung ist nicht geklärt.", "Kann ich nicht einschätzen."]],
      ],
      followup: { after: "setup", prompt: "Gibt es eine dokumentierte Checkliste, die für jedes neue Gerät durchlaufen wird?", options: ["Ja, sie wird regelmäßig verwendet.", "Es gibt einzelne Notizen, aber keine vollständige Checkliste.", "Nein, die Einrichtung hängt von der jeweiligen Person ab.", "Kann ich nicht einschätzen."], weakness: "Ohne gemeinsame Checkliste können wichtige Einrichtungsschritte bei neuen Geräten fehlen.", action: "Eine wiederverwendbare Checkliste für Konten, Schutz, Updates und benötigte Software erstellen." },
      weaknesses: ["Ohne Anforderungsprofil drohen ungeeignete Geräte oder unnötige Ausstattung.", "Uneinheitliche Einrichtungsabläufe erhöhen den Aufwand und die Fehlergefahr.", "Ungeprüfte Datenübernahmen können Dateien oder wichtige Einstellungen übersehen.", "Unklare Berechtigungen erschweren sichere Zugriffe und spätere Übergaben.", "Uneinheitliche Abläufe erschweren Zusammenarbeit und Einarbeitung.", "Ungeklärte Wiederherstellung kann einen Geräteausfall unnötig verlängern."],
      actions: ["Arbeitsaufgaben, benötigte Software und Zubehör vor der Beschaffung festhalten.", "Eine Einrichtungscheckliste mit Updates, Konten, Schutz und benötigter Software erstellen.", "Daten vor der Übernahme sichern und Vollständigkeit nach einem festen Ablauf prüfen.", "Persönliche Konten verwenden, Berechtigungen dokumentieren und nicht mehr benötigte Zugänge entfernen.", "Einen zentralen digitalen Ablauf auswählen, dokumentieren und im Team abstimmen.", "Wiederherstellungsschritte dokumentieren und anhand eines Ersatzgeräts testen."],
    },
  ];

  const host = document.createElement("div");
  host.id = "digital-check";
  host.innerHTML = `
    <div class="dc-head">
      <p class="eyebrow">Kostenlos · Ohne Registrierung · Ohne technischen Scan</p>
      <h3>Kostenloser Digital-Check</h3>
      <p>Wähle eine Leistung, beantworte ein paar Fragen und erhalte eine individuelle Ersteinschätzung mit konkreten nächsten Schritten.</p>
    </div>
    <div id="dc-app" aria-live="polite"></div>`;
  const app = host.querySelector("#dc-app");
  const state = { service: null, answers: {}, questionIndex: 0 };
  const levels = [
    { minimum: 80, label: "Gute Grundlage", description: "Deine Antworten zeigen in vielen Bereichen eine solide Grundlage. Einzelne Verbesserungen können die Abläufe weiter stärken." },
    { minimum: 60, label: "Gute Ansätze mit Potenzial", description: "Es gibt bereits gute Ansätze. Einige gezielte Verbesserungen können offene Risiken reduzieren." },
    { minimum: 35, label: "Mehrere Punkte im Blick behalten", description: "Deine Antworten deuten auf mehrere Bereiche hin, die du strukturiert prüfen und priorisieren solltest." },
    { minimum: 0, label: "Handlungsbedarf erkennbar", description: "Mehrere Antworten weisen auf mögliche Schwachstellen hin. Beginne mit den dringlichsten und konkretesten Punkten." },
  ];

  function escapeHtml(value) {
    return value.replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[character]);
  }

  function renderServices() {
    app.innerHTML = `<div class="service-grid">${services.map((service) => `
      <button class="service-card" type="button" data-service="${service.id}">
        <span class="service-icon" aria-hidden="true">${service.icon}</span>
        <strong>${service.title}</strong>
        <span>${service.description}</span>
      </button>`).join("")}</div>`;
    app.querySelectorAll("[data-service]").forEach((button) => {
      button.addEventListener("click", () => startAnalysis(button.dataset.service));
    });
  }

  function startAnalysis(serviceId) {
    state.service = services.find((service) => service.id === serviceId);
    state.answers = {};
    state.questionIndex = 0;
    renderQuestion();
    host.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function visibleQuestions() {
    const service = state.service;
    const questions = [];
    service.questions.forEach((item, index) => {
      const question = {
        id: item[0],
        prompt: item[1],
        options: item[2],
        weakness: service.weaknesses[index],
        action: service.actions[index],
      };
      questions.push(question);
      if (service.followup.after === question.id && state.answers[question.id] === 2) {
        questions.push({ ...service.followup, id: `${service.id}-followup`, followup: true });
      }
    });
    return questions;
  }

  function renderQuestion() {
    const service = state.service;
    const questions = visibleQuestions();
    const question = questions[state.questionIndex];
    const selected = state.answers[question.id];
    const total = questions.length;
    const progress = Math.round(((state.questionIndex + 1) / total) * 100);
    app.innerHTML = `
      <section class="quiz" aria-labelledby="question-title">
        <div class="quiz-top">
          <span>${service.title}</span>
          <span>Frage ${state.questionIndex + 1} von ${total}</span>
        </div>
        <div class="progress-track" role="progressbar" aria-label="Fortschritt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}">
          <div class="progress-fill" style="width:${progress}%"></div>
        </div>
        <h3 id="question-title">${question.prompt}</h3>
        <div class="answers" role="group" aria-labelledby="question-title">
          ${question.options.map((label, index) => `
            <button class="answer" type="button" data-answer="${index}" aria-pressed="${selected === index}">
              <span>${label}</span>
              <span class="answer-check" aria-hidden="true">${selected === index ? "Ausgewählt" : ""}</span>
            </button>`).join("")}
        </div>
        <div class="quiz-actions">
          <button class="button button-secondary" type="button" data-action="back">
            ${state.questionIndex === 0 ? "Leistung ändern" : "Zurück"}
          </button>
          <button class="button button-primary" type="button" data-action="next" ${selected === undefined ? "disabled" : ""}>
            ${state.questionIndex === total - 1 ? "Analyse auswerten" : "Weiter"}
          </button>
        </div>
        <p class="quiz-note">Deine Angaben werden nicht übertragen oder gespeichert.</p>
      </section>`;

    app.querySelectorAll("[data-answer]").forEach((button) => {
      button.addEventListener("click", () => {
        const answersBeforeQuestion = visibleQuestions()
          .slice(0, state.questionIndex)
          .map((visibleQuestion) => visibleQuestion.id);
        state.answers = Object.fromEntries(
          Object.entries(state.answers).filter(([id]) => answersBeforeQuestion.includes(id)),
        );
        state.answers[question.id] = Number(button.dataset.answer);
        renderQuestion();
        app.querySelector(`[data-answer="${state.answers[question.id]}"]`).focus();
      });
    });
    app.querySelector('[data-action="back"]').addEventListener("click", () => {
      if (state.questionIndex === 0) {
        state.service = null;
        renderServices();
      } else {
        state.questionIndex -= 1;
        renderQuestion();
      }
    });
    app.querySelector('[data-action="next"]').addEventListener("click", () => {
      if (state.answers[question.id] === undefined) return;
      const currentQuestions = visibleQuestions();
      if (state.questionIndex < currentQuestions.length - 1) {
        state.questionIndex += 1;
        renderQuestion();
      } else {
        renderResult();
      }
    });
  }

  function renderResult() {
    const service = state.service;
    const values = visibleQuestions().map((question) => {
      const answerIndex = state.answers[question.id];
      return {
        question: question.prompt,
        score: [100, 68, 30, 55][answerIndex],
        unknown: answerIndex === 3,
        concern: answerIndex === 3
          ? "Der aktuelle Stand ist anhand deiner Angaben nicht bekannt. Prüfe zunächst, ob hier Verbesserungsbedarf besteht."
          : question.weakness,
        action: answerIndex === 3
          ? `Prüfe und dokumentiere zunächst den aktuellen Stand. Falls dabei Lücken sichtbar werden: ${question.action}`
          : question.action,
      };
    });
    const score = Math.round(values.reduce((total, answer) => total + answer.score, 0) / values.length);
    const level = levels.find((entry) => score >= entry.minimum);
    const concerns = values.filter((answer) => answer.score < 60);
    const recommendations = values
      .filter((answer) => answer.score < 75)
      .sort((first, second) => first.score - second.score)
      .slice(0, 3);
    const weaknessesMarkup = concerns.length
      ? concerns
        .map((answer) => `<li><strong>${escapeHtml(answer.question)}${answer.unknown ? " · Prüfbedarf" : ""}</strong>${escapeHtml(answer.concern)}</li>`)
        .join("")
      : "<li><strong>Keine ausgeprägte Schwachstelle aus deinen Angaben</strong>Deine Antworten zeigen keine deutlich kritische Einzelbewertung. Prüfe die Empfehlungen als Ansatz zur weiteren Verbesserung.</li>";
    const recommendationsMarkup = recommendations.length
      ? recommendations.map((answer, index) => `<li><strong>${index + 1}. ${escapeHtml(answer.question)}</strong>${escapeHtml(answer.action)}</li>`).join("")
      : `<li><strong>Gute Basis erhalten</strong>${escapeHtml(service.actions[0])}</li>`;

    app.innerHTML = `
      <section class="result" aria-labelledby="result-title">
        <div class="result-header">
          <div class="score-circle" style="--score:${score}" role="img" aria-label="Orientierungswert ${score} von 100">
            <span class="score-number">${score}</span>
            <span class="score-label">von 100</span>
          </div>
          <div>
            <p class="eyebrow">${service.title}</p>
            <h2 id="result-title">${level.label}</h2>
            <p class="result-intro">${level.description}</p>
          </div>
        </div>
        <p class="result-intro">Der Orientierungswert ist der gerundete Durchschnitt deiner Antworten, gegebenenfalls einschließlich Folgefrage. Positive Antworten zählen 100, teilweise erfüllte 68, negative 30 und unbekannte Zustände 55 Punkte. Er ist eine Selbsteinschätzung, kein technischer Prüfwert.</p>
        <div class="result-section">
          <h3>Aus deinen Antworten abgeleitete Hinweise</h3>
          <ul class="result-list">${weaknessesMarkup}</ul>
        </div>
        <div class="result-section">
          <h3>Empfohlene nächste Schritte</h3>
          <ol class="result-list priority-list">${recommendationsMarkup}</ol>
        </div>
        <p class="result-disclaimer">Diese Ersteinschätzung ersetzt keine technische Prüfung. Es wurde kein Live-Scan durchgeführt; alle Hinweise beruhen ausschließlich auf deinen Antworten.</p>
        <div class="result-actions">
          <button class="button button-secondary" type="button" data-action="restart">Andere Leistung analysieren</button>
          <a class="button button-primary" href="/kontakt/">Unverbindliche Beratung anfragen</a>
        </div>
      </section>`;
    app.querySelector('[data-action="restart"]').addEventListener("click", renderServices);
    host.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  let scheduled = false;
  function attach() {
    scheduled = false;
    const pill = document.querySelector("section.lz-sec .lz-pill");
    if (pill && host.previousElementSibling !== pill) {
      pill.after(host);
    }
  }
  function scheduleAttach() {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(attach);
    }
  }

  renderServices();
  new MutationObserver(scheduleAttach).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  attach();
})();
