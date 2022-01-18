module.exports = function toReadable (num) {
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
    let teens = ['thir', 'four', 'fif', 'six', 'seven', 'eigh', 'nine'];
    let x;
    let res;
    let res2;
    function count(number) {
    
    if (number >= 0 && number < 13) {
      res = ones[number];
    }
    
    if (number >= 13 && number < 20) {
      res = `${teens[number - 13]}teen`;
    }

    if (number === 20) {
        res = `twenty`;
      }
    
    if (number > 20 && number < 30) {
      res = `twenty ${ones[number - 20]}`;
    }

    if (number === 30) {
        res = `thirty`;
      }
    
    if (number > 30 && number < 40) {
      res = `thirty ${ones[number - 30]}`;
    }
    if (number === 40) {
        res = `forty`;
      }
    
    if (number > 40 && number < 50) {
      res = `forty ${ones[number - 40]}`;
    }
    if (number === 50) {
        res = `fifty`;
      }
    if (number > 50 && number < 60) {
      res = `fifty ${ones[number - 50]}`;
    }
    if (number === 60) {
        res = `sixty`;
      }
    if (number > 60 && number < 70) {
      res = `sixty ${ones[number - 60]}`;
    }
    if (number === 70) {
        res = `seventy`;
      }
     if (number > 70 && number < 80) {
      res = `seventy ${ones[number - 70]}`;
    }
    if (number === 80) {
        res = `eighty`;
      }
    
     if (number > 80 && number < 90) {
      res = `eighty ${ones[number - 80]}`;
    }
    if (number === 90) {
        res = `ninety`;
      }
    
     if (number > 90 && number < 100) {
      res = `ninety ${ones[number - 90]}`;
    }
      return res; 
   
    }
    
    function hund(n) {    
      
      if (n > 100 && n < 200) {
      res2 = `${ones[1]} hundred`;
      }
      if (n > 200 && n < 300) {
      res2 = `${ones[2]} hundred`;
      }
      if (n > 300 && n < 400) {
      res2 = `${ones[3]} hundred`;
      }
      if (n > 400 && n < 500) {
      res2 = `${ones[4]} hundred`;
      }
      if (n > 500 && n < 600) {
      res2 = `${ones[5]} hundred`;
      }
      if (n > 600 && n < 700) {
      res2 = `${ones[6]} hundred`;
      }
      if (n > 700 && n < 800) {
      res2 = `${ones[7]} hundred`;
      }
      if (n > 800 && n < 900) {
      res2 = `${ones[8]} hundred`;
      }
      if (n > 900 && n < 1000) {
      res2 = `${ones[9]} hundred`;
      }
      return res2;    
    }
    
    if (num >= 0 && num < 100) {
      
       return count(num);
    }
    
     if (num >= 100 && num < 1000) {
      x = Number(num.toString().split('').splice(1).join(''));
      if (num === 100) {
        return 'one hundred';
      } if (num === 200) {
        return 'two hundred';    
      } if (num === 300) {
        return 'three hundred';
      } if (num === 400) {
        return 'four hundred';
      } if (num === 500) {
        return 'five hundred';
      } if (num === 600) {
        return 'six hundred';
      } if (num === 700) {
        return 'seven hundred';
      } if (num === 800) {
        return 'eight hundred';
      } if (num === 900) {
        return 'nine hundred';
      } 
       
      else {
      return `${hund(num)} ${count(x)}`;
    }
}
}