function search(){
  var input = document.getElementById("searchField").value;
  var key = "APIKEY"; //put here API key
  var cx = "cx"; //put here cx id
  $.get("https://www.googleapis.com/customsearch/v1?q="+input+"&key="+key+"&cx="+cx, function(data, status){
    $("#results").empty();
    data.items.forEach(function(element, index, array){
      console.log(element);
      var title = "<div id='title'><a target='_blank' href='" + element.link + "'>" + element.title + "</a></div>";
      var link = "<div id='link'>" + element.link + "</div>";
      var snippet = "<div id='snippet'>" + element.snippet + "</div>";
      var div = document.createElement('div');
      div.id = "result" + index;
      div.innerHTML = title + link + snippet;
      document.getElementById("results").appendChild(div);
    });
  });
}
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("searchField").focus();
  document.getElementById("searchButton").onclick = search;
  $("#searchField").keyup(function(event){
    if(event.keyCode == 13){
      $("#searchButton").click();
    }
  });
});
