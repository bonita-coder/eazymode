import { useEffect, useState } from "react";
import easyIcon from "../assets/easyc.png";
import afpiLogo from "../assets/image.png";
import kominfoLogo from "../assets/image copy.png";
import isoLogo from "../assets/image copy 2.png";
import lapsLogo from "../assets/image copy 3.png";

const siteUrl = "https://cararestrukturisasipinjamaneasycash.id/";
const publishedDate = "2026-04-27";
const modifiedDate = "2026-04-27";
const whatsappNumber = "08131111418";
const whatsappUrl = "https://wa.me/628131111418";
const partnerLogos = [
  { src: afpiLogo, alt: "Logo AFPI" },
  { src: kominfoLogo, alt: "Logo Kominfo" },
  { src: isoLogo, alt: "Logo sertifikasi ISO" },
  { src: lapsLogo, alt: "Logo LAPS SJK" }
];
const socialLinks = [
  {
    label: "Facebook",
    value: "@EasycashIndonesia",
    href: "https://www.facebook.com/EasycashIndonesia",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.2-1.5 1.5-1.5H17V4.6c-.4-.1-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.2v2.3H8v3.1h2.6v8h2.9Z" />
      </svg>
    )
  },
  {
    label: "Instagram",
    value: "@easycash.ind",
    href: "https://www.instagram.com/easycash.ind",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.45 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 1.8A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Z" />
      </svg>
    )
  },
  {
    label: "Twitter",
    value: "@easycashid",
    href: "https://x.com/easycashid",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.9 4H21l-4.6 5.2L21.8 20h-4.2l-3.3-4.7L10 20H7.9l4.9-5.6L2.6 4h4.3l3 4.3L13.8 4h2.1Zm-1.5 14.2h1.2L7.2 5.7H5.9l11.5 12.5Z" />
      </svg>
    )
  },
  {
    label: "TikTok",
    value: "@easycash.id",
    href: "https://www.tiktok.com/@easycash.id",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.6 3c.2 1.6 1.1 3.1 2.5 4 .9.6 2 .9 3 .9v2.8a8 8 0 0 1-2.9-.5v5.2a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v2.9a2.7 2.7 0 1 0 1.9 2.6V3h2.1Z" />
      </svg>
    )
  }
];

const pageData = {
  nav: [
    { label: "Langkah", href: "#langkah" },
    { label: "Syarat", href: "#syarat" },
    { label: "Dokumen", href: "#dokumen" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#kontak" }
  ],
  heroPoints: [
    "Ajukan restrukturisasi EasyCash lebih awal sebelum tunggakan membesar.",
    "Siapkan bukti kondisi keuangan, identitas, dan dokumen pendukung yang valid.",
    "Pastikan hanya menghubungi kontak resmi, WhatsApp resmi, atau customer service EasyCash."
  ],
  contacts: [
    { label: "WhatsApp", value: whatsappNumber },
    { label: "Email", value: "cs.pinjaman@easycash.id" },
    { label: "Jam layanan", value: "Senin-Minggu, 08.00-20.00" }
  ],
  summary: [
    {
      title: "Hubungi kontak resmi EasyCash",
      text: "Gunakan WhatsApp resmi, email, atau customer service EasyCash untuk mulai konsultasi restrukturisasi."
    },
    {
      title: "Jelaskan kondisi keuangan",
      text: "Sampaikan alasan penurunan kemampuan bayar secara jujur, jelas, dan rinci."
    },
    {
      title: "Siapkan dokumen restrukturisasi",
      text: "Unggah identitas, bukti penghasilan, serta surat permohonan restrukturisasi EasyCash."
    },
    {
      title: "Tunggu verifikasi pengajuan",
      text: "Tim EasyCash akan meninjau data dan memberikan keputusan atas pengajuan restrukturisasi."
    }
  ],
  requirements: [
    "Mengalami perubahan kondisi keuangan yang signifikan, seperti omzet turun, kehilangan pekerjaan, atau kebutuhan mendesak lain.",
    "Memiliki itikad baik untuk tetap melunasi pinjaman EasyCash sesuai kemampuan terbaru.",
    "Siap mengikuti perjanjian restrukturisasi baru secara tertulis bila pengajuan disetujui.",
    "Berkomitmen membayar sesuai jadwal restrukturisasi EasyCash yang sudah disepakati."
  ],
  contactGuide: [
    "Nomor WhatsApp dan customer service resmi membantu kamu menanyakan prosedur restrukturisasi EasyCash.",
    "Sebelum menghubungi kontak EasyCash, siapkan nomor akun, detail tagihan, dan alasan pengajuan agar proses lebih cepat.",
    "Hindari memberikan data sensitif ke pihak yang mengatasnamakan EasyCash di luar kanal resmi yang tertera di halaman ini."
  ],
  quickLinks: [
    {
      title: "Cara restrukturisasi EasyCash",
      href: "#langkah",
      text: "Lihat urutan pengajuan yang biasanya diminta dari awal sampai verifikasi."
    },
    {
      title: "Syarat restrukturisasi EasyCash",
      href: "#syarat",
      text: "Pahami kondisi nasabah dan kriteria yang umumnya dipertimbangkan."
    },
    {
      title: "Dokumen yang perlu disiapkan",
      href: "#dokumen",
      text: "Siapkan identitas, data akun, surat permohonan, dan bukti kesulitan keuangan."
    },
    {
      title: "FAQ dan kontak resmi",
      href: "#faq",
      text: "Temukan jawaban singkat, lalu lanjut ke kanal customer service resmi."
    }
  ],
  relatedArticles: [
    {
      title: "Contoh Surat Restrukturisasi EasyCash",
      href: "/contoh-surat-restrukturisasi-easycash.html",
      text: "Template surat pengajuan yang bisa dijadikan acuan sebelum menghubungi customer service."
    },
    {
      title: "Syarat Restrukturisasi EasyCash",
      href: "/syarat-restrukturisasi-easycash.html",
      text: "Ringkasan dokumen, kondisi nasabah, dan hal yang biasanya diminta saat verifikasi."
    },
    {
      title: "Cara Menghubungi Customer Service EasyCash",
      href: "/cara-menghubungi-customer-service-easycash.html",
      text: "Panduan menghubungi kanal resmi, menyiapkan data akun, dan menghindari kontak palsu."
    }
  ],
  steps: [
    {
      title: "Buka aplikasi atau akun EasyCash",
      text: "Masuk menggunakan nomor terdaftar dan kata sandi akun EasyCash Anda."
    },
    {
      title: "Pilih menu pembayaran atau detail tagihan",
      text: "Buka detail pinjaman EasyCash yang ingin diajukan untuk restrukturisasi."
    },
    {
      title: "Tentukan opsi keringanan",
      text: "Pilih bentuk restrukturisasi EasyCash yang tersedia sesuai kemampuan bayar terbaru Anda."
    },
    {
      title: "Unggah formulir dan dokumen",
      text: "Pastikan semua data pengajuan restrukturisasi valid, terbaru, dan mudah diverifikasi."
    },
    {
      title: "Kirim pengajuan",
      text: "Kirim pengajuan restrukturisasi EasyCash lalu pantau proses verifikasi dari tim terkait."
    },
    {
      title: "Tinjau hasil negosiasi",
      text: "Baca ulang tenor, cicilan, denda, dan total kewajiban sebelum menyetujui hasil restrukturisasi."
    }
  ],
  docs: [
    {
      title: "Data akun dan tagihan",
      text: "Akun EasyCash aktif, nomor telepon terdaftar, dan screenshot halaman tagihan atau pinjaman."
    },
    {
      title: "Dokumen identitas",
      text: "Foto KTP terdaftar dan swafoto dengan KTP yang terlihat jelas."
    },
    {
      title: "Surat permohonan",
      text: "Surat pengajuan restrukturisasi EasyCash yang menjelaskan kondisi keuangan dan alasan permohonan."
    },
    {
      title: "Bukti kesulitan keuangan",
      text: "Slip gaji terbaru, surat PHK, surat keterangan sakit, atau bukti relevan lain untuk mendukung pengajuan."
    }
  ],
  restructuringTypes: [
    "Pemotongan bunga dan denda keterlambatan.",
    "Perpanjangan tenor atau periode cicilan.",
    "Diskon pelunasan sebagian atau penuh.",
    "Penyesuaian nominal angsuran bulanan.",
    "Penghapusan denda sesuai hasil negosiasi."
  ],
  tips: [
    "Ajukan restrukturisasi EasyCash lebih awal sebelum tunggakan dan denda bertambah besar.",
    "Jelaskan kondisi secara jujur, ringkas, konsisten, dan relevan dengan pengajuan.",
    "Pastikan bukti pendukung lengkap agar customer service EasyCash lebih mudah memverifikasi data.",
    "Hitung kemampuan bayar baru sebelum menyetujui skema restrukturisasi hasil negosiasi."
  ],
  rejectionReasons: [
    "Data akun, identitas, atau dokumen pendukung tidak lengkap atau sulit diverifikasi.",
    "Alasan pengajuan tidak dijelaskan dengan rinci sehingga tim sulit menilai kondisi keuangan terbaru.",
    "Pengajuan dilakukan terlalu terlambat ketika tunggakan sudah berkembang tanpa komunikasi lebih awal.",
    "Nasabah tidak menunjukkan rencana pembayaran baru yang realistis setelah restrukturisasi disetujui."
  ],
  faqs: [
    {
      question: "Apakah restrukturisasi berarti utang dihapus?",
      answer:
        "Tidak. Restrukturisasi adalah penyesuaian skema pembayaran, bukan penghapusan seluruh kewajiban."
    },
    {
      question: "Apakah pengajuan restrukturisasi pasti disetujui?",
      answer:
        "Tidak selalu. Keputusan tetap bergantung pada hasil verifikasi data dan kebijakan perusahaan."
    },
    {
      question: "Kapan waktu terbaik untuk mengajukan?",
      answer:
        "Segera setelah Anda merasa kemampuan bayar menurun, sebelum tunggakan menjadi lebih berat."
    },
    {
      question: "Bagaimana cara menghubungi WhatsApp resmi EasyCash untuk restrukturisasi?",
      answer:
        "Gunakan nomor WhatsApp resmi yang tertera di halaman ini. Siapkan data akun, detail tagihan, dan alasan pengajuan agar proses konsultasi lebih cepat."
    },
    {
      question: "Apa syarat restrukturisasi EasyCash yang biasanya diminta?",
      answer:
        "Syarat restrukturisasi EasyCash biasanya meliputi identitas, data akun, bukti kesulitan keuangan, dan kesiapan mengikuti skema pembayaran baru jika disetujui."
    },
    {
      question: "Apakah saya bisa mengajukan restrukturisasi EasyCash lewat customer service?",
      answer:
        "Ya, Anda bisa mulai bertanya prosedur dan menanyakan kontak pengajuan melalui customer service atau kanal resmi EasyCash yang tercantum di halaman ini."
    }
  ]
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cara Restrukturisasi EasyCash, Syarat, Kontak, dan Pengajuan Resmi",
    url: siteUrl,
    inLanguage: "id-ID",
    description:
      "Panduan restrukturisasi EasyCash lengkap: syarat, dokumen, langkah pengajuan, kontak resmi, WhatsApp customer service, dan tips agar pengajuan lebih mudah diproses."
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cara Restrukturisasi EasyCash, Syarat, Kontak, dan Pengajuan Resmi",
    description:
      "Panduan restrukturisasi EasyCash lengkap: syarat, dokumen, langkah pengajuan, kontak resmi, WhatsApp customer service, dan tips agar pengajuan lebih mudah diproses.",
    author: {
      "@type": "Organization",
      name: "Restrukturisasi EasyCash"
    },
    publisher: {
      "@type": "Organization",
      name: "Restrukturisasi EasyCash",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}apple-touch-icon.png`
      }
    },
    mainEntityOfPage: siteUrl,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    image: `${siteUrl}og-image.svg`,
    keywords: [
      "restrukturisasi easycash",
      "cara restrukturisasi easycash",
      "syarat restrukturisasi easycash",
      "whatsapp easycash",
      "kontak easycash"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageData.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Restrukturisasi EasyCash",
    url: siteUrl,
    email: "cs.pinjaman@easycash.id",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+62-813-1111-418",
        areaServed: "ID",
        availableLanguage: ["id"]
      }
    ],
    sameAs: socialLinks.map((item) => item.href)
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: siteUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Restrukturisasi EasyCash",
        item: siteUrl
      }
    ]
  }
];

function ListBlock({ items, className }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function CardGrid({ items, className, numbered = false }) {
  return items.map((item, index) => (
    <article className={className} key={item.title}>
      {numbered ? <span className="summary-number">{index + 1}</span> : null}
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </article>
  ));
}

function FaqList({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return items.map((item, index) => {
    const isActive = activeIndex === index;

    return (
      <article className={`faq-item ${isActive ? "active" : ""}`} key={item.question}>
        <button
          className="faq-question"
          type="button"
          aria-expanded={isActive}
          onClick={() => setActiveIndex(isActive ? -1 : index)}
        >
          <span>{item.question}</span>
          <span className="faq-icon">+</span>
        </button>
        <div className="faq-answer">
          <p>{item.answer}</p>
        </div>
      </article>
    );
  });
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {structuredData.map((item) => (
        <script
          key={item["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#top">
            <span className="brand-media" aria-hidden="true">
              <img className="brand-icon" src={easyIcon} alt="" />
            </span>
            <span className="brand-text">Restrukturisasi EasyCash</span>
          </a>
          <nav className="nav-links">
            {pageData.nav.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <article className="page-article" aria-label="Panduan restrukturisasi EasyCash">
          <section className="hero">
            <div className="container hero-grid">
              <div className="hero-copy reveal">
              <p className="eyebrow">Panduan restrukturisasi tagihan</p>
              <h1>Cara Restrukturisasi EasyCash untuk Keringanan Bunga Tagihan</h1>
              <p className="lead">
                Pelajari cara restrukturisasi EasyCash, syarat restrukturisasi
                EasyCash, dokumen yang perlu disiapkan, kontak resmi, WhatsApp
                customer service, dan tips agar pengajuan lebih mudah diproses.
              </p>
              <div className="cta-group">
                <a
                  className="button button-primary"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Hubungi WhatsApp Resmi
                </a>
                <a className="button button-secondary" href="#langkah">
                  Lihat Langkah
                </a>
              </div>
              <ListBlock items={pageData.heroPoints} className="hero-points" />
                <div className="hero-meta" aria-label="Informasi artikel">
                  <span>Update 27 April 2026</span>
                  <span>Bahasa Indonesia</span>
                  <span>Fokus: restrukturisasi EasyCash</span>
                </div>
              </div>

              <aside className="hero-card reveal">
                <p className="card-label">Kontak Resmi</p>
                <h2>Butuh bantuan cepat?</h2>
                <div className="contact-list">
                  {pageData.contacts.map((item) => (
                    <div key={item.label}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>
                <p className="helper">
                  Sampaikan alasan pengajuan dengan jelas dan siapkan data pendukung
                  sebelum menghubungi customer service.
                </p>
              </aside>
            </div>
          </section>

          <section className="section section-toc">
            <div className="container">
              <div className="section-heading reveal">
                <p className="eyebrow">Isi panduan</p>
                <h2>Topik utama yang paling sering dicari</h2>
                <p className="body-copy">
                  Halaman ini disusun untuk menjawab pencarian seputar cara restrukturisasi
                  EasyCash, syarat pengajuan, dokumen, kontak resmi, dan FAQ dalam satu tempat.
                </p>
              </div>
              <nav className="toc-grid" aria-label="Daftar isi artikel">
                {pageData.quickLinks.map((item) => (
                  <a className="toc-card reveal" href={item.href} key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </a>
                ))}
              </nav>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="section-heading reveal">
                <p className="eyebrow">Ringkasan cepat</p>
                <h2>Alur singkat pengajuan restrukturisasi</h2>
              </div>
              <div className="summary-grid">
                <CardGrid items={pageData.summary} className="summary-card reveal" numbered />
              </div>
            </div>
          </section>

          <section className="section section-soft" id="syarat">
            <div className="container two-column">
              <div className="reveal">
                <div className="section-heading left">
                  <p className="eyebrow">Pemahaman dasar</p>
                  <h2>Apa itu restrukturisasi EasyCash?</h2>
                </div>
                <p className="body-copy">
                  Restrukturisasi EasyCash adalah penyesuaian kembali ketentuan
                  pembayaran pinjaman agar lebih sesuai dengan kemampuan finansial
                  terbaru. Bentuknya bisa berupa perubahan tenor, jumlah cicilan,
                  bunga, atau denda sesuai kebijakan yang disetujui.
                </p>
                <p className="body-copy">
                  Proses restrukturisasi ini bukan penghapusan kewajiban, melainkan
                  negosiasi ulang supaya pembayaran tagihan EasyCash tetap berjalan
                  dengan skema yang lebih realistis.
                </p>
                <p className="body-copy">
                  Jika Anda mencari kata kunci seperti <strong>cara restrukturisasi EasyCash</strong>,
                  <strong> syarat restrukturisasi EasyCash</strong>, atau <strong>kontak resmi EasyCash</strong>,
                  inti prosesnya selalu sama: hubungi kanal resmi, jelaskan kondisi keuangan,
                  lengkapi dokumen, lalu tunggu hasil evaluasi dari pihak terkait.
                </p>
              </div>

              <div className="panel reveal">
                <h3>Standar nasabah yang biasanya dipertimbangkan</h3>
                <ListBlock items={pageData.requirements} className="check-list" />
              </div>
            </div>
          </section>

          <section className="section" id="langkah">
            <div className="container">
              <div className="section-heading reveal">
                <p className="eyebrow">Panduan utama</p>
                <h2>Langkah-langkah restrukturisasi EasyCash</h2>
              </div>
              <ol className="steps">
                {pageData.steps.map((item, index) => (
                  <li className="step reveal" key={item.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="section section-soft">
            <div className="container two-column">
              <div className="panel reveal">
                <div className="section-heading left">
                  <p className="eyebrow">Kontak resmi</p>
                  <h2>Cara menghubungi EasyCash untuk restrukturisasi</h2>
                </div>
                <p className="body-copy">
                  Jika Anda mencari kontak EasyCash, WhatsApp EasyCash, atau customer
                  service EasyCash untuk restrukturisasi, gunakan hanya kanal resmi
                  yang tersedia di halaman ini. Hindari mengirim data penting ke pihak
                  lain di luar kontak resmi.
                </p>
                <ListBlock items={pageData.contactGuide} className="check-list" />
              </div>
              <div className="panel accent-panel reveal">
                <h3>Sebelum menghubungi customer service EasyCash</h3>
                <ListBlock items={pageData.tips} className="dot-list" />
              </div>
            </div>
          </section>

          <section className="section section-dark" id="dokumen">
            <div className="container">
              <div className="section-heading reveal">
                <p className="eyebrow eyebrow-light">Persiapan dokumen</p>
                <h2>Data yang sebaiknya disiapkan sebelum mengajukan</h2>
              </div>
              <div className="docs-grid">
                <CardGrid items={pageData.docs} className="doc-card reveal" />
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="panel accent-panel reveal">
                <h3>Bentuk restrukturisasi EasyCash yang umum diajukan</h3>
                <ListBlock items={pageData.restructuringTypes} className="dot-list" />
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container two-column">
              <div className="panel reveal">
                <div className="section-heading left">
                  <p className="eyebrow">Strategi pengajuan</p>
                  <h2>Tips agar peluang persetujuan lebih baik</h2>
                </div>
                <p className="body-copy">
                  Tidak ada jaminan pengajuan restrukturisasi EasyCash pasti disetujui,
                  tetapi peluang Anda biasanya lebih baik jika pengajuan dilakukan lebih awal,
                  data pendukung lengkap, dan nominal cicilan baru masih masuk akal.
                </p>
                <ListBlock items={pageData.tips} className="dot-list" />
              </div>
              <div className="panel reveal">
                <div className="section-heading left">
                  <p className="eyebrow">Hal yang perlu dihindari</p>
                  <h2>Penyebab pengajuan sering tertahan atau ditolak</h2>
                </div>
                <ListBlock items={pageData.rejectionReasons} className="check-list" />
              </div>
            </div>
          </section>

          <section className="section section-soft" id="faq">
            <div className="container faq-wrap">
              <div className="section-heading reveal">
                <p className="eyebrow">FAQ singkat</p>
                <h2>Pertanyaan yang sering muncul</h2>
              </div>
              <div className="faq-list">
                <FaqList items={pageData.faqs} />
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="section-heading reveal">
                <p className="eyebrow">Artikel pendukung</p>
                <h2>Bacaan lanjutan untuk memperjelas proses</h2>
                <p className="body-copy">
                  Tiga artikel berikut dibuat untuk menjawab keyword turunan yang sering
                  dicari lalu mengarahkan pembaca kembali ke panduan utama restrukturisasi EasyCash.
                </p>
              </div>
              <div className="article-grid">
                {pageData.relatedArticles.map((item) => (
                  <a className="article-card reveal" href={item.href} key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <span className="article-card-cta">Baca artikel</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>

      <footer className="site-footer" id="kontak">
        <div className="container footer-grid reveal">
          <div className="footer-intro">
            <p className="eyebrow">Kontak layanan</p>
            <h2>Hubungi kanal resmi</h2>
            <p className="footer-lead">
              Gunakan hanya kanal resmi berikut untuk konsultasi restrukturisasi,
              konfirmasi informasi, dan penyampaian dokumen pendukung.
            </p>
          </div>
          <div className="footer-contact">
            <div className="contact-card-grid">
              <article className="contact-card">
                <span className="contact-card-label">Email</span>
                <strong>cs.pinjaman@easycash.id</strong>
              </article>
              <article className="contact-card">
                <span className="contact-card-label">Customer service</span>
                <strong>{whatsappNumber}</strong>
              </article>
              <article className="contact-card">
                <span className="contact-card-label">Jam layanan</span>
                <strong>Senin-Minggu 08.00-20.00</strong>
              </article>
            </div>

            <div className="address-panel">
              <span className="contact-card-label">Alamat kantor</span>
              <p>
                Menara Dea 2 Lantai 18-20, Jalan Mega Kuningan Barat 1-2 Kav E4,
                Jakarta Selatan 12950
              </p>
            </div>

            <div className="social-block">
              <span className="contact-card-label">Media sosial resmi</span>
              <div className="social-chip-grid">
                {socialLinks.map((item) => (
                  <a
                    className="social-icon"
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${item.label} ${item.value}`}
                    title={`${item.label}: ${item.value}`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="logo-strip footer-logo-strip" aria-label="Partner dan lembaga terkait">
              <span className="contact-card-label">Lembaga dan afiliasi terkait</span>
              <div className="logo-strip-grid">
                {partnerLogos.map((logo) => (
                  <div className="logo-tile" key={logo.alt}>
                    <img
                      className="partner-logo"
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Hubungi WhatsApp resmi"
      >
        <span className="floating-whatsapp-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.6 2 2.18 6.41 2.18 11.85c0 1.74.45 3.44 1.3 4.94L2 22l5.37-1.41a9.8 9.8 0 0 0 4.66 1.19h.01c5.43 0 9.85-4.42 9.85-9.85a9.77 9.77 0 0 0-2.84-7.02Zm-7.02 15.2h-.01a8.14 8.14 0 0 1-4.14-1.13l-.3-.18-3.18.83.85-3.1-.2-.32a8.16 8.16 0 0 1-1.25-4.36c0-4.5 3.66-8.17 8.17-8.17 2.18 0 4.23.85 5.78 2.4a8.11 8.11 0 0 1 2.39 5.77c0 4.5-3.67 8.16-8.11 8.16Zm4.48-6.11c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.18-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.19-.46-.39-.4-.54-.41l-.46-.01c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.11 3.62.57.25 1.02.39 1.37.5.58.18 1.1.15 1.52.09.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.11-.22-.17-.46-.29Z" />
          </svg>
        </span>
        <span className="floating-whatsapp-text">Chat WhatsApp</span>
      </a>
    </>
  );
}
