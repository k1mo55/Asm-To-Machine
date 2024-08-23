
function hexToDecimal(hexString) {  
    if (!/^[0-9A-Fa-f]{2}$/.test(hexString)) {
        throw new Error("Invalid hexadecimal string. Please provide a 44-digit hexadecimal number.");
    }
    let decimalValue = BigInt(`0x${hexString}`);
    return decimalValue.toString();
}
function binaryTo1digitHex(binary) {
    // Ensure the binary input is a string and has 4 digits
    if (typeof binary !== 'string' || binary.length !== 4) {
      console.error('Invalid input. Please provide a 4-digit binary number.');
      return null;
    }
  
    // Convert binary to decimal
    const decimalValue = parseInt(binary, 2);
  
    // Convert decimal to hexadecimal
    const hexValue = decimalValue.toString(16).toUpperCase();
  
    return hexValue;
  }
  function subtractHex(hex1, hex2) {
    // Ensure the inputs are strings and have exactly 4 characters
    if (typeof hex1 !== 'string' || typeof hex2 !== 'string' || hex1.length !== 4 || hex2.length !== 4) {
      console.error('Invalid input. Please provide two 4-digit hexadecimal numbers.');
      return null;
    }
  
    // Convert hexadecimal to decimal
    const decimal1 = parseInt(hex1, 16);
    const decimal2 = parseInt(hex2, 16);
  
    // Subtract the decimals
    const resultDecimal = decimal1 - decimal2;
  
    // Ensure the result is non-negative
    const nonNegativeResult = Math.max(resultDecimal, 0);
  
    // Convert the result back to 6-digit hexadecimal
    const hexResult = nonNegativeResult.toString(16).toUpperCase().padStart(6, '0');
  
    return hexResult;
  }
function decimalTo2Hex(decimal) {
    // Ensure the input is a non-negative integer
    if (Number.isInteger(decimal) && decimal >= 0) {
        // Convert the decimal to a hexadecimal string
        let hexString = decimal.toString(16);

        // Pad with leading zero if needed to ensure 2 digits
        while (hexString.length < 2) {
            hexString = "0" + hexString;
        }

        return hexString.toUpperCase(); // Convert to uppercase for consistency
    } else {
        console.error("Input must be a non-negative integer.");
        return null;
    }
}

function decimalTo4DigitHex(decimalString) {
    const decimalNumber = parseInt(decimalString, 10);
    if (isNaN(decimalNumber)) {
        throw new Error("Invalid input: Not a valid decimal string");
    }
    let hexValue = decimalNumber.toString(16);
    while (hexValue.length < 4) {
        hexValue = '0' + hexValue;
    }
    return hexValue.toString().toUpperCase();
}
function hexToBinary(hex) {
    if (!/^[0-9A-Fa-f]+$/.test(hex)) {
        console.log("Invalid hexadecimal input");
        return null;
    }
    let binary = parseInt(hex, 16).toString(2);
    while (binary.length % 8 !== 0) {
        binary = '0' + binary;
    }
    return binary
}
function binaryTo4DigitHex(binary) {
    const decimalValue = parseInt(binary, 2);
    let hexValue = decimalValue.toString(16).toUpperCase();

    while (hexValue.length < 4) {
        hexValue = '0' + hexValue;
    }

    return hexValue;
}
function decimalTo6DigitHex(decimalString) {
    const decimalNumber = parseInt(decimalString, 10);
    if (isNaN(decimalNumber)) {
        throw new Error("Invalid input: Not a valid decimal string");
    }
    let hexValue = decimalNumber.toString(16);
    
    // Ensure the hexadecimal value has exactly 6 digits
    while (hexValue.length < 6) {
        hexValue = '0' + hexValue;
    }

    return hexValue.toUpperCase();
}

function addHexNumbers(hexNum1, hexNum2) {
    var decimalNum1 = parseInt(hexNum1, 16);
    var decimalNum2 = parseInt(hexNum2, 16);
    var resultDecimal = decimalNum1 + decimalNum2;
    var resultHex = resultDecimal.toString(16).toUpperCase();
    while (resultHex.length < 4) {
        resultHex = "0" + resultHex;
    }
    return resultHex;
}

let format = 3;
function get_opcode(instruction){
    let inst = instruction.toUpperCase();
    // console.log("here")
    if (inst === "ADD"){
        return "18";
    } else if (inst === "AND"){
        return "40";
    } else if (inst === "COMP"){
        return "28";
    } else if (inst === "DIV"){
        return "24";
    } else if (inst === "J"){
        return "3C";
    } else if (inst === "JEQ"){
        return "30";
    } else if (inst === "JGT"){
        return "34";
    } else if (inst === "JLT"){
        return "38";
    } else if (inst === "JSUB"){
        return "48";
    } else if (inst === "LDA"){
        return "00";
    } else if (inst === "LDCH"){
        return "50";
    } else if (inst === "LDL"){
        return "08";
    } else if (inst === "LDX"){
        return "04";
    } else if (inst === "MUL"){
        return "20";
    } else if (inst === "OR"){
        return "44";
    } else if (inst === "RD"){
        return "D8";
    } else if (inst === "RSUB"){
        return "4C";
    } else if (inst === "STA"){
        return "0C";
    } else if (inst === "STCH"){
        return "54";
    } else if (inst === "STL"){
        return "14";
    } else if (inst === "STSW"){
        return "E8";
    } else if (inst === "STX"){
        return "10";
    } else if (inst === "SUB"){
        return "1C";
    } else if (inst === "TD"){
        return "E0";
    } else if (inst === "TIX"){
        return "2C";
    } else if (inst === "WD"){
        return "DC";
    } else if (inst === "FIX"){
        format = 1;
        return "C4";
    } else if (inst === "FLOAT"){
        format = 1;
        return "C0";
    } else if (inst === "HIO"){
        format = 1;
        return "F4";
    } else if (inst === "NORM"){
        format = 1;
        return "C8";
    } else if (inst === "SIO"){
        format = 1;
        return "F0";
    } else if (inst === "TIO"){
        format = 1;
        return "F8";
    }
}


function get_asciiCode(char){
    let letter = char.toUpperCase();
    if(letter == 'A'){
        return "41";
    }else if (letter == 'B'){
        return "42";
    }else if (letter == 'C'){
        return "43";
    }else if (letter == 'D'){
        return "44";
    }else if (letter == 'E'){
        return "45";
    }else if (letter == 'F'){
        return "46";
    }else if (letter =='G'){
        return "47";
    }else if (letter == 'H'){
        return "48";
    }else if (letter == 'I'){
        return "49";
    }else if (letter == 'J'){
        return "4A";
    }else if (letter == 'K'){
        return "4B";
    }else if (letter == 'L'){
        return "4C";
    }else if (letter == 'M'){
        return "4D";
    }else if (letter == 'N'){
        return "4E";
    }else if (letter == 'O'){
        return "4F";
    }else if (letter == 'P'){
        return "50";
    }else if (letter == 'Q'){
        return "51";
    }else if (letter == 'R'){
        return "52";
    }else if (letter == 'S'){
        return "53";
    }else if (letter == 'T'){
        return "54";
    }else if (letter == 'U'){
        return "55";
    }else if (letter == 'V'){
        return "56";
    }else if (letter == 'W'){
        return "57";
    }else if (letter =='X'){
        return "58";
    }else if (letter == 'y'){
        return "59";
    }else if (letter == 'Z'){
        return "5A";
    }else if (letter == ' '){
        return "20";
    }

}

const fs = require('fs');

let labels = [];
let instructions = [];
let referenceLabels = [];
function readSicProgram(filePath) {
    let data = fs.readFileSync(filePath, 'utf-8');
    let lines = data.split('\n');
    //awel split

    for (const line of lines) {
    
        let columns = line.trim().split(' ');
        //tany split
        if (columns.length === 3) { //var declaration
            let [label, instruction, refLabel] = columns;
            labels.push(label);
            instructions.push(instruction);
            referenceLabels.push(refLabel);
            // console.log(`${label} ${instruction} ${refLabel}`)

        } else{
            // e3mely handle ba2a lama yeb2o etneen wezwady el hash maps wel sho8l dah
            labels.push("%");
            const[instruction, refLabel] = columns;
            instructions.push(instruction);
            if(refLabel==undefined){
                referenceLabels.push("%");
            }else
            referenceLabels.push(refLabel);
            // console.log(`${instruction} ${refLabel}`)
        }
    }

}
readSicProgram("assembly.txt");
//append to file
function appendStringToFile(filename, content) {
    try {
        fs.appendFileSync(filename, content + '\n');
        console.log(`Content has been appended to ${filename} synchronously.`);
    } catch (err) {
        console.error(`Error appending to ${filename}:`, err.message);
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
let symboltable = {};
let object_code_array=[];
let mask_bits = [];
let relocation_hash={};
let t_rec = "";
let size = 0;
let total_opcodes ="";
let flag=0;
let mask_bit_string="";
let end_record_flag=0;
let end_record_location="";
let extra_opcode="";


function forward_refrence(location,label,mask_bit, instruction, ref, opcode, format){
        t_rec = "";
        let i=0;
        while(i<relocation_hash[label].length){
            console.log("relocation hash function "+relocation_hash[label].length);
            t_rec="00"+relocation_hash[label][i]+" 02"+" 000 "+symboltable[label]
            i++;
            console.log("FINAL T RECORD "+t_rec);
            appendStringToFile("HTErecord.txt","T "+t_rec);
        }
        
}
function handle_cut(location,label,mask_bit, instruction, ref, opcode, format){
    if(t_rec!=""){
        t_len = decimalTo4DigitHex(total_opcodes.length/2).slice(2);
        console.log("this is the lenght inside the cut"+ t_len);
        t_rec = t_rec.slice(0, 7) + t_len +t_rec.slice(9);
        /////// MASKING
        let hex1="";
        let hex2="";
        let hex3="";
        if(mask_bit_string.length<12){
            let len=mask_bit_string.length;
            console.log("isnideeeeeeeeeeeeeeee1"+len)
            for(let i=0;i<12-len;i++){
                mask_bit_string=mask_bit_string+"0";
            }

        }
        console.log(mask_bit_string);
        hex1=hex1+binaryTo1digitHex(mask_bit_string[0]+mask_bit_string[1]+mask_bit_string[2]+mask_bit_string[3]);
        hex2=hex2+binaryTo1digitHex(mask_bit_string[4]+mask_bit_string[5]+mask_bit_string[6]+mask_bit_string[7]);
        hex3=hex3+binaryTo1digitHex(mask_bit_string[8]+mask_bit_string[9]+mask_bit_string[10]+mask_bit_string[11]);  
        /////////////
        t_rec = t_rec.slice(0, 10) +hex1+hex2+hex3+t_rec.slice(13);
        hex1="";
        hex2="";
        hex3="";
        mask_bit_string=""; 
        console.log( "FINAL T RECORD inside cut 1"+t_rec);
        appendStringToFile("HTErecord.txt","T "+t_rec);
        // append t_rec to file
        t_rec = "";
        t_len = 0;
        size = 0;
        total_opcodes="";
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(labels);
console.log(instructions);
console.log(referenceLabels);
 function Trecord(location,label,mask_bit, instruction, ref, opcode, format){
    console.log("this is the begging of each t re="+ t_rec)
     if ((instruction == "RESW" || instruction =="RESB")){
        if(flag==0){
            t_len = decimalTo4DigitHex(total_opcodes.length/2).slice(2);
            console.log("teh size is "+t_len);            
            t_rec = t_rec.slice(0, 7) + t_len + t_rec.slice(9);
             //append to file here
            console.log("FINAL T RECROD "+ t_rec);
            appendStringToFile("HTErecord.txt","T "+t_rec);
            t_rec = "";
            size = 0;
            total_opcodes="";
            cut=0;
            flag=1;
            mask_bit_string="";
        } else{
            return;
        }
        return;
    }
    if (t_rec == ""){
        //starting location
        location = "00"+ location;
        t_rec = location + " "+ t_rec;
        //dummy size
        t_rec = t_rec + "%%";
        if(instruction == "BYTE" || instruction == "WORD"){
            t_rec = t_rec+" 000 ";
            mask_bit_string="";
        }else{
            //dummy mask
            t_rec = t_rec + " @@@";
        }
    }
        if(size<10 && instruction!="END"){
            if(instruction == "BYTE" || instruction == "WORD" ||  format == 3 && (  instruction!="RESW" || instruction!= "RESB")) {
                console.log("first" ,instruction)
                 if(label in relocation_hash){
                    if(total_opcodes!=""){
                        handle_cut(location,label,mask_bit, instruction, ref, opcode, format)
                    }      
                    forward_refrence(location,label,mask_bit, instruction, ref, opcode, format);
                    ////
                    t_rec="";
                    mask_bit_string="";
                    size=0;
                    //
                    if(location.length<6){
                        location = "00"+ location;
                    }
                    t_rec = location + " "+ t_rec;
                    //dummy size
                    t_rec = t_rec + "%%";
                        //dummy mask
                        t_rec = t_rec + " @@@";
                    
                    //
                    extra_opcode=extra_opcode+opcode;
                    console.log("inside the forward refreence handle "+ t_rec+" "+ extra_opcode);
                    mask_bit_string=mask_bit_string+mask_bit;
                    /////
                   
                }
                 
                else{
                    if(instruction!="BYTE" && instruction!="WORD" && instruction!="RESW" && instruction!= "RESB" && instruction!="END" && end_record_flag==0){
                        end_record_location=location;
                        end_record_flag=1;
                    }
                    if(instruction!="RESW" && instruction!="RESB"){
                        if(extra_opcode!=""){
                            opcode= extra_opcode+" "+opcode;
                            extra_opcode="";
                            console.log("this is the extra opcode HAHAHAHAHAHA"+total_opcodes)
                        }
                        total_opcodes=total_opcodes+opcode;               
                        t_rec = t_rec + " " + opcode;
                        mask_bit_string=mask_bit_string+mask_bit;
                        console.log("??????????? this is isntruction  "+ instruction + mask_bit +location);
                        console.log("!!!!!!!!!!!!!!!!!"+ mask_bit_string);
                    }   
                }   
        }
        else if(format==1){
            t_rec = t_rec + " " + opcode;
            total_opcodes=total_opcodes+opcode;
            mask_bit_string=mask_bit_string+mask_bit;
            console.log("NOOOOOOOOOOOOOOOO")
            handle_cut(location,label,mask_bit, instruction, ref, opcode, format)
        }
        size++;
    }else{
        handle_cut(location,label,mask_bit, instruction, ref, opcode, format);
    }
 }


let location_array=[];
location_array.push(referenceLabels[0]);
console.log(`loc arr: ${location_array[0]}`)

let instruction_arr = instructions.slice(1); // without start
let label_arr = labels.slice(1) //without copy
let references = referenceLabels.slice(1); //without 1000

references.pop()
label_arr.pop()
let end = instruction_arr.pop();
console.log(`end is: ${end}`)
console.log(instruction_arr)
console.log(label_arr);
console.log(references);
function OnePass(){
    for(let i = 0; i < instruction_arr.length; i++){
        if(instruction_arr[i]=="BYTE"){
            //location counter
            if(references[i][0]=="C"){ 
                let string=references[i];
                let count = decimalTo4DigitHex(string.length-3);
                let new_location=addHexNumbers(count,location_array[i]);
                location_array.push(new_location);
                // console.log(`new loc ${new_location}`)
            }
            if(label_arr[i]!="%"){
                //symbol table
                symboltable[label_arr[i]] = location_array[i];
                appendStringToFile("symboltable.txt", location_array[i]+" "+label_arr[i])
                console.log(`loc of i: ${location_array[i]}`)
                console.log(`label : ${label_arr[i]}`)
            }
            //object code
            let string=references[i];
            let object_code="";
            for(let j=2;j<string.length-1;j++){
                let asci=get_asciiCode(string[j]);
                object_code=object_code+asci;
            }
            console.log(`object_code ${object_code}`);// hena hanappend fel file
            object_code_array.push(object_code);
            mask_bits.push(0);
        }
        
        else if(instruction_arr[i]=="WORD"){
            //location counter
            let new_location = addHexNumbers("0003",location_array[i]);
            location_array.push(new_location);
            //object code
            if(label_arr[i]!="%"){
                symboltable[label_arr[i]] = location_array[i];
                appendStringToFile("symboltable.txt", location_array[i]+" "+label_arr[i])
            }
            let object_code=decimalTo6DigitHex(references[i]);
            // console.log(object_code);
            object_code_array.push(object_code);
            mask_bits.push(0);
        }

        else if(instruction_arr[i]=="RESW"){
            //location counter
            let number_words=parseInt(references[i]);
            let number_bytes=number_words*3;
            let count=decimalTo4DigitHex(number_bytes);
            let new_location=addHexNumbers(count,location_array[i]);
            location_array.push(new_location);
            //symbol table
            symboltable[label_arr[i]] = location_array[i];
            appendStringToFile("symboltable.txt", location_array[i]+" "+label_arr[i])
            //object code
            object_code_array.push("%");
            mask_bits.push("%");

        }

        else if(instruction_arr[i]=="RESB"){
            //location counter
            console.log(`in resb ${label_arr[i]}`)
            let count=decimalTo4DigitHex(references[i]);
            console.log(`count: ${count} ${location_array[i]}`)
            let new_location=addHexNumbers(count,location_array[i]);
            location_array.push(new_location);
            console.log(new_location)
            //symbol table
            symboltable[label_arr[i]] = location_array[i];
            appendStringToFile("symboltable.txt", location_array[i]+" "+label_arr[i])
            //object code
            object_code_array.push("%");
            mask_bits.push("%");
        }

        else if(get_opcode(instruction_arr[i]) && format==3){
            console.log("the instruction is "+instruction_arr[i])
            //location counter
            let new_location=addHexNumbers("0003",location_array[i]);
            location_array.push(new_location);
            //symbol table
            if (label_arr[i] != "%"){
                symboltable[label_arr[i]] = location_array[i];
                appendStringToFile("symboltable.txt", location_array[i]+" "+label_arr[i])
            }
            if(references[i]!="%"){
                //immediate
                if(references[i][0]=="#"){
                    let opcode=get_opcode(instruction_arr[i]);
                    let object_code=opcode+decimalTo4DigitHex(references[i].slice(1))
                    console.log("the immediate "+object_code);
                    object_code_array.push(object_code);
                    mask_bits.push(0);
                }
                
                else if(references[i][references[i].length-1]=="X" && references[i][references[i].length-2]==","){//INDEXED
                    let new_refrence = references[i].replace(',X','');
                    if(new_refrence in symboltable){
                        let opcode=get_opcode(instruction_arr[i]);
                        let hex = symboltable[new_refrence];
                        let binary=hexToBinary(hex);
                        binary =binary.slice(1);
                        binary ="1"+binary;
                        hex= binaryTo4DigitHex(binary);
                        let object_code=opcode+hex;
                        object_code_array.push(object_code);
                        mask_bits.push(1);
                    }
                    console.log("this is index "+ i);
                }
                else{
                    if(references[i] in symboltable){
                        let opcode=get_opcode(instruction_arr[i]);
                        let object_code=opcode+symboltable[references[i]];
                        object_code_array.push(object_code);
                        mask_bits.push(1);
                        
                    }else{
                        if(references[i] in relocation_hash){
                            console.log("this is new hash"+references[i])
                            relocation_hash[references[i]].push(addHexNumbers(location_array[i],"0001"));
                            let opcode=get_opcode(instruction_arr[i]);
                            let object_code=opcode+"0000";
                            object_code_array.push(object_code);
                            mask_bits.push(1);
                        }else{
                            relocation_hash[references[i]]=[addHexNumbers(location_array[i],"0001")];
                            let opcode=get_opcode(instruction_arr[i]);
                            let object_code=opcode+"0000";
                            object_code_array.push(object_code);
                            mask_bits.push(1); 
                        }                   
                    }
                }
            }
            else{
                let opcode=get_opcode(instruction_arr[i]);
                object_code_array.push(opcode+"0000");
                mask_bits.push(0);
            }
        }
        else if(get_opcode(instruction_arr[i]) && format==1){
            console.log(`inst is::: ${instruction_arr[i]}`)
            //location counter
            let new_location=addHexNumbers("0001",location_array[i]);
            location_array.push(new_location);
            console.log(`new loc count: ${new_location}`)
            //object code
            let opcode=get_opcode(instruction_arr[i]);
            object_code_array.push(opcode);
            mask_bits.push(0);    
        }
        Trecord(location_array[i],label_arr[i], mask_bits[i], instruction_arr[i], references[i], object_code_array[i], format);
        format=3
    }
    Trecord(0,0,0,end,0,0,4);
}
// handle_objectcode();

OnePass();
appendStringToFile("HTErecord.txt","END"+" "+end_record_location);
function insertLineAtBeginning(filename, newLine) {
    try {
        // Read the existing contents of the file
        const existingContent = fs.readFileSync(filename, 'utf-8');

        // Combine the new line and existing content
        const updatedContent = newLine + '\n' + existingContent;

        // Write the updated content back to the file
        fs.writeFileSync(filename, updatedContent);

        console.log(`Line inserted at the beginning of ${filename}`);
    } catch (err) {
        console.error(`Error inserting line at the beginning of ${filename}: ${err.message}`);
    }
}
let program_length= subtractHex(location_array[location_array.length-1],location_array[0]);
insertLineAtBeginning("HTErecord.txt","H "+labels[0]+" 00"+location_array[0]+" "+program_length);
console.log(program_length);
console.log(relocation_hash["RDREC"]);
console.log(location_array);