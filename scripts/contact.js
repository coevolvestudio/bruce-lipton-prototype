

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
	// 	],
	//	rank: 0
	// }

	let tagList = [
		{name: "beliefchange", rank: 0, 
			keywords: ["belief", "sunconscious", "reprogramming"]
		},
		{name: "belief", rank: 0, 
			keywords: ["belief", "thinking", "wiring"]
		},
		{name: "habits", rank: 0,
			keywords: ["habits", "routine", "actions", "pattern"]
		},
		{name: "accountmgmt", rank: 0,
			keywords: ["account", "membership", "profile"]
		},
		{name: "finances", rank: 0,
			keywords: ["finances", "money", "budget"]
		},
		{name: "support", rank: 0,
			keywords: ["support", "customer", "help"]
		},
		{name: "events", rank: 0,
			keywords: ["summit", "event", "invite"]
		},
		{name: "invitebruce", rank: 0,
			keywords: ["invite", "speaker", "coaching"]
		},
		{name: "community", rank: 0,
			keywords: ["community", "participation", "conversation"]
		},
		{name: "lifestyle", rank: 0,
			keywords: ["lifestyle", "way", "pattern"]
		},
		{name: "purchases", rank: 0,
			keywords: ["purchase", "bought", "receive"]
		},
		{name: "childhood", rank: 0,
			keywords: ["childhood", "kid", "young", "taught"]
		},
		{name: "psychk", rank: 0,
			keywords: ["psychk", "Psych-K", "Psych K"]
		},
		{name: "treatment", rank: 0,
			keywords: ["treatment", "diagnosis", "cure"]
		}
	]

	const articles = [
		{title: "Reprogram the Subconscious while Asleep", summary: "Bruce Lipton, with special guest Niel Gaiman, explains the methods for accessing dreams with nothing but a spellbook bound in human skin and a handful of sand.", link:"URL",
		tags: [
			{tag: "beliefchange", value: 9},
			{tag: "belief", value: 9},
			{tag: "habits", value: 4}
			],
		rank: 0
		},

		{title: "Updating Your Payment Details", summary: "In this video Deacon will be walking you through the steps taken to change your card on file, cancel your account, and more.", link:"URL",
		tags: [
			{tag: "accountmgmt", value: 9},
			{tag: "finances", value: 3},
			{tag: "support", value: 7}
			],
		rank: 0
		},

		{title: "Inviting Bruce to Speak at Your Event", summary: "Bruce Lipton loves to engage intimately with his audience. If you're hosting an event, this article will help you determine whether Bruce Lipton is a good fit, and the steps involved in making that connection.", link:"URL",
		tags: [
			{tag: "events", value: 8},
			{tag: "invitebruce", value: 9},
			{tag: "support", value: 4},
			{tag: "community", value: 3}
			],
		rank: 0
		},

		{title: "Stream Bruce's Content On the Go", summary: "Get the most out of your commute, your household tasks, or your workout time by listening to Bruce when it's most convenient.", link:"URL",
		tags: [
			{tag: "lifestyle", value: 7},
			{tag: "support", value: 4},
			{tag: "habits", value: 6}
			],
		rank: 0
		},

		{title: "Find Your Previous Purchases", summary: "Downloads, streaming content and all other previous purchases are still available. This video shows you how to find them.", link:"URL",
		tags: [
			{tag: "support", value: 7},
			{tag: "purchases", value: 8},
			{tag: "lifestyle", value: 2}
			],
		rank: 0
		},

		{title: "Self-Limiting Beliefs", summary: "Understand what makes a belief self-limiting, where they come from, and the reasons they're so hard to change", link:"URL",
		tags: [
			{tag: "belief", value: 9},
			{tag: "beliefchange", value: 7},
			{tag: "childhood", value: 5}
			],
		rank: 0
		},

		{title: "Overview of Belief Change Modalities", summary: "There are many modalities of belief change available. This article reviews several to help you determine which is right for you.", link:"URL",
		tags: [
			{tag: "beliefchange", value: 9},
			{tag: "belief", value: 6},
			{tag: "habits", value: 4},
			{tag: "childhood", value: 2},
			{tag: "lifestyle", value: 4}
			],
		rank: 0
		},

		{title: "Getting Started with Psych-K", summary: "Psych-K is a popular method for bringing balance to unproductive beliefs. In this article Rob Williams explains how to get started.", link:"URL",
		tags: [
			{tag: "psychk", value: 9},
			{tag: "beliefchange", value: 5},
			{tag: "treatment", value: 7}
			],
		rank: 0
		},

		{title: "Financial and Geographic Limitations and Psych-K Treatment", summary: "Rob Williams gives advice to seekers finding it difficult to attend Psych-K events.", link:"URL",
		tags: [
			{tag: "psychk", value: 8},
			{tag: "lifestyle", value: 3},
			{tag: "treatment", value: 6},
			{tag: "finances", value: 6}
			],
		rank: 0
		},

		{title: "Community Support for Belief Change", summary: "Premium membership to brucelipton.com is a fantastic way to find real human support on your journey to a renewed subconscious.", link:"URL",
		tags: [
			{tag: "community", value: 7},
			{tag: "beliefchange", value: 6},
			{tag: "lifestyle", value: 3},
			{tag: "habits", value: 5}
			],
		rank: 0
		},

		{title: "Premium Membership Details", summary: "Learn about all of the features and benefits of premium membership here at brucelipton.com.", link:"URL",
		tags: [
			{tag: "community", value: 5},
			{tag: "lifestyle", value: 4},
			{tag: "support", value: 7},
			{tag: "finances", value: 6}
			],
		rank: 0
		},

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: 0},
			{tag: "string", value: 0},
			{tag: "string", value: 0}
			],
		rank: 0
		},

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: 0},
			{tag: "string", value: 0},
			{tag: "string", value: 0}
			],
		rank: 0
		},

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: 0},
			{tag: "string", value: 0},
			{tag: "string", value: 0}
			],
		rank: 0
		},

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: 0},
			{tag: "string", value: 0},
			{tag: "string", value: 0}
			],
		rank: 0
		},

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: 0},
			{tag: "string", value: 0},
			{tag: "string", value: 0}
			],
		rank: 0
		},

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: 0},
			{tag: "string", value: 0},
			{tag: "string", value: 0}
			],
		rank: 0
		},

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: 0},
			{tag: "string", value: 0},
			{tag: "string", value: 0}
			],
		rank: 0
		},

		{title: "string", summary: "string", link:"URL",
		tags: [
			{tag: "string", value: 0},
			{tag: "string", value: 0},
			{tag: "string", value: 0}
			],
		rank: 0
		}
	]

// SORT DISPLAY

	// KEY WORDS
		const keyWords = [
			"belief",
			"account",
			"purchase",
			"bought",
			"receive",
			"summit",
			"son",
			"daughter",
			"listen",
			"podcast",
			"event",
			"lecture",
			"subconscious",
			"Psych-K",
			"psychk",
			"Psych K",
			"help",
			"desperate",
			"emergency",
			"cancer",
			"diagnosis",
			"fatal",
			"come",
			"payment",
			"support",
			"reprogramming",
			"wiring",
			"diagnosis",
			"treatment",
			"cure",
			"routine",
			"habits",
			"actions",
			"pattern",
			"lifestyle",
			"way",
			"childhood",
			"kid",
			"young",
			"taught"
		]

			// The keyword list does not currently account for keywords followed imeediately by punctuation.

	const msgBoxListener = function() {

		let activeKeywords = [];
		const msgBox = document.getElementById("message-content");

		msgBox.addEventListener('keydown', awaitSpace);

		function awaitSpace(e) {
			if(e.code === "Space") {
				readMsg();
			} else {
				return;
			}
		}	

		function readMsg() {
			let msg = document.getElementById("message-content").value;
			let msgWords = msg.split(" ");
			activeKeywords = [];

			for(i=0; i<msgWords.length; i++) {
				let word = msgWords[i];

				for(j=0; j<keyWords.length; j++) {
					if(word === keyWords[j]) {
						activeKeywords.push(word);
						
					}
				}
			}
			pickArticles();
		} 

		function pickArticles() {

			rankTags();

			console.log(activeKeywords);
		}



		function rankTags() {

			let rankedTags = tagList;

			for(i=0;i<rankedTags.length; i++) {
				rankedTags[i].rank = 0;
				// console.log(rankedTags[i]);
			}

			for(i=0; i<activeKeywords.length; i++) {
				for(j=0; j<rankedTags.length; j++) {
					for(k=0; k<rankedTags[j].keywords.length; k++) {
						if(activeKeywords[i] === rankedTags[j].keywords[k]) {
							rankedTags[j].rank += 1;
							// console.log("hit");
						} else {
							// console.log("miss");
						}
					};
				};
			};

			console.log(rankedTags);

			// This piece ranks the articles

			for(i=0; i<articles.length; i++) {
				for(j=0; j<articles[i].tags.length; j++)
					for(k=0;k<rankedTags.length; k++) {
						if( articles[i].tags[j].tag === rankedTags[k].name) {
							articles[i].rank += rankedTags[k].rank;
							// console.log("match");
						} else {
							// console.log("mismatch");
						}
					}

				// console.log(articles[i].title + ", rank: " + articles[i].rank);
			}

			deliverSuggestions();
		}


		


		function deliverSuggestions() {

			// SETTING UP VARIABLES
				let suggestionBoxOne = document.getElementById("suggestion-one");
				let suggestionBoxTwo = document.getElementById("suggestion-two");
				let suggestionBoxThree = document.getElementById("suggestion-three");
				let suggestionBoxFour = document.getElementById("suggestion-four");

				let rankedArticles = articles.sort(function(a1, a2) {
					if(a1.rank > a2.rank) {
						return -1;
					} else {
						return 1;
					}
				});

				for (i=0; i<rankedArticles.length; i++) {
					console.log("article: " + rankedArticles[i].title + ", rank: " + rankedArticles[i].rank);
				}
			
			// PUTTING STUFF IN BOXES
				suggestionBoxOne.innerHTML = '<h4 class="contact__suggestion-title">' + rankedArticles[0].title +
					'</h4>' +
					'<p class="contact__suggestion-intro">' +
					rankedArticles[0].summary	+
					'</p>';

					suggestionBoxTwo.innerHTML = '<h4 class="contact__suggestion-title">' + rankedArticles[1].title +
					'</h4>' +
					'<p class="contact__suggestion-intro">' +
					rankedArticles[1].summary	+
					'</p>';

					suggestionBoxThree.innerHTML = '<h4 class="contact__suggestion-title">' + rankedArticles[2].title +
					'</h4>' +
					'<p class="contact__suggestion-intro">' +
					rankedArticles[2].summary	+
					'</p>';

					suggestionBoxFour.innerHTML = '<h4 class="contact__suggestion-title">' + rankedArticles[3].title +
					'</h4>' +
					'<p class="contact__suggestion-intro">' +
					rankedArticles[3].summary	+
					'</p>';

		}

	}





