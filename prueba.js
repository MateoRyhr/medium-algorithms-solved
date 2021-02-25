let num = 125
let indice = 3

function raiz(rad,ind) {
    let i = 0
    let flag = false
    while(!flag){
        i++
        let acc = i
        for(let j=1;j<ind;j++){
            acc*=i
        }
        if(acc === rad){
            flag = true
        }
    }
    return i
}

console.log(raiz(num,indice))