const S=(()=>{try{return JSON.parse(localStorage.getItem("ukeSongbookState"))||{}}catch(e){return {}}})();
S.inst=S.inst||"baritone";
S.shift=Number.isInteger(S.shift)?S.shift:0;
S.page=!!S.page;
S.edits=S.edits||{};
S.edit=false;

const notes=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

const shapes={
 baritone:{G:[0,0,0,3],Em:[0,3,4,2],C:[0,0,0,0],D:[2,2,2,0],B:[4,4,4,2]},
 soprano:{G:[0,2,3,2],Em:[0,4,3,2],C:[0,0,0,3],D:[2,2,2,0],B:[4,4,4,2]},
 guitar:{G:[3,2,0,0,0,3],Em:[0,2,2,0,0,0],C:[0,3,2,0,1,0],D:[0,0,0,2,3,2],B:[null,2,4,4,4,2]}
};

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
  {chords:["C","C","G","D","G","Em","G","Em"],text:"Halle
