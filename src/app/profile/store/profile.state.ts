import {RoleModel} from "../../core/model/role.model";
import {SkillModel} from "../../core/model/skill.model";
import {TopicsModel} from "../../core/model/topics.model";

export interface ProfileState {
  isLoading: boolean;
  rolesStarted: RoleModel[];
  rolesCompleted: RoleModel[];
  skillsStarted: SkillModel[];
  skillsCompleted: SkillModel[];
  topicsStarted: TopicsModel[];
  topicsCompleted: TopicsModel[];
  error: string | null;
}

const skillsCompleted: SkillModel[] = [{
  id: 0,
  name: 'Java',
  topics: [],
  description: "",
  experienceLevel: ""
},
  {
    id: 0,
    name: 'Estructura de datos',
    topics: [],
    description: "",
    experienceLevel: ""
  },
  {
    id: 0,
    name: 'Algoritmos',
    topics: [],
    description: "",
    experienceLevel: ""
  },
];

const skillsStarted: SkillModel[] = [{
  id: 0,
  name: 'Despliegue y Hosting',
  topics: [],
  description: "",
  experienceLevel: ""
},
  {
    id: 0,
    name: 'Desarrollo Ágil',
    topics: [],
    description: "",
    experienceLevel: ""
  },
  {
    id: 0,
    name: 'Paradigma de Programacion',
    topics: [],
    description: "",
    experienceLevel: ""
  },
  {
    id: 0,
    name: 'Control de Calidad de Código',
    topics: [],
    description: "",
    experienceLevel: ""
  },
];

const rolesStarted: RoleModel[] = [{
  resources: [],
  name: 'Dev Inicial',
  id: 0,
  description: '',
  experienceLevel: '',
  skills: [...skillsStarted, ...skillsCompleted],
  link: ''
}]

const rolesComplete: RoleModel[] = [{
  resources: [],
  name: 'ITskiller',
  id: 0,
  description: '',
  experienceLevel: '',
  skills: [...skillsStarted, ...skillsCompleted],
  link: ''
}]


export const INITIAL_STATE: ProfileState = {
  isLoading: false,
  rolesStarted: [...rolesStarted],
  rolesCompleted: [...rolesComplete],
  skillsStarted: [...skillsStarted],
  skillsCompleted: [...skillsCompleted],
  topicsStarted: [],
  topicsCompleted: [],
  error: null
}



