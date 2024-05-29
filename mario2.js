/* Variaveis
Um espaço de memória que você reserva e pode
guardar o que quiser lá dentro.


3 jeitos de criar uma variável

- var / JEITO ANTIGO-NÃO USE MAIS
- let -> Você pode lterar o valor depois
- const -> constante


                    FUNÇÕES

                    
É um trecho de código que só é executado quando é chamado.



const abacate= "Oi, sou um abacate"
const pera= "Oi, sou uma pera"
const numero1 = 100
const numero2= 200

function soma(){
    const somatoria= numero1+numero2
    console.log(somatoria)

}

soma()
console.log(pera)
console.log(abacate)


function subtração(){
    const subtração= numero2-numero1
    console.log(subtração)




}
subtração()




const form = document.querySelector(".Formulario-Fale-Conosco")
const mascara = document.querySelector(".mascara-formulario")

function CliqueiNoBotao(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    form.style.transition = "2s"
    form.style.background = "linear-gradient(109deg, rgba(12,88,88,0.99) 15%, rgba(16,10,160,0.7) 50%, rgba(211,44,16,0.99) 85%"
    form.style.border = "5px solid rgba(211,44,16,0.99)"
    mascara.style.visibility = "visible"
    
}
 


function CliqueNaMascara(){


    form.style.left = "-300px"
    mascara.style.visibility = "hidden"
    form.style.transform = "translateX(0)"

    }


*/

const formulario = document.querySelector(".Formulario-Fale-Conosco")
const mascara = document.querySelector(".mascara-formulario")

function CliqueiNoBotao(){
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    }

function CliqueNaMascara(){
    formulario.style.left = "-300px"
    formulario.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
    
    







}


































