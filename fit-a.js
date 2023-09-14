if (typeof nw !== 'undefined') {
	if (!localStorage.getItem('ip')) {
		localStorage.setItem('ip', 'localhost');
	}

	var win = nw.Window.get();

	// 创建窗口并获取窗口对象               
	nw.Window.open('https://github.com/nwjs/nw.js', {},
	function(new_win) {
		// 新窗口可完成工作                    
	},
	);
}
