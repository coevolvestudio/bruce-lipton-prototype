

const invalidMsgs = ["Enter your message here.","penis"];

const errorInvalidMsg = "Please refine that message a bit so that we can provide you the best response.";


const checkMsg = function() {
	console.log("message checked");
};



const send = function() {

	const send1 = document.getElementById("send-1");
	const errorCopy = document.getElementById("error-copy");

	send1.addEventListener("click", function() { 
		const msg = document.getElementById("message-content").value;

		for(i=0; i<invalidMsgs.length; i++) {
			if (msg === invalidMsgs[i]) {
				console.log("invalid message");
				errorCopy.textContent += errorInvalidMsg;
			} else {
				console.log("solid message");
			}
		}

		console.log(msg, invalidMsgs[0]);
	});
};