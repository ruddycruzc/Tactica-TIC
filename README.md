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

## 2. Actualizar rama de desarrollo

```bash
git checkout dev
git pull origin dev
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

## 6. Integrar cambios en dev

```bash
git checkout dev
git pull origin dev
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
git push origin dev
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
│   │   │   └── contact-form
│   │   │
│   │   ├── hero
│   │   │
│   │   ├── info-blocks
│   │   │
│   │   ├── layout
│   │   │   ├── navbar
│   │   │   ├── body
│   │   │   └── footer
│   │   │
│   │   ├── media
│   │   │
│   │   ├── sections
│   │   │
│   │   └── ui
│   │       ├── buttons
│   │       ├── cards
│   │       ├── carousel
│   │       └── grids
│   │
│   ├── interfaces
│   │
│   ├── pages
│   │   ├── about
│   │   ├── blog
│   │   ├── careers
│   │   ├── contact
│   │   ├── home
│   │   └── projects
│   │
│   ├── services
│   │   └── translation-service
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

# Organización

## Components

Contienen todos los componentes reutilizables y componentes de negocio del proyecto.

### UI

```text
components/ui
```

Contiene componentes genéricos reutilizables:

* Buttons
* Cards
* Carousel
* Grids

### Sections

```text
components/sections
```

Contiene secciones completas construidas a partir de componentes UI.

Ejemplos:

* AboutSection
* CaseStudiesSection
* ClientsSection
* ServicesSection
* FAQSection

---

## Interfaces

Todas las interfaces compartidas deben almacenarse en:

```text
src/app/interfaces
```

Ejemplos:

```text
nav-item.interface.ts
footer-link.interface.ts
team-card.interface.ts
project.interface.ts
```

No se deben declarar interfaces reutilizables dentro de los componentes.

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

La gestión del idioma se realiza mediante:

```text
TranslationService
```

con persistencia del idioma seleccionado.

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

---

## Home

La página Home debe construirse mediante componentes independientes y reutilizables.

Ejemplo actual:

```text
Home
├── Hero
├── InfoRightImage
├── VideoHero
├── CaseStudiesSection
├── CardsCarousel
├── LogosCarousel
└── ContactForm
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

* No trabajar directamente sobre `dev`.
* Una tarea = una rama.
* Toda tarea debe existir previamente en Jira.
* Ejecutar siempre:

```bash
ng build
```

antes de realizar un commit.

* Resolver conflictos antes de fusionar con `dev`.
* Eliminar las ramas una vez finalizada la tarea.
* Mantener las interfaces centralizadas.
* Mantener componentes reutilizables y desacoplados.
* Mantener una arquitectura basada en Angular Standalone Components.

Para desarrollo local:

```bash
ng serve -o
```
