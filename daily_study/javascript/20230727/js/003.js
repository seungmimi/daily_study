var now = new Date();
var start = new Date('2020-06-30');

//사귄날
var timeDiff = now.getTime() - start.getTime();
var day = Math.floor(timeDiff / (1000 * 60 * 60 *24) + 1);
$('#love').text(day + '일째');

//기념일 까지 남은 날
var valentine = new Date('2024-02-24');
var timeDiff2 = valentine.getTime() - now.getTime();
var day2 = Math.floor(timeDiff2 / (1000 * 60 * 60 *24) + 1);
$('#valentine').text(day2 + '일 남음');

//n일이 되는 날
var ms = start.getTime() + 1999 * (1000 * 60 * 60 *24);
var thousand = new Date(ms);
var thousandDate = thousand.getFullYear() + '.' + (thousand.getMonth()+1) + '.' + thousand.getDate();
var timeDiff3 = thousand.getTime() - now.getTime();
var day3 = Math.floor(timeDiff3 / (1000 * 60 * 60 *24) + 1);
$('#thousand-date').text(thousandDate);
$('#thousand').text(day3 + '일 남음');