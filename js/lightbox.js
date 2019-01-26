// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
function lightbox() {
  modal.style.display = "block";
}

// Obtain ID of Image
$(document).on('click', 'li', function () {
    let id = $('#' + (this.id).toString());
    let img = id.find('img')[0].src;
    let name = id.find('.full-name').text();
    let email = id.find('.email').text();
    let location = id.find('.location').text();
    let phone = id.find('.phone').text();
    let address = id.find('.address').text();
    let birthday = id.find('.birthday').text();

    var modal_content = `
    	<div id='current'>
    		<img src="${img}">
    		<h3 class="full-name">${name}</h3>
	    	<p class="email">${email}</p>
	    	<p class="location">${location}</p>
	    	<hr>
	    	<p class="phone">${phone}</p>
	    	<p class="address">${address}</p>
	    	<p class="birthday">${birthday}</p>
		</div>
    `;
    $('.modal-data').prepend(modal_content); 
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  $('#current').remove()
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    $('#current').remove()
  }
}