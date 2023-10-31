import {ChildrenResponseDTO} from "./ChildrenResponseDTO";

export interface TopicResponseDTO {
  name: string;
  description: string;
  isRoot: boolean;
  children: ChildrenResponseDTO[]; // Puede ser un arreglo de objetos Topic
  resources: any[]; // Pueden ser objetos con propiedades específicas
  experienceLevel: string;
  topicRole: string;
  links: {
    rel: string;
    href: string;
  }[];
}
