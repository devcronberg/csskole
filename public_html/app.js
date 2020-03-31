(function() {
  $(".card").hide();
  $(".card").each((i, e) => {
    let date = $(e).attr("data-from");
    if (date != undefined) {
      let d = new Date(date);
      if (new Date() > d) {
        $(e).show();
      }
    } else {
      $(e).show();
    }
  });
})();
