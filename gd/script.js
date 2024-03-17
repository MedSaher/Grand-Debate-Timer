document.addEventListener('DOMContentLoaded', function() {
        let count = 3 * 60; // Initial countdown value set to 3 minutes
        let isTimerRunning = false; // Flag to track if the timer is running
        const timerDisplay = document.getElementById('timer');
        let timerInterval; // Variable to hold the setInterval instance

        function updateTimerDisplay() {
            let minutes = Math.floor(count / 60);
            let seconds = count % 60;
            timerDisplay.innerText = `Timer : ${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }

        function playSound() {
            const audio = document.getElementById('audio');
            audio.play();
        }

        function timerFunction() {
            count--;
            updateTimerDisplay();

            if (count === 2) { // Check if countdown reaches 3 seconds
                playSound();
            }
            if (count <= 10) { // Check if countdown reaches 3 seconds
                timerDisplay.style.color = "red";
            }else{
                timerDisplay.style.color = "white";
            }

            if (count === 0) {
                clearInterval(timerInterval);
                isTimerRunning = false;
                right.classList.remove("focus");
                    right1.classList.remove("focus");
                    right2.classList.remove("focus-img");
                    left.classList.remove("focus");
                    left1.classList.remove("focus");
                    left2.classList.remove("focus-img");
            }
        }

        document.addEventListener('keydown', function(event) {
            var left = document.getElementById('left');
            var left1 = document.getElementById('left1');
            var left2 = document.getElementById('left2');
            var right = document.getElementById('right');
            var right1 = document.getElementById('right1');
            var right2 = document.getElementById('right2');
            /* toggling function */
            function toggling(firele, ecele, rdele, thele, fthele, thele) {
                firele.classList.toggle("focus");
                ecele.classList.toggle("focus");
                rdele.classList.toggle("focus-img");
                thele.classList.remove("focus");
                fthele.classList.remove("focus");
                thele.classList.remove("focus-img");
            }
            if (event.key === 'a' || event.key === 'A') {
                if (!isTimerRunning) {
                    count = 3 * 60; // Reset countdown value to 3 minutes
                    updateTimerDisplay(); // Update display
                    timerInterval = setInterval(timerFunction, 1000); // Start countdown
                    isTimerRunning = true;
                    toggling(left, left1, left2, right, right1, right2);
                }
            } else if (event.key === 'b' || event.key === 'B') {
                if (!isTimerRunning) {
                    count = 3 * 60; // Reset countdown value to 3 minutes
                    updateTimerDisplay(); // Update display
                    timerInterval = setInterval(timerFunction, 1000); // Start countdown
                    isTimerRunning = true;
                    toggling( right, right1, right2, left, left1, left2);
                }
            }else if (event.key === 'c' || event.key === 'C') {
                if (!isTimerRunning) {
                    count = 1 * 60; // Reset countdown value to 3 minutes
                    updateTimerDisplay(); // Update display
                    timerInterval = setInterval(timerFunction, 1000); // Start countdown
                    isTimerRunning = true;
                    toggling(left, left1, left2, right, right1, right2);
                }
            }else if (event.key === 'd' || event.key === 'D') {
                if (!isTimerRunning) {
                    count = 1 * 60; // Reset countdown value to 3 minutes
                    updateTimerDisplay(); // Update display
                    timerInterval = setInterval(timerFunction, 1000); // Start countdown
                    isTimerRunning = true;
                    toggling( right, right1, right2, left, left1, left2);
                }
            }
        });
    });