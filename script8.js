const cardsData = [
  { type: 'want', skill: 'Python Programming', desc: 'I want to learn Python to build projects.' },
  { type: 'want', skill: 'Guitar Basics', desc: 'I want to learn how to play guitar.' },
  { type: 'teach', skill: 'Mathematics', desc: 'I can teach Mathematics to beginners.' },
  { type: 'teach', skill: 'Photography', desc: 'I can teach basic photography.' },
  { type: 'teach', skill: 'HTML/CSS', desc: 'I can teach HTML/CSS to beginners.' }
];

const container = document.getElementById('cards-container');

// Function to display cards
function displayCards(cards) {
  container.innerHTML = ''; // Clear previous cards
  cards.forEach((cardData, index) => {
    const type = cardData.type.toLowerCase();
    if (type !== 'want' && type !== 'teach') return;

    const card = document.createElement('div');
    card.classList.add('card', type);

    // Icon using URLs
    const icon = document.createElement('img');
    icon.src = type === 'want'
      ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1iZmCnFH2rHRSkOC09i3TbDaBthIuLh25g&s'
      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqcKBWZ0v_O69zCUWKsC_WUzbkERmEgqZSw&s';
    icon.alt = type === 'want' ? 'Want to Learn Icon' : 'Can Teach Icon';
    card.appendChild(icon);

    // Title
    const title = document.createElement('h3');
    title.textContent = type === 'want' ? 'Want to Learn' : 'Can Teach';
    card.appendChild(title);

    // Skill name
    const skill = document.createElement('p');
    skill.textContent = cardData.skill;
    skill.classList.add('skill');
    card.appendChild(skill);

    // Description
    const desc = document.createElement('p');
    desc.textContent = cardData.desc;
    desc.classList.add('desc');
    card.appendChild(desc);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.style.marginTop = '10px';
    deleteBtn.style.padding = '4px 8px';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.style.backgroundColor = '#ff4d4d';
    deleteBtn.style.border = 'none';
    deleteBtn.style.borderRadius = '5px';
    deleteBtn.style.color = 'white';
    deleteBtn.addEventListener('click', () => {
      cardsData.splice(index, 1); // Remove from array
      displayCards(cardsData);     // Refresh display
    });
    card.appendChild(deleteBtn);

    container.appendChild(card);
  });
}

// Initial display
displayCards(cardsData);

// Add new card dynamically
document.getElementById('addCard').addEventListener('click', () => {
  const type = document.getElementById('type').value;
  const skill = document.getElementById('skill').value.trim();
  const desc = document.getElementById('desc').value.trim();

  if (!skill || !desc) {
    alert('Please enter both skill and description!');
    return;
  }

  const newCard = { type, skill, desc };
  cardsData.push(newCard);       // Add to array
  displayCards(cardsData);        // Refresh display

  // Clear inputs
  document.getElementById('skill').value = '';
  document.getElementById('desc').value = '';
});


