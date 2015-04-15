[![Build Status](https://travis-ci.org/cyrusinnovation/CodeTestBotApp.svg?branch=master)](https://travis-ci.org/cyrusinnovation/CodeTestBotApp)
[![Code Climate](https://codeclimate.com/github/cyrusinnovation/CodeTestBotApp.png)](https://codeclimate.com/github/cyrusinnovation/CodeTestBotApp)
[![Stories in Ready](https://badge.waffle.io/cyrusinnovation/codetestbotapp.png?label=ready&title=Ready)](http://waffle.io/cyrusinnovation/codetestbotapp)

# Code-test-bot-app

This README outlines the details of collaborating on this Ember application.
CodeTestBot helps Cyrus employees easily accept, track, review and process inbound code tests from developer applicants.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

Development requires that the CodeTestBotServer application be running, otherwise errors will be generated. Start by following the setup instructions in the [server README file](https://github.com/cyrusinnovation/CodeTestBotServer/blob/master/README.md) and run that application before running this one.

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

We're using the [Heroku Buildpack for Ember CLI Applications](https://github.com/tonycoco/heroku-buildpack-ember-cli) so simply use `git push heroku master`.

This buildpack caches npm & bower packages. So if you want to purge the cache and rebuild you can do the following commands:

* `heroku plugins:install https://github.com/heroku/heroku-repo.git` (already done - only needs to be done once)
* `heroku repo:purge_cache -a codetestbot`
* `heroku repo:rebuild -a codetestbot`

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

