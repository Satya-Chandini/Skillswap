# SkillSwap Dashboard

**Tagline:** Track the skills you want to learn and the ones you can teach in a simple card-based interface.

---

## Project Story

### About the Project
**SkillSwap Dashboard** is a web application that allows users to **track skills they want to learn** and **skills they can teach**. Each skill is displayed as a **card with an icon, title, skill name, and description**. Users can **add new skills dynamically** and **delete cards** as needed. The project is built using **HTML, CSS, and Vanilla JavaScript**.

### Inspiration
I wanted to create a **visual tool** where learners can see their learning goals clearly and mentors can showcase skills they can teach.

### Learning Outcomes
- Dynamic card creation using JavaScript  
- Real-time addition and deletion of skills  
- Responsive layout with Flexbox  
- Event handling and DOM manipulation  
- Using external image URLs for icons  

### How I Built It
1. **HTML:** Card container and form for adding new skills  
2. **CSS:** Card styling with hover effects, colored borders for “Want to Learn” and “Can Teach”  
3. **JavaScript:**  
   - Array to store skills (`cardsData`)  
   - `displayCards()` function for rendering cards dynamically  
   - Form listener to **add new cards**  
   - Delete button to **remove cards**  
   - Icons loaded from external URLs  

### Challenges Faced
- Ensuring dynamically added cards worked with delete buttons  
- External icon URLs sometimes not loading reliably  
- Aligning cards correctly on different screen sizes  

---

## Built With
- **Languages:** HTML, CSS, JavaScript  
- **Front-end Frameworks:** None (Vanilla JS)  
- **Platforms:** Any modern web browser  
- **Cloud Services:** Optional hosting on GitHub Pages or Netlify  
- **Databases:** None (data stored in-memory)  
- **APIs:** None (external images used for icons)  
- **Other Tools:** Flexbox, event listeners, CSS transitions  

---

## Features
- **Dynamic Cards:** Add new skills instantly  
- **Delete Cards:** Remove any card easily  
- **Visual Icons:** Book for “Want to Learn” and teacher for “Can Teach”  
- **Responsive Design:** Works on desktop and mobile devices  

---

## Usage
1. Open `index8.html` in a browser.  
2. Select **Want to Learn** or **Can Teach**.  
3. Enter **Skill Name** and **Description**.  
4. Click **Add Card** to create a new card.  
5. Click the **❌ button** on a card to delete it.  

---

## Screenshots / Preview

### Initial Dashboard
![Initial Dashboard](screenshots/initial.png)

### Adding a New Card
![Add Card](screenshots/add-card.png)

### After Deleting a Card
![After Delete](screenshots/after-delete.png)

*Note:* Replace the image links with actual screenshots from your project folder. You can create a `screenshots` folder and save images as `initial.png`, `add-card.png`, `after-delete.png`.

---

## Elevator Pitch
**“Track the skills you want to learn and the ones you can teach. Add, view, and manage your skills interactively with visual cards.”**  

---

## License
*(Optional: Add your preferred license here, e.g., MIT License)*
