// ========== LISTA DE LIVROS ==========
const books = [
    {
      name: "O Diário Perdido de Gravity Falls",
      categories: ["Ficção", "Desenho"],
      site: "Amazon",
      cost: "R$57,25",
      rating: 4.9,
      reviews: 7430,
      img: "gravity.jpg",
      section: "avaliados"
    },
    {
      name: "Angela Davis: Mulher, Raça e Classe",
      categories: ["História"],
      site: "Amazon",
      cost: "R$50,25",
      rating: 4.9,
      reviews: 3942,
      img: "angela.jpg",
      section: "avaliados"
    },
    {
      name: "Under your Skin",
      categories: ["Dark Romance", "Stalker Romance"],
      site: "Amazon",
      cost: "R$7,99",
      rating: 4.5,
      reviews: 7148,
      img: "under.jpg",
      section: "diversos"
    },
    {
      name: "Chainsaw Man - Vol.1",
      categories: ["Shonen"],
      site: "Amazon",
      cost: "R$3,90",
      rating: 4.8,
      reviews: 10547,
      img: "chainsaw.jpg",
      section: "avaliados"
    },
    {
      name: "Ainda não morri",
      categories: ["Suspense"],
      site: "Amazon",
      cost: "R$35,23",
      rating: 4.5,
      reviews: 83,
      img: "ainda.jpg",
      section: "diversos"
    },
    {
      name: "As Crônicas de Nárnia - O Leão, a Feiticeira e o Guarda-roupa",
      categories: ["Fantasia"],
      site: "Amazon",
      cost: "R$34,10",
      rating: 4.9,
      reviews: 3794,
      img: "cronicas.jpg",
      section: "avaliados"
    },
    {
      name: "O Livro do Bill",
      categories: ["Fantasia"],
      site: "Amazon",
      cost: "R$121,20",
      rating: 4.7,
      reviews: 1785,
      img: "bill.jpg",
      section: "diversos"
    },
    {
      name: "Harry Potter e a Pedra Filosofal",
      categories: ["Fantasia"],
      site: "Amazon",
      cost: "R$166,40",
      rating: 4.9,
      reviews: 44088,
      img: "harry.jpg",
      section: "avaliados"
    },
    {
      name: "Keeping 13: Se apaixonar é a parte fácil",
      categories: ["Romance"],
      site: "Amazon",
      cost: "R$19,90",
      rating: 4.7,
      reviews: 1662,
      img: "keeping.jpg",
      section: "diversos"
    },
    {
      name: "A Serpente e as Asas feitas de Noite",
      categories: ["Fantasia"],
      site: "Amazon",
      cost: "R$43,61",
      rating: 4.7,
      reviews: 2174,
      img: "serpente.jpg",
      section: "diversos"
    },
    {
      name: "Bruxa rebelde (Mariposa Escarlate - Livro 2)",
      categories: ["Fantasia"],
      site: "Amazon",
      cost: "R$39,76",
      rating: 4.7,
      reviews: 839,
      img: "escarlate.jpg",
      section: "diversos"
    },
    {
      name: "Caçador sem coração (Mariposa Escarlate - Livro 1)",
      categories: ["Fantasia"],
      site: "Amazon",
      cost: "R$38,39",
      rating: 4.6,
      reviews: 2305,
      img: "mariposa.jpg",
      section: "diversos"
    }
  ];
  
  // ========== FUNÇÕES DE RENDERIZAÇÃO =========
  // Renderiza uma lista de livros em um container
  function renderBooks(list, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    
    list.forEach(book => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <div class="card-img">
          <img src="${book.img}" alt="${book.name}" loading="lazy">
          <div class="rating">⭐ ${book.rating.toFixed(1)}/5</div>
        </div>
        <div class="card-content">
          <h3>${book.name}</h3>
          <div class="card-content-tag">
            ${book.categories.map(c => `<span class="box">${c}</span>`).join('')}
          </div>
          <div class="card-content">
            <p>${book.site}</p>
            <p>${book.cost}</p>
            <p>${book.reviews ? book.reviews.toLocaleString() + " avaliações" : "Sem avaliações"}</p>
          </div>
        </div>
        `;
      
      container.appendChild(card);
    });
  }
  
  // Renderiza os livros com base na seção
  function renderBooksBySection(sectionName, containerId, sortByRating = false) {
    let filtered = books.filter(b => b.section === sectionName);
    if (sortByRating) filtered = filtered.sort((a, b) => b.rating - a.rating);
    renderBooks(filtered, containerId);
  }
  
  // ========== BUSCA ==========
  document.getElementById("search-input").addEventListener("input", e => {
    const term = e.target.value.toLowerCase();
  
    const diversos = books.filter(b =>
        b.section === "diversos" &&
        b.name.toLowerCase().includes(term)
    );
  
    const avaliados = books.filter(b =>
        b.section === "avaliados" &&
        b.name.toLowerCase().includes(term)
    );
  
    renderBooks(diversos, "diversosBooks");
    renderBooks(avaliados, "topRated");
  });
  
  
  // ========== RENDERIZAÇÃO INICIAL ==========
  renderBooksBySection("diversos", "diversosBooks");     // seção "Livros Diversos"
  renderBooksBySection("avaliados", "topRated", true);   // seção "Mais Bem Avaliados"
  
   // ========== PERFIL ==========
  document.getElementById("userButton").addEventListener("click", () => {
    alert("Área de usuário em desenvolvimento 👤");
  });
  