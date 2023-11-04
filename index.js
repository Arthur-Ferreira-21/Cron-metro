var segundos=0
var minutos=0
var horas=0
var intervalo
function inciar(){
 intervalo=setInterval(contador,1000)
}
function pausar(){
    contador()
    clearInterval(intervalo)
}
function parar(){
    clearInterval(intervalo)
    segundos=0
    minutos=0
    document.getElementById('relógio').innerText=horas +':'+minutos+':'+segundos

}
function twoDigits(digits){ 
    if (digits<10){
        return('0'+digits)
    }else{
        return(digits)
    }
}
function contador(){
    segundos++
    if(segundos==60){
        minutos++
        segundos=0
        if (minutos==60){
           minutos=0
           horas++ 
        }
    }
    document.getElementById('relógio').innerText=twoDigits(horas)+':'+twoDigits(minutos)+':'+twoDigits(segundos)
}