let score = 0;
let cookiesPerClick = 1;
let upgradeCost = 10;

// Get HTML elements
const scoreDisplay = document.getElementById('scoreDisplay');
const clickValueDisplay = document.getElementById('clickValueDisplay');
const clickBtn = document.getElementById('clickBtn');
const upgradeBtn = document.getElementById('upgradeBtn');

// Function to update the text and check if player can buy upgrades
function updateUI() {
    scoreDisplay.textContent = "Cookies: " + score;
    clickValueDisplay.textContent = "Cookies per click: " + cookiesPerClick;
    upgradeBtn.textContent = "Buy Multiplier (Cost: " + upgradeCost + ")";
    
    // Enable upgrade button if player has enough cookies
    if (score >= upgradeCost) {
        upgradeBtn.disabled = false;
    } else {
        upgradeBtn.disabled = true;
    }
}

// When you click the main game button
clickBtn.addEventListener('click', () => {
    score += cookiesPerClick;
    updateUI();
});

// When you buy the multiplier upgrade
upgradeBtn.addEventListener('click', () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;          // Take away the cookies
        cookiesPerClick += 1;          // Increase click power
        upgradeCost = Math.round(upgradeCost * 1.5); // Make the next upgrade harder to buy
        updateUI();
    }
});
