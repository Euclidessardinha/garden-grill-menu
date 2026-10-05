
import { useState } from "react";
import { addToCart } from "../utils/cart";

import "./DishDetails.css";

function DishDetails() {
  const [quantity, setQuantity] = useState(1);

  const pathParts = window.location.pathname
    .split("/")
    .filter(Boolean);

  const itemId = pathParts[pathParts.length - 1];

  /*
   * AMOSTRA VISUAL
   *
   * Nesta fase não estamos a mexer no Supabase.
   *
   * Os IDs destes pratos devem corresponder
   * exatamente aos IDs existentes no Menu.jsx.
   */
  const menuItems = [
    // ==========================================================
    // MENU SEMANAL — SEGUNDA-FEIRA
    // ==========================================================

    {
      id: "isca-figado-vaca",
      category: "Menu Semanal",
      name: "Isca de Fígado de Vaca",
      price: 650,
      description: "C/ Batata Cozida e Salada",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Liver_dish%2C_Hattenheim.jpg",
      featured: false,
      available: true,
    },

    {
      id: "posta-serra-grelhada",
      category: "Menu Semanal",
      name: "Posta Serra Grelhada",
      price: 650,
      description:
        "C/ Legumes e Arroz — Sugestão do Chef.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/GrilledPicanha.jpg",
      featured: false,
      available: true,
    },

    {
      id: "arroz-garoupa",
      category: "Menu Semanal",
      name: "Arroz de Garoupa",
      price: 950,
      description: "",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Steamed_rice_with_grouper.jpg",
      featured: false,
      available: true,
    },

    // ==========================================================
    // MENU SEMANAL — TERÇA-FEIRA
    // ==========================================================

    {
      id: "caril-camarao",
      category: "Menu Semanal",
      name: "Caril de Camarão",
      price: 650,
      description: "C/ Arroz Branco",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Prawn_curry_with_rice.JPG",
      featured: false,
      available: true,
    },

    {
      id: "costeletas-porco-grelhado",
      category: "Menu Semanal",
      name: "Costeletas de Porco Grelhado",
      price: 650,
      description:
        "C/ Batata e Salada — Sugestão do Chef.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kotelett_gegrillt_Kartoffelsalat_Paul_Buchau.JPG",
      featured: false,
      available: true,
    },

    {
      id: "alcatra",
      category: "Menu Semanal",
      name: "Alcatra",
      price: 1150,
      description:
        "C/ Batata ou Arroz de Vegetais",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/GrilledPicanha.jpg",
      featured: true,
      available: true,
    },

    // ==========================================================
    // MENU SEMANAL — QUARTA-FEIRA
    // ==========================================================

    {
      id: "pernil-assado",
      category: "Menu Semanal",
      name: "Pernil Assado no Forno",
      price: 650,
      description:
        "C/ Puré de Batata e Salada",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Roasted_pork_leg_served_with_golden_potatoes_and_fresh_vegetables.jpg",
      featured: false,
      available: true,
    },

    {
      id: "corvina-grelhada",
      category: "Menu Semanal",
      name: "Corvina Grelhada",
      price: 650,
      description:
        "C/ Arroz de Vegetais ou Vegetais — Sugestão do Chef.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Corvina%2C_Sardina.jpg",
      featured: false,
      available: true,
    },

    {
      id: "camarao-grelhado",
      category: "Menu Semanal",
      name: "Camarão Grelhado",
      price: 1200,
      description:
        "C/ Batata e Salada",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Grilled_Prawns.jpg",
      featured: true,
      available: true,
    },

    // ==========================================================
    // MENU SEMANAL — QUINTA-FEIRA
    // ==========================================================

    {
      id: "cozido-portuguesa",
      category: "Menu Semanal",
      name: "Cozido à Portuguesa",
      price: 650,
      description: "",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cozido_%C3%A0_portuguesa.jpg",
      featured: false,
      available: true,
    },

    {
      id: "pescadinha",
      category: "Menu Semanal",
      name: "Pescadinha",
      price: 650,
      description:
        "C/ Arroz Malandro e Salada — Sugestão do Chef.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Lunch_with_European_hake_at_Eatery_Lund.jpg",
      featured: false,
      available: true,
    },

    {
      id: "picanha-brasileira",
      category: "Menu Semanal",
      name: "Picanha Brasileira",
      price: 1200,
      description:
        "C/ Arroz, Feijão, Couve e Ananás",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/GrilledPicanha.jpg",
      featured: true,
      available: true,
    },

    // ==========================================================
    // MENU SEMANAL — SEXTA-FEIRA
    // ==========================================================

    {
      id: "feijoada-transmontana",
      category: "Menu Semanal",
      name: "Feijoada à Transmontana",
      price: 650,
      description: "",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Feijoada_%C3%A0_transmontada.jpg",
      featured: false,
      available: true,
    },

    {
      id: "garoupa",
      category: "Menu Semanal",
      name: "Garoupa",
      price: 650,
      description:
        "C/ Arroz e Salada — Sugestão do Chef.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Steamed_rice_with_grouper.jpg",
      featured: false,
      available: true,
    },

    {
      id: "lulas-grelhadas",
      category: "Menu Semanal",
      name: "Lulas Grelhadas",
      price: 850,
      description: "C/ Legumes",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Grilled_squid.jpg",
      featured: false,
      available: true,
    },

    // ==========================================================
    // ENTRADAS — ILUSTRATIVAS
    // ==========================================================

    {
      id: "pao-alho",
      category: "Entradas",
      name: "Pão de Alho",
      price: 0,
      description:
        "Pão crocante preparado com manteiga de alho e ervas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Garlic_bread.jpg",
      featured: false,
      available: true,
    },

    {
      id: "calamari-frito",
      category: "Entradas",
      name: "Calamari Frito",
      price: 0,
      description:
        "Anéis de lula crocantes, servidos como entrada.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fried_calamari.jpg",
      featured: false,
      available: true,
    },

    {
      id: "batata-frita",
      category: "Entradas",
      name: "Batata Frita",
      price: 0,
      description:
        "Batatas douradas e crocantes, ideais para partilhar.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/French_fries.JPG",
      featured: false,
      available: true,
    },

    // ==========================================================
    // PRATOS PRINCIPAIS — ILUSTRATIVOS
    // ==========================================================

    {
      id: "salmao-grelhado",
      category: "Pratos Principais",
      name: "Salmão Grelhado",
      price: 0,
      description:
        "Salmão grelhado acompanhado de vegetais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Salmon_with_vegetables.jpg",
      featured: false,
      available: true,
    },

    {
      id: "bife-grelhado",
      category: "Pratos Principais",
      name: "Bife Grelhado",
      price: 0,
      description:
        "Bife grelhado servido com acompanhamento.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Grilled_steak.jpg",
      featured: false,
      available: true,
    },

    {
      id: "salada-caesar",
      category: "Pratos Principais",
      name: "Salada Caesar",
      price: 0,
      description:
        "Salada fresca com alface, molho Caesar e acompanhamentos.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Caesar_salad.jpg",
      featured: false,
      available: true,
    },

    // ==========================================================
    // CARNES — ILUSTRATIVAS
    // ==========================================================

    {
      id: "steak-grelhado",
      category: "Carnes",
      name: "Steak Grelhado",
      price: 0,
      description:
        "Corte de carne grelhado, servido com acompanhamento.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Grilled_steak.jpg",
      featured: false,
      available: true,
    },

    {
      id: "carne-grelhada-legumes",
      category: "Carnes",
      name: "Carne Grelhada com Legumes",
      price: 0,
      description:
        "Carne grelhada acompanhada por legumes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Steak_with_vegetables.jpg",
      featured: false,
      available: true,
    },

    // ==========================================================
    // PEIXES E MARISCOS — ILUSTRATIVOS
    // ==========================================================

    {
      id: "salmao-legumes",
      category: "Peixes e Mariscos",
      name: "Salmão com Legumes",
      price: 0,
      description:
        "Salmão servido com seleção de legumes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Salmon_with_vegetables.jpg",
      featured: false,
      available: true,
    },

    {
      id: "lulas-salteadas",
      category: "Peixes e Mariscos",
      name: "Lulas Salteadas",
      price: 0,
      description:
        "Lulas preparadas e salteadas com ervas e temperos.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sauteed_calamari.jpg",
      featured: false,
      available: true,
    },

    {
      id: "marisco-grelhado",
      category: "Peixes e Mariscos",
      name: "Marisco Grelhado",
      price: 0,
      description:
        "Seleção de mariscos preparada na grelha.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Seafood_platter.jpg",
      featured: false,
      available: true,
    },

    // ==========================================================
    // PIZZA — ILUSTRATIVAS
    // ==========================================================

    {
      id: "pizza-margherita",
      category: "Pizza",
      name: "Pizza Margherita",
      price: 0,
      description:
        "Pizza com molho de tomate, queijo e manjericão.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Margherita_pizza.jpg",
      featured: true,
      available: true,
    },

    {
      id: "pizza-frutos-mar",
      category: "Pizza",
      name: "Pizza de Frutos do Mar",
      price: 0,
      description:
        "Pizza com frutos do mar e queijo.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Seafood_pizza_close-up.jpg",
      featured: false,
      available: true,
    },

    {
      id: "pizza-salmao",
      category: "Pizza",
      name: "Pizza de Salmão",
      price: 0,
      description:
        "Pizza com salmão e ingredientes frescos.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Naples_Salmon_Pizza.jpg",
      featured: false,
      available: true,
    },

    // ==========================================================
    // SUSHI — ILUSTRATIVOS
    // ==========================================================

    {
      id: "sushi-salmao",
      category: "Sushi",
      name: "Sushi de Salmão",
      price: 0,
      description:
        "Seleção de sushi com salmão.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/77/Salmon_Sushi_and_Sashimi_Platter_-_W_Sushi.jpg",
      featured: false,
      available: true,
    },

    {
      id: "sushi-platter",
      category: "Sushi",
      name: "Sushi Platter",
      price: 0,
      description:
        "Seleção variada de sushi para partilhar.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sushi_platter.jpg",
      featured: true,
      available: true,
    },

    {
      id: "sushi-misto",
      category: "Sushi",
      name: "Sushi Misto",
      price: 0,
      description:
        "Seleção de diferentes peças de sushi.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sushi_platter_with_omelette,_cooked_salmon,_kani_and_cucumber_sushi.jpg",
      featured: false,
      available: true,
    },

    // ==========================================================
    // BEBIDAS — ILUSTRATIVAS
    // ==========================================================

    {
      id: "sumos-naturais",
      category: "Bebidas",
      name: "Sumos Naturais",
      price: 0,
      description:
        "Sumos naturais preparados com frutas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fruit_juice.jpg",
      featured: false,
      available: true,
    },

    {
      id: "refrigerante",
      category: "Bebidas",
      name: "Refrigerante",
      price: 0,
      description:
        "Bebida refrescante servida gelada.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cola_Beverage.jpg",
      featured: false,
      available: true,
    },

    {
      id: "agua",
      category: "Bebidas",
      name: "Água Mineral",
      price: 0,
      description:
        "Água mineral servida fresca.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bottled_water.jpg",
      featured: false,
      available: true,
    },

    // ==========================================================
    // SOBREMESAS — ILUSTRATIVAS
    // ==========================================================

    {
      id: "tiramisu",
      category: "Sobremesas",
      name: "Tiramisu",
      price: 0,
      description:
        "Sobremesa italiana cremosa com café e cacau.",
      image:
        "https://www.exploregeorgia.org/sites/default/files/listing_images/profile/15923/0c67208cafc3d1ae8dfeb77a12f91f74_dvc_decatur-ga_directory_No-246_tiramisu_credit-No-246-FB.jpg",
      featured: false,
      available: true,
    },

    {
      id: "bolo-chocolate",
      category: "Sobremesas",
      name: "Bolo de Chocolate",
      price: 0,
      description:
        "Bolo de chocolate servido como sobremesa.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chocolate_cake.jpg",
      featured: false,
      available: true,
    },

    // ==========================================================
    // HAPPY HOUR
    // ==========================================================

    {
      id: "2m-pressao",
      category: "Happy Hour",
      name: "2M a Pressão",
      price: 0,
      description:
        "Das 12h às 20h • Segunda a Sexta-feira",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/2M_Mac-Mahon_Mozambique_%283105533616%29.jpg",
      featured: false,
      available: true,
    },
  ];

  /*
   * ENCONTRAR O PRATO PELO ID DA URL
   */
  const item = menuItems.find(
    (menuItem) => menuItem.id === itemId
  );

  const formatPrice = (price) => {
    return `${Number(price).toLocaleString("pt-MZ")} MT`;
  };

  const handleIncrease = () => {
    setQuantity((current) => current + 1);
  };

  const handleDecrease = () => {
    setQuantity((current) =>
      current > 1 ? current - 1 : 1
    );
  };

  const handleAddToCart = () => {
    if (!item) {
      return;
    }

    addToCart(item, quantity);

    window.location.href = "/cart";
  };

  /*
   * PRATO NÃO ENCONTRADO
   */
  if (!item) {
    return (
      <div className="dish-details-page">
        <div className="dish-not-found">

          <span className="dish-not-found-icon">
            🍽️
          </span>

          <h1>Prato não encontrado</h1>

          <p>
            O prato que você está procurando não está
            disponível neste momento.
          </p>

          <a
            href="/menu"
            className="dish-back-button"
          >
            ← Voltar ao menu
          </a>

        </div>
      </div>
    );
  }

  return (
    <div className="dish-details-page">

      {/* HEADER */}
      <header className="dish-details-header">

        <a
          href="/"
          className="dish-details-brand"
        >
          <img
            src="/logo-garden-grill.png"
            alt="Garden & Grill"
          />

          <span>
            <strong>GARDEN & GRILL</strong>

            <small>
              Pizza & Sushi
            </small>
          </span>
        </a>

        <a
          href="/menu"
          className="dish-header-menu"
        >
          Ver menu
        </a>

      </header>

      {/* CONTEÚDO */}
      <main className="dish-details-main">

        <a
          href="/menu"
          className="dish-back-link"
        >
          ← Voltar ao menu
        </a>

        <div className="dish-details-container">

          {/* IMAGEM */}
          <div className="dish-details-image-wrapper">

            <img
              src={item.image}
              alt={item.name}
              className="dish-details-image"
            />

            {item.featured && (
              <span className="dish-details-featured">
                ⭐ Destaque
              </span>
            )}

          </div>

          {/* INFORMAÇÕES */}
          <div className="dish-details-info">

            <span className="dish-details-category">
              {item.category}
            </span>

            <h1>
              {item.name}
            </h1>

            <div className="dish-details-price">
              {formatPrice(item.price)}
            </div>

            {item.description && (
              <div className="dish-about">

                <h2>
                  Sobre este prato
                </h2>

                <p>
                  {item.description}
                </p>

              </div>
            )}

            {item.available && (
              <div className="dish-order-area">

                {/* QUANTIDADE */}
                <div className="dish-quantity">

                  <span>
                    Quantidade
                  </span>

                  <div className="quantity-control">

                    <button
                      type="button"
                      onClick={handleDecrease}
                      aria-label="Diminuir quantidade"
                    >
                      −
                    </button>

                    <strong>
                      {quantity}
                    </strong>

                    <button
                      type="button"
                      onClick={handleIncrease}
                      aria-label="Aumentar quantidade"
                    >
                      +
                    </button>

                  </div>

                </div>

                {/* ADICIONAR AO PEDIDO */}
                <button
                  type="button"
                  className="dish-whatsapp-button"
                  onClick={handleAddToCart}
                >

                  <span className="whatsapp-icon">
                    🛒
                  </span>

                  <span className="dish-order-text">

                    <small>
                      FAÇA O SEU PEDIDO
                    </small>

                    <strong>
                      Adicionar ao pedido
                    </strong>

                  </span>

                  <span className="whatsapp-arrow">
                    →
                  </span>

                </button>

              </div>
            )}

          </div>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="dish-details-footer">

        <div>

          <strong>
            GARDEN & GRILL
          </strong>

          <span>
            Pizza & Sushi
          </span>

        </div>

        <a href="/menu">
          Ver menu completo →
        </a>

      </footer>

    </div>
  );
}

export default DishDetails;

