import Image from "next/image";
import { TextLoop } from "@/components/ui/text-loop";

const whatsappUrl =
  "https://wa.me/5521968414939?text=Ol%C3%A1%2C%20Rayssa!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o.";

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
            Agendar sessão
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
        <div className="container trust-grid">
          <p><strong>01</strong> Cuidado personalizado</p>
          <p><strong>02</strong> Ambiente acolhedor</p>
          <p><strong>03</strong> Agendamento fácil</p>
        </div>
      </div>

      <section className="section services" id="servicos" aria-labelledby="services-title">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <div className="eyebrow"><span /> Tratamentos</div>
              <h2 id="services-title">Um cuidado para cada momento do seu corpo.</h2>
            </div>
            <p>
              Cada sessão começa com uma escuta atenta. Assim, técnica, intensidade
              e objetivo são adaptados ao que você precisa hoje.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-card-body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="service-media">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 720px) calc(100vw - 88px), (max-width: 980px) 42vw, 27vw"
                      className="service-image"
                    />
                  </div>
                  <a
                    href={`${whatsappUrl}%20Tenho%20interesse%20em%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Perguntar sobre ${service.title} pelo WhatsApp`}
                  >
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

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.image}>
                <Image
                  src={testimonial.image}
                  alt={testimonial.alt}
                  width={testimonial.width}
                  height={testimonial.height}
                  sizes="(max-width: 720px) calc(100vw - 56px), 900px"
                  className="testimonial-image"
                />
              </figure>
            ))}
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
            <a href={whatsappUrl} target="_blank" rel="noreferrer">(21) 96841-4939</a>
          </div>
          <div>
            <span>Redes sociais</span>
            <a href="https://www.instagram.com/rayssafernaanda" target="_blank" rel="noreferrer">
              @rayssafernaanda
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
        <i aria-hidden="true">→</i>
      </a>
    </main>
  );
}
