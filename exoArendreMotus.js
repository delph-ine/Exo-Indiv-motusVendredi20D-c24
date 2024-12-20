function tryWord(word, base) {
	// TODO: fix jeu sensible à la casse.
  //comparer les mots minuscules pour ignorer la case
  word = word.toLowerCase();
  base = base.toLowerCase();

	if (word === base) {
		return {win:true};
  } else {

    //créer un tableau
    //lettre bien placées
  	let wellPlaced = [];
    //lettre mal placées
    let notInWord = [];
    //lettres non présentes dans le mot
    let missplaced = [];
    
    //divise le tableau de base  
  	let arrayBase = base.split('');
    //divise les mots du tableau 
        let arrayWord = word.split('');
    
		for (let i = 0; i < arrayBase.length; i++) {
    	if (arrayBase[i] === arrayWord[i]) {
        //si lettre bien placé
      	wellPlaced.push(arrayWord[i]);
      }	else if(arrayBase.includes(arrayWord[i]))
        //mal placé
        missplaced.push(arrayWord[i]);
      }
    }
    
    for (const char of arrayWord) {
    	if (!arrayBase.includes(char)&&!wellPlaced.includes (char)) {
      	notInWord.push(char);
      }
    }
            //bien placé
    return { wellPlaced, missplaced, notInWord,win:false};
  }

         //deviner
function guess() {
	let base = 'dictionnaire'
	let word = document.getElementById("word").value
               //essayer mots
	let result = tryWord(word, base)
                          //mot
  document.getElementById("word").value = ''
                        //essayer
  document.getElementById("try").innerText = word  
                          //bien                                              //rejoindre
  document.getElementById("well").innerText = 'Bien placé: '+result.wellPlaced.join(', ')
                          //manquer
  document.getElementById("miss").innerText = 'Mal placé: '+result.missplaced.join(', ')
                         //pas
  document.getElementById("not").innerText = 'Pas dans le mot: '+result.notInWord.join(', ')
  if (result.wellPlaced.length === base.length)
  }
  {
	  document.getElementById("win").innerText = 'Vous avez gagné'
  }
 // Vérifier si le joueur a gagné  
 if (result.wellPlaced.length === base.length) {
  document.getElementById("win").innerText = 'Vous avez gagné !';
} else {
  document.getElementById("win").innerText = ''; // Réinitialiser le message de victoire si non gagné  
}
