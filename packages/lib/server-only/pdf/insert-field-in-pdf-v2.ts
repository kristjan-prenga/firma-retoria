// sort-imports-ignore
import '../konva/skia-backend';

import { FieldType } from '@prisma/client';
import type { FieldWithSignature } from '@documenso/prisma/types/field-with-signature';
import type { Canvas } from '@documenso/skia-canvas';
import Konva from 'konva';

import { renderField } from '../../universal/field-renderer/render-field';
import { ensureFontLibrary } from './helpers';

type InsertFieldInPDFV2Options = {
  pageWidth: number;
  pageHeight: number;
  fields: FieldWithSignature[];
};

export const insertFieldInPDFV2 = async ({ pageWidth, pageHeight, fields }: InsertFieldInPDFV2Options) => {
  ensureFontLibrary();

  let stage: Konva.Stage | null = new Konva.Stage({ width: pageWidth, height: pageHeight });
  let layer: Konva.Layer | null = new Konva.Layer();

  // Render the fields onto the layer.
  for (const field of fields) {
    renderField({
      scale: 1,
      field: {
        renderId: field.id.toString(),
        ...field,
        width: Number(field.width),
        height: Number(field.height),
        positionX: Number(field.positionX),
        positionY: Number(field.positionY),
      },
      translations: null,
      pageLayer: layer,
      pageWidth,
      pageHeight,
      mode: 'export',
    });

    // Retoria: sotto ogni firma l'ID della firma (lo stesso del certificato di firma) e la data, ora di Roma.
    // shortcut: fuso orario fisso Europe/Rome, passare documentMeta.timezone se arrivano utenti fuori Italia.
    if (field.type === FieldType.SIGNATURE && field.signature) {
      const quando = new Intl.DateTimeFormat('it-IT', {
        timeZone: 'Europe/Rome',
        dateStyle: 'short',
        timeStyle: 'short',
      }).format(field.signature.created);

      layer.add(
        new Konva.Text({
          x: pageWidth * (Number(field.positionX) / 100),
          y: pageHeight * ((Number(field.positionY) + Number(field.height)) / 100) + 1,
          text: `ID firma ${field.secondaryId.toUpperCase()}\nFirmato il ${quando}`,
          fontFamily: 'Inter',
          fontSize: 5.5,
          lineHeight: 1.2,
          fill: '#62635a',
          wrap: 'none',
        }),
      );
    }
  }

  stage.add(layer);

  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const canvas = layer.canvas._canvas as unknown as Canvas;

  // Embed the SVG into the PDF
  const pdf = await canvas.toBuffer('pdf');

  stage.destroy();
  layer.destroy();

  stage = null;
  layer = null;

  return pdf;
};
