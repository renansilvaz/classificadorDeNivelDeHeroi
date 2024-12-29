let nameHero = prompt("Olá, viajante! \n\n Qual o seu nome?")
let exp = prompt
            ("Qual seu nível de experiência? (Digite o número da alternativa)\n\n" +
                "1- Até 1000 de xp\n" +
                "2- Entre 1001 e 2000 de xp\n" +
                "3- Entre 2001 e 5000 de xp\n" +
                "4- Entre 5001 e 7000 de xp\n" +
                "5- Entre 7001 e 8000 de xp\n" +
                "6- Entre 8001 e 9000 de xp\n" +
                "7- Entre 9001 e 10000 de xp\n" +
                "8- Maior que 10001"
            )

switch(exp){
    case "1":
        alert("O herói de nome " + nameHero + " Está no rank Ferro! Que noob!")
        break;
    case "2":
        alert("O herói de nome " + nameHero + " Está no rank Bronze! HAHAHAH!")
        break;
    case "3":
        alert("O herói de nome " + nameHero + " Está no rank Prata! Que tal um treinamento?")
        break;
    case "4":
        alert("O herói de nome " + nameHero + " Está no rank Ouro! Você está indo bem!")
        break;
    case "5":
        alert("O herói de nome " + nameHero + " Está no rank Platina! Você já sabe o básico!")
        break;
    case "6":
        alert("O herói de nome " + nameHero + " Está no rank Ascendente! Meus parabéns!")
        break;
    case "7":
        alert("O herói de nome " + nameHero + " Está no rank Imortal! Que cara mirudo!")
        break;
    case "8":
        alert("O herói de nome " + nameHero + " Está no rank Radiante! GOAT apenas!")
        break;    
    default:
        alert("Você não inseriu uma alternativa válida, tente novamente.") 
        break
}