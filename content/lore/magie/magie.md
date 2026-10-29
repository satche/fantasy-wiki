---
title: Magie
aliases: [Arcanes]
---

# Magie

La magie est omniprésente dans le monde d'Asema. On la retrouve dans les phénomènes physiques, naturels, paranormaux et multidimensionnels. C'est une force constante intimement liée aux lois qui régissent l'univers.

Longtemps bannie, elle est aujourd'hui l'objet de recherches approfondies par les érudits. En plus d'être un apport majeur pour la société et son développement, comprendre ses origines et son fonctionnement pourraient également permettre de répondre aux grandes questions fondamentales sur l'existence du monde, des plans et des dieux.

```base
summaries: {}
filters:
  and:
    - draft != "true"
    - or:
        - file.folder == "lore/magie"
        - file.path == "lore/magie/vibrellis/vibrellis.md"
    - file.path != "lore/magie/magie.md"
properties:
  file.name:
    displayName: Nom
  note.type:
    displayName: Type
  note.title:
    displayName: Titre
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

> [!INFO] Commerce et magie
> Pour toute information relative au commerce de la magie, tels que les components ou objets magiques, consultez le chapitre de la page [Économie](../economie.md#Magie)

