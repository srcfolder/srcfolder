{
	Name:"PLSQL Transformation",
	Syntax:"PLSQL",
	Rules:[,
		{
		name:"spaceLeft",
		body:function(str){
			return "ALL"===str ||
			"AND"===str ||
			"ANY"===str ||
			"AS"===str ||
			"ASC"===str ||
			"BEGIN"===str ||
			"BETWEEN"===str ||
			"BINARY_INTEGER"===str ||
			"BOOLEAN"===str ||
			"BY"===str ||
			"CHAR"===str ||
			"CLOSE"===str ||
			"COMMENT"===str ||
			"COMMIT"===str ||
			"CONNECT"===str ||
			"CONSTANT"===str ||
			"CURRENT"===str ||
			"CURSOR"===str ||
			"DATE"===str ||
			"DECIMAL"===str ||
			"DECLARE"===str ||
			"DEFAULT"===str ||
			"DELETE"===str ||
			"DESC"===str ||
			"DISTINCT"===str ||
			"DO"===str ||
			"ELSE"===str ||
			"ELSIF"===str ||
			"END"===str ||
			"EXCEPTION"===str ||
			"EXCEPTION_INIT"===str ||
			"EXCLUSIVE"===str ||
			"EXISTS"===str ||
			"EXIT"===str ||
			"FETCH"===str ||
			"FLOAT"===str ||
			"FOR"===str ||
			"FROM"===str ||
			"FUNCTION"===str ||
			"GOTO"===str ||
			"GROUP"===str ||
			"HAVING"===str ||
			"IF"===str ||
			"IN"===str ||
			"INDEX"===str ||
			"INSERT"===str ||
			"INTEGER"===str ||
			"INTERSECT"===str ||
			"INTO"===str ||
			"IS"===str ||
			"LEVEL"===str ||
			"LIKE"===str ||
			"LOCK"===str ||
			"LOOP"===str ||
			"MINUS"===str ||
			"MODE"===str ||
			"NATURAL"===str ||
			"NOT"===str ||
			"NOWAIT"===str ||
			"NULL"===str ||
			"NUMBER"===str ||
			"OF"===str ||
			"ONLY"===str ||
			"OPEN"===str ||
			"OR"===str ||
			"ORDER"===str ||
			"OTHERS"===str ||
			"OUT"===str ||
			"PACKAGE"===str ||
			"POSITIVE"===str ||
			"PRAGMA"===str ||
			"PRIOR"===str ||
			"PROCEDURE"===str ||
			"RAISE"===str ||
			"READ"===str ||
			"REAL"===str ||
			"RECORD"===str ||
			"REF"===str ||
			"RETURN"===str ||
			"REVERSE"===str ||
			"ROLLBACK"===str ||
			"ROW"===str ||
			"SAVEPOINT"===str ||
			"SEGMENT"===str ||
			"SELECT"===str ||
			"SET"===str ||
			"SHARE"===str ||
			"SMALLINT"===str ||
			"SQL"===str ||
			"START"===str ||
			"TABLE"===str ||
			"THEN"===str ||
			"TO"===str ||
			"TRANSACTION"===str ||
			"UNION"===str ||
			"UPDATE"===str ||
			"USE"===str ||
			"VALUES"===str ||
			"VARCHAR2"===str ||
			"VARCHAR"===str ||
			"WHEN"===str ||
			"WHERE"===str ||
			"WHILE"===str ||
			"WITH"===str ||
			"WORK"===str ||
			"WRITE"===str ||
			false;
			},
		},
		{
		name:"spaceRight",
		body:function(str){
			return "ALL"===str ||
			"AND"===str ||
			"ANY"===str ||
			"AS"===str ||
			"ASC"===str ||
			"BEGIN"===str ||
			"BETWEEN"===str ||
			"BINARY_INTEGER"===str ||
			"BOOLEAN"===str ||
			"BY"===str ||
			"CHAR"===str ||
			"CLOSE"===str ||
			"COMMENT"===str ||
			"COMMIT"===str ||
			"CONNECT"===str ||
			"CONSTANT"===str ||
			"CURRENT"===str ||
			"CURSOR"===str ||
			"DATE"===str ||
			"DECIMAL"===str ||
			"DECLARE"===str ||
			"DEFAULT"===str ||
			"DELETE"===str ||
			"DESC"===str ||
			"DISTINCT"===str ||
			"DO"===str ||
			"ELSE"===str ||
			"ELSIF"===str ||
			"END"===str ||
			"EXCEPTION"===str ||
			"EXCEPTION_INIT"===str ||
			"EXCLUSIVE"===str ||
			"EXISTS"===str ||
			"EXIT"===str ||
			"FETCH"===str ||
			"FLOAT"===str ||
			"FOR"===str ||
			"FROM"===str ||
			"FUNCTION"===str ||
			"GOTO"===str ||
			"GROUP"===str ||
			"HAVING"===str ||
			"IF"===str ||
			"IN"===str ||
			"INDEX"===str ||
			"INSERT"===str ||
			"INTEGER"===str ||
			"INTERSECT"===str ||
			"INTO"===str ||
			"IS"===str ||
			"LEVEL"===str ||
			"LIKE"===str ||
			"LOCK"===str ||
			"LOOP"===str ||
			"MINUS"===str ||
			"MODE"===str ||
			"NATURAL"===str ||
			"NOT"===str ||
			"NOWAIT"===str ||
			"NULL"===str ||
			"NUMBER"===str ||
			"OF"===str ||
			"ONLY"===str ||
			"OPEN"===str ||
			"OR"===str ||
			"ORDER"===str ||
			"OTHERS"===str ||
			"OUT"===str ||
			"PACKAGE"===str ||
			"POSITIVE"===str ||
			"PRAGMA"===str ||
			"PRIOR"===str ||
			"PROCEDURE"===str ||
			"RAISE"===str ||
			"READ"===str ||
			"REAL"===str ||
			"RECORD"===str ||
			"REF"===str ||
			"RETURN"===str ||
			"REVERSE"===str ||
			"ROLLBACK"===str ||
			"ROW"===str ||
			"SAVEPOINT"===str ||
			"SEGMENT"===str ||
			"SELECT"===str ||
			"SET"===str ||
			"SHARE"===str ||
			"SMALLINT"===str ||
			"SQL"===str ||
			"START"===str ||
			"TABLE"===str ||
			"THEN"===str ||
			"TO"===str ||
			"TRANSACTION"===str ||
			"UNION"===str ||
			"UPDATE"===str ||
			"USE"===str ||
			"VALUES"===str ||
			"VARCHAR2"===str ||
			"VARCHAR"===str ||
			"WHEN"===str ||
			"WHERE"===str ||
			"WHILE"===str ||
			"WITH"===str ||
			"WORK"===str ||
			"WRITE"===str ||
			false;
			},
		},
		{
		name:"mapKeyWord",
		body:function(str){
			return str;
			},
		},
		{
		name:"addLineBreak",
		body:function(){
			var tab = "";
			for(var i=0;i<this.tabCount;i++) {
				tab+="\t";
			}
			return "\n"+tab;
			},
		},
		{
		name:"getKeyWord",
		body:function(string){
			var str = this.mapKeyWord(string);
			if(this.spaceLeft(string)) {
				str = " "+str;
			}
			if(this.spaceRight(string)) {
				str = str+" ";
			}
			return str;
			},
		},
		{
		name:"encode",
		body:function(str){
			return this.encodeCompilationUnit(node);
			},
		},
		{
		name:"encodeCompilationUnit",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ProcedureDeclaration")){
				str+=this.encodeProcedureDeclaration(node.get("ProcedureDeclaration"));
			} else if(node.has("FunctionDeclaration")){
				str+=this.encodeFunctionDeclaration(node.get("FunctionDeclaration"));
			} else if(node.has("SequenceOfStatements")){
				str+=this.encodeSequenceOfStatements(node.get("SequenceOfStatements"));
			}
			return str;
			},
		},
		{
		name:"encodeDeclarationSection",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("DECLARE");
			str+=this.encodeDeclarations(node.get("Declarations"));
			return str;
			},
		},
		{
		name:"encodeDeclarations",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				if(node.has("IdentifierDeclaration")){
					str+=this.encodeIdentifierDeclaration(node.get("IdentifierDeclaration"));
				} else if(node.has("CursorDeclaration")){
					str+=this.encodeCursorDeclaration(node.get("CursorDeclaration"));
				} else if(node.has("PragmaDeclaration")){
					str+=this.encodePragmaDeclaration(node.get("PragmaDeclaration"));
				}
				str+=this.getKeyWord(";");
			}
			while(node.hasMoreChildren()){
				if(node.has("ProcedureDeclaration")){
					str+=this.encodeProcedureDeclaration(node.get("ProcedureDeclaration"));
				} else if(node.has("FunctionDeclaration")){
					str+=this.encodeFunctionDeclaration(node.get("FunctionDeclaration"));
				}
			}
			return str;
			},
		},
		{
		name:"encodeIdentifierDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=node.get("IdentifierDeclarationName").getValue();
			str+=" ";
			if(node.has("ConstantDeclaration")){
				str+=this.encodeConstantDeclaration(node.get("ConstantDeclaration"));
			} else if(node.has("VariableDeclaration")){
				str+=this.encodeVariableDeclaration(node.get("VariableDeclaration"));
			} else if(node.has("ExceptionDeclaration")){
				str+=this.encodeExceptionDeclaration(node.get("ExceptionDeclaration"));
			}
			return str;
			},
		},
		{
		name:"encodeCursorDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("CURSOR");
			str+=node.get("CursorName").getValue();
			if(node.has("CursorParam")){
				str+=this.getKeyWord("(");
				str+=this.encodeParameterList(node.get("CursorParam").get("ParameterList"));
				str+=this.getKeyWord(")");
			}
			str+=this.getKeyWord("IS",node.get("CursorDeclarationIS"));
			str=this.addLineBreak()+str;
			str+=this.encodeSelectStatement(node.get("SelectStatement"));
			return str;
			},
		},
		{
		name:"encodeProcedureDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("PROCEDURE");
			str+=node.get("ProcedureName").getValue();
			if(node.has("ProcedureParam")){
				str+=this.getKeyWord("(");
				str+=this.encodeParameterList(node.get("ProcedureParam").get("ParameterList"));
				str+=this.getKeyWord(")");
			}
			if(node.has("ProcedureSpec")){
				str+=this.getKeyWord(";",node.get("ProcedureSpec"));
			} else if(node.has("ProcedureBodyBlock")){
				str+=this.encodeProcedureBodyBlock(node.get("ProcedureBodyBlock"));
			}
			return str;
			},
		},
		{
		name:"encodeProcedureBodyBlock",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("IS",node.get("ProcedureDeclarationIS"));
			str=this.addLineBreak()+str;
			this.tabCount++;
			str+=this.encodeProcedureBody(node.get("ProcedureBody"));
			return str;
			},
		},
		{
		name:"encodeProcedureBody",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ProcedureBodyDeclarations")){
				str+=this.encodeDeclarations(node.get("ProcedureBodyDeclarations").get("Declarations"));
			}
			str+=this.encodeBeginEndBlock(node.get("BeginEndBlock"));
			return str;
			},
		},
		{
		name:"encodeFunctionDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("FUNCTION");
			str+=node.get("FunctionName").getValue();
			if(node.has("FunctionParam")){
				str+=this.getKeyWord("(");
				str+=this.encodeParameterList(node.get("FunctionParam").get("ParameterList"));
				str+=this.getKeyWord(")");
			}
			str+=this.getKeyWord("RETURN");
			str+=this.encodeTypeDeclaration(node.get("TypeDeclaration"));
			if(node.has("FunctionSpec")){
				str+=this.getKeyWord(";",node.get("FunctionSpec"));
			} else if(node.has("FunctionBodyBlock")){
				str+=this.encodeFunctionBodyBlock(node.get("FunctionBodyBlock"));
			}
			return str;
			},
		},
		{
		name:"encodeFunctionBodyBlock",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("IS");
			str+=this.encodeFunctionBody(node.get("FunctionBody"));
			return str;
			},
		},
		{
		name:"encodeFunctionBody",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeBeginEndBlock(node.get("BeginEndBlock"));
			return str;
			},
		},
		{
		name:"encodePragmaDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("PRAGMA");
			str+=this.getKeyWord("EXCEPTION_INIT");
			str+=this.getKeyWord("(");
			str+=this.encodeNumOrID(node.get("NumOrID"));
			str+=this.getKeyWord(",");
			str+=this.encodeNumOrID(node.get("NumOrID"));
			str+=this.getKeyWord(")");
			return str;
			},
		},
		{
		name:"encodeVariableDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeTypeDeclaration(node.get("TypeDeclaration"));
			if(node.has("VariableNotNull")){
				str+=this.getKeyWord("NOT");
				str+=this.getKeyWord("NULL");
			}
			if(node.has("VariableAssignment")){
				if(node.get("VariableAssignment").has("VariableAssignOpt")){
					str+=this.getKeyWord(":=",node.get("VariableAssignment").get("VariableAssignOpt"));
				} else if(node.get("VariableAssignment").has("VariableDefault")){
					str+=this.getKeyWord("DEFAULT",node.get("VariableAssignment").get("VariableDefault"));
				}
				str+=this.encodePlSqlExpression(node.get("VariableAssignment").get("PlSqlExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeConstantDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("CONSTANT");
			str+=this.encodeTypeDeclaration(node.get("TypeDeclaration"));
			if(node.has("ConstantNotNull")){
				str+=this.getKeyWord("NOT");
				str+=this.getKeyWord("NULL");
			}
			if(node.has("ConstantAssignment")){
				if(node.get("ConstantAssignment").has("ConstantAssignOpt")){
					str+=this.getKeyWord(":=",node.get("ConstantAssignment").get("ConstantAssignOpt"));
				} else if(node.get("ConstantAssignment").has("ConstantDefault")){
					str+=this.getKeyWord("DEFAULT",node.get("ConstantAssignment").get("ConstantDefault"));
				}
				str+=this.encodePlSqlExpression(node.get("ConstantAssignment").get("PlSqlExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeTypeDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("BasicDataTypeDeclaration")){
				str+=this.encodeBasicDataTypeDeclaration(node.get("BasicDataTypeDeclaration"));
			} else if(node.has("TypeDeclaration1")){
				str+=this.encodeTypeDeclaration1(node.get("TypeDeclaration1"));
			} else if(node.has("TypeDeclaration2")){
				str+=this.encodeTypeDeclaration2(node.get("TypeDeclaration2"));
			} else if(node.has("TypeDeclaration3")){
				str+=this.encodeTypeDeclaration3(node.get("TypeDeclaration3"));
			} else if(node.has("TypeDeclaration4")){
				str+=node.get("TypeDeclaration4").getValue();
			}
			return str;
			},
		},
		{
		name:"encodeTypeDeclaration1",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=node.get("TypeDeclaration1Name").getValue();
			str+=this.getKeyWord("%TYPE");
			return str;
			},
		},
		{
		name:"encodeTypeDeclaration2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=node.get("TypeDeclaration2Name").getValue();
			str+=this.getKeyWord("%ROWTYPE");
			return str;
			},
		},
		{
		name:"encodeTypeDeclaration3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeTypeDeclaration3TableColumn(node.get("TypeDeclaration3TableColumn"));
			str+=this.getKeyWord("%TYPE");
			return str;
			},
		},
		{
		name:"encodeTypeDeclaration3TableColumn",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeTableColumn(node.get("TableColumn"));
			return str;
			},
		},
		{
		name:"encodeBasicDataTypeDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
						if(node.has("BasicDataTypeCHAR")){
				str+=this.getKeyWord("CHAR",node.get("BasicDataTypeCHAR"));
			} else if(node.has("BasicDataTypeVARCHAR")){
				str+=this.getKeyWord("VARCHAR",node.get("BasicDataTypeVARCHAR"));
			} else if(node.has("BasicDataTypeVARCHAR2")){
				str+=this.getKeyWord("VARCHAR2",node.get("BasicDataTypeVARCHAR2"));
			} else if(node.has("BasicDataTypeINTEGER")){
				str+=this.getKeyWord("INTEGER",node.get("BasicDataTypeINTEGER"));
			} else if(node.has("BasicDataTypeNUMBER")){
				str+=this.getKeyWord("NUMBER",node.get("BasicDataTypeNUMBER"));
			} else if(node.has("BasicDataTypeNATURAL")){
				str+=this.getKeyWord("NATURAL",node.get("BasicDataTypeNATURAL"));
			} else if(node.has("BasicDataTypeREAL")){
				str+=this.getKeyWord("REAL",node.get("BasicDataTypeREAL"));
			} else if(node.has("BasicDataTypeFLOAT")){
				str+=this.getKeyWord("FLOAT",node.get("BasicDataTypeFLOAT"));
			}
			if(node.has("BasicDataTypeDECIMAL")){
				str+=this.getKeyWord("(");
				str+=node.get("BasicDataTypeDECIMAL").get("BasicDataTypeDECIMAL_Part1").getValue();
				if(node.get("BasicDataTypeDECIMAL").has("BasicDataTypeDECIMAL_Part2")){
					str+=this.getKeyWord(",");
					str+=node.get("BasicDataTypeDECIMAL").get("BasicDataTypeDECIMAL_Part2").get("BasicDataTypeDECIMAL_Part3").getValue();
				}
				str+=this.getKeyWord(")");
			}
 else if(node.has("BasicDataTypeDATE")){
				str+=this.getKeyWord("DATE",node.get("BasicDataTypeDATE"));
			} else if(node.has("BasicDataTypeBINARYINTEGER")){
				str+=this.getKeyWord("BINARY_INTEGER",node.get("BasicDataTypeBINARYINTEGER"));
			} else if(node.has("BasicDataTypeBOOLEAN")){
				str+=this.getKeyWord("BOOLEAN",node.get("BasicDataTypeBOOLEAN"));
			}
			return str;
			},
		},
		{
		name:"encodeExceptionDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("EXCEPTION");
			return str;
			},
		},
		{
		name:"encodeBeginEndBlock",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("BEGIN",node.get("BeginEndBlockBEGIN"));
			str=this.addLineBreak()+str;
			this.tabCount++;
			str+=this.encodeSequenceOfStatements(node.get("SequenceOfStatements"));
			if(node.has("ExceptionBlock")){
				str+=this.encodeExceptionBlock(node.get("ExceptionBlock").get("ExceptionBlock"));
			}
			this.tabCount--;
			str+=this.addLineBreak();
			str+=this.getKeyWord("END",node.get("BeginEndBlockEND"));
			if(node.has("BeginEndBlockEndName")){
				str+=node.get("BeginEndBlockEndName").getValue();
			}
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeSequenceOfStatements",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.encodePLSQLStatement(node.get("PLSQLStatement"));
			}
			return str;
			},
		},
		{
		name:"encodeExceptionBlock",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("EXCEPTION",node.get("ExceptionBlockEXCEPTION"));
			str=this.addLineBreak()+str;
			while(node.hasMoreChildren()){
				str+=this.encodeExceptionHandler(node.get("ExceptionHandler"));
			}
			return str;
			},
		},
		{
		name:"encodeExceptionHandler",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("WHEN");
			if(node.has("ExceptionHandlerWhen")){
				str+=this.encodeExceptionHandlerWhen(node.get("ExceptionHandlerWhen"));
			} else if(node.has("ExceptionHandlerOthers")){
				str+=this.getKeyWord("OTHERS",node.get("ExceptionHandlerOthers"));
			}
			str+=this.getKeyWord("THEN",node.get("ExceptionHandlerTHEN"));
			str=this.addLineBreak()+str;
			str+=this.encodeSequenceOfStatements(node.get("SequenceOfStatements"));
			return str;
			},
		},
		{
		name:"encodeExceptionHandlerWhen",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=node.get("ExceptionHandlerName").getValue();
			while(node.hasMoreChildren()){
				str+=this.encodeExceptionHandlerWhenOR(node.get("ExceptionHandlerWhenOR"));
			}
			return str;
			},
		},
		{
		name:"encodeExceptionHandlerWhenOR",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("OR");
			str+=node.getValue();
			return str;
			},
		},
		{
		name:"encodePLSQLStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SubroutineCall")){
				str+=this.encodeSubroutineCall(node.get("SubroutineCall"));
			} else if(node.has("AssignmentStatement")){
				str+=this.encodeAssignmentStatement(node.get("AssignmentStatement"));
			} else if(node.has("ExitStatement")){
				str+=this.encodeExitStatement(node.get("ExitStatement"));
			} else if(node.has("GotoStatement")){
				str+=this.encodeGotoStatement(node.get("GotoStatement"));
			} else if(node.has("IfStatement")){
				str+=this.encodeIfStatement(node.get("IfStatement"));
			} else if(node.has("LoopStatement")){
				str+=this.encodeLoopStatement(node.get("LoopStatement"));
			} else if(node.has("NullStatement")){
				str+=this.encodeNullStatement(node.get("NullStatement"));
			} else if(node.has("RaiseStatement")){
				str+=this.encodeRaiseStatement(node.get("RaiseStatement"));
			} else if(node.has("ReturnStatement")){
				str+=this.encodeReturnStatement(node.get("ReturnStatement"));
			} else if(node.has("SQLStatement")){
				str+=this.encodeSQLStatement(node.get("SQLStatement"));
			} else if(node.has("LabelDeclaration")){
				str+=this.encodeLabelDeclaration(node.get("LabelDeclaration"));
			} else if(node.has("PLSQLStatementBeginEndBlock")){
				str+=this.encodePLSQLStatementBeginEndBlock(node.get("PLSQLStatementBeginEndBlock"));
			}
			return str;
			},
		},
		{
		name:"encodePLSQLStatementBeginEndBlock",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PLSQLStatementDeclarationSection")){
				str+=this.encodeDeclarationSection(node.get("PLSQLStatementDeclarationSection").get("DeclarationSection"));
			}
			str+=this.encodeBeginEndBlock(node.get("BeginEndBlock"));
			return str;
			},
		},
		{
		name:"encodeLabelDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("<<");
			str+=node.getValue();
			str+=this.getKeyWord(">>");
			return str;
			},
		},
		{
		name:"encodeSQLStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("CloseStatement")){
				str+=this.encodeCloseStatement(node.get("CloseStatement"));
			} else if(node.has("CommitStatement")){
				str+=this.encodeCommitStatement(node.get("CommitStatement"));
			} else if(node.has("DeleteStatement")){
				str+=this.encodeDeleteStatement(node.get("DeleteStatement"));
			} else if(node.has("FetchStatement")){
				str+=this.encodeFetchStatement(node.get("FetchStatement"));
			} else if(node.has("InsertStatement")){
				str+=this.encodeInsertStatement(node.get("InsertStatement"));
			} else if(node.has("LockTableStatement")){
				str+=this.encodeLockTableStatement(node.get("LockTableStatement"));
			} else if(node.has("OpenStatement")){
				str+=this.encodeOpenStatement(node.get("OpenStatement"));
			} else if(node.has("RollbackStatement")){
				str+=this.encodeRollbackStatement(node.get("RollbackStatement"));
			} else if(node.has("SavepointStatement")){
				str+=this.encodeSavepointStatement(node.get("SavepointStatement"));
			} else if(node.has("QueryStatement")){
				str+=this.encodeQueryStatement(node.get("QueryStatement"));
			} else if(node.has("SetTransactionStatement")){
				str+=this.encodeSetTransactionStatement(node.get("SetTransactionStatement"));
			} else if(node.has("UpdateStatement")){
				str+=this.encodeUpdateStatement(node.get("UpdateStatement"));
			}
			return str;
			},
		},
		{
		name:"encodeSubroutineCall",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=node.get("SubroutineCallName").getValue();
			if(node.has("SubroutineCallNameMore")){
				str+=this.getKeyWord(".");
				str+=node.get("SubroutineCallNameMore").get("SubroutineCallNameMoreValue").getValue();
			}
			if(node.has("SubroutineCallArguments")){
				str+=this.getKeyWord("(");
				str+=this.encodeArguments(node.get("SubroutineCallArguments").get("Arguments"));
				str+=this.getKeyWord(")");
			}
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeAssignmentStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("AssignmentStatementType1")){
				str+=this.encodeAssignmentStatementType1(node.get("AssignmentStatementType1"));
			} else if(node.has("AssignmentStatementType2")){
				str+=this.encodeAssignmentStatementType2(node.get("AssignmentStatementType2"));
			}
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeAssignmentStatementType1",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=node.get("AssignmentName").getValue();
			if(node.has("AssignmentMoreName")){
				str+=this.getKeyWord(".");
				str+=node.get("AssignmentMoreName").getValue();
			}
			str+=this.getKeyWord(":=");
			str+=this.encodePlSqlExpression(node.get("PlSqlExpression"));
			return str;
			},
		},
		{
		name:"encodeAssignmentStatementType2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=node.getValue();
			str+=this.getKeyWord(":=");
			str+=this.encodePlSqlExpression(node.get("PlSqlExpression"));
			return str;
			},
		},
		{
		name:"encodeExitStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("EXIT");
			if(node.has("ExitName")){
				str+=node.get("ExitName").getValue();
			}
			if(node.has("ExitWhen")){
				str+=this.getKeyWord("WHEN");
				str+=this.encodePlSqlExpression(node.get("ExitWhen").get("PlSqlExpression"));
			}
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeGotoStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("GOTO");
			str+=node.get("GotoName").getValue();
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeIfStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeIfBlock(node.get("IfBlock"));
			str+=this.encodeElseIFBlock(node.get("ElseIFBlock"));
			if(node.has("ElseBlock")){
				this.tabCount--;
				str+=this.addLineBreak();
				str+=this.getKeyWord("ELSE",node.get("ElseBlock").get("ElseStatementELSE"));
				str=this.addLineBreak()+str;
				this.tabCount++;
				str+=this.encodeSequenceOfStatements(node.get("ElseBlock").get("SequenceOfStatements"));
			}
			this.tabCount--;
			str+=this.addLineBreak();
			str+=this.getKeyWord("END",node.get("IfStatementELSE"));
			str+=this.getKeyWord("IF");
			if(node.has("EndIfName")){
				str+=node.get("EndIfName").getValue();
			}
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeIfBlock",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("IF");
			str+=this.encodePlSqlExpression(node.get("PlSqlExpression"));
			str+=this.getKeyWord("THEN",node.get("IfStatementTHEN"));
			str=this.addLineBreak()+str;
			this.tabCount++;
			str+=this.encodeSequenceOfStatements(node.get("SequenceOfStatements"));
			return str;
			},
		},
		{
		name:"encodeElseIFBlock",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord("ELSIF");
				str+=this.encodePlSqlExpression(node.get("PlSqlExpression"));
				str+=this.getKeyWord("THEN",node.get("ElseIfStatementTHEN"));
				str=this.addLineBreak()+str;
				str+=this.encodeSequenceOfStatements(node.get("SequenceOfStatements"));
			}
			return str;
			},
		},
		{
		name:"encodeLoopStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("NormalLoop")){
				str+=this.encodeNormalLoop(node.get("NormalLoop"));
			} else if(node.has("WhileLoop")){
				str+=this.encodeWhileLoop(node.get("WhileLoop"));
			} else if(node.has("ForLoop")){
				str+=this.encodeForLoop(node.get("ForLoop"));
			}
			return str;
			},
		},
		{
		name:"encodeNormalLoop",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("LOOP",node.get("NormalLoopLOOP"));
			str=this.addLineBreak()+str;
			this.tabCount++;
			str+=this.encodeSequenceOfStatements(node.get("SequenceOfStatements"));
			this.tabCount--;
			str+=this.addLineBreak();
			str+=this.getKeyWord("END",node.get("NormalLoopEND"));
			str+=this.getKeyWord("LOOP");
			if(node.has("NormalLoopName")){
				str+=node.get("NormalLoopName").getValue();
			}
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeWhileLoop",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("WHILE");
			str+=this.encodePlSqlExpression(node.get("PlSqlExpression"));
			str+=this.encodeNormalLoop(node.get("NormalLoop"));
			return str;
			},
		},
		{
		name:"encodeForLoop",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("NumericForLoop")){
				str+=this.encodeNumericForLoop(node.get("NumericForLoop"));
			} else if(node.has("CursorForLoop")){
				str+=this.encodeCursorForLoop(node.get("CursorForLoop"));
			}
			return str;
			},
		},
		{
		name:"encodeNumericForLoopLookahead",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("FOR");
			str+=node.getValue();
			str+=this.getKeyWord("IN");
			str+=this.encodePlSqlSimpleExpression(node.get("PlSqlSimpleExpression"));
			str+=this.getKeyWord("..");
			return str;
			},
		},
		{
		name:"encodeNumericForLoop",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("FOR");
			str+=node.get("NumericForLoopName").getValue();
			str+=this.getKeyWord("IN");
			if(node.has("NumericForLoopReverse")){
				str+=this.getKeyWord("REVERSE");
			}
			str+=this.encodeNumericForLoopFrom(node.get("NumericForLoopFrom"));
			str+=this.getKeyWord("..");
			str+=this.encodeNumericForLoopTo(node.get("NumericForLoopTo"));
			str+=this.encodeNormalLoop(node.get("NormalLoop"));
			return str;
			},
		},
		{
		name:"encodeNumericForLoopFrom",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodePlSqlSimpleExpression(node.get("PlSqlSimpleExpression"));
			return str;
			},
		},
		{
		name:"encodeNumericForLoopTo",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodePlSqlSimpleExpression(node.get("PlSqlSimpleExpression"));
			return str;
			},
		},
		{
		name:"encodeCursorForLoop",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("FOR");
			str+=node.get("CursorForLoopName").getValue();
			str+=this.getKeyWord("IN");
			if(node.has("CursorForLoopInType1")){
				str+=this.encodeCursorForLoopInType1(node.get("CursorForLoopInType1"));
			} else if(node.has("CursorForLoopInType2")){
				str+=this.encodeCursorForLoopInType2(node.get("CursorForLoopInType2"));
			}
			str+=this.encodeNormalLoop(node.get("NormalLoop"));
			return str;
			},
		},
		{
		name:"encodeCursorForLoopInType1",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=node.get("CursorForLoopINName").getValue();
			if(node.has("CursorForLoopArguments")){
				str+=this.getKeyWord("(");
				str+=this.encodeArguments(node.get("CursorForLoopArguments").get("Arguments"));
				str+=this.getKeyWord(")");
			}
			return str;
			},
		},
		{
		name:"encodeCursorForLoopInType2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("(");
			str+=this.encodeSelectStatement(node.get("SelectStatement"));
			str+=this.getKeyWord(")");
			return str;
			},
		},
		{
		name:"encodeNullStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("NULL");
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeRaiseStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("RAISE");
			if(node.has("RaiseStatementName")){
				str+=node.get("RaiseStatementName").getValue();
			}
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeReturnStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("RETURN");
			if(node.has("ReturnStatementExpr")){
				str+=this.encodePlSqlExpression(node.get("ReturnStatementExpr").get("PlSqlExpression"));
			}
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeCloseStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("CLOSE");
			str+=node.get("CloseStatementName").getValue();
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeCommitStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("COMMIT");
			if(node.has("CommitStatementWork")){
				str+=this.getKeyWord("WORK");
			}
			if(node.has("CommitStatementComment")){
				str+=this.getKeyWord("COMMENT");
				str+=node.get("CommitStatementComment").get("CommitStatementCommentValue").getValue();
			}
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeFetchStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("FETCH");
			str+=node.get("FetchStatementName").getValue();
			str+=this.getKeyWord("INTO");
			if(node.has("FetchStatementIntoName")){
				str+=node.get("FetchStatementIntoName").getValue();
			} else if(node.has("FetchStatementIntoBind_")){
				str+=node.get("FetchStatementIntoBind_").getValue();
			}
			str+=this.encodeFetchStatementIntoMore(node.get("FetchStatementIntoMore"));
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeFetchStatementIntoMore",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(",");
				if(node.has("FetchStatementIntoNameMore")){
					str+=node.get("FetchStatementIntoNameMore").getValue();
				} else if(node.has("FetchStatementIntoBindMore")){
					str+=node.get("FetchStatementIntoBindMore").getValue();
				}
			}
			return str;
			},
		},
		{
		name:"encodeLockTableStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("LOCK");
			str+=this.getKeyWord("TABLE");
			str+=this.encodeTableReference(node.get("TableReference"));
			str+=this.encodeLockTableStatementTableReferenceMore(node.get("LockTableStatementTableReferenceMore"));
			str+=this.getKeyWord("IN");
			str+=this.encodeLockMode(node.get("LockMode"));
			str+=this.getKeyWord("MODE");
			if(node.has("LockTableStatementNoWait")){
				str+=this.getKeyWord("NOWAIT");
			}
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeLockTableStatementTableReferenceMore",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(",");
				str+=this.encodeTableReference(node.get("TableReference"));
			}
			return str;
			},
		},
		{
		name:"encodeOpenStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("OPEN");
			str+=node.get("OpenStatementName").getValue();
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeRollbackStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("ROLLBACK");
			if(node.has("RollbackStatementWork")){
				str+=this.getKeyWord("WORK");
			}
			if(node.has("RollbackStatementTo")){
				str+=this.getKeyWord("TO");
				if(node.get("RollbackStatementTo").has("RollbackStatementToSavePoint")){
					str+=this.getKeyWord("SAVEPOINT");
				}
				str+=node.get("RollbackStatementTo").get("RollbackStatementToName").getValue();
			}
			if(node.has("RollbackStatementComment")){
				str+=this.getKeyWord("COMMENT");
				str+=node.get("RollbackStatementComment").get("RollbackStatementCommentValue").getValue();
			}
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeSetTransactionStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("SET");
			str+=this.getKeyWord("TRANSACTION");
			if(node.has("SetTransactionStatementReadWrite")){
				str+=this.encodeSetTransactionStatementReadWrite(node.get("SetTransactionStatementReadWrite"));
			} else if(node.has("SetTransactionStatementRollback")){
				str+=this.encodeSetTransactionStatementRollback(node.get("SetTransactionStatementRollback"));
			}
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeSetTransactionStatementReadWrite",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("READ");
			if(node.has("SetTransactionStatementReadOnly")){
				str+=this.getKeyWord("ONLY",node.get("SetTransactionStatementReadOnly"));
			} else if(node.has("SetTransactionStatementWrite")){
				str+=this.getKeyWord("WRITE",node.get("SetTransactionStatementWrite"));
			}
			return str;
			},
		},
		{
		name:"encodeSetTransactionStatementRollback",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("USE");
			str+=this.getKeyWord("ROLLBACK");
			str+=this.getKeyWord("SEGMENT");
			str+=node.get("SetTransactionStatementRollbackName").getValue();
			return str;
			},
		},
		{
		name:"encodeLockMode",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("LockModeRow")){
				str+=this.encodeLockModeRow(node.get("LockModeRow"));
			} else if(node.has("LockModeShare")){
				str+=this.encodeLockModeShare(node.get("LockModeShare"));
			} else if(node.has("LockModeExclusive")){
				str+=this.getKeyWord("EXCLUSIVE",node.get("LockModeExclusive"));
			}
			return str;
			},
		},
		{
		name:"encodeLockModeRow",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("ROW");
			if(node.has("LockModeRowShare")){
				str+=this.getKeyWord("SHARE",node.get("LockModeRowShare"));
			} else if(node.has("LockModeRowExclusive")){
				str+=this.getKeyWord("EXCLUSIVE",node.get("LockModeRowExclusive"));
			}
			return str;
			},
		},
		{
		name:"encodeLockModeShare",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("SHARE");
			return str;
			},
		},
		{
		name:"encodeSavepointStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("SAVEPOINT");
			str+=node.get("SavepointStatementName").getValue();
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeUpdateStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("UPDATE");
			str+=this.encodeTableReference(node.get("TableReference"));
			if(node.has("UpdateStatementName")){
				str+=node.get("UpdateStatementName").getValue();
			}
			str+=this.getKeyWord("SET",node.get("UpdateStatementSet"));
			str+=this.encodeColumnValues(node.get("ColumnValues"));
			if(node.has("UpdateStatementWhere")){
				str+=this.getKeyWord("WHERE");
				if(node.get("UpdateStatementWhere").has("SQLExpression")){
					str+=this.encodeSQLExpression(node.get("UpdateStatementWhere").get("SQLExpression"));
				} else if(node.get("UpdateStatementWhere").has("UpdateStatementWhereCurrent")){
					str+=this.encodeUpdateStatementWhereCurrent(node.get("UpdateStatementWhere").get("UpdateStatementWhereCurrent"));
				}
			}
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeUpdateStatementWhereCurrent",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("CURRENT");
			str+=this.getKeyWord("OF");
			str+=node.get("UpdateStatementWhereCurrentName").getValue();
			return str;
			},
		},
		{
		name:"encodeColumnValues",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeTableColumn(node.get("TableColumn"));
			str+=this.getKeyWord("=");
			str+=this.encodeUpdatedValue(node.get("UpdatedValue"));
			str+=this.encodeColumnValuesMore(node.get("ColumnValuesMore"));
			return str;
			},
		},
		{
		name:"encodeColumnValuesMore",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(",");
				str+=this.encodeTableColumn(node.get("TableColumn"));
				str+=this.getKeyWord("=");
				str+=this.encodeUpdatedValue(node.get("UpdatedValue"));
			}
			return str;
			},
		},
		{
		name:"encodeUpdatedValue",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("UpdatedValueSelectStatement")){
				str+=this.encodeUpdatedValueSelectStatement(node.get("UpdatedValueSelectStatement"));
			} else if(node.has("PlSqlExpression")){
				str+=this.encodePlSqlExpression(node.get("PlSqlExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeUpdatedValueSelectStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("(");
			str+=this.encodeSelectStatement(node.get("SelectStatement"));
			str+=this.getKeyWord(")");
			return str;
			},
		},
		{
		name:"encodeInsertStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("INSERT");
			str+=this.getKeyWord("INTO");
			str+=this.encodeTableReference(node.get("TableReference"));
			if(node.has("InsertStatementTableColumn")){
				str+=this.getKeyWord("(");
				str+=this.encodeTableColumn(node.get("InsertStatementTableColumn").get("TableColumn"));
				str+=this.encodeInsertStatementTableColumnMore(node.get("InsertStatementTableColumn").get("InsertStatementTableColumnMore"));
				str+=this.getKeyWord(")");
			}
			if(node.has("InsertStatementValues")){
				str+=this.encodeInsertStatementValues(node.get("InsertStatementValues"));
			} else if(node.has("InsertStatementSelectStatement")){
				str+=this.encodeInsertStatementSelectStatement(node.get("InsertStatementSelectStatement"));
			}
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeInsertStatementTableColumnMore",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(",");
				str+=this.encodeTableColumn(node.get("TableColumn"));
			}
			return str;
			},
		},
		{
		name:"encodeInsertStatementValues",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("VALUES");
			str+=this.getKeyWord("(");
			str+=this.encodePlSqlExpressionList(node.get("PlSqlExpressionList"));
			str+=this.getKeyWord(")");
			return str;
			},
		},
		{
		name:"encodeInsertStatementSelectStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeSelectStatement(node.get("SelectStatement"));
			return str;
			},
		},
		{
		name:"encodeDeleteStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("DELETE");
			if(node.has("DeleteStatementFrom__LR")){
				str+=this.getKeyWord("FROM");
			str=this.addLineBreak()+str;
			}
			str+=this.encodeTableReference(node.get("TableReference"));
			if(node.has("DeleteStatementName")){
				str+=node.get("DeleteStatementName").getValue();
			}
			if(node.has("DeleteStatementWhere")){
				str+=this.getKeyWord("WHERE");
				if(node.get("DeleteStatementWhere").has("SQLExpression")){
					str+=this.encodeSQLExpression(node.get("DeleteStatementWhere").get("SQLExpression"));
				} else if(node.get("DeleteStatementWhere").has("DeleteStatementWhereCurrent")){
					str+=this.encodeDeleteStatementWhereCurrent(node.get("DeleteStatementWhere").get("DeleteStatementWhereCurrent"));
				}
			}
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodeDeleteStatementWhereCurrent",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("CURRENT");
			str+=this.getKeyWord("OF");
			str+=node.get("DeleteStatementWhereCurrentValue").getValue();
			return str;
			},
		},
		{
		name:"encodeQueryStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeSelectStatement(node.get("SelectStatement"));
			str+=this.getKeyWord(";");
			return str;
			},
		},
		{
		name:"encodePlSqlExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodePlSqlAndExpression(node.get("PlSqlAndExpression"));
			str+=this.encodePlSqlExpressionOr(node.get("PlSqlExpressionOr"));
			return str;
			},
		},
		{
		name:"encodePlSqlExpressionOr",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord("OR");
				str+=this.encodePlSqlAndExpression(node.get("PlSqlAndExpression"));
			}
			return str;
			},
		},
		{
		name:"encodePlSqlAndExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodePlSqlUnaryLogicalExpression(node.get("PlSqlUnaryLogicalExpression"));
			str+=this.encodePlSqlExpressionAnd(node.get("PlSqlExpressionAnd"));
			return str;
			},
		},
		{
		name:"encodePlSqlExpressionAnd",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord("AND");
				str+=this.encodePlSqlUnaryLogicalExpression(node.get("PlSqlUnaryLogicalExpression"));
			}
			return str;
			},
		},
		{
		name:"encodePlSqlUnaryLogicalExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PlSqlUnaryLogicalExpressionNot")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.encodePlSqlRelationalExpression(node.get("PlSqlRelationalExpression"));
			return str;
			},
		},
		{
		name:"encodePlSqlRelationalExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodePlSqlSimpleExpression(node.get("PlSqlSimpleExpression"));
			if(node.has("PlSqlRelationalExpressionMore")){
				if(node.get("PlSqlRelationalExpressionMore").has("PlSqlRelationalExpressionRelExpr")){
					str+=this.encodePlSqlRelationalExpressionRelExpr(node.get("PlSqlRelationalExpressionMore").get("PlSqlRelationalExpressionRelExpr"));
				} else if(node.get("PlSqlRelationalExpressionMore").has("PlSqlRelationalExpressionInClause")){
					str+=this.encodePlSqlRelationalExpressionInClause(node.get("PlSqlRelationalExpressionMore").get("PlSqlRelationalExpressionInClause"));
				} else if(node.get("PlSqlRelationalExpressionMore").has("PlSqlRelationalExpressionBetweenClause")){
					str+=this.encodePlSqlRelationalExpressionBetweenClause(node.get("PlSqlRelationalExpressionMore").get("PlSqlRelationalExpressionBetweenClause"));
				} else if(node.get("PlSqlRelationalExpressionMore").has("PlSqlRelationalExpressionLikeClause")){
					str+=this.encodePlSqlRelationalExpressionLikeClause(node.get("PlSqlRelationalExpressionMore").get("PlSqlRelationalExpressionLikeClause"));
				} else if(node.get("PlSqlRelationalExpressionMore").has("IsNullClause")){
					str+=this.encodeIsNullClause(node.get("PlSqlRelationalExpressionMore").get("IsNullClause"));
				}
			}
			return str;
			},
		},
		{
		name:"encodePlSqlRelationalExpressionRelExpr",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodePlSqlRelationalExpressionRelop(node.get("PlSqlRelationalExpressionRelop"));
			str+=this.encodePlSqlRelationalExpressionSimpleExpr(node.get("PlSqlRelationalExpressionSimpleExpr"));
			return str;
			},
		},
		{
		name:"encodePlSqlRelationalExpressionRelop",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeRelop(node.get("Relop"));
			return str;
			},
		},
		{
		name:"encodePlSqlRelationalExpressionSimpleExpr",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodePlSqlSimpleExpression(node.get("PlSqlSimpleExpression"));
			return str;
			},
		},
		{
		name:"encodePlSqlRelationalExpressionInClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodePlSqlInClause(node.get("PlSqlInClause"));
			return str;
			},
		},
		{
		name:"encodePlSqlRelationalExpressionBetweenClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodePlSqlBetweenClause(node.get("PlSqlBetweenClause"));
			return str;
			},
		},
		{
		name:"encodePlSqlRelationalExpressionLikeClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodePlSqlLikeClause(node.get("PlSqlLikeClause"));
			return str;
			},
		},
		{
		name:"encodePlSqlExpressionList",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodePlSqlExpression(node.get("PlSqlExpression"));
			str+=this.encodePlSqlExpressionListExprMore(node.get("PlSqlExpressionListExprMore"));
			return str;
			},
		},
		{
		name:"encodePlSqlExpressionListExprMore",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(",");
				str+=this.encodePlSqlExpression(node.get("PlSqlExpression"));
			}
			return str;
			},
		},
		{
		name:"encodePlSqlInClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PlSqlInClauseNot")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.getKeyWord("IN");
			str+=this.getKeyWord("(");
			str+=this.encodePlSqlExpressionList(node.get("PlSqlExpressionList"));
			str+=this.getKeyWord(")");
			return str;
			},
		},
		{
		name:"encodePlSqlBetweenClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PlSqlBetweenClauseNot")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.getKeyWord("BETWEEN");
			str+=this.encodePlSqlSimpleExpression(node.get("PlSqlSimpleExpression"));
			str+=this.getKeyWord("AND");
			str+=this.encodePlSqlSimpleExpression(node.get("PlSqlSimpleExpression"));
			return str;
			},
		},
		{
		name:"encodePlSqlLikeClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PlSqlLikeClauseNot")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.getKeyWord("LIKE");
			str+=this.encodePlSqlSimpleExpression(node.get("PlSqlSimpleExpression"));
			return str;
			},
		},
		{
		name:"encodeIsNullClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("IS");
			if(node.has("IsNullClauseNot")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.getKeyWord("NULL");
			return str;
			},
		},
		{
		name:"encodePlSqlSimpleExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodePlSqlMultiplicativeExpression(node.get("PlSqlMultiplicativeExpression"));
			str+=this.encodePlSqlMultiplicativeExpressionMore(node.get("PlSqlMultiplicativeExpressionMore"));
			return str;
			},
		},
		{
		name:"encodePlSqlMultiplicativeExpressionMore",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				if(node.has("PlSqlSimpleExpressionPlus")){
					str+=this.getKeyWord("+",node.get("PlSqlSimpleExpressionPlus"));
				} else if(node.has("PlSqlSimpleExpressionMinus")){
					str+=this.getKeyWord("-",node.get("PlSqlSimpleExpressionMinus"));
				} else if(node.has("PlSqlSimpleExpressionOr")){
					str+=this.getKeyWord("||",node.get("PlSqlSimpleExpressionOr"));
				}
				str+=this.encodePlSqlMultiplicativeExpression(node.get("PlSqlMultiplicativeExpression"));
			}
			return str;
			},
		},
		{
		name:"encodePlSqlMultiplicativeExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodePlSqlExpotentExpression(node.get("PlSqlExpotentExpression"));
			str+=this.encodePlSqlExpotentExpressionMore(node.get("PlSqlExpotentExpressionMore"));
			return str;
			},
		},
		{
		name:"encodePlSqlExpotentExpressionMore",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				if(node.has("PlSqlSimpleExpressionMultiple")){
					str+=this.getKeyWord("*",node.get("PlSqlSimpleExpressionMultiple"));
				} else if(node.has("PlSqlSimpleExpressionDivide")){
					str+=this.getKeyWord("/",node.get("PlSqlSimpleExpressionDivide"));
				}
				str+=this.encodePlSqlExpotentExpression(node.get("PlSqlExpotentExpression"));
			}
			return str;
			},
		},
		{
		name:"encodePlSqlExpotentExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodePlSqlUnaryExpression(node.get("PlSqlUnaryExpression"));
			str+=this.encodePlSqlUnaryExpressionMore(node.get("PlSqlUnaryExpressionMore"));
			return str;
			},
		},
		{
		name:"encodePlSqlUnaryExpressionMore",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord("**");
				str+=this.encodePlSqlUnaryExpression(node.get("PlSqlUnaryExpression"));
			}
			return str;
			},
		},
		{
		name:"encodePlSqlUnaryExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PlSqlPrimaryExpressionSigned")){
				str+=this.encodePlSqlPrimaryExpressionSigned(node.get("PlSqlPrimaryExpressionSigned"));
			} else if(node.has("PlSqlPrimaryExpression")){
				str+=this.encodePlSqlPrimaryExpression(node.get("PlSqlPrimaryExpression"));
			}
			return str;
			},
		},
		{
		name:"encodePlSqlPrimaryExpressionSigned",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PlSqlUnaryExpressionPlus")){
				str+=this.getKeyWord("+",node.get("PlSqlUnaryExpressionPlus"));
			} else if(node.has("PlSqlUnaryExpressionMinus")){
				str+=this.getKeyWord("-",node.get("PlSqlUnaryExpressionMinus"));
			}
			str+=this.encodePlSqlPrimaryExpression(node.get("PlSqlPrimaryExpression"));
			return str;
			},
		},
		{
		name:"encodePlSqlPrimaryExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PlSqlPrimaryExpressionNull")){
				str+=this.getKeyWord("NULL",node.get("PlSqlPrimaryExpressionNull"));
			} else if(node.has("PlSqlPrimaryExpressionVarStatus")){
				str+=this.encodePlSqlPrimaryExpressionVarStatus(node.get("PlSqlPrimaryExpressionVarStatus"));
			} else if(node.has("PlSqlPrimaryExpressionCall")){
				str+=this.encodePlSqlPrimaryExpressionCall(node.get("PlSqlPrimaryExpressionCall"));
			} else if(node.has("PlSqlPrimaryExpressionCursor")){
				str+=this.encodePlSqlPrimaryExpressionCursor(node.get("PlSqlPrimaryExpressionCursor"));
			} else if(node.has("PlSqlPrimaryExpressionSQLStatus")){
				str+=this.encodePlSqlPrimaryExpressionSQLStatus(node.get("PlSqlPrimaryExpressionSQLStatus"));
			} else if(node.has("PlSqlPrimaryExpressionNumber")){
				str+=node.get("PlSqlPrimaryExpressionNumber").getValue();
			} else if(node.has("PlSqlPrimaryExpressionLiteral")){
				str+=node.get("PlSqlPrimaryExpressionLiteral").getValue();
			} else if(node.has("PlSqlPrimaryExpressionBind")){
				str+=node.get("PlSqlPrimaryExpressionBind").getValue();
			} else if(node.has("PlSqlExpressionParenthesized")){
				str+=this.encodePlSqlExpressionParenthesized(node.get("PlSqlExpressionParenthesized"));
			}
			return str;
			},
		},
		{
		name:"encodePlSqlPrimaryExpressionVarStatus",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=node.get("PlSqlPrimaryExpressionVarStatusName").getValue();
			str+=this.encodePlSqlPrimaryExpressionVarStatusType(node.get("PlSqlPrimaryExpressionVarStatusType"));
			return str;
			},
		},
		{
		name:"encodePlSqlPrimaryExpressionVarStatusType",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PlSqlPrimaryExpressionVarStatusFound")){
				str+=this.getKeyWord("%FOUND",node.get("PlSqlPrimaryExpressionVarStatusFound"));
			} else if(node.has("PlSqlPrimaryExpressionVarStatusNotFound")){
				str+=this.getKeyWord("%NOTFOUND",node.get("PlSqlPrimaryExpressionVarStatusNotFound"));
			} else if(node.has("PlSqlPrimaryExpressionVarStatusIsOpen")){
				str+=this.getKeyWord("%ISOPEN",node.get("PlSqlPrimaryExpressionVarStatusIsOpen"));
			} else if(node.has("PlSqlPrimaryExpressionVarStatusRowCount")){
				str+=this.getKeyWord("%ROWCOUNT",node.get("PlSqlPrimaryExpressionVarStatusRowCount"));
			}
			return str;
			},
		},
		{
		name:"encodePlSqlPrimaryExpressionCall",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=node.get("PlSqlPrimaryExpressionCallName").getValue();
			str+=this.encodePlSqlPrimaryExpressionCallArguments(node.get("PlSqlPrimaryExpressionCallArguments"));
			return str;
			},
		},
		{
		name:"encodePlSqlPrimaryExpressionCallArguments",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("(");
			str+=this.encodeArguments(node.get("Arguments"));
			str+=this.getKeyWord(")");
			return str;
			},
		},
		{
		name:"encodePlSqlPrimaryExpressionCursor",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=node.get("PlSqlPrimaryExpressionCursorName").getValue();
			if(node.has("PlSqlPrimaryExpressionCursorNameMore")){
				str+=this.getKeyWord(".");
				str+=node.get("PlSqlPrimaryExpressionCursorNameMore").get("PlSqlPrimaryExpressionCursorNameMoreName").getValue();
			}
			return str;
			},
		},
		{
		name:"encodePlSqlPrimaryExpressionSQLStatus",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("SQL");
			if(node.has("PlSqlPrimaryExpressionSQLStatusFound")){
				str+=this.getKeyWord("%FOUND",node.get("PlSqlPrimaryExpressionSQLStatusFound"));
			} else if(node.has("PlSqlPrimaryExpressionSQLStatusNotFound")){
				str+=this.getKeyWord("%NOTFOUND",node.get("PlSqlPrimaryExpressionSQLStatusNotFound"));
			} else if(node.has("PlSqlPrimaryExpressionSQLStatusIsOpen")){
				str+=this.getKeyWord("%ISOPEN",node.get("PlSqlPrimaryExpressionSQLStatusIsOpen"));
			} else if(node.has("PlSqlPrimaryExpressionSQLStatusRowCount")){
				str+=this.getKeyWord("%ROWCOUNT",node.get("PlSqlPrimaryExpressionSQLStatusRowCount"));
			}
			return str;
			},
		},
		{
		name:"encodePlSqlExpressionParenthesized",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("(");
			str+=this.encodePlSqlExpression(node.get("PlSqlExpression"));
			str+=this.getKeyWord(")");
			return str;
			},
		},
		{
		name:"encodeTableColumn",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeOracleObjectName(node.get("OracleObjectName"));
			if(node.has("TableColumnName1")){
				str+=this.getKeyWord(".");
				str+=this.encodeOracleObjectName(node.get("TableColumnName1").get("OracleObjectName"));
				if(node.get("TableColumnName1").has("TableColumnName2")){
					str+=this.getKeyWord(".");
					str+=this.encodeOracleObjectName(node.get("TableColumnName1").get("TableColumnName2").get("OracleObjectName"));
				}
			}
			return str;
			},
		},
		{
		name:"encodeOracleObjectName",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("OracleObjectNameValue")){
				str+=node.get("OracleObjectNameValue").getValue();
			} else if(node.has("OracleObjectNameQuotedValue")){
				str+=node.get("OracleObjectNameQuotedValue").getValue();
			}
			return str;
			},
		},
		{
		name:"encodeRelop",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("RelopEqual")){
				str+=this.getKeyWord("=",node.get("RelopEqual"));
			} else if(node.has("RelopNotEqual")){
				str+=this.getKeyWord("!=",node.get("RelopNotEqual"));
			} else if(node.has("RelopPound")){
				str+=this.getKeyWord("#",node.get("RelopPound"));
			} else if(node.has("RelopUnEqual")){
				str+=this.getKeyWord("<>",node.get("RelopUnEqual"));
			} else if(node.has("RelopLarger")){
				str+=this.getKeyWord(">",node.get("RelopLarger"));
			} else if(node.has("RelopNotLess")){
				str+=this.getKeyWord(">=",node.get("RelopNotLess"));
			} else if(node.has("RelopLess")){
				str+=this.getKeyWord("<",node.get("RelopLess"));
			} else if(node.has("RelopNotLarger")){
				str+=this.getKeyWord("<=",node.get("RelopNotLarger"));
			}
			return str;
			},
		},
		{
		name:"encodeTableReference",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeOracleObjectName(node.get("OracleObjectName"));
			if(node.has("TableReferenceNameMore")){
				str+=this.getKeyWord(".");
				str+=this.encodeOracleObjectName(node.get("TableReferenceNameMore").get("OracleObjectName"));
			}
			return str;
			},
		},
		{
		name:"encodeParameterList",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeParameter(node.get("Parameter"));
			str+=this.encodeParameterListParameterMore(node.get("ParameterListParameterMore"));
			return str;
			},
		},
		{
		name:"encodeParameterListParameterMore",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(",");
				str+=this.encodeParameter(node.get("Parameter"));
			}
			return str;
			},
		},
		{
		name:"encodeNumOrID",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("NumOrIDValue")){
				str+=node.get("NumOrIDValue").getValue();
			} else if(node.has("NumOrIDNumber")){
				str+=this.encodeNumOrIDNumber(node.get("NumOrIDNumber"));
			}
			return str;
			},
		},
		{
		name:"encodeNumOrIDNumber",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=node.get("NumOrIDNumberValue").getValue();
			return str;
			},
		},
		{
		name:"encodeParameter",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=node.get("ParameterName").getValue();
			str+=" ";
			if(node.has("ParameterOptions")){
				if(node.get("ParameterOptions").has("ParameterIn")){
					str+=this.getKeyWord("IN");
				}
				if(node.get("ParameterOptions").has("ParameterOut")){
					str+=this.getKeyWord("OUT");
				}
				str+=this.encodeTypeDeclaration(node.get("ParameterOptions").get("TypeDeclaration"));
				if(node.get("ParameterOptions").has("ParameterAssignment")){
					if(node.get("ParameterOptions").get("ParameterAssignment").has("ParameterAssignOpt")){
						str+=this.getKeyWord(":=",node.get("ParameterOptions").get("ParameterAssignment").get("ParameterAssignOpt"));
					} else if(node.get("ParameterOptions").get("ParameterAssignment").has("ParameterDefault")){
						str+=this.getKeyWord("DEFAULT",node.get("ParameterOptions").get("ParameterAssignment").get("ParameterDefault"));
					}
					str+=this.encodePlSqlExpression(node.get("ParameterOptions").get("ParameterAssignment").get("PlSqlExpression"));
				}
			}
			return str;
			},
		},
		{
		name:"encodeArguments",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodePlSqlExpressionList(node.get("PlSqlExpressionList"));
			return str;
			},
		},
		{
		name:"encodeSelectStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeSelectWithoutOrder(node.get("SelectWithoutOrder"));
			if(node.has("SelectStatementOrderByClause")){
				str+=this.encodeOrderByClause(node.get("SelectStatementOrderByClause").get("OrderByClause"));
			}
			if(node.has("SelectStatementForUpdateClause")){
				str+=this.encodeForUpdateClause(node.get("SelectStatementForUpdateClause").get("ForUpdateClause"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectWithoutOrder",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("SELECT");
			str+=this.encodeSelectList(node.get("SelectList"));
			if(node.has("SelectWithoutOrder")){
				str+=this.encodeIntoClause(node.get("SelectWithoutOrder").get("IntoClause"));
			}
			str+=this.encodeFromClause(node.get("FromClause"));
			if(node.has("SelectWithoutOrderWhereClause")){
				str+=this.encodeWhereClause(node.get("SelectWithoutOrderWhereClause").get("WhereClause"));
			}
			if(node.has("SelectWithoutOrderConnectClause")){
				str+=this.encodeConnectClause(node.get("SelectWithoutOrderConnectClause").get("ConnectClause"));
			}
			if(node.has("SelectWithoutOrderGroupByClause")){
				str+=this.encodeGroupByClause(node.get("SelectWithoutOrderGroupByClause").get("GroupByClause"));
			}
			if(node.has("SelectWithoutOrderSetClause")){
				str+=this.encodeSetClause(node.get("SelectWithoutOrderSetClause").get("SetClause"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectList",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SelectListStar")){
				str+=this.getKeyWord("*",node.get("SelectListStar"));
			} else if(node.has("SelectListColumns")){
				str+=this.encodeSelectListColumns(node.get("SelectListColumns"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectListColumns",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeSelectItem(node.get("SelectItem"));
			str+=this.encodeSelectListColumnMore(node.get("SelectListColumnMore"));
			return str;
			},
		},
		{
		name:"encodeSelectListColumnMore",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(",");
				str+=this.encodeSelectItem(node.get("SelectItem"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectItem",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SelectItemTable")){
				str+=this.encodeSelectItemTable(node.get("SelectItemTable"));
			} else if(node.has("SelectItemSchemaTable")){
				str+=this.encodeSelectItemSchemaTable(node.get("SelectItemSchemaTable"));
			} else if(node.has("SelectItemColumnExper")){
				str+=this.encodeSelectItemColumnExper(node.get("SelectItemColumnExper"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectItemTable",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeOracleObjectName(node.get("OracleObjectName"));
			str+=this.getKeyWord(".*");
			return str;
			},
		},
		{
		name:"encodeSelectItemSchemaTable",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeOracleObjectName(node.get("OracleObjectName"));
			str+=this.getKeyWord(".");
			str+=this.encodeOracleObjectName(node.get("OracleObjectName"));
			str+=this.getKeyWord(".*");
			return str;
			},
		},
		{
		name:"encodeSelectItemColumnExper",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeSQLSimpleExpression(node.get("SQLSimpleExpression"));
			if(node.has("SelectItemColumnAlias")){
				str+=node.get("SelectItemColumnAlias").getValue();
			}
			return str;
			},
		},
		{
		name:"encodeIntoClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("INTO");
			str+=this.encodeIntoItem(node.get("IntoItem"));
			str+=this.encodeIntoClauseItemMore(node.get("IntoClauseItemMore"));
			return str;
			},
		},
		{
		name:"encodeIntoClauseItemMore",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(",");
				str+=this.encodeIntoItem(node.get("IntoItem"));
			}
			return str;
			},
		},
		{
		name:"encodeIntoItem",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("IntoItemName")){
				str+=this.encodeIntoItemName(node.get("IntoItemName"));
			} else if(node.has("IntoItemBind")){
				str+=node.get("IntoItemBind").getValue();
			}
			return str;
			},
		},
		{
		name:"encodeIntoItemName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=node.get("IntoItemNameValue").getValue();
			if(node.has("IntoItemNameValueMore")){
				str+=this.getKeyWord(".");
				str+=node.get("IntoItemNameValueMore").getValue();
			}
			return str;
			},
		},
		{
		name:"encodeFromClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.addLineBreak();
			str+=this.getKeyWord("FROM",node.get("FromClauseFROM"));
			str+=this.encodeFromItem(node.get("FromItem"));
			str+=this.encodeFromClauseItemMore(node.get("FromClauseItemMore"));
			return str;
			},
		},
		{
		name:"encodeFromClauseItemMore",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(",");
				str+=this.encodeFromItem(node.get("FromItem"));
			}
			return str;
			},
		},
		{
		name:"encodeFromItem",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeTableReference(node.get("TableReference"));
			if(node.has("FromItemName")){
				str+=node.get("FromItemName").getValue();
			}
			return str;
			},
		},
		{
		name:"encodeWhereClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.addLineBreak();
			str+=this.getKeyWord("WHERE",node.get("WhereClauseWHERE"));
			str+=this.encodeSQLExpression(node.get("SQLExpression"));
			return str;
			},
		},
		{
		name:"encodeConnectClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConnectClauseStartWith1")){
				str+=this.getKeyWord("START");
				str+=this.getKeyWord("WITH");
				str+=this.encodeSQLExpression(node.get("ConnectClauseStartWith1").get("SQLExpression"));
			}
			str+=this.getKeyWord("CONNECT");
			str+=this.getKeyWord("BY");
			str+=this.encodeSQLExpression(node.get("SQLExpression"));
			if(node.has("ConnectClauseStartWith2")){
				str+=this.getKeyWord("START");
				str+=this.getKeyWord("WITH");
				str+=this.encodeSQLExpression(node.get("ConnectClauseStartWith2").get("SQLExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeGroupByClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("GROUP");
			str+=this.getKeyWord("BY");
			str+=this.encodeSQLExpressionList(node.get("SQLExpressionList"));
			if(node.has("GroupByClauseHaving")){
				str+=this.getKeyWord("HAVING");
				str+=this.encodeSQLExpression(node.get("GroupByClauseHaving").get("SQLExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeSetClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SetClauseUnion")){
				str+=this.encodeSetClauseUnion(node.get("SetClauseUnion"));
			} else if(node.has("SetClauseIntersect")){
				str+=this.getKeyWord("INTERSECT",node.get("SetClauseIntersect"));
			} else if(node.has("SetClauseMinus")){
				str+=this.getKeyWord("MINUS",node.get("SetClauseMinus"));
			}
			if(node.has("SetClauseSelectWithoutOrderParenthesized")){
				str+=this.encodeSetClauseSelectWithoutOrderParenthesized(node.get("SetClauseSelectWithoutOrderParenthesized"));
			} else if(node.has("SelectWithoutOrder")){
				str+=this.encodeSelectWithoutOrder(node.get("SelectWithoutOrder"));
			}
			return str;
			},
		},
		{
		name:"encodeSetClauseUnion",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("UNION");
			if(node.has("SetClauseUnionAll")){
				str+=this.getKeyWord("ALL");
			}
			return str;
			},
		},
		{
		name:"encodeSetClauseSelectWithoutOrderParenthesized",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("(");
			str+=this.encodeSelectWithoutOrder(node.get("SelectWithoutOrder"));
			str+=this.getKeyWord(")");
			return str;
			},
		},
		{
		name:"encodeOrderByClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("ORDER");
			str+=this.getKeyWord("BY");
			str+=this.encodeSQLSimpleExpression(node.get("SQLSimpleExpression"));
			str+=this.encodeOrderByClauseExprMore(node.get("OrderByClauseExprMore"));
			return str;
			},
		},
		{
		name:"encodeOrderByClauseExprMore",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(",");
				str+=this.encodeSQLSimpleExpression(node.get("SQLSimpleExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeForUpdateClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("FOR");
			str+=this.getKeyWord("UPDATE");
			str+=this.getKeyWord("OF");
			str+=this.encodeTableColumn(node.get("TableColumn"));
			str+=this.encodeForUpdateClauseTableColumn(node.get("ForUpdateClauseTableColumn"));
			return str;
			},
		},
		{
		name:"encodeForUpdateClauseTableColumn",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(",");
				str+=this.encodeTableColumn(node.get("TableColumn"));
			}
			return str;
			},
		},
		{
		name:"encodeSQLExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeSQLAndExpression(node.get("SQLAndExpression"));
			str+=this.encodeSQLExpressionOr(node.get("SQLExpressionOr"));
			return str;
			},
		},
		{
		name:"encodeSQLExpressionOr",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord("OR");
				str+=this.encodeSQLAndExpression(node.get("SQLAndExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeSQLAndExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeSQLUnaryLogicalExpression(node.get("SQLUnaryLogicalExpression"));
			str+=this.encodeSQLExpressionAnd(node.get("SQLExpressionAnd"));
			return str;
			},
		},
		{
		name:"encodeSQLExpressionAnd",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord("AND");
				str+=this.encodeSQLUnaryLogicalExpression(node.get("SQLUnaryLogicalExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeSQLUnaryLogicalExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ExistsClause")){
				str+=this.encodeExistsClause(node.get("ExistsClause"));
			} else if(node.has("SQLUnaryLogicalExpressionRelational")){
				str+=this.encodeSQLUnaryLogicalExpressionRelational(node.get("SQLUnaryLogicalExpressionRelational"));
			}
			return str;
			},
		},
		{
		name:"encodeSQLUnaryLogicalExpressionRelational",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SQLUnaryLogicalExpressionNot")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.encodeSQLRelationalExpression(node.get("SQLRelationalExpression"));
			return str;
			},
		},
		{
		name:"encodeExistsClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("EXISTS");
			str+=this.getKeyWord("(");
			str+=this.encodeSubQuery(node.get("SubQuery"));
			str+=this.getKeyWord(")");
			return str;
			},
		},
		{
		name:"encodeSQLRelationalExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SQLRelationalExpressionExprList")){
				str+=this.encodeSQLRelationalExpressionExprList(node.get("SQLRelationalExpressionExprList"));
			} else if(node.has("SQLRelationalExpressionSimpleExpr")){
				str+=this.encodeSQLRelationalExpressionSimpleExpr(node.get("SQLRelationalExpressionSimpleExpr"));
			}
			if(node.has("SQLRelationalExpressionOperatorExpr")){
				if(node.get("SQLRelationalExpressionOperatorExpr").has("SQLRelationalOperatorExpression")){
					str+=this.encodeSQLRelationalOperatorExpression(node.get("SQLRelationalExpressionOperatorExpr").get("SQLRelationalOperatorExpression"));
				} else if(node.get("SQLRelationalExpressionOperatorExpr").has("SQLRelationalExpressionInClause")){
					str+=this.encodeSQLRelationalExpressionInClause(node.get("SQLRelationalExpressionOperatorExpr").get("SQLRelationalExpressionInClause"));
				} else if(node.get("SQLRelationalExpressionOperatorExpr").has("SQLRelationalExpressionBetweenClause")){
					str+=this.encodeSQLRelationalExpressionBetweenClause(node.get("SQLRelationalExpressionOperatorExpr").get("SQLRelationalExpressionBetweenClause"));
				} else if(node.get("SQLRelationalExpressionOperatorExpr").has("SQLRelationalExpressionLikeClause")){
					str+=this.encodeSQLRelationalExpressionLikeClause(node.get("SQLRelationalExpressionOperatorExpr").get("SQLRelationalExpressionLikeClause"));
				} else if(node.get("SQLRelationalExpressionOperatorExpr").has("IsNullClause")){
					str+=this.encodeIsNullClause(node.get("SQLRelationalExpressionOperatorExpr").get("IsNullClause"));
				}
			}
			return str;
			},
		},
		{
		name:"encodeSQLRelationalExpressionExprList",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("(");
			str+=this.encodeSQLExpressionList(node.get("SQLExpressionList"));
			str+=this.getKeyWord(")");
			return str;
			},
		},
		{
		name:"encodeSQLRelationalExpressionSimpleExpr",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SQLRelationalExpressionSimpleExprPrior")){
				str+=this.getKeyWord("PRIOR");
			}
			str+=this.encodeSQLSimpleExpression(node.get("SQLSimpleExpression"));
			return str;
			},
		},
		{
		name:"encodeSQLRelationalExpressionInClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeSQLInClause(node.get("SQLInClause"));
			return str;
			},
		},
		{
		name:"encodeSQLRelationalExpressionBetweenClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeSQLBetweenClause(node.get("SQLBetweenClause"));
			return str;
			},
		},
		{
		name:"encodeSQLRelationalExpressionLikeClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeSQLLikeClause(node.get("SQLLikeClause"));
			return str;
			},
		},
		{
		name:"encodeSQLExpressionList",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeSQLSimpleExpression(node.get("SQLSimpleExpression"));
			str+=this.encodeSQLExpressionListSimpleExprMore(node.get("SQLExpressionListSimpleExprMore"));
			return str;
			},
		},
		{
		name:"encodeSQLExpressionListSimpleExprMore",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(",");
				str+=this.encodeSQLSimpleExpression(node.get("SQLSimpleExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeSQLRelationalOperatorExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeRelop(node.get("Relop"));
			str+=this.encodeRelExpr(node.get("RelExpr"));
			return str;
			},
		},
		{
		name:"encodeRelExpr",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SQLRelationalOperatorExpressionComplex")){
				str+=this.encodeSQLRelationalOperatorExpressionComplex(node.get("SQLRelationalOperatorExpressionComplex"));
			} else if(node.has("SQLRelationalOperatorExpressionSimpleExpr")){
				str+=this.encodeSQLRelationalOperatorExpressionSimpleExpr(node.get("SQLRelationalOperatorExpressionSimpleExpr"));
			}
			return str;
			},
		},
		{
		name:"encodeSQLRelationalOperatorExpressionComplex",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeSQLRelationalOperatorExpressionSubQuery(node.get("SQLRelationalOperatorExpressionSubQuery"));
			return str;
			},
		},
		{
		name:"encodeSQLRelationalOperatorExpressionSubQuery",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("(");
			str+=this.encodeSubQuery(node.get("SubQuery"));
			str+=this.getKeyWord(")");
			return str;
			},
		},
		{
		name:"encodeSQLRelationalOperatorExpressionSimpleExpr",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SQLRelationalOperatorExpressionPrior")){
				str+=this.getKeyWord("PRIOR");
			}
			str+=this.encodeSQLSimpleExpression(node.get("SQLSimpleExpression"));
			return str;
			},
		},
		{
		name:"encodeSQLInClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SQLInClauseNot")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.getKeyWord("IN");
			str+=this.getKeyWord("(");
			str+=this.encodeSQLInClauseIn(node.get("SQLInClauseIn"));
			str+=this.getKeyWord(")");
			return str;
			},
		},
		{
		name:"encodeSQLInClauseIn",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SQLExpressionList")){
				str+=this.encodeSQLExpressionList(node.get("SQLExpressionList"));
			} else if(node.has("SubQuery")){
				str+=this.encodeSubQuery(node.get("SubQuery"));
			}
			return str;
			},
		},
		{
		name:"encodeSQLBetweenClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SQLBetweenClauseNot")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.getKeyWord("BETWEEN");
			str+=this.encodeSQLSimpleExpression(node.get("SQLSimpleExpression"));
			str+=this.getKeyWord("AND");
			str+=this.encodeSQLSimpleExpression(node.get("SQLSimpleExpression"));
			return str;
			},
		},
		{
		name:"encodeSQLLikeClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SQLLikeClauseNot")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.getKeyWord("LIKE");
			str+=this.encodeSQLSimpleExpression(node.get("SQLSimpleExpression"));
			return str;
			},
		},
		{
		name:"encodeSQLSimpleExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeSQLMultiplicativeExpression(node.get("SQLMultiplicativeExpression"));
			str+=this.encodeSQLSimpleExpressionMultiplicativeExpr(node.get("SQLSimpleExpressionMultiplicativeExpr"));
			return str;
			},
		},
		{
		name:"encodeSQLSimpleExpressionMultiplicativeExpr",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				if(node.has("SQLSimpleExpressionPlus")){
					str+=this.getKeyWord("+",node.get("SQLSimpleExpressionPlus"));
				} else if(node.has("SQLSimpleExpressionMinus")){
					str+=this.getKeyWord("-",node.get("SQLSimpleExpressionMinus"));
				} else if(node.has("SQLSimpleExpressionOr")){
					str+=this.getKeyWord("||",node.get("SQLSimpleExpressionOr"));
				}
				str+=this.encodeSQLMultiplicativeExpression(node.get("SQLMultiplicativeExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeSQLMultiplicativeExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeSQLExpotentExpression(node.get("SQLExpotentExpression"));
			str+=this.encodeSQLExpotentExpressionMore(node.get("SQLExpotentExpressionMore"));
			return str;
			},
		},
		{
		name:"encodeSQLExpotentExpressionMore",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				if(node.has("SQLMultiplicativeExpressionMultiple")){
					str+=this.getKeyWord("*",node.get("SQLMultiplicativeExpressionMultiple"));
				} else if(node.has("SQLMultiplicativeExpressionDivide")){
					str+=this.getKeyWord("/",node.get("SQLMultiplicativeExpressionDivide"));
				}
				str+=this.encodeSQLExpotentExpression(node.get("SQLExpotentExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeSQLExpotentExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeSQLUnaryExpression(node.get("SQLUnaryExpression"));
			str+=this.encodeSQLUnaryExpressionMore(node.get("SQLUnaryExpressionMore"));
			return str;
			},
		},
		{
		name:"encodeSQLUnaryExpressionMore",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord("**");
				str+=this.encodeSQLUnaryExpression(node.get("SQLUnaryExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeSQLUnaryExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeSQLPrimaryExpression(node.get("SQLPrimaryExpression"));
			return str;
			},
		},
		{
		name:"encodeSQLPrimaryExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SqlPrimaryExpressionNull")){
				str+=this.getKeyWord("NULL",node.get("SqlPrimaryExpressionNull"));
			} else if(node.has("SQLPrimaryExpressionFunctionCall")){
				str+=this.encodeSQLPrimaryExpressionFunctionCall(node.get("SQLPrimaryExpressionFunctionCall"));
			} else if(node.has("SQLPrimaryExpressionOuterJoinExpr")){
				str+=this.encodeSQLPrimaryExpressionOuterJoinExpr(node.get("SQLPrimaryExpressionOuterJoinExpr"));
			} else if(node.has("SQLPrimaryExpressionTableColumn")){
				str+=this.encodeSQLPrimaryExpressionTableColumn(node.get("SQLPrimaryExpressionTableColumn"));
			} else if(node.has("SqlPrimaryExpressionNumber")){
				str+=node.get("SqlPrimaryExpressionNumber").getValue();
			} else if(node.has("SqlPrimaryExpressionLiteral")){
				str+=node.get("SqlPrimaryExpressionLiteral").getValue();
			} else if(node.has("SqlPrimaryExpressionBind")){
				str+=node.get("SqlPrimaryExpressionBind").getValue();
			} else if(node.has("SqlExpressionParenthesized")){
				str+=this.encodeSqlExpressionParenthesized(node.get("SqlExpressionParenthesized"));
			}
			return str;
			},
		},
		{
		name:"encodeSQLPrimaryExpressionFunctionCall",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeFunctionCall(node.get("FunctionCall"));
			return str;
			},
		},
		{
		name:"encodeSQLPrimaryExpressionOuterJoinExpr",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeOuterJoinExpression(node.get("OuterJoinExpression"));
			return str;
			},
		},
		{
		name:"encodeSQLPrimaryExpressionTableColumn",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeTableColumn(node.get("TableColumn"));
			return str;
			},
		},
		{
		name:"encodeSqlExpressionParenthesized",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("(");
			str+=this.encodeSQLExpression(node.get("SQLExpression"));
			str+=this.getKeyWord(")");
			return str;
			},
		},
		{
		name:"encodeFunctionCall",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeOracleObjectName(node.get("OracleObjectName"));
			if(node.has("FunctionCallName2")){
				str+=this.getKeyWord(".");
				str+=this.encodeOracleObjectName(node.get("FunctionCallName2").get("OracleObjectName"));
				if(node.get("FunctionCallName2").has("FunctionCallName3")){
					str+=this.getKeyWord(".");
					str+=this.encodeOracleObjectName(node.get("FunctionCallName2").get("FunctionCallName3").get("OracleObjectName"));
				}
			}
			str+=this.getKeyWord("(");
			if(node.has("FunctionCallSQLArguments")){
				if(node.get("FunctionCallSQLArguments").has("FunctionCallSQLDistinctOrAll")){
					if(node.get("FunctionCallSQLArguments").get("FunctionCallSQLDistinctOrAll").has("FunctionCallSQLDistinct")){
						str+=this.getKeyWord("DISTINCT",node.get("FunctionCallSQLArguments").get("FunctionCallSQLDistinctOrAll").get("FunctionCallSQLDistinct"));
					} else if(node.get("FunctionCallSQLArguments").get("FunctionCallSQLDistinctOrAll").has("FunctionCallSQLAll")){
						str+=this.getKeyWord("ALL",node.get("FunctionCallSQLArguments").get("FunctionCallSQLDistinctOrAll").get("FunctionCallSQLAll"));
					}
				}
				if(node.get("FunctionCallSQLArguments").has("SQLArguments")){
					str+=this.encodeSQLArguments(node.get("FunctionCallSQLArguments").get("SQLArguments"));
				} else if(node.get("FunctionCallSQLArguments").has("FunctionCallSQLArgumentsStar")){
					str+=this.getKeyWord("*",node.get("FunctionCallSQLArguments").get("FunctionCallSQLArgumentsStar"));
				}
			}
			str+=this.getKeyWord(")");
			return str;
			},
		},
		{
		name:"encodeSQLArguments",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeSQLExpressionList(node.get("SQLExpressionList"));
			return str;
			},
		},
		{
		name:"encodeOuterJoinExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeOracleObjectName(node.get("OracleObjectName"));
			if(node.has("OuterJoinExpressionName2")){
				str+=this.getKeyWord(".");
				str+=this.encodeOracleObjectName(node.get("OuterJoinExpressionName2").get("OracleObjectName"));
				if(node.get("OuterJoinExpressionName2").has("OuterJoinExpressionName3")){
					str+=this.getKeyWord(".");
					str+=this.encodeOracleObjectName(node.get("OuterJoinExpressionName2").get("OuterJoinExpressionName3").get("OracleObjectName"));
				}
			}
			str+=this.getKeyWord("(");
			str+=this.getKeyWord("+");
			str+=this.getKeyWord(")");
			return str;
			},
		},
		{
		name:"encodeSubQuery",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeSelectWithoutOrder(node.get("SelectWithoutOrder"));
			return str;
			},
		},
	],
}
