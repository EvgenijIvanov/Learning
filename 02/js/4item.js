/**
 * Created by Admin330 on 01.11.2016.
 */
'use strict';
var a= 17;
var b= 19;
var c= 6;
var d= 13;

console.log('input a=',a);
console.log('input b=',b);
console.log('input c=',c);
console.log('input d=',d);

console.log('Для ЧЕТЫРЕХ перменных - самую ' +
    'большую умножить на 1000, следующую по величине умножить на 100, ' +
    'потом - на 10, оставшуюся не трогать.');

if(a>c&&a>b&&a>d){
    a *= 1000;
    if (c>b&&c>d){c *=  100;
        if(d>b) { d *=  10;}
        if(d<b) { b *=  10;}
    }
    if (b>c&&b>d){b *=  100;
        if(d>c) { d *= 10;}
        if(d<c) { c *= 10;}
    }
    if (d>c&&d>b){d *=  100;
        if(b>c) { b *=  10;}
        if(d<c) { c *= 10;}
    }
}
if(b>c&&b>a&&b>d){
    b = b * 1000;
    if (c>a&&c>d){c *= 100;
        if(d>a) { d *=  10;}
        if(d<a) { a *=  10;}
    }
    if (a>c&&a>d){a *=  100;
        if(d>c) { d *=  10;}
        if(d<c) { c *=  10;}
    }
    if (d>c&&d>a){d *= 100;
        if(a>c) { a *= 10;}
        if(d<c) { c *= 10;}
    }
}
if(c>b&&c>a&&c>d){
    c = c * 1000;
    if (b>a&&b>d){b *= 100;
        if(d>a) { d *= 10;}
        if(d<a) { a *= 10;}
    }
    if (a>b&&a>d){a *= 100;
        if(d>b) { d *= 10;}
        if(d<b) { b *= 10;}
    }
    if (d>b&&d>a){d *= 100;
        if(a>b) { a *= 10;}
        if(d<b) { b *= 10;}
    }
}
if(d>b&&d>a&&d>c){
    d = d * 1000;
    if (b>a&&b>c){b *= 100;
        if(c>a) { c *= 10;}
        if(c<a) { a *= 10;}
    }
    if (a>b&&a>c){a *= 100;
        if(c>b) { c *= 10;}
        if(c<b) { b *= 10;}
    }
    if (c>b&&c>a){c *= 100;
        if(a>b) { a *= 10;}
        if(c<b) { b *= 10;}
    }
}
console.log('output a=',a);
console.log('output b=',b);
console.log('output c=',c);
console.log('output d=',d);
