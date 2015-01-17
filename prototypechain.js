/*function Member(name){
	var privateCode  = "1111";
	this.name = name;
	this.getPrivateCode = function(){
		return this.name+privateCode;
	};
}

Member.prototype.expire = function(){
	this.expireed = true;
	this.level = 0;
};

function GoldeMember(level, name){
	this.name = name = name;
	this.level = level;
}

GoldeMember.prototype = new Member();
GoldeMember.prototype.constructor = GoldeMember;

var memberA = new GoldeMember(2, "jay");
var memberB = new GoldeMember(3, "tom");

console.log(memberA);
memberA.expire();
console.log(memberA);

console.log(memberB);
memberB.expire();
console.log(memberB);
*/
function Member(name){
	var privateCode  = "1111";
	this.name = name;
	this.getPrivateCode = function(){
		return this.name+privateCode;
	};
}

Member.prototype.expire = function(){
	this.expireed = true;
	this.level = 0;
};

function GoldeMember(level, name){
	Member.apply(this, [name]);
	this.level = level;
}

GoldeMember.prototype = new Member();
GoldeMember.prototype.constructor = GoldeMember;

var memberA = new GoldeMember(2, "jay");
var memberB = new GoldeMember(3, "tom");

console.log(memberA);
memberA.expire();
console.log(memberA);

console.log(memberB);
memberB.expire();
console.log(memberB);