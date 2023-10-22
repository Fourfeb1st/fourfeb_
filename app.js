const HEL = document.getElementById("Hello, I'm Sujira Ploysumlee");

// Function to simulate typing effect
function typeWriter(element, text, index, speed) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typeWriter(element, text, index, speed), speed);
    }
  }

const HELling = "Hello, I'm Sujira Ploysumlee_";
typeWriter(HEL, HELling, 0, 150);

