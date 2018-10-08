$('#reset').click(() => {
  $('input[type=checkbox]').each(function()
  {
    this.checked = false;
  });
});