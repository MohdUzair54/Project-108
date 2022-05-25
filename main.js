function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Xz735M1hl/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML='I can hear -'+
        results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy -'+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("
        +random_number_r+","+ramdom_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color="rgb("
        +random_number_r+","+ramdom_number_g+","+random_number_r+")";

        img=document.getElementById('cat1');
        img1=document.getElementById('dog2');
        img2=document.getElementById('lion3');
        img3=document.getElementById('cow4');


if(results[0].label=="Meow"){
    img.src='cats-01.gif';
    img1.src='dogs-02.png';
    img2.src='lions-03.png';
    img3.src='cows-04.png';
} else if(results[0].label=="Bark"){
    img.src='cats-01.png';
    img1.src='dogs-02.gif';
    img2.src='lions-03.png';
    img3.src='cows-04.png';
} else if(results[0].label=="Roar"){
    img.src='cats-01.png';
    img1.src='dogs-02.png';
    img2.src='lions-03.gif';
    img3.src='cows-04.png';
} else{
    img.src='cats-01.png';
    img1.src='dogs-02.png';
    img2.src='lions-03.png';
    img3.src='cows-04.gif';
      }
    }
}