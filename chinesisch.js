//Variablen für chinesisches Sternzeichen
let cday;
let cmonth;
let cyear;
var csubmitButton = document.getElementById("csubmit");
const signs = ['monkey', 'rooster', 'dog', 'pig', 'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'sheep']

//Funktionen für chinesisches Sternzeichen
function getCMonth(){
    cmonth = Number(document.getElementById("cmonat").value);
    console.log(cmonth);
    document.getElementById("ctag").disabled = false;
        if(cmonth === 1 || cmonth === 3 || cmonth === 5 || cmonth === 7 || cmonth === 8 || cmonth === 10 || cmonth === 12){
            document.getElementById("thirty").disabled = false;
            document.getElementById("thirtyone").disabled = false;
        }else{
            if(cmonth === 4 || cmonth === 6 || cmonth === 9 || cmonth === 11){
                document.getElementById("thirty").disabled = false;
                document.getElementById("thirtyone").disabled = true;
            }else{
                document.getElementById("thirty").disabled = true;
                document.getElementById("thirtyone").disabled = true;
            }
        }
    
}

function getCDay(){
    cday = document.getElementById("ctag").value;
    console.log(cday);
}

function getCYear(){
    cyear = document.getElementById("cjahr").value;
    console.log(cyear);
    document.getElementById("csubmit").disabled = false;
}

const newYear = {
    1950: new Date(1950, 2, 17).getTime(),
    1951: new Date(1951, 2, 6).getTime(),
    1952: new Date(1952, 1, 27).getTime(),
    1953: new Date(1953, 2, 14).getTime(),
    1954: new Date(1954, 2, 3).getTime(),
    1955: new Date(1955, 1, 24).getTime(),
    1956: new Date(1956, 2, 12).getTime(),
    1957: new Date(1957, 1, 31).getTime(),
    1958: new Date(1958, 2, 18).getTime(),
    1959: new Date(1959, 2, 8).getTime(),
    1960: new Date(1960, 1, 28).getTime(),
    1961: new Date(1961, 2, 15).getTime(),
    1962: new Date(1962, 2, 5).getTime(),
    1963: new Date(1963, 1, 25).getTime(),
    1964: new Date(1964, 2, 13).getTime(),
    1965: new Date(1965, 2, 2).getTime(),
    1966: new Date(1966, 1, 21).getTime(),
    1967: new Date(1967, 2, 9).getTime(),
    1968: new Date(1968, 1, 30).getTime(),
    1969: new Date(1969, 2, 17).getTime(),
    1970: new Date(1970, 2, 6).getTime(),
    1971: new Date(1971, 1, 27).getTime(),
    1972: new Date(1972, 2, 15).getTime(),
    1973: new Date(1973, 2, 3).getTime(),
    1974: new Date(1974, 1, 23).getTime(),
    1975: new Date(1975, 2, 11).getTime(),
    1976: new Date(1976, 1, 31).getTime(),
    1977: new Date(1977, 2, 18).getTime(),
    1978: new Date(1978, 2, 7).getTime(),
    1979: new Date(1979, 1, 28).getTime(),
    1980: new Date(1980, 2, 16).getTime(),
    1981: new Date(1981, 2, 5).getTime(),
    1982: new Date(1982, 1, 25).getTime(),
    1983: new Date(1983, 2, 13).getTime(),
    1984: new Date(1984, 2, 2).getTime(),
    1985: new Date(1985, 2, 20).getTime(),
    1986: new Date(1986, 2, 9).getTime(),
    1987: new Date(1987, 1, 29).getTime(),
    1988: new Date(1988, 2, 17).getTime(),
    1989: new Date(1989, 2, 6).getTime(),
    1990: new Date(1990, 1, 27).getTime(),
    1991: new Date(1991, 2, 15).getTime(),
    1992: new Date(1992, 2, 4).getTime(),
    1993: new Date(1993, 1, 23).getTime(),
    1994: new Date(1994, 2, 10).getTime(),
    1995: new Date(1995, 1, 31).getTime(),
    1996: new Date(1996, 2, 19).getTime(),
    1997: new Date(1997, 2, 7).getTime(),
    1998: new Date(1998, 1, 28).getTime(),
    1999: new Date(1999, 2, 16).getTime(),
    2000: new Date(2000, 2, 5).getTime(),
    2001: new Date(2001, 1, 24).getTime(),
    2002: new Date(2002, 2, 12).getTime(),
    2003: new Date(2003, 2, 1).getTime(),
    2004: new Date(2004, 1, 22).getTime(),
    2005: new Date(2005, 2, 9).getTime(),
    2006: new Date(2006, 1, 29).getTime(),
    2007: new Date(2007, 2, 18).getTime(),
    2008: new Date(2008, 2, 7).getTime(),
    2009: new Date(2009, 1, 26).getTime(),
    2010: new Date(2010, 2, 14).getTime(),
    2011: new Date(2011, 2, 3).getTime(),
    2012: new Date(2012, 1, 23).getTime(),
    2013: new Date(2013, 2, 10).getTime(),
    2014: new Date(2014, 1, 31).getTime(),
    2015: new Date(2015, 2, 19).getTime(),
    2016: new Date(2016, 2, 8).getTime(),
    2017: new Date(2017, 1, 28).getTime(),
    2018: new Date(2018, 2, 16).getTime(),
    2019: new Date(2019, 2, 5).getTime(),
    2020: new Date(2020, 1, 25).getTime(),
    2021: new Date(2021, 2, 12).getTime(),
    2022: new Date(2022, 2, 1).getTime(),
    2023: new Date(2023, 1, 22).getTime(),
    2024: new Date(2024, 2, 10).getTime(),
    2025: new Date(2025, 1, 29).getTime(),
    2026: new Date(2026, 2, 17).getTime(),
    2027: new Date(2027, 2, 6).getTime(),
    2028: new Date(2028, 1, 26).getTime(),
    2029: new Date(2029, 2, 13).getTime(),
    2030: new Date(2030, 2, 3).getTime(),
    2031: new Date(2031, 1, 23).getTime(),
    2032: new Date(2032, 2, 11).getTime(),
    2033: new Date(2033, 1, 31).getTime(),
    2034: new Date(2034, 2, 19).getTime(),
    2035: new Date(2035, 2, 8).getTime(),
    2036: new Date(2036, 1, 28).getTime(),
    2037: new Date(2037, 2, 15).getTime(),
    2038: new Date(2038, 2, 4).getTime(),
    2039: new Date(2039, 1, 24).getTime(),
    2040: new Date(2040, 2, 12).getTime(),
    2041: new Date(2041, 2, 1).getTime(),
    2042: new Date(2042, 1, 22).getTime(),
    2043: new Date(2043, 2, 10).getTime(),
    2044: new Date(2044, 1, 30).getTime(),
    2045: new Date(2045, 2, 17).getTime(),
    2046: new Date(2046, 2, 6).getTime(),
    2047: new Date(2047, 1, 26).getTime(),
    2048: new Date(2048, 2, 14).getTime(),
    2049: new Date(2049, 2, 2).getTime(),
    2050: new Date(2050, 1, 23).getTime(),

}

function showStuff(id){
    console.log(id);
    //hide all of them
    document.getElementById("rat").style.display = 'none';
    document.getElementById("ox").style.display = 'none';
    document.getElementById("tiger").style.display = 'none';
    document.getElementById("rabbit").style.display = 'none';
    document.getElementById("dragon").style.display = 'none';
    document.getElementById("snake").style.display = 'none';
    document.getElementById("horse").style.display = 'none';
    document.getElementById("sheep").style.display = 'none';
    document.getElementById("monkey").style.display = 'none';
    document.getElementById("rooster").style.display = 'none';
    document.getElementById("dog").style.display = 'none';
    document.getElementById("pig").style.display = 'none';
    //display selected one
    document.getElementById(signs[id]).style.display = 'block';
};


csubmitButton.addEventListener('click', function() {
    let i = Math.round(12*((cyear/12)-(Math.floor(cyear/12))));
    if(newYear[cyear] > new Date(cyear, cmonth, cday).getTime()){
        if(i === 0){
            showStuff(11);
        }else{
        console.log(i);
        console.log(signs[i-1]);
        showStuff(i-1);
        }
    }else{
    console.log(i);
    console.log(signs[i]);
    showStuff(i);
    }
});