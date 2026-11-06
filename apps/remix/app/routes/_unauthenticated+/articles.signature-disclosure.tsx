import { SUPPORT_EMAIL } from '@documenso/lib/constants/app';
import { Button } from '@documenso/ui/primitives/button';
import { Link } from 'react-router';

// Retoria: informativa scritta per l'Italia (firma elettronica semplice), al posto del testo
// di Documenso basato sulla legge statunitense (E-Sign Act).
export default function SignatureDisclosure() {
  return (
    <div>
      <article className="prose dark:prose-invert">
        <h1>Informativa sulla firma elettronica</h1>

        <h2>A cosa serve</h2>
        <p>
          Firma Retoria è il servizio di firma elettronica di Retoria ETS. Questa pagina spiega che tipo di firma apponi,
          cosa viene registrato e quali sono i tuoi diritti prima di firmare.
        </p>

        <h2>Che tipo di firma è</h2>
        <p>
          È una firma elettronica semplice ai sensi del Regolamento (UE) n. 910/2014 (eIDAS). Non è una firma digitale né
          una firma elettronica qualificata o avanzata. Secondo l'articolo 20, comma 1-bis, del Codice
          dell'amministrazione digitale (D.Lgs. 82/2005), la sua idoneità a soddisfare il requisito della forma scritta e
          il suo valore probatorio sono liberamente valutabili in giudizio, in relazione alle caratteristiche di
          sicurezza, integrità e immodificabilità del documento. Quando una legge richiede la firma digitale o
          qualificata, questa firma non la sostituisce.
        </p>

        <h2>Cosa viene registrato</h2>
        <p>
          Per ogni documento il servizio registra il nome e l'indirizzo email di chi firma, la data e l'ora di ogni
          passaggio, l'indirizzo IP e il browser usato. Queste informazioni formano il certificato di firma, che serve a
          dimostrare chi ha firmato e quando. Per proteggere i dati delle persone coinvolte il certificato non è allegato
          al documento che ricevi: lo conserva chi ti ha inviato il documento.
        </p>

        <h2>Cosa ti serve</h2>
        <ul>
          <li>Una connessione a internet</li>
          <li>Un indirizzo email</li>
          <li>Un dispositivo che apra e mostri documenti PDF</li>
          <li>Un modo per scaricare o stampare il documento firmato</li>
        </ul>

        <h2>Consenso all'uso di mezzi elettronici</h2>
        <p>
          Firmando con questo servizio accetti di firmare il documento e di ricevere le comunicazioni che lo riguardano
          in forma elettronica, sulla piattaforma o per email.
        </p>

        <h2>Se non vuoi firmare</h2>
        <p>
          Fino a quando non completi la firma puoi non firmare o rifiutare il documento. Per qualsiasi dubbio sul
          contenuto rivolgiti a chi te lo ha inviato. Se non riesci a contattarlo scrivi a{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>

        <h2>Copia del documento</h2>
        <p>
          Quando tutti hanno firmato ricevi per email il documento firmato. Conservane una copia: il servizio potrebbe non
          conservarlo per sempre.
        </p>

        <h2>Chi è responsabile del documento</h2>
        <p>
          Il contenuto del documento è responsabilità di chi te lo ha inviato. Retoria ETS fornisce lo strumento di
          firma.
        </p>

        <h2>Contatti</h2>
        <p>
          Per domande su questa informativa o sul servizio scrivi a{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </article>

      <div className="mt-8">
        <Button asChild>
          <Link to="/">Torna alla pagina iniziale</Link>
        </Button>
      </div>
    </div>
  );
}
