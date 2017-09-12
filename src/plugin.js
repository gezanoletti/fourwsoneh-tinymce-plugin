import _ from 'lodash';

const plugin = (editor) => {
	editor.addButton('fourwsoneh', {
		text: '4Ws-1H',
		icon: false,
		onclick: () => {
			// Open window
			editor.windowManager.open({
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
				  editor.insertContent("<li><strong>When?: </strong>" + e.data.w1 + "</li>");
				  editor.insertContent("<li><strong>Why?: </strong>" + e.data.w2 + "</li>");
				  editor.insertContent("<li><strong>Whom?: </strong>" + e.data.w3 + "</li>");
				  editor.insertContent("<li><strong>What?: </strong>" + e.data.w4 + "</li>");
				  editor.insertContent("<li><strong>How?: </strong>" + e.data.h + "</li>");
				  editor.insertContent("</ul>");
				}
			});
		}
	});
};

export default plugin;
