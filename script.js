function choose(option) {
    const story = document.getElementById('story');
    const choices = document.getElementById('choices');
  
    if (option === 'left') {
      story.textContent = 'Você seguiu pelo caminho à esquerda e encontrou um rio. Deseja construir uma jangada ou nadar?';
      choices.innerHTML = `
        <button onclick="choose('raft')">Construir uma jangada</button>
        <button onclick="choose('swim')">Nadar</button>
      `;
    } else if (option === 'right') {
      story.textContent = 'Você seguiu pelo caminho à direita e encontrou uma caverna. Você deseja entrar ou voltar?';
      choices.innerHTML = `
        <button onclick="choose('cave')">Entrar</button>
        <button onclick="choose('back')">Voltar</button>
      `;
  