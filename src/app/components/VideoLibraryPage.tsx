import { useState } from 'react';
import { Play, Clock, ChevronDown, X } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

type VideoCategory = {
  id: string;
  name: string;
  description: string;
  videos?: Video[];
  subcategories?: VideoSubcategory[];
};

type VideoSubcategory = {
  id: string;
  name: string;
  videoCount: number;
  videos: Video[];
};

type Video = {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  youtubeUrl?: string;
  description?: string;
};

const videoCategories: VideoCategory[] = [
  {
    id: 'conditions-diseases',
    name: 'Conditions/Diseases',
    description: 'Educational videos on various pet health conditions and diseases',
    subcategories: [
      {
        id: 'herniated-disc',
        name: 'Herniated Disc Disease',
        videoCount: 10,
        videos: [
          {
            id: 1,
            title: 'Labrador Recovers Through Holistic Medicine',
            duration: '0:45',
            thumbnail: 'https://img.youtube.com/vi/5zk1_PSFKp4/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/5zk1_PSFKp4?si=jgHSyaZqXxvMNOSp',
            description: "Connor couldn't walk when rescued from shelter. Through acupuncture, physical therapy, and PEMF sessions, he progressed from being unable to stand to running. Now adopted.",
          },
          {
            id: 2,
            title: "Emi's Story",
            duration: '5:32',
            thumbnail: 'https://img.youtube.com/vi/c4HLdP0g_WY/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/c4HLdP0g_WY',
            description: '20-week-old French Bulldog with misaligned T13 and S1 vertebrae plus bilateral hip dysplasia. Undergoing rehabilitation treatment with determination.',
          },
          {
            id: 3,
            title: 'Frenchie Learns to Walk Again',
            duration: '3:15',
            thumbnail: 'https://img.youtube.com/vi/S_JbgZY1cV0/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/S_JbgZY1cV0',
            description: 'Frijo arrived with IVDD. Receiving acupuncture and electroacupuncture treatments to reduce inflammation and promote healing in affected spinal discs.',
          },
          {
            id: 4,
            title: 'Chesty Recovers after TWO back surgeries',
            duration: '4:22',
            thumbnail: 'https://img.youtube.com/vi/trufGTY81XM/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/trufGTY81XM',
            description: 'Dog overcame paralysis following two neurosurgeries for herniated disc in neck. Through rehab, regained ability to walk independently.',
          },
          {
            id: 5,
            title: 'Greyhound Learns to Walk Again',
            duration: '2:48',
            thumbnail: 'https://img.youtube.com/vi/vF8iMDg0h0k/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/vF8iMDg0h0k',
            description: 'Tobi was paralyzed from birth due to spinal cord abnormality. Arrived in wagon, unable to stand. Now can run after acupuncture, PT, and underwater treadmill therapy.',
          },
          {
            id: 6,
            title: 'Rex Finds His Stride Anew',
            duration: '3:56',
            thumbnail: 'https://img.youtube.com/vi/mhCN5aW2Nmc/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/mhCN5aW2Nmc?si=szxvAzqEAVT1-fVo',
            description: 'Rex diagnosed with herniated disc. Treated with acupuncture and laser therapy (low-level light therapy). Gradually regained hindlimb use and ability to run.',
          },
          {
            id: 7,
            title: 'French Bulldog Weezy Overcomes Herniated Disc',
            duration: '2:34',
            thumbnail: 'https://img.youtube.com/vi/TAbZ4Z_Yky8/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/TAbZ4Z_Yky8',
            description: 'Weezy faced mobility challenges from herniated disc. Acupuncture and laser therapy provided pain relief and helped regain hind leg strength.',
          },
          {
            id: 8,
            title: "From Paralyzed to Walking: Riot's Story",
            duration: '3:41',
            thumbnail: 'https://img.youtube.com/vi/cT0U0kz2bhU/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/cT0U0kz2bhU',
            description: 'Riot suddenly lost use of all legs. Intensive acupuncture and physical therapy helped him relearn walking. Now running.',
          },
          {
            id: 9,
            title: 'Holistic Medicine Helps Pancho Stand Tall Again',
            duration: '4:18',
            thumbnail: 'https://img.youtube.com/vi/5ekxbgKgAUs/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/5ekxbgKgAUs',
            description: 'Pancho arrived completely paralyzed. PT, acupuncture, and laser therapy enabled him to take steps and eventually run.',
          },
          {
            id: 10,
            title: 'Herniated Disc Disease 10',
            duration: `${Math.floor(Math.random() * 10) + 3}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
            thumbnail: `https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=400&h=300&fit=crop&q=80`,
          },
        ],
      },
      {
        id: 'hip-problems',
        name: 'Hip Problems/Hip Dysplasia',
        videoCount: 3,
        videos: [
          {
            id: 1,
            title: "Marley's Story: From Limping to Running",
            duration: '3:42',
            thumbnail: 'https://img.youtube.com/vi/REPNMZE8nyY/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/REPNMZE8nyY?si=NA00gO8eBBlTRouK',
            description: 'A 5-month-old patient who slipped on tile floors and fractured his hip area (femoral neck) just months after previous leg fractures. His back leg muscles had weakened significantly from limited use, and the rehabilitation team created a specialized plan to heal the new fracture while rebuilding muscle strength.',
          },
          {
            id: 2,
            title: "Lillie's Amazing Story – Learning to Walk Again after Hit by a Car",
            duration: '2:58',
            thumbnail: 'https://img.youtube.com/vi/X7OjFK55nxk/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/X7OjFK55nxk?si=ipQzZlLcqHmFHS5-',
            description: 'A car accident left Lillie unable to walk. The rehabilitation team developed a custom therapy plan focused on rebuilding muscle strength, coordination, and balance, using obstacle courses and guided exercises as stepping stones. The treatment successfully restored her ability to walk confidently.',
          },
          {
            id: 3,
            title: 'Hip Problems/Hip Dysplasia 3',
            duration: `${Math.floor(Math.random() * 10) + 3}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
            thumbnail: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=400&h=300&fit=crop&q=80',
          },
        ],
      },
      {
        id: 'knee-injuries',
        name: 'Knee Injuries/ACL Tear',
        videoCount: 2,
        videos: [
          {
            id: 1,
            title: 'Treating Knee Injuries',
            duration: '3:15',
            thumbnail: 'https://img.youtube.com/vi/hbrYLHJJi_U/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/hbrYLHJJi_U?si=LqLI2Dq1qkEByfQ9',
            description: 'Roxy received PT, laser therapy, massage therapy, and hydrotherapy (underwater treadmill) to maintain strength following a cranial cruciate ligament tear (ACL tear).',
          },
          {
            id: 2,
            title: 'Dog Knee Brace for Cranial Cruciate Tears',
            duration: '2:47',
            thumbnail: 'https://img.youtube.com/vi/lY7jnVbLAKE/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/lY7jnVbLAKE?si=yhbW717shK5FuHFa',
            description: 'Mayhem required a knee brace after tearing her cranial cruciate ligament (ACL). The brace enabled her to run and play once again.',
          },
        ],
      },
      {
        id: 'degenerative-myelopathy',
        name: 'Degenerative Myelopathy',
        videoCount: 3,
        videos: [
          {
            id: 1,
            title: 'Degenerative Myelopathy: Sassy Gets a Wheelchair!',
            duration: '1:58',
            thumbnail: 'https://img.youtube.com/vi/fckuQCVLMJk/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/fckuQCVLMJk?si=TxIBCHLprITzQ0-p',
            description: 'Discusses how wheelchairs help dogs with degenerative myelopathy (DM) maintain mobility and independence. Shows Sassy in her custom-fitted wheelchair.',
          },
          {
            id: 2,
            title: 'Willow Defies DM with Her New Wheelchair!',
            duration: '2:24',
            thumbnail: 'https://img.youtube.com/vi/GM2S0c6odBQ/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/GM2S0c6odBQ?si=ytSv5zI5ujQl2D59',
            description: 'Notes that regular wheelchair use can preserve muscle mass in front limbs and core muscles, preventing deterioration and maintaining strength.',
          },
          {
            id: 3,
            title: 'Degenerative Myelopathy',
            duration: '3:12',
            thumbnail: 'https://img.youtube.com/vi/aTKn3yZZHMM/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/aTKn3yZZHMM?si=Rsx5yi3eXLKg0AqE',
            description: 'Linus was diagnosed with degenerative myelopathy. We worked hard to extend the quality and quantity of his life – he even got a wheelchair!',
          },
        ],
      },
      {
        id: 'facial-paralysis',
        name: 'Facial Paralysis',
        videoCount: 3,
        videos: [
          {
            id: 1,
            title: 'Because Every Dog Deserves to Smile Again – Brady Overcomes Facial Nerve Paralysis',
            duration: '0:52',
            thumbnail: 'https://img.youtube.com/vi/LhIssCezF5w/hqdefault.jpg',
            youtubeUrl: 'https://youtube.com/shorts/LhIssCezF5w?si=XvTnchpHqvAQ3dM-',
            description: 'Brady lost facial movement and couldn\'t blink, risking chronic eye ulcers. The center treated him with electroacupuncture to stimulate nerves and laser therapy for regeneration. Movement gradually returned, and he recovered the ability to blink independently.',
          },
          {
            id: 2,
            title: 'Millie Overcomes Facial Nerve Paralysis',
            duration: '0:48',
            thumbnail: 'https://img.youtube.com/vi/6QhCmVid3nM/hqdefault.jpg',
            youtubeUrl: 'https://youtube.com/shorts/6QhCmVid3nM?si=7MWpd36oMh6KaWdv',
            description: 'Millie arrived with atrophied ocular and facial muscles and couldn\'t blink, creating risk for eye ulcers. Treatment combined acupuncture, laser therapy, pneumopuncture, and herbal remedies. Her nerves regenerated, muscles returned, and she regained normal blinking function.',
          },
          {
            id: 3,
            title: 'Candy: Overcoming Facial Nerve Paralysis',
            duration: '0:38',
            thumbnail: 'https://img.youtube.com/vi/KtZFv57-RcE/hqdefault.jpg',
            youtubeUrl: 'https://youtube.com/shorts/KtZFv57-RcE?si=nfbvrabtc5Z58NUN',
            description: 'Electro-acupuncture can help with Facial Nerve Paralysis in dogs and cats. Acupuncture stimulates nerve pathways, encouraging communication between the brain and facial muscles.',
          },
        ],
      },
      {
        id: 'laryngeal-paralysis',
        name: 'Laryngeal Paralysis',
        videoCount: 1,
        videos: [
          {
            id: 1,
            title: 'Breathing Easier: Acupuncture\'s Support for Dogs with Laryngeal Paralysis',
            duration: '0:42',
            thumbnail: 'https://img.youtube.com/vi/N6bqX2yVnWk/hqdefault.jpg',
            youtubeUrl: 'https://youtube.com/shorts/N6bqX2yVnWk?si=58kGx6WV_jRp02VE',
            description: 'Acupuncture provides a holistic approach to help dogs with laryngeal paralysis. It stimulates nerve pathways and promotes muscle relaxation around the larynx, facilitating smoother breathing and restoring energy flow to improve respiratory function.',
          },
        ],
      },
      {
        id: 'fce',
        name: 'FCE: Fibrocartilaginous Embolism',
        videoCount: 2,
        videos: [
          {
            id: 1,
            title: 'Sasha\'s Story: Surviving FCE',
            duration: '0:35',
            thumbnail: 'https://img.youtube.com/vi/uhf_WlCqIdU/hqdefault.jpg',
            youtubeUrl: 'https://youtube.com/shorts/uhf_WlCqIdU?si=2A-ozoozG8E-T373',
            description: 'Sasha\'s recovery from Fibrocartilaginous Embolism (FCE), described as spinal strokes that cause sudden mobility loss in dogs. The case study emphasizes how personalized recovery plans and dedicated rehabilitation can lead to significant improvement in movement.',
          },
          {
            id: 2,
            title: 'Sadie\'s FCE Case',
            duration: '0:38',
            thumbnail: 'https://img.youtube.com/vi/QNewFhEkUEo/hqdefault.jpg',
            youtubeUrl: 'https://youtube.com/shorts/QNewFhEkUEo?si=AeB6dpn1N1-1aUxZ',
            description: 'Sadie suffered from FCE. The case focuses on the importance of physical therapy for FCE patients, highlighting three key benefits: regaining muscle strength through targeted exercises, enhancing mobility and range of motion, and providing neurological support for proprioception and nerve regeneration.',
          },
        ],
      },
      {
        id: 'kidney-disease',
        name: 'Kidney Disease',
        videoCount: 1,
        videos: [
          {
            id: 1,
            title: 'Kidney Disease: Natural Treatment Options',
            duration: '4:15',
            thumbnail: 'https://img.youtube.com/vi/2aa8QQ5l6V8/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/2aa8QQ5l6V8?si=CCyWneJY-9-fTkb7',
            description: 'Dr. Jessie discusses the symptoms and reviews the many natural treatment options that are available for treating cat or dog kidney disease with holistic veterinary medicine.',
          },
        ],
      },
      {
        id: 'arthritis-senior',
        name: 'Arthritis and Senior Pets',
        videoCount: 1,
        videos: [
          {
            id: 1,
            title: 'Ollie Has PT for Shaky Hindlimbs',
            duration: '0:28',
            thumbnail: 'https://img.youtube.com/vi/bPnZyEX2Ux8/hqdefault.jpg',
            youtubeUrl: 'https://youtube.com/shorts/bPnZyEX2Ux8?si=lu66zsYAMs-t_9Gk',
            description: 'Physical therapy helps senior dogs with mobility issues. PT enhances mobility, provides pain relief, offers cognitive stimulation, and serves as preventative care for aging dogs.',
          },
        ],
      },
    ],
  },
  {
    id: 'treatment-techniques',
    name: 'Treatments & Therapies',
    description: 'Educational videos on holistic treatment modalities and integrative therapies',
    subcategories: [
      {
        id: 'wheelchairs',
        name: 'Wheelchairs for Pets',
        videoCount: 6,
        videos: [
          {
            id: 1,
            title: 'Dog with No Front Legs Gets a Wheelchair',
            duration: '3:45',
            thumbnail: 'https://img.youtube.com/vi/v8xBDYZzznI/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/v8xBDYZzznI?si=TRIOTZVdWYssErXk',
            description: 'Angel was born without front legs. She was fitted for a custom front-end wheelchair to help her run freely and maintain her independence.',
          },
          {
            id: 2,
            title: 'A Wheelchair Can Help Your Pet Regain their Mobility Again',
            duration: '2:18',
            thumbnail: 'https://img.youtube.com/vi/f3majvcjNXY/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/f3majvcjNXY?si=7qGuS_ScbvNxrUVZ',
            description: 'Wheelchairs provide independence and mobility for pets. Healing Paws Center is skilled in fitting custom wheelchairs to help your pet regain their quality of life.',
          },
          {
            id: 3,
            title: 'Cowboy gets his wheels!',
            duration: '1:52',
            thumbnail: 'https://img.youtube.com/vi/aNOYHj5P2FQ/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/aNOYHj5P2FQ?si=Lz1qXJ_AR6tXy9Yi',
            description: 'A French Bulldog named Cowboy lost mobility in his back legs but got support through his new wheelchair to keep moving forward.',
          },
          {
            id: 4,
            title: 'Frenchie Gets A Wheelchair',
            duration: '2:34',
            thumbnail: 'https://img.youtube.com/vi/hZXtYdYLngE/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/hZXtYdYLngE?si=PfbW1bjCSSVMUbrv',
            description: 'Dior was tired from dragging herself around, so she was fitted with a custom hindlimb wheelchair.',
          },
          {
            id: 5,
            title: 'Doggie Wheelchairs for Dogs!',
            duration: '1:45',
            thumbnail: 'https://img.youtube.com/vi/blABtGIB0tc/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/blABtGIB0tc?si=KWhMBk985YM6XWLQ',
            description: 'Wheelchairs are a valuable tool to improve pet mobility and quality of life, helping them stay active and independent.',
          },
          {
            id: 6,
            title: 'Wheelchairs for Dogs!',
            duration: '3:12',
            thumbnail: 'https://img.youtube.com/vi/DNU_AK1k9iY/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/DNU_AK1k9iY?si=JuTApPsrH7H1FuvM',
            description: 'Wheelchairs work for dogs, cats, and even skunks! Custom mobility solutions for all types of pets.',
          },
        ],
      },
      {
        id: 'braces-orthotics',
        name: 'Braces/Orthotics for Pets',
        videoCount: 3,
        videos: [
          {
            id: 1,
            title: 'Balto Loves Running Around Again with his Achilles Tendon Brace',
            duration: '2:28',
            thumbnail: 'https://img.youtube.com/vi/5m3TVpaGvok/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/5m3TVpaGvok?si=aa6lQ-cEHi5vn9x8',
            description: 'Balto ruptured his Achilles tendon and wasn\'t a surgery candidate. The center provided him with a custom orthotic brace to help him run around again.',
          },
          {
            id: 2,
            title: 'Braces for Dogs!',
            duration: '1:52',
            thumbnail: 'https://img.youtube.com/vi/tJPkqePVcFw/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/tJPkqePVcFw?si=Bi0MFdmmVFfxvPhS',
            description: 'Lola required a foot orthotic to protect her paw bones. She was so satisfied with the first brace that she needed a second one.',
          },
          {
            id: 3,
            title: 'Prosthetic Leg for Dogs',
            duration: '3:05',
            thumbnail: 'https://img.youtube.com/vi/ZYE7cXGpNrU/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/ZYE7cXGpNrU?si=d7M0DH0QrxB9y5Hj',
            description: 'Teddy received a prosthetic leg to improve his mobility and quality of life. Custom prosthetics and orthotics are a specialty at Healing Paws Center.',
          },
        ],
      },
      {
        id: 'physical-therapy',
        name: 'Physical Therapy',
        videoCount: 2,
        videos: [
          {
            id: 1,
            title: 'Winston Learns to Walk Again',
            duration: '2:45',
            thumbnail: 'https://img.youtube.com/vi/6puN21ZtGTQ/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/6puN21ZtGTQ?si=lgMBu8Vny4_OFVDh',
            description: 'Winston survived being hit by a car but had multiple hip fractures leaving him unable to use his leg even after surgery. Treatment combined laser therapy, physical exercises, underwater treadmill, and shockwave therapy.',
          },
          {
            id: 2,
            title: 'Physical Rehabilitation to Get Ollie Moving Again',
            duration: '3:18',
            thumbnail: 'https://img.youtube.com/vi/NXcLlGNZXUU/hqdefault.jpg',
            youtubeUrl: 'https://youtu.be/NXcLlGNZXUU?si=tylc42ciwKEfRTKy',
            description: 'Ollie had poor recovery from bilateral hip surgery (FHO) performed a year prior. He experienced loss of mobility, muscle mass, and pain. Aggressive canine physical therapy and underwater treadmill therapy restored his movement.',
          },
        ],
      },
    ],
  },
  {
    id: 'patient-success-stories',
    name: 'Patient Success Stories',
    description: 'Wild Healing: Holistic Care for Exotic Pets',
    videos: [
      {
        id: 1,
        title: 'Ancient Healing for Your Modern-Day Dragon',
        duration: '1:42',
        thumbnail: 'https://img.youtube.com/vi/0XM9Eg8zG3w/hqdefault.jpg',
        youtubeUrl: 'https://youtu.be/0XM9Eg8zG3w?si=xXun8_FHEs2L1vr7',
        description: 'A bearded dragon receiving acupuncture treatment during his cancer journey. He was calm and collected while those tiny needles did their magic!',
      },
      {
        id: 2,
        title: 'A Shell, A Smile, A Second Chance',
        duration: '2:15',
        thumbnail: 'https://img.youtube.com/vi/2T6bToHTeBA/hqdefault.jpg',
        youtubeUrl: 'https://youtu.be/2T6bToHTeBA?si=mbCqmX2L1WKrictH',
        description: 'Lucius, a young green sea turtle with Lockjaw Syndrome who couldn\'t eat. Treatment included acupuncture, B12 aqua injections, and acupressure to help restore jaw movement.',
      },
      {
        id: 3,
        title: 'Balancing Energy in Your Favorite Furry Acrobat',
        duration: '1:58',
        thumbnail: 'https://img.youtube.com/vi/XderXzi9xCY/hqdefault.jpg',
        youtubeUrl: 'https://youtu.be/XderXzi9xCY?si=rOo-zQfx3fxpoL9f',
        description: 'A ferret with hindlimb weakness and pain. With acupuncture and laser therapy we were able to get her back to running and jumping again!',
      },
    ],
  },
];

export function VideoLibraryPage() {
  const [activeCategory, setActiveCategory] = useState<string>(videoCategories[0].id);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(
    videoCategories[0].subcategories ? videoCategories[0].subcategories[0].id : null
  );
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const currentCategory = videoCategories.find(cat => cat.id === activeCategory) || videoCategories[0];
  const currentSubcategory = currentCategory.subcategories?.find(sub => sub.id === activeSubcategory);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    const category = videoCategories.find(cat => cat.id === categoryId);
    if (category?.subcategories && category.subcategories.length > 0) {
      setActiveSubcategory(category.subcategories[0].id);
    } else {
      setActiveSubcategory(null);
    }
  };

  const getYouTubeEmbedUrl = (url: string) => {
    // Extract video ID from various YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = match && match[2].length === 11 ? match[2] : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  const videosToDisplay = currentSubcategory ? currentSubcategory.videos : (currentCategory.videos || []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl">
              Video Library
            </h1>
            <p className="text-white/95 text-lg mb-8">
              Educational videos on holistic veterinary care, rehabilitation exercises, and treatment techniques to support your pet's health journey.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-gray-50 md:sticky md:top-[80px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Categories */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {videoCategories.map((category) => {
              const totalVideos = category.subcategories
                ? category.subcategories.reduce((sum, sub) => sum + sub.videoCount, 0)
                : category.videos?.length || 0;

              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`px-6 py-3 rounded-lg transition-all font-semibold flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-[#b48cbf] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                  <span className="text-sm">({totalVideos})</span>
                  {category.subcategories && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${
                      activeCategory === category.id ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Subcategories */}
          {currentCategory.subcategories && (
            <div className="flex flex-wrap gap-2 justify-center pt-4 border-t border-gray-200">
              {currentCategory.subcategories.map((subcategory) => (
                <button
                  key={subcategory.id}
                  onClick={() => setActiveSubcategory(subcategory.id)}
                  className={`px-4 py-2 rounded-lg transition-all text-sm font-medium ${
                    activeSubcategory === subcategory.id
                      ? 'bg-[#b7e1da] text-gray-900 shadow-sm'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {subcategory.name}
                  <span className="ml-2 text-xs">({subcategory.videoCount})</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Grid Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Header */}
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              {currentSubcategory ? currentSubcategory.name : currentCategory.name}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {currentCategory.description}
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videosToDisplay.map((video) => (
              <div
                key={video.id}
                onClick={() => {
                  if (video.youtubeUrl) {
                    setSelectedVideo(video);
                  }
                }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
              >
                {/* Thumbnail */}
                <div className="relative bg-gray-200 aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-[#b48cbf] ml-1" fill="currentColor" />
                    </div>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-gray-900 font-semibold mb-2 text-lg">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-base">
                    {video.description || "Learn essential techniques and exercises for your pet's rehabilitation journey."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#b48cbf] to-[#b7e1da]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4 sm:mb-6">Need Personalized Guidance?</h2>
          <p className="text-white/95 text-lg mb-6 sm:mb-8">
            Schedule a consultation with our team to develop a customized treatment plan for your pet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Player */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={getYouTubeEmbedUrl(selectedVideo.youtubeUrl!)}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {selectedVideo.title}
              </h3>
              {selectedVideo.description && (
                <p className="text-gray-700 text-lg">
                  {selectedVideo.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
