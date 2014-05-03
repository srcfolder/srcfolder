{
	Name:"JSON Transformation",
	Syntax:"JSON",
	Rules:[,
		{
		name:"spaceLeft",
		body:function(str){
			return "true"===str ||
			"false"===str ||
			"null"===str ||
			"{"===str ||
			"}"===str ||
			"["===str ||
			"]"===str ||
			","===str ||
			":"===str ||
			"."===str ||
			"+"===str ||
			"-"===str ||
			false;
			},
		},
		{
		name:"spaceRight",
		body:function(str){
			return "true"===str ||
			"false"===str ||
			"null"===str ||
			"{"===str ||
			"}"===str ||
			"["===str ||
			"]"===str ||
			","===str ||
			":"===str ||
			"."===str ||
			"+"===str ||
			"-"===str ||
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
		name:"encodeCompilationUnit",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Object")){
				str+=this.encodeNode("Object",node.get("Object"));
			} else if(node.has("Array")){
				str+=this.encodeNode("Array",node.get("Array"));
			}
			return str;
			},
		},
		{
		name:"encodeObject",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("OPENBRACE").getValue(),node);
			if(node.has("ObjectMembers")){
				str+=this.encodeNode("Members",node.get("ObjectMembers").get("Members"));
			}
			str+=this.getKeyWord(node.get("CLOSEBRACE").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeMembers",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Pair",node.get("Pair"));
			if(node.has("MembersMore")){
				str+=this.getKeyWord(node.get("MembersMore").get("MembersCOMMA").getValue(),node.get("MembersMore"));
				str+=this.encodeNode("MembersMoreMembers",node.get("MembersMore").get("MembersMoreMembers"));
			}
			return str;
			},
		},
		{
		name:"encodeMembersMoreMembers",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Members",node.get("Members"));
			return str;
			},
		},
		{
		name:"encodePair",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("PairName").getValue(),node);
			str+=this.getKeyWord(node.get("PairOpt").getValue(),node);
			str+=this.encodeNode("PairValue",node.get("PairValue"));
			return str;
			},
		},
		{
		name:"encodePairValue",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Value",node.get("Value"));
			return str;
			},
		},
		{
		name:"encodeArray",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.getKeyWord(node.get("OPENBRACKET").getValue(),node);
			if(node.has("ArrayElements")){
				str+=this.encodeNode("Elements",node.get("ArrayElements").get("Elements"));
			}
			str+=this.getKeyWord(node.get("CLOSEBRACKET").getValue(),node);
			return str;
			},
		},
		{
		name:"encodeElements",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("ElementsValue",node.get("ElementsValue"));
			if(node.has("ElementsMore")){
				str+=this.getKeyWord(node.get("ElementsMore").get("ElementsCOMMA").getValue(),node.get("ElementsMore"));
				str+=this.encodeNode("ElementsMoreElements",node.get("ElementsMore").get("ElementsMoreElements"));
			}
			return str;
			},
		},
		{
		name:"encodeElementsValue",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Value",node.get("Value"));
			return str;
			},
		},
		{
		name:"encodeElementsMoreElements",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeNode("Elements",node.get("Elements"));
			return str;
			},
		},
		{
		name:"encodeValue",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Object")){
				str+=this.encodeNode("Object",node.get("Object"));
			} else if(node.has("Array")){
				str+=this.encodeNode("Array",node.get("Array"));
			} else if(node.has("ValueString")){
				str+=this.getKeyWord(node.get("ValueString").getValue(),node.get("ValueString"));
			} else if(node.has("ValueNumber")){
				str+=this.getKeyWord(node.get("ValueNumber").getValue(),node.get("ValueNumber"));
			} else if(node.has("ValueTrue")){
				str+=this.getKeyWord(node.get("ValueTrue").getValue(),node.get("ValueTrue"));
			} else if(node.has("ValueFalse")){
				str+=this.getKeyWord(node.get("ValueFalse").getValue(),node.get("ValueFalse"));
			} else if(node.has("ValueNull")){
				str+=this.getKeyWord(node.get("ValueNull").getValue(),node.get("ValueNull"));
			}
			return str;
			},
		},
	],
}
