//genera un array con 16 numeri random unici 
//ogni numero rappresenta una bomba
function generateBombsList(maxNumber, maxBombsNumber = 16){
    const bombsList =[];

    do{
        //creo il numero random
        const randomNumber = Math.floor(Math.random() * maxNumber) + 1;

        //solo se questo non esiste ancora nel mio array, lo aggiungo
        if(!bombsList.includes(randomNumber)){
            bombsList.push(randomNumber);
        }
    } while(bombsList.length < maxBombsNumber);

    return bombsList;
}

//---------------------------------------------------------------

//genera la griglia
//stabilire il numero totale di celle presenti nella griglia
//riportare la lista con le bombe
function generateGrid (){
    const totCells = 10 * 10; //ad esempio a partire da 100 celle

    //lista con le bombe
    //ad ogni bomba corrisponde un numero
    const bombsList = generateBombsList(totCells);

    //stampa in html la griglia
    renderGrid(totCells, bombsList);
}

//---------------------------------------------------------------

//stampa in HTML la griglia
function renderGrid(totCells, bombsList){
    const gridContainer = document.getElementById("container-griglia");
    
    //ciclo che crea il numero di celle stabilito nella funzione generateGrdi
    for(let i=1; i<=totCells; i++){
        //creo una singola cella nell'HTML
        const cell = document.createElement("div");
        //si aggiunge la classe alla cella
        cell.classList.add("cell");
        //visualizza i numeri in ogni cella
        cell.textContent = i;
        //crea un attributo data-indice che contiene il numero della cella
        cell.dataset.indice = i;

        //aggiungo la cella alla griglia
        gridContainer.append(cell);
    }
}