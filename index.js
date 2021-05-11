// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function  destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

const copyCats = [...cats.slice.name];
function appendCat (name){
    copyCats.push(name);
    return cats
}

function prependCat(name){
    cats.splice(name);
    return cats
}

function appendCat(name){
    let appendCat2 = [...cats, name];
    return appendCat2
}

function prependCat(name){
    let prependCat2 = [name, ...cats];
    return prependCat2
}
function removeLastCat(name){
    let removeCat = cats.slice(0,-1);
    return removeCat
}

function removeFirstCat(name){
    let removeCat2 = cats.slice(1)
    return removeCat2
}


