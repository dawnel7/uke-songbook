(function(){
"use strict";
var STORAGE="yourSongbookV2";
var NOTES=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
var SHAPES={
 baritone:{G:[0,0,0,3],Em:[0,3,4,2],C:[0,0,0,0],D:[2,2,2,0],B:[4,4,4,2],F:[2,0,1,0],Am:[2,0,0,0],A:[1,1,0,0],E:[4,4,4,2],"F#m":[1,1,1,1],"F#m7":[1,1,1,3]},
 soprano:{G:[0,2,3,2],Em:[0,4,3,2],C:[0,0,0,3],D:[2,2,2,0],B:[4,4,4,2],F:[2,0,1,0],Am:[2,0,0,0],A:[1,1,0,0],E:[1,4,0,2],"F#m":[2,1,2,0],"F#m7":[2,1,2,2]},
 guitar:{G:[3,2,0,0,0,3],Em:[0,2,2,0,0,0],C:[null,3,2,0,1,0],D:[null,0,0,2,3,2],B:[null,2,4,4,4,2],F:[1,3,3,2,1,1],Am:[null,0,2,2,1,0],A:[null,0,2,2,2,0],E:[0,2,2,1,0,0],"F#m":[2,4,4,2,2,2],"F#m7":[2,4,2,2,2,2]}
};
var FINGERS={
 baritone:{G:[0,0,0,3],Em:[0,2,3,1],C:[0,0,0,0],D:[1,2,3,0],B:[1,2,3,1],F:[2,0,1,0],Am:[1,0,0,0],A:[1,2,0,0],E:[1,2,3,1],"F#m":[1,1,1,1],"F#m7":[1,1,1,3]},
 soprano:{G:[0,1,2,1],Em:[0,3,2,1],C:[0,0,0,3],D:[1,2,3,0],B:[1,2,3,1],F:[2,0,1,0],Am:[1,0,0,0],A:[1,2,0,0],E:[1,3,0,2],"F#m":[2,1,3,0],"F#m7":[2,1,3,4]},
 guitar:{G:[2,1,0,0,0,3],Em:[0,2,3,0,0,0],C:[0,3,2,0,1,0],D:[0,0,0,1,2,1],B:[0,1,3,4,2,1],F:[1,3,4,2,1,1],Am:[0,0,2,3,1,0],A:[0,0,1,2,3,0],E:[0,2,3,1,0,0],"F#m":[1,3,4,2,1,1],"F#m7":[1,3,1,2,1,1]}
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
Object.keys(state.songs).forEach(function(id){var s=state.songs[id];if(s&&s.title==="New Song"&&s.artist==="Unknown"&&s.source&&s.source.type==="Manual")delete state.songs[id];});
function save(){try{localStorage.setItem(STORAGE,JSON.stringify(state));}catch(e){}}
function currentSong(){return state.session.edit?state.session.draft:state.songs[state.session.songId];}
function transpose(chord,shift){
 var m=String(chord).match(/^([A-G](?:#|b)?)(.*)$/);if(!m)return chord;
 var root=m[1].replace("Db","C#").replace("Eb","D#").replace("Gb","F#").replace("Ab","G#").replace("Bb","A#");
 var i=NOTES.indexOf(root);if(i<0)return chord;
 return NOTES[(i+shift+120)%12]+m[2];
}
function chordNames(s){var a=[];s.sections.forEach(function(sec){sec.lines.forEach(function(l){l.chords.forEach(function(x){if(a.indexOf(x.name)<0)a.push(x.name);});});});return a;}
function fretDiagram(name){
 var inst=state.settings.instrument,f=SHAPES[inst]&&SHAPES[inst][name],fi=FINGERS[inst]&&FINGERS[inst][name];
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
}
function render(){
 show(state.session.view);
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
 var d={id:null,title:"New Song",artist:"",key:"C",genre:"",moods:[],duration:180,source:{type:"Manual"},sections:[{name:"Verse",lines:[line("Add your lyrics here", [c("C",0)])]}]};
 state.session.songId=null;state.session.view="song";state.session.edit=true;state.session.draft=d;state.session.draftNew=true;render();
}
function renderSong(){
 var s=currentSong();if(!s){state.session.view="library";return render();}
 document.getElementById("songTitle").textContent=s.title||"Untitled Song";
 document.getElementById("songMeta").textContent=s.artist||"New song";
 document.getElementById("songDetails").textContent="Key of "+transpose(s.key,state.settings.shift)+" · "+(s.genre||"Genre not set")+" · "+(s.moods||[]).join(" · ")+(s.duration?" · "+Math.round(s.duration/60)+" min":"");
 document.getElementById("instrument").value=state.settings.instrument;
 document.getElementById("viewMode").value=state.settings.view;
 document.getElementById("pinToggle").textContent=state.settings.pin?"📌 Chord bar on":"📌 Chord bar off";
 var key=document.getElementById("key");key.innerHTML=NOTES.map(function(n){return '<option value="'+n+'">'+n+"</option>";}).join("");key.value=transpose(s.key,state.settings.shift);
 var actions=document.querySelector(".titleActions");
 if(state.session.edit){
  actions.innerHTML='<button id="saveLibrary" class="primary">Save to Library</button><button id="cancelEdit" class="btn">Cancel</button>'+(state.session.draftNew?'':'<button id="restoreOriginal" class="btn">↩ Return to Original</button>')+'<button id="songMenu" class="btn">⋯</button>';
  bindEditActions();
 }else{
  actions.innerHTML='<button id="songEdit" class="primary">Edit</button><button id="songMenu" class="btn">⋯</button>';
  document.getElementById("songEdit").onclick=function(){beginEdit();};
  document.getElementById("songMenu").onclick=deleteSongMenu;
 }
 renderChords(s);renderLyrics(s);
}
function renderChords(s){
 var el=document.getElementById("chords");
 el.innerHTML=chordNames(s).map(function(n){var x=transpose(n,state.settings.shift);return '<div class="chordbox"><div class="chordname">'+esc(x)+'</div><div class="diagram">'+fretDiagram(x)+'</div></div>';}).join("");
 el.style.position=state.settings.pin?"sticky":"static";
}
function displayLine(l){
 var text=l.text||"";if(!text)return '<div class="songLine"><div class="lineWords">'+l.chords.map(function(ch){return '<span class="wordCell"><span class="lineChord">'+esc(transpose(ch.name,state.settings.shift))+'</span><span>&nbsp;</span></span>';}).join("")+"</div></div>";
 var by={};l.chords.forEach(function(ch){var p=Math.max(0,Math.min(text.length,Number(ch.pos)||0));if(!by[p])by[p]=[];by[p].push(ch);});
 var cuts=[0,text.length];Object.keys(by).forEach(function(p){cuts.push(Number(p));});cuts.sort(function(a,b){return a-b;});
 var unique=[];cuts.forEach(function(x){if(unique.indexOf(x)<0)unique.push(x);});
 var h='<div class="songLine"><div class="lineWords">';
 for(var i=0;i<unique.length-1;i++){var start=unique[i],end=unique[i+1],chs=by[start]||[];h+='<span class="wordCell"><span class="lineChord">'+(chs.length?chs.map(function(ch){return esc(transpose(ch.name,state.settings.shift));}).join(" "):"&nbsp;")+'</span><span>'+esc(text.slice(start,end))+"</span></span>";}
 return h+"</div></div>";
}
function renderLyrics(s){
 var el=document.getElementById("lyrics");el.className="card lyrics"+(state.settings.view==="page"?" page":"");
 if(state.session.edit){renderFreeEditor(el,s);}else{var out="";s.sections.forEach(function(sec){out+='<section class="section"><h3>'+esc(sec.name)+"</h3>";sec.lines.forEach(function(l){out+=displayLine(l);});out+="</section>";});el.innerHTML=out;}
}
function renderFreeEditor(el,s){
 var h='<div class="editorIntro"><div><b>Free-form editor</b><span>Type directly into the lyrics. Drag a chord chip and drop it where you want it over the words.</span></div><div class="songMetaEdit"><label>Title<input class="songTitleEdit" value="'+esc(s.title)+'"></label><label>Artist<input class="songArtistEdit" value="'+esc(s.artist)+'"></label></div></div>';
 s.sections.forEach(function(sec,si){
  h+='<section class="section editSection"><div class="sectionHead"><input class="sectionName" data-si="'+si+'" value="'+esc(sec.name)+'"><button class="btn deleteSection" data-si="'+si+'">Delete section</button></div>';
  sec.lines.forEach(function(l,li){
   h+='<div class="freeLine" data-si="'+si+'" data-li="'+li+'"><div class="chordLane">';
   l.chords.forEach(function(ch,ci){h+='<div class="dragChord" draggable="true" data-si="'+si+'" data-li="'+li+'" data-ci="'+ci+'" title="Drag to move. Double-click to rename">'+esc(ch.name)+' <button class="chipX" data-del="'+si+','+li+','+ci+'">×</button></div>';});
   h+='<button class="btn addChordFree" data-si="'+si+'" data-li="'+li+'">＋ Chord</button></div><div class="freeText" contenteditable="plaintext-only" spellcheck="true">'+esc(l.text)+'</div><div class="lineHint">Drag chords onto the lyric line · edit or delete any words freely</div></div>';
  });
  h+='<button class="btn addLineFree" data-si="'+si+'">＋ Add line</button></section>';
 });
 h+='<button class="btn addSectionFree">＋ Add section</button>';
 el.innerHTML=h;
 bindFreeEditor();
}
function bindFreeEditor(){
 var s=currentSong();
 var ti=document.querySelector(".songTitleEdit"),ai=document.querySelector(".songArtistEdit");
 if(ti)ti.oninput=function(){s.title=ti.value;};
 if(ai)ai.oninput=function(){s.artist=ai.value;};
 document.querySelectorAll(".dragChord").forEach(function(chip){chip.ondblclick=function(){var s=currentSong(),ch=s.sections[Number(chip.dataset.si)].lines[Number(chip.dataset.li)].chords[Number(chip.dataset.ci)],name=prompt("Chord name",ch.name);if(name&&name.trim()){ch.name=name.trim();renderSong();}};});
 document.querySelectorAll(".deleteLine").forEach(function(b){b.onclick=function(){var s=currentSong(),sec=s.sections[Number(b.dataset.si)];if(sec.lines.length===1){alert("A section needs at least one line.");return;}if(confirm("Delete this lyric line and its chords?")){sec.lines.splice(Number(b.dataset.li),1);renderSong();}};});
 document.querySelectorAll(".freeText").forEach(function(t){t.addEventListener("input",function(){var row=t.closest(".freeLine"),l=currentSong().sections[Number(row.dataset.si)].lines[Number(row.dataset.li)];l.text=t.innerText.replace(/\u00a0/g," ");});});
 document.querySelectorAll(".sectionName").forEach(function(i){i.oninput=function(){currentSong().sections[Number(i.dataset.si)].name=i.value;};});
 document.querySelectorAll(".dragChord").forEach(function(chip){chip.addEventListener("dragstart",function(e){e.dataTransfer.setData("text/songbook-chord",JSON.stringify({si:Number(chip.dataset.si),li:Number(chip.dataset.li),ci:Number(chip.dataset.ci)}));e.dataTransfer.effectAllowed="move";});});
 document.querySelectorAll(".freeText").forEach(function(t){
  t.addEventListener("dragover",function(e){e.preventDefault();t.classList.add("dropReady");});
  t.addEventListener("dragleave",function(){t.classList.remove("dropReady");});
  t.addEventListener("drop",function(e){
   e.preventDefault();t.classList.remove("dropReady");
   var raw=e.dataTransfer.getData("text/songbook-chord");if(!raw)return;
   var d=JSON.parse(raw),s=currentSong(),source=s.sections[d.si].lines[d.li],ch=source.chords[d.ci];if(!ch)return;
   var targetRow=t.closest(".freeLine"),tsi=Number(targetRow.dataset.si),tli=Number(targetRow.dataset.li),target=s.sections[tsi].lines[tli];
   var pos=caretOffsetAtPoint(t,e.clientX,e.clientY);
   if(d.si!==tsi||d.li!==tli){source.chords.splice(d.ci,1);target.chords.push({name:ch.name,pos:pos});}
   else{ch.pos=pos;}
   renderSong();
  });
 });
 document.querySelectorAll(".chipX").forEach(function(b){b.onclick=function(){var p=b.dataset.del.split(",").map(Number),s=currentSong();s.sections[p[0]].lines[p[1]].chords.splice(p[2],1);renderSong();};});
 document.querySelectorAll(".addChordFree").forEach(function(b){b.onclick=function(){var s=currentSong(),l=s.sections[Number(b.dataset.si)].lines[Number(b.dataset.li)];l.chords.push({name:"C",pos:0});renderSong();};});
 document.querySelectorAll(".addLineFree").forEach(function(b){b.onclick=function(){currentSong().sections[Number(b.dataset.si)].lines.push(line("New lyric line",[]));renderSong();};});
 document.querySelectorAll(".deleteSection").forEach(function(b){b.onclick=function(){if(confirm("Delete this section and all of its lines?")){currentSong().sections.splice(Number(b.dataset.si),1);renderSong();}};});
 document.querySelector(".addSectionFree").onclick=function(){currentSong().sections.push({name:"New section",lines:[line("",[])]});renderSong();};
}
function caretOffsetAtPoint(el,x,y){
 var r=null;
 if(document.caretPositionFromPoint){var p=document.caretPositionFromPoint(x,y);if(p){r=document.createRange();r.setStart(p.offsetNode,p.offset);r.collapse(true);}}
 else if(document.caretRangeFromPoint){r=document.caretRangeFromPoint(x,y);}
 if(!r)return el.innerText.length;
 var pre=document.createRange();pre.selectNodeContents(el);pre.setEnd(r.startContainer,r.startOffset);return pre.toString().length;
}
function beginEdit(){
 var id=state.session.songId;state.session.edit=true;state.session.draft=clone(state.songs[id]);state.session.draftNew=false;render();
}
function saveLibrary(){
 var d=state.session.draft;
 if(!d)return;
 if(!d.title.trim()){alert("Please give the song a title before saving.");return;}
 if(state.session.draftNew){d.id=uid("song");state.songs[d.id]=clone(d);state.session.songId=d.id;state.session.draftNew=false;}
 else{state.songs[d.id]=clone(d);}
 state.session.draft=null;state.session.edit=false;save();render();
}
function cancelEdit(){
 if(state.session.draftNew){state.session.draft=null;state.session.edit=false;state.session.songId=null;state.session.view="library";render();return;}
 if(!confirm("Discard the changes you made to this song?"))return;
 state.session.draft=null;state.session.edit=false;render();
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
 document.getElementById("saveLibrary").onclick=saveLibrary;
 document.getElementById("cancelEdit").onclick=cancelEdit;
 document.getElementById("songMenu").onclick=deleteSongMenu;
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
function renderImport(){document.getElementById("importStatus").textContent=state.pendingFile?"Attached: "+state.pendingFile.name:"";}
function parseImport(raw){
 var sections=[{name:"Imported song",lines:[]}],current=sections[0];
 raw.split(/\r?\n/).forEach(function(rawLine){
  var lineText=rawLine.trim();if(!lineText)return;
  if(/^(intro|verse|chorus|bridge|outro|break|final chorus)\s*:??$/i.test(lineText)){current={name:lineText.replace(/:$/,""),lines:[]};sections.push(current);return;}
  var chords=[],re=/(^|\s)([A-G](?:#|b)?(?:m|maj7|7|sus2|sus4|dim|aug)?)(?=\s|$)/g,m;
  while((m=re.exec(lineText)))chords.push({name:m[2],pos:m.index+(m[1]?m[1].length:0)});
  var text=lineText.replace(/(^|\s)[A-G](?:#|b)?(?:m|maj7|7|sus2|sus4|dim|aug)?(?=\s|$)/g," ").replace(/\s+/g," ").trim();
  current.lines.push({text:text,chords:chords});
 });
 return sections.filter(function(s){return s.lines.length;});
}
function openLibrary(){
 if(state.session.edit&&!state.session.draftNew){cancelEdit();return;}
 state.session.draft=null;state.session.edit=false;state.session.songId=null;state.session.view="library";save();render();
}
document.querySelectorAll(".navbtn").forEach(function(b){b.onclick=function(){if(state.session.edit&&!confirm("Leave the editor without saving your changes?"))return;if(state.session.edit){state.session.draft=null;state.session.edit=false;}state.session.view=b.getAttribute("data-view");save();render();};});
document.getElementById("back").onclick=function(){if(state.session.edit){cancelEdit();}else{openLibrary();}};
document.getElementById("search").oninput=renderLibrary;
document.getElementById("instrument").onchange=function(e){state.settings.instrument=e.target.value;save();renderSong();};
document.getElementById("viewMode").onchange=function(e){state.settings.view=e.target.value;save();renderSong();};
document.getElementById("pinToggle").onclick=function(){state.settings.pin=!state.settings.pin;save();renderSong();};
document.getElementById("up").onclick=function(){state.settings.shift++;save();renderSong();};
document.getElementById("down").onclick=function(){state.settings.shift--;save();renderSong();};
document.getElementById("key").onchange=function(e){state.settings.shift=NOTES.indexOf(e.target.value)-NOTES.indexOf(currentSong().key);save();renderSong();};
document.getElementById("newSong").onclick=openNewSong;
document.getElementById("newSet").onclick=function(){var id=uid("set");state.sets[id]={id:id,name:"New Set",songIds:[]};openSet(id);};
document.getElementById("setDone").onclick=function(){state.session.view="sets";save();render();};
document.getElementById("setSearch").oninput=renderSetEditor;
document.getElementById("performSet").onclick=function(){state.session.index=0;state.session.view="performance";save();render();};
document.getElementById("exitPerformance").onclick=function(){state.session.view="setEditor";save();render();};
document.getElementById("performanceEdit").onclick=function(){state.session.view="setEditor";save();render();};
document.getElementById("prevSong").onclick=function(){state.session.index=Math.max(0,state.session.index-1);save();renderPerformance();};
document.getElementById("nextSong").onclick=function(){var set=state.sets[state.session.setId];state.session.index=Math.min(set.songIds.length-1,state.session.index+1);save();renderPerformance();};
document.getElementById("parseImport").onclick=function(){var raw=document.getElementById("importText").value.trim();if(!raw)return;var id=uid("song"),sections=parseImport(raw);state.session.songId=null;state.session.view="song";state.session.edit=true;state.session.draft={id:id,title:"Imported Song",artist:"Imported",key:"C",genre:"",moods:[],duration:180,source:{type:"Imported text"},sections:sections};state.session.draftNew=true;save();render();};
document.getElementById("importFile").onchange=function(e){var f=e.target.files[0];if(!f)return;state.pendingFile={name:f.name,type:f.type,size:f.size};save();renderImport();if(f.type.indexOf("text/")===0){var reader=new FileReader();reader.onload=function(){document.getElementById("importText").value=reader.result;};reader.readAsText(f);}};
render();
})();