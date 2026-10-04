<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos del plan de la distribución comercial',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> analizar los conceptos fundamentales de la planeación de la distribución comercial para comprender su importancia en la comercialización de productos y la cobertura del mercado.<br><br>Lea la pregunta de cada ítem y seleccione la respuesta correcta.',
      barajarPreguntas: true,
      titulo_aprobado: '¡EXCELENTE!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      mensaje_aprobado:
        '¡Excelente! felicitaciones, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
      preguntas: [
        {
          id: 1,
          texto:
            'Una empresa presenta frecuentes retrasos en las entregas y un incremento en los costos de transporte. ¿Cuál sería la primera acción que debería implementar para optimizar su proceso de distribución?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar el número de proveedores sin analizar las rutas de distribución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aumentar el inventario de todos los productos sin considerar la demanda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Analizar el proceso logístico para identificar oportunidades de mejora en el transporte, almacenamiento y distribución.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir todos los canales de distribución por ventas directas al consumidor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El análisis del proceso logístico permite identificar oportunidades para optimizar el transporte, el almacenamiento y la distribución.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo y analice cómo la logística contribuye a optimizar los procesos de distribución comercial.',
        },
        {
          id: 2,
          texto:
            'La logística tiene como propósito principal dentro de una organización:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Coordinar el flujo eficiente de productos, información y recursos desde el origen hasta el cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Diseñar campañas de promoción para incrementar las ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar los precios de comercialización de los productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Elaborar estudios financieros sobre la rentabilidad empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La logística integra los procesos necesarios para que los productos lleguen oportunamente al cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo e identifique el propósito de la logística en la cadena de suministro.',
        },
        {
          id: 3,
          texto:
            'Una empresa implementa un sistema para recibir productos defectuosos, repararlos y reincorporarlos al mercado. Esta práctica corresponde a:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Distribución intensiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gestión de inventarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Abastecimiento estratégico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Logística inversa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La logística inversa administra el retorno de productos para su recuperación, reutilización o disposición final.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo y reconozca las funciones de la logística inversa.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de las siguientes acciones favorece una adecuada gestión de inventarios?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener inventarios ilimitados para evitar faltantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Controlar las existencias de acuerdo con la demanda y la rotación de los productos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar los registros de entrada y salida de mercancías.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Almacenar todos los productos sin clasificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Una adecuada gestión de inventarios permite mantener el equilibrio entre disponibilidad y costos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo y analice la importancia del control de inventarios.',
        },
        {
          id: 5,
          texto:
            'El indicador de rotación de inventarios permite a una organización conocer principalmente:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La frecuencia con la que los productos son vendidos y repuestos durante un período determinado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El número de empleados asignados al almacén.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El costo de fabricación de cada producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La participación de mercado de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La rotación de inventarios facilita el control de existencias y la toma de decisiones sobre abastecimiento.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo y estudie los indicadores relacionados con la gestión de inventarios.',
        },
        {
          id: 6,
          texto:
            'Una organización utiliza un software de georreferenciación para analizar la ubicación de sus clientes. ¿Cuál es el principal beneficio de esta herramienta?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar nuevos productos para el mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar el número de proveedores de la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Optimizar la planeación de rutas y mejorar la cobertura de distribución.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir los costos de producción de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El software de georreferenciación facilita la planeación de rutas y mejora la eficiencia de la distribución.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo y analice las aplicaciones de las herramientas de georreferenciación.',
        },
        {
          id: 7,
          texto:
            'Antes de elaborar un plan de distribución, la organización debe:',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir el diseño de la publicidad comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Analizar las necesidades del mercado, la capacidad logística y los objetivos comerciales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Modificar la estructura organizacional de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar el número de intermediarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El análisis previo permite formular un plan de distribución coherente con las necesidades de la organización y del mercado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo y estudie las etapas para elaborar un plan de distribución.',
        },
        {
          id: 8,
          texto:
            'Una empresa desea disminuir el impacto ambiental generado por las devoluciones de productos. ¿Qué estrategia debería fortalecer?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Distribución exclusiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incremento del inventario de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ventas por comercio electrónico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Procesos de logística inversa para recuperar, reutilizar o reciclar los productos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La logística inversa favorece el aprovechamiento de los productos retornados y contribuye a la sostenibilidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo y analice los beneficios de la logística inversa.',
        },
        {
          id: 9,
          texto:
            'Un plan de distribución contribuye al cumplimiento de los objetivos comerciales porque:',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organiza las acciones necesarias para que los productos lleguen al mercado de manera eficiente y oportuna.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituye las actividades de producción de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elimina la necesidad de controlar inventarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplaza las estrategias de mercadeo de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El plan de distribución coordina recursos y actividades para garantizar la disponibilidad de los productos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo y estudie la finalidad del plan de distribución.',
        },
        {
          id: 10,
          texto:
            'Al diseñar un plan de distribución, ¿qué criterio resulta más importante para seleccionar una estrategia adecuada?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color de la imagen corporativa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad de competidores presentes en el mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las características del producto, las necesidades del cliente y la capacidad logística de la organización.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El número de empleados del área administrativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La selección de la estrategia de distribución debe responder a las características del producto, del mercado y de la capacidad logística de la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo e identifique los criterios para diseñar un plan de distribución.',
        },
        {
          id: 11,
          texto:
            'Una empresa desea reducir el tiempo de entrega a sus clientes sin incrementar significativamente los costos operativos. ¿Qué decisión contribuiría mejor a este objetivo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumentar el inventario de todos los productos sin realizar un análisis previo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar el control de las existencias para agilizar los despachos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Incrementar el número de proveedores sin modificar la red de distribución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Optimizar las rutas de distribución y coordinar eficientemente el transporte y el almacenamiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La optimización de rutas y la coordinación logística mejoran los tiempos de entrega y favorecen la eficiencia operativa.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo y analice cómo la logística optimiza la distribución comercial.',
        },
        {
          id: 12,
          texto:
            'La logística inversa aporta valor a una organización porque permite:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el número de intermediarios comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Gestionar el retorno de productos para su recuperación, reutilización o disposición adecuada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir completamente la distribución tradicional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el número de clientes atendidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La logística inversa optimiza el manejo de devoluciones y promueve el aprovechamiento responsable de los productos retornados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo y estudie las funciones de la logística inversa.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es la principal utilidad de un software de georreferenciación en la distribución comercial?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar campañas publicitarias digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Calcular automáticamente el precio de los productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Analizar la ubicación geográfica para optimizar rutas, cobertura y zonas de atención.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Elaborar los estados financieros de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Estas herramientas facilitan la planeación territorial y optimizan las operaciones de distribución.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo y estudie las aplicaciones de la georreferenciación.',
        },
        {
          id: 14,
          texto:
            'Durante la elaboración de un plan de distribución, ¿qué aspecto resulta indispensable para garantizar su viabilidad?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir únicamente el presupuesto destinado a publicidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar el número de productos comercializados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar el seguimiento de los inventarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Establecer objetivos, recursos, responsables y acciones para ejecutar la distribución.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Un plan de distribución debe definir los recursos y acciones necesarios para cumplir los objetivos comerciales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo y estudie la estructura del plan de distribución.',
        },
        {
          id: 15,
          texto:
            '¿Qué beneficio obtiene una organización al mantener un adecuado control de inventarios?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar el tiempo de almacenamiento de todos los productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Disminuir los riesgos de desabastecimiento y exceso de existencias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el número de clientes atendidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar completamente los costos logísticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El control de inventarios facilita la disponibilidad de productos y optimiza los costos asociados al almacenamiento.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo y analice la importancia del control de existencias.',
        },
        {
          id: 16,
          texto:
            'Una empresa busca ampliar su cobertura comercial sin afectar el nivel de servicio al cliente. ¿Qué acción resulta más conveniente?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar los centros de distribución existentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el inventario sin analizar la demanda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Diseñar una estrategia de distribución acorde con las características del mercado y la capacidad logística.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Comercializar todos los productos mediante un único canal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La estrategia de distribución debe responder a las condiciones del mercado y a la capacidad operativa de la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo y analice las estrategias de distribución comercial.',
        },
        {
          id: 17,
          texto:
            'Al evaluar un plan de distribución, ¿qué indicador permite verificar si los pedidos están llegando oportunamente a los clientes?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Número de campañas publicitarias ejecutadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cantidad de proveedores vinculados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Participación de mercado de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cumplimiento de los tiempos de entrega establecidos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El cumplimiento de los tiempos de entrega es un indicador clave para evaluar la eficacia del proceso de distribución.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo y analice los criterios utilizados para evaluar un plan de distribución.',
        },
        {
          id: 18,
          texto:
            'Una empresa identifica que algunos productos permanecen almacenados durante largos periodos sin ser comercializados. ¿Qué indicador debería analizar inicialmente?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La rotación de inventarios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La participación de mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El presupuesto de publicidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El número de proveedores contratados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La rotación de inventarios permite evaluar la frecuencia con que los productos salen del almacén y son repuestos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo y analice los indicadores utilizados para administrar inventarios.',
        },
        {
          id: 19,
          texto:
            'Una organización revisa periódicamente los resultados de su plan de distribución para realizar ajustes cuando sea necesario. ¿Qué etapa del proceso está fortaleciendo principalmente?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La identificación del mercado objetivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El seguimiento y la evaluación del plan de distribución.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El diseño del empaque del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La selección del nombre comercial de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El seguimiento y la evaluación permiten verificar el cumplimiento de los objetivos e implementar acciones de mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo y estudie las etapas del plan de distribución para fortalecer su comprensión.',
        },
        {
          id: 20,
          texto:
            'Una organización implementó un nuevo plan de distribución y, después de seis meses, verificó una disminución en los tiempos de entrega, un mejor control de inventarios y un aumento en la satisfacción de los clientes. ¿Qué conclusión puede establecerse sobre el plan implementado?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los resultados obtenidos dependen exclusivamente del incremento de inventarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El plan de distribución contribuyó al mejoramiento de la eficiencia logística y del servicio al cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La satisfacción del cliente no tiene relación con la distribución de los productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los indicadores obtenidos hacen innecesario continuar evaluando el plan de distribución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Un plan de distribución bien diseñado mejora la eficiencia logística, fortalece el nivel de servicio y contribuye al cumplimiento de los objetivos comerciales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo y analice cómo la evaluación del plan de distribución permite mejorar continuamente los procesos logísticos.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
