// calculo de média
// declarar as variaveis
let nota, media, conceito;

media = 0;

//   #var contador ; #condição ; #contabilizador
for (let i = 1 ; i <= 3 ; i++) {
    nota = parseFloat(prompt('digite sua nota'));
    media += nota;
} 

media /= 3;

// ? = SE, : = SE NÃO (é um IF/ELSE alinhado)
(media >= 9.5) ? conceito = 'excelente' :
    (media >= 8.5) ? conceito = 'ótimo' :
        (media >= 7.0) ? conceito = 'bom' :
            (media >= 8.5) ? conceito = 'regular' : 'ruim'
            
console.log(`sua média foi ${media}, e seu conceito ficou ${conceito}`);