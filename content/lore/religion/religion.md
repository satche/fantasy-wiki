---
title: Religion
---

# Religion

Au fil des âges et des époques, les croyances et la perception du surnaturel ont constamment évolué. Aujourd’hui, la quête de compréhension du divin et du spirituel n'a jamais été aussi importante au sein des sociétés; et les peuples cherchent désormais à renforcer leurs liens avec l’au-delà.

```base
summaries: {}
filters:
  and:
    - file.folder == "lore/religion"
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

## Croyances

Au début de l'[Âge des Ruines](../histoire/04.age-des-ruines.md), on constate une recrudescence de la magie, qui s'est avérée essentielle en temps de crise. Comme les arcanes ont toujours été étroitement liées au domaine du divin, sa démocratisation a bousculé les anciennes convictions et entraîné d'importantes remises en questions.

Durant cette période à l'avenir incertain, le peuple s'est remis à méditer et prier, dans l'espoir de recevoir enfin des réponses de l'au-delà. Et pour la première fois, les litanies ont été entendues. Dans plusieurs régions éloignées, on rapporte des individus qui on reçu des messages divins similaires.

Les noms des Dieux et des Déesses resurgissent du passé, murmurés dans les songes des clercs, et coïncident avec les anciens textes. Partout dans le monde, les sociétés reconstruisent les églises et les monastères pour mieux recevoir leurs messages.

## Cultes

Vénérer un voir plusieurs dieux est très personnel. Il n'est pas rare de voir des membres d'une communauté fidèles à des divinités différentes sans que cela ne crée de conflits. Les cultes réunissent généralement des dieux qui respectent les même [Fondations](./sept-fondations.md), car elles partagent des idées, valeurs et quêtes similaires.

Certains groupes organisent des rituels qui visent à faire avancer ensemble plusieurs dieux dans une direction commune. Il se peut d'ailleurs que deux cultures différentes prient les même divinités mais de manière différente: une société prônera les prières isolées et individuelles, alors que l'autre en organisera au sein de sa communauté.





