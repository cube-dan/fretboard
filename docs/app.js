function Navigate(){
  this.bindChange = function(){
    var $Nav = jQuery('#nav');
    $Nav.on('change', function(e) {
      var page = this.value;
      window.location = "http://localhost:8181"+page;
    });
  }
}
Nav = new Navigate();
jQuery(window).on('load',function() {
  Nav.bindChange();
});
