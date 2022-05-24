const separteAndCount =  (text) => {
    let qwertyUp = 0;
    let qwertyCenter = 0;
    let qwertyDown = 0;
    let dvorakUp = 0;
    let dvorakCenter = 0;
    let dvorakDown = 0;
    let others = 0;
    let totalLetters = 0;
    
    const totalWord = text.length;
    for(let i=0; i<totalWord; i++){
        let obtainWord = text.charAt(i)
        let x = obtainWord.toLowerCase();

        //Qwerty
        if(x=='q' || x=='w' || x=='e' || x=='r' || x=='t' || x=='y' || x=='u' || x=='i' || x=='o' || x=='p'){
            qwertyUp = qwertyUp + 1;   
            totalLetters = totalLetters+ 1;
        }        
        if(x=='a' || x=='s' || x=='d' || x=='f' || x=='g' || x=='h' || x=='j' || x=='k' || x=='l' || x=='ñ'){
            qwertyCenter = qwertyCenter + 1;   
            totalLetters = totalLetters+ 1;
        }        
        if(x=='z' || x=='x' || x=='c' || x=='v' || x=='b' || x=='n' || x=='m'){
            qwertyDown = qwertyDown + 1;   
            totalLetters = totalLetters+ 1;
        }        

        //Dvorak
        if(x=='p' || x=='y' || x=='f' || x=='g' || x=='c' || x=='r' || x=='l'){
            dvorakUp = dvorakUp + 1;   
        }        
        if(x=='a' || x=='o' || x=='e' || x=='u' || x=='i' || x=='d' || x=='h' || x=='t' || x=='n' || x=='s' || x=='ñ'){
            dvorakCenter = dvorakCenter + 1;   
        }        
        if(x=='q' || x=='j' || x=='k' || x=='x' || x=='b' || x=='m' || x=='w' || x=='v' || x=='z'){
            dvorakDown = dvorakDown + 1;   
        }        

        if(x==' ' || x=='.' || x==','){others = others + 1}

    }

    const response = {
        qU: qwertyUp,
        qC: qwertyCenter,
        qD: qwertyDown,
        dU: dvorakUp,
        dC: dvorakCenter,
        dD: dvorakDown,
        oT: others,
        tL: totalLetters
    };
 return response;

};

//let texto = separteAndCount('Karla Cifuente Castillo')
//console.log(texto);


