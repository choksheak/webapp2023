# Webapp 2023

Contains the node package folder setup for the state-of-the-art webapp development for 2023. Selects the best technologies available today for the best possible web development experience.

## React + TypeScript + Vite

The original template ([link](https://github.com/code-meta/vite-app/blob/main/README.md)) provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This template is much more developed and immediately usable for production.

## Basic features

1. Basic scripts in package.json needed in almost all projects, i.e. `lint`, `fix`, `typecheck`, `test`, `coverage`, and `deps` (check dependencies)
2. Unit test for .ts and .tsx files (jsdom integration)
3. Adding custom environment variables with `VITE_` name prefix
4. Define process.env.NODE_ENV for node compatibility
5. Strictest possible eslint linter config
6. Code formatting using prettier
7. Basic VS Code settings, e.g. auto-format on save
8. Sample on using CSS modules

## Package manager

We recommend using `yarn` to work with this project, but feel free to use any other package manager as you see fit, as the differences are probably minor at best.
