$(document).ready(function(){
    var users = [];
    $('#btnSave').on('click', function(){
        var txtName = $('#txtName'),
        txtCity = $('#txtCity'),
        txtState = $('#txtState');
        
        if(txtName.val()==='' || txtCity.val()==='' || txtState.val()==='')
            return;
        
        addUser(txtName.val(),txtCity.val(),txtState.val());
        refreshGrid();
        
        txtName.val('');
        txtCity.val('');
        txtState.val('');
    });
    
    $('#btnClearAll').on('click',function(){
        users=[];
        refreshGrid();
    });
    
    var addUser =function(name, city, state){
        var usr ={};
        usr.name=name;
        usr.city=city;
        usr.state=state;
        usr.index=(users.length+1);        
        users.push(usr);        
    };
    
    var refreshGrid = function(){
        $('#userGrid').empty();
        if(users.length === 0){
        return;
        }           
            
               
        //create grid       
        createGrid();
    };
    
    var createGrid = function(){
        var grid = $('<div/>');
        
        for(var i=0, len = users.length; i<len; i++){
            var row = $('<div/>');
            
            var content = '<span class="colWidth">'+users[i].name +
                        '</span><span class="colWidth">' + users[i].city+
                        '</span><span class="colWidth">' +users[i].state;
            row.append(content);
            
            var btnRemove = $('<button/>');
            btnRemove.text('Remove');
            btnRemove.attr('data-index',users[i].index)
            btnRemove.attr('data-cmd','remove');
            btnRemove.addClass('clsRemove');
            row.append(btnRemove);
            
            grid.append(row);
        }
        $('#userGrid').append(grid);
    };
    
    $('#userGrid').on('click',':button',function(){
        var id=$(this).data('index'), cmd=$(this).data('cmd');
        
        switch(cmd){
            case 'remove': removeUser(id);break;
            case 'edit': editUser(id);break;            
        }
    });
    
    var removeUser = function(id){
        var i=0;
        if(users.length === 0)            
            return;
        for(var i=0, len = users.length; i<len; i++){
            if(users[i].index === id)
                break;
        }
        users.splice(i,1);
        refreshGrid();
    };
    var editUser = function(){
    //tbd
    }
});