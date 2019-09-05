

const nav = function() {
	const about = document.getElementById("about");
	const aboutDropdown =  document.getElementById("about-dropdown");

	about.addEventListener("click", function() {
		aboutDropdown.classList.toggle("ui__hidden");
		resourcesDropdown.classList.add("ui__hidden");
		storeDropdown.classList.add("ui__hidden");
		contactDropdown.classList.add("ui__hidden");
	});

	const resources = document.getElementById("resources");
	const resourcesDropdown =  document.getElementById("resources-dropdown");

	resources.addEventListener("click", function() {
		aboutDropdown.classList.add("ui__hidden");
		resourcesDropdown.classList.toggle("ui__hidden");
		storeDropdown.classList.add("ui__hidden");
		contactDropdown.classList.add("ui__hidden");
	});

	const store = document.getElementById("store");
	const storeDropdown =  document.getElementById("store-dropdown");

	store.addEventListener("click", function() {
		aboutDropdown.classList.add("ui__hidden");
		resourcesDropdown.classList.add("ui__hidden");
		storeDropdown.classList.toggle("ui__hidden");
		contactDropdown.classList.add("ui__hidden");
	});

	const contact = document.getElementById("contact");
	const contactDropdown =  document.getElementById("contact-dropdown");

	contact.addEventListener("click", function() {
		aboutDropdown.classList.add("ui__hidden");
		resourcesDropdown.classList.add("ui__hidden");
		storeDropdown.classList.add("ui__hidden");
		contactDropdown.classList.toggle("ui__hidden");
	});
};