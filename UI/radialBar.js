function setRadialBar(barname, percentage, label) {
	var element = document.getElementById(barname);
	var bar = element.getElementsByClassName("bar")[0];
	var r = bar.getAttribute("r");
	var cir = 2*Math.PI*r;
	bar.style.strokeDasharray = cir;
	bar.style.strokeDashoffset = (1-percentage)*cir;

	if (typeof(label)==='undefined') label = "%";
	element.getElementsByTagName("text")[0].innerHTML = percentage*100 + label;
};