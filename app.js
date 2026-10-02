(function(){
"use strict";
var STORAGE="yourSongbookV2";
var NOTES=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
var DISPLAY_NOTES=["C","C#","D","Eb","E","F","F#","G","Ab","A","Bb","B"];
function pitchIndex(root){
 var r=String(root||"").replace("Db","C#").replace("Eb","D#").replace("Gb","F#").replace("Ab","G#").replace("Bb","A#");
 return NOTES.indexOf(r);
}
var SHAPES={
 baritone:{"A":[2,2,2,0],"Am":[2,2,1,0],"Aaug":[3,2,1,1],"Adim":[1,2,1,0],"A6":[2,2,2,2],"Am6":[2,2,1,2],"A7":[0,2,2,3],"Amaj7":[2,2,2,3],"Am7":[2,2,1,3],"A9":[4,3,2,4],"Ab":[1,1,1,3],"Abm":[1,1,0,0],"Abaug":[2,1,1,0],"Abdim":[0,1,0,3],"Ab6":[1,1,1,1],"Abm6":[1,1,0,1],"Ab7":[1,1,1,0],"Abmaj7":[1,0,0,3],"Abm7":[1,1,0,2],"Ab9":[1,1,1,2],"B":[4,3,2,2],"Bm":[0,3,3,2],"Baug":[1,0,0,3],"Bdim":[0,3,0,1],"B6":[3,3,3,3],"Bm6":[0,1,0,2],"B7":[1,2,0,2],"Bmaj7":[1,3,0,2],"Bm7":[0,2,0,0],"B9":[1,0,0,2],"Bb":[3,3,3,1],"Bbm":[3,3,2,1],"Bbaug":[0,3,3,2],"Bbdim":[2,3,2,0],"Bb6":[3,3,3,3],"Bbm6":[3,3,2,3],"Bb7":[3,3,2,3],"Bbmaj7":[3,3,3,4],"Bbm7":[3,3,0,3],"Bb9":[0,3,1,3],"C":[2,0,1,0],"Cm":[1,0,1,3],"Caug":[2,0,0,0],"Cdim":[1,0,1,2],"C6":[2,2,1,3],"Cm6":[1,2,1,3],"C7":[2,3,1,3],"Cmaj7":[2,3,1,3],"Cm7":[1,3,1,2],"C9":[0,3,1,0],"D":[0,2,3,2],"Dm":[0,2,3,1],"Daug":[0,3,3,0],"Ddim":[0,1,3,1],"D6":[0,2,0,2],"Dm6":[0,2,0,1],"D7":[0,2,1,2],"Dmaj7":[0,0,0,2],"Dm7":[0,2,1,1],"D9":[0,4,4,2],"Db":[3,1,0,0],"Dbm":[2,1,2,0],"Dbaug":[3,0,0,1],"Dbdim":[2,0,2,0],"Db6":[3,3,2,3],"Dbm6":[0,3,2,3],"Db7":[2,3,2,3],"Dbmaj7":[3,4,2,3],"Dbm7":[2,3,2,3],"Db9":[1,3,2,1],"E":[2,1,0,0],"Em":[2,0,0,0],"Eaug":[2,1,1,3],"Edim":[2,3,4,3],"E6":[2,3,2,3],"Em6":[0,3,2,3],"E7":[0,1,0,0],"Emaj7":[1,1,0,0],"Em7":[0,0,0,0],"E9":[2,1,3,2],"Eb":[4,3,3,3],"Ebm":[3,3,3,2],"Ebaug":[1,0,0,3],"Ebdim":[1,2,0,3],"Eb6":[1,3,1,3],"Ebm6":[3,3,2,1],"Eb7":[1,2,2,3],"Ebmaj7":[1,2,2,2],"Ebm7":[1,3,2,2],"Eb9":[1,0,2,1],"F":[3,2,1,1],"Fm":[3,0,0,1],"Faug":[3,2,0,1],"Fdim":[3,1,0,1],"F6":[0,0,1,1],"Fm6":[0,1,1,1],"F7":[1,2,1,1],"Fmaj7":[3,2,1,0],"Fm7":[1,1,1,1],"F9":[3,2,3,3],"F#":[1,3,3,3],"F#m":[2,4,4,2],"F#aug":[2,2,2,3],"F#dim":[0,3,0,2],"F#6":[0,2,2,2],"F#m6":[2,3,3,3],"F#7":[1,2,1,3],"F#maj7":[0,0,0,2],"F#m7":[2,4,2,2],"F#9":[3,2,0,3],"G":[0,0,0,3],"Gm":[0,3,3,2],"Gaug":[1,0,2,2],"Gdim":[0,2,2,3],"G6":[2,3,2,2],"Gm6":[2,2,2,2],"G7":[2,3,2,2],"Gmaj7":[0,0,2,2],"Gm7":[2,2,2,2],"G9":[3,3,4,3],"Gb":[3,3,2,2],"Gbm":[0,0,2,2],"Gbaug":[4,3,3,2],"Gbdim":[4,2,1,2],"Gb6":[1,0,2,2],"Gbm6":[1,2,2,2],"Gb7":[2,3,2,2],"Gbmaj7":[3,2,2,1],"Gbm7":[2,2,2,2],"Gb9":[3,3,4,3]},
 soprano:{"C":[0,0,0,3],"Cm":[0,3,3,3],"C7":[0,0,0,1],"Cm7":[3,3,3,3],"C6":[0,0,0,0],"Cm6":[2,3,3,3],"Csus4":[0,0,1,3],"Cdim":[0,3,2,3],"D":[2,2,2,0],"Dm":[2,2,1,0],"D7":[2,2,2,3],"Dm7":[2,2,1,3],"D6":[2,2,2,2],"Dm6":[2,3,4,4],"Dsus4":[0,1,0,2],"Ddim":[1,3,2,0],"E":[1,4,0,2],"Em":[0,4,3,2],"E7":[1,2,0,1],"Em7":[0,1,0,2],"E6":[1,1,0,3],"Em6":[1,0,0,2],"Esus4":[2,4,0,2],"Edim":[0,4,0,1],"F":[2,0,1,0],"Fm":[1,0,1,3],"F7":[2,3,1,3],"Fm7":[1,3,1,3],"F6":[2,2,1,4],"Fm6":[1,3,1,4],"Fsus4":[3,0,1,1],"Fdim":[2,4,3,1],"G":[0,2,3,2],"Gm":[0,2,3,1],"G7":[0,2,1,2],"Gm7":[0,2,1,1],"G6":[0,2,0,2],"Gm6":[0,2,0,1],"Gsus4":[0,0,1,3],"Gdim":[0,1,3,1],"A":[1,1,0,0],"Am":[2,0,0,0],"A7":[0,1,0,0],"Am7":[0,0,0,0],"A6":[1,1,3,4],"Am6":[1,1,4,3],"Asus4":[1,1,0,0],"Adim":[3,1,4,0],"B":[4,3,1,1],"Bm":[4,1,1,1],"B7":[1,3,1,1],"Bm7":[1,1,1,1],"B6":[1,3,2,1],"Bm6":[1,2,2,2],"Bsus4":[3,4,1,1],"Bdim":[4,2,1,2],"F#m":[2,1,2,0],"F#m7":[2,1,2,2]},
 guitar:{"C":[null,3,2,0,1,0],"Cm":[null,1,0,0,2,1],"C7":[null,3,2,3,1,0],"Cm7":[null,1,3,1,2,1],"C6":[null,3,0,0,1,0],"Cm6":[null,3,2,1,3,0],"Csus4":[null,0,0,0,0,0],"Cdim":[null,null,2,1,2,0],"D":[null,0,0,2,3,2],"Dm":[null,null,0,2,3,1],"D7":[null,null,0,2,1,2],"Dm7":[null,null,0,2,0,0],"D6":[null,null,0,2,2,0],"Dm6":[null,null,2,0,1,0],"Dsus4":[null,null,2,0,0,0],"Ddim":[null,null,1,3,1,0],"E":[0,2,2,1,0,0],"Em":[0,2,2,0,0,0],"E7":[0,2,0,1,0,0],"Em7":[0,2,0,0,0,0],"E6":[0,2,2,1,2,0],"Em6":[0,2,2,0,2,0],"Esus4":[0,2,2,2,0,0],"Edim":[null,null,1,2,1,0],"F":[1,3,3,2,1,1],"Fm":[0,0,0,0,0,0],"F7":[0,2,0,1,0,0],"Fm7":[0,2,0,0,0,0],"F6":[null,null,2,1,2,0],"Fm6":[null,null,0,0,0,0],"Fsus4":[0,0,2,0,0,0],"Fdim":[null,null,0,0,0,0],"G":[3,2,0,0,0,3],"Gm":[0,2,2,0,0,0],"G7":[0,1,0,0,0,0],"Gm7":[0,2,0,0,0,0],"G6":[0,1,0,0,0,0],"Gm6":[0,0,0,2,0,0],"Gsus4":[2,0,0,2,2,0],"Gdim":[0,3,1,0,1,0],"A":[null,0,2,2,2,0],"Am":[null,0,2,2,1,0],"A7":[null,0,1,0,1,0],"Am7":[null,0,1,0,0,0],"A6":[null,0,0,0,0,0],"Am6":[null,0,0,0,1,0],"Asus4":[null,1,1,2,0,0],"Adim":[null,0,1,0,0,0],"B":[null,2,4,4,4,2],"Bm":[null,1,3,0,0,1],"B7":[null,1,0,1,0,0],"Bm7":[null,1,1,0,0,0],"B6":[null,1,3,3,0,0],"Bm6":[null,1,0,0,1,0],"Bsus4":[null,0,2,0,0,0],"Bdim":[null,0,0,0,0,0],"F#m":[2,4,4,2,2,2],"F#m7":[2,4,2,2,2,2]}
};
var FINGERS={
 baritone:{G:[0,0,0,3],Em:[1,0,0,0],C:[2,0,1,0],D:[0,1,3,2],B:[3,2,1,1],Bm:[0,3,2,1],F:[3,2,1,1],Am:[2,3,1,0],A:[2,3,4,0],E:[2,1,0,0],"F#m":[1,3,4,2],"F#m7":[1,3,1,2]},
 soprano:{G:[0,1,2,1],Em:[0,3,2,1],C:[0,0,0,3],D:[1,2,3,0],B:[1,2,3,1],Bm:[3,1,1,1],F:[2,0,1,0],Am:[1,0,0,0],A:[1,2,0,0],E:[1,3,0,2],"F#m":[2,1,3,0],"F#m7":[2,1,3,4]},
 guitar:{G:[2,1,0,0,0,3],Em:[0,2,3,0,0,0],C:[0,3,2,0,1,0],D:[0,0,0,1,2,1],B:[0,1,3,4,2,1],Bm:[0,1,3,4,2,1],F:[1,3,4,2,1,1],Am:[0,0,2,3,1,0],A:[0,0,1,2,3,0],E:[0,2,3,1,0,0],"F#m":[1,3,4,2,1,1],"F#m7":[1,3,1,2,1,1]}
};
function esc(x){return String(x==null?"":x).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
function uid(p){return p+"_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,7);}
function clone(x){return JSON.parse(JSON.stringify(x));}
function line(text,chords){return {text:text||"",chords:chords||[]};}
function c(name,pos){return {name:name,pos:pos||0};}
function makeSong(){
 return {id:"hallelujah",title:"Hallelujah",artist:"Leonard Cohen",key:"G",genre:"Folk",moods:["Reflective","Singalong"],duration:300,source:{type:"PDF",name:"HALLELUJAH in key of G.pdf",credit:"Beginner ukulele arrangement by Cynthia Lin"},sections:[
  {name:"Intro / Break",lines:[line("",[c("G"),c("Em"),c("G"),c("Em")])]},
  {name:"Verse 1",lines:[
   line("Well I've heard there was a secret chord — That David played and it pleased the Lord",[c("G",0),c("Em",28)]),
   line("But you don't really care for music, do you?",[c("C",0),c("D",30)]),
   line("Well it goes like this: the fourth, the fifth, the minor fall and the major lift",[c("G",0),c("C",24),c("D",34),c("Em",51),c("C",68)]),
   line("The baffled king composing Halle-lujah",[c("D",0),c("B",3),c("Em",22),c("Em",32)])
  ]},
  {name:"Chorus",lines:[
   line("Halle-lujah Halle-lujah",[c("C",0),c("Em",13)]),
   line("Halle-lu-u-jah",[c("C",0),c("G",8),c("D",9),c("G",12),c("Em",12)])
  ]},
  {name:"Verse 2",lines:[
   line("Your faith was strong but you needed proof",[c("G",0),c("Em",25)]),
   line("You saw her bathing on the roof",[c("C",0),c("D",25)]),
   line("Her beauty and the moonlight overthrew you",[c("G",0),c("C",15),c("D",25),c("Em",42),c("C",42)]),
   line("She tied you to a kitchen chair",[c("D",0),c("B",5),c("Em",24),c("Em",30)]),
   line("She broke your throne, and she cut your hair",[c("C",0),c("Em",20)]),
   line("And from your lips she drew the Hallelujah",[c("C",0),c("G",22),c("D",28),c("G",35),c("Em",35)])
  ]},
  {name:"Verse 3",lines:[
   line("You say I took the name in vain",[c("G",0),c("Em",25)]),
   line("I don't even know the name",[c("C",0),c("D",20)]),
   line("But if I did, well really, what's it to you?",[c("G",0),c("C",25),c("D",36),c("Em",48),c("C",48)]),
   line("There's a blaze of light in every word",[c("D",0),c("B",5),c("Em",25)]),
   line("It doesn't matter which you heard",[c("C",0),c("Em",25)]),
   line("The holy or the broken Hallelujah",[c("C",0),c("G",28),c("D",34),c("G",41),c("Em",41)])
  ]},
  {name:"Verse 4",lines:[
   line("I did my best, it wasn't much",[c("G",0),c("Em",22)]),
   line("I couldn't feel, so I tried to touch",[c("C",0),c("D",25)]),
   line("I've told the truth, I didn't come to fool you",[c("G",0),c("C",18),c("D",31),c("Em",45),c("C",45)]),
   line("And even though it all went wrong",[c("D",0),c("B",8),c("Em",25)]),
   line("I'll stand before the Lord of Song",[c("C",0),c("Em",25)]),
   line("With nothing on my tongue but Hallelujah",[c("C",0),c("G",35),c("D",40),c("G",48),c("Em",48)])
  ]},
  {name:"Final Chorus",lines:[
   line("Halle-lujah Halle-lujah",[c("C",0),c("Em",13)]),
   line("Halle-lu-u-jah",[c("C",0),c("G",8),c("D",9)]),
   line("Halle-lujah Halle-lujah",[c("C",0),c("Em",13)]),
   line("Halle-lu-u-jah",[c("C",0),c("G",8),c("D",9),c("G",12)])
  ]}
 ]};
}
function fresh(){return {songs:{hallelujah:makeSong()},sets:{},settings:{instrument:"baritone",shift:0,view:"scroll",pin:true},session:{view:"library",songId:null,setId:null,edit:false,draft:null,draftNew:false,index:0},pendingFile:null};}
var state;
try{state=JSON.parse(localStorage.getItem(STORAGE));}catch(e){state=null;}
if(!state||!state.songs)state=fresh();
if(!state.session)state=fresh();
if(!state.settings)state=fresh().settings;
if(state.settings.autoScroll==null)state.settings.autoScroll=0;
if(!state.songs||Object.keys(state.songs).length===0){state.songs={hallelujah:makeSong()};}
if(!state.songs.hallelujah){state.songs.hallelujah=makeSong();}
Object.keys(state.songs).forEach(function(id){if(!state.songs[id].substitutions)state.songs[id].substitutions={};});
Object.keys(state.songs).forEach(function(id){var s=state.songs[id];if(s&&s.title==="New Song"&&s.artist==="Unknown"&&s.source&&s.source.type==="Manual")delete state.songs[id];});
function save(){
 try{localStorage.setItem(STORAGE,JSON.stringify(state));}
 catch(e){console.warn("Songbook save failed",e);}
}
if(!state.sets)state.sets={};
if(state.pendingFile===undefined)state.pendingFile=null;
var autoScrollFrame=null;
var autoScrollLast=0;
var autoScrollRemainder=0;
function stopAutoScroll(){
 if(autoScrollFrame){cancelAnimationFrame(autoScrollFrame);autoScrollFrame=null;}
 autoScrollLast=0;
 autoScrollRemainder=0;
}
function autoScrollStep(ts){
 if(!state.settings||state.settings.view!=="scroll"||state.settings.autoScroll<=0||state.session.view!=="song"||state.session.edit){stopAutoScroll();return;}
 if(!autoScrollLast)autoScrollLast=ts;
 var dt=Math.min(50,ts-autoScrollLast)/1000;
 autoScrollLast=ts;
 var speed=[0,3,6,10,15,22][state.settings.autoScroll]||0;
 var scroller=document.scrollingElement||document.documentElement;
 var max=Math.max(0,scroller.scrollHeight-window.innerHeight);
 var current=scroller.scrollTop;
 if(max<=0||current>=max-1){stopAutoScroll();return;}
 autoScrollRemainder+=speed*dt;
 var move=Math.floor(autoScrollRemainder);
 if(move>0){
  autoScrollRemainder-=move;
  scroller.scrollTop=Math.min(max,current+move);
 }
 autoScrollFrame=requestAnimationFrame(autoScrollStep);
}
function startAutoScroll(){
 stopAutoScroll();
 if(state.settings.view==="scroll"&&state.settings.autoScroll>0&&!state.session.edit){
  autoScrollFrame=requestAnimationFrame(autoScrollStep);
 }
}
function syncAutoScrollControl(){
 var val=Number(state.settings.autoScroll)||0;
 document.querySelectorAll(".autoScrollChoice,.headerAutoChoice").forEach(function(b){
  b.classList.toggle("active",Number(b.getAttribute("data-speed"))===val);
  b.disabled=state.settings.view!=="scroll"||state.session.edit;
 });
 var headerAuto=document.getElementById("headerAutoScroll");
 if(headerAuto)headerAuto.classList.toggle("hidden",state.session.view!=="song"||state.session.edit);
}
function currentSong(){return state.session.edit?state.session.draft:state.songs[state.session.songId];}
function transpose(chord,shift){
 var m=String(chord).match(/^([A-G](?:#|b)?)(.*)$/);if(!m)return chord;
 var i=pitchIndex(m[1]);if(i<0)return chord;
 return DISPLAY_NOTES[(i+shift+120)%12]+m[2];
}
var GENERATED_SHAPES={};
var GENERATED_FINGERS={};
var CHORD_INTERVALS={
 "":[0,4,7],m:[0,3,7],"7":[0,4,7,10],m7:[0,3,7,10],
 "6":[0,4,7,9],m6:[0,3,7,9],sus4:[0,5,7],dim:[0,3,6],
 aug:[0,4,8],maj7:[0,4,7,11],"9":[0,4,7,10,14]
};
var TUNINGS={baritone:[2,7,11,4],soprano:[7,0,4,9],guitar:[4,9,2,7,11,4]};
function generatedChord(name){
 var m=String(name).match(/^([A-G](?:#|b)?)(.*)$/);if(!m)return null;
 var root=pitchIndex(m[1]),suffix=m[2]||"",ints=CHORD_INTERVALS[suffix];
 if(root<0||!ints)return null;
 var inst=state.settings.instrument,key=inst+"|"+name;
 if(GENERATED_SHAPES[key])return GENERATED_SHAPES[key];
 var tuning=TUNINGS[inst];if(!tuning)return null;
 var pcs={};ints.forEach(function(x){pcs[(root+x)%12]=true;});
 var options=inst==="guitar"?[null,0,1,2,3,4]:[null,0,1,2,3,4];
 var best=null,bestScore=-Infinity;
 function walk(i,arr){
  if(i===tuning.length){
   var sounding=arr.filter(function(v){return v!==null;});
   if(!sounding.length)return;
   var notes=sounding.map(function(v,j){return (tuning[j]+v)%12;});
   if(notes.indexOf(root)<0)return;
   for(var n=0;n<notes.length;n++)if(!pcs[notes[n]])return;
   var unique={};notes.forEach(function(n){unique[n]=true;});
   if(Object.keys(unique).length<Math.min(3,Object.keys(pcs).length))return;
   var score=0,zeros=0,muted=0,sum=0,min=99,max=0;
   arr.forEach(function(v){if(v===null){muted++;return;}if(v===0)zeros++;sum+=v;min=Math.min(min,v);max=Math.max(max,v);});
   if(max-min>4)return;
   score=zeros*3-sum*.15-muted*1.5-(max-min)*.3;
   if(inst==="guitar"&&sounding.length<5)score-=2;
   if(score>bestScore){bestScore=score;best=arr.slice();}
   return;
  }
  options.forEach(function(v){arr.push(v);walk(i+1,arr);arr.pop();});
 }
 walk(0,[]);
 if(!best)return null;
 GENERATED_SHAPES[key]=best;
 var fingers=best.map(function(v){return v===null||v===0?0:0;});
 var fretFinger={};var next=1;
 best.forEach(function(v,i){
  if(v===null||v===0)return;
  if(!fretFinger[v])fretFinger[v]=next++;
  fingers[i]=fretFinger[v];
 });
 GENERATED_FINGERS[key]=fingers;
 return best;
}
function generatedFingers(name){
 var key=state.settings.instrument+"|"+name;
 if(!GENERATED_SHAPES[key])generatedChord(name);
 return GENERATED_FINGERS[key]||null;
}
function shapeLookup(name){
 var inst=state.settings.instrument;
 var direct=SHAPES[inst]&&SHAPES[inst][name];
 if(direct)return direct;
 var m=String(name).match(/^([A-G](?:#|b)?)(.*)$/);
 if(!m)return null;
 var i=pitchIndex(m[1]);if(i<0)return null;
 var candidates=[NOTES[i]];
 var enh=DISPLAY_NOTES[i];
 if(candidates.indexOf(enh)<0)candidates.push(enh);
 var aliases={"C#":["Db"],"D#":["Eb"],"F#":["Gb"],"G#":["Ab"],"A#":["Bb"]};
 (aliases[NOTES[i]]||[]).forEach(function(x){if(candidates.indexOf(x)<0)candidates.push(x);});
 for(var j=0;j<candidates.length;j++){
  var found=SHAPES[inst]&&SHAPES[inst][candidates[j]+m[2]];
  if(found)return found;
 }
 return generatedChord(name);
}
function chordNames(s){var a=[];s.sections.forEach(function(sec){sec.lines.forEach(function(l){l.chords.forEach(function(x){if(a.indexOf(x.name)<0)a.push(x.name);});});});return a;}
function effectiveChordName(name,s){var map=s&&s.substitutions||{};var v=map[name];return v&&String(v).trim()?String(v).trim():name;}
function effectiveChordNames(s){var a=[];chordNames(s).forEach(function(n){var x=effectiveChordName(n,s);if(a.indexOf(x)<0)a.push(x);});return a;}
function fretDiagram(name){
 var inst=state.settings.instrument,f=shapeLookup(name),fi=FINGERS[inst]&&FINGERS[inst][name];
 if(!fi)fi=generatedFingers(name);
 if(!fi){
  var m=String(name).match(/^([A-G](?:#|b)?)(.*)$/),i=m?pitchIndex(m[1]):-1;
  if(m&&i>=0){
   var aliases=[NOTES[i],DISPLAY_NOTES[i]];
   var extra={"C#":"Db","D#":"Eb","F#":"Gb","G#":"Ab","A#":"Bb"}[NOTES[i]];
   if(extra)aliases.push(extra);
   for(var ai=0;ai<aliases.length&&!fi;ai++)fi=FINGERS[inst]&&FINGERS[inst][aliases[ai]+m[2]];
  }
 }
 if(!f)return '<div class="fretMissing">No diagram yet</div>';
 var strings=f.length,frets=4,w=58+strings*11,h=82,ox=25,top=22,bottom=70,step=(bottom-top)/frets;
 var svg='<svg class="fretSvg" viewBox="0 0 '+w+' '+h+'" aria-label="'+esc(name)+' chord diagram">';
 for(var i=0;i<strings;i++){var x=ox+i*11;svg+='<line x1="'+x+'" y1="'+top+'" x2="'+x+'" y2="'+bottom+'" class="stringLine"/>';}
 for(var r=0;r<=frets;r++){var y=top+r*step;svg+='<line x1="'+(ox-3)+'" y1="'+y+'" x2="'+(ox+(strings-1)*11+3)+'" y2="'+y+'" class="'+(r===0?"nutLine":"fretLine")+'"/>';}
 for(var j=0;j<strings;j++){
  var v=f[j],x2=ox+j*11;
  if(v===null){svg+='<text x="'+x2+'" y="13" text-anchor="middle" class="muteMark">×</text>';continue;}
  if(v===0){svg+='<circle cx="'+x2+'" cy="12" r="3.5" class="openDot"/>';continue;}
  var y2=top+(v-.5)*step,fn=(fi&&fi[j])||"";
  svg+='<circle cx="'+x2+'" cy="'+y2+'" r="5" class="fingerDot"/><text x="'+x2+'" y="'+(y2+2.7)+'" text-anchor="middle" class="fingerNum">'+esc(fn)+'</text>';
 }
 svg+='</svg>';
 return svg;
}
function show(view){
 document.querySelectorAll(".view").forEach(function(x){x.classList.add("hidden");});
 var id={library:"libraryView",song:"songView",sets:"setsView",setEditor:"setEditorView",performance:"performanceView",import:"importView"}[view];
 if(id)document.getElementById(id).classList.remove("hidden");
 document.querySelectorAll(".navbtn").forEach(function(b){b.classList.toggle("active",b.getAttribute("data-view")===view);});
 document.getElementById("back").classList.toggle("hidden",view==="library"||view==="sets"||view==="import");
 var topNav=document.getElementById("topNav");
 if(topNav)topNav.classList.toggle("hidden",view==="song");
}
function render(){
 show(state.session.view);
 var headerBrand=document.getElementById("headerBrand");
 if(headerBrand){
  if(state.session.view==="song"){
   var brandSong=currentSong();
   headerBrand.textContent=brandSong&&brandSong.title?brandSong.title:"Your Songbook";
  }else{
   headerBrand.textContent="Your Songbook";
  }
 }
 var headerAuto=document.getElementById("headerAutoScroll");
 if(headerAuto)headerAuto.classList.toggle("hidden",state.session.view!=="song"||state.session.edit);
 var headerChords=document.getElementById("headerChordBar");
 if(headerChords)headerChords.classList.toggle("hidden",state.session.view!=="song"||state.session.edit);
 if(state.session.view==="library")renderLibrary();
 if(state.session.view==="song")renderSong();
 if(state.session.view==="sets")renderSets();
 if(state.session.view==="setEditor")renderSetEditor();
 if(state.session.view==="performance")renderPerformance();
 if(state.session.view==="import")renderImport();
}
function renderLibrary(){
 var q=(document.getElementById("search").value||"").toLowerCase();
 var arr=Object.values(state.songs).filter(function(s){return (s.title+" "+s.artist+" "+s.genre+" "+s.moods.join(" ")).toLowerCase().indexOf(q)>=0;});
 var html="";
 arr.forEach(function(s){var tags=s.moods.map(function(m){return '<span class="tag">'+esc(m)+'</span>';}).join("");html+='<div class="songRow"><div class="songInfo"><button data-open="'+esc(s.id)+'"><div class="songName">'+esc(s.title)+'</div><div class="songMeta">'+esc(s.artist)+' · Key of '+esc(transpose(s.key,state.settings.shift))+' · '+Math.round(s.duration/60)+' min</div><div class="tags">'+tags+'</div></button></div><button class="btn" data-edit="'+esc(s.id)+'">Edit</button></div>';});
 document.getElementById("libraryList").innerHTML=html||'<div class="empty">No songs found.</div>';
 document.querySelectorAll("[data-open]").forEach(function(b){b.onclick=function(){openSong(b.getAttribute("data-open"),false);};});
 document.querySelectorAll("[data-edit]").forEach(function(b){b.onclick=function(){openSong(b.getAttribute("data-edit"),true);};});
}
function openSong(id,edit){
 state.session.songId=id;state.session.view="song";state.session.edit=!!edit;state.session.draft=edit?clone(state.songs[id]):null;state.session.draftNew=false;save();render();
}
function openNewSong(){
 window.__songUndo=[];
 var d={id:null,title:"New Song",artist:"",key:"C",genre:"",moods:[],duration:180,source:{type:"Manual"},sections:[{name:"Verse",lines:[line("Add your lyrics here", [c("C",0)])]}]};
 state.session.songId=null;state.session.view="song";state.session.edit=true;state.session.draft=d;state.session.draftNew=true;render();
}
function renderSong(){
 stopAutoScroll();
 var s=currentSong();if(!s){state.session.view="library";return render();}
 document.getElementById("songTitle").textContent=s.title||"Untitled Song";
 document.getElementById("songMeta").textContent=s.artist||"New song";
 document.getElementById("songDetails").textContent="Key of "+transpose(s.key,state.settings.shift)+" · "+(s.genre||"Genre not set")+" · "+(s.moods||[]).join(" · ")+(s.duration?" · "+Math.round(s.duration/60)+" min":"");
 document.getElementById("instrument").value=state.settings.instrument;
 document.getElementById("viewMode").value=state.settings.view;
 syncAutoScrollControl();
 document.getElementById("pinToggle").textContent=state.settings.pin?"📌 Chord bar on":"📌 Chord bar off";
 var key=document.getElementById("key");key.innerHTML=DISPLAY_NOTES.map(function(n){return '<option value="'+n+'">'+n+"</option>";}).join("");key.value=transpose(s.key,state.settings.shift);
 var transposeKey=document.getElementById("transposeKeyLabel");if(transposeKey)transposeKey.textContent=transpose(s.key,state.settings.shift);
 var actions=document.querySelector(".titleActions");
 if(state.session.edit){
  actions.innerHTML='';
 }else{
  actions.innerHTML='<button id="songEdit" class="primary">Edit</button><button id="songMenu" class="btn">⋯</button>';
  document.getElementById("songEdit").onclick=function(){beginEdit();};
  document.getElementById("songMenu").onclick=deleteSongMenu;
 }
 renderChords(s);renderLyrics(s);
}
function renderChords(s){
 var el=document.getElementById("chords");
 var header=document.getElementById("headerChordBar");
 var names=effectiveChordNames(s);
 var items=names.map(function(n){
  var x=transpose(effectiveChordName(n,s),state.settings.shift);
  return '<div class="chordbox"><div class="chordname">'+esc(x)+'</div><div class="diagram">'+fretDiagram(x)+'</div></div>';
 }).join("");

 el.innerHTML=items;

 if(header){
  header.innerHTML=names.map(function(n){
   var x=transpose(n,state.settings.shift);
   return '<div class="headerChordItem" title="'+esc(x)+'"><div class="headerChordName">'+esc(x)+'</div><div class="headerChordDiagram">'+fretDiagram(x)+'</div></div>';
  }).join("");
  header.classList.toggle("hidden",!state.settings.pin||state.session.view!=="song"||state.session.edit);
 }

 el.classList.toggle("hidden",!!state.settings.pin);
 el.style.position="static";
 el.style.top="";
}
function displayLine(l,s){
 var text=l.text||"", chords=(l.chords||[]).slice().sort(function(a,b){return (Number(a.pos)||0)-(Number(b.pos)||0);});
 var h='<div class="songLine"><div class="lineWords'+(!text&&chords.length?' chordOnlyLine':'')+'">';
 if(!text){
  chords.forEach(function(ch){h+='<span class="displayChord">'+esc(transpose(effectiveChordName(ch.name,s),state.settings.shift))+'</span>';});
  return h+'</div></div>';
 }
 var words=[],m;
 var re=/\S+/g;
 while((m=re.exec(text)))words.push({text:m[0],start:m.index,end:re.lastIndex});
 var chordByWord=words.map(function(){return[];});
 chords.forEach(function(ch){
  var p=Math.max(0,Math.min(text.length,Number(ch.pos)||0));
  if(!words.length)return;
  var best=0,bestDist=Infinity;
  words.forEach(function(w,i){
   var d=Math.abs(w.start-p);
   if(d<bestDist){bestDist=d;best=i;}
  });
  chordByWord[best].push(ch);
 });
 var cursor=0;
 words.forEach(function(w,i){
  h+=esc(text.slice(cursor,w.start));
  h+='<span class="displayWordCell">';
  h+='<span class="displayChordStack">';
  chordByWord[i].forEach(function(ch){h+='<span class="displayChord">'+esc(transpose(effectiveChordName(ch.name,s),state.settings.shift))+'</span>';});
  h+='</span><span class="displayWord">'+esc(w.text)+'</span></span>';
  cursor=w.end;
 });
 h+=esc(text.slice(cursor));
 return h+'</div></div>';
}
function renderLyrics(s){
 var el=document.getElementById("lyrics");el.className="card lyrics"+(state.settings.view==="page"?" page":"");
 if(state.session.edit){renderFreeEditor(el,s);}else{var out="";s.sections.forEach(function(sec){out+='<section class="section"><h3>'+esc(sec.name)+"</h3>";sec.lines.forEach(function(l){out+=displayLine(l,s);});out+="</section>";});el.innerHTML=out;}
}
function renderFreeEditor(el,s){
 var h='<div class="wordEditToolbar"><span>Edit the song directly. Chords are editable text too. Select, copy, cut, paste, press Return, or drag a chord.</span><div class="wordEditActions"><button id="undoEditBtn" class="btn" disabled>↶ Undo</button><button id="restoreOriginal" class="btn">Restore Original</button><button id="saveLibrary" class="primary">Save Changes</button><button id="saveCopy" class="btn">Save a Copy</button><button id="cancelEdit" class="btn">Cancel</button><button id="songMenu" class="btn">Delete</button></div></div>';
 h+='<div class="chordSubPanel"><div class="editSubTitle">Chord substitutions</div><div class="muted">Change a chord throughout this song only. Example: F#m → F#m7.</div><div class="chordSubRow"><input id="subFrom" class="chordSubInput" placeholder="Original chord (e.g. F#m)"><span>→</span><input id="subTo" class="chordSubInput" placeholder="Replacement (e.g. F#m7)"><button id="applySubstitution" class="btn">Apply</button></div><div id="substitutionList" class="substitutionList"></div></div>';
 h+='<div class="songDocument" contenteditable="true" spellcheck="true">';
 s.sections.forEach(function(sec,si){
  h+='<div class="docSection" data-si="'+si+'"><div class="docSectionHeading" data-heading="1">'+esc(sec.name)+'</div>';
  sec.lines.forEach(function(l,li){h+=renderDocLine(l,si,li,s);});
  h+='</div>';
 });
 h+='</div>';
 el.innerHTML=h;
 bindWordDocument();
 renderSubstitutions(s);
 bindEditActions();
 var undoBtn=document.getElementById("undoEditBtn");
 if(undoBtn)undoBtn.onclick=function(e){
  e.preventDefault();
  undoSongEdit(document.querySelector(".songDocument"));
 };
 updateUndoButton();
}
function renderDocLine(l,si,li,s){
 var text=normalizeSongText(l.text||""), chords=(l.chords||[]).slice().sort(function(a,b){return (Number(a.pos)||0)-(Number(b.pos)||0);});
 var h='<div class="docLine'+(!text&&chords.length?' chordOnlyLine':'')+'" data-li="'+li+'">';
 var cursor=0;
 chords.forEach(function(ch){
  var p=Math.max(0,Math.min(text.length,Number(ch.pos)||0));
  h+=esc(text.slice(cursor,p));
  h+='<span class="docChord" contenteditable="true" spellcheck="false" data-chord="1">'+esc(transpose(effectiveChordName(ch.name,s),state.settings.shift))+'</span>';
  cursor=p;
 });
 h+=esc(text.slice(cursor));
 if(!text&&!(l.chords||[]).length)h+='<br>';
 return h+'</div>';
}
function normalizeSongText(v){return String(v||"").replace(/\r/g,"");}
function pushSongUndo(doc,beforeSnapshot,afterSnapshot){
 if(!doc||window.__restoringUndo||!beforeSnapshot||!afterSnapshot)return;
 if(beforeSnapshot===afterSnapshot)return;
 var stack=window.__songUndo||[];
 stack.push({before:beforeSnapshot,after:afterSnapshot});
 if(stack.length>50)stack.shift();
 window.__songUndo=stack;
 updateUndoButton();
}
function undoSongEdit(doc){
 var stack=window.__songUndo||[];
 if(!stack.length)return;
 var action=stack.pop();
 if(!action||!action.before)return;
 try{
  window.__restoringUndo=true;
  currentSong().sections=JSON.parse(action.before);
  renderSong();
 }finally{
  window.__restoringUndo=false;
 }
 updateUndoButton();
}
function updateUndoButton(){
 var b=document.getElementById("undoEditBtn");if(b)b.disabled=!(window.__songUndo&&window.__songUndo.length);
}
function bindPastedChords(doc){
 doc.querySelectorAll(".docChord").forEach(function(chip){bindDocChord(chip,doc);});
}
function onDocChordMove(e){
 var d=window.__docChordDrag;if(!d)return;
 if(Math.hypot(e.clientX-d.startX,e.clientY-d.startY)>5){
  d.moved=true;
  e.preventDefault();
  d.chip.classList.remove("docChordPending");
  d.chip.classList.add("dragging");
  d.chip.style.transform="translate("+(e.clientX-d.startX)+"px,"+(e.clientY-d.startY)+"px)";
 }
}
function onDocChordUp(e){
 var d=window.__docChordDrag;if(!d)return;
 window.removeEventListener("pointermove",onDocChordMove);
 d.chip.classList.remove("docChordPending","dragging");
 d.chip.style.transform="";
 window.__docChordDrag=null;
 if(!d.moved)return;
 var doc=d.chip.closest(".songDocument"),range=caretRangeIn(doc,e.clientX,e.clientY);if(!range)return;
 if(range.startContainer===d.chip||d.chip.contains(range.startContainer))return;
 // Complete the move first, then record this one move as a single
 // undo action containing both its before and after states.
 d.chip.remove();
 insertNodeAtRange(range,d.chip);
 syncWordDocument(doc);
 var afterSnapshot=JSON.stringify(currentSong().sections);
 pushSongUndo(doc,d.beforeSnapshot,afterSnapshot);
}
function insertNodeAtRange(range,node){
 var r=range.cloneRange();r.collapse(true);
 if(r.startContainer.nodeType===3){
  var t=r.startContainer,off=r.startOffset,parent=t.parentNode;
  if(off===t.nodeValue.length)parent.appendChild(node);
  else if(off===0)parent.insertBefore(node,t);
  else{var right=t.splitText(off);right.parentNode.insertBefore(node,right);}
 }else{
  var parent=r.startContainer,ref=parent.childNodes[r.startOffset]||null;
  parent.insertBefore(node,ref);
 }
}
function caretRangeIn(root,x,y){
 var lines=Array.from(root.querySelectorAll(".docLine"));
 var best=null,bestDist=Infinity;

 function considerWord(node,start,end){
  var rr=document.createRange();
  rr.setStart(node,start);
  rr.setEnd(node,end);
  var rects=Array.from(rr.getClientRects());
  if(!rects.length)return;
  var rect=rects[0];
  var cx=Math.max(rect.left,Math.min(rect.right,x));
  var cy=Math.max(rect.top,Math.min(rect.bottom,y));
  var d=Math.hypot(x-cx,y-cy);
  if(d<bestDist){
   bestDist=d;
   best={node:node,offset:start};
  }
 }

 lines.forEach(function(line){
  var walker=document.createTreeWalker(line,NodeFilter.SHOW_TEXT,{
   acceptNode:function(node){
    return node.parentElement&&node.parentElement.closest(".docChord")
      ?NodeFilter.FILTER_REJECT
      :NodeFilter.FILTER_ACCEPT;
   }
  });
  var node;
  while(node=walker.nextNode()){
   var value=node.nodeValue||"",m,re=/\S+/g;
   while((m=re.exec(value)))considerWord(node,m.index,re.lastIndex);
  }
 });

 if(best){
  var r=document.createRange();
  r.setStart(best.node,best.offset);
  r.collapse(true);
  return r;
 }

 // Fallback for empty/chord-only lines or browsers without usable word rects.
 var r=null;
 if(document.caretPositionFromPoint){
  var p=document.caretPositionFromPoint(x,y);
  if(p){r=document.createRange();r.setStart(p.offsetNode,p.offset);r.collapse(true);}
 }
 if(!r&&document.caretRangeFromPoint)r=document.caretRangeFromPoint(x,y);
 if(!r||!root.contains(r.startContainer))return null;
 var chord=r.startContainer.nodeType===1?r.startContainer.closest&&r.startContainer.closest(".docChord"):r.startContainer.parentElement&&r.startContainer.parentElement.closest&&r.startContainer.parentElement.closest(".docChord");
 if(chord){var rr=document.createRange();rr.selectNode(chord);rr.collapse(false);return rr;}
 return r;
}
function currentLineFromSelection(doc){
 var sel=window.getSelection();if(!sel||!sel.rangeCount)return null;
 var n=sel.getRangeAt(0).startContainer;
 return n.nodeType===1?n.closest&&n.closest(".docLine"):n.parentElement&&n.parentElement.closest(".docLine");
}
function splitDocLine(doc){
 var before=JSON.stringify(currentSong().sections);
 var sel=window.getSelection();if(!sel||!sel.rangeCount)return;
 var r=sel.getRangeAt(0);
 var line=currentLineFromSelection(doc);if(!line)return;
 if(!sel.isCollapsed){r.deleteContents();sel.collapseToStart();r=sel.getRangeAt(0);}
 var after=document.createRange();after.selectNodeContents(line);after.setStart(r.startContainer,r.startOffset);
 var frag=after.extractContents();
 var newLine=document.createElement("div");newLine.className="docLine";
 while(frag.firstChild)newLine.appendChild(frag.firstChild);
 if(!newLine.childNodes.length)newLine.innerHTML="<br>";
 line.parentNode.insertBefore(newLine,line.nextSibling);
 placeCaretAtStart(newLine);
 syncWordDocument(doc);
 pushSongUndo(doc,before,JSON.stringify(currentSong().sections));
}
function placeCaretAtStart(el){
 var node=el.firstChild;
 if(!node){node=document.createTextNode("");el.appendChild(node);}
 var r=document.createRange();r.setStart(node,0);r.collapse(true);
 var sel=window.getSelection();sel.removeAllRanges();sel.addRange(r);el.closest(".songDocument").focus();
}
function isCaretAtStart(line){
 var sel=window.getSelection();if(!sel||!sel.rangeCount||!sel.isCollapsed)return false;
 var r=sel.getRangeAt(0);if(!line.contains(r.startContainer))return false;
 var before=document.createRange();before.selectNodeContents(line);before.setEnd(r.startContainer,r.startOffset);
 return before.toString().length===0;
}
function isCaretAtEnd(line){
 var sel=window.getSelection();if(!sel||!sel.rangeCount||!sel.isCollapsed)return false;
 var r=sel.getRangeAt(0);if(!line.contains(r.startContainer))return false;
 var after=document.createRange();after.selectNodeContents(line);after.setStart(r.startContainer,r.startOffset);
 return after.toString().length===0;
}
function mergePreviousIfAtStart(doc){
 var line=currentLineFromSelection(doc);if(!line||!isCaretAtStart(line))return false;
 var prev=line.previousElementSibling;if(!prev||!prev.classList.contains("docLine"))return false;
 var caret=document.createRange();caret.selectNodeContents(prev);caret.collapse(false);
 while(line.firstChild)prev.appendChild(line.firstChild);
 line.remove();
 var sel=window.getSelection();sel.removeAllRanges();sel.addRange(caret);doc.focus();syncWordDocument(doc);return true;
}
function mergeNextIfAtEnd(doc){
 var line=currentLineFromSelection(doc);if(!line||!isCaretAtEnd(line))return false;
 var next=line.nextElementSibling;if(!next||!next.classList.contains("docLine"))return false;
 var caret=document.createRange();caret.selectNodeContents(line);caret.collapse(false);
 while(next.firstChild)line.appendChild(next.firstChild);
 next.remove();
 var sel=window.getSelection();sel.removeAllRanges();sel.addRange(caret);doc.focus();syncWordDocument(doc);return true;
}
function bindWordDocument(){
 var doc=document.querySelector(".songDocument");
 if(!doc)return;
 bindPastedChords(doc);

 // Native contenteditable changes (typing, deleting, paste, cut, line
 // changes, heading edits, etc.) each become one undo action.
 doc.addEventListener("beforeinput",function(){
  if(window.__restoringUndo)return;
  window.__editorInputBefore=JSON.stringify(currentSong().sections);
 });
 doc.addEventListener("input",function(){
  if(window.__restoringUndo)return;
  var before=window.__editorInputBefore||JSON.stringify(currentSong().sections);
  window.__editorInputBefore=null;
  syncWordDocument(doc);
  var after=JSON.stringify(currentSong().sections);
  pushSongUndo(doc,before,after);
 });

 var undoBtn=document.getElementById("undoEditBtn");
 if(undoBtn)undoBtn.onclick=function(e){
  e.preventDefault();
  undoSongEdit(doc);
 };
 updateUndoButton();
}
function bindDocChord(chip,doc){
 chip.contentEditable="true";chip.spellcheck=false;
 chip.addEventListener("pointerdown",function(e){
  if(e.button!==0)return;
  // Capture exactly the state immediately before this drag.
  // Sync first so the snapshot reflects any previous chord move.
  syncWordDocument(doc);
  window.__docChordDrag={
   chip:chip,
   doc:doc,
   startX:e.clientX,
   startY:e.clientY,
   moved:false,
   beforeSnapshot:JSON.stringify(currentSong().sections)
  };
  chip.classList.add("docChordPending");
  window.addEventListener("pointermove",onDocChordMove);
  window.addEventListener("pointerup",onDocChordUp,{once:true});
 });
 chip.addEventListener("keydown",function(e){
  if(e.key==="Enter"){e.preventDefault();e.stopPropagation();placeCaretAtEnd(chip);return;}
  if(e.ctrlKey||e.metaKey||e.altKey)return;
  var sel=window.getSelection(),r=sel&&sel.rangeCount?sel.getRangeAt(0):null;
  if(!r||!chip.contains(r.startContainer))return;

  if(e.key==="Backspace"||e.key==="Delete"){
   e.preventDefault();e.stopPropagation();
   var start=0,end=0;
   if(!r.collapsed){
    var rr=r.cloneRange();rr.setStart(chip,0);start=rr.toString().length;
    end=start+r.toString().length;
   }else{
    start=r.startContainer.nodeType===3?r.startOffset:0;
    end=start;
    if(e.key==="Backspace"){if(start===0)return;start--;}
    else{if(start>=chip.textContent.length)return;end++;}
   }
   var before=JSON.stringify(currentSong().sections);
   var value=chip.textContent;
   chip.textContent=value.slice(0,start)+value.slice(end);
   placeCaretAtOffset(chip,start);
   syncWordDocument(doc);
   pushSongUndo(doc,before,JSON.stringify(currentSong().sections));
   return;
  }

  // Handle ordinary character entry ourselves so the caret cannot fall through
  // the nested contenteditable into the lyric text.
  if(e.key.length===1){
   e.preventDefault();e.stopPropagation();
   var pos=r.collapsed?(r.startContainer.nodeType===3?r.startOffset:0):0;
   var del=r.collapsed?0:r.toString().length;
   var before=JSON.stringify(currentSong().sections);
   var value=chip.textContent;
   chip.textContent=value.slice(0,pos)+e.key+value.slice(pos+del);
   placeCaretAtOffset(chip,pos+e.key.length);
   syncWordDocument(doc);
   pushSongUndo(doc,before,JSON.stringify(currentSong().sections));
  }
 });
}
function placeCaretAtEnd(el){
 var r=document.createRange();r.selectNodeContents(el);r.collapse(false);
 var sel=window.getSelection();sel.removeAllRanges();sel.addRange(r);el.focus();
}
function placeCaretAtOffset(el,offset){
 var n=el.firstChild||el.appendChild(document.createTextNode(""));
 var r=document.createRange();r.setStart(n,Math.min(offset,n.nodeValue.length));r.collapse(true);
 var sel=window.getSelection();sel.removeAllRanges();sel.addRange(r);el.focus();
}
function insertChordAtCaret(doc){
 var before=JSON.stringify(currentSong().sections);
 var sel=window.getSelection(),range;
 if(sel&&sel.rangeCount&&doc.contains(sel.getRangeAt(0).startContainer))range=sel.getRangeAt(0).cloneRange();
 else{
  var line=doc.querySelector(".docLine");if(!line)return;
  range=document.createRange();range.selectNodeContents(line);range.collapse(true);
 }
 if(!range.collapsed){range.deleteContents();range.collapse(true);}
 var chord=document.createElement("span");chord.className="docChord";chord.contentEditable="true";chord.spellcheck=false;chord.dataset.chord="1";chord.textContent="C";
 insertNodeAtRange(range,chord);bindDocChord(chord,doc);
 var rr=document.createRange();rr.selectNodeContents(chord);var s=window.getSelection();s.removeAllRanges();s.addRange(rr);doc.focus();
 syncWordDocument(doc);
 pushSongUndo(doc,before,JSON.stringify(currentSong().sections));
}
function sanitizePastedDoc(doc){
 doc.querySelectorAll(".docLine").forEach(function(line){
  line.querySelectorAll(".docChord").forEach(function(ch){
   if(!ch.textContent.trim())ch.remove();
   else ch.textContent=ch.textContent.trim();
  });
 });
}
function syncWordDocument(doc){
 var s=currentSong();if(!s)return;
 var sections=[];
 Array.from(doc.querySelectorAll(":scope > .docSection")).forEach(function(secEl,si){
  var name=(secEl.querySelector(":scope > .docSectionHeading")||{}).textContent||"";
  var lines=[];
  Array.from(secEl.querySelectorAll(":scope > .docLine")).forEach(function(lineEl){
   var text="",chords=[];
   Array.from(lineEl.childNodes).forEach(function(n){
    if(n.nodeType===1&&n.classList.contains("docChord")){
     var nm=n.textContent.trim();if(nm)chords.push({name:nm,pos:text.length});
    }else{text+=n.nodeType===3?n.nodeValue:(n.textContent||"");}
   });
   lines.push({text:normalizeSongText(text),chords:chords});
  });
  if(!lines.length)lines=[line("",[])];
  sections.push({name:normalizeSongText(name).trim()||"Verse",lines:lines});
 });
 if(sections.length)s.sections=sections;
}
function beginEdit(){
 window.__songUndo=[];
 var id=state.session.songId;state.session.edit=true;state.session.draft=clone(state.songs[id]);if(!state.session.draft.substitutions)state.session.draft.substitutions={};state.session.draftNew=false;render();
}
function renderSubstitutions(s){
 var list=document.getElementById("substitutionList");if(!list)return;
 var keys=Object.keys(s.substitutions||{});
 list.innerHTML=keys.length?keys.map(function(k){return '<div class="substitutionItem"><span>'+esc(k)+' → '+esc(s.substitutions[k])+'</span><button class="btn" data-remove-sub="'+esc(k)+'">Remove</button></div>';}).join(""):'<span class="muted">No song-specific substitutions yet.</span>';
 list.querySelectorAll("[data-remove-sub]").forEach(function(b){b.onclick=function(){var k=b.getAttribute("data-remove-sub"),before=JSON.stringify(s.sections);delete s.substitutions[k];pushSongUndo(document.querySelector(".songDocument"),before,JSON.stringify(s.sections));renderSong();};});
 var apply=document.getElementById("applySubstitution");
 if(apply)apply.onclick=function(){var from=(document.getElementById("subFrom").value||"").trim(),to=(document.getElementById("subTo").value||"").trim();if(!from||!to||from===to)return;var before=JSON.stringify(s.sections);s.substitutions[from]=to;pushSongUndo(document.querySelector(".songDocument"),before,JSON.stringify(s.sections));document.getElementById("subFrom").value="";document.getElementById("subTo").value="";renderSong();};
}
function saveLibrary(){
 var d=state.session.draft;if(!d)return;
 if(!d.title.trim()){alert("Please give the song a title before saving.");return;}
 if(!d.substitutions)d.substitutions={};
 if(state.session.draftNew){d.id=uid("song");state.songs[d.id]=clone(d);state.session.songId=d.id;state.session.draftNew=false;}else{state.songs[d.id]=clone(d);}
 state.session.draft=null;state.session.edit=false;window.__songUndo=[];save();render();
}
function saveCopy(){
 var d=state.session.draft;if(!d)return;
 if(!d.title.trim()){alert("Please give the song a title before saving.");return;}
 var name=prompt("Name this copy:",d.title);
 if(name===null)return;
 name=name.trim();
 if(!name){alert("Please enter a name for the copy.");return;}
 var copy=clone(d);copy.id=uid("song");copy.title=name;if(!copy.substitutions)copy.substitutions={};
 state.songs[copy.id]=copy;state.session.songId=copy.id;state.session.draft=null;state.session.edit=false;state.session.draftNew=false;window.__songUndo=[];save();render();
}
function cancelEdit(){
 if(state.session.draftNew){state.session.draft=null;state.session.edit=false;window.__songUndo=[];state.session.songId=null;state.session.view="library";render();return;}
 if(!confirm("Discard the changes you made to this song?"))return;
 state.session.draft=null;state.session.edit=false;window.__songUndo=[];render();
}
function restoreOriginal(){
 if(state.session.draftNew)return;
 if(!confirm("Return this song to its original version? Your saved library edits will be replaced by the original song. This cannot be undone."))return;
 var original=makeSong();
 if(state.session.songId==="hallelujah"){state.session.draft=clone(original);}
 else{state.session.draft=clone(state.songs[state.session.songId]);alert("This song does not have an imported original version stored yet.");}
 render();
}
function deleteSongMenu(){
 var s=state.songs[state.session.songId];if(!s)return;
 if(confirm("Delete \""+s.title+"\" from your library? This cannot be undone.")){delete state.songs[s.id];Object.values(state.sets).forEach(function(set){set.songIds=set.songIds.filter(function(id){return id!==s.id;});});state.session.songId=null;state.session.view="library";save();render();}
}
function bindEditActions(){
 var a=document.getElementById("saveLibrary");if(a)a.onclick=saveLibrary;
 var c=document.getElementById("saveCopy");if(c)c.onclick=saveCopy;
 var x=document.getElementById("cancelEdit");if(x)x.onclick=cancelEdit;
 var m=document.getElementById("songMenu");if(m)m.onclick=deleteSongMenu;
 var r=document.getElementById("restoreOriginal");if(r)r.onclick=restoreOriginal;
}
function renderSets(){
 var h="";Object.values(state.sets).forEach(function(set){var seconds=set.songIds.reduce(function(a,id){return a+(state.songs[id]?state.songs[id].duration:0);},0);h+='<div class="card setCard"><h2>'+esc(set.name)+'</h2><p class="muted">'+set.songIds.length+" songs · "+Math.round(seconds/60)+' min</p><button class="primary" data-set-open="'+set.id+'">Open set</button></div>';});
 document.getElementById("setsList").innerHTML=h||'<div class="card empty">No setlists yet. Create one to start arranging songs.</div>';
 document.querySelectorAll("[data-set-open]").forEach(function(b){b.onclick=function(){openSet(b.getAttribute("data-set-open"));};});
}
function openSet(id){state.session.view="setEditor";state.session.setId=id;save();render();}
function renderSetEditor(){
 var set=state.sets[state.session.setId];if(!set){state.session.view="sets";return render();}
 var seconds=set.songIds.reduce(function(a,id){return a+(state.songs[id]?state.songs[id].duration:0);},0);
 document.getElementById("setTitle").textContent=set.name;document.getElementById("setSummary").textContent=set.songIds.length+" songs · "+Math.round(seconds/60)+" min";
 var q=(document.getElementById("setSearch").value||"").toLowerCase(),lib="";
 Object.values(state.songs).forEach(function(s){if((s.title+" "+s.artist).toLowerCase().indexOf(q)<0)return;lib+='<div class="checkRow"><button class="btn" data-add-set="'+s.id+'">'+(set.songIds.indexOf(s.id)>=0?"✓ Added":"+ Add")+'</button><span><b>'+esc(s.title)+'</b><br><span class="muted">'+esc(s.artist)+'</span></span></div>';});
 document.getElementById("setLibrary").innerHTML=lib;
 var order="";set.songIds.forEach(function(id,i){var s=state.songs[id];if(s)order+='<div class="setSongRow" draggable="true" data-order="'+i+'"><span class="drag">☷</span><span><b>'+esc(s.title)+'</b><br><span class="muted">'+Math.round(s.duration/60)+' min</span></span><button class="remove" data-remove-set="'+id+'">×</button></div>';});
 document.getElementById("setSongs").innerHTML=order||'<div class="empty">Add songs above.</div>';bindSet();
}
function bindSet(){
 document.querySelectorAll("[data-add-set]").forEach(function(b){b.onclick=function(){var set=state.sets[state.session.setId],id=b.getAttribute("data-add-set");if(set.songIds.indexOf(id)<0)set.songIds.push(id);save();renderSetEditor();};});
 document.querySelectorAll("[data-remove-set]").forEach(function(b){b.onclick=function(){var set=state.sets[state.session.setId],id=b.getAttribute("data-remove-set");set.songIds=set.songIds.filter(function(x){return x!==id;});save();renderSetEditor();};});
 var dragged=null;document.querySelectorAll("[data-order]").forEach(function(row){row.ondragstart=function(){dragged=Number(row.getAttribute("data-order"));};row.ondragover=function(e){e.preventDefault();};row.ondrop=function(){var set=state.sets[state.session.setId],target=Number(row.getAttribute("data-order")),x=set.songIds.splice(dragged,1)[0];set.songIds.splice(target,0,x);save();renderSetEditor();};});
}
function renderPerformance(){
 var set=state.sets[state.session.setId];if(!set||!set.songIds.length){state.session.view="setEditor";return render();}
 var i=Math.max(0,Math.min(state.session.index,set.songIds.length-1));state.session.index=i;var s=state.songs[set.songIds[i]];
 document.getElementById("performanceCount").textContent=(i+1)+" / "+set.songIds.length;
 var html='<div class="card"><div class="eyebrow">'+esc(set.name)+'</div><h1>'+esc(s.title)+'</h1><p class="sub">'+esc(s.artist)+' · Key of '+esc(transpose(s.key,state.settings.shift))+'</p></div><div class="card lyrics">';
 s.sections.forEach(function(sec){html+='<section class="section"><h3>'+esc(sec.name)+"</h3>";sec.lines.forEach(function(l){html+=displayLine(l);});html+="</section>";});
 document.getElementById("performanceSong").innerHTML=html+"</div>";
}
function renderImport(){
 var status=document.getElementById("importStatus");
 if(status)status.textContent=state.pendingFile?"Attached: "+state.pendingFile.name:"";
}
function loadExternalScript(src,test){
 return new Promise(function(resolve,reject){
  if(test())return resolve();
  var existing=document.querySelector('script[data-external-src="'+src+'"]');
  if(existing){existing.addEventListener("load",function(){test()?resolve():reject(new Error("Library did not load."));});existing.addEventListener("error",reject);return;}
  var script=document.createElement("script");script.src=src;script.async=true;script.setAttribute("data-external-src",src);
  script.onload=function(){test()?resolve():reject(new Error("Library did not load."));};
  script.onerror=function(){reject(new Error("Could not load import library."));};
  document.head.appendChild(script);
 });
}
function importTitleFromName(name){
 return String(name||"Imported Song").replace(/\.[^.]+$/,"").replace(/[_-]+/g," ").replace(/\s+/g," ").trim()||"Imported Song";
}
function pdfItemsToLines(items){
 var rows=[];
 items.filter(function(x){return x&&String(x.str||"").trim();}).forEach(function(x){
  var y=Number(x.transform&&x.transform[5]||0),xpos=Number(x.transform&&x.transform[4]||0),text=String(x.str||"").trim(),row=null;
  for(var i=0;i<rows.length;i++){if(Math.abs(rows[i].y-y)<=3){row=rows[i];break;}}
  if(!row){row={y:y,items:[]};rows.push(row);}
  row.items.push({x:xpos,text:text});
 });
 rows.sort(function(a,b){return b.y-a.y;});
 return rows.map(function(row){row.items.sort(function(a,b){return a.x-b.x;});return row.items.map(function(x){return x.text;}).join(" ");}).join("\n");
}
async function loadPdfText(file){
 await loadExternalScript("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",function(){return !!window.pdfjsLib;});
 window.pdfjsLib.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
 var pdf=await window.pdfjsLib.getDocument({data:new Uint8Array(await file.arrayBuffer())}).promise,pages=[];
 for(var i=1;i<=pdf.numPages;i++){
  var page=await pdf.getPage(i),content=await page.getTextContent();
  pages.push(pdfItemsToLines(content.items));
 }
 return pages.join("\n\n").trim();
}
function pdfTextLooksUsable(raw){
 var text=String(raw||"").trim();if(!text)return false;
 var replacement=(text.match(/�/g)||[]).length;
 var bad=(text.match(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g)||[]).length;
 var letters=(text.match(/[A-Za-z0-9]/g)||[]).length;
 var symbols=(text.match(/[�□]/g)||[]).length;
 return replacement===0&&bad===0&&letters>=Math.max(20,Math.floor(text.length*.18))&&symbols<Math.max(3,Math.floor(text.length*.03));
}
async function loadOcrWorker(progress){
 await loadExternalScript("https://cdnjs.cloudflare.com/ajax/libs/tesseract.js/5.1.1/tesseract.min.js",function(){return !!window.Tesseract;});
 return window.Tesseract.createWorker("eng",1,{workerPath:"https://cdnjs.cloudflare.com/ajax/libs/tesseract.js/5.1.1/worker.min.js",logger:function(m){
  if(progress&&m&&m.status)progress(m.status+(m.progress!=null?" "+Math.round(m.progress*100)+"%":""));
 }});
}
async function ocrImage(file,progress){
 var worker=await loadOcrWorker(progress);
 try{var ret=await worker.recognize(file);return String(ret.data&&ret.data.text||"").trim();}
 finally{await worker.terminate();}
}
async function ocrPdf(file,progress){
 await loadExternalScript("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",function(){return !!window.pdfjsLib;});
 window.pdfjsLib.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
 var pdf=await window.pdfjsLib.getDocument({data:new Uint8Array(await file.arrayBuffer())}).promise,worker=await loadOcrWorker(progress),pages=[];
 try{
  for(var i=1;i<=pdf.numPages;i++){
   if(progress)progress("Reading PDF page "+i+" of "+pdf.numPages+"…");
   var page=await pdf.getPage(i),viewport=page.getViewport({scale:2}),canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");
   canvas.width=Math.ceil(viewport.width);canvas.height=Math.ceil(viewport.height);
   await page.render({canvasContext:ctx,viewport:viewport}).promise;
   var ret=await worker.recognize(canvas);pages.push(String(ret.data&&ret.data.text||"").trim());
  }
 }finally{await worker.terminate();}
 return pages.filter(Boolean).join("\n\n").trim();
}
function parseImport(raw){
 var sections=[{name:"Imported song",lines:[]}],current=sections[0];
 raw.split(/\r?\n/).forEach(function(rawLine){
  var lineText=rawLine.trim();if(!lineText)return;
  var heading=lineText.replace(/^\[|\]$/g,"").replace(/:$/,"").trim();
  if(/^(intro|verse(?:\s+\d+)?|chorus|bridge|outro|break|final chorus|pre-chorus|pre chorus)$/i.test(heading)){
   current={name:heading,lines:[]};sections.push(current);return;
  }
  var chords=[],re=/(^|\s)([A-G](?:#|b)?(?:m|maj7|m7|7|6|m6|sus2|sus4|dim|aug|9)?)(?=\s|$)/g,m,out="",cursor=0;
  while((m=re.exec(lineText))){
   out+=lineText.slice(cursor,m.index);
   chords.push({name:m[2],pos:out.replace(/\s+$/,"").length});
   cursor=m.index+m[0].length;
  }
  out+=lineText.slice(cursor);
  var leading=out.match(/^\s*/)[0].length,text=out.trim();
  chords=chords.map(function(ch){return {name:ch.name,pos:Math.max(0,Math.min(text.length,ch.pos-leading))};});
  current.lines.push({text:text,chords:chords});
 });
 return sections.filter(function(s){return s.lines.length;});
}
function inferredKey(raw){
 var m=String(raw||"").match(/(^|\s)([A-G](?:#|b)?)(?:m|maj7|m7|7|6|m6|sus2|sus4|dim|aug|9)?(?=\s|$)/);
 return m?m[2]:"C";
}
function renderImportReview(raw,source){
 var box=document.getElementById("importReview");if(!box)return;
 var sections=parseImport(raw),chords=0;sections.forEach(function(s){s.lines.forEach(function(l){chords+=l.chords.length;});});
 var title=source&&source.name?importTitleFromName(source.name):"Imported Song";
 if(source&&source.name&&/\s+by\s+/i.test(title))title=title.replace(/\s+by\s+.*/i,"").trim()||title;
 box.innerHTML='<h2>Review import</h2><p class="sub">Check the extracted text before turning it into an editable song. Chords found: <b>'+chords+'</b>.</p>'+
  '<div class="importMetaGrid"><label>Song title<input id="reviewTitle" value="'+esc(title)+'"></label><label>Artist<input id="reviewArtist" value="'+esc(source&&source.name&&/\s+by\s+/i.test(importTitleFromName(source.name))?importTitleFromName(source.name).replace(/^.*?\s+by\s+/i,"").trim():"")+'"></label><label>Key<select id="reviewKey">'+["C","C#","D","Eb","E","F","F#","G","Ab","A","Bb","B"].map(function(k){return '<option value="'+k+'">'+k+'</option>';}).join("")+'</select></label></div>'+
  '<label class="importSourceLabel">Extracted song text<textarea id="reviewText" class="bigText">'+esc(raw)+'</textarea></label>'+
  '<div class="importReviewActions"><button id="reviewBack" class="btn">Back</button><button id="createImportedSong" class="primary">Create editable song</button></div>'+
  '<p class="muted importSourceNote">Source: '+esc(source&&source.name||"Pasted text")+'</p>';
 document.getElementById("reviewKey").value=inferredKey(raw);
 document.getElementById("reviewBack").onclick=function(){box.classList.add("hidden");};
 document.getElementById("createImportedSong").onclick=function(){
  var text=(document.getElementById("reviewText").value||"").trim();if(!text){alert("There is no song text to import yet.");return;}
  var id=uid("song"),title=(document.getElementById("reviewTitle").value||"Imported Song").trim()||"Imported Song",artist=(document.getElementById("reviewArtist").value||"").trim(),sourceInfo=clone(source||{type:"Imported text"});
  sourceInfo.originalText=text;
  state.session.songId=null;state.session.view="song";state.session.edit=true;
  state.session.draft={id:id,title:title,artist:artist,key:document.getElementById("reviewKey").value||"C",genre:"",moods:[],duration:180,source:sourceInfo,sections:parseImport(text),substitutions:{}};
  state.session.draftNew=true;state.pendingFile=null;save();render();
 };
 box.classList.remove("hidden");box.scrollIntoView({behavior:"smooth",block:"start"});
}
async function reviewImport(){
 var fileInput=document.getElementById("importFile"),file=fileInput&&fileInput.files&&fileInput.files[0],pasted=(document.getElementById("importText").value||"").trim(),status=document.getElementById("importStatus"),box=document.getElementById("importReview");
 if(!file&&!pasted){alert("Choose a file or paste the song first.");return;}
 var source=file?{type:file.type==="application/pdf"?"PDF":file.type.indexOf("image/")===0?"Image":"Text",name:file.name,mimeType:file.type,size:file.size}:{type:"Imported text",name:"Pasted text"};
 try{
  if(status)status.textContent=file?"Reading "+file.name+"…":"Reading pasted song…";
  var raw=file?(file.type==="application/pdf"?await loadPdfText(file):file.type.indexOf("image/")===0?await ocrImage(file,function(msg){if(status)status.textContent="OCR: "+msg;}):await file.text()):pasted;
  if(file&&file.type==="application/pdf"&&!pdfTextLooksUsable(raw)){
   if(status)status.textContent="PDF text encoding looks unreadable. Switching to OCR…";
   raw=await ocrPdf(file,function(msg){if(status)status.textContent="OCR: "+msg;});
  }
  if(!String(raw||"").trim())throw new Error("No readable text was found in this source.");
  renderImportReview(raw,source);if(status)status.textContent="Ready to review: "+source.name;
 }catch(err){
  console.error(err);if(box)box.classList.add("hidden");if(status)status.textContent="Import could not be read.";
  alert("I couldn't read that source. You can try a clearer image/PDF or paste the song text instead.");
 }
}
function openLibrary(){
 if(state.session.edit&&!state.session.draftNew){cancelEdit();return;}
 state.session.draft=null;state.session.edit=false;state.session.songId=null;state.session.view="library";save();render();
}
document.querySelectorAll(".navbtn").forEach(function(b){b.onclick=function(){if(state.session.edit&&!confirm("Leave the editor without saving your changes?"))return;if(state.session.edit){state.session.draft=null;state.session.edit=false;}state.session.view=b.getAttribute("data-view");save();render();};});
document.getElementById("back").onclick=function(){if(state.session.edit){cancelEdit();}else{openLibrary();}};
document.getElementById("search").oninput=renderLibrary;
document.getElementById("instrument").onchange=function(e){state.settings.instrument=e.target.value;save();renderSong();};
document.getElementById("viewMode").onchange=function(e){state.settings.view=e.target.value;if(state.settings.view!=="scroll"){state.settings.autoScroll=0;}save();renderSong();startAutoScroll();};
document.getElementById("pinToggle").onclick=function(){state.settings.pin=!state.settings.pin;save();renderSong();};
document.querySelectorAll(".autoScrollChoice,.headerAutoChoice").forEach(function(b){b.onclick=function(){
 state.settings.autoScroll=Number(b.getAttribute("data-speed"))||0;
 save();syncAutoScrollControl();
 if(state.settings.autoScroll>0)startAutoScroll();else stopAutoScroll();
};});
document.getElementById("up").onclick=function(){state.settings.shift++;save();renderSong();};
document.getElementById("down").onclick=function(){state.settings.shift--;save();renderSong();};
document.getElementById("key").onchange=function(e){state.settings.shift=pitchIndex(e.target.value)-pitchIndex(currentSong().key);save();renderSong();startAutoScroll();};
document.getElementById("newSong").onclick=openNewSong;
document.getElementById("newSet").onclick=function(){var id=uid("set");state.sets[id]={id:id,name:"New Set",songIds:[]};openSet(id);};
document.getElementById("setDone").onclick=function(){state.session.view="sets";save();render();};
document.getElementById("setSearch").oninput=renderSetEditor;
document.getElementById("performSet").onclick=function(){state.session.index=0;state.session.view="performance";save();render();};
document.getElementById("exitPerformance").onclick=function(){state.session.view="setEditor";save();render();};
document.getElementById("performanceEdit").onclick=function(){state.session.view="setEditor";save();render();};
document.getElementById("prevSong").onclick=function(){state.session.index=Math.max(0,state.session.index-1);save();renderPerformance();};
document.getElementById("nextSong").onclick=function(){var set=state.sets[state.session.setId];state.session.index=Math.min(set.songIds.length-1,state.session.index+1);save();renderPerformance();};
document.getElementById("parseImport").onclick=reviewImport;
document.getElementById("importFile").onchange=function(e){
 var f=e.target.files[0];if(!f)return;
 state.pendingFile={name:f.name,type:f.type,size:f.size};save();renderImport();
 if(f.type.indexOf("text/")===0){var reader=new FileReader();reader.onload=function(){document.getElementById("importText").value=reader.result;};reader.readAsText(f);}
};
render();
})();