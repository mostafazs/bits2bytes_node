exports.convert =function(amount,unit,format){

  process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err);
  console.log('Stack:', err.stack);
  process.exit(1);
  });

  var BITS_IN_A_BYTE = 8;
  var KILO = 1024;
  var output = Array(12);
  if(unit == null || unit == ""){
    //console.log("Add exception here");
    throw new Error("empty or null unit entered");
  }
  switch (unit) {
    case 'b':
      output[0] = amount;
      break;
    case 'B':
      output[0] = amount * BITS_IN_A_BYTE;
      break;
    case 'kb':
      output[0] = amount * KILO;
      break;
    case 'kB':
      output[0] = amount * BITS_IN_A_BYTE * KILO;
      break;
    case 'mb':
      output[0] = amount * KILO * KILO ;
      break;
    case 'mB':
      output[0] = amount * KILO * KILO * BITS_IN_A_BYTE;
      break;
    case 'gb':
      output[0] = amount * KILO * KILO * KILO;
      break;
    case 'gB':
      output[0] = amount *KILO * KILO * KILO * BITS_IN_A_BYTE;
      break;
    case 'tb':
      output[0] = amount * KILO * KILO * KILO * KILO;
      break;
    case 'tB':
      output[0] = amount *KILO * KILO * KILO * KILO * BITS_IN_A_BYTE;
      break;
    case 'pb':
      output[0] = amount * KILO * KILO * KILO * KILO * KILO;
      break;
    case 'pB':
      output[0] = amount *KILO * KILO * KILO * KILO * KILO * BITS_IN_A_BYTE;
      break;
    default:
      throw new Error("unit not correctly entered");
      break;
  }

  output[1] = output[0] / BITS_IN_A_BYTE;
  output[2] = output[0] / KILO,
  output[3] = output[2] / BITS_IN_A_BYTE,
  output[4] = output[2] / KILO,
  output[5] = output[4] / BITS_IN_A_BYTE,
  output[6] = output[4] / KILO,
  output[7] = output[6] / BITS_IN_A_BYTE,
  output[8] = output[6] / KILO,
  output[9] = output[8] / BITS_IN_A_BYTE,
  output[10] = output[8] / KILO,
  output[11] = output[10] / BITS_IN_A_BYTE;

  if(format == "json"){
    var json = JSON.stringify(output);
    return json;
  }else if(format == "array"){
    return output;
  }else{
    //default return array
    return output;
  }
}
