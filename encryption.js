// Problema: https://www.hackerrank.com/challenges/encryption/problem

function encryption(s){
    const text = s.replace(/ /g,"")
    const l = text.length
    const rows = Math.round(Math.sqrt(l))
    const cols = Math.ceil(Math.sqrt(l))
    let grid = Array(rows)
    let sEncrypt = ''

    for(let i=0;i<grid.length;i++){
        let j=0
        grid[i] = []
        for(let c=cols*i;c<cols*(i+1);c++){
            grid[i][j] = text.charAt(c)
            j++
        }
    }
    for(let j=0;j<cols;j++){
        for(let i=0;i<rows;i++){
            if(grid[i][j] !== ''){
                sEncrypt += grid[i][j]
            }
        }
        sEncrypt += ' '
    }
    return sEncrypt
}