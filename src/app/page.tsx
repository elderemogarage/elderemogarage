"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  PlayCircle,
  Camera,
  Music,
  Video,
  Wrench,
  Mail,
  Flame,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Product = {
  name: string;
  price: string;
  tag: string;
  image: string;
  imageAlt: string;
  description: string;
  secondaryImage?: string;
  shopUrl?: string;
};

const products: Product[] = [
  {
    name: "Elder Emo Garage Logo T-Shirt",
    price: "$32",
    tag: "Logo Drop",
    image: "/emo-t-shirt.png",
    imageAlt: "Elder Emo Garage logo t-shirt placeholder",
    shopUrl: "https://elderemogarage-shop.fourthwall.com/products/eeg-tee",
    description: "Soft black tee placeholder with front chest art and full-size Elder Emo Garage back print.",
  },
  {
    name: "EEG Missing 10mm Socket Tee",
    price: "See Shop",
    tag: "New Tee",
    image: "/eeg-missing-10mm-tee.png",
    imageAlt: "Elder Emo Garage Missing 10mm Socket tee placeholder",
    shopUrl: "https://elderemogarage-shop.fourthwall.com/products/eeg-missing-10mm-t-shirt",
    description: "Black tee for the socket that vanished, the wrench set that knows too much, and the project that started simple.",
  },
  {
    name: "Oil, Angst & Coffee Hoodie",
    price: "$65",
    tag: "Cold Garage Approved",
    image: "/oil-angst-coffee-hoodie.png",
    secondaryImage: "/oil-angst-coffee-hoodie-alt.png",
    imageAlt: "Oil, Angst and Coffee hoodie placeholder",
    shopUrl: "https://elderemogarage-shop.fourthwall.com/products/elder-emo-garage-oil-angst-coffee-hoodie",
    description: "Black hoodie placeholder with chest logo detail and oversized back art for cold starts and loud playlists.",
  },
  {
    name: "Elder Emo Garage Sticker Pack",
    price: "$12",
    tag: "New",
    image: "/emo-stickers.png",
    imageAlt: "Elder Emo Garage sticker pack placeholder",
    shopUrl: "https://elderemogarage-shop.fourthwall.com/products/eeg-sticker-pack",
    description: "Vinyl sticker pack placeholder for toolboxes, laptops, helmets, project cars, and bad decisions.",
  },
  {
    name: "Elder Emo Garage Logo Mug",
    price: "$21",
    tag: "Shop Fuel",
    image: "/emo-coffee-mug.png",
    imageAlt: "Oil, Angst and Coffee mug placeholder",
    shopUrl: "https://elderemogarage-shop.fourthwall.com/products/elder-emo-garage-oil-angst-coffee-mug",
    description: "Black ceramic mug placeholder for coffee while the scan tool judges your choices.",
  },
  {
    name: "EEG Trucker Cap",
    price: "See Shop",
    tag: "New",
    image: "/eeg-trucker-cap.png",
    imageAlt: "Elder Emo Garage trucker cap placeholder",
    shopUrl: "https://elderemogarage-shop.fourthwall.com/products/eeg-trucker-cap",
    description: "Trucker cap placeholder for keeping the sun out of your eyes while the engine bay ruins your afternoon.",
  },
  {
    name: "EEG Mechanic's Shirt",
    price: "$75",
    tag: "Shop Uniform",
    image: "/emo-mechanic-shirt.png",
    imageAlt: "Elder Emo Garage mechanic's shirt placeholder",
    shopUrl: "https://elderemogarage-shop.fourthwall.com/products/eeg-mech-shirt",
    description: "Button-up mechanic's shirt placeholder with chest detail and full Elder Emo Garage back art.",
  },
];

const videos = [
  {
    title: "YouTube",
    icon: Video,
    url: "https://youtube.com/@elderemogarage",
    description: "Build videos, diagnostics, repairs, and long-form garage sessions.",
  },
  {
    title: "TikTok",
    icon: Music,
    url: "https://tiktok.com/@elderemogarage",
    description: "Quick clips, parts fails, before-and-after chaos, and short-form garage goblin behavior.",
  },
  {
    title: "Instagram",
    icon: Camera,
    url: "https://instagram.com/elderemogarage",
    description: "Photos, reels, drops, behind-the-scenes shots, and garage life.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-center bg-no-repeat bg-contain opacity-[0.06]"
        style={{ backgroundImage: "url('/elderemo-logo.png')" }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(185,28,28,0.16),transparent_32%),linear-gradient(115deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_22px)] opacity-80" />

      <div className="relative z-10">
        <header className="sticky top-0 z-50 border-b border-red-950/60 bg-black/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center overflow-visible">
                <img
                  src="/elderemo-menu-logo.png"
                  alt="Elder Emo Garage logo"
                  className="max-h-[100%] max-w-[100%] object-contain"
                />
              </div>
              <div>
                <p className="font-gothic text-2xl text-zinc-100">Elder Emo</p>
                <p className="-mt-1 text-xs uppercase tracking-[0.35em] text-red-500">Garage</p>
              </div>
            </div>

            <nav className="hidden gap-7 text-sm font-black uppercase tracking-[0.18em] md:flex">
              <a href="#merch" className="text-zinc-300 hover:text-red-400">Merch</a>
              <a href="#videos" className="text-zinc-300 hover:text-red-400">Videos</a>
              <a href="#about" className="text-zinc-300 hover:text-red-400">About</a>
              <a href="#contact" className="text-zinc-300 hover:text-red-400">Contact</a>
            </nav>
          </div>
        </header>

        <section className="relative min-h-[calc(100vh-96px)] overflow-hidden px-5 py-24">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{ backgroundImage: "url('/goth-road-hero.png')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94),rgba(0,0,0,0.66)_42%,rgba(0,0,0,0.18)),linear-gradient(0deg,rgba(5,5,5,1),transparent_28%,rgba(5,5,5,0.35))]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505] to-transparent" />

          <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-center">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 border border-red-500/40 bg-black/60 px-4 py-2 text-sm font-black uppercase tracking-[0.22em] text-red-100 shadow-lg shadow-red-950/30">
                <Sparkles className="h-4 w-4" />
                Goth garage gospel for the permanently tuned-out
              </div>

              <h1 className="font-gothic text-6xl leading-[0.88] text-zinc-100 drop-shadow-2xl sm:text-7xl md:text-8xl">
                Dead hearts.
                <span className="block text-red-600">Live engines.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-200">
                Elder Emo Garage is DIY repair, blacktop nostalgia, oil-stained merch,
                and loud music for people keeping old machines alive by spite and caffeine.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-none bg-red-700 font-black uppercase tracking-[0.15em] hover:bg-red-600">
                  <a href="#merch"><ShoppingCart className="mr-2 h-5 w-5" /> Shop Merch</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-none border-red-900/70 bg-black/40 font-black uppercase tracking-[0.15em] text-white hover:bg-red-950/40">
                  <a href="#videos"><PlayCircle className="mr-2 h-5 w-5" /> Watch Videos</a>
                </Button>
              </div>

              <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                {["Oil", "Angst", "Caffeine"].map((word) => (
                  <div key={word} className="border border-white/10 bg-black/55 px-4 py-3 shadow-xl shadow-black/30">
                    <p className="font-typewriter text-xs uppercase tracking-[0.25em] text-zinc-500">Runs on</p>
                    <p className="font-gothic text-3xl text-red-500">{word}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-4 px-5 py-16 md:grid-cols-3">
          {[
            {
              title: "Midnight Diagnostics",
              text: "Repairs, mistakes, wins, and lessons from the floor-jack trenches after the streetlights come on.",
              Icon: Wrench,
            },
            {
              title: "Oil-Stained Merch",
              text: "Black cotton, red ink, sticker-bomb energy, and shop goods that look better a little haunted.",
              Icon: Flame,
            },
            {
              title: "Scene-Kid Service Bay",
              text: "A home for DIY mechanics, aging venue kids, and anyone keeping old machines alive.",
              Icon: ShieldCheck,
            },
          ].map(({ title, text, Icon }) => (
            <Card key={title} className="rounded-none border-red-950/50 bg-black/70 shadow-xl shadow-black/30">
              <CardContent className="p-6">
                <Icon className="mb-4 h-8 w-8 text-red-500" />
                <h3 className="font-gothic text-3xl text-zinc-100">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{text}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section id="merch" className="relative px-5 py-20">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-900/80 to-transparent" />
          <div className="mx-auto max-w-7xl">
            <p className="font-typewriter text-sm uppercase tracking-[0.35em] text-red-500">Merch</p>
            <h2 className="font-gothic mt-3 text-5xl text-zinc-100 md:text-6xl">Shop the garage wall.</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {products.map((product) => (
                <Card key={product.name} className="overflow-hidden rounded-none border-red-950/50 bg-zinc-950/95 shadow-xl shadow-black/30">
                  <CardContent className="p-5">
                    {product.shopUrl ? (
                      <a
                        href={product.shopUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group relative mb-5 flex aspect-square items-center justify-center overflow-hidden border border-white/10 bg-black/70 p-4 transition hover:-translate-y-1 hover:border-red-500/50"
                      >
                        <img
                          src={product.image}
                          alt={product.imageAlt}
                          className="max-h-full max-w-full object-contain transition group-hover:scale-105"
                        />
                        {product.secondaryImage ? (
                          <img
                            src={product.secondaryImage}
                            alt="Alternate Oil, Angst and Coffee hoodie placeholder"
                            className="absolute bottom-3 right-3 h-20 w-16 border border-white/15 bg-black object-cover shadow-xl shadow-black/40"
                          />
                        ) : null}
                        <span className="absolute bottom-3 left-3 bg-red-700 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white opacity-0 shadow-lg shadow-black/40 transition group-hover:opacity-100">
                          View Product
                        </span>
                      </a>
                    ) : (
                      <div className="relative mb-5 flex aspect-square items-center justify-center overflow-hidden border border-white/10 bg-black/70 p-4">
                        <img
                          src={product.image}
                          alt={product.imageAlt}
                          className="max-h-full max-w-full object-contain"
                        />
                        {product.secondaryImage ? (
                          <img
                            src={product.secondaryImage}
                            alt="Alternate Oil, Angst and Coffee hoodie placeholder"
                            className="absolute bottom-3 right-3 h-20 w-16 border border-white/15 bg-black object-cover shadow-xl shadow-black/40"
                          />
                        ) : null}
                      </div>
                    )}
                    <span className="bg-red-700 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em]">
                      {product.tag}
                    </span>
                    <h3 className="mt-5 text-2xl font-black uppercase leading-tight text-zinc-100">{product.name}</h3>
                    <p className="mt-2 font-black text-red-400">{product.price}</p>
                    <p className="mt-3 min-h-24 text-sm leading-6 text-zinc-400">{product.description}</p>
                    <Button asChild={Boolean(product.shopUrl)} className="mt-5 w-full rounded-none bg-red-700 font-black uppercase tracking-[0.12em] hover:bg-red-600">
                      {product.shopUrl ? (
                        <a href={product.shopUrl} target="_blank" rel="noreferrer">
                          <ShoppingCart className="mr-2 h-4 w-4" /> Shop Now
                        </a>
                      ) : (
                        <span className="inline-flex items-center justify-center">
                          <ShoppingCart className="mr-2 h-4 w-4" /> Add Shop Link
                        </span>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="videos" className="border-y border-red-950/50 bg-black/90 px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="font-typewriter text-center text-sm uppercase tracking-[0.35em] text-red-500">Video Hub</p>
            <h2 className="font-gothic mt-3 text-center text-5xl text-zinc-100 md:text-6xl">Watch the latest.</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {videos.map((video) => {
                const Icon = video.icon;
                return (
                  <Card key={video.title} className="rounded-none border-white/10 bg-zinc-950/95">
                    <CardContent className="p-6">
                      <Icon className="mb-5 h-10 w-10 text-red-500" />
                      <h3 className="font-gothic text-4xl text-zinc-100">{video.title}</h3>
                      <p className="mt-3 min-h-20 text-sm leading-6 text-zinc-400">{video.description}</p>
                      <Button asChild className="mt-6 w-full rounded-none bg-red-700 font-black uppercase tracking-[0.12em] hover:bg-red-600">
                        <a href={video.url} target="_blank" rel="noreferrer">
                          <PlayCircle className="mr-2 h-4 w-4" /> Open Channel
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="px-5 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-typewriter text-sm uppercase tracking-[0.35em] text-red-500">About</p>
            <h2 className="font-gothic mt-3 text-5xl text-zinc-100 md:text-6xl">For people fixing old cars with newer back pain.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Elder Emo Garage blends DIY automotive work, creator content, and merch into one loud corner of the internet.
              It is for people who still love the music, still love the machines, and still believe the garage is cheaper than therapy.
            </p>
          </div>
        </section>

        <footer id="contact" className="bg-black/90 px-5 py-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-zinc-500">© 2026 Elder Emo Garage. All rights reserved.</p>
            <a className="text-zinc-300 hover:text-white" href="mailto:hello@elderemogarage.com">
              <Mail className="mr-2 inline h-4 w-4" />
              hello@elderemogarage.com
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
