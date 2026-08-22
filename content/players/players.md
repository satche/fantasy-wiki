---
title: Players
---

```base
summaries: {}
filters:
  and:
    - file.inFolder("players")
    - file.ext == "md"
    - file.basename != "players"
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
