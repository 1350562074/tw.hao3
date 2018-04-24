const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it('should caculate the right money',function(){
        let inputs = {kilos:1.8,time:2};
        let summary = main(inputs).trim();
        let expected = '收费：7（元）'.trim()
        expect(summary).toEqual(expected);
    });
    it('should caculate the right money',function(){
 
        let inputs = {kilos:3.6,time:3.1};
        let summary = main(inputs).trim();
        let expected = '收费：8（元）'.trim()
        expect(summary).toEqual(expected);
    });
    it('should caculate the right money',function(){
 
        let inputs =  {kilos:9,time:0};
        let summary = main(inputs).trim();
        let expected = '收费：12（元）'.trim()
        expect(summary).toEqual(expected);
    });
});
