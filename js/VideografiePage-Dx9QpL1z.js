// Videografie & Motion Design Page - EasyTech IT-Solutions
import{j as e,r as v}from"./react-vendor-DAatkCok.js";
import{L as k}from"./react-router-D9cGlsqA.js";
import{S as W,P as V_SEO,D as z}from"./SEO-CjiI-g6D.js";
import{H as M}from"./index-CBKwgmPr.js";
import{u as F}from"./useIsMobile-rGuOlH6x.js";
import{o as C}from"./constants-B_Pwrs0w.js";
import{m as E,A as B}from"./motion-DRhMUUjo.js";
import{A as AnimatedText}from"./AnimatedText-CJ4fDMH9.js";
import{T as TestimonialsSection}from"./TestimonialsSection-97FpIDX4.js";
import{a as allProjects,P as ProjectCard}from"./CaseStudies-Z_HWObva.js";
import"./vendor-misc-CNpwfz3n.js";

const H="'Satoshi', sans-serif";
const SERIF="'DM Serif Display', 'Cormorant Garamond', Georgia, serif";
const MOUNTAIN_VIDEO="/assets/From%20Klickpin.com-%20Minimal%20Mountain%20Cabin%20Inspiration%20Worth%20Trying-pin-id-1125829606877714781.mp4";

// --- SVG Icons ---
function IconVideo(t){
  return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",className:t.className||"w-5 h-5",style:t.style,children:[
    e.jsx("path",{d:"m22 7-8 5 8 5V7Z"}),
    e.jsx("rect",{width:"14",height:"12",x:"2",y:"6",rx:"2"})
  ]});
}
function IconPlay(t){
  return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:t.className||"w-5 h-5",style:t.style,children:
    e.jsx("polygon",{points:"6 3 20 12 6 21 6 3"})
  });
}
function IconArrowRight(t){
  return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",className:t.className||"w-4 h-4",style:t.style,children:[
    e.jsx("path",{d:"M5 12h14"}),
    e.jsx("path",{d:"m12 5 7 7-7 7"})
  ]});
}
function IconCheck(t){
  return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:t.className||"w-4 h-4",style:t.style,children:
    e.jsx("polyline",{points:"20 6 9 17 4 12"})
  });
}
function IconSparkles(t){
  return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",className:t.className||"w-5 h-5",style:t.style,children:[
    e.jsx("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"}),
    e.jsx("path",{d:"M20 3v4"}),
    e.jsx("path",{d:"M22 5h-4"}),
    e.jsx("path",{d:"M4 17v2"}),
    e.jsx("path",{d:"M5 18H3"})
  ]});
}
function IconCamera(t){
  return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",className:t.className||"w-5 h-5",style:t.style,children:[
    e.jsx("path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"}),
    e.jsx("circle",{cx:"12",cy:"13",r:"3"})
  ]});
}
function IconLayers(t){
  return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",className:t.className||"w-5 h-5",style:t.style,children:[
    e.jsx("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),
    e.jsx("polyline",{points:"2 17 12 22 22 17"}),
    e.jsx("polyline",{points:"2 12 12 17 22 12"})
  ]});
}
function IconUsers(t){
  return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",className:t.className||"w-5 h-5",style:t.style,children:[
    e.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),
    e.jsx("circle",{cx:"9",cy:"7",r:"4"}),
    e.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),
    e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})
  ]});
}
function IconFilm(t){
  return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",className:t.className||"w-5 h-5",style:t.style,children:[
    e.jsx("rect",{width:"20",height:"20",x:"2",y:"2",rx:"2.18",ry:"2.18"}),
    e.jsx("line",{x1:"7",x2:"7",y1:"2",y2:"22"}),
    e.jsx("line",{x1:"17",x2:"17",y1:"2",y2:"22"}),
    e.jsx("line",{x1:"2",x2:"22",y1:"12",y2:"12"}),
    e.jsx("line",{x1:"2",x2:"7",y1:"7",y2:"7"}),
    e.jsx("line",{x1:"2",x2:"7",y1:"17",y2:"17"}),
    e.jsx("line",{x1:"17",x2:"22",y1:"17",y2:"17"}),
    e.jsx("line",{x1:"17",x2:"22",y1:"7",y2:"7"})
  ]});
}
function IconChevron(t){
  return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",className:t.className||"w-5 h-5",style:t.style,children:
    e.jsx("polyline",{points:t.open?"18 15 12 9 6 15":"6 9 12 15 18 9"})
  });
}

// --- Standard Section Canvas ---
function SectionCanvas({id,variant="fine",dark=!1,children}){
  return e.jsxs("section",{
    id:id,
    className:"relative px-4 sm:px-6 lg:px-10 py-16 lg:py-24",
    style:{background:"#2e4a6f"},
    children:[
      e.jsx(z,{variant:variant}),
      e.jsx("div",{
        className:"max-w-[1500px] mx-auto",
        children:e.jsx("div",{
          style:{
            backgroundColor:dark?"#070e1b":"#ffffff",
            borderRadius:"clamp(32px, 5vw, 64px)",
            padding:"clamp(24px, 5vw, 64px)",
            boxShadow:C,
            color:dark?"#ffffff":"rgb(10, 10, 10)"
          },
          children:children
        })
      })
    ]
  });
}

// --- Standard Section Header ---
function SectionHeader({badge,titleLine1,titleLine2,description,dark=!1}){
  return e.jsxs("div",{
    className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16",
    children:[
      e.jsxs("div",{
        children:[
          e.jsxs("div",{
            className:"flex items-center gap-2 mb-3",
            children:[
              e.jsx("span",{className:`w-[7px] h-[7px] rounded-full ${dark?"bg-[#38bdf8]":"bg-[#2e4a6f]"}`}),
              e.jsx("span",{
                style:{
                  fontFamily:H,
                  fontSize:"14px",
                  fontWeight:600,
                  color:dark?"#38bdf8":"#2e4a6f",
                  textTransform:"uppercase",
                  letterSpacing:"0.08em"
                },
                children:badge
              })
            ]
          }),
          e.jsxs("h2",{
            style:{
              fontFamily:H,
              fontSize:"clamp(28px, 4.2vw, 48px)",
              fontWeight:700,
              letterSpacing:"-0.03em",
              lineHeight:1.15,
              color:dark?"#ffffff":"rgb(10, 10, 10)"
            },
            children:[
              e.jsx("div",{className:"overflow-hidden",children:e.jsx(AnimatedText,{text:titleLine1})}),
              e.jsx("div",{className:"overflow-hidden",children:e.jsx(AnimatedText,{text:titleLine2,delay:.15})})
            ]
          })
        ]
      }),
      description&&e.jsx("p",{
        className:"max-w-[480px] text-[15px] sm:text-[16px] leading-relaxed",
        style:{
          fontFamily:H,
          color:dark?"rgba(255,255,255,0.65)":"#64748b"
        },
        children:description
      })
    ]
  });
}

// --- Pill Button ---
function PillButton({to,text,primary=!0}){
  if(primary){
    return e.jsxs(k,{
      to:to,
      className:"inline-flex items-center gap-2 group transition-all duration-300 hover:shadow-[0_4px_20px_-6px_rgba(46,74,111,0.25)] hover:scale-[1.02]",
      style:{
        backgroundColor:"#2e4a6f",
        borderRadius:"99px",
        padding:"6px 6px 6px 22px",
        textDecoration:"none"
      },
      children:[
        e.jsx("span",{
          style:{fontFamily:H,fontSize:"15px",fontWeight:500,color:"#fff"},
          children:e.jsx(M,{text:text})
        }),
        e.jsx("div",{
          className:"flex items-center justify-center shrink-0 w-9 h-9 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors",
          children:e.jsx(IconArrowRight,{className:"w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform"})
        })
      ]
    });
  }
  return e.jsxs(k,{
    to:to,
    className:"inline-flex items-center gap-2 group transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]",
    style:{
      backgroundColor:"transparent",
      borderRadius:"99px",
      padding:"6px 6px 6px 20px",
      border:"1px solid rgba(255,255,255,0.25)",
      textDecoration:"none"
    },
    children:[
      e.jsx("span",{
        style:{fontFamily:H,fontSize:"15px",fontWeight:500,color:"#fff"},
        children:e.jsx(M,{text:text})
      }),
      e.jsx("div",{
        className:"flex items-center justify-center shrink-0 w-9 h-9 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors",
        children:e.jsx(IconArrowRight,{className:"w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform"})
      })
    ]
  });
}
// --- Hero Section ---
function HeroSection(){
  return e.jsxs("section",{
    className:"relative min-h-[68vh] flex flex-col justify-center overflow-hidden",
    style:{backgroundColor:"#070e1b"},
    children:[
      e.jsx("video",{
        src:MOUNTAIN_VIDEO,
        autoPlay:!0,
        muted:!0,
        loop:!0,
        playsInline:!0,
        preload:"auto",
        className:"absolute inset-0 w-full h-full object-cover pointer-events-none opacity-45 scale-105"
      }),
      e.jsx("div",{
        className:"absolute inset-0 pointer-events-none",
        style:{
          background:"linear-gradient(180deg, rgba(7,14,27,0.72) 0%, rgba(7,14,27,0.52) 40%, rgba(10,20,38,0.78) 75%, #2e4a6f 100%)"
        }
      }),
      e.jsx(z,{variant:"fine"}),
      e.jsx("div",{
        className:"relative z-10 max-w-[1500px] w-full mx-auto px-5 sm:px-8 lg:px-12 pt-[124px] pb-12 flex flex-col items-start text-left",
        children:e.jsxs(E.div,{
          initial:{opacity:0,y:20},
          animate:{opacity:1,y:0},
          transition:{duration:.7,ease:[.22,1,.36,1]},
          className:"max-w-[880px] flex flex-col items-start",
          children:[
            e.jsxs("div",{
              className:"inline-flex items-center gap-3 mb-4",
              children:[
                e.jsx("div",{className:"w-6 h-[1px] bg-white/40"}),
                e.jsx("span",{
                  style:{
                    fontFamily:H,
                    fontSize:"12px",
                    fontWeight:600,
                    letterSpacing:"0.12em",
                    color:"#93c5fd",
                    textTransform:"uppercase"
                  },
                  children:"SOCIAL MEDIA & VIDEOGRAFIE"
                }),
                e.jsx("div",{className:"w-6 h-[1px] bg-white/40"})
              ]
            }),
            e.jsxs("h1",{
              style:{
                fontSize:"clamp(34px, 5.2vw, 64px)",
                fontWeight:400,
                lineHeight:1.08,
                letterSpacing:"-0.03em",
                color:"#ffffff"
              },
              children:[
                e.jsx("span",{
                  style:{fontFamily:SERIF,display:"block"},
                  children:"Videografie &"
                }),
                e.jsx("span",{
                  style:{fontFamily:SERIF,fontStyle:"italic",color:"#38bdf8",display:"block"},
                  children:"Motion Design"
                })
              ]
            }),
            e.jsx("p",{
              className:"mt-5 text-[15px] sm:text-[17px] text-white/80 leading-relaxed max-w-[640px]",
              style:{fontFamily:H},
              children:"Wir inszenieren Unternehmen mit cineastischen Social Media Videos und dynamischem Motion Design. Von viralen Instagram Reels & TikToks bis zum High-End Unternehmensfilm – für messbar mehr Reichweite, Anfragen und qualifizierte Fachkräfte."
            }),
            e.jsxs("div",{
              className:"mt-7 flex flex-wrap items-center gap-4",
              children:[
                e.jsxs(k,{
                  to:"/kontakt",
                  className:"inline-flex items-center gap-2 group transition-all duration-300 hover:shadow-[0_4px_24px_-4px_rgba(56,189,248,0.4)] hover:scale-[1.02]",
                  style:{
                    backgroundColor:"#ffffff",
                    borderRadius:"99px",
                    padding:"6px 6px 6px 24px",
                    textDecoration:"none"
                  },
                  children:[
                    e.jsx("span",{
                      style:{fontFamily:H,fontSize:"15px",fontWeight:600,color:"#0a0a0a"},
                      children:e.jsx(M,{text:"Videoprojekt anfragen"})
                    }),
                    e.jsx("div",{
                      className:"flex items-center justify-center shrink-0 w-9 h-9 rounded-full bg-[#2e4a6f] text-white transition-transform group-hover:translate-x-0.5",
                      children:e.jsx(IconArrowRight,{className:"w-4 h-4"})
                    })
                  ]
                }),
                e.jsxs(k,{
                  to:"#referenzen",
                  className:"inline-flex items-center gap-2 group transition-all duration-300 hover:bg-white/10 hover:border-white/40",
                  style:{
                    backgroundColor:"rgba(255,255,255,0.06)",
                    borderRadius:"99px",
                    padding:"6px 20px",
                    border:"1px solid rgba(255,255,255,0.22)",
                    backdropFilter:"blur(8px)",
                    textDecoration:"none"
                  },
                  children:[
                    e.jsx("span",{
                      style:{fontFamily:H,fontSize:"15px",fontWeight:500,color:"#ffffff"},
                      children:e.jsx(M,{text:"Referenzen & Arbeiten"})
                    }),
                    e.jsx(IconArrowRight,{className:"w-4 h-4 text-white/70 group-hover:translate-x-0.5 group-hover:text-white transition-all"})
                  ]
                })
              ]
            }),
            e.jsxs("div",{
              className:"mt-10 pt-7 border-t border-white/15 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6",
              children:[
                e.jsxs("div",{
                  children:[
                    e.jsx("div",{style:{fontFamily:H,fontSize:"clamp(22px, 2.5vw, 30px)",fontWeight:700,color:"#38bdf8",letterSpacing:"-0.02em"},children:"+350%"}),
                    e.jsx("div",{className:"text-xs sm:text-[13px] text-white/60 mt-0.5",style:{fontFamily:H},children:"Mehr Engagement"})
                  ]
                }),
                e.jsxs("div",{
                  children:[
                    e.jsx("div",{style:{fontFamily:H,fontSize:"clamp(22px, 2.5vw, 30px)",fontWeight:700,color:"#ffffff",letterSpacing:"-0.02em"},children:"4K Cine"}),
                    e.jsx("div",{className:"text-xs sm:text-[13px] text-white/60 mt-0.5",style:{fontFamily:H},children:"Cinema Kameras & Drohne"})
                  ]
                }),
                e.jsxs("div",{
                  children:[
                    e.jsx("div",{style:{fontFamily:H,fontSize:"clamp(22px, 2.5vw, 30px)",fontWeight:700,color:"#38bdf8",letterSpacing:"-0.02em"},children:"9:16 & 16:9"}),
                    e.jsx("div",{className:"text-xs sm:text-[13px] text-white/60 mt-0.5",style:{fontFamily:H},children:"Multi-Format Auslieferung"})
                  ]
                }),
                e.jsxs("div",{
                  children:[
                    e.jsx("div",{style:{fontFamily:H,fontSize:"clamp(22px, 2.5vw, 30px)",fontWeight:700,color:"#ffffff",letterSpacing:"-0.02em"},children:"2D & 3D"}),
                    e.jsx("div",{className:"text-xs sm:text-[13px] text-white/60 mt-0.5",style:{fontFamily:H},children:"Motion Design & VFX"})
                  ]
                })
              ]
            })
          ]
        })
      })
    ]
  });
}

// --- Section 1: Referenzen & Arbeiten (Crucial User Requirement) ---
const clientReferences = [
  {
    id: "home-of-detailing",
    client: "Home of Detailing",
    category: "reels",
    format: "9:16 Social Reels & 16:9 Showreel",
    industry: "Fahrzeugveredelung & Keramikversiegelung",
    metric: "+420% Reichweite",
    metricLabel: "35.000+ organische Views",
    headline: "Cineastischer Vorher/Nachher-Look mit High-Gloss-Fokus",
    description: "Dynamische Kurzvideos mit treibendem Beat, Makroaufnahmen der Lackversiegelung und visuellem Vorher/Nachher-Effekt. Perfekt abgestimmt auf die Ästhetik von Sport- und Luxuswagen.",
    slug: "home-of-detailing",
    highlights: ["4K Makro-Detailaufnahmen", "Dynamisches Sounddesign & Beat-Cuts", "Viraler Vorher/Nachher-Effekt"],
    aspectRatio: "9:16",
    accentColor: "#f59e0b",
    tag: "Social Media Kampagne"
  },
  {
    id: "neo-san",
    client: "Neo-San",
    category: "imagefilm",
    format: "16:9 Imagefilm & 9:16 Recruiting",
    industry: "Sanierung & Facility Services",
    metric: "3x mehr Bewerber",
    metricLabel: "Qualifizierte Fachkräfte in 30 Tagen",
    headline: "Industrielle Dokumentation & authentische Team-Einblicke",
    description: "Cineastische Dokumentation von Großprojekten im laufenden Betrieb, 4K Drohnenaufnahmen von Hallen und Flugzeugen sowie animierte Motion Graphics für B2B-Kunden und Mitarbeitergewinnung.",
    slug: "neo-san",
    highlights: ["4K Drohnenüberflüge & Hallenaufnahmen", "Mitarbeiterinterviews & Storytelling", "2D/3D Motion Graphics & Animation"],
    aspectRatio: "16:9",
    accentColor: "#38bdf8",
    tag: "Unternehmensfilm & B2B"
  },
  {
    id: "citytaxi-elmshorn",
    client: "CityTaxi Elmshorn",
    category: "reels",
    format: "9:16 Kurzvideo-Serie & Story Ads",
    industry: "Flotte & Mobilitätsdienstleister",
    metric: "+65% App-Buchungen",
    metricLabel: "Spürbare Steigerung der Online-Fahrten",
    headline: "24/7 Mobilität in dynamischen Hochkant-Sequenzen",
    description: "Schneller, packender Schnitt mit animierten Typo-Captions, trendbasiertem Sounddesign und lokaler Reichweiten-Kampagne für die CityTaxi-Buchungs-App in Elmshorn und Umland.",
    slug: "citytaxi-elmshorn",
    highlights: ["Schnelle Cuts & moderne Typo-VFX", "Lokales Geo-Targeting auf Social Media", "Nahtlose Conversion zur Taxi-App"],
    aspectRatio: "9:16",
    accentColor: "#10b981",
    tag: "Brand Awareness & Ads"
  },
  {
    id: "cafeampark-hamburg",
    client: "Cafe am Park",
    category: "reels",
    format: "9:16 Food & Atmosphere Reels",
    industry: "Lifestyle & Premium Gastronomie",
    metric: "2x Profilaufrufe",
    metricLabel: "Vollauslastung an Wochenenden",
    headline: "Sinnliche Food-Inszenierung & atmosphärische Lichtstimmung",
    description: "Ästhetische Kurzvideos mit warmem Farbgrading, Makroaufnahmen feinster Kaffee- und Dessert-Kreationen sowie stimmungsvollem Soundtrack für eine unwiderstehliche Social-Media-Präsenz.",
    slug: "cafeampark-hamburg",
    highlights: ["Warme Kinolook-Farbkorrektur", "ASMR Sounddesign bei Zubereitung", "Hohe virale Interaktion & Saves"],
    aspectRatio: "9:16",
    accentColor: "#f43f5e",
    tag: "Viral Content & Reels"
  },
  {
    id: "arc-lackiererei",
    client: "ARC Lackiererei",
    category: "drohne",
    format: "9:16 & 1:1 Social Content Serie",
    industry: "High-End Lackiertechnik & Handwerk",
    metric: "85.000+ Views",
    metricLabel: "Organische Reichweite auf TikTok & Instagram",
    headline: "Präzision & Transformation im Handwerk",
    description: "Faszinierende Einblicke in die moderne Lackierkabine, Spachtel- und Finish-Prozesse im Zeitraffer und packende Vorher-Nachher-Vergleiche, die das handwerkliche Können unter Beweis stellen.",
    slug: "arc-lackiererei",
    highlights: ["Zeitraffer & Makro-Sprühnebel-Shots", "Vorher/Nachher Karosserie-Veredelung", "Authentischer Handwerks-Fokus"],
    aspectRatio: "9:16",
    accentColor: "#a855f7",
    tag: "Prozess-Dokumentation"
  },
  {
    id: "ncbau",
    client: "NC Bau GmbH",
    category: "drohne",
    format: "16:9 Drohnen-Doku & Showreel",
    industry: "Generalunternehmer & Hochbau",
    metric: "2 Folgeaufträge",
    metricLabel: "Direkt über Video-Showcase generiert",
    headline: "Eindrucksvolle 4K Luftaufnahmen von Großbaustellen",
    description: "Vollständige Baudokumentation aus der Vogelperspektive: Vom Rohbau bis zur schlüsselfertigen Übergabe. Perfekt geeignet für Investoren, Ausschreibungen und den Website-Header.",
    slug: "ncbau",
    highlights: ["Zertifizierte 4K Drohnenflüge", "Baufortschritts-Dokumentation", "Prestige-Showreel für B2B"],
    aspectRatio: "16:9",
    accentColor: "#0284c7",
    tag: "Drohnenaufnahmen & Doku"
  }
];

const partnerLogos = [
  { name: "Home of Detailing", src: "/assets/logo-home-of-detailing-BJSOqYLJ.png" },
  { name: "Neo-San", src: "/assets/logo-neo-san-MbHtj-iA.png" },
  { name: "CityTaxi Elmshorn", src: "/assets/logo-citytaxi-DclI7JBa.png" },
  { name: "Cafe am Park", src: "/assets/logo-cafe-am-park-DTWSCFSx.png" },
  { name: "ARC Lackiererei", src: "/assets/logo-arc-BQoAkLpK.png" },
  { name: "NC Bau GmbH", src: "/assets/logo-ncbau-Da_a0inO.png" },
  { name: "Barber Brothers", src: "/assets/logo-barber-brothers-CGawaBYV.svg" },
  { name: "Elbchain", src: "/assets/logo-elbchain-BkU2iQLE.png" },
  { name: "Renova", src: "/assets/logo-renova-C_w_ItZZ.png" }
];
function ReferencesSection(){
  const [filter, setFilter] = v.useState("alle");
  const filtered = filter === "alle" ? clientReferences : clientReferences.filter(r => r.category === filter);

  return e.jsx(SectionCanvas,{
    id:"referenzen",
    variant:"fine",
    children:e.jsxs("div",{
      children:[
        e.jsx(SectionHeader,{
          badge:"Ausgewählte Video-Arbeiten & Referenzen",
          titleLine1:"Reale Kampagnen,",
          titleLine2:"Messbare Reichweite.",
          description:"Für regionale Handwerksbetriebe, Dienstleister, Gastronomie und B2B-Unternehmen: Sehen Sie, wie cineastische Social Media Videos echte Ergebnisse in Reichweite, Umsatz und Mitarbeitergewinnung verwandeln."
        }),

        // Filter Tabs
        e.jsx("div",{
          className:"flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-gray-100",
          children:[
            { id:"alle", label:"Alle Arbeiten (6)" },
            { id:"reels", label:"9:16 Social Reels (3)" },
            { id:"imagefilm", label:"16:9 Imagefilme (1)" },
            { id:"drohne", label:"Drohne & Doku (2)" }
          ].map(tab => e.jsx("button",{
            key:tab.id,
            onClick:()=>setFilter(tab.id),
            className:`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 ${
              filter === tab.id
                ? "bg-[#2e4a6f] text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`,
            style:{fontFamily:H},
            children:tab.label
          }))
        }),

        // Reference Cards Grid
        e.jsx("div",{
          className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
          children:filtered.map((item, index) => e.jsxs(E.div,{
            key:item.id,
            initial:{opacity:0,y:20},
            whileInView:{opacity:1,y:0},
            viewport:{once:!0},
            transition:{duration:.5,delay:index*.08},
            className:"group flex flex-col bg-[#f8fafc] rounded-3xl overflow-hidden border border-slate-200/80 hover:border-slate-300 hover:shadow-xl transition-all duration-300",
            children:[
              // Simulated Video Player Frame
              e.jsxs("div",{
                className:"relative w-full overflow-hidden bg-gradient-to-br from-slate-900 to-[#070e1b] flex items-center justify-center",
                style:{minHeight:"220px"},
                children:[
                  // Ambient glow
                  e.jsx("div",{
                    className:"absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity",
                    style:{
                      background:`radial-gradient(circle at 50% 50%, ${item.accentColor} 0%, transparent 70%)`
                    }
                  }),
                  // Subtle Grid
                  e.jsx("div",{
                    className:"absolute inset-0 pointer-events-none opacity-15",
                    style:{
                      backgroundImage:"linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                      backgroundSize:"24px 24px"
                    }
                  }),
                  // Top Tags Bar
                  e.jsxs("div",{
                    className:"absolute top-3 inset-x-3 flex items-center justify-between text-xs",
                    children:[
                      e.jsxs("span",{
                        className:"px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-white/90 border border-white/10 flex items-center gap-1.5 font-medium",
                        children:[
                          e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"}),
                          item.format.split("&")[0]
                        ]
                      }),
                      e.jsx("span",{
                        className:"px-2 py-0.5 rounded text-[11px] font-mono tracking-wider bg-black/40 text-white/70",
                        children:"4K 60FPS"
                      })
                    ]
                  }),
                  // Center Play Action
                  e.jsxs("div",{
                    className:"relative z-10 flex flex-col items-center gap-2",
                    children:[
                      e.jsx("div",{
                        className:"w-14 h-14 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#2e4a6f] group-hover:border-[#2e4a6f] transition-all duration-300",
                        children:e.jsx(IconPlay,{className:"w-6 h-6 ml-0.5"})
                      }),
                      e.jsx("span",{
                        className:"text-xs text-white/75 font-medium tracking-wide group-hover:text-white transition-colors",
                        style:{fontFamily:H},
                        children:"Showcase Vorschau"
                      })
                    ]
                  }),
                  // Bottom Seekbar & Meta
                  e.jsxs("div",{
                    className:"absolute bottom-3 inset-x-3 flex items-center justify-between text-[11px] text-white/60 font-mono",
                    children:[
                      e.jsx("span",{children:"00:15 / 00:30"}),
                      e.jsxs("div",{
                        className:"flex items-center gap-1",
                        children:[
                          e.jsx("span",{className:"w-1 h-3 bg-white/50 rounded-full"}),
                          e.jsx("span",{className:"w-1 h-4 bg-white/70 rounded-full"}),
                          e.jsx("span",{className:"w-1 h-2 bg-white/40 rounded-full"}),
                          e.jsx("span",{className:"w-1 h-5 bg-white/80 rounded-full"})
                        ]
                      })
                    ]
                  })
                ]
              }),

              // Content Body
              e.jsxs("div",{
                className:"p-6 flex-1 flex flex-col justify-between",
                children:[
                  e.jsxs("div",{
                    children:[
                      e.jsxs("div",{
                        className:"flex items-center justify-between gap-2 mb-3",
                        children:[
                          e.jsx("span",{
                            className:"text-xs font-semibold uppercase tracking-wider text-slate-500",
                            style:{fontFamily:H},
                            children:item.client
                          }),
                          e.jsx("span",{
                            className:"text-xs px-2.5 py-0.5 rounded-full font-medium",
                            style:{backgroundColor:`${item.accentColor}18`,color:item.accentColor,fontFamily:H},
                            children:item.tag
                          })
                        ]
                      }),
                      e.jsx("h3",{
                        className:"text-lg font-bold text-slate-900 leading-snug mb-2",
                        style:{fontFamily:H},
                        children:item.headline
                      }),
                      e.jsx("p",{
                        className:"text-sm text-slate-600 leading-relaxed mb-4",
                        style:{fontFamily:H},
                        children:item.description
                      }),
                      // Highlights
                      e.jsx("div",{
                        className:"space-y-1.5 mb-5",
                        children:item.highlights.map((h, i) => e.jsxs("div",{
                          key:i,
                          className:"flex items-center gap-2 text-xs text-slate-700",
                          children:[
                            e.jsx(IconCheck,{className:"w-3.5 h-3.5 text-emerald-600 shrink-0"}),
                            e.jsx("span",{style:{fontFamily:H},children:h})
                          ]
                        }))
                      })
                    ]
                  }),

                  // Metric Pill & Link
                  e.jsxs("div",{
                    className:"pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3",
                    children:[
                      e.jsxs("div",{
                        children:[
                          e.jsx("div",{
                            className:"text-base font-bold text-slate-900 leading-none",
                            style:{fontFamily:H,color:item.accentColor},
                            children:item.metric
                          }),
                          e.jsx("div",{
                            className:"text-[11px] text-slate-500 mt-1",
                            style:{fontFamily:H},
                            children:item.metricLabel
                          })
                        ]
                      }),
                      e.jsxs(k,{
                        to:`/projekte/${item.slug}`,
                        className:"inline-flex items-center gap-1.5 text-xs font-semibold text-[#2e4a6f] group-hover:text-blue-700 transition-colors",
                        style:{fontFamily:H},
                        children:[
                          e.jsx("span",{children:"Case ansehen"}),
                          e.jsx(IconArrowRight,{className:"w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"})
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }))
        }),

        // Client Logos Bar
        e.jsxs("div",{
          className:"mt-16 pt-12 border-t border-slate-100",
          children:[
            e.jsx("div",{
              className:"text-center text-xs font-semibold tracking-widest uppercase text-slate-400 mb-8",
              style:{fontFamily:H},
              children:"Unternehmen, die auf unsere Medienproduktion und Webdesign vertrauen"
            }),
            e.jsx("div",{
              className:"flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80",
              children:partnerLogos.map((logo, i) => e.jsx("div",{
                key:i,
                className:"h-9 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300",
                title:logo.name,
                children:e.jsx("img",{
                  src:logo.src,
                  alt:logo.name,
                  className:"max-h-8 max-w-[120px] object-contain"
                })
              }))
            })
          ]
        }),

        // Direct CaseStudies Cards Link
        e.jsxs("div",{
          className:"mt-16 pt-10 border-t border-slate-100 flex flex-col items-center text-center",
          children:[
            e.jsx("h3",{
              className:"text-xl sm:text-2xl font-bold text-slate-900 mb-2",
              style:{fontFamily:H},
              children:"Entdecken Sie alle 28 realisierten Kundenprojekte"
            }),
            e.jsx("p",{
              className:"text-sm text-slate-600 max-w-lg mb-6",
              style:{fontFamily:H},
              children:"Vom kompletten Webauftritt über maßgeschneiderte Software bis zur reichweitenstarken Video-Kampagne."
            }),
            e.jsx(PillButton,{
              to:"/projekte",
              text:"Alle 28 Projekte ansehen",
              primary:!0
            })
          ]
        })
      ]
    })
  });
}

// --- Section 2: Format-Architektur (Dark Container) ---
function FormatSection(){
  const [activeFormat, setActiveFormat] = v.useState("9-16");

  const formats = {
    "9-16": {
      name: "9:16 Vertical",
      channels: "Instagram Reels, TikTok & YouTube Shorts",
      hud: "9:16 VERTICAL HD",
      title: "Maximale Aufmerksamkeit auf dem Smartphone",
      description: "Über 85% des Social-Media-Konsums findet auf Smartphones im Hochformat statt. Wir filmen und schneiden nativ für 9:16, nutzen clevere Bildkompositionen und animierte Untertitel für maximale Sehdauer.",
      bullets: [
        "100% Screen-Coverage auf modernen Smartphones",
        "Hook in den ersten 1,5 Sekunden gegen Weiterwischen",
        "Dynamische, farblich abgestimmte Untertitel (Captions)",
        "Sound-Design mit passgenauen Beats & Soundeffekten"
      ],
      kpi: "Ø 4,2x höhere Abschlussrate",
      stats: "Bis zu 65% Wiedergabe ohne Ton (daher zwingend Untertitel)"
    },
    "16-9": {
      name: "16:9 Widescreen",
      channels: "Website Hero, YouTube, TV & Messen",
      hud: "16:9 CINEMA 4K",
      title: "Cineastische Ästhetik für High-End Markenwirkung",
      description: "Das klassische Kino- und Breitbildformat für Unternehmenspräsentationen, Imagefilme, YouTube-Dokus und Messen. Mit anamorphotischen Linsen, Cinema-Color-Grading und professioneller Lichtsetzung.",
      bullets: [
        "4K Cinema Kamerasensor für natürlichen Bokeh-Look",
        "Perfekt für Desktop-Websites, YouTube & Konferenzen",
        "Professionelle Drohnen-Perspektiven aus der Vogelperspektive",
        "Hochwertiges Storytelling für B2B & Investoren"
      ],
      kpi: "Top-Besucherbindung auf Ihrer Website",
      stats: "Bis zu 80% längere Verweildauer auf Landingpages"
    },
    "1-1": {
      name: "1:1 / 4:5 Feed",
      channels: "LinkedIn, Instagram Feed & Meta Ads",
      hud: "1:1 SQUARE / 4:5 FEED",
      title: "Optimiert für den Desktop- und mobilen Newsfeed",
      description: "Das ideale Format für bezahlte Werbeanzeigen (Paid Ads), LinkedIn-Beiträge und Karussell-Posts. Nimmt im Feed deutlich mehr vertikalen Raum ein als gewöhnliche Querformat-Posts.",
      bullets: [
        "Optimale Sichtbarkeit im Desktop- und Mobile-Newsfeed",
        "Hohe Klickrate (CTR) bei Performance-Marketing & Ads",
        "B2B-optimiert für professionelle Netzwerke (LinkedIn)",
        "Kompakte Botschaften mit klarem Call-to-Action"
      ],
      kpi: "+38% Klickrate bei Paid Ads",
      stats: "Ideal für Conversion-Kampagnen & Lead-Generierung"
    }
  };

  const curr = formats[activeFormat];

  return e.jsx(SectionCanvas,{
    id:"formate",
    variant:"dual",
    dark:!0,
    children:e.jsxs("div",{
      children:[
        e.jsx(SectionHeader,{
          dark:!0,
          badge:"Format-Architektur",
          titleLine1:"Cineastischer Look,",
          titleLine2:"Plattform-Perfektion.",
          description:"Jede Plattform hat eigene Spielregeln. Wir produzieren Ihr Material nativ im passenden Format – kein unschöner Beschnitt, keine schwarzen Balken, sondern 100% maßgeschneiderte Bildwirkung."
        }),

        // Tabs
        e.jsx("div",{
          className:"flex flex-wrap items-center gap-3 mb-10",
          children:Object.entries(formats).map(([key, f]) => e.jsx("button",{
            key:key,
            onClick:()=>setActiveFormat(key),
            className:`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeFormat === key
                ? "bg-[#38bdf8] text-slate-950 shadow-lg shadow-sky-500/20"
                : "bg-white/10 text-white/80 hover:bg-white/15 hover:text-white"
            }`,
            style:{fontFamily:H},
            children:f.name
          }))
        }),

        // Interactive Preview Container
        e.jsxs("div",{
          className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-10",
          children:[
            // Left Mockup Frame
            e.jsx("div",{
              className:"lg:col-span-5 flex items-center justify-center py-4",
              children:e.jsxs("div",{
                className:`relative bg-slate-900 border-2 border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center ${
                  activeFormat === "9-16"
                    ? "w-[240px] h-[426px]"
                    : activeFormat === "16-9"
                    ? "w-[360px] h-[202px]"
                    : "w-[280px] h-[280px]"
                } transition-all duration-500`,
                children:[
                  // Mockup background gradient
                  e.jsx("div",{
                    className:"absolute inset-0 bg-gradient-to-br from-blue-900/40 via-sky-950/60 to-black"
                  }),
                  // Rule of thirds lines
                  e.jsxs("div",{
                    className:"absolute inset-0 pointer-events-none opacity-20",
                    children:[
                      e.jsx("div",{className:"absolute top-1/3 inset-x-0 h-[1px] bg-white"}),
                      e.jsx("div",{className:"absolute top-2/3 inset-x-0 h-[1px] bg-white"}),
                      e.jsx("div",{className:"absolute left-1/3 inset-y-0 w-[1px] bg-white"}),
                      e.jsx("div",{className:"absolute left-2/3 inset-y-0 w-[1px] bg-white"})
                    ]
                  }),
                  // Camera HUD Top
                  e.jsxs("div",{
                    className:"absolute top-3 inset-x-3 flex items-center justify-between text-[10px] font-mono text-white/80",
                    children:[
                      e.jsxs("div",{
                        className:"flex items-center gap-1.5",
                        children:[
                          e.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-ping"}),
                          e.jsx("span",{className:"font-bold tracking-wider",children:"REC"})
                        ]
                      }),
                      e.jsx("span",{children:curr.hud})
                    ]
                  }),
                  // Center Focus Target
                  e.jsxs("div",{
                    className:"relative z-10 flex flex-col items-center gap-2 text-white/90",
                    children:[
                      e.jsx(IconCamera,{className:"w-8 h-8 opacity-80"}),
                      e.jsx("span",{
                        className:"text-xs font-semibold uppercase tracking-wider text-sky-400",
                        style:{fontFamily:H},
                        children:curr.name
                      })
                    ]
                  }),
                  // Bottom HUD Audio Meters
                  e.jsxs("div",{
                    className:"absolute bottom-3 inset-x-3 flex items-center justify-between text-[10px] font-mono text-white/70",
                    children:[
                      e.jsx("span",{children:"CH1/CH2 [|||||||| ]"}),
                      e.jsx("span",{children:"4K 10-BIT LOG"})
                    ]
                  })
                ]
              })
            }),

            // Right Information
            e.jsxs("div",{
              className:"lg:col-span-7 flex flex-col justify-center",
              children:[
                e.jsx("div",{
                  className:"inline-block px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3",
                  style:{fontFamily:H},
                  children:curr.channels
                }),
                e.jsx("h3",{
                  className:"text-2xl sm:text-3xl font-bold text-white mb-4",
                  style:{fontFamily:H},
                  children:curr.title
                }),
                e.jsx("p",{
                  className:"text-white/75 text-base leading-relaxed mb-6",
                  style:{fontFamily:H},
                  children:curr.description
                }),
                e.jsx("div",{
                  className:"space-y-3 mb-8",
                  children:curr.bullets.map((b, i) => e.jsxs("div",{
                    key:i,
                    className:"flex items-start gap-3 text-sm text-white/90",
                    children:[
                      e.jsx("div",{
                        className:"w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5",
                        children:e.jsx(IconCheck,{className:"w-3 h-3"})
                      }),
                      e.jsx("span",{style:{fontFamily:H},children:b})
                    ]
                  }))
                }),
                e.jsxs("div",{
                  className:"p-4 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-between gap-4",
                  children:[
                    e.jsxs("div",{
                      children:[
                        e.jsx("div",{className:"text-lg font-bold text-sky-400",style:{fontFamily:H},children:curr.kpi}),
                        e.jsx("div",{className:"text-xs text-white/60",style:{fontFamily:H},children:curr.stats})
                      ]
                    }),
                    e.jsx(PillButton,{
                      to:"/kontakt",
                      text:"Format buchen",
                      primary:!0
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    })
  });
}
// --- Section 3: Leistungsspektrum ---
function ServicesSection(){
  const services = [
    {
      num: "01",
      title: "Social Media Reels & TikToks",
      subtitle: "Reichweite, Community & virales Wachstum",
      text: "Kurzvideos im 9:16 Hochformat, die in den ersten 1,5 Sekunden überzeugen. Mit packenden Hooks, synchronisiertem Sounddesign und farblich abgestimmten Untertiteln für maximale Sehdauer.",
      tags: ["Instagram Reels", "TikToks", "YouTube Shorts", "Hook-Optimierung", "Dynamic Captions"],
      icon: IconVideo
    },
    {
      num: "02",
      title: "Imagefilm & Corporate Identity",
      subtitle: "Prestige, Vertrauen & B2B-Aufträge",
      text: "Cineastische Porträts Ihres Unternehmens im 16:9 Breitbildformat. Wir fangen Ihre Kultur, Ihre Prozesse und Ihre Werte ein – mit professionellem Licht, Cinema-Kameras und Drohnenflügen.",
      tags: ["4K Cinema Kameras", "Drohnenaufnahmen", "Storyboard & Regie", "Interviewführung", "Color Grading"],
      icon: IconFilm
    },
    {
      num: "03",
      title: "2D & 3D Motion Design & VFX",
      subtitle: "Dynamische Animationen & Visual Effects",
      text: "Verleihen Sie statischen Grafiken Leben. Wir animieren Ihr Logo, visualisieren komplexe Dienstleistungen oder Produkte in 3D und kreieren kinetic Typography für unwiderstehliche Übergänge.",
      tags: ["Logo Animationen", "3D Produkt-Render", "Kinetic Typo", "UI Mockup Animation", "Social VFX"],
      icon: IconLayers
    },
    {
      num: "04",
      title: "Recruiting & Employer Branding",
      subtitle: "Qualifizierte Mitarbeiter & Auszubildende",
      text: "Authentische Einblicke in den Arbeitsalltag, Mitarbeiter-Testimonials und Einblicke in das Betriebsklima. Damit sich die besten Fachkräfte der Region initiativ bei Ihnen bewerben.",
      tags: ["Mitarbeiter-Interviews", "Kultur-Einblicke", "Social Ads Funnel", "Zielgruppen-Targeting"],
      icon: IconUsers
    }
  ];

  return e.jsx(SectionCanvas,{
    id:"leistungen",
    variant:"diagonal",
    children:e.jsxs("div",{
      children:[
        e.jsx(SectionHeader,{
          badge:"Leistungsspektrum",
          titleLine1:"Alles für Ihren",
          titleLine2:"Digitalen Markenauftritt.",
          description:"Von der ersten Idee und dem Storyboard über den professionellen Drehtag bis hin zum maßgeschneiderten Schnitt und Motion Design – wir liefern alles aus einer Hand."
        }),
        e.jsx("div",{
          className:"grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8",
          children:services.map((item, idx) => e.jsxs(E.div,{
            key:idx,
            initial:{opacity:0,y:20},
            whileInView:{opacity:1,y:0},
            viewport:{once:!0},
            transition:{duration:.5,delay:idx*.1},
            className:"group bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between",
            children:[
              e.jsxs("div",{
                children:[
                  e.jsxs("div",{
                    className:"flex items-center justify-between mb-6",
                    children:[
                      e.jsx("div",{
                        className:"w-12 h-12 rounded-2xl bg-[#eef4ff] text-[#2e4a6f] flex items-center justify-center group-hover:bg-[#2e4a6f] group-hover:text-white transition-colors duration-300",
                        children:e.jsx(item.icon,{className:"w-6 h-6"})
                      }),
                      e.jsx("span",{
                        className:"text-sm font-mono font-bold text-slate-300 group-hover:text-[#2e4a6f] transition-colors",
                        children:item.num
                      })
                    ]
                  }),
                  e.jsx("h3",{
                    className:"text-2xl font-bold text-slate-900 mb-1",
                    style:{fontFamily:H},
                    children:item.title
                  }),
                  e.jsx("div",{
                    className:"text-sm font-medium text-[#2e4a6f] mb-3",
                    style:{fontFamily:H},
                    children:item.subtitle
                  }),
                  e.jsx("p",{
                    className:"text-sm text-slate-600 leading-relaxed mb-6",
                    style:{fontFamily:H},
                    children:item.text
                  })
                ]
              }),
              e.jsx("div",{
                className:"pt-6 border-t border-slate-100 flex flex-wrap gap-1.5",
                children:item.tags.map((t, i) => e.jsx("span",{
                  key:i,
                  className:"text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium",
                  style:{fontFamily:H},
                  children:t
                }))
              })
            ]
          }))
        })
      ]
    })
  });
}

// --- Section 4: Workflow ---
function WorkflowSection(){
  const steps = [
    {
      step: "01",
      title: "Konzept & Hook-Entwicklung",
      time: "1-2 Tage",
      text: "Wir analysieren Ihre Zielgruppe, entwickeln virale Hooks, Storyboards und detaillierte Skripte für den Dreh."
    },
    {
      step: "02",
      title: "Drehtag vor Ort",
      time: "1/2 bis 1 Tag",
      text: "Unser Team filmt bei Ihnen vor Ort in Altenstadt & Rhein-Main mit 4K Cinema Kameras, Gimbal, Beleuchtung und Drohne."
    },
    {
      step: "03",
      title: "Schnitt & Motion Design",
      time: "3-4 Tage",
      text: "Videoschnitt mit Punch, dynamische Farbkorrektur, animierte Untertitel, 2D/3D Motion Graphics und Soundeffekte."
    },
    {
      step: "04",
      title: "Feedback & Auslieferung",
      time: "Ready to post",
      text: "Gemeinsame Freigabe via Online-Review und Bereitstellung aller Formate in bester Auflösung für Social Media & Web."
    }
  ];

  return e.jsx(SectionCanvas,{
    id:"workflow",
    variant:"fine",
    children:e.jsxs("div",{
      children:[
        e.jsx(SectionHeader,{
          badge:"Produktions-Workflow",
          titleLine1:"In 4 Schritten zum",
          titleLine2:"Perfekten Video.",
          description:"Ein transparenter, strukturierter Ablauf ohne großen internen Aufwand für Sie. Wir übernehmen die Regie und leiten Sie und Ihr Team souverän an."
        }),
        e.jsx("div",{
          className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
          children:steps.map((st, idx) => e.jsxs(E.div,{
            key:idx,
            initial:{opacity:0,y:20},
            whileInView:{opacity:1,y:0},
            viewport:{once:!0},
            transition:{duration:.4,delay:idx*.1},
            className:"bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 flex flex-col justify-between hover:border-slate-300 hover:shadow-lg transition-all duration-300",
            children:[
              e.jsxs("div",{
                children:[
                  e.jsxs("div",{
                    className:"flex items-center justify-between mb-4",
                    children:[
                      e.jsx("span",{
                        className:"text-2xl font-mono font-bold text-[#2e4a6f]",
                        children:st.step
                      }),
                      e.jsx("span",{
                        className:"text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700",
                        style:{fontFamily:H},
                        children:st.time
                      })
                    ]
                  }),
                  e.jsx("h3",{
                    className:"text-lg font-bold text-slate-900 mb-2",
                    style:{fontFamily:H},
                    children:st.title
                  }),
                  e.jsx("p",{
                    className:"text-sm text-slate-600 leading-relaxed",
                    style:{fontFamily:H},
                    children:st.text
                  })
                ]
              }),
              e.jsx("div",{
                className:"mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-[#2e4a6f] font-semibold",
                children:[
                  e.jsx(IconCheck,{className:"w-3.5 h-3.5"}),
                  e.jsx("span",{children:"Schrittweise Qualitätskontrolle"})
                ]
              })
            ]
          }))
        })
      ]
    })
  });
}

// --- Section 5: Transparente Festpreise ---
function PricingSection(){
  const packages = [
    {
      name: "Reel Starter",
      price: "890 €",
      period: "einmalig / zzgl. MwSt.",
      desc: "Ideal für den schnellen Einstieg mit messbarer Reichweite auf Instagram & TikTok.",
      popular: !1,
      features: [
        "3 fertige Social Media Reels (9:16)",
        "1/2 Drehtag vor Ort in der Region",
        "Hook-Konzept & Scripting",
        "Dynamischer Schnitt & Farbgrading",
        "Animierte Untertitel (Captions)",
        "Musiklizenz für Social Media",
        "1 Korrekturschleife inklusive"
      ]
    },
    {
      name: "Social Growth",
      price: "1.890 €",
      period: "pro Monat oder Einzelprojekt",
      desc: "Unser beliebtestes Paket für maximale Reichweite, Markenaufbau und Mitarbeitergewinnung.",
      popular: !0,
      features: [
        "8-12 fertige Reels / TikToks (9:16)",
        "1 Widescreen Showreel (16:9)",
        "1 voller Drehtag vor Ort",
        "4K Cinema Kameras & Drohne",
        "2D Motion Design & Logo-Animation",
        "Sounddesign & Trend-Audiomatching",
        "Monatlicher Redaktionsplan & Content-Strategie",
        "Alle Rohdaten auf Wunsch"
      ]
    },
    {
      name: "Corporate Cinema",
      price: "Individuell",
      period: "nach Anforderungsprofil",
      desc: "Für High-End Imagefilme, TV- und Messe-Auftritte sowie umfassende B2B-Kampagnen.",
      popular: !1,
      features: [
        "Cineastischer Imagefilm (16:9 & 9:16)",
        "Vollständiges Drehbuch & Storyboard",
        "Professioneller Synchronsprecher",
        "3D Motion Design & VFX",
        "Zertifizierte Drohnenaufnahmen",
        "Multi-Format Master für Web & Messe",
        "Unbegrenzte weltweite Nutzungsrechte"
      ]
    }
  ];

  return e.jsx(SectionCanvas,{
    id:"preise",
    variant:"dual",
    children:e.jsxs("div",{
      children:[
        e.jsx(SectionHeader,{
          badge:"Transparente Festpreise",
          titleLine1:"Klare Investition,",
          titleLine2:"Maximale Rendite.",
          description:"Keine versteckten Kosten, keine bösen Überraschungen. Alle Preise verstehen sich als transparente Festpreise inklusive voller Nutzungsrechte."
        }),
        e.jsx("div",{
          className:"grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch",
          children:packages.map((pkg, idx) => e.jsxs(E.div,{
            key:idx,
            initial:{opacity:0,y:20},
            whileInView:{opacity:1,y:0},
            viewport:{once:!0},
            transition:{duration:.5,delay:idx*.1},
            className:`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
              pkg.popular
                ? "bg-[#070e1b] text-white shadow-2xl ring-2 ring-[#38bdf8]"
                : "bg-white text-slate-900 border border-slate-200/80 hover:border-slate-300 hover:shadow-xl"
            }`,
            children:[
              pkg.popular&&e.jsx("div",{
                className:"absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#38bdf8] text-slate-950 text-xs font-bold uppercase tracking-wider shadow-md",
                style:{fontFamily:H},
                children:"Am beliebtesten"
              }),
              e.jsxs("div",{
                children:[
                  e.jsx("h3",{
                    className:`text-2xl font-bold mb-2 ${pkg.popular?"text-white":"text-slate-900"}`,
                    style:{fontFamily:H},
                    children:pkg.name
                  }),
                  e.jsx("p",{
                    className:`text-xs leading-relaxed mb-6 ${pkg.popular?"text-white/70":"text-slate-500"}`,
                    style:{fontFamily:H},
                    children:pkg.desc
                  }),
                  e.jsxs("div",{
                    className:"mb-6 pb-6 border-b border-white/10",
                    children:[
                      e.jsxs("div",{
                        className:"flex items-baseline gap-1",
                        children:[
                          e.jsx("span",{
                            className:`text-3xl sm:text-4xl font-extrabold ${pkg.popular?"text-[#38bdf8]":"text-slate-900"}`,
                            style:{fontFamily:H},
                            children:pkg.price
                          })
                        ]
                      }),
                      e.jsx("div",{
                        className:`text-xs mt-1 ${pkg.popular?"text-white/50":"text-slate-400"}`,
                        style:{fontFamily:H},
                        children:pkg.period
                      })
                    ]
                  }),
                  e.jsx("div",{
                    className:"space-y-3 mb-8",
                    children:pkg.features.map((feat, i) => e.jsxs("div",{
                      key:i,
                      className:"flex items-start gap-2.5 text-xs sm:text-sm",
                      children:[
                        e.jsx(IconCheck,{
                          className:`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular?"text-[#38bdf8]":"text-emerald-600"}`
                        }),
                        e.jsx("span",{
                          className:pkg.popular?"text-white/90":"text-slate-700",
                          style:{fontFamily:H},
                          children:feat
                        })
                      ]
                    }))
                  })
                ]
              }),
              e.jsx(PillButton,{
                to:"/kontakt",
                text:`${pkg.name} anfragen`,
                primary:!pkg.popular
              })
            ]
          }))
        })
      ]
    })
  });
}
// --- Section 6: FAQ Accordion ---
function FaqSection(){
  const [openIdx, setOpenIdx] = v.useState(0);

  const faqs = [
    {
      q: "Welche Nutzungsrechte erhalten wir an den produzierten Videos?",
      a: "Sie erhalten uneingeschränkte, zeitlich und räumlich unbegrenzte Nutzungsrechte für alle Ihre digitalen Kanäle (Website, Instagram, TikTok, YouTube, LinkedIn, Meta Ads). Es fallen keine versteckten Folgegebühren oder Lizenzkosten an."
    },
    {
      q: "Wie viel Zeit muss unser Team am Drehtag investieren?",
      a: "Wir bereiten den Dreh mit detaillierten Shotlists so effizient vor, dass der laufende Geschäftsbetrieb kaum gestört wird. Oft reichen 1 bis 2 Stunden pro Mitarbeiter für Statements oder Arbeitsszenen völlig aus."
    },
    {
      q: "In welchem Einzugsgebiet führen Sie Dreharbeiten durch?",
      a: "Unser Hauptfokus liegt auf Altenstadt, Frankfurt am Main, der Wetterau, Hanau und dem gesamten Rhein-Main-Gebiet. Für größere Projekte oder bundesweite Kampagnen sind wir nach Absprache auch überregional im Einsatz."
    },
    {
      q: "Liefern Sie Videos sowohl im Hochformat (9:16) als auch im Querformat (16:9)?",
      a: "Ja, genau das ist unser Standard. Wir filmen in hoher 4K-Auflösung mit Blick auf Multi-Format-Verwertung, sodass Sie aus einem Dreh sowohl vertikale Kurzvideos für Reels als auch Breitbild-Aufnahmen für Ihre Website erhalten."
    },
    {
      q: "Übernehmen Sie auch das Verfassen von Skripten und Hook-Ideen?",
      a: "Absolut. Das Scripting und die Konzeption viraler Hooks ist das Herzstück unseres Angebots. Wir liefern Ihnen fertige Textvorschläge, die genau auf Ihre Zielgruppe und Branche abgestimmt sind."
    },
    {
      q: "Gibt es eine Mindestvertragslaufzeit bei monatlichen Paketen?",
      a: "Nein, Sie können unsere monatlichen Social-Growth-Pakete jederzeit mit einer Frist von 30 Tagen zum Monatsende anpassen oder pausieren. Volle Flexibilität ohne Knebelverträge."
    }
  ];

  return e.jsx(SectionCanvas,{
    id:"faq",
    variant:"fine",
    children:e.jsxs("div",{
      children:[
        e.jsx(SectionHeader,{
          badge:"Häufige Fragen",
          titleLine1:"Alles, was Sie",
          titleLine2:"Vorab wissen sollten.",
          description:"Haben Sie weitere Fragen? Sprechen Sie uns gerne direkt an – wir beraten Sie unverbindlich."
        }),
        e.jsx("div",{
          className:"max-w-3xl mx-auto space-y-4",
          children:faqs.map((faq, idx) => e.jsxs("div",{
            key:idx,
            className:"border border-slate-200/80 rounded-2xl overflow-hidden bg-[#f8fafc] transition-all",
            children:[
              e.jsxs("button",{
                onClick:()=>setOpenIdx(openIdx === idx ? -1 : idx),
                className:"w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-[#2e4a6f] transition-colors",
                style:{fontFamily:H},
                children:[
                  e.jsx("span",{className:"text-base sm:text-lg",children:faq.q}),
                  e.jsx(IconChevron,{open:openIdx === idx,className:"w-5 h-5 shrink-0 text-slate-400"})
                ]
              }),
              openIdx === idx && e.jsx(E.div,{
                initial:{opacity:0,height:0},
                animate:{opacity:1,height:"auto"},
                transition:{duration:.3},
                className:"px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-200/40 pt-4",
                style:{fontFamily:H},
                children:faq.a
              })
            ]
          }))
        })
      ]
    })
  });
}

// --- Section 7: Call to Action ---
function CtaSection(){
  return e.jsx(SectionCanvas,{
    id:"kontakt-cta",
    variant:"fine",
    children:e.jsxs("div",{
      className:"relative overflow-hidden rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#050a14] via-[#09152b] to-[#122240] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8",
      children:[
        // Glow overlay
        e.jsx("div",{
          className:"absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#38bdf8]/15 blur-3xl pointer-events-none"
        }),
        e.jsxs("div",{
          className:"relative z-10 max-w-xl",
          children:[
            e.jsxs("div",{
              className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#38bdf8] text-xs font-semibold mb-4",
              style:{fontFamily:H},
              children:[
                e.jsx(IconSparkles,{className:"w-3.5 h-3.5"}),
                e.jsx("span",{children:"Kostenloses Erstgespräch"})
              ]
            }),
            e.jsx("h2",{
              className:"text-2xl sm:text-4xl font-bold leading-tight mb-3 text-white",
              style:{fontFamily:H},
              children:"Bringen Sie Ihr Unternehmen in Bewegung."
            }),
            e.jsx("p",{
              className:"text-sm sm:text-base text-white/75 leading-relaxed",
              style:{fontFamily:H},
              children:"Lassen Sie uns in einem 15-minütigen Beratungsgespräch klären, welches Videoformat Ihr Unternehmen am schnellsten nach vorne bringt."
            })
          ]
        }),
        e.jsx("div",{
          className:"relative z-10 shrink-0",
          children:e.jsxs(k,{
            to:"/kontakt",
            className:"inline-flex items-center gap-2 group transition-all duration-300 hover:shadow-[0_4px_24px_-4px_rgba(56,189,248,0.4)] hover:scale-[1.02]",
            style:{
              backgroundColor:"#ffffff",
              borderRadius:"99px",
              padding:"6px 6px 6px 24px",
              textDecoration:"none"
            },
            children:[
              e.jsx("span",{
                style:{fontFamily:H,fontSize:"15px",fontWeight:600,color:"#0a0a0a"},
                children:e.jsx(M,{text:"Jetzt Erstgespräch buchen"})
              }),
              e.jsx("div",{
                className:"flex items-center justify-center shrink-0 w-9 h-9 rounded-full bg-[#2e4a6f] text-white transition-transform group-hover:translate-x-0.5",
                children:e.jsx(IconArrowRight,{className:"w-4 h-4"})
              })
            ]
          })
        })
      ]
    })
  });
}

// --- Main Page Component ---
function VideografiePage(){
  const seoConfig = {
    title:"Videografie & Motion Design | EasyTech IT-Solutions Altenstadt",
    description:"Cineastische Social Media Videos, Reels, TikToks & Motion Design für Unternehmen in Altenstadt & Rhein-Main. Mehr Reichweite, Markenwirkung & qualifizierte Bewerber.",
    canonical:"https://easytechit.de/videografie",
    keywords:"Videografie Altenstadt, Social Media Agentur, Reels Produktion, Motion Design, Imagefilm Rhein-Main, EasyTech IT-Solutions",
    breadcrumbs:[{name:"Startseite",url:"https://easytechit.de"},{name:"Videografie & Social Media",url:"https://easytechit.de/videografie"}],
    jsonLd:[]
  };

  if(typeof document !== "undefined" && !document.getElementById("videografie-utilities")){
    const l = document.createElement("link");
    l.id = "videografie-utilities";
    l.rel = "stylesheet";
    l.href = new URL("./videografie-utilities.css", import.meta.url).href;
    document.head.appendChild(l);
  }

  v.useEffect(()=>{
    if(typeof window !== "undefined" && window.location.hash){
      const el = document.getElementById(window.location.hash.replace("#",""));
      if(el){
        setTimeout(()=>el.scrollIntoView({behavior:"smooth",block:"start"}),300);
      }
    }
  },[]);

  return e.jsxs("div",{
    className:"min-h-screen",
    children:[
      e.jsx(W,{config:V_SEO.videografie||seoConfig}),
      e.jsx(HeroSection,{}),
      e.jsx(ReferencesSection,{}),
      e.jsx(FormatSection,{}),
      e.jsx(ServicesSection,{}),
      e.jsx(WorkflowSection,{}),
      e.jsx(PricingSection,{}),
      e.jsx(TestimonialsSection,{}),
      e.jsx(FaqSection,{}),
      e.jsx(CtaSection,{})
    ]
  });
}

export{VideografiePage};
