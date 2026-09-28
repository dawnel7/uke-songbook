(function(){
"use strict";
var STORAGE="yourSongbookV2";
var NOTES=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
var SHAPES={
 baritone:{G:[0,0,0,3],Em:[2,0,0,0],C:[2,0,1,0],D:[0,2,3,2],B:[4,3,2,2],F:[3,2,1,1],Am:[2,2,1,0],A:[2,2,2,0],E:[2,1,0,0],"F#m":[2,4,4,2],"F#m7":[2,4,2,2]},
 soprano:{G:[0,2,3,2],Em:[0,4,3,2],C:[0,0,0,3],D:[2,2,2,0],B:[4,4,4,2],F:[2,0,1,0],Am:[2,0,0,0],A:[1,1,0,0],E:[1,4,0,2],"F#m":[2,1,2,0],"F#m7":[2,1,2,2]},
 guitar:{G:[3,2,0,0,0,3],Em:[0,2,2,0,0,0],C:[null,3,2,0,1,0],D:[null,0,0,2,3,2],B:[null,2,4,4,4,2],F:[1,3,3,2,1,1],Am:[null,0,2,2,1,0],A:[null,0,2,2,2,0],E:[0,2,2,1,0,0],"F#m":[2,4,4,2,2,2],"F#m7":[2,4,2,2,2,2]}
};
var FINGERS={
 baritone:{G:[0,0,0,3],Em:[1,0,0,0],C:[2,0,1,0],D:[0,1,3,2],B:[3,2,1,1],F:[3,2,1,1],Am:[2,3,1,0],A:[2,3,4,0],E:[2,1,0,0],"F#m":[1,3,4,2],"F#m7":[1,3,1,2]},
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
 var h='<div class="wordEditToolbar"><span>Edit the song directly. Chords are editable text too. Select, copy, cut, paste, press Return, or drag a chord.</span><div class="wordEditActions"><button id="undoEditBtn" class="btn" disabled>↶ Undo</button><button id="insertChordBtn" class="btn">＋ Chord</button></div></div>';
 h+='<div class="songDocument" contenteditable="true" spellcheck="true">';
 s.sections.forEach(function(sec,si){
  h+='<div class="docSection" data-si="'+si+'"><div class="docSectionHeading" data-heading="1">'+esc(sec.name)+'</div>';
  sec.lines.forEach(function(l,li){h+=renderDocLine(l,si,li);});
  h+='</div>';
 });
 h+='</div>';
 el.innerHTML=h;
 bindWordDocument();
}
function renderDocLine(l,si,li){
 var text=normalizeSongText(l.text||""), chords=(l.chords||[]).slice().sort(function(a,b){return (Number(a.pos)||0)-(Number(b.pos)||0);});
 var h='<div class="docLine" data-li="'+li+'">';
 var cursor=0;
 chords.forEach(function(ch){
  var p=Math.max(0,Math.min(text.length,Number(ch.pos)||0));
  h+=esc(text.slice(cursor,p));
  h+='<span class="docChord" contenteditable="true" spellcheck="false" data-chord="1">'+esc(transpose(ch.name,state.settings.shift))+'</span>';
  cursor=p;
 });
 h+=esc(text.slice(cursor));
 if(!text&&!(l.chords||[]).length)h+='<br>';
 return h+'</div>';
}
function normalizeSongText(v){return String(v||"").replace(/\\\\n/g,"\\n").replace(/\\r/g,"");}
function bindWordDocument(){
 var doc=document.querySelector(".songDocument");if(!doc)return;
 window.__songUndo=window.__songUndo||[];
 updateUndoButton();
 doc.addEventListener("beforeinput",function(e){
  if(e.inputType==="historyUndo"||e.inputType==="historyRedo")return;
  pushSongUndo(doc);
 });
 doc.addEventListener("input",function(){syncWordDocument(doc);});
 doc.addEventListener("keydown",function(e){
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="z"){e.preventDefault();undoSongEdit(doc);return;}
  if((e.ctrlKey||e.metaKey)&&e.shiftKey&&e.key.toLowerCase()==="c"){e.preventDefault();insertChordAtCaret(doc);return;}
  if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();splitDocLine(doc);return;}
  if(e.key==="Backspace"&&!e.shiftKey){if(mergePreviousIfAtStart(doc)){e.preventDefault();return;}}
  if(e.key==="Delete"&&!e.shiftKey){if(mergeNextIfAtEnd(doc)){e.preventDefault();return;}}
 });
 doc.addEventListener("paste",function(){setTimeout(function(){sanitizePastedDoc(doc);syncWordDocument(doc);bindPastedChords(doc);},0);});
 doc.addEventListener("pointerdown",function(e){
  var chip=e.target.closest&&e.target.closest(".docChord");if(!chip||e.button!==0)return;
  window.__docChordDrag={chip:chip,startX:e.clientX,startY:e.clientY,moved:false};
  chip.classList.add("docChordPending");
  window.addEventListener("pointermove",onDocChordMove);
  window.addEventListener("pointerup",onDocChordUp,{once:true});
 });
 doc.addEventListener("dblclick",function(e){
  var chip=e.target.closest&&e.target.closest(".docChord");if(!chip)return;
  e.preventDefault();e.stopPropagation();
  var r=document.createRange();r.selectNodeContents(chip);
  var sel=window.getSelection();sel.removeAllRanges();sel.addRange(r);doc.focus();
 });
 var add=document.getElementById("insertChordBtn");if(add)add.onclick=function(){insertChordAtCaret(doc);};
 var undo=document.getElementById("undoEditBtn");if(undo)undo.onclick=function(){undoSongEdit(doc);};
}
function pushSongUndo(doc){
 if(!doc||window.__restoringUndo)return;
 var snap=JSON.stringify(currentSong().sections);
 var stack=window.__songUndo||[];
 if(stack.length&&stack[stack.length-1]===snap)return;
 stack.push(snap);
 if(stack.length>50)stack.shift();
 window.__songUndo=stack;
 updateUndoButton();
}
function undoSongEdit(doc){
 var stack=window.__songUndo||[];if(!stack.length)return;
 var snap=stack.pop();
 try{
  currentSong().sections=JSON.parse(snap);
  window.__restoringUndo=true;
  renderSong();
 }finally{window.__restoringUndo=false;}
 updateUndoButton();
}
function updateUndoButton(){
 var b=document.getElementById("undoEditBtn");if(b)b.disabled=!(window.__songUndo&&window.__songUndo.length);
}
function bindPastedChords(doc){
 doc.querySelectorAll(".docChord").forEach(function(chip){chip.contentEditable="true";chip.spellcheck=false;});
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
 d.chip.remove();
 insertNodeAtRange(range,d.chip);
 syncWordDocument(doc);
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
 var r=null;
 if(document.caretPositionFromPoint){var p=document.caretPositionFromPoint(x,y);if(p){r=document.createRange();r.setStart(p.offsetNode,p.offset);r.collapse(true);}}
 if(!r&&document.caretRangeFromPoint)r=document.caretRangeFromPoint(x,y);
 if(!r||!root.contains(r.startContainer))return null;
 var chord=r.startContainer.nodeType===1?r.startContainer.closest&&r.startContainer.closest(".docChord"):r.startContainer.parentElement&&r.startContainer.parentElement.closest(".docChord");
 if(chord){var rr=document.createRange();rr.selectNode(chord);rr.collapse(false);return rr;}
 return r;
}
function currentLineFromSelection(doc){
 var sel=window.getSelection();if(!sel||!sel.rangeCount)return null;
 var n=sel.getRangeAt(0).startContainer;
 return n.nodeType===1?n.closest&&n.closest(".docLine"):n.parentElement&&n.parentElement.closest(".docLine");
}
function splitDocLine(doc){
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
function insertChordAtCaret(doc){
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
 save();
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
})()function bindDocChord(chip,doc){
 chip.contentEditable="true";chip.spellcheck=false;
 chip.addEventListener("keydown",function(e){
  if(e.key==="Enter"){e.preventDefault();e.stopPropagation();doc.focus();return;}
  if(e.key==="Backspace"||e.key==="Delete"){
   e.stopPropagation();
   e.preventDefault();
   var sel=window.getSelection();
   var r=sel&&sel.rangeCount?sel.getRangeAt(0):null;
   if(!r)return;
   if(!r.collapsed){
    r.deleteContents();
   }else if(e.key==="Backspace"){
    if(r.startContainer.nodeType===3&&r.startOffset>0){
     var t=r.startContainer;t.deleteData(r.startOffset-1,1);
     var nr=document.createRange();nr.setStart(t,Math.max(0,r.startOffset-1));nr.collapse(true);sel.removeAllRanges();sel.addRange(nr);
    }else if(chip.textContent.length){
     chip.textContent=chip.textContent.slice(1);placeCaretAtEnd(chip);
    }
   }else if(chip.textContent.length){
    var pos=r.startOffset;
    if(r.startContainer===chip)pos=Math.min(pos,chip.textContent.length);
    chip.textContent=chip.textContent.slice(0,pos)+chip.textContent.slice(pos+1);placeCaretAtOffset(chip,pos);
   }
   syncWordDocument(doc);
   return;
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
 d.chip.remove();
 insertNodeAtRange(range,d.chip);
 syncWordDocument(doc);
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
 var r=null;
 if(document.caretPositionFromPoint){var p=document.caretPositionFromPoint(x,y);if(p){r=document.createRange();r.setStart(p.offsetNode,p.offset);r.collapse(true);}}
 if(!r&&document.caretRangeFromPoint)r=document.caretRangeFromPoint(x,y);
 if(!r||!root.contains(r.startContainer))return null;
 var chord=r.startContainer.nodeType===1?r.startContainer.closest&&r.startContainer.closest(".docChord"):r.startContainer.parentElement&&r.startContainer.parentElement.closest(".docChord");
 if(chord){var rr=document.createRange();rr.selectNode(chord);rr.collapse(false);return rr;}
 return r;
}
function currentLineFromSelection(doc){
 var sel=window.getSelection();if(!sel||!sel.rangeCount)return null;
 var n=sel.getRangeAt(0).startContainer;
 return n.nodeType===1?n.closest&&n.closest(".docLine"):n.parentElement&&n.parentElement.closest(".docLine");
}
function splitDocLine(doc){
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
function insertChordAtCaret(doc){
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
 save();
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