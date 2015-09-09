/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Slider CSS starts
function selectStep(slide)
{
   
 
    $(".content-switcher").hide();
    $("#Content"+slide).show();
}        
   // Slider CSS Ends
   
//DROP-DOWN MENU CSS starts


          $(document).ready(function() {
          $("select[name='dropdown']").change(function() {

            drop=$(this).val();
            $(".content-switcher").hide();
            
            $("#Content"+drop).show();
            slide=drop; //for changing the animation position to the selected tab when going full screen
            selectStep(slide);
      });
   });
  

//changing background color when clicked
   function changeColor(id) {    
        var tabs = document.getElementsByClassName('item-number')
        for (var i = 0; i < tabs.length; ++i) {
            var item = tabs[i];
            item.style.backgroundColor = (item.id == id) ? "#f8f8f8" : "silver";
        }
    }

  
   //DROP-DOWN MENU CSS ends
         
         
