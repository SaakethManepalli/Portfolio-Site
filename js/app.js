// Cursor glow effect
const cursorGlow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    // A simple glow follow could be implemented here or with pure CSS on body:hover
    // For performance, we can skip complex JS followers or use a library.
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-section'); // Add initial class
    observer.observe(section);
});

// Add dynamic class for sections
const style = document.createElement('style');
style.textContent = `
    .fade-section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    .fade-section.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);


// Modal Logic
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

const hackathonData = {
    'nyu': {
        title: 'SoundKey @ HackNYU 2025',
        description: `
            <p><strong>Project: SoundKey</strong> | <em>Security & Privacy Track</em></p>
            <p>Participated in the HackNYU 2025 hackathon at NYU Tandon School of Engineering with teammates Efthimios Papadopoulos, Ethan Kim, and Saaketh Manepalli.</p>
            <h3>What it does</h3>
            <p>SoundKey is a Chrome extension that securely aids password recall through the use of user-selected music and lyrics. It demonstrates the potential of music-based memory aids on password security.</p>
        `,
        tech: 'Tech Stack: JavaScript, Bootstrap, Lyrics.OVH, OpenAI API'
    },
    'hoya': {
        title: 'PomEEGo @ Hoya Hacks',
        description: `
            <p><strong>Winner: 3rd Place Overall</strong></p>
            <p>It was an incredible experience building something impactful in just 36 hours. We combined hardware (EEG headsets) with software to create a real-time fatigue monitoring tool for doctors, complete with notifications, a backup system, and an admin dashboard.</p>
            <h3>The Challenge</h3>
            <p>The journey wasn’t without its challenges – from debugging EEG connectivity to resolving dependency issues – but we pushed through and delivered a functional prototype that impressed the judges.</p>
        `,
        tech: 'Tech Stack: EEG Headsets, Flutter, Java EE, MongoDB'
    },
    'tcnj': {
        title: 'AI Diet Tracker @ HackTCNJ',
        description: `
            <p><strong>Winner: Best High School/College Freshman Project</strong></p>
            <p>Developed an AI-based Diet Tracking Device that simplifies nutrition monitoring.</p>
        `,
        tech: 'Tech Stack: Auth0, MongoDB, GPT-4 Image Processing'
    },
    'teenhacks': {
        title: 'FirstShot @ Teenhacks',
        description: `
            <h3>Inspiration</h3>
            <p>We came up with FirstShot to enhance precision and efficiency in first-person shooters, specifically Counter-Strike 2. The ability to make that first shot often determines who wins the exchange.</p>
            <h3>What it does</h3>
            <p>FirstShot integrates with gameplay, recording every shot to provide feedback. It calculates the distance between the crosshair and the enemy's head to create a heat map of accuracy.</p>
            <h3>How we built it</h3>
            <p>We trained Detectron2 to detect enemy heads and crosshairs in a game environment. We curated a dataset of screenshots with different maps, lighting, and stances to ensure high accuracy.</p>
            <h3>Challenges</h3>
            <p>Integrating Detectron2 required optimization for real-time speed. Our Flask server had to handle asynchronous image processing and concurrent requests. Database schema design in PostgreSQL was critical for efficient storage of performance metrics.</p>
        `,
        tech: 'Tech Stack: Detectron2, Flask, ngrok, PostgreSQL, Python'
    },
    'bitcamp': {
        title: 'ParseDoD @ Bitcamp',
        description: `
            <h3>Inspiration</h3>
            <p>Current DOD contracts data is dense and hard to search. ParseDoD automates scraping and extracting relevant purchase info to provide insights into government spending.</p>
            <h3>What it does</h3>
            <p>ParseDoD scrapes DOD contracts, uses GPT-3.5 to extract details (items, amounts, companies), and presents them through interactive charts and maps.</p>
            <h3>How we built it</h3>
            <p>We used Jsoup and Selenium for scraping, GPT-3.5 for text extraction, and Java heuristics for enumeration data. The backend is Java EE/Servlets with MongoDB, and the frontend uses Bootstrap and Google Maps/Chart.JS APIs.</p>
            <h3>Challenges</h3>
            <p>Efficiently scraping large volumes of inconsistent contract data was difficult. Adapting prompts for different formats and designing an intuitive UI were ongoing challenges.</p>
        `,
        tech: 'Tech Stack: Java EE, Selenium, GPT-3.5, MongoDB, Google Maps API'
    }
};

window.openModal = function (id) {
    const data = hackathonData[id];
    if (data) {
        modalTitle.textContent = data.title;
        modalBody.innerHTML = `
            <p>${data.description}</p>
            <p><strong>${data.tech}</strong></p>
        `;
        modal.style.display = "block";
    }
}

closeModal.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


console.log("Portfolio loaded successfully.");
