const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

// 미들웨어 설정
app.use(bodyParser.json());
app.use(cors());



//mysql 연결 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'aistory2',
  password: 'aistory2',
  database: 'aistory',
});

connection.connect((err) => {
  if (err) {
    console.error('MySQL connection error: ', err);
    throw err;
  }
  console.log('Connected to MySQL database');
});



// 회원가입 라우트
app.post('/signup', (req, res) => {
  const {name, phoneNumber, password, address, sensorNumber } = req.body;

  // 전화번호 중복 체크
  const checkPhoneNumberSql = 'SELECT phone_number FROM users WHERE phone_number = ?';
  connection.query(checkPhoneNumberSql, [phoneNumber], (checkErr, checkResult) => {
    if(checkErr) {
      console.error('Error checking phone number: ', checkErr);
      return res.status(500).json({ success: false, messgae: '서버 오류'});
    }
    if(checkResult.length > 0) {
      // 이미 가입된 전화번호
      return res.status(400).json({ success: false, message: '이미 가입된 전화번호입니다.'});
    }
  
     // 회원 정보 DB에 저장
    const insertsql = 'INSERT INTO users (id, name, phone_number, password, address, sensor_number) VALUES (?,?,?,?,?,?)';
    connection.query(insertsql, [phoneNumber, name, phoneNumber, password, address, sensorNumber], (insertErr, insertResult) =>{
      if (insertErr) {
        console.error('Error executing MySQL query: ', insertErr);
        return res.status(500).json({ success: false, message: '회원가입 실패'});
      } 
      res.json({success: true, message: '회원가입 성공'});
    });
  });
});


// 로그인 라우트
app.post('/login', (req, res) => {
  const{phoneNumber, password} = req.body;

  // 회원 정보 DB에서 조회
  const sql = 'SELECT * FROM users WHERE phone_number = ? AND password = ?';
  connection.query(sql, [phoneNumber, password], (err, result) => {
    if (err) {
      console.error('Error executing MySQL query: ', err);
      res.status(500).json({ success: false, message : '로그인 실패'});
    } else {
      if (result.length === 0){
        res.json({success: false, message: '아이디 또는 비밀번호가 일치하지 않습니다.'});
      } else {
        res.json({ success: true, message:' 로그인 성공 '});
      }
    }
  });
});

// 사용자 정보 조회 라우트
app.get('/getUserInfo', (req, res) => {
  const phoneNumber = req.query.phoneNumber; // 클라이언트에서 전달된 전화번호

  // 회원 정보 DB에서 조회
  const sql = 'SELECT name, address, sensor_number FROM users WHERE phone_number = ?';
  connection.query(sql, [phoneNumber], (err, result) => {
    if (err) {
      console.error('Error executing MySQL query: ', err);
      res.status(500).json({ success: false, message: '사용자 정보 조회 실패' });
    } else {
     // const user = result.find(item => item.phone_number === phoneNumber);
      //const user = result[0];
      if (result.length > 0) {
        const user = result[0];
        console.log('사용자 정보조회 성공: ', user);
        res.json({ success: true, user: user });
      } else {
        res.json({ success: false, message: '사용자 정보가 없습니다.' });
      }
    }
  });

});




// 서버 실행
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
