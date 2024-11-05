// Data/productos.data.ts

import { IProduct } from "../model/Producto/product.model";
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'

export const products: IProduct[] = [
    {
        id: "1",
        name: "ALPACA FELINA SÚPER SUAVE Y ESPONJOSA",
        shortDescription: "Producto hecho a mano por artesanos peruanos",
        fullDescription: "Producto hecho a mano por artesanos peruanos, fabricado con 100% piel de alpaca andina, suave y sedosa.",
        images:img1,
        category: "Peluches",
        materials: ["100% piel de alpaca andina"],
        size: {
            value: 9,
            unit: "pulgadas"
        },
        features: [
            "Hipoalergénico",
            "Duradero",
            "Resistente",
            "No se desprende"
        ],
        benefits: [
            "Cada peluche es único ideal para coleccionar",
            "Fácil de mantener"
        ],
        care: [
            "Fácil mantenimiento"
        ],
        origin: {
            country: "Perú",
            handmade: true
        },
        isNew: true,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: "2",
        name: "ALPACA INKARI",
        shortDescription: "Hecho a mano en el lejano Perú, con lana de alpaca sostenible",
        fullDescription: "Hecho a mano en el lejano Perú, con lana de alpaca adquirida mediante prácticas sostenibles.",
        images: img2,
        category: "Peluches",
        materials: ["Lana de alpaca"],
        size: {
            value: 12,
            unit: "cm"
        },
        features: [
            "Más suave que el cachemir",
            "Más cálida que la lana merino",
            "Ligera como una pluma pero extremadamente fuerte",
            "Hipoalergénica y no provoca picor"
        ],
        care: [
            "Fácil de mantener",
            "Cepillar con un cepillo",
            "No lavar en máquina",
            "Limpiar cara con paño húmedo"
        ],
        origin: {
            country: "Perú",
            handmade: true
        },
        specifications: {
            material: "Lana de alpaca sostenible",
            cara: "Tela limpiable"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: "3",
        name: "Llama Love - Figura de Alpaca de Baby Alpaca",
        shortDescription: "Figura única hecha a mano con baby alpaca peruana",
        fullDescription: "Cada Llama Love es hecha a mano y completamente única, fabricada con 100% piel de baby alpaca peruana.",
        images: img3,
        category: "Figuras",
        materials: ["100% piel de baby alpaca peruana"],
        size: {
            value: 9,
            unit: "cm"
        },
        features: [
            "Hipoalergénico",
            "Libre de polvo y lanolina",
            "Cada pieza es única"
        ],
        care: [
            "Limpieza con paño húmedo",
            "Cepillado suave"
        ],
        origin: {
            country: "Perú",
            handmade: true
        },
        specifications: {
            ethical: "Piel de alpacas fallecidas naturalmente",
            packaging: "Empaque especial para mantener forma"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: "4",
        name: "LLAVERO DE ALPACA",
        shortDescription: "Llavero de Muñeca de Cabeza Grande de Alpaca",
        fullDescription: "Este llavero artesanal, con su encantadora cabeza grande de alpaca, es una pieza única y auténtica, ideal para llevar un toque de la cultura peruana contigo a todas partes.",
        images: img4,
        category: "Accesorios",
        materials: [
            "100% piel de alpaca",
            "Lana virgen de alpaca"
        ],
        size: {
            value: 10,
            unit: "cm"
        },
        colors: ["Brulée tostado"],
        features: [
            "Cabeza redonda",
            "Diseño único",
            "Artesanal"
        ],
        care: [
            "Mantener alejado de la humedad",
            "Limpiar con paño seco",
            "Guardar en lugar fresco y seco"
        ],
        benefits: [
            "Portátil",
            "Accesorio decorativo",
            "Regalo ideal"
        ],
        origin: {
            country: "Perú",
            handmade: true
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: "5",
        name: "MUÑECO DE LEÓN",
        shortDescription: "León de Alpaca Natural Hecho a Mano",
        fullDescription: "Este león de alpaca, elaborado por artesanos peruanos, es una pieza única que aporta un toque especial y auténtico a cualquier colección de muñecos de lana.",
        images: img5,
        category: "Peluches",
        materials: ["Lana de alpaca natural"],
        size: {
            value: 30,
            unit: "cm"
        },
        colors: ["Camello marrón claro"],
        features: [
            "Pieza única",
            "Elaboración artesanal",
            "Diseño exclusivo"
        ],
        care: [
            "Cepillar suavemente para mantener la forma",
            "Evitar exposición directa al sol",
            "Limpiar en seco",
            "No lavar con agua"
        ],
        benefits: [
            "Ideal para decoración",
            "Representa la cultura peruana",
            "Coleccionable"
        ],
        origin: {
            country: "Perú",
            handmade: true
        },
        specifications: {
            stock: "Pieza única",
            uso: "Decorativo y coleccionable"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: "6",
        name: "OSO COLOR LIMÓN",
        shortDescription: "Ositos de Gominola de Alpaca Natural Artesanales Peruanos",
        fullDescription: "Osito artesanal peruano elaborado con la más fina lana de baby alpaca, teñido a mano con un hermoso color limón que lo hace único.",
        images: img6,
        category: "Peluches",
        materials: ["100% lana de baby alpaca"],
        size: {
            value: 25,
            unit: "cm"
        },
        colors: ["Limón"],
        features: [
            "Teñido a mano",
            "Pieza única",
            "Color irrepetible"
        ],
        care: [
            "No usar jabón",
            "Limpiar con bicarbonato de sodio en bolsa plástica",
            "Usar secador y peine para mantenimiento",
            "Evitar contacto con superficies claras o húmedas"
        ],
        origin: {
            country: "Perú",
            handmade: true
        },
        specifications: {
            teñido: "Artesanal con tintes especiales",
            mantenimiento: "Especial para preservar color"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: "7",
        name: "OSO COLOR MANZANA VERDE",
        shortDescription: "Ositos de Gominola de Alpaca Natural Artesanales Peruanos",
        fullDescription: "Osito artesanal peruano tejido con la más fina lana de baby alpaca, teñido a mano con un hermoso color manzana verde que lo hace único.",
        images: img7,
        category: "Peluches",
        materials: ["100% lana de baby alpaca"],
        size: {
            value: 25,
            unit: "cm"
        },
        colors: ["Manzana Verde"],
        features: [
            "Teñido a mano",
            "Pieza única",
            "Color irrepetible",
            "Elaboración artesanal"
        ],
        benefits: [
            "Diseño exclusivo",
            "Producto artesanal peruano",
            "Ideal para regalo"
        ],
        care: [
            "Evita el uso de jabón",
            "Para preservar el color, colócalo en una bolsa plástica con bicarbonato de sodio",
            "Agítalo suavemente",
            "Limpia con secador y peine",
            "Evita el contacto con superficies o prendas claras y húmedas",
            "Para colores específicos, visita nuestra tienda física"
        ],
        origin: {
            country: "Perú",
            handmade: true
        },
        specifications: {
            teñido: "Artesanal con tintes especiales",
            mantenimiento: "Especial para preservar color",
            recomendación: "Selección de color específico en tienda"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: "8",
        name: "OSO ROSA PÁLIDO",
        shortDescription: "Ositos de Gominola de Alpaca Natural Hechos a Mano",
        fullDescription: "Osito artesanal elaborado con la más fina lana de baby alpaca, teñido a mano en un delicado tono rosa pálido que hace de cada pieza una creación única.",
        images: img8,
        category: "Peluches",
        materials: [
            "100% Baby Alpaca",
            "Lana de baby alpaca"
        ],
        size: {
            value: 25,
            unit: "cm"
        },
        colors: ["Rosa pálido"],
        features: [
            "Teñido artesanal único",
            "Cada pieza es irrepetible",
            "Elaboración 100% a mano",
            "Alta calidad artesanal"
        ],
        benefits: [
            "Pieza única",
            "Artículo artesanal de alta calidad",
            "Autenticidad peruana"
        ],
        care: [
            "Para conservar los colores, colocar en bolsa plástica con bicarbonato de sodio",
            "Sacudir suavemente",
            "Limpiar con secador de pelo y peine",
            "Evitar lavado con jabón",
            "Evitar contacto con prendas y accesorios de colores claros o húmedos"
        ],
        origin: {
            country: "Perú",
            handmade: true
        },
        specifications: {
            teñido: "Manual con tintes especiales",
            color: "Único en cada pieza",
            precauciones: "Algunos tintes pueden desprenderse",
            acabado: "Artesanal de alta calidad"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    }
];