module.exports = function main(command) {
    var leng,time;
    leng = command.kilos;
    time = command.time;
    result = '收费：';
    var money=6;
    if(leng<=2){
        money +=time*0.25;
    }
    else if(leng>2&&leng<=8){
        money +=time*0.25+0.8*(leng-2);
    }
    else if(leng>8){
        money +=1.2*(leng-8)+4.8+time*0.25;
    }
    result += Math.round(money) + '（元）';
    return result;
};