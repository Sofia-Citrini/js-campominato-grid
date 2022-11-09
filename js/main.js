const btnPlay = document.getElementById('btn-play');
const inputDifficulty = document.getElementById("[name='difficulty']");

btnPlay.addEventListener('click', function () {
    console.log(this);
    createGrid(10);
})

function createGrid(celle) {
    const grid = document.getElementById('grid-container');

    // celle totali
    const gridCells = Math.pow(celle, 2);

    for (let i = 0; i < gridCells; i++) {
        // creare elemento html
        const newCell = document.createElement('div');

        newCell.classList.add("cell");
        newCell.style.flexBasis = 100 / celle + '%';

        // numero progressivo da 1 a 100
        newCell.innerHTML = i + 1;

        // click:cambio colore + messaggio in console 
        newCell.addEventListener('click', function () {
            newCell.classList.toggle("bg-primary");

            console.log(i + 1)
        })

        grid.append(newCell);
    }
}

