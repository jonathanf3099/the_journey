let color = document.getElementById('colorPicker');// Select color input
let size = document.getElementById('sizePicker');// Select size input

//function for responding to the click after added event listener
function respondToTheClick(){
   //current square clicked takes the color value of the colorpicker
   this.bgColor = color.value;
    };

//makes a grid after you hit submit on webpage
size.addEventListener('submit', function makeGrid(evt){
    //preventDefault causes the page not to refresh.
    evt.preventDefault();
    //Selects cells on page if existed from before and changes color to white
    let myCellList = document.querySelectorAll('td');
    myCellList.forEach(function(originalColor){
        originalColor.bgColor = '#ffffff';
    });
    //canvasGrid is the table which selects pixelCanvas in the html
    const canvasGrid = document.getElementById('pixelCanvas');
    //if table exists from before, removes event listeners and removes table
    if(canvasGrid.rows.length > 0){
        let rowLength = canvasGrid.rows.length;
        let columnLength = canvasGrid.rows[0].cells.length;
        let currentRow = document.getElementsByTagName('tr');
        let currentCell = document.getElementsByTagName('td');
        for(let removeRowctr = 0; removeRowctr < rowLength; removeRowctr++){
            for(let removeCellctr = 0; removeCellctr < columnLength; removeCellctr++){
                //removes event listener from square
                currentCell[0].removeEventListener('click', respondToTheClick);
                //removes current 'td' cell
                currentCell[0].remove();
            }
            //removes current 'tr' row
            currentRow[0].remove();
        }
    };
    //gets input of width of table from user
    let tableWidth = document.getElementById('inputWidth').value;
    //gets input of height of table from user
    let tableHeight = document.getElementById('inputHeight').value;
    for(let r = 0; r < tableHeight; r++){
        //creates a row
        let newRow = document.createElement('tr');
        canvasGrid.appendChild(newRow);//attaches row to grid
        for(let c = 0; c < tableWidth; c++){
            //creates a cell
            newSquare = document.createElement('td');
            newRow.appendChild(newSquare);//attaches cell to row
            //attaches event listener to square so click can be registered on square
            newSquare.addEventListener('click', respondToTheClick);
        }
    }
});