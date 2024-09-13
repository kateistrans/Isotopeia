var crs = 0;
function parseToJs(jsonStr, pushToJtopiaList=true) {
	var j;
	try {
		j = JSON.parse(localStorage.getItem("jtopia"));
		j.push(JSON.parse(jsonStr));
		if(!pushToJtopiaList) localStorage.setItem("jtopia", JSON.stringify(j));
	} catch {
		localStorage.setItem("jtopia", stockBuildingsJsonStr);
		return [];
	}
	var jsond = JSON.parse(jsonStr);
	var li = [];
	j.forEach((json) => {
		var b = json.buildings == null ? {e:[], en:[]} : json.buildings;
		var cb = json.customBehaviors;
		eval(cb);
		var eb = b.e;
		var enb = b.en;
		var ub = b.u;
		try{eb.forEach((i) => {
			var x=new BuildingE(i.price, i.name, i.perSecond, i.id, crs);
			hooks.push(x);
			li.push(x);
			crs++;
		});}catch(e){console.log(e)}
		try{enb.forEach((i) => {
			var x=new BuildingEN(i.price, i.name, i.perSecond, i.id, crs);
			hooks.push(x);
			li.push(x);
			crs++;
		});}catch(e){console.log(e)}
		try{ub.forEach((i) => {
			var x=new BuildingU(i.price, i.name, i.perSecond, i.id, crs);
			hooks.push(x);
			li.push(x);
			crs++;
		});}catch(e){console.log(e)}
	})
	addItems();
	return li;
}
