/**
 * Created by thanos on 6/1/16.
 */
var express = require('express');
var swig = require('swig'); //导入 swig 模板引擎


var app = express();
app.use(express.static(__dirname + '/public'));

// Swig 模板引擎设置
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/public/views');

app.get('/', function (req, res) {
    res.render('index', { /* template locals context */ });
});

app.listen(3000, function () {
    console.log('Travel app listening on port 3000!')
});