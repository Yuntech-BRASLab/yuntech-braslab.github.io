new Vue({
	el: '#app',
	data: {
		annolist:[],
		classlist:[]
	},
	mounted: function ()	{
	var self = this;
	var xmlhttp = new XMLHttpRequest();
	var url = "https://yuntech-braslab.github.io/xmlhttp/annolist.txt";
	var classurl = "https://yuntech-braslab.github.io/xmlhttp/classlist.txt";
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		self.annolist = JSON.parse(xmlhttp.responseText);
		console.log(JSON.parse(xmlhttp.responseText));
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	var xml2http = new XMLHttpRequest();
	xml2http.onreadystatechange = function() {
	    if (xml2http.readyState == 4 && xml2http.status == 200) {
		self.classlist = JSON.parse(xml2http.responseText);
		console.log(JSON.parse(xml2http.responseText));
		}
	};
	xml2http.open("GET", classurl, true);
	xml2http.send();
	}

})
