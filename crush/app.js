document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const scoreDisplay = document.getElementById('score');
    const width = 8;
    const squares = [];
    let score = 0;

    const candyColors = [
        'url(crush_img/caminoSinuoso.png)',
        'url(crush_img/comienzoAutopista.png)',
        'url(crush_img/limiteVelocidad.png)',
        'url(crush_img/estacionServicio.png)',
        'url(crush_img/prohibidoDoblarIzq.png)',
        'url(crush_img/rutaNacional.png)'
    ];

    function createBoard() {
        for (let i = 0; i < width * width; i++) {
            const square = document.createElement('div');
            square.setAttribute('draggable', true);
            square.setAttribute('id', i);
            let randomColor = Math.floor(Math.random() * candyColors.length);
            square.style.backgroundImage = candyColors[randomColor];
            grid.appendChild(square);
            squares.push(square);

            // Añadir eventos táctiles
            square.addEventListener('touchstart', touchStart);
            square.addEventListener('touchend', touchEnd);
            square.addEventListener('touchmove', touchMove);
        }
    }
    createBoard();

    let colorBeingDragged;
    let colorBeingReplaced;
    let squareIdBeingDragged;
    let squareIdBeingReplaced;

    squares.forEach(square => square.addEventListener('dragstart', dragStart));
    squares.forEach(square => square.addEventListener('dragend', dragEnd));
    squares.forEach(square => square.addEventListener('dragover', dragOver));
    squares.forEach(square => square.addEventListener('dragenter', dragEnter));
    squares.forEach(square => square.addEventListener('dragleave', dragLeave));
    squares.forEach(square => square.addEventListener('drop', dragDrop));

    function dragStart() {
        colorBeingDragged = this.style.backgroundImage;
        squareIdBeingDragged = parseInt(this.id);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
    }

    function dragLeave() {
        this.style.backgroundImage = '';
    }

    function dragDrop() {
        colorBeingReplaced = this.style.backgroundImage;
        squareIdBeingReplaced = parseInt(this.id);
        this.style.backgroundImage = colorBeingDragged;
        squares[squareIdBeingDragged].style.backgroundImage = colorBeingReplaced;
    }

    function dragEnd() {
        let validMoves = [
            squareIdBeingDragged - 1,
            squareIdBeingDragged - width,
            squareIdBeingDragged + 1,
            squareIdBeingDragged + width
        ];
        let validMove = validMoves.includes(squareIdBeingReplaced);

        if (squareIdBeingReplaced && validMove) {
            squareIdBeingReplaced = null;
        } else if (squareIdBeingReplaced && !validMove) {
            squares[squareIdBeingReplaced].style.backgroundImage = colorBeingReplaced;
            squares[squareIdBeingDragged].style.backgroundImage = colorBeingDragged;
        } else {
            squares[squareIdBeingDragged].style.backgroundImage = colorBeingDragged;
        }
    }

    function touchStart(e) {
        e.preventDefault();
        colorBeingDragged = this.style.backgroundImage;
        squareIdBeingDragged = parseInt(this.id);
    }

    function touchMove(e) {
        e.preventDefault();
        const touchLocation = e.targetTouches[0];
        const element = document.elementFromPoint(touchLocation.pageX, touchLocation.pageY);
        if (element && element.classList.contains('grid div')) {
            dragDrop.call(element);
        }
    }

    function touchEnd(e) {
        e.preventDefault();
        dragEnd.call(this);
    }

    function moveIntoSquareBelow() {
        for (let i = 0; i < 55; i++) {
            if (squares[i + width].style.backgroundImage === '') {
                squares[i + width].style.backgroundImage = squares[i].style.backgroundImage;
                squares[i].style.backgroundImage = '';
                const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
                const isFirstRow = firstRow.includes(i);
                if (isFirstRow && (squares[i].style.backgroundImage === '')) {
                    let randomColor = Math.floor(Math.random() * candyColors.length);
                    squares[i].style.backgroundImage = candyColors[randomColor];
                }
            }
        }
    }

    function checkRowForFour() {
        for (let i = 0; i < 60; i++) {
            let rowOfFour = [i, i + 1, i + 2, i + 3];
            let decidedColor = squares[i].style.backgroundImage;
            const isBlank = squares[i].style.backgroundImage === '';

            const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55];
            if (notValid.includes(i)) continue;

            if (rowOfFour.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)) {
                score += 4;
                scoreDisplay.innerHTML = score;
                rowOfFour.forEach(index => {
                    squares[index].style.backgroundImage = '';
                });
            }
        }
    }

    function checkColumnForFour() {
        for (let i = 0; i < 39; i++) {
            let columnOfFour = [i, i + width, i + width * 2, i + width * 3];
            let decidedColor = squares[i].style.backgroundImage;
            const isBlank = squares[i].style.backgroundImage === '';

            if (columnOfFour.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)) {
                score += 4;
                scoreDisplay.innerHTML = score;
                columnOfFour.forEach(index => {
                    squares[index].style.backgroundImage = '';
                });
            }
        }
    }

    function checkRowForThree() {
        for (let i = 0; i < 61; i++) {
            let rowOfThree = [i, i + 1, i + 2];
            let decidedColor = squares[i].style.backgroundImage;
            const isBlank = squares[i].style.backgroundImage === '';

            const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55];
            if (notValid.includes(i)) continue;

            if (rowOfThree.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)) {
                score += 3;
                scoreDisplay.innerHTML = score;
                rowOfThree.forEach(index => {
                    squares[index].style.backgroundImage = '';
                });
            }
        }
    }

    function checkColumnForThree() {
        for (let i = 0; i < 47; i++) {
            let columnOfThree = [i, i + width, i + width * 2];
            let decidedColor = squares[i].style.backgroundImage;
            const isBlank = squares[i].style.backgroundImage === '';

            if (columnOfThree.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)) {
                score += 3;
                scoreDisplay.innerHTML = score;
                columnOfThree.forEach(index => {
                    squares[index].style.backgroundImage = '';
                });
            }
        }
    }

    window.setInterval(function() {
        checkRowForFour();
        checkColumnForFour();
        checkRowForThree();
        checkColumnForThree();
        moveIntoSquareBelow();
    }, 100);
});
