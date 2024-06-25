import { IProductData } from "./types/productDataType";
import { INavItem } from "./types/navItemType";
import { ICategoriesData } from "./types/categoriesDataType";
import { IBrandingItemType } from "./types/brandingDataType";
import { IFooterCompanyLinks, IFooterProductLinks, IFooterSupportLinks } from "./types/footerType";


// product Data
export const productData: IProductData[] = [
  {
    id: 1,
    category: "The march towards independence",
    name: "L’indépendance de Madagascar est proclamée le 26 juin 1960 à l'issue d'un processus négocié entre l'élite politique malgache et le gouvernement français, qui avait fait de l'île une colonie 65 ans plus tôt.",
    description:"The independence of Madagascar was proclaimed on June 26, 1960, following a negotiated process between the Malagasy political elite and the French government, which had made the island a colony 65 years earlier.  This process began after the Malagasy uprising of 1947, which was violently suppressed by the French government, refusing any increased autonomy for its colonies. In the 1950s, the capital, Tananarive, became the center of a struggle between Malagasy autonomists and independents, with both groups founding different parties. By the end of the decade, French territories in sub-Saharan Africa were gaining increasing autonomy, particularly when they joined the French Community founded by Charles de Gaulle during the establishment of the Fifth Republic in 1958.   However, like the other members of this federation, Madagascar quickly decided to seek formal independence. Malagasy Prime Minister Philibert Tsiranana and French Prime Minister Michel Debré signed the independence agreement on April 2, 1960, and independence was proclaimed on June 26, 1960 (which became Madagascar's national holiday). The two states remained very closely linked in the following years. Madagascar then joined various international organizations.",
    image_Url: [
      {
        public_id: "test",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc55geAWTu_G9erQRhewTucDNR5IRea7wGdA&s",
      }
    ],
    shop: {
      name: "The march towards independence",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 1099,
    discount_price: 1049,
    rating: 4,
    total_sell: 35,
    stock: 10,
  },
  {
    id: 2,
    category: "Rising of 1947 Madagascar",
    name: "The Malagasy uprising of 1947 was an insurrection that took place in 1947 and 1948 on the island of Madagascar, then a French colony.",
    description:"The Malagasy uprising of 1947 was an insurrection that took place in 1947 and 1948 on the island of Madagascar, then a French colony. It is often considered, after the Indochina crisis that erupted in December 1944, as one of the precursors of decolonization in Francophone Africa. The uprising resulted in the death of 150 French colonists and non-independentist Malagasy, and was followed by a massacre conducted by the French army, causing several thousand deaths, including many displaced people who died of hunger. The number of direct and indirect victims is still debated among historians, with estimates ranging from 11,000 to 100,000 deaths. This massacre is commemorated by a national day of mourning in Madagascar every March 29th since 1967",
    image_Url: [
      {
        public_id: "test",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/29_Mars_1947_Monument.jpg/220px-29_Mars_1947_Monument.jpg",
      },
      {
        public_id: "test",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/29_Mars_1947_Monument.jpg/220px-29_Mars_1947_Monument.jpg",
      },
    ],
    shop: {
      name: "Rising of 1947 Madagascar",
      shop_avatar: {
        public_id: "test",
        url: "#",
      },
      ratings: 4.2,
    },
    discount_price: 1099,
    rating: 5,
    total_sell: 80,
    stock: 10,
  },
  {
    id: 1,
    category: "Colonial period",
    name: "The Indigenous Guard in Madagascar: A Police Force for the 'Splendor' of the Colonial State (1896-1914)",
    description:"The 'indigenous militia,' mobilized under the protectorate of Resident General Hyppolyte Laroche (January-September 1896) initially in Tananarive and composed of former elite soldiers from the royal Merina army of the central highlands, was institutionalized in the second half of 1896 under the name 'indigenous guard.' In 1902, with the 'pacification' ostensibly completed, at least according to the authorities, the indigenous civil guard of Madagascar was disbanded as a constituted armed force. In its place, a regional police corps was created, divided into brigades and placed under the command of the civil administration. This corps remained under the institutional oversight of the security service concerning budget and personnel management. On the ground, the differentiation between indigenous guard, regional police,regional guard of Madagascar, and regional brigade of the indigenous guard caused confusion regarding their respective duties, as the differences were mainly a matter of complex chronological and administrative terminology. Nevertheless, the term indigenous guard, reaffirmed by the decree of July 8, 1906, was the most enduring and commonly used in colonial daily life. However, questions about its prerogatives led to prolonged and intense legal activity, which ultimately did not resolve the ambiguous status of the indigenous guard. Despite this, the hybrid nature of this law enforcement force, drawn from the colonized population, reflects its origins under the protectorate as the guard of the resident general and later alongside the occupying forces and the Senegalese and Malagasy riflemen during the pacification. Military in nature at the time of the conquest and pacification, the indigenous guard remained so throughout the period. As a civil force as well, the indigenous guard was placed under the administrative authority and command of provincial and district chiefs. This hybridity distinctly marked this socioprofessional law enforcement body in Madagascar.",
    image_Url: [
      {
        public_id: "test",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4gIOSQ9LvKYR4N8KNj6mKNxTPv4Kw-6PBnQ&s",
      },
      {
        public_id: "test",
        url: "#",
      },
    ],
    shop: {
      name: "Colonial period",
      shop_avatar: {
        public_id: "test",
        url: "#",
      },
      ratings: 4.2,
    },
    price: 1099,
    discount_price: 1049,
    rating: 4,
    total_sell: 75,
    stock: 10,
  },
  {
    id: 4,
    category: "Others",
    name: "Explore Madagascar Independence Historical Tours by yourself",
    description:
      "There are still many stories to discover. We trust on you to know where you come from",
    image_Url: [
      {
        public_id: "test",
        url: "data:image/jpeg;base64,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",
      },
      {
        public_id: "test",
        url: "#",
      },
    ],
    shop: {
      name: "Others",
      shop_avatar: {
        public_id: "test",
        url: "#",
      },
      ratings: 4.2,
      category: "Others",
    },
    price: 100,
    discount_price: 79,
    rating: 4,
    total_sell: 12,
    stock: 10,
  },
  {
    id: 5,
    category: "Transition to independence",
    name: "The Malagasy Republic was proclaimed on October 14, 1958, as an autonomous state within the French Community. A period of provisional government ended with the adoption of a constitution in 1959 and full independence on June 26, 1960.",
    description:  "In March 1998, Malagasy voters approved a revised constitution. The principal institutions of the Republic of Madagascar are a presidency, a parliament, a prime ministry and cabinet, and an independent judiciary. The president is elected by direct universal suffrage for a 5-year term, renewable twice. The last presidential election was held on December 3, 2006. In Madagascar, the parliament has two chambers; the National Assembly and the Senate. The last National Assembly election was held on September 23, 2007, and marked a significant reform to the parliament. The National Assembly previously had 160 members, elected for a four-year term in single-member and two-member constituencies. However, in July 2007, just before the National Assembly elections, a council of ministers agreed to reduce the number of parliamentarians from 160 to 127. Consequently, few of the 116 districts elected more than one member. Antananarivo's six districts, however, each elected two deputies. The Senate has 33 members, with 22 members elected for a six-year term, 1 for each province by provincial electors, and 11 members appointed by the president. The prime minister and members of parliament initiate legislation, and the government executes it. The president can dissolve the National Assembly. For its part, the National Assembly can pass a motion of censure and require the prime minister and council of ministers to step down. The Constitutional Court approves the constitutionality of new laws. In an effort to decentralize administration, the country's six provinces were dissolved in the constitutional referendum of 2007, in favor of 22 regions designated previously in 2004. Decentralization is a key element of Madagascar's development plans, and the transition is an ongoing process.",
    image_Url: [
      {
        public_id: "test",
        url: "https://fresques.ina.fr/independances/media/imagette/512x384/Indepe00239",
      },
      {
        public_id: "test",
        url: "#",
      },
    ],
    shop: {
      name: "Transition to independence",
      shop_avatar: {
        public_id: "test",
        url: "#",
      },
      ratings: 4.2,
    },
    price: 120,
    discount_price: 89,
    rating: 5,
    total_sell: 49,
    stock: 10,
  },
  {
    id: 1,
    name: "Madagascar Autonomous Republic (1960-1975)",
    description: "The island gained independence on June 26, 1960, but the First Malagasy Republic remained very closely tied to France through cooperation agreements. President Tsiranana, criticized by the population for his support of French interests, faced growing opposition, particularly the student strike that spread from the capital to the provinces, and he left power in 1972. Philibert Tsiranana, the first Malagasy president, granted full powers to General Gabriel Ramanantsoa, who decided to organize a referendum to formalize his power for a transitional period. With the referendum endorsing him, he created a national unity government, which he led until 1975, before passing the baton to the popular Gendarmerie Colonel Richard Ratsimandrava. The latter was assassinated after a week, on February 11, 1975, at 8 p.m. After General Ratsimandrava's assassination, Madagascar was led by a National Military Directorate Committee chaired by General Andriamahazo.",
    image_Url: [
      {
        public_id: "test",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Philibert_Tsiranana_1962.jpg/220px-Philibert_Tsiranana_1962.jpg",
      },
      {
        public_id: "test",
        url: "#",
      },
    ],
    shop: {
      name: "Madagascar Autonomous Republic",
      shop_avatar: {
        public_id: "test",
        url: "#",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
    category: "Music and Gaming",
  },
  {
    id: 4,
    name: "The Victory of MDRM",
    category: "Others",
    description: "The island gained independence on June 26, 1960, but the First Malagasy Republic remained very closely tied to France through cooperation agreements. President Tsiranana, criticized by the population for his support of French interests, faced growing opposition, particularly the student strike that spread from the capital to the provinces, and he left power in 1972. Philibert Tsiranana, the first Malagasy president, granted full powers to General Gabriel Ramanantsoa, who decided to organize a referendum to formalize his power for a transitional period. With the referendum endorsing him, he created a national unity government, which he led until 1975, before passing the baton to the popular Gendarmerie Colonel Richard Ratsimandrava. The latter was assassinated after a week, on February 11, 1975, at 8 p.m. After General Ratsimandrava's assassination, Madagascar was led by a National Military Directorate Committee chaired by General Andriamahazo.",
    image_Url: [
      {
        public_id: "test",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Rc8plI4iCE3gbztg6z1RGXAceMQgvYrvfw&s",
      },
      {
        
        public_id: "test",
        url: "#",
      },
    ],
    shop: {
      name: "The Victory of MDRM",
      shop_avatar: {
        public_id: "test",
        url: "#",
      },
      ratings: 4.2,
    },
    price: 100,
    discount_price: 79,
    rating: 4,
    total_sell: 62,
    stock: 10,
  },
  {
    id: 1,
    category: "Political parties during the colonial period",
    name: "In Madagascar, most of the constituencies elect one member of the national assembly; however, several elect two. This means that the political party with most votes may get an absolute majority in the national assembly without an absolute majority of the votes. This system makes coalition governments less likely.",
    description:"Madagascar Colonial Era, 1894-1960. The French largely ended the attempts of Malagasy rulers to stymie foreign influence by declaring a protectorate over the entire island in 1894. A protectorate over northwest Madagascar, based on treaties signed with the Sakalava during the 1840s, had existed since 1882. But Queen Ranavalona III refused to recognize the 1894 effort to subordinate her kingdom to French rule. As a result, a French expeditionary force occupied Antananarivo in September 1895. A wave of antiforeign, anti-Christian rioting ensued. In 1896 France declared Madagascar a French colony and deported the queen and the prime minister--first to Reunion, then to Algeria. Nationalist sentiment against French colonial rule eventually emerged among a small group of Merina intellectuals who had been educated by Europeans and exposed to Western intellectual thought. The group, based in Antananarivo, was led by a Malagasy Protestant clergyman, Pastor Ravelojoana, who was especially inspired by the Japanese model of modernization. A secret society dedicated to affirming Malagasy cultural identity was formed in 1913, calling itself Iron and Stone Ramification (Vy Vato Sakelika--VVS). Although the VVS was brutally suppressed, its actions eventually led French authorities to provide the Malagasy with their first representative voice in government. Malagasy veterans of military service in France during World War I bolstered the embryonic nationalist movement. Throughout the 1920s, the nationalists stressed labor reform and equality of civil and political status for the Malagasy, stopping short of advocating independence. For example, the French League for Madagascar under the leadership of Anatole France demanded French citizenship for all Malagasy people in recognition of their country's wartime contribution of soldiers and resources. A number of veterans who remained in France were exposed to French political thought, most notably the anticolonial and proindependence platforms of French socialist parties. Jean Ralaimongo, for example, returned to Madagascar in 1924 and became embroiled in labor questions that were causing considerable tension throughout the island.",
    image_Url: [
      {
        public_id: "test",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Malagasi_Embassy_to_Europe_1863_Rainifiringa_Ralahimaholy_with_Rev_John_Duffus_and_Rasatranabo_na_Rainandrianandraina.jpg/220px-Malagasi_Embassy_to_Europe_1863_Rainifiringa_Ralahimaholy_with_Rev_John_Duffus_and_Rasatranabo_na_Rainandrianandraina.jpg",
      },
      {
        public_id: "test",
        url: "#",
      },
    ],
    shop: {
      name: "Political parties during the colonial period",
      shop_avatar: {
        public_id: "test",
        url: "#",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
  },
  {
    id: 2,
    category: "Rising of 1947 Madagascar",
    name: "The Great Revolt of Madagascar (1947)",
    description:"On March 29 and 30, 1947, an insurrection erupted on the island of Madagascar, then a French colony. Hundreds of Malagasy attacked cities, military camps, and colonial settlements. The causes of the insurrection are primarily rooted in the structural flaws of the colonial system established in the late 19th century: forced labor, the indigenous code, indigenous justice (administered by officials who wielded and blurred powers), and everyday colonial racism. From October 1946 onward, the colonial authorities adopted a hardened repression policy, which included the arrest of numerous leaders of the nationalist party, the Malagasy Democratic Movement for Renewal (MDRM). Simultaneously within the MDRM, a radical faction grew, rejecting the idea of independence 'within the framework of the French Union,' as defined in the new Constitution of the Fourth Republic. A secret society, the Jina (Nationalist Youth), was behind the insurrection of March 29, 1947.",
    image_Url: [
      {
        public_id: "test",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmifZ6HfwMPQ0_XmdhhuuxBoy1H_vwQLbRaQ&s",
      },
      {
        public_id: "test",
        url: "#",
      },
    ],
    shop: {
      name: "Rising of 1947 Madagascar",
      shop_avatar: {
        public_id: "test",
        url: "#",
      },
      ratings: 4.2,
    },
    discount_price: 1099,
    rating: 5,
    total_sell: 20,
    stock: 10,
  },
  {
    id: 1,
    category: "Madagascar Autonomous Republic (1960-1975)",
    name: "The First Republic was the regime in Madagascar from October 14, 1958, until December 30, 1975, when the new constitution was proclaimed, establishing the Malagasy Democratic Republic.",
    description:"After the adoption of the French Constitution on October 4, 1958, Madagascar became, on October 14, 1958, a republic member of the Community. Dear Members, By virtue of the powers granted to our Congress by Article 76 of the French Constitution and Article 1 of General de Gaulle's ordinance, I have the honor to proclaim that Madagascar is a State and that this State is a Republic within the Community provided for by the Constitution of October 4, 1958. Norbert Zafimahova, Proclamation by President Zafimahova, President of the Congress of Provincial Assemblies, October 14, 1958, at 10:50 AM. The Congress approved the proclamation of the Malagasy Republic with 208 votes in favor, 0 against, and 26 abstentions, with 6 members absent. A first Constitution was adopted and came into force on April 29, 1959. Independence was proclaimed on June 26, 1960. The region experienced a revolt in 1971, bloodily suppressed by the authorities, resulting in between 800 and 1,000 deaths.",
    image_Url: [
      {
        public_id: "test",
        url: "https://tribuneonlineng.com/wp-content/uploads/2022/09/1960-africa.jpg",
      },
      {
        public_id: "test",
        url: "#",
      },
    ],
    shop: {
      name: "Madagascar Autonomous Republic (1960-1975)",
      shop_avatar: {
        public_id: "test",
        url: "#",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
  },
];

// categories data
export const categoriesData: ICategoriesData[] = [
  {
    id: 1,
    title: "The march towards independence",
    subTitle: "",
    image_Url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jour_de_l%27Ind%C3%A9pendance_malgache.JPG/1024px-Jour_de_l%27Ind%C3%A9pendance_malgache.JPG"
  },
  {
    id: 2,
    title: "Colonial period",
    subTitle: "",
    image_Url:
      "https://www.francetvinfo.fr/pictures/RCay1NS0bEudbjUpvmXH0ijRSM4/0x1:750x423/2656x1494/filters:format(avif):quality(50)/2018/11/27/Militaires-fran-ais-Madagascar-en-1947_0.jpg",
  },
  {
    id: 3,
    title: "Insurrection de 1947",
    subTitle: "",
    image_Url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/29_Mars_1947_Monument.jpg/640px-29_Mars_1947_Monument.jpg",
  },
  {
    id: 4,
    title: "Transition to independence",
    subTitle: "",
    image_Url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9722CLDhpDpeKLr9IMMNAMJITQ5CrZNAr-Q&s",
  },
  {
    id: 5,
    title: "The rising of 1947",
    subTitle: "",
    image_Url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4H39T1ox2uzs5qNcZ49iREz_Xbwfcw60bA&s",
  },
  {
    id: 6,
    title: "Madagascar Autonomous Republic",
    subTitle: "",
    image_Url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3BCxi8AB-PgClbopRRKHqoIioms-nZht91g&s",
  },
  {
    id: 7,
    title: "The Victory of MDRM",
    subTitle: "",
    image_Url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2pO8Qdr3efH52C2Ot2TETE_VUDkU7sPP7g&s",
  },
  {
    id: 8,
    title: "Political parties during the colonial period",
    subTitle: "",
    image_Url:
      "https://i0.wp.com/midi-madagasikara.mg/wp-content/uploads/2018/07/MDRM.jpg?fit=490%2C336&ssl=1",
  },
  {
    id: 9,
    title: "colonial army",
    subTitle: "",
    image_Url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNtLz5N_0pcV8-U4FsUyIRzxbpNaojsA9Kmw&s",
  },
  {
    id: 10,
    title: "Others",
    subTitle: "",
    image_Url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJiGhWskrnxhSKczxMGadLkqndSa1Un_U-g&s",
  },
];

// navigation Data
export const navItems:INavItem[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Historical Tours",
    url: "/historical-tours",
  },
  {
    title: "FAQ",
    url: "/faq",
  },
];

export const brandingData: IBrandingItemType[] = [
  {
    id: 1,
    title: "Discover Madagascar's Rich History",
    Description: "Madagascar's pivotal moments of independence.",
    icon: ""
  },
  {
    id: 2,
    title: "Daily Insights",
    Description: "Daily tours revealing historical landmarks.",
    icon: "",
  },
  {
    id: 4,
    title: "For Free, For Love",
    Description: "exploring Madagascar's cultural heritage freely",
    icon: "",
  },
  {
    id: 5,
    title: "Expert Guides",
    Description: "passionate guides steeped in Madagascar's history",
    icon: "",
  },
];

export const footercompanyLinks:IFooterCompanyLinks[] = [
  {
    name: "Game & Video",
  },
  {
    name: "Phone &Tablets",
  },
  {
    name: "Computers & Laptop",
  },
  {
    name: "Sport Watches",
  },
  {
    name: "Events",
  },
];


export const footerSupportLinks:IFooterSupportLinks[] = [
  {
    name: "FAQ",
  },
  {
    name: "Reviews",
  },
  {
    name: "Contact Us",
  },
  {
    name: "Shipping",
  },
  {
    name: "Live chat",
  },
];