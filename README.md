# warcraft
http://warcraft.net.cn

开始：
1. npm init
>	entry point: (index.js) app.js

2. npm install express

3. create app.js
>	var express = require('express');
>	var app = express();
>	
>	app.use(express.static('public'));
>	
>	app.listen(3000, function () {
>	  console.log('http://127.0.0.1:3000!');
>	});

4. hexo init hexo