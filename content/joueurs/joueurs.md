---
title: Joueurs
niveau: "2"
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

## Vue d'ensemble

| Skill          | Alzum | Corvenna | Miyara | Nataniel | Shin |
| -------------- | ----- | -------- | ------ | -------- | ---- |
| **AC**         | 14    | 18       | 15     | 18       | 19   |
| **Fortitude**  | +9    | +7       | +4     | +5       | +5   |
| **Reflex**     | +6    | +6       | +5     | +9       | +10  |
| **Will**       | +4    | +6       | +5     | +6       | +8   |
| **Perception** | +4    | +6       | +3     | +6       | +8   |
| **Stealth**    | +1    | +6       | +5     | +7       | +8   |
| **Deception**  | +0    | +4       | +2     | +5       | +0   |
