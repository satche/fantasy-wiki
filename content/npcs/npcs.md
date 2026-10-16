---
title: NPCs
---

# NPCs

```base
filters:
  and:
    - file.inFolder("npcs")
    - file.ext == "md"
    - file.basename != "npcs"
properties:
  note.title:
    displayName: Titre
  note.description:
    displayName: Description
views:
  - type: cards
    name: Récents
    filters:
      and:
        - file.tags.contains("récent")
    order:
      - title
      - description
    image: note.image
    imageAspectRatio: 0.8
    cardSize: 200
  - type: list
    name: Tous
    order:
      - file.name
      - description
    markers: none

```

