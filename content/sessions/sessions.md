---
title: Sessions
---

# Sessions

```base
filters:
  and:
    - file.path.startsWith("sessions")
    - file.path != "sessions/sessions.md"
    - file.path != "sessions/_template.md"
properties:
  note.title:
    displayName: Titre
  file.basename:
    displayName: "#"
  file.name:
    displayName: "#"
  note.description:
    displayName: Description
  note.localisation:
    displayName: Localisation
  note.date:
    displayName: Date
  note.date-asema:
    displayName: Date in-game
views:
  - type: cards
    name: Résumé
    order:
      - file.basename
      - description
    sort:
      - property: file.basename
        direction: DESC
    cardSize: 200
    imageAspectRatio: 1
  - type: table
    name: Timeline
    order:
      - file.name
      - title
      - date-asema
      - date
    sort:
      - property: file.name
        direction: DESC
    markers: number
    columnSize:
      file.name: 24
      note.title: 359
      note.date-asema: 130
      note.date: 113

```
