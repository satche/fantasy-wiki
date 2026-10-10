---
title: Plans
---

# Plans

Peu d'informations existent concernant les plans multidimensionnels. Les premières preuves concrètes de leur existence remontent au début de l'[Âge des Arcanes](../histoire/05.age-des-arcanes.md); bien que quelques écrits aient été retrouvés avant cette ère.

Maintenant que l'existence d'autres plans a été démontrée, plusieurs questions animent ceux qu'on nomme les *dimensiologues*. Qui est à l'origine des plans d'existence? Combien existent, et pourquoi? Comment les découvrir et y accéder?

```base
summaries: {}
filters:
  and:
    - file.folder == "lore/plans"
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
    displayName: Titre
  note.localisation:
    displayName: Localisation
  note.tags:
    displayName: Tags
  note.description:
    displayName: Description
views:
  - type: cards
    name: Pages
    order:
      - description
    sort:
      - property: title
        direction: ASC
    cardSize: 200
    imageAspectRatio: 1
    markers: none

```

