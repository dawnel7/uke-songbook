const S={inst:"baritone",shift:0,page:false,edit:false};
const notes=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
const shapes={baritone:{G:[0,0,0,3],Em:[0,3,4,2],C:[0,0,0,0],D:[2,2,2,0],B:[4,4,4,2]},soprano:{G:[0,2,3,2],Em:[0,4,3,2],C:[0,0,0,3],D:[2,2,2,0],B:[4,4,4,2]},guitar:{G:[3,2,0,0,0,3],Em:[0,2,2,0,0,0],C:[0,3,2,0,1,0],D:[0,0,0,2,3,2],B:[null,2,4,4,4,2]}};
const data=[["Intro / Break","G Em G Em"],["Verse 1","G Em|Well I've heard there was a secret chord — That David played and it pleased the Lord","C D|But you don't really care for music, do you?","G C D Em C|Well it goes like this: the fourth, the fifth, the minor fall and the major lift","D B Em Em|The baffled king composing Halle-lujah"],["Chorus","C C Em Em|Halle-lujah Halle-lujah","C C G D G Em G Em|Halle-lu-u-jah"]];

function transpose(c,n){let m=c.match(/^(C#|D#|F#|G#|A#|[A-G])(m)?(7)?$/);if(!m)return c;let i=notes.indexOf(m[1]);if(i<0)return c;return notes[(i+n+120)%12]+(m[2]||"")+(m[3]||"")}
function chords(){let names=["G","Em","C","D","B"];document.querySelector("#chords").innerHTML=names.map(n=>{let x=transpose(n,S.shift);let f=shapes[S.inst][n]||[];return `<div class="chordbox">${x}<div>${f.join(" ")}</div></div>`}).join("")}
function render(){document.querySelector("#key").value=notes[(notes.indexOf("G")+S.shift+12)%12];document.querySelector("#chords").innerHTML="";chords();let h=data.map(sec=>{let lines=sec.slice(1).map(x=>{let p=x.split("|");let cs=(p[0]||"").split(" ").map(c=>`<span class="ch">${transpose(c,S.shift)}</span>`).join(" ");return `<div class="line">${cs}${p[1]?" · "+p[1]:""}</div>`}).join("");return `<div class="section"><h3>${sec[0]}</h3>${lines}</div>`}).join("");document.querySelector("#lyrics").className="card lyrics"+(S.page?" pageview":"")}
function openSong(){document.querySelector("#library").classList.add("hidden");document.querySelector("#songPage").classList.remove("hidden");document.querySelector("#back").classList.remove("hidden");render()}
function openLib(){document.querySelector("#songPage").classList.add("hidden");document.querySelector("#library").classList.remove("hidden");document.querySelector("#back").classList.add("hidden")}
document.querySelector("#song").onclick=e=>{e.preventDefault();e.stopPropagation();openSong()};
document.querySelector("#lib").onclick=openLib;document.querySelector("#back").onclick=openLib;
document.querySelector("#instrument").onchange=e=>{S.inst=e.target.value;render()};
document.querySelector("#up").onclick=()=>{S.shift++;render()};document.querySelector("#down").onclick=()=>{S.shift--;render()};
document.querySelector("#view").onclick=()=>{S.page=!S.page;document.querySelector("#view").textContent=S.page?"Scroll view":"Page view";render()};
document.querySelector("#edit").onclick=()=>{S.edit=!S.edit;document.querySelector("#edit").textContent=S.edit?"Done":"Edit";document.querySelector("#lyrics").contentEditable=S.edit;document.querySelector("#lyrics").style.outline=S.edit?"2px dashed #526b4d":"none"};
notes.forEach(n=>{let o=document.createElement("option");o.value=n;o.textContent=n;document.querySelector("#key").appendChild(o)});
document.querySelector("#key").onchange=e=>{S.shift=notes.indexOf(e.target.value)-notes.indexOf("G");render()};
document.querySelector("#search").oninput=e=>{document.querySelector("#song").style.display="Hallelujah".toLowerCase().includes(e.target.value.toLowerCase())?"block":"none"};
render();