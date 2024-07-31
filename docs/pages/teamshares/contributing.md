---
meta:
  title: Contributing
---

# Contributing

> The Teamshares Design System is owned by all of us and relies on contributions from all the teams. Thank you in advance for your input!

## Process

Because the system is shared across all our apps, we need to make sure that any changes will work for all instances of the components. This involves a few steps:

1. ### Design approval

   Any changes or additions to the UX or visual appearance of a component must be approved by the design system designers.

   **_If you're a designer_**, please seek approval within the design team before creating a ticket for engineering.

   **_If you're an engineer or PM_**, please bring the change to the designer on your team to seek buy-in from the design team.

   Bug fixes don't need approval unless they represent a change of appearance or behavior.

1. ### Component audit

   Before implementing the change, do a sanity check across the apps and make sure the change won't break any existing usage of the component. One easy way to find the usage is to do an org-wide search on GitHub for the component name. For very common components, such as buttons and inputs, this will turn up a lot of results, which is exactly why we need to be careful making changes to them. If you're only changing a specific usage of a component -- say, numeric inputs -- you should be able to filter the search results to find only those usages.

1. ### Implementation

   As much as possible, try to follow Shoelace's [conventions and best practices](/resources/contributing?id=best-practices), including test coverage. This will make it easier to maintain the library over time as we continue to pull in changes from upstream.

1. ### Code review

   Once you've made your changes and they're ready for feedback, make a PR and one of the core library maintainers will review the code to make sure it adheres to the [best practices](/resources/contributing?id=best-practices).

   !> **Caution:** Don't accidentally open a PR against the upstream repository (Shoelace itself). Many Git tools, such as Github Desktop, will default to this behavior. Doing so will expose our codebase to anyone looking at the main Shoelace repository. While `@teamshares/shoelace` is technically public, it's best to keep things in-house.

## Installation

If you have a new project and you want to start playing with our fork of Shoelace, you can add it to any page very easily via [linking from the CDN](/getting-started/installation?id=cdn-installation-easiest). If you're planning to contribute, you'll need to install and run it locally. Shoelace is straightforward to install and run on your local machine. Follow the "Local installation" instructions under [Installation](/getting-started/installation?id=local-installation).

Once you have Shoelace installed, running it locally is as simple as

```bash
npm start
```

## Making changes

Documentation is built directly into Shoelace, so you only need to update the markdown pages under `docs` if you're adding or changing functionality. The site should refresh automatically as you make changes.

Unless you're one of the core DS engineers, most of what you'll be doing in Shoelace will probably involve styling. Styles in Shoelace components are found in `src/components/[component].styles.ts`. Make sure that any styling changes you want to make have been approved by the design system designers and will work across all our apps.

Once you're happy with your changes, you can push your changes up to a branch and make a PR for review. (If you don't know what this means or how to do it, you probably shouldn't be editing the code directly.)

:::warning
**Do not push your changes directly to the main Shoelace repo’s `next` branch!**
When you open a PR, Github will set the base repository to `shoelace-style/shoelace` by default. Be sure to manually reset the base repository for your PR to `teamshares/shoelace`.
:::

## Connecting to a local Teamshares app

**Note: These instructions should only apply to a small number of core design system engineers.**

To see your how your changes to Shoelace show up in one of our apps, you'll need to link the running instance of Shoelace to both `design-system` and the app itself, then run the production build within Shoelace after each change.

#### Within the Shoelace directory in your console:

```bash
yarn link
npm run build
```

#### Within `design-system`:

```bash
yarn link
yarn link @teamshares/shoelace
yarn install --force
```

#### Within your Teamshares app:

```bash
yarn link @teamshares/design-system
yarn install --force
```

You can string all the above commands together into a single abomination like so:

```bash
(cd ../shoelace && npm run build) && (cd ../design-system && yarn link && yarn link @teamshares/shoelace && yarn install --force) && yarn link @teamshares/design-system && yarn install --force
```

Once all that is set up, you'll start your app like normal via `yarn dev`. Changes made in Shoelace should automatically be reflected in your app.

### Developer experience improvements

The above setup is far from ideal. We're working on improving that, but in the meantime, you can add the following scripts to your `package.json`:

```
    "build:sl": "cd ../shoelace && npm run build",
    "sl-dev": "yarn build:sl && yarn build:all"
```

This at least gets you the ability to run `sl-dev` and see your latest changes. In the future, we may add an additional script to Shoelace to run the production build and restart the yarn watchers.

## Cutting a new release

Updates to the library follow our standard PR process (make a branch, make a PR, get a review from a code owner, merge).

### 1. Release new Shoelace version

1. Cut a new branch from the `next` branch in the Teamshares repo
1. Make sure everything is working locally, including tests
   1. Run `npm run test`
   1. Run `npm run prettier`
1. Bump the version number in `package.json` using semantic versioning
1. Add an entry to the [changelog](/teamshares/changelog)
1. Run `npm install` and make sure the `package-lock.json` file has also updated with the new version number
1. Open a PR
   1. Make sure PR is on the Teamshares fork, not the Shoelace upstream
   1. Be sure updated `package-lock.json` file is in the PR
1. Make any requested changes to the PR
1. Once PR is approved, merge to `next`
1. Publish a release on NPM
   1. If this is your first time releasing on NPM:
      1. You'll need [an NPM account](https://docs.npmjs.com/creating-a-new-npm-user-account)
      1. You'll need to be added as a [contributor to the NPM org](https://www.npmjs.com/settings/teamshares/members)
   1. After your first time setup:
      1. First `npm login`. You should only need to do this once.
         1. To publish, you'll need an authenticator app such as Google Authenticator or Duo
      1. Next, publish a release via `npm publish --access public`. This will require a OTP via the authenticator app
         1. Before you publish for real, try it with the `--dry-run` flag to see what will be created.

### 2. Update the docs site (design.teamshares.com)

1. On [Vercel](https://vercel.com/teamshares/shoelace), check that the doc site built correctly, then promote the latest preview build to production
   1. You will need a [Vercel account](https://vercel.com/new/teamshares) and may need to be added to the [Teamshares Vercel org](https://vercel.com/teams/teamshares/settings/members)

### 3. Bump `design-system` to pull in the new Shoelace release

1. Cut a new branch from latest `main` on `design-system`
1. Update `package.json` file to pull in new `@teamshares/shoelace` version
1. Add a `CHANGELOG.MD entry`
1. Run `yarn install`
   1. Make sure `yarn.lock` updates
1. Open PR
   1. Be sure to include the new `yarn.lock` file.
1. Once PR is approved, merge to `main`
1. Now pull down `main` to your local
1. Run `git tag -a v1.2.3` or whatever version you just merged to `main`
   1. Enter a release message, e.g. "Releasing v1.2.3"
1. Push the tag up to origin with `git push origin --tags`
