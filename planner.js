var currentDate = moment().startOf('day');

$(document).ready(function() {
    loadCalendar();
});

function loadCalendar(){
    $('#cdate').text(currentDate.format("dddd MMMM Do"));
    var $planner = $('#planner');
    $planner.html('');
    for(var hour = 9; hour <= 17; hour++) {
        var currentHour = moment(currentDate).hour(hour);
        var $row = $("<div>");
        $row.addClass("row");
        var $col = $("<div>");
        $col.addClass("col");
        var $form = $("<form>");
        $form.data("hour", currentHour.format());
        
        var $inputGroup = $("<div>");
        $inputGroup.addClass("input-group");

        var $prepend = $("<div>");
        $prepend.addClass("input-group-prepend");
        var $groupText = $("<span>");
        $groupText.addClass("input-group-text");
        $groupText.text(currentHour.format("ha"));
        $prepend.html($groupText);
        $inputGroup.append($prepend);

        var $textArea = $("<textarea>");
        $textArea.addClass("form-control");
        $inputGroup.append($textArea);
        
        var $append = $("<div>");
        $append.addClass("input-group-append");
        var $submitButton = $("<button>");
        $submitButton.addClass("btn btn-info");
        $submitButton.attr("type","submit");
        $submitButton.text("Save");
        $append.html($submitButton);
        $inputGroup.append($append);

        $form.html($inputGroup);
        $form.submit(function(event){
            event.preventDefault();
            var text = $(this).find('textarea').val();
            var dateTime = $(this).data("hour");
            localStorage.setItem(dateTime,text);
        });



        $col.html($form);
        $row.html($col);
        $planner.append($row);
    }
 }

