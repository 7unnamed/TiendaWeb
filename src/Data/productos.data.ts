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
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpeg'
import img11 from '../assets/img11.jpg'
import img12 from '../assets/img12.jpg'

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
        isNew: false,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: "3",
        name: "LLAMA LOVE - FIGURA DE ALPACA DE BABY ALPACA",
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
        isNew: true,
        available: true,
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
        isNew: false,
        available: true,
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
        isNew: true,
        available: true,
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
        isNew: false,
        available: true,
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
        isNew: true,
        available: true,
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
        isNew: false,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: "9",
        name: "OSITO FRAMBUESA",
        shortDescription: "Ositos de Gominola de Alpaca Natural Artesanales Peruanos",
        fullDescription: "Osito artesanal elaborado con la más fina lana de baby alpaca, teñido a mano en un vibrante tono frambuesa que hace de cada pieza una creación única y especial. Cada osito es una obra de arte individual, teñido artesanalmente con tintes especiales que le dan un carácter irrepetible.",
        images: img9,
        category: "Peluches",
        materials: ["100% lana de baby alpaca"],
        size: {
            value: 25,
            unit: "cm"
        },
        colors: ["Frambuesa"],
        features: [
            "Teñido artesanal único",
            "Pieza irrepetible",
            "Elaboración 100% a mano",
            "Color vibrante y exclusivo",
            "Textura suave y delicada"
        ],
        benefits: [
            "Diseño exclusivo",
            "Producto artesanal peruano",
            "Ideal para regalo",
            "Pieza única"
        ],
        care: [
            "No lavar con jabón",
            "Colocar en bolsa plástica con bicarbonato de sodio para preservar el color",
            "Agitar suavemente",
            "Limpiar con secador y peine",
            "Evitar contacto con superficies claras o húmedas",
            "Para colores específicos, visitar tienda física"
        ],
        origin: {
            country: "Perú",
            handmade: true
        },
        specifications: {
            teñido: "Artesanal con tintes especiales",
            mantenimiento: "Especial para preservar color",
            recomendación: "Selección de color específico en tienda",
            acabado: "Artesanal de alta calidad"
        },
        isNew: true,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: "10",
        name: "ALPACA PELUCHE BEBÉ",
        shortDescription: "Preciosa Alpaca de Peluche - 100% Lana de Alpaca Bebé",
        fullDescription: "Encantadora alpaca de peluche fabricada con la más suave lana de alpaca bebé, sin lanolina, perfecta para todas las edades. Cada pieza es elaborada artesanalmente, lo que la convierte en un regalo único y especial. Su tamaño compacto y detalles cuidadosamente trabajados la hacen ideal para cualquier ocasión especial.",
        images: img10,
        category: "Peluches",
        materials: [
            "100% lana de alpaca bebé",
            "Sin lanolina"
        ],
        size: {
            value: 15,
            unit: "cm"
        },
        colors: ["Natural"],
        features: [
            "Increíblemente suave al tacto",
            "Diseño único artesanal",
            "Disponible con o sin borla decorativa",
            "Tamaño compacto ideal",
            "Perfecta para regalo"
        ],
        benefits: [
            "Material hipoalergénico",
            "Ideal para niños",
            "Regalo perfecto para ocasiones especiales",
            "Pieza exclusiva artesanal"
        ],
        care: [
            "Limpieza en seco recomendada",
            "Cepillado suave periódico",
            "Mantener en lugar fresco y seco",
            "Evitar exposición directa al sol"
        ],
        origin: {
            country: "Perú",
            handmade: true
        },
        specifications: {
            dimensiones: "15 cm alto x 12 cm largo x 7 cm ancho",
            acabado: "Artesanal premium",
            detalles: "Opcional borla decorativa",
            calidad: "Premium"
        },
        isNew: false,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: "11",
        name: "PELUCHE ALPACA NATURAL BLANCO",
        shortDescription: "Peluche de Alpaca con Pelaje Natural 100% Puro",
        fullDescription: "Excepcional peluche de alpaca elaborado completamente a mano en Cusco, Perú, utilizando piel de alpaca 100% natural. Destaca por su autenticidad, suavidad incomparable y el compromiso con prácticas éticas y sostenibles. Cada pieza es única y representa lo mejor de la artesanía peruana, contribuyendo al bienestar de artesanos y criadores locales.",
        images: img11,
        category: "Peluches",
        materials: [
            "100% piel natural de alpaca",
            "Materiales naturales de primera calidad"
        ],
        size: {
            value: 30,
            unit: "cm"
        },
        colors: ["Blanco Natural"],
        features: [
            "100% elaborado a mano",
            "Piel extremadamente suave y esponjosa",
            "Hipoalergénico",
            "Libre de maltrato animal",
            "Material premium mundial",
            "Producción ética y sostenible"
        ],
        benefits: [
            "Apoyo a artesanos locales",
            "Producto 100% natural",
            "Contribución al desarrollo sostenible",
            "Pieza única artesanal",
            "Calidad premium mundial"
        ],
        care: [
            "Fácil mantenimiento",
            "Mantener esponjoso con cepillado suave",
            "Almacenar en lugar fresco y seco",
            "Evitar exposición prolongada al sol",
            "Limpieza en seco recomendada"
        ],
        origin: {
            country: "Perú",
            handmade: true
        },
        specifications: {
            procedencia: "Cusco, Perú",
            certificación: "Libre de maltrato animal",
            material: "Piel 100% natural de alpaca",
            proceso: "Elaboración artesanal tradicional",
            impacto: "Apoyo a comunidades locales"
        },
        isNew: true,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: "12",
        name: "ALPACA DECORATIVA DE COLECCIÓN",
        shortDescription: "Elegantes Alpacas de Peluche con Fibra Natural y Diseño Realista",
        fullDescription: "Encantadoras alpacas decorativas elaboradas con fina fibra de alpaca, que combinan un diseño realista con una textura excepcionalmente suave y acogedora. Cada pieza destaca por sus detalles meticulosos en expresiones y colores naturales, convirtiéndolas en elementos perfectos tanto para decoración como para colección. Disponibles en diversos tamaños para adaptarse a diferentes espacios y necesidades.",
        images: img12,
        category: "Peluches",
        materials: [
            "Fibra de alpaca seleccionada",
            "Relleno hipoalergénico",
            "Detalles en materiales nobles"
        ],
        size: {
            value: 20, // Tamaño mediano como estándar
            unit: "cm"
        },
        colors: [
            "Marrón Natural",
            "Blanco Crema",
            "Gris Alpaca"
        ],
        features: [
            "Textura excepcionalmente suave y esponjosa",
            "Diseño realista con detalles precisos",
            "Expresiones únicas y cautivadoras",
            "Disponible en diferentes tamaños",
            "Colores naturales auténticos",
            "Acabado artesanal de alta calidad"
        ],
        benefits: [
            "Versátil para decoración o colección",
            "Ideal para cualquier espacio",
            "Pieza artesanal duradera",
            "Valor decorativo atemporal",
            "Perfecta como regalo especial"
        ],
        care: [
            "Limpiar suavemente con cepillo de cerdas suaves",
            "Mantener en lugar fresco y seco",
            "Evitar exposición directa al sol",
            "No lavar con agua",
            "Proteger del polvo excesivo"
        ],
        origin: {
            country: "Perú",
            handmade: true
        },
        specifications: {
            tamaños: "Disponible en 10cm y 20cm",
            usos: "Decorativo y coleccionable",
            acabado: "Artesanal premium",
            detalles: "Expresiones y colores naturales",
            durabilidad: "Alta resistencia y calidad"
        },
        isNew: false,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date()
    }
];