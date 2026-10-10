---
title: Lieux
---

# Lieux

```base
summaries: {}
filters:
  and:
    - file.inFolder("lieux")
    - file.ext == "md"
    - file.basename != "lieux"
    - draft != "true"
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
    name: Récent
    filters:
      and:
        - file.tags.contains("récent")
    order:
      - title
      - description
    sort:
      - property: title
        direction: ASC
    cardSize: 280
    imageAspectRatio: 1.75
    image: note.image
  - type: cards
    name: Joueurs
    filters:
      and:
        - file.tags.contains("joueur")
    order:
      - title
      - description
    sort:
      - property: title
        direction: ASC
    cardSize: 280
    imageAspectRatio: 1.75
    image: note.image
  - type: table
    name: Vue d'ensemble
    filters:
      and:
        - "!file.tags.isEmpty()"
    order:
      - file.name
      - tags
    sort:
      - property: file.name
        direction: ASC
    summaries:
      description: Unique
    markers: none
    indentProperties: true
    columnSize:
      note.localisation: 251

```
