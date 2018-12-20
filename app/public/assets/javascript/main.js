$(document).ready(function() {
  $("select").formSelect();
  $('select').material_select();
			$('.modal').modal({
				dismissible: false,
				opacity: .5,
				inDuration: 300,
				outDuration: 200,
				startingTop: '4%', 
				endingTop: '10%'
			});
});
