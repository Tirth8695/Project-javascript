
var arr =
    [

        {
            "id": "0",
            "url": "image/image1.jpg",
            "name": "Peter",
            "age": "40",
            "city": "London",
            "Description": "This is a description of the image"
        },
        {
            "id": "1",
            "url": "image/image2.jpg",
            "name": "Amy",
            "age": "50",
            "city": "Sydney",
            "Description": "This is a description of the image"
        },
        {
            "id": "2",
            "url": "image/image3.jpg",
            "name": "Holly",
            "age": "60",
            "city": "Dubai",
            "Description": "This is a description of the image"
        },
        {
            "id": "3",
            "url": "image/image4.jpg",
            "name": "Michael",
            "age": "70",
            "city": "New York",
            "Description": "This is a description of the image"
        }
    ]



var imagecontainer = document.getElementById("image-container");
for (var i = 0; i < arr.length; i++) {
    var div = document.createElement("div");
    div.className = "image";
    var img = document.createElement("img");
    img.src = arr[i].url;
    img.id = i;
    var h2 = document.createElement("h2");
    h2.innerHTML = arr[i].name;
    var p = document.createElement("p");
    p.innerHTML = arr[i].age;
    var p1 = document.createElement("p");
    p1.innerHTML = arr[i].city;

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(p1);

    imagecontainer.appendChild(div);

    img.addEventListener("click", function () {
        sessionStorage.setItem("imageDesc", JSON.stringify(arr[this.id]));
        console.log(arr[this.id]);
        window.location.href = "secondPage.html";


    });

}





