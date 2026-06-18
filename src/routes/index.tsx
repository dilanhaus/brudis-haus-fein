import { createFileRoute } from "@tanstack/react-router";
import heroDoner from "@/assets/hero-doner.jpg";
import donerSpit from "@/assets/doner-spit.jpg";
import freshSalads from "@/assets/fresh-salads.jpg";
import smashBurger from "@/assets/smash-burger.jpg";
import shopInterior from "@/assets/shop-interior.jpg";
import grillAction from "@/assets/grill-action.jpg";
import sauces from "@/assets/sauces.jpg";
import flame from "@/assets/flame.png";

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
    ],
  }),
  component: Index,
});

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-2">
          <img src={flame} alt="" width={32} height={32} className="h-8 w-8" />
          <span className="font-display text-2xl tracking-wide text-foreground">Brudis</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/80 md:flex">
          <a href="#about" className="transition-colors hover:text-primary">About</a>
          <a href="#doner" className="transition-colors hover:text-primary">Doner</a>
          <a href="#burgers" className="transition-colors hover:text-primary">Burgers</a>
          <a href="#visit" className="transition-colors hover:text-primary">Visit</a>
        </nav>
        <a
          href="#visit"
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
        <img
          src={heroDoner}
          alt="Freshly carved authentic German doner kebab on a wooden board"
          width={1600}
          height={1100}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
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
            href="#visit"
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
            src={shopInterior}
            alt="Inside the Brudis takeaway shop in London"
            width={1600}
            height={1100}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
          />
          <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rotate-6 rounded-2xl border border-primary/40 bg-primary/10 backdrop-blur sm:block" />
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
              src={donerSpit}
              alt="Vertical doner kebab spit with golden seasoned meat over flame"
              width={1200}
              height={1400}
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
              src={freshSalads}
              alt="Trays of freshly chopped salads, tomatoes, onions and herbs"
              width={1400}
              height={1100}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-6">
              <h3 className="font-display text-2xl text-primary">Fresh Salads</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Crisp lettuce, ripe tomatoes, pickled onions and herbs — chopped fresh each morning.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
            <img
              src={sauces}
              alt="House-made signature sauces in small bowls"
              width={1400}
              height={1000}
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
              src={grillAction}
              alt="Smash burger patty caramelising on a flat-top grill"
              width={1400}
              height={1100}
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

function Burgers() {
  return (
    <section id="burgers" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src={smashBurger}
            alt="Double smash burger with melted cheese and brioche bun"
            width={1400}
            height={1400}
            loading="lazy"
            className="aspect-square w-full rounded-2xl object-cover shadow-[var(--shadow-glow)]"
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

function Promise() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <img src={flame} alt="" width={64} height={64} className="mx-auto h-14 w-14" />
        <p className="eyebrow mt-6">Our Promise</p>
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
              <iframe
                title="Brudis location map"
                src="https://www.google.com/maps?q=118+High+Road,+London,+N2+9ED&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
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
          <img src={flame} alt="" width={24} height={24} className="h-6 w-6" />
          <span className="font-display text-lg">Brudis</span>
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
      <Burgers />
      <Promise />
      <Visit />
      <Footer />
    </main>
  );
}
