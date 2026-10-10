---
title: Lore
---

# Lore

```base
summaries: {}
filters:
  and:
    - file.folder.startsWith("lore")
    - file.folder == "lore" || file.folder.contains(file.name)
    - file.folder != file.name
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
    order: []
    sort:
      - property: title
        direction: ASC
    cardSize: 280
    imageAspectRatio: 1.75
    image: note.image

```


Les détails concernant l'univers d'Asema, précisés dans ces pages, ne sont pas nécessairement véridiques. Ils représentent plutôt des connaissances communes transmises entre les peuples au fil des siècles. Une partie de ces récits relève parfois des mythes et des légendes.

Précisons également que votre personnage ne maîtrise pas l'intégralité du savoir disponible. Certains détails provenant de certaines contrées lui demeureront inaccessibles, car trop spécialisées.

Enfin, le monde est vaste et changeant. Ce qui est établi dans le lore est donc toujours sujet aux exceptions.

