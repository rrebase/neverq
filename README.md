# NeverQ: Queue management app

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/LekoArts/gatsby-starter-minimal-blog) [![Edit gatsby-starter-minimal-blog](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/LekoArts/gatsby-starter-minimal-blog/tree/master/)

[![CircleCI](https://circleci.com/gh/LekoArts/gatsby-starter-minimal-blog.svg?style=svg)](https://circleci.com/gh/LekoArts/gatsby-starter-minimal-blog) [![Netlify Status](https://api.netlify.com/api/v1/badges/f466015c-14f4-440d-a92b-0b0e30de609a/deploy-status)](https://app.netlify.com/sites/minimal-blog/deploys)

## Features

- Articles in MDX ([gatsby-mdx](https://github.com/ChristopherBiscardi/gatsby-mdx))
- Code highlighting (with [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer)) and live preview (with [react-live](https://github.com/FormidableLabs/react-live))
- Styled Components 💅
- Netlify Contact Form
- Categories
- Offline Support
- WebApp Manifest Support
- SEO
  - Sitemap
  - Schema.org JSONLD
  - OpenGraph Tags
  - Twitter Tags

## Getting Started

Check your development environment! You'll need [Node.js](https://nodejs.org/en/), the [Gatsby CLI](https://www.gatsbyjs.org/docs/) and [node-gyp](https://github.com/nodejs/node-gyp#installation) installed. The official Gatsby website also lists two articles regarding this topic:

- [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)
- [Check your development environment](https://www.gatsbyjs.org/tutorial/part-zero/)

To copy and install this starter run this command (with "project-name" being the name of your folder you wish to install it in):

```
gatsby new project-name https://github.com/LekoArts/gatsby-starter-minimal-blog
cd project-name
npm run develop
```

### Adding new features/plugins

You can add other features by having a look at the official [plugins page](https://www.gatsbyjs.org/docs/plugins/)

### Building your site

```
npm run build
```

Copy the content of the `public` folder to your webhost or use a website like Netlify which automates that for you.

**Attention:** You also need to edit `static/robots.txt` to include your domain!
