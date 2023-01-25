const string1 = 'Hello my name is akash and I am a front end developer'
const string2 = 'Hello Abhishek Digital marketter '

const String1Array = string1.split(' ')
const String2Array = string2.split(' ')
 for(i=0; i<String1Array.length; i++){
    for(j=0; j<String2Array.length; j++){
        if(String1Array[i] === String2Array[j]){
            console.log(String1Array[i])
            break;
        }
    }
 }