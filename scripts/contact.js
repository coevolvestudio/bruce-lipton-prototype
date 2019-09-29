
// VALIDATE & SEND
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


// HELP ARTICLE DATA

	// {title: "string", summary: "string", link:"URL",
	// tags: [
	// 		{tag: "string", value: int},
	// 		{tag: "string", value: int},
	// 		{tag: "string", value: int}
	// 	]
	// }

	const articles = [
		{title: "Reprogram the Subconscious while Asleep", summary: "Bruce Lipton, with special guest Niel Gaiman, explains the methods for accessing dreams with nothing but a spellbook bound in human skin and a handful of sand.", link:"URL",
		tags: [
			{tag: "beliefchange", value: 8},
			{tag: "dreams", value: 5},
			{tag: "habits", value: 4}
			]
		},

		{title: "Updating Your Payment Details", summary: "In this video Deacon will be walking you through the steps taken to change your card on file, cancel your account, and more.", link:"URL",
		tags: [
			{tag: "accountmgmt", value: 9},
			{tag: "finances", value: 3},
			{tag: "support", value: 7}
			]
		},

		{title: "Inviting Bruce to Speak at Your Event", summary: "Bruce Lipton loves to engage intimately with his audience. If you're hosting an event, this article will help you determine whether Bruce Lipton is a good fit, and the steps involved in making that connection.", link:"URL",
		tags: [
			{tag: "events", value: 8},
			{tag: "invitebruce", value: 9},
			{tag: "support", value: 4}
			]
		},

		{title: "Stream Bruce's Content On the Go", summary: "Get the most out of your commute, your household tasks, or your workout time by listening to Bruce when it's most convenient.", link:"URL",
		tags: [
			{tag: "lifestyle", value: 7},
			{tag: "support", value: 4},
			{tag: "habits", value: 6}
			]
		},

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: int},
			{tag: "string", value: int},
			{tag: "string", value: int}
			]
		},

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: int},
			{tag: "string", value: int},
			{tag: "string", value: int}
			]
		},

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: int},
			{tag: "string", value: int},
			{tag: "string", value: int}
			]
		}

	{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: int},
			{tag: "string", value: int},
			{tag: "string", value: int}
			]
		},

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: int},
			{tag: "string", value: int},
			{tag: "string", value: int}
			]
		},

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: int},
			{tag: "string", value: int},
			{tag: "string", value: int}
			]
		},

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: int},
			{tag: "string", value: int},
			{tag: "string", value: int}
			]
		}

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: int},
			{tag: "string", value: int},
			{tag: "string", value: int}
			]
		},

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: int},
			{tag: "string", value: int},
			{tag: "string", value: int}
			]
		},

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: int},
			{tag: "string", value: int},
			{tag: "string", value: int}
			]
		},

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: int},
			{tag: "string", value: int},
			{tag: "string", value: int}
			]
		}

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: int},
			{tag: "string", value: int},
			{tag: "string", value: int}
			]
		},

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: int},
			{tag: "string", value: int},
			{tag: "string", value: int}
			]
		},

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: int},
			{tag: "string", value: int},
			{tag: "string", value: int}
			]
		},

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: int},
			{tag: "string", value: int},
			{tag: "string", value: int}
			]
		}
	]

// SORT DISPLAY

	// let articleNames = articles.map()

	const supportArticles = articles.filter(function(article) {
		if(article.tags[2].tag === "support") {
			return true;
		}
	});

	console.log(supportArticles);









