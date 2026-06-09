export interface HubItem {
  cssClass: string;
  title: string;
  description: string;
  buttonVariant: 'primary' | 'secondary'; // <-- Cambiado de string a los valores literales exactos
  link: string;
  buttonText: string;
}