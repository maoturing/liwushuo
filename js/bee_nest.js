$(document).ready(function(){  
        var s ;
        var nextmark1;
        var lastmark1;
        var nextmark2;
        var lastmark2;
        
	setInterval(function(){
  //alert(Math.floor(Math.random()*10+1));
  var num1 = Math.floor(Math.random()*19+1)-0;
  var num2 = Math.floor(Math.random()*19+1)-0;
  nextmark1 = num1;
  nextmark2 = num2;
  switch(lastmark1){  
        case 1:$("#1").removeClass("rotate");break;
        case 2:$("#2").removeClass("rotate");break;
        case 3:$("#3").removeClass("rotate");break;
        case 4:$("#4").removeClass("rotate");break;
        case 5:$("#5").removeClass("rotate");break;
        case 6:$("#6").removeClass("rotate");break;  
        case 7:$("#7").removeClass("rotate");break;  
        case 8:$("#8").removeClass("rotate");break;  
        case 9:$("#9").removeClass("rotate");break;     
        case 10:$("#10").removeClass("rotate");break;     
        case 11:$("#11").removeClass("rotate");break;     
        case 12:$("#12").removeClass("rotate");break;     
        case 13:$("#13").removeClass("rotate");break;     
        case 14:$("#14").removeClass("rotate");break;     
        case 15:$("#15").removeClass("rotate");break;     
        case 16:$("#16").removeClass("rotate");break;     
        default:break;
  }
  switch(lastmark2){  
        case 1:$("#1").removeClass("rotate");break;
        case 2:$("#2").removeClass("rotate");break;
        case 3:$("#3").removeClass("rotate");break;
        case 4:$("#4").removeClass("rotate");break;
        case 5:$("#5").removeClass("rotate");break;
        case 6:$("#6").removeClass("rotate");break;  
        case 7:$("#7").removeClass("rotate");break;  
        case 8:$("#8").removeClass("rotate");break;  
        case 9:$("#9").removeClass("rotate");break;     
        case 10:$("#10").removeClass("rotate");break;     
        case 11:$("#11").removeClass("rotate");break;     
        case 12:$("#12").removeClass("rotate");break;     
        case 13:$("#13").removeClass("rotate");break;     
        case 14:$("#14").removeClass("rotate");break;     
        case 15:$("#15").removeClass("rotate");break;     
        case 16:$("#16").removeClass("rotate");break;     

        default:break;
  }
  switch(nextmark1){  
        case 1:$("#1").addClass("rotate");break;
        case 2:$("#2").addClass("rotate");break;
        case 3:$("#3").addClass("rotate");break;
        case 4:$("#4").addClass("rotate");break;
        case 5:$("#5").addClass("rotate");break;
        case 6:$("#6").addClass("rotate");break;
        case 7:$("#7").addClass("rotate");break;   
        case 8:$("#8").addClass("rotate");break;   
        case 9:$("#9").addClass("rotate");break;   
        case 10:$("#10").addClass("rotate");break; 
        case 11:$("#11").addClass("rotate");break;  
        case 12:$("#12").addClass("rotate");break;  
        case 13:$("#13").addClass("rotate");break;  
        case 14:$("#14").addClass("rotate");break;  
        case 15:$("#15").addClass("rotate");break;  
        case 16:$("#16").addClass("rotate");break;  
      
  }
  switch(nextmark2){  
        case 1:$("#1").addClass("rotate");break;
        case 2:$("#2").addClass("rotate");break;
        case 3:$("#3").addClass("rotate");break;
        case 4:$("#4").addClass("rotate");break;
        case 5:$("#5").addClass("rotate");break;
        case 6:$("#6").addClass("rotate");break;
        case 7:$("#7").addClass("rotate");break;   
        case 8:$("#8").addClass("rotate");break;   
        case 9:$("#9").addClass("rotate");break;   
        case 10:$("#10").addClass("rotate");break; 
        case 11:$("#11").addClass("rotate");break;  
        case 12:$("#12").addClass("rotate");break;  
        case 13:$("#13").addClass("rotate");break;  
        case 14:$("#14").addClass("rotate");break;  
        case 15:$("#15").addClass("rotate");break;  
        case 16:$("#16").addClass("rotate");break;  
  
  }
   lastmark1 = nextmark1;
   lastmark2 = nextmark2;
 },2000); 
  //alert($(#1).attr("id"));
});
