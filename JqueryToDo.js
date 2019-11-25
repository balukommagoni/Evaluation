$(document).ready(function() {
  $('.btnSave').click(function() {//save function
      addCheckbox($('.myInput').val());
      function addCheckbox(inputValue) {//passing input value
        var checkboxList = $('.cblist');
        $('<input/>', { type: 'checkbox', class: 'cb', value: inputValue }).appendTo(checkboxList);
        $('<label/>', { 'for': 'cb', text: inputValue }).appendTo(checkboxList);
        $('<input/>',{ type: 'button', class:'button', value:'Remove',click:function(){//remove function
         var items = $(this).parent('.cblist');
         items.find('label[for="cb"]').remove();
         var item=$(this).parent('.cblist').find('input:checked');
         item.closest('.cb').remove();
         items.find('.button');
         items.prevObject.closest('.button').remove();
         } }).appendTo(checkboxList);
       }
  });
});
 





















// $(document).ready(function () {

//     $('.addBtn').click(function() {
//       var li=$('#myLi').value;
//       $('#myUl').append(li);
//       $('#myInput').value.append(li);
//       $('#checkbox').append(li);
//     })
  

    
// });
  
  
  