function clean(){
    var estado=1;
    if(Izquierda){ 
        if(Suciedad[0]){
            if(!Suciedad[1]){estado=3;}
            Suciedad[0]=false;
            document.getElementById(`consola`).innerHTML+=`<br><FONT COLOR="green">Lugar: A |Accion: Limpiar</FONT>`
        }else{
            if(Suciedad[1]){estado=5;}
            else{ estado=7;}
            document.getElementById(`consola`).innerHTML+=`<br><FONT COLOR="blue">Lugar: A |Accion: Mover Derecha</FONT>`
            Izquierda=!Izquierda;
        }
         
    }
    else{
        if(Suciedad[1]){
            estado=2;
            if(!Suciedad[0])
            estado=6;
            document.getElementById(`consola`).innerHTML+=`<br><FONT COLOR="green">Lugar: B |Accion: Limpiar</FONT>`
            Suciedad[1]=false;
        }else{
            if(Suciedad[0]){estado=4;} 
            else{ estado=8;}
            document.getElementById(`consola`).innerHTML+=`<br><FONT COLOR="blue">Lugar: B |Accion: Mover Izquierda</FONT>`
            Izquierda=!Izquierda;
        }
    }
    
    state(estado);
}
function state(estado){
   var aux=contador[estado-1]+=1;
    document.getElementById(`estado${estado}`).innerHTML=aux
    getDirty();
    if(!finish()){
        setTimeout(function(){clean();},250);
    }else{
        document.getElementById('finish').innerHTML='Se concluye simulación'
    }
 
    
}
function getDirty(){
    var prob=Math.floor(Math.random() * 11);
    if(prob<2){Suciedad[0]=true;
        document.getElementById(`consola`).innerHTML+=`<br><FONT COLOR="read">Lugar: A |Accion: getDirty</FONT>`
    }
    if(prob<4&& 2<=prob){Suciedad[1]=true; document.getElementById(`consola`).innerHTML+=`<br><FONT COLOR="blue"">Position: B |Activity: getDirty</FONT>`}
    if(prob==10){Suciedad[0]=true;Suciedad[1]=true;
        document.getElementById(`consola`).innerHTML+=`<br><FONT COLOR="gray">Lugar: A y B |Accion: getDirty</FONT>`
    }
}
function finish(){
    for (let x = 0; x < 8; x++) {
        const element = contador[x];
        if(element<2){
            return false;
        } 
    }
    return true;
}
var contador=[];
for (let x = 0; x < 8; x++) {contador[x]=0;}
var Suciedad=[true,true];
var Izquierda=true;
clean();