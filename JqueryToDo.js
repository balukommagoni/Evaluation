$(document).ready(function() {
  $('.btnSave').click(function() {
      addCheckbox($('.myInput').val());
  });
});

function addCheckbox(inputValue) {
 var checkboxList = $('.cblist');
 var inputs = checkboxList.find('input');
 $('<input/>', { type: 'checkbox', class: 'cb', value: inputValue }).appendTo(checkboxList);
 $('<label/>', { 'for': 'cb', text: inputValue }).appendTo(checkboxList);
 $('<div/>'),{id:'input'};
 $('<input/>',{ type: 'button', class:'button', value:'Remove',click:function(){
   var i=0;
  var items = $(this).parent('.cblist');
  items.find('label[for="cb"]').remove();
  //$('label[for=' + $(this).attr('cb') + ']').remove();
  var item=$(this).parent('.cblist').find('input:checked');
  item.closest('.cb').remove();
  items.find('.button');
  items.prevObject.closest('.button').remove();
  var ele=$('.myInput').val();
 
  } }).appendTo(checkboxList);
}





















// $(document).ready(function () {

//     $('.addBtn').click(function() {
//       var li=$('#myLi').value;
//       $('#myUl').append(li);
//       $('#myInput').value.append(li);
//       $('#checkbox').append(li);
//     })
  

    
// });
  
  
  