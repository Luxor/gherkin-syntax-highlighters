I18n Gherkin syntax highlighting for several highlighting engines:

* [Source Highlight](http://www.gnu.org/s/src-highlite/source-highlight.html)
* [SHJS](http://shjs.sourceforge.net/)
* [Highlight.js](http://softwaremaniacs.org/soft/highlight/en/)
* [Pygments](http://pygments.org/) - (See [issue 4](https://github.com/cucumber/gherkin-syntax-highlighters/issues/4))

See `index.html` in each subdirectory for sample usage.

## Hacking

First, install dependencies:

    git submodule update --init
    gem install gherkin

Each syntax highlighter has a template named `template.erb` that you can edit. You can then regenerate a highlighter with e.g.

    rake highlight.js/gherkin_en.js

To regenerate all of the highlighters, run:

    rake

The `shjs` modes don't have a `template.erb` as they are generated from the `src-highlight` modes.

If you have fixed something, commit it to your fork of the repo and send a pull request.

