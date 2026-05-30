# Proyecto Angular

## Instalación

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_PROYECTO>
npm install
ng serve
```

## Flujo de trabajo con ramas

### Actualizar main

```bash
git checkout main
git pull origin main
```

### Crear una rama nueva

```bash
git checkout -b feature/nombre-funcionalidad
```

Ejemplos:

```bash
git checkout -b feature/navbar
git checkout -b feature/footer
git checkout -b feature/home
```

### Guardar cambios

```bash
git add .
git commit -m "Crea componente navbar"
```

### Subir la rama a GitHub

```bash
git push -u origin feature/navbar
```

### Fusionar cambios

1. Crear un Pull Request.
2. Revisar los cambios.
3. Fusionar con `main`.
4. Eliminar la rama.

---

## Actualizar una rama con los cambios de main

```bash
git checkout main
git pull origin main

git checkout feature/nombre-rama
git merge main
```

Si existen conflictos, resolverlos y después:

```bash
git push
```

---

## Creación de componentes

Crear un componente:

```bash
ng g c components/nombre-componente
```

Ejemplos:

```bash
ng g c components/navbar
ng g c components/footer
ng g c pages/home
```

---

## Estructura del proyecto

```text
src
├── app
│   ├── components
│   │   ├── navbar
│   │   ├── footer
│   │   └── shared
│   │
│   ├── pages
│   │   ├── home
│   │   ├── about
│   │   ├── services
│   │   └── contact
│   │
│   ├── services
│   ├── interfaces
│   ├── models
│   └── app.routes.ts
│
├── assets
│   ├── images
│   ├── icons
│   └── fonts
│
└── styles.css
```

---

## Normas del equipo

* No trabajar directamente sobre `main`.
* Una tarea = una rama.
* Realizar commits descriptivos.
* Ejecutar siempre:

```bash
ng build
```

antes de subir cambios.

### Ejemplos de commits

```bash
git commit -m "Crea componente navbar"
git commit -m "Añade estilos de la página principal"
git commit -m "Implementa formulario de contacto"
```
