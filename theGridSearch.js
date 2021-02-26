// Problema: https://www.hackerrank.com/challenges/the-grid-search/problem

// G --> matriz donde se busca
//   R --> n° de filas de G
//   C --> n° de columnas de G (cantidad de digitos de cada fila)

// P --> matriz(patron) que se busca
//   r --> n° de filas de P
//   c --> n° de columnas de P


// let M = [[1,2,3],[3,2,1],[4,5,6],[7,8,9],[9,8,7],[0,0,0]]

// let arr1 = [[1],[3,2],[4]]
// let arr2 = [[5,6],[8,9]]


function gridSearch(G,P){
    let found = false

    for(let i=0;i<G.length;i++){
        for(let j=0;j<G[i].length;j++){

            let pi = 0,pj = 0
            let comprobarSiguiente = true
            while(comprobarSiguiente){
                if(G[i+pi][j+pj] === P[pi][pj]){
                    if(pi === P.length-1 && pj === P[pi].length-1){// si llegamos a la ultima fila y columna
                        found = true
                        comprobarSiguiente = false
                    }else if(pj === P[pi].length-1){// si llegamos a la ultima columna de la fila actual
                        pi++
                        pj = 0
                    }else{
                        pj++
                    }
                }else{
                    comprobarSiguiente = false
                }
            }
        }
    }
    if(found){
        return 'YES'
    } else{
        return 'NO'
    }
}

// console.table(M)
// console.table(arr2)
// console.log(gridSearch(M,arr2))