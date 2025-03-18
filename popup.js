//copy
let copy = (textId) => {
    document.getElementById(textId).select();

    document.execCommand("copy");
}
let copying = (textId) => {
    document.getElementById(textId).select();

    document.execCommand("copying");
}
let copied = (textId) => {
    document.getElementById(textId).select();

    document.execCommand("copied");
}