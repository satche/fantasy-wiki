---
title: "Divinités "
aliases: [Déesses, Dieux]
---

# Divinités 

```base
summaries: {}
filters:
  and:
    - file.folder == "lore/religion/divinites"
    - "!file.folder.contains(file.name)"
    - draft != "true"
    - file.ext == "md"
properties:
  note.region:
    displayName: Localisation
  file.name:
    displayName: Nom
  note.type:
    displayName: Type
  note.title:
    displayName: Nom
  note.localisation:
    displayName: Localisation
  note.tags:
    displayName: Tags
  note.description:
    displayName: Description
  note.domaine:
    displayName: Domaines
  note.symbole:
    displayName: Symbole
views:
  - type: table
    name: Divinités
    order:
      - title
      - domaine
      - fondations
      - description
      - symbole
    sort:
      - property: title
        direction: ASC
    cardSize: 200
    imageAspectRatio: 1
    markers: none

```