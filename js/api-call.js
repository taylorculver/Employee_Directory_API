// ---------------------------------------------
//  FETCH FUNCTIONS
// ---------------------------------------------

function fetchData(url) {
return fetch(url)
	.then(checkStatus)
	.then(response => response.json())
	.catch(error => console.log('Uh Oh! Looks like there was a problem', error))
}

fetchData('https://randomuser.me/api/?results=12')
.then(data => $.each(data.results, function(key, value) { 
					const contact = `
				    	<li id=${12 - key}>
				    		<a onclick='lightbox();'>
				    			<div class="card">
					    			<div class="circle"><img src="${value.picture.large}"></div>
							    	<div class="contact-info">
								    	<h3 class='full-name'>${value.name.first} ${value.name.last}</h3>
								    	<p class='email'>${value.email}</p>
								    	<p class='location'>${value.location.city}</p>
								    	<p class='phone' style='display: none'>${value.phone}</p>
								    	<p class='address' style='display: none'>${value.location.street}, ${value.location.state} ${value.location.postcode}</p>
								    	<p class='birthday' style='display: none'>Birthday: ${dateModifier(value.dob.date)}</p>    		
							    	</div>
							    </div>
						    </a>
					    </li>
						`;
					$('.contacts-list').prepend(contact);
					})
	)
;

// ---------------------------------------------
//  HELPER FUNCTIONS
// ---------------------------------------------
function checkStatus(response) {
	if (response.ok) {
		return Promise.resolve(response);
	} else {
		return Promise.reject(new Error(response.statusText));
	}
}

function dateModifier(value) {
	const date = new Date(value);
	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();
	return ('0' + month).slice(-2) + '/' + ('0' + day).slice(-2) + '/' + year 
}