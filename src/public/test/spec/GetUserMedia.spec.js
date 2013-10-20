
define(

    [],

    function() {

        describe('GetUserMedia', function() {



            it('navigator should be defined', function() {
                expect(navigator).toBeDefined();
            });

            it('navigator.getUserMedia should be defined and a function', function() {
                expect(navigator.getUserMedia).toBeDefined()
                expect(typeof navigator.getUserMedia).toBe('function');
            });





        });
    });
