var intervals=[],prestigeCalc=(t,e,i)=>Math.max(Math.floor(t/1e20+e/15e20+i/1e22),0);let calculatePriceIter=t=>Math.floor(1.25*t),clearForReset=()=>intervals.forEach(window.clearInterval),calculatePrice=(t,e)=>{let i=t;for(let t=0;t<e;t++)i=calculatePriceIter(i);return i};function confirmPrestige(){save(),clearForReset(),actuallySave=!1,localStorage.setItem("ucc",JSON.stringify([0,0,0])),localStorage.setItem("upg",JSON.stringify([0,0,[]])),localStorage.setItem("cst",JSON.stringify([0,0])),localStorage.setItem("tl",'[[""]]'),localStorage.setItem("counts","{}"),localStorage.setItem("jtopia",stockBuildingsJsonStr),localStorage.setItem("prestige",(null==localStorage.getItem("prestige")?prestigeCalc(elncn,elnncn,upcn):parseInt(localStorage.getItem("prestige"))+prestigeCalc(elncn,elnncn,upcn)).toLocaleString("fullwide",{useGrouping:!1})),parseToJs(stockBuildingsJsonStr),load(),prestigeLevel=JSON.parse(localStorage.getItem("prestige")),document.getElementById("prestigeval").innerHTML=toUnitName(prestigeLevel)}var prestigeLevel=null==localStorage.getItem("prestige")?0:parseInt(localStorage.getItem("prestige"));document.getElementById("statsid").innerHTML+=`
	<h2>Prestige</h2>
 	Positrons: 
  	<span id='prestigeval'>0</span> <br />
   	<input type='checkbox' onclick='if(this.checked) { prestigeButton.removeAttribute("disabled"); } else { prestigeButton.setAttribute("disabled", ""); }' />
    	<button disabled class='oxygen blackcol' id='prestigeButton' onclick='confirmPrestige();'>Prestige for poistrons</button>`,document.getElementById("prestigeval").innerHTML=`${toUnitName(prestigeLevel)} (+${toUnitName(prestigeLevel)}% boost)`;let getCounts=t=>null==buildingCounts[t]?0:buildingCounts[t];function countAll(){var e=0;try{toload.forEach(t=>{t=t.replace(/(new Building[A-Z]+)?/g,""),t=JSON.parse("["+t.replace(/\'/g,'"').substring(1,t.length-1)+"]")[3];null==getCounts(t)&&(buildingCounts[t]=0),buildingCounts[t]++,e++})}catch{}return e}class BuildingEN{constructor(t,e,i,n,s){this.price=t,this.initPrice=t,this.name=e,this.ps=i,this.id=n,this.rspot=s,this.count=getCounts(this.id),runners.push(()=>{if(elnncn>=this.price-this.price/4)try{document.getElementById(n).style.display="block",document.getElementById(n+"2").style.display="block"}catch{}if(elnncn>=this.price)try{document.getElementById(n).removeAttribute("disabled")}catch{}}),null==buildingCounts[this.id]&&(buildingCounts[this.id]=0)}buy(t=1){this.refreshCount();for(var e=0;e<t;e++){if(!(elnncn>=this.price))return console.log("not enough"),this.refreshCount();elnncn-=this.price,this.price=calculatePrice(this.initPrice,this.count),document.getElementById(this.id+"uc").innerHTML=toUnitName(calculatePrice(this.initPrice,this.count))+" V<sub>e</sub> | Count: "+this.count,document.getElementById(this.id).setAttribute("onclick",`new BuildingEN(${this.initPrice}, '${this.name}', ${this.ps}, '${this.id}').buy(parseInt(buyAmount.value));  update();`),this.interval(),buildingCounts[this.id]++,tosave[this.rspot]++,this.refreshCount(),toload.push(`new BuildingEN(${this.initPrice}, '${this.name}', ${this.ps}, '${this.id}')`),save(),0}}interval(){intervals.push(window.setInterval(()=>{electronn(this.ps*Math.floor(1+prestigeLevel/100)),update()},1e3))}buildUI(t=!1){null!=document.getElementById(this.id)&&!t||(document.getElementById("upgr").innerHTML+=`<p>
    <button id="${this.id}" disabled onclick=" new BuildingEN(${calculatePrice(this.initPrice,this.count)}, '${this.name}', ${this.ps}, '${this.id}').buy(parseInt(buyAmount.value));  update();" style="display: none;">${this.name}</button>
    <p id="${this.id}2" style="display: none;">Cost: <span id="${this.id}uc">${toUnitName(this.price)} V<sub>e</sub> | Count: ${this.count}</span></p>
    </p>`)}refreshCount(){this.count=getCounts(this.id),this.price=calculatePrice(this.initPrice,this.count),document.getElementById(this.id+"uc").innerHTML=toUnitName(calculatePrice(this.initPrice,this.count))+" V<sub>e</sub> | Count: "+this.count}refreshIntervals(){this.refreshCount();for(var t=0;t<this.count;t++)this.interval()}}class BuildingE{constructor(t,e,i,n,s){this.price=t,this.initPrice=t,this.name=e,this.ps=i,this.id=n,this.rspot=s,this.count=getCounts(this.id),runners.push(()=>{if(elncn>=this.price-this.price/4)try{document.getElementById(n).style.display="block",document.getElementById(n+"2").style.display="block"}catch{}if(elncn>=this.price)try{document.getElementById(n).removeAttribute("disabled")}catch{}}),null==buildingCounts[this.id]&&(buildingCounts[this.id]=0)}buy(t=1){this.refreshCount();for(var e=0;e<t;e++){if(!(elncn>=this.price))return console.log("not enough"),this.refreshCount();elncn-=this.price,this.price=calculatePrice(this.initPrice,this.count),document.getElementById(this.id+"uc").innerHTML=toUnitName(calculatePrice(this.initPrice,this.count))+" e<sup>-</sup> | Count: "+this.count,document.getElementById(this.id).setAttribute("onclick",`new BuildingE(${this.initPrice}, '${this.name}', ${this.ps}, '${this.id}').buy(parseInt(buyAmount.value));  update();`),this.interval(),buildingCounts[this.id]++,tosave[this.rspot]+=1,this.refreshCount(),toload.push(`new BuildingE(${this.initPrice}, '${this.name}', ${this.ps}, '${this.id}')`),0}}interval(){intervals.push(window.setInterval(()=>{elncn+=this.ps*Math.floor(1+prestigeLevel/100),update()},1e3))}buildUI(t=!1){null!=document.getElementById(this.id)&&!t||(document.getElementById("upgr").innerHTML+=`<p>
		<button id="${this.id}" disabled onclick="new BuildingE(${this.initPrice}, '${this.name}', ${this.ps}, '${this.id}').buy(parseInt(buyAmount.value));  update();" style="display: none;">${this.name}</button>
		<p id="${this.id}2" style="display: none;">Cost: <span id="${this.id}uc">${toUnitName(calculatePrice(this.initPrice,this.count))} e<sup>-</sup> | Count: ${this.count}</span></p>
		</p>`)}refreshCount(){this.count=getCounts(this.id),this.price=calculatePrice(this.initPrice,this.count),document.getElementById(this.id+"uc").innerHTML=toUnitName(calculatePrice(this.initPrice,this.count))+" e<sup>-</sup> | Count: "+this.count}refreshIntervals(){this.refreshCount();for(var t=0;t<this.count;t++)this.interval()}}class BuildingU{constructor(t,e,i,n,s){this.price=t,this.initPrice=t,this.name=e,this.ps=i,this.id=n,this.rspot=s,this.count=getCounts(this.id),runners.push(()=>{if(upcn>=this.price-this.price/4)try{document.getElementById(n).style.display="block",document.getElementById(n+"2").style.display="block"}catch{}if(upcn>=this.price)try{document.getElementById(n).removeAttribute("disabled")}catch{}}),null==buildingCounts[this.id]&&(buildingCounts[this.id]=0)}buy(t=1){this.refreshCount();for(var e=0;e<t;e++){if(!(upcn>=this.price))return console.log("not enough"),this.refreshCount();upcn-=this.price,this.price=calculatePrice(this.initPrice,this.count),document.getElementById(this.id+"uc").innerHTML=toUnitName(calculatePrice(this.initPrice,this.count))+" u | Count: "+this.count,document.getElementById(this.id).setAttribute("onclick",`new BuildingU(${this.initPrice}, '${this.name}', ${this.ps}, '${this.id}').buy(parseInt(buyAmount.value));  update();`),this.interval(),buildingCounts[this.id]++,tosave[this.rspot]+=1,this.refreshCount(),toload.push(`new BuildingU(${this.initPrice}, '${this.name}', ${this.ps}, '${this.id}')`),0}}interval(){intervals.push(window.setInterval(()=>{upcn+=this.ps*Math.floor(1+prestigeLevel/100),update()},1e3))}buildUI(t=!1){null!=document.getElementById(this.id)&&!t||(document.getElementById("upgr").innerHTML+=`<p>
		<button id="${this.id}" disabled onclick=" new BuildingU(${this.initPrice}, '${this.name}', ${this.ps}, '${this.id}').buy(parseInt(buyAmount.value));  update();" style="display: none;">${this.name}</button>
		<p id="${this.id}2" style="display: none;">Cost: <span id="${this.id}uc">${toUnitName(calculatePrice(this.initPrice,this.count))} u | Count: ${this.count}</span></p>
		</p>`)}refreshCount(){this.count=getCounts(this.id),this.price=calculatePrice(this.initPrice,this.count),document.getElementById(this.id+"uc").innerHTML=toUnitName(calculatePrice(this.initPrice,this.count))+" u | Count: "+this.count}refreshIntervals(){this.refreshCount();for(var t=0;t<this.count;t++)this.interval()}}