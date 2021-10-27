function reset(name) {
    for(let i in Dungeon){
        document.getElementsByName(Dungeon[i][0]+name)[0].checked = false;
    }
}

function allSelect(name){
    for(let i in Dungeon){
        document.getElementsByName(Dungeon[i][0]+name)[0].checked = true;
    }
}