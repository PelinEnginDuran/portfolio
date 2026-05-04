import ytdemo_1 from "../assets/YouTube-Google-Chrome-2024-01-02-07-46-14.gif"
import ytdemo_2 from "../assets/YouTube-Google-Chrome-2024-01-02-07-45-31.gif"
import firebaseDemo from "../assets/firebase.gif"
import toolkitDemo from "../assets/jobtoolkit.gif"
import rickandmortyDemo from "../assets/rickyMorty.png"
import getirDemo from "../assets/assets_getirclone-ezgif.com-video-speed (1).gif"
import cryptoDemo from "../assets/coin.gif"
import translationDemo from "../assets/translate.gif"
import hangmanDemo from "../assets/ezgif.com-video-to-gif (12).gif"
import characterDemo from "../assets/pokemon.gif"
import vanillaJsDemo from "../assets/e-commarce.gif"
import type { ProjectLang } from "./ProjectLang"



export interface Project {
    id: string
    tech: string[]
    en: ProjectLang
    tr: ProjectLang
}

export const projects: Project[] = [
    {
        id: "youtube-clone",
        tech: ["React", "Context API", "RapidAPI", "Tailwind", "React Player"],


        en: {
            title: "YouTube Clone",
            description:
                "A real-world video platform clone with category-based listing, search, video detail pages and dynamic content.",
            problem:
                "Building a scalable video platform with category-based listing, search and dynamic content.",
            solution:
                "Built a scalable video platform using Context API for global state management. Integrated RapidAPI to fetch dynamic video data including categories, search results and video details. Implemented a responsive UI with smooth navigation between pages and optimized user experience for browsing and watching content.",
            learnings:
                "Improved my understanding of state management in large-scale applications and UX-driven design.",
            images: [ytdemo_1, ytdemo_2]
        },
        tr: {
            title: "Youtube Klonu",
            description:
                "Kategori bazlı listeleme, arama, video detay sayfaları ve dinamik içerik ile gerçek dünya video platform klonu.",
            problem: "Kategori bazlı listeleme, arama ve dinamik içerik ile ölçeklendirmeye uygun bir video plartformu oluşturmak gerekiyordu.",
            solution: "ConteXT API kullanarak global state yönetimi ile ölçeklenebilir bir video platform inşa ettim. Rapid API entergrasyonu ile kategoriler, arama sonuçları ve video detayları gibi dinamik video verilerini çektim. Sayfalar arasında sorunsuz gezinme ve içerik tarama ve izleme için optimize edilmiş kullanıcı deneyimi ile duyarlı bir UI uyguladım.",
            learnings: "Büyük ölçekli uygulamalarda state yönetimi ve UX odaklı tasarım konusunda kendimi geliştirdim.",
            images: [ytdemo_1, ytdemo_2]
        }
    },
    {
        id: "firebase-chat",
        tech: ["React", "Firebase Auth", "Firestore / Realtime DB", "Firebase Storage", "SCSS"],

        en: {
            title: "Firebase Chat App",
            description: "A real-time chat application with authentication and room-based messaging using Firebase.",

            problem:
                "Building a real-time chat system with user authentication and instant messaging requires handling live data flow, user sessions and scalable backend services.",

            solution:
                "Developed a chat application using Firebase services. Implemented authentication with Google and Facebook login, and built a room-based messaging system where users can join different chat rooms and communicate in real-time. Messages are instantly synchronized across users in real-time.",

            learnings:
                "Gained experience with real-time data synchronization, authentication flows and Firebase ecosystem. Improved skills in building scalable real-time applications and managing user-based dynamic UI.",

            images: [firebaseDemo]
        },
        tr: {
            title: "Firebase Chat Uygulaması",
            description: "Firebase kullanarak kimlik doğrulama ve oda tabanlı mesajlaşma özelliklerine sahip gerçek zamanlı bir sohbet uygulaması.",

            problem:
                "Gerçek zamanlı veri akışı, kullanıcı oturumları ve ölçeklenebilir backend hizmetleri gerektiren gerçek zamanlı bir sohbet sistemi oluşturmak gerekiyordu.",

            solution:
                "Firebase hizmetlerini kullanarak bir sohbet uygulaması geliştirdim. Google ve Facebook ile kimlik doğrulama uyguladım ve kullanıcıların farklı sohbet odalarına katılabileceği ve gerçek zamanlı olarak iletişim kurabileceği oda tabanlı bir mesajlaşma sistemi oluşturdum. Mesajlar, kullanıcılar arasında gerçek zamanlı olarak anında senkronize edilir.",

            learnings:
                "Gerçek zamanlı veri senkronizasyonu, kimlik doğrulama akışları ve Firebase ekosistemi hakkında deneyim kazandım. Ölçeklenebilir gerçek zamanlı uygulamalar oluşturma ve kullanıcı tabanlı dinamik UI yönetimi konusundaki becerilerimi geliştirdim.",

            images: [firebaseDemo]
        }
    },
    {
        id: "toolkit-business",
        tech: ["React", "Redux Toolkit", "Axios", "JSON Server", "React Router", "SCSS"],

        en: {
            title: "Toolkit Business",
            description: "A job management dashboard application with CRUD operations, filtering and pagination using Redux Toolkit.",


            problem:
                "Managing job listings without a structured system makes it difficult to track, filter and update data efficiently. A scalable solution was needed to handle CRUD operations and organize job data in a user-friendly way.",

            solution:
                "Built a dashboard application using Redux Toolkit for scalable state management. Implemented full CRUD functionality, filtering by position, status and type, and pagination for better data navigation. Integrated JSON Server and Axios for API-based data handling and improved user experience with toast notifications.",

            learnings:
                "Improved my understanding of scalable state management with Redux Toolkit, handling asynchronous data flow, and building real-world admin dashboard structures with clean and maintainable architecture.",
            images: [toolkitDemo]
        },
        tr: {
            title: "Toolkit İşletme",
            description: "Redux Toolkit kullanarak CRUD işlemleri, filtreleme ve sayfalama özelliklerine sahip bir iş yönetim panosu uygulaması.",

            problem:
                "Yapısal bir sistem olmadan iş ilanlarını yönetmek, verileri verimli bir şekilde takip etmeyi, filtrelemeyi ve güncellemeyi zorlaştırır. CRUD işlemlerini yönetmek ve iş verilerini kullanıcı dostu bir şekilde organize etmek için ölçeklenebilir bir çözüme ihtiyaç vardı.",

            solution:
                "Redux Toolkit kullanarak ölçeklenebilir durum yönetimi ile bir pano uygulaması oluşturdum. Tam CRUD işlevselliği, pozisyon, durum ve tür bazında filtreleme ve daha iyi veri gezinmesi için sayfalama uyguladım. API tabanlı veri işleme için JSON Server ve Axios entegrasyonu sağladım ve kullanıcı deneyimini toast bildirimleriyle geliştirdim.",

            learnings:
                "Redux Toolkit ile ölçeklenebilir durum yönetimi, asenkron veri akışı yönetimi ve temiz, sürdürülebilir mimari ile gerçek dünya yönetim panosu yapıları oluşturma konusundaki anlayışımı geliştirdim.",
            images: [toolkitDemo]
        }
    },


    {
        id: "rick-morty-case",
        tech: ["React Native", "Expo", "TypeScript", "Zustand", "React Query", "NativeWind", "Rick & Morty API"],



        en: {
            title: "Ricky & Morty Interview Case",
            description: "A mobile-first character search app with real-time filtering using React Query and Zustand.",

            problem:
                "Creating a responsive and performant search experience requires efficient state management and optimized API handling, especially in mobile environments.",

            solution:
                "Built a character search feature using React Query for handling asynchronous API requests and caching, combined with Zustand for lightweight global state management. Implemented real-time search functionality where users receive instant results as they type (e.g., entering a single letter returns all matching characters). Optimized API calls by triggering requests only when input is present and handled loading/error states effectively.",
            learnings:
                "Improved my understanding of server-state vs client-state management by combining React Query and Zustand. Gained experience in building performant mobile-first applications and optimizing API-driven UI interactions.",
            images: [rickandmortyDemo]
        },

        tr: {
            title: "Ricky & Morty Röportaj Vaka Çalışması",
            description: "React Query ve Zustand kullanarak gerçek zamanlı filtreleme özelliklerine sahip mobil öncelikli bir karakter arama uygulaması.",

            problem:
                "Duyarlı ve performanslı bir arama deneyimi oluşturmak, özellikle mobil ortamlarda, verimli durum yönetimi ve optimize edilmiş API işleme gerektirir.",

            solution:
                "Asenkron API isteklerini yönetmek ve önbelleğe almak için React Query'yi, hafif global durum yönetimi için Zustand'ı kullanarak bir karakter arama özelliği oluşturdum. Kullanıcıların yazarken anında sonuçlar aldığı gerçek zamanlı arama işlevselliği uyguladım (örneğin, tek bir harf girmek tüm eşleşen karakterleri döndürür). Giriş olduğunda istekleri tetikleyerek API çağrılarını optimize ettim ve yükleme/hata durumlarını etkili bir şekilde yönettim.",

            learnings:
                "React Query ve Zustand'ı birleştirerek sunucu durumu ve istemci durumu yönetimi konusundaki anlayışımı geliştirdim. Performanslı mobil öncelikli uygulamalar oluşturma ve API odaklı UI etkileşimlerini optimize etme konusunda deneyim kazandım.",
            images: [rickandmortyDemo]
        }
    },
    {
        id: "getir-clone",
        tech: ["React Native", "Redux", "TypeScript", "React Navigation"],


        en: {

            title: "Getir Clone (Mobile E-commerce)",
            description: "A mobile e-commerce application with cart system, bottom navigation and real-time price calculation.",

            problem:
                "Building a scalable mobile shopping experience requires managing complex cart state, navigation flows and real-time price updates across screens.",

            solution:
                "Developed a mobile e-commerce clone with Redux-based cart management, dynamic product quantity handling and real-time total price calculation. Implemented bottom navigation bar for seamless screen transitions and a bottom sheet cart system for improved UX.",
            learnings: "Improved understanding of mobile state management with Redux and learned how to design real-world e-commerce cart systems with dynamic pricing and UX patterns like bottom sheets and navigation bars.",
            images: [getirDemo]
        },
        tr: {
            title: "Getir Klonu (Mobil E-ticaret)",
            description: "Sepet sistemi, alt navigasyon ve gerçek zamanlı fiyat hesaplaması özelliklerine sahip bir mobil e-ticaret uygulaması.",

            problem:
                "Ölçeklenebilir bir mobil alışveriş deneyimi oluşturmak, karmaşık sepet durumunu, navigasyon akışlarını ve ekranlar arasında gerçek zamanlı fiyat güncellemelerini yönetmeyi gerektirir.",

            solution:
                "Redux tabanlı sepet yönetimi, dinamik ürün miktarı işleme ve gerçek zamanlı toplam fiyat hesaplaması ile bir mobil e-ticaret klonu geliştirdim. Sorunsuz ekran geçişleri için alt navigasyon çubuğu ve geliştirilmiş UX için alt sayfa sepet sistemi uyguladım.",
            learnings: "Redux ile mobil durum yönetimi konusundaki anlayışımı geliştirdim ve dinamik fiyatlandırma ve alt sayfalar ve navigasyon çubukları gibi UX desenleri ile gerçek dünya e-ticaret sepet sistemleri tasarlamayı öğrendim.",
            images: [getirDemo]
        }
    },
    {
        id: "crypto-mvc",
      tech: ["React", "MVC Architecture", "Formik", "Yup", "Chart.js"],


      en:{
          title: "Crypto Tracking MVC Project",
        description: "A cryptocurrency tracking application built with MVC architecture and real-time chart visualization.",
      

        problem:
            "Displaying real-time crypto data with structured architecture requires separation of concerns and reliable data visualization.",

        solution:
            "Built a crypto tracking system using MVC architecture with Chart.js for visualizing price changes. Implemented Formik and Yup for secure and validated form handling, ensuring clean data input and maintainable structure.",
        learnings: "Strengthened knowledge of MVC architecture, data visualization with charts and secure form handling using validation libraries.",
        images: [cryptoDemo]
      },
      tr:{
        title: "Kripto Takip MVC Projesi",
        description: "MVC mimarisi ve gerçek zamanlı grafik görselleştirme ile oluşturulmuş bir kripto para takip uygulaması.",
      

        problem:
            "Yapısal mimari ile gerçek zamanlı kripto verilerini görüntülemek, endişelerin ayrılmasını ve güvenilir veri görselleştirmesini gerektirir.",

        solution:
            "Fiyat değişikliklerini görselleştirmek için Chart.js ile MVC mimarisi kullanarak bir kripto takip sistemi oluşturdum. Formik ve Yup'u güvenli ve doğrulanmış form işleme için uyguladım, temiz veri girişi ve sürdürülebilir yapı sağladım.",
        learnings: "MVC mimarisi, grafiklerle veri görselleştirme ve doğrulama kütüphaneleri kullanarak güvenli form işleme konusundaki bilgimi güçlendirdim.",
        images: [cryptoDemo]
      }

    },
    {
        id: "translation-toolkit",
        tech: ["React", "Redux Toolkit", "Axios", "SCSS", "React-Select"],

       en:{
         title: "Translation Toolkit",
        description: "A multi-language translation application with instant language switching and API integration.",
        

        problem:
            "Providing fast and flexible translation between multiple languages requires efficient API handling and dynamic UI updates.",

        solution:
            "Built a translation tool using RapidAPI with Redux Toolkit for state management. Implemented language swap feature and dynamic dropdown selection for hundreds of languages, improving user experience and speed of translation.",
        learnings: "Improved API integration skills and learned how to build efficient multilingual systems with dynamic UI updates and state management."
        , images: [translationDemo]
       },
       tr:{
        title: "Çeviri Araç Seti",
        description: "Anında dil değiştirme ve API entegrasyonu ile çok dilli bir çeviri uygulaması.",
        

        problem:
            "Birden fazla dil arasında hızlı ve esnek çeviri sağlamak, verimli API işleme ve dinamik UI güncellemeleri gerektirir.",

        solution:
            "Durum yönetimi için Redux Toolkit ile RapidAPI kullanarak bir çeviri aracı oluşturdum. Kullanıcı deneyimini ve çeviri hızını artırmak için yüzlerce dil için dil değiştirme özelliği ve dinamik açılır seçim uyguladım.",
        learnings: "API entegrasyon becerilerimi geliştirdim ve dinamik UI güncellemeleri ve durum yönetimi ile verimli çok dilli sistemler oluşturmayı öğrendim."
         , images: [translationDemo]
       }
    },
    {
        id: "vanilla-ecommerce",
         tech: ["HTML", "CSS", "JavaScript", "REST API"],

   en:{
          
        title: "Vanilla JavaScript E-Commerce",
        description: "A dynamic e-commerce system built without frameworks using pure JavaScript.",
       

        problem:
            "Building a fully functional shopping cart without frameworks requires manual state management and DOM manipulation.",

        solution:
            "Implemented product fetching from API with dynamic cart logic including quantity grouping, total price calculation and real-time updates using vanilla JavaScript.",
        learnings: "Enhanced core JavaScript skills including DOM manipulation, cart logic implementation and state-like data handling without frameworks.",
        images: [vanillaJsDemo]
   },
   tr:{
        title: "Vanilla JavaScript E-Ticaret",
        description: "Sadece JavaScript kullanarak çerçevesiz oluşturulmuş dinamik bir e-ticaret sistemi.",
       

        problem:
            "Çerçevesiz tam işlevsel bir alışveriş sepeti oluşturmak, manuel durum yönetimi ve DOM manipülasyonu gerektirir.",

        solution:
            "Vanilla JavaScript kullanarak ürünleri API'den çekme, miktar gruplama, toplam fiyat hesaplama ve gerçek zamanlı güncellemeler içeren dinamik sepet mantığı uyguladım.",
        learnings: "Çerçevesiz olarak DOM manipülasyonu, sepet mantığı uygulaması ve durum benzeri veri işleme dahil olmak üzere temel JavaScript becerilerini geliştirdim.",
        images: [vanillaJsDemo]
   }
    },
    {
        id: "hangman-game",
         tech: ["HTML", "CSS", "JavaScript", "SVG"],


       en:{
         title: "Hangman Game",
        description: "A classic word guessing game built with JavaScript and SVG animations.",
       
        problem:
            "Creating an interactive word game requires managing game state, user input validation and dynamic UI updates.",

        solution:
            "Built a Hangman game with random word generation, input validation for duplicate letters and progressive SVG drawing for each wrong attempt. Added win/lose states with restart functionality.",
        learnings: "Improved algorithmic thinking, game state management and SVG-based dynamic rendering techniques."
        , images: [hangmanDemo]
       },
         tr:{
          title: "Adam Asmaca Oyunu",
          description: "JavaScript ve SVG animasyonları ile oluşturulmuş klasik bir kelime tahmin oyunu.",
          problem:
              "Etkileşimli bir kelime oyunu oluşturmak, oyun durumunu yönetmeyi, kullanıcı girişi doğrulamasını ve dinamik UI güncellemelerini gerektirir.",
          solution:
              "Rastgele kelime üretimi, tekrar eden harfler için girdi doğrulaması ve her yanlış deneme için ilerleyici SVG çizimi ile bir Adam Asmaca oyunu oluşturdum. Yenilgi/kazanç durumları ve yeniden başlatma işlevselliği ekledim.",
          learnings: "Algoritmik düşünme, oyun durumu yönetimi ve SVG tabanlı dinamik render tekniklerini geliştirdim.",
          images: [hangmanDemo]
    }},
    {
        id: "character-cards",
        tech: ["JavaScript", "REST API", "HTML", "CSS"],


      en:{
          title: "Dynamic Character Cards",
        description: "A dynamic character listing application with real-time search and filtering.",
        
        problem:
            "Rendering large datasets efficiently while maintaining fast search and smooth UX requires optimized DOM manipulation.",

        solution:
            "Generated 150 dynamic character cards from API data with grouped styling. Implemented case-insensitive real-time search with expandable input field for improved user interaction.",
        learnings: "Gained experience in dynamic rendering of large datasets and optimized search/filter UX using vanilla JavaScript.",
        images: [characterDemo]
      },
        tr:{
          title: "Dinamik Karakter Kartları",
          description: "Gerçek zamanlı arama ve filtreleme ile dinamik bir karakter listeleme uygulaması.",
          problem:
              "Büyük veri setlerini verimli bir şekilde işlemek, hızlı arama ve akıcı bir kullanıcı deneyimi sağlamak için optimize edilmiş DOM manipülasyonu gerektirir.",
          solution:
              "API verilerinden 150 dinamik karakter kartı oluşturdum. Geliştirilmiş kullanıcı etkileşimi için genişletilebilir giriş alanı ile büyük harf duyarsız gerçek zamanlı arama uyguladım.",
          learnings: "Büyük veri setlerinin dinamik render edilmesi ve optimize edilmiş arama/filtreleme kullanıcı deneyimi konusunda deneyim kazandım.",
          images: [characterDemo]
        }
    }


]