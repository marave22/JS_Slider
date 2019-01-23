let picturesArray = ['slider_image_1.jpg', 'slider_image_2.jpg', 'slider_image_3.jpg', 'slider_image_4.jpg', 'slider_image_5.jpg', 'slider_image_6.jpg', 'slider_image_7.jpg', 'slider_image_8.jpg', 'slider_image_9.jpg', 'slider_image_10.jpg', 'slider_image_11.jpg', 'slider_image_12.jpg', 'slider_image_13.jpg', 'slider_image_14.jpg', 'slider_image_15.jpg', 'slider_image_16.jpg'];

//Main_Div_After_Section
let mainDiv = document.createElement('div');
let mainDivClass = document.createAttribute('class');
mainDivClass.value = "divClass";
mainDiv.setAttributeNode(mainDivClass);
//Main_Section_append_MAinDIV
let element = document.getElementById('main');
element.appendChild(mainDiv);



for (let i = 0; i < picturesArray.length; i++) {

    // Left And Right Buttons
    // Left
    let btnLeft = document.createElement('button');             //newNode
    btnLeft.innerHTML = "&#8678";
    let btnLeftClass = document.createAttribute('class');
    btnLeftClass.value = "left";
    btnLeft.setAttributeNode(btnLeftClass);
    let btnLeftAttr = document.createAttribute('onclick');
    btnLeftAttr.value = "plusSlide(-1)";
    btnLeft.setAttributeNode(btnLeftAttr);

    //Right
    let btnRight = document.createElement('button');            //newNode
    btnRight.innerHTML = "&#8680";
    let btnRightClass = document.createAttribute('class');
    btnRightClass.value = "left";
    btnRight.setAttributeNode(btnRightClass);
    let btnRightAttr = document.createAttribute('onclick');
    btnRightAttr.value = "plusSlide(1)";
    btnRight.setAttributeNode(btnRightAttr);

    //Image_Div
    let imageDiv = document.createElement('div');
    let imageDivClass = document.createAttribute('class');
    let imageDivId = document.createAttribute('id');
    imageDivId.value = `divId${i}`;
    imageDiv.setAttributeNode(imageDivId);
    imageDivClass.value = "imgDivClass";                                // parentDiv
    imageDiv.setAttributeNode(imageDivClass);
    mainDiv.appendChild(imageDiv);
    //image
    let path = "./images/";
    let image = document.createElement('img');                 //childElement
    let imageSrc = document.createAttribute('src');
    let imageClass = document.createAttribute('class');
    let imageId = document.createAttribute('id');
    imageId.value = `imgId${i}`;
    image.setAttributeNode(imageId);

    imageClass.value = "imgStyle";
    image.setAttributeNode(imageClass);
    imageSrc.value = path + picturesArray[i];
    image.setAttributeNode(imageSrc);
    imageDiv.appendChild(image);

    //
    // let childElementLeft = document.getElementById(`imgId${i}`);
    // let parentDivLeft = childElementLeft.parentNode;
    // parentDivLeft.insertBefore(btnLeft, childElementLeft);
    // let childElementRight = document.getElementById(`imgId${i}`);
    // let parentDivRight = childElementRight.parentNode;
    // parentDivRight.insertBefore(btnRight, childElementRight.nextSibling);
}

let imageElement = document.getElementsByClassName('imgStyle');
let imageDivElement = document.getElementsByClassName('imgDivClass');
for (let j = 0; j < picturesArray.length; j++) {
    imageElement[j].addEventListener('click', function () {
        imageElement[j].style.width = "800px";
        imageElement[j].style.height = "560px";
        imageElement[j].style.transition = "0.6s";
        imageDivElement[j].style.display = "block";
        imageDivElement[j].style.paddingLeft= "23%";

        // let slideIndex = 1;
        // showSlide(slideIndex);
        //
        // function plusSlide(n) {
        //     showSlide(slideIndex += n);
        // }
    });

    // imageElement[j].addEventListener('mouseout', function () {
    //     imageElement[j].style.width = "400px";
    //     imageElement[j].style.height = "280px";
    //     imageElement[j].style.transition = "0.6s";
    // });
}