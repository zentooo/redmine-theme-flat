(function($) {

  $(document).ready(function() {
    var update = $('#update')
    var close = $("<div>", {'class': "update-close"}).text('x');

    update.prepend(close);
    close.click(function() {
      update.hide();
    });

    // toggleFieldset();
    $('#update fieldset.tabular legend').click(function() {
      $(this).closest('fieldset').toggleClass('show-children');
    });

    var submit2 = $('<input name="commit" type="submit" value="送信" />');
    submit2.css({"float": "right", "margin-right": "25px"});
    submit2.on("click", function() {
        $("#issue-form")[0].submit();
    });
    $('div.update-close').after(submit2);
  });

})(jQuery);
