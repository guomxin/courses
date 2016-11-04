var categories_template, animals_template, animal_template, slideshow_template;

var current_category = animals_data.category[0];
var current_animal = current_category.animals[0];

function showTemplate(template, data){
	var html = template(data);
	$('#content').html(html);
}

$(document).ready(function(){
    var source = $("#categories-template").html();
	categories_template = Handlebars.compile(source);
    
    source = $('#animals-template').html();
    animals_template = Handlebars.compile(source);
    
     source = $('#animal-template').html();
    animal_template = Handlebars.compile(source);
    
    $("#categories-tab").click(function (event) {
        event.preventDefault();
		showTemplate(categories_template, animals_data);

		$(".nav-tabs .active").removeClass("active");
		$("#categories-tab").addClass("active");

		$(".category-name").click(function (event){
			event.preventDefault();
			var index = $(this).data("id");
            current_category = animals_data.category[index];
            $('#animals-tab').click();
		});
	});
    
    $('#animals-tab').click(function(event) {
        event.preventDefault();
        
        $(".nav-tabs .active").removeClass("active");
		$("#animals-tab").addClass("active");
        
        showTemplate(animals_template, current_category);
        
        $('.animal-thumbnail').click(function(event) {
            event.preventDefault();
            var index = $(this).data("id");
            current_animal = current_category.animals[index];
            showTemplate(animal_template, current_animal);
        });
    });
    
    
    $('#categories-tab').click();
})

