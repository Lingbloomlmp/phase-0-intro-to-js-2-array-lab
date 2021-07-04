const cats = ["Milo", "Otis", "Garfield"]
const copyCats = [...cats]

const destructivelyAppendCat = (name) => {
    cats.push(name)
}
const destructivelyPrependCat = (name) => {
    cats.unshift(name)
}
const destructivelyRemoveLastCat = () => {
    cats.pop()
}
const destructivelyRemoveFirstCat = () => {
    cats.shift()
}
const appendCat = (name) => {
    copyCats.push(name)
}
const prependCat = (name) => {
    copyCats.unshift(name)
}
const removeLastCat = () => {
    cats.slice(0, -1)
}