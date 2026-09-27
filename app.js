const S={inst:"baritone",shift:0,page:false,edit:false};
const notes=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
const shapes={baritone:{G:[0,0,0,3],Em:[0,3,4,2],C:[0,0,0,0],D:[2,2,2,0],B:[4,4,4,2]},soprano:{G:[0,2,3,2],Em:[0,4,3,2],C:[0,0,0,3],D:[2,2,2,0],B:[4,4,4,2]},guitar:{G:[3,2,0,0,0,3],Em:[0,2,2,0,0,0],C:[0,3,2,0,1,0],D:[0,0,0,2,3,2],B:[null,2,4,4,4,2]}};
const sections=[
 {name:"Intro / Break",lines:[{chords:["G","Em","G","Em"],text:""}]},
 {name:"Verse 1",lines:[
  {chords:["G","Em"],text:"Well I've heard there was a secret chord — That David played and it pleased the Lord"},
  {chords:["C","D"],text:"But you don't really care for music, do you?"},
  {chords:["G","C","D","Em","C"],text:"Well it goes like this: the fourth, the fifth, the minor fall and the major lift"},
  {chords:["D","B","Em","Em"],text:"The baffled king composing Halle-lujah"}
 ]},
 {name:"Chorus",lines:[
  {chords:["C","C","Em","Em"],text:"Halle-lujah Halle-lujah"},
  {chords:["C","C","G","D","G","Em","G","Em"],text:"Halle-lu-u-jah"}
 ]}
];
function transpose(c,n){let m=c.match(/^(C#|D#|F#|G#|A#|[A-G])(m)?(7)?$/);if(!m)return c;let i=notes.indexOf(m[1]);if(i<0)return c;return notes[(i+n+120)%12]+(m[2]||"")+(m[3]||"")}
function uniqueChords(){let all=[];sections.forEach(s=>s.lines.forEach(l=>l.chords.forEach(c=>{if(!all.includes(c))all.push(c)})));return all}
function diagram(name){const f=shapes[S.inst][name];if(!f)return "";return `<div class="fingering">${f.map(v=>v==null?"×":v).join(" ")}</div>`}
function renderChordStrip(){document.querySelector("#chords").innerHTML=uniqueChords().map(n=>{const x=transpose(n,S.shift);return `<div class="chordbox"><div class="chordname">${x}</div>${diagram(n)}</div>`}).join("")}
function renderLine(line){const chordSpans=line.chords.map(c=>`<span class="inline-chord">${transpose(c,S.shift)}</span>`).join("");return `<div class="song-line"><div class="chord-line">${chordSpans}</div><div class="words-line">${line.text||""}</div></div>`}
function render(){document.querySelector("#key").value=notes[(notes.indexOf("G")+S.shift+12)%12];renderChordStrip();document.querySelector("#lyrics").innerHTML=sections.map(sec=>`<section class="section"><h3>${sec.name}</h3>${sec.lines.map(renderLine).join("")}</section>`).join("");document.querySelector("#lyrics").className="card lyrics"+(S.page?" pageview":"")}
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