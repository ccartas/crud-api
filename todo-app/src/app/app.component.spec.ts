import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
<<<<<<< HEAD
=======

>>>>>>> 7a675035078d9a7286d53c6ffab12a1e40b6ecd7
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
<<<<<<< HEAD
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'todo-app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('todo-app');
  }));
  it('should render title in a h1 tag', async(() => {
=======

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'todo-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('todo-app');
  });

  it('should render title in a h1 tag', () => {
>>>>>>> 7a675035078d9a7286d53c6ffab12a1e40b6ecd7
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to todo-app!');
<<<<<<< HEAD
  }));
=======
  });
>>>>>>> 7a675035078d9a7286d53c6ffab12a1e40b6ecd7
});
