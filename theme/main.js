//
// 默认搜索框激活
//
window.onload = function() {
		if(document.readyState=="complete")
		{
		  	document.getElementById("searchInput").focus();
		}
	}




//
// grab the 2nd child and add the parent class. tr:nth-child(2)
//
document.getElementsByTagName('tr')[1].className = 'parent';
// fix links when not adding a / at the end of the URI
var uri = window.location.pathname.substr(1);
if (uri.substring(uri.length-1) != '/'){
	var indexes = document.getElementsByClassName('indexcolname'),
	i = indexes.length;
	while (i--){
	    var a = indexes[i].getElementsByTagName('a')[0];
	    a.href = '/' + uri + '/' + a.getAttribute('href',2);
	}
}




//
// 表格搜索
//
function SearchTable() {
  // 声明变量
  var input, filter, table, tr, td, i;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  // table = document.getElementById("myTable");
  table = document.getElementsByTagName("table");
  // console.log(table);
  tr = table[0].getElementsByTagName("tr");

  // 循环表格每一行，查找匹配项
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
