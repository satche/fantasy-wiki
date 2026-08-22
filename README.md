# Fantasy Wiki

A simple and minimalist wiki to display worldbuilding Markdown notes using [Quartz](https://quartz.jzhao.xyz/).

## Features

- A clean wiki generated from your Markdown notes
- Search bar, to look in all website's notes
- Dark mode
- Link preview
- Graph view

For a full set of features, check [Quartz' documentation](https://quartz.jzhao.xyz/)

## Install

Make sure to have NodeJS installed.

```shell
npm install
npm run dev
```

> [!NOTE]
> If npm installation fail, try with `--legacy-peer-deps` flag

## Usage

You have an initial template example in [`content`](content/) folder. You can use it and adapt it to your need. Check the [`quartz.config.yaml`](quartz.config.yaml) file to change things related to the wiki itself.

> [!WARNING]
> By using `%% comment %%`, you remove the comment from the wiki: it won't be displayed at all, even as a HTML comment. Keep in mind people can still see it if you share the source code, in original Markdown file.

## License

This project is under [MIT License](./LICENSE). You can use, copy and modify it in private or commercial context, as long as you mention the original work.
