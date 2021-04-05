var agora = new Date()
var diaSem = agora.getDay()
/*
    0 domingo
    1 seg
    2 ter
    3 qua
    4 quin
    5 sexta
    6 sabado
*/
//console.log("diaSem");
switch (diaSem) {
    case 0:
        console.log("domingo");
        break;
        case 1:
            console.log("seg");
            break
        case 2:
                console.log("ter");
                break
        case 3:
                    console.log("quarta");
                    break  

        case 4:
                        console.log("quinta");
                        break             
       case 5:
                            console.log("sexta");
                            break 

        case 6:
                                console.log("sabado");
                                break                             
    default:
        console.log("dia invalido! ");
        break
}