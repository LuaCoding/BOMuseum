const myImg = document.getElementById("tourImage");
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

let current_index = 0;

let locatie =[
    {
        
        "img":"../img/1.png",
        "directions": {"noord": 1 }
    },
    {
        
        "img":"../img/2.png",
        "directions": {
            "zuid": 0,
            "noord": 2
    }
    },
    {
        
        "img":"../img/3.png",
        "directions": {
            "noord": 3,
            "zuid": 1}
    },
    {
        
        "img":"../img/4.png",
        "directions": {
            "noord": 4,
            "zuid": 2
        }
    },
    {
        
        "img":"../img/5.png",
        "directions": {
            "west": 5,
            "zuid": 3
        }
    },
    {
        
        "img":"../img/6.png",
        "directions": {
            "west": 6,
            "zuid": 4
        }
    },
    {
        
        "img":"../img/7.png",
        "directions": {
            "noord": 7,
            "zuid": 5
        }
    },
    {
        
        "img":"../img/8.png",
        "directions": {
            "oost": 8,
            "zuid": 6,
            "noord": 10
        }
    },
    {
        
        "img":"../img/9.png",
        "directions": {
            "noord": 9,
            "west": 7
        }
    },
    {
        
        "img":"../img/10.png",
        "directions": {
            "noord": 10,
            "zuid": 8
        }
    },
    {
        
        "img":"../img/11.png",
        "directions": {
            "oost": 7,
            "zuid": 11,
            "noord": 9
        }
    },
    {
        
        "img":"../img/12.png",
        "directions": {
            "noord": 12,
            "zuid": 10
        }
    },
    {
        
        "img":"../img/13.png",
        "directions": {
            "noord": 13,
            "west": 20,
            "zuid": 11
        }
    },
    {
        
        "img":"../img/14.png",
        "directions": {
            "zuid": 12,
            "noord": 14
    }
    },
    {
        
        "img":"../img/15.png",
        "directions": {
            "noord": 13,
            "zuid": 15}
    },
    {
        
        "img":"../img/16.png",
        "directions": {
            "noord": 16,
            "zuid": 14
        }
    },
    {
        
        "img":"../img/17.png",
        "directions": {
            "west": 17,
            "zuid": 15
        }
    },
    {
        
        "img":"../img/18.png",
        "directions": {
            "noord": 18,
            "zuid": 16
        }
    },
    {
        
        "img":"../img/19.png",
        "directions": {
            "noord": 19,
            "zuid": 17
        }
    },
    {
        
        "img":"../img/20.png",
        "directions": {
            "zuid": 18,
            "noord": 20
        }
    },
    {
        
        "img":"../img/21.png",
        "directions": {
            "noord": 19,
            "west": 21,
            "zuid": 12
        }
    },
    {
        
        "img":"../img/22.png",
        "directions": {
            "noord": 22,
            "zuid": 20,
            "oost": 27
        }
    },
    {
        
        "img":"../img/23.png",
        "directions": {
            "zuid": 21,
            "noord": 23
        }
    },
    {
        
        "img":"../img/24.png",
        "directions": {
            "noord": 24,
            "zuid": 22
        }
    },
    {
        
        "img":"../img/25.png",
        "directions": {
            "zuid": 23,
            "oost": 25
        }
    },
    {
        
        "img":"../img/26.png",
        "directions": {
            "zuid": 24,
            "west": 26
    }
    },
    {
        
        "img":"../img/27.png",
        "directions": {
            "zuid": 25}
    },
    {
        
        "img":"../img/28.png",
        "directions": {
            "noord": 28,
            "zuid": 21
        }
    },
    {
        
        "img":"../img/29.png",
        "directions": {
            "noord": 29,
            "zuid": 27
        }
    },
    {
        
        "img":"../img/30.png",
        "directions": {
            "zuid": 28
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
