var jogo=["c1","c2","c3","c4","c5","c6","c7","c8","c9"];
var tabuleiro=["","","","","","","","",""];
var quemJoga= 0;
var verificar;
var jogando =true;
var cont = 0;


function jogar(p){
    console.log(cont);
    
    if(jogando){
        jogando = verifica();
    }
    if(jogando == false){
        return;
    } else {
        if(document.getElementById(p).childElementCount<1){
            var x = document.createElement("div");
            var t = document.createTextNode("X");
            // x.src = "1.png";
            // console.log("foi");
            x.appendChild(t);
            document.getElementById(p).appendChild(x);
            cont++;
            console.log(cont);
            
            var marca = document.getElementById(p).id.replace('c','');
            tabuleiro[marca-1]= "1";
            setTimeout(function (){cpu()},100);
            jogando = verifica();
        }
    }
    if(cont>=9){
        if(!verifica()){
            return;
        }
        var velha = "Deu velha!";
        document.getElementById("ganhou").innerHTML = velha;
        return;
    } 
}

function cpu(){
    if(jogando){
        jogando = verifica();
    }
    if(jogando == false){
        return;
    } else {
        var posicaoMaq = Math.floor(Math.random()*10-1);
        // console.log(posicaoMaq);
        if(posicaoMaq<0){;
            cpu();
            return;
        }
        var a = jogo[posicaoMaq];
        if(document.getElementById(a).childElementCount<1){
            var x = document.createElement("div");
            var t = document.createTextNode("O");
            // x.src = "1.png";
            // console.log("foi");
            x.appendChild(t);
            document.getElementById(a).appendChild(x);
            cont++;
            console.log(cont);
            var marca = document.getElementById(a).id.replace('c','');
            tabuleiro[marca-1]= "2";
            jogando = verifica();
        }else {
            cpu();
        }
    }
    if(cont>=9){
        if(!verifica()){
             return;
        }
        var velha = "Deu velha!";
        document.getElementById("ganhou").innerHTML = velha;
        return;
    }
}

function verifica(){
    if(((tabuleiro[0]=='1') && (tabuleiro[1]=='1') && (tabuleiro[2]=='1')) ||
        ((tabuleiro[3]=='1') && (tabuleiro[4]=='1') && (tabuleiro[5]=='1')) ||
        ((tabuleiro[6]=='1') && (tabuleiro[7]=='1') && (tabuleiro[8]=='1')) ||
        ((tabuleiro[0]=='1') && (tabuleiro[3]=='1') && (tabuleiro[6]=='1')) ||
        ((tabuleiro[1]=='1') && (tabuleiro[4]=='1') && (tabuleiro[7]=='1')) ||
        ((tabuleiro[2]=='1') && (tabuleiro[5]=='1') && (tabuleiro[8]=='1')) ||
        ((tabuleiro[0]=='1') && (tabuleiro[4]=='1') && (tabuleiro[8]=='1')) ||
        ((tabuleiro[2]=='1') && (tabuleiro[4]=='1') && (tabuleiro[6]=='1'))){
            var ganhou = "Você ganhou!<br/>Gandalf está orgulhoso!";
            document.getElementById("ganhou").innerHTML = ganhou;
            return false;
        }else if(((tabuleiro[0]=='2') && (tabuleiro[1]=='2') && (tabuleiro[2]=='2')) ||
        ((tabuleiro[3]=='2') && (tabuleiro[4]=='2') && (tabuleiro[5]=='2')) ||
        ((tabuleiro[6]=='2') && (tabuleiro[7]=='2') && (tabuleiro[8]=='2')) ||
        ((tabuleiro[0]=='2') && (tabuleiro[3]=='2') && (tabuleiro[6]=='2')) ||
        ((tabuleiro[1]=='2') && (tabuleiro[4]=='2') && (tabuleiro[7]=='2')) ||
        ((tabuleiro[2]=='2') && (tabuleiro[5]=='2') && (tabuleiro[8]=='2')) ||
        ((tabuleiro[0]=='2') && (tabuleiro[4]=='2') && (tabuleiro[8]=='2')) ||
        ((tabuleiro[2]=='2') && (tabuleiro[4]=='2') && (tabuleiro[6]=='2'))){
            var perdeu = "Você perdeu!<br/>Gandalf está decepcionado!";
            document.getElementById("ganhou").innerHTML = perdeu;
            return false;
        }else{
            return true;
        } 
}

function inicia(){
    var quemJoga = Math.floor(Math.random()*3-1);
    console.log(quemJoga);
    if(quemJoga == 1){
        var comeca = "Você começa!";
        document.getElementById("ganhou").innerHTML = comeca;
    } else {
        var comeca = "A maquina começa!";
        document.getElementById("ganhou").innerHTML = comeca;
        cpu();
    }
}