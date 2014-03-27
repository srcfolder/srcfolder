SRCFOLDER
=============

Introduction
------------

>[SRCFOLDER](http://scrfolder.com) a code transformation online tool, it parses source file and invoke transformation functions to generate target file into different format or syntax. User can modify the transformation functions to get the expected code.   

Quick Start
-----------

>Six steps to use SRCFOLDER generate code you want.

1. Choose Transformation Templates and apply to current package. 
2. Type into source file or import a file or zip file.
3. The target file will be generated, modify the javascript based transformation functions to change the generated target file. 
4. Save package to export the source files and transformation functions. The target files are not included as it can always be generated with the source files and transformation functions. 
5. Save transformation functions as template to reuse it.
6. Export target files to do bulk transformation.

User Guide
----------

* #### Package 
 
  Package is to pack a set of source files and tranformation functions. A package can only contain one set of tranformation functions so that all the files under the package should be in the same synrax and can only do the same transformation. normally the tranformation functions are applied from tranformation templates. When applying a template the transformation functions in the package will be overwriten. To do bulk tansformation with export package action, which can tranform all the files under the package. When creating a package, an untitled package and uan ntitled file will be created, When deleting package all the files under the package will be deleteed.

* #### File 
 
  File is a program file. User can manually input the code or import an existing source code file. To do bulk import, all the source files need to be compressed as a zip file first and then import it. User can edit the source file to preview target file, when no transformation fnctions exists in the package, the target file is a copy of source file. if any syntax error occurs. the source file will not be able to be parsed and the target file will be empty.

* #### Tranformation Functions 
 
  Tranformation Functions is a set of javascript functions to tranform the source code. SRCFOLDER will parse the source file into a tree structure, and it will be passed into the functions, the functions will return a new code string as target file. the functions can be modified and exported as template to be reused by other packages. 
The Tranformation Functions is in JSON format, it will be converted as javascript Object when doing tranformation. To invoke another function such as 'encodeXXX', it need to be written as 'this.encodeXXX'. Some functions and variables exist in all the templates provided by SRCFOLDER. To understand how Tranformation Functions work, you need have experience of javascript, while it is easy to understand the functions. To debug the Tranformation Functions in Goggle Chrome, you can add breakpoint with 'debugger;'.

  **encode**

  It is the entry point of the transformation functions. it will trigger a set of encode functions and the order of function invocation is based on the syntax and source file. the parameter of the function is the root of tree structure of the source file. You can add 'debugger;' at the begining of this function in Google Chrome to see how it works.
  
  **getKeyWord**

  It is a function to transform the keywords of the source file. All the keywords will go throught this function before exported to target file. The default getKeyWord function will invoke mapKeyWord, spaceleft and spaceRight functions.
  
  **mapKeyWord**
  
  This function shall maintain a mapping relationship of keywords between source file and target file if they are in different syntax. "ELSEIF", for example, is a key word of source file while in target file it need to be "ELSE IF", you can add a javascript statement in the mapKeyWord function: if(str==="ELSEIF") {return "ELSE IF"};

  **spaceLeft**
  
  The function is to check if the keyword need a whitespace on the left. if spaceLeft return true, the getKeyWord function will return a whitspace plus the keyword.
  
  **spaceRight**
  
  The function is to check if the keyword need a whitespace on the right. if spaceRight return true, the getKeyWord function will return the keyword plus a whitspace.
  
  **addLineBreak**
  
  This function is to add line break and make indents to the code of target file. 
  
  **tabCount**
  
  It is a variable to control how many tab will be added to make indents. the statement this.tabCount++ will add one tab, this.tabCount-- will remove one tab.

* #### Log  
 
  Log is to display system message.

Contribute to SRCFOLDER
---------------------------

* Share your transformation templates to us, we will put it in github.
* If you find any bugs or problems, report it via github.
* If you need us to support a new kind of syntax, please submit the grammar file or prpular language name via github.
 
