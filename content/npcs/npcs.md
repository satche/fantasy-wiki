---
title: NPCs
---

```base
summaries: {}
filters:
  and:
    - file.inFolder("npcs")
    - file.ext == "md"
    - file.basename != "npcs"
views:
  - type: cards
    name: Cards
    order:
      - tags
    sort:
      - property: file.name
        direction: DESC
    cardSize: 260
    imageAspectRatio: 1.1
```
