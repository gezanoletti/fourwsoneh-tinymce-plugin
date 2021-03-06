tinymce.PluginManager.requireLangPack('fourwsoneh', 'es');

import _ from 'lodash';

const plugin = (editor) => {
	var createForm = function() {
		return {
			width: 600,
			height: 230,
			title: '4Ws and 1H',
			body: [
				{type: 'textbox', name: 'w1', label: 'When?'},
				{type: 'textbox', name: 'w2', label: 'Why?'},
				{type: 'textbox', name: 'w3', label: 'Whom?'},
				{type: 'textbox', name: 'w4', label: 'What?'},
				{type: 'textbox', name: 'h', label: 'How?'},
			],
			onsubmit(e) {         
				editor.insertContent("<ul>");
				editor.insertContent("<li>" + e.data.w1 + "</li>");
				editor.insertContent("<li>" + e.data.w2 + "</li>");
				editor.insertContent("<li>" + e.data.w3 + "</li>");
				editor.insertContent("<li>" + e.data.w4 + "</li>");
				editor.insertContent("<li>" + e.data.h + "</li>");
				editor.insertContent("</ul>");
			}
		};
	};
	
	editor.addButton('fourwsoneh', {
		text: '4Ws-1H',
		icon: false,
		onclick: () => {
			// Open window
			editor.windowManager.open(createForm());
		}
	});
	
	// Adds a menu item to the tools menu
	editor.addMenuItem('fourwsoneh', {
		text: '4Ws-1H',
		context: 'tools',
		onclick: function() {			
			editor.windowManager.open(createForm());
		}
	});
};

export default plugin;
