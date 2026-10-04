export default {
  global: {
    Name: 'Diseño del plan de distribución',
    Description:
      'El componente formativo desarrolla los fundamentos y herramientas necesarios para definir acciones de distribución acordes con el formato comercial y los objetivos del plan de mercadeo. Aborda temáticas relacionadas con la logística, la logística inversa, las estrategias de distribución, la gestión de inventarios, el uso de herramientas de georreferenciación y la estructuración del plan de distribución, permitiendo seleccionar alternativas que favorezcan la disponibilidad de los productos, la eficiencia operativa y la satisfacción del cliente.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Logística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Funciones',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Actores',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Beneficios',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Logística inversa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Funciones',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Actores',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Beneficios',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estrategias de distribución',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Clasificación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Inventario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Rotación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Método',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Stock de inventarios (existencias)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Beneficios',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Ubicación',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Software para georreferenciación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Procedimiento de uso',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Plan de distribución',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Concepto',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Estructura',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Etapas',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Ejemplo',
            hash: 't_7_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/62110009_CF02_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Abastecimiento',
      significado:
        'Proceso mediante el cual una organización garantiza la disponibilidad de bienes, materiales o productos para atender la demanda.',
    },
    {
      termino: 'Cadena de suministro',
      significado:
        'Conjunto de procesos y actores involucrados en la producción, almacenamiento, distribución y entrega de bienes al consumidor final.',
    },
    {
      termino: 'Distribución comercial',
      significado:
        'Proceso de planificar y ejecutar el traslado de productos desde el productor hasta el consumidor, mediante canales adecuados.',
    },
    {
      termino: 'Estrategia de distribución',
      significado:
        'Conjunto de decisiones orientadas a seleccionar los canales y mecanismos para comercializar productos de manera eficiente.',
    },
    {
      termino: 'Formato comercial',
      significado:
        'Modalidad mediante la cual una empresa ofrece sus productos al mercado, como tiendas físicas, supermercados, comercio electrónico o ventas directas.',
    },
    {
      termino: 'Georreferenciación',
      significado:
        'Proceso de ubicar geográficamente clientes, puntos de venta o rutas mediante herramientas tecnológicas para optimizar la distribución.',
    },
    {
      termino: 'Gestión de inventarios',
      significado:
        'Administración de las existencias para asegurar la disponibilidad de productos y optimizar los costos de almacenamiento.',
    },
    {
      termino: 'Intermediario',
      significado:
        'Persona u organización que participa en el proceso de distribución facilitando el paso del producto entre el fabricante y el consumidor.',
    },
    {
      termino: 'Inventario',
      significado:
        'Conjunto de bienes o productos almacenados para satisfacer las necesidades de producción o comercialización.',
    },
    {
      termino: 'Logística',
      significado:
        'Proceso de planificar, implementar y controlar el flujo eficiente de productos, información y recursos desde el origen hasta el consumidor final.',
    },
    {
      termino: 'Logística inversa',
      significado:
        'Gestión del retorno de productos desde el consumidor hacia la empresa para su reutilización, reparación, reciclaje o disposición final.',
    },
    {
      termino: 'Método ABC',
      significado:
        'Técnica de clasificación de inventarios según su importancia económica para priorizar su control y administración.',
    },
    {
      termino: 'Omnicanalidad',
      significado:
        'Estrategia que integra todos los canales de venta y comunicación para ofrecer una experiencia unificada al cliente.',
    },
    {
      termino: 'PEPS (FIFO)',
      significado:
        'Método de control de inventarios que establece que los primeros productos en ingresar son los primeros en salir.',
    },
    {
      termino: 'Plan de distribución',
      significado:
        'Documento que organiza las acciones, recursos y estrategias necesarias para garantizar la disponibilidad de los productos en el mercado.',
    },
    {
      termino: 'Rotación de inventarios',
      significado:
        'Indicador que mide la frecuencia con la que los productos son vendidos y repuestos durante un periodo determinado.',
    },
    {
      termino: 'Software de georreferenciación',
      significado:
        'Herramienta informática utilizada para analizar información espacial y apoyar la planeación de rutas y cobertura comercial.',
    },
    {
      termino: 'Stock de existencias',
      significado:
        'Cantidad de productos disponibles para atender la demanda y evitar desabastecimientos o excesos de inventario.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad para realizar el seguimiento de un producto durante todas las etapas de la cadena de suministro.',
    },
    {
      termino: 'Última milla',
      significado:
        'Etapa final del proceso logístico que comprende la entrega del producto desde el centro de distribución hasta el cliente final.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ballou, R. H. (2004). Logística: administración de la cadena de suministro (5.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Christopher, M. (2016). Logística y gestión de la cadena de suministro (5.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Chopra, S., & Meindl, P. (2013). Administración de la cadena de suministro: Estrategia, planeación y operación (5.ª ed.). Pearson Educación.',
      link: 'https://gc.scalahed.com/recursos/files/r161r/w24567w/Sunil_Chopral.pdf',
    },
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2017). Fundamentos de marketing (13.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2016). Dirección de marketing (15.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Levy, M., & Weitz, B. (2012). Administración de ventas al detal (retail) (8.ª ed.). McGraw-Hill.',
    },
    {
      referencia:
        'Mora García, L. A. (2016). Gestión logística integral. Ecoe Ediciones.',
    },
    {
      referencia:
        'Rushton, A., Croucher, P., & Baker, P. (2017). Manual de logística y gestión de la distribución (6.ª ed.). Kogan Page.',
    },
    {
      referencia:
        'Simchi-Levi, D., Kaminsky, P., & Simchi-Levi, E. (2008). Diseño y gestión de la cadena de suministro. McGraw-Hill.',
    },
    {
      referencia:
        'Soret, I. (2013). Logística comercial y empresarial. ESIC Editorial.',
    },
    {
      referencia:
        'WWF Sustainable Consumption Platform. (2022). Guía de abastecimiento sostenible. WWF‑SCP.',
      link: 'https://www.wwf-scp.org/wp-content/uploads/2022/09/Guia-de-abastecimiento-sostenible_B14S_C5_web.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nicolas Cruz',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Rosmery Conde',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
