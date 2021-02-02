class Numbers {
    getEven(str) {
        if(typeof str !== 'string'){
            throw new TypeError('Illegal type!');
        }
        let array = str.split(",");
        let even = [];
        for(let i=0; i<array.length; i++){
            if(array[i]%2==0){
                even.push(array[i]);
            }
        }
        console.log(`Here are the even numbers: ${even.join()}`);
        return even;
    }
}
module.exports = Numbers;