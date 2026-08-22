---
title: Places
---

```base
summaries: {}
filters:
  and:
    - file.inFolder("places")
    - file.ext == "md"
    - file.basename != "places"
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
