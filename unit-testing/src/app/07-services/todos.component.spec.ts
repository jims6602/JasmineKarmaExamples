import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';
import { from } from 'rxjs';


describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the serve', () => {
    spyOn(service, 'getTodos').and.callFake( () => {
      const source = from([ 1, 2, 3
        // {id: 1, title: 'walk the dog'},
        // {id: 2, title: 'go for swim' },
        // {id: 3, title: 'read a book' },
        ]) ;
      return source;
    });
    component.ngOnInit();
    console.log( component );
    console.log('length: ' + component.todos);
    expect(component.todos).toBeGreaterThan(0);
  });

  it('should call the server to save the changes when a new todo item is added', () => {
    const spy = spyOn(service, 'add').and.callFake(() => {
      const source = from([]);
      return source;
    });
    component.add();
    expect(spy).toHaveBeenCalled();
  });


});
