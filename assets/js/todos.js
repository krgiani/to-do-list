
// Check Off Specific Todos By Clicking
$("li").click(function() {
	$(this).toggleClass("completed");
});

// Click on X to Delete To-do
$("span").click(function(event) {
	$(this).parent().fadeOut(function() {
		$(this).remove();
	});
	event.stopPropagation();
});