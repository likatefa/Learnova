// Dark mode toggle
const toggleBtn = document.getElementById('darkToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Search filter
const searchInput = document.getElementById('searchInput');
const topicList = document.getElementById('topicList');
const topics = topicList.getElementsByTagName('li');

searchInput.addEventListener('keyup', function () {
  const filter = searchInput.value.toLowerCase();
  for (let i = 0; i < topics.length; i++) {
    const txt = topics[i].textContent.toLowerCase();
    topics[i].classList.toggle('hidden', !txt.includes(filter));
  }
});
