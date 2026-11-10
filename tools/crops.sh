#!/bin/sh
# Crop the course figures listed in tools/crops.txt from the 13 handouts (src-pdf/, not published) into img/*.jpg at 2x.
# Coordinates x0 y0 x1 y1 are normalized (0.00 to 1.00, origin top-left), matching tools/pdfrender sheet grids.
set -e
cd "$(dirname "$0")/.."
[ tools/pdfrender -nt tools/pdfrender.swift ] || swiftc -O -o tools/pdfrender tools/pdfrender.swift
grep -v '^#' tools/crops.txt | while read -r name pdf page x0 y0 x1 y1 rest; do
  [ -n "$name" ] || continue
  [ -n "$ONLY" ] && ! echo "$name" | grep -q "$ONLY" && continue
  masks=""
  for m in $rest; do masks="$masks --mask=${m#m=}"; done
  tools/pdfrender crop "src-pdf/$pdf.pdf" "$page" 1440 "$x0" "$y0" "$x1" "$y1" "img/$name.jpg" $masks >/dev/null
done
ls img/*.jpg | wc -l
tools/dims.sh
