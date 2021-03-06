// new Date() 날짜와 시간을 반환한다(Date 객체)
// Date() 날짜와 시간을 나타내는 문자열을 반환한다.
new Date(millisecond) // 1970년 1월 1일 00:00:00(UTC)기점으로 인수에 전달된 밀리초만큼 경과한 날짜와 시간을 나타내는 Date객체를 반환함
new Date('May 26, 2020 10:00:00'), ('2020/03/26/10:00:00');

// 1970 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간
Date.parse('Jan 2, 1970 00:00:00 UTC');
Date.parse('Jan 2, 1970 09:00:00');
Date.parse('1970/01/02/09:00');