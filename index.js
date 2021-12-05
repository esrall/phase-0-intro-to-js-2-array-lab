// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat () {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    const newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat () {
    const newerCats = ["Arnold", ... cats];
    return newerCats;
}

function removeLastCat () {
    const newerNewCats = cats.slice(0, 2);
    return newerNewCats;
}

function removeFirstCat () {
    const newestNewerNewCats = cats.slice(1);
    return newestNewerNewCats;
}