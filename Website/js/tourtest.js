const myTitle = document.getElementById("mytitle");
const myImg = document.getElementById("myImg");
const myInput = document.getElementById("myinput");

const knopNoord = document.getElementById('knopNoord');
const knopOost = document.getElementById('knopOost');
const knopWest = document.getElementById('knopWest');
const knopZuid = document.getElementById('knopZuid');

let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "west": document.getElementById('knopWest'),
    "zuid": document.getElementById('knopZuid')
}

let current_index = 1;

let locatie =[
    {
        
        "img":"img/1.png",
        "directions": {"noord": 2 }
    },
    {
        
        "img":"img/2.png",
        "directions": {
            "zuid": 1,
            "noord": 3
    }
    },
    {
        
        "img":"img/3.png",
        "directions": {
            "noord": 4,
            "zuid": 2}
    },
    {
        
        "img":"img/4.png",
        "directions": {
            "noord": 5,
            "zuid": 3
        }
    },
    {
        
        "img":"img/5.png",
        "directions": {
            "west": 6,
            "zuid": 4
        }
    },
    {
        
        "img":"img/6.png",
        "directions": {
            "west": 7,
            "zuid": 5
        }
    },
    {
        
        "img":"img/7.png",
        "directions": {
            "noord": 8,
            "zuid": 6
        }
    },
    {
        
        "img":"img/8.png",
        "directions": {
            "oost": 9,
            "zuid": 7,
            "noord": 11
        }
    },
    {
        
        "img":"img/9.png",
        "directions": {
            "noord": 10,
            "west": 8
        }
    },
    {
        
        "img":"img/10.png",
        "directions": {
            "noord": 11,
            "zuid": 9
        }
    },
    {
        
        "img":"img/11.png",
        "directions": {
            "oost": 8,
            "zuid": 12,
            "noord": 10
        }
    },
    {
        
        "img":"img/12.png",
        "directions": {
            "noord": 13,
            "zuid": 11
        }
    },
    {
        
        "img":"img/13.png",
        "directions": {
            "noord": 14,
            "west": 21,
            "zuid": 12
        }
    },
    {
        
        "img":"img/14.png",
        "directions": {
            "zuid": 13,
            "noord": 15
    }
    },
    {
        
        "img":"img/15.png",
        "directions": {
            "noord": 14,
            "zuid": 16}
    },
    {
        
        "img":"img/16.png",
        "directions": {
            "noord": 17,
            "zuid": 15
        }
    },
    {
        
        "img":"img/17.png",
        "directions": {
            "west": 18,
            "zuid": 16
        }
    },
    {
        
        "img":"img/18.png",
        "directions": {
            "noord": 19,
            "zuid": 17
        }
    },
    {
        
        "img":"img/19.png",
        "directions": {
            "noord": 20,
            "zuid": 18
        }
    },
    {
        
        "img":"img/20.png",
        "directions": {
            "zuid": 19,
            "noord": 21
        }
    },
    {
        
        "img":"img/21.png",
        "directions": {
            "noord": 20,
            "west": 22,
            "zuid": 13
        }
    },
    {
        
        "img":"img/22.png",
        "directions": {
            "noord": 23,
            "zuid": 21,
            "oost": 28
        }
    },
    {
        
        "img":"img/23.png",
        "directions": {
            "zuid": 22,
            "noord": 24
        }
    },
    {
        
        "img":"img/24.png",
        "directions": {
            "noord": 25,
            "zuid": 23
        }
    },
    {
        
        "img":"img/25.png",
        "directions": {
            "zuid": 24,
            "oost": 26
        }
    },
    {
        
        "img":"img/26.png",
        "directions": {
            "zuid": 25,
            "west": 27
    }
    },
    {
        
        "img":"img/27.png",
        "directions": {
            "zuid": 26}
    },
    {
        
        "img":"img/28.png",
        "directions": {
            "noord": 29,
            "zuid": 22
        }
    },
    {
        
        "img":"img/29.png",
        "directions": {
            "noord": 30,
            "zuid": 28
        }
    },
    {
        
        "img":"img/30.png",
        "directions": {
            "zuid": 29
        }
    },
]

function show(index){
    myImg.src = locatie[index].img;
    current_index = index;

    updateDirections();
}

function updateDirections(){

    let possible = locatie[current_index].directions;

    let possible_keys = Object.keys(possible);

    let button_keys = Object.keys(directionButtons);

    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }

    for(const key of possible_keys){
        directionButtons[key].style.visibility = 'visible';
    }
}

function getInput(){ 
    show(myInput.value);
    myInput.value = "";
    myInput.focus();
}

function goDirection(direction){
    let punt_index = locatie[current_index].directions[direction];
    show(punt_index);
}

show(0);
