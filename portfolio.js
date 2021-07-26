

function copy(){
	var mailid = document.createElement("mailid");
	mailid.value = "pruthvi318@gmail.com";
	mailid.style.top = "0";
	mailid.style.left = "0";
	mailid.style.position = "fixed";
	document.body.appendChild(mailid);
	mailid.focus();
	mailid.select();
	console.log(mailid);
	console.log(mailid);
	//mailid.setSelectionRange;
	document.execCommand("copy");
	document.body.removeChild(mailid);
}