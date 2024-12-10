const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const options = ['piedra', 'papel', 'tijera'];
let userLife = 3;
let pcLife = 3;

function convert(option){
  return options[option];
}

function ask() {
  return new Promise((resolve) => {
    console.log("");
        rl.question('Las opciones son: piedra, papel, tijera. ¿Cuál quieres elegir?: ', (userOption) => {
          const option = userOption.trim().toLowerCase();
          if(options.includes(option)){
            resolve(option);
          }else{
            console.log("No elegiste la opción correcta.");
            resolve(ask());
          }
        });
    });
}

function round(userOption) {
  const pcOption = Math.floor(Math.random() * options.length);
  const convertedPcOption = convert(pcOption);

    if(userOption === 'piedra'){
        if(convertedPcOption === 'piedra'){
            console.log('¡Empate!¡Ambos usaron piedra!');
        }else if(convertedPcOption === 'papel'){
            console.log('¡La PC gana! Él usó papel y tú usaste piedra. Pierdes 1 vida.');
            userLife--;
        }else if(convertedPcOption === 'tijera'){
            console.log('¡Tú ganas! Usaste piedra y el PC usó tijeras. El PC pierde 1 vida.');
            pcLife--;
        }
    }else if(userOption === 'papel'){
        if(convertedPcOption === 'piedra'){
            console.log('¡Tú ganas! Usaste papel y la PC usó piedra. El PC pierde 1 vida.');
            pcLife--;
        }else if(convertedPcOption === 'papel'){
            console.log('¡Empate!¡Ambos usaron papel!');
        }else if(convertedPcOption === 'tijera'){
            console.log('¡La PC gana! Él usó tijeras y tú usaste papel. Pierdes 1 vida.');
            userLife--;
        }
    }else if(userOption === 'tijera'){
        if(convertedPcOption === 'piedra'){
            console.log('¡La PC gana! Él usó piedra y tú usaste tijeras. Pierdes 1 vida.');
            userLife--;
        }else if(convertedPcOption === 'papel'){
            console.log('¡Tú ganas! Usaste tijeras y la PC usó papel. El PC pierde 1 vida.');
            pcLife--;
        }else if(convertedPcOption === 'tijera'){
            console.log('¡Empate!¡Ambos usaron tijera!');
        }
    }
}

async function startGame() {
  while (userLife > 0 && pcLife > 0) {
    const userOption = await ask();
    round(userOption);
  }

  rl.close();
}

console.log('Bienvenidos a piedra, papel o tijera');
startGame();