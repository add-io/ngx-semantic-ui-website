import { NgxSemanticUiWebsitePage } from './app.po';

describe('ngx-semantic-ui-website App', () => {
  let page: NgxSemanticUiWebsitePage;

  beforeEach(() => {
    page = new NgxSemanticUiWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
