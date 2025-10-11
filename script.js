// =============================================
// SafeSphere - AI Content Safety Platform
// =============================================
// 
// INTEGRATION GUIDE FOR AI TEAMMATES:
// 
// REPLACE THESE MOCK FUNCTIONS WITH REAL AI APIs:
// 1. analyzeHarmLevel() - Line ~45
// 2. detectMisinformation() - Line ~65  
// 3. detectBullying() - Line ~75
// 4. detectHateSpeech() - Line ~85
// 5. detectHarassment() - Line ~95
// 6. generateExplanations() - Line ~105
// 7. generateRephrasing() - Line ~115
// 8. detectLanguage() - Line ~125
//
// Each function returns mock data - replace with actual API calls
// Example: Replace with fetch('/api/analyze-harm', { ... })
// =============================================

// DOM Elements
const textInput = document.getElementById('textInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const clearBtn = document.getElementById('clearBtn');
const loading = document.getElementById('loading');
const resultsSection = document.getElementById('resultsSection');
const charCount = document.getElementById('charCount');
const languageSelect = document.getElementById('languageSelect');

// Risk Elements
const riskLabel = document.getElementById('riskLabel');
const riskScore = document.getElementById('riskScore');
const harmMeter = document.getElementById('harmMeter');

// Flag Elements
const misinformationFlag = document.getElementById('misinformationFlag');
const bullyingFlag = document.getElementById('bullyingFlag');
const hateSpeechFlag = document.getElementById('hateSpeechFlag');
const harassmentFlag = document.getElementById('harassmentFlag');

// Explanation Elements
const explanationText = document.getElementById('explanationText');
const highlightedText = document.getElementById('highlightedText');
const rephrasingSuggestions = document.getElementById('rephrasingSuggestions');

// =============================================
// MOCK AI FUNCTIONS - REPLACE WITH REAL APIs
// =============================================

/**
 * 🔧 INTEGRATION POINT: Harm Level Analysis
 * Replace this with your actual toxicity detection API
 */
async function analyzeHarmLevel(text) {
    // 🚨 REPLACE WITH REAL API CALL:
    // const response = await fetch('/api/analyze-harm', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ text })
    // });
    // return await response.json();
    
    // Mock implementation (REMOVE THIS):
    await new Promise(resolve => setTimeout(resolve, 500));
    const harmfulWords = ['hate', 'stupid', 'kill', 'ugly', 'worthless', 'attack'];
    const matches = harmfulWords.filter(word => text.toLowerCase().includes(word));
    const baseScore = Math.min(matches.length * 0.2, 0.8);
    const randomVariation = Math.random() * 0.2;
    return Math.min(baseScore + randomVariation, 1);
}

/**
 * 🔧 INTEGRATION POINT: Misinformation Detection
 * Replace with your actual fact-checking API
 */
async function detectMisinformation(text) {
    // 🚨 REPLACE WITH REAL API CALL
    await new Promise(resolve => setTimeout(resolve, 300));
    const fakeIndicators = ['government lies', 'fake news', 'they want you to believe', 'hidden truth'];
    return fakeIndicators.some(term => text.toLowerCase().includes(term));
}

/**
 * 🔧 INTEGRATION POINT: Bullying Detection  
 * Replace with your actual bullying detection API
 */
async function detectBullying(text) {
    // 🚨 REPLACE WITH REAL API CALL
    await new Promise(resolve => setTimeout(resolve, 300));
    const bullyingWords = ['ugly', 'stupid', 'nobody likes you', 'worthless', 'loser'];
    return bullyingWords.some(word => text.toLowerCase().includes(word));
}

/**
 * 🔧 INTEGRATION POINT: Hate Speech Detection
 * Replace with your actual hate speech API
 */
async function detectHateSpeech(text) {
    // 🚨 REPLACE WITH REAL API CALL
    await new Promise(resolve => setTimeout(resolve, 300));
    const hateWords = ['hate', 'disgusting', 'attack', 'destroy'];
    return hateWords.some(word => text.toLowerCase().includes(word));
}

/**
 * 🔧 INTEGRATION POINT: Harassment Detection
 * Replace with your actual harassment detection API
 */
async function detectHarassment(text) {
    // 🚨 REPLACE WITH REAL API CALL
    await new Promise(resolve => setTimeout(resolve, 300));
    const harassmentPatterns = ['I know where you live', 'you should be afraid', 'watch your back'];
    return harassmentPatterns.some(pattern => text.toLowerCase().includes(pattern));
}

/**
 * 🔧 INTEGRATION POINT: Explanation Generation
 * Replace with your actual explainable AI API
 */
async function generateExplanations(text, flags) {
    // 🚨 REPLACE WITH REAL API CALL
    await new Promise(resolve => setTimeout(resolve, 400));
    
    const explanations = [];
    if (flags.misinformation) {
        explanations.push('Contains unverified claims and potential misinformation');
    }
    if (flags.bullying) {
        explanations.push('Uses language that could be perceived as bullying or personal attacks');
    }
    if (flags.hateSpeech) {
        explanations.push('Includes aggressive language that may promote hatred');
    }
    if (flags.harassment) {
        explanations.push('Contains threatening or intimidating language');
    }
    
    return {
        reasons: explanations.length > 0 ? explanations : ['Content appears to be relatively safe'],
        highlightedText: highlightProblematicPhrases(text)
    };
}

/**
 * 🔧 INTEGRATION POINT: Rephrasing Suggestions
 * Replace with your actual generative AI API
 */
async function generateRephrasing(text, issues) {
    // 🚨 REPLACE WITH REAL API CALL
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const suggestions = [];
    
    if (issues.includes('aggressive')) {
        suggestions.push({
            text: "I understand you're upset, but let's discuss this calmly and respectfully.",
            reason: "De-escalates aggressive tone"
        });
    }
    
    if (issues.includes('misinformation')) {
        suggestions.push({
            text: "Based on available information, I believe... [state your perspective calmly]",
            reason: "Addresses concerns without spreading unverified claims"
        });
    }
    
    if (issues.includes('personal')) {
        suggestions.push({
            text: "I'd like to understand your perspective better. Could you help me see your point of view?",
            reason: "Promotes understanding rather than confrontation"
        });
    }
    
    // Default suggestion
    if (suggestions.length === 0) {
        suggestions.push({
            text: "I appreciate this discussion and want to ensure we communicate respectfully.",
            reason: "Maintains positive engagement"
        });
    }
    
    return suggestions;
}

/**
 * 🔧 INTEGRATION POINT: Language Detection
 * Replace with your actual language detection API
 */
async function detectLanguage(text) {
    // 🚨 REPLACE WITH REAL API CALL
    await new Promise(resolve => setTimeout(resolve, 200));
    return 'en'; // Mock - always returns English
}

// =============================================
// UI HELPER FUNCTIONS
// =============================================

function highlightProblematicPhrases(text) {
    const problematicPhrases = [
        'hate', 'stupid', 'ugly', 'kill', 'attack', 
        'fake news', 'worthless', 'loser', 'disgusting'
    ];
    
    let highlighted = text;
    problematicPhrases.forEach(phrase => {
        if (text.toLowerCase().includes(phrase)) {
            const regex = new RegExp(phrase, 'gi');
            highlighted = highlighted.replace(regex, 
                match => `<span class="highlight">${match}</span>`
            );
        }
    });
    
    return highlighted;
}

function updateRiskDisplay(harmLevel) {
    const percentage = Math.round(harmLevel * 100);
    riskScore.textContent = `${percentage}%`;
    harmMeter.style.width = `${percentage}%`;
    
    // Update risk label and color
    if (percentage >= 70) {
        riskLabel.textContent = 'HIGH RISK';
        riskLabel.style.background = 'var(--high-risk)';
        document.querySelector('.risk-card').classList.add('high-risk');
    } else if (percentage >= 30) {
        riskLabel.textContent = 'MODERATE RISK';
        riskLabel.style.background = 'var(--moderate)';
        document.querySelector('.risk-card').classList.add('moderate-risk');
    } else {
        riskLabel.textContent = 'LOW RISK';
        riskLabel.style.background = 'var(--safe)';
    }
}

function updateFlagStatus(flagElement, isDetected) {
    const statusElement = flagElement.querySelector('.flag-status');
    statusElement.textContent = isDetected ? 'DETECTED' : 'SAFE';
    statusElement.className = `flag-status ${isDetected ? 'detected' : 'safe'}`;
}

function displayExplanations(explanationData) {
    explanationText.innerHTML = `
        <ul class="explanation-list">
            ${explanationData.reasons.map(reason => 
                `<li><i class="fas fa-exclamation-circle"></i> ${reason}</li>`
            ).join('')}
        </ul>
    `;
    
    highlightedText.innerHTML = explanationData.highlightedText;
}

function displayRephrasingSuggestions(suggestions) {
    rephrasingSuggestions.innerHTML = suggestions.map(suggestion => `
        <div class="suggestion-item">
            <div class="suggestion-text">
                <strong>"${suggestion.text}"</strong>
                <div class="suggestion-reason">${suggestion.reason}</div>
            </div>
            <button class="copy-btn" onclick="copyToClipboard('${suggestion.text.replace(/'/g, "\\'")}')">
                <i class="fas fa-copy"></i> Copy
            </button>
        </div>
    `).join('');
}

// =============================================
// EVENT HANDLERS
// =============================================

analyzeBtn.addEventListener('click', async () => {
    const text = textInput.value.trim();
    
    if (!text) {
        alert('Please enter some text to analyze.');
        return;
    }
    
    // Show loading, hide results
    analyzeBtn.disabled = true;
    loading.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    
    try {
        // 🔧 AI TEAM: These are the main integration points!
        // All functions below should be replaced with real API calls
        
        const harmLevel = await analyzeHarmLevel(text);
        const misinformation = await detectMisinformation(text);
        const bullying = await detectBullying(text);
        const hateSpeech = await detectHateSpeech(text);
        const harassment = await detectHarassment(text);
        
        const flags = { misinformation, bullying, hateSpeech, harassment };
        const explanations = await generateExplanations(text, flags);
        
        const issues = [];
        if (harmLevel > 0.6) issues.push('aggressive');
        if (misinformation) issues.push('misinformation');
        if (bullying || hateSpeech || harassment) issues.push('personal');
        
        const rephrasing = await generateRephrasing(text, issues);
        
        // Update UI with results
        updateRiskDisplay(harmLevel);
        updateFlagStatus(misinformationFlag, misinformation);
        updateFlagStatus(bullyingFlag, bullying);
        updateFlagStatus(hateSpeechFlag, hateSpeech);
        updateFlagStatus(harassmentFlag, harassment);
        displayExplanations(explanations);
        displayRephrasingSuggestions(rephrasing);
        
        // Show results
        resultsSection.classList.remove('hidden');
        
    } catch (error) {
        console.error('Analysis error:', error);
        alert('Failed to analyze content. Please try again.');
    } finally {
        analyzeBtn.disabled = false;
        loading.classList.add('hidden');
    }
});

clearBtn.addEventListener('click', () => {
    textInput.value = '';
    charCount.textContent = '0 characters';
    resultsSection.classList.add('hidden');
});

textInput.addEventListener('input', () => {
    const count = textInput.value.length;
    charCount.textContent = `${count} characters`;
});

// =============================================
// UTILITY FUNCTIONS
// =============================================

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show temporary feedback
        const originalText = event.target.innerHTML;
        event.target.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
            event.target.innerHTML = originalText;
        }, 2000);
    });
}

// Initialize
textInput.addEventListener('input', () => {
    const count = textInput.value.length;
    charCount.textContent = `${count} characters`;
});

// Language selector (basic implementation)
languageSelect.addEventListener('change', (e) => {
    // 🔧 INTEGRATION POINT: Add real translation here
    console.log('Language changed to:', e.target.value);
    // Implement translation logic or API call here
});

console.log('SafeSphere frontend loaded successfully! 🛡️');
