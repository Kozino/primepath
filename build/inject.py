#!/usr/bin/env python3
"""Inject compiled Tailwind CSS into every page that carries the __TAILWIND__ placeholder."""
import pathlib

root = pathlib.Path(__file__).resolve().parent.parent
css = (root / "css" / "tailwind.css").read_text()

for f in sorted(root.glob("*.html")):
    t = f.read_text()
    if "__TAILWIND__" in t:
        f.write_text(t.replace("__TAILWIND__", css, 1))
        print("injected ->", f.name)
    else:
        print("skipped  ->", f.name, "(no placeholder)")
