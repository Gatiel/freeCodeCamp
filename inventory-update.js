function updateInventory(current, old) {
    //verificando se o item já está na lista current,se não estivar, permaneca o found = false
    for (let newItem of old){
        let found = false;
        //se não estiver, concatena para a lista current atraves da oldItem e atualiza o found para true
        for (let oldItem of current){
            if (newItem[1] === oldItem[1]){
                oldItem[0] += newItem[0];
                found = true;
                break;
            }
        }
        //se encontrar o found sem passar o for para concater, ele empurra toda a lista de items passado para o current, para o old, atraves de cada item newItem da lista old
    if (!found) current.push([...newItem]);
    }
    // retorna a lista current de forma ordenada
    return current.sort((a, b) => {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
    });
}