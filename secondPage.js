var desc = sessionStorage.getItem("imageDesc",);
var imageDesc = JSON.parse(desc);

var imagecontainer = document.getElementById("imageDiv");
var img = document.createElement("img");
img.src = imageDesc.url;
imagecontainer.appendChild(img);

//fetch data from jason array and display in second page

var mydata = JSON.parse(val);
var name = document.getElementById("img-Desc");
var p = document.createElement("p");
p.innerHTML = mydata.Description;
name.appendChild(p);


//fetch descripition of image from json array
// var imagecontent = sessionStorage.getItem("imgdesa");
// var imagedesa = JSON.parse(imagecontent);

// var imgcontent = document.getElementById("img-Desc");
// var pimg = document.createElement("p");
// pimg.innerHTML = imagedesa.Description;
// imgcontent.appendChild(pimg); 