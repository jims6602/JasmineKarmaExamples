![CuseyHub](https://github.com/cusey/ImageForWiki/blob/master/Logos/CuseyHub_Banner_Small.jpg)

# Jasmine Karma Examples

## Introduction      

### Jasmine Testing Suite   
Jasmine is an open source testing framework for JavaScript. It aims to run on any JavaScript-enabled platform, to not intrude on the application nor the IDE, and to have easy-to-read syntax. It is heavily influenced by other unit testing frameworks, such as ScrewUnit, JSSpec, JSpec, and RSpec.

### Karma Test Runner for Javascript    
The main goal for Karma is to bring a productive testing environment to developers. The environment being one where they don't have to set up loads of configurations, but rather a place where developers can just write the code and get instant feedback from their tests. Because getting quick feedback is what makes you productive and creative.

### Types of Tests      
* Unit Tests
Test a component _*in isolation,*_ without external resources (e.g. file system, database, API endpoints) So you are testing just the Angular component.

* Integration Tests
Test a component _*with*_ external resources (e.g. file system, database, API endpoints) So you are testing Angular component with the templete (HTML code) and sometimes Fake Service.

* End-to-End Tests
Test the entire application as a whole.

### Clean Coding Practices
* Small functions/methods (10 lines of code or less)
* Proper naming
* Single responsibility

## Install Karma
To generate the configuration file
```
$ karma init
Which testing framework do you want to use?
Press tab to list possible options. Enter to move to the next question.
>jasmine
Do you want ot use Require.js?
This will ass Require.js adapter into files.
Press tab to list possible options. Enter to move to the next question.
>no
Do you want to capture a browser automatically?
Press tab to list possible options. Enter empty string to move to the the question.
>Chrome
Which files do you want to test?
You can use glob patterns, eg, "js/* .js" or "test/**/*Spec.js".
Enter empty string to move to the the question.
>
Any files you want to eclude ?
You can glob patterns, eg "**/*.swp".
Enter empty string to move to the the question.
>
Press tab to list possible option
>yes

Config file generated at "Users/cusey/code/karma.conf.js"

```

## Start Karma         
```
$ karma start
```

## Start Testing in Angular 

```
$ ng test
```

## See Code Coverage
```
$ ng test --code-coverage
```
<img 
src="https://github.com/cusey/ImageForWiki/blob/master/JasmineKarmaExamples/code-coverage.PNG" 
alt="Code Coverage" 
height="350px"/>  


## Authors
* John Cusey - CuseyHub  

## License   
This project is licensed under the MIT License
