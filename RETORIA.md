# Firma Retoria

Versione modificata di [Documenso](https://github.com/documenso/documenso) v2.21.1, usata da Retoria ETS su `https://firma.retoria.it`.
Licenza: AGPL-3.0, come l'originale (vedi `LICENSE`). © Documenso, Inc. per il codice originale.

## Cosa cambia rispetto a Documenso v2.21.1

- Nome «Firma Retoria» al posto di «Documenso» in interfaccia, titoli delle pagine ed email (traduzioni: `scripts/retoria-rebrand-po.py`; restano i testi sulla licenza di Documenso).
- Logo, icone e immagine di anteprima di Retoria.
- Dichiarazione di firma (italiano e inglese): firma elettronica semplice secondo eIDAS e art. 20, comma 1-bis, D.Lgs. 82/2005, al posto di «stessa validità della firma autografa».
- Tolti i rimandi promozionali a documenso.com; pagina di assistenza con il contatto di Retoria ETS.
- Avviso di licenza AGPL-3.0 e link a questo repository in fondo a ogni pagina.

## Costruire l'immagine

```bash
docker build -f docker/Dockerfile -t firma-retoria:2.21.1-retoria.1 .
```

Servono circa 8 GB di RAM per Docker.
