# Proyecto Angular - Táctica TIC

## Instalación

```bash
git clone <URL_DEL_REPOSITORIO>
cd Tactica-TIC
npm install
ng serve
```

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

Antes de crear una nueva rama:

```bash
git checkout dev
git pull origin dev
```

---

## 3. Crear rama de trabajo

Crear una rama asociada a la tarea Jira:

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

Realizar la implementación de la tarea correspondiente.

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

Cambiar a la rama de desarrollo:

```bash
git checkout dev
```

Actualizar la rama:

```bash
git pull origin dev
```

Fusionar la rama de trabajo:

```bash
git merge TT-35-logos-carousel
```

---

## 7. Resolver conflictos (si existen)

Comprobar estado:

```bash
git status
```

Resolver manualmente los conflictos y después:

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

* Marcar la tarea como completada en Jira.
* Eliminar la rama local.

```bash
git branch -d TT-35-logos-carousel
```

Eliminar la rama remota (si existe):

```bash
git push origin --delete TT-35-logos-carousel
```

---

## 10. Comenzar la siguiente tarea

Repetir el proceso desde el paso 1.

---

# Creación de componentes

Crear un componente:

```bash
ng g c components/nombre-componente
```

Ejemplos:

```bash
ng g c components/layout/navbar
ng g c components/layout/footer
ng g c components/forms/contact-form
ng g c components/carousel/logos-carousel
ng g c pages/home
```

---

# Arquitectura del proyecto

```text
src
├── app
│
│   ├── components
│   │
│   │   ├── buttons
│   │   │   ├── buttonprimary
│   │   │   ├── buttonsecondary
│   │   │   └── iconbutton
│   │   │
│   │   ├── cards
│   │   ├── carousel
│   │   ├── forms
│   │   ├── grids
│   │   ├── hero
│   │   ├── info-blocks
│   │   ├── media
│   │   │
│   │   ├── layout
│   │   │   ├── navbar
│   │   │   ├── body
│   │   │   └── footer
│   │   │
│   │   └── sections
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
│   ├── app.config.ts
│   ├── app.css
│   ├── app.html
│   ├── app.routes.ts
│   ├── app.spec.ts
│   └── app.ts
│
├── assets
│   ├── images
│   ├── icons
│   ├── logos
│   ├── videos
│   └── fonts
│
├── main.ts
├── index.html
└── styles.css
```

---

# Organización

### Components

Contienen todos los componentes reutilizables del proyecto.

Ejemplos:

* Navbar
* Footer
* Cards
* Carruseles
* Formularios
* Secciones reutilizables

---

### Interfaces

Todas las interfaces compartidas deben almacenarse en:

```text
src/app/interfaces
```

Ejemplos:

```text
nav-item.interface.ts
footer-link.interface.ts
team-card.interface.ts
logo-item.interface.ts
```

No se deben declarar interfaces reutilizables dentro de los componentes.

---

### Pages

Contienen las páginas principales asociadas al sistema de rutas.

Ejemplos:

```text
Home
About
Projects
Blog
Careers
Contact
```

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

Los recursos estáticos se organizan en:

```text
src/assets
├── images
├── icons
├── logos
├── videos
└── fonts
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

```
```
