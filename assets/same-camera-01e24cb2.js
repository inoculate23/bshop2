import{W as l,T as p,G as d,I as m,P as f,M as h,D as w,A as u}from"./ProjectedMaterial.module-876ae037.js";/* empty css              */import{r as o}from"./math-utils-91d3642c.js";const g=document.querySelector("#app"),e=new l({canvas:g,background:"#E6E6E6",showFps:!0,orbitControls:!0});window.webgl=e;const y=new p().load("./images/charles-unsplash.jpg"),a=new d,i=50;for(let n=0;n<i;n++){const c=new m(o(.1,.5)),s=new f({camera:e.camera,texture:y,color:"#3149D5",textureScale:.8}),t=new h(c,s);n<i*.3?(t.position.x=o(-.5,.5),t.position.y=o(-1.1,.5),t.position.z=o(-.3,.3),t.scale.multiplyScalar(1.4)):(t.position.x=o(-1,1),t.position.y=o(-2,2),t.position.z=o(-.5,.5)),t.rotation.x=o(0,Math.PI*2),t.rotation.y=o(0,Math.PI*2),t.rotation.z=o(0,Math.PI*2),s.project(t),a.add(t)}e.scene.add(a);a.rotation.y=Math.PI/2;e.onUpdate(()=>{a.rotation.y-=.003});const r=new w("#ffffff",.6);r.position.set(0,10,10);e.scene.add(r);const M=new u("#ffffff",.6);e.scene.add(M);e.start();
