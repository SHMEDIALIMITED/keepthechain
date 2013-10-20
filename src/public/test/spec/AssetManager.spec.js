
define(

    ['AssetManager'],

    function(AssetManager) {

        describe('AssetManager', function() {



            it('should be defined when required', function() {
                expect(AssetManager).toBeDefined();
            });



            it('should call bundleLoaded callback instantly if bundle is empty', function() {

                var assets = new AssetManager();

                var loaded = jasmine.createSpy('loaded');
                var flag = false;

                runs(function() {

                    assets.on('bundleLoaded', loaded);
                    assets.loadBundle({});

                    setTimeout(function() {
                        flag = true;
                    }, 1);
                });


                waitsFor(function() {
                    return flag;
                }, "The bundle should have been loaded within 750ms", 1);

                runs(function() {
                    expect(loaded).toHaveBeenCalled();
                });

            });


            it('should load a bundle', function() {

                var assets = new AssetManager( {
                    root : 'spec/',
                    connections: 1
                });

                var loaded = jasmine.createSpy('loaded');
                var flag = false;

                runs(function() {

                    assets.on('bundleLoaded', loaded);
                    assets.loadBundle({ id: 'test-assets', assets: { test: 'test.jpg'} });

                    setTimeout(function() {
                        flag = true;
                    }, 1001);
                });


                waitsFor(function() {
                    return flag;
                }, "The bundle should have been loaded within 750ms", 1000);

                runs(function() {
                    expect(loaded).toHaveBeenCalled();
                });

            });

        });
});
