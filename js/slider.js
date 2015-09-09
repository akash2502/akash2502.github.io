/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Slider CSS starts
function selectStep(slide)
{
    
    $(".progress-selected").animate({ marginLeft: (slide-1)*130+'px'},500);
    
    
           
            $(".content-switcher").hide();
            
            $("#Content"+slide).show();
            
   }// Slider CSS Ends
   
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
  
   //DROP-DOWN MENU CSS ends
         
         
