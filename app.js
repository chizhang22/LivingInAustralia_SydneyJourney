(() => {
  'use strict';

  const ASSET = 'assets/';
  const beats = [
    {id:'cover',chapter:'Cover',time:'SEP 30 2026 · 2:30 PM',location:'CLASSROOM',seconds:30,motif:'cover',title:'LIVING IN AUSTRALIA',body:'How Sydney Lives Through Australia Day\n25–26 January 2026',action:'CLICK TO BEGIN',image:'scene_00_cover_classroom.webp',hud:false,audio:'classroom',cn:'点击开始悉尼之旅。'},
    {id:'tunnel',chapter:'Cover',time:'TIME REVERSING',location:'BETWEEN SEP 30 AND JAN 25',seconds:30,motif:'tunnel',title:'THE PULL',body:'The presentation folds into a doorway. September becomes January.',action:'FOLLOW THE LIGHT',image:'scene_01_tunnel.webp',hud:false,audio:'portal',cn:'日期正在倒转到 1 月 25 日。'},
    {id:'arrival',chapter:'Jan 25',time:'JAN 25 2026 · 3:30 PM',location:'CIRCULAR QUAY',seconds:45,motif:'harbour',title:'WELCOME TO SYDNEY',body:'Sydney Harbour, one day before Australia Day.',kori:'Welcome to Sydney — on Gadigal Country.',roo:'Come on! Let’s see how the city changes.',action:'WALK TO THE HARBOUR',image:'scene_02_arrival.webp',hud:true,audio:'harbour',cn:'欢迎来到悉尼。'},
    {id:'opera',chapter:'Jan 25',time:'JAN 25 2026 · 3:40 PM',location:'SYDNEY OPERA HOUSE',seconds:90,motif:'opera-house',title:'A SONG BY THE HARBOUR',body:'A guitar carries a familiar melody across the promenade.',kori:'The sails look different from every angle.',roo:'Wait — is that Mandarin?',lyrics:true,action:'FOLLOW THE MUSIC',image:'scene_03_busker.webp',hud:true,audio:'harbour',cn:'港边传来熟悉的中文歌。'},
    {id:'chair',chapter:'Jan 25',time:'JAN 25 2026 · 4:30 PM',location:'MRS MACQUARIE’S POINT',seconds:90,motif:'chair-picnic',title:'PICNIC BY THE HARBOUR',body:'Families spread blankets, share prepared food and choose tomorrow’s view.',kori:'Mrs Macquarie’s Chair has one of Sydney’s classic harbour views.',roo:'Everyone has found a sunny picnic spot!',action:'CONTINUE TO DUSK',image:'scene_04_picnic.webp',hud:true,audio:'garden',cn:'港边的人们铺开野餐垫。'},
    {id:'cathedral',chapter:'Jan 25',time:'JAN 25 2026 · 6:50 PM',location:'ST MARY’S CATHEDRAL',seconds:35,motif:'cathedral',title:'SANDSTONE AT DUSK',body:'Warm windows glow beside the darkening trees of Hyde Park.',kori:'St Mary’s Cathedral — sandstone, spires and a quiet pause.',roo:'Big day tomorrow. Hotel time!',embeddedGuides:true,action:'HEAD TO THE HOTEL',image:'scene_05_cathedral.webp',hud:true,audio:'dusk',cn:'黄昏经过圣玛丽大教堂。'},
    {id:'morning',chapter:'Jan 26 Morning',time:'JAN 26 2026 · 9:45 AM',location:'CENTRAL SYDNEY · HYDE PARK',seconds:60,motif:'morning-voices',title:'A MORNING OF MANY VOICES',body:'Marches move through central Sydney. Some celebrate; others mark Invasion Day or Survival Day.',kori:'January 26 carries different meanings for different people.',roo:'Let’s listen, look and keep walking.',action:'STEP OUTSIDE',image:'scene_06_morning_march.webp',hud:true,audio:'reflection',cn:'同一天承载着庆祝、抗议与反思。'},
    {id:'breakfast',chapter:'Jan 26 Morning',time:'JAN 26 2026 · 10:30 AM',location:'HYDE PARK EDGE',seconds:90,motif:'bench-flag',title:'BREAKFAST ON A BENCH',body:'Hot fried chicken, sandwiches and a friendly morning beside Hyde Park.',kori:'We missed a few words — but the welcome was clear.',embeddedGuides:true,action:'TAP THE FLAG',image:'scene_07_bench_flag.webp',hud:true,audio:'morning',cn:'一次友善的长椅相遇。'},
    {id:'wildlife',chapter:'Jan 26 Morning',time:'JAN 26 2026 · 11:15 AM',location:'PARK PATH',seconds:30,motif:'skink',title:'A TINY LOCAL',body:'A little skink darts across the sun-warmed path.',roo:'They’re quick!',kori:'Look, don’t chase — native reptiles are protected.',embeddedGuides:true,action:'KEEP WALKING',image:'scene_08_skink.webp',hud:true,audio:'garden',cn:'一只小蜥蜴从路边飞快爬过。'},
    {id:'montage',chapter:'Jan 26 Evening',time:'JAN 26 2026 · DAY TO EVENING',location:'SYDNEY HARBOUR',seconds:35,motif:'day-montage',title:'FROM DAWN TO EVENING',body:'Dawn Reflection · WugulOra · Ferrython · Harbour Parade · Australia Day Live',action:'FOLLOW THE SUN',image:'scene_09_day_montage.webp',hud:true,audio:'montage',cn:'悉尼港从清晨一路热闹到傍晚。'},
    {id:'fireworks',chapter:'Jan 26 Evening',time:'JAN 26 2026 · 7:30–9:30 PM',location:'CIRCULAR QUAY · FARM COVE',seconds:120,motif:'night-harbour',title:'AUSTRALIA DAY LIVE',body:'Music, maritime lights and fireworks fill the harbour.',kori:'Celebration, reflection, family and music — one day can hold many stories.',roo:'And tonight, the harbour holds them all.',action:'LIGHT THE HARBOUR',image:'scene_10_fireworks.webp',hud:true,audio:'night',cn:'晚间演出与烟花点亮悉尼港。'},
    {id:'highfive',chapter:'Return',time:'JAN 26 2026 · 9:45 PM',location:'CENTRAL SYDNEY',seconds:45,motif:'high-five',title:'ONE LAST SYDNEY MOMENT',body:'A friendly local stops beneath a streetlamp on the walk home.',local:'Do you like Australia? … Good on ya. Give me five!',action:'HIGH FIVE',image:'scene_11_highfive_local.webp',hud:true,audio:'night-walk',cn:'一次击掌，把旅程送回课堂。'},
    {id:'classroom',chapter:'Return',time:'SEP 30 2026 · 2:45 PM',location:'CLASSROOM',seconds:45,motif:'classroom-return',title:'BACK IN CLASS',body:'The harbour disappears. The classroom returns.',kori:'Sydney celebrates — and reflects.',roo:'China’s National Day holiday is almost here. Happy holiday!',action:'FINISH',image:'scene_12_classroom_return.webp',hud:false,audio:'classroom',cn:'旅程回到 9 月 30 日的课堂。'},
    {id:'credits',chapter:'Return',time:'',location:'',seconds:35,motif:'credits',title:'A JOURNEY REMEMBERED',body:'Inspired by real Australia Day experiences shared by students in Sydney.\nCreated with assistance from OpenAI tools.',action:'REPLAY',image:'scene_13_credits.webp',hud:false,audio:'credits',cn:'真实经历与艺术重构。'}
  ];

  const $ = id => document.getElementById(id);
  const el = {
    app:$('app'),stage:$('stage'),canvas:$('scene-canvas'),image:$('scene-image'),guides:$('guides'),cover:$('cover-art'),
    progress:$('progress'),hud:$('hud'),hudTime:$('hud-time'),hudLocation:$('hud-location'),eyebrow:$('eyebrow'),title:$('scene-title'),
    body:$('scene-body'),action:$('action-button'),hint:$('control-hint'),transition:$('transition'),fact:$('fact-card'),menu:$('journey-menu'),
    kori:$('kori-bubble'),roo:$('roo-bubble'),local:$('local-bubble'),lyric:$('lyric-card'),
    chapters:$('chapter-list'),mute:$('mute-button'),fullscreen:$('fullscreen-button'),menuButton:$('menu-button'),status:$('sr-status'),
    autoplay:$('autoplay-toggle'),motion:$('motion-toggle'),bilingual:$('bilingual-toggle'),contrast:$('contrast-toggle')
  };

  const CONTENT_REVEAL_DELAY = 500;
  const FIREWORK_TIMELINE_END = 7600;
  const loadSetting = (key, fallback=false) => { try { return JSON.parse(localStorage.getItem('lia-'+key)) ?? fallback; } catch { return fallback; } };
  const saveSetting = (key, value) => { try { localStorage.setItem('lia-'+key, JSON.stringify(value)); } catch {} };
  const lowPerformance = matchMedia('(max-width: 700px)').matches || (navigator.hardwareConcurrency||8)<=4 || (navigator.deviceMemory||8)<=4;
  const state = {
    index:0,substep:0,busy:false,contentReady:false,sceneToken:0,
    autoplay:loadSetting('autoplay'),reduced:loadSetting('motion',matchMedia('(prefers-reduced-motion: reduce)').matches),
    bilingual:loadSetting('bilingual'),contrast:loadSetting('contrast'),timer:null,sceneTimers:new Set(),
    fireworks:[],fireworksActive:false,fireworkIntensity:0,lowPerformance,
    qa:new URLSearchParams(location.search).has('qa')
  };

  class AudioEngine {
    constructor(){this.ctx=null;this.master=null;this.nodes=[];this.muted=false;this.sequence=0;}
    start(){
      if(this.ctx) { if(this.ctx.state==='suspended') this.ctx.resume(); return; }
      const Ctx=window.AudioContext||window.webkitAudioContext;if(!Ctx)return;
      this.ctx=new Ctx();this.master=this.ctx.createGain();this.master.gain.value=.11;this.master.connect(this.ctx.destination);
    }
    stop(){this.sequence++;this.nodes.splice(0).forEach(n=>{try{n.stop?.();n.disconnect?.();}catch{}});}
    cue(name){
      this.start();this.stop();if(!this.ctx||this.muted)return;
      const roots={classroom:164.81,portal:98,harbour:196,garden:220,dusk:146.83,reflection:130.81,morning:246.94,montage:185,night:110,'night-walk':138.59,credits:174.61};
      const root=roots[name]||174.61;[1,1.25,1.5].forEach((ratio,i)=>{
        const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type=i?'sine':'triangle';o.frequency.value=root*ratio;g.gain.value=.018/(i+1);o.connect(g).connect(this.master);o.start();this.nodes.push(o,g);
      });
    }
    click(freq=620){this.start();if(!this.ctx||this.muted)return;const o=this.ctx.createOscillator(),g=this.ctx.createGain(),t=this.ctx.currentTime;o.frequency.setValueAtTime(freq,t);o.frequency.exponentialRampToValueAtTime(freq*.55,t+.13);g.gain.setValueAtTime(.12,t);g.gain.exponentialRampToValueAtTime(.001,t+.14);o.connect(g).connect(this.master);o.start(t);o.stop(t+.15);}
    busker(){
      this.start();if(!this.ctx||this.muted)return;const token=++this.sequence,notes=[261.63,329.63,392,329.63,293.66,261.63,220,261.63];
      notes.forEach((freq,i)=>setTimeout(()=>{if(token!==this.sequence||this.muted)return;const o=this.ctx.createOscillator(),g=this.ctx.createGain(),t=this.ctx.currentTime;o.type='triangle';o.frequency.value=freq;g.gain.setValueAtTime(.001,t);g.gain.linearRampToValueAtTime(.1,t+.08);g.gain.exponentialRampToValueAtTime(.001,t+1.65);o.connect(g).connect(this.master);o.start(t);o.stop(t+1.7);},i*1875));
    }
    boom(){this.click(75+Math.random()*50);}
    toggle(){this.start();this.muted=!this.muted;if(this.master)this.master.gain.value=this.muted?0:.11;return this.muted;}
  }
  const audio=new AudioEngine();

  function clearSceneTimers(){
    clearTimeout(state.timer);state.timer=null;
    state.sceneTimers.forEach(id=>clearTimeout(id));state.sceneTimers.clear();
  }

  function scheduleSceneTask(callback,delay,token=state.sceneToken){
    const id=setTimeout(()=>{
      state.sceneTimers.delete(id);
      if(token!==state.sceneToken)return;
      callback();
    },delay);
    state.sceneTimers.add(id);return id;
  }

  function revealSceneContent(scene){
    if(state.contentReady)return;
    state.contentReady=true;
    el.stage.classList.remove('content-pending');
    el.stage.classList.add('content-ready');
    el.action.disabled=false;
    el.status.textContent=`Scene ${state.index+1} of ${beats.length}: ${scene.title}`;
    scheduleAuto(scene.seconds);
  }

  function setSceneText(scene){
    el.stage.classList.remove('content-ready');el.stage.classList.add('content-pending');
    el.app.dataset.motif=scene.motif;
    el.progress.textContent=`${String(state.index+1).padStart(2,'0')} / ${beats.length} · ${scene.chapter.toUpperCase()}`;
    el.eyebrow.textContent=scene.id==='cover'?'AN INTERACTIVE JOURNEY':scene.chapter.toUpperCase();
    el.title.textContent=scene.title;el.body.textContent=scene.body;
    el.action.textContent=scene.action;el.action.disabled=true;
    el.hud.hidden=!scene.hud;if(scene.hud){el.hudTime.textContent=scene.time;el.hudLocation.textContent=scene.location;}
    el.cover.hidden=scene.id!=='cover';
    const showGuides=Boolean(scene.kori||scene.roo)&&!scene.embeddedGuides;
    el.guides.hidden=!showGuides;
    if(scene.image){el.image.src=ASSET+scene.image;el.image.hidden=false;}else{el.image.hidden=true;el.image.removeAttribute('src');}
    setBubble(el.kori,scene.kori,state.bilingual?scene.cn:'');setBubble(el.roo,scene.roo,'');setBubble(el.local,scene.local,'');
    el.lyric.hidden=true;el.fact.hidden=true;el.fact.innerHTML='';
    el.stage.classList.remove('scene-enter');void el.stage.offsetWidth;el.stage.classList.add('scene-enter');
    el.app.classList.toggle('reduce-motion',state.reduced);el.app.classList.toggle('high-contrast',state.contrast);
    el.hint.textContent=state.autoplay?'AUTO-PLAY · M MUTE · ESC MENU':'CLICK / SPACE · M MUTE · ESC MENU';
    el.status.textContent='';
    state.substep=0;state.fireworksActive=false;state.fireworks.length=0;state.fireworkIntensity=0;audio.cue(scene.audio);
    scheduleSceneTask(()=>revealSceneContent(scene),CONTENT_REVEAL_DELAY);
  }

  function setBubble(node,text,translation){
    node.hidden=!text;if(!text)return;const span=node.querySelector('span');span.textContent=text+(translation?`\n${translation}`:'');
  }

  function render(index,skipMap=false){
    clearSceneTimers();state.sceneToken++;state.contentReady=false;
    state.index=(index+beats.length)%beats.length;state.busy=false;setSceneText(beats[state.index]);
    try{localStorage.setItem('lia-last-beat',String(state.index));}catch{}
  }

  function scheduleAuto(seconds=6){
    clearTimeout(state.timer);if(!state.autoplay)return;
    const delay=state.qa?850:Math.max(3,seconds)*1000;
    state.timer=setTimeout(()=>handleAction(true),delay);
  }

  async function handleAction(fromAuto=false){
    if(state.busy||!state.contentReady)return;audio.start();audio.click();const scene=beats[state.index],actionToken=state.sceneToken;
    if(scene.id==='opera'&&state.substep===0){state.substep=1;el.roo.hidden=true;el.lyric.hidden=false;el.action.textContent='WAVE BACK';audio.busker();scheduleAuto(16);return;}
    if(scene.id==='breakfast'&&state.substep===0){state.substep=1;showFlagCard();el.action.textContent='CONTINUE';scheduleAuto(10);return;}
    if(scene.id==='fireworks'&&state.substep===0){
      state.substep=1;state.busy=true;launchFireworks();el.action.disabled=true;el.action.textContent='ENJOY THE HARBOUR';
      const scale=state.qa ? .12 : 1;
      scheduleSceneTask(()=>{state.busy=false;el.action.disabled=false;el.action.textContent='WALK BACK TO THE HOTEL';scheduleAuto(8);},(FIREWORK_TIMELINE_END+2600)*scale);
      return;
    }
    if(scene.id==='credits'){await playTransition('fade');if(actionToken===state.sceneToken)render(0,true);return;}
    state.busy=true;clearTimeout(state.timer);
    let next=(state.index+1)%beats.length;
    if(scene.id==='cover') await playTransition('vortex');
    else if(scene.id==='highfive') await playTransition('flash');
    else await playTransition('fade');
    if(actionToken===state.sceneToken)render(next);
  }

  function playTransition(kind){
    return new Promise(resolve=>{
      if(state.reduced){el.stage.animate([{opacity:1},{opacity:.28},{opacity:1}],{duration:300});setTimeout(resolve,310);return;}
      el.transition.className='transition active '+(kind==='vortex'?'vortex':kind==='flash'?'flash-active':'');
      if(kind==='fade') el.stage.animate([{filter:'brightness(1)'},{filter:'brightness(.18)'},{filter:'brightness(1)'}],{duration:600,easing:'ease-in-out'});
      setTimeout(()=>{el.transition.className='transition';resolve();},kind==='vortex'?1200:kind==='flash'?1080:620);
    });
  }

  function showFlagCard(){
    el.fact.innerHTML='<strong>THE AUSTRALIAN ABORIGINAL FLAG</strong><div class="flag-grid"><div class="flag-black"><b>BLACK</b><span>Aboriginal people</span></div><div class="flag-red"><b>RED</b><span>the earth and ceremonial ochre</span></div><div class="flag-yellow"><b>YELLOW</b><span>the sun</span></div></div><small>Designed by Harold Thomas · First raised in 1971</small>';
    el.fact.hidden=false;
  }

  function launchFireworks(){
    state.fireworksActive=true;state.fireworks.length=0;
    const timeline=[
      [0,    {type:'peony', layer:'far', x:.23,y:.24,color:'#f6c445',scale:.72}],
      [650,  {type:'comet', layer:'far', x:.74,y:.27,color:'#69b8ff',scale:.72}],
      [1350, {type:'willow',layer:'mid',  x:.43,y:.21,color:'#b56ad9',scale:1.02}],
      [1900, {type:'strobe',layer:'far',  x:.64,y:.18,color:'#fff9ef',scale:.82}],
      [2450, {type:'fan',   layer:'near', x:.25,y:.51,color:'#f6c445',scale:1.05}],
      [2450, {type:'fan',   layer:'near', x:.75,y:.51,color:'#69b8ff',scale:1.05}],
      [3200, {type:'comet', layer:'mid',  x:.29,y:.28,color:'#69b8ff',scale:.94}],
      [3400, {type:'comet', layer:'mid',  x:.71,y:.26,color:'#b56ad9',scale:.94}],
      [4100, {type:'ring',  layer:'mid',  x:.50,y:.23,color:'#f6c445',scale:1.08}],
      [4700, {type:'peony', layer:'near', x:.21,y:.22,color:'#f6c445',scale:1.08}],
      [4700, {type:'willow',layer:'near', x:.79,y:.22,color:'#b56ad9',scale:1.08}],
      [5300, {type:'strobe',layer:'mid',  x:.35,y:.16,color:'#fff9ef',scale:.88}],
      [5300, {type:'strobe',layer:'mid',  x:.65,y:.16,color:'#fff9ef',scale:.88}],
      [5900, {type:'ring',  layer:'near', x:.50,y:.25,color:'#69b8ff',scale:1.16}],
      [7600, {type:'finale',layer:'near', x:.50,y:.24,color:'#f6c445',scale:2.28}]
    ];
    const timeScale=state.qa ? .12 : 1;
    timeline.forEach(([at,spec])=>scheduleSceneTask(()=>{spawnFirework(spec);scheduleSceneTask(()=>audio.boom(),Math.max(45,360*timeScale));},at*timeScale));
  }

  function spawnFirework(spec){
    const depth={far:.68,mid:.92,near:1.12}[spec.layer]||1;
    const palette=spec.type==='ring'?['#f6c445','#69b8ff','#b56ad9','#ff8f79','#fff9ef']:[spec.color];
    const baseCounts={peony:42,comet:28,willow:52,strobe:34,fan:30,ring:44,finale:88};
    const count=Math.max(18,Math.round(baseCounts[spec.type]*(state.lowPerformance ? .58 : 1)));
    const particles=[];
    for(let i=0;i<count;i++){
      const ratio=i/Math.max(1,count-1);
      let angle=ratio*Math.PI*2;
      if(spec.type==='fan')angle=-Math.PI*.86+ratio*Math.PI*.72;
      if(spec.type==='strobe')angle=Math.random()*Math.PI*2;
      const widthBasis=Math.max(W,H*.82);
      let speed=widthBasis*(.026+Math.random()*.032)*depth*spec.scale;
      if(spec.type==='willow')speed*=.82;
      if(spec.type==='comet')speed*=1.25;
      if(spec.type==='finale')speed=widthBasis*(.052+Math.random()*.043)*depth*spec.scale;
      const color=palette[i%palette.length];
      particles.push({
        angle,speed,color,
        drag:spec.type==='willow'?.34:.48+Math.random()*.18,
        gravity:(spec.type==='willow'?42:31)+Math.random()*20,
        trail:spec.type==='comet'?.15:.085+Math.random()*.055,
        split:!state.lowPerformance&&(spec.type==='finale'||i%4===0),
        phase:Math.random()*Math.PI*2
      });
    }
    const life=spec.type==='willow'||spec.type==='finale'?4.6:spec.type==='strobe'?2.7:3.5;
    state.fireworks.push({...spec,depth,born:performance.now(),launch:.38,life,particles});
  }

  const chapters=[['Cover',0],['Jan 25',2],['Jan 26 Morning',6],['Jan 26 Evening',9],['Return',11]];
  chapters.forEach(([name,index])=>{const b=document.createElement('button');b.type='button';b.innerHTML=`${name}<small>${beats[index].location||beats[index].title}</small>`;b.addEventListener('click',()=>{el.menu.close();render(index,true);});el.chapters.appendChild(b);});

  function openMenu(){if(typeof el.menu.showModal==='function'&&!el.menu.open)el.menu.showModal();}
  el.menuButton.addEventListener('click',openMenu);el.action.addEventListener('click',()=>handleAction(false));
  el.mute.addEventListener('click',()=>{const muted=audio.toggle();el.mute.textContent=muted?'×':'♫';el.mute.setAttribute('aria-label',muted?'Unmute audio':'Mute audio');});
  el.fullscreen.addEventListener('click',()=>{if(!document.fullscreenElement)document.documentElement.requestFullscreen?.();else document.exitFullscreen?.();});
  el.autoplay.checked=state.autoplay;el.motion.checked=state.reduced;el.bilingual.checked=state.bilingual;el.contrast.checked=state.contrast;
  el.autoplay.addEventListener('change',()=>{
    state.autoplay=el.autoplay.checked;saveSetting('autoplay',state.autoplay);
    el.hint.textContent=state.autoplay?'AUTO-PLAY · M MUTE · ESC MENU':'CLICK / SPACE · M MUTE · ESC MENU';
    clearTimeout(state.timer);state.timer=null;
    if(state.autoplay&&state.contentReady)scheduleAuto(beats[state.index].seconds);
  });
  el.motion.addEventListener('change',()=>{state.reduced=el.motion.checked;saveSetting('motion',state.reduced);el.app.classList.toggle('reduce-motion',state.reduced);});
  el.bilingual.addEventListener('change',()=>{
    state.bilingual=el.bilingual.checked;saveSetting('bilingual',state.bilingual);
    const scene=beats[state.index];setBubble(el.kori,scene.kori,state.bilingual?scene.cn:'');setBubble(el.roo,scene.roo,'');setBubble(el.local,scene.local,'');
  });
  el.contrast.addEventListener('change',()=>{state.contrast=el.contrast.checked;saveSetting('contrast',state.contrast);el.app.classList.toggle('high-contrast',state.contrast);});
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){if(el.menu.open)el.menu.close();else openMenu();return;}
    if(el.menu.open)return;
    if(e.key===' '||e.key==='Enter'){e.preventDefault();handleAction(false);}
    else if(e.key==='Backspace'){e.preventDefault();render(state.index-1,true);}
    else if(e.key.toLowerCase()==='m')el.mute.click();
    else if(e.key.toLowerCase()==='f')el.fullscreen.click();
  });

  const ctx=el.canvas.getContext('2d');let W=0,H=0,DPR=1;
  function resize(){DPR=Math.min(state.lowPerformance?1.35:2,devicePixelRatio||1);W=innerWidth;H=innerHeight;el.canvas.width=W*DPR;el.canvas.height=H*DPR;el.canvas.style.width=W+'px';el.canvas.style.height=H+'px';ctx.setTransform(DPR,0,0,DPR,0,0);}
  addEventListener('resize',resize,{passive:true});resize();
  const hexAlpha=(hex,a)=>{const n=parseInt(hex.slice(1),16);return `rgba(${n>>16},${n>>8&255},${n&255},${a})`;};
  function rounded(x,y,w,h,r,fill){ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fillStyle=fill;ctx.fill();}
  function circle(x,y,r,fill){ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fillStyle=fill;ctx.fill();}
  function drawScene(now){
    ctx.clearRect(0,0,W,H);const s=beats[state.index],t=now/1000;
    if(s.motif==='night-harbour'&&state.fireworksActive){
      ctx.save();
      if(!state.reduced&&state.fireworkIntensity>.68){const shake=(state.fireworkIntensity-.68)*4;ctx.translate(Math.sin(now*.08)*shake,Math.cos(now*.063)*shake*.55);}
      drawFireworks(now);ctx.restore();
    }
    requestAnimationFrame(drawScene);
  }
  function drawTunnel(t){
    const g=ctx.createRadialGradient(W/2,H/2,15,W/2,H/2,Math.max(W,H)*.7);g.addColorStop(0,'#000');g.addColorStop(.16,'#43055e');g.addColorStop(.48,'#16296b');g.addColorStop(1,'#030611');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    ctx.save();ctx.translate(W/2,H/2);ctx.rotate(t*.12);for(let i=0;i<14;i++){ctx.rotate(Math.PI/7);ctx.fillStyle=i%2?'rgba(181,106,217,.28)':'rgba(73,121,220,.25)';ctx.fillRect(45,-2,W*.46,4);}ctx.restore();
  }
  function drawChair(t){
    const sky=ctx.createLinearGradient(0,0,0,H);sky.addColorStop(0,'#78bee0');sky.addColorStop(.56,'#f5d79f');sky.addColorStop(.57,'#5b9d9d');sky.addColorStop(1,'#366e77');ctx.fillStyle=sky;ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#6e9b62';ctx.beginPath();ctx.moveTo(0,H*.55);ctx.quadraticCurveTo(W*.42,H*.42,W,H*.62);ctx.lineTo(W,H);ctx.lineTo(0,H);ctx.fill();
    ctx.fillStyle='#d3a56f';rounded(W*.12,H*.44,W*.18,H*.19,18,'#d3a56f');rounded(W*.14,H*.32,W*.06,H*.19,12,'#d3a56f');rounded(W*.24,H*.34,W*.06,H*.18,12,'#d3a56f');
    for(let i=0;i<8;i++){circle(W*(.43+i*.055),H*(.58+Math.sin(t*1.6+i)*.006),9,i%2?'#f6c445':'#6a1b9a');}
  }
  function drawCathedral(t){
    const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#294a72');g.addColorStop(.55,'#e49c69');g.addColorStop(1,'#162a3f');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);ctx.fillStyle='#d3a56f';ctx.fillRect(W*.31,H*.32,W*.38,H*.54);ctx.fillRect(W*.29,H*.18,W*.1,H*.68);ctx.fillRect(W*.61,H*.18,W*.1,H*.68);
    ctx.beginPath();ctx.moveTo(W*.29,H*.18);ctx.lineTo(W*.34,H*.04);ctx.lineTo(W*.39,H*.18);ctx.fill();ctx.beginPath();ctx.moveTo(W*.61,H*.18);ctx.lineTo(W*.66,H*.04);ctx.lineTo(W*.71,H*.18);ctx.fill();
    for(let i=0;i<8;i++)rounded(W*(.34+i*.045),H*.51,W*.018,H*.12,8,'rgba(255,206,96,.78)');circle(W*.5,H*.4,26,'#874f4d');
  }
  function drawMorning(t){
    const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#b8dded');g.addColorStop(1,'#76a886');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);ctx.strokeStyle='#20334d';ctx.lineWidth=24;ctx.strokeRect(W*.08,H*.1,W*.84,H*.75);ctx.beginPath();ctx.moveTo(W*.5,H*.1);ctx.lineTo(W*.5,H*.85);ctx.stroke();
    for(let i=0;i<26;i++){const x=W*(.13+(i%13)*.061),y=H*(.62+Math.floor(i/13)*.08+Math.sin(t*2+i)*.004);circle(x,y,8,i%3===0?'#6a1b9a':i%3===1?'#c74b51':'#0b2a66');ctx.fillStyle='#24334a';ctx.fillRect(x-6,y+6,12,29);}
  }
  function drawBench(){ctx.fillStyle='#a8c58d';ctx.fillRect(0,0,W,H);ctx.fillStyle='#5e8c76';for(let i=0;i<14;i++)circle(W*(i/13),H*(.12+(i%3)*.05),70,'#5e8c76');rounded(W*.17,H*.57,W*.66,H*.055,8,'#8b5a38');rounded(W*.17,H*.46,W*.66,H*.055,8,'#8b5a38');rounded(W*.22,H*.58,W*.035,H*.24,4,'#303b4f');rounded(W*.75,H*.58,W*.035,H*.24,4,'#303b4f');for(const [x,shirt] of [[.39,'#ead2ad'],[.6,'#d3a56f']]){circle(W*x,H*.41,22,'#704735');rounded(W*x-28,H*.44,56,80,18,shirt);}}
  function drawPark(t){const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#f3d99d');g.addColorStop(1,'#5e8c76');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);ctx.fillStyle='rgba(255,249,239,.5)';for(let i=0;i<18;i++)circle(W*(i/17),H*(.72+Math.sin(i)*.04),45,'rgba(255,249,239,.32)');}
  function drawMontage(t){ctx.fillStyle='#f4e7c6';ctx.fillRect(0,0,W,H);ctx.strokeStyle='#8fbfd2';ctx.lineWidth=H*.22;ctx.beginPath();ctx.moveTo(0,H*.35);ctx.bezierCurveTo(W*.3,H*.15,W*.55,H*.62,W,H*.42);ctx.stroke();ctx.strokeStyle='#6a1b9a';ctx.lineWidth=5;ctx.setLineDash([12,16]);ctx.beginPath();ctx.moveTo(W*.12,H*.65);ctx.bezierCurveTo(W*.35,H*.34,W*.62,H*.74,W*.88,H*.32);ctx.stroke();ctx.setLineDash([]);circle(W*(.15+(Math.sin(t*.4)*.5+.5)*.7),H*.15,22,'#f6c445');}
  function drawHands(t){const g=ctx.createLinearGradient(0,0,W,H);g.addColorStop(0,'#0a1e45');g.addColorStop(1,'#6a1b9a');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);const p=state.reduced ? .72 : (Math.sin(t*.8)*.5+.5),lx=W*(.12+p*.28),rx=W*(.88-p*.28);ctx.fillStyle='#d3a56f';ctx.beginPath();ctx.ellipse(lx,H*.55,110,65,.2,0,Math.PI*2);ctx.fill();ctx.fillStyle='#e8b98a';ctx.beginPath();ctx.ellipse(rx,H*.48,110,65,-.2,0,Math.PI*2);ctx.fill();}
  function drawStars(t){ctx.fillStyle='#020713';ctx.fillRect(0,0,W,H);for(let i=0;i<60;i++){const x=(i*197)%W,y=(i*89+t*7)%H;circle(x,y,1+(i%3),`rgba(255,255,255,${.1+(i%5)*.06})`);}}
  function particlePosition(b,p,age){
    const travel=(1-Math.exp(-p.drag*age))/p.drag;
    return {x:b.x*W+Math.cos(p.angle)*p.speed*travel,y:b.y*H+Math.sin(p.angle)*p.speed*travel+p.gravity*age*age*.5};
  }

  function drawHarbourLighting(active){
    if(!active.length)return;
    const strongest=active.reduce((best,item)=>item.intensity>best.intensity?item:best,active[0]);
    ctx.save();ctx.globalCompositeOperation='screen';
    active.slice(-5).forEach(item=>{
      const {b,intensity}=item,color=b.color;
      const radius=Math.min(W,H)*(.2+b.scale*.055);
      const glow=ctx.createRadialGradient(b.x*W,b.y*H,0,b.x*W,b.y*H,radius);
      glow.addColorStop(0,hexAlpha(color,Math.min(state.reduced ? .08 : .14,intensity*.16)));
      glow.addColorStop(1,hexAlpha(color,0));ctx.fillStyle=glow;ctx.fillRect(0,0,W,H*.68);
      const bands=state.lowPerformance?6:12;
      for(let i=0;i<bands;i++){
        const y=H*(.61+i*.023),spread=W*(.055+i*.005)*b.scale;
        const wobble=Math.sin(i*2.4+b.born*.003)*spread*.14;
        ctx.fillStyle=hexAlpha(color,intensity*(state.reduced ? .075 : .13)*(1-i/bands));
        ctx.fillRect(b.x*W-spread*.5+wobble,y,spread,2+i*.32);
      }
    });
    const rimAlpha=Math.min(.34,strongest.intensity*.32),rim=hexAlpha(strongest.b.color,rimAlpha);
    ctx.strokeStyle=rim;ctx.lineWidth=2.2;ctx.lineJoin='round';
    ctx.beginPath();ctx.moveTo(W*.12,H*.57);ctx.lineTo(W*.17,H*.46);ctx.lineTo(W*.21,H*.57);ctx.lineTo(W*.25,H*.40);ctx.lineTo(W*.29,H*.57);ctx.lineTo(W*.33,H*.47);ctx.lineTo(W*.37,H*.58);ctx.stroke();
    if(!state.lowPerformance){
      [.38,.45,.52,.59,.66,.73,.81,.89].forEach((x,i)=>{ctx.beginPath();ctx.arc(W*x,H*(.82+(i%2)*.025),10+(i%3)*2,Math.PI*1.08,Math.PI*1.92);ctx.stroke();});
    }
    ctx.restore();
  }

  function drawBurst(b,now){
    const totalAge=(now-b.born)/1000;
    if(totalAge<b.launch){
      const p=Math.max(0,totalAge/b.launch),ease=1-Math.pow(1-p,3),x=b.x*W,y=H*.72+(b.y*H-H*.72)*ease;
      const trail=ctx.createLinearGradient(x,y+80*(1-p),x,y);trail.addColorStop(0,hexAlpha(b.color,0));trail.addColorStop(1,hexAlpha(b.color,.85));
      ctx.strokeStyle=trail;ctx.lineWidth=2.2*b.depth;ctx.beginPath();ctx.moveTo(x,y+80*(1-p));ctx.lineTo(x,y);ctx.stroke();return null;
    }
    const age=totalAge-b.launch,alpha=Math.max(0,1-age/b.life);
    if(alpha<=0)return null;
    const pulse=b.type==='strobe'?(state.reduced ? .55 : .38+.62*Math.abs(Math.sin(age*15))):1;
    ctx.save();ctx.globalCompositeOperation='screen';
    for(let i=0;i<b.particles.length;i++){
      const p=b.particles[i],pos=particlePosition(b,p,age),previous=particlePosition(b,p,Math.max(0,age-p.trail));
      let localAlpha=alpha*pulse*b.depth;
      if(b.type==='willow')localAlpha*=Math.min(1,age*1.8);
      ctx.strokeStyle=hexAlpha(p.color,Math.min(.92,localAlpha));ctx.lineWidth=Math.max(.75,2.25*b.depth*(b.type==='finale'?1.16:1));
      ctx.beginPath();ctx.moveTo(pos.x,pos.y);ctx.lineTo(previous.x,previous.y);ctx.stroke();
      if(p.split&&age>.72&&age<2.45){
        const branch=8+age*5;ctx.strokeStyle=hexAlpha(p.color,localAlpha*.48);ctx.lineWidth=Math.max(.55,1.15*b.depth);
        ctx.beginPath();ctx.moveTo(pos.x,pos.y);ctx.lineTo(pos.x+Math.cos(p.angle+.72)*branch,pos.y+Math.sin(p.angle+.72)*branch);ctx.moveTo(pos.x,pos.y);ctx.lineTo(pos.x+Math.cos(p.angle-.72)*branch,pos.y+Math.sin(p.angle-.72)*branch);ctx.stroke();
      }
      if(age>.85&&i%(state.lowPerformance?9:5)===0){
        circle(pos.x+Math.sin(age*2+p.phase)*5,pos.y+age*10,Math.max(.65,1.7*b.depth),hexAlpha(p.color,localAlpha*.5));
      }
    }
    ctx.restore();
    return {b,intensity:alpha*(b.type==='finale'?1:.72)*pulse};
  }

  function drawFireworks(now){
    state.fireworks=state.fireworks.filter(b=>(now-b.born)/1000<b.launch+b.life);
    const order={far:0,mid:1,near:2};state.fireworks.sort((a,b)=>order[a.layer]-order[b.layer]);
    const active=[];for(const burst of state.fireworks){const item=drawBurst(burst,now);if(item)active.push(item);}
    state.fireworkIntensity=active.reduce((max,item)=>Math.max(max,item.intensity),0);
    drawHarbourLighting(active);
  }

  requestAnimationFrame(drawScene);render(0,true);
})();
