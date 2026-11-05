import "./newsletter.scss";

export function Newsletter() {
  return (
    <section id="section-newsletter">
      <div className="container newsletter-inner">
        <div className="newsletter-text">
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>
        <div className="newsletter-form-wrapper">
          <form
            className="newsletter-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <input type="text" placeholder="Digite seu nome" required />
            <input type="email" placeholder="Digite seu e-mail" required />
            <button type="submit" className="btn-secondary">
              INSCREVER
            </button>
          </form>
          <label className="newsletter-checkbox">
            <input type="checkbox" required />
            <span>Aceito os termos e condições</span>
          </label>
        </div>
      </div>
    </section>
  );
}
