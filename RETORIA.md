# Firma Retoria

Versione modificata di [Documenso](https://github.com/documenso/documenso) v2.21.1, usata da Retoria ETS su `https://firma.retoria.it`.
Licenza: AGPL-3.0, come l'originale (vedi `LICENSE`). © Documenso, Inc. per il codice originale.

## Cosa cambia rispetto a Documenso v2.21.1

- Nome «Firma Retoria» al posto di «Documenso» in interfaccia, titoli delle pagine ed email (traduzioni: `scripts/retoria-rebrand-po.py`; restano i testi sulla licenza di Documenso).
- Logo vettoriale di retoria.it (versione chiara e scura), icone (anche SVG) e immagine di anteprima di Retoria.
- Email con la palette Retoria (`packages/lib/constants/theme.ts`), logo nitido e icone ricolorate in alloro.
- Tema grafico Retoria «Bosco & Terracotta», come su retoria.it: inchiostro `#203830` per le azioni principali, carta `#F4F1E8` come fondo, terracotta `#B86038` come accento e per i campi firma, salvia `#C9D6C4`; titoli in Space Grotesk (OFL), testo in Inter; angoli da 12 px. File: `packages/ui/styles/theme.css`, `packages/tailwind-config/index.cjs`, `apps/remix/app/app.css`.
- Dichiarazione di firma (italiano e inglese): firma elettronica semplice secondo eIDAS e art. 20, comma 1-bis, D.Lgs. 82/2005, al posto di «stessa validità della firma autografa».
- Tolti i rimandi promozionali a documenso.com; pagina di assistenza con il contatto di Retoria ETS.
- Interfaccia ridotta a ciò che Retoria offre: in alto a destra nome ed email di chi è collegato; nascosti dai menu (non cancellati) organizzazioni, team, membri, gruppi, analytics, token API, webhook e profilo pubblico (`packages/lib/utils/settings-nav.ts`, `org-menu-switcher.tsx`).
- Email dell'account (conferma iscrizione, password, account disattivato) in italiano anche senza lingua dell'organizzazione; niente illustrazione grande nelle email, per non farle sembrare newsletter.
- Nel PDF firmato, sotto ogni firma, l'ID della firma (lo stesso del certificato di firma) e data e ora di Roma (`packages/lib/server-only/pdf/insert-field-in-pdf-v2.ts`).
- Nella pagina di firma i firmatari non vedono nome ed email degli altri firmatari; chi invia il documento scarica il certificato di firma dalla finestra «Scarica file».
- Frasi delle email senza traduzione italiana completate.
- Interfaccia per telefono (sotto 768 px, la versione per computer non cambia): editor con barra a icone e pannello dei campi sopra il PDF, campi firma posizionabili con il tocco, destinatari su più righe, tabelle con titolo, stato e menu, barra in alto con il logo, pannello di firma compatto.
- Editor sul telefono: freccia per tornare ai documenti in alto a sinistra; barra a icone che si apre con le etichette («Mostra le etichette»).
- Avviso di licenza AGPL-3.0 e link a questo repository in fondo a ogni pagina.

## Costruire l'immagine

```bash
docker build -f docker/Dockerfile -t firma-retoria:2.21.1-retoria.1 .
```

Servono circa 8 GB di RAM per Docker.
