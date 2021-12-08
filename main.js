function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
     });
     classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/jjKHH-TRi/model.json",modelReady);
     }

     function modelReady(){
         classifier.classify(gotResults);
     }

     function gotResults(error,results){
        if (error){
            console.error(error);
        }
        else{
            console.log(results);
            random_number_r = Math.floor(Math.random()* 255) + 1;
            random_number_g = Math.floor(Math.random()* 255) + 1;
            random_namber_b = Math.floor(Math.random()*255) + 1;

            document.getElementById("result_label").innerHTML='I can hear - ' +results[0].label;
           document.getElementById("result_confidence").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2) +"%";
           document.getElementById("result_label").style.color = "rgb(" + random_number_r+","+random_number_g+","+random_namber_b+")";
           document.getElementById("result_confidence").style.color = "rgb(" + random_number_r+","+random_number_g+","+random_namber_b+")";

           img1=document.getElementById("cat");
           img2=document.getElementById("dog");
           img3=document.getElementById("cow");

           if(results[0].label=="barking"){
               img1.src="";
               img2.src="dog_PNG50371.png";
               img3.src="";
           }
           else if(results[0].label=="meowing"){
               img1.src="cat.png";
               img2.src="";
               img3.src="";
           }
           else if(results[0].label=="mooing"){
               img1.src="";
               img2.src="";
               img3.src="cow.png";
           }
           }
    }