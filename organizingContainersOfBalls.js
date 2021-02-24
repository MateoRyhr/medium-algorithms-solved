// Problem: https://www.hackerrank.com/challenges/organizing-containers-of-balls/problem

// Solucion: existe una solucion si para cada tipo de bola existe
// un container con la cantidad de bolas del tipo

// * Guardar la cantidad de pelotas en cada container en un array
// * Guardar la cantidad de pelotas por tipo en un array
// * Ordenar los arrays y compararlos || Buscar los numeros de un array en el otro e ir quitandolos, si los dos arrays quedan undefined imprimir posible

function organizationContainers(container){
    let cantPerContainer = [], cantPerType = []
    //obtain the number of balls in each container and of each type
    for(let i = 0;i<container.length;i++){
        let containerBalls = 0
        let ballsOfType = 0

        for(let j=0;j<container[i].length;j++){
            containerBalls += container[i][j]
            ballsOfType += container[j][i]
        }

        cantPerContainer.push(containerBalls)
        cantPerType.push(ballsOfType)
    }
    //order the arrays
    cantPerContainer = cantPerContainer.sort((a,b) => a-b)
    cantPerType = cantPerType.sort((a,b) => a-b)
    //compare them
    if(cantPerType.toString() === cantPerContainer.toString()){
        return 'Possible'
    } else{
        return 'Impossible'
    }
}