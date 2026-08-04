# Quartz Navbar plugin

Navbar plugin for [Quartz](https://quartz.jzhao.xyz/).

This repo is based and adapted from the quartz-community [plugin template](https://github.com/quartz-community/plugin-template).

## Getting started

```shell
git clone https://github.com/satche/quartz-navbar
npm install
npm run dev
```

## Add to Quartz

```shell
npx quartz plugin add @quartz-community/navbar
```

```yaml
// quartz.config.yaml

plugins:
  - source: @quartz-community/navbar
    enabled: true
    options:
      links:
        - label: Home
          href: /
        - label: About
          href: /about
    layout:
      position: navbar
      priority: 10
```

## License

This project is under [MIT License](./LICENSE)
