// this api is used for registration user

        $("#register").submit(function(event){
            event.preventDefault();

            var Data={
                name:$('#name').val(),
                username:$('#username').val(),
                password:$('#password').val(),
                role:$('#role').val(),
         }
         Swal.fire({
            title: 'Please Wait...',
            text: 'Logging in...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
            $.ajax({
                url:'http://localhost:8000/auth/register',

                method:'POST',
                contentType:"application/json",
                data:JSON.stringify(Data), 
                success:function(data){  
                    Swal.close(); 
                    Swal.fire({
                      
                        icon: "success",
                        title: "Registration Success",
                        showConfirmButton: false,
                        timer: 1500
                        
                      }); 
                      $('#name').val(''),
                      $('#username').val(''),
                    //   $('#pass').val(''),
                      $('#password').val('')
                      
                },
                
                error:function(xhr){
                    Swal.close();

                    // Show error message
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "An error occurred during login. Please try again."
                    });
                }
            })
        })

// -----------------------------------------------------------------------------------

// login user api ----------

$("#login").submit(function(event){
    event.preventDefault();

    var Data={
   
        username:$('#uname').val(),
        password:$('#pwd').val(),
 }
 Swal.fire({
    title: 'Please Wait...',
    text: 'Logging in...',
    allowOutsideClick: false,
    didOpen: () => {
        Swal.showLoading();
    }
});
    $.ajax({
        url:'http://localhost:8000/auth/login',

        method:'POST',
        contentType:"application/json",
        data:JSON.stringify(Data), 
        
        success:function(data){ 
            Swal.close(); 
            Swal.fire({
                      
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 1500
                
              }); 
            // location.reload();    
        },
        error:function(xhr){
            Swal.close();

                // Show error message
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "An error occurred during login. Please try again."
                });
        }
    })
})

 