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
    name: "Oil, Angst & Coffee Hoodie",
    price: "$65",
    tag: "Cold Garage Approved",
    image: "/oil-angst-coffee-hoodie.png",
    secondaryImage: "/oil-angst-coffee-hoodie-alt.png",
    imageAlt: "Oil, Angst and Coffee hoodie placeholder",
    description: "Black hoodie placeholder with chest logo detail and oversized back art for cold starts and loud playlists.",
  },
  {
    name: "Elder Emo Garage Sticker Pack",
    price: "$12",
    tag: "New",
    image: "/emo-stickers.png",
    imageAlt: "Elder Emo Garage sticker pack placeholder",
    description: "Vinyl sticker pack placeholder for toolboxes, laptops, helmets, project cars, and bad decisions.",
  },
  {
    name: "Elder Emo Garage Logo Mug",
    price: "$21",
    tag: "Shop Fuel",
    image: "/emo-coffee-mug.png",
    imageAlt: "Oil, Angst and Coffee mug placeholder",
    description: "Black ceramic mug placeholder for coffee while the scan tool judges your choices.",
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
    <main className="relative min-h-screen bg-zinc-950 text-white">
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-center bg-no-repeat bg-contain opacity-10"
        style={{ backgroundImage: "url('/elderemo-logo.png')" }}
      />

      <div className="relative z-10">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
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
                <p className="text-lg font-black uppercase tracking-[0.18em]">Elder Emo</p>
                <p className="-mt-1 text-xs uppercase tracking-[0.35em] text-zinc-400">Garage</p>
              </div>
            </div>

            <nav className="hidden gap-7 md:flex">
              <a href="#merch" className="text-zinc-300 hover:text-white">Merch</a>
              <a href="#videos" className="text-zinc-300 hover:text-white">Videos</a>
              <a href="#about" className="text-zinc-300 hover:text-white">About</a>
              <a href="#contact" className="text-zinc-300 hover:text-white">Contact</a>
            </nav>
          </div>
        </header>

        <section className="relative overflow-hidden px-5 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.22),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-100">
                <Sparkles className="h-4 w-4" />
                Merch, wrenching, and nostalgia with oil under the eyeliner
              </div>

              <h1 className="text-5xl font-black leading-tight md:text-7xl">
                Keep the cars alive.
                <span className="block text-red-500">Keep the playlist louder.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                Elder Emo Garage is a home for DIY repairs, project-car chaos, garage humor,
                videos, and merch for people who still know every lyric and every torque spec.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-2xl">
                  <a href="#merch"><ShoppingCart className="mr-2 h-5 w-5" /> Shop Merch</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-2xl text-white">
                  <a href="#videos"><PlayCircle className="mr-2 h-5 w-5" /> Watch Videos</a>
                </Button>
              </div>
            </motion.div>

            <div className="rounded-[2rem] border border-white/10 bg-zinc-900/90 p-8 shadow-2xl">
              <div className="mb-6 flex h-24 w-24 items-center justify-center overflow-visible">
                <img
                  src="/elderemo-menu-logo.png"
                  alt="Elder Emo Garage logo"
                  className="max-h-[100%] max-w-[100%] object-contain"
                />
              </div>
              <p className="text-sm uppercase tracking-[0.35em] text-red-300">Latest Vibe</p>
              <h2 className="mt-3 text-3xl font-black">DIY, diagnostics, and doomed project cars.</h2>
              <p className="mt-4 text-zinc-400">
                Drop a featured video, product photo, or hero image here once your channels and merch are ready.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-4 px-5 pb-16 md:grid-cols-3">
          {[
            {
              title: "Real Garage Content",
              text: "Repairs, mistakes, wins, diagnostics, and lessons from the floor jack trenches.",
              Icon: Wrench,
            },
            {
              title: "Merch Drops",
              text: "Limited-run designs for people who still refuse to grow out of the playlist.",
              Icon: Flame,
            },
            {
              title: "Community First",
              text: "A home for DIY mechanics, aging scene kids, and anyone keeping old machines alive.",
              Icon: ShieldCheck,
            },
          ].map(({ title, text, Icon }) => (
            <Card key={title} className="border-white/10 bg-white/[0.06]">
              <CardContent className="p-6">
                <Icon className="mb-4 h-8 w-8 text-red-500" />
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{text}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section id="merch" className="px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">Merch</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Shop the garage wall.</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {products.map((product) => (
                <Card key={product.name} className="overflow-hidden border-white/10 bg-zinc-900/90">
                  <CardContent className="p-5">
                    {product.shopUrl ? (
                      <a
                        href={product.shopUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group relative mb-5 flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-4 transition hover:-translate-y-1 hover:border-red-500/50"
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
                            className="absolute bottom-3 right-3 h-20 w-16 rounded-xl border border-white/15 bg-black object-cover shadow-xl shadow-black/40"
                          />
                        ) : null}
                        <span className="absolute bottom-3 left-3 rounded-full bg-red-600 px-3 py-1 text-xs font-black uppercase text-white opacity-0 shadow-lg shadow-black/40 transition group-hover:opacity-100">
                          View Product
                        </span>
                      </a>
                    ) : (
                      <div className="relative mb-5 flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-4">
                        <img
                          src={product.image}
                          alt={product.imageAlt}
                          className="max-h-full max-w-full object-contain"
                        />
                        {product.secondaryImage ? (
                          <img
                            src={product.secondaryImage}
                            alt="Alternate Oil, Angst and Coffee hoodie placeholder"
                            className="absolute bottom-3 right-3 h-20 w-16 rounded-xl border border-white/15 bg-black object-cover shadow-xl shadow-black/40"
                          />
                        ) : null}
                      </div>
                    )}
                    <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase">
                      {product.tag}
                    </span>
                    <h3 className="mt-5 text-xl font-black">{product.name}</h3>
                    <p className="mt-2 font-black text-red-400">{product.price}</p>
                    <p className="mt-3 min-h-24 text-sm leading-6 text-zinc-400">{product.description}</p>
                    <Button asChild={Boolean(product.shopUrl)} className="mt-5 w-full rounded-2xl">
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

        <section id="videos" className="bg-black/90 px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-sm font-bold uppercase tracking-[0.35em] text-red-500">Video Hub</p>
            <h2 className="mt-3 text-center text-4xl font-black md:text-5xl">Watch the latest.</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {videos.map((video) => {
                const Icon = video.icon;
                return (
                  <Card key={video.title} className="border-white/10 bg-zinc-950/95">
                    <CardContent className="p-6">
                      <Icon className="mb-5 h-10 w-10 text-red-500" />
                      <h3 className="text-2xl font-black">{video.title}</h3>
                      <p className="mt-3 min-h-20 text-sm leading-6 text-zinc-400">{video.description}</p>
                      <Button asChild className="mt-6 w-full rounded-2xl">
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
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">About</p>
            <h2 className="mt-3 text-4xl font-black">For people fixing old cars with newer back pain.</h2>
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
