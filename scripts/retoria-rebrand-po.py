"""Retoria: sostituisce «Documenso» con «Firma Retoria» nelle traduzioni (solo msgstr).

Restano invariati i testi sulla licenza e sul copyright di Documenso, Inc.
Uso: python3 scripts/retoria-rebrand-po.py packages/lib/translations/*/web.po
"""
import re
import sys

KEEP = ("icense", "icenza", "Inc.")


def rebrand(text: str) -> tuple[str, int]:
    out, changed, msgid, in_str = [], 0, "", False
    for line in text.splitlines(keepends=True):
        if line.startswith("msgid "):
            msgid, in_str = line, False
        elif line.startswith("msgstr "):
            in_str = True
        elif line.startswith('"') and not in_str:
            msgid += line
        elif not line.startswith('"'):
            in_str = False
        if in_str and "Documenso" in line and not any(k in msgid for k in KEEP):
            line = line.replace("Documenso", "Firma Retoria")
            changed += 1
        out.append(line)
    return "".join(out), changed


if __name__ == "__main__":
    # autoverifica minima
    t, n = rebrand('msgid "Hi Documenso"\nmsgstr "Ciao Documenso"\n\nmsgid "Documenso License"\nmsgstr "Licenza Documenso"\n')
    assert n == 1 and "Ciao Firma Retoria" in t and "Licenza Documenso" in t and 'msgid "Hi Documenso"' in t, t
    for path in sys.argv[1:]:
        with open(path, encoding="utf-8") as f:
            new, n = rebrand(f.read())
        with open(path, "w", encoding="utf-8") as f:
            f.write(new)
        print(path, n)
