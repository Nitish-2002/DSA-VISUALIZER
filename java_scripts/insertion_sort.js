function insertionSort(array) {
    const moves = [];
    let i, key, j; 
    for (i = 1; i < array.length; i++)
    { 
        
        key = array[i]; 
        j = i - 1; 
        
        while (j >= 0 && array[j] > key)
        {   
            
            moves.push({
                indices: [j+1,j],
                type: "noswap"
            });
            array[j + 1] = array[j]; 
            j = j - 1; 
        } 
        moves.push({
            indices: [j+1,key],
            type: "swap"
        });
        array[j + 1] = key; 
        
        
    } 
    return moves;

}