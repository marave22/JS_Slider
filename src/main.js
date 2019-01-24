let picturesArray = ['slider_image_1.jpg', 'slider_image_2.jpg', 'slider_image_3.jpg', 'slider_image_4.jpg', 'slider_image_5.jpg', 'slider_image_6.jpg', 'slider_image_7.jpg', 'slider_image_8.jpg'];

//Images Main Div
let mainImagesDiv = document.createElement('div');
let mainImagesDivClass = document.createAttribute('class');
let mainImagesDivId = document.createAttribute('id');
mainImagesDivClass.value = "mainImagesDivClass";
mainImagesDiv.setAttributeNode(mainImagesDivClass);
mainImagesDivId.value = "mainImagesDivId";
mainImagesDiv.setAttributeNode(mainImagesDivId);

//Main_Div_After_Section
let mainDiv = document.createElement('div');
let mainDivClass = document.createAttribute('class');
let mainDivId = document.createAttribute('id');
mainDivClass.value = "mainDivClass";
mainDiv.setAttributeNode(mainDivClass);
mainDivId.value = "mainDivId";
mainDiv.setAttributeNode(mainDivId);
mainDiv.appendChild(mainImagesDiv);
//Main_Section_append_MAinDIV
let element = document.getElementById('main');
element.appendChild(mainDiv);



//modal_container
let modalContainer = document.createElement('div');
let modalContainClass = document.createAttribute('class');
let modalContainId = document.createAttribute('id');
modalContainClass.value = "modalContainClass";
modalContainer.setAttributeNode(modalContainClass);
modalContainId.value = "modalContainId";
modalContainer.setAttributeNode(modalContainId);

//modal container into main Div
let childMainDiv = document.getElementById('mainImagesDivId');
let parentMainDiv = childMainDiv.parentNode;
parentMainDiv.insertBefore(modalContainer, childMainDiv.nextSibling);

//modal
let modal = document.createElement('div');
let modalClass = document.createAttribute('class');
let modalId = document.createAttribute('id');
modalClass.value = "modalClass";
modalId.value = "modalId";
modal.setAttributeNode(modalClass);
modal.setAttributeNode(modalId);
modalContainer.appendChild(modal);

//close span
let closeSpan = document.createElement('span');
let closeSpanClass = document.createAttribute('class');
let closeSpanId = document.createAttribute('id');
closeSpanClass.value = "closeSpanClass";
closeSpanId.value = "closeSpanId";
closeSpan.setAttributeNode(closeSpanClass);
closeSpan.setAttributeNode(closeSpanId);
closeSpan.innerHTML = "&#9587";
modal.appendChild(closeSpan);


//modal Div
let modalDiv = document.createElement('div');
let modalDivClass = document.createAttribute('class');
let modalDivId = document.createAttribute('id');
modalDivClass.value = "modalDivClass";
modalDivId.value = "modalDivId";
modalDiv.setAttributeNode(modalDivClass);
modalDiv.setAttributeNode(modalDivId);

//modal container child
let childModal = document.getElementById('closeSpanId');
let parentModal = childModal.parentNode;
parentModal.insertBefore(modalDiv, childModal.nextSibling);

//spanLeft
let leftSpan = document.createElement('span');
let leftSpanClass = document.createAttribute('class');
let leftSpanId = document.createAttribute('id');
leftSpanClass.value = "leftSpanClass";
leftSpanId.value = "leftSpanId";
leftSpan.setAttributeNode(leftSpanClass);
leftSpan.setAttributeNode(leftSpanId);
leftSpan.innerHTML = "&#8918";

modalDiv.appendChild(leftSpan);

//ModalImageSlide
//Slide Image_Div
let imageSlideDiv = document.createElement('div');
let imageSlideDivClass = document.createAttribute('class');
let imageSlideDivId = document.createAttribute('id');
imageSlideDivId.value = 'imgSlideDivId';
imageSlideDiv.setAttributeNode(imageSlideDivId);
imageSlideDivClass.value = "imgSlideDivClass";
imageSlideDiv.setAttributeNode(imageSlideDivClass);

//image Slide div into modalDiv
let childSlideDiv = document.getElementById('leftSpanId');
let parentSlideDiv = childSlideDiv.parentNode;
parentSlideDiv.insertBefore(imageSlideDiv, childSlideDiv.nextSibling);

//spanRight
let rightSpan = document.createElement('span');
let rightSpanClass = document.createAttribute('class');
let rightSpanId = document.createAttribute('id');
rightSpanClass.value = "rightSpanClass";
rightSpanId.value = "rightSpanId";
rightSpan.setAttributeNode(rightSpanClass);
rightSpan.setAttributeNode(rightSpanId);
rightSpan.innerHTML = "&#8919";

let childRightSpan = document.getElementById('imgSlideDivId');
let parentRight = childRightSpan.parentNode;
parentRight.insertBefore(rightSpan, childRightSpan.nextSibling);

for (let i = 0; i < picturesArray.length; i++) {

    //Image_Div
    let imageDiv = document.createElement('div');
    let imageDivClass = document.createAttribute('class');
    let imageDivId = document.createAttribute('id');
    imageDivId.value = `imgDivId${i}`;
    imageDiv.setAttributeNode(imageDivId);
    imageDivClass.value = "imgDivClass";
    imageDiv.setAttributeNode(imageDivClass);
    mainImagesDiv.appendChild(imageDiv);
    //image
    let path = "./images/";
    let image = document.createElement('img');
    let imageSrc = document.createAttribute('src');
    let imageClass = document.createAttribute('class');
    let imageId = document.createAttribute('id');
    imageId.value = `imgId${i}`;
    image.setAttributeNode(imageId);
    imageClass.value = "imgClass";
    image.setAttributeNode(imageClass);
    imageSrc.value = path + picturesArray[i];
    image.setAttributeNode(imageSrc);
    imageDiv.appendChild(image);
}

for (let j = 0; j < picturesArray.length; j++) {
    //Slide image
    let path = "./images/";
    let imageSlide = document.createElement('img');
    let imageSlideSrc = document.createAttribute('src');
    let imageSlideClass = document.createAttribute('class');
    let imageSlideId = document.createAttribute('id');
    imageSlideId.value = `imgSlideId${j}`;
    imageSlide.setAttributeNode(imageSlideId);
    imageSlideClass.value = "imgSlideClass";
    imageSlide.setAttributeNode(imageSlideClass);
    imageSlideSrc.value = path + picturesArray[j];
    imageSlide.setAttributeNode(imageSlideSrc);
    imageSlideDiv.appendChild(imageSlide);
}

for (let k = 0; k < picturesArray.length; k++) {
    let slideShow = document.getElementById(`imgId${k}`);
    let closeSlide = document.getElementById('closeSpanId');
    slideShow.addEventListener('click', () => {
        document.getElementById('mainImagesDivId').style.display = "none";
        document.getElementById('modalContainId').style.display = "block";
        document.getElementById('main').style.backgroundColor = "#0000006b";
        document.getElementById(`imgId${k}`).style.width = "800px";
        document.getElementById(`imgId${k}`).style.height = "560px";
        document.getElementById(`imgId${k}`).style.transition = "0.6s";
    }, true);


    closeSlide.addEventListener('click', () => {
        document.getElementById('mainImagesDivId').style.display = "block";
        document.getElementById('modalContainId').style.display = "none";
        document.getElementById(`imgId${k}`).style.width = "400px";
        document.getElementById(`imgId${k}`).style.height = "280px";
        document.getElementById(`imgId${k}`).style.transition = "0.6s";
        document.getElementById('main').style.backgroundColor = "#e0d8d3";
    });
}

let slideIndex = 1;
Slide(slideIndex);

function nextImage(n) {
    Slide(slideIndex += n);
}

let clickLeft = document.getElementById('leftSpanId');
clickLeft.addEventListener('click', () => nextImage(-1), );

let clickRight = document.getElementById('rightSpanId');
clickRight.addEventListener('click', () => nextImage(1));

function Slide(n) {
    let i;
    let x = document.getElementsByClassName("imgSlideClass");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}