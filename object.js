let thaiDate = {
    currentdate : new Date(),
    thaimount :[ "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม", ],

    Year() {return this.currentdate.getFullYear()},
    mount(){return this.currentdate.getMonth()+1},
    day(){return this.currentdate.getDate()},


getshortDate(){
    return  `${this.day()}/${this.mount()}/${this.Year()+543}`
},
getlongDate(){
    return  `${this.day()} ${this.thaimount[this.mount()-1]} ${this.Year()+543}`
},
}
console.log('shotdate: ', thaiDate.getshortDate()); 
console.log('longdate: ', thaiDate.getlongDate());