document.addEventListener("DOMContentLoaded", function () {
var typed = new Typed(".text",{
    strings: ["Full Stack Web Developer","Programmer"," AIML Engineer","RPA Developer"],
    typeSpeed:80,
    backSpeed:70,
    backDelay:100,
    loop:true
});

var typed = new Typed(".text2",{
    strings: ["Full Stack Web Developer"," AIML Engineer","RPA Developer"],
    typeSpeed:50,
    backSpeed:70,
    backDelay:1000,
    loop:true
});
});

// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbar = document.getElementsByClassName('navbar')[0]

// toggleButton.addEventListener('click', ()=>{
//     navbar.classList.toggle('active')
// })


function displayResume() {
    // Replace with the path to your PDF file
    // const pdfPath = 'Rakshans_Resume.pdf';
    const pdfPath = 'My_Resume.pdf';


    // Create a link element
    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank'; // Open in a new tab
    // link.setAttribute('download', ''); // Optional: Add this attribute to enable download

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the click event on the link
    link.click();

    // Clean up: remove the link from the body
    document.body.removeChild(link);
}


// ******************************
// video playing  code
function redirectToWebsite(url) {
    window.location.href = url;  // Use the provided URL for redirection
}

function showVideoPopup(videoUrl) {
    var videoPopup = document.getElementById('videoPopup');
    var videoFrame = document.getElementById('videoFrame');
    videoFrame.src = videoUrl;  // Set the video URL
    videoPopup.style.display = 'flex';
}

function closeVideoPopup() {
    var videoPopup = document.getElementById('videoPopup');
    var videoFrame = document.getElementById('videoFrame');
    videoFrame.src = '';
    videoPopup.style.display = 'none';
}
