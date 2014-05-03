{
	Name:"PLSQL Formatter",
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
			//";"===str ||
			":"===str ||
			".."===str ||
			//"."===str ||
			//","===str ||
			"**"===str ||
			"*"===str ||
			"@"===str ||
			//")"===str ||
			//"("===str ||
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
			//"."===str ||
			","===str ||
			"**"===str ||
			"*"===str ||
			"@"===str ||
			//")"===str ||
			//"("===str ||
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
		name:"encodeSeqOfStatements__Start",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.addLineBreak();
			return str;
			},
		},
		{
		name:"encodeSeqOfStatements__End",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.addLineBreak();
			return str;
			},
		},
		{
		name:"encodeStatement__Start",
		body:function(node){
			if(node==null) return "";
			var str='';
			this.tabCount++;
			str+=this.addLineBreak();
			return str;
			},
		},
		{
		name:"encodeStatement__End",
		body:function(node){
			if(node==null) return "";
			var str='';
			this.tabCount--;
			//str+=this.addLineBreak();
			return str;
			},
		},
		{
		name:"encodeProcedureBody_Node7__End",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.addLineBreak();
			return str;
			},
		},
		{
		name:"encodeDeclareSpec__End",
		body:function(node){
			if(node==null) return "";
			var str='';
			this.tabCount--;
			str+=this.addLineBreak();
			return str;
			},
		},
		{
		name:"encodeDeclareSpec__Start",
		body:function(node){
			if(node==null) return "";
			var str='';
			this.tabCount++;
			str+=this.addLineBreak();
			return str;
			},
		},
		{
		name:"encodeWhereClause__Start",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.addLineBreak();
			return str;
			},
		},
		{
		name:"encodeArgument__Start",
		body:function(node){
			if(node==null) return "";
			var str='';
			this.tabCount++;
			str+=this.addLineBreak();
			return str;
			},
		},
		{
		name:"encodeArgument__End",
		body:function(node){
			if(node==null) return "";
			var str='';
			this.tabCount--;
			return str;
			},
		},
				{
		name:"encodeSelectCommand__Start",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.addLineBreak();
			return str;
			},
		},
		{
		name:"encodeVariableName__End",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=" ";
			return str;
			},
		},
		{
		name:"encodeForUpdateClause__Start",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.addLineBreak();
			return str;
			},
		},
		{
		name:"encodeUpdateCommand_Node7__Start",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.addLineBreak();
			return str;
			},
		},
		{
		name:"encodeInsertCommand_Node3__Start",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.addLineBreak();
			return str;
			},
		},
		{
		name:"encodeExceptionHandler__Start",
		body:function(node){
			if(node==null) return "";
			var str='';
			this.tabCount++;
			str+=this.addLineBreak();
			return str;
			},
		},
		{
		name:"encodeExceptionHandler__End",
		body:function(node){
			if(node==null) return "";
			var str='';
			this.tabCount--;
			str+=this.addLineBreak();
			return str;
			},
		},
		{
		name:"encodeSimpleCaseExpression_Node1__Start",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.addLineBreak();
			return str;
			},
		},
		{
		name:"encodeCaseExpression__Start",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.addLineBreak();
			return str;
			},
		},
		{
		name:"encodeElseCaseExpression__Start",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.addLineBreak();
			return str;
			},
		},

  ]
}
