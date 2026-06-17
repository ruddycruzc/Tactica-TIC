import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common'; 
import { Project } from '../../../interfaces/data/project.interface';
@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css'
})
export class ProjectsSection {
  readonly projects: Project[] = [
    {
      name: 'MINIASSIST',
      text: 'Miniassist es un asistente virtual con voz destinado a personas mayores en zonas rurales de Asturias, que facilite la comunicación, el acompañamiento y el seguimiento asistencial mediante IA y conectividad sencilla. Los objetivos del proyecto son:',
      listItems: [
        'Combatir la soledad no deseada y el aislamiento de personas mayores que viven en entornos rurales.',
        'Fomentar la autonomía y seguridad mediante recordatorios y asistencia por voz.',
        'Facilitar la comunicación fluida entre usuarios, familiares y profesionales sanitarios/sociales.',
        'Crear una plataforma de memoria familiar digital que preserve recuerdos y refuerce vínculos intergeneracionales.',
        'Integrar la tecnología en el modelo de cuidados de larga duración (Estrategia CUIDAS), mejorando la coordinación y eficiencia de los servicios asistenciales.'
      ],
      images: ['assets/images/logos-proyectos/img-miniassist.png']
    },
    {
      name: 'EPISOST Sistema integral inteligente para la sosteniblidad global en el sector de las EPIS',
      text: 'El proyecto EPISOST (Sistema Integral Inteligente para la Sostenibilidad Global en el Sector de los EPIs) tiene como objetivo principal diseñar y desarrollar una herramienta digital basada en inteligencia artificial que permita a las empresas del sector de los Equipos de Protección Individual (EPIs) mejorar su sostenibilidad. Mediante esta solución tecnológica, se busca optimizar la trazabilidad de los materiales, cuantificar la huella de carbono y proponer estrategias de economía circular en los procesos productivos. De esta manera, EPISOST contribuirá a que las empresas del sector puedan cumplir con normativas ambientales y mejorar su eficiencia operativa, garantizando la viabilidad y sostenibilidad a largo plazo.',
      additionalParagraphs: ['El consorcio está conformado por: EPISALUD (Clúster EPI’s y Salud), INNOVASTURIAS (Club Asturiano de la Innovación), INERCO, BIZKARES BIOSOLUTIONS, TÁCTICA TIC, DUPONT y CALZADOS ROBUSTA.'],
      fundingBox: 'El proyecto cuenta con un presupuesto total de 196.132,71 euros, de los cuales 99.779,62 euros han sido subvencionados por el Ministerio de Industria, Comercio y Turismo a través del programa de Apoyo a Agrupaciones Empresariales Innovadoras. (AEIs).',
      images: ['assets/images/logos-proyectos/Poster_EPISOST.jpg']
    },
    {
      name: 'VISTA (112758N/2024): OPTIMIZACIÓN DE LA PRODUCCIÓN DE MANZANA DE SIDRA MEDIANTE LA INTEGRACIÓN DE TECNOLOGÍAS AVANZADAS Y AGRICULTURA DE PRECISIÓN',
      text: 'Proyecto desarrollado por Táctica TIC S.L. y Valle, Ballina y Fernández S.A. cofinanciado por el Ayuntamiento de Gijón a través de Gijón Impulsa en el marco del programa de Incentivos Impulsa - Subvenciones al Emprendimiento e Innovación (Línea II - Innovación abierta 2024)',
      images: ['assets/images/logos-proyectos/gaitero.jpeg', 'assets/images/logos-proyectos/gijon-impulsa.png']
    },
    {
      name: 'MINIBAI- Integración de Inteligencia Artificial y Lenguaje Natural en Herramienta de Gestión Empresarial para la Toma de Decisiones Optimizada en el ámbito industrial',
      text: 'Subvención asociada al programa de ejecución de proyectos de I+D para el ejercicio 2023 con cofinanciación, tanto del Gobierno del Principado de Asturias a través de la AGENCIA SEKUENS y el Plan de Ciencia Tecnología e Innovación (PCTI) 2018-2022 como de la Unión Europea a través del FEDER.\n\nReferencia: IDE/2023/0000682',
      images: ['assets/images/logos-proyectos/cofinanciado-ue.png', 'assets/images/logos-proyectos/sekuens.png']
    },
    {
      name: '7EYES: Plataforma de inspección y control de calidad en entornos industriales, basada en visión artificial, mediante el empleo de cámaras no tradicionales',
      text: 'Subvención asociada al programa de ejecución de proyectos de I+D para el ejercicio 2022 con cofinanciación, tanto del Gobierno del Principado de Asturias a través de la AGENCIA SEKUENS y el Plan de Ciencia Tecnología e Innovación (PCTI) 2018-2022 como de la Unión Europea a través del FEDER.\n\nReferencia: IDE/2022/0000600',
      images: ['assets/images/logos-proyectos/cofinanciado-ue.png', 'assets/images/logos-proyectos/sekuens.png']
    },
    {
      name: 'INVESTIGACIÓN EN SISTEMAS DE VISIÓN POR COMPUTADOR PARA DETECCIÓN, CLASIFICACIÓN Y SEGUIMIENTO DE OBJETOS EN ENTORNO INDUSTRIAL EN TIEMPO REAL MEDIANTE DEEP LEARNING (PROYECTO LINCE)',
      text: 'Subvención procedente del IDEPA (I+D IDEPA) y de la Unión Europea, asociada al programa de ejecución de proyectos de I+D (RIS-EMPRESA), para el ejercicio 2021. Referencia: IDE/2021/000444',
      images: ['assets/images/logos-proyectos/iasturias-idepa.png']
    },
    {
      name: 'Smartcrane II',
      text: 'El proyecto Smart Crane II Investigación y desarrollo de un sistema inteligente y predictivo para el aseguramiento de los movimientos de cargas aéreas mediante puentes grúas en espacios industriales a la intemperie– consiste en una investigación sobre el uso aplicado y desarrollo tecnológico de sistemas de visión artificial capaces de dotar de inteligencia y capacidad predictiva a los puentes grúas empleados en espacios industriales abiertos a la intemperie con vistas evitar accidentes humanos y materiales. Tras la primera fase del proyecto, el consorcio generará nuevo conocimiento científico-tecnológico que permitirá diseñar y desarrollar un prototipo (no comercializable) susceptible de ser empleado en pruebas intermedias y ensayos finales de validación en los entornos pertinentes. La implantación de este prototipo en puentes grúas no fabricados bajo los parámetros de Industria 4.0, permitirá su conversión hacia una maquinaria inteligente capaz manipular en altura cargas de piezas industriales de forma automática.',
      additionalParagraphs: [
        'Con este nuevo desarrollo, se espera obtener una serie de ventajas como son la mejora substancial de medidas y herramientas de seguridad inteligentes de aviso para la prevención de accidentes en personas, equipos, materiales y máquinas en el entorno industrial, la minimización de errores humanos relacionados con el manejo de este tipo de maquinaria, la posibilidad de modernizar y adaptar el parque actual de grúas puente conforme a los criterios o parámetros de Industria 4.0. y la anticipación de riesgos y visualización de la operation.',
        'Los objetivos técnicos que se plantean en el proyecto son:',
        'El estudio, identificación y categorización de variables que afectan de forma directa al proceso de manejo de cargas mediante puentes grúa en espacios industriales abiertos a la intemperie, centrándose en áreas como muelles, puertos marítimos o almacenes a cielo abierto entre otros.',
        'La investigación de tecnologías de visión artificial aplicables en ambientes exteriores industriales para el diseño y desarrollo de una tecnología robusta y resistente a la corrosión, la humedad, el polvo o posibles desplazamientos producidos por ráfagas de viento.',
        'Diseño y desarrollo de la solución prototipo. por un lado, del diseño conceptual, definición de arquitectura, desarrollo y programación de software basado en tecnologías de visión e inteligencia artificial, por otro, del diseño y desarrollo del hardware basado en un enfoque plug&play de tal forma que se facilite la implantación de las tecnologías sobre los puentes grúa ya existentes, permitiendo el revamping de instalaciones obsoletas a nivel técnico y funcional.',
        'En el presente proyecto de INVESTIGACIÓN participan 6 entidades, todas ellas de forma activa y con un papel specializado en función de su ámbito de conocimiento, cuya experiencia y conocimiento son esenciales para llevar a cabo el proyecto y alcanzar los objetivos planteados. Smart Crane II es un proyecto financiado por el Ministerio de Industria, Comercio y Turismo, a través de la Convocatoria de Agrupaciones Empresariales Innovadoras del año 2023, en el marco del Plan de Recuperación, Transformación y Resiliencia.'
      ],
      images: ['assets/images/logos-proyectos/Logos-smart-crane.png', 'assets/images/logos-proyectos/smartcrane.png']
    },
    {
      name: 'Rediseño de imagen corporativa de Táctica TIC',
      text: 'Subvención procedente del IDEPA y de la Unión Europea a través de los Programas Operativos FEDER, asociada al programa de Cheques, modalidad de Innovación, para el ejercicio 2022. Referencia: IDE/2022/000366',
      images: ['assets/images/logos-proyectos/logos_cheque.jpeg']
    },
    {
      name: 'GUARD-IA: Plataforma de monitoreo de zonas comunes en edificios mediante Inteligencia Artificial (Expte. 36696S/2023)',
      text: 'Proyecto de colaboración desarrollado por las empresas AIM Inspección SL y Táctica TIC SL cofinanciado por el Ayuntamiento de Gijón a través de Gijón Impulsa en el marco del programa de Incentivos Impulsa 2023 (Plataformas de Cooperación Empresarial). El proyecto consiste en un sistema basado en visión por computador que permita controlar el estado de ocupación de las zonas comunes de un inmueble. El objetivo es tener información en tiempo real de si hay alguna persona deambulando por el edificio y saber dónde se encuentra en cada momento, con el objetivo de poder informar a los vecinos de este hecho.',
      images: ['assets/images/logos-proyectos/gijon-impulsa.png', 'assets/images/logos-proyectos/gijon_transforma.png']
    },
    {
      name: 'ATICAPP',
      text: 'La digitalización es una necesidad para todos los negocios. Las asesorías, a pesar de tener programas para el desarrollo de sus funciones, carecen de herramientas para la organización interna de sus equipos y la optimización de procesos que se adapten a las especificidades de su actividad. ATICAPP aglutina todas las herramientas de gestión que las asesorías necesitan en una única herramienta.',
      images: ['assets/images/logos-proyectos/gijon-impulsa.png', 'assets/images/logos-proyectos/gijon_transforma.png']
    },
    {
      name: 'APPARKIA',
      text: 'APPARKIA surge como una alternativa a los aparcamientos en superficie, permitiendo a los ciudadanos obtener ganancias a través de las plazas de aparcamiento que sean de su propiedad en aquellos momentos en que no estén siendo utilizadas por ellos. APPARKIA es una APP que interconecta a personas que están buscando un aparcamiento en la ciudad para un tiempo no excesivamente largo y que suponga un coste inferior al coste de los parkings privados de la ciudad.',
      images: ['assets/images/logos-proyectos/gijon-impulsa.png', 'assets/images/logos-proyectos/gijon_transforma.png']
    },
    {
      name: 'NIBLO',
      text: 'El objetivo del proyecto NIBLO es la creación de un almacén inteligente y conectado capaz de identificar y ubicar todos los bultos de las plantas industriales de forma continua, gracias a la creación de un gemelo digital mediante la aplicación de tecnologías de visión artificial 2D y 3D, que realizará la captura de datos y su análisis. Además, se desarrollará un system de trazabilidad de las piezas a lo largo de todo su ciclo de vida útil en una cadena de valor basado en tecnología blockchain.',
      additionalParagraphs: [
        'Se trata de un proyecto de innovación colaborativa en la que participan tres empresas del sector del metal asturiano: Oxiplant, centro de transformación del acero, Iberastur, fabricante de bienes de equipo e Hiasa Grupo Gonvarri, dedicada a la fabricación de piezas para equipos solares; lo que suponen el escenario ideal para el desarrollo del proyecto. La parte tecnológica será ejecutada por Tactica Tic e Izertis, siendo todos ellos #sociosMI4. Una vez más, el proyecto es una colaboración intercluster, incorporando a Secpho (Southern European Cluster in Photonics and Optics) como miembro del consorcio. Este, junto con MI4, trabajará en la difusión y transferencia de resultados para hacer lograr una mayor repercusión de los resultados obtenidos a nivel nacional, provocando un mayor impacto en los sectores industriales susceptibles de acoger la herramienta propuesta.',
        'NIBLO es un proyecto financiado por el Ministerio de Industria, Comercio y Turismo, a través de la Convocatoria de Agrupaciones Empresariales Innovadoras del año 2022b, en el marco del Plan de Recuperación, Transformación y Resiliencia.'
      ],
      images: ['assets/images/logos-proyectos/niblo2.png', 'assets/images/logos-proyectos/logosniblo.png']
    },
    {
      name: 'EASYMATCH',
      text: 'El proyecto EASYMATCH es una plataforma de gestión del talento que facilita las conexiones entre oferta y demanda logrando hacer un "match" entre los requisitos solicitados por las empresas para cubrir sus demandas laborales y sus competencias técnicas y transversales de los candidatos.',
      images: ['assets/images/logos-proyectos/gijon-impulsa.png', 'assets/images/logos-proyectos/gijon_transforma.png']
    },
    {
      name: 'COMPACT: Components\' assembly and interconnection through combined solderless technologies (IDE/2019/000620)',
      text: 'El proyecto COMPACT ha sido cofinanciado de forma pública por parte del Gobierno del Principado de Asturias a través del IDEPA y por la Unión Europea, a través del Fondo Europeo de Desarrollo Regional (FEDER). El proyecto tiene como objetivo desarrollar un nuevo método de fabricación para construir módulos electrónicos sin usar aleación de soldadura, sino materiales como pasta o tinta conductora, resina, cobre sin electrodos. Consorcio formado por: TacticaTIC, Spain. Syswin Solutions SRL, Romania Politehnica University from Bucharest, Center for Electronic Technology and Interconnection Techniques, UPB-CETTI, Romania',
      images: ['assets/images/logos-proyectos/idepa.jpeg', 'assets/images/logos-proyectos/compact.jpeg']
    },
    {
      name: 'Contrato Formativo para la obtención de la Práctica Profesional',
      images: ['assets/images/logos-proyectos/formativo.png']
    }
  ];
}