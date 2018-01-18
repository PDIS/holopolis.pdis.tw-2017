# holopolis.pdis.tw

Static HTML website for [holopolis.pdis.tw](http://holopolis.pdis.tw), hosted
on GitHub Pages.

## :computer: Local Development

### Technologies Used

* [**GitHub Pages.**][gh-pages] An HTML website-hosting service provided by GitHub.
* [**Heroku.**][heroku] A platform for easily deploying applications.
* [**Review Apps.**][review-apps] A Heroku feature that deploys code
  from GitHub pull requests as a disposable app on the web.
* [**VueJS.**][vuejs] A progressive framework for building user
  interfaces in JS.
* [**Discourse.**][discourse] A modern Internet discussion platform.

### Requirements

* Node.JS (optional)
* Python 3 (optional)

### Build Setup

Run the following commands within `docs/`:

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### Serving the website

If you have Python installed, you can quickly serve by running the
following from within `docs/`:

```
python3 -m http.server 3000
```

You will now be able to view it at: http://localhost:3000

## :muscle: Contributing

Please make sure to read our [Contributing Guide](CONTRIBUTING.md) and
[Code of Conduct](CONDUCT.md) before making a pull request.

### Get Involved

If you'd like to join in on the conversation, great!

We have a [specific section of our website][joinus] with details!

## :copyright: License

[MIT](https://opensource.org/licenses/MIT)

<!-- Links -->
   [gh-pages]: https://help.github.com/articles/what-is-github-pages/
   [heroku]: https://www.heroku.com/what
   [review-apps]: https://devcenter.heroku.com/articles/github-integration-review-apps
   [vuejs]: https://vuejs.org/v2/guide/
   [discourse]: https://www.discourse.org/about
   [joinus]: http://holopolis.pdis.tw/joinus.html
