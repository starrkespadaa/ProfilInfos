var pokemon = document.createElement("img");
pokemon.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9ca893e3-6a4e-41ea-969e-60b2e6bc4315/dg3gs45-98b7afba-d2f3-42a9-8608-13879d8043cc.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljYTg5M2UzLTZhNGUtNDFlYS05NjllLTYwYjJlNmJjNDMxNVwvZGczZ3M0NS05OGI3YWZiYS1kMmYzLTQyYTktODYwOC0xMzg3OWQ4MDQzY2MuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.B1CfK0aCxhgFfKQWrC39uQ8zGStXkV4wDgzJuKm0vbk"; // Modifier l'URL du GIF
pokemon.id = "pokemon";
document.body.appendChild(pokemon);

var position = 0;
var direction = 1;
var interval = setInterval(function() {
    position += direction;
    pokemon.style.bottom = position + 'px';
    if (position >= 20 || position <= 0) {
        direction *= -1;
    }
}, 50);
