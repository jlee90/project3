    $(document).ready(function () {
        
    $(document).ready(function(){
    var range=$("#myRange");
    range.change(function(){
    var effect=$(".effect");
    if(range.val()>0){
    effect.css("background","red");
    }else
    {
    effect.css("background","green");
    }
    var height=$("#myRange").val()*0.65;

    if(height<0)
    height=-height;
        effect.css("height",height+"%");
    });

    });

});