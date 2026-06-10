# Quandamooka Film Festival

A static GitHub Pages-ready website and Markdown builder toolkit for a draft Quandamooka Film Festival doorway.

The site helps first-time filmmakers, smartphone filmmakers, documentary makers, young creators, AI-assisted creators, local storytellers, and community organisers prepare useful `.md` files for human-led story planning.

## Local preview

From this repo folder:

```powershell
python -m http.server 4177 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4177/
```

## Page map

- `index.html` - public gateway with phone-frame YouTube embed.
- `start.html` - first-time filmmaker pathway.
- `builders/index.html` - Markdown builder directory.
- `builders/*.html` - ten autosaving Markdown builder forms.
- `ai-storyboarding.html` - plain-language AI storyboard prompt patterns.
- `ai-film-assistant.html` - optional human-led AI film assistant workflow.
- `recognition.html` - small consultation-needed recognition ideas.
- `submission-readiness.html` - friendly readiness checklist.
- `screenings.html` - draft screening and workshop ideas.
- `boundaries.html` - cultural, privacy, copyright, AI, youth, consent, and public/private boundaries.
- `sources.html` - source trail and sibling repo notes.

## Builder workflow

Each builder:

1. Autosaves in the browser using `localStorage`.
2. Generates Markdown in the preview area.
3. Provides copy and download buttons.
4. Includes title, creator, date, project stage, public/private boundary, cultural review need, permissions, source links, and next action.
5. Produces sensible filenames such as `story-seed-2026-06-10-my-film.md`.

## Source posture

The source documents were old brainstorm material. They were used as background only.

This repo does not claim approval, partnership, endorsement, judging, hosting, or support from QYAC, MMEICAC, Elders, Council, schools, sponsors, businesses, or community groups.

## Boundaries

Any real festival, screening, workshop, award, submission process, public partner, cultural material, youth process, legal wording, insurance setting, site access, or copyright process still needs human, community, cultural, legal, and operational review.

## Assets

The WebP images under `assets/img/` are generated concept images. They are not real event photos or approval evidence.
