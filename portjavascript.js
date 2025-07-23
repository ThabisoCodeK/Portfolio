 document.addEventListener('DOMContentLoaded', function() {
            const greetingElement = document.getElementById('home-greeting');
            // Updated the fullGreeting to include the new line
            const fullGreeting = "&lt;Hello World!&gt;<br>I'm Thabiso Kheo.";
            let charIndex = 0;
            let currentText = '';

            function typeWriter() {
                if (charIndex < fullGreeting.length) {
                    const char = fullGreeting.charAt(charIndex);
                    if (char === '&' && fullGreeting.substring(charIndex, charIndex + 4) === '&lt;') {
                        currentText += '&lt;';
                        charIndex += 4;
                    } else if (char === '&' && fullGreeting.substring(charIndex, charIndex + 4) === '&gt;') {
                        currentText += '&gt;';
                        charIndex += 4;
                    }
                    // Handle <br> tag
                    else if (char === '<' && fullGreeting.substring(charIndex, charIndex + 4) === '<br>') {
                        currentText += '<br>';
                        charIndex += 4;
                    }
                    else {
                        currentText += char;
                        charIndex++;
                    }
                    greetingElement.innerHTML = currentText;
                    setTimeout(typeWriter, 70); // Typing speed
                }
            }

            typeWriter();
        });