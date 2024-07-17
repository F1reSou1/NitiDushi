const blocksData = [
    { id: 1, content: "Block 1" },
    { id: 2, content: "Block 2" },
    { id: 3, content: "Block 3" },
    { id: 4, content: "Block 4" },
    { id: 5, content: "Block 5" },
    { id: 6, content: "Block 6" },
  ];
  
  let currentIndex = 0;
  
  function renderBlocks() {
    const slider = document.getElementById('slider');
    slider.innerHTML = '';
  
    for (let i = currentIndex; i < currentIndex + 3; i++) {
      const block = document.createElement('div');
      block.className = 'block';
      block.innerText = blocksData[i].content;
      slider.appendChild(block);
    }
  
    renderDots();
  }
  
  function renderDots() {
    const dotsContainer = document.getElementById('dots');
    dotsContainer.innerHTML = '';
  
    for (let i = 0; i < blocksData.length; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot';
      if (i >= currentIndex && i < currentIndex + 3) {
        dot.classList.add('active');
      }
      dotsContainer.appendChild(dot);
    }
  
    document.getElementById('prev').disabled = currentIndex === 0;
    document.getElementById('next').disabled = currentIndex === blocksData.length - 3;
  }
  
  document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderBlocks();
    }
  });
  
  document.getElementById('next').addEventListener('click', () => {
    if (currentIndex < blocksData.length - 3) {
      currentIndex++;
      renderBlocks();
    }
  });
  
  // Initial render
  renderBlocks();
  