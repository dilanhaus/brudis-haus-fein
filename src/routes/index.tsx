import { createFileRoute } from "@tanstack/react-router";
const heroVideo = { url: "/media/brudis-hero.mp4" };
const logo = { url: "/media/brudis-logo.png" };
const shop = { url: "/media/shop.jpg" };
const donerSpit = { url: "/media/doner-spit.jpg" };
const salads = { url: "/media/salads.jpg" };
const donerMeal = { url: "/media/doner-meal.jpg" };
const donerSandwich = { url: "/media/doner-sandwich.jpg" };
const donerCombo = { url: "/media/doner-combo.jpg" };
const smashBurgerFlag = { url: "/media/smash-burger-flag.jpg" };
const smashBurger = { url: "/media/smash-burger.jpg" };
const burgerFries = { url: "/media/burger-fries.jpg" };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brudis — Authentic German Doner & Smash Burgers in London" },
      {
        name: "description",
        content:
          "Born in Hannover, served in London. Authentic German doner kebabs and premium smash burgers, made fresh daily with in-house sauces.",
      },
      { property: "og:title", content: "Brudis — Authentic German Doner & Smash Burgers" },
      {
        property: "og:description",
        content:
          "Born in Hannover, served in London. Authentic German doner and premium smash burgers, made fresh daily.",
      },
      { property: "og:image", content: smashBurgerFlag.url },
      { name: "twitter:image", content: smashBurgerFlag.url },
    ],
  }),
  component: Index,
});

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo.url} alt="Brudis Döner & Burger" width={56} height={56} className="h-14 w-auto" />
          <span className="sr-only">Brudis</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/85 md:flex">
          <a href="#about" className="transition-colors hover:text-primary">About</a>
          <a href="#doner" className="transition-colors hover:text-primary">Doner</a>
          <a href="#burgers" className="transition-colors hover:text-primary">Burgers</a>
          <a href="#visit" className="transition-colors hover:text-primary">Visit</a>
        </nav>
        <a
          href="https://order.brudis-db.co.uk/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
        >
          Order Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {heroVideo.url ? (
          <video
            src={heroVideo.url}
            poster={smashBurgerFlag.url}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover opacity-70"
          />
        ) : (
          <img
            src={smashBurgerFlag.url}
            alt=""
            className="h-full w-full object-cover opacity-70"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pb-20 pt-40">
        <p className="eyebrow">Welcome to Brudis</p>
        <h1 className="heading-xl mt-4 max-w-3xl text-5xl text-foreground sm:text-6xl md:text-7xl">
          Germany's finest doner.{" "}
          <span className="text-primary">London's best smash burgers.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Born in Hannover. Built on real ingredients, traditional German recipes, and house-made
          sauces — served fresh every single day.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="https://order.brudis-db.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
          >
            Order Now
          </a>
          <a
            href="#about"
            className="rounded-full border border-border px-7 py-3.5 text-base font-semibold text-foreground/90 backdrop-blur transition-colors hover:bg-foreground/5"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-display text-4xl text-primary">{value}</span>
      <span className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">{label}</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src={shop.url}
            alt="Brudis trays loaded with smash burgers and curly fries"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
          />
        </div>
        <div>
          <p className="eyebrow">About Brudis</p>
          <h2 className="heading-xl mt-3 text-4xl text-foreground sm:text-5xl">
            From the streets of Hannover to the heart of London.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              For years, German doner has been a staple of street food culture across Germany. We
              built Brudis on a simple idea: bring that same experience to the UK without
              compromising on quality, freshness, or flavour.
            </p>
            <p>
              Every product we serve is prepared with care — premium ingredients, fresh salad,
              freshly baked bread, and our signature in-house sauces made daily. From the moment
              you walk through our doors, our goal is simple: serve food we'd proudly serve to our
              own family.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat value="100%" label="Halal Beef" />
            <Stat value="Daily" label="Fresh Prep" />
            <Stat value="DE→UK" label="Authentic" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Doner() {
  return (
    <section id="doner" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <p className="eyebrow">Authentic German Doner</p>
          <h2 className="heading-xl mt-3 text-4xl text-foreground sm:text-5xl">
            The taste millions enjoy every day — now served on your street.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Our doner is sourced directly from Germany, bringing the authentic flavour, texture,
              and quality that made German doner famous throughout Europe.
            </p>
            <p>
              Carefully selected cuts of meat and traditional German recipes. Every skewer is cooked
              fresh throughout the day to ensure maximum flavour, tenderness, and quality in every
              bite — chicken or beef, the way it was meant to be enjoyed.
            </p>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-foreground/90 sm:grid-cols-2">
            {[
              "Imported directly from Germany",
              "Traditional recipes",
              "Carved fresh, all day",
              "Chicken & beef options",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md">
            <img
              src={donerSpit.url}
              alt="Chicken doner being carved fresh from the vertical spit"
              loading="lazy"
              className="aspect-[5/6] w-full rounded-2xl object-cover shadow-[var(--shadow-glow)]"
            />
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-primary/15 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Freshness() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Freshness Comes First</p>
          <h2 className="heading-xl mt-3 text-4xl text-foreground sm:text-5xl">
            Not a promise. A daily routine.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Salads prepared fresh every day. Bread served fresh. Sauces made in-house. We never cut
            corners on quality because our customers deserve the very best every visit.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
            <img
              src={salads.url}
              alt="Fresh tomatoes, pomegranate, cucumber, lettuce and herbs prepared each morning"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-6">
              <h3 className="font-display text-2xl text-primary">Fresh Salads</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Crisp lettuce, ripe tomatoes, pomegranate and herbs — chopped fresh each morning.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
            <img
              src={donerCombo.url}
              alt="Brudis doner sandwich with Mischmasch fritz-kola and house sauce"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-6">
              <h3 className="font-display text-2xl text-primary">House Sauces</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our signature garlic, chilli and burger sauces — blended in-house, made daily.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
            <img
              src={smashBurgerFlag.url}
              alt="Brudis smash burger with cheese and onions on a sesame bun"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-6">
              <h3 className="font-display text-2xl text-primary">Made to Order</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every burger smashed on the grill the moment you order. Nothing sits, nothing waits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Doner2() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src={donerSandwich.url}
            alt="Brudis doner sandwich loaded with beef, salad and house sauces"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
          />
        </div>
        <div>
          <p className="eyebrow">The Brudis Doner</p>
          <h2 className="heading-xl mt-3 text-4xl text-foreground sm:text-5xl">
            Stacked high. Bursting with flavour. Made right.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Tender carved meat, fresh salad, pickled cabbage and our signature white and chilli
              sauces — layered into a freshly baked bread that holds it all together.
            </p>
            <p>
              Pair it with crispy seasoned fries and an ice-cold fritz-kola for the full German
              doner experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Burgers() {
  return (
    <section id="burgers" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src={smashBurger.url}
            alt="Brudis double smash burger with melted cheese, bacon and crispy onions"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-glow)]"
          />
          <div className="absolute -left-4 -top-4 -z-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
        </div>
        <div>
          <p className="eyebrow">Smash Burgers, Done Properly</p>
          <h2 className="heading-xl mt-3 text-4xl text-foreground sm:text-5xl">
            No gimmicks. No shortcuts. Just proper smash burgers.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              We use premium halal beef, smashed fresh on the grill for the perfect caramelised
              crust while keeping the inside juicy and tender.
            </p>
            <p>
              Combined with fresh toppings, melted cheese, and our signature sauces — every burger
              is made to order and packed with flavour. The Brudis way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <img
          src={burgerFries.url}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />
      </div>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow">Our Promise</p>
        <h2 className="heading-xl mt-3 text-4xl text-foreground sm:text-5xl">
          Fresh ingredients. Authentic recipes. Real flavour.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          At Brudis, we are committed to serving authentic German doner, quality smash burgers, and
          exceptional customer service every single day. That's the Brudis way.
        </p>
        <p className="mt-6 text-2xl">🔥 🍔 🥙</p>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 sm:p-14">
              <p className="eyebrow">Visit Us</p>
              <h2 className="heading-xl mt-3 text-4xl text-foreground sm:text-5xl">
                Come hungry. Leave a regular.
              </h2>
              <dl className="mt-10 space-y-8">
                <div>
                  <dt className="font-display text-xl text-primary">Address</dt>
                  <dd className="mt-1 text-lg text-foreground">118 High Road, London, N2 9ED</dd>
                </div>
                <div>
                  <dt className="font-display text-xl text-primary">Opening Hours</dt>
                  <dd className="mt-1 text-lg text-foreground">Monday – Sunday · 11am – 11pm</dd>
                </div>
                <div>
                  <dt className="font-display text-xl text-primary">Contact</dt>
                  <dd className="mt-1 text-lg text-foreground">
                    <a href="mailto:info@brudis-db.co.uk" className="hover:text-primary">
                      info@brudis-db.co.uk
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                href="https://www.google.com/maps/search/?api=1&query=118+High+Road+London+N2+9ED"
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
              >
                Get Directions
              </a>
            </div>
            <div className="relative min-h-[320px] lg:min-h-full">
              <img
                src={donerMeal.url}
                alt="Brudis doner with crispy fries and fritz-kola served on a tray"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border">
          <iframe
            title="Brudis location map"
            src="https://www.google.com/maps?q=118+High+Road,+London,+N2+9ED&output=embed"
            className="h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <img src={logo.url} alt="Brudis" width={40} height={40} className="h-10 w-auto" />
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Brudis Doner & Burger. All rights reserved.
        </p>
        <a
          href="mailto:info@brudis-db.co.uk"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          info@brudis-db.co.uk
        </a>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Doner />
      <Freshness />
      <Doner2 />
      <Burgers />
      <Showcase />
      <Visit />
      <Footer />
    </main>
  );
}
