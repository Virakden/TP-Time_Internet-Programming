let fileInput = document.getElementById("fileinput").addEventListener("change", function(event){
    if(event.target.files){
        let file = event.target.files[0];
        console.log(file);

        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function(event){
            var image = new Image();
            image.src = event.target.result;

            image.onload = function(){
                var canvas = document.getElementById("canvas");
                canvas.width = image.width;
                canvas.height = image.height;
                var ctx = canvas.getContext('2d');
                console.log(image.width);
                console.log(image.height);

                ctx.drawImage(image, 0, 0);
            }
        }
    }
})