# Proyecto Angular - Táctica TIC

## Instalación

```bash
git clone <URL_DEL_REPOSITORIO>
cd Tactica-TIC
npm install
ng serve
```

---

# Tecnologías utilizadas

* Angular (Standalone Components)
* TypeScript
* Angular Router
* ngx-translate
* Firebase Hosting
* HTML5
* CSS3

---

# Características implementadas

* Navegación mediante Angular Router.
* Arquitectura basada en Standalone Components.
* Componentes UI reutilizables.
* Sistema de internacionalización ES/EN.
* Selector de idioma persistente.
* Sistema de datos desacoplado mediante `data/`.
* Interfaces centralizadas.
* Carruseles reutilizables.
* Diseño responsive.
* Hosting y despliegue mediante Firebase.

---

# Flujo de trabajo

## 1. Crear tarea en Jira

Antes de comenzar cualquier desarrollo:

* Crear la tarea en Jira.
* Asignar la tarea al desarrollador correspondiente.

Ejemplo:

```text
TT-35 Implementar carrusel de logos
```

---

## 2. Actualizar rama principal

```bash
git checkout main
git pull origin main
```

---

## 3. Crear rama de trabajo

```bash
git checkout -b TT-35-logos-carousel
```

Ejemplos:

```bash
git checkout -b TT-29-navbar-navigation
git checkout -b TT-34-information-section
git checkout -b TT-35-logos-carousel
```

---

## 4. Desarrollo

Antes de guardar cambios ejecutar:

```bash
ng build
```

Verificar que la aplicación compila correctamente y no existen errores.

---

## 5. Guardar cambios

```bash
git add .
git commit -m "Implement logos carousel"
```

### Reglas para commits

Los commits deben ser:

* Descriptivos.
* En inglés.
* Escritos en imperativo.

Ejemplos:

```bash
git commit -m "Implement navbar navigation"
git commit -m "Add information section to home page"
git commit -m "Create reusable icon button"
git commit -m "Implement logos carousel"
```

---

## 6. Integrar cambios

```bash
git checkout main
git pull origin main
git merge TT-35-logos-carousel
```

---

## 7. Resolver conflictos

```bash
git status
```

Resolver conflictos y después:

```bash
git add .
git commit
```

---

## 8. Subir cambios

```bash
git push origin main
```

---

## 9. Cerrar tarea

Una vez validada la integración:

```bash
git branch -d TT-35-logos-carousel
git push origin --delete TT-35-logos-carousel
```

---

## 10. Comenzar la siguiente tarea

Repetir el proceso desde el paso 1.

---

# Arquitectura del proyecto

```text
src
├── app
│
│   ├── components
│   │
│   │   ├── forms
│   │   ├── hero
│   │   ├── info-blocks
│   │   ├── layout
│   │   ├── media
│   │   ├── sections
│   │   └── ui
│   │
│   ├── data
│   │   ├── logos
│   │   ├── products
│   │   ├── projects
│   │   └── team
│   │
│   ├── interfaces
│   │   ├── data
│   │   ├── translations
│   │   └── ui
│   │
│   ├── pages
│   │   ├── about
│   │   ├── blog
│   │   ├── careers
│   │   ├── contact
│   │   ├── home
│   │   ├── not-found
│   │   └── projects
│   │
│   ├── services
│   │
│   ├── styles
│   │
│   └── translations
│       ├── pages
│       └── shared
│
├── assets
│   ├── images
│   ├── icons
│   ├── logos
│   └── videos
│
├── main.ts
├── index.html
└── styles.css
```

---

# Organización del proyecto

## Components

Contienen los componentes visuales y la lógica de presentación.

```text
src/app/components
```

Los componentes deben ser reutilizables y estar desacoplados de los datos.

### UI

```text
components/ui
```

Contiene componentes genéricos reutilizables:

* Buttons
* Cards
* Carousel
* Grids
* Text

### Sections

```text
components/sections
```

Contiene secciones completas construidas mediante componentes UI.

Ejemplos:

* HeroSection
* ProductShowcaseSection
* HomeProjectsSection
* TeamCarouselSection
* FAQSection

---

## Data

```text
src/app/data
```

Contiene la información estructurada utilizada por los componentes.

Ejemplos:

```text
data
├── logos
├── products
├── projects
└── team
```

### Regla

Los datos NO deben almacenarse directamente dentro de los componentes.

Incorrecto:

```ts
readonly products = [
  ...
];
```

Correcto:

```ts
import { PRODUCTS } from '../../../data/products/products.data';

readonly products = PRODUCTS;
```

---

## Interfaces

Todas las interfaces compartidas deben almacenarse en:

```text
src/app/interfaces
```

Organizadas por responsabilidad:

```text
interfaces
├── data
├── translations
└── ui
```

### data

Modelos de negocio.

Ejemplos:

```text
project.interface.ts
team-card.interface.ts
logo-item.interface.ts
```

### translations

Contratos para estructuras de traducción.

Ejemplos:

```text
hero-content.interface.ts
video-content.interface.ts
```

### ui

Interfaces utilizadas por componentes visuales reutilizables.

---

## Pages

Contienen las páginas principales asociadas al sistema de rutas.

```text
Home
About
Projects
Blog
Careers
Contact
NotFound
```

---

## Translations

Las traducciones están organizadas por páginas y recursos compartidos.

```text
translations
├── pages
│   ├── home
│   ├── about
│   ├── contact
│   ├── blog
│   ├── careers
│   └── projects
│
└── shared
    ├── nav
    └── footer
```

---

## Regla de traducciones

Los textos traducibles NO deben escribirse directamente en los componentes.

Incorrecto:

```ts
title = 'Transforma tu negocio';
```

Correcto:

```ts
title = 'HOME.FINAL_CTA.TITLE';
```

```html
{{ title | translate }}
```

---

# Creación de nuevas funcionalidades

## Flujo recomendado

### 1. Crear interfaz

```text
src/app/interfaces
```

---

### 2. Crear datos (si aplica)

```text
src/app/data
```

Ejemplos:

* Productos
* Proyectos
* Equipo
* Logos

---

### 3. Crear traducciones

```text
src/app/translations
```

---

### 4. Crear componente

```text
src/app/components
```

---

### 5. Integrar en la página correspondiente

```text
src/app/pages
```

---

# Landing Pages

Las nuevas landing pages deben reutilizar componentes existentes siempre que sea posible.

Ejemplos:

* Hero
* FAQ
* Logos
* CTA
* Team
* Projects

Evitar duplicar componentes para funcionalidades ya existentes.

Los cambios de contenido deben realizarse mediante:

```text
data/
translations/
```

y no creando nuevos componentes.

---

# Convenciones del proyecto

## Standalone Components

Todos los componentes nuevos deben utilizar:

```ts
standalone: true
```

---

## Routing

La navegación interna debe utilizar:

```ts
RouterLink
RouterLinkActive
```

No se deben utilizar enlaces HTML tradicionales para navegar entre páginas de la aplicación.

---

## Assets

```text
src/assets
├── images
├── icons
├── logos
└── videos
```

---

## Angular Moderno

Siempre que sea posible utilizar:

```html
@for(...)
```

en lugar de:

```html
*ngFor
```

y

```html
@if(...)
```

en lugar de:

```html
*ngIf
```

---

## Home

La página Home se compone actualmente de:

```text
Home
├── HeroSection
├── ProductShowcaseSection
├── VideoHeroSection
├── TextInfoSection
├── InfoLeftSection
├── HomeProjectsSection
├── TeamCarouselSection
├── LogosSection
├── FAQSection
└── FinalCTASection
```

---

# Despliegue

Compilar la aplicación:

```bash
ng build --configuration production
```

Desplegar en Firebase:

```bash
firebase deploy
```

---

# Normas del equipo

* No trabajar directamente sobre `main`.
* Una tarea = una rama.
* Toda tarea debe existir previamente en Jira.
* Ejecutar siempre:

```bash
ng build
```

antes de realizar un commit.

* Resolver conflictos antes de fusionar con `main`.
* Eliminar las ramas una vez finalizada la tarea.
* Mantener las interfaces centralizadas.
* Mantener los datos centralizados en `data/`.
* Mantener las traducciones centralizadas en `translations/`.
* Mantener componentes reutilizables y desacoplados.
* Mantener una arquitectura basada en Angular Standalone Components.

Para desarrollo local:

```bash
ng serve -o
```
