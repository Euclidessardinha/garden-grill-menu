import { useEffect, useMemo, useState } from "react";
import { addToCart, getCart } from "../utils/cart";
import "./Menu.css";

const categories = [
  {
    id: "menu-semanal",
    name: "Menu Semanal",
    icon: "🍽️",
  },
  {
    id: "entradas",
    name: "Entradas",
    icon: "🥗",
  },
  {
    id: "pratos-principais",
    name: "Pratos Principais",
    icon: "🍴",
  },
  {
    id: "carnes",
    name: "Carnes",
    icon: "🥩",
  },
  {
    id: "peixes-mariscos",
    name: "Peixes e Mariscos",
    icon: "🐟",
  },
  {
    id: "pizza",
    name: "Pizza",
    icon: "🍕",
  },
  {
    id: "sushi",
    name: "Sushi",
    icon: "🍣",
  },
  {
    id: "bebidas",
    name: "Bebidas",
    icon: "🥤",
  },
  {
    id: "sobremesas",
    name: "Sobremesas",
    icon: "🍰",
  },
  {
    id: "happy-hour",
    name: "Happy Hour",
    icon: "🍺",
  },
];

/*
  ============================================================
  GARDEN & GRILL — MENU
  ============================================================

  PRODUTOS REAIS:
  - Menu semanal 09SET - 13SET
  - Dados baseados no menu fornecido pelo restaurante.

  PRODUTOS ILUSTRATIVOS:
  - Categorias que ainda não possuem menu real fornecido.
  - Servem apenas para demonstrar o design do menu.
  - Não representam necessariamente produtos vendidos
    pelo Garden & Grill.
  - Preços permanecem "A confirmar".
  - Imagens são ilustrativas e podem ser substituídas
    posteriormente por fotografias reais.
  ============================================================
*/

const menuItems = [
  // ==========================================================
  // MENU SEMANAL — SEGUNDA-FEIRA
  // ==========================================================

  {
    id: "isca-figado-vaca",
    name: "Isca de Fígado de Vaca",
    description: "C/ Batata Cozida e Salada",
    price: 650,
    category: "menu-semanal",
    day: "Segunda-feira",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Liver_dish%2C_Hattenheim.jpg",
    available: true,
    illustrative: false,
  },

  {
    id: "posta-serra-grelhada",
    name: "Posta Serra Grelhada",
    description:
      "C/ Legumes e Arroz — Sugestão do Chef.",
    price: 650,
    category: "menu-semanal",
    day: "Segunda-feira",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/GrilledPicanha.jpg",
    available: true,
    illustrative: false,
  },

  {
    id: "arroz-garoupa",
    name: "Arroz de Garoupa",
    description: "",
    price: 950,
    category: "menu-semanal",
    day: "Segunda-feira",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Steamed_rice_with_grouper.jpg",
    available: true,
    illustrative: false,
  },

  // ==========================================================
  // MENU SEMANAL — TERÇA-FEIRA
  // ==========================================================

  {
    id: "caril-camarao",
    name: "Caril de Camarão",
    description: "C/ Arroz Branco",
    price: 650,
    category: "menu-semanal",
    day: "Terça-feira",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Prawn_curry_with_rice.JPG",
    available: true,
    illustrative: false,
  },

  {
    id: "costeletas-porco-grelhado",
    name: "Costeletas de Porco Grelhado",
    description:
      "C/ Batata e Salada — Sugestão do Chef.",
    price: 650,
    category: "menu-semanal",
    day: "Terça-feira",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kotelett_gegrillt_Kartoffelsalat_Paul_Buchau.JPG",
    available: true,
    illustrative: false,
  },

  {
    id: "alcatra",
    name: "Alcatra",
    description:
      "C/ Batata ou Arroz de Vegetais",
    price: 1150,
    category: "menu-semanal",
    day: "Terça-feira",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/GrilledPicanha.jpg",
    available: true,
    illustrative: false,
  },

  // ==========================================================
  // MENU SEMANAL — QUARTA-FEIRA
  // ==========================================================

  {
    id: "pernil-assado",
    name: "Pernil Assado no Forno",
    description:
      "C/ Puré de Batata e Salada",
    price: 650,
    category: "menu-semanal",
    day: "Quarta-feira",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Roasted_pork_leg_served_with_golden_potatoes_and_fresh_vegetables.jpg",
    available: true,
    illustrative: false,
  },

  {
    id: "corvina-grelhada",
    name: "Corvina Grelhada",
    description:
      "C/ Arroz de Vegetais ou Vegetais — Sugestão do Chef.",
    price: 650,
    category: "menu-semanal",
    day: "Quarta-feira",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Corvina%2C_Sardina.jpg",
    available: true,
    illustrative: false,
  },

  {
    id: "camarao-grelhado",
    name: "Camarão Grelhado",
    description: "C/ Batata e Salada",
    price: 1200,
    category: "menu-semanal",
    day: "Quarta-feira",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Grilled_Prawns.jpg",
    available: true,
    illustrative: false,
  },

  // ==========================================================
  // MENU SEMANAL — QUINTA-FEIRA
  // ==========================================================

  {
    id: "cozido-portuguesa",
    name: "Cozido à Portuguesa",
    description: "",
    price: 650,
    category: "menu-semanal",
    day: "Quinta-feira",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cozido_%C3%A0_portuguesa.jpg",
    available: true,
    illustrative: false,
  },

  {
    id: "pescadinha",
    name: "Pescadinha",
    description:
      "C/ Arroz Malandro e Salada — Sugestão do Chef.",
    price: 650,
    category: "menu-semanal",
    day: "Quinta-feira",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Lunch_with_European_hake_at_Eatery_Lund.jpg",
    available: true,
    illustrative: false,
  },

  {
    id: "picanha-brasileira",
    name: "Picanha Brasileira",
    description:
      "C/ Arroz, Feijão, Couve e Ananás",
    price: 1200,
    category: "menu-semanal",
    day: "Quinta-feira",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/GrilledPicanha.jpg",
    available: true,
    illustrative: false,
  },

  // ==========================================================
  // MENU SEMANAL — SEXTA-FEIRA
  // ==========================================================

  {
    id: "feijoada-transmontana",
    name: "Feijoada à Transmontana",
    description: "",
    price: 650,
    category: "menu-semanal",
    day: "Sexta-feira",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Feijoada_%C3%A0_transmontada.jpg",
    available: true,
    illustrative: false,
  },

  {
    id: "garoupa",
    name: "Garoupa",
    description:
      "C/ Arroz e Salada — Sugestão do Chef.",
    price: 650,
    category: "menu-semanal",
    day: "Sexta-feira",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Steamed_rice_with_grouper.jpg",
    available: true,
    illustrative: false,
  },

  {
    id: "lulas-grelhadas",
    name: "Lulas Grelhadas",
    description: "C/ Legumes",
    price: 850,
    category: "menu-semanal",
    day: "Sexta-feira",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Grilled_squid.jpg",
    available: true,
    illustrative: false,
  },

  // ==========================================================
  // ENTRADAS — ILUSTRATIVAS
  // ==========================================================

  {
    id: "pao-alho",
    name: "Pão de Alho",
    description:
      "Pão crocante preparado com manteiga de alho e ervas.",
    price: null,
    priceLabel: "A confirmar",
    category: "entradas",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Garlic_bread.jpg",
    available: true,
    illustrative: true,
  },

  {
    id: "calamari-frito",
    name: "Calamari Frito",
    description:
      "Anéis de lula crocantes, servidos como entrada.",
    price: null,
    priceLabel: "A confirmar",
    category: "entradas",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fried_calamari.jpg",
    available: true,
    illustrative: true,
  },

  {
    id: "batata-frita",
    name: "Batata Frita",
    description:
      "Batatas douradas e crocantes, ideais para partilhar.",
    price: null,
    priceLabel: "A confirmar",
    category: "entradas",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/French_fries.JPG",
    available: true,
    illustrative: true,
  },

  // ==========================================================
  // PRATOS PRINCIPAIS — ILUSTRATIVOS
  // ==========================================================

  {
    id: "salmao-grelhado",
    name: "Salmão Grelhado",
    description:
      "Salmão grelhado acompanhado de vegetais.",
    price: null,
    priceLabel: "A confirmar",
    category: "pratos-principais",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Salmon_with_vegetables.jpg",
    available: true,
    illustrative: true,
  },

  {
    id: "bife-grelhado",
    name: "Bife Grelhado",
    description:
      "Bife grelhado servido com acompanhamento.",
    price: null,
    priceLabel: "A confirmar",
    category: "pratos-principais",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Grilled_steak.jpg",
    available: true,
    illustrative: true,
  },

  {
    id: "salada-caesar",
    name: "Salada Caesar",
    description:
      "Salada fresca com alface, molho Caesar e acompanhamentos.",
    price: null,
    priceLabel: "A confirmar",
    category: "pratos-principais",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Caesar_salad.jpg",
    available: true,
    illustrative: true,
  },

  // ==========================================================
  // CARNES — ILUSTRATIVAS
  // ==========================================================

  {
    id: "steak-grelhado",
    name: "Steak Grelhado",
    description:
      "Corte de carne grelhado, servido com acompanhamento.",
    price: null,
    priceLabel: "A confirmar",
    category: "carnes",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Grilled_steak.jpg",
    available: true,
    illustrative: true,
  },

  {
    id: "carne-grelhada-legumes",
    name: "Carne Grelhada com Legumes",
    description:
      "Carne grelhada acompanhada por legumes.",
    price: null,
    priceLabel: "A confirmar",
    category: "carnes",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Steak_with_vegetables.jpg",
    available: true,
    illustrative: true,
  },

  // ==========================================================
  // PEIXES E MARISCOS — ILUSTRATIVOS
  // ==========================================================

  {
    id: "salmao-legumes",
    name: "Salmão com Legumes",
    description:
      "Salmão servido com seleção de legumes.",
    price: null,
    priceLabel: "A confirmar",
    category: "peixes-mariscos",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Salmon_with_vegetables.jpg",
    available: true,
    illustrative: true,
  },

  {
    id: "lulas-salteadas",
    name: "Lulas Salteadas",
    description:
      "Lulas preparadas e salteadas com ervas e temperos.",
    price: null,
    priceLabel: "A confirmar",
    category: "peixes-mariscos",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sauteed_calamari.jpg",
    available: true,
    illustrative: true,
  },

  {
    id: "marisco-grelhado",
    name: "Marisco Grelhado",
    description:
      "Seleção de mariscos preparada na grelha.",
    price: null,
    priceLabel: "A confirmar",
    category: "peixes-mariscos",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Seafood_platter.jpg",
    available: true,
    illustrative: true,
  },

  // ==========================================================
  // PIZZA — ILUSTRATIVAS
  // ==========================================================

  {
    id: "pizza-margherita",
    name: "Pizza Margherita",
    description:
      "Pizza com molho de tomate, queijo e manjericão.",
    price: null,
    priceLabel: "A confirmar",
    category: "pizza",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Margherita_pizza.jpg",
    available: true,
    illustrative: true,
  },

  {
    id: "pizza-frutos-mar",
    name: "Pizza de Frutos do Mar",
    description:
      "Pizza com frutos do mar e queijo.",
    price: null,
    priceLabel: "A confirmar",
    category: "pizza",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Seafood_pizza_close-up.jpg",
    available: true,
    illustrative: true,
  },

  {
    id: "pizza-salmao",
    name: "Pizza de Salmão",
    description:
      "Pizza com salmão e ingredientes frescos.",
    price: null,
    priceLabel: "A confirmar",
    category: "pizza",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Naples_Salmon_Pizza.jpg",
    available: true,
    illustrative: true,
  },

  // ==========================================================
  // SUSHI — ILUSTRATIVOS
  // ==========================================================

  {
    id: "sushi-salmao",
    name: "Sushi de Salmão",
    description:
      "Seleção de sushi com salmão.",
    price: null,
    priceLabel: "A confirmar",
    category: "sushi",
    day: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Salmon_Sushi_and_Sashimi_Platter_-_W_Sushi.jpg",
    available: true,
    illustrative: true,
  },

  {
    id: "sushi-platter",
    name: "Sushi Platter",
    description:
      "Seleção variada de sushi para partilhar.",
    price: null,
    priceLabel: "A confirmar",
    category: "sushi",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sushi_platter.jpg",
    available: true,
    illustrative: true,
  },

  {
    id: "sushi-misto",
    name: "Sushi Misto",
    description:
      "Seleção de diferentes peças de sushi.",
    price: null,
    priceLabel: "A confirmar",
    category: "sushi",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sushi_platter_with_omelette,_cooked_salmon,_kani_and_cucumber_sushi.jpg",
    available: true,
    illustrative: true,
  },

  // ==========================================================
  // BEBIDAS — ILUSTRATIVAS
  // ==========================================================

  {
    id: "sumos-naturais",
    name: "Sumos Naturais",
    description:
      "Sumos naturais preparados com frutas.",
    price: null,
    priceLabel: "A confirmar",
    category: "bebidas",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fruit_juice.jpg",
    available: true,
    illustrative: true,
  },

  {
    id: "refrigerante",
    name: "Refrigerante",
    description:
      "Bebida refrescante servida gelada.",
    price: null,
    priceLabel: "A confirmar",
    category: "bebidas",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cola_Beverage.jpg",
    available: true,
    illustrative: true,
  },

  {
    id: "agua",
    name: "Água Mineral",
    description:
      "Água mineral servida fresca.",
    price: null,
    priceLabel: "A confirmar",
    category: "bebidas",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bottled_water.jpg",
    available: true,
    illustrative: true,
  },

  // ==========================================================
  // SOBREMESAS — ILUSTRATIVAS
  // ==========================================================

  {
    id: "tiramisu",
    name: "Tiramisu",
    description:
      "Sobremesa italiana cremosa com café e cacau.",
    price: null,
    priceLabel: "A confirmar",
    category: "sobremesas",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tiramisu_-_RalfR.jpg",
    available: true,
    illustrative: true,
  },

  {
    id: "bolo-chocolate",
    name: "Bolo de Chocolate",
    description:
      "Bolo de chocolate servido como sobremesa.",
    price: null,
    priceLabel: "A confirmar",
    category: "sobremesas",
    day: "",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chocolate_cake.jpg",
    available: true,
    illustrative: true,
  },

  // ==========================================================
  // HAPPY HOUR — REAL
  // ==========================================================

  {
    id: "2m-pressao",
    name: "2M a Pressão",
    description:
      "Das 12h às 20h • Segunda a Sexta-feira",
    price: null,
    priceLabel: "A confirmar",
    category: "happy-hour",
    day: "Happy Hour",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/2M_Mac-Mahon_Mozambique_%283105533616%29.jpg",
    available: true,
    illustrative: false,
  },
];

function Menu() {
  const [activeCategory, setActiveCategory] =
    useState("todos");

  const [search, setSearch] = useState("");

  const [cartCount, setCartCount] = useState(0);

  const [addedItemId, setAddedItemId] =
    useState(null);

  const [showCartNotice, setShowCartNotice] =
    useState(false);

  /*
    ==========================================================
    CARREGAR CARRINHO
    ==========================================================
  */

  useEffect(() => {
    const cart = getCart();

    const count = cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    setCartCount(count);
  }, []);

  /*
    ==========================================================
    WHATSAPP
    ==========================================================
  */

  const whatsappNumber = "258849228062";

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de fazer um pedido no Garden & Grill Pizza & Sushi."
  );

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  /*
    ==========================================================
    FORMATAÇÃO DE PREÇO
    ==========================================================
  */

  const formatPrice = (price, priceLabel) => {
    if (priceLabel) {
      return priceLabel;
    }

    if (
      price === null ||
      price === undefined
    ) {
      return "Preço a confirmar";
    }

    return `${Number(price).toLocaleString(
      "pt-MZ"
    )} MT`;
  };

  /*
    ==========================================================
    ADICIONAR AO CARRINHO
    ==========================================================
  */

  const handleAddToCart = (item) => {
    if (!item.available) return;

    const updatedCart = addToCart(item, 1);

    const count = updatedCart.reduce(
      (sum, cartItem) =>
        sum + cartItem.quantity,
      0
    );

    setCartCount(count);

    setAddedItemId(item.id);

    setShowCartNotice(true);

    setTimeout(() => {
      setAddedItemId(null);
    }, 1500);

    setTimeout(() => {
      setShowCartNotice(false);
    }, 4000);
  };

  /*
    ==========================================================
    NOME DA CATEGORIA
    ==========================================================
  */

  const getCategoryName = (categoryId) => {
    const category = categories.find(
      (item) => item.id === categoryId
    );

    return category?.name || "Menu";
  };

  /*
    ==========================================================
    FILTRAR PRODUTOS
    ==========================================================
  */

  const filteredItems = useMemo(() => {
    const normalizedSearch = search
      .trim()
      .toLowerCase();

    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "todos" ||
        item.category === activeCategory;

      const itemName =
        item.name?.toLowerCase() || "";

      const itemDescription =
        item.description?.toLowerCase() || "";

      const itemDay =
        item.day?.toLowerCase() || "";

      const matchesSearch =
        !normalizedSearch ||
        itemName.includes(normalizedSearch) ||
        itemDescription.includes(
          normalizedSearch
        ) ||
        itemDay.includes(normalizedSearch);

      return (
        matchesCategory &&
        matchesSearch
      );
    });
  }, [activeCategory, search]);

  /*
    ==========================================================
    AGRUPAR MENU SEMANAL POR DIA
    ==========================================================
  */

  const groupedByDay = useMemo(() => {
    if (
      activeCategory !== "menu-semanal"
    ) {
      return null;
    }

    const groups = {};

    filteredItems.forEach((item) => {
      if (!groups[item.day]) {
        groups[item.day] = [];
      }

      groups[item.day].push(item);
    });

    return groups;
  }, [
    activeCategory,
    filteredItems,
  ]);

  /*
    ==========================================================
    CARD DO PRODUTO
    ==========================================================
  */

  const renderDishCard = (item) => (
    <article
      className="menu-dish-card"
      key={item.id}
    >
      {/* IMAGEM */}

      <div className="menu-dish-image">

        {/* 
          A IMAGEM AGORA TAMBÉM É CLICÁVEL
          E LEVA PARA A PÁGINA DE DETALHES
        */}
        <a
          href={`/menu/${item.id}`}
          className="menu-dish-image-link"
          aria-label={`Ver detalhes de ${item.name}`}
        >
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.opacity =
                "0.25";
            }}
          />
        </a>

        <span className="menu-dish-category">
          {getCategoryName(
            item.category
          )}
        </span>

        <button
          type="button"
          className="menu-dish-add"
          disabled={!item.available}
          onClick={() =>
            handleAddToCart(item)
          }
          aria-label={`Adicionar ${item.name} ao carrinho`}
        >
          {addedItemId === item.id
            ? "✓"
            : "+"}
        </button>
      </div>

      {/* CONTEÚDO */}

      <div className="menu-dish-content">
        {item.illustrative ? (
          <span className="menu-dish-day">
            Imagem ilustrativa
          </span>
        ) : (
          item.day && (
            <span className="menu-dish-day">
              {item.day}
            </span>
          )
        )}

        <h3>{item.name}</h3>

        {item.description && (
          <p>{item.description}</p>
        )}

        <div className="menu-dish-footer">
          <strong>
            {formatPrice(
              item.price,
              item.priceLabel
            )}
          </strong>

          <a
            href={`/menu/${item.id}`}
          >
            Ver detalhe
          </a>
        </div>
      </div>
    </article>
  );

  /*
    ==========================================================
    RENDER
    ==========================================================
  */

  return (
    <div className="menu-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="menu-header">
        <a
          href="/"
          className="menu-brand"
        >
          <img
            src="/logo-garden-grill.png"
            alt="Garden & Grill Pizza & Sushi"
          />

          <div className="menu-brand-text">
            <strong>
              Garden & Grill
            </strong>

            <span>
              Pizza & Sushi
            </span>
          </div>
        </a>

        <div className="menu-header-actions">
          <a
            href="/cart"
            className="menu-cart-link"
            aria-label="Carrinho"
          >
            🛒

            {cartCount > 0 && (
              <span className="menu-cart-count">
                {cartCount}
              </span>
            )}
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="menu-whatsapp-button"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* =====================================================
          CART NOTICE
      ===================================================== */}

      {showCartNotice &&
        cartCount > 0 && (
          <div className="menu-cart-notice">
            <span>
              ✓ Item adicionado ao pedido
            </span>

            <a href="/cart">
              Ver pedido ({cartCount})
            </a>
          </div>
        )}

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="menu-intro">
        <span className="menu-intro-label">
          GARDEN & GRILL
        </span>

        <h1>
          O nosso <span>Menu</span>
        </h1>

        <p>
          Pizza & Sushi
        </p>

        <div className="menu-intro-badge">
          Menu Semanal • 09SET - 13SET
        </div>
      </section>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="menu-content">

        {/* ===================================================
            SEARCH
        =================================================== */}

        <section className="menu-search-section">
          <div className="menu-search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Pesquisar no menu..."
              value={search}
              onChange={(event) =>
                setSearch(
                  event.target.value
                )
              }
            />

            {search && (
              <button
                type="button"
                onClick={() =>
                  setSearch("")
                }
                aria-label="Limpar pesquisa"
              >
                ×
              </button>
            )}
          </div>
        </section>

        {/* ===================================================
            CATEGORIES
        =================================================== */}

        <section className="menu-categories">
          <div className="menu-section-heading">
            <span>
              EXPLORE
            </span>

            <h2>
              Escolha uma categoria
            </h2>

            <p>
              Encontre rapidamente o que procura.
            </p>
          </div>

          <div className="menu-category-list">

            {/* TODOS */}

            <button
              type="button"
              className={`menu-category-button ${
                activeCategory === "todos"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory("todos")
              }
            >
              <span className="menu-category-icon">
                🍽️
              </span>

              <span>
                Todos
              </span>
            </button>

            {/* CATEGORIAS */}

            {categories.map(
              (category) => (
                <button
                  key={category.id}
                  type="button"
                  className={`menu-category-button ${
                    activeCategory ===
                    category.id
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveCategory(
                      category.id
                    )
                  }
                >
                  <span className="menu-category-icon">
                    {category.icon}
                  </span>

                  <span>
                    {category.name}
                  </span>
                </button>
              )
            )}
          </div>
        </section>

        {/* ===================================================
            RESULTS
        =================================================== */}

        <section className="menu-results">

          <div className="menu-results-heading">
            <div>
              <span>
                MENU
              </span>

              <h2>
                {activeCategory ===
                "todos"
                  ? "Todas as opções"
                  : getCategoryName(
                      activeCategory
                    )}
              </h2>
            </div>

            <small>
              {filteredItems.length}{" "}
              {filteredItems.length ===
              1
                ? "opção"
                : "opções"}
            </small>
          </div>

          {/* =================================================
              MENU SEMANAL AGRUPADO
          ================================================= */}

          {groupedByDay ? (
            Object.entries(
              groupedByDay
            ).map(
              ([day, items]) => (
                <div
                  className="menu-day-section"
                  key={day}
                >
                  <div className="menu-day-heading">
                    <span>
                      {day}
                    </span>
                  </div>

                  <div className="menu-dishes-grid">
                    {items.map(
                      (item) =>
                        renderDishCard(
                          item
                        )
                    )}
                  </div>
                </div>
              )
            )
          ) : filteredItems.length >
            0 ? (

            /* =================================================
               OUTRAS CATEGORIAS
            ================================================= */

            <div className="menu-dishes-grid">
              {filteredItems.map(
                (item) =>
                  renderDishCard(item)
              )}
            </div>

          ) : (

            /* =================================================
               CATEGORIA SEM PRODUTOS
            ================================================= */

            <div className="menu-empty">
              <span>
                🍽️
              </span>

              <h3>
                Esta categoria ainda
                não tem pratos.
              </h3>

              <p>
                O Garden & Grill irá
                disponibilizar mais opções
                em breve.
              </p>
            </div>
          )}

        </section>

        {/* ===================================================
            WHATSAPP
        =================================================== */}

        <section className="menu-whatsapp-section">
          <div>
            <span>
              FAÇA O SEU PEDIDO
            </span>

            <h2>
              Encontrou o que procura?
            </h2>

            <p>
              Entre em contacto connosco
              pelo WhatsApp para fazer o
              seu pedido.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="menu-whatsapp-cta"
          >
            Pedir pelo WhatsApp
          </a>
        </section>

      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="menu-footer">
        <div>
          <strong>
            GARDEN & GRILL
          </strong>

          <span>
            Pizza & Sushi
          </span>
        </div>

        <a href="/">
          ← Página inicial
        </a>
      </footer>

    </div>
  );
}

export default Menu;