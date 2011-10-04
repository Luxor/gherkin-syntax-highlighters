hljs.LANGUAGES.gherkin_it = function() {
  return {
    defaultMode: {
      contains: [
        {
          className: 'keyword',
          begin: '^\\s*(Ma |E |Allora |Quando |Dato |\\* |Esempi|Schema dello scenario|Scenario|Contesto|Funzionalità)',
          relevance: 0
        },
        {
          className: 'string',
          begin: '\\|',
          relevance: 0
        },
        hljs.HASH_COMMENT_MODE,
        {
          className: 'string',
          begin: '"""', end: '"""',
          relevance: 10
        },
        hljs.APOS_STRING_MODE, 
        hljs.QUOTE_STRING_MODE,
        hljs.C_NUMBER_MODE,
        {
          className: 'annotation', begin: '@[^@\r\n\t ]+'
        }
      ]
    }
  };
}();
