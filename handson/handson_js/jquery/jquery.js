$('#hide').click(function(){
  $('#para').hide();
})

$('#show').click(function(){
    $('#para').show();
  })

$('#title').click(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/12",
        type: 'GET',
        success: function(data){
            console.log(data);
            document.getElementById('heading').innerText=data.title;
        } 
    })
})