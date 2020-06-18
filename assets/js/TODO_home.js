$( function() {
    $( "#datepicker" ).datepicker({
        dateFormat: 'dd/mm/yy'
    });
});

$('#description-area').on('mousedown',function() {
    $('.form-group').css("backgroundColor","#eaedf0");
    $('#description-area').css("backgroundColor","#eaedf0");
})

$('.category-dropdown').on('mousedown',function() {
    $('.category').css("backgroundColor","#eaedf0");
    $('.category-dropdown').css("backgroundColor","#eaedf0");
})

$('#datepicker').on('mousedown',function() {
    $('.date').css("backgroundColor","#eaedf0");
    $('#datepicker').css("backgroundColor","#eaedf0");
})

$('#description-area').on('mouseout',function() {
    $('.form-group').css("backgroundColor","white");
    $('#description-area').css("backgroundColor","white");
})

$('.category-dropdown').on('mouseout',function() {
    $('.category').css("backgroundColor","white");
    $('.category-dropdown').css("backgroundColor","white");
})

$('#datepicker').on('mouseout',function() {
    $('.date').css("backgroundColor","white");
    $('#datepicker').css("backgroundColor","white");
})