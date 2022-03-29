// 댓글 스크립트

$(document).ready(function () {
    // 로그인 사용자 정보 가져오기
    var user_id = $('#user_info > input:nth-of-type(1)').val();
    var user_name = $('#user_info > input:nth-of-type(2)').val();
    var now_date = $('#user_info > input:nth-of-type(3)').val();

    // 현재 댓글 배열
    var list = [
        { 'id': '7', 'user_id': '5', 'user_name': '그게바로나다!', 'comment': '이오토바이 어디서 사셨나요', 'reg_date': '2022-03-28', 'edit_date': '2022-03-28' },

    ];

    var html = '';

    for (var i = 0; i < list.length; i++) {

        html += '<div id="commentItem' + list[i].id + '" class="comment-item">';

        html += '<img src="http://placehold.it/50x50">';

        html += '<div>';

        html += '<p>' + list[i].user_name + '</p>';
        html += '<p>' + list[i].reg_date + '</p>';

        if (user_id == list[i].user_id) {
            html += '<button class="comment-del-btn">삭제</button>';
            html += '<button class="comment-edit-btn">수정</button>';
            html += '<button class="comment-edit-btn-close">수정 닫기</button>';
        }

        html += '<div class="comment-edit">';
        html += '<p>' + list[i].id + '. ' + list[i].comment + '</p>';
        html += '<div>';
        html += '<form>';
        html += '<input value="' + list[i].id + '" />';
        html += '<textarea>' + list[i].comment + '</textarea>';
        html += '<button type="button">수정</button>';
        html += '</form>';
        html += '</div>';
        html += '</div>';

        html += '</div>';

        html += '</div> <!-- //댓글 상세 -->';

    }

    $('.comment-list').html(html);


});

//등록
$(document).on('click', '.comment-add > button', function () {
    // 로그인 사용자 정보 가져오기
    var user_id = $('#user_info > input:nth-of-type(1)').val();
    var user_name = $('#user_info > input:nth-of-type(2)').val();
    var now_date = $('#user_info > input:nth-of-type(3)').val();

    // 댓글 등록 정보 가져오기
    var id = Number($('.comment-list > div:first-of-type').attr('id').replace('commentItem', '')) + 1;
    var comment = $('.comment-add > textarea').val();

    if (comment == '') {
        alert('댓글 입력');
        return;
    }

    // 댓글 등록
    var html = '';

    html += '<div id="commentItem' + id + '" class="comment-item">';

    html += '<img src="http://placehold.it/50x50">';

    html += '<div>';

    html += '<p>' + user_name + '</p>';
    html += '<p>' + now_date + '</p>';
    html += '<button class="comment-del-btn">삭제</button>';
    html += '<button class="comment-edit-btn">수정</button>';
    html += '<button class="comment-edit-btn-close">수정 닫기</button>';

    html += '<div class="comment-edit">';
    html += '<p>' + id + '. ' + comment + '</p>';
    html += '<div>';
    html += '<form>';
    html += '<input value="' + id + '" />';
    html += '<textarea>' + comment + '</textarea>';
    html += '<button type="button">수정</button>';
    html += '</form>';
    html += '</div>';
    html += '</div>';

    html += '</div>';

    html += '</div> ';

    $('.comment-list').prepend(html);

});


//모달 열기
$(document).on('click', '.comment-del-btn', function () {
    var id = $(this).parent('div').parent('div').attr('id').replace('commentItem', '');
    var comment = $(this).nextAll('.comment-edit').children('p').html();

    $('.comment-delete-modal > div > input').val(id);
    $('.comment-delete-modal > div > p > span').html(comment);

    $('.comment-delete-modal').val(id);
    $('.comment-delete-modal').show();


});

//모달 닫기
$(document).on('click', '.comment-delete-modal button:last-of-type', function () {
    $('.comment-delete-modal').hide();

});

//삭제
$(document).on('click', '.comment-delete-modal button:first-of-type', function () {
    var id = $('.comment-delete-modal > div > input').val();

    $('#commentItem' + id).remove();
    $('.comment-delete-modal').hide();
});


//수정열기
$(document).on('click', '.comment-edit-btn', function () {
    // 전체 버튼 변경
    $('.comment-edit-btn').show();
    $('.comment-edit-btn-close').hide();
    // 전체 textarea 닫기
    $('.comment-edit > p').show();
    $('.comment-edit > div').hide();

    // 선택된 버튼 변경
    $(this).hide();
    $(this).next('.comment-edit-btn-close').show();
    // 선택된 textarea 열기
    $(this).nextAll('.comment-edit').children('div').show();
    $(this).nextAll('.comment-edit').children('p').hide();
});

//수정 닫기 
$(document).on('click', '.comment-edit-btn-close', function () {
    $(this).hide();
    $(this).prevAll('.comment-edit-btn').show();

    $(this).nextAll('.comment-edit').children('div').hide();
    $(this).nextAll('.comment-edit').children('p').show();

});

//수정 적용 => $(this)
// $(document).on('click','.comment-edit > div > form > button',function(){
// 	var id = $(this).prev().prev().val();
// 	var comment = $(this).prev('textarea').val();

// 	$(this).prev().html(id + '. ' +comment);
// 	$(this).parent().parent().prev('p').html(id + '. ' +comment);

// 	$(this).parent().parent().parent().prevAll('.comment-edit-btn-close').hide();
// 	$(this).parent().parent().parent().prevAll('.comment-edit-btn').show();

// 	$(this).parent().parent().hide();
// 	$(this).parent().parent().prev().show();
// });

//수정 적용 => id
$(document).on('click', '.comment-edit > div > form > button', function () {
    var id = $(this).prev().prev().val();
    var comment = $(this).prev('textarea').val();

    $('#commentItem' + id + ' .comment-edit > p').html(id + '. ' + comment);
    $('#commentItem' + id + ' .comment-edit textarea').html(id + '. ' + comment);

    $('#commentItem' + id + ' .comment-edit-btn').show();
    $('#commentItem' + id + ' .comment-edit-btn-close').hide();

    $('#commentItem' + id + ' .comment-edit > p').show();
    $('#commentItem' + id + ' .comment-edit > div').hide();

});