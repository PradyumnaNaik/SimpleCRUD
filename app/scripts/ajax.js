$(document).ready(function(){
    var isShortHand = false;
    $('#btnData').on('click',function(){
        
        if(isShortHand){
            //jQuery.get( url [, data ] [, success ] [, dataType ] );
            $.get('data/userData.json',function(response){
                console.log('success');
                users = response.userData;
                refreshGrid();
            });            
        }else{
            getDataFromServer();
        }
    });
    
var getDataFromServer = function(){
    $.ajax({
        url:'data/userData.json',
        timeout:50000,  
        //data:{name:"name1"},
        //async:true/false,
        cache:false,
        type:'GET', //POST, PUT, DELETE       
        success:function(response,status, xhrrequest){
            console.log('success');
            users = response.userData;
            refreshGrid();
        },                 
        error: function(response, err, err_details){         
            alert('The following error occurred: '+err + '\nDetails: '+err_details);
        },
        complete:function(res){
         console.log('complete');
        }
    });
}

});