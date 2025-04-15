import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="p-6 flex justify-between items-center shadow-md">
        <img src="/logo.png" alt="Three Capital Partners Logo" className="h-12" />
        <nav className="space-x-6">
          <a href="#about" className="hover:underline">À propos</a>
          <a href="#investments" className="hover:underline">Nos investissements</a>
          <a href="#opportunities" className="hover:underline">Opportunités</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Investir intelligemment dans l'immobilier résidentiel</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">Three Capital Partners sélectionne, transforme et valorise des biens immobiliers à fort potentiel.</p>
        <a href="#contact" className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800">Nous contacter</a>
      </section>

      {/* À propos */}
      <section id="about" className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Qui sommes-nous ?</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Three Capital Partners est une société d'investissement immobilier fondée par trois associés passionnés. Notre objectif est simple : identifier des biens sous-cotés, leur redonner de la valeur, et créer des opportunités durables pour nos partenaires.
        </p>
      </section>

      {/* Nos investissements */}
      <section id="investments" className="bg-gray-100 px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Nos investissements</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1,2,3].map((item) => (
            <div key={item} className="bg-white shadow rounded-lg p-4">
              <div className="h-40 bg-gray-300 mb-4 rounded" />
              <h3 className="text-xl font-semibold">Avenue Paul Hymans</h3>
              <p className="text-gray-600">Appartement 2 chambres rénové à Woluwe. Rendement brut estimé : 5,2%</p>
            </div>
          ))}
        </div>
      </section>

      {/* Opportunités d'investissement */}
      <section id="opportunities" className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Investir avec nous</h2>
        <p className="text-gray-700 text-lg mb-6">
          Nous accueillons des partenaires privés souhaitant investir dans des projets concrets et rentables. Vous souhaitez rejoindre l’aventure ? Laissez-nous vos coordonnées et nous vous recontacterons.
        </p>
        <form className="flex flex-col md:flex-row gap-4">
          <input type="email" placeholder="Votre adresse e-mail" className="border border-gray-300 px-4 py-2 rounded w-full" />
          <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">Je suis intéressé</button>
        </form>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-50 px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
        <p className="text-gray-700 mb-2">contact@threecapital.be</p>
        <p className="text-gray-700 mb-2">+32 485 00 00 00</p>
        <p className="text-gray-700">5, chemin de la Tayette – 1380 Chapelle-Saint-Lambert</p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        © {new Date().getFullYear()} Three Capital Partners. Tous droits réservés.
      </footer>
    </div>
  );
}
