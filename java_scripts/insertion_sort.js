function insertionSort(array) {
    const moves = [];
    let i, key, j; 
    for (i = 1; i < array.length; i++)
    { 
        
        key = array[i]; 
        j = i - 1; 
        
        while (j >= 0 && array[j] > key)
        {   
            array[j + 1] = array[j]; 
            moves.push({
                indices: [j+1,j],
                type: "swap"
            }); 
            j = j - 1;
        } 
        array[j + 1] = key; 
        moves.push({
            indices: [j+1,key],
            type: "noswap"
        });
        
        
    } 
    return moves;

}
