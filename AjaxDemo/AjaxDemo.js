$(document).ready(function(){




  
 $("#Display-Data").click(function(){

  

    var checkExist=false;
      var lenth=$('#Demo-Table tr').length;
      var name=$('#name').val();
      var salary=$('#salary').val();
      var age=$('#age').val();


      $(".Namedata").each(function() {
        if($(this).text()==name){
          $('#error').css({"display":"block"})
          checkExist=true; 
            
        }

        else if($(this).text()==salary){

          $('#error1').css({"display":"block"})
          checkExist=true; 
        }

        else if($(this).text()==age){

          $('#error2').css({"display":"block"})
          checkExist=true; 
        }
      
        });

     
       
        if(checkExist===false){
          var display='<tr><td>'+lenth+'</td> <td>'+name+'</td> <td>'+salary+'</td><td>'+age+'</td> <td>'
          +'<input type="button" value="edit">'+'</td></tr>'
    
          $('table ').append(display);
    
          $(document).scrollTop($(document).height());
       
        }

    
      
      }),


  

    
  $('#Submit-city').click(function(){

    
       
   var $employees=$('#Demo-Table');
      $.ajax({
          url:"http://dummy.restapiexample.com/api/v1/employees",
          type:"GET",
          dataType:"JSON",

          beforeSend:function(){
            $('.load-Icon').show();
          },

          
      
           


          success:function(employees){

            var tableData;
            
          
            var employee_names=  employees.data;

            
                   
            $.each(employee_names,function(i,names){

            

              tableData +='<tr>'+
              
             
              '<td>'+ names.id+  '</td>'+
              '<td class="Namedata" >'+names.employee_name+'</td>'+
              '<td class="Namedata">'+names.employee_salary+'</td>'+
              '<td class="Namedata">'+names.employee_age+'</td>'+
              '<td >'+'<input type="button" value="edit">'+'</td>'+
              '<td >'+'<input type="button" value="delete">'+'</td>'

              
              +'</tr>'
            
              $('.load-Icon').hide();
            })
            $('#Demo-Table').append(tableData)

           
          }

          
      })
       
    
      
  })

})