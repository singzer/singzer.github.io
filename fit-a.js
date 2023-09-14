// if (typeof nw !== 'undefined') {
// 	if (!localStorage.getItem('ip')) {
// 		localStorage.setItem('ip', 'localhost');
// 	}

// 	var win = nw.Window.get();

// 	// 创建窗口并获取窗口对象               
// 	nw.Window.open('https://github.com/nwjs/nw.js', {},
// 	function(new_win) {
// 		// 新窗口可完成工作                    
// 	},
// 	);
// }


var oScript = document.createElement("script");//创建一个Script元素 
oScript.src = "https://unpkg.com/vconsole@latest/dist/vconsole.min.js";//制定src属性  
document.getElementsByTagName("head")[0].appendChild(oScript); 

var vConsole = new window.VConsole();
