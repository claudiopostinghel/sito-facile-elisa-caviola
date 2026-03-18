export const business = {
  nome: "Elisa Caviola",
  nomeCorto: "EC",
  ruolo: "Graphic Designer",
  tel: "+39 347 4489051",
  telFormatted: "+393474489051",
  citta: "Trento",
  email: "",
  instagram: "https://www.instagram.com/elisa_caviola/",
  whatsapp: "https://wa.me/393474489051",

  nav: [
    { label: "Lavori", href: "#portfolio" },
    { label: "Chi Sono", href: "#about" },
    { label: "Servizi", href: "#servizi" },
    { label: "Processo", href: "#processo" },
    { label: "Contatti", href: "#contatto" },
  ],

  descrizione: "Graphic designer freelance a Trento. Brand identity, packaging design, fotografia creativa e modellazione 3D.",

  headline: "Creo identità che lasciano il segno",
  subtitle: "Graphic Designer · Trento",

  bio: "Dopo aver frequentato l'indirizzo di arti figurative al liceo artistico, mi sono laureata all'Accademia di Belle Arti di Trento in Graphic Design. Ho scoperto fin dal primo anno di università quanto la grafica mi appassioni e quanto sia importante per comunicare in modo chiaro e diretto. Negli ultimi anni ho lavorato e studiato contemporaneamente, maturando la convinzione che l'unico lavoro che mi avrebbe fatta sentire realizzata sarebbe stato quello di grafica.",

  citazione: "Ho lavorato tanto, per poi lavorare e studiare contemporaneamente per potermi permettere questo risultato. Anche se ciò che conta non è la fine, ma il viaggio.",

  formazione: [
    { anno: "2016–2021", titolo: "Liceo Artistico A. Vittoria", desc: "Indirizzo Arti Figurative, Trento" },
    { anno: "2021–2025", titolo: "Accademia di Belle Arti", desc: "Laurea in Graphic Design, Trento" },
  ],

  software: [
    { nome: "Photoshop", categoria: "Adobe" },
    { nome: "Illustrator", categoria: "Adobe" },
    { nome: "InDesign", categoria: "Adobe" },
    { nome: "After Effects", categoria: "Adobe" },
    { nome: "Blender", categoria: "3D" },
    { nome: "Nuke", categoria: "Compositing" },
  ],

  servizi: [
    {
      titolo: "Brand Identity",
      desc: "Loghi, monogrammi e immagine coordinata. Dall'ideazione alla segnaletica.",
      icon: "brand",
    },
    {
      titolo: "Packaging Design",
      desc: "Fustelle, etichette e confezioni. Esperienza con carte speciali Fedrigoni.",
      icon: "packaging",
    },
    {
      titolo: "Fotografia Creativa",
      desc: "Progetti fotografici artistici e commerciali con post-produzione avanzata.",
      icon: "foto",
    },
    {
      titolo: "Modellazione 3D & Motion",
      desc: "Rendering realistici con Blender e animazioni promozionali con After Effects.",
      icon: "3d",
    },
  ],

  processo: [
    { step: "01", titolo: "Ascolto", desc: "Capisco le tue esigenze, il tuo brand e il messaggio che vuoi comunicare." },
    { step: "02", titolo: "Concept", desc: "Ricerco, schizzo e sviluppo le prime idee creative su carta e in digitale." },
    { step: "03", titolo: "Design", desc: "Trasformo il concept in un progetto grafico completo e curato nei dettagli." },
    { step: "04", titolo: "Consegna", desc: "Ti consegno tutti i file pronti per la stampa o il digitale." },
  ],

  progetti: [
    {
      id: "teatro-sociale",
      titolo: "Teatro Sociale di Trento",
      categoria: "Brand Identity",
      tag: "branding",
      anno: "2024",
      desc: "Nuova identità visiva completa: marchio, poster, stendardi, banner, segnaletica interna, badge staff e abbigliamento.",
      immagini: ["teatro-poster-01.jpeg", "teatro-banner.jpeg", "teatro-installazione.jpeg", "teatro-segnaletica.jpeg", "teatro-badge.jpeg", "teatro-logo.jpg", "teatro-poster-02.jpg", "teatro-colonnina.jpg", "teatro-billboard.jpg"],
    },
    {
      id: "african-spirit",
      titolo: "African Spirit",
      categoria: "Packaging Design",
      tag: "packaging",
      anno: "2023",
      desc: "Brand identity e packaging per cioccolato Forastero. Tre varianti (mango, fondente, papaya), etichette trilingue, carta Fedrigoni Constellation Snow.",
      immagini: ["african-spirit-mango.png", "african-spirit-fondente.png", "african-spirit-papaya.png", "african-spirit-mockup-01.jpeg", "african-spirit-mockup-02.jpeg", "african-spirit-mockup-03.jpg", "african-spirit-mockup-04.jpg"],
    },
    {
      id: "zeitgeist",
      titolo: "Zeitgeist",
      categoria: "Fotografia",
      tag: "foto",
      anno: "2022",
      desc: "Progetto fotografico sulle dipendenze attraverso nature morte reinterpretate. Lo spirito del tempo catturato in immagini.",
      immagini: ["zeitgeist-01.jpeg", "zeitgeist-02.jpeg", "zeitgeist-03.jpeg"],
    },
    {
      id: "val-di-cembra",
      titolo: "Strada del Vino Val di Cembra",
      categoria: "Brand Identity",
      tag: "branding",
      anno: "2023",
      desc: "Logotipo per la strada del vino in Val di Cembra, utilizzabile anche per cartelli stradali.",
      immagini: ["valdicembra-01.jpeg", "valdicembra-mockup.jpeg"],
    },
    {
      id: "monogrammi",
      titolo: "Monogrammi E.C.",
      categoria: "Brand Identity",
      tag: "branding",
      anno: "2023",
      desc: "Quattro monogrammi con iniziali E.C. per attività diverse: studio legale, veterinario, ambientalista, architettura.",
      immagini: ["monogrammi-overview.jpeg", "monogramma-01.jpeg", "monogramma-02.jpeg"],
    },
    {
      id: "infusion",
      titolo: "IN-fusion",
      categoria: "Packaging Design",
      tag: "packaging",
      anno: "2022",
      desc: "Restyling packaging per infusi alla malva. Fustella quadrata, target parafarmaceutico.",
      immagini: ["infusion-01.jpeg", "infusion-02.jpeg", "infusion-mockup.jpeg"],
    },
    {
      id: "trofeo-3d",
      titolo: "Trofeo Sportivo 3D",
      categoria: "3D",
      tag: "3d",
      anno: "2023",
      desc: "Trofeo per gara sportiva, modellazione 3D con rendering realistico in Blender.",
      immagini: ["trofeo-3d-01.jpeg", "trofeo-3d-02.jpeg", "trofeo-3d-03.jpg", "trofeo-3d-04.jpg"],
    },
    {
      id: "caramelle-3d",
      titolo: "Caramelle 3D",
      categoria: "3D / Motion",
      tag: "3d",
      anno: "2023",
      desc: "Marchio di caramelle: dalla scritta del gusto alla forma del frutto. Animazione pubblicitaria in Blender.",
      immagini: ["caramelle-3d.jpeg", "caramelle-3d-02.jpg"],
    },
    {
      id: "animazioni",
      titolo: "Animazioni",
      categoria: "Motion Design",
      tag: "3d",
      anno: "2023/24",
      desc: "Esempio di una delle animazioni realizzate tramite After Effects e Nuke.",
      immagini: [],
    },
  ],

  ctaPrimary: "Parliamo del tuo progetto",
  ctaSecondary: "Scopri i lavori",
};
