function greet(language) {
	const languages = [ 
    {
 
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso',
  english: 'Welcome'

  }
]
  return languages[0][language] === undefined ? 'Welcome' : languages[0][language];

}

//or
function greet(language) {
    var GreetingsDB = {
      english: 'Welcome',
      czech: 'Vitejte',
      danish: 'Velkomst',
      dutch: 'Welkom',
      estonian: 'Tere tulemast',
      finnish: 'Tervetuloa',
      flemish: 'Welgekomen',
      french: 'Bienvenue',
      german: 'Willkommen',
      irish: 'Failte',
      italian: 'Benvenuto',
      latvian: 'Gaidits',
      lithuanian: 'Laukiamas',
      polish: 'Witamy',
      spanish: 'Bienvenido',
      swedish: 'Valkommen',
      welsh: 'Croeso'
    }, 
    defaultLanguage = 'english';
    return GreetingsDB[language] || GreetingsDB[defaultLanguage];
  }