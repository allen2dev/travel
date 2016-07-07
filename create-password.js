const Bcrypt = require('bcrypt');

const saltRounds = 10;
const myPlaintextPassword = '123456';

// 生成密码

Bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
	console.log(`新生成的密码为 ${hash}`);
});

// 验证密码

const hashPass = '$2a$10$F9nUJLt.DfHdJRsSqg2Lj.H8e5lagxqnnTjlUNsTi4ehv9Kt2tyay';
Bcrypt.compare(myPlaintextPassword, hashPass, function(err, res) {
	console.log('auth result',res);
});