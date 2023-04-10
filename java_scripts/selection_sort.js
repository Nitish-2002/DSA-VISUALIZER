function SelectionSort(array) {
    const moves = [];
    let i, j;
    for(i=0; i<array.length-1; ++i) {
        let smallestElement = i;
        for(j=i+1; j<array.length; ++j) {
            if(array[j] < array[smallestElement]) {
                smallestElement = j;
            }
            moves.push({
                indices: [j,smallestElement],
                type: "noSwap"
            });
        }
            if(smallestElement != i) {
                [array[i],array[smallestElement]] = [array[smallestElement],array[i]];
                moves.push({
                    indices: [i,smallestElement],
                    type: "swap"
                });
            }
    }
    return moves;
}