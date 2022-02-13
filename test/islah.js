$(document).ready(function() {
  var table = $('#example').DataTable(
		{  

		}
	);
  $(".dataTables_filter input")
    .attr("placeholder", "Chercher qlq chose ici")
    .css({
      width: "300px",
      display: "inline-block"
    });
  $('[data-toggle="tooltip"]').tooltip();

});



$('#exampleModal').on('show.bs.modal', function() {
  $(this).find('.modal-body').css({
    'max-height': '100%'
  });
});



function edit(e){
  console.log(e.parentNode.parentNode.children[0].classList.remove("d-none"));
  console.log(e.parentNode.parentNode.children[1].classList.add("d-none"));
  var parent = e.parentNode;

while (parent && !parent.previousElementSibling && !parent.nextElementSibling) {
    parent = parent.parentNode;
}
for(var i=0;i<parent.parentNode.parentNode.parentNode.children.length-1;i++){
  var data = parent.parentNode.parentNode.parentNode.children[i].innerText;
   parent.parentNode.parentNode.parentNode.children[i].innerHTML = "<input class='editinput' type='text' id='name_text"+i+"' value='"+data+"' autofocus>";

}
document.querySelector(".dataTables_scrollBody").scrollLeft = 0


}

  var speed = 1;
  function incEltNbr(id,end,float) {
  target = document.querySelector(id);
  incNbrRec(end-200, end, target,float);
  
}

function incNbrRec(i, end, target,float) {
  if (i <= end) {
    target.innerHTML = i;
    setTimeout(function() {
      incNbrRec(i + 1, end, target);
    }, speed);
  }
}

function decEltNbr(id,end) {
target = document.querySelector(id);
decNbrRec(end+200, end, target);
}

function decNbrRec(i, end, target) {
if (i >= end) {
  target.innerHTML = i;
  setTimeout(function() {
    decNbrRec(i - 1, end, target);
  }, speed);
}
}

$(document).ready(incEltNbr("#gt",24050,".00"),incEltNbr("#st",14390,""),incEltNbr("#pr",10920,""),decEltNbr("#ct",-2305,".00"));