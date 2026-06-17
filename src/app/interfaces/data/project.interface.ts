export interface Project {
  name: string;
  text?: string;              
  additionalParagraphs?: string[]; 
  listItems?: string[];         
  fundingBox?: string;          
  images: string[];             
}