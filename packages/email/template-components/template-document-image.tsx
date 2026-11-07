import { Column, Img, Row, Section } from '../components';
import { getEmailAssetUrl } from '../utils/asset-url';

export interface TemplateDocumentImageProps {
  assetBaseUrl: string;
  className?: string;
}

// Retoria: niente illustrazione grande nelle email, è il segnale più «da newsletter» per la scheda Promozioni di Gmail.
export const TemplateDocumentImage = (_props: TemplateDocumentImageProps) => null;

const TemplateDocumentImageDocumenso = ({ assetBaseUrl, className }: TemplateDocumentImageProps) => {
  return (
    <Section className={className}>
      <Row className="table-fixed">
        <Column />

        <Column>
          <Img className="mx-auto h-42" src={getEmailAssetUrl(assetBaseUrl, 'static/document.png')} alt="Firma Retoria" />
        </Column>

        <Column />
      </Row>
    </Section>
  );
};

export default TemplateDocumentImage;
