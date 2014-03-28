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
		name:"encodeCompilationUnit",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Object")){
				str+=this.encodeObject(node.get("Object"));
			} else if(node.has("Array")){
				str+=this.encodeArray(node.get("Array"));
			}
			return str;
			},
		},
		{
		name:"encodeObject",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=node.get("OPENBRACE").getValue();
			this.tabCount++;
			str+=this.addLineBreak();
			if(node.has("ObjectMembers")){
				str+=this.encodeMembers(node.get("ObjectMembers").get("Members"));
			}
			this.tabCount--;
			str+=this.addLineBreak();
			str+=node.get("CLOSEBRACE").getValue();
			return str;
			},
		},
		{
		name:"encodeMembers",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodePair(node.get("Pair"));
			if(node.has("MembersMore")){
				str+=node.get("MembersMore").get("MembersCOMMA").getValue();
				str+=this.encodeMembersMoreMembers(node.get("MembersMore").get("MembersMoreMembers"));
			}
			return str;
			},
		},
		{
		name:"encodeMembersMoreMembers",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeMembers(node.get("Members"));
			return str;
			},
		},
		{
		name:"encodePair",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=node.get("PairName").getValue();
			str+=node.get("PairOpt").getValue();
			str+=this.encodePairValue(node.get("PairValue"));
			return str;
			},
		},
		{
		name:"encodePairValue",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeValue(node.get("Value"));
			return str;
			},
		},
		{
		name:"encodeArray",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=node.get("OPENBRACKET").getValue();
			this.tabCount++;
			str+=this.addLineBreak();
			if(node.has("ArrayElements")){
				str+=this.encodeElements(node.get("ArrayElements").get("Elements"));
			}
			this.tabCount--;
			str+=this.addLineBreak();
			str+=node.get("CLOSEBRACKET").getValue();
			return str;
			},
		},
		{
		name:"encodeElements",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeElementsValue(node.get("ElementsValue"));
			if(node.has("ElementsMore")){
				str+=node.get("ElementsMore").get("ElementsCOMMA").getValue();
				str+=this.addLineBreak();
				str+=this.encodeElementsMoreElements(node.get("ElementsMore").get("ElementsMoreElements"));
			}
			return str;
			},
		},
		{
		name:"encodeElementsValue",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeValue(node.get("Value"));
			return str;
			},
		},
		{
		name:"encodeElementsMoreElements",
		body:function(node){
			if(node==null) return "";
			var str='';
			str+=this.encodeElements(node.get("Elements"));
			return str;
			},
		},
		{
		name:"encodeValue",
		body:function(node){
			if(node==null) return "";
			var str='';
			if(node.has("Object")){
				str+=this.encodeObject(node.get("Object"));
			} else if(node.has("Array")){
				str+=this.encodeArray(node.get("Array"));
			} else if(node.has("ValueString")){
				str+=node.get("ValueString").getValue();
			} else if(node.has("ValueNumber")){
				str+=node.get("ValueNumber").getValue();
			} else if(node.has("ValueTrue")){
				str+=node.get("ValueTrue").getValue();
			} else if(node.has("ValueFalse")){
				str+=node.get("ValueFalse").getValue();
			} else if(node.has("ValueNull")){
				str+=node.get("ValueNull").getValue();
			}
			return str;
			},
		},
	],
}
