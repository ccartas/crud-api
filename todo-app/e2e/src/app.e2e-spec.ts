import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getParagraphText()).toEqual('Welcome to todo-app!');
=======
    expect(page.getTitleText()).toEqual('Welcome to todo-app!');
>>>>>>> 7a675035078d9a7286d53c6ffab12a1e40b6ecd7
  });
});
