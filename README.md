# Fantasy Wiki

A simple and minimalist wiki to display worldbuilding notes.

## Getting started

Make sure to have NodeJS installed.

```shell
cp content.sample content
npm install
npm run dev
```

> [!NOTE]
> If npm installation fail, try with `--legacy-peer-deps` flag

You should also setup navbar plugin. For now, you have to do it manually:

```shell
cd plugins/navbar/
npm install
npm run build
```
