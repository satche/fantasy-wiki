---
title: Joueurs
niveau: "1"
---

# Joueurs

```base
filters:
  and:
    - file.path.startsWith("joueurs")
    - file.ext == "md"
    - '!file.folder.contains("private")'
    - file.basename != "joueurs"
    - file.basename != "_template"
properties:
  note.title:
    displayName: Nom
  note.joueur:
    displayName: Joueur
  note.character-sheet:
    displayName: Feuille de personnage
views:
  - type: cards
    name: Personnages
    order: []
    image: note.image
    imageAspectRatio: 0.65
    cardSize: 130

```
