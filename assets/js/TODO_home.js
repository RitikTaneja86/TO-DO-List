$(function () {
    $("#datepicker").datepicker({
        dateFormat: 'dd/mm/yy'
    });
});

$('#description-area').on('mousedown', function () {
    $('.form-group').css("backgroundColor", "#eaedf0");
    $('#description-area').css("backgroundColor", "#eaedf0");
})

$('.category-dropdown').on('mousedown', function () {
    $('.category').css("backgroundColor", "#eaedf0");
    $('.category-dropdown').css("backgroundColor", "#eaedf0");
})

$('#datepicker').on('mousedown', function () {
    $('.date').css("backgroundColor", "#eaedf0");
    $('#datepicker').css("backgroundColor", "#eaedf0");
})

$('#description-area').on('mouseout', function () {
    $('.form-group').css("backgroundColor", "white");
    $('#description-area').css("backgroundColor", "white");
})

$('.category-dropdown').on('mouseout', function () {
    $('.category').css("backgroundColor", "white");
    $('.category-dropdown').css("backgroundColor", "white");
})

$('#datepicker').on('mouseout', function () {
    $('.date').css("backgroundColor", "white");
    $('#datepicker').css("backgroundColor", "white");
})

$('input[type="checkbox"]').click(function () {
    var link;
    if ($(this).prop("checked") == true) {
        var index = $('.check').index(this);
        document.getElementsByClassName('display-task')[index].style.textDecoration = "line-through";
        document.getElementsByClassName('display-date')[index].style.textDecoration = "line-through";
        link = document.getElementsByClassName('deletion')[index].getAttribute('href');
    } else {
        var index = $('.check').index(this);
        document.getElementsByClassName('display-task')[index].style.textDecoration = "none";
        document.getElementsByClassName('display-date')[index].style.textDecoration = "none";
        link = '';
        document.getElementById('remove-task').setAttribute('href', link);
    }
    $('.delete-btn').on('click', function () {
        document.getElementById('remove-task').setAttribute('href', link);
    });
});

