import Image from "next/image";
import { TextLoop } from "@/components/ui/text-loop";

const whatsappUrl =
  "https://wa.me/5521968414939?text=Ol%C3%A1%2C%20Rayssa!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o.";

const trustItems = [
  { number: "01", label: "Cuidado personalizado" },
  { number: "02", label: "Ambiente acolhedor" },
  { number: "03", label: "Agendamento fácil" },
];

const services = [
  {
    title: "Massagem relaxante",
    text: "Uma pausa para desacelerar, aliviar a sensação de tensão e recuperar o bem-estar.",
    image: "/servico-massagem-relaxante.webp",
    imageAlt: "Massagem relaxante sendo realizada nas costas",
  },
  {
    title: "Massagem terapêutica",
    text: "Cuidado direcionado para áreas de tensão e desconforto muscular, respeitando as necessidades do seu corpo.",
    image: "/servico-massagem-terapeutica.webp",
    imageAlt: "Massagem terapêutica aplicada na região dos ombros",
  },
  {
    title: "Drenagem linfática",
    text: "Técnica manual para quem busca auxílio no controle do inchaço e uma agradável sensação de leveza.",
    image: "/servico-drenagem-linfatica.webp",
    imageAlt: "Drenagem linfática manual sendo realizada nas pernas",
  },
  {
    title: "Massagem modeladora",
    text: "Movimentos manuais intensos e personalizados, com foco no cuidado e no contorno corporal.",
    image: "/servico-massagem-modeladora.webp",
    imageAlt: "Massagem modeladora sendo aplicada na região das pernas",
  },
  {
    title: "Pós-operatório",
    text: "Acompanhamento individualizado e alinhado às orientações do profissional de saúde responsável.",
    image: "/servico-pos-operatorio.webp",
    imageAlt: "Atendimento de massoterapia no acompanhamento pós-operatório",
  },
  {
    title: "Ventosaterapia",
    text: "Técnica complementar aplicada após avaliação, como parte de um atendimento pensado para você.",
    image: "/servico-ventosaterapia.webp",
    imageAlt: "Sessão profissional de ventosaterapia nas costas",
  },
];

const testimonials = [
  {
    image: "/depoimento-hildaleitebomfim.jpg",
    alt: "Comentário no Instagram de hildaleitebomfim recomendando Rayssa como atenciosa e profissional",
    width: 1220,
    height: 264,
  },
  {
    image: "/depoimento-eukarolaa.jpg",
    alt: "Comentário no Instagram de eukarolaa dizendo que Rayssa é a melhor",
    width: 1220,
    height: 226,
  },
  {
    image: "/depoimento-edmealexandrino.jpg",
    alt: "Comentário no Instagram de edmealexandrino elogiando a massagem da Rayssa",
    width: 1220,
    height: 331,
  },
  {
    image: "/depoimento-natty-lacerda.jpg",
    alt: "Comentário no Instagram de natty_lacerda_make dizendo que sente saudade e precisa de uma sessão",
    width: 1220,
    height: 254,
  },
  {
    image: "/depoimento-gisa-gomesrj.jpg",
    alt: "Comentário no Instagram de gisa_gomesrj elogiando o trabalho da Rayssa",
    width: 1220,
    height: 245,
  },
  {
    image: "/depoimento-larissamarinsss.jpg",
    alt: "Comentário no Instagram de larissamarinsss dizendo que quer marcar uma sessão",
    width: 1220,
    height: 265,
  },
];

const faqs = [
  {
    question: "Como escolher a massagem ideal?",
    answer:
      "Você não precisa decidir sozinha. Pelo WhatsApp, a Rayssa entende o que você está sentindo e orienta qual atendimento faz mais sentido para o seu momento.",
  },
  {
    question: "Onde são realizados os atendimentos?",
    answer:
      "Os atendimentos acontecem em Realengo, Rio de Janeiro. As informações completas do espaço são enviadas durante a confirmação do horário.",
  },
  {
    question: "Quanto tempo dura e qual é o valor?",
    answer:
      "A duração e o investimento variam conforme o serviço escolhido. Entre em contato pelo WhatsApp para consultar as opções e horários disponíveis.",
  },
  {
    question: "Posso fazer massagem no pós-operatório?",
    answer:
      "O atendimento pós-operatório deve respeitar a fase da recuperação e as orientações médicas. Quando necessário, será solicitada a liberação do profissional de saúde responsável.",
  },
];

function InstagramIcon({ className = "social-icon" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.7" r="1.15" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon({ className = "social-icon" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.496.099-.198.05-.347-.025-.496-.075-.149-.669-1.612-.916-2.208-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.893 9.888-9.893a9.82 9.82 0 0 1 7.021 2.91 9.825 9.825 0 0 1 2.9 7.029c-.002 5.45-4.437 9.892-9.892 9.892m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/hero-poster.webp"
            disablePictureInPicture
          >
            <source src="/hero-rayssa.mp4" type="video/mp4" />
          </video>
          <div className="hero-poster" />
          <div className="hero-overlay" />
        </div>

        <header className="site-header">
          <a className="brand" href="#inicio" aria-label="Rayssa Fernanda Massoterapia — início">
            <Image
              src="/rayssa-logo.webp"
              alt=""
              width={48}
              height={48}
              className="brand-logo"
              priority
            />
            <span className="brand-copy">
              <strong>Rayssa Fernanda</strong>
              <small>Massoterapia</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>

          <a
            className="header-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Agendar uma sessão pelo WhatsApp"
          >
            <WhatsAppIcon />
            <span>Agendar sessão</span>
          </a>
        </header>

        <div className="hero-content container">
          <div className="eyebrow light">
            <span /> Atendimento em Realengo, Rio de Janeiro
          </div>
          <h1 id="hero-title" aria-label="Alívio para o corpo. Leveza para a rotina.">
            <TextLoop className="hero-title-loop">
              {[
                <span className="hero-title-primary" key="alivio">Alívio para o corpo.</span>,
                <em key="leveza">Leveza para a rotina.</em>,
              ]}
            </TextLoop>
          </h1>
          <p>
            Massoterapia personalizada, com escuta, técnica e cuidado, para você
            desacelerar e se sentir bem no próprio corpo.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              Quero agendar minha sessão
              <span aria-hidden="true">→</span>
            </a>
            <a className="text-link light-link" href="#servicos">
              Conhecer os tratamentos
            </a>
          </div>
          <div className="hero-note">
            <span className="hero-note-line" />
            Atendimento individual e acolhedor
          </div>
        </div>

        <a className="scroll-cue" href="#conteudo" aria-label="Ver mais sobre o atendimento">
          <span>Descubra</span>
          <i aria-hidden="true" />
        </a>
      </section>

      <div id="conteudo" className="trust-strip" aria-label="Diferenciais do atendimento">
        <div className="trust-marquee">
          <div className="trust-track">
            {[false, true].map((isDuplicate) => (
              <div
                className="trust-group"
                aria-hidden={isDuplicate ? true : undefined}
                key={isDuplicate ? "duplicate" : "original"}
              >
                {trustItems.map((item) => (
                  <div className="trust-item" key={`${isDuplicate ? "duplicate" : "original"}-${item.number}`}>
                    <p><strong>{item.number}</strong> {item.label}</p>
                    <span className="trust-separator" aria-hidden="true">•</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section services" id="servicos" aria-labelledby="services-title">
        <div className="container">
          <header className="section-heading services-heading">
            <div className="eyebrow"><span /> Tratamentos</div>
            <h2 id="services-title">Um cuidado para cada momento do seu corpo.</h2>
            <p>
              Cada sessão começa com uma escuta atenta. Assim, técnica, intensidade
              e objetivo são adaptados ao que você precisa hoje.
            </p>
          </header>

          <div className="services-grid">
            {services.map((service, index) => (
              <article
                className="service-glass-card"
                key={service.title}
                style={{ zIndex: index + 1 }}
              >
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="service-card-media">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 767px) calc(100vw - 76px), (max-width: 980px) 42vw, 27vw"
                      className="service-card-image"
                    />
                  </div>
                  <a
                    className="service-card-link"
                    href={`${whatsappUrl}%20Tenho%20interesse%20em%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Perguntar sobre ${service.title} pelo WhatsApp`}
                  >
                    <WhatsAppIcon />
                    Saber mais <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials" id="depoimentos" aria-labelledby="testimonials-title">
        <div className="container">
          <div className="section-heading centered-heading">
            <div className="eyebrow"><span /> Quem já viveu</div>
            <h2 id="testimonials-title">O cuidado é sentido nos detalhes.</h2>
          </div>

          <div className="testimonial-marquee">
            <div className="testimonial-track">
              {[false, true].map((isDuplicate) => (
                <div
                  className={`testimonial-group${isDuplicate ? " testimonial-group-duplicate" : ""}`}
                  aria-hidden={isDuplicate ? true : undefined}
                  key={isDuplicate ? "testimonial-duplicate" : "testimonial-original"}
                >
                  {testimonials.map((testimonial) => (
                    <figure key={`${isDuplicate ? "duplicate" : "original"}-${testimonial.image}`}>
                      <Image
                        src={testimonial.image}
                        alt={isDuplicate ? "" : testimonial.alt}
                        width={testimonial.width}
                        height={testimonial.height}
                        sizes="(max-width: 720px) 84vw, 900px"
                        className="testimonial-image"
                      />
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section about" id="sobre" aria-labelledby="about-title">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="image-frame">
              <Image
                src="/rayssa-sobre.webp"
                alt="Rayssa Fernanda sorrindo e segurando instrumentos de massoterapia"
                fill
                sizes="(max-width: 850px) 90vw, 42vw"
                className="about-image"
              />
            </div>
            <div className="image-caption">
              <strong>Rayssa Fernanda</strong>
              <span>Massoterapeuta • Realengo, RJ</span>
            </div>
          </div>

          <div className="about-copy">
            <div className="eyebrow"><span /> Sobre a Rayssa</div>
            <h2 id="about-title">Cuidado que começa pela escuta.</h2>
            <p className="lead">
              Mais do que aplicar uma técnica, Rayssa acredita em compreender o
              corpo, respeitar seus limites e criar um momento de cuidado verdadeiro.
            </p>
            <p>
              O atendimento combina acolhimento e atenção individual para ajudar
              você a aliviar tensões, desacelerar e reencontrar uma sensação de
              equilíbrio na rotina.
            </p>
            <blockquote>
              “Cada corpo tem uma necessidade. O cuidado certo faz toda a diferença.”
            </blockquote>
            <a
              className="text-link"
              href="https://www.instagram.com/rayssafernaanda"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
              Acompanhar no Instagram <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section process" aria-labelledby="process-title">
        <div className="container">
          <div className="section-heading process-heading">
            <div>
              <div className="eyebrow light"><span /> Sua experiência</div>
              <h2 id="process-title">Simples desde o primeiro contato.</h2>
            </div>
            <a
              className="button button-outline"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              Conversar com a Rayssa
            </a>
          </div>

          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Conte o que você sente</h3>
              <p>Fale com a Rayssa pelo WhatsApp e compartilhe o que seu corpo precisa.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Escolha o melhor horário</h3>
              <p>Consulte disponibilidade, valores e encontre um momento para você.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Viva seu cuidado</h3>
              <p>Na sessão, o atendimento é ajustado de forma individual e acolhedora.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section faq" id="duvidas" aria-labelledby="faq-title">
        <div className="container faq-grid">
          <div className="faq-intro">
            <div className="eyebrow"><span /> Perguntas frequentes</div>
            <h2 id="faq-title">Antes de reservar seu momento.</h2>
            <p>
              Ficou com outra dúvida? A Rayssa responde pessoalmente pelo WhatsApp.
            </p>
            <a
              className="button button-dark"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              Tirar uma dúvida
            </a>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-title">
        <div className="container final-cta-inner">
          <div>
            <div className="eyebrow light"><span /> Seu corpo pede uma pausa</div>
            <h2 id="cta-title">Permita-se sentir leve de novo.</h2>
          </div>
          <div className="final-cta-action">
            <p>Agende sua sessão com a Rayssa em Realengo.</p>
            <a
              className="button button-primary"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              Agendar pelo WhatsApp <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <a className="brand footer-brand" href="#inicio">
            <Image
              src="/rayssa-logo.webp"
              alt=""
              width={48}
              height={48}
              className="brand-logo"
            />
            <span className="brand-copy">
              <strong>Rayssa Fernanda</strong>
              <small>Massoterapia</small>
            </span>
          </a>
          <div>
            <span>Atendimento</span>
            <p>Realengo • Rio de Janeiro</p>
          </div>
          <div>
            <span>Contato</span>
            <a className="footer-contact-link" href={whatsappUrl} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              (21) 96841-4939
            </a>
          </div>
          <div>
            <span>Redes sociais</span>
            <a
              className="footer-instagram-link"
              href="https://www.instagram.com/rayssafernaanda"
              target="_blank"
              rel="noreferrer"
              aria-label="Acompanhar Rayssa Fernanda no Instagram"
            >
              <InstagramIcon className="footer-social-icon" />
              <span>@rayssafernaanda</span>
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 Rayssa Fernanda Massoterapia.</p>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>

      <a
        className="floating-cta"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar sessão pelo WhatsApp"
      >
        <span>Agendar</span>
        <i aria-hidden="true"><WhatsAppIcon /></i>
      </a>
    </main>
  );
}
