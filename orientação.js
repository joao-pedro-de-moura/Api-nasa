
var img = $('#img')
var vid = $('#vid')

$("#bt").click (function(){
    var exp = $('#exp')
    var input = $('#inputData').val()
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=qQll8YHtQi7NtYVK3hkf4Qy6mYY4pIM45mBJNN7z&date=${input}`,
        type: "GET", 
        success: function (req){
            if (req.media_type == 'image'){
            img.attr("src", req.url).css("display", "flex")
            vid.css("display", "none")    
            }
            else if(req.media_type == 'video'){
            vid.attr("src", req.url).css("display", "flex")
            img.css("display", "none")   
            }
            exp.text(req.explanation)
        }
        
        
    })
})
