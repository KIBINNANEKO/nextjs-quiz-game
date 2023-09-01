# Valorant Characters Documentation

## Demonstration:

FOR EASIER VIEWING AND BETTER PERCEPTION, OPEN THE GIF IN FULL SCREEN.
![Gif](https://github.com/KIBINNANEKO/nextjs-valorant-docs/blob/main/demonstration.gif)

## How it should work?

0. The project is built using SSG (Static Site Generation), which allows generating all the necessary pages once and serving them to the user on request. This is an advantage over SSR, as it saves a significant amount of traffic, since with SSR, the page would be regenerated for each user on every request.
1. The user visits the homepage and sees the names of all agents from the game.
2. By selecting any of them, they receive a pre-rendered page from the server that quickly displays.
3. The user has the ability to switch the website's color theme and language.

## Technology stack:

- HTML, SCSS-modules;
- JavaScript;
- React;
- Next.js;
- MobX (state manager);
- Figma (design).

## How to start?

1. Type command **yarn install** in a console;
2. Type command **yarn dev/build** in a console;
3. Open [localserver](http://localhost:3000) with your browser;

