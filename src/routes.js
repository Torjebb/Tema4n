import Home from './views/Home.vue';
import Todo from './views/Todo.vue';
import Slideshow from './views/Slideshow.vue';
import Kontaktskjema from './views/Kontaktskjema.vue';
import Quiz from './views/Quiz.vue';
import NotFound from './views/NotFound.vue';


export default [
	{ name: 'Todo', 		path: '/todo', 			component: Todo },
	{ name: 'Slideshow', path: '/slideshow', component: Slideshow },
	{ name: 'Home', 		path: '/', 					component: Home },
	{ name: 'Kontaktskjema', 		path: '/kontaktskjema', 					component: Kontaktskjema },
	{ name: 'Quiz', 		path: '/quiz', 					component: Quiz },
	{ name: 'NotFound', 		path: '/:catchAll(.*)', 					component: NotFound },
]
