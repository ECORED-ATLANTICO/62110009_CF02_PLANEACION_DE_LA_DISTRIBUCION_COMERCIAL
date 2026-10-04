<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Logística inversa


    .bloque-texto-g.bg-color-01.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la gestión moderna de la distribución, los procesos no finalizan con la entrega del producto al cliente. La necesidad de gestionar devoluciones, productos defectuosos o excedentes ha llevado a las empresas a incorporar flujos de retorno dentro de sus operaciones. En este contexto, la logística inversa se convierte en un elemento clave para optimizar recursos, mejorar el servicio al cliente y fortalecer la gestión comercial.

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Concepto
  
  
  
    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img02.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") La logística inversa se define como el conjunto de actividades orientadas a gestionar el flujo de productos desde el consumidor final hacia la empresa, con el propósito de recuperar valor o realizar su adecuada disposición.
        
        .bg-fondo-01.br-15.mb-3.p-4
          p.mb-0 Este proceso incluye devoluciones, reciclaje, reutilización, reparación y manejo de residuos. A diferencia de la logística tradicional, que se enfoca en el flujo directo, la logística inversa gestiona el retorno de productos dentro de la cadena de suministro.

        p.mb-0 En el contexto real, empresas como Amazon permiten devoluciones ágiles de productos comprados en línea, mientras que Falabella gestiona cambios y devoluciones como parte de su servicio al cliente.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Funciones
  
    .row.align-items-center.mb-5.justify-content-center
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema2/img03.svg").mx-auto
      .col-lg
        p.mb-0 La logística inversa comprende el conjunto de actividades orientadas a gestionar el retorno de productos desde el cliente hacia la organización. Su propósito es recuperar valor mediante la reutilización, reparación o reciclaje de los productos, o garantizar su disposición final de forma responsable cuando ya no pueden ser aprovechados. Estas funciones contribuyen a optimizar recursos, reducir el impacto ambiental y fortalecer la sostenibilidad empresarial.
  
    p.mb-4 Entre las principales funciones de la logística inversa se encuentran:
  
    .row.mb-5.g-4.justify-content-center.align-items-stretch
      .col-lg-3.col-md-6
        .position-relative.h-100.pt-2.ps-3
          .p-4.br-15.h-100.bg-white.text-center.d-flex.flex-column.align-items-center.justify-content-center(style="border: 2px solid #3FA8FE;")
            h5.text-center.mb-2 Recolección
            p.mb-0.text-center Recibe los productos devueltos por los clientes y los traslada para su procesamiento.
          .position-absolute.top-50.start-0.translate-middle-y.rounded-circle.d-flex.align-items-center.justify-content-center.fw-bold(style="width: 45px; height: 45px; background-color: #3FA8FE; margin-left: -5px;") 1

      .col-lg-3.col-md-6
        .position-relative.h-100.pt-2.ps-3
          .p-4.br-15.h-100.bg-white.text-center.d-flex.flex-column.align-items-center.justify-content-center(style="border: 2px solid #83DFE0;")
            h5.text-center.mb-2 Clasificación
            p.mb-0.text-center Evalúa el estado de los productos retornados para definir su destino.
          .position-absolute.top-50.start-0.translate-middle-y.rounded-circle.d-flex.align-items-center.justify-content-center.fw-bold(style="width: 45px; height: 45px; background-color: #83DFE0; margin-left: -5px;") 2

      .col-lg-3.col-md-6
        .position-relative.h-100.pt-2.ps-3
          .p-4.br-15.h-100.bg-white.text-center.d-flex.flex-column.align-items-center.justify-content-center(style="border: 2px solid #D7D7D8;")
            h5.text-center.mb-2 Recuperación
            p.mb-0.text-center Reincorpora los productos o sus componentes al ciclo comercial mediante reparación o reutilización.
          .position-absolute.top-50.start-0.translate-middle-y.rounded-circle.d-flex.align-items-center.justify-content-center.fw-bold(style="width: 45px; height: 45px; background-color: #D7D7D8; margin-left: -5px;") 3

      .col-lg-3.col-md-6
        .position-relative.h-100.pt-2.ps-3
          .p-4.br-15.h-100.bg-white.text-center.d-flex.flex-column.align-items-center.justify-content-center(style="border: 2px solid #FFA85B;")
            h5.text-center.mb-2 Disposición final
            p.mb-0.text-center Trata los productos que no pueden recuperarse mediante reciclaje o eliminación conforme a la normatividad vigente.
          .position-absolute.top-50.start-0.translate-middle-y.rounded-circle.d-flex.align-items-center.justify-content-center.fw-bold(style="width: 45px; height: 45px; background-color: #FFA85B; margin-left: -5px;") 4
  
    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-c1.p-4
          p.mb-0 En la práctica, Mercado Libre gestiona devoluciones mediante centros logísticos, mientras que IKEA implementa programas de recuperación de productos para su reutilización.

  
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Actores

    
    .bg-full-width.bg-fondo-02.px-5.py-4
      img(src="@/assets/curso/tema2/img04.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-right")
        p.banner-text Los actores de la logística inversa participan en el proceso de devolución, recuperación y disposición de los productos retornados. Cada uno cumple una función específica que contribuye a optimizar el aprovechamiento de los recursos y fortalecer la sostenibilidad de la cadena de suministro. Los principales actores de la logística inversa son:
    
    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-12.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img05.png", data-aos="zoom-in").mx-auto

      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-c1" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Cliente")
            p.mb-0 Inicia el flujo inverso al devolver productos, empaques o materiales por motivos como defectos, garantías, inconformidades, finalización de su vida útil o programas de recuperación establecidos por la empresa.

          .tarjeta(titulo="Empresa")
            p.mb-0 Planifica y coordina las condiciones para recibir, controlar y gestionar los productos retornados, definiendo políticas, responsables y alternativas de recuperación que permitan reducir pérdidas, aprovechar recursos y responder adecuadamente a los requerimientos del cliente.

          .tarjeta(titulo="Operador logístico")
            p.mb-0 Ejecuta actividades especializadas relacionadas con la recolección, transporte, almacenamiento y manejo de productos retornados, facilitando su traslado desde los puntos de origen hasta los lugares establecidos para su evaluación, recuperación o tratamiento.

          .tarjeta(titulo="Centro de procesamiento")
            p.mb-0 Recibe y evalúa los productos, materiales o empaques retornados para determinar y ejecutar el tratamiento correspondiente, como reparación, reacondicionamiento, reutilización, reciclaje, aprovechamiento de componentes o disposición final.


    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .row.align-items-center.bg-fondo-04.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 En el contexto actual, empresas como DHL participan en procesos de logística inversa transportando productos devueltos, mientras que plataformas como Rappi facilitan la gestión de devoluciones en entregas.

    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Beneficios

    .bloque-texto-g.bg-color-08.p-4.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img06.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La logística inversa aporta beneficios que favorecen la eficiencia operativa, la sostenibilidad y la satisfacción del cliente. Su adecuada implementación permite aprovechar mejor los recursos, reducir pérdidas y fortalecer la imagen de la organización frente al mercado.

    p.mb-4 Entre los principales beneficios de la logística inversa se destacan:
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 2.
          span Beneficios de la logística inversa
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Beneficio
                th Descripción
                th Ejemplo
            tbody
              tr
                td Recuperación de valor
                td Permite aprovechar productos retornados mediante su reutilización, reparación, reacondicionamiento o nueva comercialización, disminuyendo pérdidas y recuperando parte de su valor económico.
                td Una empresa repara muebles devueltos en buen estado y los comercializa nuevamente a un precio diferenciado.
              tr
                td Mejora del servicio
                td Facilita la gestión eficiente de devoluciones, cambios y garantías, proporcionando respuestas oportunas ante las necesidades del consumidor y contribuyendo a fortalecer su confianza y satisfacción.
                td Una tienda recoge un producto defectuoso y gestiona rápidamente su cambio sin exigir al cliente desplazamientos adicionales.
              tr
                td Optimización de recursos
                td Favorece el aprovechamiento de productos, componentes, materiales y empaques recuperables, disminuyendo desperdicios y reduciendo el uso innecesario de nuevos recursos en las operaciones de la organización.
                td Una empresa recupera cajas y empaques retornados para reutilizarlos en nuevos procesos de distribución.
              tr
                td Imagen empresarial
                td Fortalece la percepción de la organización mediante prácticas orientadas al aprovechamiento responsable de recursos y la adecuada gestión de retornos, contribuyendo a su reputación y posicionamiento frente al mercado.
                td Una empresa implementa puntos de devolución de envases para recuperarlos y reincorporarlos a sus procesos productivos.


    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .row.align-items-center.bg-fondo-04.p-4
            .col-lg-auto.order-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
            .col-lg.order-1
              p.mb-0 Empresas como Amazon han fortalecido la confianza del cliente mediante políticas de devolución eficientes, mientras que Nike ha implementado programas de reciclaje de productos para optimizar recursos.


    .row.align-items-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-08.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
              img(src="@/assets/curso/tema1/img12.svg")
            .col-12.col-lg.mb-2.mb-lg-0
              h4.mb-2.mx-lg-0.text-lg-start Logística inversa
              p.mb-0 Para comprender la logística inversa en la práctica, incluyendo su aplicación en devoluciones, recuperación de productos y reutilización dentro de la cadena de suministro, se recomienda ir al siguiente recurso:
            .col-12.col-lg-auto.text-center
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=qwZg7zLS_Ms'" target="_blank")
                span Ir al recurso
                //- i.fas.fa-link

    .container
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .row.bg-fondo-09.align-items-center.justify-content-center.br-15.p-0
            .col-md-8.col-lg-6.mb-3.mb-lg-0.order-2.order-md-2.order-lg-2.p-0
              figure
                img(src="@/assets/curso/tema2/img07.png", data-aos="fade-right").w-50.mx-auto
            .col-lg-6.order-1.order-md-1.order-lg-1.p-4.p-lg-4
              p(data-aos="fade-left").mb-4 Ir al pódcast:
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="La logística y la distribución hoy"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
              )




  
  //
    .bloque-texto-g.bg-color-01.p-4.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La distribución es un componente estratégico del sistema comercial que permite conectar la producción con el consumo. Su gestión implica decisiones relacionadas con canales, cobertura, logística y disponibilidad del producto. En entornos multicanal, su alcance trasciende lo físico e integra procesos digitales. Su correcta aplicación incide directamente en la competitividad y en la experiencia del cliente.


    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Concepto


    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img03.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") La distribución se define como el conjunto de actividades orientadas a trasladar productos desde el productor hasta el consumidor final, garantizando disponibilidad, accesibilidad y condiciones adecuadas. Este proceso integra funciones logísticas, comerciales y operativas como transporte, almacenamiento, gestión de inventarios y coordinación de intermediarios.
        
        .bg-fondo-05.br-15.mb-3.p-4
          p.mb-0 Desde el enfoque de mercadeo, la distribución corresponde a la variable “plaza” dentro del marketing mix y cumple la función de facilitar el acceso del cliente al producto en el lugar y momento adecuados. Su gestión requiere alineación con el segmento de mercado, el tipo de producto y la estrategia comercial de la organización.

        p.mb-0 En la práctica, empresas como Amazon han optimizado la distribución mediante centros logísticos automatizados, entregas en 24 horas y sistemas de última milla, mientras que Coca-Cola mantiene una red global de distribución intensiva que garantiza presencia en tiendas, supermercados y máquinas dispensadoras.


    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Tipos


    .row.align-items-center.mb-5.justify-content-center
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema2/img04.svg").mx-auto
      .col-lg
        p.mb-2 Los tipos de distribución corresponden a las estrategias utilizadas por las organizaciones para definir el nivel de cobertura del mercado y el número de intermediarios que participarán en la comercialización de un producto. 

        p.mb-0 La selección del tipo de distribución depende de factores como las características del producto, el mercado objetivo, el posicionamiento de la marca y los objetivos comerciales. Los principales tipos de distribución son:

    .bg-full-width.bg-fondo-1
      .row.justify-content-center.mb-5
        .col-xl-4.col-lg-6.col-md-10.col-12.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left").tarjeta
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema2/img05.png", alt="")
            .crd_hover_txt--body
              h4.mb-3.text-center Intensiva
              p.mb-0 Busca alcanzar la mayor cobertura posible del mercado mediante la presencia del producto en múltiples puntos de venta. Se utiliza principalmente para productos de consumo masivo que requieren alta disponibilidad, como bebidas, alimentos y artículos de uso cotidiano.

        .col-xl-4.col-lg-6.col-md-10.col-12.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left").tarjeta
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema2/img06.png", alt="")
            .crd_hover_txt--body
              h4.mb-3.text-center Selectiva
              p.mb-0 Emplea un número limitado de intermediarios, permitiendo mantener un mayor control sobre la comercialización y la experiencia del cliente. Es común en productos de gama media, como electrodomésticos, muebles y equipos tecnológicos.

        .col-xl-4.col-lg-6.col-md-10.col-12.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left").tarjeta
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema2/img07.png", alt="")
            .crd_hover_txt--body
              h4.mb-3.text-center Exclusiva
              p.mb-0 Estrategia que concede a uno o pocos intermediarios autorizados el derecho de comercializar un producto dentro de un territorio determinado, favoreciendo mayor control sobre su venta y posicionamiento. Como, por ejemplo, una marca de lujo comercializada únicamente mediante <em>boutiques</em> y distribuidores oficialmente autorizados.

              
      .container
        .row.mb-lg-4.mb-4.justify-content-center.align-items-center
          .col-lg-10.col-md-12
            .row.align-items-center.bg-fondo-07.p-4
              .col-lg-auto
                img.d-none.d-lg-flex(src="@/assets/curso/tema1/img10.png", style="max-width: 150px").mx-auto
              .col-lg
                p.mb-0 En el contexto real, Coca-Cola aplica distribución intensiva asegurando disponibilidad en tiendas de barrio, supermercados y restaurantes. Nike utiliza distribución selectiva combinando tiendas propias, distribuidores autorizados y comercio electrónico. Apple implementa distribución exclusiva mediante Apple Store y distribuidores certificados para controlar la experiencia del cliente y el posicionamiento de marca.

      separador
      
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.3 Plan
  
      .bg-full-width.bg-fondo-02.px-5.py-4
        img(src="@/assets/curso/tema2/img09.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="fade-right")
          p.banner-text El plan es un instrumento estratégico que organiza las decisiones relacionadas con la entrega del producto al mercado. Incluye la definición de canales, cobertura geográfica, rutas logísticas, niveles de inventario y tiempos de entrega. Este plan permite coordinar recursos y procesos para garantizar eficiencia operativa y cumplimiento de los objetivos comerciales. Su estructura debe considerar variables como demanda, capacidad logística, costos y características del producto. 


    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img10.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") En empresas como Alpina, el plan de distribución incorpora cadena de frío, rutas de transporte especializadas y frecuencia de abastecimiento en puntos de venta. De igual manera, Mercado Libre diseña planes de distribución que integran centros de fulfillment, operadores logísticos y entregas de última milla para asegurar tiempos competitivos.
        .bg-fondo-05.br-15.mb-0.p-4
          p.mb-0 Este tema será abordado con mayor profundidad en secciones posteriores del componente formativo, donde se analizarán sus elementos y aplicación. Su desarrollo permitirá comprender su importancia dentro de la gestión de la distribución comercial.


    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Sistemas


    .row.align-items-center.mb-5.justify-content-center
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema2/img11.svg").mx-auto
      .col-lg
        p.mb-2 Los sistemas de distribución corresponden a la forma en que las empresas organizan y gestionan sus canales para llevar el producto al consumidor. Estos sistemas pueden variar según el nivel de integración, control y uso de tecnología.

        p.mb-0 Entre los principales sistemas se encuentran:


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 1.
          span Tipos de sistema de distribución
        .tabla-a.tb-custom.mb-0
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th() Sistema de distribución
                th() Concepto
                th() Ejemplo
            tbody
              tr
                td Sistema vertical
                td Integra y coordina diferentes niveles del canal, como productores, mayoristas y minoristas, para mejorar la eficiencia y reducir conflictos en la comercialización.
                td Un fabricante coordina con distribuidores y tiendas las condiciones de abastecimiento, promoción y venta de sus productos.
              tr
                td Sistema horizontal
                td Se presenta cuando dos o más empresas ubicadas en un mismo nivel del canal establecen acuerdos para aprovechar conjuntamente recursos, capacidades u oportunidades comerciales.
                td Dos cadenas minoristas comparten infraestructura logística para ampliar su cobertura en determinadas zonas geográficas.
              tr
                td Sistema multicanal
                td Consiste en utilizar simultáneamente diferentes canales de distribución para facilitar que los productos lleguen a distintos segmentos de clientes y ampliar la cobertura comercial.
                td Una empresa comercializa sus productos mediante tiendas físicas, distribuidores, página web y plataformas de comercio electrónico.

             
    .container
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .row.align-items-center.bg-fondo-07.p-4
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img10.png", style="max-width: 150px").mx-auto
            .col-lg
              p.mb-0 En la práctica, Falabella implementa un sistema multicanal que combina tiendas físicas, comercio electrónico, marketplace y aplicaciones móviles. Por su parte, McDonald’s utiliza un sistema vertical altamente controlado mediante franquicias que operan bajo estándares definidos por la marca.


    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Utilidades

    .bg-full-width.bg-fondo-1
      .container
        .row.mb-lg-4.mb-3.justify-content-center.align-items-center.bg-color-06
          .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
            figure
              img(src="@/assets/curso/tema2/img12.png", data-aos="zoom-in").mx-auto
          .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-3
            p.mb-0(data-aos="fade-right") La distribución genera valor al facilitar que los productos lleguen al cliente en el lugar, momento y condiciones adecuadas, contribuyendo a la eficiencia comercial y a la satisfacción del consumidor.
        
      p.mb-4 Las principales utilidades de la distribución son:

      .row.mb-lg-5.mb-4.justify-content-center
        .col-lg-6.col-xl-3.col-md-6.col-sm-12.p-2.mb-4.mb-xl-0
          .tarjeta.bg-fondo-08.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img14.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Utilidad de lugar
            p.text-center Acerca el producto al consumidor mediante puntos de venta adecuados.

        .col-lg-6.col-xl-3.col-md-6.col-sm-12.p-2.mb-4.mb-xl-0
          .tarjeta.bg-fondo-08.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img15.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Utilidad de tiempo
            p.text-center Garantiza la disponibilidad del producto cuando el cliente lo requiere.

        .col-lg-6.col-xl-3.col-md-6.col-sm-12.p-2.mb-4.mb-xl-0
          .tarjeta.bg-fondo-08.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img16.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Utilidad de posesión
            p.text-center Facilita la compra mediante procesos de adquisición accesibles.

        .col-lg-6.col-xl-3.col-md-6.col-sm-12.p-2.mb-4.mb-xl-0
          .tarjeta.bg-fondo-08.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img17.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Utilidad de forma
            p.text-center Adapta el producto para satisfacer las necesidades del consumidor.


      .container
        .row.mb-lg-5.mb-5.justify-content-center.align-items-center
          .col-lg-10.col-md-12
            .row.align-items-center.bg-fondo-07.p-4
              .col-lg-auto.order-2
                img.d-none.d-lg-flex(src="@/assets/curso/tema1/img10.png", style="max-width: 150px").mx-auto
              .col-lg.order-1
                p.mb-0 En el contexto empresarial, Rappi genera utilidad de tiempo mediante entregas rápidas, Amazon combina utilidad de lugar y tiempo a través de su red logística, y IKEA aporta utilidad de forma al ofrecer productos diseñados para ensamblaje por parte del cliente.

      .container
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-10
            .row.bg-fondo-09.align-items-center.justify-content-center.br-15.p-0
              .col-md-8.col-lg-6.mb-3.mb-lg-0.order-2.order-md-2.order-lg-1.p-0
                figure
                  img(src="@/assets/curso/tema2/img18.png", data-aos="fade-right").w-50.mx-auto
              .col-lg-6.order-1.order-md-1.order-lg-2.p-4.p-lg-3
                p(data-aos="fade-left").mb-4 Ir al pódcast:
                TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                  texto="La logística y la distribución hoy"
                  tiempo
                  :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
                )

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
