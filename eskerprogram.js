//write a function that takes in a .txt file 
var openFile = function(event){
    var input = event.target;
    var reader = new FileReader();

    reader.onload = function(){
        var text = reader.result;

        //function to display text
        function getFileContents(text){
            var displayText = document.getElementById('displayText');
            displayText.innerText = text.substring(0);
        };
        getFileContents(text);

        //function to count strings
        function countString(text){
            var stringCount = document.getElementById('stringCount');
            stringCount.innerText = text.split(" ").length;
        };
        countString(text);

        //function to count lines
        function countLines(text){
            var lineCount = document.getElementById('lineCount');
            lineCount.innerText = text.split("\n").length;
        };
        countLines(text);

        //function to count characters
        function countChar(text){
            var charCount = document.getElementById('charCount');
            charCount.innerText = text.length;
        }
        countChar(text);
        
        //function to count ints
        function countInts(text){
            var intCount = document.getElementById('intCount');
            var numberRegex = /\d+/g;
            var numRegex = text.match(numberRegex);
            intCount.innerText = numRegex.length;
        } 
        countInts(text);

        //function to count special characters
        function countSpecialChars(text){
            var specChars = document.getElementById('specChars');
            var myRegex = /\W/g;
            var regex = text.match(myRegex);
            specChars.innerText = regex.length;
        }
        countSpecialChars(text);
   
    };
    reader.readAsText(input.files[0]);
};

//File name:
//var name = file.name;
function nameOfFile(fileInput){
    var files = fileInput.files;
    var testName = document.getElementById('fileName');
    for (var i=0; i< files.length; i++){
        file = files[i];
        testName.innerText = files[i].name;
        //console.log("Filename: " + testName); 
    }
    return testName;
};

