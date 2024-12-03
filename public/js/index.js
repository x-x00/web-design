// Get modal and elements
const modal = document.getElementById('offer-modal');
const closeBtn = document.querySelector('.close-btn');
const offerTitle = document.getElementById('offer-title');
const offerDescription = document.getElementById('offer-description');

// Offer details
const offerDetails = {
    1: { title: 'Buy 1 Get 1 Free', description: 'Enjoy our special Buy 1 Get 1 Free offer on all cold drinks. Limited time offer!' },
    2: { title: '20% Off on Cocktails', description: 'Get 20% off on all cocktails this weekend. Don\'t miss out on this great deal!' },
    3: { title: 'Free Cold Drink on Order over $50', description: 'Order over $50 and get a free cold drink of your choice. Offer valid for this month only.' },
    4: { title: '10% Off on Cold Drinks', description: 'Get 10% off on all cold drinks this month. Don\'t miss out on this great deal!' },
    5: { title: 'Free Cocktail on Order over $100', description: 'Order over $100 and get a free cocktail of your choice. Offer valid for this week only.' }
};

// Offer click events
document.querySelectorAll('.offer-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const offerId = this.closest('.offer-card').getAttribute('data-offer');
        const details = offerDetails[offerId];
        offerTitle.textContent = details.title;
        offerDescription.textContent = details.description;
        modal.style.display = 'flex';
    });
});

// Close button
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
