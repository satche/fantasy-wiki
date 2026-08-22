---
title: Sessions
---

```base
summaries: {}
filters:
  and:
    - file.inFolder("sessions")
    - file.ext == "md"
    - file.basename != "sessions"
properties:
  file.name:
    displayName: "#"
views:
  - type: table
    name: List
    order:
      - file.name
      - title
      - date
      - description
    sort:
      - property: file.name
        direction: DESC
    summaries: {}
    columnSize:
      file.name: 10
      file.date: 15
      note.title: 80
      note.description: 100
  - type: cards
    name: Cards
    order:
      - title
      - file.name
      - description
      - date
    sort:
      - property: file.name
        direction: DESC
    cardSize: 260
    imageAspectRatio: 1.1
```
