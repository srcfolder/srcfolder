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
			"ARRAY"===str ||
			"AS"===str ||
			"ASC"===str ||
			"AT"===str ||
			"AUTOMATIC"===str ||
			"AUTONOMOUS_TRANSACTION"===str ||
			"BEGIN"===str ||
			"BETWEEN"===str ||
			"BFILE"===str ||
			"BINARY_DOUBLE"===str ||
			"BINARY_FLOAT"===str ||
			"BINARY_INTEGER"===str ||
			"BLOB"===str ||
			"BODY"===str ||
			"BOOLEAN"===str ||
			"BUILTIN"===str ||
			"BULK"===str ||
			"BY"===str ||
			"BYTE"===str ||
			"CASE"===str ||
			"CHAR"===str ||
			"CHARACTER"===str ||
			"CLOB"===str ||
			"CLOSE"===str ||
			"COLLECT"===str ||
			"COMMENT"===str ||
			"COMMIT"===str ||
			"CONNECT"===str ||
			"CONSTANT"===str ||
			"COUNT"===str ||
			"CREATE"===str ||
			"CROSS"===str ||
			"CUBE"===str ||
			"CURRENT_OF"===str ||
			"CURSOR"===str ||
			"DATE"===str ||
			"DAY"===str ||
			"DBTIMEZONE"===str ||
			"DEC"===str ||
			"DECIMAL"===str ||
			"DECLARE"===str ||
			"DECREMENT"===str ||
			"DEFAULT"===str ||
			"DELETE"===str ||
			"DESC"===str ||
			"DIMENSION"===str ||
			"DISTINCT"===str ||
			"DOUBLE"===str ||
			"ELSE"===str ||
			"ELSIF"===str ||
			"EMPTY"===str ||
			"END"===str ||
			"EQUALS_PATH"===str ||
			"ESCAPE"===str ||
			"EXCEPTION"===str ||
			"EXCEPTION_INIT"===str ||
			"EXCLUSIVE"===str ||
			"EXISTS"===str ||
			"EXIT"===str ||
			"FALSE"===str ||
			"FETCH"===str ||
			"FIPSFLAG"===str ||
			"FIRST"===str ||
			"FLOAT"===str ||
			"FOR"===str ||
			"FROM"===str ||
			"FULL"===str ||
			"FUNCTION"===str ||
			"GOTO"===str ||
			"GROUP"===str ||
			"GROUPING"===str ||
			"HAVING"===str ||
			"IF"===str ||
			"IGNORE"===str ||
			"IN"===str ||
			"INCREMENT"===str ||
			"INDEX"===str ||
			"INFINITE"===str ||
			"INNER"===str ||
			"INSERT"===str ||
			"INT"===str ||
			"INTEGER"===str ||
			"INTERFACE"===str ||
			"INTERSECT"===str ||
			"INTERVAL"===str ||
			"INTO"===str ||
			"IS"===str ||
			"ITERATE"===str ||
			"JOIN"===str ||
			"KEEP"===str ||
			"LAST"===str ||
			"LEFT"===str ||
			"LIKE"===str ||
			"LIKE2"===str ||
			"LIKE4"===str ||
			"LIKEC"===str ||
			"LOCAL"===str ||
			"LOCK"===str ||
			"LONG"===str ||
			"LOOP"===str ||
			"MAIN"===str ||
			"MEASURES"===str ||
			"MEMBER"===str ||
			"MINUS"===str ||
			"MLSLABEL"===str ||
			"MODE"===str ||
			"MODEL"===str ||
			"MONTH"===str ||
			"NAN"===str ||
			"NATIONAL"===str ||
			"NATURAL"===str ||
			"NAV"===str ||
			"NCHAR"===str ||
			"NCLOB"===str ||
			"NEW"===str ||
			"NEW_NAMES"===str ||
			"NOCYCLE"===str ||
			"NOT"===str ||
			"NOWAIT"===str ||
			"NULL"===str ||
			"NULLS"===str ||
			"NUMBER"===str ||
			"NUMERIC"===str ||
			"NVARCHAR"===str ||
			"NVARCHAR2"===str ||
			"OF"===str ||
			"ON"===str ||
			"ONLY"===str ||
			"OPEN"===str ||
			"OR"===str ||
			"ORDER"===str ||
			"OUT"===str ||
			"OUTER"===str ||
			"PACKAGE"===str ||
			"PARTITION"===str ||
			"PLS_INTEGER"===str ||
			"POSITIVE"===str ||
			"PRAGMA"===str ||
			"PRECISION"===str ||
			"PRESENT"===str ||
			"PRIOR"===str ||
			"PROCEDURE"===str ||
			"RAISE"===str ||
			"RANGE"===str ||
			"RAW"===str ||
			"READ"===str ||
			"REAL"===str ||
			"RECORD"===str ||
			"REFERENCE"===str ||
			"REGEXP_LIKE"===str ||
			"REPLACE"===str ||
			"RESTRICT_REFERENCES"===str ||
			"RETURN"===str ||
			"RETURNING"===str ||
			"REVERSE"===str ||
			"RIGHT"===str ||
			"ROLLBACK"===str ||
			"ROLLUP"===str ||
			"ROW"===str ||
			"ROWID"===str ||
			"ROWS"===str ||
			"RULES"===str ||
			"SAVEPOINT"===str ||
			"SECOND"===str ||
			"SELECT"===str ||
			"SEQUENTIAL"===str ||
			"SERIALLY_REUSABLE"===str ||
			"SESSIONTIMEZONE"===str ||
			"SET"===str ||
			"SETS"===str ||
			"SHARE"===str ||
			"SIBLINGS"===str ||
			"SINGLE"===str ||
			"SMALLINT"===str ||
			"SOME"===str ||
			"SQL"===str ||
			"START"===str ||
			"SUBMULTISET"===str ||
			"SUBTYPE"===str ||
			"TABLE"===str ||
			"THE"===str ||
			"THEN"===str ||
			"TIME"===str ||
			"TIMESTAMP"===str ||
			"TO"===str ||
			"TRANSACTION"===str ||
			"TRUE"===str ||
			"TYPE"===str ||
			"UNDER_PATH"===str ||
			"UNION"===str ||
			"UNIQUE"===str ||
			"UNTIL"===str ||
			"UPDATE"===str ||
			"UPDATED"===str ||
			"UPSERT"===str ||
			"UROWID"===str ||
			"USING"===str ||
			"VALUES"===str ||
			"VARCHAR"===str ||
			"VARCHAR2"===str ||
			"VARRAY"===str ||
			"VARYING"===str ||
			"WAIT"===str ||
			"WHEN"===str ||
			"WHERE"===str ||
			"WHILE"===str ||
			"WITH"===str ||
			"WORK"===str ||
			"YEAR"===str ||
			"ZONE"===str ||
			";"===str ||
			":"===str ||
			".."===str ||
			"."===str ||
			","===str ||
			"**"===str ||
			"*"===str ||
			"@"===str ||
			")"===str ||
			"("===str ||
			"]"===str ||
			"["===str ||
			"+"===str ||
			"-"===str ||
			"/"===str ||
			"="===str ||
			"%"===str ||
			"<< "===str ||
			" >>"===str ||
			":="===str ||
			"=>"===str ||
			"|"===str ||
			"||"===str ||
			"<"===str ||
			"<="===str ||
			">"===str ||
			">="===str ||
			false;
			},
		},
		{
		name:"spaceRight",
		body:function(str){
			return "ALL"===str ||
			"AND"===str ||
			"ANY"===str ||
			"ARRAY"===str ||
			"AS"===str ||
			"ASC"===str ||
			"AT"===str ||
			"AUTOMATIC"===str ||
			"AUTONOMOUS_TRANSACTION"===str ||
			"BEGIN"===str ||
			"BETWEEN"===str ||
			"BFILE"===str ||
			"BINARY_DOUBLE"===str ||
			"BINARY_FLOAT"===str ||
			"BINARY_INTEGER"===str ||
			"BLOB"===str ||
			"BODY"===str ||
			"BOOLEAN"===str ||
			"BUILTIN"===str ||
			"BULK"===str ||
			"BY"===str ||
			"BYTE"===str ||
			"CASE"===str ||
			"CHAR"===str ||
			"CHARACTER"===str ||
			"CLOB"===str ||
			"CLOSE"===str ||
			"COLLECT"===str ||
			"COMMENT"===str ||
			"COMMIT"===str ||
			"CONNECT"===str ||
			"CONSTANT"===str ||
			"COUNT"===str ||
			"CREATE"===str ||
			"CROSS"===str ||
			"CUBE"===str ||
			"CURRENT_OF"===str ||
			"CURSOR"===str ||
			"DATE"===str ||
			"DAY"===str ||
			"DBTIMEZONE"===str ||
			"DEC"===str ||
			"DECIMAL"===str ||
			"DECLARE"===str ||
			"DECREMENT"===str ||
			"DEFAULT"===str ||
			"DELETE"===str ||
			"DESC"===str ||
			"DIMENSION"===str ||
			"DISTINCT"===str ||
			"DOUBLE"===str ||
			"ELSE"===str ||
			"ELSIF"===str ||
			"EMPTY"===str ||
			"END"===str ||
			"EQUALS_PATH"===str ||
			"ESCAPE"===str ||
			"EXCEPTION"===str ||
			"EXCEPTION_INIT"===str ||
			"EXCLUSIVE"===str ||
			"EXISTS"===str ||
			"EXIT"===str ||
			"FALSE"===str ||
			"FETCH"===str ||
			"FIPSFLAG"===str ||
			"FIRST"===str ||
			"FLOAT"===str ||
			"FOR"===str ||
			"FROM"===str ||
			"FULL"===str ||
			"FUNCTION"===str ||
			"GOTO"===str ||
			"GROUP"===str ||
			"GROUPING"===str ||
			"HAVING"===str ||
			"IF"===str ||
			"IGNORE"===str ||
			"IN"===str ||
			"INCREMENT"===str ||
			"INDEX"===str ||
			"INFINITE"===str ||
			"INNER"===str ||
			"INSERT"===str ||
			"INT"===str ||
			"INTEGER"===str ||
			"INTERFACE"===str ||
			"INTERSECT"===str ||
			"INTERVAL"===str ||
			"INTO"===str ||
			"IS"===str ||
			"ITERATE"===str ||
			"JOIN"===str ||
			"KEEP"===str ||
			"LAST"===str ||
			"LEFT"===str ||
			"LIKE"===str ||
			"LIKE2"===str ||
			"LIKE4"===str ||
			"LIKEC"===str ||
			"LOCAL"===str ||
			"LOCK"===str ||
			"LONG"===str ||
			"LOOP"===str ||
			"MAIN"===str ||
			"MEASURES"===str ||
			"MEMBER"===str ||
			"MINUS"===str ||
			"MLSLABEL"===str ||
			"MODE"===str ||
			"MODEL"===str ||
			"MONTH"===str ||
			"NAN"===str ||
			"NATIONAL"===str ||
			"NATURAL"===str ||
			"NAV"===str ||
			"NCHAR"===str ||
			"NCLOB"===str ||
			"NEW"===str ||
			"NEW_NAMES"===str ||
			"NOCYCLE"===str ||
			"NOT"===str ||
			"NOWAIT"===str ||
			"NULL"===str ||
			"NULLS"===str ||
			"NUMBER"===str ||
			"NUMERIC"===str ||
			"NVARCHAR"===str ||
			"NVARCHAR2"===str ||
			"OF"===str ||
			"ON"===str ||
			"ONLY"===str ||
			"OPEN"===str ||
			"OR"===str ||
			"ORDER"===str ||
			"OUT"===str ||
			"OUTER"===str ||
			"PACKAGE"===str ||
			"PARTITION"===str ||
			"PLS_INTEGER"===str ||
			"POSITIVE"===str ||
			"PRAGMA"===str ||
			"PRECISION"===str ||
			"PRESENT"===str ||
			"PRIOR"===str ||
			"PROCEDURE"===str ||
			"RAISE"===str ||
			"RANGE"===str ||
			"RAW"===str ||
			"READ"===str ||
			"REAL"===str ||
			"RECORD"===str ||
			"REFERENCE"===str ||
			"REGEXP_LIKE"===str ||
			"REPLACE"===str ||
			"RESTRICT_REFERENCES"===str ||
			"RETURN"===str ||
			"RETURNING"===str ||
			"REVERSE"===str ||
			"RIGHT"===str ||
			"ROLLBACK"===str ||
			"ROLLUP"===str ||
			"ROW"===str ||
			"ROWID"===str ||
			"ROWS"===str ||
			"RULES"===str ||
			"SAVEPOINT"===str ||
			"SECOND"===str ||
			"SELECT"===str ||
			"SEQUENTIAL"===str ||
			"SERIALLY_REUSABLE"===str ||
			"SESSIONTIMEZONE"===str ||
			"SET"===str ||
			"SETS"===str ||
			"SHARE"===str ||
			"SIBLINGS"===str ||
			"SINGLE"===str ||
			"SMALLINT"===str ||
			"SOME"===str ||
			"SQL"===str ||
			"START"===str ||
			"SUBMULTISET"===str ||
			"SUBTYPE"===str ||
			"TABLE"===str ||
			"THE"===str ||
			"THEN"===str ||
			"TIME"===str ||
			"TIMESTAMP"===str ||
			"TO"===str ||
			"TRANSACTION"===str ||
			"TRUE"===str ||
			"TYPE"===str ||
			"UNDER_PATH"===str ||
			"UNION"===str ||
			"UNIQUE"===str ||
			"UNTIL"===str ||
			"UPDATE"===str ||
			"UPDATED"===str ||
			"UPSERT"===str ||
			"UROWID"===str ||
			"USING"===str ||
			"VALUES"===str ||
			"VARCHAR"===str ||
			"VARCHAR2"===str ||
			"VARRAY"===str ||
			"VARYING"===str ||
			"WAIT"===str ||
			"WHEN"===str ||
			"WHERE"===str ||
			"WHILE"===str ||
			"WITH"===str ||
			"WORK"===str ||
			"YEAR"===str ||
			"ZONE"===str ||
			";"===str ||
			":"===str ||
			".."===str ||
			"."===str ||
			","===str ||
			"**"===str ||
			"*"===str ||
			"@"===str ||
			")"===str ||
			"("===str ||
			"]"===str ||
			"["===str ||
			"+"===str ||
			"-"===str ||
			"/"===str ||
			"="===str ||
			"%"===str ||
			"<< "===str ||
			" >>"===str ||
			":="===str ||
			"=>"===str ||
			"|"===str ||
			"||"===str ||
			"<"===str ||
			"<="===str ||
			">"===str ||
			">="===str ||
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
			return this.encodeparse(node);
			},
		},
		{
		name:"encodeNode",
		body:function(nodeName, node){
			var str='';
			if(eval("this.encode"+nodeName+"__Start")){
				str+=eval("this.encode"+nodeName+"__Start(node)");
			}
			if(eval("this.encode"+nodeName+"__Body")){
				str+=eval("this.encode"+nodeName+"__Body(node)");
			} else {
				str+=eval("this.encode"+nodeName+"(node)");
			}
			if(eval("this.encode"+nodeName+"__End")){
				str+=eval("this.encode"+nodeName+"__End(node)");
			}
			return str;
			},
		},
		{
		name:"encodeparse",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.encodeNode("CodeRoot",node.get("CodeRoot"));
			}
			return str;
			},
		},
		{
		name:"encodeCodeRoot",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("CodeRoot_Node4",node.get("CodeRoot_Node4"));
			str+=this.encodeNode("CodeRoot_Node6",node.get("CodeRoot_Node6"));
			return str;
			},
		},
		{
		name:"encodeCodeRoot_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("CodeRoot_Node3")){
				str+=this.getKeyWord("CREATE",node.get("CodeRoot_Node3").get("CREATE"));
				str+=this.encodeNode("CodeRoot_Node2",node.get("CodeRoot_Node3").get("CodeRoot_Node2"));
			}
			return str;
			},
		},
		{
		name:"encodeCodeRoot_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("CodeRoot_Node1")){
				str+=this.getKeyWord("OR",node.get("CodeRoot_Node1").get("OR"));
				str+=this.getKeyWord("REPLACE",node.get("CodeRoot_Node1").get("REPLACE"));
			}
			return str;
			},
		},
		{
		name:"encodeCodeRoot_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("CodeRoot_Node5",node.get("CodeRoot_Node5"));
			return str;
			},
		},
		{
		name:"encodeCodeRoot_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PackageBody")){
				str+=this.encodeNode("PackageBody",node.get("PackageBody"));
			} else if(node.has("PackageSpec")){
				str+=this.encodeNode("PackageSpec",node.get("PackageSpec"));
			} else if(node.has("PackageObjBody")){
				str+=this.encodeNode("PackageObjBody",node.get("PackageObjBody"));
			} else if(node.has("ProcedureMainBody")){
				str+=this.encodeNode("ProcedureMainBody",node.get("ProcedureMainBody"));
			}
			return str;
			},
		},
		{
		name:"encodePackageSpec",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("PACKAGE",node.get("PACKAGE"));
			str+=this.encodeNode("PackageName",node.get("PackageName"));
			str+=this.encodeNode("PackageSpec_Node4",node.get("PackageSpec_Node4"));
			while(node.hasMoreChildren()){
				str+=this.encodeNode("PackageObjSpec",node.get("PackageObjSpec"));
			}
			str+=this.getKeyWord("END");
			if(node.has("PackageSpec_Node5")){
				str+=this.encodeNode("PackageName",node.get("PackageSpec_Node5").get("PackageName"));
			}
			str+=this.getKeyWord(node.get("SEMI").getValue(),node);
			return str;
			},
		},
		{
		name:"encodePackageSpec_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("PackageSpec_Node3",node.get("PackageSpec_Node3"));
			return str;
			},
		},
		{
		name:"encodePackageSpec_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PackageSpec_Node1")){
				str+=this.getKeyWord("IS",node.get("PackageSpec_Node1"));
			} else if(node.has("PackageSpec_Node2")){
				str+=this.getKeyWord("AS",node.get("PackageSpec_Node2"));
			}
			return str;
			},
		},
		{
		name:"encodePackageBody",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("PACKAGE",node.get("PACKAGE"));
			str+=this.getKeyWord("BODY",node.get("BODY"));
			str+=this.encodeNode("PackageName",node.get("PackageName"));
			str+=this.encodeNode("PackageBody_Node4",node.get("PackageBody_Node4"));
			while(node.hasMoreChildren()){
				str+=this.encodeNode("PackageObjBody",node.get("PackageObjBody"));
			}
			str+=this.encodeNode("PackageBody_Node6",node.get("PackageBody_Node6"));
			str+=this.getKeyWord("END");
			if(node.has("PackageBody_Node7")){
				str+=this.encodeNode("PackageName",node.get("PackageBody_Node7").get("PackageName"));
			}
			str+=this.getKeyWord(node.get("SEMI").getValue(),node);
			return str;
			},
		},
		{
		name:"encodePackageBody_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("PackageBody_Node3",node.get("PackageBody_Node3"));
			return str;
			},
		},
		{
		name:"encodePackageBody_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PackageBody_Node1")){
				str+=this.getKeyWord("IS",node.get("PackageBody_Node1"));
			} else if(node.has("PackageBody_Node2")){
				str+=this.getKeyWord("AS",node.get("PackageBody_Node2"));
			}
			return str;
			},
		},
		{
		name:"encodePackageBody_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PackageBody_Node5")){
				str+=this.getKeyWord("BEGIN");
				str+=this.encodeNode("SeqOfStatements",node.get("PackageBody_Node5").get("SeqOfStatements"));
			}
			return str;
			},
		},
		{
		name:"encodePackageName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("PackageName_Node2",node.get("PackageName_Node2"));
			str+=this.encodeNode("Identifier",node.get("Identifier"));
			return str;
			},
		},
		{
		name:"encodePackageName_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PackageName_Node1")){
				str+=this.encodeNode("SchemaName",node.get("PackageName_Node1").get("SchemaName"));
				str+=this.getKeyWord(node.get("PackageName_Node1").get("DOT").getValue(),node.get("PackageName_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodePackageObjSpec",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("PackageObjSpec_Node1",node.get("PackageObjSpec_Node1"));
			return str;
			},
		},
		{
		name:"encodePackageObjSpec_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("VariableDeclaration")){
				str+=this.encodeNode("VariableDeclaration",node.get("VariableDeclaration"));
			} else if(node.has("TypeDeclaration")){
				str+=this.encodeNode("TypeDeclaration",node.get("TypeDeclaration"));
			} else if(node.has("SubtypeDeclaration")){
				str+=this.encodeNode("SubtypeDeclaration",node.get("SubtypeDeclaration"));
			} else if(node.has("RecordDeclaration")){
				str+=this.encodeNode("RecordDeclaration",node.get("RecordDeclaration"));
			} else if(node.has("PlsqlTableDeclaration")){
				str+=this.encodeNode("PlsqlTableDeclaration",node.get("PlsqlTableDeclaration"));
			} else if(node.has("VarrayDeclaration")){
				str+=this.encodeNode("VarrayDeclaration",node.get("VarrayDeclaration"));
			} else if(node.has("CursorDeclaration")){
				str+=this.encodeNode("CursorDeclaration",node.get("CursorDeclaration"));
			} else if(node.has("CursorSpec")){
				str+=this.encodeNode("CursorSpec",node.get("CursorSpec"));
			} else if(node.has("ProcedureSpec")){
				str+=this.encodeNode("ProcedureSpec",node.get("ProcedureSpec"));
			} else if(node.has("FunctionSpec")){
				str+=this.encodeNode("FunctionSpec",node.get("FunctionSpec"));
			} else if(node.has("ExceptionDeclaration")){
				str+=this.encodeNode("ExceptionDeclaration",node.get("ExceptionDeclaration"));
			} else if(node.has("PragmaDeclaration")){
				str+=this.encodeNode("PragmaDeclaration",node.get("PragmaDeclaration"));
			}
			return str;
			},
		},
		{
		name:"encodeVariableDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("VariableName",node.get("VariableName"));
			if(node.has("VariableDeclaration_Node1")){
				str+=this.getKeyWord("CONSTANT");
			}
			str+=this.encodeNode("TypeSpec",node.get("TypeSpec"));
			str+=this.encodeNode("VariableDeclaration_Node3",node.get("VariableDeclaration_Node3"));
			str+=this.encodeNode("VariableDeclaration_Node8",node.get("VariableDeclaration_Node8"));
			str+=this.getKeyWord(node.get("SEMI").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeVariableDeclaration_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("VariableDeclaration_Node2")){
				str+=this.getKeyWord("NOT");
				str+=this.getKeyWord("NULL");
			}
			return str;
			},
		},
		{
		name:"encodeVariableDeclaration_Node8",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("VariableDeclaration_Node7")){
				str+=this.encodeNode("VariableDeclaration_Node6",node.get("VariableDeclaration_Node7").get("VariableDeclaration_Node6"));
				str+=this.encodeNode("PlsqlExpression",node.get("VariableDeclaration_Node7").get("PlsqlExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeVariableDeclaration_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("VariableDeclaration_Node5",node.get("VariableDeclaration_Node5"));
			return str;
			},
		},
		{
		name:"encodeVariableDeclaration_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ASSIGN")){
				str+=this.getKeyWord(node.get("ASSIGN").getValue(),node);
			} else if(node.has("VariableDeclaration_Node4")){
				str+=this.getKeyWord("DEFAULT",node.get("VariableDeclaration_Node4"));
			}
			return str;
			},
		},
		{
		name:"encodeTypeDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("TYPE",node.get("TYPE"));
			str+=this.encodeNode("TypeSpec",node.get("TypeSpec"));
			str+=this.getKeyWord("IS");
			if(node.has("TypeDeclaration_Node1")){
				str+=this.getKeyWord("NEW",node.get("TypeDeclaration_Node1").get("NEW"));
			}
			str+=this.encodeNode("TypeDeclaration_Node7",node.get("TypeDeclaration_Node7"));
			str+=this.getKeyWord(node.get("SEMI").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeTypeDeclaration_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("TypeDeclaration_Node6",node.get("TypeDeclaration_Node6"));
			return str;
			},
		},
		{
		name:"encodeTypeDeclaration_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("TypeDeclaration_Node4")){
				str+=this.encodeNode("TypeDeclaration_Node4",node.get("TypeDeclaration_Node4"));
			} else if(node.has("TypeDeclaration_Node5")){
				str+=this.encodeNode("TypeDeclaration_Node5",node.get("TypeDeclaration_Node5"));
			}
			return str;
			},
		},
		{
		name:"encodeTypeDeclaration_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("TypeSpec",node.get("TypeSpec"));
			str+=this.encodeNode("TypeDeclaration_Node3",node.get("TypeDeclaration_Node3"));
			return str;
			},
		},
		{
		name:"encodeTypeDeclaration_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("TypeDeclaration_Node2")){
				str+=this.getKeyWord("NOT");
				str+=this.getKeyWord("NULL");
			}
			return str;
			},
		},
		{
		name:"encodeTypeDeclaration_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("PlsqlExpressions",node.get("PlsqlExpressions"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeSubtypeDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("SUBTYPE",node.get("SUBTYPE"));
			str+=this.encodeNode("TypeSpec",node.get("TypeSpec"));
			str+=this.getKeyWord("IS");
			str+=this.encodeNode("TypeSpec",node.get("TypeSpec"));
			str+=this.encodeNode("SubtypeDeclaration_Node5",node.get("SubtypeDeclaration_Node5"));
			str+=this.getKeyWord(node.get("SEMI").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeSubtypeDeclaration_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SubtypeDeclaration_Node4")){
				str+=this.encodeNode("SubtypeDeclaration_Node3",node.get("SubtypeDeclaration_Node4").get("SubtypeDeclaration_Node3"));
			}
			return str;
			},
		},
		{
		name:"encodeSubtypeDeclaration_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SubtypeDeclaration_Node1")){
				str+=this.encodeNode("SubtypeDeclaration_Node1",node.get("SubtypeDeclaration_Node1"));
			} else if(node.has("SubtypeDeclaration_Node2")){
				str+=this.encodeNode("SubtypeDeclaration_Node2",node.get("SubtypeDeclaration_Node2"));
			}
			return str;
			},
		},
		{
		name:"encodeSubtypeDeclaration_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("NOT");
			str+=this.getKeyWord("NULL");
			return str;
			},
		},
		{
		name:"encodeSubtypeDeclaration_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("RANGE",node.get("RANGE"));
			str+=this.encodeNode("Literal",node.get("Literal"));
			str+=this.getKeyWord(node.get("DOUBLEDOT").getValue(),node);
			str+=this.encodeNode("Literal",node.get("Literal"));
			return str;
			},
		},
		{
		name:"encodeCursorDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("CURSOR",node.get("CURSOR"));
			str+=this.encodeNode("CursorName",node.get("CursorName"));
			str+=this.encodeNode("CursorDeclaration_Node2",node.get("CursorDeclaration_Node2"));
			str+=this.getKeyWord("IS");
			str+=this.encodeNode("SelectCommand",node.get("SelectCommand"));
			str+=this.getKeyWord(node.get("SEMI").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeCursorDeclaration_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("CursorDeclaration_Node1")){
				str+=this.getKeyWord(node.get("CursorDeclaration_Node1").get("LPAREN").getValue(),node.get("CursorDeclaration_Node1"));
				str+=this.encodeNode("ParameterSpecs",node.get("CursorDeclaration_Node1").get("ParameterSpecs"));
				str+=this.getKeyWord(node.get("CursorDeclaration_Node1").get("RPAREN").getValue(),node.get("CursorDeclaration_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodePackageObjBody",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("PackageObjBody_Node1",node.get("PackageObjBody_Node1"));
			return str;
			},
		},
		{
		name:"encodePackageObjBody_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("VariableDeclaration")){
				str+=this.encodeNode("VariableDeclaration",node.get("VariableDeclaration"));
			} else if(node.has("SubtypeDeclaration")){
				str+=this.encodeNode("SubtypeDeclaration",node.get("SubtypeDeclaration"));
			} else if(node.has("CursorDeclaration")){
				str+=this.encodeNode("CursorDeclaration",node.get("CursorDeclaration"));
			} else if(node.has("ExceptionDeclaration")){
				str+=this.encodeNode("ExceptionDeclaration",node.get("ExceptionDeclaration"));
			} else if(node.has("RecordDeclaration")){
				str+=this.encodeNode("RecordDeclaration",node.get("RecordDeclaration"));
			} else if(node.has("PlsqlTableDeclaration")){
				str+=this.encodeNode("PlsqlTableDeclaration",node.get("PlsqlTableDeclaration"));
			} else if(node.has("VarrayDeclaration")){
				str+=this.encodeNode("VarrayDeclaration",node.get("VarrayDeclaration"));
			} else if(node.has("ProcedureBody")){
				str+=this.encodeNode("ProcedureBody",node.get("ProcedureBody"));
			} else if(node.has("FunctionBody")){
				str+=this.encodeNode("FunctionBody",node.get("FunctionBody"));
			} else if(node.has("PragmaDeclaration")){
				str+=this.encodeNode("PragmaDeclaration",node.get("PragmaDeclaration"));
			}
			return str;
			},
		},
		{
		name:"encodeSeqOfStatements",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Statement",node.get("Statement"));
			str+=this.getKeyWord(node.get("SEMI").getValue(),node);
			str+=this.encodeNode("SeqOfStatements_Node1",node.get("SeqOfStatements_Node1"));
			return str;
			},
		},
		{
		name:"encodeSeqOfStatements_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.encodeNode("Statement",node.get("Statement"));
				str+=this.getKeyWord(node.get("SEMI").getValue(),node);
			}
			return str;
			},
		},
		{
		name:"encodeStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Statement_Node1",node.get("Statement_Node1"));
			return str;
			},
		},
		{
		name:"encodeStatement_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("AssignmentStatement")){
				str+=this.encodeNode("AssignmentStatement",node.get("AssignmentStatement"));
			} else if(node.has("ExitStatement")){
				str+=this.encodeNode("ExitStatement",node.get("ExitStatement"));
			} else if(node.has("GotoStatement")){
				str+=this.encodeNode("GotoStatement",node.get("GotoStatement"));
			} else if(node.has("CaseStatement")){
				str+=this.encodeNode("CaseStatement",node.get("CaseStatement"));
			} else if(node.has("IfStatement")){
				str+=this.encodeNode("IfStatement",node.get("IfStatement"));
			} else if(node.has("NullStatement")){
				str+=this.encodeNode("NullStatement",node.get("NullStatement"));
			} else if(node.has("RaiseStatement")){
				str+=this.encodeNode("RaiseStatement",node.get("RaiseStatement"));
			} else if(node.has("ReturnStatement")){
				str+=this.encodeNode("ReturnStatement",node.get("ReturnStatement"));
			} else if(node.has("SqlStatement")){
				str+=this.encodeNode("SqlStatement",node.get("SqlStatement"));
			} else if(node.has("LoopStatement")){
				str+=this.encodeNode("LoopStatement",node.get("LoopStatement"));
			} else if(node.has("PlsqlBlock")){
				str+=this.encodeNode("PlsqlBlock",node.get("PlsqlBlock"));
			} else if(node.has("FunctionCall")){
				str+=this.encodeNode("FunctionCall",node.get("FunctionCall"));
			}
			return str;
			},
		},
		{
		name:"encodePlsqlBlock",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("PlsqlBlock_Node2",node.get("PlsqlBlock_Node2"));
			str+=this.encodeNode("PlsqlBlock_Node5",node.get("PlsqlBlock_Node5"));
			str+=this.getKeyWord("BEGIN");
			str+=this.encodeNode("SeqOfStatements",node.get("SeqOfStatements"));
			str+=this.encodeNode("PlsqlBlock_Node7",node.get("PlsqlBlock_Node7"));
			str+=this.encodeNode("PlsqlBlock_Node9",node.get("PlsqlBlock_Node9"));
			return str;
			},
		},
		{
		name:"encodePlsqlBlock_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PlsqlBlock_Node1")){
				str+=this.getKeyWord(node.get("PlsqlBlock_Node1").get("LLABEL").getValue(),node.get("PlsqlBlock_Node1"));
				str+=this.encodeNode("LabelName",node.get("PlsqlBlock_Node1").get("LabelName"));
				str+=this.getKeyWord(node.get("PlsqlBlock_Node1").get("RLABEL").getValue(),node.get("PlsqlBlock_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodePlsqlBlock_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PlsqlBlock_Node4")){
				if(node.get("PlsqlBlock_Node4").has("PlsqlBlock_Node3")){
					str+=this.getKeyWord("DECLARE");
				}
				while(node.get("PlsqlBlock_Node4").hasMoreChildren()){
					str+=this.encodeNode("DeclareSpec",node.get("PlsqlBlock_Node4").get("DeclareSpec"));
				}
			}
			return str;
			},
		},
		{
		name:"encodePlsqlBlock_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PlsqlBlock_Node6")){
				str+=this.getKeyWord("EXCEPTION");
				while(node.get("PlsqlBlock_Node6").hasMoreChildren()){
					str+=this.encodeNode("ExceptionHandler",node.get("PlsqlBlock_Node6").get("ExceptionHandler"));
				}
			}
			return str;
			},
		},
		{
		name:"encodePlsqlBlock_Node9",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("END");
			if(node.has("PlsqlBlock_Node8")){
				str+=this.encodeNode("LabelName",node.get("PlsqlBlock_Node8").get("LabelName"));
			}
			return str;
			},
		},
		{
		name:"encodeDeclareSpec",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("DeclareSpec_Node1",node.get("DeclareSpec_Node1"));
			return str;
			},
		},
		{
		name:"encodeDeclareSpec_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("VariableDeclaration")){
				str+=this.encodeNode("VariableDeclaration",node.get("VariableDeclaration"));
			} else if(node.has("SubtypeDeclaration")){
				str+=this.encodeNode("SubtypeDeclaration",node.get("SubtypeDeclaration"));
			} else if(node.has("CursorDeclaration")){
				str+=this.encodeNode("CursorDeclaration",node.get("CursorDeclaration"));
			} else if(node.has("ExceptionDeclaration")){
				str+=this.encodeNode("ExceptionDeclaration",node.get("ExceptionDeclaration"));
			} else if(node.has("RecordDeclaration")){
				str+=this.encodeNode("RecordDeclaration",node.get("RecordDeclaration"));
			} else if(node.has("PlsqlTableDeclaration")){
				str+=this.encodeNode("PlsqlTableDeclaration",node.get("PlsqlTableDeclaration"));
			} else if(node.has("VarrayDeclaration")){
				str+=this.encodeNode("VarrayDeclaration",node.get("VarrayDeclaration"));
			} else if(node.has("ProcedureDeclaration")){
				str+=this.encodeNode("ProcedureDeclaration",node.get("ProcedureDeclaration"));
			} else if(node.has("FunctionDeclaration")){
				str+=this.encodeNode("FunctionDeclaration",node.get("FunctionDeclaration"));
			} else if(node.has("TypeDeclaration")){
				str+=this.encodeNode("TypeDeclaration",node.get("TypeDeclaration"));
			} else if(node.has("PragmaDeclaration")){
				str+=this.encodeNode("PragmaDeclaration",node.get("PragmaDeclaration"));
			}
			return str;
			},
		},
		{
		name:"encodePragmaDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("PRAGMA",node.get("PRAGMA"));
			str+=this.encodeNode("PragmaDeclaration_Node13",node.get("PragmaDeclaration_Node13"));
			str+=this.getKeyWord(node.get("SEMI").getValue(),node);
			return str;
			},
		},
		{
		name:"encodePragmaDeclaration_Node13",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("PragmaDeclaration_Node12",node.get("PragmaDeclaration_Node12"));
			return str;
			},
		},
		{
		name:"encodePragmaDeclaration_Node12",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PragmaDeclaration_Node5")){
				str+=this.encodeNode("PragmaDeclaration_Node5",node.get("PragmaDeclaration_Node5"));
			} else if(node.has("PragmaDeclaration_Node6")){
				str+=this.encodeNode("PragmaDeclaration_Node6",node.get("PragmaDeclaration_Node6"));
			} else if(node.has("AUTONOMOUS_TRANSACTION")){
				str+=this.getKeyWord("AUTONOMOUS_TRANSACTION",node.get("AUTONOMOUS_TRANSACTION"));
			} else if(node.has("SERIALLY_REUSABLE")){
				str+=this.getKeyWord("SERIALLY_REUSABLE",node.get("SERIALLY_REUSABLE"));
			} else if(node.has("PragmaDeclaration_Node7")){
				str+=this.encodeNode("PragmaDeclaration_Node7",node.get("PragmaDeclaration_Node7"));
			} else if(node.has("PragmaDeclaration_Node8")){
				str+=this.encodeNode("PragmaDeclaration_Node8",node.get("PragmaDeclaration_Node8"));
			} else if(node.has("PragmaDeclaration_Node9")){
				str+=this.encodeNode("PragmaDeclaration_Node9",node.get("PragmaDeclaration_Node9"));
			} else if(node.has("PragmaDeclaration_Node10")){
				str+=this.encodeNode("PragmaDeclaration_Node10",node.get("PragmaDeclaration_Node10"));
			} else if(node.has("PragmaDeclaration_Node11")){
				str+=this.encodeNode("PragmaDeclaration_Node11",node.get("PragmaDeclaration_Node11"));
			}
			return str;
			},
		},
		{
		name:"encodePragmaDeclaration_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("RESTRICT_REFERENCES",node.get("RESTRICT_REFERENCES"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("PragmaDeclaration_Node3",node.get("PragmaDeclaration_Node3"));
			str+=this.encodeNode("PragmaDeclaration_Node4",node.get("PragmaDeclaration_Node4"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodePragmaDeclaration_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("PragmaDeclaration_Node2",node.get("PragmaDeclaration_Node2"));
			return str;
			},
		},
		{
		name:"encodePragmaDeclaration_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PragmaDeclaration_Node1")){
				str+=this.getKeyWord("DEFAULT",node.get("PragmaDeclaration_Node1"));
			} else if(node.has("FunctionName")){
				str+=this.encodeNode("FunctionName",node.get("FunctionName"));
			}
			return str;
			},
		},
		{
		name:"encodePragmaDeclaration_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("PragmaParam",node.get("PragmaParam"));
			}
			return str;
			},
		},
		{
		name:"encodePragmaDeclaration_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("EXCEPTION_INIT",node.get("EXCEPTION_INIT"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("ExceptionName",node.get("ExceptionName"));
			str+=this.getKeyWord(node.get("COMMA").getValue(),node);
			str+=this.encodeNode("Literal",node.get("Literal"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodePragmaDeclaration_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("BUILTIN",node.get("BUILTIN"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("PragmaParams",node.get("PragmaParams"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodePragmaDeclaration_Node8",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("FIPSFLAG",node.get("FIPSFLAG"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("PragmaParams",node.get("PragmaParams"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodePragmaDeclaration_Node9",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("INTERFACE",node.get("INTERFACE"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("PragmaParams",node.get("PragmaParams"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodePragmaDeclaration_Node10",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("NEW_NAMES",node.get("NEW_NAMES"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("PragmaParams",node.get("PragmaParams"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodePragmaDeclaration_Node11",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("TIMESTAMP",node.get("TIMESTAMP"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("PragmaParams",node.get("PragmaParams"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodePragmaParams",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("PragmaParam",node.get("PragmaParam"));
			str+=this.encodeNode("PragmaParams_Node1",node.get("PragmaParams_Node1"));
			return str;
			},
		},
		{
		name:"encodePragmaParams_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("PragmaParam",node.get("PragmaParam"));
			}
			return str;
			},
		},
		{
		name:"encodePragmaParam",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("PragmaParam_Node5",node.get("PragmaParam_Node5"));
			return str;
			},
		},
		{
		name:"encodePragmaParam_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PragmaParam_Node4")){
				str+=this.encodeNode("PragmaParam_Node4",node.get("PragmaParam_Node4"));
			} else if(node.has("QuotedString")){
				str+=this.getKeyWord(node.get("QuotedString").getValue(),node.get("QuotedString"));
			} else if(node.has("Identifier")){
				str+=this.encodeNode("Identifier",node.get("Identifier"));
			}
			return str;
			},
		},
		{
		name:"encodePragmaParam_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("PragmaParam_Node3",node.get("PragmaParam_Node3"));
			str+=this.getKeyWord(node.get("NUMBER").getValue(),node);
			return str;
			},
		},
		{
		name:"encodePragmaParam_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PragmaParam_Node2")){
				str+=this.encodeNode("PragmaParam_Node1",node.get("PragmaParam_Node2").get("PragmaParam_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodePragmaParam_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PLUS")){
				str+=this.getKeyWord(node.get("PLUS").getValue(),node);
			} else if(node.has("MINUS")){
				str+=this.getKeyWord(node.get("MINUS").getValue(),node);
			}
			return str;
			},
		},
		{
		name:"encodeAssignmentStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Lvalue",node.get("Lvalue"));
			str+=this.getKeyWord(node.get("ASSIGN").getValue(),node);
			str+=this.encodeNode("PlsqlExpression",node.get("PlsqlExpression"));
			return str;
			},
		},
		{
		name:"encodeLvalues",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Lvalue",node.get("Lvalue"));
			str+=this.encodeNode("Lvalues_Node1",node.get("Lvalues_Node1"));
			return str;
			},
		},
		{
		name:"encodeLvalues_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("Lvalue",node.get("Lvalue"));
			}
			return str;
			},
		},
		{
		name:"encodeLvalue",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Lvalue_Node7",node.get("Lvalue_Node7"));
			return str;
			},
		},
		{
		name:"encodeLvalue_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Lvalue_Node1")){
				str+=this.encodeNode("Lvalue_Node1",node.get("Lvalue_Node1"));
			} else if(node.has("Lvalue_Node3")){
				str+=this.encodeNode("Lvalue_Node3",node.get("Lvalue_Node3"));
			} else if(node.has("VariableName")){
				str+=this.encodeNode("VariableName",node.get("VariableName"));
			} else if(node.has("Lvalue_Node6")){
				str+=this.encodeNode("Lvalue_Node6",node.get("Lvalue_Node6"));
			}
			return str;
			},
		},
		{
		name:"encodeLvalue_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("RecordName",node.get("RecordName"));
			str+=this.getKeyWord(node.get("DOT").getValue(),node);
			str+=this.encodeNode("FieldName",node.get("FieldName"));
			return str;
			},
		},
		{
		name:"encodeLvalue_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("PlsqlTableName",node.get("PlsqlTableName"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("Subscript",node.get("Subscript"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			str+=this.encodeNode("Lvalue_Node2",node.get("Lvalue_Node2"));
			return str;
			},
		},
		{
		name:"encodeLvalue_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("DOT").getValue(),node);
				str+=this.encodeNode("FieldName",node.get("FieldName"));
			}
			return str;
			},
		},
		{
		name:"encodeLvalue_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("COLON").getValue(),node);
			str+=this.encodeNode("HostVariable",node.get("HostVariable"));
			str+=this.encodeNode("Lvalue_Node5",node.get("Lvalue_Node5"));
			return str;
			},
		},
		{
		name:"encodeLvalue_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Lvalue_Node4")){
				str+=this.getKeyWord(node.get("Lvalue_Node4").get("COLON").getValue(),node.get("Lvalue_Node4"));
				str+=this.encodeNode("HostVariable",node.get("Lvalue_Node4").get("HostVariable"));
			}
			return str;
			},
		},
		{
		name:"encodeFieldName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Identifier",node.get("Identifier"));
			return str;
			},
		},
		{
		name:"encodeSubscript",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("PlsqlExpression",node.get("PlsqlExpression"));
			return str;
			},
		},
		{
		name:"encodeHostVariable",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Identifier",node.get("Identifier"));
			return str;
			},
		},
		{
		name:"encodeGotoStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("GOTO");
			str+=this.encodeNode("LabelName",node.get("LabelName"));
			return str;
			},
		},
		{
		name:"encodeLabelName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Identifier",node.get("Identifier"));
			return str;
			},
		},
		{
		name:"encodeExitStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("EXIT",node.get("EXIT"));
			if(node.has("ExitStatement_Node1")){
				str+=this.encodeNode("LabelName",node.get("ExitStatement_Node1").get("LabelName"));
			}
			str+=this.encodeNode("ExitStatement_Node3",node.get("ExitStatement_Node3"));
			return str;
			},
		},
		{
		name:"encodeExitStatement_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ExitStatement_Node2")){
				str+=this.getKeyWord("WHEN");
				str+=this.encodeNode("PlsqlCondition",node.get("ExitStatement_Node2").get("PlsqlCondition"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Datatype_Node124",node.get("Datatype_Node124"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node124",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node1")){
				str+=this.getKeyWord("BINARY_INTEGER",node.get("Datatype_Node1"));
			} else if(node.has("Datatype_Node2")){
				str+=this.getKeyWord("BINARY_FLOAT",node.get("Datatype_Node2"));
			} else if(node.has("Datatype_Node3")){
				str+=this.getKeyWord("BINARY_DOUBLE",node.get("Datatype_Node3"));
			} else if(node.has("Datatype_Node4")){
				str+=this.getKeyWord("NATURAL",node.get("Datatype_Node4"));
			} else if(node.has("Datatype_Node5")){
				str+=this.getKeyWord("POSITIVE",node.get("Datatype_Node5"));
			} else if(node.has("Datatype_Node16")){
				str+=this.encodeNode("Datatype_Node16",node.get("Datatype_Node16"));
			} else if(node.has("Datatype_Node20")){
				str+=this.encodeNode("Datatype_Node20",node.get("Datatype_Node20"));
			} else if(node.has("Datatype_Node23")){
				str+=this.encodeNode("Datatype_Node23",node.get("Datatype_Node23"));
			} else if(node.has("Datatype_Node24")){
				str+=this.getKeyWord("BOOLEAN",node.get("Datatype_Node24"));
			} else if(node.has("Datatype_Node25")){
				str+=this.getKeyWord("DATE",node.get("Datatype_Node25"));
			} else if(node.has("Datatype_Node30")){
				str+=this.encodeNode("Datatype_Node30",node.get("Datatype_Node30"));
			} else if(node.has("Datatype_Node33")){
				str+=this.encodeNode("Datatype_Node33",node.get("Datatype_Node33"));
			} else if(node.has("Datatype_Node41")){
				str+=this.encodeNode("Datatype_Node41",node.get("Datatype_Node41"));
			} else if(node.has("Datatype_Node42")){
				str+=this.getKeyWord("INTEGER",node.get("Datatype_Node42"));
			} else if(node.has("Datatype_Node43")){
				str+=this.getKeyWord("INT",node.get("Datatype_Node43"));
			} else if(node.has("Datatype_Node44")){
				str+=this.getKeyWord("SMALLINT",node.get("Datatype_Node44"));
			} else if(node.has("Datatype_Node47")){
				str+=this.encodeNode("Datatype_Node47",node.get("Datatype_Node47"));
			} else if(node.has("Datatype_Node48")){
				str+=this.getKeyWord("REAL",node.get("Datatype_Node48"));
			} else if(node.has("Datatype_Node49")){
				str+=this.encodeNode("Datatype_Node49",node.get("Datatype_Node49"));
			} else if(node.has("Datatype_Node62")){
				str+=this.encodeNode("Datatype_Node62",node.get("Datatype_Node62"));
			} else if(node.has("Datatype_Node74")){
				str+=this.encodeNode("Datatype_Node74",node.get("Datatype_Node74"));
			} else if(node.has("Datatype_Node86")){
				str+=this.encodeNode("Datatype_Node86",node.get("Datatype_Node86"));
			} else if(node.has("Datatype_Node90")){
				str+=this.encodeNode("Datatype_Node90",node.get("Datatype_Node90"));
			} else if(node.has("Datatype_Node94")){
				str+=this.encodeNode("Datatype_Node94",node.get("Datatype_Node94"));
			} else if(node.has("Datatype_Node97")){
				str+=this.encodeNode("Datatype_Node97",node.get("Datatype_Node97"));
			} else if(node.has("Datatype_Node100")){
				str+=this.encodeNode("Datatype_Node100",node.get("Datatype_Node100"));
			} else if(node.has("Datatype_Node108")){
				str+=this.encodeNode("Datatype_Node108",node.get("Datatype_Node108"));
			} else if(node.has("Datatype_Node109")){
				str+=this.getKeyWord("MLSLABEL",node.get("Datatype_Node109"));
			} else if(node.has("Datatype_Node110")){
				str+=this.getKeyWord("PLS_INTEGER",node.get("Datatype_Node110"));
			} else if(node.has("Datatype_Node111")){
				str+=this.getKeyWord("BLOB",node.get("Datatype_Node111"));
			} else if(node.has("Datatype_Node117")){
				str+=this.encodeNode("Datatype_Node117",node.get("Datatype_Node117"));
			} else if(node.has("Datatype_Node118")){
				str+=this.getKeyWord("NCLOB",node.get("Datatype_Node118"));
			} else if(node.has("Datatype_Node119")){
				str+=this.getKeyWord("BFILE",node.get("Datatype_Node119"));
			} else if(node.has("Datatype_Node120")){
				str+=this.getKeyWord("ROWID",node.get("Datatype_Node120"));
			} else if(node.has("Datatype_Node123")){
				str+=this.encodeNode("Datatype_Node123",node.get("Datatype_Node123"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node16",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Datatype_Node11",node.get("Datatype_Node11"));
			str+=this.encodeNode("Datatype_Node15",node.get("Datatype_Node15"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node11",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Datatype_Node10",node.get("Datatype_Node10"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node10",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node6")){
				str+=this.getKeyWord("NUMBER",node.get("Datatype_Node6"));
			} else if(node.has("Datatype_Node7")){
				str+=this.getKeyWord("NUMERIC",node.get("Datatype_Node7"));
			} else if(node.has("Datatype_Node8")){
				str+=this.getKeyWord("DECIMAL",node.get("Datatype_Node8"));
			} else if(node.has("Datatype_Node9")){
				str+=this.getKeyWord("DEC",node.get("Datatype_Node9"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node15",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node14")){
				str+=this.getKeyWord(node.get("Datatype_Node14").get("LPAREN").getValue(),node.get("Datatype_Node14"));
				str+=this.getKeyWord(node.get("Datatype_Node14").get("NUMBER").getValue(),node.get("Datatype_Node14"));
				str+=this.encodeNode("Datatype_Node13",node.get("Datatype_Node14").get("Datatype_Node13"));
				str+=this.getKeyWord(node.get("Datatype_Node14").get("RPAREN").getValue(),node.get("Datatype_Node14"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node13",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node12")){
				str+=this.getKeyWord(node.get("Datatype_Node12").get("COMMA").getValue(),node.get("Datatype_Node12"));
				str+=this.getKeyWord(node.get("Datatype_Node12").get("NUMBER").getValue(),node.get("Datatype_Node12"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node20",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("LONG");
			if(node.has("Datatype_Node17")){
				str+=this.getKeyWord("RAW");
			}
			str+=this.encodeNode("Datatype_Node19",node.get("Datatype_Node19"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node19",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node18")){
				str+=this.getKeyWord(node.get("Datatype_Node18").get("LPAREN").getValue(),node.get("Datatype_Node18"));
				str+=this.getKeyWord(node.get("Datatype_Node18").get("NUMBER").getValue(),node.get("Datatype_Node18"));
				str+=this.getKeyWord(node.get("Datatype_Node18").get("RPAREN").getValue(),node.get("Datatype_Node18"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node23",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("RAW");
			str+=this.encodeNode("Datatype_Node22",node.get("Datatype_Node22"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node22",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node21")){
				str+=this.getKeyWord(node.get("Datatype_Node21").get("LPAREN").getValue(),node.get("Datatype_Node21"));
				str+=this.getKeyWord(node.get("Datatype_Node21").get("NUMBER").getValue(),node.get("Datatype_Node21"));
				str+=this.getKeyWord(node.get("Datatype_Node21").get("RPAREN").getValue(),node.get("Datatype_Node21"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node30",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("INTERVAL",node.get("INTERVAL"));
			str+=this.getKeyWord("DAY",node.get("DAY"));
			str+=this.encodeNode("Datatype_Node27",node.get("Datatype_Node27"));
			str+=this.getKeyWord("TO");
			str+=this.getKeyWord("SECOND",node.get("SECOND"));
			str+=this.encodeNode("Datatype_Node29",node.get("Datatype_Node29"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node27",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node26")){
				str+=this.getKeyWord(node.get("Datatype_Node26").get("LPAREN").getValue(),node.get("Datatype_Node26"));
				str+=this.getKeyWord(node.get("Datatype_Node26").get("NUMBER").getValue(),node.get("Datatype_Node26"));
				str+=this.getKeyWord(node.get("Datatype_Node26").get("RPAREN").getValue(),node.get("Datatype_Node26"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node29",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node28")){
				str+=this.getKeyWord(node.get("Datatype_Node28").get("LPAREN").getValue(),node.get("Datatype_Node28"));
				str+=this.getKeyWord(node.get("Datatype_Node28").get("NUMBER").getValue(),node.get("Datatype_Node28"));
				str+=this.getKeyWord(node.get("Datatype_Node28").get("RPAREN").getValue(),node.get("Datatype_Node28"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node33",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("INTERVAL",node.get("INTERVAL"));
			str+=this.getKeyWord("YEAR",node.get("YEAR"));
			str+=this.encodeNode("Datatype_Node32",node.get("Datatype_Node32"));
			str+=this.getKeyWord("TO");
			str+=this.getKeyWord("MONTH",node.get("MONTH"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node32",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node31")){
				str+=this.getKeyWord(node.get("Datatype_Node31").get("LPAREN").getValue(),node.get("Datatype_Node31"));
				str+=this.getKeyWord(node.get("Datatype_Node31").get("NUMBER").getValue(),node.get("Datatype_Node31"));
				str+=this.getKeyWord(node.get("Datatype_Node31").get("RPAREN").getValue(),node.get("Datatype_Node31"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node41",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Datatype_Node35",node.get("Datatype_Node35"));
			str+=this.encodeNode("Datatype_Node37",node.get("Datatype_Node37"));
			str+=this.encodeNode("Datatype_Node40",node.get("Datatype_Node40"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node35",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Datatype_Node34",node.get("Datatype_Node34"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node34",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("TIME")){
				str+=this.getKeyWord("TIME",node.get("TIME"));
			} else if(node.has("TIMESTAMP")){
				str+=this.getKeyWord("TIMESTAMP",node.get("TIMESTAMP"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node37",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node36")){
				str+=this.getKeyWord(node.get("Datatype_Node36").get("LPAREN").getValue(),node.get("Datatype_Node36"));
				str+=this.getKeyWord(node.get("Datatype_Node36").get("NUMBER").getValue(),node.get("Datatype_Node36"));
				str+=this.getKeyWord(node.get("Datatype_Node36").get("RPAREN").getValue(),node.get("Datatype_Node36"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node40",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node39")){
				str+=this.getKeyWord("WITH");
				if(node.get("Datatype_Node39").has("Datatype_Node38")){
					str+=this.getKeyWord("LOCAL",node.get("Datatype_Node39").get("Datatype_Node38").get("LOCAL"));
				}
				str+=this.getKeyWord("TIME",node.get("Datatype_Node39").get("TIME"));
				str+=this.getKeyWord("ZONE",node.get("Datatype_Node39").get("ZONE"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node47",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("FLOAT");
			str+=this.encodeNode("Datatype_Node46",node.get("Datatype_Node46"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node46",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node45")){
				str+=this.getKeyWord(node.get("Datatype_Node45").get("LPAREN").getValue(),node.get("Datatype_Node45"));
				str+=this.getKeyWord(node.get("Datatype_Node45").get("NUMBER").getValue(),node.get("Datatype_Node45"));
				str+=this.getKeyWord(node.get("Datatype_Node45").get("RPAREN").getValue(),node.get("Datatype_Node45"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node49",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("DOUBLE");
			str+=this.getKeyWord("PRECISION",node.get("PRECISION"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node62",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("CHAR");
			if(node.has("Datatype_Node50")){
				str+=this.getKeyWord("VARYING",node.get("Datatype_Node50").get("VARYING"));
			}
			str+=this.encodeNode("Datatype_Node56",node.get("Datatype_Node56"));
			str+=this.encodeNode("Datatype_Node61",node.get("Datatype_Node61"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node56",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node55")){
				str+=this.getKeyWord(node.get("Datatype_Node55").get("LPAREN").getValue(),node.get("Datatype_Node55"));
				str+=this.getKeyWord(node.get("Datatype_Node55").get("NUMBER").getValue(),node.get("Datatype_Node55"));
				str+=this.encodeNode("Datatype_Node54",node.get("Datatype_Node55").get("Datatype_Node54"));
				str+=this.getKeyWord(node.get("Datatype_Node55").get("RPAREN").getValue(),node.get("Datatype_Node55"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node54",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node53")){
				str+=this.encodeNode("Datatype_Node52",node.get("Datatype_Node53").get("Datatype_Node52"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node52",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("BYTE")){
				str+=this.getKeyWord("BYTE",node.get("BYTE"));
			} else if(node.has("Datatype_Node51")){
				str+=this.getKeyWord("CHAR",node.get("Datatype_Node51"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node61",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node60")){
				str+=this.getKeyWord("CHARACTER");
				str+=this.getKeyWord("SET");
				str+=this.encodeNode("Datatype_Node59",node.get("Datatype_Node60").get("Datatype_Node59"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node59",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Datatype_Node58",node.get("Datatype_Node58"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node58",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Identifier")){
				str+=this.encodeNode("Identifier",node.get("Identifier"));
			} else if(node.has("Datatype_Node57")){
				str+=this.encodeNode("Datatype_Node57",node.get("Datatype_Node57"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node57",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ColumnSpec",node.get("ColumnSpec"));
			str+=this.encodeNode("CHARSETATTR",node.get("CHARSETATTR"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node74",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("VARCHAR");
			str+=this.encodeNode("Datatype_Node68",node.get("Datatype_Node68"));
			str+=this.encodeNode("Datatype_Node73",node.get("Datatype_Node73"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node68",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node67")){
				str+=this.getKeyWord(node.get("Datatype_Node67").get("LPAREN").getValue(),node.get("Datatype_Node67"));
				str+=this.getKeyWord(node.get("Datatype_Node67").get("NUMBER").getValue(),node.get("Datatype_Node67"));
				str+=this.encodeNode("Datatype_Node66",node.get("Datatype_Node67").get("Datatype_Node66"));
				str+=this.getKeyWord(node.get("Datatype_Node67").get("RPAREN").getValue(),node.get("Datatype_Node67"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node66",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node65")){
				str+=this.encodeNode("Datatype_Node64",node.get("Datatype_Node65").get("Datatype_Node64"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node64",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("BYTE")){
				str+=this.getKeyWord("BYTE",node.get("BYTE"));
			} else if(node.has("Datatype_Node63")){
				str+=this.getKeyWord("CHAR",node.get("Datatype_Node63"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node73",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node72")){
				str+=this.getKeyWord("CHARACTER");
				str+=this.getKeyWord("SET");
				str+=this.encodeNode("Datatype_Node71",node.get("Datatype_Node72").get("Datatype_Node71"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node71",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Datatype_Node70",node.get("Datatype_Node70"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node70",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Identifier")){
				str+=this.encodeNode("Identifier",node.get("Identifier"));
			} else if(node.has("Datatype_Node69")){
				str+=this.encodeNode("Datatype_Node69",node.get("Datatype_Node69"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node69",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ColumnSpec",node.get("ColumnSpec"));
			str+=this.encodeNode("CHARSETATTR",node.get("CHARSETATTR"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node86",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("VARCHAR2");
			str+=this.encodeNode("Datatype_Node80",node.get("Datatype_Node80"));
			str+=this.encodeNode("Datatype_Node85",node.get("Datatype_Node85"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node80",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node79")){
				str+=this.getKeyWord(node.get("Datatype_Node79").get("LPAREN").getValue(),node.get("Datatype_Node79"));
				str+=this.getKeyWord(node.get("Datatype_Node79").get("NUMBER").getValue(),node.get("Datatype_Node79"));
				str+=this.encodeNode("Datatype_Node78",node.get("Datatype_Node79").get("Datatype_Node78"));
				str+=this.getKeyWord(node.get("Datatype_Node79").get("RPAREN").getValue(),node.get("Datatype_Node79"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node78",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node77")){
				str+=this.encodeNode("Datatype_Node76",node.get("Datatype_Node77").get("Datatype_Node76"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node76",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("BYTE")){
				str+=this.getKeyWord("BYTE",node.get("BYTE"));
			} else if(node.has("Datatype_Node75")){
				str+=this.getKeyWord("CHAR",node.get("Datatype_Node75"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node85",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node84")){
				str+=this.getKeyWord("CHARACTER");
				str+=this.getKeyWord("SET");
				str+=this.encodeNode("Datatype_Node83",node.get("Datatype_Node84").get("Datatype_Node83"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node83",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Datatype_Node82",node.get("Datatype_Node82"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node82",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Identifier")){
				str+=this.encodeNode("Identifier",node.get("Identifier"));
			} else if(node.has("Datatype_Node81")){
				str+=this.encodeNode("Datatype_Node81",node.get("Datatype_Node81"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node81",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ColumnSpec",node.get("ColumnSpec"));
			str+=this.encodeNode("CHARSETATTR",node.get("CHARSETATTR"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node90",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("CHARACTER");
			if(node.has("Datatype_Node87")){
				str+=this.getKeyWord("VARYING",node.get("Datatype_Node87").get("VARYING"));
			}
			str+=this.encodeNode("Datatype_Node89",node.get("Datatype_Node89"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node89",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node88")){
				str+=this.getKeyWord(node.get("Datatype_Node88").get("LPAREN").getValue(),node.get("Datatype_Node88"));
				str+=this.getKeyWord(node.get("Datatype_Node88").get("NUMBER").getValue(),node.get("Datatype_Node88"));
				str+=this.getKeyWord(node.get("Datatype_Node88").get("RPAREN").getValue(),node.get("Datatype_Node88"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node94",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("NCHAR");
			if(node.has("Datatype_Node91")){
				str+=this.getKeyWord("VARYING",node.get("Datatype_Node91").get("VARYING"));
			}
			str+=this.encodeNode("Datatype_Node93",node.get("Datatype_Node93"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node93",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node92")){
				str+=this.getKeyWord(node.get("Datatype_Node92").get("LPAREN").getValue(),node.get("Datatype_Node92"));
				str+=this.getKeyWord(node.get("Datatype_Node92").get("NUMBER").getValue(),node.get("Datatype_Node92"));
				str+=this.getKeyWord(node.get("Datatype_Node92").get("RPAREN").getValue(),node.get("Datatype_Node92"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node97",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("NVARCHAR");
			str+=this.encodeNode("Datatype_Node96",node.get("Datatype_Node96"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node96",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node95")){
				str+=this.getKeyWord(node.get("Datatype_Node95").get("LPAREN").getValue(),node.get("Datatype_Node95"));
				str+=this.getKeyWord(node.get("Datatype_Node95").get("NUMBER").getValue(),node.get("Datatype_Node95"));
				str+=this.getKeyWord(node.get("Datatype_Node95").get("RPAREN").getValue(),node.get("Datatype_Node95"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node100",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("NVARCHAR2");
			str+=this.encodeNode("Datatype_Node99",node.get("Datatype_Node99"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node99",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node98")){
				str+=this.getKeyWord(node.get("Datatype_Node98").get("LPAREN").getValue(),node.get("Datatype_Node98"));
				str+=this.getKeyWord(node.get("Datatype_Node98").get("NUMBER").getValue(),node.get("Datatype_Node98"));
				str+=this.getKeyWord(node.get("Datatype_Node98").get("RPAREN").getValue(),node.get("Datatype_Node98"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node108",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("NATIONAL");
			str+=this.encodeNode("Datatype_Node104",node.get("Datatype_Node104"));
			if(node.has("Datatype_Node105")){
				str+=this.getKeyWord("VARYING",node.get("Datatype_Node105").get("VARYING"));
			}
			str+=this.encodeNode("Datatype_Node107",node.get("Datatype_Node107"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node104",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Datatype_Node103",node.get("Datatype_Node103"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node103",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node101")){
				str+=this.getKeyWord("CHARACTER",node.get("Datatype_Node101"));
			} else if(node.has("Datatype_Node102")){
				str+=this.getKeyWord("CHAR",node.get("Datatype_Node102"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node107",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node106")){
				str+=this.getKeyWord(node.get("Datatype_Node106").get("LPAREN").getValue(),node.get("Datatype_Node106"));
				str+=this.getKeyWord(node.get("Datatype_Node106").get("NUMBER").getValue(),node.get("Datatype_Node106"));
				str+=this.getKeyWord(node.get("Datatype_Node106").get("RPAREN").getValue(),node.get("Datatype_Node106"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node117",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("CLOB");
			str+=this.encodeNode("Datatype_Node116",node.get("Datatype_Node116"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node116",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node115")){
				str+=this.getKeyWord("CHARACTER");
				str+=this.getKeyWord("SET");
				str+=this.encodeNode("Datatype_Node114",node.get("Datatype_Node115").get("Datatype_Node114"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node114",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Datatype_Node113",node.get("Datatype_Node113"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node113",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Identifier")){
				str+=this.encodeNode("Identifier",node.get("Identifier"));
			} else if(node.has("Datatype_Node112")){
				str+=this.encodeNode("Datatype_Node112",node.get("Datatype_Node112"));
			}
			return str;
			},
		},
		{
		name:"encodeDatatype_Node112",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ColumnSpec",node.get("ColumnSpec"));
			str+=this.encodeNode("CHARSETATTR",node.get("CHARSETATTR"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node123",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("UROWID");
			str+=this.encodeNode("Datatype_Node122",node.get("Datatype_Node122"));
			return str;
			},
		},
		{
		name:"encodeDatatype_Node122",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype_Node121")){
				str+=this.getKeyWord(node.get("Datatype_Node121").get("LPAREN").getValue(),node.get("Datatype_Node121"));
				str+=this.getKeyWord(node.get("Datatype_Node121").get("NUMBER").getValue(),node.get("Datatype_Node121"));
				str+=this.getKeyWord(node.get("Datatype_Node121").get("RPAREN").getValue(),node.get("Datatype_Node121"));
			}
			return str;
			},
		},
		{
		name:"encodeTypeSpec",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("TypeSpec_Node6",node.get("TypeSpec_Node6"));
			return str;
			},
		},
		{
		name:"encodeTypeSpec_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Datatype")){
				str+=this.encodeNode("Datatype",node.get("Datatype"));
			} else if(node.has("TypeSpec_Node1")){
				str+=this.encodeNode("TypeSpec_Node1",node.get("TypeSpec_Node1"));
			} else if(node.has("TypeSpec_Node2")){
				str+=this.encodeNode("TypeSpec_Node2",node.get("TypeSpec_Node2"));
			} else if(node.has("TypeSpec_Node5")){
				str+=this.encodeNode("TypeSpec_Node5",node.get("TypeSpec_Node5"));
			}
			return str;
			},
		},
		{
		name:"encodeTypeSpec_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ColumnSpec",node.get("ColumnSpec"));
			str+=this.encodeNode("TYPEATTR",node.get("TYPEATTR"));
			return str;
			},
		},
		{
		name:"encodeTypeSpec_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("TableSpec",node.get("TableSpec"));
			str+=this.encodeNode("ROWTYPEATTR",node.get("ROWTYPEATTR"));
			return str;
			},
		},
		{
		name:"encodeTypeSpec_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("TypeName",node.get("TypeName"));
			str+=this.encodeNode("TypeSpec_Node4",node.get("TypeSpec_Node4"));
			return str;
			},
		},
		{
		name:"encodeTypeSpec_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("TypeSpec_Node3")){
				str+=this.getKeyWord(node.get("TypeSpec_Node3").get("LPAREN").getValue(),node.get("TypeSpec_Node3"));
				str+=this.getKeyWord(node.get("TypeSpec_Node3").get("NUMBER").getValue(),node.get("TypeSpec_Node3"));
				str+=this.getKeyWord(node.get("TypeSpec_Node3").get("RPAREN").getValue(),node.get("TypeSpec_Node3"));
			}
			return str;
			},
		},
		{
		name:"encodeTypeName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Identifier",node.get("Identifier"));
			str+=this.encodeNode("TypeName_Node1",node.get("TypeName_Node1"));
			return str;
			},
		},
		{
		name:"encodeTypeName_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("DOT").getValue(),node);
				str+=this.encodeNode("Identifier",node.get("Identifier"));
			}
			return str;
			},
		},
		{
		name:"encodeParameterSpecs",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ParameterSpec",node.get("ParameterSpec"));
			str+=this.encodeNode("ParameterSpecs_Node1",node.get("ParameterSpecs_Node1"));
			return str;
			},
		},
		{
		name:"encodeParameterSpecs_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("ParameterSpec",node.get("ParameterSpec"));
			}
			return str;
			},
		},
		{
		name:"encodeParameterSpec",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ParameterName",node.get("ParameterName"));
			if(node.has("ParameterSpec_Node1")){
				str+=this.getKeyWord("IN");
			}
			if(node.has("ParameterSpec_Node2")){
				str+=this.encodeNode("TypeSpec",node.get("ParameterSpec_Node2").get("TypeSpec"));
			}
			return str;
			},
		},
		{
		name:"encodeParameterName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Identifier",node.get("Identifier"));
			return str;
			},
		},
		{
		name:"encodeCursorSpec",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("CURSOR",node.get("CURSOR"));
			str+=this.encodeNode("CursorName",node.get("CursorName"));
			str+=this.encodeNode("CursorSpec_Node2",node.get("CursorSpec_Node2"));
			str+=this.getKeyWord("RETURN",node.get("RETURN"));
			str+=this.encodeNode("ReturnType",node.get("ReturnType"));
			str+=this.getKeyWord(node.get("SEMI").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeCursorSpec_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("CursorSpec_Node1")){
				str+=this.getKeyWord(node.get("CursorSpec_Node1").get("LPAREN").getValue(),node.get("CursorSpec_Node1"));
				str+=this.encodeNode("ParameterSpecs",node.get("CursorSpec_Node1").get("ParameterSpecs"));
				str+=this.getKeyWord(node.get("CursorSpec_Node1").get("RPAREN").getValue(),node.get("CursorSpec_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeProcedureSpec",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("PROCEDURE");
			str+=this.encodeNode("ProcedureName",node.get("ProcedureName"));
			str+=this.encodeNode("ProcedureSpec_Node2",node.get("ProcedureSpec_Node2"));
			str+=this.getKeyWord(node.get("SEMI").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeProcedureSpec_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ProcedureSpec_Node1")){
				str+=this.getKeyWord(node.get("ProcedureSpec_Node1").get("LPAREN").getValue(),node.get("ProcedureSpec_Node1"));
				str+=this.encodeNode("Arguments",node.get("ProcedureSpec_Node1").get("Arguments"));
				str+=this.getKeyWord(node.get("ProcedureSpec_Node1").get("RPAREN").getValue(),node.get("ProcedureSpec_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeFunctionSpec",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("FUNCTION");
			str+=this.encodeNode("FunctionName",node.get("FunctionName"));
			str+=this.encodeNode("FunctionSpec_Node2",node.get("FunctionSpec_Node2"));
			str+=this.getKeyWord("RETURN",node.get("RETURN"));
			str+=this.encodeNode("ReturnType",node.get("ReturnType"));
			str+=this.getKeyWord(node.get("SEMI").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeFunctionSpec_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("FunctionSpec_Node1")){
				str+=this.getKeyWord(node.get("FunctionSpec_Node1").get("LPAREN").getValue(),node.get("FunctionSpec_Node1"));
				str+=this.encodeNode("Arguments",node.get("FunctionSpec_Node1").get("Arguments"));
				str+=this.getKeyWord(node.get("FunctionSpec_Node1").get("RPAREN").getValue(),node.get("FunctionSpec_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeExceptionDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExceptionName",node.get("ExceptionName"));
			str+=this.getKeyWord("EXCEPTION");
			str+=this.getKeyWord(node.get("SEMI").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeExceptionNames",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExceptionName",node.get("ExceptionName"));
			str+=this.encodeNode("ExceptionNames_Node1",node.get("ExceptionNames_Node1"));
			return str;
			},
		},
		{
		name:"encodeExceptionNames_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord("OR");
				str+=this.encodeNode("ExceptionName",node.get("ExceptionName"));
			}
			return str;
			},
		},
		{
		name:"encodeExceptionName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExceptionName_Node2",node.get("ExceptionName_Node2"));
			str+=this.encodeNode("Identifier",node.get("Identifier"));
			return str;
			},
		},
		{
		name:"encodeExceptionName_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ExceptionName_Node1")){
				str+=this.encodeNode("ExceptionPackageName",node.get("ExceptionName_Node1").get("ExceptionPackageName"));
				str+=this.getKeyWord(node.get("ExceptionName_Node1").get("DOT").getValue(),node.get("ExceptionName_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeExceptionPackageName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Identifier",node.get("Identifier"));
			return str;
			},
		},
		{
		name:"encodeRecordDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("RecordTypeDec",node.get("RecordTypeDec"));
			return str;
			},
		},
		{
		name:"encodeRecordTypeDec",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("TYPE",node.get("TYPE"));
			str+=this.encodeNode("TypeName",node.get("TypeName"));
			str+=this.getKeyWord("IS");
			str+=this.getKeyWord("RECORD",node.get("RECORD"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("FieldSpecs",node.get("FieldSpecs"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			str+=this.getKeyWord(node.get("SEMI").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeFieldSpecs",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("FieldSpec",node.get("FieldSpec"));
			str+=this.encodeNode("FieldSpecs_Node1",node.get("FieldSpecs_Node1"));
			return str;
			},
		},
		{
		name:"encodeFieldSpecs_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("FieldSpec",node.get("FieldSpec"));
			}
			return str;
			},
		},
		{
		name:"encodeFieldSpec",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ColumnName",node.get("ColumnName"));
			str+=this.encodeNode("TypeSpec",node.get("TypeSpec"));
			str+=this.encodeNode("FieldSpec_Node2",node.get("FieldSpec_Node2"));
			str+=this.encodeNode("FieldSpec_Node7",node.get("FieldSpec_Node7"));
			return str;
			},
		},
		{
		name:"encodeFieldSpec_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("FieldSpec_Node1")){
				str+=this.getKeyWord("NOT");
				str+=this.getKeyWord("NULL");
			}
			return str;
			},
		},
		{
		name:"encodeFieldSpec_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("FieldSpec_Node6")){
				str+=this.encodeNode("FieldSpec_Node5",node.get("FieldSpec_Node6").get("FieldSpec_Node5"));
				str+=this.encodeNode("PlsqlExpression",node.get("FieldSpec_Node6").get("PlsqlExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeFieldSpec_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("FieldSpec_Node4",node.get("FieldSpec_Node4"));
			return str;
			},
		},
		{
		name:"encodeFieldSpec_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ASSIGN")){
				str+=this.getKeyWord(node.get("ASSIGN").getValue(),node);
			} else if(node.has("FieldSpec_Node3")){
				str+=this.getKeyWord("DEFAULT",node.get("FieldSpec_Node3"));
			}
			return str;
			},
		},
		{
		name:"encodePlsqlTableDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("TableTypeDec",node.get("TableTypeDec"));
			return str;
			},
		},
		{
		name:"encodeTableTypeDec",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("TYPE",node.get("TYPE"));
			str+=this.encodeNode("TypeName",node.get("TypeName"));
			str+=this.getKeyWord("IS");
			str+=this.getKeyWord("TABLE");
			str+=this.getKeyWord("OF");
			str+=this.encodeNode("TypeSpec",node.get("TypeSpec"));
			str+=this.encodeNode("TableTypeDec_Node2",node.get("TableTypeDec_Node2"));
			str+=this.encodeNode("TableTypeDec_Node9",node.get("TableTypeDec_Node9"));
			str+=this.getKeyWord(node.get("SEMI").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeTableTypeDec_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("TableTypeDec_Node1")){
				str+=this.getKeyWord("NOT");
				str+=this.getKeyWord("NULL");
			}
			return str;
			},
		},
		{
		name:"encodeTableTypeDec_Node9",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("TableTypeDec_Node8")){
				str+=this.getKeyWord("INDEX");
				str+=this.getKeyWord("BY");
				str+=this.encodeNode("TableTypeDec_Node7",node.get("TableTypeDec_Node8").get("TableTypeDec_Node7"));
			}
			return str;
			},
		},
		{
		name:"encodeTableTypeDec_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("TableTypeDec_Node6",node.get("TableTypeDec_Node6"));
			return str;
			},
		},
		{
		name:"encodeTableTypeDec_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("TableTypeDec_Node3")){
				str+=this.getKeyWord("BINARY_INTEGER",node.get("TableTypeDec_Node3"));
			} else if(node.has("TableTypeDec_Node4")){
				str+=this.getKeyWord("PLS_INTEGER",node.get("TableTypeDec_Node4"));
			} else if(node.has("TableTypeDec_Node5")){
				str+=this.encodeNode("TableTypeDec_Node5",node.get("TableTypeDec_Node5"));
			}
			return str;
			},
		},
		{
		name:"encodeTableTypeDec_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("VARCHAR2");
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("Integer",node.get("Integer"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeTableVarDec",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("PlsqlTableName",node.get("PlsqlTableName"));
			str+=this.encodeNode("TypeName",node.get("TypeName"));
			str+=this.getKeyWord(node.get("SEMI").getValue(),node);
			return str;
			},
		},
		{
		name:"encodePlsqlTableName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Identifier",node.get("Identifier"));
			str+=this.encodeNode("PlsqlTableName_Node1",node.get("PlsqlTableName_Node1"));
			return str;
			},
		},
		{
		name:"encodePlsqlTableName_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("DOT").getValue(),node);
				str+=this.encodeNode("Identifier",node.get("Identifier"));
			}
			return str;
			},
		},
		{
		name:"encodeVarrayDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("TYPE",node.get("TYPE"));
			str+=this.encodeNode("TypeName",node.get("TypeName"));
			str+=this.getKeyWord("IS");
			str+=this.encodeNode("VarrayDeclaration_Node3",node.get("VarrayDeclaration_Node3"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("Integer",node.get("Integer"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			str+=this.getKeyWord("OF");
			str+=this.encodeNode("TypeSpec",node.get("TypeSpec"));
			str+=this.encodeNode("VarrayDeclaration_Node5",node.get("VarrayDeclaration_Node5"));
			return str;
			},
		},
		{
		name:"encodeVarrayDeclaration_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("VarrayDeclaration_Node2",node.get("VarrayDeclaration_Node2"));
			return str;
			},
		},
		{
		name:"encodeVarrayDeclaration_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("VARRAY")){
				str+=this.getKeyWord("VARRAY",node.get("VARRAY"));
			} else if(node.has("VarrayDeclaration_Node1")){
				str+=this.encodeNode("VarrayDeclaration_Node1",node.get("VarrayDeclaration_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeVarrayDeclaration_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("VARYING",node.get("VARYING"));
			str+=this.getKeyWord("ARRAY",node.get("ARRAY"));
			return str;
			},
		},
		{
		name:"encodeVarrayDeclaration_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("VarrayDeclaration_Node4")){
				str+=this.getKeyWord("NOT");
				str+=this.getKeyWord("NULL");
			}
			return str;
			},
		},
		{
		name:"encodeProcedureDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ProcedureBody",node.get("ProcedureBody"));
			return str;
			},
		},
		{
		name:"encodeProcedureBody",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ProcedureBody_Node1")){
				str+=this.encodeNode("ProcFunStart",node.get("ProcedureBody_Node1").get("ProcFunStart"));
			}
			str+=this.getKeyWord("PROCEDURE");
			str+=this.encodeNode("ProcedureName",node.get("ProcedureName"));
			str+=this.encodeNode("ProcedureBody_Node4",node.get("ProcedureBody_Node4"));
			str+=this.encodeNode("ProcedureBody_Node8",node.get("ProcedureBody_Node8"));
			str+=this.encodeNode("ProcedureMainBody",node.get("ProcedureMainBody"));
			return str;
			},
		},
		{
		name:"encodeProcedureBody_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ProcedureBody_Node3")){
				str+=this.getKeyWord(node.get("ProcedureBody_Node3").get("LPAREN").getValue(),node.get("ProcedureBody_Node3"));
				str+=this.encodeNode("Argument",node.get("ProcedureBody_Node3").get("Argument"));
				str+=this.encodeNode("ProcedureBody_Node2",node.get("ProcedureBody_Node3").get("ProcedureBody_Node2"));
				str+=this.getKeyWord(node.get("ProcedureBody_Node3").get("RPAREN").getValue(),node.get("ProcedureBody_Node3"));
			}
			return str;
			},
		},
		{
		name:"encodeProcedureBody_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("Argument",node.get("Argument"));
			}
			return str;
			},
		},
		{
		name:"encodeProcedureBody_Node8",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ProcedureBody_Node7",node.get("ProcedureBody_Node7"));
			return str;
			},
		},
		{
		name:"encodeProcedureBody_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ProcedureBody_Node5")){
				str+=this.getKeyWord("IS",node.get("ProcedureBody_Node5"));
			} else if(node.has("ProcedureBody_Node6")){
				str+=this.getKeyWord("AS",node.get("ProcedureBody_Node6"));
			}
			return str;
			},
		},
		{
		name:"encodeProcedureMainBody",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("DECLARE")){
				str+=this.getKeyWord("DECLARE");
			}
			while(node.hasMoreChildren()){
				str+=this.encodeNode("DeclareSpec",node.get("DeclareSpec"));
			}
			str+=this.getKeyWord("BEGIN");
			str+=this.encodeNode("SeqOfStatements",node.get("SeqOfStatements"));
			str+=this.encodeNode("ProcedureBody_Node10",node.get("ProcedureBody_Node10"));
			str+=this.getKeyWord("END");
			if(node.has("ProcedureBody_Node11")){
				str+=this.encodeNode("ProcedureName",node.get("ProcedureBody_Node11").get("ProcedureName"));
			}
			str+=this.getKeyWord(node.get("SEMI").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeProcedureBody_Node10",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ProcedureBody_Node9")){
				str+=this.getKeyWord("EXCEPTION");
				while(node.get("ProcedureBody_Node9").hasMoreChildren()){
					str+=this.encodeNode("ExceptionHandler",node.get("ProcedureBody_Node9").get("ExceptionHandler"));
				}
			}
			return str;
			},
		},
		{
		name:"encodeBeginBlock",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("BEGIN");
			str+=this.encodeNode("SeqOfStatements",node.get("SeqOfStatements"));
			str+=this.encodeNode("BeginBlock_Node2",node.get("BeginBlock_Node2"));
			str+=this.getKeyWord("END");
			return str;
			},
		},
		{
		name:"encodeBeginBlock_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("BeginBlock_Node1")){
				str+=this.getKeyWord("EXCEPTION");
				while(node.get("BeginBlock_Node1").hasMoreChildren()){
					str+=this.encodeNode("ExceptionHandler",node.get("BeginBlock_Node1").get("ExceptionHandler"));
				}
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
			str+=this.encodeNode("ExceptionNames",node.get("ExceptionNames"));
			str+=this.getKeyWord("THEN");
			str+=this.encodeNode("SeqOfStatements",node.get("SeqOfStatements"));
			return str;
			},
		},
		{
		name:"encodeProcFunStart",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("CREATE");
			str+=this.encodeNode("ProcFunStart_Node2",node.get("ProcFunStart_Node2"));
			return str;
			},
		},
		{
		name:"encodeProcFunStart_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ProcFunStart_Node1")){
				str+=this.getKeyWord("OR");
				str+=this.getKeyWord("REPLACE",node.get("ProcFunStart_Node1").get("REPLACE"));
			}
			return str;
			},
		},
		{
		name:"encodeFunctionBody",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("FunctionBody_Node1")){
				str+=this.encodeNode("ProcFunStart",node.get("FunctionBody_Node1").get("ProcFunStart"));
			}
			str+=this.getKeyWord("FUNCTION");
			str+=this.encodeNode("FunctionName",node.get("FunctionName"));
			str+=this.encodeNode("FunctionBody_Node3",node.get("FunctionBody_Node3"));
			str+=this.getKeyWord("RETURN",node.get("RETURN"));
			str+=this.encodeNode("ReturnType",node.get("ReturnType"));
			str+=this.encodeNode("FunctionBody_Node7",node.get("FunctionBody_Node7"));
			if(node.has("DECLARE")){
				str+=this.getKeyWord("DECLARE");
			}
			while(node.hasMoreChildren()){
				str+=this.encodeNode("DeclareSpec",node.get("DeclareSpec"));
			}
			str+=this.getKeyWord("BEGIN");
			str+=this.encodeNode("SeqOfStatements",node.get("SeqOfStatements"));
			str+=this.encodeNode("FunctionBody_Node9",node.get("FunctionBody_Node9"));
			str+=this.getKeyWord("END");
			if(node.has("FunctionBody_Node10")){
				str+=this.encodeNode("FunctionName",node.get("FunctionBody_Node10").get("FunctionName"));
			}
			str+=this.getKeyWord(node.get("SEMI").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeFunctionBody_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("FunctionBody_Node2")){
				str+=this.getKeyWord(node.get("FunctionBody_Node2").get("LPAREN").getValue(),node.get("FunctionBody_Node2"));
				str+=this.encodeNode("Arguments",node.get("FunctionBody_Node2").get("Arguments"));
				str+=this.getKeyWord(node.get("FunctionBody_Node2").get("RPAREN").getValue(),node.get("FunctionBody_Node2"));
			}
			return str;
			},
		},
		{
		name:"encodeFunctionBody_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("FunctionBody_Node6",node.get("FunctionBody_Node6"));
			return str;
			},
		},
		{
		name:"encodeFunctionBody_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("FunctionBody_Node4")){
				str+=this.getKeyWord("IS",node.get("FunctionBody_Node4"));
			} else if(node.has("FunctionBody_Node5")){
				str+=this.getKeyWord("AS",node.get("FunctionBody_Node5"));
			}
			return str;
			},
		},
		{
		name:"encodeFunctionBody_Node9",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("FunctionBody_Node8")){
				str+=this.getKeyWord("EXCEPTION");
				while(node.get("FunctionBody_Node8").hasMoreChildren()){
					str+=this.encodeNode("ExceptionHandler",node.get("FunctionBody_Node8").get("ExceptionHandler"));
				}
			}
			return str;
			},
		},
		{
		name:"encodeFunctionName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("FunctionName_Node1",node.get("FunctionName_Node1"));
			return str;
			},
		},
		{
		name:"encodeFunctionName_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Identifier")){
				str+=this.encodeNode("Identifier",node.get("Identifier"));
			} else if(node.has("QuotedString")){
				str+=this.getKeyWord(node.get("QuotedString").getValue(),node.get("QuotedString"));
			}
			return str;
			},
		},
		{
		name:"encodeProcedureName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ProcedureName_Node1",node.get("ProcedureName_Node1"));
			return str;
			},
		},
		{
		name:"encodeProcedureName_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Identifier")){
				str+=this.encodeNode("Identifier",node.get("Identifier"));
			} else if(node.has("QuotedString")){
				str+=this.getKeyWord(node.get("QuotedString").getValue(),node.get("QuotedString"));
			}
			return str;
			},
		},
		{
		name:"encodeArguments",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Argument",node.get("Argument"));
			str+=this.encodeNode("Arguments_Node1",node.get("Arguments_Node1"));
			return str;
			},
		},
		{
		name:"encodeArguments_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("Argument",node.get("Argument"));
			}
			return str;
			},
		},
		{
		name:"encodeArgument",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ArgumentName",node.get("ArgumentName"));
			str+=this.encodeNode("Argument_Node5",node.get("Argument_Node5"));
			if(node.has("Argument_Node6")){
				str+=this.encodeNode("ArgumentType",node.get("Argument_Node6").get("ArgumentType"));
			}
			str+=this.encodeNode("Argument_Node11",node.get("Argument_Node11"));
			return str;
			},
		},
		{
		name:"encodeArgument_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Argument_Node4")){
				str+=this.encodeNode("Argument_Node3",node.get("Argument_Node4").get("Argument_Node3"));
			}
			return str;
			},
		},
		{
		name:"encodeArgument_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("OUT")){
				str+=this.getKeyWord("OUT",node.get("OUT"));
			} else if(node.has("Argument_Node1")){
				str+=this.encodeNode("Argument_Node1",node.get("Argument_Node1"));
			} else if(node.has("Argument_Node2")){
				str+=this.getKeyWord("IN",node.get("Argument_Node2"));
			}
			return str;
			},
		},
		{
		name:"encodeArgument_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("IN");
			str+=this.getKeyWord("OUT",node.get("OUT"));
			return str;
			},
		},
		{
		name:"encodeArgument_Node11",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Argument_Node10")){
				str+=this.encodeNode("Argument_Node9",node.get("Argument_Node10").get("Argument_Node9"));
				str+=this.encodeNode("PlsqlExpression",node.get("Argument_Node10").get("PlsqlExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeArgument_Node9",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Argument_Node8",node.get("Argument_Node8"));
			return str;
			},
		},
		{
		name:"encodeArgument_Node8",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ASSIGN")){
				str+=this.getKeyWord(node.get("ASSIGN").getValue(),node);
			} else if(node.has("Argument_Node7")){
				str+=this.getKeyWord("DEFAULT",node.get("Argument_Node7"));
			}
			return str;
			},
		},
		{
		name:"encodeArgumentName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Identifier",node.get("Identifier"));
			return str;
			},
		},
		{
		name:"encodeArgumentType",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("TypeSpec",node.get("TypeSpec"));
			return str;
			},
		},
		{
		name:"encodeValue",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Value_Node8",node.get("Value_Node8"));
			return str;
			},
		},
		{
		name:"encodeValue_Node8",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Value_Node4")){
				str+=this.encodeNode("Value_Node4",node.get("Value_Node4"));
			} else if(node.has("QuotedString")){
				str+=this.getKeyWord(node.get("QuotedString").getValue(),node.get("QuotedString"));
			} else if(node.has("Value_Node5")){
				str+=this.getKeyWord("TRUE",node.get("Value_Node5"));
			} else if(node.has("Value_Node6")){
				str+=this.getKeyWord("FALSE",node.get("Value_Node6"));
			} else if(node.has("Value_Node7")){
				str+=this.getKeyWord("NULL",node.get("Value_Node7"));
			}
			return str;
			},
		},
		{
		name:"encodeValue_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Value_Node3",node.get("Value_Node3"));
			str+=this.getKeyWord(node.get("NUMBER").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeValue_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Value_Node2")){
				str+=this.encodeNode("Value_Node1",node.get("Value_Node2").get("Value_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeValue_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PLUS")){
				str+=this.getKeyWord(node.get("PLUS").getValue(),node);
			} else if(node.has("MINUS")){
				str+=this.getKeyWord(node.get("MINUS").getValue(),node);
			}
			return str;
			},
		},
		{
		name:"encodeReturnType",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("TypeSpec",node.get("TypeSpec"));
			return str;
			},
		},
		{
		name:"encodeFunctionDeclaration",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("FunctionBody",node.get("FunctionBody"));
			return str;
			},
		},
		{
		name:"encodeFunctionCall",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("UserDefinedFunction",node.get("UserDefinedFunction"));
			str+=this.encodeNode("FunctionCall_Node3",node.get("FunctionCall_Node3"));
			return str;
			},
		},
		{
		name:"encodeFunctionCall_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("FunctionCall_Node2")){
				str+=this.getKeyWord(node.get("FunctionCall_Node2").get("LPAREN").getValue(),node.get("FunctionCall_Node2"));
				if(node.get("FunctionCall_Node2").has("FunctionCall_Node1")){
					str+=this.encodeNode("CallParameters",node.get("FunctionCall_Node2").get("FunctionCall_Node1").get("CallParameters"));
				}
				str+=this.getKeyWord(node.get("FunctionCall_Node2").get("RPAREN").getValue(),node.get("FunctionCall_Node2"));
			}
			return str;
			},
		},
		{
		name:"encodeCollectionFunctionCall",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("PlsqlTableName",node.get("PlsqlTableName"));
			return str;
			},
		},
		{
		name:"encodeVariableNames",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("VariableName",node.get("VariableName"));
			str+=this.encodeNode("VariableNames_Node1",node.get("VariableNames_Node1"));
			return str;
			},
		},
		{
		name:"encodeVariableNames_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("VariableName",node.get("VariableName"));
			}
			return str;
			},
		},
		{
		name:"encodeVariableName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Identifier",node.get("Identifier"));
			return str;
			},
		},
		{
		name:"encodeNullStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("NULL");
			return str;
			},
		},
		{
		name:"encodeRaiseStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("RAISE",node.get("RAISE"));
			if(node.has("RaiseStatement_Node1")){
				str+=this.encodeNode("ExceptionName",node.get("RaiseStatement_Node1").get("ExceptionName"));
			}
			return str;
			},
		},
		{
		name:"encodeReturnStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("RETURN",node.get("RETURN"));
			if(node.has("ReturnStatement_Node1")){
				str+=this.encodeNode("PlsqlExpression",node.get("ReturnStatement_Node1").get("PlsqlExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeLoopStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("LoopStatement_Node2",node.get("LoopStatement_Node2"));
			str+=this.encodeNode("LoopStatement_Node11",node.get("LoopStatement_Node11"));
			str+=this.getKeyWord("LOOP",node.get("LOOP"));
			str+=this.encodeNode("SeqOfStatements",node.get("SeqOfStatements"));
			str+=this.getKeyWord("END");
			str+=this.getKeyWord("LOOP",node.get("LOOP"));
			if(node.has("LoopStatement_Node12")){
				str+=this.encodeNode("LabelName",node.get("LoopStatement_Node12").get("LabelName"));
			}
			return str;
			},
		},
		{
		name:"encodeLoopStatement_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("LoopStatement_Node1")){
				str+=this.getKeyWord(node.get("LoopStatement_Node1").get("LLABEL").getValue(),node.get("LoopStatement_Node1"));
				str+=this.encodeNode("LabelName",node.get("LoopStatement_Node1").get("LabelName"));
				str+=this.getKeyWord(node.get("LoopStatement_Node1").get("RLABEL").getValue(),node.get("LoopStatement_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeLoopStatement_Node11",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("LoopStatement_Node10")){
				str+=this.encodeNode("LoopStatement_Node9",node.get("LoopStatement_Node10").get("LoopStatement_Node9"));
			}
			return str;
			},
		},
		{
		name:"encodeLoopStatement_Node9",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("LoopStatement_Node3")){
				str+=this.encodeNode("LoopStatement_Node3",node.get("LoopStatement_Node3"));
			} else if(node.has("LoopStatement_Node8")){
				str+=this.encodeNode("LoopStatement_Node8",node.get("LoopStatement_Node8"));
			}
			return str;
			},
		},
		{
		name:"encodeLoopStatement_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("WHILE",node.get("WHILE"));
			str+=this.encodeNode("PlsqlCondition",node.get("PlsqlCondition"));
			return str;
			},
		},
		{
		name:"encodeLoopStatement_Node8",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("FOR");
			str+=this.encodeNode("LoopStatement_Node7",node.get("LoopStatement_Node7"));
			return str;
			},
		},
		{
		name:"encodeLoopStatement_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("LoopStatement_Node6",node.get("LoopStatement_Node6"));
			return str;
			},
		},
		{
		name:"encodeLoopStatement_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("LoopStatement_Node4")){
				str+=this.encodeNode("LoopStatement_Node4",node.get("LoopStatement_Node4"));
			} else if(node.has("LoopStatement_Node5")){
				str+=this.encodeNode("LoopStatement_Node5",node.get("LoopStatement_Node5"));
			}
			return str;
			},
		},
		{
		name:"encodeLoopStatement_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("NumericLoopParam",node.get("NumericLoopParam"));
			return str;
			},
		},
		{
		name:"encodeLoopStatement_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("CursorLoopParam",node.get("CursorLoopParam"));
			return str;
			},
		},
		{
		name:"encodeNumericLoopParam",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("IndexName",node.get("IndexName"));
			str+=this.getKeyWord("IN");
			if(node.has("NumericLoopParam_Node1")){
				str+=this.getKeyWord("REVERSE",node.get("NumericLoopParam_Node1").get("REVERSE"));
			}
			str+=this.encodeNode("IntegerExpr",node.get("IntegerExpr"));
			str+=this.getKeyWord(node.get("DOUBLEDOT").getValue(),node);
			str+=this.encodeNode("IntegerExpr",node.get("IntegerExpr"));
			return str;
			},
		},
		{
		name:"encodeIndexName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Identifier",node.get("Identifier"));
			return str;
			},
		},
		{
		name:"encodeIntegerExpr",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			return str;
			},
		},
		{
		name:"encodeCursorName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Identifier",node.get("Identifier"));
			return str;
			},
		},
		{
		name:"encodeCursorLoopParam",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("RecordName",node.get("RecordName"));
			str+=this.getKeyWord("IN");
			str+=this.encodeNode("CursorLoopParam_Node6",node.get("CursorLoopParam_Node6"));
			return str;
			},
		},
		{
		name:"encodeCursorLoopParam_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("CursorLoopParam_Node5",node.get("CursorLoopParam_Node5"));
			return str;
			},
		},
		{
		name:"encodeCursorLoopParam_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("CursorLoopParam_Node3")){
				str+=this.encodeNode("CursorLoopParam_Node3",node.get("CursorLoopParam_Node3"));
			} else if(node.has("CursorLoopParam_Node4")){
				str+=this.encodeNode("CursorLoopParam_Node4",node.get("CursorLoopParam_Node4"));
			}
			return str;
			},
		},
		{
		name:"encodeCursorLoopParam_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("CursorName",node.get("CursorName"));
			str+=this.encodeNode("CursorLoopParam_Node2",node.get("CursorLoopParam_Node2"));
			return str;
			},
		},
		{
		name:"encodeCursorLoopParam_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("CursorLoopParam_Node1")){
				str+=this.getKeyWord(node.get("CursorLoopParam_Node1").get("LPAREN").getValue(),node.get("CursorLoopParam_Node1"));
				str+=this.encodeNode("PlsqlExpressions",node.get("CursorLoopParam_Node1").get("PlsqlExpressions"));
				str+=this.getKeyWord(node.get("CursorLoopParam_Node1").get("RPAREN").getValue(),node.get("CursorLoopParam_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeCursorLoopParam_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("SelectStatement",node.get("SelectStatement"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeRecordName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Identifier",node.get("Identifier"));
			return str;
			},
		},
		{
		name:"encodeCommitStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("COMMIT");
			return str;
			},
		},
		{
		name:"encodeIfStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("IF");
			str+=this.encodeNode("PlsqlCondition",node.get("PlsqlCondition"));
			str+=this.getKeyWord("THEN");
			str+=this.encodeNode("SeqOfStatements",node.get("SeqOfStatements"));
			str+=this.encodeNode("IfStatement_Node1",node.get("IfStatement_Node1"));
			str+=this.encodeNode("IfStatement_Node3",node.get("IfStatement_Node3"));
			str+=this.getKeyWord("END");
			str+=this.getKeyWord("IF");
			return str;
			},
		},
		{
		name:"encodeIfStatement_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord("ELSIF",node.get("ELSIF"));
				str+=this.encodeNode("PlsqlCondition",node.get("PlsqlCondition"));
				str+=this.getKeyWord("THEN");
				str+=this.encodeNode("SeqOfStatements",node.get("SeqOfStatements"));
			}
			return str;
			},
		},
		{
		name:"encodeIfStatement_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("IfStatement_Node2")){
				str+=this.getKeyWord("ELSE");
				str+=this.encodeNode("SeqOfStatements",node.get("IfStatement_Node2").get("SeqOfStatements"));
			}
			return str;
			},
		},
		{
		name:"encodeSqlStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlCommand",node.get("SqlCommand"));
			return str;
			},
		},
		{
		name:"encodeSqlCommand",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlCommand_Node1",node.get("SqlCommand_Node1"));
			return str;
			},
		},
		{
		name:"encodeSqlCommand_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ToModifyData")){
				str+=this.encodeNode("ToModifyData",node.get("ToModifyData"));
			} else if(node.has("ToControlData")){
				str+=this.encodeNode("ToControlData",node.get("ToControlData"));
			}
			return str;
			},
		},
		{
		name:"encodeToModifyData",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ToModifyData_Node1",node.get("ToModifyData_Node1"));
			return str;
			},
		},
		{
		name:"encodeToModifyData_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SelectCommand")){
				str+=this.encodeNode("SelectCommand",node.get("SelectCommand"));
			} else if(node.has("InsertCommand")){
				str+=this.encodeNode("InsertCommand",node.get("InsertCommand"));
			} else if(node.has("UpdateCommand")){
				str+=this.encodeNode("UpdateCommand",node.get("UpdateCommand"));
			} else if(node.has("DeleteCommand")){
				str+=this.encodeNode("DeleteCommand",node.get("DeleteCommand"));
			} else if(node.has("SetTransactionCommand")){
				str+=this.encodeNode("SetTransactionCommand",node.get("SetTransactionCommand"));
			}
			return str;
			},
		},
		{
		name:"encodeToControlData",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ToControlData_Node1",node.get("ToControlData_Node1"));
			return str;
			},
		},
		{
		name:"encodeToControlData_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("CloseStatement")){
				str+=this.encodeNode("CloseStatement",node.get("CloseStatement"));
			} else if(node.has("CommitStatement")){
				str+=this.encodeNode("CommitStatement",node.get("CommitStatement"));
			} else if(node.has("FetchStatement")){
				str+=this.encodeNode("FetchStatement",node.get("FetchStatement"));
			} else if(node.has("LockTableStatement")){
				str+=this.encodeNode("LockTableStatement",node.get("LockTableStatement"));
			} else if(node.has("OpenStatement")){
				str+=this.encodeNode("OpenStatement",node.get("OpenStatement"));
			} else if(node.has("RollbackStatement")){
				str+=this.encodeNode("RollbackStatement",node.get("RollbackStatement"));
			} else if(node.has("SavepointStatement")){
				str+=this.encodeNode("SavepointStatement",node.get("SavepointStatement"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectCommand",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SelectStatement",node.get("SelectStatement"));
			return str;
			},
		},
		{
		name:"encodeSelectStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SelectExpression",node.get("SelectExpression"));
			return str;
			},
		},
		{
		name:"encodeSelectExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("SELECT");
			str+=this.encodeNode("SelectExpression_Node6",node.get("SelectExpression_Node6"));
			str+=this.encodeNode("SelectList",node.get("SelectList"));
			str+=this.encodeNode("SelectExpression_Node8",node.get("SelectExpression_Node8"));
			str+=this.encodeNode("SelectExpression_Node10",node.get("SelectExpression_Node10"));
			str+=this.getKeyWord("FROM");
			str+=this.encodeNode("SelectExpression_Node13",node.get("SelectExpression_Node13"));
			if(node.has("SelectExpression_Node14")){
				str+=this.encodeNode("WhereClause",node.get("SelectExpression_Node14").get("WhereClause"));
			}
			if(node.has("SelectExpression_Node15")){
				str+=this.encodeNode("HierarchicalQueryClause",node.get("SelectExpression_Node15").get("HierarchicalQueryClause"));
			}
			if(node.has("SelectExpression_Node16")){
				str+=this.encodeNode("GroupByClause",node.get("SelectExpression_Node16").get("GroupByClause"));
			}
			str+=this.encodeNode("SelectExpression_Node18",node.get("SelectExpression_Node18"));
			if(node.has("SelectExpression_Node19")){
				str+=this.encodeNode("ModelClause",node.get("SelectExpression_Node19").get("ModelClause"));
			}
			str+=this.encodeNode("SelectExpression_Node29",node.get("SelectExpression_Node29"));
			if(node.has("SelectExpression_Node30")){
				str+=this.encodeNode("OrderByClause",node.get("SelectExpression_Node30").get("OrderByClause"));
			}
			if(node.has("SelectExpression_Node31")){
				str+=this.encodeNode("ForUpdateClause",node.get("SelectExpression_Node31").get("ForUpdateClause"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectExpression_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SelectExpression_Node5")){
				str+=this.encodeNode("SelectExpression_Node4",node.get("SelectExpression_Node5").get("SelectExpression_Node4"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectExpression_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SelectExpression_Node1")){
				str+=this.getKeyWord("DISTINCT",node.get("SelectExpression_Node1"));
			} else if(node.has("SelectExpression_Node2")){
				str+=this.getKeyWord("UNIQUE",node.get("SelectExpression_Node2"));
			} else if(node.has("SelectExpression_Node3")){
				str+=this.getKeyWord("ALL",node.get("SelectExpression_Node3"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectExpression_Node8",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SelectExpression_Node7")){
				str+=this.getKeyWord("BULK",node.get("SelectExpression_Node7").get("BULK"));
				str+=this.getKeyWord("COLLECT",node.get("SelectExpression_Node7").get("COLLECT"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectExpression_Node10",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SelectExpression_Node9")){
				str+=this.getKeyWord("INTO");
				str+=this.encodeNode("Lvalues",node.get("SelectExpression_Node9").get("Lvalues"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectExpression_Node13",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SelectExpression_Node12",node.get("SelectExpression_Node12"));
			return str;
			},
		},
		{
		name:"encodeSelectExpression_Node12",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("JoinClause")){
				str+=this.encodeNode("JoinClause",node.get("JoinClause"));
			} else if(node.has("TableReferenceList")){
				str+=this.encodeNode("TableReferenceList",node.get("TableReferenceList"));
			} else if(node.has("SelectExpression_Node11")){
				str+=this.encodeNode("SelectExpression_Node11",node.get("SelectExpression_Node11"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectExpression_Node11",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("JoinClause",node.get("JoinClause"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeSelectExpression_Node18",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SelectExpression_Node17")){
				str+=this.getKeyWord("HAVING",node.get("SelectExpression_Node17").get("HAVING"));
				str+=this.encodeNode("SqlCondition",node.get("SelectExpression_Node17").get("SqlCondition"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectExpression_Node29",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SelectExpression_Node28")){
				str+=this.encodeNode("SelectExpression_Node25",node.get("SelectExpression_Node28").get("SelectExpression_Node25"));
				str+=this.encodeNode("SelectExpression_Node27",node.get("SelectExpression_Node28").get("SelectExpression_Node27"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectExpression_Node25",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SelectExpression_Node24",node.get("SelectExpression_Node24"));
			return str;
			},
		},
		{
		name:"encodeSelectExpression_Node24",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SelectExpression_Node21")){
				str+=this.encodeNode("SelectExpression_Node21",node.get("SelectExpression_Node21"));
			} else if(node.has("SelectExpression_Node22")){
				str+=this.getKeyWord("INTERSECT",node.get("SelectExpression_Node22"));
			} else if(node.has("SelectExpression_Node23")){
				str+=this.getKeyWord("MINUS",node.get("SelectExpression_Node23"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectExpression_Node21",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("UNION");
			if(node.has("SelectExpression_Node20")){
				str+=this.getKeyWord("ALL");
			}
			return str;
			},
		},
		{
		name:"encodeSelectExpression_Node27",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SelectExpression_Node26",node.get("SelectExpression_Node26"));
			return str;
			},
		},
		{
		name:"encodeSelectExpression_Node26",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SelectExpression")){
				str+=this.encodeNode("SelectExpression",node.get("SelectExpression"));
			} else if(node.has("Subquery")){
				str+=this.encodeNode("Subquery",node.get("Subquery"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectList",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SelectList_Node3",node.get("SelectList_Node3"));
			return str;
			},
		},
		{
		name:"encodeSelectList_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ASTERISK")){
				str+=this.getKeyWord(node.get("ASTERISK").getValue(),node);
			} else if(node.has("SelectList_Node2")){
				str+=this.encodeNode("SelectList_Node2",node.get("SelectList_Node2"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectList_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("DisplayedColumn",node.get("DisplayedColumn"));
			str+=this.encodeNode("SelectList_Node1",node.get("SelectList_Node1"));
			return str;
			},
		},
		{
		name:"encodeSelectList_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("DisplayedColumn",node.get("DisplayedColumn"));
			}
			return str;
			},
		},
		{
		name:"encodeTableReferenceListFrom",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("FROM");
			str+=this.encodeNode("TableReferenceList",node.get("TableReferenceList"));
			return str;
			},
		},
		{
		name:"encodeTableReferenceList",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SelectedTable",node.get("SelectedTable"));
			str+=this.encodeNode("TableReferenceList_Node1",node.get("TableReferenceList_Node1"));
			return str;
			},
		},
		{
		name:"encodeTableReferenceList_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("SelectedTable",node.get("SelectedTable"));
			}
			return str;
			},
		},
		{
		name:"encodeJoinClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("TableName",node.get("TableName"));
			str+=this.encodeNode("JoinClause_Node2",node.get("JoinClause_Node2"));
			return str;
			},
		},
		{
		name:"encodeJoinClause_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.encodeNode("JoinClause_Node1",node.get("JoinClause_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeJoinClause_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("InnerCrossJoinClause")){
				str+=this.encodeNode("InnerCrossJoinClause",node.get("InnerCrossJoinClause"));
			} else if(node.has("OuterJoinClause")){
				str+=this.encodeNode("OuterJoinClause",node.get("OuterJoinClause"));
			}
			return str;
			},
		},
		{
		name:"encodeInnerCrossJoinClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("InnerCrossJoinClause_Node11",node.get("InnerCrossJoinClause_Node11"));
			return str;
			},
		},
		{
		name:"encodeInnerCrossJoinClause_Node11",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("InnerCrossJoinClause_Node6")){
				str+=this.encodeNode("InnerCrossJoinClause_Node6",node.get("InnerCrossJoinClause_Node6"));
			} else if(node.has("InnerCrossJoinClause_Node10")){
				str+=this.encodeNode("InnerCrossJoinClause_Node10",node.get("InnerCrossJoinClause_Node10"));
			}
			return str;
			},
		},
		{
		name:"encodeInnerCrossJoinClause_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("InnerCrossJoinClause_Node1")){
				str+=this.getKeyWord("INNER",node.get("InnerCrossJoinClause_Node1").get("INNER"));
			}
			str+=this.getKeyWord("JOIN",node.get("JOIN"));
			str+=this.encodeNode("TableName",node.get("TableName"));
			str+=this.encodeNode("InnerCrossJoinClause_Node5",node.get("InnerCrossJoinClause_Node5"));
			return str;
			},
		},
		{
		name:"encodeInnerCrossJoinClause_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("InnerCrossJoinClause_Node4",node.get("InnerCrossJoinClause_Node4"));
			return str;
			},
		},
		{
		name:"encodeInnerCrossJoinClause_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("InnerCrossJoinClause_Node2")){
				str+=this.encodeNode("InnerCrossJoinClause_Node2",node.get("InnerCrossJoinClause_Node2"));
			} else if(node.has("InnerCrossJoinClause_Node3")){
				str+=this.encodeNode("InnerCrossJoinClause_Node3",node.get("InnerCrossJoinClause_Node3"));
			}
			return str;
			},
		},
		{
		name:"encodeInnerCrossJoinClause_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("ON");
			str+=this.encodeNode("SqlCondition",node.get("SqlCondition"));
			return str;
			},
		},
		{
		name:"encodeInnerCrossJoinClause_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("USING",node.get("USING"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("ColumnSpecs",node.get("ColumnSpecs"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeInnerCrossJoinClause_Node10",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("InnerCrossJoinClause_Node9",node.get("InnerCrossJoinClause_Node9"));
			str+=this.getKeyWord("JOIN",node.get("JOIN"));
			str+=this.encodeNode("TableName",node.get("TableName"));
			return str;
			},
		},
		{
		name:"encodeInnerCrossJoinClause_Node9",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("InnerCrossJoinClause_Node8",node.get("InnerCrossJoinClause_Node8"));
			return str;
			},
		},
		{
		name:"encodeInnerCrossJoinClause_Node8",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("CROSS")){
				str+=this.getKeyWord("CROSS",node.get("CROSS"));
			} else if(node.has("InnerCrossJoinClause_Node7")){
				str+=this.encodeNode("InnerCrossJoinClause_Node7",node.get("InnerCrossJoinClause_Node7"));
			}
			return str;
			},
		},
		{
		name:"encodeInnerCrossJoinClause_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("NATURAL",node.get("NATURAL"));
			str+=this.getKeyWord("INNER",node.get("INNER"));
			return str;
			},
		},
		{
		name:"encodeOuterJoinClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("OuterJoinClause_Node1")){
				str+=this.encodeNode("QueryPartitionClause",node.get("OuterJoinClause_Node1").get("QueryPartitionClause"));
			}
			str+=this.encodeNode("OuterJoinClause_Node6",node.get("OuterJoinClause_Node6"));
			str+=this.encodeNode("TableName",node.get("TableName"));
			if(node.has("OuterJoinClause_Node7")){
				str+=this.encodeNode("QueryPartitionClause",node.get("OuterJoinClause_Node7").get("QueryPartitionClause"));
			}
			str+=this.encodeNode("OuterJoinClause_Node12",node.get("OuterJoinClause_Node12"));
			return str;
			},
		},
		{
		name:"encodeOuterJoinClause_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("OuterJoinClause_Node5",node.get("OuterJoinClause_Node5"));
			return str;
			},
		},
		{
		name:"encodeOuterJoinClause_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("OuterJoinClause_Node2")){
				str+=this.encodeNode("OuterJoinClause_Node2",node.get("OuterJoinClause_Node2"));
			} else if(node.has("OuterJoinClause_Node4")){
				str+=this.encodeNode("OuterJoinClause_Node4",node.get("OuterJoinClause_Node4"));
			}
			return str;
			},
		},
		{
		name:"encodeOuterJoinClause_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("OuterJoinType",node.get("OuterJoinType"));
			str+=this.getKeyWord("JOIN",node.get("JOIN"));
			return str;
			},
		},
		{
		name:"encodeOuterJoinClause_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("NATURAL",node.get("NATURAL"));
			if(node.has("OuterJoinClause_Node3")){
				str+=this.encodeNode("OuterJoinType",node.get("OuterJoinClause_Node3").get("OuterJoinType"));
			}
			str+=this.getKeyWord("JOIN",node.get("JOIN"));
			return str;
			},
		},
		{
		name:"encodeOuterJoinClause_Node12",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("OuterJoinClause_Node11")){
				str+=this.encodeNode("OuterJoinClause_Node10",node.get("OuterJoinClause_Node11").get("OuterJoinClause_Node10"));
			}
			return str;
			},
		},
		{
		name:"encodeOuterJoinClause_Node10",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("OuterJoinClause_Node8")){
				str+=this.encodeNode("OuterJoinClause_Node8",node.get("OuterJoinClause_Node8"));
			} else if(node.has("OuterJoinClause_Node9")){
				str+=this.encodeNode("OuterJoinClause_Node9",node.get("OuterJoinClause_Node9"));
			}
			return str;
			},
		},
		{
		name:"encodeOuterJoinClause_Node8",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("ON");
			str+=this.encodeNode("SqlCondition",node.get("SqlCondition"));
			return str;
			},
		},
		{
		name:"encodeOuterJoinClause_Node9",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("USING",node.get("USING"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("ColumnSpecs",node.get("ColumnSpecs"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeQueryPartitionClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("PARTITION",node.get("PARTITION"));
			str+=this.getKeyWord("BY");
			str+=this.encodeNode("ExpressionList",node.get("ExpressionList"));
			return str;
			},
		},
		{
		name:"encodeOuterJoinType",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("OuterJoinType_Node2",node.get("OuterJoinType_Node2"));
			if(node.has("OuterJoinType_Node3")){
				str+=this.getKeyWord("OUTER",node.get("OuterJoinType_Node3").get("OUTER"));
			}
			return str;
			},
		},
		{
		name:"encodeOuterJoinType_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("OuterJoinType_Node1",node.get("OuterJoinType_Node1"));
			return str;
			},
		},
		{
		name:"encodeOuterJoinType_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("FULL")){
				str+=this.getKeyWord("FULL",node.get("FULL"));
			} else if(node.has("LEFT")){
				str+=this.getKeyWord("LEFT",node.get("LEFT"));
			} else if(node.has("RIGHT")){
				str+=this.getKeyWord("RIGHT",node.get("RIGHT"));
			}
			return str;
			},
		},
		{
		name:"encodeOuterJoinSign",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.getKeyWord(node.get("PLUS").getValue(),node);
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeWhereClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("WHERE");
			str+=this.encodeNode("SqlCondition",node.get("SqlCondition"));
			return str;
			},
		},
		{
		name:"encodeHierarchicalQueryClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("HierarchicalQueryClause_Node2",node.get("HierarchicalQueryClause_Node2"));
			str+=this.getKeyWord("CONNECT");
			str+=this.getKeyWord("BY");
			if(node.has("HierarchicalQueryClause_Node3")){
				str+=this.getKeyWord("NOCYCLE",node.get("HierarchicalQueryClause_Node3").get("NOCYCLE"));
			}
			str+=this.encodeNode("SqlCondition",node.get("SqlCondition"));
			return str;
			},
		},
		{
		name:"encodeHierarchicalQueryClause_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("HierarchicalQueryClause_Node1")){
				str+=this.getKeyWord("START");
				str+=this.getKeyWord("WITH");
				str+=this.encodeNode("SqlCondition",node.get("HierarchicalQueryClause_Node1").get("SqlCondition"));
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
			str+=this.encodeNode("GroupByExprs",node.get("GroupByExprs"));
			return str;
			},
		},
		{
		name:"encodeGroupByExprs",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("GroupByExpr",node.get("GroupByExpr"));
			str+=this.encodeNode("GroupByExprs_Node1",node.get("GroupByExprs_Node1"));
			return str;
			},
		},
		{
		name:"encodeGroupByExprs_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("GroupByExpr",node.get("GroupByExpr"));
			}
			return str;
			},
		},
		{
		name:"encodeGroupByExpr",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("GroupByExpr_Node1",node.get("GroupByExpr_Node1"));
			return str;
			},
		},
		{
		name:"encodeGroupByExpr_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("RollupCubeClause")){
				str+=this.encodeNode("RollupCubeClause",node.get("RollupCubeClause"));
			} else if(node.has("GroupingSetsClause")){
				str+=this.encodeNode("GroupingSetsClause",node.get("GroupingSetsClause"));
			} else if(node.has("GroupingExpressionList")){
				str+=this.encodeNode("GroupingExpressionList",node.get("GroupingExpressionList"));
			}
			return str;
			},
		},
		{
		name:"encodeRollupCubeClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("RollupCubeClause_Node2",node.get("RollupCubeClause_Node2"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("GroupingExpressionList",node.get("GroupingExpressionList"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeRollupCubeClause_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("RollupCubeClause_Node1",node.get("RollupCubeClause_Node1"));
			return str;
			},
		},
		{
		name:"encodeRollupCubeClause_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ROLLUP")){
				str+=this.getKeyWord("ROLLUP",node.get("ROLLUP"));
			} else if(node.has("CUBE")){
				str+=this.getKeyWord("CUBE",node.get("CUBE"));
			}
			return str;
			},
		},
		{
		name:"encodeGroupingSetsClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("GROUPING",node.get("GROUPING"));
			str+=this.getKeyWord("SETS",node.get("SETS"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("GroupingExpressionList",node.get("GroupingExpressionList"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeGroupingSetsExprs",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("GroupingSetsExpr",node.get("GroupingSetsExpr"));
			str+=this.encodeNode("GroupingSetsExprs_Node1",node.get("GroupingSetsExprs_Node1"));
			return str;
			},
		},
		{
		name:"encodeGroupingSetsExprs_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("GroupingSetsExpr",node.get("GroupingSetsExpr"));
			}
			return str;
			},
		},
		{
		name:"encodeGroupingSetsExpr",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("GroupingSetsExpr_Node1",node.get("GroupingSetsExpr_Node1"));
			return str;
			},
		},
		{
		name:"encodeGroupingSetsExpr_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("RollupCubeClause")){
				str+=this.encodeNode("RollupCubeClause",node.get("RollupCubeClause"));
			} else if(node.has("GroupingExpressionList")){
				str+=this.encodeNode("GroupingExpressionList",node.get("GroupingExpressionList"));
			}
			return str;
			},
		},
		{
		name:"encodeModelClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("MODEL",node.get("MODEL"));
			str+=this.encodeNode("CellReferenceOptions",node.get("CellReferenceOptions"));
			if(node.has("ModelClause_Node1")){
				str+=this.encodeNode("ReturnRowsClause",node.get("ModelClause_Node1").get("ReturnRowsClause"));
			}
			while(node.hasMoreChildren()){
				str+=this.encodeNode("ReferenceModel",node.get("ReferenceModel"));
			}
			str+=this.encodeNode("MainModel",node.get("MainModel"));
			return str;
			},
		},
		{
		name:"encodeCellReferenceOptions",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("CellReferenceOptions_Node4",node.get("CellReferenceOptions_Node4"));
			str+=this.encodeNode("CellReferenceOptions_Node9",node.get("CellReferenceOptions_Node9"));
			return str;
			},
		},
		{
		name:"encodeCellReferenceOptions_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("CellReferenceOptions_Node3")){
				str+=this.encodeNode("CellReferenceOptions_Node2",node.get("CellReferenceOptions_Node3").get("CellReferenceOptions_Node2"));
				str+=this.getKeyWord("NAV",node.get("CellReferenceOptions_Node3").get("NAV"));
			}
			return str;
			},
		},
		{
		name:"encodeCellReferenceOptions_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("CellReferenceOptions_Node1",node.get("CellReferenceOptions_Node1"));
			return str;
			},
		},
		{
		name:"encodeCellReferenceOptions_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("IGNORE")){
				str+=this.getKeyWord("IGNORE",node.get("IGNORE"));
			} else if(node.has("KEEP")){
				str+=this.getKeyWord("KEEP",node.get("KEEP"));
			}
			return str;
			},
		},
		{
		name:"encodeCellReferenceOptions_Node9",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("CellReferenceOptions_Node8")){
				str+=this.getKeyWord("UNIQUE");
				str+=this.encodeNode("CellReferenceOptions_Node7",node.get("CellReferenceOptions_Node8").get("CellReferenceOptions_Node7"));
			}
			return str;
			},
		},
		{
		name:"encodeCellReferenceOptions_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("CellReferenceOptions_Node6",node.get("CellReferenceOptions_Node6"));
			return str;
			},
		},
		{
		name:"encodeCellReferenceOptions_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("DIMENSION")){
				str+=this.getKeyWord("DIMENSION",node.get("DIMENSION"));
			} else if(node.has("CellReferenceOptions_Node5")){
				str+=this.encodeNode("CellReferenceOptions_Node5",node.get("CellReferenceOptions_Node5"));
			}
			return str;
			},
		},
		{
		name:"encodeCellReferenceOptions_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("SINGLE",node.get("SINGLE"));
			str+=this.getKeyWord("REFERENCE",node.get("REFERENCE"));
			return str;
			},
		},
		{
		name:"encodeReturnRowsClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("RETURN",node.get("RETURN"));
			str+=this.encodeNode("ReturnRowsClause_Node3",node.get("ReturnRowsClause_Node3"));
			str+=this.getKeyWord("ROWS");
			return str;
			},
		},
		{
		name:"encodeReturnRowsClause_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ReturnRowsClause_Node2",node.get("ReturnRowsClause_Node2"));
			return str;
			},
		},
		{
		name:"encodeReturnRowsClause_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("UPDATED")){
				str+=this.getKeyWord("UPDATED",node.get("UPDATED"));
			} else if(node.has("ReturnRowsClause_Node1")){
				str+=this.getKeyWord("ALL",node.get("ReturnRowsClause_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeReferenceModel",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("REFERENCE",node.get("REFERENCE"));
			str+=this.encodeNode("ReferenceModelName",node.get("ReferenceModelName"));
			str+=this.getKeyWord("ON");
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("Subquery",node.get("Subquery"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			str+=this.encodeNode("ModelColumnClauses",node.get("ModelColumnClauses"));
			str+=this.encodeNode("CellReferenceOptions",node.get("CellReferenceOptions"));
			return str;
			},
		},
		{
		name:"encodeReferenceModelName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Identifier",node.get("Identifier"));
			return str;
			},
		},
		{
		name:"encodeMainModel",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("MainModel_Node2",node.get("MainModel_Node2"));
			str+=this.encodeNode("ModelColumnClauses",node.get("ModelColumnClauses"));
			str+=this.encodeNode("CellReferenceOptions",node.get("CellReferenceOptions"));
			str+=this.encodeNode("ModelRulesClause",node.get("ModelRulesClause"));
			return str;
			},
		},
		{
		name:"encodeMainModel_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("MainModel_Node1")){
				str+=this.getKeyWord("MAIN",node.get("MainModel_Node1").get("MAIN"));
				str+=this.encodeNode("MainModelName",node.get("MainModel_Node1").get("MainModelName"));
			}
			return str;
			},
		},
		{
		name:"encodeMainModelName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Identifier",node.get("Identifier"));
			return str;
			},
		},
		{
		name:"encodeModelColumnClauses",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ModelColumnClauses_Node3",node.get("ModelColumnClauses_Node3"));
			str+=this.getKeyWord("DIMENSION",node.get("DIMENSION"));
			str+=this.getKeyWord("BY");
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("ModelColumns",node.get("ModelColumns"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			str+=this.getKeyWord("MEASURES",node.get("MEASURES"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("ModelColumns",node.get("ModelColumns"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeModelColumnClauses_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ModelColumnClauses_Node2")){
				str+=this.encodeNode("QueryPartitionClause",node.get("ModelColumnClauses_Node2").get("QueryPartitionClause"));
				if(node.get("ModelColumnClauses_Node2").has("ModelColumnClauses_Node1")){
					str+=this.encodeNode("ColumnSpec",node.get("ModelColumnClauses_Node2").get("ModelColumnClauses_Node1").get("ColumnSpec"));
				}
			}
			return str;
			},
		},
		{
		name:"encodeModelColumns",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ModelColumn",node.get("ModelColumn"));
			str+=this.encodeNode("ModelColumns_Node1",node.get("ModelColumns_Node1"));
			return str;
			},
		},
		{
		name:"encodeModelColumns_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("ModelColumn",node.get("ModelColumn"));
			}
			return str;
			},
		},
		{
		name:"encodeModelColumn",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			str+=this.encodeNode("ModelColumn_Node3",node.get("ModelColumn_Node3"));
			return str;
			},
		},
		{
		name:"encodeModelColumn_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ModelColumn_Node2")){
				if(node.get("ModelColumn_Node2").has("ModelColumn_Node1")){
					str+=this.getKeyWord("AS");
				}
				str+=this.encodeNode("ColumnSpec",node.get("ModelColumn_Node2").get("ColumnSpec"));
			}
			return str;
			},
		},
		{
		name:"encodeModelRulesClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ModelRulesClause_Node12",node.get("ModelRulesClause_Node12"));
			str+=this.encodeNode("ModelRulesClause_Node16",node.get("ModelRulesClause_Node16"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("ModelRulesExprs",node.get("ModelRulesExprs"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeModelRulesClause_Node12",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ModelRulesClause_Node11")){
				str+=this.getKeyWord("RULES",node.get("ModelRulesClause_Node11").get("RULES"));
				str+=this.encodeNode("ModelRulesClause_Node6",node.get("ModelRulesClause_Node11").get("ModelRulesClause_Node6"));
				str+=this.encodeNode("ModelRulesClause_Node10",node.get("ModelRulesClause_Node11").get("ModelRulesClause_Node10"));
			}
			return str;
			},
		},
		{
		name:"encodeModelRulesClause_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ModelRulesClause_Node5")){
				str+=this.encodeNode("ModelRulesClause_Node4",node.get("ModelRulesClause_Node5").get("ModelRulesClause_Node4"));
			}
			return str;
			},
		},
		{
		name:"encodeModelRulesClause_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ModelRulesClause_Node1")){
				str+=this.getKeyWord("UPDATE",node.get("ModelRulesClause_Node1"));
			} else if(node.has("ModelRulesClause_Node3")){
				str+=this.encodeNode("ModelRulesClause_Node3",node.get("ModelRulesClause_Node3"));
			}
			return str;
			},
		},
		{
		name:"encodeModelRulesClause_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("UPSERT",node.get("UPSERT"));
			if(node.has("ModelRulesClause_Node2")){
				str+=this.getKeyWord("ALL");
			}
			return str;
			},
		},
		{
		name:"encodeModelRulesClause_Node10",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ModelRulesClause_Node9")){
				str+=this.encodeNode("ModelRulesClause_Node8",node.get("ModelRulesClause_Node9").get("ModelRulesClause_Node8"));
				str+=this.getKeyWord("ORDER");
			}
			return str;
			},
		},
		{
		name:"encodeModelRulesClause_Node8",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ModelRulesClause_Node7",node.get("ModelRulesClause_Node7"));
			return str;
			},
		},
		{
		name:"encodeModelRulesClause_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("AUTOMATIC")){
				str+=this.getKeyWord("AUTOMATIC",node.get("AUTOMATIC"));
			} else if(node.has("SEQUENTIAL")){
				str+=this.getKeyWord("SEQUENTIAL",node.get("SEQUENTIAL"));
			}
			return str;
			},
		},
		{
		name:"encodeModelRulesClause_Node16",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ModelRulesClause_Node15")){
				str+=this.getKeyWord("ITERATE",node.get("ModelRulesClause_Node15").get("ITERATE"));
				str+=this.getKeyWord(node.get("ModelRulesClause_Node15").get("LPAREN").getValue(),node.get("ModelRulesClause_Node15"));
				str+=this.getKeyWord(node.get("ModelRulesClause_Node15").get("NUMBER").getValue(),node.get("ModelRulesClause_Node15"));
				str+=this.getKeyWord(node.get("ModelRulesClause_Node15").get("RPAREN").getValue(),node.get("ModelRulesClause_Node15"));
				str+=this.encodeNode("ModelRulesClause_Node14",node.get("ModelRulesClause_Node15").get("ModelRulesClause_Node14"));
			}
			return str;
			},
		},
		{
		name:"encodeModelRulesClause_Node14",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ModelRulesClause_Node13")){
				str+=this.getKeyWord("UNTIL",node.get("ModelRulesClause_Node13").get("UNTIL"));
				str+=this.getKeyWord(node.get("ModelRulesClause_Node13").get("LPAREN").getValue(),node.get("ModelRulesClause_Node13"));
				str+=this.encodeNode("SqlCondition",node.get("ModelRulesClause_Node13").get("SqlCondition"));
				str+=this.getKeyWord(node.get("ModelRulesClause_Node13").get("RPAREN").getValue(),node.get("ModelRulesClause_Node13"));
			}
			return str;
			},
		},
		{
		name:"encodeModelRulesExprs",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ModelRulesExpr",node.get("ModelRulesExpr"));
			str+=this.encodeNode("ModelRulesExprs_Node1",node.get("ModelRulesExprs_Node1"));
			return str;
			},
		},
		{
		name:"encodeModelRulesExprs_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("ModelRulesExpr",node.get("ModelRulesExpr"));
			}
			return str;
			},
		},
		{
		name:"encodeModelRulesExpr",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ModelRulesExpr_Node6",node.get("ModelRulesExpr_Node6"));
			str+=this.encodeNode("CellAssignment",node.get("CellAssignment"));
			if(node.has("ModelRulesExpr_Node7")){
				str+=this.encodeNode("OrderByClause",node.get("ModelRulesExpr_Node7").get("OrderByClause"));
			}
			str+=this.getKeyWord(node.get("EQ").getValue(),node);
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			return str;
			},
		},
		{
		name:"encodeModelRulesExpr_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ModelRulesExpr_Node5")){
				str+=this.encodeNode("ModelRulesExpr_Node4",node.get("ModelRulesExpr_Node5").get("ModelRulesExpr_Node4"));
			}
			return str;
			},
		},
		{
		name:"encodeModelRulesExpr_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ModelRulesExpr_Node1")){
				str+=this.getKeyWord("UPDATE",node.get("ModelRulesExpr_Node1"));
			} else if(node.has("ModelRulesExpr_Node3")){
				str+=this.encodeNode("ModelRulesExpr_Node3",node.get("ModelRulesExpr_Node3"));
			}
			return str;
			},
		},
		{
		name:"encodeModelRulesExpr_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("UPSERT",node.get("UPSERT"));
			if(node.has("ModelRulesExpr_Node2")){
				str+=this.getKeyWord("ALL");
			}
			return str;
			},
		},
		{
		name:"encodeCellAssignment",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("MeasureColumn",node.get("MeasureColumn"));
			str+=this.getKeyWord(node.get("LBRACK").getValue(),node);
			str+=this.encodeNode("CellAssignment_Node2",node.get("CellAssignment_Node2"));
			str+=this.getKeyWord(node.get("RBRACK").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeCellAssignment_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("CellAssignment_Node1",node.get("CellAssignment_Node1"));
			return str;
			},
		},
		{
		name:"encodeCellAssignment_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("MultiColumnForLoop")){
				str+=this.encodeNode("MultiColumnForLoop",node.get("MultiColumnForLoop"));
			} else if(node.has("CellAssignmentExprs")){
				str+=this.encodeNode("CellAssignmentExprs",node.get("CellAssignmentExprs"));
			}
			return str;
			},
		},
		{
		name:"encodeCellAssignmentExprs",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("CellAssignmentExpr",node.get("CellAssignmentExpr"));
			str+=this.encodeNode("CellAssignmentExprs_Node1",node.get("CellAssignmentExprs_Node1"));
			return str;
			},
		},
		{
		name:"encodeCellAssignmentExprs_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("CellAssignmentExpr",node.get("CellAssignmentExpr"));
			}
			return str;
			},
		},
		{
		name:"encodeCellAssignmentExpr",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("CellAssignmentExpr_Node1",node.get("CellAssignmentExpr_Node1"));
			return str;
			},
		},
		{
		name:"encodeCellAssignmentExpr_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SqlCondition")){
				str+=this.encodeNode("SqlCondition",node.get("SqlCondition"));
			} else if(node.has("SqlExpression")){
				str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			} else if(node.has("SingleColumnForLoop")){
				str+=this.encodeNode("SingleColumnForLoop",node.get("SingleColumnForLoop"));
			}
			return str;
			},
		},
		{
		name:"encodeMeasureColumn",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ColumnName",node.get("ColumnName"));
			return str;
			},
		},
		{
		name:"encodeSingleColumnForLoop",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("FOR");
			str+=this.encodeNode("ColumnName",node.get("ColumnName"));
			str+=this.encodeNode("SingleColumnForLoop_Node10",node.get("SingleColumnForLoop_Node10"));
			return str;
			},
		},
		{
		name:"encodeSingleColumnForLoop_Node10",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SingleColumnForLoop_Node9",node.get("SingleColumnForLoop_Node9"));
			return str;
			},
		},
		{
		name:"encodeSingleColumnForLoop_Node9",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SingleColumnForLoop_Node3")){
				str+=this.encodeNode("SingleColumnForLoop_Node3",node.get("SingleColumnForLoop_Node3"));
			} else if(node.has("SingleColumnForLoop_Node8")){
				str+=this.encodeNode("SingleColumnForLoop_Node8",node.get("SingleColumnForLoop_Node8"));
			}
			return str;
			},
		},
		{
		name:"encodeSingleColumnForLoop_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("IN");
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("SingleColumnForLoop_Node2",node.get("SingleColumnForLoop_Node2"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeSingleColumnForLoop_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SingleColumnForLoop_Node1",node.get("SingleColumnForLoop_Node1"));
			return str;
			},
		},
		{
		name:"encodeSingleColumnForLoop_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Literals")){
				str+=this.encodeNode("Literals",node.get("Literals"));
			} else if(node.has("Subquery")){
				str+=this.encodeNode("Subquery",node.get("Subquery"));
			}
			return str;
			},
		},
		{
		name:"encodeSingleColumnForLoop_Node8",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SingleColumnForLoop_Node5",node.get("SingleColumnForLoop_Node5"));
			str+=this.getKeyWord("FROM");
			str+=this.encodeNode("Literal",node.get("Literal"));
			str+=this.getKeyWord("TO");
			str+=this.encodeNode("Literal",node.get("Literal"));
			str+=this.encodeNode("SingleColumnForLoop_Node7",node.get("SingleColumnForLoop_Node7"));
			str+=this.encodeNode("Literal",node.get("Literal"));
			return str;
			},
		},
		{
		name:"encodeSingleColumnForLoop_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SingleColumnForLoop_Node4")){
				str+=this.getKeyWord("LIKE");
				str+=this.encodeNode("Pattern",node.get("SingleColumnForLoop_Node4").get("Pattern"));
			}
			return str;
			},
		},
		{
		name:"encodeSingleColumnForLoop_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SingleColumnForLoop_Node6",node.get("SingleColumnForLoop_Node6"));
			return str;
			},
		},
		{
		name:"encodeSingleColumnForLoop_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("INCREMENT")){
				str+=this.getKeyWord("INCREMENT",node.get("INCREMENT"));
			} else if(node.has("DECREMENT")){
				str+=this.getKeyWord("DECREMENT",node.get("DECREMENT"));
			}
			return str;
			},
		},
		{
		name:"encodeLiteral",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Literal_Node5",node.get("Literal_Node5"));
			return str;
			},
		},
		{
		name:"encodeLiteral_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Literal_Node4")){
				str+=this.encodeNode("Literal_Node4",node.get("Literal_Node4"));
			} else if(node.has("QuotedString")){
				str+=this.getKeyWord(node.get("QuotedString").getValue(),node.get("QuotedString"));
			}
			return str;
			},
		},
		{
		name:"encodeLiteral_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Literal_Node3",node.get("Literal_Node3"));
			str+=this.getKeyWord(node.get("NUMBER").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeLiteral_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Literal_Node2")){
				str+=this.encodeNode("Literal_Node1",node.get("Literal_Node2").get("Literal_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeLiteral_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PLUS")){
				str+=this.getKeyWord(node.get("PLUS").getValue(),node);
			} else if(node.has("MINUS")){
				str+=this.getKeyWord(node.get("MINUS").getValue(),node);
			}
			return str;
			},
		},
		{
		name:"encodeLiterals",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Literal",node.get("Literal"));
			str+=this.encodeNode("Literals_Node1",node.get("Literals_Node1"));
			return str;
			},
		},
		{
		name:"encodeLiterals_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("Literal",node.get("Literal"));
			}
			return str;
			},
		},
		{
		name:"encodeBracketLiterals",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("Literals",node.get("Literals"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeBracketLiteralsList",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("BracketLiterals",node.get("BracketLiterals"));
			str+=this.encodeNode("BracketLiteralsList_Node1",node.get("BracketLiteralsList_Node1"));
			return str;
			},
		},
		{
		name:"encodeBracketLiteralsList_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("BracketLiterals",node.get("BracketLiterals"));
			}
			return str;
			},
		},
		{
		name:"encodePattern",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("QuotedString").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeMultiColumnForLoop",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("FOR");
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("ColumnSpecs",node.get("ColumnSpecs"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			str+=this.getKeyWord("IN");
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("MultiColumnForLoop_Node2",node.get("MultiColumnForLoop_Node2"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeMultiColumnForLoop_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("MultiColumnForLoop_Node1",node.get("MultiColumnForLoop_Node1"));
			return str;
			},
		},
		{
		name:"encodeMultiColumnForLoop_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("BracketLiteralsList")){
				str+=this.encodeNode("BracketLiteralsList",node.get("BracketLiteralsList"));
			} else if(node.has("Subquery")){
				str+=this.encodeNode("Subquery",node.get("Subquery"));
			}
			return str;
			},
		},
		{
		name:"encodeOrderByClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("ORDER");
			if(node.has("OrderByClause_Node1")){
				str+=this.getKeyWord("SIBLINGS",node.get("OrderByClause_Node1").get("SIBLINGS"));
			}
			str+=this.getKeyWord("BY");
			str+=this.encodeNode("OrderByExprs",node.get("OrderByExprs"));
			return str;
			},
		},
		{
		name:"encodeOrderByExprs",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("OrderByExpr",node.get("OrderByExpr"));
			str+=this.encodeNode("OrderByExprs_Node1",node.get("OrderByExprs_Node1"));
			return str;
			},
		},
		{
		name:"encodeOrderByExprs_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("OrderByExpr",node.get("OrderByExpr"));
			}
			return str;
			},
		},
		{
		name:"encodeOrderByExpr",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			str+=this.encodeNode("OrderByExpr_Node5",node.get("OrderByExpr_Node5"));
			str+=this.encodeNode("OrderByExpr_Node10",node.get("OrderByExpr_Node10"));
			return str;
			},
		},
		{
		name:"encodeOrderByExpr_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("OrderByExpr_Node4")){
				str+=this.encodeNode("OrderByExpr_Node3",node.get("OrderByExpr_Node4").get("OrderByExpr_Node3"));
			}
			return str;
			},
		},
		{
		name:"encodeOrderByExpr_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("OrderByExpr_Node1")){
				str+=this.getKeyWord("ASC",node.get("OrderByExpr_Node1"));
			} else if(node.has("OrderByExpr_Node2")){
				str+=this.getKeyWord("DESC",node.get("OrderByExpr_Node2"));
			}
			return str;
			},
		},
		{
		name:"encodeOrderByExpr_Node10",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("OrderByExpr_Node9")){
				str+=this.encodeNode("OrderByExpr_Node8",node.get("OrderByExpr_Node9").get("OrderByExpr_Node8"));
			}
			return str;
			},
		},
		{
		name:"encodeOrderByExpr_Node8",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("OrderByExpr_Node6")){
				str+=this.encodeNode("OrderByExpr_Node6",node.get("OrderByExpr_Node6"));
			} else if(node.has("OrderByExpr_Node7")){
				str+=this.encodeNode("OrderByExpr_Node7",node.get("OrderByExpr_Node7"));
			}
			return str;
			},
		},
		{
		name:"encodeOrderByExpr_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("NULLS",node.get("NULLS"));
			str+=this.getKeyWord("FIRST",node.get("FIRST"));
			return str;
			},
		},
		{
		name:"encodeOrderByExpr_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("NULLS",node.get("NULLS"));
			str+=this.getKeyWord("LAST",node.get("LAST"));
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
			str+=this.encodeNode("ForUpdateClause_Node2",node.get("ForUpdateClause_Node2"));
			str+=this.encodeNode("ForUpdateClause_Node7",node.get("ForUpdateClause_Node7"));
			return str;
			},
		},
		{
		name:"encodeForUpdateClause_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ForUpdateClause_Node1")){
				str+=this.getKeyWord("OF");
				str+=this.encodeNode("ColumnSpecs",node.get("ForUpdateClause_Node1").get("ColumnSpecs"));
			}
			return str;
			},
		},
		{
		name:"encodeForUpdateClause_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ForUpdateClause_Node6")){
				str+=this.encodeNode("ForUpdateClause_Node5",node.get("ForUpdateClause_Node6").get("ForUpdateClause_Node5"));
			}
			return str;
			},
		},
		{
		name:"encodeForUpdateClause_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ForUpdateClause_Node3")){
				str+=this.encodeNode("ForUpdateClause_Node3",node.get("ForUpdateClause_Node3"));
			} else if(node.has("ForUpdateClause_Node4")){
				str+=this.getKeyWord("NOWAIT",node.get("ForUpdateClause_Node4"));
			}
			return str;
			},
		},
		{
		name:"encodeForUpdateClause_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("WAIT",node.get("WAIT"));
			str+=this.encodeNode("Integer",node.get("Integer"));
			return str;
			},
		},
		{
		name:"encodeWhereConditionWhole",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("WHERE");
			str+=this.encodeNode("SqlCondition",node.get("SqlCondition"));
			return str;
			},
		},
		{
		name:"encodeWhereCondition",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlCondition",node.get("SqlCondition"));
			return str;
			},
		},
		{
		name:"encodeDisplayedColumn",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("DisplayedColumn_Node3",node.get("DisplayedColumn_Node3"));
			if(node.has("DisplayedColumn_Node4")){
				str+=this.encodeNode("Alias",node.get("DisplayedColumn_Node4").get("Alias"));
			}
			return str;
			},
		},
		{
		name:"encodeDisplayedColumn_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("DisplayedColumn_Node2",node.get("DisplayedColumn_Node2"));
			return str;
			},
		},
		{
		name:"encodeDisplayedColumn_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("DisplayedColumn_Node1")){
				str+=this.encodeNode("DisplayedColumn_Node1",node.get("DisplayedColumn_Node1"));
			} else if(node.has("SqlExpression")){
				str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeDisplayedColumn_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ColumnSpec",node.get("ColumnSpec"));
			str+=this.getKeyWord(node.get("DOT").getValue(),node);
			str+=this.getKeyWord(node.get("ASTERISK").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeSchemaName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlIdentifier",node.get("SqlIdentifier"));
			return str;
			},
		},
		{
		name:"encodeTableName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlIdentifier",node.get("SqlIdentifier"));
			return str;
			},
		},
		{
		name:"encodeNestedExpressions",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("NestedExpression",node.get("NestedExpression"));
			str+=this.encodeNode("NestedExpressions_Node1",node.get("NestedExpressions_Node1"));
			return str;
			},
		},
		{
		name:"encodeNestedExpressions_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("NestedExpression",node.get("NestedExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeNestedExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("NestedExpression_Node1",node.get("NestedExpression_Node1"));
			return str;
			},
		},
		{
		name:"encodeNestedExpression_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SqlExpression")){
				str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			} else if(node.has("PlsqlExpression")){
				str+=this.encodeNode("PlsqlExpression",node.get("PlsqlExpression"));
			}
			return str;
			},
		},
		{
		name:"encodePlsqlCondition",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExprBool",node.get("ExprBool"));
			return str;
			},
		},
		{
		name:"encodePlsqlExpressions",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("PlsqlExpression",node.get("PlsqlExpression"));
			str+=this.encodeNode("PlsqlExpressions_Node1",node.get("PlsqlExpressions_Node1"));
			return str;
			},
		},
		{
		name:"encodePlsqlExpressions_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("PlsqlExpression",node.get("PlsqlExpression"));
			}
			return str;
			},
		},
		{
		name:"encodePlsqlExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExprBool",node.get("ExprBool"));
			return str;
			},
		},
		{
		name:"encodeExprBool",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExprOr",node.get("ExprOr"));
			str+=this.encodeNode("ExprBool_Node1",node.get("ExprBool_Node1"));
			return str;
			},
		},
		{
		name:"encodeExprBool_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord("OR");
				str+=this.encodeNode("ExprOr",node.get("ExprOr"));
			}
			return str;
			},
		},
		{
		name:"encodeExprOr",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExprAnd",node.get("ExprAnd"));
			str+=this.encodeNode("ExprOr_Node1",node.get("ExprOr_Node1"));
			return str;
			},
		},
		{
		name:"encodeExprOr_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord("AND");
				str+=this.encodeNode("ExprAnd",node.get("ExprAnd"));
			}
			return str;
			},
		},
		{
		name:"encodeExprAnd",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ExprAnd_Node1")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.encodeNode("ExprNot",node.get("ExprNot"));
			return str;
			},
		},
		{
		name:"encodeExprNot",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExprAdd",node.get("ExprAdd"));
			str+=this.encodeNode("ExprNot_Node11",node.get("ExprNot_Node11"));
			return str;
			},
		},
		{
		name:"encodeExprNot_Node11",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.encodeNode("ExprNot_Node10",node.get("ExprNot_Node10"));
			}
			return str;
			},
		},
		{
		name:"encodeExprNot_Node10",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ExprNot_Node1")){
				str+=this.encodeNode("ExprNot_Node1",node.get("ExprNot_Node1"));
			} else if(node.has("FOUNDATTR")){
				str+=this.encodeNode("FOUNDATTR",node.get("FOUNDATTR"));
			} else if(node.has("NOTFOUNDATTR")){
				str+=this.encodeNode("NOTFOUNDATTR",node.get("NOTFOUNDATTR"));
			} else if(node.has("ISOPENATTR")){
				str+=this.encodeNode("ISOPENATTR",node.get("ISOPENATTR"));
			} else if(node.has("ROWCOUNTATTR")){
				str+=this.encodeNode("ROWCOUNTATTR",node.get("ROWCOUNTATTR"));
			} else if(node.has("BULKROWCOUNTATTR")){
				str+=this.encodeNode("BULKROWCOUNTATTR",node.get("BULKROWCOUNTATTR"));
			} else if(node.has("ExprNot_Node3")){
				str+=this.encodeNode("ExprNot_Node3",node.get("ExprNot_Node3"));
			} else if(node.has("ExprNot_Node5")){
				str+=this.encodeNode("ExprNot_Node5",node.get("ExprNot_Node5"));
			} else if(node.has("ExprNot_Node7")){
				str+=this.encodeNode("ExprNot_Node7",node.get("ExprNot_Node7"));
			} else if(node.has("ExprNot_Node9")){
				str+=this.encodeNode("ExprNot_Node9",node.get("ExprNot_Node9"));
			}
			return str;
			},
		},
		{
		name:"encodeExprNot_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("RelationalOp",node.get("RelationalOp"));
			str+=this.encodeNode("ExprAdd",node.get("ExprAdd"));
			return str;
			},
		},
		{
		name:"encodeExprNot_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("IS");
			if(node.has("ExprNot_Node2")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.getKeyWord("NULL");
			return str;
			},
		},
		{
		name:"encodeExprNot_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ExprNot_Node4")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.getKeyWord("LIKE");
			str+=this.encodeNode("ExprAdd",node.get("ExprAdd"));
			return str;
			},
		},
		{
		name:"encodeExprNot_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ExprNot_Node6")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.getKeyWord("BETWEEN");
			str+=this.encodeNode("ExprAdd",node.get("ExprAdd"));
			str+=this.getKeyWord("AND");
			str+=this.encodeNode("ExprAdd",node.get("ExprAdd"));
			return str;
			},
		},
		{
		name:"encodeExprNot_Node9",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ExprNot_Node8")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.getKeyWord("IN");
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("NestedExpressions",node.get("NestedExpressions"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeBooleanLiteral",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("BooleanLiteral_Node3",node.get("BooleanLiteral_Node3"));
			return str;
			},
		},
		{
		name:"encodeBooleanLiteral_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("BooleanLiteral_Node1")){
				str+=this.getKeyWord("TRUE",node.get("BooleanLiteral_Node1"));
			} else if(node.has("BooleanLiteral_Node2")){
				str+=this.getKeyWord("FALSE",node.get("BooleanLiteral_Node2"));
			}
			return str;
			},
		},
		{
		name:"encodeSqlExpressions",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			str+=this.encodeNode("SqlExpressions_Node1",node.get("SqlExpressions_Node1"));
			return str;
			},
		},
		{
		name:"encodeSqlExpressions_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeSqlExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExprAdd",node.get("ExprAdd"));
			return str;
			},
		},
		{
		name:"encodeExprAdd",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExprMul",node.get("ExprMul"));
			str+=this.encodeNode("ExprAdd_Node3",node.get("ExprAdd_Node3"));
			return str;
			},
		},
		{
		name:"encodeExprAdd_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.encodeNode("ExprAdd_Node2",node.get("ExprAdd_Node2"));
				str+=this.encodeNode("ExprMul",node.get("ExprMul"));
			}
			return str;
			},
		},
		{
		name:"encodeExprAdd_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExprAdd_Node1",node.get("ExprAdd_Node1"));
			return str;
			},
		},
		{
		name:"encodeExprAdd_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PLUS")){
				str+=this.getKeyWord(node.get("PLUS").getValue(),node);
			} else if(node.has("MINUS")){
				str+=this.getKeyWord(node.get("MINUS").getValue(),node);
			} else if(node.has("DOUBLEVERTBAR")){
				str+=this.getKeyWord(node.get("DOUBLEVERTBAR").getValue(),node);
			}
			return str;
			},
		},
		{
		name:"encodeExprMul",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExprSign",node.get("ExprSign"));
			str+=this.encodeNode("ExprMul_Node3",node.get("ExprMul_Node3"));
			return str;
			},
		},
		{
		name:"encodeExprMul_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.encodeNode("ExprMul_Node2",node.get("ExprMul_Node2"));
				str+=this.encodeNode("ExprSign",node.get("ExprSign"));
			}
			return str;
			},
		},
		{
		name:"encodeExprMul_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExprMul_Node1",node.get("ExprMul_Node1"));
			return str;
			},
		},
		{
		name:"encodeExprMul_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ASTERISK")){
				str+=this.getKeyWord(node.get("ASTERISK").getValue(),node);
			} else if(node.has("DIVIDE")){
				str+=this.getKeyWord(node.get("DIVIDE").getValue(),node);
			}
			return str;
			},
		},
		{
		name:"encodeExprSign",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExprSign_Node3",node.get("ExprSign_Node3"));
			str+=this.encodeNode("ExprPow",node.get("ExprPow"));
			return str;
			},
		},
		{
		name:"encodeExprSign_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ExprSign_Node2")){
				str+=this.encodeNode("ExprSign_Node1",node.get("ExprSign_Node2").get("ExprSign_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeExprSign_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("PLUS")){
				str+=this.getKeyWord(node.get("PLUS").getValue(),node);
			} else if(node.has("MINUS")){
				str+=this.getKeyWord(node.get("MINUS").getValue(),node);
			}
			return str;
			},
		},
		{
		name:"encodeExprPow",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExprExpr",node.get("ExprExpr"));
			str+=this.encodeNode("ExprPow_Node1",node.get("ExprPow_Node1"));
			return str;
			},
		},
		{
		name:"encodeExprPow_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("EXPONENT").getValue(),node);
				str+=this.encodeNode("ExprExpr",node.get("ExprExpr"));
			}
			return str;
			},
		},
		{
		name:"encodeExprExpr",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExprExpr_Node7",node.get("ExprExpr_Node7"));
			return str;
			},
		},
		{
		name:"encodeExprExpr_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ExprExpr_Node1")){
				str+=this.encodeNode("ExprExpr_Node1",node.get("ExprExpr_Node1"));
			} else if(node.has("ExprExpr_Node2")){
				str+=this.encodeNode("ExprExpr_Node2",node.get("ExprExpr_Node2"));
			} else if(node.has("ExprExpr_Node3")){
				str+=this.encodeNode("ExprExpr_Node3",node.get("ExprExpr_Node3"));
			} else if(node.has("ExprExpr_Node4")){
				str+=this.encodeNode("ExprExpr_Node4",node.get("ExprExpr_Node4"));
			} else if(node.has("ExprExpr_Node5")){
				str+=this.encodeNode("ExprExpr_Node5",node.get("ExprExpr_Node5"));
			} else if(node.has("ExprExpr_Node6")){
				str+=this.encodeNode("ExprExpr_Node6",node.get("ExprExpr_Node6"));
			}
			return str;
			},
		},
		{
		name:"encodeExprExpr_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExprParen",node.get("ExprParen"));
			return str;
			},
		},
		{
		name:"encodeExprExpr_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("FunctionExpression",node.get("FunctionExpression"));
			return str;
			},
		},
		{
		name:"encodeExprExpr_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("CaseExpression",node.get("CaseExpression"));
			return str;
			},
		},
		{
		name:"encodeExprExpr_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("CursorExpression",node.get("CursorExpression"));
			return str;
			},
		},
		{
		name:"encodeExprExpr_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SimpleExpression",node.get("SimpleExpression"));
			return str;
			},
		},
		{
		name:"encodeExprExpr_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SelectExpression",node.get("SelectExpression"));
			return str;
			},
		},
		{
		name:"encodeSimpleExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SimpleExpression_Node6",node.get("SimpleExpression_Node6"));
			return str;
			},
		},
		{
		name:"encodeSimpleExpression_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("BooleanLiteral")){
				str+=this.encodeNode("BooleanLiteral",node.get("BooleanLiteral"));
			} else if(node.has("SimpleExpression_Node3")){
				str+=this.encodeNode("SimpleExpression_Node3",node.get("SimpleExpression_Node3"));
			} else if(node.has("SimpleExpression_Node4")){
				str+=this.encodeNode("SimpleExpression_Node4",node.get("SimpleExpression_Node4"));
			} else if(node.has("QuotedString")){
				str+=this.getKeyWord(node.get("QuotedString").getValue(),node.get("QuotedString"));
			} else if(node.has("NUMBER")){
				str+=this.getKeyWord(node.get("NUMBER").getValue(),node);
			} else if(node.has("SimpleExpression_Node5")){
				str+=this.getKeyWord("NULL",node.get("SimpleExpression_Node5"));
			}
			return str;
			},
		},
		{
		name:"encodeSimpleExpression_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("SQL");
			str+=this.encodeNode("SimpleExpression_Node2",node.get("SimpleExpression_Node2"));
			return str;
			},
		},
		{
		name:"encodeSimpleExpression_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SimpleExpression_Node1",node.get("SimpleExpression_Node1"));
			return str;
			},
		},
		{
		name:"encodeSimpleExpression_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("FOUNDATTR")){
				str+=this.encodeNode("FOUNDATTR",node.get("FOUNDATTR"));
			} else if(node.has("NOTFOUNDATTR")){
				str+=this.encodeNode("NOTFOUNDATTR",node.get("NOTFOUNDATTR"));
			} else if(node.has("ISOPENATTR")){
				str+=this.encodeNode("ISOPENATTR",node.get("ISOPENATTR"));
			} else if(node.has("ROWCOUNTATTR")){
				str+=this.encodeNode("ROWCOUNTATTR",node.get("ROWCOUNTATTR"));
			} else if(node.has("BULKROWCOUNTATTR")){
				str+=this.encodeNode("BULKROWCOUNTATTR",node.get("BULKROWCOUNTATTR"));
			}
			return str;
			},
		},
		{
		name:"encodeSimpleExpression_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ColumnSpec",node.get("ColumnSpec"));
			return str;
			},
		},
		{
		name:"encodeCompoundExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExprPrior",node.get("ExprPrior"));
			return str;
			},
		},
		{
		name:"encodeExprParen",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("NestedExpression",node.get("NestedExpression"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeExprPrior",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("PRIOR");
			str+=this.encodeNode("ExprAdd",node.get("ExprAdd"));
			return str;
			},
		},
		{
		name:"encodeCaseExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("CASE");
			str+=this.encodeNode("CaseExpression_Node2",node.get("CaseExpression_Node2"));
			if(node.has("CaseExpression_Node3")){
				str+=this.encodeNode("ElseCaseExpression",node.get("CaseExpression_Node3").get("ElseCaseExpression"));
			}
			str+=this.getKeyWord("END");
			return str;
			},
		},
		{
		name:"encodeCaseExpression_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("CaseExpression_Node1",node.get("CaseExpression_Node1"));
			return str;
			},
		},
		{
		name:"encodeCaseExpression_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SimpleCaseExpression")){
				str+=this.encodeNode("SimpleCaseExpression",node.get("SimpleCaseExpression"));
			} else if(node.has("SearchedCaseExpression")){
				str+=this.encodeNode("SearchedCaseExpression",node.get("SearchedCaseExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeSimpleCaseExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("NestedExpression",node.get("NestedExpression"));
			str+=this.encodeNode("SimpleCaseExpression_Node1",node.get("SimpleCaseExpression_Node1"));
			return str;
			},
		},
		{
		name:"encodeSimpleCaseExpression_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord("WHEN");
				str+=this.encodeNode("NestedExpression",node.get("NestedExpression"));
				str+=this.getKeyWord("THEN");
				str+=this.encodeNode("NestedExpression",node.get("NestedExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeSearchedCaseExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord("WHEN");
				str+=this.encodeNode("NestedCondition",node.get("NestedCondition"));
				str+=this.getKeyWord("THEN");
				str+=this.encodeNode("NestedExpression",node.get("NestedExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeElseCaseExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("ELSE");
			str+=this.encodeNode("NestedExpression",node.get("NestedExpression"));
			return str;
			},
		},
		{
		name:"encodeCaseStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("CaseStatement_Node1")){
				str+=this.encodeNode("LabelName",node.get("CaseStatement_Node1").get("LabelName"));
			}
			str+=this.getKeyWord("CASE");
			str+=this.encodeNode("CaseStatement_Node3",node.get("CaseStatement_Node3"));
			if(node.has("CaseStatement_Node4")){
				str+=this.encodeNode("ElseCaseStatement",node.get("CaseStatement_Node4").get("ElseCaseStatement"));
			}
			str+=this.getKeyWord("END");
			str+=this.getKeyWord("CASE");
			if(node.has("CaseStatement_Node5")){
				str+=this.encodeNode("LabelName",node.get("CaseStatement_Node5").get("LabelName"));
			}
			return str;
			},
		},
		{
		name:"encodeCaseStatement_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("CaseStatement_Node2",node.get("CaseStatement_Node2"));
			return str;
			},
		},
		{
		name:"encodeCaseStatement_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SimpleCaseStatement")){
				str+=this.encodeNode("SimpleCaseStatement",node.get("SimpleCaseStatement"));
			} else if(node.has("SearchedCaseStatement")){
				str+=this.encodeNode("SearchedCaseStatement",node.get("SearchedCaseStatement"));
			}
			return str;
			},
		},
		{
		name:"encodeSimpleCaseStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("PlsqlExpression",node.get("PlsqlExpression"));
			str+=this.encodeNode("SimpleCaseStatement_Node1",node.get("SimpleCaseStatement_Node1"));
			return str;
			},
		},
		{
		name:"encodeSimpleCaseStatement_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord("WHEN");
				str+=this.encodeNode("PlsqlExpression",node.get("PlsqlExpression"));
				str+=this.getKeyWord("THEN");
				str+=this.encodeNode("SeqOfStatements",node.get("SeqOfStatements"));
			}
			return str;
			},
		},
		{
		name:"encodeSearchedCaseStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord("WHEN");
				str+=this.encodeNode("PlsqlExpression",node.get("PlsqlExpression"));
				str+=this.getKeyWord("THEN");
				str+=this.encodeNode("SeqOfStatements",node.get("SeqOfStatements"));
			}
			return str;
			},
		},
		{
		name:"encodeElseCaseStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("ELSE");
			str+=this.encodeNode("SeqOfStatements",node.get("SeqOfStatements"));
			return str;
			},
		},
		{
		name:"encodeCursorExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("CURSOR",node.get("CURSOR"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("Subquery",node.get("Subquery"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeDatetimeExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			str+=this.getKeyWord("AT");
			str+=this.encodeNode("DatetimeExpression_Node5",node.get("DatetimeExpression_Node5"));
			return str;
			},
		},
		{
		name:"encodeDatetimeExpression_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("DatetimeExpression_Node4",node.get("DatetimeExpression_Node4"));
			return str;
			},
		},
		{
		name:"encodeDatetimeExpression_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("LOCAL")){
				str+=this.getKeyWord("LOCAL",node.get("LOCAL"));
			} else if(node.has("DatetimeExpression_Node3")){
				str+=this.encodeNode("DatetimeExpression_Node3",node.get("DatetimeExpression_Node3"));
			}
			return str;
			},
		},
		{
		name:"encodeDatetimeExpression_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("TIME",node.get("TIME"));
			str+=this.getKeyWord("ZONE",node.get("ZONE"));
			str+=this.encodeNode("DatetimeExpression_Node2",node.get("DatetimeExpression_Node2"));
			return str;
			},
		},
		{
		name:"encodeDatetimeExpression_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("DatetimeExpression_Node1",node.get("DatetimeExpression_Node1"));
			return str;
			},
		},
		{
		name:"encodeDatetimeExpression_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("DBTIMEZONE")){
				str+=this.getKeyWord("DBTIMEZONE",node.get("DBTIMEZONE"));
			} else if(node.has("SESSIONTIMEZONE")){
				str+=this.getKeyWord("SESSIONTIMEZONE",node.get("SESSIONTIMEZONE"));
			} else if(node.has("SqlExpression")){
				str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeFunctionExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("FunctionExpression_Node13",node.get("FunctionExpression_Node13"));
			return str;
			},
		},
		{
		name:"encodeFunctionExpression_Node13",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("FunctionExpression_Node3")){
				str+=this.encodeNode("FunctionExpression_Node3",node.get("FunctionExpression_Node3"));
			} else if(node.has("FunctionExpression_Node12")){
				str+=this.encodeNode("FunctionExpression_Node12",node.get("FunctionExpression_Node12"));
			}
			return str;
			},
		},
		{
		name:"encodeFunctionExpression_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("FunctionCall",node.get("FunctionCall"));
			str+=this.encodeNode("FunctionExpression_Node2",node.get("FunctionExpression_Node2"));
			return str;
			},
		},
		{
		name:"encodeFunctionExpression_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("FunctionExpression_Node1")){
				str+=this.getKeyWord(node.get("FunctionExpression_Node1").get("DOT").getValue(),node.get("FunctionExpression_Node1"));
				str+=this.encodeNode("NestedExpression",node.get("FunctionExpression_Node1").get("NestedExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeFunctionExpression_Node12",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("FunctionExpression_Node11",node.get("FunctionExpression_Node11"));
			return str;
			},
		},
		{
		name:"encodeFunctionExpression_Node11",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("FunctionExpression_Node6")){
				str+=this.encodeNode("FunctionExpression_Node6",node.get("FunctionExpression_Node6"));
			} else if(node.has("FunctionExpression_Node10")){
				str+=this.encodeNode("FunctionExpression_Node10",node.get("FunctionExpression_Node10"));
			}
			return str;
			},
		},
		{
		name:"encodeFunctionExpression_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("COUNT",node.get("COUNT"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("FunctionExpression_Node5",node.get("FunctionExpression_Node5"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeFunctionExpression_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("FunctionExpression_Node4",node.get("FunctionExpression_Node4"));
			return str;
			},
		},
		{
		name:"encodeFunctionExpression_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ASTERISK")){
				str+=this.getKeyWord(node.get("ASTERISK").getValue(),node);
			} else if(node.has("NestedExpression")){
				str+=this.encodeNode("NestedExpression",node.get("NestedExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeFunctionExpression_Node10",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("DISTINCT");
			str+=this.encodeNode("FunctionExpression_Node9",node.get("FunctionExpression_Node9"));
			return str;
			},
		},
		{
		name:"encodeFunctionExpression_Node9",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("FunctionExpression_Node8",node.get("FunctionExpression_Node8"));
			return str;
			},
		},
		{
		name:"encodeFunctionExpression_Node8",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("FunctionExpression_Node7")){
				str+=this.encodeNode("FunctionExpression_Node7",node.get("FunctionExpression_Node7"));
			} else if(node.has("NestedExpression")){
				str+=this.encodeNode("NestedExpression",node.get("NestedExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeFunctionExpression_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("NestedExpression",node.get("NestedExpression"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeSpecialExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SpecialExpression_Node5",node.get("SpecialExpression_Node5"));
			return str;
			},
		},
		{
		name:"encodeSpecialExpression_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SpecialExpression_Node3")){
				str+=this.encodeNode("SpecialExpression_Node3",node.get("SpecialExpression_Node3"));
			} else if(node.has("SpecialExpression_Node4")){
				str+=this.encodeNode("SpecialExpression_Node4",node.get("SpecialExpression_Node4"));
			}
			return str;
			},
		},
		{
		name:"encodeSpecialExpression_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("COUNT",node.get("COUNT"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("SpecialExpression_Node2",node.get("SpecialExpression_Node2"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeSpecialExpression_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SpecialExpression_Node1",node.get("SpecialExpression_Node1"));
			return str;
			},
		},
		{
		name:"encodeSpecialExpression_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ASTERISK")){
				str+=this.getKeyWord(node.get("ASTERISK").getValue(),node);
			} else if(node.has("NestedExpression")){
				str+=this.encodeNode("NestedExpression",node.get("NestedExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeSpecialExpression_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("DISTINCT");
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("NestedExpression",node.get("NestedExpression"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeIntervalExpression",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			str+=this.encodeNode("IntervalExpression_Node10",node.get("IntervalExpression_Node10"));
			return str;
			},
		},
		{
		name:"encodeIntervalExpression_Node10",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("IntervalExpression_Node9",node.get("IntervalExpression_Node9"));
			return str;
			},
		},
		{
		name:"encodeIntervalExpression_Node9",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("IntervalExpression_Node5")){
				str+=this.encodeNode("IntervalExpression_Node5",node.get("IntervalExpression_Node5"));
			} else if(node.has("IntervalExpression_Node8")){
				str+=this.encodeNode("IntervalExpression_Node8",node.get("IntervalExpression_Node8"));
			}
			return str;
			},
		},
		{
		name:"encodeIntervalExpression_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("DAY",node.get("DAY"));
			str+=this.encodeNode("IntervalExpression_Node2",node.get("IntervalExpression_Node2"));
			str+=this.getKeyWord("TO");
			str+=this.getKeyWord("SECOND",node.get("SECOND"));
			str+=this.encodeNode("IntervalExpression_Node4",node.get("IntervalExpression_Node4"));
			return str;
			},
		},
		{
		name:"encodeIntervalExpression_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("IntervalExpression_Node1")){
				str+=this.getKeyWord(node.get("IntervalExpression_Node1").get("LPAREN").getValue(),node.get("IntervalExpression_Node1"));
				str+=this.encodeNode("LeadingFieldPrecision",node.get("IntervalExpression_Node1").get("LeadingFieldPrecision"));
				str+=this.getKeyWord(node.get("IntervalExpression_Node1").get("RPAREN").getValue(),node.get("IntervalExpression_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeIntervalExpression_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("IntervalExpression_Node3")){
				str+=this.getKeyWord(node.get("IntervalExpression_Node3").get("LPAREN").getValue(),node.get("IntervalExpression_Node3"));
				str+=this.encodeNode("FractionalSecondPrecision",node.get("IntervalExpression_Node3").get("FractionalSecondPrecision"));
				str+=this.getKeyWord(node.get("IntervalExpression_Node3").get("RPAREN").getValue(),node.get("IntervalExpression_Node3"));
			}
			return str;
			},
		},
		{
		name:"encodeIntervalExpression_Node8",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("YEAR",node.get("YEAR"));
			str+=this.encodeNode("IntervalExpression_Node7",node.get("IntervalExpression_Node7"));
			str+=this.getKeyWord("TO");
			str+=this.getKeyWord("MONTH",node.get("MONTH"));
			return str;
			},
		},
		{
		name:"encodeIntervalExpression_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("IntervalExpression_Node6")){
				str+=this.getKeyWord(node.get("IntervalExpression_Node6").get("LPAREN").getValue(),node.get("IntervalExpression_Node6"));
				str+=this.encodeNode("LeadingFieldPrecision",node.get("IntervalExpression_Node6").get("LeadingFieldPrecision"));
				str+=this.getKeyWord(node.get("IntervalExpression_Node6").get("RPAREN").getValue(),node.get("IntervalExpression_Node6"));
			}
			return str;
			},
		},
		{
		name:"encodeLeadingFieldPrecision",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Integer",node.get("Integer"));
			return str;
			},
		},
		{
		name:"encodeFractionalSecondPrecision",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Integer",node.get("Integer"));
			return str;
			},
		},
		{
		name:"encodeSequenceName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Identifier",node.get("Identifier"));
			return str;
			},
		},
		{
		name:"encodeInteger",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("NUMBER").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeAlias",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Alias_Node1")){
				str+=this.getKeyWord("AS");
			}
			str+=this.encodeNode("SqlIdentifier",node.get("SqlIdentifier"));
			return str;
			},
		},
		{
		name:"encodeColumnSpecs",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ColumnSpec",node.get("ColumnSpec"));
			str+=this.encodeNode("ColumnSpecs_Node1",node.get("ColumnSpecs_Node1"));
			return str;
			},
		},
		{
		name:"encodeColumnSpecs_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("ColumnSpec",node.get("ColumnSpec"));
			}
			return str;
			},
		},
		{
		name:"encodeColumnSpec",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlIdentifier",node.get("SqlIdentifier"));
			str+=this.encodeNode("ColumnSpec_Node1",node.get("ColumnSpec_Node1"));
			return str;
			},
		},
		{
		name:"encodeColumnSpec_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("DOT").getValue(),node);
				str+=this.encodeNode("SqlIdentifier",node.get("SqlIdentifier"));
			}
			return str;
			},
		},
		{
		name:"encodeColumnName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlIdentifier",node.get("SqlIdentifier"));
			return str;
			},
		},
		{
		name:"encodeNestedTable",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlIdentifier",node.get("SqlIdentifier"));
			return str;
			},
		},
		{
		name:"encodeNestedTableColumnName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("NestedTableColumnName_Node2",node.get("NestedTableColumnName_Node2"));
			str+=this.encodeNode("TableName",node.get("TableName"));
			str+=this.getKeyWord(node.get("DOT").getValue(),node);
			str+=this.encodeNode("NestedTable",node.get("NestedTable"));
			str+=this.getKeyWord(node.get("DOT").getValue(),node);
			str+=this.encodeNode("ColumnName",node.get("ColumnName"));
			return str;
			},
		},
		{
		name:"encodeNestedTableColumnName_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("NestedTableColumnName_Node1")){
				str+=this.encodeNode("SchemaName",node.get("NestedTableColumnName_Node1").get("SchemaName"));
				str+=this.getKeyWord(node.get("NestedTableColumnName_Node1").get("DOT").getValue(),node.get("NestedTableColumnName_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeUserDefinedFunction",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlIdentifier",node.get("SqlIdentifier"));
			str+=this.encodeNode("UserDefinedFunction_Node1",node.get("UserDefinedFunction_Node1"));
			str+=this.encodeNode("UserDefinedFunction_Node8",node.get("UserDefinedFunction_Node8"));
			return str;
			},
		},
		{
		name:"encodeUserDefinedFunction_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("DOT").getValue(),node);
				str+=this.encodeNode("SqlIdentifier",node.get("SqlIdentifier"));
			}
			return str;
			},
		},
		{
		name:"encodeUserDefinedFunction_Node8",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("UserDefinedFunction_Node7")){
				str+=this.getKeyWord(node.get("UserDefinedFunction_Node7").get("DOT").getValue(),node.get("UserDefinedFunction_Node7"));
				str+=this.encodeNode("UserDefinedFunction_Node6",node.get("UserDefinedFunction_Node7").get("UserDefinedFunction_Node6"));
			}
			return str;
			},
		},
		{
		name:"encodeUserDefinedFunction_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("UserDefinedFunction_Node5",node.get("UserDefinedFunction_Node5"));
			return str;
			},
		},
		{
		name:"encodeUserDefinedFunction_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("UserDefinedFunction_Node2")){
				str+=this.getKeyWord("EXISTS",node.get("UserDefinedFunction_Node2"));
			} else if(node.has("UserDefinedFunction_Node3")){
				str+=this.getKeyWord("PRIOR",node.get("UserDefinedFunction_Node3"));
			} else if(node.has("UserDefinedFunction_Node4")){
				str+=this.getKeyWord("DELETE",node.get("UserDefinedFunction_Node4"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectedTable",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SelectedTable_Node7",node.get("SelectedTable_Node7"));
			if(node.has("SelectedTable_Node8")){
				str+=this.encodeNode("Alias",node.get("SelectedTable_Node8").get("Alias"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectedTable_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SelectedTable_Node6",node.get("SelectedTable_Node6"));
			return str;
			},
		},
		{
		name:"encodeSelectedTable_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("TableSpec")){
				str+=this.encodeNode("TableSpec",node.get("TableSpec"));
			} else if(node.has("SelectedTable_Node5")){
				str+=this.encodeNode("SelectedTable_Node5",node.get("SelectedTable_Node5"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectedTable_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SelectedTable_Node4",node.get("SelectedTable_Node4"));
			str+=this.encodeNode("Subquery",node.get("Subquery"));
			return str;
			},
		},
		{
		name:"encodeSelectedTable_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SelectedTable_Node3")){
				str+=this.encodeNode("SelectedTable_Node2",node.get("SelectedTable_Node3").get("SelectedTable_Node2"));
			}
			return str;
			},
		},
		{
		name:"encodeSelectedTable_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SelectedTable_Node1")){
				str+=this.getKeyWord("TABLE",node.get("SelectedTable_Node1"));
			} else if(node.has("THE")){
				str+=this.getKeyWord("THE",node.get("THE"));
			}
			return str;
			},
		},
		{
		name:"encodeTableSpec",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("TableSpec_Node2",node.get("TableSpec_Node2"));
			str+=this.encodeNode("TableName",node.get("TableName"));
			str+=this.encodeNode("TableSpec_Node4",node.get("TableSpec_Node4"));
			return str;
			},
		},
		{
		name:"encodeTableSpec_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("TableSpec_Node1")){
				str+=this.encodeNode("SchemaName",node.get("TableSpec_Node1").get("SchemaName"));
				str+=this.getKeyWord(node.get("TableSpec_Node1").get("DOT").getValue(),node.get("TableSpec_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeTableSpec_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("TableSpec_Node3")){
				str+=this.getKeyWord(node.get("TableSpec_Node3").get("ATSIGN").getValue(),node.get("TableSpec_Node3"));
				str+=this.encodeNode("LinkName",node.get("TableSpec_Node3").get("LinkName"));
			}
			return str;
			},
		},
		{
		name:"encodeTableAlias",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("TableAlias_Node2",node.get("TableAlias_Node2"));
			str+=this.encodeNode("TableName",node.get("TableName"));
			str+=this.encodeNode("TableAlias_Node4",node.get("TableAlias_Node4"));
			if(node.has("TableAlias_Node5")){
				str+=this.encodeNode("Alias",node.get("TableAlias_Node5").get("Alias"));
			}
			return str;
			},
		},
		{
		name:"encodeTableAlias_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("TableAlias_Node1")){
				str+=this.encodeNode("SchemaName",node.get("TableAlias_Node1").get("SchemaName"));
				str+=this.getKeyWord(node.get("TableAlias_Node1").get("DOT").getValue(),node.get("TableAlias_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeTableAlias_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("TableAlias_Node3")){
				str+=this.getKeyWord(node.get("TableAlias_Node3").get("ATSIGN").getValue(),node.get("TableAlias_Node3"));
				str+=this.encodeNode("LinkName",node.get("TableAlias_Node3").get("LinkName"));
			}
			return str;
			},
		},
		{
		name:"encodeLinkName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlIdentifier",node.get("SqlIdentifier"));
			return str;
			},
		},
		{
		name:"encodeNestedCondition",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("NestedCondition_Node1",node.get("NestedCondition_Node1"));
			return str;
			},
		},
		{
		name:"encodeNestedCondition_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConditionOr")){
				str+=this.encodeNode("ConditionOr",node.get("ConditionOr"));
			} else if(node.has("ExprBool")){
				str+=this.encodeNode("ExprBool",node.get("ExprBool"));
			}
			return str;
			},
		},
		{
		name:"encodeSqlCondition",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionOr",node.get("ConditionOr"));
			return str;
			},
		},
		{
		name:"encodeConditionParen",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("SqlCondition",node.get("SqlCondition"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeConditionOr",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionAnd",node.get("ConditionAnd"));
			str+=this.encodeNode("ConditionOr_Node1",node.get("ConditionOr_Node1"));
			return str;
			},
		},
		{
		name:"encodeConditionOr_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord("OR");
				str+=this.encodeNode("ConditionAnd",node.get("ConditionAnd"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionAnd",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionNot",node.get("ConditionNot"));
			str+=this.encodeNode("ConditionAnd_Node1",node.get("ConditionAnd_Node1"));
			return str;
			},
		},
		{
		name:"encodeConditionAnd_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord("AND");
				str+=this.encodeNode("ConditionNot",node.get("ConditionNot"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionNot",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionNot_Node2",node.get("ConditionNot_Node2"));
			return str;
			},
		},
		{
		name:"encodeConditionNot_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConditionNot_Node1")){
				str+=this.encodeNode("ConditionNot_Node1",node.get("ConditionNot_Node1"));
			} else if(node.has("ConditionExpr")){
				str+=this.encodeNode("ConditionExpr",node.get("ConditionExpr"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionNot_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("NOT");
			str+=this.encodeNode("ConditionExpr",node.get("ConditionExpr"));
			return str;
			},
		},
		{
		name:"encodeConditionExpr",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionExpr_Node1",node.get("ConditionExpr_Node1"));
			return str;
			},
		},
		{
		name:"encodeConditionExpr_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConditionExists")){
				str+=this.encodeNode("ConditionExists",node.get("ConditionExists"));
			} else if(node.has("ConditionIs")){
				str+=this.encodeNode("ConditionIs",node.get("ConditionIs"));
			} else if(node.has("ConditionComparison")){
				str+=this.encodeNode("ConditionComparison",node.get("ConditionComparison"));
			} else if(node.has("ConditionGroupComparison")){
				str+=this.encodeNode("ConditionGroupComparison",node.get("ConditionGroupComparison"));
			} else if(node.has("ConditionIn")){
				str+=this.encodeNode("ConditionIn",node.get("ConditionIn"));
			} else if(node.has("ConditionIsAny")){
				str+=this.encodeNode("ConditionIsAny",node.get("ConditionIsAny"));
			} else if(node.has("ConditionIsEmpty")){
				str+=this.encodeNode("ConditionIsEmpty",node.get("ConditionIsEmpty"));
			} else if(node.has("ConditionIsOfType")){
				str+=this.encodeNode("ConditionIsOfType",node.get("ConditionIsOfType"));
			} else if(node.has("ConditionIsPresent")){
				str+=this.encodeNode("ConditionIsPresent",node.get("ConditionIsPresent"));
			} else if(node.has("ConditionLike")){
				str+=this.encodeNode("ConditionLike",node.get("ConditionLike"));
			} else if(node.has("ConditionMemeber")){
				str+=this.encodeNode("ConditionMemeber",node.get("ConditionMemeber"));
			} else if(node.has("ConditionBetween")){
				str+=this.encodeNode("ConditionBetween",node.get("ConditionBetween"));
			} else if(node.has("ConditionRegexpLike")){
				str+=this.encodeNode("ConditionRegexpLike",node.get("ConditionRegexpLike"));
			} else if(node.has("ConditionSubmultiset")){
				str+=this.encodeNode("ConditionSubmultiset",node.get("ConditionSubmultiset"));
			} else if(node.has("ConditionEqualsPath")){
				str+=this.encodeNode("ConditionEqualsPath",node.get("ConditionEqualsPath"));
			} else if(node.has("ConditionUnderPath")){
				str+=this.encodeNode("ConditionUnderPath",node.get("ConditionUnderPath"));
			} else if(node.has("ConditionParen")){
				str+=this.encodeNode("ConditionParen",node.get("ConditionParen"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionExists",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("EXISTS");
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("SelectCommand",node.get("SelectCommand"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeConditionIs",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			str+=this.getKeyWord("IS");
			if(node.has("ConditionIs_Node1")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.encodeNode("ConditionIs_Node4",node.get("ConditionIs_Node4"));
			return str;
			},
		},
		{
		name:"encodeConditionIs_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionIs_Node3",node.get("ConditionIs_Node3"));
			return str;
			},
		},
		{
		name:"encodeConditionIs_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("NAN")){
				str+=this.getKeyWord("NAN",node.get("NAN"));
			} else if(node.has("INFINITE")){
				str+=this.getKeyWord("INFINITE",node.get("INFINITE"));
			} else if(node.has("ConditionIs_Node2")){
				str+=this.getKeyWord("NULL",node.get("ConditionIs_Node2"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionComparison",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionComparison_Node16",node.get("ConditionComparison_Node16"));
			return str;
			},
		},
		{
		name:"encodeConditionComparison_Node16",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConditionComparison_Node5")){
				str+=this.encodeNode("ConditionComparison_Node5",node.get("ConditionComparison_Node5"));
			} else if(node.has("ConditionComparison_Node15")){
				str+=this.encodeNode("ConditionComparison_Node15",node.get("ConditionComparison_Node15"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionComparison_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("SqlExpressions",node.get("SqlExpressions"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			if(node.has("ConditionComparison_Node1")){
				str+=this.encodeNode("OuterJoinSign",node.get("ConditionComparison_Node1").get("OuterJoinSign"));
			}
			str+=this.encodeNode("ConditionComparison_Node3",node.get("ConditionComparison_Node3"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("SelectCommand",node.get("SelectCommand"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			if(node.has("ConditionComparison_Node4")){
				str+=this.encodeNode("OuterJoinSign",node.get("ConditionComparison_Node4").get("OuterJoinSign"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionComparison_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionComparison_Node2",node.get("ConditionComparison_Node2"));
			return str;
			},
		},
		{
		name:"encodeConditionComparison_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("EQ")){
				str+=this.getKeyWord(node.get("EQ").getValue(),node);
			} else if(node.has("NOTEQ")){
				str+=this.getKeyWord(node.get("NOTEQ").getValue(),node);
			}
			return str;
			},
		},
		{
		name:"encodeConditionComparison_Node15",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConditionComparison_Node6")){
				str+=this.getKeyWord("PRIOR");
			}
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			if(node.has("ConditionComparison_Node7")){
				str+=this.encodeNode("OuterJoinSign",node.get("ConditionComparison_Node7").get("OuterJoinSign"));
			}
			str+=this.encodeNode("ConditionComparison_Node9",node.get("ConditionComparison_Node9"));
			if(node.has("ConditionComparison_Node10")){
				str+=this.getKeyWord("PRIOR");
			}
			str+=this.encodeNode("ConditionComparison_Node13",node.get("ConditionComparison_Node13"));
			if(node.has("ConditionComparison_Node14")){
				str+=this.encodeNode("OuterJoinSign",node.get("ConditionComparison_Node14").get("OuterJoinSign"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionComparison_Node9",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionComparison_Node8",node.get("ConditionComparison_Node8"));
			return str;
			},
		},
		{
		name:"encodeConditionComparison_Node8",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("EQ")){
				str+=this.getKeyWord(node.get("EQ").getValue(),node);
			} else if(node.has("NOTEQ")){
				str+=this.getKeyWord(node.get("NOTEQ").getValue(),node);
			} else if(node.has("GTH")){
				str+=this.getKeyWord(node.get("GTH").getValue(),node);
			} else if(node.has("GEQ")){
				str+=this.getKeyWord(node.get("GEQ").getValue(),node);
			} else if(node.has("LTH")){
				str+=this.getKeyWord(node.get("LTH").getValue(),node);
			} else if(node.has("LEQ")){
				str+=this.getKeyWord(node.get("LEQ").getValue(),node);
			}
			return str;
			},
		},
		{
		name:"encodeConditionComparison_Node13",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionComparison_Node12",node.get("ConditionComparison_Node12"));
			return str;
			},
		},
		{
		name:"encodeConditionComparison_Node12",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SqlExpression")){
				str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			} else if(node.has("ConditionComparison_Node11")){
				str+=this.encodeNode("ConditionComparison_Node11",node.get("ConditionComparison_Node11"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionComparison_Node11",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("SelectCommand",node.get("SelectCommand"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeConditionGroupComparison",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionGroupComparison_Node19",node.get("ConditionGroupComparison_Node19"));
			return str;
			},
		},
		{
		name:"encodeConditionGroupComparison_Node19",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConditionGroupComparison_Node9")){
				str+=this.encodeNode("ConditionGroupComparison_Node9",node.get("ConditionGroupComparison_Node9"));
			} else if(node.has("ConditionGroupComparison_Node18")){
				str+=this.encodeNode("ConditionGroupComparison_Node18",node.get("ConditionGroupComparison_Node18"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionGroupComparison_Node9",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("SqlExpressions",node.get("SqlExpressions"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			str+=this.encodeNode("ConditionGroupComparison_Node2",node.get("ConditionGroupComparison_Node2"));
			str+=this.encodeNode("ConditionGroupComparison_Node6",node.get("ConditionGroupComparison_Node6"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("ConditionGroupComparison_Node8",node.get("ConditionGroupComparison_Node8"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeConditionGroupComparison_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionGroupComparison_Node1",node.get("ConditionGroupComparison_Node1"));
			return str;
			},
		},
		{
		name:"encodeConditionGroupComparison_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("EQ")){
				str+=this.getKeyWord(node.get("EQ").getValue(),node);
			} else if(node.has("NOTEQ")){
				str+=this.getKeyWord(node.get("NOTEQ").getValue(),node);
			}
			return str;
			},
		},
		{
		name:"encodeConditionGroupComparison_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionGroupComparison_Node5",node.get("ConditionGroupComparison_Node5"));
			return str;
			},
		},
		{
		name:"encodeConditionGroupComparison_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConditionGroupComparison_Node3")){
				str+=this.getKeyWord("ANY",node.get("ConditionGroupComparison_Node3"));
			} else if(node.has("SOME")){
				str+=this.getKeyWord("SOME",node.get("SOME"));
			} else if(node.has("ConditionGroupComparison_Node4")){
				str+=this.getKeyWord("ALL",node.get("ConditionGroupComparison_Node4"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionGroupComparison_Node8",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionGroupComparison_Node7",node.get("ConditionGroupComparison_Node7"));
			return str;
			},
		},
		{
		name:"encodeConditionGroupComparison_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("GroupingExpressionList")){
				str+=this.encodeNode("GroupingExpressionList",node.get("GroupingExpressionList"));
			} else if(node.has("SelectCommand")){
				str+=this.encodeNode("SelectCommand",node.get("SelectCommand"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionGroupComparison_Node18",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			str+=this.encodeNode("ConditionGroupComparison_Node11",node.get("ConditionGroupComparison_Node11"));
			str+=this.encodeNode("ConditionGroupComparison_Node15",node.get("ConditionGroupComparison_Node15"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("ConditionGroupComparison_Node17",node.get("ConditionGroupComparison_Node17"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeConditionGroupComparison_Node11",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionGroupComparison_Node10",node.get("ConditionGroupComparison_Node10"));
			return str;
			},
		},
		{
		name:"encodeConditionGroupComparison_Node10",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("EQ")){
				str+=this.getKeyWord(node.get("EQ").getValue(),node);
			} else if(node.has("NOTEQ")){
				str+=this.getKeyWord(node.get("NOTEQ").getValue(),node);
			} else if(node.has("GTH")){
				str+=this.getKeyWord(node.get("GTH").getValue(),node);
			} else if(node.has("GEQ")){
				str+=this.getKeyWord(node.get("GEQ").getValue(),node);
			} else if(node.has("LTH")){
				str+=this.getKeyWord(node.get("LTH").getValue(),node);
			} else if(node.has("LEQ")){
				str+=this.getKeyWord(node.get("LEQ").getValue(),node);
			}
			return str;
			},
		},
		{
		name:"encodeConditionGroupComparison_Node15",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionGroupComparison_Node14",node.get("ConditionGroupComparison_Node14"));
			return str;
			},
		},
		{
		name:"encodeConditionGroupComparison_Node14",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConditionGroupComparison_Node12")){
				str+=this.getKeyWord("ANY",node.get("ConditionGroupComparison_Node12"));
			} else if(node.has("SOME")){
				str+=this.getKeyWord("SOME",node.get("SOME"));
			} else if(node.has("ConditionGroupComparison_Node13")){
				str+=this.getKeyWord("ALL",node.get("ConditionGroupComparison_Node13"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionGroupComparison_Node17",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionGroupComparison_Node16",node.get("ConditionGroupComparison_Node16"));
			return str;
			},
		},
		{
		name:"encodeConditionGroupComparison_Node16",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SqlExpressions")){
				str+=this.encodeNode("SqlExpressions",node.get("SqlExpressions"));
			} else if(node.has("SelectCommand")){
				str+=this.encodeNode("SelectCommand",node.get("SelectCommand"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionIn",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionIn_Node9",node.get("ConditionIn_Node9"));
			return str;
			},
		},
		{
		name:"encodeConditionIn_Node9",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConditionIn_Node4")){
				str+=this.encodeNode("ConditionIn_Node4",node.get("ConditionIn_Node4"));
			} else if(node.has("ConditionIn_Node8")){
				str+=this.encodeNode("ConditionIn_Node8",node.get("ConditionIn_Node8"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionIn_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("SqlExpressions",node.get("SqlExpressions"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			if(node.has("ConditionIn_Node1")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.getKeyWord("IN");
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("ConditionIn_Node3",node.get("ConditionIn_Node3"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeConditionIn_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionIn_Node2",node.get("ConditionIn_Node2"));
			return str;
			},
		},
		{
		name:"encodeConditionIn_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("GroupingExpressionList")){
				str+=this.encodeNode("GroupingExpressionList",node.get("GroupingExpressionList"));
			} else if(node.has("SelectCommand")){
				str+=this.encodeNode("SelectCommand",node.get("SelectCommand"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionIn_Node8",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			if(node.has("ConditionIn_Node5")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.getKeyWord("IN");
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("ConditionIn_Node7",node.get("ConditionIn_Node7"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeConditionIn_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionIn_Node6",node.get("ConditionIn_Node6"));
			return str;
			},
		},
		{
		name:"encodeConditionIn_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ExpressionList")){
				str+=this.encodeNode("ExpressionList",node.get("ExpressionList"));
			} else if(node.has("SelectCommand")){
				str+=this.encodeNode("SelectCommand",node.get("SelectCommand"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionIsAny",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionIsAny_Node2",node.get("ConditionIsAny_Node2"));
			str+=this.getKeyWord("ANY");
			return str;
			},
		},
		{
		name:"encodeConditionIsAny_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConditionIsAny_Node1")){
				str+=this.encodeNode("ColumnName",node.get("ConditionIsAny_Node1").get("ColumnName"));
				str+=this.getKeyWord("IS");
			}
			return str;
			},
		},
		{
		name:"encodeConditionIsEmpty",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("NestedTableColumnName",node.get("NestedTableColumnName"));
			str+=this.getKeyWord("IS");
			if(node.has("ConditionIsEmpty_Node1")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.getKeyWord("EMPTY",node.get("EMPTY"));
			return str;
			},
		},
		{
		name:"encodeConditionIsOfType",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			str+=this.getKeyWord("IS");
			if(node.has("ConditionIsOfType_Node1")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.getKeyWord("OF");
			if(node.has("ConditionIsOfType_Node2")){
				str+=this.getKeyWord("TYPE",node.get("ConditionIsOfType_Node2").get("TYPE"));
			}
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("TypeName",node.get("TypeName"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeConditionIsOfTypeNames",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionIsOfTypeName",node.get("ConditionIsOfTypeName"));
			str+=this.encodeNode("ConditionIsOfTypeNames_Node1",node.get("ConditionIsOfTypeNames_Node1"));
			return str;
			},
		},
		{
		name:"encodeConditionIsOfTypeNames_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("ConditionIsOfTypeName",node.get("ConditionIsOfTypeName"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionIsOfTypeName",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConditionIsOfTypeName_Node1")){
				str+=this.getKeyWord("ONLY",node.get("ConditionIsOfTypeName_Node1").get("ONLY"));
			}
			str+=this.encodeNode("TypeName",node.get("TypeName"));
			return str;
			},
		},
		{
		name:"encodeConditionIsPresent",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("CellReference",node.get("CellReference"));
			str+=this.getKeyWord("IS");
			str+=this.getKeyWord("PRESENT",node.get("PRESENT"));
			return str;
			},
		},
		{
		name:"encodeConditionLike",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			if(node.has("ConditionLike_Node1")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.encodeNode("ConditionLike_Node4",node.get("ConditionLike_Node4"));
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			str+=this.encodeNode("ConditionLike_Node6",node.get("ConditionLike_Node6"));
			return str;
			},
		},
		{
		name:"encodeConditionLike_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConditionLike_Node3",node.get("ConditionLike_Node3"));
			return str;
			},
		},
		{
		name:"encodeConditionLike_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConditionLike_Node2")){
				str+=this.getKeyWord("LIKE",node.get("ConditionLike_Node2"));
			} else if(node.has("LIKEC")){
				str+=this.getKeyWord("LIKEC",node.get("LIKEC"));
			} else if(node.has("LIKE2")){
				str+=this.getKeyWord("LIKE2",node.get("LIKE2"));
			} else if(node.has("LIKE4")){
				str+=this.getKeyWord("LIKE4",node.get("LIKE4"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionLike_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConditionLike_Node5")){
				str+=this.getKeyWord("ESCAPE",node.get("ConditionLike_Node5").get("ESCAPE"));
				str+=this.encodeNode("SqlExpression",node.get("ConditionLike_Node5").get("SqlExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionMemeber",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			if(node.has("ConditionMemeber_Node1")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.getKeyWord("MEMBER",node.get("MEMBER"));
			if(node.has("ConditionMemeber_Node2")){
				str+=this.getKeyWord("OF");
			}
			str+=this.encodeNode("NestedTableColumnName",node.get("NestedTableColumnName"));
			return str;
			},
		},
		{
		name:"encodeConditionBetween",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			if(node.has("ConditionBetween_Node1")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.getKeyWord("BETWEEN");
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			str+=this.getKeyWord("AND");
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			return str;
			},
		},
		{
		name:"encodeConditionRegexpLike",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("REGEXP_LIKE",node.get("REGEXP_LIKE"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("CallParameters",node.get("CallParameters"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeConditionSubmultiset",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("NestedTableColumnName",node.get("NestedTableColumnName"));
			if(node.has("ConditionSubmultiset_Node1")){
				str+=this.getKeyWord("NOT");
			}
			str+=this.getKeyWord("SUBMULTISET",node.get("SUBMULTISET"));
			if(node.has("ConditionSubmultiset_Node2")){
				str+=this.getKeyWord("OF");
			}
			str+=this.encodeNode("NestedTableColumnName",node.get("NestedTableColumnName"));
			return str;
			},
		},
		{
		name:"encodeConditionEqualsPath",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("EQUALS_PATH",node.get("EQUALS_PATH"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("ColumnName",node.get("ColumnName"));
			str+=this.getKeyWord(node.get("COMMA").getValue(),node);
			str+=this.encodeNode("PathString",node.get("PathString"));
			str+=this.encodeNode("ConditionEqualsPath_Node2",node.get("ConditionEqualsPath_Node2"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeConditionEqualsPath_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConditionEqualsPath_Node1")){
				str+=this.getKeyWord(node.get("ConditionEqualsPath_Node1").get("COMMA").getValue(),node.get("ConditionEqualsPath_Node1"));
				str+=this.encodeNode("CorrelationInteger",node.get("ConditionEqualsPath_Node1").get("CorrelationInteger"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionUnderPath",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("UNDER_PATH",node.get("UNDER_PATH"));
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("ColumnName",node.get("ColumnName"));
			str+=this.encodeNode("ConditionUnderPath_Node2",node.get("ConditionUnderPath_Node2"));
			str+=this.getKeyWord(node.get("COMMA").getValue(),node);
			str+=this.encodeNode("PathString",node.get("PathString"));
			str+=this.encodeNode("ConditionUnderPath_Node4",node.get("ConditionUnderPath_Node4"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeConditionUnderPath_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConditionUnderPath_Node1")){
				str+=this.getKeyWord(node.get("ConditionUnderPath_Node1").get("COMMA").getValue(),node.get("ConditionUnderPath_Node1"));
				str+=this.encodeNode("Levels",node.get("ConditionUnderPath_Node1").get("Levels"));
			}
			return str;
			},
		},
		{
		name:"encodeConditionUnderPath_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConditionUnderPath_Node3")){
				str+=this.getKeyWord(node.get("ConditionUnderPath_Node3").get("COMMA").getValue(),node.get("ConditionUnderPath_Node3"));
				str+=this.encodeNode("CorrelationInteger",node.get("ConditionUnderPath_Node3").get("CorrelationInteger"));
			}
			return str;
			},
		},
		{
		name:"encodeLevels",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Integer",node.get("Integer"));
			return str;
			},
		},
		{
		name:"encodeCorrelationInteger",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Integer",node.get("Integer"));
			return str;
			},
		},
		{
		name:"encodePathString",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("QuotedString").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeGroupingExpressionList",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExpressionList",node.get("ExpressionList"));
			str+=this.encodeNode("GroupingExpressionList_Node1",node.get("GroupingExpressionList_Node1"));
			return str;
			},
		},
		{
		name:"encodeGroupingExpressionList_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("ExpressionList",node.get("ExpressionList"));
			}
			return str;
			},
		},
		{
		name:"encodeExpressionList",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExpressionList_Node2",node.get("ExpressionList_Node2"));
			return str;
			},
		},
		{
		name:"encodeExpressionList_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ExpressionList_Node1")){
				str+=this.encodeNode("ExpressionList_Node1",node.get("ExpressionList_Node1"));
			} else if(node.has("SqlExpressions")){
				str+=this.encodeNode("SqlExpressions",node.get("SqlExpressions"));
			}
			return str;
			},
		},
		{
		name:"encodeExpressionList_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("SqlExpressions",node.get("SqlExpressions"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeCellReference",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlIdentifier",node.get("SqlIdentifier"));
			return str;
			},
		},
		{
		name:"encodeCallParameters",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("CallParameter",node.get("CallParameter"));
			str+=this.encodeNode("CallParameters_Node1",node.get("CallParameters_Node1"));
			return str;
			},
		},
		{
		name:"encodeCallParameters_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("CallParameter",node.get("CallParameter"));
			}
			return str;
			},
		},
		{
		name:"encodeCallParameter",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("CallParameter_Node2",node.get("CallParameter_Node2"));
			str+=this.encodeNode("NestedExpression",node.get("NestedExpression"));
			return str;
			},
		},
		{
		name:"encodeCallParameter_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("CallParameter_Node1")){
				str+=this.encodeNode("ParameterName",node.get("CallParameter_Node1").get("ParameterName"));
				str+=this.getKeyWord(node.get("CallParameter_Node1").get("ARROW").getValue(),node.get("CallParameter_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeRelationalOp",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("RelationalOp_Node1",node.get("RelationalOp_Node1"));
			return str;
			},
		},
		{
		name:"encodeRelationalOp_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("EQ")){
				str+=this.getKeyWord(node.get("EQ").getValue(),node);
			} else if(node.has("LTH")){
				str+=this.getKeyWord(node.get("LTH").getValue(),node);
			} else if(node.has("GTH")){
				str+=this.getKeyWord(node.get("GTH").getValue(),node);
			} else if(node.has("NOTEQ")){
				str+=this.getKeyWord(node.get("NOTEQ").getValue(),node);
			} else if(node.has("LEQ")){
				str+=this.getKeyWord(node.get("LEQ").getValue(),node);
			} else if(node.has("GEQ")){
				str+=this.getKeyWord(node.get("GEQ").getValue(),node);
			}
			return str;
			},
		},
		{
		name:"encodeExpSet",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ExpSet_Node2",node.get("ExpSet_Node2"));
			return str;
			},
		},
		{
		name:"encodeExpSet_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ExpSet_Node1")){
				str+=this.encodeNode("ExpSet_Node1",node.get("ExpSet_Node1"));
			} else if(node.has("Subquery")){
				str+=this.encodeNode("Subquery",node.get("Subquery"));
			}
			return str;
			},
		},
		{
		name:"encodeExpSet_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			return str;
			},
		},
		{
		name:"encodeSubquery",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("SelectCommand",node.get("SelectCommand"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeConnectClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConnectClause_Node2",node.get("ConnectClause_Node2"));
			str+=this.getKeyWord("CONNECT");
			str+=this.getKeyWord("BY");
			str+=this.encodeNode("ConnectClause_Node6",node.get("ConnectClause_Node6"));
			str+=this.encodeNode("ConnectClause_Node14",node.get("ConnectClause_Node14"));
			str+=this.encodeNode("ConnectClause_Node16",node.get("ConnectClause_Node16"));
			return str;
			},
		},
		{
		name:"encodeConnectClause_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConnectClause_Node1")){
				str+=this.getKeyWord("START");
				str+=this.getKeyWord("WITH");
				str+=this.encodeNode("SqlCondition",node.get("ConnectClause_Node1").get("SqlCondition"));
			}
			return str;
			},
		},
		{
		name:"encodeConnectClause_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConnectClause_Node5",node.get("ConnectClause_Node5"));
			return str;
			},
		},
		{
		name:"encodeConnectClause_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConnectClause_Node3")){
				str+=this.encodeNode("ConnectClause_Node3",node.get("ConnectClause_Node3"));
			} else if(node.has("ConnectClause_Node4")){
				str+=this.encodeNode("ConnectClause_Node4",node.get("ConnectClause_Node4"));
			}
			return str;
			},
		},
		{
		name:"encodeConnectClause_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("PRIOR");
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			str+=this.encodeNode("RelationalOp",node.get("RelationalOp"));
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			return str;
			},
		},
		{
		name:"encodeConnectClause_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			str+=this.encodeNode("RelationalOp",node.get("RelationalOp"));
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			str+=this.getKeyWord("PRIOR");
			return str;
			},
		},
		{
		name:"encodeConnectClause_Node14",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ConnectClause_Node13",node.get("ConnectClause_Node13"));
			return str;
			},
		},
		{
		name:"encodeConnectClause_Node13",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConnectClause_Node8")){
				str+=this.encodeNode("ConnectClause_Node8",node.get("ConnectClause_Node8"));
			} else if(node.has("ConnectClause_Node12")){
				str+=this.encodeNode("ConnectClause_Node12",node.get("ConnectClause_Node12"));
			}
			return str;
			},
		},
		{
		name:"encodeConnectClause_Node8",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConnectClause_Node7")){
				str+=this.getKeyWord("PRIOR");
			}
			str+=this.encodeNode("SqlCondition",node.get("SqlCondition"));
			return str;
			},
		},
		{
		name:"encodeConnectClause_Node12",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			str+=this.encodeNode("RelationalOp",node.get("RelationalOp"));
			if(node.has("ConnectClause_Node9")){
				str+=this.getKeyWord("PRIOR");
			}
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			str+=this.encodeNode("ConnectClause_Node11",node.get("ConnectClause_Node11"));
			return str;
			},
		},
		{
		name:"encodeConnectClause_Node11",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConnectClause_Node10")){
				str+=this.getKeyWord("AND");
				str+=this.encodeNode("SqlCondition",node.get("ConnectClause_Node10").get("SqlCondition"));
			}
			return str;
			},
		},
		{
		name:"encodeConnectClause_Node16",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ConnectClause_Node15")){
				str+=this.getKeyWord("START");
				str+=this.getKeyWord("WITH");
				str+=this.encodeNode("SqlCondition",node.get("ConnectClause_Node15").get("SqlCondition"));
			}
			return str;
			},
		},
		{
		name:"encodeGroupClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("GROUP");
			str+=this.getKeyWord("BY");
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			str+=this.encodeNode("GroupClause_Node1",node.get("GroupClause_Node1"));
			str+=this.encodeNode("GroupClause_Node3",node.get("GroupClause_Node3"));
			return str;
			},
		},
		{
		name:"encodeGroupClause_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			}
			return str;
			},
		},
		{
		name:"encodeGroupClause_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("GroupClause_Node2")){
				str+=this.getKeyWord("HAVING");
				str+=this.encodeNode("SqlCondition",node.get("GroupClause_Node2").get("SqlCondition"));
			}
			return str;
			},
		},
		{
		name:"encodeSetClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SetClause_Node5",node.get("SetClause_Node5"));
			str+=this.encodeNode("SelectCommand",node.get("SelectCommand"));
			return str;
			},
		},
		{
		name:"encodeSetClause_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SetClause_Node4",node.get("SetClause_Node4"));
			return str;
			},
		},
		{
		name:"encodeSetClause_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SetClause_Node1")){
				str+=this.encodeNode("SetClause_Node1",node.get("SetClause_Node1"));
			} else if(node.has("SetClause_Node2")){
				str+=this.getKeyWord("INTERSECT",node.get("SetClause_Node2"));
			} else if(node.has("SetClause_Node3")){
				str+=this.getKeyWord("MINUS",node.get("SetClause_Node3"));
			}
			return str;
			},
		},
		{
		name:"encodeSetClause_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("UNION");
			str+=this.getKeyWord("ALL");
			return str;
			},
		},
		{
		name:"encodeOrderClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("ORDER");
			str+=this.getKeyWord("BY");
			str+=this.encodeNode("SortedDef",node.get("SortedDef"));
			str+=this.encodeNode("OrderClause_Node1",node.get("OrderClause_Node1"));
			return str;
			},
		},
		{
		name:"encodeOrderClause_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("SortedDef",node.get("SortedDef"));
			}
			return str;
			},
		},
		{
		name:"encodeSortedDef",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SortedDef_Node2",node.get("SortedDef_Node2"));
			str+=this.encodeNode("SortedDef_Node7",node.get("SortedDef_Node7"));
			return str;
			},
		},
		{
		name:"encodeSortedDef_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SortedDef_Node1",node.get("SortedDef_Node1"));
			return str;
			},
		},
		{
		name:"encodeSortedDef_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SqlExpression")){
				str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			} else if(node.has("NUMBER")){
				str+=this.getKeyWord(node.get("NUMBER").getValue(),node);
			}
			return str;
			},
		},
		{
		name:"encodeSortedDef_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SortedDef_Node6")){
				str+=this.encodeNode("SortedDef_Node5",node.get("SortedDef_Node6").get("SortedDef_Node5"));
			}
			return str;
			},
		},
		{
		name:"encodeSortedDef_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("SortedDef_Node3")){
				str+=this.getKeyWord("ASC",node.get("SortedDef_Node3"));
			} else if(node.has("SortedDef_Node4")){
				str+=this.getKeyWord("DESC",node.get("SortedDef_Node4"));
			}
			return str;
			},
		},
		{
		name:"encodeUpdateClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("FOR");
			str+=this.getKeyWord("UPDATE");
			str+=this.encodeNode("UpdateClause_Node3",node.get("UpdateClause_Node3"));
			if(node.has("UpdateClause_Node4")){
				str+=this.getKeyWord("NOWAIT");
			}
			return str;
			},
		},
		{
		name:"encodeUpdateClause_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("UpdateClause_Node2")){
				str+=this.getKeyWord("OF");
				str+=this.encodeNode("ColumnName",node.get("UpdateClause_Node2").get("ColumnName"));
				str+=this.encodeNode("UpdateClause_Node1",node.get("UpdateClause_Node2").get("UpdateClause_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeUpdateClause_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("ColumnName",node.get("ColumnName"));
			}
			return str;
			},
		},
		{
		name:"encodeInsertCommand",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("INSERT");
			str+=this.getKeyWord("INTO");
			str+=this.encodeNode("TableReferenceList",node.get("TableReferenceList"));
			str+=this.encodeNode("InsertCommand_Node2",node.get("InsertCommand_Node2"));
			str+=this.encodeNode("InsertCommand_Node5",node.get("InsertCommand_Node5"));
			if(node.has("InsertCommand_Node6")){
				str+=this.encodeNode("ReturningClause",node.get("InsertCommand_Node6").get("ReturningClause"));
			}
			return str;
			},
		},
		{
		name:"encodeInsertCommand_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("InsertCommand_Node1")){
				str+=this.getKeyWord(node.get("InsertCommand_Node1").get("LPAREN").getValue(),node.get("InsertCommand_Node1"));
				str+=this.encodeNode("ColumnSpecs",node.get("InsertCommand_Node1").get("ColumnSpecs"));
				str+=this.getKeyWord(node.get("InsertCommand_Node1").get("RPAREN").getValue(),node.get("InsertCommand_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeInsertCommand_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("InsertCommand_Node4",node.get("InsertCommand_Node4"));
			return str;
			},
		},
		{
		name:"encodeInsertCommand_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("InsertCommand_Node3")){
				str+=this.encodeNode("InsertCommand_Node3",node.get("InsertCommand_Node3"));
			} else if(node.has("SelectStatement")){
				str+=this.encodeNode("SelectStatement",node.get("SelectStatement"));
			}
			return str;
			},
		},
		{
		name:"encodeInsertCommand_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("VALUES");
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("PlsqlExpressions",node.get("PlsqlExpressions"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeUpdateCommand",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("UPDATE");
			str+=this.encodeNode("SelectedTable",node.get("SelectedTable"));
			str+=this.getKeyWord("SET");
			str+=this.encodeNode("UpdateCommand_Node2",node.get("UpdateCommand_Node2"));
			str+=this.encodeNode("UpdateCommand_Node7",node.get("UpdateCommand_Node7"));
			if(node.has("UpdateCommand_Node8")){
				str+=this.encodeNode("ReturningClause",node.get("UpdateCommand_Node8").get("ReturningClause"));
			}
			return str;
			},
		},
		{
		name:"encodeUpdateCommand_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("UpdateCommand_Node1",node.get("UpdateCommand_Node1"));
			return str;
			},
		},
		{
		name:"encodeUpdateCommand_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("UpdateNestedColumnSpecs")){
				str+=this.encodeNode("UpdateNestedColumnSpecs",node.get("UpdateNestedColumnSpecs"));
			} else if(node.has("UpdateColumnSpecs")){
				str+=this.encodeNode("UpdateColumnSpecs",node.get("UpdateColumnSpecs"));
			}
			return str;
			},
		},
		{
		name:"encodeUpdateCommand_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("UpdateCommand_Node6")){
				str+=this.getKeyWord("WHERE");
				str+=this.encodeNode("UpdateCommand_Node5",node.get("UpdateCommand_Node6").get("UpdateCommand_Node5"));
			}
			return str;
			},
		},
		{
		name:"encodeUpdateCommand_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("UpdateCommand_Node4",node.get("UpdateCommand_Node4"));
			return str;
			},
		},
		{
		name:"encodeUpdateCommand_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("UpdateCommand_Node3")){
				str+=this.encodeNode("UpdateCommand_Node3",node.get("UpdateCommand_Node3"));
			} else if(node.has("SqlCondition")){
				str+=this.encodeNode("SqlCondition",node.get("SqlCondition"));
			}
			return str;
			},
		},
		{
		name:"encodeUpdateCommand_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("CURRENT_OF",node.get("CURRENT_OF"));
			str+=this.encodeNode("CursorName",node.get("CursorName"));
			return str;
			},
		},
		{
		name:"encodeUpdateColumnSpecs",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("UpdateColumnSpec",node.get("UpdateColumnSpec"));
			str+=this.encodeNode("UpdateColumnSpecs_Node1",node.get("UpdateColumnSpecs_Node1"));
			return str;
			},
		},
		{
		name:"encodeUpdateColumnSpecs_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("UpdateColumnSpec",node.get("UpdateColumnSpec"));
			}
			return str;
			},
		},
		{
		name:"encodeUpdateColumnSpec",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ColumnSpec",node.get("ColumnSpec"));
			str+=this.getKeyWord(node.get("EQ").getValue(),node);
			str+=this.encodeNode("SqlExpression",node.get("SqlExpression"));
			return str;
			},
		},
		{
		name:"encodeUpdateNestedColumnSpecs",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("UpdateNestedColumnSpec",node.get("UpdateNestedColumnSpec"));
			str+=this.encodeNode("UpdateNestedColumnSpecs_Node1",node.get("UpdateNestedColumnSpecs_Node1"));
			return str;
			},
		},
		{
		name:"encodeUpdateNestedColumnSpecs_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			while(node.hasMoreChildren()){
				str+=this.getKeyWord(node.get("COMMA").getValue(),node);
				str+=this.encodeNode("UpdateNestedColumnSpec",node.get("UpdateNestedColumnSpec"));
			}
			return str;
			},
		},
		{
		name:"encodeUpdateNestedColumnSpec",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("LPAREN").getValue(),node);
			str+=this.encodeNode("ColumnSpecs",node.get("ColumnSpecs"));
			str+=this.getKeyWord(node.get("RPAREN").getValue(),node);
			str+=this.getKeyWord(node.get("EQ").getValue(),node);
			str+=this.encodeNode("Subquery",node.get("Subquery"));
			return str;
			},
		},
		{
		name:"encodeDeleteCommand",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("DELETE");
			if(node.has("DeleteCommand_Node1")){
				str+=this.getKeyWord("FROM");
			}
			str+=this.encodeNode("SelectedTable",node.get("SelectedTable"));
			str+=this.encodeNode("DeleteCommand_Node6",node.get("DeleteCommand_Node6"));
			if(node.has("DeleteCommand_Node7")){
				str+=this.encodeNode("ReturningClause",node.get("DeleteCommand_Node7").get("ReturningClause"));
			}
			return str;
			},
		},
		{
		name:"encodeDeleteCommand_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("DeleteCommand_Node5")){
				str+=this.getKeyWord("WHERE");
				str+=this.encodeNode("DeleteCommand_Node4",node.get("DeleteCommand_Node5").get("DeleteCommand_Node4"));
			}
			return str;
			},
		},
		{
		name:"encodeDeleteCommand_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("DeleteCommand_Node3",node.get("DeleteCommand_Node3"));
			return str;
			},
		},
		{
		name:"encodeDeleteCommand_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("DeleteCommand_Node2")){
				str+=this.encodeNode("DeleteCommand_Node2",node.get("DeleteCommand_Node2"));
			} else if(node.has("SqlCondition")){
				str+=this.encodeNode("SqlCondition",node.get("SqlCondition"));
			}
			return str;
			},
		},
		{
		name:"encodeDeleteCommand_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("CURRENT_OF",node.get("CURRENT_OF"));
			str+=this.encodeNode("CursorName",node.get("CursorName"));
			return str;
			},
		},
		{
		name:"encodeReturningClause",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ReturningClause_Node2",node.get("ReturningClause_Node2"));
			str+=this.encodeNode("SelectList",node.get("SelectList"));
			str+=this.encodeNode("ReturningClause_Node4",node.get("ReturningClause_Node4"));
			str+=this.getKeyWord("INTO");
			str+=this.encodeNode("Lvalues",node.get("Lvalues"));
			return str;
			},
		},
		{
		name:"encodeReturningClause_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ReturningClause_Node1",node.get("ReturningClause_Node1"));
			return str;
			},
		},
		{
		name:"encodeReturningClause_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("RETURN")){
				str+=this.getKeyWord("RETURN",node.get("RETURN"));
			} else if(node.has("RETURNING")){
				str+=this.getKeyWord("RETURNING",node.get("RETURNING"));
			}
			return str;
			},
		},
		{
		name:"encodeReturningClause_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ReturningClause_Node3")){
				str+=this.getKeyWord("BULK",node.get("ReturningClause_Node3").get("BULK"));
				str+=this.getKeyWord("COLLECT",node.get("ReturningClause_Node3").get("COLLECT"));
			}
			return str;
			},
		},
		{
		name:"encodeSetTransactionCommand",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("SET");
			str+=this.getKeyWord("TRANSACTION",node.get("TRANSACTION"));
			str+=this.getKeyWord("READ",node.get("READ"));
			str+=this.getKeyWord("ONLY",node.get("ONLY"));
			return str;
			},
		},
		{
		name:"encodeCloseStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("CLOSE",node.get("CLOSE"));
			str+=this.encodeNode("CursorName",node.get("CursorName"));
			return str;
			},
		},
		{
		name:"encodeFetchStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("FETCH");
			str+=this.encodeNode("CursorName",node.get("CursorName"));
			str+=this.getKeyWord("INTO");
			str+=this.encodeNode("FetchStatement_Node2",node.get("FetchStatement_Node2"));
			return str;
			},
		},
		{
		name:"encodeFetchStatement_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("FetchStatement_Node1",node.get("FetchStatement_Node1"));
			return str;
			},
		},
		{
		name:"encodeFetchStatement_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("VariableNames")){
				str+=this.encodeNode("VariableNames",node.get("VariableNames"));
			} else if(node.has("RecordName")){
				str+=this.encodeNode("RecordName",node.get("RecordName"));
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
			str+=this.encodeNode("TableReferenceList",node.get("TableReferenceList"));
			str+=this.getKeyWord("IN");
			str+=this.encodeNode("LockMode",node.get("LockMode"));
			str+=this.getKeyWord("MODE");
			if(node.has("LockTableStatement_Node1")){
				str+=this.getKeyWord("NOWAIT");
			}
			return str;
			},
		},
		{
		name:"encodeLockMode",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("LockMode_Node7",node.get("LockMode_Node7"));
			return str;
			},
		},
		{
		name:"encodeLockMode_Node7",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("LockMode_Node1")){
				str+=this.encodeNode("LockMode_Node1",node.get("LockMode_Node1"));
			} else if(node.has("LockMode_Node2")){
				str+=this.encodeNode("LockMode_Node2",node.get("LockMode_Node2"));
			} else if(node.has("LockMode_Node3")){
				str+=this.encodeNode("LockMode_Node3",node.get("LockMode_Node3"));
			} else if(node.has("LockMode_Node4")){
				str+=this.getKeyWord("SHARE",node.get("LockMode_Node4"));
			} else if(node.has("LockMode_Node5")){
				str+=this.encodeNode("LockMode_Node5",node.get("LockMode_Node5"));
			} else if(node.has("LockMode_Node6")){
				str+=this.getKeyWord("EXCLUSIVE",node.get("LockMode_Node6"));
			}
			return str;
			},
		},
		{
		name:"encodeLockMode_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("ROW");
			str+=this.getKeyWord("SHARE");
			return str;
			},
		},
		{
		name:"encodeLockMode_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("ROW");
			str+=this.getKeyWord("EXCLUSIVE");
			return str;
			},
		},
		{
		name:"encodeLockMode_Node3",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("SHARE");
			str+=this.getKeyWord("UPDATE");
			return str;
			},
		},
		{
		name:"encodeLockMode_Node5",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("SHARE");
			str+=this.getKeyWord("ROW");
			str+=this.getKeyWord("EXCLUSIVE");
			return str;
			},
		},
		{
		name:"encodeOpenStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("OPEN",node.get("OPEN"));
			str+=this.encodeNode("CursorName",node.get("CursorName"));
			str+=this.encodeNode("OpenStatement_Node2",node.get("OpenStatement_Node2"));
			return str;
			},
		},
		{
		name:"encodeOpenStatement_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("OpenStatement_Node1")){
				str+=this.getKeyWord(node.get("OpenStatement_Node1").get("LPAREN").getValue(),node.get("OpenStatement_Node1"));
				str+=this.encodeNode("PlsqlExpressions",node.get("OpenStatement_Node1").get("PlsqlExpressions"));
				str+=this.getKeyWord(node.get("OpenStatement_Node1").get("RPAREN").getValue(),node.get("OpenStatement_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeRollbackStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("ROLLBACK",node.get("ROLLBACK"));
			if(node.has("RollbackStatement_Node1")){
				str+=this.getKeyWord("WORK",node.get("RollbackStatement_Node1").get("WORK"));
			}
			str+=this.encodeNode("RollbackStatement_Node4",node.get("RollbackStatement_Node4"));
			str+=this.encodeNode("RollbackStatement_Node6",node.get("RollbackStatement_Node6"));
			return str;
			},
		},
		{
		name:"encodeRollbackStatement_Node4",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("RollbackStatement_Node3")){
				str+=this.getKeyWord("TO");
				if(node.get("RollbackStatement_Node3").has("RollbackStatement_Node2")){
					str+=this.getKeyWord("SAVEPOINT");
				}
				str+=this.encodeNode("SavepointName",node.get("RollbackStatement_Node3").get("SavepointName"));
			}
			return str;
			},
		},
		{
		name:"encodeRollbackStatement_Node6",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("RollbackStatement_Node5")){
				str+=this.getKeyWord("COMMENT");
				str+=this.getKeyWord(node.get("RollbackStatement_Node5").get("QuotedString").getValue(),node.get("RollbackStatement_Node5"));
			}
			return str;
			},
		},
		{
		name:"encodeSavepointStatement",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("SAVEPOINT");
			str+=this.encodeNode("SavepointName",node.get("SavepointName"));
			return str;
			},
		},
		{
		name:"encodeSavepointName",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Identifier",node.get("Identifier"));
			return str;
			},
		},
		{
		name:"encodeIdentifier",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Identifier_Node1",node.get("Identifier_Node1"));
			return str;
			},
		},
		{
		name:"encodeIdentifier_Node1",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("ID")){
				str+=this.getKeyWord(node.get("ID").getValue(),node);
			} else if(node.has("DoubleQuotedString")){
				str+=this.getKeyWord(node.get("DoubleQuotedString").getValue(),node.get("DoubleQuotedString"));
			}
			return str;
			},
		},
		{
		name:"encodeMatchString",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("QuotedString").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeSqlIdentifier",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("SqlIdentifier_Node2",node.get("SqlIdentifier_Node2"));
			return str;
			},
		},
		{
		name:"encodeSqlIdentifier_Node2",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Identifier")){
				str+=this.encodeNode("Identifier",node.get("Identifier"));
			} else if(node.has("SqlIdentifier_Node1")){
				str+=this.getKeyWord("ROWID",node.get("SqlIdentifier_Node1"));
			}
			return str;
			},
		},
		{
		name:"encodeTYPEATTR",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("%TYPE");
			return str;
			},
		},
		{
		name:"encodeROWTYPEATTR",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("%ROWTYPE");
			return str;
			},
		},
		{
		name:"encodeNOTFOUNDATTR",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("%NOTFOUND");
			return str;
			},
		},
		{
		name:"encodeFOUNDATTR",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("%FOUND");
			return str;
			},
		},
		{
		name:"encodeISOPENATTR",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("%ISOPEN");
			return str;
			},
		},
		{
		name:"encodeROWCOUNTATTR",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("%ROWCOUNT");
			return str;
			},
		},
		{
		name:"encodeBULKROWCOUNTATTR",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("%BULK_ROWCOUNT");
			return str;
			},
		},
		{
		name:"encodeCHARSETATTR",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord("%CHARSET");
			return str;
			},
		},
	],
}
