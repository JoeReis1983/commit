
function calcular(id) {
  document.calc.result.value+=id;
}

function raiz(id){
    document.calc.result.value+=id;
}


function limparTela() {
  document.calc.result.value="";
}


function calculate() {
    if(document.calc.result.value.indexOf('^')>0){
        y= document.calc.result.value
        x=y.slice(y.indexOf('^')+1)
        y=y.slice(0,y.indexOf('^'))        
        document.calc.result.value=(Math.pow(y,x))
    }
    else{
        try {
            var input = eval(document.calc.result.value);
            document.calc.result.value=input;
        }
    catch(err){
        document.calc.result.value="Error";
    }
    
    }
}

function raiz(){
    document.calc.result.value=(Math.sqrt(document.calc.result.value))
}
function acessar(){
    if(document.login.user.value=='Admin' && document.login.senha.value =='Admin'){
        location.href='./calculadora.html'
    
    } 
}