// Action selector

// Expandir
var expandOptions = document.querySelectorAll('.action__add .expand-options');

for (var i = expandOptions.length - 1; i >= 0; i--) {

	expandOptions[i].addEventListener('click', function(){

		var actionSelector = this.parentNode.parentNode;

		if ( !actionSelector.classList.contains('expanded') ) {
			actionSelector.classList.add('expanded');
		} else {
			actionSelector.classList.remove('expanded');
		}

	}, false);
};


// Selecionar opções
var ationOptions = document.querySelectorAll('.action__selector__options--option');

for (var i = ationOptions.length - 1; i >= 0; i--) {

	ationOptions[i].addEventListener('click', function(){

		var selectedOption = this.getAttribute('data-action'),
		    actionSelector = this.parentNode.parentNode;
		    icon           = actionSelector.querySelector('.icon');

		actionSelector.classList.remove('expanded');

		icon.classList.remove('expanded');

		icon.setAttribute('data-action', selectedOption);


	}, false);

};
