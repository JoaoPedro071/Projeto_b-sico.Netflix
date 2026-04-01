const categories = [
    {
        title: "Épicos",
        items: [
            {
                img: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg", top10: true, badge: "Clássico", badgeColor: "red", progress: 0,
                youtube: "https://www.youtube.com/watch?v=bLvqoHBptjg",
                match: 98, duration: "2h 22m", age: "12", genres: ["Drama", "Romance"]
            },
            {
                img: "https://cadernopop.com.br/wp-content/uploads/2022/03/Homem-Aranha-Sem-Volta-Para-Casa.jpg", progress: 0,
                youtube: "https://youtu.be/bHzGeci_8wc?si=cBz8hcvr8Ygl0umw",
                match: 95, duration: "2h 28m", age: "12", genres: ["Ação", "Aventura", "Ficção Científica"]
            },
            {
                img: "https://i.ytimg.com/vi/OQgySPQ5M3Y/maxresdefault.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=zckJCxYxn1g",
                match: 92, duration: "2h 41m", age: "14", genres: ["Ação", "Drama", "Thriller"]
            },
            {
                img: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/14413-destaque.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=a06zxOyQrAs",
                match: 90, duration: "1h 48m", age: "16", genres: ["Animação", "Aventura", "Família"]
            },
        ]
    },
    {
        title: "Séries",
        items: [
            { img: "https://p2.trrsf.com/image/fget/cf/500/0/images.terra.com/2025/02/07/1580743062-stranger-things-4-temporada-netflix-foto-divulgacaowidelg.jpg", top10: true, badge: "Nova temporada", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=b9EkMc79ZSU", match: 96, duration: "5 temporadas", age: "16", genres: ["Ficção Científica", "Terror", "Drama"] },
            { img: "https://guarientoportal.com/wp-content/uploads/2020/10/The-Crown-Capa.jpeg", top10: true, badge: "Final da temporada", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=JWtnJjn6ng0", match: 94, duration: "6 temporadas", age: "16", genres: ["Drama", "História", "Biografia"] },
            { img: "https://cqcs.com.br/wp-content/uploads/2026/01/G9kcXvJbcAA0C1v.jpg", badge: "Novo episódio", badgeColor: "red", youtube: "https://youtu.be/pyi8QAlHR8k?si=g5XMyJ6PCL1iBYXq", match: 91, duration: "2 temporadas", age: "16", genres: ["Drama", "Romance", "Período"] },
            { img: "https://deborahstrougo.com/wp-content/uploads/2021/12/livros-da-serie-the-witcher-ordem-de-leitura.jpg", badge: "Em alta", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=ndl1W4ltcmg", match: 93, duration: "3 temporadas", age: "18", genres: ["Ação", "Aventura", "Fantasia"] },
        ]
    },
    {
        title: "Para maratonar",
        items: [
            { img: "https://i.pinimg.com/736x/21/dc/88/21dc8830f83dff3d76b873d76b5e451a.jpg", top10: true, badge: "Fenômeno global", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=oqxAJKy0ii4", match: 97, duration: "1 temporada", age: "18", genres: ["Thriller", "Drama", "Mistério"] },
            { img: "https://m.media-amazon.com/images/S/pv-target-images/a666da476491e60a98d2ef3c9d3a4d5492341fa9f5ed3ce487dc9fa05247a3e6.jpg", top10: true, badge: "Clássico", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=_InqQJRqGW4", match: 95, duration: "5 temporadas", age: "16", genres: ["Crime", "Thriller", "Drama"] },
            { img: "https://imagem.natelinha.uol.com.br/original/dark-serie-netflix_ce06791629efcb0405116762448d1f4ae3cfa218.jpeg", badge: "Mistério", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=rrwycJ08PSA", match: 92, duration: "3 temporadas", age: "16", genres: ["Ficção Científica", "Thriller", "Mistério"] },
            { img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguzCM1FvYawmPgtuUYmfLHIt-en8SC4NyOAAIWWW9veOJ1E9ts2BTqCwYGZeUa8lNaZrbYctW9xB6T0wJNOgjtWPJIyKkVHMvy5Oxt1cg5kaYDz77vyHWZit4-Mm8eM1QaOkTx2ISEDM092zLhOWSNr7Cpza619gSQOd_D6wvUyEJ-XZj6GZ3hjdzQwTjt/s888/5-motivos-para-assistir-O-Gambito-da-Rainha.jpg", badge: "Indicado ao Oscar", badgeColor: "red", youtube: "https://youtu.be/KoD1DaIlUng?si=XxNnjhq_akWyf2os", match: 96, duration: "1 temporada", age: "16", genres: ["Drama", "Esporte"] },
        ]
    }
];

function getYouTubeId(url) {
    if (!url) return "7RUA0IOfar8";
    if (url.includes('v=')) {
        return url.split('v=')[1].split('&')[0];
    }
    return url.split('/').pop();
}

// YouTube API
let players = {};

function onYouTubeIframeAPIReady() {
    // Players will be created on demand
}

function createCard(item) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    if (item.progress) {
        card.classList.add('has-progress');
    }

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = `Movie cover`;

    const videoId = getYouTubeId(item.youtube);
    
    const playerDiv = document.createElement('div');
    playerDiv.className = 'youtube-player';
    playerDiv.id = `player-${videoId}-${Math.random().toString(36).substr(2, 9)}`; // unique id
    card.dataset.videoId = videoId;

    card.appendChild(playerDiv);
    card.appendChild(img);

    // Adicionar evento de hover para mostrar o trailer
    card.addEventListener('mouseenter', function() {
        // Parar todos os outros vídeos
        Object.values(players).forEach(player => {
            if (player && player.pauseVideo) {
                player.pauseVideo();
            }
        });
        document.querySelectorAll('.movie-card .youtube-player.playing').forEach(div => {
            div.classList.remove('playing');
        });
        document.querySelectorAll('.movie-card img.playing-video').forEach(img => {
            img.classList.remove('playing-video');
        });
        
        playerDiv.classList.add('playing');
        img.classList.add('playing-video');
        
        // Create or play the player
        if (!players[playerDiv.id]) {
            players[playerDiv.id] = new YT.Player(playerDiv.id, {
                videoId: videoId,
                playerVars: {
                    autoplay: 1,
                    mute: 1,
                    controls: 1,
                    modestbranding: 1,
                    playsinline: 1,
                    rel: 0
                },
                events: {
                    onReady: function(event) {
                        event.target.playVideo();
                    }
                }
            });
        } else {
            players[playerDiv.id].playVideo();
        }
    });

    // Adicionar evento de mouse sair para voltar a mostrar a imagem
    card.addEventListener('mouseleave', function() {
        playerDiv.classList.remove('playing');
        img.classList.remove('playing-video');
        // Pause the video
        if (players[playerDiv.id]) {
            players[playerDiv.id].pauseVideo();
        }
    });

    const ageBadge = { text: item.age, class: item.age === '18' ? 'red-accent' : '' };

    const details = document.createElement('div');
    details.className = 'card-details';
    details.innerHTML = `
        <div class="details-buttons">
            <div class="left-buttons">
                <button class="btn-icon btn-play-icon"><i class="fas fa-play" style="margin-left:2px;"></i></button>
                ${item.progress ? '<button class="btn-icon"><i class="fas fa-check"></i></button>' : '<button class="btn-icon"><i class="fas fa-plus"></i></button>'}
                <button class="btn-icon"><i class="fas fa-thumbs-up"></i></button>
            </div>
            <div class="right-buttons">
                <button class="btn-icon"><i class="fas fa-chevron-down"></i></button>
            </div>
        </div>
        <div class="details-info">
            <span class="match-score">${item.match}% relevante</span>
            <span class="age-badge ${ageBadge.class}">${ageBadge.text}</span>
            <span class="duration">${item.duration}</span>
            <span class="resolution">HD</span>
        </div>
        <div class="details-tags">
            ${item.genres.map(genre => `<span>${genre}</span>`).join('')}
        </div>
    `;
    card.appendChild(details);

    if (item.progress) {
        const pbContainer = document.createElement('div');
        pbContainer.className = 'progress-bar-container';
        const pbValue = document.createElement('div');
        pbValue.className = 'progress-value';
        pbValue.style.width = `${item.progress}%`;
        pbContainer.appendChild(pbValue);
        card.appendChild(pbContainer);
    }

    return card;
}

function createCarousel(category) {
    const section = document.createElement('div');
    section.className = 'slider-section';

    // Header for Title and Indicators
    const header = document.createElement('div');
    header.className = 'slider-header';

    const title = document.createElement('h2');
    title.className = 'slider-title';
    title.innerText = category.title;

    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';

    header.appendChild(title);
    header.appendChild(indicators);
    section.appendChild(header);

    const row = document.createElement('div');
    row.className = 'movie-row';

    category.items.forEach(item => {
        const card = createCard(item);
        row.appendChild(card);
    });

    section.appendChild(row);
    return section;
}

document.addEventListener('DOMContentLoaded', () => {
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});