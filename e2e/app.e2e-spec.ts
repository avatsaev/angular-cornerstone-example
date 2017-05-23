import { AngularCornerstoneExamplePage } from './app.po';

describe('angular-cornerstone-example App', () => {
  let page: AngularCornerstoneExamplePage;

  beforeEach(() => {
    page = new AngularCornerstoneExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
