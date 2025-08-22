class SpeakersGrid {
  constructor() {
    this.gridContainer = document.querySelector("#speakers .grid");
    this.speakers = [
      {
        image: "./images/speakers/Malaysia Ambasador.jpg",
        name: "H.E RUZAIMI Muhamad",
        title: "Malaysian Ambassador To Kenya",
      },
      {
        image: "./images/speakers/DR. Julius.jpg",
        name: "Dr. Julius Kipng'etich",
        title: "C.E.O Jubilee Holdings Limited (Kenya)",
      },
      {
        image: "./images/speakers/PS Abubakar Hassan Abubakar.jpg",
        name: "Mr. Abubakar Hassan",
        title:
          "Principal Secretary (PS), State Department for Investment Promotion, Ministry of Investment, Trade and Industry, Kenya",
      },
      {
        image: "./images/speakers/Dr. Mutua.jpg",
        name: "Dr. Ezekiel Mutua",
        title: "CEO, Music Copyright Society of Kenya",
      },
      {
        image: "./images/speakers/NENETTE SANTOS CEO ABBB.jpg",
        name: "Nennete Santos",
        title: "President Angola Business Beyond Borders (Angola)",
      },
      {
        image: "./images/speakers/Peter Jens.jpg",
        name: "Peter Jens",
        title: "Co-founder of AND Biologicals BV (Netherlands)",
      },
      {
        image: "./images/speakers/Ezy Yap.jpg",
        name: "Mr. Ezy Yap",
        title: "Founder and Managing Director, Vigor (Malaysia)",
      },
      {
        image: "./images/speakers/Camillo Sargiacomo.jpg",
        name: "Dr. Camillo Sargiacomo",
        title: "Geoponika Consulting SRL (Italy)",
      },
      {
        image: "./images/speakers/Dr. Davji Atellah.jpeg",
        name: "Dr. Davji Atellah",
        title:
          "National secretary, KMPDU",
      },
      {
        image: "./images/speakers/allan portrait.webp",
        name: "Allan Ong'ang'a.",
        title: "Director, African Leadership University, Rwanda (ALU)",
      },
      {
        image: "./images/speakers/Ronald Bwosi.JPG",
        name: "Ronald Bwosi",
        title:
          "Group Managing Partner Ronalds LLP",
      },
      {
        image: "./images/speakers/Ndeka Bosco.jpg",
        name: "Ndeka Bosco",
        title:
          "CEO  Rosewil Bome Technologies",
      },
      {
        image: "./images/speakers/Perminus.jpg",
        name: "Perminus Kariuki",
        title:
          "CEO  NYOTA NJEMA REAL ESTATE LIMITED",
      },
      {
        image: "./images/speakers/Matilda Kobia.jpeg",
        name: "Matilda Kobia",
        title: "Global Financial Markets and Digital Fx Specialist (Moderator)",
      },
      {
        image: "./images/speakers/Florah Muthaura.jpg",
        name: "Florah Muthaura",
        title:
          "Head of Risk, Compliance & Sustainability Kenya Mortgage Refinance Company (Moderator)",
      },
      {
        image: "./images/speakers/Brayon Mutali.jpg",
        name: "Byron Mutali",
        title:
          "Principal Associate/Advocate G&A Advocate LLP (Moderator)",
      },
      {
        image: "./images/speakers/Mercy Imbinda-min.jpg",
        name: "Mercy Imbinda",
        title:
          "Journalist / Project Manager (Moderator)",
      },
      {
        image: "./images/speakers/Wawer.jpg",
        name: "John Waweru",
        title:
          "Corporate Events MC (MC)",
      },
      {
        image: "",
        name: "Dr. Obadiah Naikuni",
        title:
          "Quality Control Director Pharmacy and Poisons Board	Kenya",
      },
      {
        image: "./images/speakers/Japheth.jpg",
        name: "Athanasio Japheth",
        title:
          "Assistant Director Clinical Services	Kenya",
      },
    ];
    this.init();
  }

  createSpeakerCard(speaker, index) {
    const card = document.createElement("div");
    card.className = `
transform transition-all duration-500 ease-out
opacity-0 translate-y-12
hover:scale-105 hover:shadow-2xl
bg-white rounded-xl shadow-lg overflow-hidden
group cursor-pointer
`;
    card.style.transitionDelay = `${index * 150}ms`;

    card.innerHTML = `
<div class="relative h-80 overflow-hidden">
    <img 
        src="${speaker.image}" 
        alt="${speaker.name}"
        class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
    >
    <div class="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
</div>
<div class="p-6">
    <h3 class="text-xl font-bold text-gray-900 mb-2">${speaker.name}</h3>
    <p class="text-gray-600">${speaker.title}</p>
</div>
`;

    return card;
  }

  init() {
    this.speakers.forEach((speaker, index) => {
      const card = this.createSpeakerCard(speaker, index);
      this.gridContainer.appendChild(card);
    });

    this.setupAnimations();
  }

  setupAnimations() {
    const cards = document.querySelectorAll("#speakers .grid > div");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-12");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    cards.forEach((card) => observer.observe(card));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new SpeakersGrid();
});
