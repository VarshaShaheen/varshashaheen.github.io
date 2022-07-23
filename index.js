const root = document.getElementById("root");
const inst = document.getElementById("instruction");

let texts = [];
let cur;

let cat = ""

for(const c of root.children)
{
    texts.push([c, c.innerText.split("").reverse()]);
    c.innerText = "";
}

texts = texts.reverse();


window.addEventListener("keypress", () => {
    inst.hidden = true
    if(!cur || cur[1].length <=0){
        cur = texts.pop();
        cat = ""
    }
    if(!cur)
        return;

    cat += cur[1].pop();
    cur[0].innerText = cat;
});
