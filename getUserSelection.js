function getUserSelection(){
	let userSelection;
	if (window.getSelection) { //现代浏览器
	    userSelection = window.getSelection();
	} else if (document.selection) { //IE浏览器 考虑到Opera，应该放在后面
	    userSelection = document.selection.createRange();
	}
	return userSelection;
}
module.exports = getUserSelection