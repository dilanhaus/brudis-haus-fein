import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
const heroVideo = {
  localUrl: "/media/brudis-hero.mp4",
  fallbackUrl:
    "https://id-preview--c2632095-6547-4d0f-9e94-73315ad95f77.lovable.app/__l5e/assets-v1/440a35e8-ec16-4d43-afbd-3267e04c41ba/brudis-hero.mp4",
};
const logo = { url: "/media/brudis-logo.png" };
const shop = { url: "/media/about-brudis.jpg" };
const donerSpit = { url: "/media/doner-spit.jpg" };
const salads = { url: "/media/salads.jpg" };
const donerMeal = { url: "/media/visit-shop.jpg" };
const donerSandwich = { url: "/media/doner-sandwich.jpg" };
const donerCombo = { url: "/media/house-made-sauces.jpg" };
const smashBurgerFlag = { url: "/media/made-fresh-to-order.jpg" };
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
        {heroVideo.localUrl ? (
          <video
            poster={smashBurgerFlag.url}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover opacity-85"
          >
            <source src={heroVideo.localUrl} type="video/mp4" />
            <source src={heroVideo.fallbackUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={smashBurgerFlag.url}
            alt=""
            className="h-full w-full object-cover opacity-85"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/25 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/35 to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pb-20 pt-40">
        <p className="eyebrow">Welcome to Brudis</p>
        <h1 className="heading-xl mt-4 max-w-3xl text-5xl text-foreground sm:text-6xl md:text-7xl">
          Germany's Finest Doner & Burger.{" "}
          <span className="text-primary block">The best of both worlds.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Born in Hanover. Crafted with authentic German Doner, fresh ingredients, and signature
          house-made sauces —&nbsp;served fresh daily.
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
            alt="Brudis chef carving fresh doner from the vertical spit"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
          />
        </div>
        <div>
          <p className="eyebrow">About Brudis</p>
          <h2 className="heading-xl mt-3 text-4xl text-foreground sm:text-5xl">
            From the streets of Hanover to the heart of London.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              German doner has been a cornerstone of street food culture for decades. Inspired by the
              authentic flavours of Germany, Brudis was created to bring that same experience to
              London — without comprising on quality, freshness, or flavour.{" "}
            </p>
            <p>
              Every meal is prepared using carefully selected ingredients, fresh daily salad, freshly
              baked bread, and our signature house-made sauces. From our authentic German doner to
              our smash burgers, everything is made with the same commitment to consistency and
              quality that defines the Brudis experience.&nbsp;
              <br />
              <br />
              Our philosophy is simple: serve food we would be proud to share with our own family.
              Every ingredient matters, every order is prepared with care, and every customer is
              welcomed as part of the Brudis community.&nbsp;
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat value="100%" label="HALAL" />
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
            Born in Germany. Served at Brudis.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Our doner is imported directly from Germany, bringing the authentic flavour, quality,
              and tradition that made German doner famous across Europe.&nbsp;
            </p>
            <p>
              Made using carefully selected cuts of premium halal meat and traditional German
              recipes, every skewer is cooked fresh throughout the day to deliver the perfect
              balance of flavour, tenderness, and quality. Whether you choose chicken or beef, every
              bite is a true taste of authentic German doner.&nbsp;
              <br />
              <br />
              At Brudis we don't believe in shortcuts. We believe in serving doner the way it should
              be — fresh, authentic, and full of flavour.&nbsp;
            </p>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-foreground/90 sm:grid-cols-2">
            {[
              "Imported directly from Germany",
              "Authentic Germany doner recipes",
              "Freshly carved throughout the day",
              "Available in Chicken & Beef",
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
                Freshness is at the heart of every meal we serve. Our salads are prepared fresh daily
                using quality ingredients to deliver the crispness, flavour, and freshness that
                authentic German doner is known for.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
          <img
            src={donerCombo.url}
            alt="Tray of Brudis house-made sauces in individual pots including garlic, chilli, curry, cocktail, Joppie and chilli cheese"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
            <div className="p-6">
              <h3 className="font-display text-2xl text-primary">House-MADE Sauces</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                From our signature garlic, chilli, curry, cocktail, and exclusive Brudis sauces,
                every sauce is prepared in-house to deliver the flavours our customers love. We also
                import some of Germany's most popular favourites, including authentic Joppie sauce
                and our famous chilli cheese sauce, bringing a true taste of Germany to every
                meal.&nbsp;
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
            <img
              src={smashBurgerFlag.url}
              alt="Hands holding a freshly made Brudis smash burger with sesame bun, melted cheese, and Brudis flag"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-6">
              <h3 className="font-display text-2xl text-primary">Made FRESH to Order</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every burger is cooked fresh to order using premium 150g halal beef patties, smashed
                on the grill and finished with our signature Brudis seasoning blend for maximum
                flavour. Our authentic German doner is freshly carved and generously stacked, with a
                range of options designed to satisfy every appetite.&nbsp;
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
            Authentic German Doner. Built the Brudis Way.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Freshly carved German doner, crisp salad, freshly baked bread, and our signature
              sauces come together to create the authentic flavour that made German doner
              famous.&nbsp;
            </p>
            <p>
              Imported directly from Germany and prepared using traditional German recipes, our
              doner delivers the same taste, texture, and quality enjoyed across Germany every day.
              One bite and you'll feel like you've been transported back to the streets of
              Germany.&nbsp;
              <br />
              <br />
              Every serving comes with a generous 150g portion of premium doner meat as standard,
              with the option to add even more if you're extra hungry.&nbsp;
              <br />
              <br />
              Whether you prefer your doner in freshly baked bread, a wrap, a lahmacun, a loaded
              platter, or our popular Quick Box for lunch on the go, there's a Brudis doner for
              every appetite.&nbsp;
              <br />
              <br />
              Prepared fresh throughout the day and stacked generously in every serving, it's a
              meal built around authenticity, quality, freshness, and flavour in every bite.&nbsp;
              <br />
              <br />
              Pair it with our seasoned fries and an ice-cold Fritz Kola for the full Brudis
              experience.&nbsp;
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
            Freshly Smashed. Full of Flavour. Unmistakably Brudis.&nbsp;
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Our premium 150g halal beef patties are smashed fresh on the grill, seasoned with our
              signature Brudis seasoning blend, and cooked to create the perfect caramelised crust
              while staying juicy on the inside.&nbsp;
            </p>
            <p>
              Combined with fresh toppings, melted cheese, house-made sauces, and toasted sesame
              seed buns, every burger is prepared fresh to order and built for maximum flavour.&nbsp;
              <br />
              <br />
              From our Classic Cheeseburger to our signature Brudis Burger, every burger is
              crafted with quality ingredients and attention to detail, delivering the flavour and
              consistency our customers have come to expect.&nbsp;
              <br />
              <br />
              And no burger experience is complete without our famous Brudis Fries —&nbsp;perfectly
              seasoned, crispy, golden, and the ideal side to any meal.&nbsp;
              <br />
              <br />
              Simple ingredients. Proper technique. Expectional taste. The Brudis Way.&nbsp;
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
          Born in Hannover. Crafted with authentic German Doner, fresh ingredients, traditional
          German recipes, and house-made sauces — served fresh every single day.
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
                  <dd className="mt-1 space-y-1 text-lg text-foreground">
                    <a
                      href="tel:02081432225"
                      className="inline-flex items-center gap-2 hover:text-primary"
                    >
                      <Phone className="h-5 w-5" aria-hidden="true" />
                      0208 1432 225
                    </a>
                    <a
                      href="https://wa.me/447376800524"
                      className="inline-flex items-center gap-2 hover:text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-[#25D366]"
                        aria-hidden="true"
                      >
                        <path d="M12 2.16c4.97 0 9.02 3.91 9.02 8.74 0 4.83-4.05 8.74-9.02 8.74-1.58 0-3.07-.41-4.37-1.13L2.5 20.5l1.91-4.92C3.47 13.93 2.98 12.5 2.98 11.02 2.98 6.06 6.06 2.16 12 2.16zm4.94 12.5c.22-.62-1.25-1.16-1.65-.27-.37.82-1.48 1.52-2.2 1.43-.72-.09-1.95-.52-2.85-1.68-.82-1.05-1.12-2.17-1.05-2.72.07-.55.75-.93 1.05-1.12.3-.19.58-.09.74.03.15.12.72.86.9 1.09.18.22.22.41.04.62-.18.2-.37.43-.55.6-.18.17-.37.37-.27.55.1.18.46.79 1.05 1.28.72.59 1.39.8 1.74.89.35.1.58-.08.74-.27.16-.19.65-.84.79-1.05.14-.21.27-.18.45-.11.18.07 1.16.55 1.36.66.2.11.33.17.38.26.05.09.03.52-.18 1.14z" />
                      </svg>
                      07376 800524
                    </a>
                    <a href="mailto:info@brudis-db.co.uk" className="block hover:text-primary">
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
                alt="Brudis storefront at 118 High Road, London"
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
