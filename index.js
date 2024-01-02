let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon', 'pruebacom'];
let extensions = ['com', 'net', 'es', 'cl', 'dev', 'app'];

for (pronombre in pronoun) {
    for (adjetivo in adj) {
        for (sustantivo in noun) {
            for (extension in extensions) {
                let extensionLength = extensions[extension].length;
                let nounnAux = noun[sustantivo];
                if (noun[sustantivo].slice(extensionLength * -1) === extensions[extension]) {
                    let newNounn = nounnAux.slice(0, nounnAux.length - extensionLength);
                    console.log(`${pronoun[pronombre]}${adj[adjetivo]}${newNounn}.${extensions[extension]}`);
                }
                else {
                    console.log(`${pronoun[pronombre]}${adj[adjetivo]}${noun[sustantivo]}.${extensions[extension]}`);
                }
            }
        }
    }
}

/*
    Cambiar nombres de variables Listo
    Chekar fors anidados
    Ponert ; a todo o a nada Listo
*/