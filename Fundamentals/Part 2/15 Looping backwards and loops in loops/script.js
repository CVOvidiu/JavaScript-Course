const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// Spiced it up: Every array inside array are supposed neighbouring countries. Output the neighbours of each country. A country doesn't have any neighbours if its by itself (ex. Spain).

for(let i = 0; i < listOfNeighbours.length; i++)
    for(let j = 0; j < listOfNeighbours[i].length; j++)
        if(listOfNeighbours[i].length === 1)
            continue;
        else {
            console.log(`${listOfNeighbours[i][j]}:`);
            for(let k = 0; k < listOfNeighbours[i].length; k++)
                if(listOfNeighbours[i][k] !== listOfNeighbours[i][j])
                    console.log(`Neighbour: ${listOfNeighbours[i][k]}`);
        }