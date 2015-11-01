// -------------------------------------------------------------------
// Action selector
// -------------------------------------------------------------------

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



// -------------------------------------------------------------------
// Ordenar layers
// -------------------------------------------------------------------

var sortable = Sortable.create( document.getElementById('secene__panel'), {
	animation: 150,
	ghostClass: "ghost",
});



// -------------------------------------------------------------------
// Ordenar Paineis
// -------------------------------------------------------------------

var sortable = Sortable.create( document.querySelector('.sidebar__container'), {
	animation: 150,
	handle: ".sidebar__panel--trigger",
	ghostClass: "ghost",
});



// -------------------------------------------------------------------
// Aumentar o sidebar
// -------------------------------------------------------------------

var sidebar = document.querySelector('.sidebar'),
    sidebarResizeControl = document.querySelector('.resize-control');

window.addEventListener('resize', function(){
	sidebarResizeControl.style.height = sidebar.querySelector('.sidebar__container').clientHeight + 'px';
});
window.dispatchEvent(new Event('resize'));


sidebarResizeControl.addEventListener('mousedown', initDrag, false);

var startX, startWidth;

function initDrag(e) {
   startX = e.clientX;
   startWidth = parseInt(document.defaultView.getComputedStyle(sidebar).width, 10);
   document.documentElement.addEventListener('mousemove', doDrag, false);
   document.documentElement.addEventListener('mouseup', stopDrag, false);
}

function doDrag(e) {
   sidebar.style.width = (startWidth - e.clientX + startX) + 'px';
}

function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
}



// -------------------------------------------------------------------
// Abre os paineis da sidebar
// -------------------------------------------------------------------

var panelTriggers = document.querySelectorAll('.sidebar__panel--trigger');

for (var i = panelTriggers.length - 1; i >= 0; i--) {
	panelTriggers[i].addEventListener('click', openPanel, false);
};

function openPanel(e) {
	var panel        = e.target.parentNode;

	if ( !panel.classList.contains('active') ) {
		panel.classList.add('active');
	} else {
		panel.classList.remove('active');
	}

	window.dispatchEvent(new Event('resize'));
}



