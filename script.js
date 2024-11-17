let ip = document.getElementById("fname")
ip.addEventlistener("blur", () => {
	ip.value = ip.value.touppercase ()
})