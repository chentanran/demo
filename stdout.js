
var frames = [];

frames[frames.length] = `
	发起进攻(　 ´-ω ･)▄︻┻┳══━一
`;
frames[frames.length] = `
	全军出击(((ꎤ'ω')و三 ꎤ'ω')-o≡
`;
frames[frames.length] = `
	﻿༺༺超༒神༻༻
`;
frames[frames.length] = `
	﻿ಠ_ಠ我有一个特异功能！！
`;

var fps = 60;

var index = 0;

var render = () => {
	// 将当前控制台输出
	var height = process.stdout.getWindowSize()[1];
	for(var i = 0; i < height; i++){
		process.stdout.write('\r');
		process.stdout.write('\n');
	}
	// 输入
	if(index == frames.length) { index = 0 };
	process.stdout.write(frames[index++]);

};

setInterval(render,10000/fps);