//JSON을 가져오는 AJAX

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", function(){
    var result = JSON.parse(oReq.responseText);
    var navigation = document.querySelector(".navigation");
    appendList(result);
    parseInnerHtml(result[0]);

    navigation.addEventListener("click",function(evt){
        var node = evt.target;
        if(!!node.id){
            parseInnerHtml(result[node.id]);
        }
    });

});
oReq.open("GET", "data/newslist.json");
oReq.send();

//템플릿을 가져오는 parseinnerhtml만들어봄.
function parseInnerHtml(data) {
  var text = '';
  for(var i = 0; i < data.newslist.length; i++){
    text = text +"<li>"+data.newslist[i]+"</li>";
  }
  var htmlTemplate = document.querySelector("#viewContents");
  var innerHtml = htmlTemplate.innerHTML;
  var modifiedTemp = innerHtml.replace("{{title}}", data.title)
  .replace("{{imgurl}}", data.imgurl)
  .replace("{{newsList}}", text );
  var contentNode = document.querySelector(".content");
  contentNode.innerHTML = modifiedTemp;
}
//
function matchTitile(){

}

function appendList(data){
  // console.log(data.length);
  var content = '';
  var titleList = '';
  var baseElement = document.querySelector(".navigation > ul");
  for (var i = 0; i < data.length; i++) {
      titleList = data[i].title;
      content = content + "<li id=" + i + ">" + titleList + "</li>";
  }
  baseElement.innerHTML = content;

}

