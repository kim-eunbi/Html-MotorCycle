var SampleJSONData = [
    {
        id: 0,
        title: '열선'
    }, {
        id: 1,
        title: '파워put'
    }, {
        id: 2,
        title: '가방류'
    }, {
        id: 3,
        title: '오디오'
    }, {
        id: 5,
        title: '경보기',
    }, {
        id: 6,
        title: '안개등'
    },
];

var SampleJSONData_2 = [
    {
        id: 0,
        title: '배기 튜닝'
    }, {
        id: 1,
        title: '흡기 튜닝'
    }, {
        id: 2,
        title: '엔진 튜닝'
    }, {
        id: 3,
        title: '새시 튜닝'
    }, {
        id: 5,
        title: '브레이크 튜닝',
    }, {
        id: 6,
        title: '서스펜션 튜닝'
    },
];


var SampleJSONData_3 = [
    {
        id: 0,
        title: '크롬파츠'
    }, {
        id: 1,
        title: '카본파츠'
    }, {
        id: 2,
        title: '커스텀도색'
    }, {
        id: 3,
        title: '보호가드'
    }, {
        id: 5,
        title: 'LED',
    }, {
        id: 6,
        title: '스크린/페어링'
    },
];


var SampleJSONData_4 = [
    {
        id: 0,
        title: '사용신고필증'
    }, {
        id: 1,
        title: '사용폐지 증명서'
    }, {
        id: 2,
        title: '제작증명서'
    }, {
        id: 3,
        title: '서류없음'
    }
];
var comboTree1, comboTree2, comboTree3, comboTree4;


jQuery(document).ready(function ($) {
    comboTree1 = $('#justAnInputBox').comboTree({
        source: SampleJSONData,
        isMultiple: true,
        cascadeSelect: false,
        collapse: true,
        selectableLastNode: true
    });

    comboTree2 = $('#justAnInputBox_2').comboTree({
        source: SampleJSONData_2,
        isMultiple: true,
        cascadeSelect: false,
        collapse: true,
        selectableLastNode: true
    });

    comboTree3 = $('#justAnInputBox_3').comboTree({
        source: SampleJSONData_3,
        isMultiple: true,
        cascadeSelect: false,
        collapse: true,
        selectableLastNode: true
    });

    comboTree4 = $('#justAnInputBox_4').comboTree({
        source: SampleJSONData_4,
        isMultiple: true,
        cascadeSelect: false,
        collapse: true,
        selectableLastNode: true
    });

});