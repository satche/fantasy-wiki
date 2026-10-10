---
title: Histoire
---

# Histoire

L’histoire d’Asema se divise en cinq grands âge, chacun marqué par des événements majeurs. Peu de récits ont survécu jusqu’à aujourd’hui, et les datations restent incertaines. On estime néanmoins que chaque période s’étend, au minimum, sur plusieurs siècles.

```base
summaries: {}
filters:
  and:
    - file.folder == "lore/histoire"
    - "!file.folder.contains(file.name)"
properties:
  note.region:
    displayName: Localisation
  file.name:
    displayName: Nom
  note.type:
    displayName: Type
  note.title:
    displayName: Titre
  note.localisation:
    displayName: Localisation
  note.tags:
    displayName: Tags
  note.description:
    displayName: Description
views:
  - type: cards
    name: Timeline
    order:
      - description
    sort:
      - property: title
        direction: ASC
    cardSize: 200
    imageAspectRatio: 1
    markers: none

```
