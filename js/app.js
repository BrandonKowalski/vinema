var loadVine = function() {  
  $.ajax({
    type: 'GET',
    url: 'http://dev.univfeed.com/api/schools',
    dataType: 'jsonp',
    success: function(data){
      alert(data);
    },
    error: function(xhr, type){
      alert('Ajax error!')
    }
  });
}
