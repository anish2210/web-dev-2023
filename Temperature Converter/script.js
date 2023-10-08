function sv(id, vi){
    document.getElementById(id).style.display = vi;
}
const degree = document.querySelector("#degree");
const but = document.querySelector("#but");
const res = document.querySelector("#resultvalue");
window.addEventListener("load", () => {
    degree.value = "";
    res.innerHTML = "";
})
if(degree.value === ""){
    but.setAttribute("disabled","");
    setTimeout(() => {
      but.removeAttribute('disabled');
    }, 4000);
}
but.addEventListener("click", (e) => {
    e.preventDefault();
    ctc();
})
function ctc(){
    let inputv = degree.value;
    const farvalue = (inputv - 32) * (5/9);
    res.innerHTML = `${farvalue.toFixed(3)} &deg;c`;
}
const degree1 = document.querySelector("#degree1");
const but1 = document.querySelector("#but1");
const res1 = document.querySelector("#resultvalue1");
window.addEventListener("load", () => {
    degree1.value = "";
    res1.innerHTML = "";
})
if(degree1.value === ""){
    but1.setAttribute("disabled","");
    setTimeout(() => {
      but1.removeAttribute('disabled');
    }, 4000);
}
but1.addEventListener("click", (e) => {
    e.preventDefault();
    ftc();
})
function ftc(){
    let inputv1 = degree1.value;
    const cvalue = (inputv1 * 1.8) + 32;
    res1.innerHTML = `${cvalue.toFixed(3)} &deg;f`;
}