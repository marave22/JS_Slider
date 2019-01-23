let picturesArray = ['slider_image_1.jpg', 'slider_image_2.jpg', 'slider_image_3.jpg', 'slider_image_4.jpg', 'slider_image_5.jpg', 'slider_image_6.jpg', 'slider_image_7.jpg', 'slider_image_8.jpg', 'slider_image_9.jpg', 'slider_image_10.jpg', 'slider_image_11.jpg', 'slider_image_12.jpg', 'slider_image_13.jpg', 'slider_image_14.jpg', 'slider_image_15.jpg'];

//Main_Div_After_Section
let mainDiv = document.createElement('div');
let mainDivClass = document.createAttribute('class');
mainDivClass.value = "divClass";
mainDiv.setAttributeNode(mainDivClass);
//Main_Section_append_MAinDIV
let element = document.getElementById('main');
element.appendChild(mainDiv);

for (let i = 0; i < picturesArray.length; i++) {
    //Image_Div
    let imageDiv = document.createElement('div');
    let imageDivClass = document.createAttribute('class');
    imageDivClass.value = "imgDivClass";
    imageDiv.setAttributeNode(imageDivClass);
    mainDiv.appendChild(imageDiv);
    //image
    let path = "./images/";
    let image = document.createElement('image');
    let imageSrc = document.createAttribute('src');
    imageSrc.value = path + picturesArray[i];
    image.setAttributeNode(imageSrc);
    imageDiv.appendChild(image);
}

