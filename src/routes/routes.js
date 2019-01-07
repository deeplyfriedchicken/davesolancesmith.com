import Home from "../pages/Home"
import Person from '../pages/Person'
import Project from '../pages/Project'
import People from '../pages/People'
import Projects from '../pages/Projects'
import Publications from '../pages/Publications'


export default [
    { name: "home", path: "/", component: Home },
    { name: "person", path: "/people/:person", component: Person },
    { name: "research", path: "/research-projects/:project", component: Project },
    { name: "projects", path: "/research-projects", component: Projects },
    { name: "publications", path: "/publications", component: Publications },
    { name: "people", path: "/people", component: People }
];
