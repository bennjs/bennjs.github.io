//Toggles the visibility of my Modules & Grades table
// .hide can be found on line70 of css/style.css
var $button = $('#yearOne'),
  $text   = $('#grades-table'),
  visible = false;

$button.click(function(){
if ( visible ) {
  $text.addClass('hide');
} else {
  $text.removeClass('hide');
}
visible = ! visible;
});

// GitHubActivity Stream Widget by Casey Scarborough
// https://github.com/caseyscarborough/github-activity
GitHubActivity.feed({
    username: "bennjs",
    selector: "#feed",
    limit: 3
});