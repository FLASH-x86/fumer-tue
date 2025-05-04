// Health Impact Calculator
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    
    const calculateBtn = document.getElementById('calculate');
    const cigarettesInput = document.getElementById('cigarettes');
    const yearsInput = document.getElementById('years');
    
    function updateCalculator() {
        const cigarettes = parseInt(cigarettesInput.value) || 0;
        const years = parseInt(yearsInput.value) || 0;
        
        // Calculate impacts
        const lungImpact = Math.min(100, Math.round((cigarettes * years) / 2));
        const heartRisk = Math.min(100, Math.round((cigarettes * years) / 1.5));
        const moneySpent = Math.round((cigarettes * 365 * years * 10) / 20);
        const lifeImpact = Math.min(15, Math.round((cigarettes * years) / 20));
        
        // Update results
        document.getElementById('lungs-result').textContent = `-${lungImpact}% de capacité`;
        document.getElementById('heart-result').textContent = `+${heartRisk}% de risque`;
        document.getElementById('money-result').textContent = `${moneySpent}€ dépensés`;
        document.getElementById('life-result').textContent = `-${lifeImpact} ans d'espérance de vie`;
    }
    
    if (calculateBtn && cigarettesInput && yearsInput) {
        calculateBtn.addEventListener('click', updateCalculator);
        cigarettesInput.addEventListener('input', updateCalculator);
        yearsInput.addEventListener('input', updateCalculator);
        updateCalculator();
    }

    // Dependency Test
    const quizData = [
        {
            question: "Combien de cigarettes fumez-vous par jour ?",
            options: ["0", "1-5", "6-10", "11-20", "Plus de 20"],
            points: [0, 1, 2, 3, 4]
        },
        {
            question: "Fumez-vous dans l'heure qui suit votre réveil ?",
            options: ["Non", "Oui"],
            points: [0, 2]
        },
        {
            question: "Trouvez-vous difficile de ne pas fumer dans les endroits où c'est interdit ?",
            options: ["Non", "Oui"],
            points: [0, 1]
        }
    ];

    const quizContainer = document.getElementById('quiz');
    const submitButton = document.getElementById('submitQuiz');

    function createQuiz() {
        if (!quizContainer) return;
        
        quizData.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'quiz-question';
            questionDiv.innerHTML = `
                <h4>${question.question}</h4>
                ${question.options.map((option, i) => `
                    <label>
                        <input type="radio" name="q${index}" value="${question.points[i]}">
                        ${option}
                    </label>
                `).join('')}
            `;
            quizContainer.appendChild(questionDiv);
        });
    }

    if (submitButton) {
        submitButton.addEventListener('click', () => {
            let totalPoints = 0;
            quizData.forEach((_, index) => {
                const selected = document.querySelector(`input[name="q${index}"]:checked`);
                if (selected) totalPoints += parseInt(selected.value);
            });

            let result;
            if (totalPoints <= 2) result = "Faible dépendance";
            else if (totalPoints <= 4) result = "Dépendance modérée";
            else result = "Forte dépendance";

            alert(`Votre score: ${totalPoints}\nNiveau de dépendance: ${result}`);
        });
    }

    createQuiz();

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check for saved dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            const icon = darkModeToggle.querySelector('i');
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        });
    }

    // Loading Animation
    const loader = document.querySelector('.loader');
    
    // Hide loader after page is fully loaded
    window.addEventListener('load', () => {
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    });

    // Fallback: Hide loader after 3 seconds if page load event doesn't fire
    setTimeout(() => {
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }, 3000);

    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Initialize Particles
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        },
        retina_detect: true
    });

    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Quiz Functionality
    const quizCigarettes = document.getElementById('quiz-cigarettes');
    const quizCigarettesValue = document.getElementById('quiz-cigarettes-value');
    const submitQuiz = document.getElementById('submitQuiz');
    
    quizCigarettes.addEventListener('input', () => {
        quizCigarettesValue.textContent = quizCigarettes.value;
    });

    submitQuiz.addEventListener('click', () => {
        const cigarettes = parseInt(quizCigarettes.value);
        const time = parseInt(document.getElementById('quiz-time').value);
        
        let addictionLevel = 'Faible';
        if (cigarettes > 20 || time <= 5) {
            addictionLevel = 'Forte';
        } else if (cigarettes > 10 || time <= 30) {
            addictionLevel = 'Moyenne';
        }
        
        alert(`Votre niveau de dépendance est ${addictionLevel}.`);
    });

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message envoyé ! Nous vous répondrons bientôt.');
        contactForm.reset();
    });
});
