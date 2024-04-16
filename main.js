document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('input[type="text"]');
    const addButton = document.querySelector('.btn-add');
    const pokemonList = document.querySelector('.pokemon-list');
    const emptyMessage = document.querySelector('.empty');

    addButton.addEventListener('click', function(event) {
        event.preventDefault();

        const pokemonName = input.value.trim();
        if (pokemonName !== '') {
            addPokemon(pokemonName);
            input.value = '';
            emptyMessage.style.display = 'none';
        } else {
            alert('Please enter a Pokémon name.');
        }
    });

    function addPokemon(pokemonName) {
        const listItem = document.createElement('div');
        listItem.classList.add('pokemon-card');

        const pokemonImage = document.createElement('img');
        pokemonImage.src = `https://img.pokemondb.net/artwork/large/${pokemonName.toLowerCase()}.jpg`;
        pokemonImage.alt = pokemonName;
        pokemonImage.classList.add('pokemon-img');

        const pokemonInfo = document.createElement('p');
        pokemonInfo.textContent = pokemonName;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn-delete');
        deleteButton.addEventListener('click', function() {
            listItem.remove();
            checkListEmpty();
        });

        listItem.appendChild(pokemonImage);
        listItem.appendChild(pokemonInfo);
        listItem.appendChild(deleteButton);
        pokemonList.appendChild(listItem);
    }

    function checkListEmpty() {
        if (pokemonList.children.length === 0) {
            emptyMessage.style.display = 'block';
        }
    }
});

