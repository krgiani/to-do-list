// Add New To-do Text
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val('');
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
});

// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on X to Delete To-do
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(function() {
		$(this).remove();
	});
	event.stopPropagation();
});