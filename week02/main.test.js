///test.js를 사용해야 jset에서 사용가능

// main.js의 exports 가 main 변수
const main = require('./main.js') // .js 생략가능

test(
    'calculateSum',
    function () {
        expect(main.calculateSum(10)).toBe(45)
    }
)

test(
    'main.js sum() 테스트',
    function () {
        expect(main.sum(10, 20)).toBe(30)
    }
)

test(
    '딸기 세기 테스트',
    function () {
        // fixture : 테스트를 위해 미리 생성해놓은 데이터 ex)basket
        let fruitsBasket = ['사과', '감', '감', '배', '포도', '포도', '딸기', '포도', '감', '수박', '딸기']
        expect(main.countBerry(fruitsBasket)).toBe(2)
    }
)

test(
    '딸기 세기 테스트 (딸기가 없음)',
    function () {
        // fixture : 테스트를 위해 미리 생성해놓은 데이터 ex)basket
        let fruitsBasket = ['사과', '감', '감', '배', '포도', '포도', '포도', '감', '수박']
        expect(main.countBerry(fruitsBasket)).toBe(0)
    }
)


// function sum(num1, num2) {
//     let result = num1 + num2
//     console.log('result : ', result)
//     return result
// }

// 들여쓰기는 적게 할수록 좋다!

function testFunction(email) {
    if (typeof email !== 'string') { //true 아니면 false로 =이 2개(비 직관적인)보단 3개인걸 쓰는게 좋음.
        return false
    }
    if (email.includes('@')) {
        return true
    } else {
        return false
    }
}


// test(
//     'test name',
//     function () {
//         expect(sum(10, 20)).toBe(30)
//     }
// )

test(
    'test email',
    function () {
        expect(testFunction('test@test.com')).toBe(true)
    }
)

test(
    'test invalid email',
    function () {
        expect(testFunction(100)).toBe(false)
    }
)

test(
    '미세먼지 수치가 25미만인 구 구하기',
    function () {
        let cityAir = [
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "도심권",
    MSRSTE_NM: "중구",
    PM10: 22,
    PM25: 14,
    O3: 0.018,
    NO2: 0.015,
    CO: 0.4,
    SO2: 0.002,
    IDEX_NM: "좋음",
    IDEX_MVL: 31,
    ARPLT_MAIN: "O3",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "도심권",
    MSRSTE_NM: "종로구",
    PM10: 24,
    PM25: 18,
    O3: 0.013,
    NO2: 0.016,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 39,
    ARPLT_MAIN: "PM25",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "도심권",
    MSRSTE_NM: "용산구",
    PM10: 0,
    PM25: 15,
    O3: 0.012,
    NO2: 0.027,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "점검중",
    IDEX_MVL: -99,
    ARPLT_MAIN: "점검중",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서북권",
    MSRSTE_NM: "은평구",
    PM10: 36,
    PM25: 14,
    O3: 0.019,
    NO2: 0.018,
    CO: 0.5,
    SO2: 0.005,
    IDEX_NM: "좋음",
    IDEX_MVL: 42,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서북권",
    MSRSTE_NM: "서대문구",
    PM10: 28,
    PM25: 9,
    O3: 0.018,
    NO2: 0.015,
    CO: 0.6,
    SO2: 0.004,
    IDEX_NM: "좋음",
    IDEX_MVL: 37,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서북권",
    MSRSTE_NM: "마포구",
    PM10: 26,
    PM25: 8,
    O3: 0.012,
    NO2: 0.021,
    CO: 0.5,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 36,
    ARPLT_MAIN: "NO2",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "광진구",
    PM10: 17,
    PM25: 9,
    O3: 0.018,
    NO2: 0.016,
    CO: 0.6,
    SO2: 0.001,
    IDEX_NM: "좋음",
    IDEX_MVL: 31,
    ARPLT_MAIN: "O3",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "성동구",
    PM10: 21,
    PM25: 12,
    O3: 0.018,
    NO2: 0.017,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 33,
    ARPLT_MAIN: "PM25",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "중랑구",
    PM10: 27,
    PM25: 10,
    O3: 0.015,
    NO2: 0.019,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 34,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "동대문구",
    PM10: 26,
    PM25: 9,
    O3: 0.016,
    NO2: 0.017,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 34,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "성북구",
    PM10: 27,
    PM25: 8,
    O3: 0.022,
    NO2: 0.014,
    CO: 0.5,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 37,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "도봉구",
    PM10: 25,
    PM25: 12,
    O3: 0.024,
    NO2: 0.011,
    CO: 0.3,
    SO2: 0.002,
    IDEX_NM: "좋음",
    IDEX_MVL: 41,
    ARPLT_MAIN: "O3",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "강북구",
    PM10: 30,
    PM25: 15,
    O3: 0.022,
    NO2: 0.02,
    CO: 0.4,
    SO2: 0.002,
    IDEX_NM: "좋음",
    IDEX_MVL: 39,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "노원구",
    PM10: 21,
    PM25: 14,
    O3: 0.017,
    NO2: 0.016,
    CO: 0.4,
    SO2: 0.004,
    IDEX_NM: "좋음",
    IDEX_MVL: 36,
    ARPLT_MAIN: "PM25",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "강서구",
    PM10: 36,
    PM25: 16,
    O3: 0.021,
    NO2: 0.013,
    CO: 0.4,
    SO2: 0.004,
    IDEX_NM: "좋음",
    IDEX_MVL: 42,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "구로구",
    PM10: 23,
    PM25: 10,
    O3: 0.022,
    NO2: 0.016,
    CO: 0.3,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 37,
    ARPLT_MAIN: "O3",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "영등포구",
    PM10: 29,
    PM25: 15,
    O3: 0.01,
    NO2: 0.022,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 41,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "동작구",
    PM10: 29,
    PM25: 15,
    O3: 0.012,
    NO2: 0.023,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 41,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "관악구",
    PM10: 27,
    PM25: 12,
    O3: 0.012,
    NO2: 0.022,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 37,
    ARPLT_MAIN: "NO2",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "금천구",
    PM10: 25,
    PM25: 15,
    O3: 0.015,
    NO2: 0.02,
    CO: 0.4,
    SO2: 0.004,
    IDEX_NM: "좋음",
    IDEX_MVL: 43,
    ARPLT_MAIN: "PM25",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "양천구",
    PM10: 0,
    PM25: 14,
    O3: 0.016,
    NO2: 0.017,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "점검중",
    IDEX_MVL: -99,
    ARPLT_MAIN: "점검중",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동남권",
    MSRSTE_NM: "강남구",
    PM10: 31,
    PM25: 16,
    O3: 0.018,
    NO2: 0.018,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 39,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동남권",
    MSRSTE_NM: "서초구",
    PM10: 34,
    PM25: 13,
    O3: 0.024,
    NO2: 0.019,
    CO: 0.3,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 41,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동남권",
    MSRSTE_NM: "송파구",
    PM10: 25,
    PM25: 6,
    O3: 0.014,
    NO2: 0.025,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 42,
    ARPLT_MAIN: "NO2",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동남권",
    MSRSTE_NM: "강동구",
    PM10: 24,
    PM25: 14,
    O3: 0.016,
    NO2: 0.02,
    CO: 0.4,
    SO2: 0.002,
    IDEX_NM: "좋음",
    IDEX_MVL: 39,
    ARPLT_MAIN: "PM25",
  },
];
        //리스트를 비교할때에는 toBe가 아닌 toEqual을 사용
        expect(main.countAir(cityAir)).toEqual(
            [
                '중구', '종로구',
                '용산구', '광진구',
                '성동구', '노원구',
                '구로구', '양천구',
                '강동구'
            ]
        )
    }
)
