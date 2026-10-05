import "./Home.css";

function Home() {
  const whatsappNumber = "258849228062";

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre o Garden & Grill Pizza & Sushi."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="home-page">

      {/* =========================
          HEADER
      ========================= */}
      <header className="home-header">

        <a href="/" className="home-brand">

          <img
            src="/logo-garden-grill.png"
            alt="Garden & Grill Pizza & Sushi"
          />

          <span>Garden & Grill</span>

        </a>

        <a
          href={whatsappUrl}
          className="home-header-whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>

      </header>


      {/* =========================
          HERO
      ========================= */}
      <main>

        <section className="home-hero">

          <div className="home-hero-overlay"></div>

          <div className="home-hero-content">

            <span className="home-hero-label">
              GARDEN & GRILL
            </span>

            <h1>
              Pizza,
              <br />
              <span>Sushi & muito mais.</span>
            </h1>

            <p>
              Sabores, momentos e experiências
              para desfrutar no Garden & Grill.
            </p>

            <div className="home-hero-actions">

              <a
                href="/menu"
                className="home-button home-button-primary"
              >
                Ver Menu
                <span>→</span>
              </a>

              <a
                href="/visite-nos"
                className="home-button home-button-secondary"
              >
                Visite-nos
                <span>↗</span>
              </a>

            </div>

          </div>


          <div className="home-hero-scroll">

            <span>EXPLORE</span>

            <span className="home-scroll-line"></span>

          </div>

        </section>


        {/* =========================
            VISITE-NOS
        ========================= */}
        <section className="home-visit">

          <div className="home-visit-header">

            <span>GARDEN & GRILL</span>

            <h2>
              Visite-nos
              <span>.</span>
            </h2>

            <p>
              Conheça o nosso espaço, descubra o ambiente
              e desfrute de uma experiência Garden & Grill.
            </p>

          </div>


          <div className="home-visit-grid">

            {/* LOCALIZAÇÃO */}
            <div className="home-visit-card">

              <div className="home-visit-icon">
                ⌖
              </div>

              <div>

                <span>LOCALIZAÇÃO</span>

                <h3>
                  Garden & Grill
                </h3>

                <p>
                  Localização a confirmar
                </p>

              </div>

            </div>


            {/* EXPERIÊNCIA */}
            <div className="home-visit-card">

              <div className="home-visit-icon">
                ✦
              </div>

              <div>

                <span>EXPERIÊNCIA</span>

                <h3>
                  Pizza & Sushi
                </h3>

                <p>
                  Sabores e momentos no Garden & Grill
                </p>

              </div>

            </div>


            {/* CONTACTO */}
            <div className="home-visit-card">

              <div className="home-visit-icon">
                ◉
              </div>

              <div>

                <span>CONTACTO</span>

                <h3>
                  WhatsApp
                </h3>

                <p>
                  84 922 8062
                </p>

              </div>

            </div>

          </div>


          <div className="home-visit-action">

            <a href="/visite-nos">

              Conhecer o espaço

              <span>
                →
              </span>

            </a>

          </div>

        </section>


        {/* =========================
            MENU SEMANAL
        ========================= */}
        <section className="home-weekly">

          <div className="home-weekly-header">

            <span>09 SET — 13 SET</span>

            <h2>
              Menu Semanal
              <span>.</span>
            </h2>

            <p>
              Descubra as sugestões preparadas pelo
              Garden & Grill para cada dia da semana.
            </p>

          </div>


          <div className="home-weekly-action">

            <a href="/menu">

              Ver Menu Semanal

              <span>
                →
              </span>

            </a>

          </div>

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================= */}
      <footer className="home-footer">

        <div className="home-footer-brand">

          <strong>
            GARDEN & GRILL
          </strong>

          <span>
            Pizza & Sushi
          </span>

        </div>


        <div className="home-footer-links">

          <a href="/menu">
            Ver Menu
          </a>

          <a href="/visite-nos">
            Visite-nos
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Contactar
          </a>

        </div>


        <div className="home-footer-copy">

          © {new Date().getFullYear()} Garden & Grill Pizza & Sushi

        </div>

      </footer>

    </div>
  );
}

export default Home;