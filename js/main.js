const btnPlay = document.querySelector('.btn-play');

btnPlay.addEventListener('click', function () {

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
            newCell.classList.add("bg-primary");

        })

        grid.append(newCell);
    }


}