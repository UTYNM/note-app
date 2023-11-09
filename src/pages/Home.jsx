import React from "react";
import NoteList from "../components/NoteList";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'Perkembangan Profesional',
      description:
        'Hari ini, saya meninjau kemajuan proyek penelitian terkini. Saat ini tim saya berhasil mengatasi sebagian besar tantangan teknis yang terjadi. Saya mencatat beberapa ide kreatif yang muncul selama rapat tim, terutama terkait implementasi teknologi baru yang dapat mempercepat proses analisis data. ',
      createdAt: new Date(),
      category: { title: 'Personal' }
    },
    {
      id: 2,
      title: 'Sunday Movie Night',
      description:
        'Hari ini, saya meninjau kemajuan proyek penelitian terkini. Saat ini tim saya berhasil mengatasi sebagian besar tantangan teknis yang terjadi. Saya mencatat beberapa ide kreatif yang muncul selama rapat tim, terutama terkait implementasi teknologi baru yang dapat mempercepat proses analisis data. ',
      createdAt: new Date(),
      category: { title: 'Family' }
    },
    {
      id: 3,
      title: 'Rapat Pagi Besok',
      description:
        'Jangan lupa untuk rapat pagi besok jam 9 pagi di ruang konferensi. Siapkan laporan proyek dan catat pertanyaan atau saran yang ingin kamu bagikan.',
      createdAt: new Date(),
      category: { title: 'Work' }
    },
    {
      id: 4,
      title: 'Langkah Pertama Menuju Keberhasilan',
      description:
        'Keberhasilan dimulai dari tekad untuk memulai. Terkadang langkah pertama adalah yang paling sulit, tetapi ingatlah, mimpi-mu bernilai lebih dari rasa takutmu. Setiap langkah kecilmu hari ini adalah investasi dalam kesuksesan masa depanmu. ',
      createdAt: new Date(),
      category: { title: 'Inspiration' }
    },
    {
      id: 5,
      title: 'Liburan ke Bali',
      description:
        'Jangan lupa untuk memesan tiket pesawat dan akomodasi untuk liburan ke Bali bulan depan. Periksa juga jadwal penerbangan dan pastikan semua dokumen perjalananmu sudah lengkap. Siap-siap untuk menikmati pantai, makanan lezat, dan petualangan seru!',
      createdAt: new Date(),
      category: { title: 'Holiday' }
    },
  ];
  return (
    <div className="bg-white py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Note App
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Dirancang untuk memudahkan pengguna dalam mencatat dan menyimpan informasi penting, ide-ide kreatif, daftar tugas, atau catatan pribadi dengan mudah.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-300 pt-10 sm:mt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <NoteList posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default Home;
