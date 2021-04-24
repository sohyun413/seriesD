// 10
// 'test'
// true / false
//let temp = false
//console.log(temp)

// let temp1 = 'test'
// let temp2 = 'testest'
// 변수의 크기는 같음 들어있는 크기가 다를뿐

// 자료구조
// 리스트 : 순차적으로
let list = [10, 20, 30]
let list1 = 10
let list2 = 20
let list3 = 30
// console.log(list.length)

// 딕셔너리 : 이름을 갖고 해당하는 값을 가지고있음 중괄호와 콜론으로 구분
let dict = {'age': 10, 'name': 'john'}
console.log(dict ['name'])


// var 와 let의 차이  var : undifined / var의 경우 정의되어있지 않는다고 사이트가 나오는데 let의 경우는 아예 사이트가 노출되지 않기때문에 let를 더 선호함
// hoisting
// console.log(a)
// let a = 100 // var는 쓰지 않는다.
//const CONST_VALUE = 200; //대문자로 도 씀. 바꾸면 큰일날 수 있겠구나 하는 개발자끼리 정한 룰
//const b = 100
//b = 200 //에러! 고정되어있는 constant에 값을 바꾸려고 했기때문에. let을 많이쓰고 절대로 바뀌지 않는 값은 constant를 쓰면 좋음.
//console.log('b의 값', b)


function sum(num1, num2) {
    let result = num1 + num2
    console.log('result : ', result)
    return result
}

// sum이라는 함수를 밖에서도 써도 돼
exports.sum = sum

console.log(sum(10, 20))


// true, false 리턴하는 표현식
// if (sum(10, 20) > 50) {
//     // true 표현식
//     console.log('true')
// } else {
//     // false 표현식
//     console.log('false')
// }

// for문 + if문
// for (let i = 0; i < 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// 아주 자주 씀!
let list4 = [10, 20, 30, 40]
for (let i = 0; i < list4.length; i++) {
    console.log(list4[i])
}

// of를 쓰면 더 직관적. 위와 같은 문장인데 더 빨리칠 수 있음
for (let i of list4) {
    console.log(i)
}


let scores = [
    {'name': '철수', 'score': 90},
    {'name': '영희', 'score': 85},
    {'name': '민수', 'score': 70},
    {'name': '형준', 'score': 50},
    {'name': '기남', 'score': 68},
    {'name': '동희', 'score': 30},
]

for (let i = 0; i < scores.length; i++) {
    if (scores[i]['score'] > 50) {
        console.log(scores[i]['name'])
    }
}


function calculateSum(n) {
    let sum = 0
    for (let i = 1; i < n; i++) {
        // sum = sum + i
        sum += i
    }
    return sum
}

exports.calculateSum = calculateSum

function countBerry(basket) {
    // basket 변수는 리스트
    let count = 0

    for (let i = 0; i < basket.length; i++) {
        if (basket[i] === '딸기') {
            count += 1
        }
    }
    return count
}

exports.countBerry = countBerry // 함수 자체를 할당 괄호 있으면 안됨.


//리스트 구조
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
function countAir(cityAir) {

    // 구를 집어 넣는 용도의 result 리스트
    let result = []

    for (let i = 0; i < cityAir.length; i++) {
        // 가독성 높히기
        let isCleanAir = (cityAir[i]['PM10'] < 25 )

        if (isCleanAir) {
            result.push(cityAir[i]['MSRSTE_NM'])
            // console.log(cityAir[i]['MSRSTE_NM'])
        }
    }
    return result
}

// countAir(cityAir)
exports.countAir = countAir


function printAir (cityAir) {
    let result = countAir(cityAir) // 구 리스트를 받아옴
    console.log(result)

}
printAir(cityAir)

