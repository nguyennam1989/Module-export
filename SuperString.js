/**
 * Created by nam on 27/06/2015.
 */
"use strict";
module .exports= {
    invert :function(str){
        var result =' ';
        for (var i=str.length-1;i>=0;i--){
            result+=str.charAt(i);
        };
        return result;
    },
    camecase:function(str){
        var result= "";
        var prevChar=undefined;
        for(var i=0;i<str.length;i++){
            var currentChar=str.charAt(i);
            if(i==0|| prevChar==" "){
                result+=currentChar.toUpperCase();

            }else{
                result+=currentChar;
            }
            prevChar=currentChar;
        }
        return result;
    },
    longestword: function(str){
        var string= str.split(" ");
        var longest=0;
        var word=null;
        for (var i=0 ;i<string.length;i++){
            if(longest < string[i].length){
                longest=string[i].length;
                word=string[i];
            }
        }
        return word;
    }

    };

