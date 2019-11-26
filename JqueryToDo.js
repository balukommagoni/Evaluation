$(document).ready(function() {
  $('.btnSave').click(function() {//save function
      addCheckbox($('.myInput').val());
      function addCheckbox(inputValue) {//passing input value
        var myUl = $('.myUl');
        $('<li/>',{class:'li'}).appendTo(myUl);
        var li=$('.li');
        li.appendTo(myUl);
        $('<input/>', { type: 'checkbox', class: 'cb', value: inputValue }).appendTo(li);
        $('<label/>', { 'for': 'cb', text: inputValue }).appendTo(li);
        $('<input/>',{ type: 'button', class:'button', value:'Remove'}).appendTo(li);
        $('.button').click(function(){//remove function
          var items = $(this).parent('.myUl');
          items.find('label[for="cb"]').remove();
          var item=$(this).parent('.myUl').find('input:checked');
          item.closest('.cb').remove();
          items.find('.button');
          items.prevObject.closest('.button').remove();
          });
        }
  });
});























// $(document).ready(function() {
//   $('.btnSave').click(function() {//save function
//       addCheckbox($('.myInput').val());
//       function addCheckbox(inputValue) {//passing input value
//         var checkboxList = $('.cblist');
//         $('<input/>', { type: 'checkbox', class: 'cb', value: inputValue }).appendTo(checkboxList);
//         $('<label/>', { 'for': 'cb', text: inputValue }).appendTo(checkboxList);
//         $('<input/>',{ type: 'button', class:'button', value:'Remove',click:function(){//remove function
//          var items = $(this).parent('.cblist');
//          items.find('label[for="cb"]').remove();
//          var item=$(this).parent('.cblist').find('input:checked');
//          item.closest('.cb').remove();
//          items.find('.button');
//          items.prevObject.closest('.button').remove();
//          } }).appendTo(checkboxList);
//        }
//   });
// });
 
// $(document).ready(function () {

//     $('.addBtn').click(function() {
//       var li=$('#myLi').value;
//       $('#myUl').append(li);
//       $('#myInput').value.append(li);
//       $('#checkbox').append(li);
//     })
  

    
// });
  
  
  