import { Ng2CesiumjsPage } from './app.po';

describe('ng2-cesiumjs App', function() {
  let page: Ng2CesiumjsPage;

  beforeEach(() => {
    page = new Ng2CesiumjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
